if(!self.define){let s,e={};const r=(r,l)=>(r=new URL(r+".js",l).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(l,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const t=s=>r(s,n),u={module:{uri:n},exports:a,require:t};e[n]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Appearance-7f8e67cf.js",revision:null},{url:"assets/AppearanceHeader-32a8ad29.js",revision:null},{url:"assets/backArrow-8311d4a0.js",revision:null},{url:"assets/Center-8239affa.js",revision:null},{url:"assets/deleteNotAtHome-63823a81.js",revision:null},{url:"assets/Details-ac89b18e.js",revision:null},{url:"assets/DetailsHeader-83a66162.js",revision:null},{url:"assets/Disclosure-d4fe6dac.js",revision:null},{url:"assets/Form-3058bc79.js",revision:null},{url:"assets/index-0dc1507e.js",revision:null},{url:"assets/index-5bb02c5f.css",revision:null},{url:"assets/Longpress-4f1c8dbb.js",revision:null},{url:"assets/Modal-12bc17bc.js",revision:null},{url:"assets/Record-eb6d4bc7.js",revision:null},{url:"assets/RecordHeader-38df3b9e.js",revision:null},{url:"assets/Return-f7fe5a44.js",revision:null},{url:"assets/ReturnHeader-548b3174.js",revision:null},{url:"assets/TabbedPage-5b833bfe.js",revision:null},{url:"assets/TabbedPageHeader-2aff9740.js",revision:null},{url:"assets/transition-06819798.js",revision:null},{url:"assets/upDownArrow-e6a55ed5.js",revision:null},{url:"assets/Write-8bd483f4.js",revision:null},{url:"assets/WriteHeader-b54a9888.js",revision:null},{url:"index.html",revision:"04e508e8e2eef6161a9fa4de78f863af"},{url:"registerSW.js",revision:"1f4cba45315788e4fb8a7af14c6b76ec"},{url:"assets/manifest-icon-192.maskable.png",revision:"0ea8913e7fc1ec33426ce8215b703ce4"},{url:"assets/manifest-icon-512.maskable.png",revision:"55c0eff534bc0cb693f1dadc420700bd"},{url:"manifest.webmanifest",revision:"8321a947f6cf1c20836df65c9a74780e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
