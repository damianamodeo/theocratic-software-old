import{r as i,j as f,R as p,a as We,e as te,u as Ye}from"./index-5d77913d.js";import{w as Ve,k as Ue,s as ve,e as _e,L as $,y as T,q as ue,o as y,u as H,v as _,x as j,p as qe,f as re,g as ne,D as S,m as ie,S as R,z as G,B as ke,N as Ge,T as Je,E as xe,l as I,I as O,G as Ke,h as Qe,j as be,C as Xe,d as U,b as Ze,a as et,r as tt,t as Q}from"./transition-72e23a90.js";const pe={slate:{text:"text-slate-500 dark:text-slate-200",background:"bg-slate-500 dark:bg-slate-200"},gray:{text:"text-gray-500 dark:text-gray-200",background:"bg-gray-500 dark:bg-gray-200"},zinc:{text:"text-zinc-500 dark:text-zinc-200",background:"bg-zinc-500 dark:bg-zinc-200"},neutral:{text:"text-neutral-500 dark:text-neutral-200",background:"bg-neutral-500 dark:bg-neutral-200"},stone:{text:"text-stone-500 dark:text-stone-200",background:"bg-stone-500 dark:bg-stone-200"},red:{text:"text-red-500 dark:text-red-200",background:"bg-red-500 dark:bg-red-200"},orange:{text:"text-orange-500 dark:text-orange-200",background:"bg-orange-500 dark:bg-orange-200"},amber:{text:"text-amber-500 dark:text-amber-200",background:"bg-amber-500 dark:bg-amber-200"},yellow:{text:"text-yellow-500 dark:text-yellow-200",background:"bg-yellow-500 dark:bg-yellow-200"},lime:{text:"text-lime-500 dark:text-lime-200",background:"bg-lime-500 dark:bg-lime-200"},green:{text:"text-green-500 dark:text-green-200",background:"bg-green-500 dark:bg-green-200"},emerald:{text:"text-emerald-500 dark:text-emerald-200",background:"bg-emerald-500 dark:bg-emerald-200"},teal:{text:"text-teal-500 dark:text-teal-200",background:"bg-teal-500 dark:bg-teal-200"},cyan:{text:"text-cyan-500 dark:text-cyan-200",background:"bg-cyan-500 dark:bg-cyan-200"},sky:{text:"text-sky-500 dark:text-sky-200",background:"bg-sky-500 dark:bg-sky-200"},blue:{text:"text-blue-500 dark:text-blue-400",background:"bg-blue-500 dark:bg-blue-400"},darkblue:{text:"text-darkblue-500 dark:text-darkblue-200",background:"bg-darkblue-500 dark:bg-darkblue-200"},indigo:{text:"text-indigo-500 dark:text-indigo-200",background:"bg-indigo-500 dark:bg-indigo-200"},violet:{text:"text-violet-500 dark:text-violet-200",background:"bg-violet-500 dark:bg-violet-200"},purple:{text:"text-purple-500 dark:text-purple-200",background:"bg-purple-500 dark:bg-purple-200"},fuchsia:{text:"text-fuchsia-500 dark:text-fuchsia-200",background:"bg-fuchsia-500 dark:bg-fuchsia-200"},pink:{text:"text-pink-500 dark:text-pink-200",background:"bg-pink-500 dark:bg-pink-200"},rose:{text:"text-rose-500 dark:text-rose-200",background:"bg-rose-500 dark:bg-rose-200"}},hr=({tabItems:e,color:r="blue"})=>{const t=(c,s)=>{var d;(d=a[s].current)==null||d.scrollIntoView()},n=i.useRef(document.createElement("div")),a=e.map(()=>i.useRef(document.createElement("div"))),o=e.map(()=>i.useRef(document.createElement("div"))),[l,u]=i.useState(e.map(()=>!1));return i.useEffect(()=>{o.forEach((c,s)=>{new IntersectionObserver(v=>{var h;v[0].isIntersecting&&(u(l.map((C,w)=>w===s)),(h=o[s].current)==null||h.scrollIntoView(),o[s].current!=null&&(n.current.style.left=o[s].current.offsetLeft-5+"px",n.current.style.width=o[s].current.offsetWidth+10+"px"))},{threshold:.8}).observe(a[s].current)})},[]),i.useEffect(()=>{const c=d=>{d.preventDefault(),s.scrollLeft+=d.deltaY/5},s=document.querySelector(".tabbar");return s.addEventListener("wheel",c),()=>{s==null||s.removeEventListener("wheel",c)}}),f.jsxs("div",{className:"h-full flex flex-col",children:[f.jsxs("div",{className:`h-10 hideScollbar tabbar relative flex bg-white dark:bg-neutral-900 w-full touch-auto 
				overflow-x-auto overflow-y-hidden border border-x-0 border-t-0 border-b-[1.25px] border-y-neutral-500 dark:border-y-neutral-500`,children:[e.map((c,s)=>f.jsxs("div",{ref:o[s],onClick:d=>t(d,s),className:`uppercase mx-3 ${l[s]?`font-extrabold ${pe[r].text}`:"dark:text-white"}`,children:[f.jsx("div",{className:"my-2 w-max",children:c.title}),f.jsx("div",{className:"-z-1 h-0 font-extrabold invisible w-max",children:c.title})]},s)),f.jsx("div",{className:`absolute left-0 bottom-0 h-[2px] ${pe[r].background} transition-all duration-300`,ref:n})]}),f.jsx("div",{className:"h-full relative overflow-y-auto overscroll-x-contain",children:f.jsx("div",{className:"hideScollbar h-full grid grid-flow-col auto-cols-[100%] snap-mandatory snap-x snap-always overflow-y-auto ",children:e.map((c,s)=>f.jsx("div",{ref:a[s],className:"snap-start overflow-y-auto h-full overflow-x-hidden",children:c.content},s))})})]})},rt=(e,r,{shouldPreventDefault:t=!0,delay:n=300}={})=>{const[a,o]=i.useState(!1),l=i.useRef(),u=i.useRef(),c=i.useCallback(d=>{t&&d.target&&(d.target.addEventListener("touchend",me,{passive:!1}),u.current=d.target),l.current=setTimeout(()=>{e(d),o(!0)},n)},[e,n,t]),s=i.useCallback((d,v=!0)=>{l.current&&clearTimeout(l.current),v&&!a&&r(),o(!1),t&&u.current&&u.current.removeEventListener("touchend",me)},[t,r,a]);return{onMouseDown:d=>c(d),onTouchStart:d=>c(d),onMouseUp:d=>s(d),onMouseLeave:d=>s(d,!1),onTouchEnd:d=>s(d)}},nt=e=>"touches"in e,me=e=>{nt(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},at={slate:"bg-slate-500 hover:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-400 ",gray:"bg-gray-500 hover:bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-400 ",zinc:"bg-zinc-500 hover:bg-zinc-400 dark:bg-zinc-300 dark:hover:bg-zinc-400 ",neutral:"bg-neutral-500 hover:bg-neutral-400 dark:bg-neutral-300 dark:hover:bg-neutral-400 ",stone:"bg-stone-500 hover:bg-stone-400 dark:bg-stone-300 dark:hover:bg-stone-400 ",red:"bg-red-500 hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400 ",orange:"bg-orange-500 hover:bg-orange-400 dark:bg-orange-300 dark:hover:bg-orange-400 ",amber:"bg-amber-500 hover:bg-amber-400 dark:bg-amber-300 dark:hover:bg-amber-400 ",yellow:"bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 ",lime:"bg-lime-500 hover:bg-lime-400 dark:bg-lime-300 dark:hover:bg-lime-400 ",green:"bg-green-500 hover:bg-green-400 dark:bg-green-300 dark:hover:bg-green-400 ",emerald:"bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-300 dark:hover:bg-emerald-400 ",teal:"bg-teal-500 hover:bg-teal-400 dark:bg-teal-300 dark:hover:bg-teal-400 ",cyan:"bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 ",sky:"bg-sky-500 hover:bg-sky-400 dark:bg-sky-300 dark:hover:bg-sky-400 ",blue:"bg-blue-500 hover:bg-blue-400 dark:bg-blue-300 dark:hover:bg-blue-400 ",darkblue:"bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 ",indigo:"bg-indigo-500 hover:bg-indigo-400 dark:bg-indigo-300 dark:hover:bg-indigo-400 ",violet:"bg-violet-500 hover:bg-violet-400 dark:bg-violet-300 dark:hover:bg-violet-400 ",purple:"bg-purple-500 hover:bg-purple-400 dark:bg-purple-300 dark:hover:bg-purple-400 ",fuchsia:"bg-fuchsia-500 hover:bg-fuchsia-400 dark:bg-fuchsia-300 dark:hover:bg-fuchsia-400 ",pink:"bg-pink-500 hover:bg-pink-400 dark:bg-pink-300 dark:hover:bg-pink-400 ",rose:"bg-rose-500 hover:bg-rose-400 dark:bg-rose-300 dark:hover:bg-rose-400 "},vr=({clickAction:e,longPressAction:r,children:t,color:n,width:a,delay:o,submit:l,height:u="md"})=>{const c=i.useRef(document.createElement("button")),h=rt(()=>{r&&r(),l&&c.current.click()},()=>{e&&e(),l&&c.current.click()},{shouldPreventDefault:!0,delay:o});return f.jsx(f.Fragment,{children:f.jsx("button",{...h,type:`${l?"submit":"button"}`,className:`${at[n]} ${Ve[a]} ${Ue[u]} w- rounded text-white font-medium px-5 py-2.5 focus:outline-none dark:text-black`,ref:c,children:t})})};function ot(e,r,t){let n=ve(r);i.useEffect(()=>{function a(o){n.current(o)}return window.addEventListener(e,a,t),()=>window.removeEventListener(e,a,t)},[e,t])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function lt(){let e=i.useRef(0);return ot("keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}function J(...e){return i.useMemo(()=>_e(...e),[...e])}function we(e,r,t,n){let a=ve(t);i.useEffect(()=>{e=e??window;function o(l){a.current(l)}return e.addEventListener(r,o,n),()=>e.removeEventListener(r,o,n)},[e,r,n])}function ye(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let r=new Set;for(let t of e.current)t.current instanceof HTMLElement&&r.add(t.current);return r}let ut="div";var Ee=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ee||{});function it(e,r){let t=i.useRef(null),n=T(t,r),{initialFocus:a,containers:o,features:l=30,...u}=e;ue()||(l=1);let c=J(t);ct({ownerDocument:c},Boolean(l&16));let s=ft({ownerDocument:c,container:t,initialFocus:a},Boolean(l&2));gt({ownerDocument:c,container:t,containers:o,previousActiveElement:s},Boolean(l&8));let d=lt(),v=y(b=>{let E=t.current;E&&(L=>L())(()=>{H(d.current,{[B.Forwards]:()=>{_(E,j.First,{skipElements:[b.relatedTarget]})},[B.Backwards]:()=>{_(E,j.Last,{skipElements:[b.relatedTarget]})}})})}),h=qe(),C=i.useRef(!1),w={ref:n,onKeyDown(b){b.key=="Tab"&&(C.current=!0,h.requestAnimationFrame(()=>{C.current=!1}))},onBlur(b){let E=ye(o);t.current instanceof HTMLElement&&E.add(t.current);let L=b.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&($e(E,L)||(C.current?_(t.current,H(d.current,{[B.Forwards]:()=>j.Next,[B.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:b.target}):b.target instanceof HTMLElement&&R(b.target)))}};return p.createElement(p.Fragment,null,Boolean(l&4)&&p.createElement(re,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:ne.Focusable}),S({ourProps:w,theirProps:u,defaultTag:ut,name:"FocusTrap"}),Boolean(l&4)&&p.createElement(re,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:v,features:ne.Focusable}))}let st=$(it),N=Object.assign(st,{features:Ee}),P=[];if(typeof window<"u"&&typeof document<"u"){let e=function(r){r.target instanceof HTMLElement&&r.target!==document.body&&P[0]!==r.target&&(P.unshift(r.target),P=P.filter(t=>t!=null&&t.isConnected),P.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function dt(e=!0){let r=i.useRef(P.slice());return ie(([t],[n])=>{n===!0&&t===!1&&G(()=>{r.current.splice(0)}),n===!1&&t===!0&&(r.current=P.slice())},[e,P,r]),y(()=>{var t;return(t=r.current.find(n=>n!=null&&n.isConnected))!=null?t:null})}function ct({ownerDocument:e},r){let t=dt(r);ie(()=>{r||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&R(t())},[r]);let n=i.useRef(!1);i.useEffect(()=>(n.current=!1,()=>{n.current=!0,G(()=>{n.current&&R(t())})}),[])}function ft({ownerDocument:e,container:r,initialFocus:t},n){let a=i.useRef(null),o=ke();return ie(()=>{if(!n)return;let l=r.current;l&&G(()=>{if(!o.current)return;let u=e==null?void 0:e.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===u){a.current=u;return}}else if(l.contains(u)){a.current=u;return}t!=null&&t.current?R(t.current):_(l,j.First)===Ge.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[n]),a}function gt({ownerDocument:e,container:r,containers:t,previousActiveElement:n},a){let o=ke();we(e==null?void 0:e.defaultView,"focus",l=>{if(!a||!o.current)return;let u=ye(t);r.current instanceof HTMLElement&&u.add(r.current);let c=n.current;if(!c)return;let s=l.target;s&&s instanceof HTMLElement?$e(u,s)?(n.current=s,R(s)):(l.preventDefault(),l.stopPropagation(),R(c)):R(n.current)},!0)}function $e(e,r){for(let t of e)if(t.contains(r))return!0;return!1}let Te=i.createContext(!1);function bt(){return i.useContext(Te)}function ae(e){return p.createElement(Te.Provider,{value:e.force},e.children)}function pt(e){let r=bt(),t=i.useContext(Se),n=J(e),[a,o]=i.useState(()=>{if(!r&&t!==null||xe.isServer)return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let u=n.createElement("div");return u.setAttribute("id","headlessui-portal-root"),n.body.appendChild(u)});return i.useEffect(()=>{a!==null&&(n!=null&&n.body.contains(a)||n==null||n.body.appendChild(a))},[a,n]),i.useEffect(()=>{r||t!==null&&o(t.current)},[t,o,r]),a}let mt=i.Fragment;function ht(e,r){let t=e,n=i.useRef(null),a=T(Je(d=>{n.current=d}),r),o=J(n),l=pt(n),[u]=i.useState(()=>{var d;return xe.isServer?null:(d=o==null?void 0:o.createElement("div"))!=null?d:null}),c=ue(),s=i.useRef(!1);return I(()=>{if(s.current=!1,!(!l||!u))return l.contains(u)||(u.setAttribute("data-headlessui-portal",""),l.appendChild(u)),()=>{s.current=!0,G(()=>{var d;s.current&&(!l||!u||(u instanceof Node&&l.contains(u)&&l.removeChild(u),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l))))})}},[l,u]),c?!l||!u?null:We.createPortal(S({ourProps:{ref:a},theirProps:t,defaultTag:mt,name:"Portal"}),u):null}let vt=i.Fragment,Se=i.createContext(null);function kt(e,r){let{target:t,...n}=e,a={ref:T(r)};return p.createElement(Se.Provider,{value:t},S({ourProps:a,theirProps:n,defaultTag:vt,name:"Popover.Group"}))}let xt=$(ht),wt=$(kt),oe=Object.assign(xt,{Group:wt}),Le=i.createContext(null);function Pe(){let e=i.useContext(Le);if(e===null){let r=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,Pe),r}return e}function yt(){let[e,r]=i.useState([]);return[e.length>0?e.join(" "):void 0,i.useMemo(()=>function(t){let n=y(o=>(r(l=>[...l,o]),()=>r(l=>{let u=l.slice(),c=u.indexOf(o);return c!==-1&&u.splice(c,1),u}))),a=i.useMemo(()=>({register:n,slot:t.slot,name:t.name,props:t.props}),[n,t.slot,t.name,t.props]);return p.createElement(Le.Provider,{value:a},t.children)},[r])]}let Et="p";function $t(e,r){let t=O(),{id:n=`headlessui-description-${t}`,...a}=e,o=Pe(),l=T(r);I(()=>o.register(n),[n,o.register]);let u={ref:l,...o.props,id:n};return S({ourProps:u,theirProps:a,slot:o.slot||{},defaultTag:Et,name:o.name||"Description"})}let Tt=$($t),St=Object.assign(Tt,{}),se=i.createContext(()=>{});se.displayName="StackContext";var le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(le||{});function Lt(){return i.useContext(se)}function Pt({children:e,onUpdate:r,type:t,element:n,enabled:a}){let o=Lt(),l=y((...u)=>{r==null||r(...u),o(...u)});return I(()=>{let u=a===void 0||a===!0;return u&&l(0,t,n),()=>{u&&l(1,t,n)}},[l,t,n,a]),p.createElement(se.Provider,{value:l},e)}function Dt(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}const Rt=typeof Object.is=="function"?Object.is:Dt,{useState:Ct,useEffect:Ft,useLayoutEffect:Mt,useDebugValue:jt}=te;function Ot(e,r,t){const n=r(),[{inst:a},o]=Ct({inst:{value:n,getSnapshot:r}});return Mt(()=>{a.value=n,a.getSnapshot=r,X(a)&&o({inst:a})},[e,n,r]),Ft(()=>(X(a)&&o({inst:a}),e(()=>{X(a)&&o({inst:a})})),[e]),jt(n),n}function X(e){const r=e.getSnapshot,t=e.value;try{const n=r();return!Rt(t,n)}catch{return!0}}function Nt(e,r,t){return r()}const At=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bt=!At,Ht=Bt?Nt:Ot,It="useSyncExternalStore"in te?(e=>e.useSyncExternalStore)(te):Ht;function zt(e){return It(e.subscribe,e.getSnapshot,e.getSnapshot)}function Wt(e,r){let t=e(),n=new Set;return{getSnapshot(){return t},subscribe(a){return n.add(a),()=>n.delete(a)},dispatch(a,...o){let l=r[a].call(t,...o);l&&(t=l,n.forEach(u=>u()))}}}function Yt(){let e;return{before({doc:r}){var t;let n=r.documentElement;e=((t=r.defaultView)!=null?t:window).innerWidth-n.clientWidth},after({doc:r,d:t}){let n=r.documentElement,a=n.clientWidth-n.offsetWidth,o=e-a;t.style(n,"paddingRight",`${o}px`)}}}function Vt(){if(!Ke())return{};let e;return{before(){e=window.pageYOffset},after({doc:r,d:t,meta:n}){function a(l){return n.containers.flatMap(u=>u()).some(u=>u.contains(l))}t.style(r.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;t.addEventListener(r,"click",l=>{if(l.target instanceof HTMLElement)try{let u=l.target.closest("a");if(!u)return;let{hash:c}=new URL(u.href),s=r.querySelector(c);s&&!a(s)&&(o=s)}catch{}},!0),t.addEventListener(r,"touchmove",l=>{l.target instanceof HTMLElement&&!a(l.target)&&l.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function Ut(){return{before({doc:e,d:r}){r.style(e.documentElement,"overflow","hidden")}}}function _t(e){let r={};for(let t of e)Object.assign(r,t(r));return r}let D=Wt(()=>new Map,{PUSH(e,r){var t;let n=(t=this.get(e))!=null?t:{doc:e,count:0,d:Qe(),meta:new Set};return n.count++,n.meta.add(r),this.set(e,n),this},POP(e,r){let t=this.get(e);return t&&(t.count--,t.meta.delete(r)),this},SCROLL_PREVENT({doc:e,d:r,meta:t}){let n={doc:e,d:r,meta:_t(t)},a=[Vt(),Yt(),Ut()];a.forEach(({before:o})=>o==null?void 0:o(n)),a.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});D.subscribe(()=>{let e=D.getSnapshot(),r=new Map;for(let[t]of e)r.set(t,t.documentElement.style.overflow);for(let t of e.values()){let n=r.get(t.doc)==="hidden",a=t.count!==0;(a&&!n||!a&&n)&&D.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&D.dispatch("TEARDOWN",t)}});function qt(e,r,t){let n=zt(D),a=e?n.get(e):void 0,o=a?a.count>0:!1;return I(()=>{if(!(!e||!r))return D.dispatch("PUSH",e,t),()=>D.dispatch("POP",e,t)},[r,e]),o}let Z=new Map,A=new Map;function he(e,r=!0){I(()=>{var t;if(!r)return;let n=typeof e=="function"?e():e.current;if(!n)return;function a(){var l;if(!n)return;let u=(l=A.get(n))!=null?l:1;if(u===1?A.delete(n):A.set(n,u-1),u!==1)return;let c=Z.get(n);c&&(c["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",c["aria-hidden"]),n.inert=c.inert,Z.delete(n))}let o=(t=A.get(n))!=null?t:0;return A.set(n,o+1),o!==0||(Z.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0),a},[e,r])}var Gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Gt||{}),Jt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Jt||{});let Kt={[0](e,r){return e.titleId===r.id?e:{...e,titleId:r.id}}},q=i.createContext(null);q.displayName="DialogContext";function z(e){let r=i.useContext(q);if(r===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return r}function Qt(e,r,t=()=>[document.body]){qt(e,r,n=>{var a;return{containers:[...(a=n.containers)!=null?a:[],t]}})}function Xt(e,r){return H(r.type,Kt,e,r)}let Zt="div",er=be.RenderStrategy|be.Static;function tr(e,r){let t=O(),{id:n=`headlessui-dialog-${t}`,open:a,onClose:o,initialFocus:l,__demoMode:u=!1,...c}=e,[s,d]=i.useState(0),v=Xe();a===void 0&&v!==null&&(a=(v&U.Open)===U.Open);let h=i.useRef(null),C=T(h,r),w=i.useRef(null),b=J(h),E=e.hasOwnProperty("open")||v!==null,L=e.hasOwnProperty("onClose");if(!E&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!E)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let k=a?0:1,[F,De]=i.useReducer(Xt,{titleId:null,descriptionId:null,panelRef:i.createRef()}),M=y(()=>o(!1)),de=y(g=>De({type:0,id:g})),W=ue()?u?!1:k===0:!1,Y=s>1,ce=i.useContext(q)!==null,Re=Y?"parent":"leaf",fe=v!==null?(v&U.Closing)===U.Closing:!1,Ce=(()=>ce||fe?!1:W)(),Fe=i.useCallback(()=>{var g,x;return(x=Array.from((g=b==null?void 0:b.querySelectorAll("body > *"))!=null?g:[]).find(m=>m.id==="headlessui-portal-root"?!1:m.contains(w.current)&&m instanceof HTMLElement))!=null?x:null},[w]);he(Fe,Ce);let Me=(()=>Y?!0:W)(),je=i.useCallback(()=>{var g,x;return(x=Array.from((g=b==null?void 0:b.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(m=>m.contains(w.current)&&m instanceof HTMLElement))!=null?x:null},[w]);he(je,Me);let K=y(()=>{var g,x;return[...Array.from((g=b==null?void 0:b.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?g:[]).filter(m=>!(m===document.body||m===document.head||!(m instanceof HTMLElement)||m.contains(w.current)||F.panelRef.current&&m.contains(F.panelRef.current))),(x=F.panelRef.current)!=null?x:h.current]}),Oe=(()=>!(!W||Y))();Ze(()=>K(),M,Oe);let Ne=(()=>!(Y||k!==0))();we(b==null?void 0:b.defaultView,"keydown",g=>{Ne&&(g.defaultPrevented||g.key===et.Escape&&(g.preventDefault(),g.stopPropagation(),M()))});let Ae=(()=>!(fe||k!==0||ce))();Qt(b,Ae,K),i.useEffect(()=>{if(k!==0||!h.current)return;let g=new ResizeObserver(x=>{for(let m of x){let V=m.target.getBoundingClientRect();V.x===0&&V.y===0&&V.width===0&&V.height===0&&M()}});return g.observe(h.current),()=>g.disconnect()},[k,h,M]);let[Be,He]=yt(),Ie=i.useMemo(()=>[{dialogState:k,close:M,setTitleId:de},F],[k,F,M,de]),ge=i.useMemo(()=>({open:k===0}),[k]),ze={ref:C,id:n,role:"dialog","aria-modal":k===0?!0:void 0,"aria-labelledby":F.titleId,"aria-describedby":Be};return p.createElement(Pt,{type:"Dialog",enabled:k===0,element:h,onUpdate:y((g,x)=>{x==="Dialog"&&H(g,{[le.Add]:()=>d(m=>m+1),[le.Remove]:()=>d(m=>m-1)})})},p.createElement(ae,{force:!0},p.createElement(oe,null,p.createElement(q.Provider,{value:Ie},p.createElement(oe.Group,{target:h},p.createElement(ae,{force:!1},p.createElement(He,{slot:ge,name:"Dialog.Description"},p.createElement(N,{initialFocus:l,containers:K,features:W?H(Re,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},S({ourProps:ze,theirProps:c,slot:ge,defaultTag:Zt,features:er,visible:k===0,name:"Dialog"})))))))),p.createElement(re,{features:ne.Hidden,ref:w}))}let rr="div";function nr(e,r){let t=O(),{id:n=`headlessui-dialog-overlay-${t}`,...a}=e,[{dialogState:o,close:l}]=z("Dialog.Overlay"),u=T(r),c=y(d=>{if(d.target===d.currentTarget){if(tt(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),l()}}),s=i.useMemo(()=>({open:o===0}),[o]);return S({ourProps:{ref:u,id:n,"aria-hidden":!0,onClick:c},theirProps:a,slot:s,defaultTag:rr,name:"Dialog.Overlay"})}let ar="div";function or(e,r){let t=O(),{id:n=`headlessui-dialog-backdrop-${t}`,...a}=e,[{dialogState:o},l]=z("Dialog.Backdrop"),u=T(r);i.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let c=i.useMemo(()=>({open:o===0}),[o]);return p.createElement(ae,{force:!0},p.createElement(oe,null,S({ourProps:{ref:u,id:n,"aria-hidden":!0},theirProps:a,slot:c,defaultTag:ar,name:"Dialog.Backdrop"})))}let lr="div";function ur(e,r){let t=O(),{id:n=`headlessui-dialog-panel-${t}`,...a}=e,[{dialogState:o},l]=z("Dialog.Panel"),u=T(r,l.panelRef),c=i.useMemo(()=>({open:o===0}),[o]),s=y(d=>{d.stopPropagation()});return S({ourProps:{ref:u,id:n,onClick:s},theirProps:a,slot:c,defaultTag:lr,name:"Dialog.Panel"})}let ir="h2";function sr(e,r){let t=O(),{id:n=`headlessui-dialog-title-${t}`,...a}=e,[{dialogState:o,setTitleId:l}]=z("Dialog.Title"),u=T(r);i.useEffect(()=>(l(n),()=>l(null)),[n,l]);let c=i.useMemo(()=>({open:o===0}),[o]);return S({ourProps:{ref:u,id:n},theirProps:a,slot:c,defaultTag:ir,name:"Dialog.Title"})}let dr=$(tr),cr=$(or),fr=$(ur),gr=$(nr),br=$(sr),ee=Object.assign(dr,{Backdrop:cr,Panel:fr,Overlay:gr,Title:br,Description:St});const kr=({isOpen:e,onClose:r,title:t,children:n,height:a})=>{const o={auto:"h-auto",full:"h-full",xs:"h-[5rem]",sm:"h-[10rem]",md:"h-[20rem]",lg:"h-[30rem]",xl:"h-[40rem]","2xl":"h-[50rem]"},{isDarkMode:l}=Ye();return f.jsx(Q,{appear:!0,show:e,as:i.Fragment,children:f.jsxs(ee,{as:"div",className:"relative z-10",onClose:r,children:[f.jsx(Q.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 "})}),f.jsx("div",{className:`fixed inset-0 overflow-y-auto ${l&&"dark"}`,children:f.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:f.jsx(Q.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:f.jsx(ee.Panel,{className:`${o[a]} w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border-neutral-700 border-neutral-300 border p-6 text-left align-middle shadow-xl transition-all `,children:f.jsxs("div",{className:"h-full flex flex-col",children:[t&&f.jsx(ee.Title,{as:"h3",className:"text-lg font-medium leading-6 dark:text-white text-center",children:t}),n]})})})})})]})})};export{vr as B,kr as M,hr as T,rt as u};
