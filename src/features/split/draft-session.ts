import { validateReceipt, type SplitReceipt } from './model';

export interface DraftStorage { getItem(key:string):string|null; setItem(key:string,value:string):void }
export type DraftSession={draft:SplitReceipt;manualEntry:{name:string;price:string;quantity:number;editId:string|null};forms:Record<string,unknown>};
const lifetime=24*60*60*1000;
const key=(owner:string)=>`chomp:bill-draft:v1:${owner}`;
export function readDraftSession(storage:DraftStorage|undefined,owner:string|undefined,now=Date.now()):DraftSession|null {
  if(!storage||!owner)return null;
  try{
    const raw=storage.getItem(key(owner));if(!raw||raw.length>500000)return null;
    const data=JSON.parse(raw);
    if(data.version!==1||data.owner!==owner||!Number.isFinite(data.savedAt)||now-data.savedAt>lifetime||data.savedAt>now+60000)return null;
    const r=data.draft;
    // Incomplete setup and OCR metadata are legitimate drafts, never saved bills.
    validateReceipt({...r,restaurantName:r.restaurantName||'Draft',date:'2000-01-01',guestCount:r.guestCount??1,
      items:r.items?.length?r.items:[{id:'draft-placeholder',name:'Draft',quantity:1,unitPriceCents:0}]});
    if(typeof r.date!=='string'||r.date.length>10||!Array.isArray(r.items))return null;
    const m=data.manualEntry;
    if(!m||typeof m.name!=='string'||m.name.length>100||typeof m.price!=='string'||m.price.length>40||!Number.isInteger(m.quantity)||m.quantity<1||m.quantity>100||(m.editId!==null&&typeof m.editId!=='string'))return null;
    if(!data.forms||typeof data.forms!=='object'||Array.isArray(data.forms))return null;
    return {draft:r,manualEntry:m,forms:data.forms};
  }catch{return null}
}
export function writeDraftSession(storage:DraftStorage|undefined,owner:string|undefined,data:DraftSession,now=Date.now()):boolean {
  if(!storage||!owner)return false;
  try{const raw=JSON.stringify({version:1,owner,savedAt:now,...data});if(raw.length>500000)return false;storage.setItem(key(owner),raw);return true}catch{return false}
}
