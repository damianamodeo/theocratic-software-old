if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),f={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-b2842474.css",revision:null},{url:"assets/index-eca0fa33.js",revision:null},{url:"index.html",revision:"ae1e9a7b6b9ecaabb0c97f6e6d23dd34"},{url:"registerSW.js",revision:"1f4cba45315788e4fb8a7af14c6b76ec"},{url:"assets/manifest-icon-192.maskable.png",revision:"611782a089f4c2f4072fa72480cffb21"},{url:"assets/manifest-icon-512.maskable.png",revision:"e03797c6c4d4357e84d458f7dc062e16"},{url:"manifest.webmanifest",revision:"fc858d16b3873d255f21cdde2c707666"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
