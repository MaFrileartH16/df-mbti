import{W as n,j as r,B as l}from"./app-Bi4iRz3i.js";import{A as d,G as m,I as t,B as p}from"./AppLayout-DvVrcIVI.js";import{S as g}from"./Stack-tdjy2H8Z.js";import{T as o}from"./Title-Cnohtl0s.js";import{C as h}from"./Center-s9Ndw3pB.js";import{T as i}from"./TextInput-CbTzzo6s.js";import{I as u,a as c}from"./IconPassword-CZvr4V63.js";import"./InputBase-BjiFYmuE.js";import"./Input-WWNvzk7o.js";const x="/epersona.jpg",b="/unsada.png",y=s=>{const a=n({login:"",password:""});return r.jsx("form",{onSubmit:e=>{e.preventDefault(),a.post(route("login"))},children:r.jsx(d,{title:"Masuk Akun",authed:s.auth.user,meta:s.meta,children:r.jsxs(g,{h:"100vh",gap:0,children:[r.jsxs(m,{h:80,px:16,style:{borderBottom:"1px solid #e1e1e1",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.jsx(t,{h:48,w:48,src:x}),r.jsx(o,{children:"E-Persona"})]}),r.jsx(h,{h:"100vh",p:16,children:r.jsxs(l,{w:{base:"100%",sm:"75%",md:"50%",lg:"25%"},children:[r.jsx(t,{src:b,w:80,mx:"auto",mb:32}),r.jsx(o,{mb:32,align:"center",children:"Masuk Akun"}),r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},autoFocus:!0,leftSection:r.jsx(u,{}),label:"Email/NIDN/NIM",placeholder:"Masukkan email/NIDM/NIM...",mb:16,withAsterisk:!0,onChange:e=>{a.setData("login",e.target.value.toLowerCase()),e.target.value?a.clearErrors("login"):a.setError({login:"Email/NIDN/NIM tidak boleh kosong."})},error:a.errors.login}),r.jsx(i,{styles:{label:{marginBottom:8},input:{height:48,borderRadius:32,paddingLeft:50,paddingRight:16},section:{marginLeft:0,width:48,height:48},error:{marginTop:8}},type:"password",leftSection:r.jsx(c,{}),label:"Kata Sandi",placeholder:"Masukkan kata sandi...",mb:24,withAsterisk:!0,onChange:e=>{a.setData("password",e.target.value),e.target.value?a.clearErrors("password"):a.setError({password:"Kata sandi tidak boleh kosong."})},error:a.errors.password}),r.jsx(p,{px:16,styles:{section:{marginRight:16}},disabled:a.hasErrors||Object.values(a.data).some(e=>!e),loading:a.processing,type:"submit",fullWidth:!0,h:48,radius:32,children:"Masuk"})]})})]})})})};export{y as default};
