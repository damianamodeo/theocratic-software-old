import{r as m,j as e}from"./index-470fe414.js";import{M as w,B as p,T as E}from"./Modal-af3e1252.js";import{r as y,f as j,b as S,d as L,c as C}from"./deleteNotAtHome-63823a81.js";import{F as g}from"./Form-8fe73b1d.js";import{C as N}from"./Center-c26fff25.js";import{L as O}from"./Longpress-d3434c70.js";import"./transition-f933da68.js";import"./upDownArrow-80f380b3.js";const M=async({cong:n,mapID:t,suburb:l,street:u,coordinates:o})=>{const r=y(j,n,"maps");try{return await S(j,async c=>{if(!(await c.get(r)).exists())return{};const i=await c.get(r).then(a=>{var b;return(b=a.data())==null?void 0:b.mapDetails});return i[t].suburbs[l].streets.includes(u)||(i[t].suburbs[l].streets=[...i[t].suburbs[l].streets,{name:u,lng:o.lng,lat:o.lat}].sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))),c.update(r,{mapDetails:i}),console.log(`<<< NEW STREET ADDED >>>
`,u,`
Latest mapDetails:`,i),i})}catch(s){return console.error(s.message),s}},$=async(n,t,l,u)=>{t==null||t.toString();const o=`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}.json?country=au&bbox=${t==null?void 0:t.join("%2C")}&proximity=151.209889%2C-33.874666&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(o).then(r=>r.json()).then(r=>r.features)},k=n=>{m.useEffect(()=>{const t=()=>{window.history.pushState({},""),n()};return window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}},[])},_=({isOpen:n,closeModal:t,map:l,suburb:u,mapDetails:o})=>{const[r,s]=m.useState({street:"",lng:0,lat:0}),[c,d]=m.useState([]),i=async h=>{if(h.target.value.length<=2){d([]);return}s({street:h.target.value,lng:0,lat:0});const f=await $(r.street,o[l].suburbs[u].bbox,o[l].suburbs[u].name);f&&d(f)},a=()=>{M({cong:"australia_nsw_maitland",mapID:l,suburb:u,street:r.street,coordinates:{lng:r.lng,lat:r.lat}}),t({type:"street",payload:r.street}),s({street:"",lng:0,lat:0}),d([])},b=()=>{t({type:"street",payload:"init"}),s({street:"",lng:0,lat:0})};return k(()=>{t({type:"street",payload:"init"}),s({street:"",lng:0,lat:0})}),e.jsx(w,{isOpen:n,onClose:()=>{},title:"Add Street",height:"lg",children:e.jsx("div",{className:"h-full relative",children:e.jsx(g,{children:e.jsxs("div",{className:"flex justify-evenly m-4",children:[e.jsx(g.Autocomplete,{value:r.street,onChange:h=>{i(h)},onSelect:h=>{console.log(h.props.children[0].props.id),s({street:h.props.children[0].props.children,lng:h.props.children[0].props.id[0],lat:h.props.children[0].props.id[1]})},options:c.map((h,f)=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-bold",id:h.center,children:h.text}),e.jsx("div",{className:"text-xs",children:h.place_name.split(", ")[1]})]})),width:"lg"}),e.jsxs("div",{className:"flex gap-2 m-auto absolute bottom-0 justify-evenly w-full",children:[e.jsx(p,{color:"blue",clickAction:b,width:"sm",children:"Cancel"}),c.map(h=>h.text).includes(r.street)&&e.jsx(p,{color:"blue",clickAction:a,width:"sm",children:"Add"})]})]})})})})},W=async({cong:n,mapID:t,suburb:l,bbox:u})=>{const o=y(j,n,"maps");try{const r=await S(j,async s=>{if(!(await s.get(o)).exists())return console.log("<<<NO SUCH DOCUMENT>>>"),{};const d=await s.get(o).then(i=>{var a;return(a=i.data())==null?void 0:a.mapDetails});return d[t].suburbs=[...d[t].suburbs,d[t].suburbs.map(({name:i})=>(console.log(i),i)).includes(l)?null:{streets:[],bbox:u,name:l}].sort((i,a)=>i.name.toLowerCase().localeCompare(a.name.toLowerCase())),s.update(o,{mapDetails:d}),d});return console.log(`<<< NEW SUBURB ADDED >>>
`,l,`
Latest mapDetails:`,r),r}catch(r){return console.error(r.message),r}},F=async(n,t,l)=>await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}.json?types=place&proximity=151.209889,-33.874666&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`).then(o=>o.json()).then(o=>o.features),R=({isOpen:n,closeModal:t,map:l})=>{const[u,o]=m.useState(""),[r,s]=m.useState([]),[c,d]=m.useState([]),[i,a]=m.useState([]),b=async x=>{if(o(x.target.value),x.target.value.length<=2){d([]);return}const I=await F(x.target.value);a(I.map((v,D)=>({display:e.jsxs("div",{className:`${D} font-semibold`,children:[v.text,e.jsx("div",{className:"text-sm font-light dark:text-neutral-200",children:v.place_name})]}),...v})))},h=x=>{s(i[x.props.className[0]].bbox),o(x.props.children[0])},f=()=>{W({cong:"australia_nsw_maitland",mapID:l,suburb:u,bbox:r}),t({type:"suburb",payload:u}),o(""),d([])},A=()=>{t({type:"suburb",payload:"init"}),o("")};return m.useEffect(()=>(d(i.map(x=>x.display)),()=>{}),[i]),k(A),e.jsx(w,{isOpen:n,onClose:()=>{},title:"Add Suburb",height:"lg",children:e.jsx("div",{className:"h-full relative",children:e.jsx(g,{children:e.jsxs("div",{className:"flex justify-around m-4",children:[e.jsx(g.Autocomplete,{value:u,onChange:x=>b(x),onSelect:h,options:c,width:"lg"}),e.jsxs("div",{className:"flex gap-2 m-auto-xx absolute bottom-0 justify-evenly w-fit",children:[e.jsx(p,{color:"blue",clickAction:A,width:"sm",children:"Cancel"}),c.map(x=>x.props.children[0]).includes(u)&&e.jsx(p,{color:"blue",clickAction:f,width:"sm",children:"Add"})]})]})})})})},z=async({houseNumber:n,street:t,suburb:l,bbox:u,country:o})=>{const s=`https://api.mapbox.com/geocoding/v5/mapbox.places/${n}%20${t}%20${l}%20.json?country=au&bbox=${u[0]-.015}%2C${u[1]-.015}%2C${u[2]+.015}%2C${u[3]+.015}&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(s).then(c=>c.json()).then(c=>({lng:c.features[0].center[0],lat:c.features[0].center[1],relevance:c.features[0].relevance}))},Q=async({cong:n,mapID:t,lng:l,lat:u,relevance:o,streetCoordinates:r,...s})=>{const c={["id"+Date.now()]:{user:`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`,id:Date.now(),mapNumber:t,relevance:o,...s,...o>.7037?{lng:l,lat:u}:r}},d=y(j,"notAtHomes","MaitlandCongregation");try{const i=await S(j,async a=>{const b="id"+Date.now();return(await a.get(d)).exists()?(a.update(d,c),c):(a.set(d,c),"First Not At Home created successfully")});return console.log(`<<< NEW NOT AT HOME ADDED >>>
Address Details:`,i),i}catch(i){return console.error(i.message),i}},B=({closeModal:n,address:t,streetCoordinates:l,bbox:u,dispatch:o})=>{const[r,s]=m.useState({lng:0,lat:0,relevance:-1}),[c,d]=m.useState(!1),i=async()=>{const b=await z({...t,bbox:u});s(b)},a=async b=>{await Q({...r,...t,calls:[Date.now()],cong:"australia_nsw_maitland",streetCoordinates:l,letter:b}),t.unitNumber===""&&o({type:"houseNumber",payload:""}),o({type:"unitNumber",payload:""}),n(!1)};return m.useEffect(()=>{i()},[]),e.jsx(w,{isOpen:!0,onClose:()=>{},title:"",height:"lg",children:e.jsx(N,{children:e.jsx("div",{className:"h-full relative text-white",children:e.jsx(g,{children:e.jsxs("div",{className:"text-center text-lg font-bold m-1 pt-2 h-full",children:[e.jsxs("div",{className:"text-center m-4",children:[t.unitNumber,t.unitNumber?"/":"",t.houseNumber," ",t.street,", ",t.suburb]}),r.relevance<0?e.jsx("div",{children:"Loading"}):r.relevance<1?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-orange-500",children:["WARNING!!!",e.jsx("p",{className:"mx-10 text-center text-base font-light",children:"Exact coordinates were not found for this address. Are you sure you want to submit?"})]}),e.jsx("div",{className:"grid place-items-center gap-2 mt-10",children:c?e.jsxs(e.Fragment,{children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>n(!1),children:"cancel"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>a(!0),children:"Letter List"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>a(!1),children:"Return List"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>n(!1),children:"No"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>d(!0),children:"Yes"})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-green-500 text-base font-normal",children:["SUCCESS!!!",e.jsx("p",{children:"Exact match found."})]}),e.jsxs(N,{style:"gap-5 mt-4",children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>n(!1),children:"cancel"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>a(!0),children:"Letter List"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>a(!1),children:"Return List"})]})]})]})})})})})},Z=(n,t)=>typeof t.payload=="object"?{...n,[t.type]:"adding "+t.type}:{mapID:{mapID:t.payload,suburb:"init",street:"init",houseNumber:"",unitNumber:""},suburb:{...n,suburb:t.payload,street:"init",houseNumber:"",unitNumber:""},street:{...n,street:t.payload,houseNumber:"",unitNumber:""},houseNumber:{...n,houseNumber:t.payload},unitNumber:{...n,unitNumber:t.payload}}[t.type],Y=({mapDetails:n})=>{const[t,l]=m.useReducer(Z,{mapID:"init",suburb:"init",street:"init",houseNumber:"",unitNumber:"",mapData:{}}),[u,o]=m.useState(!1),r=()=>Math.max(0,n.findIndex(a=>a.id==t.mapID)),s=()=>t.mapID==="init"?0:Math.max(0,n[r()].suburbs.findIndex(a=>a.name===t.suburb)),c=()=>n[r()].suburbs[s()].streets.findIndex(a=>a.name===t.street),d=n.length===0?[]:n[r()].suburbs.map(a=>a.name),i=n.length===0?[]:n[r()].suburbs.length===0?[]:n[r()].suburbs[s()].streets.map(a=>a.name);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex justify-center p-2 w-full",children:[e.jsxs(g,{children:[e.jsx(g.Select,{onChange:a=>{l({type:"mapID",payload:a})},options:n.map(a=>a.id),placeholder:"Map",value:t.mapID,width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),t.mapID!=="init"&&e.jsx(g.Select,{onChange:a=>{l({type:"suburb",payload:a})},value:t.suburb,options:[...d,e.jsx("span",{className:"text-blue-400",children:"add new suburb"})],placeholder:"Suburb",width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),t.suburb==="init"?null:e.jsx(g.Select,{onChange:a=>{l({type:"street",payload:a})},value:t.street,options:[...i,e.jsx("span",{className:"text-blue-400",children:"add new street"})],placeholder:"Street",width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),e.jsxs("div",{className:"flex",children:[t.houseNumber===""?null:e.jsx(e.Fragment,{children:e.jsx(g.Alphanumeric,{value:t.unitNumber,label:"",placeholder:"Unit",onChange:a=>l({type:"unitNumber",payload:a}),width:"sm",height:"md"})}),e.jsx("div",{className:"grow"}),t.street==="init"?null:e.jsx(g.Alphanumeric,{value:t.houseNumber,label:"",placeholder:"House",onChange:a=>l({type:"houseNumber",payload:a}),width:"sm",height:"md"})]}),e.jsx("div",{className:"h-8"}),e.jsx("div",{className:"grid gap-4",children:t.houseNumber===""?null:e.jsx(N,{children:e.jsx(p,{clickAction:()=>o(!0),width:"md",height:"md",color:"blue",children:"Add"})})})]}),e.jsx(R,{isOpen:t.suburb==="adding suburb",closeModal:l,map:r()}),e.jsx(_,{isOpen:t.street==="adding street",closeModal:l,map:r(),suburb:s(),mapDetails:n}),u&&e.jsx(B,{closeModal:o,address:t,bbox:n[r()].suburbs[s()].bbox,streetCoordinates:{lng:n[r()].suburbs[s()].streets[c()].lng,lat:n[r()].suburbs[s()].streets[c()].lat},dispatch:l})]})})},G=({isOpen:n,address:t,setUpdateModelOpen:l})=>e.jsxs(w,{onClose:()=>{},title:"",isOpen:n,height:"md",children:[e.jsxs("div",{className:"h-full text-center text-lg dark:text-white",children:["Would you like to delete",e.jsxs("p",{className:"font-bold text-xl py-2",children:[t.unitNumber&&`${t.unitNumber}/`,t.houseNumber," ",t.street,", ",t.suburb,"?"]})]}),e.jsx(N,{children:e.jsxs("div",{className:"grid gap-8",children:[e.jsx(p,{width:"md",clickAction:()=>{l(!1)},color:"red",children:"NO"}),e.jsx(p,{width:"md",clickAction:()=>{L(t),l(!1)},color:"green",children:"YES"})]})})]}),H=({notAtHomesList:n})=>{const[t,l]=m.useState(!1),[u,o]=m.useState({}),r=s=>{o(s),l(!0)};return e.jsxs("div",{className:"pb-16",children:[e.jsx("div",{className:"text-sm text-center m-2 text-blue-500 dark:text-blue-300"}),n&&n.sort((s,c)=>c.key.localeCompare(s.key)).filter(s=>s.user===`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`).map((s,c)=>e.jsx("div",{children:e.jsxs("div",{className:"flex rounded m-2 p-2 dark:bg-neutral-700 bg-neutral-200 text-xs",children:[e.jsxs("div",{className:"dark:text-white",children:[e.jsxs("div",{className:"font-bold",children:["Map: ",s.mapNumber," - ",s.suburb," - ",s.letter?e.jsx("span",{className:"text-blue-500 dark:text-blue-400",children:"Letter List"}):e.jsx("span",{className:"text-green-500 dark:text-green-400",children:"Return List"})]}),e.jsx("div",{className:"text-lg",children:`${s.unitNumber&&`${s.unitNumber}/`}${s.houseNumber} ${s.street}`})]}),e.jsx("div",{className:"grow"}),e.jsx(O,{style:"w-10 grid place-items-center",action:()=>r(s),children:e.jsx("div",{children:e.jsx("div",{className:"bg-red-500 font-bold h-4 w-4 text-xs rounded-full text-center",children:"X"})})})]})},c)),t&&e.jsx(G,{isOpen:t,address:u,setUpdateModelOpen:l})]})},ee=({changeSubpage:n})=>{const[t,l]=m.useState([]),[u,o]=m.useState([{key:""}]);return m.useEffect(()=>C(y(j,"notAtHomes","MaitlandCongregation"),s=>{const c=s.data(),d=c?Object.keys(c).map(i=>({key:i,...c[i]})):[];o(d)}),[]),m.useEffect(()=>{const r=C(y(j,"australia_nsw_maitland","maps"),s=>{var c;s.data()&&l((c=s.data())==null?void 0:c.mapDetails)});return()=>{r()}},[]),e.jsx("div",{className:"h-full",children:e.jsx(E,{color:"blue",tabItems:[{title:"Add",content:e.jsx(Y,{mapDetails:t})},{title:"List",content:e.jsx(H,{notAtHomesList:u})}]})})};export{ee as default};
