import{j as e,V as i}from"./index-27fd30b0.js";const r=()=>{const s=[{date:"June 19, 2023",changes:["Add user location to map","Fix map resize on orientation change"]},{date:"June 16, 2023",changes:["Fix order of house numbers in suburb list"]},{date:"June 13, 2023",changes:["Status bar follows user theme color","Add Map View to Return Page"]},{date:"June 4, 2023",changes:["Prevent back button from closing app on Android devices","Hide keyboard when adding address","Fix Version time"]}];return e.jsx("div",{className:"m-6",children:s.map((a,n)=>e.jsxs("ul",{className:"mt-8 font-bold dark:text-white list-disc p-4",children:[a.date,a.changes.map((t,o)=>e.jsx("li",{className:"mt-1 font-light",children:t},o))]},n))})},c=({changeSubpage:s})=>e.jsxs("div",{className:"h-full overflow-y-auto",children:[e.jsx(i,{}),e.jsx(r,{})]});export{c as default};