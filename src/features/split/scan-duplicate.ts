import type { SplitReceipt } from './model';
export function scanHashes(receipt:SplitReceipt) {
  return (['scanImageHash','scanTextHash'] as const).filter(key=>/^[a-f0-9]{64}$/.test(receipt[key]??''));
}
export function sameScan(a:SplitReceipt,b:SplitReceipt) {
  return a.source==='ocr'&&b.source==='ocr'&&scanHashes(a).some(key=>a[key]===b[key]);
}
