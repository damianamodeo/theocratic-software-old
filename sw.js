if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const u=s=>r(s,i),t={module:{uri:i},exports:a,require:u};e[i]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Appearance-0bf31e67.js",revision:null},{url:"assets/AppearanceHeader-33f7727f.js",revision:null},{url:"assets/backArrow-d8ab58a5.js",revision:null},{url:"assets/Center-d7280f35.js",revision:null},{url:"assets/deleteNotAtHome-63823a81.js",revision:null},{url:"assets/Details-98df9a8a.js",revision:null},{url:"assets/DetailsHeader-1258b572.js",revision:null},{url:"assets/Disclosure-78498576.js",revision:null},{url:"assets/Form-c85b0ef7.js",revision:null},{url:"assets/index-26695fc8.js",revision:null},{url:"assets/index-d0b69de3.css",revision:null},{url:"assets/Longpress-9c193573.js",revision:null},{url:"assets/mapbox-gl-3884c6ca.js",revision:null},{url:"assets/Modal-ce389260.js",revision:null},{url:"assets/Record-ceb7fc83.js",revision:null},{url:"assets/RecordHeader-b2a83afb.js",revision:null},{url:"assets/Return-22a139a9.css",revision:null},{url:"assets/Return-eb030732.js",revision:null},{url:"assets/ReturnHeader-e822cbef.js",revision:null},{url:"assets/TabbedPage-d24efaaa.js",revision:null},{url:"assets/TabbedPageHeader-083ab00d.js",revision:null},{url:"assets/transition-e88c383d.js",revision:null},{url:"assets/upDownArrow-71ca6278.js",revision:null},{url:"assets/Write-013f0284.js",revision:null},{url:"assets/WriteHeader-fa244e83.js",revision:null},{url:"index.html",revision:"91c089d2574a84d8bf65461a3be01c1b"},{url:"registerSW.js",revision:"1f4cba45315788e4fb8a7af14c6b76ec"},{url:"assets/manifest-icon-192.maskable.png",revision:"0ea8913e7fc1ec33426ce8215b703ce4"},{url:"assets/manifest-icon-512.maskable.png",revision:"55c0eff534bc0cb693f1dadc420700bd"},{url:"manifest.webmanifest",revision:"8321a947f6cf1c20836df65c9a74780e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
