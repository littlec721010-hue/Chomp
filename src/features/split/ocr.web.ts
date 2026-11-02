import { createWorker } from 'tesseract.js';
import { parseReceiptText } from './ocr-parser';

async function prepareImage(blob:Blob):Promise<HTMLCanvasElement>{
  const url=URL.createObjectURL(blob);
  try{
    const image=new Image();image.src=url;await image.decode();
    const scale=Math.min(3,2400/image.naturalWidth,4800/image.naturalHeight);
    const canvas=document.createElement('canvas');canvas.width=Math.round(image.naturalWidth*scale);canvas.height=Math.round(image.naturalHeight*scale);
    const context=canvas.getContext('2d');if(!context)throw new Error('Image processing unavailable.');
    context.drawImage(image,0,0,canvas.width,canvas.height);
    const pixels=context.getImageData(0,0,canvas.width,canvas.height);
    for(let i=0;i<pixels.data.length;i+=4){
      const gray=.299*pixels.data[i]+.587*pixels.data[i+1]+.114*pixels.data[i+2];
      const value=Math.max(0,Math.min(255,(gray-128)*1.35+128));
      pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=value;
    }
    context.putImageData(pixels,0,0);return canvas;
  }finally{URL.revokeObjectURL(url);}
}

export async function recognizeReceipt(uri:string,signal:AbortSignal,progress:(value:number)=>void) {
  let worker:Awaited<ReturnType<typeof createWorker>>|undefined;
  let stopped=false,rejectStop:(error:Error)=>void=()=>{};
  const cancelled=new Promise<never>((_,reject)=>{rejectStop=reject;});
  const stop=()=>{stopped=true;rejectStop(new Error('Recognition cancelled.'));void worker?.terminate();};
  const timer=setTimeout(()=>{stopped=true;rejectStop(new Error('Recognition timed out. Try a smaller, clearer photo.'));void worker?.terminate();},90000);
  signal.addEventListener('abort',stop,{once:true});
  try {
    if(signal.aborted)throw new Error('Recognition cancelled.');
    return await Promise.race([cancelled,(async()=>{
      const response=await fetch(uri,{signal});const blob=await response.blob();
      if(blob.size>10*1024*1024)throw new Error('Choose a receipt image smaller than 10 MB.');
      if(!blob.type.startsWith('image/'))throw new Error('Choose an image, not a PDF or another file type.');
      worker=await createWorker('eng',1,{logger:m=>{if(!stopped&&m.status==='recognizing text')progress(m.progress);},errorHandler:()=>{}});
      if(stopped||signal.aborted){await worker.terminate();throw new Error('Recognition cancelled.');}
      const image=await prepareImage(blob);
      // Receipt columns need a uniform text block rather than automatic page segmentation.
      await worker.setParameters({tessedit_pageseg_mode:'6' as import('tesseract.js').PSM,preserve_interword_spaces:'1'});
      const {data}=await worker.recognize(image);
      if(stopped||signal.aborted)throw new Error('Recognition cancelled.');
      const hex=async(bytes:BufferSource)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(b=>b.toString(16).padStart(2,'0')).join('');
      const [scanImageHash,scanTextHash]=await Promise.all([hex(await blob.arrayBuffer()),hex(new TextEncoder().encode(data.text.toLowerCase().replace(/\s+/g,' ').trim()))]);
      return {...parseReceiptText(data.text),scanImageHash,scanTextHash};
    })()]);
  } finally {clearTimeout(timer);signal.removeEventListener('abort',stop);await worker?.terminate();}
}
