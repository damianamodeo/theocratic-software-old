import{j as t,r as u,_ as w}from"./index-da9740ba.js";import{M as A,B as N,T as k}from"./Modal-093465df.js";import{g as v,f as j,U as I,d as _,I as $}from"./deleteNotAtHome-7280e71f.js";import{A as g}from"./Disclosure-c1715cfe.js";const y=async(a,s,l)=>{const p=v(j,"notAtHomes","MaitlandCongregation");try{return await I(j,async x=>{const o=await x.get(p).then(c=>c.data());x.update(p,{...o,[a.key]:{...o[a.key],[s]:l}})})}catch(m){return console.error(m.message),m}},S=({isOpen:a,address:s,setModalOpen:l})=>t.jsxs(A,{isOpen:a,onClose:()=>{},title:"",height:"md",children:[t.jsxs("div",{className:"h-full text-center text-xl dark:text-white",children:[(s==null?void 0:s.unitNumber)&&`${s==null?void 0:s.unitNumber}/`,s==null?void 0:s.houseNumber," ",s==null?void 0:s.street,", ",s==null?void 0:s.suburb]}),t.jsxs("div",{className:"grid place-items-center gap-4",children:[t.jsx(N,{width:"md",clickAction:()=>l(!1),color:"blue",children:"cancel"}),t.jsx(N,{width:"md",clickAction:()=>{y(s,"letter",!0),l(!1)},color:"blue",children:"Letter List"}),t.jsx(N,{width:"md",clickAction:()=>{_(s),l(!1)},color:"blue",children:"Delete"})]})]}),L=({suburbs:a})=>{const[s,l]=u.useState(void 0),[p,m]=u.useState(!1);let x=Date.now();return u.useEffect(()=>{},[]),t.jsx(t.Fragment,{children:Date.now()>x+3e3?"":t.jsxs("div",{className:"",children:[t.jsx(S,{address:s,isOpen:p,setModalOpen:m}),a.filter(o=>o.suburb!==void 0).sort((o,c)=>c.total-o.total).map((o,c)=>t.jsx("div",{className:"mx-auto w-full max-w-md p-2",children:t.jsx(g,{title:t.jsxs("div",{className:"p-3 text-2xl",children:[`${o.suburb} (${o.total})`," "]}),children:o.streets.sort((h,d)=>h.street.localeCompare(d.street)).map((h,d)=>t.jsx("div",{className:"my-2 mx-6",children:t.jsx(g,{title:t.jsx("div",{className:"p-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded",children:`${h.street} ${h.addresses.length}`}),children:t.jsx("div",{className:" grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))]",children:h.addresses.sort((n,e)=>n.houseNumber!==e.houseNumber?n.houseNumber-e.houseNumber:n.unitNumber-e.unitNumber).map((n,e)=>t.jsx("div",{children:t.jsxs("div",{onClick:()=>{l(n),m(!0)},className:`m-1 py-2 rounded text-center dark:text-white ${n.houseNumber%2===0?"dark:bg-neutral-600 bg-neutral-300":"dark:bg-neutral-800 bg-neutral-400"}`,children:[n.unitNumber&&`${n.unitNumber}/`,n.houseNumber]})},e))})},d)},d))})},c))]})})},M=u.lazy(()=>w(()=>import("./MapView-f5d19ee1.js"),["assets/MapView-f5d19ee1.js","assets/index-da9740ba.js","assets/index-444b7cfe.css","assets/Modal-093465df.js","assets/transition-8615fb83.js","assets/deleteNotAtHome-7280e71f.js","assets/Disclosure-c1715cfe.js","assets/upDownArrow-3ede802e.js","assets/MapView-22a139a9.css"])),E=({changeSubpage:a})=>{const[s,l]=u.useState([{key:""}]),[p,m]=u.useState([]),[x,o]=u.useState([]);return u.useEffect(()=>$(v(j,"notAtHomes","MaitlandCongregation"),h=>{const d=h.data(),n=d?Object.keys(d).map(e=>({key:e,...d[e]})):[];l(n),m(n.reduce((e,r)=>{if(r.letter)return e;const i=e.findIndex(b=>b.mapNumber===`${r.mapNumber}`);if(i<0)e.push({mapNumber:r.mapNumber,total:1,streets:[{street:r.street,addresses:[r]}]});else{e[i].total=e[i].total+1;const b=e[i].streets.findIndex(f=>f.street===`${r.street}`);b<0?e[i].streets.push({street:r.street,addresses:[r]}):e[i].streets[b].addresses.push(r)}return e},[])),o(n.reduce((e,r)=>{if(r.letter)return e;const i=e.findIndex(b=>b.suburb===`${r.suburb}`);if(i<0)e.push({suburb:r.suburb,total:1,streets:[{street:r.street,addresses:[r]}]});else{e[i].total=e[i].total+1;const b=e[i].streets.findIndex(f=>f.street===`${r.street}`);b<0?e[i].streets.push({street:r.street,addresses:[r]}):e[i].streets[b].addresses.push(r)}return e},[]))}),[]),t.jsx("div",{className:"h-full",children:t.jsx(k,{color:"blue",tabItems:[{title:"Map View",content:t.jsx(u.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsx(M,{notAtHomesList:s})})},{title:"List View",content:t.jsx(L,{suburbs:x})}]})})},O=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{O as R,S as U};
