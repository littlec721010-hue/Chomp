import {forwardRef,useEffect,useImperativeHandle,useRef} from 'react';
import type {ReceiptCameraHandle,ReceiptCameraProps} from './ReceiptCamera';
export const ReceiptCamera=forwardRef<ReceiptCameraHandle,ReceiptCameraProps>(function ReceiptCamera({onError,onReady},ref){
  const video=useRef<HTMLVideoElement>(null);
  const callbacks=useRef({onError,onReady});callbacks.current={onError,onReady};
  useImperativeHandle(ref,()=>({capture(){
    const element=video.current;
    if(!element||element.readyState<2||!element.videoWidth||!element.videoHeight)return;
    const canvas=document.createElement('canvas');
    const scale=Math.min(1,2000/Math.max(element.videoWidth,element.videoHeight));
    canvas.width=Math.round(element.videoWidth*scale);canvas.height=Math.round(element.videoHeight*scale);
    const context=canvas.getContext('2d');if(!context)return;
    context.drawImage(element,0,0,canvas.width,canvas.height);
    return canvas.toDataURL('image/jpeg',.92);
  }}),[]);
  useEffect(()=>{
    let disposed=false,stream:MediaStream|undefined;
    async function start(){
      try{
        if(!navigator.mediaDevices?.getUserMedia)throw new Error('unsupported');
        const next=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:{ideal:'environment'},width:{ideal:1920},height:{ideal:2560}}});
        if(disposed){next.getTracks().forEach(track=>track.stop());return;}
        stream=next;
        if(video.current){video.current.srcObject=stream;await video.current.play();}
      }catch{if(!disposed){stream?.getTracks().forEach(track=>track.stop());callbacks.current.onError('Unable to open the camera. Allow camera access in your browser, or choose a receipt using Photos.');}}
    }
    void start();
    return()=>{disposed=true;stream?.getTracks().forEach(track=>track.stop());};
  },[]);
  return <video ref={video} autoPlay playsInline muted aria-label="Live receipt camera preview" onLoadedData={()=>callbacks.current.onReady()} style={{position:'absolute',left:14,top:7,width:305,height:476,objectFit:'contain',backgroundColor:'#211a13'}}/>;
});
