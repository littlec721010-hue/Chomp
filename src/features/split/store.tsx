import { createContext, useContext, useState, type Dispatch, type SetStateAction, type ReactNode } from 'react'
import { cloneReceipt, sampleReceipt, taqueriaReceipt, type SplitReceipt } from './model'
type ManualEntry={name:string;price:string;quantity:number;editId:string|null}
const blankEntry=():ManualEntry=>({name:'',price:'',quantity:1,editId:null})
type Store={draft:SplitReceipt;setDraft:(receipt:SplitReceipt)=>void;recent:SplitReceipt[];save:()=>void;manualEntry:ManualEntry;setManualEntry:Dispatch<SetStateAction<ManualEntry>>}
const Context=createContext<Store|null>(null)
export function SplitProvider({children}:{children:ReactNode}) {
  const [draft,setDraftState]=useState(()=>cloneReceipt(sampleReceipt))
  const [manualEntry,setManualEntry]=useState(blankEntry)
  function setDraft(receipt:SplitReceipt){if(receipt.id!==draft.id)setManualEntry(blankEntry());setDraftState(receipt)}
  const [recent,setRecent]=useState(()=>[cloneReceipt(sampleReceipt),cloneReceipt(taqueriaReceipt)])
  function save(){setRecent(current=>[cloneReceipt(draft),...current.filter(item=>item.id!==draft.id)])}
  return <Context.Provider value={{draft,setDraft,recent,save,manualEntry,setManualEntry}}>{children}</Context.Provider>
}
export function useSplit(){const value=useContext(Context);if(!value)throw new Error('SplitProvider is required');return value}
