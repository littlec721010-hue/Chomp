/** Center crop shared by the portrait preview and captured OCR image. */
export function portraitCameraCrop(width:number,height:number) {
  if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0)throw new Error('Camera is not ready.');
  const aspect=305/476;
  const cropWidth=Math.min(width,height*aspect),cropHeight=cropWidth/aspect;
  return {x:(width-cropWidth)/2,y:(height-cropHeight)/2,width:cropWidth,height:cropHeight};
}
