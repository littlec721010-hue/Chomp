import { requireSupabase } from '../../lib/supabase';
import { validateReceipt, type SplitReceipt } from './model';

export async function loadReceipts(userId:string):Promise<SplitReceipt[]> {
  const {data,error}=await requireSupabase().from('split_receipts').select('receipt_id,receipt').eq('user_id',userId).order('updated_at',{ascending:false}).limit(100);
  if(error)throw error;
  return (data??[]).map(row=>{validateReceipt(row.receipt);if(row.receipt.id!==row.receipt_id)throw new Error('Saved receipt ID mismatch.');return row.receipt;});
}
export async function saveReceipt(userId:string,receipt:SplitReceipt) {
  validateReceipt(receipt);
  if(receipt.source==='sample')throw new Error('Sample receipts cannot be saved to a real account.');
  const {data,error}=await requireSupabase().from('split_receipts').upsert({user_id:userId,receipt_id:receipt.id,receipt},{onConflict:'user_id,receipt_id'}).select('receipt_id').single();
  if(error)throw error;
  if(data?.receipt_id!==receipt.id)throw new Error('Receipt save was not confirmed. Please retry.');
}
