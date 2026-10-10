import { Children, cloneElement, createElement, isValidElement, type ReactElement, type ReactNode } from 'react';

type NodeProps = { children?: ReactNode; className?: string; style?: Record<string,unknown>; [key:string]: unknown };
export interface Binding {
  label?: string; action?: () => void; children?: ReactNode;
  text?: ReactNode;
  props?: Record<string,unknown>; disabled?: boolean;
}
/** Adapt the Figma-derived view with real controls and data without replacing its assets. */
export function bindView(node: ReactNode, bindings: Record<string,Binding>): ReactNode {
  if(!isValidElement<NodeProps>(node)) return node;
  const id=node.props['data-node-id'] as string;
  const binding=bindings[id];
  let children=binding && 'children' in binding ? binding.children : Children.map(node.props.children,c=>bindView(c,bindings));
  if(binding && 'text' in binding){
    const original=Children.toArray(node.props.children).find(isValidElement) as ReactElement<NodeProps>|undefined;
    const span=original?Children.toArray(original.props.children).find(isValidElement) as ReactElement<NodeProps>|undefined:undefined;
    children=<p className={original?.props.className??span?.props.className} style={!original?.props.className&&!span?.props.className?{lineHeight:'1.4'}:undefined}>{binding.text}</p>;
  }
  const props: NodeProps={...node.props,...binding?.props,children};
  if(binding?.action){
    props.onClick=binding.action; props.type='button';props['aria-label']=binding.label;
    props.disabled=binding.disabled;props.className=`${props.className??''} chomp-action`;
    return createElement('button',{...props,key:node.key});
  }
  return cloneElement(node as ReactElement<NodeProps>,props);
}
export const textBinding=(text:ReactNode):Binding=>({text});
