import{r as l,W as S,j as t,B as v}from"./app-Bi4iRz3i.js";import{A as I,g as T,G as u,B as d,z as L}from"./AppLayout-DvVrcIVI.js";import{P as c}from"./Progress-DRgFbau3.js";import{C as R}from"./Center-s9Ndw3pB.js";import{T as _}from"./Title-Cnohtl0s.js";import{L as x}from"./List-CPaDuF-P.js";import{R as h}from"./Radio-BgxeNyfA.js";import{I as A,a as B}from"./IconArrowNarrowRight-CisFGXHX.js";import"./get-auto-contrast-value-Da6zqqWm.js";import"./Input-WWNvzk7o.js";const W=r=>{console.log(r);const[o,f]=l.useState(0),[i,m]=l.useState(0),g=e=>{const s=Math.floor(e/3600),a=Math.floor((e-s*3600)/60),p=e-s*3600-a*60,b=s.toString().padStart(2,"0"),y=a.toString().padStart(2,"0"),w=p.toString().padStart(2,"0");return`${b}:${y}:${w}`},j=r.statements.map(e=>({statement_id:e.id,choice_id:""})),n=S({time:o,answers:j});return l.useEffect(()=>{const e=setInterval(()=>{f(s=>{const a=s+1;return n.setData("time",a),a})},1e3);return()=>clearInterval(e)},[o,n]),t.jsx("form",{onSubmit:e=>{e.preventDefault(),n.post(route("tests.store"))},children:t.jsxs(I,{title:"Tes MBTI",activeNav:"Tes MBTI",authed:r.auth.user,meta:r.meta,children:[t.jsxs(v,{pos:"sticky",top:80,py:16,bg:"white",style:{zIndex:2},children:[t.jsx(c.Root,{radius:"xl",size:32,mb:16,children:t.jsx(c.Section,{value:100/r.indicators.length*(i+1),children:t.jsxs(c.Label,{children:[100/r.indicators.length*(i+1),"%"]})})}),t.jsxs(T,{bg:"white",style:{zIndex:2},mb:32,children:["Waktu: ",g(o)]})]}),t.jsx(R,{bg:"blue.2",mb:32,py:16,style:{borderRadius:20},children:t.jsx(_,{align:"center",children:r.indicators[i].name})}),t.jsx(x,{style:{display:"flex",flexDirection:"column",gap:32},type:"ordered",children:r.indicators[i].statements.map(e=>t.jsx(x.Item,{style:{border:"1px solid #e1e1e1",borderRadius:20,padding:16},children:t.jsx(h.Group,{label:e.name,withAsterisk:!0,onChange:s=>{n.setData("answers",n.data.answers.map(a=>a.statement_id===e.id?{statement_id:e.id,choice_id:s}:a))},value:n.data.answers.find(s=>s.statement_id===e.id).choice_id,children:t.jsx(u,{mt:"xs",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:16},children:r.choices.map(s=>t.jsx(h,{value:s.id,label:s.name},s.id))})})},e.id))}),t.jsxs(u,{mt:32,justify:"center",children:[i>0&&t.jsx(d,{variant:"subtle",px:16,h:48,radius:32,styles:{section:{marginRight:16}},leftSection:t.jsx(A,{}),onClick:()=>{m(i-1),window.scrollTo(0,0)},children:"Sebelumnya"}),r.indicators.length-1===i?t.jsx(d,{px:16,h:48,radius:32,variant:"subtle",rightSection:t.jsx(L,{}),styles:{section:{marginLeft:16}},color:"red",type:"submit",disabled:n.data.answers.some(e=>e.choice_id===""),children:"Selesai"}):t.jsx(d,{px:16,h:48,radius:32,variant:"subtle",rightSection:t.jsx(B,{}),styles:{section:{marginLeft:16}},onClick:()=>{m(i+1),window.scrollTo(0,0)},children:"Selanjutnya"})]})]})})};export{W as Create,W as default};
