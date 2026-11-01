import { createContext, useContext, useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction, type ReactNode } from 'react'
import { cloneReceipt, emptyReceipt, sampleReceipt, taqueriaReceipt, validateReceipt, type SplitReceipt } from './model'
import { errorMessage, useAccount } from '../../state/AccountProvider'
import { loadReceipts, saveReceipt } from './repository'
import { Platform } from 'react-native'
import { readDraftSession, writeDraftSession, type DraftStorage } from './draft-session'
function draftStorage():DraftStorage|undefined { try{return Platform.OS==='web'?window.sessionStorage:undefined}catch{return undefined} }
type ManualEntry={name:string;price:string;quantity:number;editId:string|null}
const blankEntry=():ManualEntry=>({name:'',price:'',quantity:1,editId:null})
type Store={backupUnavailable:boolean;forms:Record<string,unknown>;setForms:Dispatch<SetStateAction<Record<string,unknown>>>;photoUri:string|undefined;setPhotoUri:(uri:string|undefined)=>void;draft:SplitReceipt;setDraft:(receipt:SplitReceipt)=>void;recent:SplitReceipt[];save:()=>Promise<boolean>;saving:boolean;loading:boolean;historyError:string;reload:()=>Promise<void>;manualEntry:ManualEntry;setManualEntry:Dispatch<SetStateAction<ManualEntry>>}
const Context=createContext<Store|null>(null)
export function SplitProvider({children}:{children:ReactNode}) {
  const account=useAccount(),userId=account.session?.user.id,preview=account.preview
  const owner=preview?'preview':userId
  const [restored]=useState(()=>readDraftSession(draftStorage(),owner))
  const [forms,setForms]=useState<Record<string,unknown>>(restored?.forms??{})
  const [draft,setDraftState]=useState(()=>restored?.draft??(preview?cloneReceipt(sampleReceipt):emptyReceipt()))
  const [manualEntry,setManualEntry]=useState(()=>restored?.manualEntry??blankEntry())
  const [photoUri,setPhotoUri]=useState<string|undefined>()
  const [recent,setRecent]=useState<SplitReceipt[]>(()=>preview?[cloneReceipt(sampleReceipt),cloneReceipt(taqueriaReceipt)]:[])
  const [loading,setLoading]=useState(false),[saving,setSaving]=useState(false),[historyError,setHistoryError]=useState('')
  const generation=useRef(0),writePending=useRef(false)
  const [backupUnavailable,setBackupUnavailable]=useState(false)
  const sessionSnapshot=useRef({draft,manualEntry,forms});sessionSnapshot.current={draft,manualEntry,forms}
  useEffect(()=>{if(Platform.OS==='web'&&owner)setBackupUnavailable(!writeDraftSession(draftStorage(),owner,sessionSnapshot.current))},[draft,manualEntry,forms,owner])
  useEffect(()=>{if(Platform.OS!=='web')return;const flush=()=>{writeDraftSession(draftStorage(),owner,sessionSnapshot.current)};window.addEventListener('pagehide',flush);document.addEventListener('visibilitychange',flush);return()=>{flush();window.removeEventListener('pagehide',flush);document.removeEventListener('visibilitychange',flush)}},[owner])
  const reload=useCallback(async()=>{
    if(preview||!userId||writePending.current)return
    const request=++generation.current;setLoading(true);setHistoryError('')
    try{const receipts=await loadReceipts(userId);if(request===generation.current)setRecent(receipts)}
    catch(e){if(request===generation.current)setHistoryError(errorMessage(e))}
    finally{if(request===generation.current)setLoading(false)}
  },[preview,userId])
  useEffect(()=>{void reload();return()=>{generation.current++}},[reload])
  function setDraft(receipt:SplitReceipt){if(writePending.current)return;if(receipt.id!==draft.id){setManualEntry(blankEntry());setForms({});setPhotoUri(undefined)}setDraftState(receipt)}
  async function save(){
    if(writePending.current)return false
    const snapshot=cloneReceipt(draft);validateReceipt(snapshot)
    if(!preview&&!userId)throw new Error('Please sign in to save your bill.')
    const request=++generation.current;setLoading(false);writePending.current=true;setSaving(true)
    try{if(!preview)await saveReceipt(userId!,snapshot);if(request!==generation.current)return false;setHistoryError('');setRecent(current=>[snapshot,...current.filter(item=>item.id!==snapshot.id)].slice(0,100));return true}
    finally{writePending.current=false;if(request===generation.current)setSaving(false)}
  }
  return <Context.Provider value={{backupUnavailable,forms,setForms,photoUri,setPhotoUri,draft,setDraft,recent,save,saving,loading,historyError,reload,manualEntry,setManualEntry}}>{children}</Context.Provider>
}
export function useSplit(){const value=useContext(Context);if(!value)throw new Error('SplitProvider is required');return value}
