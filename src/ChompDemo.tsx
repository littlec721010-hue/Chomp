import { useState } from 'react';
import { ChompModule, screens, type Route } from './features/ChompModule';
import { demoMembers } from './features/recommendations/data';
import type { ChompModuleProps } from './features/contracts';

/** This harness previews Yuhan's modules; it does not implement teammates' screens. */
export function ChompDemo(){
  const [preferencesStep,setPreferencesStep]=useState<Parameters<NonNullable<ChompModuleProps['onPreferences']>>|null>(null);
  const [boundary,setBoundary]=useState(false);
  const go=(route:Route)=>{location.hash=route;setBoundary(false);};
  return <main className="demo-layout">
    <aside className="demo-tools"><span className="eyebrow">CHOMP · YUHAN</span><h1>Let’s decide.</h1><p>Interactive HiFi preview</p><nav aria-label="Preview screens">{Object.entries(screens).map(([route,screen])=><button key={route} onClick={()=>go(route as Route)}>{screen.label}</button>)}</nav><p className="demo-note">Local sample data. Group activity is simulated; no live calls or invitations are sent.</p><button className="reset" onClick={()=>{localStorage.removeItem('chomp.yuhan.v1');location.hash='/group';location.reload();}}>Reset demo</button></aside>
    <section className="demo-preview"><ChompModule user={demoMembers[0]} onHome={()=>setBoundary(true)} onPreferences={(...args)=>setPreferencesStep(args)} /></section>
    {preferencesStep&&<div className="bridge-backdrop"><section role="dialog" aria-modal="true" aria-labelledby="preferences-title" className="bridge-card"><span className="eyebrow">DEMO INTEGRATION</span><h2 id="preferences-title">Dining preferences</h2><p>Shan owns this screen. This preview uses the four members’ sample preferences and resumes at Yuhan’s consensus report.</p><p><strong>{preferencesStep[0].name}</strong><br/>Japanese · Gluten-Free · $15–30</p><button className="primary" onClick={()=>{preferencesStep[1](demoMembers[0].preferences);setPreferencesStep(null);}}>Continue with demo preferences</button><button className="secondary" onClick={()=>setPreferencesStep(null)}>Back</button></section></div>}
    {boundary&&<div className="bridge-backdrop"><section role="dialog" aria-modal="true" aria-labelledby="home-title" className="bridge-card"><span className="eyebrow">DEMO INTEGRATION</span><h2 id="home-title">Choose a preview flow</h2><p>The main Decide home and Split screens belong to Tongrong. These buttons start Yuhan’s modules.</p><button className="primary" onClick={()=>go('/recommendations')}>Solo recommendations</button><button className="secondary" onClick={()=>go('/group')}>Eat with the squad</button><button className="secondary" onClick={()=>setBoundary(false)}>Back</button></section></div>}
  </main>;
}
