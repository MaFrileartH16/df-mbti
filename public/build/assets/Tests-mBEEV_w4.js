import{j as e,B as t,F as n}from"./app-Cq8Aqup0.js";import{A as l,B as p}from"./AppLayout-CwXQp4_H.js";import{T as h}from"./Title-XTzllKPA.js";import{T as a}from"./Table-BYzJAVfk.js";import"./ScrollArea-YXKuiWdK.js";const y=i=>(console.log(i),e.jsxs(l,{title:"Hasil",activeNav:"Mahasiswa",authed:i.auth.user,meta:i.meta,children:[e.jsx(h,{mb:32,children:"Hasil Test Mahasiswa"}),e.jsx(t,{style:{borderRadius:20,border:"1px solid #E9ECEF"},children:e.jsx(a.ScrollContainer,{children:e.jsxs(a,{highlightOnHover:!0,withColumnBorders:!0,styles:{table:{borderRadius:16},thead:{borderRadius:16}},children:[e.jsx(a.Thead,{h:64,children:e.jsxs(a.Tr,{children:[e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"No"}),e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Tipe Kepribadian"}),e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Saran Pekerjaan"}),e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Tanggal Pengerjaan"}),e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Waktu Selesai"}),e.jsx(a.Th,{px:16,py:0,style:{whiteSpace:"nowrap"},children:"Opsi"})]})}),e.jsx(a.Tbody,{children:i.tests.map((r,s)=>e.jsxs(a.Tr,{h:64,children:[e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:s+1}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r.personality}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:r.work.name}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:new Date(r.created_at).toLocaleDateString("id-ID")}),e.jsxs(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:["  ",r.time]}),e.jsx(a.Td,{px:16,py:0,style:{whiteSpace:"nowrap"},children:e.jsx(p,{px:16,h:48,radius:32,styles:{section:{marginRight:16}},variant:"outline",onClick:()=>n.get(route("tests.show",r.id)),children:"Detail"})})]},s))})]})})})]}));export{y as Index,y as default};
