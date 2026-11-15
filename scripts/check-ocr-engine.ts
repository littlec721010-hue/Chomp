// Optional real-engine smoke test; downloads English model on first use.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createWorker } from 'tesseract.js';
import { parseReceiptText } from '../src/features/split/ocr-parser';
import { calculateReceipt } from '../src/features/split/model';

async function main(){
  fs.mkdirSync('test-results',{recursive:true});
  const worker=await createWorker('eng',1,{cachePath:'test-results',errorHandler:()=>{}});
  try{
    const {data}=await worker.recognize('tests/fixtures/receipt-english-usd.png');
    const receipt=parseReceiptText(data.text),totals=calculateReceipt(receipt);
    assert.equal(receipt.items.length,2);assert.equal(receipt.items[0].quantity,2);
    assert.equal(receipt.items[0].unitPriceCents,1000);assert.equal(totals.totalCents,2904);
    const report={fixture:'synthetic English/USD printed image',engine:'Tesseract.js 7.0.0 (Node)',
      timestamp:new Date().toISOString(),result:'PASS',itemCount:receipt.items.length,totalCents:totals.totalCents,
      limitation:'Not a browser/device test or a representative real-world accuracy study.'};
    fs.writeFileSync('test-results/ocr-engine.json',JSON.stringify(report,null,2));console.log(report);
  }finally{await worker.terminate();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
