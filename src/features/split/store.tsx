import { createContext, useContext, useState, type ReactNode } from 'react'
import { cloneReceipt, sampleReceipt, taqueriaReceipt, type SplitReceipt } from './model'
type Store={draft:SplitReceipt;setDraft:(receipt:SplitReceipt)=>void;recent:SplitReceipt[];save:()=>void}
const Context=createContext<Store|null>(null)
export function SplitProvider({children}:{children:ReactNode}) {
  const [draft,setDraft]=useState(()=>cloneReceipt(sampleReceipt))
  const [recent,setRecent]=useState(()=>[cloneReceipt(sampleReceipt),cloneReceipt(taqueriaReceipt)])
  function save(){setRecent(current=>[cloneReceipt(draft),...current.filter(item=>item.id!==draft.id)])}
  return <Context.Provider value={{draft,setDraft,recent,save}}>{children}</Context.Provider>
}
export function useSplit(){const value=useContext(Context);if(!value)throw new Error('SplitProvider is required');return value}
