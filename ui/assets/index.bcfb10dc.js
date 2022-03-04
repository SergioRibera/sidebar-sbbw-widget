var _=Object.defineProperty,H=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,V=(e,t)=>{for(var r in t||(t={}))q.call(t,r)&&M(e,r,t[r]);if(A)for(var r of A(t))G.call(t,r)&&M(e,r,t[r]);return e},D=(e,t)=>H(e,j(t));import{e as w,r as i,j as n,C as J,a as d,S as v,b as f,T as B,I as S,c as K,d as Z,f as Q,g as U,t as L,F as N,B as O,H as p,h as X,V as y,i as Y,k as ee,l as te,m as ne,n as b,o as re,p as T,q as se,s as oe,M as ae,A as ie,G as ce,R as le,u as he,v as de,w as ge,x as ue,y as me,z as pe}from"./vendor.e288444b.js";const fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};fe();const C={styles:{global:e=>({body:{bg:"transparent"}})}},ye=w({colors:{background:"#f5f5f5",text:"#404040",primary:"#eaeaea",secondary:"#eaeaee",highlight:"#606060",warning:"#EBCB8B",success:"#A3BE8C",danger:"#BF616A"},styles:C.styles}),xe=w({colors:{background:"#1f2530",text:"#fafafa",primary:"",secondary:"",highlight:"",warning:"#EBCB8B",success:"#A3BE8C",danger:"#BF616A"},styles:C.styles}),$=w({colors:{background:"#2e3440",text:"#d8dee9",primary:"#3B4252",secondary:"#434C5E",highlight:"#4C566A",warning:"#EBCB8B",success:"#A3BE8C",danger:"#BF616A"},styles:C.styles});w({colors:{background:"#f2cdcd",text:"#ddb6f2",primary:"#F5C2E7",secondary:"#E8A2AF",highlight:"#F8BD96",warning:"#FAE3B0",success:"#ABE9B3",danger:"#F28FAD"},styles:C.styles});w({useSystemColorMode:!1,colors:{background:"#191724",text:"#e0def4",primary:"#1f1d2e",secondary:"#26233a",highlight:"#524f67",warning:"#f6c177",success:"#9ccfd8",danger:"#eb6f92"},styles:C.styles});const F=e=>e<10?`0${e}`:e,we=()=>{let e=new Date,t=new Intl.DateTimeFormat("default",{month:"2-digit",day:"2-digit",year:"numeric"}).format(e);const[r,l]=i.exports.useState(`${F(e.getHours())}:${F(e.getMinutes())}`),[s,a]=i.exports.useState(`${t}`);return i.exports.useEffect(()=>{const g=setInterval(()=>{let c=new Date,h=new Intl.DateTimeFormat("default",{month:"2-digit",day:"2-digit",year:"numeric"}).format(c);l(`${F(c.getHours())}:${F(c.getMinutes())}`),a(`${h}`)},1e3);return()=>clearInterval(g)},[r]),n(i.exports.Fragment,{children:n(J,{children:d(v,{children:[n(f,{children:n(B,{unselectable:"on",fontSize:"8xl",color:"text",fontWeight:"bold",children:r})}),n(f,{children:n(B,{unselectable:"on",color:"text",fontWeight:"bold",children:s})})]})})})},z=({icon:e,min:t,max:r,value:l,readOnly:s,onChangeValue:a})=>{const[g,c]=i.exports.useState(l),h=m=>{c(m),a&&a(m)};return n(i.exports.Fragment,{children:d(v,{isInline:!0,align:"center",spacing:2,justify:"center",direction:"row",width:"250px",mb:2,children:[e&&n(f,{width:7,height:7,children:n(S,{boxSize:7,color:"highlight",children:e})}),d(K,{isReadOnly:s,onChange:h,min:t,max:r,value:g,children:[n(Z,{bg:"primary",children:n(Q,{bg:"highlight"})}),!s&&n(U,{bg:"highlight"})]})]})})},Be=e=>n(S,D(V({viewBox:"0 0 200 200"},e),{style:{cursor:"pointer"},children:n("path",{fill:"currentColor",d:"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"})})),R=[{name:"light",color:"#fafaf",theme:ye},{name:"dark",color:"#1f2530",theme:xe},{name:"nord",color:"#4C566A",theme:$},{name:"catpuccin-morning",color:"#f2cdcd",theme:L},{name:"rose-pine",color:"#c4a7a7",theme:L}],Se=({onChangeTheme:e})=>{e&&e(JSON.parse(localStorage.getItem("theme"))||R[0].theme);const t=r=>{localStorage.setItem("theme",JSON.stringify(r)),e(r)};return n(i.exports.Fragment,{children:n(f,{children:n(v,{isInline:!0,spacing:4,children:R.map(r=>n(Be,{size:"24px",color:r.color,onClick:()=>t(r.theme)},r.name))})})})};var be="/sidebar/ui/assets/album.75b432c5.png",Ce="/sidebar/ui/assets/album.75b432c5.png";const u=({file:e,args:t})=>new Promise((r,l)=>{window.rpc.call(e,t).then(s=>{typeof s=="string"?(s=s.trim(),!s.toLowerCase().trim().includes("invalid")||!s.toLowerCase().trim().includes("unsupported")?r(s):l(s)):s.code==200?r(s.data):l(s)}).catch(l)}),ke=()=>new Promise((e,t)=>{u({file:"python",args:["./brightness.py","get"]}).then(e).catch(t)}),ve=()=>new Promise((e,t)=>{u({file:"./volume",args:["get"]}).then(e).catch(t)}),Fe=()=>new Promise((e,t)=>{u({file:"python",args:["./mediactl.py","status"]}).then(e).catch(t)}),Ie=()=>new Promise((e,t)=>{u({file:"python",args:["./mediactl.py","metadata"]}).then(e).catch(t)}),I=e=>new Promise((t,r)=>{u({file:"python",args:["./mediactl.py",e]}).then(t).catch(r)}),Pe=e=>new Promise((t,r)=>{u({file:"python",args:["./brightness.py","set",`${e}`]}).then(t).catch(r)}),Ee=e=>new Promise((t,r)=>{u({file:"./volume",args:["set",`${e}`]}).then(t).catch(r)}),Ae=()=>new Promise((e,t)=>{u({file:"python",args:["./os_mod.py","bat","get"]}).then(e).catch(t)}),Me=()=>new Promise((e,t)=>{u({file:"python",args:["./os_mod.py","bat"]}).then(e).catch(t)}),Ve=()=>new Promise((e,t)=>{u({file:"python",args:["./power.py","poweroff"]}).then(e).catch(t)}),W=()=>new Promise((e,t)=>{u({file:"python",args:["./power.py","reboot"]}).then(e).catch(t)}),De=()=>new Promise((e,t)=>{u({file:"python",args:["./power.py","suspend"]}).then(e).catch(t)}),P=({icon:e,onClick:t})=>n(b,{variant:"ghost",_hover:{background:"transparent"},icon:e,color:"highlight",colorScheme:"highlight",size:"lg",onClick:t}),Le=()=>{const[e,t]=i.exports.useState(!1),[r,l]=i.exports.useState({title:"Not Playing Music"}),s=()=>{e?I("pause").then(()=>{t(!1)}).catch(c=>{t(!1),console.log(c)}):I("play").then(()=>{t(!0)}).catch(c=>{t(!1),console.log(c)})},a=()=>{I("next").then(()=>{t(!0)}).catch(c=>{t(!1),console.log(c)})},g=()=>{I("prev").then(()=>{t(!0)}).catch(c=>{t(!1),console.log(c)})};return i.exports.useEffect(()=>{const c=()=>{Fe().then(m=>{console.log("status",m),t(m.toLowerCase()=="playing"),m.toLowerCase()!=="playing"?l({title:"Not Playing Music"}):Ie().then(k=>{console.log("raw metadata",k);let o=k.split(`
`),E="";console.log("metas",o);for(let x=0;x<o.length;x++)o[x].includes("xesam:title")&&(console.log(o[x]),E=o[x].split("xesam:title")[1].trim());l({title:E})}).catch(console.error)}).catch(m=>{console.log("status",m),l({title:"Not Playing Music"})})},h=setInterval(()=>c(),1e4);return c(),()=>clearInterval(h)},[]),n(N,{children:n(O,{pb:"1.5rem",children:d(p,{p:"5",borderRadius:"10px",background:"primary",children:[n(X,{src:Ce,htmlWidth:"80px",htmlHeight:"80px",borderRadius:"10%",fallbackSrc:be}),d(y,{width:"200px",overflow:"hidden",spacing:"2",children:[n(B,{className:"media_name_animated",whiteSpace:"nowrap",display:"inline-flex",color:"text",align:"center",children:r.title}),n(f,{children:d(p,{spacing:1,children:[n(P,{onClick:g,icon:n(Y,{})}),n(P,{onClick:s,icon:e?n(ee,{}):n(te,{})}),n(P,{onClick:a,icon:n(ne,{})})]})})]})]})})})},Ne=(e,t)=>{let r=T;return e>50?r=se:r=oe,e<=10&&(r=T),t?n(S,{as:re,color:"text"}):n(S,{as:r,color:"text"})},Oe=()=>{const[e,t]=i.exports.useState(!1),[r,l]=i.exports.useState(100),[s,a]=i.exports.useState("charging");return i.exports.useEffect(()=>{const g=()=>{Ae().then(h=>{h!==null&&(h=h.match(/\d+/)[0],l(parseInt(h)),t(!0))}).catch(h=>{console.log(h),t(!1)}),e&&Me().then(h=>{a(new Boolean(h.trim()).valueOf())}).catch(h=>{console.log(h),a(!1)})},c=setInterval(g,1e4);return g(),()=>clearInterval(c)},[]),n(N,{children:e&&d(p,{children:[Ne(r,s),d(B,{color:"text",fontWeight:"bold",children:[r,"%"]})]})})},Te=()=>d(p,{spacing:4,children:[n(S,{as:ae,color:"text"}),n(y,{spacing:0,children:n(B,{color:"text",fontWeight:"bold",children:"El WIFI"})})]}),$e=()=>d(p,{spacing:10,children:[n(b,{icon:n(ie,{}),variant:"outline",color:"danger",colorScheme:"danger",size:"lg",onClick:async()=>await Ve()}),n(b,{icon:n(ce,{}),variant:"outline",color:"warning",colorScheme:"warning",size:"lg",onClick:async()=>await De()}),n(b,{icon:n(le,{}),variant:"outline",color:"highlight",colorScheme:"highlight",size:"lg",onClick:async()=>await W()}),n(b,{icon:n(he,{}),variant:"outline",color:"text",colorScheme:"text",size:"lg",onClick:async()=>await W()})]}),ze=({onChangeTheme:e})=>{const[t,r]=i.exports.useState(!1),[l,s]=i.exports.useState(0),[a,g]=i.exports.useState(!1),[c,h]=i.exports.useState(0),m=o=>{console.log("handleChangeBrightness",o),Pe(o).then(console.log).catch(console.error)},k=o=>{console.log("handleChangeVolume",o),Ee(o).then(console.log).catch(console.error)};return i.exports.useEffect(()=>(console.log("useEffect"),ke().then(o=>{o=o.match(/\d+/)[0],console.log("getBrightness",o),r(!0),s(parseInt(o))}).catch(o=>{console.log(o),r(!1)}),ve().then(o=>{o=o.match(/\d+/)[0],console.log("getVolume",o),g(!0),h(o)}).catch(o=>{console.log(o),g(!1)}),()=>{}),[]),n(i.exports.Fragment,{children:n(f,{children:d(y,{width:"100%",maxW:"100%",height:"100vh",px:4,m:0,pt:"3rem",bg:"background",children:[d(v,{mb:7,spacing:4,children:[n(we,{}),n(Se,{onChangeTheme:e})]}),n(Le,{}),d(y,{height:"100%",justifyContent:"space-between",children:[d(y,{children:[n(O,{paddingTop:"35px",paddingBottom:"35px",children:d(y,{spacing:4,children:[t&&n(z,{value:l,onChangeValue:m,icon:n(me,{}),min:10,max:100,readOnly:!1}),a&&n(z,{value:c,onChangeValue:k,icon:n(pe,{}),min:0,max:100,readOnly:!1})]})}),d(p,{spacing:10,children:[n(Oe,{}),n(Te,{})]})]}),n(p,{py:20,children:n($e,{})})]})]})})})},Re=()=>{const[e,t]=i.exports.useState($);return n(ge,{resetCSS:!0,width:"100vw",height:"100vh",theme:e,children:n(ue,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:n(ze,{onChangeTheme:r=>{}})})})};de.render(n(i.exports.StrictMode,{children:n(Re,{})}),document.getElementById("root"));