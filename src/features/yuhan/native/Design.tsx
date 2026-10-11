import React, { createContext, useContext, type ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet, type ViewStyle, type TextStyle, type ImageStyle, type ImageSourcePropType } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useId } from 'react';
import { svgAsset } from '../assets';
import rawStyles from './styles.json';
import rawLayers from './layers.json';

type Layer = { contents?:boolean; gradient?:boolean; nowrap?:boolean; grid?:boolean };
const layers = rawLayers as Record<string,Layer>;
const styles = StyleSheet.create(rawStyles as unknown as Record<string,ViewStyle & TextStyle>);
const TextContext = createContext<TextStyle>({fontFamily:'Jakarta',fontSize:14,color:'#251e14'});
const textKeys = ['fontFamily','fontSize','lineHeight','letterSpacing','color','textAlign','fontStyle','fontWeight'] as const;
export interface DesignProps {
  children?:ReactNode; className?:string; style?:ViewStyle & TextStyle;
  'data-node-id'?:string; 'data-name'?:string;
  onPress?:()=>void; disabled?:boolean; accessibilityLabel?:string; accessibilityState?:{selected?:boolean;disabled?:boolean};
}
function resolve(className?:string){ return (className??'').split(' ').reduce((r,c)=>({...r,...styles[c]}),{} as ViewStyle & TextStyle); }
function inherited(style:ViewStyle & TextStyle,parent:TextStyle){const result={...parent}; for(const k of textKeys) if(style[k]!==undefined) Object.assign(result,{[k]:style[k]});return result;}
function viewStyle(style:ViewStyle & TextStyle){const result={...style};for(const k of textKeys)delete result[k];return result as ViewStyle;}
export function DesignView(props:DesignProps){
  const glowId=useId().replace(/:/g,'');const parent=useContext(TextContext);const style={...resolve(props.className),...props.style};
  const classes=(props.className??'').split(' '); const info=classes.reduce((r,c)=>({...r,...layers[c]}),{} as Layer);
  const child=<TextContext.Provider value={inherited(style,parent)}>{props.children}</TextContext.Provider>;
  // The team's DeviceFrame supplies safe areas, status bar and home indicator.
  if(props['data-name']==='Navigation bar'||props['data-name']==='Tabbar')return null;
  if(info.contents)return child;
  const layout=viewStyle(style);
  const blur=classes.includes('v91')?32:classes.some(c=>['v92','v93'].includes(c))?20:classes.includes('v143')?12:0;
  const glowColor=layout.backgroundColor;
  if(blur)layout.backgroundColor='transparent';
  const diameter=typeof layout.width==='number'?layout.width:320;
  const glow=blur?<Svg pointerEvents="none" width={diameter+blur*4} height={diameter+blur*4} style={{position:'absolute',left:-blur*2,top:-blur*2}}><Defs><RadialGradient id={glowId}><Stop offset="0" stopColor={String(glowColor)}/><Stop offset="0.55" stopColor={String(glowColor)}/><Stop offset="1" stopColor={String(glowColor)} stopOpacity={0}/></RadialGradient></Defs><Circle cx={(diameter+blur*4)/2} cy={(diameter+blur*4)/2} r={(diameter+blur*4)/2} fill={`url(#${glowId})`}/></Svg>:null;
  // CSS grid's equal columns become a native wrapping row.
  const content=info.grid?React.Children.map(props.children,(c,i)=><View key={i} style={{width:'48.5%',height:34}}>{c}</View>):child;
  const gradient=info.gradient?<LinearGradient pointerEvents="none" colors={['rgba(0,0,0,.2)','transparent','rgba(0,0,0,.6)']} locations={[0,.5,1]} style={StyleSheet.absoluteFill}/>:null;
  if(props.onPress)return <Pressable disabled={props.disabled} accessibilityRole="button" accessibilityLabel={props.accessibilityLabel} accessibilityState={{...props.accessibilityState,disabled:props.disabled}} testID={props['data-node-id']} onPress={props.onPress} style={layout}>{glow}{gradient}{content}</Pressable>;
  return <View testID={props['data-node-id']} pointerEvents="box-none" style={layout}>{glow}{gradient}{content}</View>;
}
export function DesignText(props:DesignProps){const parent=useContext(TextContext);const own={...resolve(props.className),...props.style};return <Text testID={props['data-node-id']} style={[parent,own,{includeFontPadding:false}]}>{props.children}</Text>;}
export function DesignImage({className,src,alt,style,contentFit='fill'}:DesignProps & {src:ImageSourcePropType;alt?:string;contentFit?:'fill'|'cover'}){
  const svg = svgAsset(src);
  if (svg) { const Component = svg.component; return <View accessibilityLabel={alt || undefined} style={[resolve(className) as ViewStyle, style]}><Component width={svg.width} height={svg.height}/></View>; }
  return <Image source={src} accessibilityLabel={alt||undefined} accessible={!!alt} contentFit={contentFit} style={[resolve(className) as ImageStyle,style as ImageStyle]}/>;
}
