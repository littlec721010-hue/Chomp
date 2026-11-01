import type { ReceiptItem } from '../../types'
export interface SplitReceipt {
  id: string; restaurantName: string; date: string; guestCount: number | null
  items: ReceiptItem[]; taxRate: number; tipRate: number
  importedTipCents?: number; importedTaxCents?: number; source: 'sample' | 'manual' | 'ocr'; edited?: boolean
  scanImageHash?:string; scanTextHash?:string; tipMode?: 'fixed' | 'percent'; printedTotalCents?: number; reviewNotes?: string[]; time?: string
}
export const sampleReceipt: SplitReceipt = {
  id:'oishii',restaurantName:'Oishii Ramen & Izakaya',date:'2026-09-26',guestCount:4,
  taxRate:9,tipRate:18,importedTipCents:1800,source:'sample',
  items:[
    {id:'edamame',name:'Edamame (Steamed)',quantity:2,unitPriceCents:550},
    {id:'gyoza',name:'Crispy Pork Gyoza',quantity:1,unitPriceCents:850},
    {id:'tofu',name:'Tofu Scallion Skewers',quantity:1,unitPriceCents:700},
    {id:'spicy',name:'Spicy Tonkotsu Ramen',quantity:1,unitPriceCents:1600},
    {id:'vegan',name:'Vegan Mushroom Ramen',quantity:1,unitPriceCents:1750},
    {id:'chicken',name:'GF Chicken Shio Ramen',quantity:1,unitPriceCents:1700},
    {id:'classic',name:'Tonkotsu Classic',quantity:1,unitPriceCents:1550},
    {id:'tea',name:'Green Tea Pitcher',quantity:1,unitPriceCents:800},
  ],
}
export const taqueriaReceipt: SplitReceipt = {
  id:'taqueria',restaurantName:'Taqueria Lunch',date:'2026-09-24',guestCount:3,
  taxRate:9,tipRate:0,source:'manual',items:[{id:'lunch',name:'Lunch',quantity:1,unitPriceCents:4422}],
}
export const cloneReceipt=(receipt:SplitReceipt):SplitReceipt=>({...receipt,items:receipt.items.map(item=>({...item})),...(receipt.reviewNotes?{reviewNotes:[...receipt.reviewNotes]}:{})})
export function emptyReceipt():SplitReceipt {return {id:`receipt-${Date.now()}-${Math.random().toString(36).slice(2,12)}`,restaurantName:'Your restaurant',date:new Date().toISOString().slice(0,10),guestCount:4,items:[],taxRate:9,tipRate:18,source:'manual'}}
export function calculateReceipt(receipt:SplitReceipt) {
  if(receipt.guestCount!==null&&(!Number.isInteger(receipt.guestCount)||receipt.guestCount<1||receipt.guestCount>100))throw new Error('Guest count must be between 1 and 100.')
  for(const item of receipt.items)if(!Number.isInteger(item.quantity)||item.quantity<1||!Number.isInteger(item.unitPriceCents)||item.unitPriceCents<0)throw new Error('Invalid receipt item.')
  if([receipt.taxRate,receipt.tipRate].some(rate=>!Number.isFinite(rate)||rate<0||rate>100))throw new Error('Rates must be between 0 and 100.')
  if(receipt.tipMode==='fixed'&&receipt.importedTipCents===undefined)throw new Error('Enter the fixed tip amount.');
  if(receipt.tipMode!==undefined&&!['fixed','percent'].includes(receipt.tipMode))throw new Error('Invalid tip unit.');
  const subtotalCents=receipt.items.reduce((sum,item)=>sum+item.quantity*item.unitPriceCents,0)
  const taxCents=receipt.importedTaxCents??Math.round(subtotalCents*Math.round(receipt.taxRate*1000)/100000)
  // Preserve the amount printed on an imported receipt. Editing prices or rates recomputes it.
  const tipCents=receipt.importedTipCents??Math.round(subtotalCents*Math.round(receipt.tipRate*1000)/100000)
  if(![subtotalCents,taxCents,tipCents].every(n=>Number.isSafeInteger(n)&&n>=0&&n<=999999999))throw new Error('Receipt amounts are outside the supported range.')
  const totalCents=subtotalCents+taxCents+tipCents
  const count=receipt.guestCount;
  const base=count===null?0:Math.floor(totalCents/count),remainder=count===null?0:totalCents%count
  const guestSharesCents=Array.from({length:count??0},(_,i)=>base+(i<remainder?1:0))
  return {subtotalCents,taxCents,tipCents,totalCents,guestSharesCents}
}
export function parsePrice(value:string):number|null {
  if(!/^\d{1,6}(\.\d{1,2})?$/.test(value.trim()))return null
  return Math.round(Number(value)*100)
}
export const money=(cents:number)=>`$${(cents/100).toFixed(2)}`

/** Percentages can have three decimals (for example the V3 8.875% preset). */
export function parseRate(value:string):number|null {
  const input=value.trim();
  if(!/^\d{1,3}(\.\d{1,3})?$/.test(input))return null;
  const rate=Number(input);return rate<=100?rate:null;
}
export function validReceiptDate(value:string):boolean {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
  const date=new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime())&&date.toISOString().slice(0,10)===value;
}
export function receiptItem(name:string,price:string,quantity:number,id:string) {
  const cents=parsePrice(price);
  if(!name.trim()||name.trim().length>100||cents===null||!Number.isInteger(quantity)||quantity<1||quantity>100)throw new Error('Enter an item name, a price with up to two decimals, and quantity 1–100.');
  return {id,name:name.trim(),unitPriceCents:cents,quantity};
}

/** Reject corrupt/untrusted saved payloads instead of substituting sample history. */
export function validateReceipt(value:unknown):asserts value is SplitReceipt {
  if(!value||typeof value!=='object')throw new Error('Invalid saved receipt.');
  const r=value as SplitReceipt;
  if(r.time!==undefined&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(r.time))throw new Error('Enter a valid receipt time (HH:mm).');
  if(r.guestCount===null)throw new Error('Enter the number of diners before saving.');
  if(typeof r.id!=='string'||!r.id||r.id.length>120||typeof r.restaurantName!=='string'||!r.restaurantName.trim()||r.restaurantName.length>100||!validReceiptDate(r.date)||!['sample','manual','ocr'].includes(r.source)||!Array.isArray(r.items)||r.items.length<1||r.items.length>200)throw new Error('Complete the restaurant, date and 1–200 items before saving.');
  if(new Set(r.items.map(i=>i.id)).size!==r.items.length)throw new Error('Receipt items must have unique IDs.');
  for(const i of r.items)if(typeof i.id!=='string'||!i.id||i.id.length>120||typeof i.name!=='string'||!i.name.trim()||i.name.length>100||i.quantity>100||i.unitPriceCents>99999999)throw new Error('Invalid receipt item.');
  if(r.printedTotalCents!==undefined&&(!Number.isSafeInteger(r.printedTotalCents)||r.printedTotalCents<0))throw new Error('Invalid printed total.');
  if(r.reviewNotes!==undefined&&(!Array.isArray(r.reviewNotes)||r.reviewNotes.length>20||r.reviewNotes.some(n=>typeof n!=='string'||n.length>500)))throw new Error('Invalid receipt review notes.');
  calculateReceipt(r);
}
