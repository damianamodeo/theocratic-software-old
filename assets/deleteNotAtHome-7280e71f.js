/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ku=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(f=64)),s.push(e[h],e[l],e[f],e[m])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(po(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ku(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const l=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw new bu;const f=r<<2|a>>4;if(s.push(f),c!==64){const m=a<<4&240|c>>2;if(s.push(m),l!==64){const S=c<<6&192|l;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xu=function(n){const t=po(n);return mo.encodeByteArray(t,!0)},In=function(n){return xu(n).replace(/\./g,"")},Ru=function(n){try{return mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=()=>Mu().__FIREBASE_DEFAULTS__,Lu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ru(n[1]);return t&&JSON.parse(t)},yo=()=>{try{return Ou()||Lu()||Pu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fu=n=>{var t,e;return(e=(t=yo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Vu=n=>{const t=Fu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},vo=()=>{var n;return(n=yo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[In(JSON.stringify(e)),In(JSON.stringify(o)),a].join(".")}function $u(){try{return typeof indexedDB=="object"}catch{return!1}}function ju(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="FirebaseError";class ue extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=qu,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?zu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ue(i,a,s)}}function zu(n,t){return n.replace(Hu,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Hu=/\{\$([^}]+)}/g;function xs(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(cr(r)&&cr(o)){if(!xs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function cr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class ke{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new Uu;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qu(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gu(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gu(n){return n===Rt?void 0:n}function Qu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ku(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const Yu={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Xu=k.INFO,Ju={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Zu=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Ju[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eo{constructor(t){this.name=t,this._logLevel=Xu,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const tc=(n,t)=>t.some(e=>n instanceof e);let hr,lr;function ec(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nc(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const To=new WeakMap,Rs=new WeakMap,Io=new WeakMap,ps=new WeakMap,oi=new WeakMap;function sc(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(At(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&To.set(e,n)}).catch(()=>{}),oi.set(t,n),t}function ic(n){if(Rs.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Rs.set(n,t)}let Ms={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Rs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Io.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return At(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function rc(n){Ms=n(Ms)}function oc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(ms(this),t,...e);return Io.set(s,t.sort?t.sort():[t]),At(s)}:nc().includes(n)?function(...t){return n.apply(ms(this),t),At(To.get(this))}:function(...t){return At(n.apply(ms(this),t))}}function ac(n){return typeof n=="function"?oc(n):(n instanceof IDBTransaction&&ic(n),tc(n,ec())?new Proxy(n,Ms):n)}function At(n){if(n instanceof IDBRequest)return sc(n);if(ps.has(n))return ps.get(n);const t=ac(n);return t!==n&&(ps.set(n,t),oi.set(t,n)),t}const ms=n=>oi.get(n);function uc(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=At(o);return s&&o.addEventListener("upgradeneeded",u=>{s(At(o.result),u.oldVersion,u.newVersion,At(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cc=["get","getKey","getAll","getAllKeys","count"],hc=["put","add","delete","clear"],ys=new Map;function dr(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ys.get(t))return ys.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=hc.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cc.includes(e)))return;const r=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),i&&u.done]))[0]};return ys.set(t,r),r}rc(n=>({...n,get:(t,e,s)=>dr(t,e)||n.get(t,e,s),has:(t,e)=>!!dr(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dc(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function dc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Os="@firebase/app",fr="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Eo("@firebase/app"),fc="@firebase/app-compat",gc="@firebase/analytics-compat",pc="@firebase/analytics",mc="@firebase/app-check-compat",yc="@firebase/app-check",vc="@firebase/auth",wc="@firebase/auth-compat",Ec="@firebase/database",Tc="@firebase/database-compat",Ic="@firebase/functions",Sc="@firebase/functions-compat",Cc="@firebase/installations",Ac="@firebase/installations-compat",Dc="@firebase/messaging",_c="@firebase/messaging-compat",Nc="@firebase/performance",kc="@firebase/performance-compat",bc="@firebase/remote-config",xc="@firebase/remote-config-compat",Rc="@firebase/storage",Mc="@firebase/storage-compat",Oc="@firebase/firestore",Lc="@firebase/firestore-compat",Pc="firebase",Fc="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]",Vc={[Os]:"fire-core",[fc]:"fire-core-compat",[pc]:"fire-analytics",[gc]:"fire-analytics-compat",[yc]:"fire-app-check",[mc]:"fire-app-check-compat",[vc]:"fire-auth",[wc]:"fire-auth-compat",[Ec]:"fire-rtdb",[Tc]:"fire-rtdb-compat",[Ic]:"fire-fn",[Sc]:"fire-fn-compat",[Cc]:"fire-iid",[Ac]:"fire-iid-compat",[Dc]:"fire-fcm",[_c]:"fire-fcm-compat",[Nc]:"fire-perf",[kc]:"fire-perf-compat",[bc]:"fire-rc",[xc]:"fire-rc-compat",[Rc]:"fire-gcs",[Mc]:"fire-gcs-compat",[Oc]:"fire-fst",[Lc]:"fire-fst-compat","fire-js":"fire-js",[Pc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Map,Ps=new Map;function Uc(n,t){try{n.container.addComponent(t)}catch(e){Vt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Cn(n){const t=n.name;if(Ps.has(t))return Vt.debug(`There were multiple attempts to register component ${t}.`),!1;Ps.set(t,n);for(const e of Sn.values())Uc(e,n);return!0}function Bc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new wo("app","Firebase",$c);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=Fc;function So(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(e||(e=vo()),!e)throw Dt.create("no-options");const r=Sn.get(i);if(r){if(xs(e,r.options)&&xs(s,r.config))return r;throw Dt.create("duplicate-app",{appName:i})}const o=new Wu(i);for(const u of Ps.values())o.addComponent(u);const a=new jc(e,s,o);return Sn.set(i,a),a}function zc(n=Ls){const t=Sn.get(n);if(!t&&n===Ls&&vo())return So();if(!t)throw Dt.create("no-app",{appName:n});return t}function Yt(n,t,e){var s;let i=(s=Vc[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vt.warn(a.join(" "));return}Cn(new ke(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="firebase-heartbeat-database",Kc=1,be="firebase-heartbeat-store";let vs=null;function Co(){return vs||(vs=uc(Hc,Kc,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(be)}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),vs}async function Gc(n){try{return await(await Co()).transaction(be).objectStore(be).get(Ao(n))}catch(t){if(t instanceof ue)Vt.warn(t.message);else{const e=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(e.message)}}}async function gr(n,t){try{const s=(await Co()).transaction(be,"readwrite");await s.objectStore(be).put(t,Ao(n)),await s.done}catch(e){if(e instanceof ue)Vt.warn(e.message);else{const s=Dt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(s.message)}}}function Ao(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=1024,Wc=30*24*60*60*1e3;class Yc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jc(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Wc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pr(),{heartbeatsToSend:e,unsentEntries:s}=Xc(this._heartbeatsCache.heartbeats),i=In(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pr(){return new Date().toISOString().substring(0,10)}function Xc(n,t=Qc){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mr(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),mr(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Jc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $u()?ju().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return gr(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return gr(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mr(n){return In(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){Cn(new ke("platform-logger",t=>new lc(t),"PRIVATE")),Cn(new ke("heartbeat",t=>new Yc(t),"PRIVATE")),Yt(Os,fr,n),Yt(Os,fr,"esm2017"),Yt("fire-js","")}Zc("");var th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,ai=ai||{},I=th||self;function jn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ke(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function eh(n){return Object.prototype.hasOwnProperty.call(n,ws)&&n[ws]||(n[ws]=++nh)}var ws="closure_uid_"+(1e9*Math.random()>>>0),nh=0;function sh(n,t,e){return n.call.apply(n.bind,arguments)}function ih(n,t,e){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Y(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=sh:Y=ih,Y.apply(null,arguments)}function hn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var s=e.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function z(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var rh=0;bt.prototype.s=!1;bt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rh!=0)&&eh(this)};bt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Do=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ui(n){const t=n.length;if(0<t){const e=Array(t);for(let s=0;s<t;s++)e[s]=n[s];return e}return[]}function yr(n,t){for(let e=1;e<arguments.length;e++){const s=arguments[e];if(jn(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function X(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var oh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{I.addEventListener("test",()=>{},t),I.removeEventListener("test",()=>{},t)}catch{}return n}();function xe(n){return/^[\s\xa0]*$/.test(n)}function qn(){var n=I.navigator;return n&&(n=n.userAgent)?n:""}function ft(n){return qn().indexOf(n)!=-1}function ci(n){return ci[" "](n),n}ci[" "]=function(){};function ah(n,t){var e=Zh;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var uh=ft("Opera"),ee=ft("Trident")||ft("MSIE"),_o=ft("Edge"),Fs=_o||ee,No=ft("Gecko")&&!(qn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),ch=qn().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function ko(){var n=I.document;return n?n.documentMode:void 0}var Vs;t:{var Es="",Ts=function(){var n=qn();if(No)return/rv:([^\);]+)(\)|;)/.exec(n);if(_o)return/Edge\/([\d\.]+)/.exec(n);if(ee)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ch)return/WebKit\/(\S+)/.exec(n);if(uh)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ts&&(Es=Ts?Ts[1]:""),ee){var Is=ko();if(Is!=null&&Is>parseFloat(Es)){Vs=String(Is);break t}}Vs=Es}var Us;if(I.document&&ee){var vr=ko();Us=vr||parseInt(Vs,10)||void 0}else Us=void 0;var hh=Us;function Re(n,t){if(X.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(No){t:{try{ci(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:lh[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Re.$.h.call(this)}}z(Re,X);var lh={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),dh=0;function fh(n,t,e,s,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!s,this.la=i,this.key=++dh,this.fa=this.ia=!1}function zn(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function hi(n,t,e){for(const s in n)t.call(e,n[s],s,n)}function gh(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function bo(n){const t={};for(const e in n)t[e]=n[e];return t}const wr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xo(n,t){let e,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(e in s)n[e]=s[e];for(let r=0;r<wr.length;r++)e=wr[r],Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e])}}function Hn(n){this.src=n,this.g={},this.h=0}Hn.prototype.add=function(n,t,e,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=$s(n,t,s,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new fh(t,this.src,r,!!s,i),t.ia=e,n.push(t)),t};function Bs(n,t){var e=t.type;if(e in n.g){var s=n.g[e],i=Do(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(zn(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function $s(n,t,e,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==t&&r.capture==!!e&&r.la==s)return i}return-1}var li="closure_lm_"+(1e6*Math.random()|0),Ss={};function Ro(n,t,e,s,i){if(s&&s.once)return Oo(n,t,e,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ro(n,t[r],e,s,i);return null}return e=gi(e),n&&n[Ge]?n.O(t,e,Ke(s)?!!s.capture:!!s,i):Mo(n,t,e,!1,s,i)}function Mo(n,t,e,s,i,r){if(!t)throw Error("Invalid event type");var o=Ke(i)?!!i.capture:!!i,a=fi(n);if(a||(n[li]=a=new Hn(n)),e=a.add(t,e,s,o,r),e.proxy)return e;if(s=ph(),e.proxy=s,s.src=n,s.listener=e,n.addEventListener)oh||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),s,i);else if(n.attachEvent)n.attachEvent(Po(t.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return e}function ph(){function n(e){return t.call(n.src,n.listener,e)}const t=mh;return n}function Oo(n,t,e,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Oo(n,t[r],e,s,i);return null}return e=gi(e),n&&n[Ge]?n.P(t,e,Ke(s)?!!s.capture:!!s,i):Mo(n,t,e,!0,s,i)}function Lo(n,t,e,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Lo(n,t[r],e,s,i);else s=Ke(s)?!!s.capture:!!s,e=gi(e),n&&n[Ge]?(n=n.i,t=String(t).toString(),t in n.g&&(r=n.g[t],e=$s(r,e,s,i),-1<e&&(zn(r[e]),Array.prototype.splice.call(r,e,1),r.length==0&&(delete n.g[t],n.h--)))):n&&(n=fi(n))&&(t=n.g[t.toString()],n=-1,t&&(n=$s(t,e,s,i)),(e=-1<n?t[n]:null)&&di(e))}function di(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Ge])Bs(t.i,n);else{var e=n.type,s=n.proxy;t.removeEventListener?t.removeEventListener(e,s,n.capture):t.detachEvent?t.detachEvent(Po(e),s):t.addListener&&t.removeListener&&t.removeListener(s),(e=fi(t))?(Bs(e,n),e.h==0&&(e.src=null,t[li]=null)):zn(n)}}}function Po(n){return n in Ss?Ss[n]:Ss[n]="on"+n}function mh(n,t){if(n.fa)n=!0;else{t=new Re(t,this);var e=n.listener,s=n.la||n.src;n.ia&&di(n),n=e.call(s,t)}return n}function fi(n){return n=n[li],n instanceof Hn?n:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(n){return typeof n=="function"?n:(n[Cs]||(n[Cs]=function(t){return n.handleEvent(t)}),n[Cs])}function q(){bt.call(this),this.i=new Hn(this),this.S=this,this.J=null}z(q,bt);q.prototype[Ge]=!0;q.prototype.removeEventListener=function(n,t,e,s){Lo(this,n,t,e,s)};function G(n,t){var e,s=n.J;if(s)for(e=[];s;s=s.J)e.push(s);if(n=n.S,s=t.type||t,typeof t=="string")t=new X(t,n);else if(t instanceof X)t.target=t.target||n;else{var i=t;t=new X(s,n),xo(t,i)}if(i=!0,e)for(var r=e.length-1;0<=r;r--){var o=t.g=e[r];i=ln(o,s,!0,t)&&i}if(o=t.g=n,i=ln(o,s,!0,t)&&i,i=ln(o,s,!1,t)&&i,e)for(r=0;r<e.length;r++)o=t.g=e[r],i=ln(o,s,!1,t)&&i}q.prototype.N=function(){if(q.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],s=0;s<e.length;s++)zn(e[s]);delete n.g[t],n.h--}}this.J=null};q.prototype.O=function(n,t,e,s){return this.i.add(String(n),t,!1,e,s)};q.prototype.P=function(n,t,e,s){return this.i.add(String(n),t,!0,e,s)};function ln(n,t,e,s){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Bs(n.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var pi=I.JSON.stringify;class yh{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function vh(){var n=mi;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class wh{constructor(){this.h=this.g=null}add(t,e){const s=Fo.get();s.set(t,e),this.h?this.h.next=s:this.g=s,this.h=s}}var Fo=new yh(()=>new Eh,n=>n.reset());class Eh{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Th(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Ih(n){I.setTimeout(()=>{throw n},0)}let Me,Oe=!1,mi=new wh,Vo=()=>{const n=I.Promise.resolve(void 0);Me=()=>{n.then(Sh)}};var Sh=()=>{for(var n;n=vh();){try{n.h.call(n.g)}catch(e){Ih(e)}var t=Fo;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Oe=!1};function Kn(n,t){q.call(this),this.h=n||1,this.g=t||I,this.j=Y(this.qb,this),this.l=Date.now()}z(Kn,q);p=Kn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),G(this,"tick"),this.ga&&(yi(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yi(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}p.N=function(){Kn.$.N.call(this),yi(this),delete this.g};function vi(n,t,e){if(typeof n=="function")e&&(n=Y(n,e));else if(n&&typeof n.handleEvent=="function")n=Y(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(n,t||0)}function Uo(n){n.g=vi(()=>{n.g=null,n.i&&(n.i=!1,Uo(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Ch extends bt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Uo(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(n){bt.call(this),this.h=n,this.g={}}z(Le,bt);var Er=[];function Bo(n,t,e,s){Array.isArray(e)||(e&&(Er[0]=e.toString()),e=Er);for(var i=0;i<e.length;i++){var r=Ro(t,e[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function $o(n){hi(n.g,function(t,e){this.g.hasOwnProperty(e)&&di(t)},n),n.g={}}Le.prototype.N=function(){Le.$.N.call(this),$o(this)};Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gn(){this.g=!0}Gn.prototype.Ea=function(){this.g=!1};function Ah(n,t,e,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Dh(n,t,e,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+e+`
`+r+" "+o})}function Qt(n,t,e,s){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Nh(n,e)+(s?" "+s:"")})}function _h(n,t){n.info(function(){return"TIMEOUT: "+t})}Gn.prototype.info=function(){};function Nh(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var s=e[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pi(e)}catch{return t}}var qt={},Tr=null;function Qn(){return Tr=Tr||new q}qt.Ta="serverreachability";function jo(n){X.call(this,qt.Ta,n)}z(jo,X);function Pe(n){const t=Qn();G(t,new jo(t))}qt.STAT_EVENT="statevent";function qo(n,t){X.call(this,qt.STAT_EVENT,n),this.stat=t}z(qo,X);function et(n){const t=Qn();G(t,new qo(t,n))}qt.Ua="timingevent";function zo(n,t){X.call(this,qt.Ua,n),this.size=t}z(zo,X);function Qe(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){n()},t)}var Wn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ho={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wi(){}wi.prototype.h=null;function Ir(n){return n.h||(n.h=n.i())}function Ko(){}var We={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ei(){X.call(this,"d")}z(Ei,X);function Ti(){X.call(this,"c")}z(Ti,X);var js;function Yn(){}z(Yn,wi);Yn.prototype.g=function(){return new XMLHttpRequest};Yn.prototype.i=function(){return{}};js=new Yn;function Ye(n,t,e,s){this.l=n,this.j=t,this.m=e,this.W=s||1,this.U=new Le(this),this.P=kh,n=Fs?125:void 0,this.V=new Kn(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Go}function Go(){this.i=null,this.g="",this.h=!1}var kh=45e3,qs={},An={};p=Ye.prototype;p.setTimeout=function(n){this.P=n};function zs(n,t,e){n.L=1,n.v=Jn(Tt(t)),n.s=e,n.S=!0,Qo(n,null)}function Qo(n,t){n.G=Date.now(),Xe(n),n.A=Tt(n.v);var e=n.A,s=n.W;Array.isArray(s)||(s=[String(s)]),na(e.i,"t",s),n.C=0,e=n.l.J,n.h=new Go,n.g=Sa(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Ch(Y(n.Pa,n,n.g),n.O)),Bo(n.U,n.g,"readystatechange",n.nb),t=n.I?bo(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),Pe(),Ah(n.j,n.u,n.A,n.m,n.W,n.s)}p.nb=function(n){n=n.target;const t=this.M;t&&gt(n)==3?t.l():this.Pa(n)};p.Pa=function(n){try{if(n==this.g)t:{const h=gt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||Fs||this.g&&(this.h.h||this.g.ja()||Dr(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Pe(3):Pe(2)),Xn(this);var e=this.g.da();this.ca=e;e:if(Wo(this)){var s=Dr(this.g);n="";var i=s.length,r=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Ie(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Dh(this.j,this.u,this.A,this.m,this.W,h,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xe(a)){var c=a;break e}}c=null}if(e=c)Qt(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,e);else{this.i=!1,this.o=3,et(12),Mt(this),Ie(this);break t}}this.S?(Yo(this,h,o),Fs&&this.i&&h==3&&(Bo(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Hs(this,o)),h==4&&Mt(this),this.i&&!this.J&&(h==4?wa(this.l,this):(this.i=!1,Xe(this)))}else Yh(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Mt(this),Ie(this)}}}catch{}finally{}};function Wo(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Yo(n,t,e){let s=!0,i;for(;!n.J&&n.C<e.length;)if(i=bh(n,e),i==An){t==4&&(n.o=4,et(14),s=!1),Qt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==qs){n.o=4,et(15),Qt(n.j,n.m,e,"[Invalid Chunk]"),s=!1;break}else Qt(n.j,n.m,i,null),Hs(n,i);Wo(n)&&i!=An&&i!=qs&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,et(16),s=!1),n.i=n.i&&s,s?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),_i(t),t.M=!0,et(11))):(Qt(n.j,n.m,e,"[Invalid Chunked Response]"),Mt(n),Ie(n))}p.mb=function(){if(this.g){var n=gt(this.g),t=this.g.ja();this.C<t.length&&(Xn(this),Yo(this,n,t),this.i&&n!=4&&Xe(this))}};function bh(n,t){var e=n.C,s=t.indexOf(`
`,e);return s==-1?An:(e=Number(t.substring(e,s)),isNaN(e)?qs:(s+=1,s+e>t.length?An:(t=t.slice(s,s+e),n.C=s+e,t)))}p.cancel=function(){this.J=!0,Mt(this)};function Xe(n){n.Y=Date.now()+n.P,Xo(n,n.P)}function Xo(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Qe(Y(n.lb,n),t)}function Xn(n){n.B&&(I.clearTimeout(n.B),n.B=null)}p.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(_h(this.j,this.A),this.L!=2&&(Pe(),et(17)),Mt(this),this.o=2,Ie(this)):Xo(this,this.Y-n)};function Ie(n){n.l.H==0||n.J||wa(n.l,n)}function Mt(n){Xn(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,yi(n.V),$o(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Hs(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ks(e.i,n))){if(!n.K&&Ks(e.i,n)&&e.H==3){try{var s=e.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Nn(e),es(e);else break t;Di(e),et(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Qe(Y(e.ib,e),6e3));if(1>=ra(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ot(e,11)}else if((n.K||e.g==n)&&Nn(e),!xe(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const h=c[3];h!=null&&(e.ra=h,e.l.info("VER="+e.ra));const l=c[4];l!=null&&(e.Ga=l,e.l.info("SVER="+e.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,e.L=s,e.l.info("backChannelRequestTimeoutMs_="+s)),s=e;const m=n.g;if(m){const S=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var r=s.i;r.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ii(r,r.h),r.h=null))}if(s.F){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.Da=N,R(s.I,s.F,N))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),s=e;var o=n;if(s.wa=Ia(s,s.J?s.pa:null,s.Y),o.K){oa(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(Xn(a),Xe(a)),s.g=o}else ya(s);0<e.j.length&&ns(e)}else c[0]!="stop"&&c[0]!="close"||Ot(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ot(e,7):Ai(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Pe(4)}catch{}}function xh(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(jn(n)){for(var t=[],e=n.length,s=0;s<e;s++)t.push(n[s]);return t}t=[],e=0;for(s in n)t[e++]=n[s];return t}function Rh(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(jn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const s in n)t[e++]=s;return t}}}function Jo(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(jn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Rh(n),s=xh(n),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],e&&e[r],n)}var Zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mh(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var s=n[e].indexOf("="),i=null;if(0<=s){var r=n[e].substring(0,s);i=n[e].substring(s+1)}else r=n[e];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Pt){this.h=n.h,Dn(this,n.j),this.s=n.s,this.g=n.g,_n(this,n.m),this.l=n.l;var t=n.i,e=new Fe;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Sr(this,e),this.o=n.o}else n&&(t=String(n).match(Zo))?(this.h=!1,Dn(this,t[1]||"",!0),this.s=ve(t[2]||""),this.g=ve(t[3]||"",!0),_n(this,t[4]),this.l=ve(t[5]||"",!0),Sr(this,t[6]||"",!0),this.o=ve(t[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}Pt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(we(t,Cr,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(we(t,Cr,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(we(e,e.charAt(0)=="/"?Ph:Lh,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",we(e,Vh)),n.join("")};function Tt(n){return new Pt(n)}function Dn(n,t,e){n.j=e?ve(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function _n(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Sr(n,t,e){t instanceof Fe?(n.i=t,Uh(n.i,n.h)):(e||(t=we(t,Fh)),n.i=new Fe(t,n.h))}function R(n,t,e){n.i.set(t,e)}function Jn(n){return R(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ve(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function we(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Oh),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Oh(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Cr=/[#\/\?@]/g,Lh=/[#\?:]/g,Ph=/[#\?]/g,Fh=/[#\?@]/g,Vh=/#/g;function Fe(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function xt(n){n.g||(n.g=new Map,n.h=0,n.i&&Mh(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}p=Fe.prototype;p.add=function(n,t){xt(this),this.i=null,n=ce(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function ta(n,t){xt(n),t=ce(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function ea(n,t){return xt(n),t=ce(n,t),n.g.has(t)}p.forEach=function(n,t){xt(this),this.g.forEach(function(e,s){e.forEach(function(i){n.call(t,i,s,this)},this)},this)};p.ta=function(){xt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let s=0;s<t.length;s++){const i=n[s];for(let r=0;r<i.length;r++)e.push(t[s])}return e};p.Z=function(n){xt(this);let t=[];if(typeof n=="string")ea(this,n)&&(t=t.concat(this.g.get(ce(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};p.set=function(n,t){return xt(this),this.i=null,n=ce(this,n),ea(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};p.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function na(n,t,e){ta(n,t),0<e.length&&(n.i=null,n.g.set(ce(n,t),ui(e)),n.h+=e.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var s=t[e];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function ce(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Uh(n,t){t&&!n.j&&(xt(n),n.i=null,n.g.forEach(function(e,s){var i=s.toLowerCase();s!=i&&(ta(this,s),na(this,i,e))},n)),n.j=t}var Bh=class{constructor(n,t){this.g=n,this.map=t}};function sa(n){this.l=n||$h,I.PerformanceNavigationTiming?(n=I.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $h=10;function ia(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ra(n){return n.h?1:n.g?n.g.size:0}function Ks(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Ii(n,t){n.g?n.g.add(t):n.h=t}function oa(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}sa.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function aa(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ui(n.i)}var jh=class{stringify(n){return I.JSON.stringify(n,void 0)}parse(n){return I.JSON.parse(n,void 0)}};function qh(){this.g=new jh}function zh(n,t,e){const s=e||"";try{Jo(n,function(i,r){let o=i;Ke(i)&&(o=pi(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Hh(n,t){const e=new Gn;if(I.Image){const s=new Image;s.onload=hn(dn,e,s,"TestLoadImage: loaded",!0,t),s.onerror=hn(dn,e,s,"TestLoadImage: error",!1,t),s.onabort=hn(dn,e,s,"TestLoadImage: abort",!1,t),s.ontimeout=hn(dn,e,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else t(!1)}function dn(n,t,e,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Je(n){this.l=n.fc||null,this.j=n.ob||!1}z(Je,wi);Je.prototype.g=function(){return new Zn(this.l,this.j)};Je.prototype.i=function(n){return function(){return n}}({});function Zn(n,t){q.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Si,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Zn,q);var Si=0;p=Zn.prototype;p.open=function(n,t){if(this.readyState!=Si)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Ve(this)};p.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=Si};p.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ua(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ua(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}p.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ze(this):Ve(this),this.readyState==3&&ua(this)}};p.Za=function(n){this.g&&(this.response=this.responseText=n,Ze(this))};p.Ya=function(n){this.g&&(this.response=n,Ze(this))};p.ka=function(){this.g&&Ze(this)};function Ze(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ve(n)}p.setRequestHeader=function(n,t){this.v.append(n,t)};p.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Ve(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Kh=I.JSON.parse;function L(n){q.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ca,this.L=this.M=!1}z(L,q);var ca="",Gh=/^https?$/i,Qh=["POST","PUT"];p=L.prototype;p.Oa=function(n){this.M=n};p.ha=function(n,t,e,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():js.g(),this.C=this.u?Ir(this.u):Ir(js),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(r){Ar(this,r);return}if(n=e||"",e=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)e.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())e.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(e.keys()).find(r=>r.toLowerCase()=="content-type"),i=I.FormData&&n instanceof I.FormData,!(0<=Do(Qh,t))||s||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of e)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{da(this),0<this.B&&((this.L=Wh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=vi(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Ar(this,r)}};function Wh(n){return ee&&typeof n.timeout=="number"&&n.ontimeout!==void 0}p.ua=function(){typeof ai<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Ar(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,ha(n),ts(n)}function ha(n){n.F||(n.F=!0,G(n,"complete"),G(n,"error"))}p.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,G(this,"complete"),G(this,"abort"),ts(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ts(this,!0)),L.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?la(this):this.kb())};p.kb=function(){la(this)};function la(n){if(n.h&&typeof ai<"u"&&(!n.C[1]||gt(n)!=4||n.da()!=2)){if(n.v&&gt(n)==4)vi(n.La,0,n);else if(G(n,"readystatechange"),gt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var s;if(s=o===0){var i=String(n.I).match(Zo)[1]||null;!i&&I.self&&I.self.location&&(i=I.self.location.protocol.slice(0,-1)),s=!Gh.test(i?i.toLowerCase():"")}e=s}if(e)G(n,"complete"),G(n,"success");else{n.m=6;try{var r=2<gt(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",ha(n)}}finally{ts(n)}}}}function ts(n,t){if(n.g){da(n);const e=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||G(n,"ready");try{e.onreadystatechange=s}catch{}}}function da(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(I.clearTimeout(n.A),n.A=null)}p.isActive=function(){return!!this.g};function gt(n){return n.g?n.g.readyState:0}p.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Kh(t)}};function Dr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case ca:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Yh(n){const t={};n=(n.g&&2<=gt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(xe(n[s]))continue;var e=Th(n[s]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const r=t[i]||[];t[i]=r,r.push(e)}gh(t,function(s){return s.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fa(n){let t="";return hi(n,function(e,s){t+=s,t+=":",t+=e,t+=`\r
`}),t}function Ci(n,t,e){t:{for(s in e){var s=!1;break t}s=!0}s||(e=fa(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):R(n,t,e))}function pe(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function ga(n){this.Ga=0,this.j=[],this.l=new Gn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pe("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pe("baseRetryDelayMs",5e3,n),this.hb=pe("retryDelaySeedMs",1e4,n),this.eb=pe("forwardChannelMaxRetries",2,n),this.xa=pe("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new sa(n&&n.concurrentRequestLimit),this.Ja=new qh,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=ga.prototype;p.ra=8;p.H=1;function Ai(n){if(pa(n),n.H==3){var t=n.W++,e=Tt(n.I);if(R(e,"SID",n.K),R(e,"RID",t),R(e,"TYPE","terminate"),tn(n,e),t=new Ye(n,n.l,t),t.L=2,t.v=Jn(Tt(e)),e=!1,I.navigator&&I.navigator.sendBeacon)try{e=I.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&I.Image&&(new Image().src=t.v,e=!0),e||(t.g=Sa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Xe(t)}Ta(n)}function es(n){n.g&&(_i(n),n.g.cancel(),n.g=null)}function pa(n){es(n),n.u&&(I.clearTimeout(n.u),n.u=null),Nn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&I.clearTimeout(n.m),n.m=null)}function ns(n){if(!ia(n.i)&&!n.m){n.m=!0;var t=n.Na;Me||Vo(),Oe||(Me(),Oe=!0),mi.add(t,n),n.C=0}}function Xh(n,t){return ra(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Qe(Y(n.Na,n,t),Ea(n,n.C)),n.C++,!0)}p.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ye(this,this.l,n);let r=this.s;if(this.U&&(r?(r=bo(r),xo(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var s=this.j[e];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=ma(this,i,t),e=Tt(this.I),R(e,"RID",n),R(e,"CVER",22),this.F&&R(e,"X-HTTP-Session-Id",this.F),tn(this,e),r&&(this.O?t="headers="+encodeURIComponent(String(fa(r)))+"&"+t:this.o&&Ci(e,this.o,r)),Ii(this.i,i),this.bb&&R(e,"TYPE","init"),this.P?(R(e,"$req",t),R(e,"SID","null"),i.aa=!0,zs(i,e,null)):zs(i,e,t),this.H=2}}else this.H==3&&(n?_r(this,n):this.j.length==0||ia(this.i)||_r(this))};function _r(n,t){var e;t?e=t.m:e=n.W++;const s=Tt(n.I);R(s,"SID",n.K),R(s,"RID",e),R(s,"AID",n.V),tn(n,s),n.o&&n.s&&Ci(s,n.o,n.s),e=new Ye(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=ma(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ii(n.i,e),zs(e,s,t)}function tn(n,t){n.na&&hi(n.na,function(e,s){R(t,s,e)}),n.h&&Jo({},function(e,s){R(t,s,e)})}function ma(n,t,e){e=Math.min(n.j.length,e);var s=n.h?Y(n.h.Va,n.h,n):null;t:{var i=n.j;let r=-1;for(;;){const o=["count="+e];r==-1?0<e?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const h=i[u].map;if(c-=r,0>c)r=Math.max(0,i[u].g-100),a=!1;else try{zh(h,o,"req"+c+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,s}function ya(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Me||Vo(),Oe||(Me(),Oe=!0),mi.add(t,n),n.A=0}}function Di(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Qe(Y(n.Ma,n),Ea(n,n.A)),n.A++,!0)}p.Ma=function(){if(this.u=null,va(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Qe(Y(this.jb,this),n)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),es(this),va(this))};function _i(n){n.B!=null&&(I.clearTimeout(n.B),n.B=null)}function va(n){n.g=new Ye(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Tt(n.wa);R(t,"RID","rpc"),R(t,"SID",n.K),R(t,"AID",n.V),R(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&R(t,"TO",n.qa),R(t,"TYPE","xmlhttp"),tn(n,t),n.o&&n.s&&Ci(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Jn(Tt(t)),e.s=null,e.S=!0,Qo(e,n)}p.ib=function(){this.v!=null&&(this.v=null,es(this),Di(this),et(19))};function Nn(n){n.v!=null&&(I.clearTimeout(n.v),n.v=null)}function wa(n,t){var e=null;if(n.g==t){Nn(n),_i(n),n.g=null;var s=2}else if(Ks(n.i,t))e=t.F,oa(n.i,t),s=1;else return;if(n.H!=0){if(t.i)if(s==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;s=Qn(),G(s,new zo(s,e)),ns(n)}else ya(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(s==1&&Xh(n,t)||s==2&&Di(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Ot(n,5);break;case 4:Ot(n,10);break;case 3:Ot(n,6);break;default:Ot(n,2)}}}function Ea(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ot(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var s=Y(n.pb,n);e||(e=new Pt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Dn(e,"https"),Jn(e)),Hh(e.toString(),s)}else et(2);n.H=0,n.h&&n.h.za(t),Ta(n),pa(n)}p.pb=function(n){n?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function Ta(n){if(n.H=0,n.ma=[],n.h){const t=aa(n.i);(t.length!=0||n.j.length!=0)&&(yr(n.ma,t),yr(n.ma,n.j),n.i.i.length=0,ui(n.j),n.j.length=0),n.h.ya()}}function Ia(n,t,e){var s=e instanceof Pt?Tt(e):new Pt(e);if(s.g!="")t&&(s.g=t+"."+s.g),_n(s,s.m);else{var i=I.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Pt(null);s&&Dn(r,s),t&&(r.g=t),i&&_n(r,i),e&&(r.l=e),s=r}return e=n.F,t=n.Da,e&&t&&R(s,e,t),R(s,"VER",n.ra),tn(n,s),s}function Sa(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new L(new Je({ob:!0})):new L(n.va),t.Oa(n.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ca(){}p=Ca.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function kn(){if(ee&&!(10<=Number(hh)))throw Error("Environmental error: no available transport.")}kn.prototype.g=function(n,t){return new rt(n,t)};function rt(n,t){q.call(this),this.g=new ga(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!xe(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!xe(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new he(this)}z(rt,q);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;et(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Ia(n,null,n.Y),ns(n)};rt.prototype.close=function(){Ai(this.g)};rt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=pi(n),n=e);t.j.push(new Bh(t.fb++,n)),t.H==3&&ns(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,Ai(this.g),delete this.g,rt.$.N.call(this)};function Aa(n){Ei.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}z(Aa,Ei);function Da(){Ti.call(this),this.status=1}z(Da,Ti);function he(n){this.g=n}z(he,Ca);he.prototype.Ba=function(){G(this.g,"a")};he.prototype.Aa=function(n){G(this.g,new Aa(n))};he.prototype.za=function(n){G(this.g,new Da)};he.prototype.ya=function(){G(this.g,"b")};function Jh(){this.blockSize=-1}function lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(lt,Jh);lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function As(n,t,e){e||(e=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)s[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var r=n.g[3],o=t+(r^e&(i^r))+s[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(e^i))+s[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^r)+s[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~r))+s[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}lt.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=e;)As(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<t;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){As(this,s),i=0;break}}else for(;r<t;)if(s[i++]=n[r++],i==this.blockSize){As(this,s),i=0;break}}this.h=i,this.i+=t};lt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var s=0;32>s;s+=8)n[e++]=this.g[t]>>>s&255;return n};function x(n,t){this.h=t;for(var e=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==t||(e[i]=r,s=!1)}this.g=e}var Zh={};function Ni(n){return-128<=n&&128>n?ah(n,function(t){return new x([t|0],0>t?-1:0)}):new x([n|0],0>n?-1:0)}function pt(n){if(isNaN(n)||!isFinite(n))return Xt;if(0>n)return K(pt(-n));for(var t=[],e=1,s=0;n>=e;s++)t[s]=n/e|0,e*=Gs;return new x(t,0)}function _a(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return K(_a(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=pt(Math.pow(t,8)),s=Xt,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),t);8>r?(r=pt(Math.pow(t,r)),s=s.R(r).add(pt(o))):(s=s.R(e),s=s.add(pt(o)))}return s}var Gs=4294967296,Xt=Ni(0),Qs=Ni(1),Nr=Ni(16777216);p=x.prototype;p.ea=function(){if(at(this))return-K(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var s=this.D(e);n+=(0<=s?s:Gs+s)*t,t*=Gs}return n};p.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(vt(this))return"0";if(at(this))return"-"+K(this).toString(n);for(var t=pt(Math.pow(n,6)),e=this,s="";;){var i=xn(e,t).g;e=bn(e,i.R(t));var r=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,vt(e))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};p.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function vt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function at(n){return n.h==-1}p.X=function(n){return n=bn(this,n),at(n)?-1:vt(n)?0:1};function K(n){for(var t=n.g.length,e=[],s=0;s<t;s++)e[s]=~n.g[s];return new x(e,~n.h).add(Qs)}p.abs=function(){return at(this)?K(this):this};p.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,e[i]=o<<16|r}return new x(e,e[e.length-1]&-2147483648?-1:0)};function bn(n,t){return n.add(K(t))}p.R=function(n){if(vt(this)||vt(n))return Xt;if(at(this))return at(n)?K(this).R(K(n)):K(K(this).R(n));if(at(n))return K(this.R(K(n)));if(0>this.X(Nr)&&0>n.X(Nr))return pt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],s=0;s<2*t;s++)e[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*s+2*i]+=o*u,fn(e,2*s+2*i),e[2*s+2*i+1]+=r*u,fn(e,2*s+2*i+1),e[2*s+2*i+1]+=o*a,fn(e,2*s+2*i+1),e[2*s+2*i+2]+=r*a,fn(e,2*s+2*i+2)}for(s=0;s<t;s++)e[s]=e[2*s+1]<<16|e[2*s];for(s=t;s<2*t;s++)e[s]=0;return new x(e,0)};function fn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function me(n,t){this.g=n,this.h=t}function xn(n,t){if(vt(t))throw Error("division by zero");if(vt(n))return new me(Xt,Xt);if(at(n))return t=xn(K(n),t),new me(K(t.g),K(t.h));if(at(t))return t=xn(n,K(t)),new me(K(t.g),t.h);if(30<n.g.length){if(at(n)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Qs,s=t;0>=s.X(n);)e=kr(e),s=kr(s);var i=Ht(e,1),r=Ht(s,1);for(s=Ht(s,2),e=Ht(e,2);!vt(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(e),r=o),s=Ht(s,1),e=Ht(e,1)}return t=bn(n,i.R(t)),new me(i,t)}for(i=Xt;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),s=Math.ceil(Math.log(e)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=pt(e),o=r.R(t);at(o)||0<o.X(n);)e-=s,r=pt(e),o=r.R(t);vt(r)&&(r=Qs),i=i.add(r),n=bn(n,o)}return new me(i,n)}p.gb=function(n){return xn(this,n).h};p.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)&n.D(s);return new x(e,this.h&n.h)};p.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)|n.D(s);return new x(e,this.h|n.h)};p.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)^n.D(s);return new x(e,this.h^n.h)};function kr(n){for(var t=n.g.length+1,e=[],s=0;s<t;s++)e[s]=n.D(s)<<1|n.D(s-1)>>>31;return new x(e,n.h)}function Ht(n,t){var e=t>>5;t%=32;for(var s=n.g.length-e,i=[],r=0;r<s;r++)i[r]=0<t?n.D(r+e)>>>t|n.D(r+e+1)<<32-t:n.D(r+e);return new x(i,n.h)}kn.prototype.createWebChannel=kn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Wn.NO_ERROR=0;Wn.TIMEOUT=8;Wn.HTTP_ERROR=6;Ho.COMPLETE="complete";Ko.EventType=We;We.OPEN="a";We.CLOSE="b";We.ERROR="c";We.MESSAGE="d";q.prototype.listen=q.prototype.O;L.prototype.listenOnce=L.prototype.P;L.prototype.getLastError=L.prototype.Sa;L.prototype.getLastErrorCode=L.prototype.Ia;L.prototype.getStatus=L.prototype.da;L.prototype.getResponseJson=L.prototype.Wa;L.prototype.getResponseText=L.prototype.ja;L.prototype.send=L.prototype.ha;L.prototype.setWithCredentials=L.prototype.Oa;lt.prototype.digest=lt.prototype.l;lt.prototype.reset=lt.prototype.reset;lt.prototype.update=lt.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=pt;x.fromString=_a;var tl=function(){return new kn},el=function(){return Qn()},Ds=Wn,nl=Ho,sl=qt,br={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},il=Je,gn=Ko,rl=L,ol=lt,Jt=x;const xr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new Eo("@firebase/firestore");function Rr(){return Ut.logLevel}function y(n,...t){if(Ut.logLevel<=k.DEBUG){const e=t.map(ki);Ut.debug(`Firestore (${le}): ${n}`,...e)}}function It(n,...t){if(Ut.logLevel<=k.ERROR){const e=t.map(ki);Ut.error(`Firestore (${le}): ${n}`,...e)}}function ne(n,...t){if(Ut.logLevel<=k.WARN){const e=t.map(ki);Ut.warn(`Firestore (${le}): ${n}`,...e)}}function ki(n){if(typeof n=="string")return n;try{return t=n,JSON.stringify(t)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n="Unexpected state"){const t=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+n;throw It(t),new Error(t)}function M(n,t){n||E()}function D(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class al{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(W.UNAUTHENTICATED))}shutdown(){}}class ul{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cl{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let s=this.i;const i=u=>this.i!==s?(s=this.i,e(u)):Promise.resolve();let r=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ft,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ft)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Na(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new W(t)}}class hl{constructor(t,e,s){this.h=t,this.l=e,this.m=s,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ll{constructor(t,e,s){this.h=t,this.l=e,this.m=s}getToken(){return Promise.resolve(new hl(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fl{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(M(typeof e.token=="string"),this.T=e.token,new dl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=gl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function b(n,t){return n<t?-1:n>t?1:0}function se(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new v(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new j(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new j(0,0))}static max(){return new T(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e,s){e===void 0?e=0:e>t.length&&E(),s===void 0?s=t.length-e:s>t.length-e&&E(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class O extends Ue{construct(t,e,s){return new O(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new v(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new O(e)}static emptyPath(){return new O([])}}const pl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ue{construct(t,e,s){return new tt(t,e,s)}static isValidIdentifier(t){return pl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new v(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new v(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new v(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(e)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(O.fromString(t))}static fromName(t){return new w(O.fromString(t).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return O.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new O(t.slice()))}}function ml(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=T.fromTimestamp(s===1e9?new j(e+1,0):new j(e,s));return new _t(i,w.empty(),t)}function yl(n){return new _t(n.readTime,n.key,-1)}class _t{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new _t(T.min(),w.empty(),-1)}static max(){return new _t(T.max(),w.empty(),-1)}}function vl(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=w.comparator(n.documentKey,t.documentKey),e!==0?e:b(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class El{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n){if(n.code!==d.FAILED_PRECONDITION||n.message!==wl)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,s)=>{e(t)})}static reject(t){return new g((e,s)=>{s(t)})}static waitFor(t){return new g((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},u=>s(u))}),o=!0,r===i&&e()})}static or(t){let e=g.resolve(!1);for(const s of t)e=e.next(i=>i?g.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new g((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;e(t[c]).next(h=>{o[c]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,e){return new g((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}function en(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>e.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}xi.ct=-1;function nn(n){return n==null}function Rn(n){return n===0&&1/n==-1/0}function Tl(n){return typeof n=="number"&&Number.isInteger(n)&&!Rn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function de(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ba(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,e){this.comparator=t,this.root=e||H.EMPTY}insert(t,e){return new P(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,H.BLACK,null,null))}remove(t){return new P(this.comparator,this.root.remove(t,this.comparator).copy(null,null,H.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new pn(this.root,t,this.comparator,!0)}}class pn{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class H{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??H.RED,this.left=i??H.EMPTY,this.right=r??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new H(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return H.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const t=this.left.check();if(t!==this.right.check())throw E();return t+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,t,e,s,i){return this}insert(n,t,e){return new H(n,t)}remove(n,t){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.comparator=t,this.data=new P(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Or(this.data.getIterator())}getIteratorFrom(t){return new Or(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new J(this.comparator);return e.data=t,e}}class Or{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new ct([])}unionWith(t){let e=new J(tt.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return se(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xa("Invalid base64 string: "+i):i}}(t);return new Z(e)}static fromUint8Array(t){const e=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new Z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let s=0;s<t.length;s++)e[s]=t.charCodeAt(s);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const Il=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(M(!!n),typeof n=="string"){let t=0;const e=Il.exec(n);if(M(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(n.seconds),nanos:V(n.nanos)}}function V(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?Z.fromBase64String(n):Z.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Mi(n){const t=n.mapValue.fields.__previous_value__;return Ri(t)?Mi(t):t}function Be(n){const t=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,s,i,r,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class $e{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $e&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ri(n)?4:Cl(n)?9007199254740991:10:E()}function mt(n,t){if(n===t)return!0;const e=$t(n);if(e!==$t(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Be(n).isEqual(Be(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Nt(s.timestampValue),o=Nt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?Rn(r)===Rn(o):isNaN(r)&&isNaN(o)}return!1}(n,t);case 9:return se(n.arrayValue.values||[],t.arrayValue.values||[],mt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Mr(r)!==Mr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!mt(r[a],o[a])))return!1;return!0}(n,t);default:return E()}}function je(n,t){return(n.values||[]).find(e=>mt(e,t))!==void 0}function ie(n,t){if(n===t)return 0;const e=$t(n),s=$t(t);if(e!==s)return b(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return b(n.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,t);case 3:return Lr(n.timestampValue,t.timestampValue);case 4:return Lr(Be(n),Be(t));case 5:return b(n.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(n.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=b(o[u],a[u]);if(c!==0)return c}return b(o.length,a.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(V(i.latitude),V(r.latitude));return o!==0?o:b(V(i.longitude),V(r.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ie(o[u],a[u]);if(c)return c}return b(o.length,a.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===mn.mapValue&&r===mn.mapValue)return 0;if(i===mn.mapValue)return 1;if(r===mn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const l=b(a[h],c[h]);if(l!==0)return l;const f=ie(o[a[h]],u[c[h]]);if(f!==0)return f}return b(a.length,c.length)}(n.mapValue,t.mapValue);default:throw E()}}function Lr(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return b(n,t);const e=Nt(n),s=Nt(t),i=b(e.seconds,s.seconds);return i!==0?i:b(e.nanos,s.nanos)}function re(n){return Ws(n)}function Ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Nt(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Bt(n.bytesValue).toBase64():"referenceValue"in n?(e=n.referenceValue,w.fromName(e).toString()):"geoPointValue"in n?`geo(${(t=n.geoPointValue).latitude},${t.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ws(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ws(s.fields[a])}`;return r+"}"}(n.mapValue):E();var t,e}function Ys(n){return!!n&&"integerValue"in n}function Oi(n){return!!n&&"arrayValue"in n}function Pr(n){return!!n&&"nullValue"in n}function Fr(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _s(n){return!!n&&"mapValue"in n}function Se(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return de(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Se(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Se(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Cl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!_s(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Se(e)}setAll(t){let e=tt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Se(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());_s(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return mt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];_s(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){de(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(Se(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new $(t,0,T.min(),T.min(),T.min(),it.empty(),0)}static newFoundDocument(t,e,s,i){return new $(t,1,e,T.min(),s,i,0)}static newNoDocument(t,e){return new $(t,2,e,T.min(),T.min(),it.empty(),0)}static newUnknownDocument(t,e){return new $(t,3,e,T.min(),T.min(),it.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.position=t,this.inclusive=e}}function Vr(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),e.key):s=ie(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ur(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!mt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e="asc"){this.field=t,this.dir=e}}function Al(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{}class U extends Ra{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new _l(t,e,s):e==="array-contains"?new bl(t,s):e==="in"?new xl(t,s):e==="not-in"?new Rl(t,s):e==="array-contains-any"?new Ml(t,s):new U(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Nl(t,s):new kl(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ie(e,this.value)):e!==null&&$t(this.value)===$t(e)&&this.matchesComparison(ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yt extends Ra{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new yt(t,e)}matches(t){return Ma(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(e=>e.isInequality());return t!==null?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ma(n){return n.op==="and"}function Oa(n){return Dl(n)&&Ma(n)}function Dl(n){for(const t of n.filters)if(t instanceof yt)return!1;return!0}function Xs(n){if(n instanceof U)return n.field.canonicalString()+n.op.toString()+re(n.value);if(Oa(n))return n.filters.map(t=>Xs(t)).join(",");{const t=n.filters.map(e=>Xs(e)).join(",");return`${n.op}(${t})`}}function La(n,t){return n instanceof U?function(e,s){return s instanceof U&&e.op===s.op&&e.field.isEqual(s.field)&&mt(e.value,s.value)}(n,t):n instanceof yt?function(e,s){return s instanceof yt&&e.op===s.op&&e.filters.length===s.filters.length?e.filters.reduce((i,r,o)=>i&&La(r,s.filters[o]),!0):!1}(n,t):void E()}function Pa(n){return n instanceof U?function(t){return`${t.field.canonicalString()} ${t.op} ${re(t.value)}`}(n):n instanceof yt?function(t){return t.op.toString()+" {"+t.getFilters().map(Pa).join(" ,")+"}"}(n):"Filter"}class _l extends U{constructor(t,e,s){super(t,e,s),this.key=w.fromName(s.referenceValue)}matches(t){const e=w.comparator(t.key,this.key);return this.matchesComparison(e)}}class Nl extends U{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kl extends U{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>w.fromName(s.referenceValue))}class bl extends U{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Oi(e)&&je(e.arrayValue,this.value)}}class xl extends U{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&je(this.value.arrayValue,e)}}class Rl extends U{constructor(t,e){super(t,"not-in",e)}matches(t){if(je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!je(this.value.arrayValue,e)}}class Ml extends U{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>je(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Br(n,t=null,e=[],s=[],i=null,r=null,o=null){return new Ol(n,t,e,s,i,r,o)}function Li(n){const t=D(n);if(t.dt===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Xs(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>re(s)).join(",")),t.dt=e}return t.dt}function Pi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Al(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!La(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ur(n.startAt,t.startAt)&&Ur(n.endAt,t.endAt)}function Js(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Ll(n,t,e,s,i,r,o,a){return new ss(n,t,e,s,i,r,o,a)}function Fi(n){return new ss(n)}function $r(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pl(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Fl(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function Vl(n){return n.collectionGroup!==null}function Zt(n){const t=D(n);if(t.wt===null){t.wt=[];const e=Fl(t),s=Pl(t);if(e!==null&&s===null)e.isKeyField()||t.wt.push(new Ce(e)),t.wt.push(new Ce(tt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Ce(tt.keyField(),r))}}}return t.wt}function St(n){const t=D(n);if(!t._t)if(t.limitType==="F")t._t=Br(t.path,t.collectionGroup,Zt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Zt(t)){const o=r.dir==="desc"?"asc":"desc";e.push(new Ce(r.field,o))}const s=t.endAt?new Mn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Mn(t.startAt.position,t.startAt.inclusive):null;t._t=Br(t.path,t.collectionGroup,e,t.filters,t.limit,s,i)}return t._t}function Zs(n,t,e){return new ss(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function is(n,t){return Pi(St(n),St(t))&&n.limitType===t.limitType}function Va(n){return`${Li(St(n))}|lt:${n.limitType}`}function ti(n){return`Query(target=${function(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(s=>Pa(s)).join(", ")}]`),nn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>re(s)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>re(s)).join(",")),`Target(${e})`}(St(n))}; limitType=${n.limitType})`}function rs(n,t){return t.isFoundDocument()&&function(e,s){const i=s.key.path;return e.collectionGroup!==null?s.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(i):w.isDocumentKey(e.path)?e.path.isEqual(i):e.path.isImmediateParentOf(i)}(n,t)&&function(e,s){for(const i of Zt(e))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(e,s){for(const i of e.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(e,s){return!(e.startAt&&!function(i,r,o){const a=Vr(i,r,o);return i.inclusive?a<=0:a<0}(e.startAt,Zt(e),s)||e.endAt&&!function(i,r,o){const a=Vr(i,r,o);return i.inclusive?a>=0:a>0}(e.endAt,Zt(e),s))}(n,t)}function Ul(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ua(n){return(t,e)=>{let s=!1;for(const i of Zt(n)){const r=Bl(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Bl(n,t,e){const s=n.field.isKeyField()?w.comparator(t.key,e.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ie(a,u):E()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){de(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ba(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new P(w.comparator);function kt(){return $l}const Ba=new P(w.comparator);function Ee(...n){let t=Ba;for(const e of n)t=t.insert(e.key,e);return t}function jl(n){let t=Ba;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Lt(){return Ae()}function $a(){return Ae()}function Ae(){return new fe(n=>n.toString(),(n,t)=>n.isEqual(t))}const ql=new J(w.comparator);function _(...n){let t=ql;for(const e of n)t=t.add(e);return t}const zl=new J(b);function Hl(){return zl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rn(t)?"-0":t}}function qa(n){return{integerValue:""+n}}function Kl(n,t){return Tl(t)?qa(t):ja(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this._=void 0}}function Gl(n,t,e){return n instanceof On?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ri(i)&&(i=Mi(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(e,t):n instanceof qe?za(n,t):n instanceof ze?Ha(n,t):function(s,i){const r=Wl(s,i),o=jr(r)+jr(s.gt);return Ys(r)&&Ys(s.gt)?qa(o):ja(s.serializer,o)}(n,t)}function Ql(n,t,e){return n instanceof qe?za(n,t):n instanceof ze?Ha(n,t):e}function Wl(n,t){return n instanceof Ln?Ys(e=t)||function(s){return!!s&&"doubleValue"in s}(e)?t:{integerValue:0}:null;var e}class On extends os{}class qe extends os{constructor(t){super(),this.elements=t}}function za(n,t){const e=Ka(t);for(const s of n.elements)e.some(i=>mt(i,s))||e.push(s);return{arrayValue:{values:e}}}class ze extends os{constructor(t){super(),this.elements=t}}function Ha(n,t){let e=Ka(t);for(const s of n.elements)e=e.filter(i=>!mt(i,s));return{arrayValue:{values:e}}}class Ln extends os{constructor(t,e){super(),this.serializer=t,this.gt=e}}function jr(n){return V(n.integerValue||n.doubleValue)}function Ka(n){return Oi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yl(n,t){return n.field.isEqual(t.field)&&function(e,s){return e instanceof qe&&s instanceof qe||e instanceof ze&&s instanceof ze?se(e.elements,s.elements,mt):e instanceof Ln&&s instanceof Ln?mt(e.gt,s.gt):e instanceof On&&s instanceof On}(n.transform,t.transform)}class ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ut}static exists(t){return new ut(void 0,t)}static updateTime(t){return new ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class as{}function Ga(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vi(n.key,ut.none()):new sn(n.key,n.data,ut.none());{const e=n.data,s=it.empty();let i=new J(tt.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new zt(n.key,s,new ct(i.toArray()),ut.none())}}function Xl(n,t,e){n instanceof sn?function(s,i,r){const o=s.value.clone(),a=zr(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,t,e):n instanceof zt?function(s,i,r){if(!wn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=zr(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Qa(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,t,e):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,e)}function De(n,t,e,s){return n instanceof sn?function(i,r,o,a){if(!wn(i.precondition,r))return o;const u=i.value.clone(),c=Hr(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(n,t,e,s):n instanceof zt?function(i,r,o,a){if(!wn(i.precondition,r))return o;const u=Hr(i.fieldTransforms,a,r),c=r.data;return c.setAll(Qa(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(i,r,o){return wn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,t,e)}function qr(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(e,s){return e===void 0&&s===void 0||!(!e||!s)&&se(e,s,(i,r)=>Yl(i,r))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class sn extends as{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zt extends as{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function zr(n,t,e){const s=new Map;M(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Ql(o,a,e[i]))}return s}function Hr(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,Gl(r,o,t))}return s}class Vi extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wa extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Xl(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=De(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=De(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=$a();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const u=Ga(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),_())}isEqual(t){return this.batchId===t.batchId&&se(this.mutations,t.mutations,(e,s)=>qr(e,s))&&se(this.baseMutations,t.baseMutations,(e,s)=>qr(e,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,A;function ed(n){switch(n){default:return E();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Ya(n){if(n===void 0)return It("GRPC error has no .code"),d.UNKNOWN;switch(n){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return E()}}(A=F||(F={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return yn}static getOrCreateInstance(){return yn===null&&(yn=new Ui),yn}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let yn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Jt([4294967295,4294967295],0);function Kr(n){const t=nd().encode(n),e=new ol;return e.update(t),new Uint8Array(e.digest())}function Gr(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Jt([e,s],0),new Jt([i,r],0)]}class Bi{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Te(`Invalid padding: ${e}`);if(s<0)throw new Te(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Te(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Te(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=Jt.fromNumber(this.It)}Et(t,e,s){let i=t.add(e.multiply(Jt.fromNumber(s)));return i.compare(sd)===1&&(i=new Jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const e=Kr(t),[s,i]=Gr(e);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Bi(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const e=Kr(t),[s,i]=Gr(e);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Te extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,rn.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new us(T.min(),i,new P(b),kt(),_())}}class rn{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new rn(s,e,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e,s,i){this.Pt=t,this.removedTargetIds=e,this.key=s,this.bt=i}}class Xa{constructor(t,e){this.targetId=t,this.Vt=e}}class Ja{constructor(t,e,s=Z.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Qr{constructor(){this.St=0,this.Dt=Yr(),this.Ct=Z.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=_(),e=_(),s=_();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:E()}}),new rn(this.Ct,this.xt,t,e,s)}Ft(){this.Nt=!1,this.Dt=Yr()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class id{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=kt(),this.zt=Wr(),this.Wt=new P(b)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,e=>{const s=this.Zt(e);switch(t.state){case 0:this.te(e)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(e);break;case 3:this.te(e)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),s.$t(t.resumeToken));break;default:E()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach((s,i)=>{this.te(i)&&e(i)})}ne(t){var e;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(Js(o))if(i===0){const a=new w(o.path);this.Yt(s,a,$.newNoDocument(a,T.min()))}else M(i===1);else{const a=this.ie(s);if(a!==i){const u=this.re(t,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(e=Ui.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(c,h,l){var f,m,S,N,C,ot;const nt={localCacheCount:h,existenceFilterCount:l.count},st=l.unchangedNames;return st&&(nt.bloomFilter={applied:c===0,hashCount:(f=st==null?void 0:st.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(N=(S=(m=st==null?void 0:st.bits)===null||m===void 0?void 0:m.bitmap)===null||S===void 0?void 0:S.length)!==null&&N!==void 0?N:0,padding:(ot=(C=st==null?void 0:st.bits)===null||C===void 0?void 0:C.padding)!==null&&ot!==void 0?ot:0}),nt}(u,a,t.Vt))}}}}re(t,e){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=Bt(r).toUint8Array()}catch(h){if(h instanceof xa)return ne("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{c=new Bi(u,o,a)}catch(h){return ne(h instanceof Te?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return c.It===0?1:i!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const e=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Js(a.target)){const u=new w(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,$.newNoDocument(u,t))}r.Mt&&(e.set(o,r.Ot()),r.Ft())}});let s=_();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new us(t,e,this.Wt,this.jt,s);return this.jt=kt(),this.zt=Wr(),this.Wt=new P(b),i}Jt(t,e){if(!this.te(t))return;const s=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,s),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,e)?i.Bt(e,1):i.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),s&&(this.jt=this.jt.insert(e,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new Qr,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new J(b),this.zt=this.zt.insert(t,e)),e}te(t){const e=this.se(t)!==null;return e||y("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Qr),this.Gt.getRemoteKeysForTarget(t).forEach(e=>{this.Yt(t,e,null)})}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Wr(){return new P(w.comparator)}function Yr(){return new P(w.comparator)}const rd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),od=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ad=(()=>({and:"AND",or:"OR"}))();class ud{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ei(n,t){return n.useProto3Json||nn(t)?t:{value:t}}function Pn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Za(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function cd(n,t){return Pn(n,t.toTimestamp())}function wt(n){return M(!!n),T.fromTimestamp(function(t){const e=Nt(t);return new j(e.seconds,e.nanos)}(n))}function $i(n,t){return function(e){return new O(["projects",e.projectId,"databases",e.database])}(n).child("documents").child(t).canonicalString()}function tu(n){const t=O.fromString(n);return M(iu(t)),t}function Fn(n,t){return $i(n.databaseId,t.path)}function _e(n,t){const e=tu(t);if(e.get(1)!==n.databaseId.projectId)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new v(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new w(eu(e))}function ni(n,t){return $i(n.databaseId,t)}function hd(n){const t=tu(n);return t.length===4?O.emptyPath():eu(t)}function Vn(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eu(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xr(n,t,e){return{name:Fn(n,t),fields:e.value.mapValue.fields}}function ld(n,t){return"found"in t?function(e,s){M(!!s.found),s.found.name,s.found.updateTime;const i=_e(e,s.found.name),r=wt(s.found.updateTime),o=s.found.createTime?wt(s.found.createTime):T.min(),a=new it({mapValue:{fields:s.found.fields}});return $.newFoundDocument(i,r,o,a)}(n,t):"missing"in t?function(e,s){M(!!s.missing),M(!!s.readTime);const i=_e(e,s.missing),r=wt(s.readTime);return $.newNoDocument(i,r)}(n,t):E()}function dd(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:E()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,c){return u.useProto3Json?(M(c===void 0||typeof c=="string"),Z.fromBase64String(c||"")):(M(c===void 0||c instanceof Uint8Array),Z.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:Ya(u.code);return new v(c,u.message||"")}(o);e=new Ja(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=_e(n,s.document.name),r=wt(s.document.updateTime),o=s.document.createTime?wt(s.document.createTime):T.min(),a=new it({mapValue:{fields:s.document.fields}}),u=$.newFoundDocument(i,r,o,a),c=s.targetIds||[],h=s.removedTargetIds||[];e=new En(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=_e(n,s.document),r=s.readTime?wt(s.readTime):T.min(),o=$.newNoDocument(i,r),a=s.removedTargetIds||[];e=new En([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=_e(n,s.document),r=s.removedTargetIds||[];e=new En([],r,i,null)}else{if(!("filter"in t))return E();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new td(i,r),a=s.targetId;e=new Xa(a,o)}}return e}function fd(n,t){let e;if(t instanceof sn)e={update:Xr(n,t.key,t.value)};else if(t instanceof Vi)e={delete:Fn(n,t.key)};else if(t instanceof zt)e={update:Xr(n,t.key,t.data),updateMask:Td(t.fieldMask)};else{if(!(t instanceof Wa))return E();e={verify:Fn(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof On)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ze)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ln)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw E()}(0,s))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:cd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E()}(n,t.precondition)),e}function gd(n,t){return{documents:[ni(n,t.path)]}}function pd(n,t){const e={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(e.parent=ni(n,s),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ni(n,s.popLast()),e.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return su(yt.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Kt(h.field),direction:vd(h.dir)}}(c))}(t.orderBy);r&&(e.structuredQuery.orderBy=r);const o=ei(n,t.limit);var a;return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function md(n){let t=hd(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){M(s===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=function(h){const l=nu(h);return l instanceof yt&&Oa(l)?l.getFilters():[l]}(e.where));let o=[];e.orderBy&&(o=e.orderBy.map(h=>function(l){return new Ce(Gt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;e.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,nn(l)?null:l}(e.limit));let u=null;e.startAt&&(u=function(h){const l=!!h.before,f=h.values||[];return new Mn(f,l)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const l=!h.before,f=h.values||[];return new Mn(f,l)}(e.endAt)),Ll(t,i,o,r,a,"F",u,c)}function yd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gt(t.unaryFilter.field);return U.create(e,"==",{doubleValue:NaN});case"IS_NULL":const s=Gt(t.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gt(t.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Gt(t.unaryFilter.field);return U.create(r,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(n):n.fieldFilter!==void 0?function(t){return U.create(Gt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return yt.create(t.compositeFilter.filters.map(e=>nu(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return E()}}(t.compositeFilter.op))}(n):E()}function vd(n){return rd[n]}function wd(n){return od[n]}function Ed(n){return ad[n]}function Kt(n){return{fieldPath:n.canonicalString()}}function Gt(n){return tt.fromServerFormat(n.fieldPath)}function su(n){return n instanceof U?function(t){if(t.op==="=="){if(Fr(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NAN"}};if(Pr(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fr(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NAN"}};if(Pr(t.value))return{unaryFilter:{field:Kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(t.field),op:wd(t.op),value:t.value}}}(n):n instanceof yt?function(t){const e=t.getFilters().map(s=>su(s));return e.length===1?e[0]:{compositeFilter:{op:Ed(t.op),filters:e}}}(n):E()}function Td(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function iu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,s,i,r=T.min(),o=T.min(),a=Z.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ct(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t){this.fe=t}}function Sd(n){const t=md({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.rn=new Ad}addToCollectionParentIndex(t,e){return this.rn.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve(_t.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve(_t.min())}updateCollectionGroup(t,e,s){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class Ad{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new J(O.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new J(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new oe(0)}static Mn(){return new oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.changes=new fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,$.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?g.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&De(s.mutation,i,ct.empty(),j.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,_()).next(()=>s))}getLocalViewOfDocuments(t,e,s=_()){const i=Lt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Ee();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Lt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,_()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=kt();const o=Ae(),a=Ae();return e.forEach((u,c)=>{const h=s.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof zt)?r=r.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),De(h.mutation,c,h.mutation.getFieldMask(),j.now())):o.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((c,h)=>o.set(c,h)),e.forEach((c,h)=>{var l;return a.set(c,new _d(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Ae();let i=new P((o,a)=>o-a),r=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let h=s.get(u)||ct.empty();h=a.applyToLocalView(c,h),s.set(u,h);const l=(i.get(a.batchId)||_()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=$a();h.forEach(f=>{if(!r.has(f)){const m=Ga(e.get(f),s.get(f));m!==null&&l.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s):this.getDocumentsMatchingCollectionQuery(t,e,s)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):g.resolve(Lt());let a=-1,u=r;return o.next(c=>g.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,u,c,_())).next(h=>({batchId:a,changes:jl(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new w(e)).next(s=>{let i=Ee();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s){const i=e.collectionGroup;let r=Ee();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const u=function(c,h){return new ss(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(c=>{c.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,e,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,i))).next(r=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,$.newInvalidDocument(c)))});let o=Ee();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&De(c.mutation,u,ct.empty(),j.now()),rs(e,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return g.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var s;return this.cs.set(e.id,{id:(s=e).id,version:s.version,createTime:wt(s.createTime)}),g.resolve()}getNamedQuery(t,e){return g.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(s){return{name:s.name,query:Sd(s.bundledQuery),readTime:wt(s.readTime)}}(e)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.overlays=new P(w.comparator),this.ls=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Lt();return g.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.we(t,e,r)}),g.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(t,e,s){const i=Lt(),r=e.length+1,o=new w(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new P((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>s){let h=r.get(c.largestBatchId);h===null&&(h=Lt(),r=r.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Lt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return g.resolve(a)}we(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zl(e,s));let r=this.ls.get(e);r===void 0&&(r=_(),this.ls.set(e,r)),this.ls.set(e,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.fs=new J(B.ds),this.ws=new J(B._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const s=new B(t,e);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.ys(new B(t,e))}ps(t,e){t.forEach(s=>this.removeReference(s,e))}Is(t){const e=new w(new O([])),s=new B(e,t),i=new B(e,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new w(new O([])),s=new B(e,t),i=new B(e,t+1);let r=_();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new B(t,0),s=this.fs.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class B{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return w.comparator(t.key,e.key)||b(t.As,e.As)}static _s(t,e){return b(t.As,e.As)||w.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new J(B.ds)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jl(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.bs(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new B(e,0),i=new B(e,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new J(b);return e.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new B(new w(r),0);let a=new J(b);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.As)),!0)},o),g.resolve(this.Vs(a))}Vs(t){const e=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){M(this.Ss(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(e.mutations,i=>{const r=new B(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,e){const s=new B(e,0),i=this.Rs.firstAfterOrEqual(s);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ss(t,e){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t){this.Ds=t,this.docs=new P(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return g.resolve(s?s.document.mutableCopy():$.newInvalidDocument(e))}getEntries(t,e){let s=kt();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():$.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=kt();const o=e.path,a=new w(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||vl(yl(h),s)<=0||(i.has(h.key)||rs(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,e,s,i){E()}Cs(t,e){return g.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new Md(this)}getSize(t){return g.resolve(this.size)}}class Md extends Dd{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),g.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.persistence=t,this.xs=new fe(e=>Li(e),Pi),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ji,this.targetCount=0,this.Ms=oe.kn()}forEachTarget(t,e){return this.xs.forEach((s,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Ns&&(this.Ns=e),g.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new oe(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.Fn(e),g.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const s=this.xs.get(e)||null;return g.resolve(s)}addMatchingKeys(t,e,s){return this.ks.gs(e,s),g.resolve()}removeMatchingKeys(t,e,s){this.ks.ps(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),g.resolve()}getMatchingKeysForTargetId(t,e){const s=this.ks.Es(e);return g.resolve(s)}containsKey(t,e){return g.resolve(this.ks.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.$s={},this.overlays={},this.Os=new xi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Od(this),this.indexManager=new Cd,this.remoteDocumentCache=function(s){return new Rd(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Id(e),this.qs=new kd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.$s[t.toKey()];return s||(s=new xd(e,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,s){y("MemoryPersistence","Starting transaction:",t);const i=new Pd(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,e){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,e)))}}class Pd extends El{constructor(t){super(),this.currentSequenceNumber=t}}class qi{constructor(t){this.persistence=t,this.Qs=new ji,this.js=null}static zs(t){return new qi(t)}get Ws(){if(this.js)return this.js;throw E()}addReference(t,e,s){return this.Qs.addReference(s,e),this.Ws.delete(s.toString()),g.resolve()}removeReference(t,e,s){return this.Qs.removeReference(s,e),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),g.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const i=w.fromPath(s);return this.Hs(t,i).next(r=>{r||e.removeEntry(i,T.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(s=>{s?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return g.or([()=>g.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.Fi=s,this.Bi=i}static Li(t,e){let s=_(),i=_();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new zi(t,e.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,s,i){return this.Ki(t,e).next(r=>r||this.Gi(t,e,i,s)).next(r=>r||this.Qi(t,e))}Ki(t,e){if($r(e))return g.resolve(null);let s=St(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Zs(e,null,"F"),s=St(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=_(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const c=this.ji(e,a);return this.zi(e,c,o,u.readTime)?this.Ki(t,Zs(e,null,"F")):this.Wi(t,c,e,u)}))})))}Gi(t,e,s,i){return $r(e)||i.isEqual(T.min())?this.Qi(t,e):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(e,r);return this.zi(e,o,s,i)?this.Qi(t,e):(Rr()<=k.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ti(e)),this.Wi(t,o,e,ml(i,-1)))})}ji(t,e){let s=new J(Ua(t));return e.forEach((i,r)=>{rs(t,r)&&(s=s.add(r))}),s}zi(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,e){return Rr()<=k.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ti(e)),this.Ui.getDocumentsMatchingQuery(t,e,_t.min())}Wi(t,e,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e,s,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new P(b),this.Yi=new fe(r=>Li(r),Pi),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nd(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function Ud(n,t,e,s){return new Vd(n,t,e,s)}async function ru(n,t){const e=D(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e.tr(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=_();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of r){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return e.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function ou(n){const t=D(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Bs.getLastRemoteSnapshotVersion(e))}function Bd(n,t){const e=D(n),s=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.Zi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((h,l)=>{const f=i.get(l);if(!f)return;a.push(e.Bs.removeMatchingKeys(r,h.removedDocuments,l).next(()=>e.Bs.addMatchingKeys(r,h.addedDocuments,l)));let m=f.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(l)!==null?m=m.withResumeToken(Z.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(l,m),function(S,N,C){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,m,h)&&a.push(e.Bs.updateTargetData(r,m))});let u=kt(),c=_();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push($d(r,o,t.documentUpdates).next(h=>{u=h.nr,c=h.sr})),!s.isEqual(T.min())){const h=e.Bs.getLastRemoteSnapshotVersion(r).next(l=>e.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(e.Ji=i,r))}function $d(n,t,e){let s=_(),i=_();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=kt();return e.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:i}})}function jd(n,t){const e=D(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Bs.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):e.Bs.allocateTargetId(s).next(o=>(i=new Ct(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(s.targetId,s),e.Yi.set(t,s.targetId)),s})}async function si(n,t,e){const s=D(n),i=s.Ji.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!en(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function Jr(n,t,e){const s=D(n);let i=T.min(),r=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const h=D(a),l=h.Yi.get(c);return l!==void 0?g.resolve(h.Ji.get(l)):h.Bs.getTargetData(u,c)}(s,o,St(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,e?i:T.min(),e?r:_())).next(a=>(qd(s,Ul(t),a),{documents:a,ir:r})))}function qd(n,t,e){let s=n.Xi.get(t)||T.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Xi.set(t,s)}class Zr{constructor(){this.activeTargetIds=Hl()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zd{constructor(){this.Hr=new Zr,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,s){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Zr,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn=null;function Ns(){return vn===null?vn=268435456+Math.round(2147483648*Math.random()):vn++,"0x"+vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class Qd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,s,i,r){const o=Ns(),a=this.To(t,e);y("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,i,r),this.Ao(t,a,u,s).then(c=>(y("RestConnection",`Received RPC '${t}' ${o}: `,c),c),c=>{throw ne("RestConnection",`RPC '${t}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(t,e,s,i,r,o){return this.Io(t,e,s,i,r)}Eo(t,e,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+le,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,e){const s=Kd[t];return`${this.mo}/v1/${e}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,s,i){const r=Ns();return new Promise((o,a)=>{const u=new rl;u.setWithCredentials(!0),u.listenOnce(nl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ds.NO_ERROR:const h=u.getResponseJson();y(Q,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(h)),o(h);break;case Ds.TIMEOUT:y(Q,`RPC '${t}' ${r} timed out`),a(new v(d.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const l=u.getStatus();if(y(Q,`RPC '${t}' ${r} failed with status:`,l,"response text:",u.getResponseText()),l>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const S=function(N){const C=N.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(C)>=0?C:d.UNKNOWN}(m.status);a(new v(S,m.message))}else a(new v(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new v(d.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(Q,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(i);y(Q,`RPC '${t}' ${r} sending request:`,i),u.send(e,"POST",c,s,15)})}Ro(t,e,s){const i=Ns(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=tl(),a=el(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new il({})),this.Eo(u.initMessageHeaders,e,s),u.encodeInitMessageHeaders=!0;const h=r.join("");y(Q,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let f=!1,m=!1;const S=new Gd({ro:C=>{m?y(Q,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(f||(y(Q,`Opening RPC '${t}' stream ${i} transport.`),l.open(),f=!0),y(Q,`RPC '${t}' stream ${i} sending:`,C),l.send(C))},oo:()=>l.close()}),N=(C,ot,nt)=>{C.listen(ot,st=>{try{nt(st)}catch(dt){setTimeout(()=>{throw dt},0)}})};return N(l,gn.EventType.OPEN,()=>{m||y(Q,`RPC '${t}' stream ${i} transport opened.`)}),N(l,gn.EventType.CLOSE,()=>{m||(m=!0,y(Q,`RPC '${t}' stream ${i} transport closed`),S.wo())}),N(l,gn.EventType.ERROR,C=>{m||(m=!0,ne(Q,`RPC '${t}' stream ${i} transport errored:`,C),S.wo(new v(d.UNAVAILABLE,"The operation could not be completed")))}),N(l,gn.EventType.MESSAGE,C=>{var ot;if(!m){const nt=C.data[0];M(!!nt);const st=nt,dt=st.error||((ot=st[0])===null||ot===void 0?void 0:ot.error);if(dt){y(Q,`RPC '${t}' stream ${i} received error:`,dt);const cn=dt.status;let gs=function(Nu){const ur=F[Nu];if(ur!==void 0)return Ya(ur)}(cn),ar=dt.message;gs===void 0&&(gs=d.INTERNAL,ar="Unknown error status: "+cn+" with message "+dt.message),m=!0,S.wo(new v(gs,ar)),l.close()}else y(Q,`RPC '${t}' stream ${i} received:`,nt),S._o(nt)}}),N(a,sl.STAT_EVENT,C=>{C.stat===br.PROXY?y(Q,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===br.NOPROXY&&y(Q,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){return new ud(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,s,i,r,o,a,u){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Hi(t,e)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():e&&e.code===d.RESOURCE_EXHAUSTED?(It(e.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===e&&this.Zo(s,i)},s=>{t(()=>{const i=new v(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,e){const s=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yd extends Wd{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=dd(this.serializer,t),s=function(i){if(!("targetChange"in i))return T.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?T.min():r.readTime?wt(r.readTime):T.min()}(t);return this.listener.nu(e,s)}su(t){const e={};e.database=Vn(this.serializer),e.addTarget=function(i,r){let o;const a=r.target;if(o=Js(a)?{documents:gd(i,a)}:{query:pd(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Za(i,r.resumeToken);const u=ei(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(T.min())>0){o.readTime=Pn(i,r.snapshotVersion.toTimestamp());const u=ei(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=yd(this.serializer,t);s&&(e.labels=s),this.Wo(e)}iu(t){const e={};e.database=Vn(this.serializer),e.removeTarget=t,this.Wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,e,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(d.UNKNOWN,i.toString())})}vo(t,e,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,e,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new v(d.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Jd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(It(e),this.mu=!1):y("OnlineStateTracker",e)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{an(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=D(a);u.vu.add(4),await on(u),u.bu.set("Unknown"),u.vu.delete(4),await hs(u)}(this))})}),this.bu=new Jd(s,i)}}async function hs(n){if(an(n))for(const t of n.Ru)await t(!0)}async function on(n){for(const t of n.Ru)await t(!1)}function au(n,t){const e=D(n);e.Au.has(t.targetId)||(e.Au.set(t.targetId,t),Qi(e)?Gi(e):ge(e).Ko()&&Ki(e,t))}function uu(n,t){const e=D(n),s=ge(e);e.Au.delete(t),s.Ko()&&cu(e,t),e.Au.size===0&&(s.Ko()?s.jo():an(e)&&e.bu.set("Unknown"))}function Ki(n,t){if(n.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ge(n).su(t)}function cu(n,t){n.Vu.qt(t),ge(n).iu(t)}function Gi(n){n.Vu=new id({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),le:t=>n.Au.get(t)||null,ue:()=>n.datastore.serializer.databaseId}),ge(n).start(),n.bu.gu()}function Qi(n){return an(n)&&!ge(n).Uo()&&n.Au.size>0}function an(n){return D(n).vu.size===0}function hu(n){n.Vu=void 0}async function tf(n){n.Au.forEach((t,e)=>{Ki(n,t)})}async function ef(n,t){hu(n),Qi(n)?(n.bu.Iu(t),Gi(n)):n.bu.set("Unknown")}async function nf(n,t,e){if(n.bu.set("Online"),t instanceof Ja&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(n,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await eo(n,s)}else if(t instanceof En?n.Vu.Ht(t):t instanceof Xa?n.Vu.ne(t):n.Vu.Xt(t),!e.isEqual(T.min()))try{const s=await ou(n.localStore);e.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(u);c&&i.Au.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(Z.EMPTY_BYTE_STRING,c.snapshotVersion)),cu(i,a);const h=new Ct(c.target,a,u,c.sequenceNumber);Ki(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(n,e)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await eo(n,s)}}async function eo(n,t,e){if(!en(t))throw t;n.vu.add(1),await on(n),n.bu.set("Offline"),e||(e=()=>ou(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await e(),n.vu.delete(1),await hs(n)})}async function no(n,t){const e=D(n);e.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=an(e);e.vu.add(3),await on(e),s&&e.bu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.vu.delete(3),await hs(e)}async function sf(n,t){const e=D(n);t?(e.vu.delete(2),await hs(e)):t||(e.vu.add(2),await on(e),e.bu.set("Unknown"))}function ge(n){return n.Su||(n.Su=function(t,e,s){const i=D(t);return i.fu(),new Yd(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{uo:tf.bind(null,n),ao:ef.bind(null,n),nu:nf.bind(null,n)}),n.Ru.push(async t=>{t?(n.Su.Qo(),Qi(n)?Gi(n):n.bu.set("Unknown")):(await n.Su.stop(),hu(n))})),n.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new Wi(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(n,t){if(It("AsyncQueue",`${t}: ${n}`),en(n))return new v(d.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.comparator=t?(e,s)=>t(e,s)||w.comparator(e.key,s.key):(e,s)=>w.comparator(e.key,s.key),this.keyedMap=Ee(),this.sortedSet=new P(this.comparator)}static emptySet(t){return new te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new te;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.Cu=new P(w.comparator)}track(t){const e=t.doc.key,s=this.Cu.get(e);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(e,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(e):t.type===1&&s.type===2?this.Cu=this.Cu.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):E():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal((e,s)=>{t.push(s)}),t}}class ae{constructor(t,e,s,i,r,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ae(t,e,te.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&is(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.Nu=void 0,this.listeners=[]}}class of{constructor(){this.queries=new fe(t=>Va(t),is),this.onlineState="Unknown",this.ku=new Set}}async function af(n,t){const e=D(n),s=t.query;let i=!1,r=e.queries.get(s);if(r||(i=!0,r=new rf),i)try{r.Nu=await e.onListen(s)}catch(o){const a=lu(o,`Initialization of query '${ti(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.listeners.push(t),t.Mu(e.onlineState),r.Nu&&t.$u(r.Nu)&&Yi(e)}async function uf(n,t){const e=D(n),s=t.query;let i=!1;const r=e.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return e.queries.delete(s),e.onUnlisten(s)}function cf(n,t){const e=D(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&Yi(e)}function hf(n,t,e){const s=D(n),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(e);s.queries.delete(t)}function Yi(n){n.ku.forEach(t=>{t.next()})}class lf{constructor(t,e,s){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new ae(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const s=e!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Uu(t){t=ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t){this.key=t}}class fu{constructor(t){this.key=t}}class df{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=_(),this.mutatedKeys=_(),this.tc=Ua(t),this.ec=new te(this.tc)}get nc(){return this.Yu}sc(t,e){const s=e?e.ic:new so,i=e?e.ec:this.ec;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const f=i.get(h),m=rs(this.query,l)?l:null,S=!!f&&this.mutatedKeys.has(f.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;f&&m?f.data.isEqual(m.data)?S!==N&&(s.track({type:3,doc:m}),C=!0):this.rc(f,m)||(s.track({type:2,doc:m}),C=!0,(u&&this.tc(m,u)>0||c&&this.tc(m,c)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),C=!0):f&&!m&&(s.track({type:1,doc:f}),C=!0,(u||c)&&(a=!0)),C&&(m?(o=o.add(m),r=N?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((c,h)=>function(l,f){const m=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return m(l)-m(f)}(c.type,h.type)||this.tc(c.doc,h.doc)),this.oc(s);const o=e?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,r.length!==0||u?{snapshot:new ae(this.query,t.ec,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new so,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=_(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const e=[];return t.forEach(s=>{this.Zu.has(s)||e.push(new fu(s))}),this.Zu.forEach(s=>{t.has(s)||e.push(new du(s))}),e}hc(t){this.Yu=t.ir,this.Zu=_();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return ae.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class ff{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class gf{constructor(t){this.key=t,this.fc=!1}}class pf{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new fe(a=>Va(a),is),this._c=new Map,this.mc=new Set,this.gc=new P(w.comparator),this.yc=new Map,this.Ic=new ji,this.Tc={},this.Ec=new Map,this.Ac=oe.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function mf(n,t){const e=Sf(n);let s,i;const r=e.wc.get(t);if(r)s=r.targetId,e.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await jd(e.localStore,St(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await yf(e,t,s,a==="current",o.resumeToken),e.isPrimaryClient&&au(e.remoteStore,o)}return i}async function yf(n,t,e,s,i){n.Rc=(l,f,m)=>async function(S,N,C,ot){let nt=N.view.sc(C);nt.zi&&(nt=await Jr(S.localStore,N.query,!1).then(({documents:cn})=>N.view.sc(cn,nt)));const st=ot&&ot.targetChanges.get(N.targetId),dt=N.view.applyChanges(nt,S.isPrimaryClient,st);return ro(S,N.targetId,dt.cc),dt.snapshot}(n,l,f,m);const r=await Jr(n.localStore,t,!0),o=new df(t,r.ir),a=o.sc(r.documents),u=rn.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);ro(n,e,c.cc);const h=new ff(t,e,o);return n.wc.set(t,h),n._c.has(e)?n._c.get(e).push(t):n._c.set(e,[t]),c.snapshot}async function vf(n,t){const e=D(n),s=e.wc.get(t),i=e._c.get(s.targetId);if(i.length>1)return e._c.set(s.targetId,i.filter(r=>!is(r,t))),void e.wc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await si(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),uu(e.remoteStore,s.targetId),ii(e,s.targetId)}).catch(bi)):(ii(e,s.targetId),await si(e.localStore,s.targetId,!0))}async function gu(n,t){const e=D(n);try{const s=await Bd(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.yc.get(r);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?M(o.fc):i.removedDocuments.size>0&&(M(o.fc),o.fc=!1))}),await mu(e,s,t)}catch(s){await bi(s)}}function io(n,t,e){const s=D(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let u=!1;a.queries.forEach((c,h)=>{for(const l of h.listeners)l.Mu(o)&&(u=!0)}),u&&Yi(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function wf(n,t,e){const s=D(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new P(w.comparator);o=o.insert(r,$.newNoDocument(r,T.min()));const a=_().add(r),u=new us(T.min(),new Map,new P(b),o,a);await gu(s,u),s.gc=s.gc.remove(r),s.yc.delete(t),Xi(s)}else await si(s.localStore,t,!1).then(()=>ii(s,t,e)).catch(bi)}function ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n._c.get(t))n.wc.delete(s),e&&n.dc.Pc(s,e);n._c.delete(t),n.isPrimaryClient&&n.Ic.Is(t).forEach(s=>{n.Ic.containsKey(s)||pu(n,s)})}function pu(n,t){n.mc.delete(t.path.canonicalString());const e=n.gc.get(t);e!==null&&(uu(n.remoteStore,e),n.gc=n.gc.remove(t),n.yc.delete(e),Xi(n))}function ro(n,t,e){for(const s of e)s instanceof du?(n.Ic.addReference(s.key,t),Ef(n,s)):s instanceof fu?(y("SyncEngine","Document no longer in limbo: "+s.key),n.Ic.removeReference(s.key,t),n.Ic.containsKey(s.key)||pu(n,s.key)):E()}function Ef(n,t){const e=t.key,s=e.path.canonicalString();n.gc.get(e)||n.mc.has(s)||(y("SyncEngine","New document in limbo: "+e),n.mc.add(s),Xi(n))}function Xi(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const t=n.mc.values().next().value;n.mc.delete(t);const e=new w(O.fromString(t)),s=n.Ac.next();n.yc.set(s,new gf(e)),n.gc=n.gc.insert(e,s),au(n.remoteStore,new Ct(St(Fi(e.path)),s,"TargetPurposeLimboResolution",xi.ct))}}async function mu(n,t,e){const s=D(n),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,e).then(c=>{if((c||e)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=zi.Li(u.targetId,c);r.push(h)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,u){const c=D(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,l=>g.forEach(l.Fi,f=>c.persistence.referenceDelegate.addReference(h,l.targetId,f)).next(()=>g.forEach(l.Bi,f=>c.persistence.referenceDelegate.removeReference(h,l.targetId,f)))))}catch(h){if(!en(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const l=h.targetId;if(!h.fromCache){const f=c.Ji.get(l),m=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(m);c.Ji=c.Ji.insert(l,S)}}}(s.localStore,r))}async function Tf(n,t){const e=D(n);if(!e.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await ru(e.localStore,t);e.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new v(d.CANCELLED,r))})}),i.Ec.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await mu(e,s.er)}}function If(n,t){const e=D(n),s=e.yc.get(t);if(s&&s.fc)return _().add(s.key);{let i=_();const r=e._c.get(t);if(!r)return i;for(const o of r){const a=e.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Sf(n){const t=D(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=If.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wf.bind(null,t),t.dc.nu=cf.bind(null,t.eventManager),t.dc.Pc=hf.bind(null,t.eventManager),t}class oo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ud(this.persistence,new Fd,t.initialUser,this.serializer)}createPersistence(t){return new Ld(qi.zs,this.serializer)}createSharedClientState(t){return new zd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>io(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tf.bind(null,this.syncEngine),await sf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new of}createDatastore(t){const e=cs(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Qd(i));var i;return function(r,o,a,u){return new Xd(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return e=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>io(this.syncEngine,a,0),o=to.D()?new to:new Hd,new Zd(e,s,i,r,o);var e,s,i,r,o}createSyncEngine(t,e){return function(s,i,r,o,a,u,c){const h=new pf(s,i,r,o,a,u);return c&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=D(t);y("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await on(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):It("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new v(d.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(s,i){const r=D(s),o=Vn(r.serializer)+"/documents",a={documents:i.map(l=>Fn(r.serializer,l))},u=await r.vo("BatchGetDocuments",o,a,i.length),c=new Map;u.forEach(l=>{const f=ld(r.serializer,l);c.set(f.key.toString(),f)});const h=[];return i.forEach(l=>{const f=c.get(l.toString());M(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(s=>this.recordVersion(s)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(t.toString())}delete(t){this.write(new Vi(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,s)=>{const i=w.fromPath(s);this.mutations.push(new Wa(i,this.precondition(i)))}),await async function(e,s){const i=D(e),r=Vn(i.serializer)+"/documents",o={writes:s.map(a=>fd(i.serializer,a))};await i.Io("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw E();e=T.min()}const s=this.readVersions.get(t.key.toString());if(s){if(!e.isEqual(s))throw new v(d.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(T.min())?ut.exists(!1):ut.updateTime(e):ut.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(T.min()))throw new v(d.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ut.updateTime(e)}return ut.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,e,s,i,r){this.asyncQueue=t,this.datastore=e,this.options=s,this.updateFunction=i,this.deferred=r,this.Bc=s.maxAttempts,this.qo=new Hi(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const t=new Df(this.datastore),e=this.qc(t);e&&e.then(s=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Uc(i)}))}).catch(s=>{this.Uc(s)})})}qc(t){try{const e=this.updateFunction(t);return!nn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(t){this.Bc>0&&this.Kc(t)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(t)}Kc(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!ed(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=ka.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=lu(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function bs(n,t){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ru(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ao(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bf(n);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await t.initialize(e,s),n.setCredentialChangeListener(i=>no(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>no(t.remoteStore,r)),n._onlineComponents=t}function kf(n){return n.name==="FirebaseError"?n.code===d.FAILED_PRECONDITION||n.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function bf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await bs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!kf(e))throw e;ne("Error using user provided cache. Falling back to memory cache: "+e),await bs(n,new oo)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await bs(n,new oo);return n._offlineComponents}async function yu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ao(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ao(n,new Cf))),n._onlineComponents}function xf(n){return yu(n).then(t=>t.datastore)}async function uo(n){const t=await yu(n),e=t.eventManager;return e.onListen=mf.bind(null,t.syncEngine),e.onUnlisten=vf.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n,t,e){if(!e)throw new v(d.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Mf(n,t,e,s){if(t===!0&&s===!0)throw new v(d.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ho(n){if(!w.isDocumentKey(n))throw new v(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":E()}function Ne(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new v(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ji(n);throw new v(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new v(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new v(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new v(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new v(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,e.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,s}}class Zi{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lo(t),t.credentials!==void 0&&(this._authCredentials=function(e){if(!e)return new al;switch(e.type){case"firstParty":return new ll(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new v(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=co.get(t);e&&(y("ComponentProvider","Removing Datastore"),co.delete(t),e.terminate())}(this),Promise.resolve()}}function Of(n,t,e,s={}){var i;const r=(n=Ne(n,Zi))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&ne("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,u;if(typeof s.mockUserToken=="string")a=s.mockUserToken,u=W.MOCK_USER;else{a=Bu(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new v(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new W(c)}n._authCredentials=new ul(new Na(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}}class ls{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ls(this.firestore,t,this._query)}}class He extends ls{constructor(t,e,s){super(t,e,Fi(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new w(t))}withConverter(t){return new He(this.firestore,t,this._path)}}function Lf(n,t,...e){if(n=Et(n),arguments.length===1&&(t=ka.A()),Rf("doc","path",t),n instanceof Zi){const s=O.fromString(t,...e);return ho(s),new ht(n,null,new w(s))}{if(!(n instanceof ht||n instanceof He))throw new v(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(O.fromString(t,...e));return ho(s),new ht(n.firestore,n instanceof He?n.converter:null,new w(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Hi(this,"async_queue_retry"),this.Xc=()=>{const e=ks();e&&y("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=ks();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const e=new Ft;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!en(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const e=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw It("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=e,e}enqueueAfterDelay(t,e,s){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const i=Wi.createAndSchedule(this,t,e,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&E()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.zc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}function fo(n){return function(t,e){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Un extends Zi{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Pf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eu(this),this._firestoreClient.terminate()}}function Ff(n,t){const e=typeof n=="object"?n:zc(),s=typeof n=="string"?n:t||"(default)",i=Bc(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Vu("firestore");r&&Of(i,...r)}return i}function wu(n){return n._firestoreClient||Eu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Eu(n){var t,e,s;const i=n._freezeSettings(),r=function(o,a,u,c){return new Sl(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,vu(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Nf(n._authCredentials,n._appCheckCredentials,n._queue,r),!((e=i.cache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new jt(Z.fromBase64String(t))}catch(e){throw new v(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new jt(Z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new v(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new v(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new v(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=/^__.*__$/;class Uf{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new zt(t,this.data,this.fieldMask,e,this.fieldTransforms):new sn(t,this.data,e,this.fieldTransforms)}}class Tu{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return new zt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Iu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class nr{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new nr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Bn(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(Iu(this.ca)&&Vf.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Bf{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||cs(t)}ya(t,e,s,i=!1){return new nr({ca:t,methodName:e,ga:s,path:tt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $f(n){const t=n._freezeSettings(),e=cs(n._databaseId);return new Bf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jf(n,t,e,s,i,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,t,e,i);sr("Data must be an object, but it was:",o,s);const a=Su(s,o);let u,c;if(r.merge)u=new ct(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const l of r.mergeFields){const f=ri(t,l,e);if(!o.contains(f))throw new v(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Au(h,f)||h.push(f)}u=new ct(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new Uf(new it(a),u,c)}class un extends tr{_toFieldTransform(t){if(t.ca!==2)throw t.ca===1?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof un}}function qf(n,t,e,s){const i=n.ya(1,t,e);sr("Data must be an object, but it was:",i,s);const r=[],o=it.empty();de(s,(u,c)=>{const h=ir(t,u,e);c=Et(c);const l=i.da(h);if(c instanceof un)r.push(h);else{const f=fs(c,l);f!=null&&(r.push(h),o.set(h,f))}});const a=new ct(r);return new Tu(o,a,i.fieldTransforms)}function zf(n,t,e,s,i,r){const o=n.ya(1,t,e),a=[ri(t,s,e)],u=[i];if(r.length%2!=0)throw new v(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ri(t,r[f])),u.push(r[f+1]);const c=[],h=it.empty();for(let f=a.length-1;f>=0;--f)if(!Au(c,a[f])){const m=a[f];let S=u[f];S=Et(S);const N=o.da(m);if(S instanceof un)c.push(m);else{const C=fs(S,N);C!=null&&(c.push(m),h.set(m,C))}}const l=new ct(c);return new Tu(h,l,o.fieldTransforms)}function fs(n,t){if(Cu(n=Et(n)))return sr("Unsupported field value:",t,n),Su(n,t);if(n instanceof tr)return function(e,s){if(!Iu(s.ca))throw s._a(`${e._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${e._methodName}() is not currently supported inside arrays`);const i=e._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(e,s){const i=[];let r=0;for(const o of e){let a=fs(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,t)}return function(e,s){if((e=Et(e))===null)return{nullValue:"NULL_VALUE"};if(typeof e=="number")return Kl(s.serializer,e);if(typeof e=="boolean")return{booleanValue:e};if(typeof e=="string")return{stringValue:e};if(e instanceof Date){const i=j.fromDate(e);return{timestampValue:Pn(s.serializer,i)}}if(e instanceof j){const i=new j(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Pn(s.serializer,i)}}if(e instanceof er)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof jt)return{bytesValue:Za(s.serializer,e._byteString)};if(e instanceof ht){const i=s.databaseId,r=e.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$i(e.firestore._databaseId||s.databaseId,e._key.path)}}throw s._a(`Unsupported field value: ${Ji(e)}`)}(n,t)}function Su(n,t){const e={};return ba(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(n,(s,i)=>{const r=fs(i,t.ha(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function Cu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof er||n instanceof jt||n instanceof ht||n instanceof tr)}function sr(n,t,e){if(!Cu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const s=Ji(e);throw s==="an object"?t._a(n+" a custom object"):t._a(n+" "+s)}}function ri(n,t,e){if((t=Et(t))instanceof ds)return t._internalPath;if(typeof t=="string")return ir(n,t);throw Bn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hf=new RegExp("[~\\*/\\[\\]]");function ir(n,t,e){if(t.search(Hf)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ds(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bn(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new v(d.INVALID_ARGUMENT,a+n+u)}function Au(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Du("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Kf extends $n{data(){return super.data()}}function Du(n,t){return typeof t=="string"?ir(n,t):t instanceof ds?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new v(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _u{convertValue(t,e="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw E()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return de(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertGeoPoint(t){return new er(V(t.latitude),V(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=Mi(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Be(t));default:return null}}convertTimestamp(t){const e=Nt(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=O.fromString(t);M(iu(s));const i=new $e(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(e)||It(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}class Wf extends _u{constructor(t){super(),this.firestore=t}convertBytes(t){return new jt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rr extends $n{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Tn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Du("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Tn extends rr{data(t={}){return super.data(t)}}class Yf{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Wt(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Tn(this._firestore,this._userDataWriter,s.key,s,new Wt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new v(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Tn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Wt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Tn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Wt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Xf(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}class or extends _u{constructor(t){super(),this.firestore=t}convertBytes(t){return new jt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}function og(n,...t){var e,s,i;n=Et(n);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||fo(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(fo(t[o])){const l=t[o];t[o]=(e=l.next)===null||e===void 0?void 0:e.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(n instanceof ht)c=Ne(n.firestore,Un),h=Fi(n._key.path),u={next:l=>{t[o]&&t[o](Jf(c,n,l))},error:t[o+1],complete:t[o+2]};else{const l=Ne(n,ls);c=Ne(l.firestore,Un),h=l._query;const f=new or(c);u={next:m=>{t[o]&&t[o](new Yf(c,f,l,m))},error:t[o+1],complete:t[o+2]},Gf(n._query)}return function(l,f,m,S){const N=new Af(S),C=new lf(f,N,m);return l.asyncQueue.enqueueAndForget(async()=>af(await uo(l),C)),()=>{N.Dc(),l.asyncQueue.enqueueAndForget(async()=>uf(await uo(l),C))}}(wu(c),h,a,u)}function Jf(n,t,e){const s=e.docs.get(t._key),i=new or(n);return new rr(n,i,t._key,s,new Wt(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf={maxAttempts:5};function ye(n,t){if((n=Et(n)).firestore!==t)throw new v(d.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=$f(t)}get(t){const e=ye(t,this._firestore),s=new Wf(this._firestore);return this._transaction.lookup([e._key]).then(i=>{if(!i||i.length!==1)return E();const r=i[0];if(r.isFoundDocument())return new $n(this._firestore,s,r.key,r,e.converter);if(r.isNoDocument())return new $n(this._firestore,s,e._key,null,e.converter);throw E()})}set(t,e,s){const i=ye(t,this._firestore),r=Qf(i.converter,e,s),o=jf(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(t,e,s,...i){const r=ye(t,this._firestore);let o;return o=typeof(e=Et(e))=="string"||e instanceof ds?zf(this._dataReader,"Transaction.update",r._key,e,s,i):qf(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,o),this}delete(t){const e=ye(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ye(t,this._firestore),s=new or(this._firestore);return super.get(t).then(i=>new rr(this._firestore,s,e._key,i._document,new Wt(!1,!1),e.converter))}}function eg(n,t,e){n=Ne(n,Un);const s=Object.assign(Object.assign({},Zf),e);return function(i){if(i.maxAttempts<1)throw new v(d.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new Ft;return i.asyncQueue.enqueueAndForget(async()=>{const u=await xf(i);new _f(i.asyncQueue,u,o,r,a).run()}),a.promise}(wu(n),i=>t(new tg(n,i)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(){return new un("deleteField")}(function(n,t=!0){(function(e){le=e})(qc),Cn(new ke("firestore",(e,{instanceIdentifier:s,options:i})=>{const r=e.getProvider("app").getImmediate(),o=new Un(new cl(e.getProvider("auth-internal")),new fl(e.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new v(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Yt(xr,"3.12.2",n),Yt(xr,"3.12.2","esm2017")})();var sg="firebase",ig="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(sg,ig,"app");const rg={apiKey:"AIzaSyCwGMjrdMDxItBfYJkwuzIUuekqY1QAc_k",authDomain:"theocratic-software.firebaseapp.com",projectId:"theocratic-software",storageBucket:"theocratic-software.appspot.com",messagingSenderId:"441138730087",appId:"1:441138730087:web:9877f590cadb16467af0c2",measurementId:"G-KHGDKVZKNR"};So(rg);const go=Ff(),ag=async n=>{const t=Lf(go,"notAtHomes","MaitlandCongregation");try{const e=await eg(go,async s=>{s.update(t,{[n.key]:ng()})});return console.log(`<<< NOT AT HOME DELETED >>>
Address Details:`,n),e}catch(e){return console.error(e.message),e}};export{og as I,eg as U,ag as d,go as f,Lf as g};
