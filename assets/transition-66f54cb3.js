import{r as l,R as y}from"./index-32577dac.js";var Te=Object.defineProperty,Se=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t,n)=>(Se(e,typeof t!="symbol"?t+"":t,n),n);let Fe=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},N=new Fe,L=(e,t)=>{N.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function R(e){let t=l.useRef(e);return L(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function x(){let e=[],t={addEventListener(n,r,i,f){return n.addEventListener(r,i,f),t.add(()=>n.removeEventListener(r,i,f))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ce(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let f=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:f})})},group(n){let r=x();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function se(){let[e]=l.useState(x);return l.useEffect(()=>()=>e.dispose(),[e]),e}let F=function(e){let t=R(e);return y.useCallback((...n)=>t.current(...n),[t])};function ee(){let[e,t]=l.useState(N.isHandoffComplete);return e&&N.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>N.handoff(),[]),e}var le;let We=(le=y.useId)!=null?le:function(){let e=ee(),[t,n]=y.useState(e?()=>N.nextId():null);return L(()=>{t===null&&n(N.nextId())},[t]),t!=null?""+t:void 0};function T(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function Xe(e){return N.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ue=Symbol();function Ye(e,t=!0){return Object.assign(e,{[ue]:t})}function ce(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=F(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ue]))?void 0:n}function Q(...e){return e.filter(Boolean).join(" ")}var fe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(fe||{}),C=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(C||{});function de({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:f=!0,name:d}){let s=pe(t,e);if(f)return I(s,n,r,d);let u=i??0;if(u&2){let{static:a=!1,...c}=s;if(a)return I(c,n,r,d)}if(u&1){let{unmount:a=!0,...c}=s;return T(a?0:1,{[0](){return null},[1](){return I({...c,hidden:!0,style:{display:"none"}},n,r,d)}})}return I(s,n,r,d)}function I(e,t={},n,r){let{as:i=n,children:f,refName:d="ref",...s}=X(e,["unmount","static"]),u=e.ref!==void 0?{[d]:e.ref}:{},a=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let c={};if(t){let h=!1,v=[];for(let[p,o]of Object.entries(t))typeof o=="boolean"&&(h=!0),o===!0&&v.push(p);h&&(c["data-headlessui-state"]=v.join(" "))}if(i===l.Fragment&&Object.keys(oe(s)).length>0){if(!l.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(o=>`  - ${o}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(o=>`  - ${o}`).join(`
`)].join(`
`));let h=a.props,v=typeof(h==null?void 0:h.className)=="function"?(...o)=>Q(h==null?void 0:h.className(...o),s.className):Q(h==null?void 0:h.className,s.className),p=v?{className:v}:{};return l.cloneElement(a,Object.assign({},pe(a.props,oe(X(s,["ref"]))),c,u,$e(a.ref,u.ref),p))}return l.createElement(i,Object.assign({},X(s,["ref"]),i!==l.Fragment&&u,i!==l.Fragment&&c),a)}function $e(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...f){let d=n[r];for(let s of d){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;s(i,...f)}}});return t}function te(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function oe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function X(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function _e(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Oe(n)?!1:r}function Oe(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ne=l.createContext(null);ne.displayName="OpenClosedContext";var S=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(S||{});function me(){return l.useContext(ne)}function Ne({value:e,children:t}){return y.createElement(ne.Provider,{value:e},t)}var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});function re(){let e=l.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Re(e=0){let[t,n]=l.useState(e),r=re(),i=l.useCallback(u=>{r.current&&n(a=>a|u)},[t,r]),f=l.useCallback(u=>!!(t&u),[t]),d=l.useCallback(u=>{r.current&&n(a=>a&~u)},[n,r]),s=l.useCallback(u=>{r.current&&n(a=>a^u)},[n]);return{flags:t,addFlag:i,hasFlag:f,removeFlag:d,toggleFlag:s}}function je(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Y(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Le(e,t){let n=x();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[f,d]=[r,i].map(u=>{let[a=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return a}),s=f+d;if(s!==0){n.group(a=>{a.setTimeout(()=>{t(),a.dispose()},s),a.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&a.dispose()})});let u=n.addEventListener(e,"transitionend",a=>{a.target===a.currentTarget&&(t(),u())})}else t();return n.add(()=>t()),n.dispose}function xe(e,t,n,r){let i=n?"enter":"leave",f=x(),d=r!==void 0?je(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=T(i,{enter:()=>t.enter,leave:()=>t.leave}),u=T(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),a=T(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Y(e,...s,...a),f.nextFrame(()=>{_(e,...a),Y(e,...u),Le(e,()=>(_(e,...s),Y(e,...t.entered),d()))}),f.dispose}function Ae({container:e,direction:t,classes:n,onStart:r,onStop:i}){let f=re(),d=se(),s=R(t);L(()=>{let u=x();d.add(u.dispose);let a=e.current;if(a&&s.current!=="idle"&&f.current)return u.dispose(),r.current(s.current),u.add(xe(a,n.current,s.current==="enter",()=>{u.dispose(),i.current(s.current)})),u.dispose},[t])}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let U=l.createContext(null);U.displayName="TransitionContext";var He=(e=>(e.Visible="visible",e.Hidden="hidden",e))(He||{});function ke(){let e=l.useContext(U);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function De(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function B(e){return"children"in e?B(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function he(e,t){let n=R(e),r=l.useRef([]),i=re(),f=se(),d=F((p,o=C.Hidden)=>{let g=r.current.findIndex(({el:m})=>m===p);g!==-1&&(T(o,{[C.Unmount](){r.current.splice(g,1)},[C.Hidden](){r.current[g].state="hidden"}}),f.microTask(()=>{var m;!B(r)&&i.current&&((m=n.current)==null||m.call(n))}))}),s=F(p=>{let o=r.current.find(({el:g})=>g===p);return o?o.state!=="visible"&&(o.state="visible"):r.current.push({el:p,state:"visible"}),()=>d(p,C.Unmount)}),u=l.useRef([]),a=l.useRef(Promise.resolve()),c=l.useRef({enter:[],leave:[],idle:[]}),h=F((p,o,g)=>{u.current.splice(0),t&&(t.chains.current[o]=t.chains.current[o].filter(([m])=>m!==p)),t==null||t.chains.current[o].push([p,new Promise(m=>{u.current.push(m)})]),t==null||t.chains.current[o].push([p,new Promise(m=>{Promise.all(c.current[o].map(([b,P])=>P)).then(()=>m())})]),o==="enter"?a.current=a.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(o)):g(o)}),v=F((p,o,g)=>{Promise.all(c.current[o].splice(0).map(([m,b])=>b)).then(()=>{var m;(m=u.current.shift())==null||m()}).then(()=>g(o))});return l.useMemo(()=>({children:r,register:s,unregister:d,onStart:h,onStop:v,wait:a,chains:c}),[s,d,r,h,v,c,a])}function Ie(){}let Ue=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ae(e){var t;let n={};for(let r of Ue)n[r]=(t=e[r])!=null?t:Ie;return n}function Me(e){let t=l.useRef(ae(e));return l.useEffect(()=>{t.current=ae(e)},[e]),t}let Be="div",ve=fe.RenderStrategy;function qe(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f,enter:d,enterFrom:s,enterTo:u,entered:a,leave:c,leaveFrom:h,leaveTo:v,...p}=e,o=l.useRef(null),g=ce(o,t),m=p.unmount?C.Unmount:C.Hidden,{show:b,appear:P,initial:w}=ke(),[E,q]=l.useState(b?"visible":"hidden"),ie=De(),{register:A,unregister:H}=ie,V=l.useRef(null);l.useEffect(()=>A(o),[A,o]),l.useEffect(()=>{if(m===C.Hidden&&o.current){if(b&&E!=="visible"){q("visible");return}return T(E,{hidden:()=>H(o),visible:()=>A(o)})}},[E,o,A,H,b,m]);let z=R({enter:O(d),enterFrom:O(s),enterTo:O(u),entered:O(a),leave:O(c),leaveFrom:O(h),leaveTo:O(v)}),k=Me({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f}),G=ee();l.useEffect(()=>{if(G&&E==="visible"&&o.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[o,E,G]);let J=w&&!P,be=(()=>!G||J||V.current===b?"idle":b?"enter":"leave")(),j=Re(0),Ee=F($=>T($,{enter:()=>{j.addFlag(S.Opening),k.current.beforeEnter()},leave:()=>{j.addFlag(S.Closing),k.current.beforeLeave()},idle:()=>{}})),ye=F($=>T($,{enter:()=>{j.removeFlag(S.Opening),k.current.afterEnter()},leave:()=>{j.removeFlag(S.Closing),k.current.afterLeave()},idle:()=>{}})),D=he(()=>{q("hidden"),H(o)},ie);Ae({container:o,classes:z,direction:be,onStart:R($=>{D.onStart(o,$,Ee)}),onStop:R($=>{D.onStop(o,$,ye),$==="leave"&&!B(D)&&(q("hidden"),H(o))})}),l.useEffect(()=>{J&&(m===C.Hidden?V.current=null:V.current=b)},[b,J,E]);let K=p,we={ref:g};return P&&b&&w&&(K={...K,className:Q(p.className,...z.current.enter,...z.current.enterFrom)}),y.createElement(M.Provider,{value:D},y.createElement(Ne,{value:T(E,{visible:S.Open,hidden:S.Closed})|j.flags},de({ourProps:we,theirProps:K,defaultTag:Be,features:ve,visible:E==="visible",name:"Transition.Child"})))}function Ve(e,t){let{show:n,appear:r=!1,unmount:i,...f}=e,d=l.useRef(null),s=ce(d,t);ee();let u=me();if(n===void 0&&u!==null&&(n=(u&S.Open)===S.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[a,c]=l.useState(n?"visible":"hidden"),h=he(()=>{c("hidden")}),[v,p]=l.useState(!0),o=l.useRef([n]);L(()=>{v!==!1&&o.current[o.current.length-1]!==n&&(o.current.push(n),p(!1))},[o,n]);let g=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)c("visible");else if(!B(h))c("hidden");else{let w=d.current;if(!w)return;let E=w.getBoundingClientRect();E.x===0&&E.y===0&&E.width===0&&E.height===0&&c("hidden")}},[n,h]);let m={unmount:i},b=F(()=>{var w;v&&p(!1),(w=e.beforeEnter)==null||w.call(e)}),P=F(()=>{var w;v&&p(!1),(w=e.beforeLeave)==null||w.call(e)});return y.createElement(M.Provider,{value:h},y.createElement(U.Provider,{value:g},de({ourProps:{...m,as:l.Fragment,children:y.createElement(ge,{ref:s,...m,...f,beforeEnter:b,beforeLeave:P})},theirProps:{},defaultTag:l.Fragment,features:ve,visible:a==="visible",name:"Transition"})))}function ze(e,t){let n=l.useContext(U)!==null,r=me()!==null;return y.createElement(y.Fragment,null,!n&&r?y.createElement(Z,{ref:t,...e}):y.createElement(ge,{ref:t,...e}))}let Z=te(Ve),ge=te(qe),Ge=te(ze),Qe=Object.assign(Z,{Child:Ge,Root:Z});export{Qe as $,me as C,te as D,We as I,oe as R,fe as S,Ye as T,de as X,Pe as a,x as b,Ne as c,S as d,Xe as e,ee as f,re as g,N as h,L as l,F as o,se as p,_e as r,R as s,Ce as t,T as u,ce as y};