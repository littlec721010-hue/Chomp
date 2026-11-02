/** Repeated focus/token events must not tear down the active account's editor. */
export function canReuseAccount(event:string,nextUserId:string|undefined,loadedUserId:string|null):boolean {
  return Boolean(nextUserId&&nextUserId===loadedUserId&&(event==='SIGNED_IN'||event==='TOKEN_REFRESHED'));
}
