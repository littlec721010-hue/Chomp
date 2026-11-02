import type { SplitReceipt } from './model';
export async function recognizeReceipt(_uri:string,_signal:AbortSignal,_progress:(value:number)=>void):Promise<SplitReceipt> {
  throw new Error('Receipt recognition is available in the Web Beta. Use manual entry on this platform.');
}
