import{o as y,f as z,u as S,b as x,j as $,B as T,h as b}from"./app-Bi4iRz3i.js";const w=["h1","h2","h3","h4","h5","h6"];function W(e,n){const t=n!==void 0?n:`h${e}`;return w.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:{fontSize:y(t),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var r={root:"m_8a5d1357"};const j={order:1},H=b((e,{order:n,size:t,lineClamp:s,textWrap:o})=>{const i=W(n,t);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof s=="number"?s.toString():void 0,"--title-text-wrap":o}}}),l=z((e,n)=>{const t=S("Title",j,e),{classNames:s,className:o,style:i,styles:h,unstyled:c,order:a,vars:m,size:f,variant:u,lineClamp:p,textWrap:N,mod:g,...v}=t,d=x({name:"Title",props:t,classes:r,className:o,style:i,classNames:s,styles:h,unstyled:c,vars:m,varsResolver:H});return[1,2,3,4,5,6].includes(a)?$.jsx(T,{...d("root"),component:`h${a}`,variant:u,ref:n,mod:[{order:a,"data-line-clamp":typeof p=="number"},g],size:f,...v}):null});l.classes=r;l.displayName="@mantine/core/Title";export{l as T};
