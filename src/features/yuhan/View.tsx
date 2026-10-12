import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { DesignText } from './native/Design';
type NodeProps = {children?:ReactNode;className?:string;[key:string]:unknown};
export interface Binding {label?:string;action?:()=>void;children?:ReactNode;text?:ReactNode;props?:Record<string,unknown>;disabled?:boolean}
/** Bind controls to native Figma layers while retaining their layout and assets. */
export function bindView(node:ReactNode,bindings:Record<string,Binding>):ReactNode {
  if(!isValidElement<NodeProps>(node))return node;
  const binding=bindings[node.props['data-node-id'] as string];
  let children=binding&&'children' in binding?binding.children:Children.map(node.props.children,c=>bindView(c,bindings));
  if(binding&&'text' in binding){const original=Children.toArray(node.props.children).find(isValidElement) as ReactElement<NodeProps>|undefined;children=<DesignText className={original?.props.className}>{binding.text}</DesignText>;}
  return cloneElement(node,{...binding?.props,children,...(binding?.action?{onPress:binding.action,accessibilityLabel:binding.label}: {})});
}
export const textBinding=(text:ReactNode):Binding=>({text});
