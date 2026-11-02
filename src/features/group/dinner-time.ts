/** Local device time; display-only status-bar clocks are never used. */
export function futureDinnerTime(value:string,now=new Date()):boolean {
 const m=value.match(/^(\d{4})-(\d{2})-(\d{2}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
 if(!m)return false;
 const [year,month,day,hour,minute]=m.slice(1,6).map(Number);
 if(hour<1||hour>12||minute>59)return false;
 const date=new Date(year,month-1,day,hour%12+(m[6].toUpperCase()==='PM'?12:0),minute);
 return date.getFullYear()===year&&date.getMonth()===month-1&&date.getDate()===day&&date.getTime()>now.getTime();
}
