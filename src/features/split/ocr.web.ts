import { createWorker } from 'tesseract.js';
import { parseReceiptText } from './ocr-parser';

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
      const {data}=await worker.recognize(blob);
      if(stopped||signal.aborted)throw new Error('Recognition cancelled.');
      return parseReceiptText(data.text);
    })()]);
  } finally {clearTimeout(timer);signal.removeEventListener('abort',stop);await worker?.terminate();}
}
