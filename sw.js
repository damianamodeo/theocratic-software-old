if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),t={module:{uri:n},exports:a,require:u};e[n]=Promise.all(r.map((s=>t[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-9517df1b"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Appearance-d1132ec7.js",revision:null},{url:"assets/AppearanceHeader-d2c8ac99.js",revision:null},{url:"assets/backArrow-2a57211e.js",revision:null},{url:"assets/deleteNotAtHome-0bb54eec.js",revision:null},{url:"assets/Details-8eb4c518.js",revision:null},{url:"assets/DetailsHeader-8a0c9b59.js",revision:null},{url:"assets/Disclosure-e2265ece.js",revision:null},{url:"assets/hidden-0f718e00.js",revision:null},{url:"assets/index-32577dac.js",revision:null},{url:"assets/index-a0988ac0.css",revision:null},{url:"assets/listbox-86d3c360.js",revision:null},{url:"assets/Longpress-09fe9453.js",revision:null},{url:"assets/mapbox-gl-d1c67138.js",revision:null},{url:"assets/MapView-177da70d.js",revision:null},{url:"assets/MapView-22a139a9.css",revision:null},{url:"assets/Modal-6f2cb0d3.js",revision:null},{url:"assets/Record-2d5d9536.js",revision:null},{url:"assets/RecordHeader-6f2c5e3f.js",revision:null},{url:"assets/Return-a11e4ee2.js",revision:null},{url:"assets/ReturnHeader-8c3c6a41.js",revision:null},{url:"assets/TabbedPage-f1f4770a.js",revision:null},{url:"assets/TabbedPageHeader-97fa09ea.js",revision:null},{url:"assets/transition-66f54cb3.js",revision:null},{url:"assets/upDownArrow-0cea9ba2.js",revision:null},{url:"assets/Write-771f712b.js",revision:null},{url:"assets/WriteHeader-9292fb1d.js",revision:null},{url:"index.html",revision:"4fc86c27796e321540ed55b04cb876e2"},{url:"registerSW.js",revision:"1f4cba45315788e4fb8a7af14c6b76ec"},{url:"assets/manifest-icon-192.maskable.png",revision:"0ea8913e7fc1ec33426ce8215b703ce4"},{url:"assets/manifest-icon-512.maskable.png",revision:"55c0eff534bc0cb693f1dadc420700bd"},{url:"manifest.webmanifest",revision:"8321a947f6cf1c20836df65c9a74780e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
