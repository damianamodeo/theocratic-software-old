if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const u=s=>r(s,i),t={module:{uri:i},exports:a,require:u};e[i]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Appearance-341a10a6.js",revision:null},{url:"assets/AppearanceHeader-7ea54509.js",revision:null},{url:"assets/backArrow-516ca3ef.js",revision:null},{url:"assets/Center-5bdacd58.js",revision:null},{url:"assets/deleteNotAtHome-63823a81.js",revision:null},{url:"assets/Details-2486eb77.js",revision:null},{url:"assets/DetailsHeader-a03c18f0.js",revision:null},{url:"assets/Disclosure-25de5097.js",revision:null},{url:"assets/Form-ee57b1cc.js",revision:null},{url:"assets/index-721991b0.js",revision:null},{url:"assets/index-b8bd47ee.css",revision:null},{url:"assets/Longpress-463273ef.js",revision:null},{url:"assets/mapbox-gl-7d1a42b4.js",revision:null},{url:"assets/Modal-115d1014.js",revision:null},{url:"assets/Record-75e0fb32.js",revision:null},{url:"assets/RecordHeader-b1449c36.js",revision:null},{url:"assets/Return-22a139a9.css",revision:null},{url:"assets/Return-3d6fa0f2.js",revision:null},{url:"assets/ReturnHeader-eeb7016d.js",revision:null},{url:"assets/TabbedPage-d1c08157.js",revision:null},{url:"assets/TabbedPageHeader-8bdf344c.js",revision:null},{url:"assets/transition-1522452a.js",revision:null},{url:"assets/upDownArrow-d7008201.js",revision:null},{url:"assets/Write-e69a59ee.js",revision:null},{url:"assets/WriteHeader-4cda122b.js",revision:null},{url:"index.html",revision:"84d9f75337a011084d61f13eb9068872"},{url:"registerSW.js",revision:"1f4cba45315788e4fb8a7af14c6b76ec"},{url:"assets/manifest-icon-192.maskable.png",revision:"0ea8913e7fc1ec33426ce8215b703ce4"},{url:"assets/manifest-icon-512.maskable.png",revision:"55c0eff534bc0cb693f1dadc420700bd"},{url:"manifest.webmanifest",revision:"8321a947f6cf1c20836df65c9a74780e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
