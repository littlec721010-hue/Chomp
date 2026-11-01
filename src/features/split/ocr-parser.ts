import { emptyReceipt, parsePrice, type SplitReceipt } from './model';

/** Conservative English/USD parser. Text without a clear price is never invented. */
export function parseReceiptText(text:string):SplitReceipt {
  const lines=text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  if(!lines.length)throw new Error('No readable text found. Try a clearer photo or create the bill manually.');
  const receipt:SplitReceipt={...emptyReceipt(),source:'ocr',taxRate:0,tipRate:0,items:[],reviewNotes:[
    'OCR is a draft. Check every item, quantity, price, date and diner count before confirming.',
    'Prices at the end of item lines are treated as line totals; verify quantities and unit prices.',
  ]};
  receipt.restaurantName=lines.find(s=>/[a-z]/i.test(s)&&!/[\d$]/.test(s)&&s.length<=80&&!/^(?:tax\s+invoice|receipt|invoice|welcome\b|thank\s+you\b)/i.test(s))?.slice(0,100)??'Receipt — enter restaurant name';
  let subtotal:number|undefined,unparsed=0,statedItems:number|undefined,itemsFinished=false;
  const nonUsdHint=lines.some(line=>/\bABN\b|\bAUD\b|\bA\$|\bNZD\b|\bCAD\b/i.test(line));
  for(const [index,line] of lines.entries()) {
    const count=line.match(/^\s*(?:items|item\s+count|total\s+items)\s*[:=]?\s*(\d{1,3})\s*$/i);
    if(count){statedItems=Number(count[1]);continue;}
    const match=line.match(/^(.*?)\s+\$?([\d,]+\.\d{2})\s*$/);
    if(!match){if(/\d[.,]\d|\b(discount|refund)\b/i.test(line))unparsed++;continue;}
    const amount=parsePrice(match[2].replace(/,/g,''));if(amount===null){unparsed++;continue;}
    let name=match[1].trim();
    // Classify metadata before attempting item quantities or price arithmetic.
    const label=name.replace(/[.:]/g,'').trim();
    if(/^(?:eftpos|e\s*f\s*t\s*p\s*o\s*s|debit|credit|amount\s+paid|tendered|payment|card\s+payment)\b/i.test(label)){continue;}
    if(/^(?:gst|hst|vat|tax\s+included|includes?\s+tax)\b/i.test(label)){unparsed++;continue;}
    if(/subtotal|sub total/i.test(name)){subtotal=amount;itemsFinished=true;continue;}
    if(/^(grand\s+total|total|amount\s+due|balance\s+due)\b/i.test(name)){receipt.printedTotalCents=amount;itemsFinished=true;continue;}
    if(/^(sales\s+tax|tax)\b/i.test(name)){receipt.importedTaxCents=(receipt.importedTaxCents??0)+amount;continue;}
    if(/^(tip|gratuity)\b/i.test(name)){receipt.importedTipCents=(receipt.importedTipCents??0)+amount;continue;}
    if(itemsFinished){unparsed++;continue;}
    if(/\b(cash|change|visa|mastercard|amex|payment|paid|tender|card|suggested|discount|refund|service\s+charge)\b/i.test(name)||/[-−]/.test(name.slice(-1))){unparsed++;continue;}
    // A garbled zero-value footer must not become a free item silently.
    if(amount===0){unparsed++;continue;}
    let quantity=1;
    const qty=name.match(/^(\d{1,3})\s*(?:[x×]\s*|\s+)(.+)$/i);
    if(qty){quantity=Number(qty[1]);name=qty[2].trim();}
    const explicitUnit=name.match(/^(.*?)\s+@\s*\$?(\d+\.\d{2})$/);
    const unit=explicitUnit?parsePrice(explicitUnit[2]):amount/quantity;
    if(explicitUnit)name=explicitUnit[1].trim();
    if(!name||!/[a-z]/i.test(name)||name.length>100||quantity<1||quantity>100||unit===null||!Number.isInteger(unit)||unit*quantity!==amount){unparsed++;continue;}
    receipt.items.push({id:`ocr-${index}`,name,quantity,unitPriceCents:unit});
  }
  if(receipt.items.length>200)throw new Error('Too many lines. Use a shorter receipt or enter it manually.');
  if(!receipt.items.length)throw new Error('Text was recognized but no clear item prices were found. Retry or enter items manually.');
  const itemsTotal=receipt.items.reduce((n,i)=>n+i.quantity*i.unitPriceCents,0);
  if(statedItems!==undefined&&statedItems!==receipt.items.length&&statedItems!==receipt.items.reduce((n,i)=>n+i.quantity,0))receipt.reviewNotes!.push('The receipt item count differs from recognized items. Check for missing lines.');
  if(nonUsdHint)receipt.reviewNotes!.push('Possible non-USD receipt: this Beta only validates USD. No currency conversion is performed; use a supported receipt for USD acceptance.');
  if(subtotal!==undefined&&subtotal!==itemsTotal)receipt.reviewNotes!.push('Recognized items do not match the printed subtotal. Correct missing or incorrect items.');
  if(unparsed)receipt.reviewNotes!.push('Some lines could not be interpreted, including possible discounts or charges. Review the original photo.');
  if(receipt.printedTotalCents===undefined)receipt.reviewNotes!.push('Printed total was not recognized. Compare the bill with the original receipt.');
  if(itemsTotal>0){
    if(receipt.importedTaxCents!==undefined)receipt.taxRate=Math.min(100,Math.round(receipt.importedTaxCents/itemsTotal*100000)/1000);
    if(receipt.importedTipCents!==undefined)receipt.tipRate=Math.min(100,Math.round(receipt.importedTipCents/itemsTotal*100000)/1000);
  }
  receipt.reviewNotes!.push('Date defaults to today. Tax/tip default to zero unless a printed amount was recognized.');
  return receipt;
}
