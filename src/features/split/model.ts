import type { ReceiptItem } from '../../types'
export interface SplitReceipt {
  id: string; restaurantName: string; date: string; guestCount: number
  items: ReceiptItem[]; taxRate: number; tipRate: number
  importedTipCents?: number; source: 'sample' | 'manual'; edited?: boolean
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
export const cloneReceipt=(receipt:SplitReceipt):SplitReceipt=>({...receipt,items:receipt.items.map(item=>({...item}))})
export function emptyReceipt():SplitReceipt {return {id:`receipt-${Date.now()}`,restaurantName:'Your restaurant',date:new Date().toISOString().slice(0,10),guestCount:4,items:[],taxRate:9,tipRate:18,source:'manual'}}
export function calculateReceipt(receipt:SplitReceipt) {
  if(!Number.isInteger(receipt.guestCount)||receipt.guestCount<1||receipt.guestCount>100)throw new Error('Guest count must be between 1 and 100.')
  for(const item of receipt.items)if(!Number.isInteger(item.quantity)||item.quantity<1||!Number.isInteger(item.unitPriceCents)||item.unitPriceCents<0)throw new Error('Invalid receipt item.')
  if([receipt.taxRate,receipt.tipRate].some(rate=>!Number.isFinite(rate)||rate<0||rate>100))throw new Error('Rates must be between 0 and 100.')
  const subtotalCents=receipt.items.reduce((sum,item)=>sum+item.quantity*item.unitPriceCents,0)
  const taxCents=Math.round(subtotalCents*receipt.taxRate/100)
  // Preserve the amount printed on an imported receipt. Editing prices or rates recomputes it.
  const tipCents=receipt.importedTipCents??Math.round(subtotalCents*receipt.tipRate/100)
  const totalCents=subtotalCents+taxCents+tipCents
  const base=Math.floor(totalCents/receipt.guestCount),remainder=totalCents%receipt.guestCount
  const guestSharesCents=Array.from({length:receipt.guestCount},(_,i)=>base+(i<remainder?1:0))
  return {subtotalCents,taxCents,tipCents,totalCents,guestSharesCents}
}
export function parsePrice(value:string):number|null {
  if(!/^\d{1,6}(\.\d{1,2})?$/.test(value.trim()))return null
  return Math.round(Number(value)*100)
}
export const money=(cents:number)=>`$${(cents/100).toFixed(2)}`
