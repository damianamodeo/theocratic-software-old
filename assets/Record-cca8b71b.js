import{r as h,j as e}from"./index-d0ba3f98.js";import{M as S,B as p,T as D}from"./Modal-1dd07ec0.js";import{g as N,f as j,U as v,d as M,I as w}from"./deleteNotAtHome-0bb54eec.js";import{F as g}from"./Form-2376d094.js";import{C as y}from"./Center-39016f05.js";import{L as E}from"./Longpress-d30ca982.js";import"./transition-aac362fc.js";import"./upDownArrow-117a4bd3.js";const O=async({cong:r,mapID:t,suburb:n,street:u,coordinates:o})=>{const l=N(j,r,"maps");try{return await v(j,async c=>{if(!(await c.get(l)).exists())return{};const d=await c.get(l).then(m=>{var a;return(a=m.data())==null?void 0:a.mapDetails});return d[t].suburbs[n].streets.includes(u)||(d[t].suburbs[n].streets=[...d[t].suburbs[n].streets,{name:u,lng:o.lng,lat:o.lat}].sort((m,a)=>m.name.toLowerCase().localeCompare(a.name.toLowerCase()))),c.update(l,{mapDetails:d}),console.log(`<<< NEW STREET ADDED >>>
`,u,`
Latest mapDetails:`,d),d})}catch(s){return console.error(s.message),s}},L=async(r,t,n,u)=>{t==null||t.toString();const o=`https://api.mapbox.com/geocoding/v5/mapbox.places/${r}.json?country=au&bbox=${t==null?void 0:t.join("%2C")}&proximity=151.209889%2C-33.874666&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(o).then(l=>l.json()).then(l=>l.features)},$=({isOpen:r,closeModal:t,map:n,suburb:u,mapDetails:o})=>{const[l,s]=h.useState({street:"",lng:0,lat:0}),[c,i]=h.useState([]),d=async b=>{if(b.target.value.length<=2){i([]);return}s({street:b.target.value,lng:0,lat:0});const f=await L(l.street,o[n].suburbs[u].bbox,o[n].suburbs[u].name);f&&i(f)},m=()=>{O({cong:"australia_nsw_maitland",mapID:n,suburb:u,street:l.street,coordinates:{lng:l.lng,lat:l.lat}}),t({type:"street",payload:l.street}),s({street:"",lng:0,lat:0}),i([])},a=()=>{t({type:"street",payload:"init"}),s({street:"",lng:0,lat:0})};return e.jsx(S,{isOpen:r,onClose:()=>{},title:"Add Street",height:"lg",children:e.jsx("div",{className:"h-full relative",children:e.jsx(g,{children:e.jsxs("div",{className:"flex justify-evenly m-4",children:[e.jsx(g.Autocomplete,{value:l.street,onChange:b=>{d(b)},onSelect:b=>{console.log(b.props.children[0].props.id),s({street:b.props.children[0].props.children,lng:b.props.children[0].props.id[0],lat:b.props.children[0].props.id[1]})},options:c.map((b,f)=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-bold",id:b.center,children:b.text}),e.jsx("div",{className:"text-xs",children:b.place_name.split(", ")[1]})]})),width:"lg"}),e.jsxs("div",{className:"flex gap-2 m-auto absolute bottom-0 justify-evenly w-full",children:[e.jsx(p,{color:"blue",clickAction:a,width:"sm",children:"Cancel"}),c.map(b=>b.text).includes(l.street)&&e.jsx(p,{color:"blue",clickAction:m,width:"sm",children:"Add"})]})]})})})})},_=async({cong:r,mapID:t,suburb:n,bbox:u})=>{const o=N(j,r,"maps");try{const l=await v(j,async s=>{if(!(await s.get(o)).exists())return console.log("<<<NO SUCH DOCUMENT>>>"),{};const i=await s.get(o).then(d=>{var m;return(m=d.data())==null?void 0:m.mapDetails});return i[t].suburbs=[...i[t].suburbs,i[t].suburbs.map(({name:d})=>(console.log(d),d)).includes(n)?null:{streets:[],bbox:u,name:n}].sort((d,m)=>d.name.toLowerCase().localeCompare(m.name.toLowerCase())),s.update(o,{mapDetails:i}),i});return console.log(`<<< NEW SUBURB ADDED >>>
`,n,`
Latest mapDetails:`,l),l}catch(l){return console.error(l.message),l}},U=async(r,t,n)=>await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${r}.json?types=place&proximity=151.209889,-33.874666&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`).then(o=>o.json()).then(o=>o.features),W=({isOpen:r,closeModal:t,map:n})=>{const[u,o]=h.useState(""),[l,s]=h.useState([]),[c,i]=h.useState([]),[d,m]=h.useState([]),a=async x=>{if(o(x.target.value),x.target.value.length<=2){i([]);return}const C=await U(x.target.value);m(C.map((A,k)=>({display:e.jsxs("div",{className:`${k} font-semibold`,children:[A.text,e.jsx("div",{className:"text-sm font-light dark:text-neutral-200",children:A.place_name})]}),...A})))},b=x=>{s(d[x.props.className[0]].bbox),o(x.props.children[0])},f=()=>{_({cong:"australia_nsw_maitland",mapID:n,suburb:u,bbox:l}),t({type:"suburb",payload:u}),o(""),i([])},I=()=>{t({type:"suburb",payload:"init"}),o("")};return h.useEffect(()=>(i(d.map(x=>x.display)),()=>{}),[d]),e.jsx(S,{isOpen:r,onClose:()=>{},title:"Add Suburb",height:"lg",children:e.jsx("div",{className:"h-full relative",children:e.jsx(g,{children:e.jsxs("div",{className:"flex justify-around m-4",children:[e.jsx(g.Autocomplete,{value:u,onChange:x=>a(x),onSelect:b,options:c,width:"lg"}),e.jsxs("div",{className:"flex gap-2 m-auto-xx absolute bottom-0 justify-evenly w-fit",children:[e.jsx(p,{color:"blue",clickAction:I,width:"sm",children:"Cancel"}),c.map(x=>x.props.children[0]).includes(u)&&e.jsx(p,{color:"blue",clickAction:f,width:"sm",children:"Add"})]})]})})})})},F=async({houseNumber:r,street:t,suburb:n,bbox:u,country:o})=>{const s=`https://api.mapbox.com/geocoding/v5/mapbox.places/${r}%20${t}%20${n}%20.json?country=au&bbox=${u[0]-.015}%2C${u[1]-.015}%2C${u[2]+.015}%2C${u[3]+.015}&types=address&fuzzyMatch=false&access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`;return await fetch(s).then(c=>c.json()).then(c=>({lng:c.features[0].center[0],lat:c.features[0].center[1],relevance:c.features[0].relevance}))},H=async({cong:r,mapID:t,lng:n,lat:u,relevance:o,streetCoordinates:l,...s})=>{const c={["id"+Date.now()]:{user:`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`,id:Date.now(),mapNumber:t,relevance:o,...s,...o>.7037?{lng:n,lat:u}:l}},i=N(j,"notAtHomes","MaitlandCongregation");try{const d=await v(j,async m=>{const a="id"+Date.now();return(await m.get(i)).exists()?(m.update(i,c),c):(m.set(i,c),"First Not At Home created successfully")});return console.log(`<<< NEW NOT AT HOME ADDED >>>
Address Details:`,d),d}catch(d){return console.error(d.message),d}},R=({closeModal:r,address:t,streetCoordinates:n,bbox:u,dispatch:o})=>{const[l,s]=h.useState({lng:0,lat:0,relevance:-1}),[c,i]=h.useState(!1),d=async()=>{const a=await F({...t,bbox:u});s(a)},m=async a=>{await H({...l,...t,calls:[Date.now()],cong:"australia_nsw_maitland",streetCoordinates:n,letter:a}),t.unitNumber===""&&o({type:"houseNumber",payload:""}),o({type:"unitNumber",payload:""}),r(!1)};return h.useEffect(()=>{d()},[]),e.jsx(S,{isOpen:!0,onClose:()=>{},title:"",height:"lg",children:e.jsx(y,{children:e.jsx("div",{className:"h-full relative text-white",children:e.jsx(g,{children:e.jsxs("div",{className:"text-center text-lg font-bold m-1 pt-2 h-full",children:[e.jsxs("div",{className:"text-center m-4",children:[t.unitNumber,t.unitNumber?"/":"",t.houseNumber," ",t.street,", ",t.suburb]}),l.relevance<0?e.jsx("div",{children:"Loading"}):l.relevance<1?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-orange-500",children:["WARNING!!!",e.jsx("p",{className:"mx-10 text-center text-base font-light",children:"Exact coordinates were not found for this address. Are you sure you want to submit?"})]}),e.jsx("div",{className:"grid place-items-center gap-2 mt-10",children:c?e.jsxs(e.Fragment,{children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>r(!1),children:"cancel"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>m(!0),children:"Letter List"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>m(!1),children:"Return List"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>r(!1),children:"No"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>i(!0),children:"Yes"})]})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"text-green-500 text-base font-normal",children:["SUCCESS!!!",e.jsx("p",{children:"Exact match found."})]}),e.jsxs(y,{style:"gap-5 mt-4",children:[e.jsx(p,{color:"blue",width:"md",clickAction:()=>r(!1),children:"cancel"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>m(!0),children:"Letter List"}),e.jsx(p,{color:"blue",width:"md",clickAction:()=>m(!1),children:"Return List"})]})]})]})})})})})},z=(r,t)=>typeof t.payload=="object"?{...r,[t.type]:"adding "+t.type}:{mapID:{mapID:t.payload,suburb:"init",street:"init",houseNumber:"",unitNumber:""},suburb:{...r,suburb:t.payload,street:"init",houseNumber:"",unitNumber:""},street:{...r,street:t.payload,houseNumber:"",unitNumber:""},houseNumber:{...r,houseNumber:t.payload},unitNumber:{...r,unitNumber:t.payload}}[t.type],Q=({mapDetails:r})=>{const[t,n]=h.useReducer(z,{mapID:localStorage.getItem("addAddressMapID")||"init",suburb:localStorage.getItem("addAddressSuburb")||"init",street:localStorage.getItem("addAddressStreet")||"init",houseNumber:localStorage.getItem("addAddressHouseNumber")||"",unitNumber:localStorage.getItem("addAddressUnitNumber")||"",mapData:{}}),[u,o]=h.useState(!1),l=h.useRef(null),s=()=>Math.max(0,r.findIndex(a=>a.id==t.mapID)),c=()=>t.mapID==="init"||t.mapID===localStorage.getItem("addAddressMapID")?0:Math.max(0,r[s()].suburbs.findIndex(a=>a.name===t.suburb)),i=()=>r[s()].suburbs[c()].streets.findIndex(a=>a.name===t.street),d=r.length===0?[]:r[s()].suburbs.map(a=>a.name),m=r.length===0?[]:r[s()].suburbs.length===0?[]:r[s()].suburbs[c()].streets.map(a=>a.name);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center p-2 w-full",children:e.jsxs(g,{children:[e.jsx(g.Select,{onChange:a=>{localStorage.setItem("addAddressMapID",a),localStorage.removeItem("addAddressSuburb"),localStorage.removeItem("addAddressStreet"),localStorage.removeItem("addAddressUnitNumber"),localStorage.removeItem("addAddressHouseNumber"),n({type:"mapID",payload:a})},options:r.map(a=>a.id),placeholder:"Map",value:t.mapID,width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),t.mapID!=="init"&&e.jsx(g.Select,{onChange:a=>{localStorage.setItem("addAddressSuburb",a),localStorage.removeItem("addAddressStreet"),localStorage.removeItem("addAddressUnitNumber"),localStorage.removeItem("addAddressHouseNumber"),n({type:"suburb",payload:a})},value:t.suburb,options:[...d,e.jsx("span",{className:"text-blue-400",children:"add new suburb"})],placeholder:"Suburb",width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),t.suburb==="init"?null:e.jsx(g.Select,{onChange:a=>{localStorage.setItem("addAddressStreet",a),localStorage.removeItem("addAddressUnitNumber"),localStorage.removeItem("addAddressHouseNumber"),n({type:"street",payload:a})},value:t.street,options:[...m,e.jsx("span",{className:"text-blue-400",children:"add new street"})],placeholder:"Street",width:"full",height:"md"}),e.jsx("div",{className:"h-2"}),e.jsxs("div",{className:"flex",children:[t.houseNumber===""?null:e.jsx(e.Fragment,{children:e.jsx(g.Alphanumeric,{value:t.unitNumber,label:"",placeholder:"Unit",onChange:a=>{localStorage.setItem("addAddressUnitNumber",a),n({type:"unitNumber",payload:a})},width:"sm",height:"md"})}),e.jsx("div",{className:"grow"}),t.street==="init"?null:e.jsx(g.Alphanumeric,{value:t.houseNumber,label:"",placeholder:"House",onChange:a=>{localStorage.setItem("addAddressHouseNumber",a),localStorage.removeItem("addAddressUnitNumber"),n({type:"houseNumber",payload:a})},width:"sm",height:"md",ref:l})]}),e.jsx("div",{className:"h-8"}),e.jsx("div",{className:"grid gap-4",children:t.houseNumber===""?null:e.jsx(y,{children:e.jsx(p,{clickAction:()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur(),o(!0)},width:"md",height:"md",color:"blue",children:"Add"})})})]})}),e.jsx(W,{isOpen:t.suburb==="adding suburb",closeModal:n,map:s()}),e.jsx($,{isOpen:t.street==="adding street",closeModal:n,map:s(),suburb:c(),mapDetails:r}),u&&e.jsx(R,{closeModal:o,address:t,bbox:r[s()].suburbs[c()].bbox,streetCoordinates:{lng:r[s()].suburbs[c()].streets[i()].lng,lat:r[s()].suburbs[c()].streets[i()].lat},dispatch:n})]})},Z=({isOpen:r,address:t,setUpdateModelOpen:n})=>e.jsxs(S,{onClose:()=>{},title:"",isOpen:r,height:"md",children:[e.jsxs("div",{className:"h-full text-center text-lg dark:text-white",children:["Would you like to delete",e.jsxs("p",{className:"font-bold text-xl py-2",children:[t.unitNumber&&`${t.unitNumber}/`,t.houseNumber," ",t.street,", ",t.suburb,"?"]})]}),e.jsx(y,{children:e.jsxs("div",{className:"grid gap-8",children:[e.jsx(p,{width:"md",clickAction:()=>{n(!1)},color:"red",children:"NO"}),e.jsx(p,{width:"md",clickAction:()=>{M(t),n(!1)},color:"green",children:"YES"})]})})]}),Y=({notAtHomesList:r})=>{const[t,n]=h.useState(!1),[u,o]=h.useState({}),l=s=>{o(s),n(!0)};return e.jsxs("div",{className:"pb-16",children:[e.jsx("div",{className:"text-sm text-center m-2 text-blue-500 dark:text-blue-300"}),r&&r.sort((s,c)=>c.key.localeCompare(s.key)).filter(s=>s.user===`${localStorage.getItem("initID")}_${localStorage.getItem("username")}`).map((s,c)=>e.jsx("div",{children:e.jsxs("div",{className:"flex rounded m-2 p-2 dark:bg-neutral-700 bg-neutral-200 text-xs",children:[e.jsxs("div",{className:"dark:text-white",children:[e.jsxs("div",{className:"font-bold",children:["Map: ",s.mapNumber," - ",s.suburb," - ",s.letter?e.jsx("span",{className:"text-blue-500 dark:text-blue-400",children:"Letter List"}):e.jsx("span",{className:"text-green-500 dark:text-green-400",children:"Return List"})]}),e.jsx("div",{className:"text-lg",children:`${s.unitNumber&&`${s.unitNumber}/`}${s.houseNumber} ${s.street}`})]}),e.jsx("div",{className:"grow"}),e.jsx(E,{style:"w-10 grid place-items-center",action:()=>l(s),children:e.jsx("div",{children:e.jsx("div",{className:"bg-red-500 font-bold h-4 w-4 text-xs rounded-full text-center",children:"X"})})})]})},c)),t&&e.jsx(Z,{isOpen:t,address:u,setUpdateModelOpen:n})]})},P=()=>{const[r,t]=h.useState([]),[n,u]=h.useState([{key:""}]);return h.useEffect(()=>w(N(j,"notAtHomes","MaitlandCongregation"),l=>{const s=l.data(),c=s?Object.keys(s).map(i=>({key:i,...s[i]})):[];u(c)}),[]),h.useEffect(()=>{const o=w(N(j,"australia_nsw_maitland","maps"),l=>{var s;l.data()&&t((s=l.data())==null?void 0:s.mapDetails)});return()=>{o()}},[]),e.jsx("div",{className:"h-full",children:e.jsx(D,{color:"blue",tabItems:[{title:"Add",content:e.jsx(Q,{mapDetails:r})},{title:"List",content:e.jsx(Y,{notAtHomesList:n})}]})})};export{P as default};
