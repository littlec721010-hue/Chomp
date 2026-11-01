import { useCallback, useEffect, useState, type SetStateAction } from 'react';
import { useSplit } from './store';

/** Account/tab-scoped unfinished fields; separate from confirmed bill history. */
export function useBillField<T>(form:string,field:string,initial:T) {
  const {draft,forms,setForms}=useSplit();
  const key=`${form}:${draft.id}:${field}`;
  const stored=forms[key];
  const compatible=initial===null?(stored===null||typeof stored==='object'||typeof stored==='string'):typeof stored===typeof initial;
  const restored=stored!==undefined&&compatible?stored as T:initial;
  const [state,setState]=useState(()=>({key,value:restored}));
  const value=state.key===key?state.value:restored;
  if(state.key!==key)setState({key,value:restored});
  const setValue=useCallback((next:SetStateAction<T>)=>setState(previous=>({key,value:typeof next==='function'?(next as (previous:T)=>T)(previous.key===key?previous.value:restored):next})),[key]);
  useEffect(()=>{setForms(previous=>previous[key]===value?previous:{...previous,[key]:value})},[key,value,setForms]);
  return [value,setValue] as const;
}
