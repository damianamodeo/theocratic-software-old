import{j as e,r as l}from"./index-887eaa62.js";import{M as n,T as r}from"./Modal-6f3faef8.js";import{B as s}from"./Button-c24d5508.js";import"./transition-f739a463.js";const a=()=>e.jsx("div",{className:"pb-16 grid place-items-center h-full text-6xl dark:text-white",children:"Page Two"}),c=({isOpen:o,setModelOpen:t})=>e.jsx(n,{onClose:()=>{},title:"Modal",isOpen:o,height:"md",children:e.jsx("div",{className:"grid place-items-center h-full",children:e.jsx(s,{width:"md",clickAction:()=>{t(!1)},color:"red",children:"Close Modal"})})}),i=()=>{const[o,t]=l.useState(!1);return e.jsxs("div",{className:"pb-16 grid place-items-center h-full",children:[e.jsx(s,{clickAction:()=>{t(!0)},longPressAction:()=>{t(!0)},delay:500,color:"green",width:"md",children:"Open Modal"}),o&&e.jsx(c,{isOpen:o,setModelOpen:t})]})},h=()=>e.jsx("div",{className:"h-full",children:e.jsx(r,{color:"blue",tabItems:[{title:"Page One",content:e.jsx(i,{})},{title:"Page Two",content:e.jsx(a,{})}]})});export{h as default};
