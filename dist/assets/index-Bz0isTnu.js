(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const mg=()=>{};var su={};/**
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
 */const md=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},gg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,_=(i&3)<<4|c>>4;let A=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(A=64)),r.push(e[f],e[_],e[A],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(md(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):gg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const _=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||_==null)throw new _g;const A=i<<2|c>>4;if(r.push(A),d!==64){const b=c<<4&240|d>>2;if(r.push(b),_!==64){const O=d<<6&192|_;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(n){const t=md(n);return gd.encodeByteArray(t,!0)},Vi=function(n){return yg(n).replace(/\./g,"")},_d=function(n){try{return gd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Eg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vg=()=>Eg().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof su>"u")return;const n=su.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&_d(n[1]);return t&&JSON.parse(t)},no=()=>{try{return mg()||vg()||Tg()||Ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yd=n=>no()?.emulatorHosts?.[n],wg=n=>{const t=yd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ed=()=>no()?.config,vd=n=>no()?.[`_${n}`];/**
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
 */class Ig{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Td(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vi(JSON.stringify(e)),Vi(JSON.stringify(a)),""].join(".")}const us={};function Sg(){const n={prod:[],emulator:[]};for(const t of Object.keys(us))us[t]?n.emulator.push(t):n.prod.push(t);return n}function Cg(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let iu=!1;function Ad(n,t){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||us[n]===t||us[n]||iu)return;us[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",i=Sg().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function c(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function u(A,b){A.setAttribute("width","24"),A.setAttribute("id",b),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{iu=!0,a()},A}function f(A,b){A.setAttribute("id",b),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function _(){const A=Cg(r),b=e("text"),O=document.getElementById(b)||document.createElement("span"),D=e("learnmore"),P=document.getElementById(D)||document.createElement("a"),M=e("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const $=A.element;c($),f(P,D);const B=d();u(x,M),$.append(x,O,P,B),document.body.appendChild($)}i?(O.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Pg(){const n=no()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ng(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kg(){const n=It();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vg(){return!Pg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lg(){try{return typeof indexedDB=="object"}catch{return!1}}function Mg(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const xg="FirebaseError";class Se extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=xg,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Fg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Se(s,c,r)}}function Fg(n,t){return n.replace(Ug,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ug=/\{\$([^}]+)}/g;function $g(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function wn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(ou(i)&&ou(a)){if(!wn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ou(n){return n!==null&&typeof n=="object"}/**
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
 */function Ds(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Bg(n,t){const e=new jg(n,t);return e.subscribe.bind(e)}class jg{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Hg(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=zo),s.error===void 0&&(s.error=zo),s.complete===void 0&&(s.complete=zo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function zo(){}/**
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
 */function Nt(n){return n&&n._delegate?n._delegate:n}class In{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class qg{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ig;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zg(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wg(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wg(n){return n===mn?void 0:n}function zg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qg(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Gg={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Qg=Q.INFO,Yg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Xg=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Yg[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ec{constructor(t){this.name=t,this._logLevel=Qg,this._logHandler=Xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const Jg=(n,t)=>t.some(e=>n instanceof e);let au,cu;function Zg(){return au||(au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t_(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wd=new WeakMap,va=new WeakMap,Id=new WeakMap,Ko=new WeakMap,nc=new WeakMap;function e_(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(qe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&wd.set(e,n)}).catch(()=>{}),nc.set(t,n),t}function n_(n){if(va.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});va.set(n,t)}let Ta={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return va.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Id.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function r_(n){Ta=n(Ta)}function s_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Go(this),t,...e);return Id.set(r,t.sort?t.sort():[t]),qe(r)}:t_().includes(n)?function(...t){return n.apply(Go(this),t),qe(wd.get(this))}:function(...t){return qe(n.apply(Go(this),t))}}function i_(n){return typeof n=="function"?s_(n):(n instanceof IDBTransaction&&n_(n),Jg(n,Zg())?new Proxy(n,Ta):n)}function qe(n){if(n instanceof IDBRequest)return e_(n);if(Ko.has(n))return Ko.get(n);const t=i_(n);return t!==n&&(Ko.set(n,t),nc.set(t,n)),t}const Go=n=>nc.get(n);function o_(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=qe(a);return r&&a.addEventListener("upgradeneeded",u=>{r(qe(a.result),u.oldVersion,u.newVersion,qe(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const a_=["get","getKey","getAll","getAllKeys","count"],c_=["put","add","delete","clear"],Qo=new Map;function lu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Qo.get(t))return Qo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=c_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||a_.includes(e)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&u.done]))[0]};return Qo.set(t,i),i}r_(n=>({...n,get:(t,e,r)=>lu(t,e)||n.get(t,e,r),has:(t,e)=>!!lu(t,e)||n.has(t,e)}));/**
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
 */class l_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(u_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function u_(n){return n.getComponent()?.type==="VERSION"}const Aa="@firebase/app",uu="0.14.4";/**
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
 */const ve=new ec("@firebase/app"),h_="@firebase/app-compat",d_="@firebase/analytics-compat",f_="@firebase/analytics",p_="@firebase/app-check-compat",m_="@firebase/app-check",g_="@firebase/auth",__="@firebase/auth-compat",y_="@firebase/database",E_="@firebase/data-connect",v_="@firebase/database-compat",T_="@firebase/functions",A_="@firebase/functions-compat",w_="@firebase/installations",I_="@firebase/installations-compat",b_="@firebase/messaging",S_="@firebase/messaging-compat",C_="@firebase/performance",R_="@firebase/performance-compat",P_="@firebase/remote-config",N_="@firebase/remote-config-compat",D_="@firebase/storage",O_="@firebase/storage-compat",k_="@firebase/firestore",V_="@firebase/ai",L_="@firebase/firestore-compat",M_="firebase",x_="12.4.0";/**
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
 */const wa="[DEFAULT]",F_={[Aa]:"fire-core",[h_]:"fire-core-compat",[f_]:"fire-analytics",[d_]:"fire-analytics-compat",[m_]:"fire-app-check",[p_]:"fire-app-check-compat",[g_]:"fire-auth",[__]:"fire-auth-compat",[y_]:"fire-rtdb",[E_]:"fire-data-connect",[v_]:"fire-rtdb-compat",[T_]:"fire-fn",[A_]:"fire-fn-compat",[w_]:"fire-iid",[I_]:"fire-iid-compat",[b_]:"fire-fcm",[S_]:"fire-fcm-compat",[C_]:"fire-perf",[R_]:"fire-perf-compat",[P_]:"fire-rc",[N_]:"fire-rc-compat",[D_]:"fire-gcs",[O_]:"fire-gcs-compat",[k_]:"fire-fst",[L_]:"fire-fst-compat",[V_]:"fire-vertex","fire-js":"fire-js",[M_]:"fire-js-all"};/**
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
 */const Li=new Map,U_=new Map,Ia=new Map;function hu(n,t){try{n.container.addComponent(t)}catch(e){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ur(n){const t=n.name;if(Ia.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Ia.set(t,n);for(const e of Li.values())hu(e,n);for(const e of U_.values())hu(e,n);return!0}function rc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ee(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new Ns("app","Firebase",$_);/**
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
 */class B_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=x_;function bd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:wa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(e||(e=Ed()),!e)throw We.create("no-options");const i=Li.get(s);if(i){if(wn(e,i.options)&&wn(r,i.config))return i;throw We.create("duplicate-app",{appName:s})}const a=new Kg(s);for(const u of Ia.values())a.addComponent(u);const c=new B_(e,r,a);return Li.set(s,c),c}function Sd(n=wa){const t=Li.get(n);if(!t&&n===wa&&Ed())return bd();if(!t)throw We.create("no-app",{appName:n});return t}function ze(n,t,e){let r=F_[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}ur(new In(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const j_="firebase-heartbeat-database",H_=1,ys="firebase-heartbeat-store";let Yo=null;function Cd(){return Yo||(Yo=o_(j_,H_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ys)}catch(e){console.warn(e)}}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),Yo}async function q_(n){try{const e=(await Cd()).transaction(ys),r=await e.objectStore(ys).get(Rd(n));return await e.done,r}catch(t){if(t instanceof Se)ve.warn(t.message);else{const e=We.create("idb-get",{originalErrorMessage:t?.message});ve.warn(e.message)}}}async function du(n,t){try{const r=(await Cd()).transaction(ys,"readwrite");await r.objectStore(ys).put(t,Rd(n)),await r.done}catch(e){if(e instanceof Se)ve.warn(e.message);else{const r=We.create("idb-set",{originalErrorMessage:e?.message});ve.warn(r.message)}}}function Rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const W_=1024,z_=30;class K_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Q_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>z_){const s=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){ve.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fu(),{heartbeatsToSend:e,unsentEntries:r}=G_(this._heartbeatsCache.heartbeats),s=Vi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ve.warn(t),""}}}function fu(){return new Date().toISOString().substring(0,10)}function G_(n,t=W_){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),pu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),pu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Q_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lg()?Mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await q_(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return du(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return du(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pu(n){return Vi(JSON.stringify({version:2,heartbeats:n})).length}function Y_(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function X_(n){ur(new In("platform-logger",t=>new l_(t),"PRIVATE")),ur(new In("heartbeat",t=>new K_(t),"PRIVATE")),ze(Aa,uu,n),ze(Aa,uu,"esm2020"),ze("fire-js","")}X_("");function Pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J_=Pd,Nd=new Ns("auth","Firebase",Pd());/**
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
 */const Mi=new ec("@firebase/auth");function Z_(n,...t){Mi.logLevel<=Q.WARN&&Mi.warn(`Auth (${Sr}): ${n}`,...t)}function Ei(n,...t){Mi.logLevel<=Q.ERROR&&Mi.error(`Auth (${Sr}): ${n}`,...t)}/**
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
 */function Te(n,...t){throw sc(n,...t)}function ne(n,...t){return sc(n,...t)}function Dd(n,t,e){const r={...J_(),[t]:e};return new Ns("auth","Firebase",r).create(t,{appName:n.name})}function En(n){return Dd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Nd.create(n,...t)}function q(n,t,...e){if(!n)throw sc(t,...e)}function me(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ei(t),new Error(t)}function Ae(n,t){n||me(t)}/**
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
 */function ba(){return typeof self<"u"&&self.location?.href||""}function ty(){return mu()==="http:"||mu()==="https:"}function mu(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ey(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ty()||Dg()||"connection"in navigator)?navigator.onLine:!0}function ny(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Os{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ae(e>t,"Short delay should be less than long delay!"),this.isMobile=Rg()||Og()}get(){return ey()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ic(n,t){Ae(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Od{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ry={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iy=new Os(3e4,6e4);function oc(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Cr(n,t,e,r,s={}){return kd(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ds({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:t,headers:u,...i};return Ng()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(d.credentials="include"),Od.fetch()(await Vd(n,n.config.apiHost,e,c),d)})}async function kd(n,t,e){n._canInitEmulator=!1;const r={...ry,...t};try{const s=new ay(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw oi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw oi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Dd(n,f,d);Te(n,f)}}catch(s){if(s instanceof Se)throw s;Te(n,"network-request-failed",{message:String(s)})}}async function oy(n,t,e,r,s={}){const i=await Cr(n,t,e,r,s);return"mfaPendingCredential"in i&&Te(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vd(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?ic(n.config,s):`${n.config.apiScheme}://${s}`;return sy.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class ay{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ne(this.auth,"network-request-failed")),iy.get())})}}function oi(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ne(n,t,r);return s.customData._tokenResponse=e,s}/**
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
 */async function cy(n,t){return Cr(n,"POST","/v1/accounts:delete",t)}async function xi(n,t){return Cr(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function hs(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ly(n,t=!1){const e=Nt(n),r=await e.getIdToken(t),s=ac(r);q(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:hs(Xo(s.auth_time)),issuedAtTime:hs(Xo(s.iat)),expirationTime:hs(Xo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Xo(n){return Number(n)*1e3}function ac(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const s=_d(e);return s?JSON.parse(s):(Ei("Failed to decode base64 JWT payload"),null)}catch(s){return Ei("Caught error parsing JWT payload as JSON",s?.toString()),null}}function gu(n){const t=ac(n);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Es(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Se&&uy(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class hy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sa{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fi(n){const t=n.auth,e=await n.getIdToken(),r=await Es(n,xi(t,{idToken:e}));q(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Ld(s.providerUserInfo):[],a=fy(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function dy(n){const t=Nt(n);await Fi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fy(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ld(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function py(n,t){const e=await kd(n,{},async()=>{const r=Ds({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Vd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(u.credentials="include"),Od.fetch()(a,u)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function my(n,t){return Cr(n,"POST","/v2/accounts:revokeToken",oc(n,t))}/**
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){q(t.length!==0,"internal-error");const e=gu(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await py(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new ir;return r&&(q(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
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
 */function xe(n,t){q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Gt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Es(this,this.stsTokenManager.getToken(this.auth,t));return q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ly(this,t)}reload(){return dy(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Gt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ee(this.auth.app))return Promise.reject(En(this.auth));const t=await this.getIdToken();return await Es(this,cy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,u=e._redirectEventId??void 0,d=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:_,emailVerified:A,isAnonymous:b,providerData:O,stsTokenManager:D}=e;q(_&&D,t,"internal-error");const P=ir.fromJSON(this.name,D);q(typeof _=="string",t,"internal-error"),xe(r,t.name),xe(s,t.name),q(typeof A=="boolean",t,"internal-error"),q(typeof b=="boolean",t,"internal-error"),xe(i,t.name),xe(a,t.name),xe(c,t.name),xe(u,t.name),xe(d,t.name),xe(f,t.name);const M=new Gt({uid:_,auth:t,email:s,emailVerified:A,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:f});return O&&Array.isArray(O)&&(M.providerData=O.map(x=>({...x}))),u&&(M._redirectEventId=u),M}static async _fromIdTokenResponse(t,e,r=!1){const s=new ir;s.updateFromServerResponse(e);const i=new Gt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Fi(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ld(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new ir;c.updateFromIdToken(r);const u=new Gt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Sa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
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
 */const _u=new Map;function ge(n){Ae(n instanceof Function,"Expected a class definition");let t=_u.get(n);return t?(Ae(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,_u.set(n,t),t)}/**
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
 */class Md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Md.type="NONE";const yu=Md;/**
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
 */function vi(n,t,e){return`firebase:${n}:${t}:${e}`}class or{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vi(this.userKey,s.apiKey,i),this.fullPersistenceKey=vi("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await xi(this.auth,{idToken:t}).catch(()=>{});return e?Gt._fromGetAccountInfoResponse(this.auth,e,t):null}return Gt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new or(ge(yu),t,r);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ge(yu);const a=vi(r,t.config.apiKey,t.name);let c=null;for(const d of e)try{const f=await d._get(a);if(f){let _;if(typeof f=="string"){const A=await xi(t,{idToken:f}).catch(()=>{});if(!A)break;_=await Gt._fromGetAccountInfoResponse(t,A,f)}else _=Gt._fromJSON(t,f);d!==i&&(c=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new or(i,t,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new or(i,t,r))}}/**
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
 */function Eu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($d(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jd(t))return"Blackberry";if(Hd(t))return"Webos";if(Fd(t))return"Safari";if((t.includes("chrome/")||Ud(t))&&!t.includes("edge/"))return"Chrome";if(Bd(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function xd(n=It()){return/firefox\//i.test(n)}function Fd(n=It()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ud(n=It()){return/crios\//i.test(n)}function $d(n=It()){return/iemobile/i.test(n)}function Bd(n=It()){return/android/i.test(n)}function jd(n=It()){return/blackberry/i.test(n)}function Hd(n=It()){return/webos/i.test(n)}function cc(n=It()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gy(n=It()){return cc(n)&&!!window.navigator?.standalone}function _y(){return kg()&&document.documentMode===10}function qd(n=It()){return cc(n)||Bd(n)||Hd(n)||jd(n)||/windows phone/i.test(n)||$d(n)}/**
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
 */function Wd(n,t=[]){let e;switch(n){case"Browser":e=Eu(It());break;case"Worker":e=`${Eu(It())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Sr}/${r}`}/**
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
 */class yy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const u=t(i);a(u)}catch(u){c(u)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Ey(n,t={}){return Cr(n,"GET","/v2/passwordPolicy",oc(n,t))}/**
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
 */const vy=6;class Ty{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??vy,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ay{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vu(this),this.idTokenSubscription=new vu(this),this.beforeStateQueue=new yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ge(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await or.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await xi(this,{idToken:t}),r=await Gt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(ee(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(t);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Fi(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ny()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ee(this.app))return Promise.reject(En(this));const e=t?Nt(t):null;return e&&q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ee(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ee(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ey(this),e=new Ty(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ns("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await my(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ge(t)||this._popupRedirectResolver;q(e,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[ge(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(ee(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Z_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function lc(n){return Nt(n)}class vu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Bg(e=>this.observer=e)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wy(n){uc=n}function Iy(n){return uc.loadJS(n)}function by(){return uc.gapiScript}function Sy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Cy(n,t){const e=rc(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(wn(i,t??{}))return s;Te(s,"already-initialized")}return e.initialize({options:t})}function Ry(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(ge);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function Py(n,t,e){const r=lc(n);q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=zd(t),{host:a,port:c}=Ny(t),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(wn(d,r.config.emulator)&&wn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,br(a)?(Td(`${i}//${a}${u}`),Ad("Auth",!0)):Dy()}function zd(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Ny(n){const t=zd(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Tu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Tu(a)}}}function Tu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Dy(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Kd{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return me("not implemented")}_getIdTokenResponse(t){return me("not implemented")}_linkToIdToken(t,e){return me("not implemented")}_getReauthenticationResolver(t){return me("not implemented")}}/**
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
 */async function ar(n,t){return oy(n,"POST","/v1/accounts:signInWithIdp",oc(n,t))}/**
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
 */const Oy="http://localhost";class bn extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Te("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new bn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return ar(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,ar(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ar(t,e)}buildRequest(){const t={requestUri:Oy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ds(e)}return t}}/**
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
 */class Gd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends Gd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ue extends ks{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ue.credentialFromTaggedObject(t)}static credentialFromError(t){return Ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ue.credential(t.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
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
 */class $e extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return bn._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return $e.credential(e,r)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
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
 */class Be extends ks{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Be.credentialFromTaggedObject(t)}static credentialFromError(t){return Be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Be.credential(t.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
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
 */class je extends ks{constructor(){super("twitter.com")}static credential(t,e){return bn._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return je.credentialFromTaggedObject(t)}static credentialFromError(t){return je.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return je.credential(e,r)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
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
 */class hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Gt._fromIdTokenResponse(t,r,s),a=Au(r);return new hr({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Au(r);return new hr({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Au(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ui extends Se{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ui.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ui(t,e,r,s)}}function Qd(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ui._fromErrorAndOperation(n,i,t,r):i})}async function ky(n,t,e=!1){const r=await Es(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return hr._forOperation(n,"link",r)}/**
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
 */async function Vy(n,t,e=!1){const{auth:r}=n;if(ee(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Es(n,Qd(r,s,t,n),e);q(i.idToken,r,"internal-error");const a=ac(i.idToken);q(a,r,"internal-error");const{sub:c}=a;return q(n.uid===c,r,"user-mismatch"),hr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Te(r,"user-mismatch"),i}}/**
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
 */async function Ly(n,t,e=!1){if(ee(n.app))return Promise.reject(En(n));const r="signIn",s=await Qd(n,r,t),i=await hr._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}function My(n,t,e,r){return Nt(n).onIdTokenChanged(t,e,r)}function xy(n,t,e){return Nt(n).beforeAuthStateChanged(t,e)}function Yd(n,t,e,r){return Nt(n).onAuthStateChanged(t,e,r)}function Fy(n){return Nt(n).signOut()}const $i="__sak";/**
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
 */class Xd{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Uy=1e3,$y=10;class Jd extends Xd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);_y()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,$y):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jd.type="LOCAL";const By=Jd;/**
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
 */class Zd extends Xd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Zd.type="SESSION";const tf=Zd;/**
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
 */function jy(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ro{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new ro(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!a?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(e.origin,i)),u=await jy(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];/**
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
 */function hc(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Hy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=hc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const A=_;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function re(){return window}function qy(n){re().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function ef(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Wy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zy(){return navigator?.serviceWorker?.controller||null}function Ky(){return ef()?self:null}/**
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
 */const nf="firebaseLocalStorageDb",Gy=1,Bi="firebaseLocalStorage",rf="fbase_key";class Vs{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function so(n,t){return n.transaction([Bi],t?"readwrite":"readonly").objectStore(Bi)}function Qy(){const n=indexedDB.deleteDatabase(nf);return new Vs(n).toPromise()}function Ca(){const n=indexedDB.open(nf,Gy);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bi,{keyPath:rf})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bi)?t(r):(r.close(),await Qy(),t(await Ca()))})})}async function wu(n,t,e){const r=so(n,!0).put({[rf]:t,value:e});return new Vs(r).toPromise()}async function Yy(n,t){const e=so(n,!1).get(t),r=await new Vs(e).toPromise();return r===void 0?null:r.value}function Iu(n,t){const e=so(n,!0).delete(t);return new Vs(e).toPromise()}const Xy=800,Jy=3;class sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Jy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(Ky()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Wy(),!this.activeServiceWorker)return;this.sender=new Hy(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ca();return await wu(t,$i,"1"),await Iu(t,$i),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>wu(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Yy(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Iu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=so(s,!1).getAll();return new Vs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sf.type="LOCAL";const Zy=sf;new Os(3e4,6e4);/**
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
 */function tE(n,t){return t?ge(t):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dc extends Kd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ar(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ar(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ar(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function eE(n){return Ly(n.auth,new dc(n),n.bypassAuthState)}function nE(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),Vy(e,new dc(n),n.bypassAuthState)}async function rE(n){const{auth:t,user:e}=n;return q(e,t,"internal-error"),ky(e,new dc(n),n.bypassAuthState)}/**
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
 */class of{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return eE;case"linkViaPopup":case"linkViaRedirect":return rE;case"reauthViaPopup":case"reauthViaRedirect":return nE;default:Te(this.auth,"internal-error")}}resolve(t){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sE=new Os(2e3,1e4);class nr extends of{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const t=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,sE.get())};t()}}nr.currentPopupAction=null;/**
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
 */const iE="pendingRedirect",Ti=new Map;class oE extends of{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ti.get(this.auth._key());if(!t){try{const r=await aE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ti.set(this.auth._key(),t)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aE(n,t){const e=uE(t),r=lE(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function cE(n,t){Ti.set(n._key(),t)}function lE(n){return ge(n._redirectPersistence)}function uE(n){return vi(iE,n.config.apiKey,n.name)}async function hE(n,t,e=!1){if(ee(n.app))return Promise.reject(En(n));const r=lc(n),s=tE(r,t),a=await new oE(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const dE=10*60*1e3;class fE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!pE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!af(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";e.onError(ne(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dE&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(t))}saveEventToCache(t){this.cachedEventUids.add(bu(t)),this.lastProcessedEventTime=Date.now()}}function bu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function af({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function pE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(n);default:return!1}}/**
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
 */async function mE(n,t={}){return Cr(n,"GET","/v1/projects",t)}/**
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
 */const gE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_E=/^https?/;async function yE(n){if(n.config.emulator)return;const{authorizedDomains:t}=await mE(n);for(const e of t)try{if(EE(e))return}catch{}Te(n,"unauthorized-domain")}function EE(n){const t=ba(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!_E.test(e))return!1;if(gE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vE=new Os(3e4,6e4);function Su(){const n=re().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function TE(n){return new Promise((t,e)=>{function r(){Su(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Su(),e(ne(n,"network-request-failed"))},timeout:vE.get()})}if(re().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(re().gapi?.load)r();else{const s=Sy("iframefcb");return re()[s]=()=>{gapi.load?r():e(ne(n,"network-request-failed"))},Iy(`${by()}?onload=${s}`).catch(i=>e(i))}}).catch(t=>{throw Ai=null,t})}let Ai=null;function AE(n){return Ai=Ai||TE(n),Ai}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const wE=new Os(5e3,15e3),IE="__/auth/iframe",bE="emulator/auth/iframe",SE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RE(n){const t=n.config;q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?ic(t,bE):`https://${n.config.authDomain}/${IE}`,r={apiKey:t.apiKey,appName:n.name,v:Sr},s=CE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${Ds(r).slice(1)}`}async function PE(n){const t=await AE(n),e=re().gapi;return q(e,n,"internal-error"),t.open({where:document.body,url:RE(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ne(n,"network-request-failed"),c=re().setTimeout(()=>{i(a)},wE.get());function u(){re().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,OE=600,kE="_blank",VE="http://localhost";class Cu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LE(n,t,e,r=DE,s=OE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...NE,width:r.toString(),height:s.toString(),top:i,left:a},d=It().toLowerCase();e&&(c=Ud(d)?kE:e),xd(d)&&(t=t||VE,u.scrollbars="yes");const f=Object.entries(u).reduce((A,[b,O])=>`${A}${b}=${O},`,"");if(gy(d)&&c!=="_self")return ME(t||"",c),new Cu(null);const _=window.open(t||"",c,f);q(_,n,"popup-blocked");try{_.focus()}catch{}return new Cu(_)}function ME(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const xE="__/auth/handler",FE="emulator/auth/handler",UE=encodeURIComponent("fac");async function Ru(n,t,e,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Sr,eventId:s};if(t instanceof Gd){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",$g(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(t instanceof ks){const f=t.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${UE}=${encodeURIComponent(u)}`:"";return`${$E(n)}?${Ds(c).slice(1)}${d}`}function $E({config:n}){return n.emulator?ic(n,FE):`https://${n.authDomain}/${xE}`}/**
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
 */const Jo="webStorageSupport";class BE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tf,this._completeRedirectFn=hE,this._overrideRedirectResult=cE}async _openPopup(t,e,r,s){Ae(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ru(t,e,r,ba(),s);return LE(t,i,hc())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Ru(t,e,r,ba(),s);return qy(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Ae(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await PE(t),r=new fE(t);return e.register("authEvent",s=>(q(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Jo,{type:Jo},s=>{const i=s?.[0]?.[Jo];i!==void 0&&e(!!i),Te(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=yE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return qd()||Fd()||cc()}}const jE=BE;var Pu="@firebase/auth",Nu="1.11.0";/**
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
 */class HE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WE(n){ur(new In("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wd(n)},d=new Ay(r,s,i,u);return Ry(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),ur(new In("auth-internal",t=>{const e=lc(t.getProvider("auth").getImmediate());return(r=>new HE(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Pu,Nu,qE(n)),ze(Pu,Nu,"esm2020")}/**
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
 */const zE=5*60,KE=vd("authIdTokenMaxAge")||zE;let Du=null;const GE=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>KE)return;const s=e?.token;Du!==s&&(Du=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QE(n=Sd()){const t=rc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Cy(n,{popupRedirectResolver:jE,persistence:[Zy,By,tf]}),r=vd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=GE(i.toString());xy(e,a,()=>a(e.currentUser)),My(e,c=>a(c))}}const s=yd("auth");return s&&Py(e,`http://${s}`),e}function YE(){return document.getElementsByTagName("head")?.[0]??document}wy({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ne("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",YE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WE("Browser");var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ke,cf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function y(){}y.prototype=m.prototype,v.F=m.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(T,E,w){for(var g=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)g[ot-2]=arguments[ot];return m.prototype[E].apply(T,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,y){y||(y=0);const T=Array(16);if(typeof m=="string")for(var E=0;E<16;++E)T[E]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(E=0;E<16;++E)T[E]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=v.g[0],y=v.g[1],E=v.g[2];let w=v.g[3],g;g=m+(w^y&(E^w))+T[0]+3614090360&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(E^m&(y^E))+T[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(y^w&(m^y))+T[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=y+(m^E&(w^m))+T[3]+3250441966&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(w^y&(E^w))+T[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(E^m&(y^E))+T[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(y^w&(m^y))+T[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=y+(m^E&(w^m))+T[7]+4249261313&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(w^y&(E^w))+T[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(E^m&(y^E))+T[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(y^w&(m^y))+T[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=y+(m^E&(w^m))+T[11]+2304563134&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(w^y&(E^w))+T[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=w+(E^m&(y^E))+T[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(y^w&(m^y))+T[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=y+(m^E&(w^m))+T[15]+1236535329&4294967295,y=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(y^E))+T[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^E&(m^y))+T[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(w^m))+T[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(E^w))+T[0]+3921069994&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(y^E))+T[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^E&(m^y))+T[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(w^m))+T[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(E^w))+T[4]+3889429448&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(y^E))+T[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^E&(m^y))+T[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(w^m))+T[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(E^w))+T[8]+1163531501&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(y^E))+T[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=w+(y^E&(m^y))+T[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^y&(w^m))+T[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=y+(w^m&(E^w))+T[12]+2368359562&4294967295,y=E+(g<<20&4294967295|g>>>12),g=m+(y^E^w)+T[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^E)+T[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^y)+T[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=y+(E^w^m)+T[14]+4259657740&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^w)+T[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^E)+T[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^y)+T[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=y+(E^w^m)+T[10]+3200236656&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^w)+T[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^E)+T[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^y)+T[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=y+(E^w^m)+T[6]+76029189&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(y^E^w)+T[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=w+(m^y^E)+T[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^y)+T[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=y+(E^w^m)+T[2]+3299628645&4294967295,y=E+(g<<23&4294967295|g>>>9),g=m+(E^(y|~w))+T[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~E))+T[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~y))+T[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=y+(w^(E|~m))+T[5]+4237533241&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~w))+T[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~E))+T[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~y))+T[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=y+(w^(E|~m))+T[1]+2240044497&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~w))+T[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~E))+T[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~y))+T[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=y+(w^(E|~m))+T[13]+1309151649&4294967295,y=E+(g<<21&4294967295|g>>>11),g=m+(E^(y|~w))+T[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=w+(y^(m|~E))+T[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~y))+T[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=y+(w^(E|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const y=m-this.blockSize,T=this.C;let E=this.h,w=0;for(;w<m;){if(E==0)for(;w<=y;)s(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(T[E++]=v.charCodeAt(w++),E==this.blockSize){s(this,T),E=0;break}}else for(;w<m;)if(T[E++]=v[w++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,y=0;y<4;++y)for(let T=0;T<32;T+=8)v[m++]=this.g[y]>>>T&255;return v};function i(v,m){var y=c;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=m(v)}function a(v,m){this.h=m;const y=[];let T=!0;for(let E=v.length-1;E>=0;E--){const w=v[E]|0;T&&w==m||(y[E]=w,T=!1)}this.g=y}var c={};function u(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return _;if(v<0)return P(d(-v));const m=[];let y=1;for(let T=0;v>=y;T++)m[T]=v/y|0,y*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return P(f(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let T=_;for(let w=0;w<v.length;w+=8){var E=Math.min(8,v.length-w);const g=parseInt(v.substring(w,w+E),m);E<8?(E=d(Math.pow(m,E)),T=T.j(E).add(d(g))):(T=T.j(y),T=T.add(d(g)))}return T}var _=u(0),A=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();let v=0,m=1;for(let y=0;y<this.g.length;y++){const T=this.i(y);v+=(T>=0?T:4294967296+T)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(D(this))return"-"+P(this).toString(v);const m=d(Math.pow(v,6));var y=this;let T="";for(;;){const E=B(y,m).g;y=M(y,E.j(m));let w=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=E,O(y))return w+T;for(;w.length<6;)w="0"+w;T=w+T}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=M(this,v),D(v)?-1:O(v)?0:1};function P(v){const m=v.g.length,y=[];for(let T=0;T<m;T++)y[T]=~v.g[T];return new a(y,~v.h).add(A)}n.abs=function(){return D(this)?P(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),y=[];let T=0;for(let E=0;E<=m;E++){let w=T+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=g>>>16,w&=65535,g&=65535,y[E]=g<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function M(v,m){return v.add(P(m))}n.j=function(v){if(O(this)||O(v))return _;if(D(this))return D(v)?P(this).j(P(v)):P(P(this).j(v));if(D(v))return P(this.j(P(v)));if(this.l(b)<0&&v.l(b)<0)return d(this.m()*v.m());const m=this.g.length+v.g.length,y=[];for(var T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(let E=0;E<v.g.length;E++){const w=this.i(T)>>>16,g=this.i(T)&65535,ot=v.i(E)>>>16,bt=v.i(E)&65535;y[2*T+2*E]+=g*bt,x(y,2*T+2*E),y[2*T+2*E+1]+=w*bt,x(y,2*T+2*E+1),y[2*T+2*E+1]+=g*ot,x(y,2*T+2*E+1),y[2*T+2*E+2]+=w*ot,x(y,2*T+2*E+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function x(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function $(v,m){this.g=v,this.h=m}function B(v,m){if(O(m))throw Error("division by zero");if(O(v))return new $(_,_);if(D(v))return m=B(P(v),m),new $(P(m.g),P(m.h));if(D(m))return m=B(v,P(m)),new $(P(m.g),m.h);if(v.g.length>30){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=A,T=m;T.l(v)<=0;)y=K(y),T=K(T);var E=H(y,1),w=H(T,1);for(T=H(T,2),y=H(y,2);!O(T);){var g=w.add(T);g.l(v)<=0&&(E=E.add(y),w=g),T=H(T,1),y=H(y,1)}return m=M(v,E.j(m)),new $(E,m)}for(E=_;v.l(m)>=0;){for(y=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),w=d(y),g=w.j(m);D(g)||g.l(v)>0;)y-=T,w=d(y),g=w.j(m);O(w)&&(w=A),E=E.add(w),v=M(v,g)}return new $(E,v)}n.B=function(v){return B(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<m;T++)y[T]=this.i(T)&v.i(T);return new a(y,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<m;T++)y[T]=this.i(T)|v.i(T);return new a(y,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let T=0;T<m;T++)y[T]=this.i(T)^v.i(T);return new a(y,this.h^v.h)};function K(v){const m=v.g.length+1,y=[];for(let T=0;T<m;T++)y[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(y,v.h)}function H(v,m){const y=m>>5;m%=32;const T=v.g.length-y,E=[];for(let w=0;w<T;w++)E[w]=m>0?v.i(w+y)>>>m|v.i(w+y+1)<<32-m:v.i(w+y);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,cf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Ke=a}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lf,os,uf,wi,Ra,hf,df,ff;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ai=="object"&&ai];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var I=o[p];if(!(I in h))break t;h=h[I]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function _(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,I,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[I].apply(p,k)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function O(o,l){for(let p=1;p<arguments.length;p++){const I=arguments[p];var h=typeof I;if(h=h!="object"?h:I?Array.isArray(I)?"array":h:"null",h=="array"||h=="object"&&typeof I.length=="number"){h=o.length||0;const S=I.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=I[k]}else o.push(I)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(o){a.setTimeout(()=>{throw o},0)}function M(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class x{constructor(){this.h=this.g=null}add(l,h){const p=$.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new D(()=>new B,o=>o.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,v=new x,m=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(y)}};function y(){for(var o;o=M();){try{o.h.call(o.g)}catch(h){P(h)}var l=$;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}H=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function ot(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}_(ot,E),ot.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ot.Z.h.call(this)},ot.prototype.h=function(){ot.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var bt="closure_listenable_"+(Math.random()*1e6|0),St=0;function kt(o,l,h,p,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=I,this.key=++St,this.da=this.fa=!1}function de(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ft(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function xn(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Fn(o){const l={};for(const h in o)l[h]=o[h];return l}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ln(o,l){let h,p;for(let I=1;I<arguments.length;I++){p=arguments[I];for(h in p)o[h]=p[h];for(let S=0;S<Re.length;S++)h=Re[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function zt(o){this.src=o,this.g={},this.h=0}zt.prototype.add=function(o,l,h,p,I){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=fe(o,l,p,I);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new kt(l,this.src,S,!!p,I),l.fa=h,o.push(l)),l};function Ut(o,l){const h=l.type;if(h in o.g){var p=o.g[h],I=Array.prototype.indexOf.call(p,l,void 0),S;(S=I>=0)&&Array.prototype.splice.call(p,I,1),S&&(de(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function fe(o,l,h,p){for(let I=0;I<o.length;++I){const S=o[I];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return I}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),Kt={};function Un(o,l,h,p,I){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Un(o,l[S],h,p,I);return null}return h=Ks(h),o&&o[bt]?o.J(l,h,c(p)?!!p.capture:!1,I):Ro(o,l,h,!1,p,I)}function Ro(o,l,h,p,I,S){if(!l)throw Error("Invalid event type");const k=c(I)?!!I.capture:!!I;let G=Bn(o);if(G||(o[Pe]=G=new zt(o)),h=G.add(l,h,p,k,S),h.proxy)return h;if(p=xr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)w||(I=k),I===void 0&&(I=!1),o.addEventListener(l.toString(),p,I);else if(o.attachEvent)o.attachEvent(zs(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function xr(){function o(h){return l.call(o.src,o.listener,h)}const l=Po;return o}function Ws(o,l,h,p,I){if(Array.isArray(l))for(var S=0;S<l.length;S++)Ws(o,l[S],h,p,I);else p=c(p)?!!p.capture:!!p,h=Ks(h),o&&o[bt]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=fe(l,h,p,I),h>-1&&(de(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=Bn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=fe(l,h,p,I)),(h=o>-1?l[o]:null)&&$n(h))}function $n(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[bt])Ut(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(zs(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Bn(l))?(Ut(h,o),h.h==0&&(h.src=null,l[Pe]=null)):de(o)}}}function zs(o){return o in Kt?Kt[o]:Kt[o]="on"+o}function Po(o,l){if(o.da)o=!0;else{l=new ot(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&$n(o),o=h.call(p,l)}return o}function Bn(o){return o=o[Pe],o instanceof zt?o:null}var jn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ks(o){return typeof o=="function"?o:(o[jn]||(o[jn]=function(l){return o.handleEvent(l)}),o[jn])}function mt(){T.call(this),this.i=new zt(this),this.M=this,this.G=null}_(mt,T),mt.prototype[bt]=!0,mt.prototype.removeEventListener=function(o,l,h,p){Ws(this,o,l,h,p)};function st(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var I=l;l=new E(p,o),ln(l,I)}I=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],I=pe(S,p,!0,l)&&I;if(S=l.g=o,I=pe(S,p,!0,l)&&I,I=pe(S,p,!1,l)&&I,h)for(k=0;k<h.length;k++)S=l.g=h[k],I=pe(S,p,!1,l)&&I}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)de(h[p]);delete o.g[l],o.h--}}this.G=null},mt.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},mt.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function pe(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let I=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,ft=k.ha||k.src;k.fa&&Ut(o.i,k),I=G.call(ft,p)!==!1&&I}}return I&&!p.defaultPrevented}function Gs(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Fr(o){o.g=Gs(()=>{o.g=null,o.i&&(o.i=!1,Fr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Ur extends T{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Fr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ne(o){T.call(this),this.h=o,this.g={}}_(Ne,T);var $r=[];function Br(o){Ft(o.g,function(l,h){this.g.hasOwnProperty(h)&&$n(l)},o),o.g={}}Ne.prototype.N=function(){Ne.Z.N.call(this),Br(this)},Ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hn=a.JSON.stringify,Wm=a.JSON.parse,zm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function fl(){}function pl(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function No(){E.call(this,"d")}_(No,E);function Do(){E.call(this,"c")}_(Do,E);var un={},ml=null;function Qs(){return ml=ml||new mt}un.Ia="serverreachability";function gl(o){E.call(this,un.Ia,o)}_(gl,E);function Hr(o){const l=Qs();st(l,new gl(l))}un.STAT_EVENT="statevent";function _l(o,l){E.call(this,un.STAT_EVENT,o),this.stat=l}_(_l,E);function Ct(o){const l=Qs();st(l,new _l(l,o))}un.Ja="timingevent";function yl(o,l){E.call(this,un.Ja,o),this.size=l}_(yl,E);function qr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Wr(){this.g=!0}Wr.prototype.ua=function(){this.g=!1};function Km(o,l,h,p,I,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let tt=0;tt<G.length;tt++){var ft=G[tt].split("=");if(ft.length>1){const gt=ft[0];ft=ft[1];const Zt=gt.split("_");k=Zt.length>=2&&Zt[1]=="type"?k+(gt+"="+ft+"&"):k+(gt+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+I+"]: "+l+`
`+h+`
`+k})}function Gm(o,l,h,p,I,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+I+"]: "+l+`
`+h+`
`+S+" "+k})}function qn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ym(o,h)+(p?" "+p:"")})}function Qm(o,l){o.info(function(){return"TIMEOUT: "+l})}Wr.prototype.info=function(){};function Ym(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var I=p[0];if(I!="noop"&&I!="stop"&&I!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Hn(S)}catch{return l}}var Ys={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},El={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vl;function Oo(){}_(Oo,fl),Oo.prototype.g=function(){return new XMLHttpRequest},vl=new Oo;function zr(o){return encodeURIComponent(String(o))}function Xm(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function De(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var Al={},ko={};function Vo(o,l,h){o.M=1,o.A=Js(Jt(l)),o.u=h,o.R=!0,wl(o,null)}function wl(o,l){o.F=Date.now(),Xs(o),o.B=Jt(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Ml(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Tl,o.g=tu(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Ur(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var I="readystatechange";Array.isArray(I)||(I&&($r[0]=I.toString()),I=$r);for(let S=0;S<I.length;S++){const k=Un(h,I[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?Fn(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Hr(),Km(o.i,o.v,o.B,o.l,o.S,o.u)}De.prototype.ba=function(o){o=o.target;const l=this.O;l&&Ve(o)==3?l.j():this.Y(o)},De.prototype.Y=function(o){try{if(o==this.g)t:{const G=Ve(this.g),ft=this.g.ya(),tt=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Hl(this.g)))){this.K||G!=4||ft==7||(ft==8||tt<=0?Hr(3):Hr(2)),Lo(this);var l=this.g.ca();this.X=l;var h=Jm(this);if(this.o=l==200,Gm(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,I=this.g;if((p=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(p)){var S=p;break e}}S=null}if(o=S)qn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mo(this,o);else{this.o=!1,this.m=3,Ct(12),hn(this),Kr(this);break t}}if(this.R){o=!0;let gt;for(;!this.K&&this.C<h.length;)if(gt=Zm(this,h),gt==ko){G==4&&(this.m=4,Ct(14),o=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(gt==Al){this.m=4,Ct(15),qn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else qn(this.i,this.l,gt,null),Mo(this,gt);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Ct(16),o=!1),this.o=this.o&&o,!o)qn(this.i,this.l,h,"[Invalid Chunked Response]"),hn(this),Kr(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),qo(k),k.P=!0,Ct(11))}}else qn(this.i,this.l,h,null),Mo(this,h);G==4&&hn(this),this.o&&!this.K&&(G==4?Yl(this.j,this):(this.o=!1,Xs(this)))}else fg(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),hn(this),Kr(this)}}}catch{}finally{}};function Jm(o){if(!Il(o))return o.g.la();const l=Hl(o.g);if(l==="")return"";let h="";const p=l.length,I=Ve(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return hn(o),Kr(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(I&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Il(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Zm(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?ko:(h=Number(l.substring(h,p)),isNaN(h)?Al:(p+=1,p+h>l.length?ko:(l=l.slice(p,p+h),o.C=p+h,l)))}De.prototype.cancel=function(){this.K=!0,hn(this)};function Xs(o){o.T=Date.now()+o.H,bl(o,o.H)}function bl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=qr(d(o.aa,o),l)}function Lo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}De.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qm(this.i,this.B),this.M!=2&&(Hr(),Ct(17)),hn(this),this.m=2,Kr(this)):bl(this,this.T-o)};function Kr(o){o.j.I==0||o.K||Yl(o.j,o)}function hn(o){Lo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Br(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Mo(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||xo(h.h,o))){if(!o.L&&xo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var I=p;if(I[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ri(h),ei(h);else break t;Ho(h),Ct(18)}}else h.xa=I[1],0<h.xa-h.K&&I[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=qr(d(h.Va,h),6e3));Rl(h.h)<=1&&h.ta&&(h.ta=void 0)}else fn(h,11)}else if((o.L||h.g==o)&&ri(h),!g(l))for(I=h.Ba.g.parse(l),l=0;l<I.length;l++){let tt=I[l];const gt=tt[0];if(!(gt<=h.K))if(h.K=gt,tt=tt[1],h.I==2)if(tt[0]=="c"){h.M=tt[1],h.ba=tt[2];const Zt=tt[3];Zt!=null&&(h.ka=Zt,h.j.info("VER="+h.ka));const pn=tt[4];pn!=null&&(h.za=pn,h.j.info("SVER="+h.za));const Le=tt[5];Le!=null&&typeof Le=="number"&&Le>0&&(p=1.5*Le,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Me=o.g;if(Me){const ii=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ii){var S=p.h;S.g||ii.indexOf("spdy")==-1&&ii.indexOf("quic")==-1&&ii.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Fo(S,S.h),S.h=null))}if(p.G){const Wo=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;Wo&&(p.wa=Wo,nt(p.J,p.G,Wo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=Zl(p,p.L?p.ba:null,p.W),k.L){Pl(p.h,k);var G=k,ft=p.O;ft&&(G.H=ft),G.D&&(Lo(G),Xs(G)),p.g=k}else Gl(p);h.i.length>0&&ni(h)}else tt[0]!="stop"&&tt[0]!="close"||fn(h,7);else h.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?fn(h,7):jo(h):tt[0]!="noop"&&h.l&&h.l.qa(tt),h.A=0)}}Hr(4)}catch{}}var tg=class{constructor(o,l){this.g=o,this.map=l}};function Sl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rl(o){return o.h?1:o.g?o.g.size:0}function xo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Fo(o,l){o.g?o.g.add(l):o.h=l}function Pl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Sl.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return b(o.i)}var Dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let I,S=null;p>=0?(I=o[h].substring(0,p),S=o[h].substring(p+1)):I=o[h],l(I,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Oe(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Oe?(this.l=o.l,Gr(this,o.j),this.o=o.o,this.g=o.g,Qr(this,o.u),this.h=o.h,Uo(this,xl(o.i)),this.m=o.m):o&&(l=String(o).match(Dl))?(this.l=!1,Gr(this,l[1]||"",!0),this.o=Yr(l[2]||""),this.g=Yr(l[3]||"",!0),Qr(this,l[4]),this.h=Yr(l[5]||"",!0),Uo(this,l[6]||"",!0),this.m=Yr(l[7]||"")):(this.l=!1,this.i=new Jr(null,this.l))}Oe.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Xr(l,Ol,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Xr(l,Ol,!0),"@"),o.push(zr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xr(h,h.charAt(0)=="/"?sg:rg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xr(h,og)),o.join("")},Oe.prototype.resolve=function(o){const l=Jt(this);let h=!!o.j;h?Gr(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)Qr(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var I=l.h.lastIndexOf("/");I!=-1&&(p=l.h.slice(0,I+1)+p)}if(I=p,I==".."||I==".")p="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){p=I.lastIndexOf("/",0)==0,I=I.split("/");const S=[];for(let k=0;k<I.length;){const G=I[k++];G=="."?p&&k==I.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==I.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=I}return h?l.h=p:h=o.i.toString()!=="",h?Uo(l,xl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Jt(o){return new Oe(o)}function Gr(o,l,h){o.j=h?Yr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Qr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Uo(o,l,h){l instanceof Jr?(o.i=l,ag(o.i,o.l)):(h||(l=Xr(l,ig)),o.i=new Jr(l,o.l))}function nt(o,l,h){o.i.set(l,h)}function Js(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Yr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,ng),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ng(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ol=/[#\/\?@]/g,rg=/[#\?:]/g,sg=/[#\?]/g,ig=/[#\?@]/g,og=/#/g;function Jr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&eg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Jr.prototype,n.add=function(o,l){dn(this),this.i=null,o=Wn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function kl(o,l){dn(o),l=Wn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Vl(o,l){return dn(o),l=Wn(o,l),o.g.has(l)}n.forEach=function(o,l){dn(this),this.g.forEach(function(h,p){h.forEach(function(I){o.call(l,I,p,this)},this)},this)};function Ll(o,l){dn(o);let h=[];if(typeof l=="string")Vl(o,l)&&(h=h.concat(o.g.get(Wn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return dn(this),this.i=null,o=Wn(this,o),Vl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Ll(this,o),o.length>0?String(o[0]):l):l};function Ml(o,l,h){kl(o,l),h.length>0&&(o.i=null,o.g.set(Wn(o,l),b(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const I=zr(h);h=Ll(this,h);for(let S=0;S<h.length;S++){let k=I;h[S]!==""&&(k+="="+zr(h[S])),o.push(k)}}return this.i=o.join("&")};function xl(o){const l=new Jr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Wn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function ag(o,l){l&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(h,p){const I=p.toLowerCase();p!=I&&(kl(this,p),Ml(this,I,h))},o)),o.j=l}function cg(o,l){const h=new Wr;if(a.Image){const p=new Image;p.onload=f(ke,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f(ke,h,"TestLoadImage: error",!1,l,p),p.onabort=f(ke,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(ke,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function lg(o,l){const h=new Wr,p=new AbortController,I=setTimeout(()=>{p.abort(),ke(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(I),S.ok?ke(h,"TestPingServer: ok",!0,l):ke(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),ke(h,"TestPingServer: error",!1,l)})}function ke(o,l,h,p,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),p(h)}catch{}}function ug(){this.g=new zm}function $o(o){this.i=o.Sb||null,this.h=o.ab||!1}_($o,fl),$o.prototype.g=function(){return new Zs(this.i,this.h)};function Zs(o,l){mt.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(Zs,mt),n=Zs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ts(this)),this.g&&(this.readyState=3,ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Zr(this):ts(this),this.readyState==3&&Fl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Zr(this))},n.Na=function(o){this.g&&(this.response=o,Zr(this))},n.ga=function(){this.g&&Zr(this)};function Zr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ts(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ul(o){let l="";return Ft(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Bo(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Ul(h),typeof o=="string"?h!=null&&zr(h):nt(o,l,h))}function at(o){mt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(at,mt);var hg=/^https?$/i,dg=["POST","PUT"];n=at.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vl.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){$l(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var I in p)h.set(I,p[I]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),I=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(dg,l,void 0)>=0)||p||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){$l(this,S)}};function $l(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Bl(o),ti(o)}function Bl(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,st(this,"complete"),st(this,"abort"),ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?jl(this):this.Xa())},n.Xa=function(){jl(this)};function jl(o){if(o.h&&typeof i<"u"){if(o.v&&Ve(o)==4)setTimeout(o.Ca.bind(o),0);else if(st(o,"readystatechange"),Ve(o)==4){o.h=!1;try{const S=o.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let k=String(o.D).match(Dl)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!hg.test(k?k.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.o=6;try{var I=Ve(o)>2?o.g.statusText:""}catch{I=""}o.l=I+" ["+o.ca()+"]",Bl(o)}}finally{ti(o)}}}}function ti(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||st(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ve(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ve(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Wm(l)}};function Hl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fg(o){const l={};o=(o.g&&Ve(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(g(o[p]))continue;var h=Xm(o[p]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[I]||[];l[I]=S,S.push(h)}xn(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function ql(o){this.za=0,this.i=[],this.j=new Wr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=es("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=es("baseRetryDelayMs",5e3,o),this.Za=es("retryDelaySeedMs",1e4,o),this.Ta=es("forwardChannelMaxRetries",2,o),this.va=es("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Sl(o&&o.concurrentRequestLimit),this.Ba=new ug,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ql.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Ct(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Zl(this,null,this.W),ni(this)};function jo(o){if(Wl(o),o.I==3){var l=o.V++,h=Jt(o.J);if(nt(h,"SID",o.M),nt(h,"RID",l),nt(h,"TYPE","terminate"),ns(o,h),l=new De(o,o.j,l),l.M=2,l.A=Js(Jt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=tu(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Xs(l)}Jl(o)}function ei(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function Wl(o){ei(o),o.v&&(a.clearTimeout(o.v),o.v=null),ri(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ni(o){if(!Cl(o.h)&&!o.m){o.m=!0;var l=o.Ea;K||m(),H||(K(),H=!0),v.add(l,o),o.D=0}}function pg(o,l){return Rl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=qr(d(o.Ea,o,l),Xl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const I=new De(this,this.j,o);let S=this.o;if(this.U&&(S?(S=Fn(S),ln(S,this.U)):S=this.U),this.u!==null||this.R||(I.J=S,S=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Kl(this,I,l),h=Jt(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),ns(this,h),S&&(this.R?l="headers="+zr(Ul(S))+"&"+l:this.u&&Bo(h,this.u,S)),Fo(this.h,I),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",l),nt(h,"SID","null"),I.U=!0,Vo(I,h,null)):Vo(I,h,l),this.I=2}}else this.I==3&&(o?zl(this,o):this.i.length==0||Cl(this.h)||zl(this))};function zl(o,l){var h;l?h=l.l:h=o.V++;const p=Jt(o.J);nt(p,"SID",o.M),nt(p,"RID",h),nt(p,"AID",o.K),ns(o,p),o.u&&o.o&&Bo(p,o.u,o.o),h=new De(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Kl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Fo(o.h,h),Vo(h,p,l)}function ns(o,l){o.H&&Ft(o.H,function(h,p){nt(l,p,h)}),o.l&&Ft({},function(h,p){nt(l,p,h)})}function Kl(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;t:{var I=o.i;let G=-1;for(;;){const ft=["count="+h];G==-1?h>0?(G=I[0].g,ft.push("ofs="+G)):G=0:ft.push("ofs="+G);let tt=!0;for(let gt=0;gt<h;gt++){var S=I[gt].g;const Zt=I[gt].map;if(S-=G,S<0)G=Math.max(0,I[gt].g-100),tt=!1;else try{S="req"+S+"_"||"";try{var k=Zt instanceof Map?Zt:Object.entries(Zt);for(const[pn,Le]of k){let Me=Le;c(Le)&&(Me=Hn(Le)),ft.push(S+pn+"="+encodeURIComponent(Me))}}catch(pn){throw ft.push(S+"type="+encodeURIComponent("_badmap")),pn}}catch{p&&p(Zt)}}if(tt){k=ft.join("&");break t}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function Gl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;K||m(),H||(K(),H=!0),v.add(l,o),o.A=0}}function Ho(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=qr(d(o.Da,o),Xl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Ql(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=qr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),ei(this),Ql(this))};function qo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Ql(o){o.g=new De(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Jt(o.na);nt(l,"RID","rpc"),nt(l,"SID",o.M),nt(l,"AID",o.K),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(l,"TO",o.ia),nt(l,"TYPE","xmlhttp"),ns(o,l),o.u&&o.o&&Bo(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Js(Jt(l)),h.u=null,h.R=!0,wl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,ei(this),Ho(this),Ct(19))};function ri(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Yl(o,l){var h=null;if(o.g==l){ri(o),qo(o),o.g=null;var p=2}else if(xo(o.h,l))h=l.G,Pl(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var I=o.D;p=Qs(),st(p,new yl(p,h)),ni(o)}else Gl(o);else if(I=l.m,I==3||I==0&&l.X>0||!(p==1&&pg(o,l)||p==2&&Ho(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),I){case 1:fn(o,5);break;case 4:fn(o,10);break;case 3:fn(o,6);break;default:fn(o,2)}}}function Xl(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function fn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const I=!p;p=new Oe(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gr(p,"https"),Js(p),I?cg(p.toString(),h):lg(p.toString(),h)}else Ct(2);o.I=0,o.l&&o.l.pa(l),Jl(o),Wl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Jl(o){if(o.I=0,o.ja=[],o.l){const l=Nl(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function Zl(o,l,h){var p=h instanceof Oe?Jt(h):new Oe(h);if(p.g!="")l&&(p.g=l+"."+p.g),Qr(p,p.u);else{var I=a.location;p=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;const S=new Oe(null);p&&Gr(S,p),l&&(S.g=l),I&&Qr(S,I),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&nt(p,h,l),nt(p,"VER",o.ka),ns(o,p),p}function tu(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new at(new $o({ab:h})):new at(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function eu(){}n=eu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function si(){}si.prototype.g=function(o,l){return new Vt(o,l)};function Vt(o,l){mt.call(this),this.g=new ql(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!g(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new zn(this)}_(Vt,mt),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){jo(this.g)},Vt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Hn(o),o=h);l.i.push(new tg(l.Ya++,o)),l.I==3&&ni(l)},Vt.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,Vt.Z.N.call(this)};function nu(o){No.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}_(nu,No);function ru(){Do.call(this),this.status=1}_(ru,Do);function zn(o){this.g=o}_(zn,eu),zn.prototype.ra=function(){st(this.g,"a")},zn.prototype.qa=function(o){st(this.g,new nu(o))},zn.prototype.pa=function(o){st(this.g,new ru)},zn.prototype.oa=function(){st(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,ff=function(){return new si},df=function(){return Qs()},hf=un,Ra={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,wi=Ys,El.COMPLETE="complete",uf=El,pl.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",mt.prototype.listen=mt.prototype.J,os=pl,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,lf=at}).apply(typeof ai<"u"?ai:typeof self<"u"?self:typeof window<"u"?window:{});const ku="@firebase/firestore",Vu="4.9.2";/**
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
 */class At{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Rr="12.3.0";/**
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
 */const Sn=new ec("@firebase/firestore");function Qn(){return Sn.logLevel}function L(n,...t){if(Sn.logLevel<=Q.DEBUG){const e=t.map(fc);Sn.debug(`Firestore (${Rr}): ${n}`,...e)}}function we(n,...t){if(Sn.logLevel<=Q.ERROR){const e=t.map(fc);Sn.error(`Firestore (${Rr}): ${n}`,...e)}}function dr(n,...t){if(Sn.logLevel<=Q.WARN){const e=t.map(fc);Sn.warn(`Firestore (${Rr}): ${n}`,...e)}}function fc(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function j(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,pf(n,r,e)}function pf(n,t,e){let r=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw we(r),new Error(r)}function Z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||pf(t,s,r)}function z(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Se{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ge{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class mf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class XE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(At.UNAUTHENTICATED))}shutdown(){}}class JE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ZE{constructor(t){this.t=t,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ge,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ge)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new mf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string",2055,{h:t}),new At(t)}}class tv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ev{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new tv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nv{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ee(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Lu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rv(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class pc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function Y(n,t){return n<t?-1:n>t?1:0}function Pa(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Zo(s)===Zo(i)?Y(s,i):Zo(s)?1:-1}return Y(n.length,t.length)}const sv=55296,iv=57343;function Zo(n){const t=n.charCodeAt(0);return t>=sv&&t<=iv}function fr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Mu="__name__";class te{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&j(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return te.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof te?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=te.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return Y(t.length,e.length)}static compareSegments(t,e){const r=te.isNumericId(t),s=te.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?te.extractNumericId(t).compare(te.extractNumericId(e)):Pa(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ke.fromString(t.substring(4,t.length-2))}}class et extends te{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const ov=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends te{construct(t,e,r){return new Et(t,e,r)}static isValidIdentifier(t){return ov.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mu}static keyField(){return new Et([Mu])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Et(e)}static emptyPath(){return new Et([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}/**
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
 */function gf(n,t,e){if(!e)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function av(n,t,e,r){if(t===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xu(n){if(!F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fu(n){if(F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _f(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function vn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=io(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ht(n,t){const e={typeString:n};return t&&(e.value=t),e}function Ls(n,t){if(!_f(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new V(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const Uu=-62135596800,$u=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*$u);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Uu)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$u}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ls(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Uu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:ht("string",rt._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new rt(0,0))}static max(){return new W(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vs=-1;function cv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new Ye(s,F.empty(),t)}function lv(n){return new Ye(n.readTime,n.key,vs)}class Ye{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ye(W.min(),F.empty(),vs)}static max(){return new Ye(W.max(),F.empty(),vs)}}function uv(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Y(n.largestBatchId,t.largestBatchId))}/**
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
 */const hv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Pr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==hv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&e()},u=>r(u))}),a=!0,i===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(t,e){return new R((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function fv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Nr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class oo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}oo.ce=-1;/**
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
 */const mc=-1;function ao(n){return n==null}function ji(n){return n===0&&1/n==-1/0}function pv(n){return typeof n=="number"&&Number.isInteger(n)&&!ji(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const yf="";function mv(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Bu(t)),t=gv(n.get(e),t);return Bu(t)}function gv(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case yf:e+="";break;default:e+=i}}return e}function Bu(n){return n+yf+""}/**
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
 */function ju(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Nn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ef(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class it{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ci(this.root,t,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ci(this.root,t,this.comparator,!0)}}class ci{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new yt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Hu(this.data.getIterator())}getIteratorFrom(t){return new Hu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class Hu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(Et.comparator)}static empty(){return new Qt([])}unionWith(t){let e=new pt(Et.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vf("Invalid base64 string: "+i):i}}(t);return new vt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const _v=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(n){if(Z(!!n,39018),typeof n=="string"){let t=0;const e=_v.exec(n);if(Z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Je(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
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
 */const Tf="server_timestamp",Af="__type__",wf="__previous_value__",If="__local_write_time__";function gc(n){return(n?.mapValue?.fields||{})[Af]?.stringValue===Tf}function co(n){const t=n.mapValue.fields[wf];return gc(t)?co(t):t}function Ts(n){const t=Xe(n.mapValue.fields[If].timestampValue);return new rt(t.seconds,t.nanos)}/**
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
 */class yv{constructor(t,e,r,s,i,a,c,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Hi="(default)";class As{constructor(t,e){this.projectId=t,this.database=e||Hi}static empty(){return new As("","")}get isDefaultDatabase(){return this.database===Hi}isEqual(t){return t instanceof As&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const bf="__type__",Ev="__max__",li={mapValue:{}},Sf="__vector__",qi="value";function Ze(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gc(n)?4:Tv(n)?9007199254740991:vv(n)?10:11:j(28295,{value:n})}function ue(n,t){if(n===t)return!0;const e=Ze(n);if(e!==Ze(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ts(n).isEqual(Ts(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xe(s.timestampValue),c=Xe(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Je(s.bytesValue).isEqual(Je(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ct(s.doubleValue),c=ct(i.doubleValue);return a===c?ji(a)===ji(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return fr(n.arrayValue.values||[],t.arrayValue.values||[],ue);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ju(a)!==ju(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!ue(a[u],c[u])))return!1;return!0}(n,t);default:return j(52216,{left:n})}}function ws(n,t){return(n.values||[]).find(e=>ue(e,t))!==void 0}function pr(n,t){if(n===t)return 0;const e=Ze(n),r=Ze(t);if(e!==r)return Y(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,t.booleanValue);case 2:return function(i,a){const c=ct(i.integerValue||i.doubleValue),u=ct(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,t);case 3:return qu(n.timestampValue,t.timestampValue);case 4:return qu(Ts(n),Ts(t));case 5:return Pa(n.stringValue,t.stringValue);case 6:return function(i,a){const c=Je(i),u=Je(a);return c.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=Y(c[d],u[d]);if(f!==0)return f}return Y(c.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,a){const c=Y(ct(i.latitude),ct(a.latitude));return c!==0?c:Y(ct(i.longitude),ct(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Wu(n.arrayValue,t.arrayValue);case 10:return function(i,a){const c=i.fields||{},u=a.fields||{},d=c[qi]?.arrayValue,f=u[qi]?.arrayValue,_=Y(d?.values?.length||0,f?.values?.length||0);return _!==0?_:Wu(d,f)}(n.mapValue,t.mapValue);case 11:return function(i,a){if(i===li.mapValue&&a===li.mapValue)return 0;if(i===li.mapValue)return 1;if(a===li.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let _=0;_<u.length&&_<f.length;++_){const A=Pa(u[_],f[_]);if(A!==0)return A;const b=pr(c[u[_]],d[f[_]]);if(b!==0)return b}return Y(u.length,f.length)}(n.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function qu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Y(n,t);const e=Xe(n),r=Xe(t),s=Y(e.seconds,r.seconds);return s!==0?s:Y(e.nanos,r.nanos)}function Wu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=pr(e[s],r[s]);if(i)return i}return Y(e.length,r.length)}function mr(n){return Na(n)}function Na(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Xe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Je(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Na(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Na(e.fields[a])}`;return s+"}"}(n.mapValue):j(61005,{value:n})}function Ii(n){switch(Ze(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=co(n);return t?16+Ii(t):16;case 5:return 2*n.stringValue.length;case 6:return Je(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ii(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Nn(r.fields,(i,a)=>{s+=i.length+Ii(a)}),s}(n.mapValue);default:throw j(13486,{value:n})}}function zu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Da(n){return!!n&&"integerValue"in n}function _c(n){return!!n&&"arrayValue"in n}function Ku(n){return!!n&&"nullValue"in n}function Gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bi(n){return!!n&&"mapValue"in n}function vv(n){return(n?.mapValue?.fields||{})[bf]?.stringValue===Sf}function ds(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Nn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ds(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ds(n.arrayValue.values[e]);return t}return{...n}}function Tv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ev}/**
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
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!bi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ds(e)}setAll(t){let e=Et.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=ds(a):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());bi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ue(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Nn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new $t(ds(this.value))}}function Cf(n){const t=[];return Nn(n.fields,(e,r)=>{const s=new Et([e]);if(bi(r)){const i=Cf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Qt(t)}/**
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
 */class wt{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,W.min(),W.min(),W.min(),$t.empty(),0)}static newFoundDocument(t,e,r,s){return new wt(t,1,e,W.min(),r,s,0)}static newNoDocument(t,e){return new wt(t,2,e,W.min(),W.min(),$t.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,W.min(),W.min(),$t.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wi{constructor(t,e){this.position=t,this.inclusive=e}}function Qu(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=pr(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ue(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Is{constructor(t,e="asc"){this.field=t,this.dir=e}}function Av(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Rf{}class ut extends Rf{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Iv(t,e,r):e==="array-contains"?new Cv(t,r):e==="in"?new Rv(t,r):e==="not-in"?new Pv(t,r):e==="array-contains-any"?new Nv(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bv(t,r):new Sv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(pr(e,this.value)):e!==null&&Ze(this.value)===Ze(e)&&this.matchesComparison(pr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Rf{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Yt(t,e)}matches(t){return Pf(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pf(n){return n.op==="and"}function Nf(n){return wv(n)&&Pf(n)}function wv(n){for(const t of n.filters)if(t instanceof Yt)return!1;return!0}function Oa(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Nf(n))return n.filters.map(t=>Oa(t)).join(",");{const t=n.filters.map(e=>Oa(e)).join(",");return`${n.op}(${t})`}}function Df(n,t){return n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&ue(r.value,s.value)}(n,t):n instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Df(a,s.filters[c]),!0):!1}(n,t):void j(19439)}function Of(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${mr(e.value)}`}(n):n instanceof Yt?function(e){return e.op.toString()+" {"+e.getFilters().map(Of).join(" ,")+"}"}(n):"Filter"}class Iv extends ut{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class bv extends ut{constructor(t,e){super(t,"in",e),this.keys=kf("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Sv extends ut{constructor(t,e){super(t,"not-in",e),this.keys=kf("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kf(n,t){return(t.arrayValue?.values||[]).map(e=>F.fromName(e.referenceValue))}class Cv extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _c(e)&&ws(e.arrayValue,this.value)}}class Rv extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ws(this.value.arrayValue,e)}}class Pv extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ws(this.value.arrayValue,e)}}class Nv extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_c(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ws(this.value.arrayValue,r))}}/**
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
 */class Dv{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Xu(n,t=null,e=[],r=[],s=null,i=null,a=null){return new Dv(n,t,e,r,s,i,a)}function yc(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Oa(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ao(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>mr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>mr(r)).join(",")),t.Te=e}return t.Te}function Ec(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Av(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Df(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Yu(n.startAt,t.startAt)&&Yu(n.endAt,t.endAt)}function ka(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Dr{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ov(n,t,e,r,s,i,a,c){return new Dr(n,t,e,r,s,i,a,c)}function lo(n){return new Dr(n)}function Ju(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vf(n){return n.collectionGroup!==null}function fs(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pt(Et.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Is(i,r))}),e.has(Et.keyField().canonicalString())||t.Ie.push(new Is(Et.keyField(),r))}return t.Ie}function se(n){const t=z(n);return t.Ee||(t.Ee=kv(t,fs(n))),t.Ee}function kv(n,t){if(n.limitType==="F")return Xu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Is(s.field,i)});const e=n.endAt?new Wi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wi(n.startAt.position,n.startAt.inclusive):null;return Xu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Va(n,t){const e=n.filters.concat([t]);return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function La(n,t,e){return new Dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function uo(n,t){return Ec(se(n),se(t))&&n.limitType===t.limitType}function Lf(n){return`${yc(se(n))}|lt:${n.limitType}`}function Yn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Of(s)).join(", ")}]`),ao(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>mr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>mr(s)).join(",")),`Target(${r})`}(se(n))}; limitType=${n.limitType})`}function ho(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=Qu(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,fs(r),s)||r.endAt&&!function(a,c,u){const d=Qu(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,fs(r),s))}(n,t)}function Vv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mf(n){return(t,e)=>{let r=!1;for(const s of fs(n)){const i=Lv(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lv(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?pr(u,d):j(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
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
 */class Dn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Nn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ef(this.inner)}size(){return this.innerSize}}/**
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
 */const Mv=new it(F.comparator);function Ie(){return Mv}const xf=new it(F.comparator);function as(...n){let t=xf;for(const e of n)t=t.insert(e.key,e);return t}function Ff(n){let t=xf;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function gn(){return ps()}function Uf(){return ps()}function ps(){return new Dn(n=>n.toString(),(n,t)=>n.isEqual(t))}const xv=new it(F.comparator),Fv=new pt(F.comparator);function X(...n){let t=Fv;for(const e of n)t=t.add(e);return t}const Uv=new pt(Y);function $v(){return Uv}/**
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
 */function vc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(t)?"-0":t}}function $f(n){return{integerValue:""+n}}function Bv(n,t){return pv(t)?$f(t):vc(n,t)}/**
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
 */class fo{constructor(){this._=void 0}}function jv(n,t,e){return n instanceof bs?function(s,i){const a={fields:{[Af]:{stringValue:Tf},[If]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gc(i)&&(i=co(i)),i&&(a.fields[wf]=i),{mapValue:a}}(e,t):n instanceof Ss?jf(n,t):n instanceof Cs?Hf(n,t):function(s,i){const a=Bf(s,i),c=Zu(a)+Zu(s.Ae);return Da(a)&&Da(s.Ae)?$f(c):vc(s.serializer,c)}(n,t)}function Hv(n,t,e){return n instanceof Ss?jf(n,t):n instanceof Cs?Hf(n,t):e}function Bf(n,t){return n instanceof zi?function(r){return Da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class bs extends fo{}class Ss extends fo{constructor(t){super(),this.elements=t}}function jf(n,t){const e=qf(t);for(const r of n.elements)e.some(s=>ue(s,r))||e.push(r);return{arrayValue:{values:e}}}class Cs extends fo{constructor(t){super(),this.elements=t}}function Hf(n,t){let e=qf(t);for(const r of n.elements)e=e.filter(s=>!ue(s,r));return{arrayValue:{values:e}}}class zi extends fo{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Zu(n){return ct(n.integerValue||n.doubleValue)}function qf(n){return _c(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class qv{constructor(t,e){this.field=t,this.transform=e}}function Wv(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ss&&s instanceof Ss||r instanceof Cs&&s instanceof Cs?fr(r.elements,s.elements,ue):r instanceof zi&&s instanceof zi?ue(r.Ae,s.Ae):r instanceof bs&&s instanceof bs}(n.transform,t.transform)}class zv{constructor(t,e){this.version=t,this.transformResults=e}}class _e{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _e}static exists(t){return new _e(void 0,t)}static updateTime(t){return new _e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Si(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class po{}function Wf(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Kf(n.key,_e.none()):new Ms(n.key,n.data,_e.none());{const e=n.data,r=$t.empty();let s=new pt(Et.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new On(n.key,r,new Qt(s.toArray()),_e.none())}}function Kv(n,t,e){n instanceof Ms?function(s,i,a){const c=s.value.clone(),u=eh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof On?function(s,i,a){if(!Si(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=eh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(zf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ms(n,t,e,r){return n instanceof Ms?function(i,a,c,u){if(!Si(i.precondition,a))return c;const d=i.value.clone(),f=nh(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof On?function(i,a,c,u){if(!Si(i.precondition,a))return c;const d=nh(i.fieldTransforms,u,a),f=a.data;return f.setAll(zf(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,t,e,r):function(i,a,c){return Si(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Gv(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Bf(r.transform,s||null);i!=null&&(e===null&&(e=$t.empty()),e.set(r.field,i))}return e||null}function th(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fr(r,s,(i,a)=>Wv(i,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ms extends po{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class On extends po{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zf(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function eh(n,t,e){const r=new Map;Z(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,Hv(a,c,e[s]))}return r}function nh(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,jv(i,a,t))}return r}class Kf extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qv extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Yv{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Kv(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ms(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ms(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Uf();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const u=Wf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),X())}isEqual(t){return this.batchId===t.batchId&&fr(this.mutations,t.mutations,(e,r)=>th(e,r))&&fr(this.baseMutations,t.baseMutations,(e,r)=>th(e,r))}}class Tc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return xv}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Tc(t,e,r,s)}}/**
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
 */class Xv{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Jv{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var lt,J;function Zv(n){switch(n){case C.OK:return j(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function Gf(n){if(n===void 0)return we("GRPC error has no .code"),C.UNKNOWN;switch(n){case lt.OK:return C.OK;case lt.CANCELLED:return C.CANCELLED;case lt.UNKNOWN:return C.UNKNOWN;case lt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case lt.INTERNAL:return C.INTERNAL;case lt.UNAVAILABLE:return C.UNAVAILABLE;case lt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case lt.NOT_FOUND:return C.NOT_FOUND;case lt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case lt.ABORTED:return C.ABORTED;case lt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case lt.DATA_LOSS:return C.DATA_LOSS;default:return j(39323,{code:n})}}(J=lt||(lt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tT(){return new TextEncoder}/**
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
 */const eT=new Ke([4294967295,4294967295],0);function rh(n){const t=tT().encode(n),e=new cf;return e.update(t),new Uint8Array(e.digest())}function sh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ke([e,r],0),new Ke([s,i],0)]}class Ac{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new cs(`Invalid padding: ${e}`);if(r<0)throw new cs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new cs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new cs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Ke.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Ke.fromNumber(r)));return s.compare(eT)===1&&(s=new Ke([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=rh(t),[r,s]=sh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Ac(i,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const e=rh(t),[r,s]=sh(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mo{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,xs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new mo(W.min(),s,new it(Y),Ie(),X())}}class xs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new xs(r,e,X(),X(),X())}}/**
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
 */class Ci{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Qf{constructor(t,e){this.targetId=t,this.Ce=e}}class Yf{constructor(t,e,r=vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ih{constructor(){this.ve=0,this.Fe=oh(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:i})}}),new xs(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=oh()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nT{constructor(t){this.Ge=t,this.ze=new Map,this.je=Ie(),this.Je=ui(),this.He=ui(),this.Ye=new it(Y)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(ka(i))if(r===0){const a=new F(i.path);this.et(e,a,wt.newNoDocument(a,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=Je(r).toUint8Array()}catch(u){if(u instanceof vf)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ac(a,s,i)}catch(u){return dr(u instanceof cs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ka(c.target)){const u=new F(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,wt.newNoDocument(u,t))}i.Be&&(e.set(a,i.ke()),i.qe())}});let r=X();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new mo(t,e,this.Ye,this.je,r);return this.je=Ie(),this.Je=ui(),this.He=ui(),this.Ye=new it(Y),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new ih,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new pt(Y),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new pt(Y),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ih),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ui(){return new it(F.comparator)}function oh(){return new it(F.comparator)}const rT={asc:"ASCENDING",desc:"DESCENDING"},sT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iT={and:"AND",or:"OR"};class oT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ma(n,t){return n.useProto3Json||ao(t)?t:{value:t}}function Ki(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function aT(n,t){return Ki(n,t.toTimestamp())}function ie(n){return Z(!!n,49232),W.fromTimestamp(function(e){const r=Xe(e);return new rt(r.seconds,r.nanos)}(n))}function wc(n,t){return xa(n,t).canonicalString()}function xa(n,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Jf(n){const t=et.fromString(n);return Z(rp(t),10190,{key:t.toString()}),t}function Fa(n,t){return wc(n.databaseId,t.path)}function ta(n,t){const e=Jf(t);if(e.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(tp(e))}function Zf(n,t){return wc(n.databaseId,t)}function cT(n){const t=Jf(n);return t.length===4?et.emptyPath():tp(t)}function Ua(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tp(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ah(n,t,e){return{name:Fa(n,t),fields:e.value.mapValue.fields}}function lT(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),vt.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),vt.fromUint8Array(f||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const f=d.code===void 0?C.UNKNOWN:Gf(d.code);return new V(f,d.message||"")}(a);e=new Yf(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ta(n,r.document.name),i=ie(r.document.updateTime),a=r.document.createTime?ie(r.document.createTime):W.min(),c=new $t({mapValue:{fields:r.document.fields}}),u=wt.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];e=new Ci(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ta(n,r.document),i=r.readTime?ie(r.readTime):W.min(),a=wt.newNoDocument(s,i),c=r.removedTargetIds||[];e=new Ci([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ta(n,r.document),i=r.removedTargetIds||[];e=new Ci([],i,s,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Jv(s,i),c=r.targetId;e=new Qf(c,a)}}return e}function uT(n,t){let e;if(t instanceof Ms)e={update:ah(n,t.key,t.value)};else if(t instanceof Kf)e={delete:Fa(n,t.key)};else if(t instanceof On)e={update:ah(n,t.key,t.data),updateMask:ET(t.fieldMask)};else{if(!(t instanceof Qv))return j(16599,{Vt:t.type});e={verify:Fa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof bs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Cs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw j(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,t.precondition)),e}function hT(n,t){return n&&n.length>0?(Z(t!==void 0,14353),n.map(e=>function(s,i){let a=s.updateTime?ie(s.updateTime):ie(i);return a.isEqual(W.min())&&(a=ie(i)),new zv(a,s.transformResults||[])}(e,t))):[]}function dT(n,t){return{documents:[Zf(n,t.path)]}}function fT(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Zf(n,s);const i=function(d){if(d.length!==0)return np(Yt.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(A){return{field:Xn(A.field),direction:gT(A.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ma(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function pT(n){let t=cT(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(_){const A=ep(_);return A instanceof Yt&&Nf(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(_){return _.map(A=>function(O){return new Is(Jn(O.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(_){let A;return A=typeof _=="object"?_.value:_,ao(A)?null:A}(e.limit));let u=null;e.startAt&&(u=function(_){const A=!!_.before,b=_.values||[];return new Wi(b,A)}(e.startAt));let d=null;return e.endAt&&(d=function(_){const A=!_.before,b=_.values||[];return new Wi(b,A)}(e.endAt)),Ov(t,s,a,i,c,"F",u,d)}function mT(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ep(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Jn(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(e.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jn(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(e){return ut.create(Jn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Yt.create(e.compositeFilter.filters.map(r=>ep(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(n):j(30097,{filter:n})}function gT(n){return rT[n]}function _T(n){return sT[n]}function yT(n){return iT[n]}function Xn(n){return{fieldPath:n.canonicalString()}}function Jn(n){return Et.fromServerFormat(n.fieldPath)}function np(n){return n instanceof ut?function(e){if(e.op==="=="){if(Gu(e.value))return{unaryFilter:{field:Xn(e.field),op:"IS_NAN"}};if(Ku(e.value))return{unaryFilter:{field:Xn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gu(e.value))return{unaryFilter:{field:Xn(e.field),op:"IS_NOT_NAN"}};if(Ku(e.value))return{unaryFilter:{field:Xn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(e.field),op:_T(e.op),value:e.value}}}(n):n instanceof Yt?function(e){const r=e.getFilters().map(s=>np(s));return r.length===1?r[0]:{compositeFilter:{op:yT(e.op),filters:r}}}(n):j(54877,{filter:n})}function ET(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function rp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class He{constructor(t,e,r,s,i=W.min(),a=W.min(),c=vt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new He(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class vT{constructor(t){this.yt=t}}function TT(n){const t=pT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?La(t,t.limit,"L"):t}/**
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
 */class AT{constructor(){this.Cn=new wT}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ye.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ye.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class wT{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new pt(et.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new pt(et.comparator)).toArray()}}/**
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
 */const ch={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sp=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(sp,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */class gr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new gr(0)}static cr(){return new gr(-1)}}/**
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
 */const lh="LruGarbageCollector",IT=1048576;function uh([n,t],[e,r]){const s=Y(n,e);return s===0?Y(t,r):s}class bT{constructor(t){this.Ir=t,this.buffer=new pt(uh),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();uh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ST{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){L(lh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Nr(e)?L(lh,"Ignoring IndexedDB error during garbage collection: ",e):await Pr(e)}await this.Vr(3e5)})}}class CT{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(oo.ce);const r=new bT(e);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ch)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ch):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(t,s))).next(_=>(r=_,c=Date.now(),this.removeTargets(t,r,e))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(_=>(d=Date.now(),Qn()<=Q.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:_})))}}function RT(n,t){return new CT(n,t)}/**
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
 */class PT{constructor(){this.changes=new Dn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class NT{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class DT{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&ms(r.mutation,s,Qt.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,e,r=X()){const s=gn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let a=as();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=gn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,X()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let i=Ie();const a=ps(),c=function(){return ps()}();return e.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof On)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ms(f.mutation,d,f.mutation.getFieldMask(),rt.now())):a.set(d.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>c.set(d,new NT(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(t,e){const r=ps();let s=new it((a,c)=>a-c),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||Qt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const _=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,_)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,_=Uf();f.forEach(A=>{if(!i.has(A)){const b=Wf(e.get(A),r.get(A));b!==null&&_.set(A,b),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,_))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):R.resolve(gn());let c=vs,u=i;return a.next(d=>R.forEach(d,(f,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(t,f).next(A=>{u=u.insert(f,A)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,u,d,X())).next(f=>({batchId:c,changes:Ff(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=as();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=as();return this.indexManager.getCollectionParents(t,i).next(c=>R.forEach(c,u=>{const d=function(_,A){return new Dr(A,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(f=>{f.forEach((_,A)=>{a=a.insert(_,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,wt.newInvalidDocument(f)))});let c=as();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&ms(f.mutation,d,Qt.empty(),rt.now()),ho(e,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class OT{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ie(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(s){return{name:s.name,query:TT(s.bundledQuery),readTime:ie(s.readTime)}}(e)),R.resolve()}}/**
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
 */class kT{constructor(){this.overlays=new it(F.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=gn();return R.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.St(t,e,i)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=gn(),i=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=gn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=gn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return R.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Xv(e,r));let i=this.qr.get(e);i===void 0&&(i=X(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class VT{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Ic{constructor(){this.Qr=new pt(_t.$r),this.Ur=new pt(_t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new _t(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new F(new et([])),r=new _t(e,t),s=new _t(e,t+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new et([])),r=new _t(e,t),s=new _t(e,t+1);let i=X();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new _t(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||Y(t.Yr,e.Yr)}static Kr(t,e){return Y(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
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
 */class LT{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new pt(_t.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Yv(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new _t(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?mc:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(Y);return e.forEach(s=>{const i=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new _t(new F(i),0);let c=new pt(Y);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)},a),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,s=>{const i=new _t(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new _t(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class MT{constructor(t){this.ri=t,this.docs=function(){return new it(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let r=Ie();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Ie();const a=e.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||uv(lv(f),r)<=0||(s.has(f.key)||ho(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,r,s){j(9500)}ii(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xT(this)}getSize(t){return R.resolve(this.size)}}class xT extends PT{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class FT{constructor(t){this.persistence=t,this.si=new Dn(e=>yc(e),Ec),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Ic,this.targetCount=0,this.ai=gr.ur()}forEachTarget(t,e){return this.si.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new gr(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
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
 */class ip{constructor(t,e){this.ui={},this.overlays={},this.ci=new oo(0),this.li=!1,this.li=!0,this.hi=new VT,this.referenceDelegate=t(this),this.Pi=new FT(this),this.indexManager=new AT,this.remoteDocumentCache=function(s){return new MT(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new vT(e),this.Ii=new OT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kT,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new LT(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new UT(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,e){return R.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class UT extends dv{constructor(t){super(),this.currentSequenceNumber=t}}class bc{constructor(t){this.persistence=t,this.Ri=new Ic,this.Vi=null}static mi(t){return new bc(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,r=>{const s=F.fromPath(r);return this.gi(t,s).next(i=>{i||e.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Gi{constructor(t,e){this.persistence=t,this.pi=new Dn(r=>mv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=RT(this,e)}static mi(t,e){return new Gi(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}wr(t){let e=0;return this.pr(t,r=>{e++}).next(()=>e)}pr(t,e){return R.forEach(this.pi,(r,s)=>this.br(t,r,s).next(i=>i?R.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,e).next(c=>{c||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ii(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Sc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Sc(t,e.fromCache,r,s)}}/**
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class BT{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Vg()?8:fv(It())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,e,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $T;return this.Ss(t,e,a).next(c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)})}).next(()=>i.result)}bs(t,e,r,s){return r.documentReadCount<this.fs?(Qn()<=Q.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Yn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Qn()<=Q.DEBUG&&L("QueryEngine","Query:",Yn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Qn()<=Q.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Yn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,se(e))):R.resolve())}ys(t,e){if(Ju(e))return R.resolve(null);let r=se(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=La(e,null,"F"),r=se(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=X(...i);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Ds(e,c);return this.Cs(e,d,a,u.readTime)?this.ys(t,La(e,null,"F")):this.vs(t,d,e,u)}))})))}ws(t,e,r,s){return Ju(e)||s.isEqual(W.min())?R.resolve(null):this.ps.getDocuments(t,r).next(i=>{const a=this.Ds(e,i);return this.Cs(e,a,r,s)?R.resolve(null):(Qn()<=Q.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yn(e)),this.vs(t,a,e,cv(s,vs)).next(c=>c))})}Ds(t,e){let r=new pt(Mf(t));return e.forEach((s,i)=>{ho(t,i)&&(r=r.add(i))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return Qn()<=Q.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Yn(e)),this.ps.getDocumentsMatchingQuery(t,e,Ye.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Cc="LocalStore",jT=3e8;class HT{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new it(Y),this.xs=new Dn(i=>yc(i),Ec),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new DT(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function qT(n,t,e,r){return new HT(n,t,e,r)}async function op(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function WT(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const _=d.batch,A=_.keys();let b=R.resolve();return A.forEach(O=>{b=b.next(()=>f.getEntry(u,O)).next(D=>{const P=d.docVersions.get(O);Z(P!==null,48541),D.version.compareTo(P)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,_))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function ap(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function zT(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach((f,_)=>{const A=s.get(_);if(!A)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,_).next(()=>e.Pi.addMatchingKeys(i,f.addedDocuments,_)));let b=A.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(_)!==null?b=b.withResumeToken(vt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(_,b),function(D,P,M){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=jT?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(A,b,f)&&c.push(e.Pi.updateTargetData(i,b))});let u=Ie(),d=X();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(KT(i,a,t.documentUpdates).next(f=>{u=f.ks,d=f.qs})),!r.isEqual(W.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next(_=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return R.waitFor(c).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(e.Ms=s,i))}function KT(n,t,e){let r=X(),s=X();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let a=Ie();return e.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):L(Cc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function GT(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=mc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function QT(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Pi.getTargetData(r,t).next(i=>i?(s=i,R.resolve(s)):e.Pi.allocateTargetId(r).next(a=>(s=new He(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r})}async function $a(n,t,e){const r=z(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Nr(a))throw a;L(Cc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function hh(n,t,e){const r=z(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const _=z(u),A=_.xs.get(f);return A!==void 0?R.resolve(_.Ms.get(A)):_.Pi.getTargetData(d,f)}(r,a,se(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?i:X())).next(c=>(YT(r,Vv(t),c),{documents:c,Qs:i})))}function YT(n,t,e){let r=n.Os.get(t)||W.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(t,r)}class dh{constructor(){this.activeTargetIds=$v()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class XT{constructor(){this.Mo=new dh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new dh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class JT{Oo(t){}shutdown(){}}/**
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
 */const fh="ConnectivityMonitor";class ph{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(fh,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){L(fh,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hi=null;function Ba(){return hi===null?hi=function(){return 268435456+Math.round(2147483648*Math.random())}():hi++,"0x"+hi.toString(16)}/**
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
 */const ea="RestConnection",ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tA{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Hi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const a=Ba(),c=this.zo(t,e.toUriEncodedString());L(ea,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=br(d);return this.Jo(t,c,u,r,f).then(_=>(L(ea,`Received RPC '${t}' ${a}: `,_),_),_=>{throw dr(ea,`RPC '${t}' ${a} failed with error: `,_,"url: ",c,"request:",r),_})}Ho(t,e,r,s,i,a){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}zo(t,e){const r=ZT[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class eA{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Tt="WebChannelConnection";class nA extends tA{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const a=Ba();return new Promise((c,u)=>{const d=new lf;d.setWithCredentials(!0),d.listenOnce(uf.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case wi.NO_ERROR:const _=d.getResponseJson();L(Tt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(_)),c(_);break;case wi.TIMEOUT:L(Tt,`RPC '${t}' ${a} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case wi.HTTP_ERROR:const A=d.getStatus();if(L(Tt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const O=b?.error;if(O&&O.status&&O.message){const D=function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN}(O.status);u(new V(D,O.message))}else u(new V(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(Tt,`RPC '${t}' ${a} completed.`)}});const f=JSON.stringify(s);L(Tt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)})}T_(t,e,r){const s=Ba(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ff(),c=df(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(Tt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const _=a.createWebChannel(f,u);this.I_(_);let A=!1,b=!1;const O=new eA({Yo:P=>{b?L(Tt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(A||(L(Tt,`Opening RPC '${t}' stream ${s} transport.`),_.open(),A=!0),L(Tt,`RPC '${t}' stream ${s} sending:`,P),_.send(P))},Zo:()=>_.close()}),D=(P,M,x)=>{P.listen(M,$=>{try{x($)}catch(B){setTimeout(()=>{throw B},0)}})};return D(_,os.EventType.OPEN,()=>{b||(L(Tt,`RPC '${t}' stream ${s} transport opened.`),O.o_())}),D(_,os.EventType.CLOSE,()=>{b||(b=!0,L(Tt,`RPC '${t}' stream ${s} transport closed`),O.a_(),this.E_(_))}),D(_,os.EventType.ERROR,P=>{b||(b=!0,dr(Tt,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),O.a_(new V(C.UNAVAILABLE,"The operation could not be completed")))}),D(_,os.EventType.MESSAGE,P=>{if(!b){const M=P.data[0];Z(!!M,16349);const x=M,$=x?.error||x[0]?.error;if($){L(Tt,`RPC '${t}' stream ${s} received error:`,$);const B=$.status;let K=function(m){const y=lt[m];if(y!==void 0)return Gf(y)}(B),H=$.message;K===void 0&&(K=C.INTERNAL,H="Unknown error status: "+B+" with message "+$.message),b=!0,O.a_(new V(K,H)),_.close()}else L(Tt,`RPC '${t}' stream ${s} received:`,M),O.u_(M)}}),D(c,hf.STAT_EVENT,P=>{P.stat===Ra.PROXY?L(Tt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ra.NOPROXY&&L(Tt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function na(){return typeof document<"u"?document:null}/**
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
 */function go(n){return new oT(n,!0)}/**
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
 */class cp{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const mh="PersistentStream";class lp{constructor(t,e,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cp(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(we(e.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return L(mh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(L(mh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rA extends lp{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=lT(this.serializer,t),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ie(a.readTime):W.min()}(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Ua(this.serializer),e.addTarget=function(i,a){let c;const u=a.target;if(c=ka(u)?{documents:dT(i,u)}:{query:fT(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Xf(i,a.resumeToken);const d=Ma(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Ki(i,a.snapshotVersion.toTimestamp());const d=Ma(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=mT(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Ua(this.serializer),e.removeTarget=t,this.q_(e)}}class sA extends lp{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=hT(t.writeResults,t.commitTime),r=ie(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ua(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>uT(this.serializer,r))};this.q_(e)}}/**
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
 */class iA{}class oA extends iA{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,xa(e,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,xa(e,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class aA{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(we(e),this.aa=!1):L("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Cn="RemoteStore";class cA{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{kn(this)&&(L(Cn,"Restarting streams for network reachability change."),await async function(u){const d=z(u);d.Ea.add(4),await Fs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await _o(d)}(this))})}),this.Ra=new aA(r,s)}}async function _o(n){if(kn(n))for(const t of n.da)await t(!0)}async function Fs(n){for(const t of n.da)await t(!1)}function up(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Dc(e)?Nc(e):Or(e).O_()&&Pc(e,t))}function Rc(n,t){const e=z(n),r=Or(e);e.Ia.delete(t),r.O_()&&hp(e,t),e.Ia.size===0&&(r.O_()?r.L_():kn(e)&&e.Ra.set("Unknown"))}function Pc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Or(n).Y_(t)}function hp(n,t){n.Va.Ue(t),Or(n).Z_(t)}function Nc(n){n.Va=new nT({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Ra.ua()}function Dc(n){return kn(n)&&!Or(n).x_()&&n.Ia.size>0}function kn(n){return z(n).Ea.size===0}function dp(n){n.Va=void 0}async function lA(n){n.Ra.set("Online")}async function uA(n){n.Ia.forEach((t,e)=>{Pc(n,t)})}async function hA(n,t){dp(n),Dc(n)?(n.Ra.ha(t),Nc(n)):n.Ra.set("Unknown")}async function dA(n,t,e){if(n.Ra.set("Online"),t instanceof Yf&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,t)}catch(r){L(Cn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Qi(n,r)}else if(t instanceof Ci?n.Va.Ze(t):t instanceof Qf?n.Va.st(t):n.Va.tt(t),!e.isEqual(W.min()))try{const r=await ap(n.localStore);e.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),hp(i,u);const _=new He(f.target,u,d,f.sequenceNumber);Pc(i,_)}),i.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){L(Cn,"Failed to raise snapshot:",r),await Qi(n,r)}}async function Qi(n,t,e){if(!Nr(t))throw t;n.Ea.add(1),await Fs(n),n.Ra.set("Offline"),e||(e=()=>ap(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(Cn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await _o(n)})}function fp(n,t){return t().catch(e=>Qi(n,e,t))}async function yo(n){const t=z(n),e=tn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:mc;for(;fA(t);)try{const s=await GT(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,pA(t,s)}catch(s){await Qi(t,s)}pp(t)&&mp(t)}function fA(n){return kn(n)&&n.Ta.length<10}function pA(n,t){n.Ta.push(t);const e=tn(n);e.O_()&&e.X_&&e.ea(t.mutations)}function pp(n){return kn(n)&&!tn(n).x_()&&n.Ta.length>0}function mp(n){tn(n).start()}async function mA(n){tn(n).ra()}async function gA(n){const t=tn(n);for(const e of n.Ta)t.ea(e.mutations)}async function _A(n,t,e){const r=n.Ta.shift(),s=Tc.from(r,t,e);await fp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await yo(n)}async function yA(n,t){t&&tn(n).X_&&await async function(r,s){if(function(a){return Zv(a)&&a!==C.ABORTED}(s.code)){const i=r.Ta.shift();tn(r).B_(),await fp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yo(r)}}(n,t),pp(n)&&mp(n)}async function gh(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),L(Cn,"RemoteStore received new credentials");const r=kn(e);e.Ea.add(3),await Fs(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await _o(e)}async function EA(n,t){const e=z(n);t?(e.Ea.delete(2),await _o(e)):t||(e.Ea.add(2),await Fs(e),e.Ra.set("Unknown"))}function Or(n){return n.ma||(n.ma=function(e,r,s){const i=z(e);return i.sa(),new rA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:lA.bind(null,n),t_:uA.bind(null,n),r_:hA.bind(null,n),H_:dA.bind(null,n)}),n.da.push(async t=>{t?(n.ma.B_(),Dc(n)?Nc(n):n.Ra.set("Unknown")):(await n.ma.stop(),dp(n))})),n.ma}function tn(n){return n.fa||(n.fa=function(e,r,s){const i=z(e);return i.sa(),new sA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:mA.bind(null,n),r_:yA.bind(null,n),ta:gA.bind(null,n),na:_A.bind(null,n)}),n.da.push(async t=>{t?(n.fa.B_(),await yo(n)):(await n.fa.stop(),n.Ta.length>0&&(L(Cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Oc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new Oc(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kc(n,t){if(we("AsyncQueue",`${t}: ${n}`),Nr(n))return new V(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class cr{static emptySet(t){return new cr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=as(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new cr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class _h{constructor(){this.ga=new it(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class _r{constructor(t,e,r,s,i,a,c,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new _r(t,e,cr.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&uo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class TA{constructor(){this.queries=yh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),i=s.queries;s.queries=yh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function yh(){return new Dn(n=>Lf(n),uo)}async function gp(n,t){const e=z(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new vA,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=kc(a,`Initialization of query '${Yn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&Vc(e)}async function _p(n,t){const e=z(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function AA(n,t){const e=z(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Vc(e)}function wA(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function Vc(n){n.Ca.forEach(t=>{t.next()})}var ja,Eh;(Eh=ja||(ja={})).Ma="default",Eh.Cache="cache";class yp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _r(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=_r.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ja.Cache}}/**
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
 */class Ep{constructor(t){this.key=t}}class vp{constructor(t){this.key=t}}class IA{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=Mf(t),this.tu=new cr(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new _h,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,_)=>{const A=s.get(f),b=ho(this.query,_)?_:null,O=!!A&&this.mutatedKeys.has(A.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;A&&b?A.data.isEqual(b.data)?O!==D&&(r.track({type:3,doc:b}),P=!0):this.su(A,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.eu(b,u)>0||d&&this.eu(b,d)<0)&&(c=!0)):!A&&b?(r.track({type:0,doc:b}),P=!0):A&&!b&&(r.track({type:1,doc:A}),P=!0,(u||d)&&(c=!0)),P&&(b?(a=a.add(b),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((f,_)=>function(b,O){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:P})}};return D(b)-D(O)}(f.type,_.type)||this.eu(f.doc,_.doc)),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new _r(this.query,t.tu,i,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _h,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const e=[];return t.forEach(r=>{this.Xa.has(r)||e.push(new vp(r))}),this.Xa.forEach(r=>{t.has(r)||e.push(new Ep(r))}),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return _r.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Lc="SyncEngine";class bA{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class SA{constructor(t){this.key=t,this.hu=!1}}class CA{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Dn(c=>Lf(c),uo),this.Iu=new Map,this.Eu=new Set,this.du=new it(F.comparator),this.Au=new Map,this.Ru=new Ic,this.Vu={},this.mu=new Map,this.fu=gr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function RA(n,t,e=!0){const r=Sp(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Tp(r,t,e,!0),s}async function PA(n,t){const e=Sp(n);await Tp(e,t,!0,!1)}async function Tp(n,t,e,r){const s=await QT(n.localStore,se(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await NA(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&up(n.remoteStore,s),c}async function NA(n,t,e,r,s){n.pu=(_,A,b)=>async function(D,P,M,x){let $=P.view.ru(M);$.Cs&&($=await hh(D.localStore,P.query,!1).then(({documents:v})=>P.view.ru(v,$)));const B=x&&x.targetChanges.get(P.targetId),K=x&&x.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges($,D.isPrimaryClient,B,K);return Th(D,P.targetId,H.au),H.snapshot}(n,_,A,b);const i=await hh(n.localStore,t,!0),a=new IA(t,i.Qs),c=a.ru(i.documents),u=xs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Th(n,e,d.au);const f=new bA(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function DA(n,t,e){const r=z(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!uo(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $a(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Rc(r.remoteStore,s.targetId),Ha(r,s.targetId)}).catch(Pr)):(Ha(r,s.targetId),await $a(r.localStore,s.targetId,!0))}async function OA(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Rc(e.remoteStore,r.targetId))}async function kA(n,t,e){const r=$A(n);try{const s=await function(a,c){const u=z(a),d=rt.now(),f=c.reduce((b,O)=>b.add(O.key),X());let _,A;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let O=Ie(),D=X();return u.Ns.getEntries(b,f).next(P=>{O=P,O.forEach((M,x)=>{x.isValidDocument()||(D=D.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,O)).next(P=>{_=P;const M=[];for(const x of c){const $=Gv(x,_.get(x.key).overlayedDocument);$!=null&&M.push(new On(x.key,$,Cf($.value.mapValue),_e.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,M,c)}).next(P=>{A=P;const M=P.applyToLocalDocumentSet(_,D);return u.documentOverlayCache.saveOverlays(b,P.batchId,M)})}).then(()=>({batchId:A.batchId,changes:Ff(_)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new it(Y)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,e),await Us(r,s.changes),await yo(r.remoteStore)}catch(s){const i=kc(s,"Failed to persist write");e.reject(i)}}async function Ap(n,t){const e=z(n);try{const r=await zT(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))}),await Us(e,r,t)}catch(r){await Pr(r)}}function vh(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach((f,_)=>{for(const A of _.Sa)A.va(c)&&(d=!0)}),d&&Vc(u)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function VA(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new it(F.comparator);a=a.insert(i,wt.newNoDocument(i,W.min()));const c=X().add(i),u=new mo(W.min(),new Map,new it(Y),a,c);await Ap(r,u),r.du=r.du.remove(i),r.Au.delete(t),Mc(r)}else await $a(r.localStore,t,!1).then(()=>Ha(r,t,e)).catch(Pr)}async function LA(n,t){const e=z(n),r=t.batch.batchId;try{const s=await WT(e.localStore,t);Ip(e,r,null),wp(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Us(e,s)}catch(s){await Pr(s)}}async function MA(n,t,e){const r=z(n);try{const s=await function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(_=>(Z(_!==null,37113),f=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,t);Ip(r,t,e),wp(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Us(r,s)}catch(s){await Pr(s)}}function wp(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Ip(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function Ha(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach(r=>{n.Ru.containsKey(r)||bp(n,r)})}function bp(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Rc(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Mc(n))}function Th(n,t,e){for(const r of e)r instanceof Ep?(n.Ru.addReference(r.key,t),xA(n,r)):r instanceof vp?(L(Lc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||bp(n,r.key)):j(19791,{wu:r})}function xA(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(L(Lc,"New document in limbo: "+e),n.Eu.add(r),Mc(n))}function Mc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(et.fromString(t)),r=n.fu.next();n.Au.set(r,new SA(e)),n.du=n.du.insert(e,r),up(n.remoteStore,new He(se(lo(e.path)),r,"TargetPurposeLimboResolution",oo.ce))}}async function Us(n,t,e){const r=z(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Sc.As(u.targetId,d);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>R.forEach(d,A=>R.forEach(A.Es,b=>f.persistence.referenceDelegate.addReference(_,A.targetId,b)).next(()=>R.forEach(A.ds,b=>f.persistence.referenceDelegate.removeReference(_,A.targetId,b)))))}catch(_){if(!Nr(_))throw _;L(Cc,"Failed to update sequence numbers: "+_)}for(const _ of d){const A=_.targetId;if(!_.fromCache){const b=f.Ms.get(A),O=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(A,D)}}}(r.localStore,i))}async function FA(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){L(Lc,"User change. New user:",t.toKey());const r=await op(e.localStore,t);e.currentUser=t,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new V(C.CANCELLED,a))})}),i.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Us(e,r.Ls)}}function UA(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Sp(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ap.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=UA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=VA.bind(null,t),t.Pu.H_=AA.bind(null,t.eventManager),t.Pu.yu=wA.bind(null,t.eventManager),t}function $A(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=LA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=MA.bind(null,t),t}class Yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=go(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return qT(this.persistence,new BT,t.initialUser,this.serializer)}Cu(t){return new ip(bc.mi,this.serializer)}Du(t){return new XT}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yi.provider={build:()=>new Yi};class BA extends Yi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Z(this.persistence.referenceDelegate instanceof Gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ST(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new ip(r=>Gi.mi(r,e),this.serializer)}}class qa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FA.bind(null,this.syncEngine),await EA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new TA}()}createDatastore(t){const e=go(t.databaseInfo.databaseId),r=function(i){return new nA(i)}(t.databaseInfo);return function(i,a,c,u){return new oA(i,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,a,c){return new cA(r,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>vh(this.syncEngine,e,0),function(){return ph.v()?new ph:new JT}())}createSyncEngine(t,e){return function(s,i,a,c,u,d,f){const _=new CA(s,i,a,c,u,d);return f&&(_.gu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(e){const r=z(e);L(Cn,"RemoteStore shutting down."),r.Ea.add(5),await Fs(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}qa.provider={build:()=>new qa};/**
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
 */class Cp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):we("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const en="FirestoreClient";class jA{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(en,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(en,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=kc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ra(n,t){n.asyncQueue.verifyOperationInProgress(),L(en,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await op(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ah(n,t){n.asyncQueue.verifyOperationInProgress();const e=await HA(n);L(en,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>gh(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>gh(t.remoteStore,s)),n._onlineComponents=t}async function HA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(en,"Using user provided OfflineComponentProvider");try{await ra(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;dr("Error using user provided cache. Falling back to memory cache: "+e),await ra(n,new Yi)}}else L(en,"Using default OfflineComponentProvider"),await ra(n,new BA(void 0));return n._offlineComponents}async function Rp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(en,"Using user provided OnlineComponentProvider"),await Ah(n,n._uninitializedComponentsProvider._online)):(L(en,"Using default OnlineComponentProvider"),await Ah(n,new qa))),n._onlineComponents}function qA(n){return Rp(n).then(t=>t.syncEngine)}async function Wa(n){const t=await Rp(n),e=t.eventManager;return e.onListen=RA.bind(null,t.syncEngine),e.onUnlisten=DA.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=PA.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=OA.bind(null,t.syncEngine),e}function WA(n,t,e={}){const r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,d){const f=new Cp({next:A=>{f.Nu(),a.enqueueAndForget(()=>_p(i,_));const b=A.docs.has(c);!b&&A.fromCache?d.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&A.fromCache&&u&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),_=new yp(lo(c.path),f,{includeMetadataChanges:!0,qa:!0});return gp(i,_)}(await Wa(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Pp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const wh=new Map;/**
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
 */const Np="firestore.googleapis.com",Ih=!0;class bh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Np,this.ssl=Ih}else this.host=t.host,this.ssl=t.ssl??Ih;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<IT)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}av("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pp(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Eo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XE;switch(r.type){case"firstParty":return new ev(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=wh.get(e);r&&(L("ComponentProvider","Removing Datastore"),wh.delete(e),r.terminate())}(this),Promise.resolve()}}function zA(n,t,e,r={}){n=vn(n,Eo);const s=br(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Td(`https://${c}`),Ad("Firestore",!0)),i.host!==Np&&i.host!==c&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!wn(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=At.MOCK_USER;else{d=bg(r.mockUserToken,n._app?.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new At(_)}n._authCredentials=new JE(new mf(d,f))}}/**
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
 */class Vn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Vn(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Ls(e,dt._jsonSchema))return new dt(t,r||null,new F(et.fromString(e.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:ht("string",dt._jsonSchemaVersion),referencePath:ht("string")};class Qe extends Vn{constructor(t,e,r){super(t,e,lo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new F(t))}withConverter(t){return new Qe(this.firestore,t,this._path)}}function KA(n,t,...e){if(n=Nt(n),gf("collection","path",t),n instanceof Eo){const r=et.fromString(t,...e);return Fu(r),new Qe(n,null,r)}{if(!(n instanceof dt||n instanceof Qe))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Fu(r),new Qe(n.firestore,null,r)}}function za(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=pc.newId()),gf("doc","path",t),n instanceof Eo){const r=et.fromString(t,...e);return xu(r),new dt(n,null,new F(r))}{if(!(n instanceof dt||n instanceof Qe))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return xu(r),new dt(n.firestore,n instanceof Qe?n.converter:null,new F(r))}}/**
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
 */const Sh="AsyncQueue";class Ch{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new cp(this,"async_queue_retry"),this._c=()=>{const r=na();r&&L(Sh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=na();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ge;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Nr(t))throw t;L(Sh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,we("INTERNAL UNHANDLED ERROR: ",Rh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Oc.createAndSchedule(this,t,e,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:Rh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Rh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
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
 */function Ph(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Rs extends Eo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ch,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ch(t),this._firestoreClient=void 0,await t}}}function GA(n,t){const e=typeof n=="object"?n:Sd(),r=typeof n=="string"?n:Hi,s=rc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wg("firestore");i&&zA(s,...i)}return s}function xc(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||QA(n),n._firestoreClient}function QA(n){const t=n._freezeSettings(),e=function(s,i,a,c){return new yv(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Pp(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new jA(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bt(vt.fromBase64String(t))}catch(e){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Bt(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ls(t,Bt._jsonSchema))return Bt.fromBase64String(t.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:ht("string",Bt._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class Fc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Uc{constructor(t){this._methodName=t}}/**
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
 */class oe{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oe._jsonSchemaVersion}}static fromJSON(t){if(Ls(t,oe._jsonSchema))return new oe(t.latitude,t.longitude)}}oe._jsonSchemaVersion="firestore/geoPoint/1.0",oe._jsonSchema={type:ht("string",oe._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ae{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ls(t,ae._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new ae(t.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ae._jsonSchemaVersion="firestore/vectorValue/1.0",ae._jsonSchema={type:ht("string",ae._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const YA=/^__.*__$/;class XA{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new On(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ms(t,this.data,e,this.fieldTransforms)}}function Dp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class $c{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new $c({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Xi(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Dp(this.Ac)&&YA.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class JA{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||go(t)}Cc(t,e,r,s=!1){return new $c({Ac:t,methodName:e,Dc:r,path:Et.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Op(n){const t=n._freezeSettings(),e=go(n._databaseId);return new JA(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ZA(n,t,e,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);Lp("Data must be an object, but it was:",a,r);const c=kp(r,a);let u,d;if(i.merge)u=new Qt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const _ of i.mergeFields){const A=ew(t,_,e);if(!a.contains(A))throw new V(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);rw(f,A)||f.push(A)}u=new Qt(f),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new XA(new $t(c),u,d)}class Bc extends Uc{_toFieldTransform(t){return new qv(t.path,new bs)}isEqual(t){return t instanceof Bc}}function tw(n,t,e,r=!1){return jc(e,n.Cc(r?4:3,t))}function jc(n,t){if(Vp(n=Nt(n)))return Lp("Unsupported field value:",t,n),kp(n,t);if(n instanceof Uc)return function(r,s){if(!Dp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=jc(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Bv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Ki(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ki(s.serializer,i)}}if(r instanceof oe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:Xf(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ae)return function(a,c){return{mapValue:{fields:{[bf]:{stringValue:Sf},[qi]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return vc(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${io(r)}`)}(n,t)}function kp(n,t){const e={};return Ef(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Nn(n,(r,s)=>{const i=jc(s,t.mc(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Vp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof oe||n instanceof Bt||n instanceof dt||n instanceof Uc||n instanceof ae)}function Lp(n,t,e){if(!Vp(e)||!_f(e)){const r=io(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ew(n,t,e){if((t=Nt(t))instanceof Fc)return t._internalPath;if(typeof t=="string")return Mp(n,t);throw Xi("Field path arguments must be of type string or ",n,!1,void 0,e)}const nw=new RegExp("[~\\*/\\[\\]]");function Mp(n,t,e){if(t.search(nw)>=0)throw Xi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fc(...t.split("."))._internalPath}catch{throw Xi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Xi(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function rw(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class xp{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class sw extends xp{data(){return super.data()}}function Hc(n,t){return typeof t=="string"?Mp(n,t):t instanceof Fc?t._internalPath:t._delegate._internalPath}/**
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
 */function iw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qc{}class Fp extends qc{}function ow(n,t,...e){let r=[];t instanceof qc&&r.push(t),r=r.concat(e),function(i){const a=i.filter(u=>u instanceof zc).length,c=i.filter(u=>u instanceof Wc).length;if(a>1||a>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Wc extends Fp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Wc(t,e,r)}_apply(t){const e=this._parse(t);return Up(t._query,e),new Vn(t.firestore,t.converter,Va(t._query,e))}_parse(t){const e=Op(t.firestore);return function(i,a,c,u,d,f,_){let A;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Dh(_,f);const O=[];for(const D of _)O.push(Nh(u,i,D));A={arrayValue:{values:O}}}else A=Nh(u,i,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Dh(_,f),A=tw(c,a,_,f==="in"||f==="not-in");return ut.create(d,f,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class zc extends qc{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zc(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Yt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Up(a,u),a=Va(a,u)}(t._query,e),new Vn(t.firestore,t.converter,Va(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kc extends Fp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Kc(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Is(i,a)}(t._query,this._field,this._direction);return new Vn(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Dr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function aw(n,t="asc"){const e=t,r=Hc("orderBy",n);return Kc._create(r,e)}function Nh(n,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vf(t)&&e.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!F.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zu(n,new F(r))}if(e instanceof dt)return zu(n,e._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${io(e)}.`)}function Dh(n,t){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Up(n,t){const e=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class cw{convertValue(t,e="none"){switch(Ze(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Nn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertVectorValue(t){const e=t.fields?.[qi].arrayValue?.values?.map(r=>ct(r.doubleValue));return new ae(e)}convertGeoPoint(t){return new oe(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=co(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ts(t));default:return null}}convertTimestamp(t){const e=Xe(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(rp(r),9688,{name:t});const s=new As(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(e)||we(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function lw(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class ls{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Tn extends xp{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Hc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Tn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tn._jsonSchema={type:ht("string",Tn._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class Ri extends Tn{data(t={}){return super.data(t)}}class lr{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ls(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ri(this._firestore,this._userDataWriter,r.key,r,new ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ls(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ls(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:uw(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=lr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=pc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function uw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
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
 */function Oh(n){n=vn(n,dt);const t=vn(n.firestore,Rs);return WA(xc(t),n._key).then(e=>Bp(t,n,e))}lr._jsonSchemaVersion="firestore/querySnapshot/1.0",lr._jsonSchema={type:ht("string",lr._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};class $p extends cw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function hw(n,t){const e=vn(n.firestore,Rs),r=za(n),s=lw(n.converter,t);return fw(e,[ZA(Op(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,_e.exists(!1))]).then(()=>r)}function dw(n,...t){n=Nt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ph(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ph(t[r])){const u=t[r];t[r]=u.next?.bind(u),t[r+1]=u.error?.bind(u),t[r+2]=u.complete?.bind(u)}let i,a,c;if(n instanceof dt)a=vn(n.firestore,Rs),c=lo(n._key.path),i={next:u=>{t[r]&&t[r](Bp(a,n,u))},error:t[r+1],complete:t[r+2]};else{const u=vn(n,Vn);a=vn(u.firestore,Rs),c=u._query;const d=new $p(a);i={next:f=>{t[r]&&t[r](new lr(a,d,u,f))},error:t[r+1],complete:t[r+2]},iw(n._query)}return function(d,f,_,A){const b=new Cp(A),O=new yp(f,b,_);return d.asyncQueue.enqueueAndForget(async()=>gp(await Wa(d),O)),()=>{b.Nu(),d.asyncQueue.enqueueAndForget(async()=>_p(await Wa(d),O))}}(xc(a),c,s,i)}function fw(n,t){return function(r,s){const i=new Ge;return r.asyncQueue.enqueueAndForget(async()=>kA(await qA(r),s,i)),i.promise}(xc(n),t)}function Bp(n,t,e){const r=e.docs.get(t._key),s=new $p(n);return new Tn(n,s,t._key,r,new ls(e.hasPendingWrites,e.fromCache),t.converter)}function pw(){return new Bc("serverTimestamp")}(function(t,e=!0){(function(s){Rr=s})(Sr),ur(new In("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Rs(new ZE(r.getProvider("auth-internal")),new nv(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ze(ku,Vu,t),ze(ku,Vu,"esm2020")})();var mw="firebase",gw="12.4.0";/**
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
 */ze(mw,gw,"app");const _w={apiKey:"AIzaSyBGdfSDf7VFsv9MtvncE80oOxCO-zhuLvc",authDomain:"comp1800-bby06.firebaseapp.com",projectId:"comp1800-bby06",appId:"1:819130304182:web:bbd25da24260a010a24817"},jp=bd(_w),Gc=QE(jp),Ka=GA(jp);async function yw(){await Fy(Gc),window.location.href="index.html"}function Hp(n){return Yd(Gc,n)}class Ew extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
      <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Event Planner</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item"><a class="nav-link" href="home.html">Home</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="profile.html">Profile</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="main.html">Chats</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="create.html">Create</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="join.html">Join</a></li>
            </ul>

            <div class="d-flex align-items-center gap-2 ms-lg-2">
              <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">
                <!-- populated by JS -->
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Floating Error Alert -->
      <div id="authAlert" class="alert alert-danger d-none mx-auto" role="alert" style="max-width: 420px;"></div>
    `}renderAuthControls(){const t=this.querySelector("#authControls"),e=this.querySelector("#authAlert");t.innerHTML='<div class="btn btn-outline-dark" style="visibility: hidden; min-width: 80px;">Log out</div>',Yd(Gc,r=>{r?(t.innerHTML='<button class="btn btn-outline-dark" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>',t.querySelector("#signOutBtn")?.addEventListener("click",yw)):t.innerHTML='<a class="btn btn-outline-dark" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>',this.querySelectorAll(".protected-link a").forEach(i=>{i.addEventListener("click",a=>{r||(a.preventDefault(),e&&(e.innerHTML=`Cannot access "<strong>${i.textContent}</strong>" without logging in.`,e.classList.remove("d-none"),e.classList.add("show"),setTimeout(()=>{e.classList.remove("show"),e.classList.add("d-none")},5e3)))})})})}}customElements.define("site-navbar",Ew);var Rt="top",Lt="bottom",Mt="right",Pt="left",vo="auto",kr=[Rt,Lt,Mt,Pt],Rn="start",yr="end",qp="clippingParents",Qc="viewport",Zn="popper",Wp="reference",Ga=kr.reduce(function(n,t){return n.concat([t+"-"+Rn,t+"-"+yr])},[]),Yc=[].concat(kr,[vo]).reduce(function(n,t){return n.concat([t,t+"-"+Rn,t+"-"+yr])},[]),zp="beforeRead",Kp="read",Gp="afterRead",Qp="beforeMain",Yp="main",Xp="afterMain",Jp="beforeWrite",Zp="write",tm="afterWrite",em=[zp,Kp,Gp,Qp,Yp,Xp,Jp,Zp,tm];function he(n){return n?(n.nodeName||"").toLowerCase():null}function xt(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function Pn(n){var t=xt(n).Element;return n instanceof t||n instanceof Element}function jt(n){var t=xt(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function Xc(n){if(typeof ShadowRoot>"u")return!1;var t=xt(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function vw(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},s=t.attributes[e]||{},i=t.elements[e];!jt(i)||!he(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(a){var c=s[a];c===!1?i.removeAttribute(a):i.setAttribute(a,c===!0?"":c)}))})}function Tw(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:e[r]),c=a.reduce(function(u,d){return u[d]="",u},{});!jt(s)||!he(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(u){s.removeAttribute(u)}))})}}const Jc={name:"applyStyles",enabled:!0,phase:"write",fn:vw,effect:Tw,requires:["computeStyles"]};function ce(n){return n.split("-")[0]}var An=Math.max,Ji=Math.min,Er=Math.round;function Qa(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function nm(){return!/^((?!chrome|android).)*safari/i.test(Qa())}function vr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var r=n.getBoundingClientRect(),s=1,i=1;t&&jt(n)&&(s=n.offsetWidth>0&&Er(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&Er(r.height)/n.offsetHeight||1);var a=Pn(n)?xt(n):window,c=a.visualViewport,u=!nm()&&e,d=(r.left+(u&&c?c.offsetLeft:0))/s,f=(r.top+(u&&c?c.offsetTop:0))/i,_=r.width/s,A=r.height/i;return{width:_,height:A,top:f,right:d+_,bottom:f+A,left:d,x:d,y:f}}function Zc(n){var t=vr(n),e=n.offsetWidth,r=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:r}}function rm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&Xc(e)){var r=t;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function be(n){return xt(n).getComputedStyle(n)}function Aw(n){return["table","td","th"].indexOf(he(n))>=0}function on(n){return((Pn(n)?n.ownerDocument:n.document)||window.document).documentElement}function To(n){return he(n)==="html"?n:n.assignedSlot||n.parentNode||(Xc(n)?n.host:null)||on(n)}function kh(n){return!jt(n)||be(n).position==="fixed"?null:n.offsetParent}function ww(n){var t=/firefox/i.test(Qa()),e=/Trident/i.test(Qa());if(e&&jt(n)){var r=be(n);if(r.position==="fixed")return null}var s=To(n);for(Xc(s)&&(s=s.host);jt(s)&&["html","body"].indexOf(he(s))<0;){var i=be(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function $s(n){for(var t=xt(n),e=kh(n);e&&Aw(e)&&be(e).position==="static";)e=kh(e);return e&&(he(e)==="html"||he(e)==="body"&&be(e).position==="static")?t:e||ww(n)||t}function tl(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function gs(n,t,e){return An(n,Ji(t,e))}function Iw(n,t,e){var r=gs(n,t,e);return r>e?e:r}function sm(){return{top:0,right:0,bottom:0,left:0}}function im(n){return Object.assign({},sm(),n)}function om(n,t){return t.reduce(function(e,r){return e[r]=n,e},{})}var bw=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,im(typeof t!="number"?t:om(t,kr))};function Sw(n){var t,e=n.state,r=n.name,s=n.options,i=e.elements.arrow,a=e.modifiersData.popperOffsets,c=ce(e.placement),u=tl(c),d=[Pt,Mt].indexOf(c)>=0,f=d?"height":"width";if(!(!i||!a)){var _=bw(s.padding,e),A=Zc(i),b=u==="y"?Rt:Pt,O=u==="y"?Lt:Mt,D=e.rects.reference[f]+e.rects.reference[u]-a[u]-e.rects.popper[f],P=a[u]-e.rects.reference[u],M=$s(i),x=M?u==="y"?M.clientHeight||0:M.clientWidth||0:0,$=D/2-P/2,B=_[b],K=x-A[f]-_[O],H=x/2-A[f]/2+$,v=gs(B,H,K),m=u;e.modifiersData[r]=(t={},t[m]=v,t.centerOffset=v-H,t)}}function Cw(n){var t=n.state,e=n.options,r=e.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||rm(t.elements.popper,s)&&(t.elements.arrow=s))}const am={name:"arrow",enabled:!0,phase:"main",fn:Sw,effect:Cw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Tr(n){return n.split("-")[1]}var Rw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Pw(n,t){var e=n.x,r=n.y,s=t.devicePixelRatio||1;return{x:Er(e*s)/s||0,y:Er(r*s)/s||0}}function Vh(n){var t,e=n.popper,r=n.popperRect,s=n.placement,i=n.variation,a=n.offsets,c=n.position,u=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,_=n.isFixed,A=a.x,b=A===void 0?0:A,O=a.y,D=O===void 0?0:O,P=typeof f=="function"?f({x:b,y:D}):{x:b,y:D};b=P.x,D=P.y;var M=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),$=Pt,B=Rt,K=window;if(d){var H=$s(e),v="clientHeight",m="clientWidth";if(H===xt(e)&&(H=on(e),be(H).position!=="static"&&c==="absolute"&&(v="scrollHeight",m="scrollWidth")),H=H,s===Rt||(s===Pt||s===Mt)&&i===yr){B=Lt;var y=_&&H===K&&K.visualViewport?K.visualViewport.height:H[v];D-=y-r.height,D*=u?1:-1}if(s===Pt||(s===Rt||s===Lt)&&i===yr){$=Mt;var T=_&&H===K&&K.visualViewport?K.visualViewport.width:H[m];b-=T-r.width,b*=u?1:-1}}var E=Object.assign({position:c},d&&Rw),w=f===!0?Pw({x:b,y:D},xt(e)):{x:b,y:D};if(b=w.x,D=w.y,u){var g;return Object.assign({},E,(g={},g[B]=x?"0":"",g[$]=M?"0":"",g.transform=(K.devicePixelRatio||1)<=1?"translate("+b+"px, "+D+"px)":"translate3d("+b+"px, "+D+"px, 0)",g))}return Object.assign({},E,(t={},t[B]=x?D+"px":"",t[$]=M?b+"px":"",t.transform="",t))}function Nw(n){var t=n.state,e=n.options,r=e.gpuAcceleration,s=r===void 0?!0:r,i=e.adaptive,a=i===void 0?!0:i,c=e.roundOffsets,u=c===void 0?!0:c,d={placement:ce(t.placement),variation:Tr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vh(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vh(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const el={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nw,data:{}};var di={passive:!0};function Dw(n){var t=n.state,e=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,a=r.resize,c=a===void 0?!0:a,u=xt(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(f){f.addEventListener("scroll",e.update,di)}),c&&u.addEventListener("resize",e.update,di),function(){i&&d.forEach(function(f){f.removeEventListener("scroll",e.update,di)}),c&&u.removeEventListener("resize",e.update,di)}}const nl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Dw,data:{}};var Ow={left:"right",right:"left",bottom:"top",top:"bottom"};function Pi(n){return n.replace(/left|right|bottom|top/g,function(t){return Ow[t]})}var kw={start:"end",end:"start"};function Lh(n){return n.replace(/start|end/g,function(t){return kw[t]})}function rl(n){var t=xt(n),e=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:e,scrollTop:r}}function sl(n){return vr(on(n)).left+rl(n).scrollLeft}function Vw(n,t){var e=xt(n),r=on(n),s=e.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;var d=nm();(d||!d&&t==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:i,height:a,x:c+sl(n),y:u}}function Lw(n){var t,e=on(n),r=rl(n),s=(t=n.ownerDocument)==null?void 0:t.body,i=An(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=An(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+sl(n),u=-r.scrollTop;return be(s||e).direction==="rtl"&&(c+=An(e.clientWidth,s?s.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}function il(n){var t=be(n),e=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+r)}function cm(n){return["html","body","#document"].indexOf(he(n))>=0?n.ownerDocument.body:jt(n)&&il(n)?n:cm(To(n))}function _s(n,t){var e;t===void 0&&(t=[]);var r=cm(n),s=r===((e=n.ownerDocument)==null?void 0:e.body),i=xt(r),a=s?[i].concat(i.visualViewport||[],il(r)?r:[]):r,c=t.concat(a);return s?c:c.concat(_s(To(a)))}function Ya(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Mw(n,t){var e=vr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Mh(n,t,e){return t===Qc?Ya(Vw(n,e)):Pn(t)?Mw(t,e):Ya(Lw(on(n)))}function xw(n){var t=_s(To(n)),e=["absolute","fixed"].indexOf(be(n).position)>=0,r=e&&jt(n)?$s(n):n;return Pn(r)?t.filter(function(s){return Pn(s)&&rm(s,r)&&he(s)!=="body"}):[]}function Fw(n,t,e,r){var s=t==="clippingParents"?xw(n):[].concat(t),i=[].concat(s,[e]),a=i[0],c=i.reduce(function(u,d){var f=Mh(n,d,r);return u.top=An(f.top,u.top),u.right=Ji(f.right,u.right),u.bottom=Ji(f.bottom,u.bottom),u.left=An(f.left,u.left),u},Mh(n,a,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function lm(n){var t=n.reference,e=n.element,r=n.placement,s=r?ce(r):null,i=r?Tr(r):null,a=t.x+t.width/2-e.width/2,c=t.y+t.height/2-e.height/2,u;switch(s){case Rt:u={x:a,y:t.y-e.height};break;case Lt:u={x:a,y:t.y+t.height};break;case Mt:u={x:t.x+t.width,y:c};break;case Pt:u={x:t.x-e.width,y:c};break;default:u={x:t.x,y:t.y}}var d=s?tl(s):null;if(d!=null){var f=d==="y"?"height":"width";switch(i){case Rn:u[d]=u[d]-(t[f]/2-e[f]/2);break;case yr:u[d]=u[d]+(t[f]/2-e[f]/2);break}}return u}function Ar(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=r===void 0?n.placement:r,i=e.strategy,a=i===void 0?n.strategy:i,c=e.boundary,u=c===void 0?qp:c,d=e.rootBoundary,f=d===void 0?Qc:d,_=e.elementContext,A=_===void 0?Zn:_,b=e.altBoundary,O=b===void 0?!1:b,D=e.padding,P=D===void 0?0:D,M=im(typeof P!="number"?P:om(P,kr)),x=A===Zn?Wp:Zn,$=n.rects.popper,B=n.elements[O?x:A],K=Fw(Pn(B)?B:B.contextElement||on(n.elements.popper),u,f,a),H=vr(n.elements.reference),v=lm({reference:H,element:$,placement:s}),m=Ya(Object.assign({},$,v)),y=A===Zn?m:H,T={top:K.top-y.top+M.top,bottom:y.bottom-K.bottom+M.bottom,left:K.left-y.left+M.left,right:y.right-K.right+M.right},E=n.modifiersData.offset;if(A===Zn&&E){var w=E[s];Object.keys(T).forEach(function(g){var ot=[Mt,Lt].indexOf(g)>=0?1:-1,bt=[Rt,Lt].indexOf(g)>=0?"y":"x";T[g]+=w[bt]*ot})}return T}function Uw(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=e.boundary,i=e.rootBoundary,a=e.padding,c=e.flipVariations,u=e.allowedAutoPlacements,d=u===void 0?Yc:u,f=Tr(r),_=f?c?Ga:Ga.filter(function(O){return Tr(O)===f}):kr,A=_.filter(function(O){return d.indexOf(O)>=0});A.length===0&&(A=_);var b=A.reduce(function(O,D){return O[D]=Ar(n,{placement:D,boundary:s,rootBoundary:i,padding:a})[ce(D)],O},{});return Object.keys(b).sort(function(O,D){return b[O]-b[D]})}function $w(n){if(ce(n)===vo)return[];var t=Pi(n);return[Lh(n),t,Lh(t)]}function Bw(n){var t=n.state,e=n.options,r=n.name;if(!t.modifiersData[r]._skip){for(var s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!0:a,u=e.fallbackPlacements,d=e.padding,f=e.boundary,_=e.rootBoundary,A=e.altBoundary,b=e.flipVariations,O=b===void 0?!0:b,D=e.allowedAutoPlacements,P=t.options.placement,M=ce(P),x=M===P,$=u||(x||!O?[Pi(P)]:$w(P)),B=[P].concat($).reduce(function(zt,Ut){return zt.concat(ce(Ut)===vo?Uw(t,{placement:Ut,boundary:f,rootBoundary:_,padding:d,flipVariations:O,allowedAutoPlacements:D}):Ut)},[]),K=t.rects.reference,H=t.rects.popper,v=new Map,m=!0,y=B[0],T=0;T<B.length;T++){var E=B[T],w=ce(E),g=Tr(E)===Rn,ot=[Rt,Lt].indexOf(w)>=0,bt=ot?"width":"height",St=Ar(t,{placement:E,boundary:f,rootBoundary:_,altBoundary:A,padding:d}),kt=ot?g?Mt:Pt:g?Lt:Rt;K[bt]>H[bt]&&(kt=Pi(kt));var de=Pi(kt),Ft=[];if(i&&Ft.push(St[w]<=0),c&&Ft.push(St[kt]<=0,St[de]<=0),Ft.every(function(zt){return zt})){y=E,m=!1;break}v.set(E,Ft)}if(m)for(var xn=O?3:1,Fn=function(Ut){var fe=B.find(function(Pe){var Kt=v.get(Pe);if(Kt)return Kt.slice(0,Ut).every(function(Un){return Un})});if(fe)return y=fe,"break"},Re=xn;Re>0;Re--){var ln=Fn(Re);if(ln==="break")break}t.placement!==y&&(t.modifiersData[r]._skip=!0,t.placement=y,t.reset=!0)}}const um={name:"flip",enabled:!0,phase:"main",fn:Bw,requiresIfExists:["offset"],data:{_skip:!1}};function xh(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Fh(n){return[Rt,Mt,Lt,Pt].some(function(t){return n[t]>=0})}function jw(n){var t=n.state,e=n.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ar(t,{elementContext:"reference"}),c=Ar(t,{altBoundary:!0}),u=xh(a,r),d=xh(c,s,i),f=Fh(u),_=Fh(d);t.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:_},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":_})}const hm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:jw};function Hw(n,t,e){var r=ce(n),s=[Pt,Rt].indexOf(r)>=0?-1:1,i=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,a=i[0],c=i[1];return a=a||0,c=(c||0)*s,[Pt,Mt].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}function qw(n){var t=n.state,e=n.options,r=n.name,s=e.offset,i=s===void 0?[0,0]:s,a=Yc.reduce(function(f,_){return f[_]=Hw(_,t.rects,i),f},{}),c=a[t.placement],u=c.x,d=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=a}const dm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qw};function Ww(n){var t=n.state,e=n.name;t.modifiersData[e]=lm({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const ol={name:"popperOffsets",enabled:!0,phase:"read",fn:Ww,data:{}};function zw(n){return n==="x"?"y":"x"}function Kw(n){var t=n.state,e=n.options,r=n.name,s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!1:a,u=e.boundary,d=e.rootBoundary,f=e.altBoundary,_=e.padding,A=e.tether,b=A===void 0?!0:A,O=e.tetherOffset,D=O===void 0?0:O,P=Ar(t,{boundary:u,rootBoundary:d,padding:_,altBoundary:f}),M=ce(t.placement),x=Tr(t.placement),$=!x,B=tl(M),K=zw(B),H=t.modifiersData.popperOffsets,v=t.rects.reference,m=t.rects.popper,y=typeof D=="function"?D(Object.assign({},t.rects,{placement:t.placement})):D,T=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,w={x:0,y:0};if(H){if(i){var g,ot=B==="y"?Rt:Pt,bt=B==="y"?Lt:Mt,St=B==="y"?"height":"width",kt=H[B],de=kt+P[ot],Ft=kt-P[bt],xn=b?-m[St]/2:0,Fn=x===Rn?v[St]:m[St],Re=x===Rn?-m[St]:-v[St],ln=t.elements.arrow,zt=b&&ln?Zc(ln):{width:0,height:0},Ut=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:sm(),fe=Ut[ot],Pe=Ut[bt],Kt=gs(0,v[St],zt[St]),Un=$?v[St]/2-xn-Kt-fe-T.mainAxis:Fn-Kt-fe-T.mainAxis,Ro=$?-v[St]/2+xn+Kt+Pe+T.mainAxis:Re+Kt+Pe+T.mainAxis,xr=t.elements.arrow&&$s(t.elements.arrow),Ws=xr?B==="y"?xr.clientTop||0:xr.clientLeft||0:0,$n=(g=E?.[B])!=null?g:0,zs=kt+Un-$n-Ws,Po=kt+Ro-$n,Bn=gs(b?Ji(de,zs):de,kt,b?An(Ft,Po):Ft);H[B]=Bn,w[B]=Bn-kt}if(c){var jn,Ks=B==="x"?Rt:Pt,mt=B==="x"?Lt:Mt,st=H[K],pe=K==="y"?"height":"width",Gs=st+P[Ks],Fr=st-P[mt],Ur=[Rt,Pt].indexOf(M)!==-1,Ne=(jn=E?.[K])!=null?jn:0,$r=Ur?Gs:st-v[pe]-m[pe]-Ne+T.altAxis,Br=Ur?st+v[pe]+m[pe]-Ne-T.altAxis:Fr,Hn=b&&Ur?Iw($r,st,Br):gs(b?$r:Gs,st,b?Br:Fr);H[K]=Hn,w[K]=Hn-st}t.modifiersData[r]=w}}const fm={name:"preventOverflow",enabled:!0,phase:"main",fn:Kw,requiresIfExists:["offset"]};function Gw(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Qw(n){return n===xt(n)||!jt(n)?rl(n):Gw(n)}function Yw(n){var t=n.getBoundingClientRect(),e=Er(t.width)/n.offsetWidth||1,r=Er(t.height)/n.offsetHeight||1;return e!==1||r!==1}function Xw(n,t,e){e===void 0&&(e=!1);var r=jt(t),s=jt(t)&&Yw(t),i=on(t),a=vr(n,s,e),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!e)&&((he(t)!=="body"||il(i))&&(c=Qw(t)),jt(t)?(u=vr(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=sl(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function Jw(n){var t=new Map,e=new Set,r=[];n.forEach(function(i){t.set(i.name,i)});function s(i){e.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(c){if(!e.has(c)){var u=t.get(c);u&&s(u)}}),r.push(i)}return n.forEach(function(i){e.has(i.name)||s(i)}),r}function Zw(n){var t=Jw(n);return em.reduce(function(e,r){return e.concat(t.filter(function(s){return s.phase===r}))},[])}function tI(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function eI(n){var t=n.reduce(function(e,r){var s=e[r.name];return e[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,e},{});return Object.keys(t).map(function(e){return t[e]})}var Uh={placement:"bottom",modifiers:[],strategy:"absolute"};function $h(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Ao(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,r=e===void 0?[]:e,s=t.defaultOptions,i=s===void 0?Uh:s;return function(c,u,d){d===void 0&&(d=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Uh,i),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},_=[],A=!1,b={state:f,setOptions:function(M){var x=typeof M=="function"?M(f.options):M;D(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:Pn(c)?_s(c):c.contextElement?_s(c.contextElement):[],popper:_s(u)};var $=Zw(eI([].concat(r,f.options.modifiers)));return f.orderedModifiers=$.filter(function(B){return B.enabled}),O(),b.update()},forceUpdate:function(){if(!A){var M=f.elements,x=M.reference,$=M.popper;if($h(x,$)){f.rects={reference:Xw(x,$s($),f.options.strategy==="fixed"),popper:Zc($)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(T){return f.modifiersData[T.name]=Object.assign({},T.data)});for(var B=0;B<f.orderedModifiers.length;B++){if(f.reset===!0){f.reset=!1,B=-1;continue}var K=f.orderedModifiers[B],H=K.fn,v=K.options,m=v===void 0?{}:v,y=K.name;typeof H=="function"&&(f=H({state:f,options:m,name:y,instance:b})||f)}}}},update:tI(function(){return new Promise(function(P){b.forceUpdate(),P(f)})}),destroy:function(){D(),A=!0}};if(!$h(c,u))return b;b.setOptions(d).then(function(P){!A&&d.onFirstUpdate&&d.onFirstUpdate(P)});function O(){f.orderedModifiers.forEach(function(P){var M=P.name,x=P.options,$=x===void 0?{}:x,B=P.effect;if(typeof B=="function"){var K=B({state:f,name:M,instance:b,options:$}),H=function(){};_.push(K||H)}})}function D(){_.forEach(function(P){return P()}),_=[]}return b}}var nI=Ao(),rI=[nl,ol,el,Jc],sI=Ao({defaultModifiers:rI}),iI=[nl,ol,el,Jc,dm,um,fm,am,hm],al=Ao({defaultModifiers:iI});const pm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Xp,afterRead:Gp,afterWrite:tm,applyStyles:Jc,arrow:am,auto:vo,basePlacements:kr,beforeMain:Qp,beforeRead:zp,beforeWrite:Jp,bottom:Lt,clippingParents:qp,computeStyles:el,createPopper:al,createPopperBase:nI,createPopperLite:sI,detectOverflow:Ar,end:yr,eventListeners:nl,flip:um,hide:hm,left:Pt,main:Yp,modifierPhases:em,offset:dm,placements:Yc,popper:Zn,popperGenerator:Ao,popperOffsets:ol,preventOverflow:fm,read:Kp,reference:Wp,right:Mt,start:Rn,top:Rt,variationPlacements:Ga,viewport:Qc,write:Zp},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Fe=new Map,sa={set(n,t,e){Fe.has(n)||Fe.set(n,new Map);const r=Fe.get(n);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,e)},get(n,t){return Fe.has(n)&&Fe.get(n).get(t)||null},remove(n,t){if(!Fe.has(n))return;const e=Fe.get(n);e.delete(t),e.size===0&&Fe.delete(n)}},oI=1e6,aI=1e3,Xa="transitionend",mm=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),cI=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),lI=n=>{do n+=Math.floor(Math.random()*oI);while(document.getElementById(n));return n},uI=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const r=Number.parseFloat(t),s=Number.parseFloat(e);return!r&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*aI)},gm=n=>{n.dispatchEvent(new Event(Xa))},ye=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),nn=n=>ye(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(mm(n)):null,Vr=n=>{if(!ye(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const r=n.closest("summary");if(r&&r.parentNode!==e||r===null)return!1}return t},rn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",_m=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?_m(n.parentNode):null},Zi=()=>{},Bs=n=>{n.offsetHeight},ym=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,ia=[],hI=n=>{document.readyState==="loading"?(ia.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of ia)t()}),ia.push(n)):n()},Ht=()=>document.documentElement.dir==="rtl",Wt=n=>{hI(()=>{const t=ym();if(t){const e=n.NAME,r=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=r,n.jQueryInterface)}})},Ot=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Em=(n,t,e=!0)=>{if(!e){Ot(n);return}const s=uI(t)+5;let i=!1;const a=({target:c})=>{c===t&&(i=!0,t.removeEventListener(Xa,a),Ot(n))};t.addEventListener(Xa,a),setTimeout(()=>{i||gm(t)},s)},cl=(n,t,e,r)=>{const s=n.length;let i=n.indexOf(t);return i===-1?!e&&r?n[s-1]:n[0]:(i+=e?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},dI=/[^.]*(?=\..*)\.|.*/,fI=/\..*/,pI=/::\d+$/,oa={};let Bh=1;const vm={mouseenter:"mouseover",mouseleave:"mouseout"},mI=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Tm(n,t){return t&&`${t}::${Bh++}`||n.uidEvent||Bh++}function Am(n){const t=Tm(n);return n.uidEvent=t,oa[t]=oa[t]||{},oa[t]}function gI(n,t){return function e(r){return ll(r,{delegateTarget:n}),e.oneOff&&N.off(n,r.type,t),t.apply(n,[r])}}function _I(n,t,e){return function r(s){const i=n.querySelectorAll(t);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const c of i)if(c===a)return ll(s,{delegateTarget:a}),r.oneOff&&N.off(n,s.type,t,e),e.apply(a,[s])}}function wm(n,t,e=null){return Object.values(n).find(r=>r.callable===t&&r.delegationSelector===e)}function Im(n,t,e){const r=typeof t=="string",s=r?e:t||e;let i=bm(n);return mI.has(i)||(i=n),[r,s,i]}function jh(n,t,e,r,s){if(typeof t!="string"||!n)return;let[i,a,c]=Im(t,e,r);t in vm&&(a=(O=>function(D){if(!D.relatedTarget||D.relatedTarget!==D.delegateTarget&&!D.delegateTarget.contains(D.relatedTarget))return O.call(this,D)})(a));const u=Am(n),d=u[c]||(u[c]={}),f=wm(d,a,i?e:null);if(f){f.oneOff=f.oneOff&&s;return}const _=Tm(a,t.replace(dI,"")),A=i?_I(n,e,a):gI(n,a);A.delegationSelector=i?e:null,A.callable=a,A.oneOff=s,A.uidEvent=_,d[_]=A,n.addEventListener(c,A,i)}function Ja(n,t,e,r,s){const i=wm(t[e],r,s);i&&(n.removeEventListener(e,i,!!s),delete t[e][i.uidEvent])}function yI(n,t,e,r){const s=t[e]||{};for(const[i,a]of Object.entries(s))i.includes(r)&&Ja(n,t,e,a.callable,a.delegationSelector)}function bm(n){return n=n.replace(fI,""),vm[n]||n}const N={on(n,t,e,r){jh(n,t,e,r,!1)},one(n,t,e,r){jh(n,t,e,r,!0)},off(n,t,e,r){if(typeof t!="string"||!n)return;const[s,i,a]=Im(t,e,r),c=a!==t,u=Am(n),d=u[a]||{},f=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(d).length)return;Ja(n,u,a,i,s?e:null);return}if(f)for(const _ of Object.keys(u))yI(n,u,_,t.slice(1));for(const[_,A]of Object.entries(d)){const b=_.replace(pI,"");(!c||t.includes(b))&&Ja(n,u,a,A.callable,A.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const r=ym(),s=bm(t),i=t!==s;let a=null,c=!0,u=!0,d=!1;i&&r&&(a=r.Event(t,e),r(n).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented());const f=ll(new Event(t,{bubbles:c,cancelable:!0}),e);return d&&f.preventDefault(),u&&n.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function ll(n,t={}){for(const[e,r]of Object.entries(t))try{n[e]=r}catch{Object.defineProperty(n,e,{configurable:!0,get(){return r}})}return n}function Hh(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function aa(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Ee={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${aa(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${aa(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of e){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=Hh(n.dataset[r])}return t},getDataAttribute(n,t){return Hh(n.getAttribute(`data-bs-${aa(t)}`))}};class js{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=ye(e)?Ee.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...ye(e)?Ee.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,s]of Object.entries(e)){const i=t[r],a=ye(i)?"element":cI(i);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}}}const EI="5.3.8";class Xt extends js{constructor(t,e){super(),t=nn(t),t&&(this._element=t,this._config=this._getConfig(e),sa.set(this._element,this.constructor.DATA_KEY,this))}dispose(){sa.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){Em(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return sa.get(nn(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return EI}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const ca=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>mm(e)).join(","):null},U={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let r=n.parentNode.closest(t);for(;r;)e.push(r),r=r.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!rn(e)&&Vr(e))},getSelectorFromElement(n){const t=ca(n);return t&&U.findOne(t)?t:null},getElementFromSelector(n){const t=ca(n);return t?U.findOne(t):null},getMultipleElementsFromSelector(n){const t=ca(n);return t?U.find(t):[]}},wo=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;N.on(document,e,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),rn(this))return;const i=U.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[t]()})},vI="alert",TI="bs.alert",Sm=`.${TI}`,AI=`close${Sm}`,wI=`closed${Sm}`,II="fade",bI="show";class Io extends Xt{static get NAME(){return vI}close(){if(N.trigger(this._element,AI).defaultPrevented)return;this._element.classList.remove(bI);const e=this._element.classList.contains(II);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),N.trigger(this._element,wI),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Io.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}wo(Io,"close");Wt(Io);const SI="button",CI="bs.button",RI=`.${CI}`,PI=".data-api",NI="active",qh='[data-bs-toggle="button"]',DI=`click${RI}${PI}`;class bo extends Xt{static get NAME(){return SI}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(NI))}static jQueryInterface(t){return this.each(function(){const e=bo.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}N.on(document,DI,qh,n=>{n.preventDefault();const t=n.target.closest(qh);bo.getOrCreateInstance(t).toggle()});Wt(bo);const OI="swipe",Lr=".bs.swipe",kI=`touchstart${Lr}`,VI=`touchmove${Lr}`,LI=`touchend${Lr}`,MI=`pointerdown${Lr}`,xI=`pointerup${Lr}`,FI="touch",UI="pen",$I="pointer-event",BI=40,jI={endCallback:null,leftCallback:null,rightCallback:null},HI={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class to extends js{constructor(t,e){super(),this._element=t,!(!t||!to.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return jI}static get DefaultType(){return HI}static get NAME(){return OI}dispose(){N.off(this._element,Lr)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),Ot(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=BI)return;const e=t/this._deltaX;this._deltaX=0,e&&Ot(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,MI,t=>this._start(t)),N.on(this._element,xI,t=>this._end(t)),this._element.classList.add($I)):(N.on(this._element,kI,t=>this._start(t)),N.on(this._element,VI,t=>this._move(t)),N.on(this._element,LI,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===UI||t.pointerType===FI)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qI="carousel",WI="bs.carousel",an=`.${WI}`,Cm=".data-api",zI="ArrowLeft",KI="ArrowRight",GI=500,rs="next",Kn="prev",tr="left",Ni="right",QI=`slide${an}`,la=`slid${an}`,YI=`keydown${an}`,XI=`mouseenter${an}`,JI=`mouseleave${an}`,ZI=`dragstart${an}`,tb=`load${an}${Cm}`,eb=`click${an}${Cm}`,Rm="carousel",fi="active",nb="slide",rb="carousel-item-end",sb="carousel-item-start",ib="carousel-item-next",ob="carousel-item-prev",Pm=".active",Nm=".carousel-item",ab=Pm+Nm,cb=".carousel-item img",lb=".carousel-indicators",ub="[data-bs-slide], [data-bs-slide-to]",hb='[data-bs-ride="carousel"]',db={[zI]:Ni,[KI]:tr},fb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},pb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Hs extends Xt{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(lb,this._element),this._addEventListeners(),this._config.ride===Rm&&this.cycle()}static get Default(){return fb}static get DefaultType(){return pb}static get NAME(){return qI}next(){this._slide(rs)}nextWhenVisible(){!document.hidden&&Vr(this._element)&&this.next()}prev(){this._slide(Kn)}pause(){this._isSliding&&gm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){N.one(this._element,la,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){N.one(this._element,la,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?rs:Kn;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,YI,t=>this._keydown(t)),this._config.pause==="hover"&&(N.on(this._element,XI,()=>this.pause()),N.on(this._element,JI,()=>this._maybeEnableCycle())),this._config.touch&&to.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of U.find(cb,this._element))N.on(r,ZI,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(tr)),rightCallback:()=>this._slide(this._directionToOrder(Ni)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),GI+this._config.interval))}};this._swipeHelper=new to(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=db[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne(Pm,this._indicatorsElement);e.classList.remove(fi),e.removeAttribute("aria-current");const r=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(fi),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),s=t===rs,i=e||cl(this._getItems(),r,s,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),c=b=>N.trigger(this._element,b,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(c(QI).defaultPrevented||!r||!i)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const f=s?sb:rb,_=s?ib:ob;i.classList.add(_),Bs(i),r.classList.add(f),i.classList.add(f);const A=()=>{i.classList.remove(f,_),i.classList.add(fi),r.classList.remove(fi,_,f),this._isSliding=!1,c(la)};this._queueCallback(A,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(nb)}_getActive(){return U.findOne(ab,this._element)}_getItems(){return U.find(Nm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ht()?t===tr?Kn:rs:t===tr?rs:Kn}_orderToDirection(t){return Ht()?t===Kn?tr:Ni:t===Kn?Ni:tr}static jQueryInterface(t){return this.each(function(){const e=Hs.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,eb,ub,function(n){const t=U.getElementFromSelector(this);if(!t||!t.classList.contains(Rm))return;n.preventDefault();const e=Hs.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){e.to(r),e._maybeEnableCycle();return}if(Ee.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});N.on(window,tb,()=>{const n=U.find(hb);for(const t of n)Hs.getOrCreateInstance(t)});Wt(Hs);const mb="collapse",gb="bs.collapse",qs=`.${gb}`,_b=".data-api",yb=`show${qs}`,Eb=`shown${qs}`,vb=`hide${qs}`,Tb=`hidden${qs}`,Ab=`click${qs}${_b}`,ua="show",rr="collapse",pi="collapsing",wb="collapsed",Ib=`:scope .${rr} .${rr}`,bb="collapse-horizontal",Sb="width",Cb="height",Rb=".collapse.show, .collapse.collapsing",Za='[data-bs-toggle="collapse"]',Pb={parent:null,toggle:!0},Nb={parent:"(null|element)",toggle:"boolean"};class Ps extends Xt{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=U.find(Za);for(const s of r){const i=U.getSelectorFromElement(s),a=U.find(i).filter(c=>c===this._element);i!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Pb}static get DefaultType(){return Nb}static get NAME(){return mb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Rb).filter(c=>c!==this._element).map(c=>Ps.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||N.trigger(this._element,yb).defaultPrevented)return;for(const c of t)c.hide();const r=this._getDimension();this._element.classList.remove(rr),this._element.classList.add(pi),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(rr,ua),this._element.style[r]="",N.trigger(this._element,Eb)},a=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,vb).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Bs(this._element),this._element.classList.add(pi),this._element.classList.remove(rr,ua);for(const s of this._triggerArray){const i=U.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(pi),this._element.classList.add(rr),N.trigger(this._element,Tb)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(ua)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=nn(t.parent),t}_getDimension(){return this._element.classList.contains(bb)?Sb:Cb}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Za);for(const e of t){const r=U.getElementFromSelector(e);r&&this._addAriaAndCollapsedClass([e],this._isShown(r))}}_getFirstLevelChildren(t){const e=U.find(Ib,this._config.parent);return U.find(t,this._config.parent).filter(r=>!e.includes(r))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle(wb,!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=Ps.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}N.on(document,Ab,Za,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of U.getMultipleElementsFromSelector(this))Ps.getOrCreateInstance(t,{toggle:!1}).toggle()});Wt(Ps);const Wh="dropdown",Db="bs.dropdown",Ln=`.${Db}`,ul=".data-api",Ob="Escape",zh="Tab",kb="ArrowUp",Kh="ArrowDown",Vb=2,Lb=`hide${Ln}`,Mb=`hidden${Ln}`,xb=`show${Ln}`,Fb=`shown${Ln}`,Dm=`click${Ln}${ul}`,Om=`keydown${Ln}${ul}`,Ub=`keyup${Ln}${ul}`,er="show",$b="dropup",Bb="dropend",jb="dropstart",Hb="dropup-center",qb="dropdown-center",_n='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Wb=`${_n}.${er}`,Di=".dropdown-menu",zb=".navbar",Kb=".navbar-nav",Gb=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qb=Ht()?"top-end":"top-start",Yb=Ht()?"top-start":"top-end",Xb=Ht()?"bottom-end":"bottom-start",Jb=Ht()?"bottom-start":"bottom-end",Zb=Ht()?"left-start":"right-start",tS=Ht()?"right-start":"left-start",eS="top",nS="bottom",rS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},sS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class le extends Xt{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,Di)[0]||U.prev(this._element,Di)[0]||U.findOne(Di,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return rS}static get DefaultType(){return sS}static get NAME(){return Wh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(rn(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,xb,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Kb))for(const r of[].concat(...document.body.children))N.on(r,"mouseover",Zi);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(er),this._element.classList.add(er),N.trigger(this._element,Fb,t)}}hide(){if(rn(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,Lb,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))N.off(r,"mouseover",Zi);this._popper&&this._popper.destroy(),this._menu.classList.remove(er),this._element.classList.remove(er),this._element.setAttribute("aria-expanded","false"),Ee.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,Mb,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!ye(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Wh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof pm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:ye(this._config.reference)?t=nn(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=al(t,this._menu,e)}_isShown(){return this._menu.classList.contains(er)}_getPlacement(){const t=this._parent;if(t.classList.contains(Bb))return Zb;if(t.classList.contains(jb))return tS;if(t.classList.contains(Hb))return eS;if(t.classList.contains(qb))return nS;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains($b)?e?Yb:Qb:e?Jb:Xb}_detectNavbar(){return this._element.closest(zb)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ee.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...Ot(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const r=U.find(Gb,this._menu).filter(s=>Vr(s));r.length&&cl(r,e,t===Kh,!r.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=le.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===Vb||t.type==="keyup"&&t.key!==zh)return;const e=U.find(Wb);for(const r of e){const s=le.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),a=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===zh||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const c={relatedTarget:s._element};t.type==="click"&&(c.clickEvent=t),s._completeHide(c)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),r=t.key===Ob,s=[kb,Kh].includes(t.key);if(!s&&!r||e&&!r)return;t.preventDefault();const i=this.matches(_n)?this:U.prev(this,_n)[0]||U.next(this,_n)[0]||U.findOne(_n,t.delegateTarget.parentNode),a=le.getOrCreateInstance(i);if(s){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),i.focus())}}N.on(document,Om,_n,le.dataApiKeydownHandler);N.on(document,Om,Di,le.dataApiKeydownHandler);N.on(document,Dm,le.clearMenus);N.on(document,Ub,le.clearMenus);N.on(document,Dm,_n,function(n){n.preventDefault(),le.getOrCreateInstance(this).toggle()});Wt(le);const km="backdrop",iS="fade",Gh="show",Qh=`mousedown.bs.${km}`,oS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},aS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vm extends js{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return oS}static get DefaultType(){return aS}static get NAME(){return km}show(t){if(!this._config.isVisible){Ot(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Bs(e),e.classList.add(Gh),this._emulateAnimation(()=>{Ot(t)})}hide(t){if(!this._config.isVisible){Ot(t);return}this._getElement().classList.remove(Gh),this._emulateAnimation(()=>{this.dispose(),Ot(t)})}dispose(){this._isAppended&&(N.off(this._element,Qh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(iS),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=nn(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Qh,()=>{Ot(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Em(t,this._getElement(),this._config.isAnimated)}}const cS="focustrap",lS="bs.focustrap",eo=`.${lS}`,uS=`focusin${eo}`,hS=`keydown.tab${eo}`,dS="Tab",fS="forward",Yh="backward",pS={autofocus:!0,trapElement:null},mS={autofocus:"boolean",trapElement:"element"};class Lm extends js{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return pS}static get DefaultType(){return mS}static get NAME(){return cS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,eo),N.on(document,uS,t=>this._handleFocusin(t)),N.on(document,hS,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,eo))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const r=U.focusableChildren(e);r.length===0?e.focus():this._lastTabNavDirection===Yh?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===dS&&(this._lastTabNavDirection=t.shiftKey?Yh:fS)}}const Xh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Jh=".sticky-top",mi="padding-right",Zh="margin-right";class tc{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mi,e=>e+t),this._setElementAttributes(Xh,mi,e=>e+t),this._setElementAttributes(Jh,Zh,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mi),this._resetElementAttributes(Xh,mi),this._resetElementAttributes(Jh,Zh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,r){const s=this.getWidth(),i=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,e);const c=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,e){const r=t.style.getPropertyValue(e);r&&Ee.setDataAttribute(t,e,r)}_resetElementAttributes(t,e){const r=s=>{const i=Ee.getDataAttribute(s,e);if(i===null){s.style.removeProperty(e);return}Ee.removeDataAttribute(s,e),s.style.setProperty(e,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,e){if(ye(t)){e(t);return}for(const r of U.find(t,this._element))e(r)}}const gS="modal",_S="bs.modal",qt=`.${_S}`,yS=".data-api",ES="Escape",vS=`hide${qt}`,TS=`hidePrevented${qt}`,Mm=`hidden${qt}`,xm=`show${qt}`,AS=`shown${qt}`,wS=`resize${qt}`,IS=`click.dismiss${qt}`,bS=`mousedown.dismiss${qt}`,SS=`keydown.dismiss${qt}`,CS=`click${qt}${yS}`,td="modal-open",RS="fade",ed="show",ha="modal-static",PS=".modal.show",NS=".modal-dialog",DS=".modal-body",OS='[data-bs-toggle="modal"]',kS={backdrop:!0,focus:!0,keyboard:!0},VS={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class wr extends Xt{constructor(t,e){super(t,e),this._dialog=U.findOne(NS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new tc,this._addEventListeners()}static get Default(){return kS}static get DefaultType(){return VS}static get NAME(){return gS}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,xm,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(td),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||N.trigger(this._element,vS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ed),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){N.off(window,qt),N.off(this._dialog,qt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lm({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(DS,this._dialog);e&&(e.scrollTop=0),Bs(this._element),this._element.classList.add(ed);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,AS,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,SS,t=>{if(t.key===ES){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),N.on(window,wS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,bS,t=>{N.one(this._element,IS,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(td),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,Mm)})}_isAnimated(){return this._element.classList.contains(RS)}_triggerBackdropTransition(){if(N.trigger(this._element,TS).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(ha)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(ha),this._queueCallback(()=>{this._element.classList.remove(ha),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),r=e>0;if(r&&!t){const s=Ht()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!r&&t){const s=Ht()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const r=wr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](e)}})}}N.on(document,CS,OS,function(n){const t=U.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),N.one(t,xm,s=>{s.defaultPrevented||N.one(t,Mm,()=>{Vr(this)&&this.focus()})});const e=U.findOne(PS);e&&wr.getInstance(e).hide(),wr.getOrCreateInstance(t).toggle(this)});wo(wr);Wt(wr);const LS="offcanvas",MS="bs.offcanvas",Ce=`.${MS}`,Fm=".data-api",xS=`load${Ce}${Fm}`,FS="Escape",nd="show",rd="showing",sd="hiding",US="offcanvas-backdrop",Um=".offcanvas.show",$S=`show${Ce}`,BS=`shown${Ce}`,jS=`hide${Ce}`,id=`hidePrevented${Ce}`,$m=`hidden${Ce}`,HS=`resize${Ce}`,qS=`click${Ce}${Fm}`,WS=`keydown.dismiss${Ce}`,zS='[data-bs-toggle="offcanvas"]',KS={backdrop:!0,keyboard:!0,scroll:!1},GS={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class sn extends Xt{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return KS}static get DefaultType(){return GS}static get NAME(){return LS}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||N.trigger(this._element,$S,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new tc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(rd);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(nd),this._element.classList.remove(rd),N.trigger(this._element,BS,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||N.trigger(this._element,jS).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(sd),this._backdrop.hide();const e=()=>{this._element.classList.remove(nd,sd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new tc().reset(),N.trigger(this._element,$m)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){N.trigger(this._element,id);return}this.hide()},e=!!this._config.backdrop;return new Vm({className:US,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Lm({trapElement:this._element})}_addEventListeners(){N.on(this._element,WS,t=>{if(t.key===FS){if(this._config.keyboard){this.hide();return}N.trigger(this._element,id)}})}static jQueryInterface(t){return this.each(function(){const e=sn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}N.on(document,qS,zS,function(n){const t=U.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),rn(this))return;N.one(t,$m,()=>{Vr(this)&&this.focus()});const e=U.findOne(Um);e&&e!==t&&sn.getInstance(e).hide(),sn.getOrCreateInstance(t).toggle(this)});N.on(window,xS,()=>{for(const n of U.find(Um))sn.getOrCreateInstance(n).show()});N.on(window,HS,()=>{for(const n of U.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&sn.getOrCreateInstance(n).hide()});wo(sn);Wt(sn);const QS=/^aria-[\w-]*$/i,Bm={"*":["class","dir","id","lang","role",QS],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},YS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),XS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,JS=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?YS.has(e)?!!XS.test(n.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(e))};function ZS(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const a of i){const c=a.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){a.remove();continue}const u=[].concat(...a.attributes),d=[].concat(t["*"]||[],t[c]||[]);for(const f of u)JS(f,d)||a.removeAttribute(f.nodeName)}return s.body.innerHTML}const tC="TemplateFactory",eC={allowList:Bm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},nC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},rC={entry:"(string|element|function|null)",selector:"(string|element)"};class sC extends js{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return eC}static get DefaultType(){return nC}static get NAME(){return tC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const e=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&e.classList.add(...r.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,r]of Object.entries(t))super._typeCheckConfig({selector:e,entry:r},rC)}_setContent(t,e,r){const s=U.findOne(r,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(ye(e)){this._putElementInTemplate(nn(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?ZS(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return Ot(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const iC="tooltip",oC=new Set(["sanitize","allowList","sanitizeFn"]),da="fade",aC="modal",gi="show",cC=".tooltip-inner",od=`.${aC}`,ad="hide.bs.modal",ss="hover",fa="focus",pa="click",lC="manual",uC="hide",hC="hidden",dC="show",fC="shown",pC="inserted",mC="click",gC="focusin",_C="focusout",yC="mouseenter",EC="mouseleave",vC={AUTO:"auto",TOP:"top",RIGHT:Ht()?"left":"right",BOTTOM:"bottom",LEFT:Ht()?"right":"left"},TC={allowList:Bm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},AC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Mr extends Xt{constructor(t,e){if(typeof pm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return TC}static get DefaultType(){return AC}static get NAME(){return iC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(od),ad,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=N.trigger(this._element,this.constructor.eventName(dC)),r=(_m(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),N.trigger(this._element,this.constructor.eventName(pC))),this._popper=this._createPopper(s),s.classList.add(gi),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))N.on(c,"mouseover",Zi);const a=()=>{N.trigger(this._element,this.constructor.eventName(fC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||N.trigger(this._element,this.constructor.eventName(uC)).defaultPrevented)return;if(this._getTipElement().classList.remove(gi),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))N.off(s,"mouseover",Zi);this._activeTrigger[pa]=!1,this._activeTrigger[fa]=!1,this._activeTrigger[ss]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName(hC)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(da,gi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const r=lI(this.constructor.NAME).toString();return e.setAttribute("id",r),this._isAnimated()&&e.classList.add(da),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new sC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[cC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(da)}_isShown(){return this.tip&&this.tip.classList.contains(gi)}_createPopper(t){const e=Ot(this._config.placement,[this,t,this._element]),r=vC[e.toUpperCase()];return al(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return Ot(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...e,...Ot(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")N.on(this._element,this.constructor.eventName(mC),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[pa]=!(s._isShown()&&s._activeTrigger[pa]),s.toggle()});else if(e!==lC){const r=e===ss?this.constructor.eventName(yC):this.constructor.eventName(gC),s=e===ss?this.constructor.eventName(EC):this.constructor.eventName(_C);N.on(this._element,r,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusin"?fa:ss]=!0,a._enter()}),N.on(this._element,s,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusout"?fa:ss]=a._element.contains(i.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(od),ad,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Ee.getDataAttributes(this._element);for(const r of Object.keys(e))oC.has(r)&&delete e[r];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:nn(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,r]of Object.entries(this._config))this.constructor.Default[e]!==r&&(t[e]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Mr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Wt(Mr);const wC="popover",IC=".popover-header",bC=".popover-body",SC={...Mr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},CC={...Mr.DefaultType,content:"(null|string|element|function)"};class hl extends Mr{static get Default(){return SC}static get DefaultType(){return CC}static get NAME(){return wC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[IC]:this._getTitle(),[bC]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=hl.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Wt(hl);const RC="scrollspy",PC="bs.scrollspy",dl=`.${PC}`,NC=".data-api",DC=`activate${dl}`,cd=`click${dl}`,OC=`load${dl}${NC}`,kC="dropdown-item",Gn="active",VC='[data-bs-spy="scroll"]',ma="[href]",LC=".nav, .list-group",ld=".nav-link",MC=".nav-item",xC=".list-group-item",FC=`${ld}, ${MC} > ${ld}, ${xC}`,UC=".dropdown",$C=".dropdown-toggle",BC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},jC={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class So extends Xt{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return BC}static get DefaultType(){return jC}static get NAME(){return RC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=nn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,cd),N.on(this._config.target,cd,ma,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const r=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),r=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(a),!s)return;continue}!i&&!c&&r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(ma,this._config.target);for(const e of t){if(!e.hash||rn(e))continue;const r=U.findOne(decodeURI(e.hash),this._element);Vr(r)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Gn),this._activateParents(t),N.trigger(this._element,DC,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(kC)){U.findOne($C,t.closest(UC)).classList.add(Gn);return}for(const e of U.parents(t,LC))for(const r of U.prev(e,FC))r.classList.add(Gn)}_clearActiveClass(t){t.classList.remove(Gn);const e=U.find(`${ma}.${Gn}`,t);for(const r of e)r.classList.remove(Gn)}static jQueryInterface(t){return this.each(function(){const e=So.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(window,OC,()=>{for(const n of U.find(VC))So.getOrCreateInstance(n)});Wt(So);const HC="tab",qC="bs.tab",Mn=`.${qC}`,WC=`hide${Mn}`,zC=`hidden${Mn}`,KC=`show${Mn}`,GC=`shown${Mn}`,QC=`click${Mn}`,YC=`keydown${Mn}`,XC=`load${Mn}`,JC="ArrowLeft",ud="ArrowRight",ZC="ArrowUp",hd="ArrowDown",ga="Home",dd="End",yn="active",fd="fade",_a="show",tR="dropdown",jm=".dropdown-toggle",eR=".dropdown-menu",ya=`:not(${jm})`,nR='.list-group, .nav, [role="tablist"]',rR=".nav-item, .list-group-item",sR=`.nav-link${ya}, .list-group-item${ya}, [role="tab"]${ya}`,Hm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ea=`${sR}, ${Hm}`,iR=`.${yn}[data-bs-toggle="tab"], .${yn}[data-bs-toggle="pill"], .${yn}[data-bs-toggle="list"]`;class Ir extends Xt{constructor(t){super(t),this._parent=this._element.closest(nR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,YC,e=>this._keydown(e)))}static get NAME(){return HC}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),r=e?N.trigger(e,WC,{relatedTarget:t}):null;N.trigger(t,KC,{relatedTarget:e}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(yn),this._activate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(_a);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,GC,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(fd))}_deactivate(t,e){if(!t)return;t.classList.remove(yn),t.blur(),this._deactivate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(_a);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,zC,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(fd))}_keydown(t){if(![JC,ud,ZC,hd,ga,dd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!rn(s));let r;if([ga,dd].includes(t.key))r=e[t.key===ga?0:e.length-1];else{const s=[ud,hd].includes(t.key);r=cl(e,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Ir.getOrCreateInstance(r).show())}_getChildren(){return U.find(Ea,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const r of e)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",e),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=U.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const r=this._getOuterElement(t);if(!r.classList.contains(tR))return;const s=(i,a)=>{const c=U.findOne(i,r);c&&c.classList.toggle(a,e)};s(jm,yn),s(eR,_a),r.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,r){t.hasAttribute(e)||t.setAttribute(e,r)}_elemIsActive(t){return t.classList.contains(yn)}_getInnerElement(t){return t.matches(Ea)?t:U.findOne(Ea,t)}_getOuterElement(t){return t.closest(rR)||t}static jQueryInterface(t){return this.each(function(){const e=Ir.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,QC,Hm,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!rn(this)&&Ir.getOrCreateInstance(this).show()});N.on(window,XC,()=>{for(const n of U.find(iR))Ir.getOrCreateInstance(n)});Wt(Ir);const oR="toast",aR="bs.toast",cn=`.${aR}`,cR=`mouseover${cn}`,lR=`mouseout${cn}`,uR=`focusin${cn}`,hR=`focusout${cn}`,dR=`hide${cn}`,fR=`hidden${cn}`,pR=`show${cn}`,mR=`shown${cn}`,gR="fade",pd="hide",_i="show",yi="showing",_R={animation:"boolean",autohide:"boolean",delay:"number"},yR={animation:!0,autohide:!0,delay:5e3};class Co extends Xt{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return yR}static get DefaultType(){return _R}static get NAME(){return oR}show(){if(N.trigger(this._element,pR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(gR);const e=()=>{this._element.classList.remove(yi),N.trigger(this._element,mR),this._maybeScheduleHide()};this._element.classList.remove(pd),Bs(this._element),this._element.classList.add(_i,yi),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||N.trigger(this._element,dR).defaultPrevented)return;const e=()=>{this._element.classList.add(pd),this._element.classList.remove(yi,_i),N.trigger(this._element,fR)};this._element.classList.add(yi),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(_i),super.dispose()}isShown(){return this._element.classList.contains(_i)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,cR,t=>this._onInteraction(t,!0)),N.on(this._element,lR,t=>this._onInteraction(t,!1)),N.on(this._element,uR,t=>this._onInteraction(t,!0)),N.on(this._element,hR,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Co.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}wo(Co);Wt(Co);const Oi=document.getElementById("plans-here"),is=document.getElementById("chat-box"),ER=document.getElementById("chatTitle"),qm=document.getElementById("chat-form"),ki=qm.querySelector("input");let sr=null;Oi.innerHTML="";Hp(async n=>{if(!n)return;const t=n.uid;try{const e=za(Ka,`users/${t}`),r=await Oh(e);if(!r.exists()){console.error("User document not found.");return}const s=r.data();if(!s.recentPlans||!Array.isArray(s.recentPlans)){console.warn("No recent plans found or it is not an array.");return}const i=s.recentPlans;for(const a of i){if(!a)continue;const c=za(Ka,`plans/${a.trim()}`),u=await Oh(c);if(u.exists()){const d=u.data(),f=document.createElement("div");f.className="Msg-Box p-2 mb-2",f.innerHTML=`
          <h5 class="plan-title">${d.title}</h5>
          <p class="plan-info text-muted">${d.description}</p>
        `,f.addEventListener("click",()=>{vR(a,d.title,d.joinCode)}),Oi.appendChild(f)}else console.log(`No plan found for ID: ${a}`)}if(Oi.innerHTML===""){const a=document.createElement("div");a.className="card text-center p-3 my-3",a.innerHTML=`
        <p class="mb-3 text-muted">You don’t have any plans yet.</p>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-outline-primary" id="createPlanBtn">Create a Plan</button>
          <button class="btn btn-outline-secondary" id="joinPlanBtn">Join a Plan</button>
        </div>
      `,Oi.appendChild(a),document.getElementById("createPlanBtn").addEventListener("click",()=>{window.location.href="create.html"}),document.getElementById("joinPlanBtn").addEventListener("click",()=>{window.location.href="join.html"})}}catch(e){console.error("Error getting documents:",e)}});function vR(n,t,e){ER.innerHTML=`${t} <small class="text-muted">(Join code: ${e})</small>`,is.innerHTML="",ki.value="",sr&&(sr=null),sr=KA(Ka,"plans",n,"messages");const r=ow(sr,aw("time"));dw(r,s=>{is.innerHTML="",s.forEach(i=>{const a=i.data(),c=document.createElement("div");c.innerHTML=`<strong>${a.senderName}:</strong> ${a.text} 
        <small class="text-muted">${a.time?.toDate().toLocaleTimeString()||""}</small>`,is.appendChild(c)}),is.scrollTop=is.scrollHeight})}qm.addEventListener("submit",async n=>{n.preventDefault(),!(!ki.value.trim()||!sr)&&Hp(async t=>{if(t)try{await hw(sr,{senderId:t.uid,senderName:t.displayName||"Anonymous",text:ki.value.trim(),time:pw()}),ki.value=""}catch(e){console.error("Error sending message:",e)}})});
