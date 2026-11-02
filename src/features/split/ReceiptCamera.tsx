import {forwardRef} from 'react';
export type ReceiptCameraHandle={capture:()=>string|undefined};
export type ReceiptCameraProps={onError:(message:string)=>void;onReady:()=>void};
// Native builds retain the platform photo picker; the inline preview is Web-only.
export const ReceiptCamera=forwardRef<ReceiptCameraHandle,ReceiptCameraProps>(()=>null);
