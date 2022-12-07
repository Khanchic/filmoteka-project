!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("8vL8o"),i("c01wF"),i("jNpbd"),i("jcFG7"),i("k8rGO");var a={apiKey:"AIzaSyAH_Owns7cMrT8pGCLt32chdrdhm6DGte4",authDomain:"filmoteka-project-45131.firebaseapp.com",projectId:"filmoteka-project-45131",storageBucket:"filmoteka-project-45131.appspot.com",messagingSenderId:"4911157215",appId:"1:4911157215:web:07f069ebba88729a083e6a",measurementId:"G-XQS01LFW6F"},o=i("8MBJY"),s=i("a2hTj"),u=i("bpxeT"),c=(o=i("8MBJY"),s=i("a2hTj"),i("hKHmD")),l=i("8nrFW"),h=i("2TvXO"),d=(u=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),i("1t1Wn")),f=(l=i("8nrFW"),h=i("2TvXO"),i("ds8z5")),v=(o=i("8MBJY"),s=i("a2hTj"),i("eYQtU")),p=(d=i("1t1Wn"),l=i("8nrFW"),{});Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return b(e)};var m=k(i("ge8co")),y=k(i("cZGw3")),_=k(i("fVNic")),g=k(i("gD1JV"));function k(e){return e&&e.__esModule?e:{default:e}}function b(e){var t="function"==typeof Map?new Map:void 0;return b=function(e){if(null===e||!y.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m.default(e,arguments,_.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g.default(n,e)},b(e)}var w,I,T,C=i("2MbLg"),S=w={};function x(){throw new Error("setTimeout has not been defined")}function E(){throw new Error("clearTimeout has not been defined")}function R(e){if(I===setTimeout)return setTimeout(e,0);if((I===x||!I)&&setTimeout)return I=setTimeout,setTimeout(e,0);try{return I(e,0)}catch(t){try{return I.call(null,e,0)}catch(t){return I.call(this,e,0)}}}!function(){try{I="function"==typeof setTimeout?setTimeout:x}catch(e){I=x}try{T="function"==typeof clearTimeout?clearTimeout:E}catch(e){T=E}}();var N,P=[],O=!1,D=-1;function A(){O&&N&&(O=!1,N.length?P=N.concat(P):D=-1,P.length&&L())}function L(){if(!O){var e=R(A);O=!0;for(var t=P.length;t;){for(N=P,P=[];++D<t;)N&&N[D].run();D=-1,t=P.length}N=null,O=!1,function(e){if(T===clearTimeout)return clearTimeout(e);if((T===E||!T)&&clearTimeout)return T=clearTimeout,clearTimeout(e);try{T(e)}catch(t){try{return T.call(null,e)}catch(t){return T.call(this,e)}}}(e)}}function M(e,t){this.fun=e,this.array=t}function F(){}S.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];P.push(new M(e,t)),1!==P.length||O||R(L)},M.prototype.run=function(){this.fun.apply(null,this.array)},S.title="browser",S.browser=!0,S.env={},S.argv=[],S.version="",S.versions={},S.on=F,S.addListener=F,S.once=F,S.off=F,S.removeListener=F,S.removeAllListeners=F,S.emit=F,S.prependListener=F,S.prependOnceListener=F,S.listeners=function(e){return[]},S.binding=function(e){throw new Error("process.binding is not supported")},S.cwd=function(){return"/"},S.chdir=function(e){throw new Error("process.chdir is not supported")},S.umask=function(){return 0};
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
 */
var U=!1,j=!1,q="${JSCORE_VERSION}",W=function(e,t){if(!e)throw H(t)},H=function(e){return new Error("Firebase Database ("+q+") INTERNAL ASSERT FAILED: "+e)},B=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},V={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,f=63&c;u||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(B(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z=function(e){var t=B(e);return V.encodeByteArray(t,!0)},K=function(e){return z(e).replace(/\./g,"")},G=function(e){try{return V.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */
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
 */
function Y(e){return J(void 0,e)}function J(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=J(e[n],t[n]));return e}
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
 */
function Q(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function X(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function $(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Z(){return!0===U||!0===j}
/**
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
 */
var ee=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},te=function(){try{return ee()||function(){if(void 0!==w&&void 0!==w.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&G(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ne=function(e){var t,n;return null===(n=null===(t=te())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},re=function(e){var t=ne(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},ie=function(){var e;return null===(e=te())||void 0===e?void 0:e.config},ae=function(e){var t;return null===(t=te())||void 0===t?void 0:t["_".concat(e)]},oe=function(){"use strict";function t(){var n=this;e(o)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(s)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
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
 */
function se(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[K(JSON.stringify({alg:"none",type:"JWT"})),K(JSON.stringify(a)),""].join(".")}
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
 */var ue=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(f)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(f)(s),ce.prototype.create),s}return r}(e(p)(Error)),ce=function(){"use strict";function t(n,r,i){e(o)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(s)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?le(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ue(a,u,i);return c}}]),t}();function le(e,t){return e.replace(he,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var he=/\{\$([^}]+)}/g;
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
 */function de(e){return JSON.parse(e)}function fe(e){return JSON.stringify(e)}
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
 */var ve=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=de(G(a[0])||""),n=de(G(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},pe=function(e){var t=ve(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
 */
function me(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function _e(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ge(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ke(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(be(l)&&be(h)){if(!ke(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,f=!1,v=void 0;try{for(var p,m=r[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var y=p.value;if(!n.includes(y))return!1}}catch(e){f=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(f)throw v}}return!0}function be(e){return null!==e&&"object"==typeof e}
/**
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
 */
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
 */
function we(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(d)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Ie(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(d)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Te(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Ce=function(){"use strict";function t(){e(o)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(s)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],d=this.chain_[3],f=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^l&(h^d),u=1518500249):(s=l^h^d,u=1859775393):v<60?(s=l&h|d&(l|h),u=2400959708):(s=l^h^d,u=3395469782);var p=(c<<5|c>>>27)+s+f+u+n[v]&4294967295;f=d,d=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Se=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(s)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=xe),void 0===r.error&&(r.error=xe),void 0===r.complete&&(r.complete=xe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function xe(){}
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
 */function Ee(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
 */
var Re=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,W(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ne=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
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
 */
function Pe(e){return e&&e._delegate?e._delegate:e}var Oe=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),De="[DEFAULT]",Ae=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new oe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:De})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(d)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(l)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(l)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(d)(c.value,2),f=h[0],v=h[1],p=this.normalizeInstanceIdentifier(f);i===p&&v.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===De?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return this.component?this.component.multipleInstances?e:De:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
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
 */var Le,Me,Fe=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ae(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ue=(o=i("8MBJY"),s=i("a2hTj"),c=i("hKHmD"),l=i("8nrFW"),[]);(Me=Le||(Le={}))[Me.DEBUG=0]="DEBUG",Me[Me.VERBOSE=1]="VERBOSE",Me[Me.INFO=2]="INFO",Me[Me.WARN=3]="WARN",Me[Me.ERROR=4]="ERROR",Me[Me.SILENT=5]="SILENT";var je,qe={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},We=Le.INFO,He=(je={},e(c)(je,Le.DEBUG,"log"),e(c)(je,Le.VERBOSE,"log"),e(c)(je,Le.INFO,"info"),e(c)(je,Le.WARN,"warn"),e(c)(je,Le.ERROR,"error"),je),Be=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=He[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},Ve=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this._logLevel=We,this._logHandler=Be,this._userLogHandler=null,Ue.push(this)}return e(s)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Le))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?qe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Le.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,Le.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Le.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,Le.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Le.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,Le.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Le.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,Le.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,Le.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,Le.ERROR].concat(e(l)(n)))}}]),t}();u=i("bpxeT");var ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ge.default(e,t,n[t])}))}return e};var Ke,Ge=(Ke=i("hKHmD"))&&Ke.__esModule?Ke:{default:Ke};var Ye,Je;l=i("8nrFW"),h=i("2TvXO"),l=i("8nrFW");var Qe=new WeakMap,Xe=new WeakMap,$e=new WeakMap,Ze=new WeakMap,et=new WeakMap;var tt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return it(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function nt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Je||(Je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(at(this),n),it(Qe.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return it(t.apply(at(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[at(this),n].concat(e(l)(i)));return $e.set(s,n.sort?n.sort():[n]),it(s)}}function rt(e){return"function"==typeof e?nt(e):(e instanceof IDBTransaction&&function(e){if(!Xe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Xe.set(e,t)}}(e),t=e,(Ye||(Ye=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,tt):e);var t}function it(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(it(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Qe.set(e,t)})).catch((function(){})),et.set(n,t),n;var t,n;if(Ze.has(e))return Ze.get(e);var r=rt(e);return r!==e&&(Ze.set(e,r),et.set(r,e)),r}var at=function(e){return et.get(e)};function ot(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=it(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(it(s.result),e.oldVersion,e.newVersion,it(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var st=["get","getKey","getAll","getAllKeys","count"],ut=["put","add","delete","clear"],ct=new Map;function lt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(ct.get(n))return ct.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=ut.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||st.includes(r))){var o,s=(o=e(u)(e(h).mark((function t(n){var o,s,u,c,d,f,v=arguments;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=v.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=v[u];return d=this.transaction(n,a?"readwrite":"readonly"),f=d.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(c=f)[r].apply(c,e(l)(s)),a&&d.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return ct.set(n,s),s}}}tt=function(t){return e(ze)({},t,{get:function(e,n,r){return lt(e,n)||t.get(e,n,r)},has:function(e,n){return!!lt(e,n)||t.has(e,n)}})}(tt);
/**
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
 */
var ht=function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var dt,ft,vt="@firebase/app",pt="0.8.4",mt=new Ve("@firebase/app"),yt="[DEFAULT]",_t=(dt={},e(c)(dt,vt,"fire-core"),e(c)(dt,"@firebase/app-compat","fire-core-compat"),e(c)(dt,"@firebase/analytics","fire-analytics"),e(c)(dt,"@firebase/analytics-compat","fire-analytics-compat"),e(c)(dt,"@firebase/app-check","fire-app-check"),e(c)(dt,"@firebase/app-check-compat","fire-app-check-compat"),e(c)(dt,"@firebase/auth","fire-auth"),e(c)(dt,"@firebase/auth-compat","fire-auth-compat"),e(c)(dt,"@firebase/database","fire-rtdb"),e(c)(dt,"@firebase/database-compat","fire-rtdb-compat"),e(c)(dt,"@firebase/functions","fire-fn"),e(c)(dt,"@firebase/functions-compat","fire-fn-compat"),e(c)(dt,"@firebase/installations","fire-iid"),e(c)(dt,"@firebase/installations-compat","fire-iid-compat"),e(c)(dt,"@firebase/messaging","fire-fcm"),e(c)(dt,"@firebase/messaging-compat","fire-fcm-compat"),e(c)(dt,"@firebase/performance","fire-perf"),e(c)(dt,"@firebase/performance-compat","fire-perf-compat"),e(c)(dt,"@firebase/remote-config","fire-rc"),e(c)(dt,"@firebase/remote-config-compat","fire-rc-compat"),e(c)(dt,"@firebase/storage","fire-gcs"),e(c)(dt,"@firebase/storage-compat","fire-gcs-compat"),e(c)(dt,"@firebase/firestore","fire-fst"),e(c)(dt,"@firebase/firestore-compat","fire-fst-compat"),e(c)(dt,"fire-js","fire-js"),e(c)(dt,"firebase","fire-js-all"),dt),gt=new Map,kt=new Map;function bt(e,t){try{e.container.addComponent(t)}catch(n){mt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function wt(e){var t=e.name;if(kt.has(t))return mt.debug("There were multiple attempts to register component ".concat(t,".")),!1;kt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=gt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){bt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function It(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
var Tt=(ft={},e(c)(ft,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(c)(ft,"bad-app-name","Illegal App name: '{$appName}"),e(c)(ft,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(c)(ft,"app-deleted","Firebase App named '{$appName}' already deleted"),e(c)(ft,"no-options","Need to provide options, when not being deployed to hosting via source."),e(c)(ft,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(c)(ft,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(c)(ft,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ft,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ft,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(c)(ft,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),ft),Ct=new ce("app","Firebase",Tt),St=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oe("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}]),t}(),xt="9.14.0";function Et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:yt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Ct.create("bad-app-name",{appName:String(a)});if(n||(n=ie()),!n)throw Ct.create("no-options");var o=gt.get(a);if(o){if(ke(n,o.options)&&ke(i,o.config))return o;throw Ct.create("duplicate-app",{appName:a})}var s=new Fe(a),u=!0,c=!1,l=void 0;try{for(var h,d=kt.values()[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;s.addComponent(f)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var v=new St(n,i,s);return gt.set(a,v),v}function Rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=gt.get(e);if(!t&&e===yt)return Et();if(!t)throw Ct.create("no-app",{appName:e});return t}function Nt(e,t,n){var r,i=null!==(r=_t[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void mt.warn(s.join(" "))}wt(new Oe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
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
 */
var Pt="firebase-heartbeat-store",Ot=null;function Dt(){return Ot||(Ot=ot("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Pt)}}).catch((function(e){throw Ct.create("idb-open",{originalErrorMessage:e.message})}))),Ot}function At(e){return Lt.apply(this,arguments)}function Lt(){return(Lt=e(u)(e(h).mark((function t(n){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Dt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Pt).objectStore(Pt).get(Ut(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ue?mt.warn(e.t0.message):(a=Ct.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),mt.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Mt(e,t){return Ft.apply(this,arguments)}function Ft(){return(Ft=e(u)(e(h).mark((function t(n,r){var i,a,o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Dt();case 4:return a=e.sent,o=a.transaction(Pt,"readwrite"),s=o.objectStore(Pt),e.next=9,s.put(r,Ut(n));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ue?mt.warn(e.t0.message):(u=Ct.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),mt.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Ut(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
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
 */var jt=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Bt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=qt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r,i,a,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=qt(),i=Wt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=K(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function qt(){return(new Date).toISOString().substring(0,10)}function Wt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Vt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Vt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Ht,Bt=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(u)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,At(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Mt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Mt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(l)(a.heartbeats).concat(e(l)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Vt(e){return K(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */Ht="",wt(new Oe("platform-logger",(function(e){return new ht(e)}),"PRIVATE")),wt(new Oe("heartbeat",(function(e){return new jt(e)}),"PRIVATE")),Nt(vt,pt,Ht),Nt(vt,pt,"esm2017"),Nt("fire-js","");
/**
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
 */
Nt("firebase","9.14.0","app");f=i("ds8z5"),u=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),v=i("eYQtU"),d=i("1t1Wn"),l=i("8nrFW");var zt=i("l5bVx"),Kt=(C=i("2MbLg"),h=i("2TvXO"),"@firebase/database"),Gt="0.13.10",Yt="";
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
 */
var Jt,Qt=function(){"use strict";function t(n){e(o)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(s)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),fe(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:de(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Xt=function(){"use strict";function t(){e(o)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(s)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return me(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),$t=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Qt(t)}}catch(e){}return new Xt},Zt=$t("localStorage"),en=$t("sessionStorage"),tn=new Ve("@firebase/database"),nn=(Jt=1,function(){return Jt++}),rn=function(e){var t=Re(e),n=new Ce;n.update(t);var r=n.digest();return V.encodeByteArray(r)},an=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=an.apply(null,a):r+="object"==typeof a?fe(a):a,r+=" "}return r},on=null,sn=!0,un=function(e,t){W(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tn.logLevel=Le.VERBOSE,on=tn.log.bind(tn),t&&en.set("logging_enabled",!0)):"function"==typeof e?on=e:(on=null,en.remove("logging_enabled"))},cn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===sn&&(sn=!1,null===on&&!0===en.get("logging_enabled")&&un(!0)),on){var r=an.apply(null,t);on(r)}},ln=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];cn.apply(void 0,[t].concat(e(l)(r)))}},hn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+an.apply(void 0,e(l)(n));tn.error(i)},dn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(an.apply(void 0,e(l)(n)));throw tn.error(i),new Error(i)},fn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+an.apply(void 0,e(l)(n));tn.warn(i)},vn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},pn="[MIN_NAME]",mn="[MAX_NAME]",yn=function(e,t){if(e===t)return 0;if(e===pn||t===mn)return-1;if(t===pn||e===mn)return 1;var n=xn(e),r=xn(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},_n=function(e,t){return e===t?0:e<t?-1:1},gn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+fe(t))},kn=function(e){if("object"!=typeof e||null===e)return fe(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=fe(t[i]),r+=":",r+=kn(e[t[i]]);return r+="}"},bn=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function wn(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var In=function(e){W(!vn(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Tn=new RegExp("^-?(0*)\\d{1,10}$"),Cn=-2147483648,Sn=2147483647,xn=function(e){if(Tn.test(e)){var t=Number(e);if(t>=Cn&&t<=Sn)return t}return null},En=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw fn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Rn=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Nn=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(s)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){fn('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Pn=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(s)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(cn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fn(e)}}]),t}(),On=function(){"use strict";function t(n){e(o)(this,t),this.accessToken=n}return e(s)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();On.OWNER="owner";
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
 */
var Dn="5",An=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ln="websocket",Mn="long_polling",Fn=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(o)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=s,this.persistenceKey=u,this.includeNamespaceInQueryParams=c,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zt.get("host:"+n)||this._host}return e(s)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zt.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function Un(e,t,n){var r;if(W("string"==typeof t,"typeof type must == string"),W("object"==typeof n,"typeof params must == object"),t===Ln)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Mn)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return wn(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var jn=function(){"use strict";function t(){e(o)(this,t),this.counters_={}}return e(s)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return Y(this.counters_)}}]),t}(),qn={},Wn={};
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
 */function Hn(e){var t=e.toString();return qn[t]||(qn[t]=new jn),qn[t]}
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
 */
var Bn=function(){"use strict";function t(n){e(o)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(s)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&En((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),Vn="start",zn="close",Kn=function(){"use strict";function t(n,r,i,a,s,u,c){var l=this;e(o)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=s,this.transportSessionId=u,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ln(n),this.stats_=Hn(r),this.urlFn=function(e){return l.appCheckToken&&(e.ac=l.appCheckToken),Un(r,Mn,e)}}return e(s)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Bn(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Z()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new Gn((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(d)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===Vn)t.id=s,t.password=u;else{if(o!==zn)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(d)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Dn,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&An.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=z(t),r=bn(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Z()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=fe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Z()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),Gn=function(){"use strict";function t(n,r,i,a){if(e(o)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Z())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=nn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var s="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))s='<script>document.domain="'+document.domain+'";<\/script>';var u="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(e){cn("frame writing exception"),e.stack&&cn(e.stack),cn(e)}}}return e(s)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Z()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){cn("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||cn("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),Yn=null;
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
 */"undefined"!=typeof MozWebSocket?Yn=MozWebSocket:"undefined"!=typeof WebSocket&&(Yn=WebSocket);var Jn=function(){"use strict";function t(n,r,i,a,s,u,c){e(o)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ln(this.connId),this.stats_=Hn(r),this.connURL=t.connectionURL_(r,u,c,a,i),this.nodeAdmin=r.nodeAdmin}return e(s)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zt.set("previous_websocket_failure",!0);try{var r;if(Z()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Dn,"/").concat(Yt,"/").concat(w.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new Yn(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Zt.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=de(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(W(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=fe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=bn(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Dn,!Z()&&"undefined"!=typeof location&&location.hostname&&An.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),Un(e,Ln,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Yn&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Zt.isInMemoryStorage||!0===Zt.get("previous_websocket_failure")}}]),t}();Jn.responsesRequiredToBeHealthy=2,Jn.healthyTimeout=3e4;
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
 */
var Qn=function(){"use strict";function t(n){e(o)(this,t),this.initTransports_(n)}return e(s)(t,[{key:"initTransports_",value:function(e){var n=Jn&&Jn.isAvailable(),r=n&&!Jn.previouslyFailed();if(e.webSocketOnly&&(n||fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Jn];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[Kn,Jn]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Qn.globalTransportInitialized_=!1;
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
 */
var Xn=function(){"use strict";function t(n,r,i,a,s,u,c,l,h,d){e(o)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=s,this.onMessage_=u,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ln("c:"+this.id+":"),this.transportManager_=new Qn(r),this.log_("Connection created"),this.start_()}return e(s)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rn((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=gn("t",e),n=gn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=gn("t",e),n=gn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=gn("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?hn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hn("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Dn!==n&&fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Rn((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rn((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),$n=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Zn=function(){"use strict";function t(n){e(o)(this,t),this.allowedEvents_=n,this.listeners_={},W(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(s)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(l)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){W(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),er=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t;return e(o)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||X()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(s)(r,[{key:"getInitialEvent",value:function(e){return W("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Zn),tr=function(){"use strict";function t(n,r){if(e(o)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(s)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function nr(){return new tr("")}function rr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ir(e){return e.pieces_.length-e.pieceNum_}function ar(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new tr(e.pieces_,t)}function or(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function ur(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new tr(t,0)}function cr(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof tr)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new tr(n,0)}function lr(e){return e.pieceNum_>=e.pieces_.length}function hr(e,t){var n=rr(e),r=rr(t);if(null===n)return t;if(n===r)return hr(ar(e),ar(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function dr(e,t){for(var n=sr(e,0),r=sr(t,0),i=0;i<n.length&&i<r.length;i++){var a=yn(n[i],r[i]);if(0!==a)return a}return n.length===r.length?0:n.length<r.length?-1:1}function fr(e,t){if(ir(e)!==ir(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function vr(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(ir(e)>ir(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var pr=function t(n,r){"use strict";e(o)(this,t),this.errorPrefix_=r,this.parts_=sr(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Ne(this.parts_[i]);mr(this)};function mr(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+yr(e))}function yr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var _r=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t,i,a;return e(o)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(s)(r,[{key:"getInitialEvent",value:function(e){return W("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Zn),gr=1e3,kr=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a,s,u,c,l,h){var d;if(e(o)(this,r),(d=n.call(this)).repoInfo_=t,d.applicationId_=i,d.onDataUpdate_=a,d.onConnectStatus_=s,d.onServerInfoUpdate_=u,d.authTokenProvider_=c,d.appCheckTokenProvider_=l,d.authOverride_=h,d.id=r.nextPersistentConnectionId_++,d.log_=ln("p:"+d.id+":"),d.interruptReasons_={},d.listens=new Map,d.outstandingPuts_=[],d.outstandingGets_=[],d.outstandingPutCount_=0,d.outstandingGetCount_=0,d.onDisconnectRequestQueue_=[],d.connected_=!1,d.reconnectDelay_=gr,d.maxReconnectDelay_=3e5,d.securityDebugCallback_=null,d.lastSessionId=null,d.establishConnectionTimer_=null,d.visible_=!1,d.requestCBHash_={},d.requestNumber_=0,d.realtime_=null,d.authToken_=null,d.appCheckToken_=null,d.forceTokenRefresh_=!1,d.invalidAuthTokenCount_=0,d.invalidAppCheckTokenCount_=0,d.firstConnection_=!0,d.lastConnectionAttemptTime_=null,d.lastConnectionEstablishedTime_=null,h&&!Z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return _r.getInstance().on("visible",d.onVisible_,e(f)(d)),-1===t.host.indexOf("fblocal")&&er.getInstance().on("online",d.onOnline_,e(f)(d)),d}return e(s)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(fe(i)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new oe,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=ve(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=pe(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+fe(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):hn("Unrecognized action received from server: "+fe(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=gr),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(u)(e(h).mark((function n(){var i,a,o,s,u,c,l,f,v,p,m,y,_;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),o=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,u=t.lastSessionId,c=!1,l=null,f=function(){l?l.close():(c=!0,o())},v=function(e){W(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},t.realtime_={close:f,sendRequest:v},p=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(d),n.next=20,Promise.all([t.authTokenProvider_.getToken(p),t.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,m=(0,n.t0)(n.t1,2),y=m[0],_=m[1],c?cn("getToken() completed but was canceled"):(cn("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=_&&_.token,l=new Xn(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,o,(function(e){fn(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),c||(t.repoInfo_.nodeAdmin&&fn(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){cn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){cn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_e(this.interruptReasons_)&&(this.reconnectDelay_=gr,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return kn(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new tr(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){cn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){cn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var d=0;d<this.outstandingPuts_.length;d++)this.outstandingPuts_[d]&&this.sendPut_(d);for(;this.onDisconnectRequestQueue_.length;){var f=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(f.action,f.pathString,f.data,f.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Z()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Yt.replace(/\./g,"-")]=1,X()?e["framework.cordova"]=1:$()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=er.getInstance().currentlyOnline();return _e(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&me(e,"w")){var n=ye(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();fn("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}($n);
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
 */kr.nextPersistentConnectionId_=0,kr.nextConnectionId_=0;
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
 */
var br,wr=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.node=r}return e(s)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Ir=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new wr(pn,e),r=new wr(pn,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return wr.MIN}}]),t}(),Tr=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){return yn(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw H("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return wr.MIN}},{key:"maxPost",value:function(){return new wr(mn,br)}},{key:"makePost",value:function(e,t){return W("string"==typeof e,"KeyIndex indexValue must always be a string."),new wr(e,br)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return br},set:function(e){br=e}}]),r}(Ir),Cr=new Tr,Sr=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(o)(this,t),this.isReverse_=a,this.resultGenerator_=s,this.nodeStack_=[];for(var u=1;!n.isEmpty();)if(u=r?i(n.key,r):1,a&&(u*=-1),u<0)n=this.isReverse_?n.left:n.right;else{if(0===u){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(s)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),xr=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Nr.EMPTY_NODE,this.right=null!=s?s:Nr.EMPTY_NODE}return e(s)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Nr.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Nr.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
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
 */xr.RED=!0,xr.BLACK=!1;var Er,Rr=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new xr(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Nr=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(o)(this,t),this.comparator_=n,this.root_=r}return e(s)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xr.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xr.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new Sr(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new Sr(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new Sr(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new Sr(this.root_,null,this.comparator_,!0,e)}}]),t}();
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
 */
function Pr(e,t){return yn(e.name,t.name)}function Or(e,t){return yn(e,t)}
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
 */Nr.EMPTY_NODE=new Rr;var Dr,Ar,Lr,Mr=function(e){return"number"==typeof e?"number:"+In(e):"string:"+e},Fr=function(e){if(e.isLeafNode()){var t=e.val();W("string"==typeof t||"number"==typeof t||"object"==typeof t&&me(t,".sv"),"Priority must be a string or number.")}else W(e===Er||e.isEmpty(),"priority of unexpected type.");W(e===Er||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Ur=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(o)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,W(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Fr(this.priorityNode_)}return e(s)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return lr(e)?this:".priority"===rr(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=rr(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(W(".priority"!==r||1===ir(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(ar(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Mr(this.priorityNode_.val())+":");var n=e(zt)(this.value_);t+=n+":",t+="number"===n?In(this.value_):this.value_,this.lazyHash_=rn(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(zt)(n.value_),i=e(zt)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return W(a>=0,"Unknown leaf type: "+r),W(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Dr},set:function(e){Dr=e}}]),t}();Ur.VALUE_TYPE_ORDER=["object","boolean","number","string"];var jr,qr,Wr=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?yn(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return wr.MIN}},{key:"maxPost",value:function(){return new wr(mn,new Ur("[PRIORITY-POST]",Lr))}},{key:"makePost",value:function(e,t){var n=Ar(e);return new wr(t,new Ur("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Ir),Hr=new Wr,Br=Math.log(2),Vr=function(){"use strict";function t(n){e(o)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Br,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(s)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),zr=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new xr(o,a.node,xr.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new xr(o,a.node,xr.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new xr(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,xr.BLACK):(s(h,xr.BLACK),s(h,xr.RED))}return a}(new Vr(e.length));return new Nr(r||t,a)},Kr={},Gr=function(){"use strict";function t(n,r){e(o)(this,t),this.indexes_=n,this.indexSet_=r}return e(s)(t,[{key:"get",value:function(e){var t=ye(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Nr?t:null}},{key:"hasIndex",value:function(e){return me(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){W(e!==Cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(wr.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?zr(i,e.getCompare()):Kr;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(ge(this.indexes_,(function(t,i){var a=ye(r.indexSet_,i);if(W(a,"Missing index implementation for "+i),t===Kr){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(wr.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),zr(o,a.getCompare())}return Kr}var c=n.get(e.name),l=t;return c&&(l=l.remove(new wr(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(ge(this.indexes_,(function(t){if(t===Kr)return t;var r=n.get(e.name);return r?t.remove(new wr(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return W(Kr&&Hr,"ChildrenNode.ts has not been loaded"),jr=jr||new t({".priority":Kr},{".priority":Hr})}}]),t}(),Yr=function(){"use strict";function t(n,r,i){e(o)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Fr(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(s)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||qr}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?qr:t}},{key:"getChild",value:function(e){var t=rr(e);return null===t?this:this.getImmediateChild(t).getChild(ar(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(W(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new wr(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?qr:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=rr(e);if(null===n)return t;W(".priority"!==rr(e)||1===ir(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(ar(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Hr,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Mr(this.getPriority().val())+":"),this.forEachChild(Hr,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":rn(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new wr(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new wr(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new wr(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,wr.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,wr.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jr?-1:0}},{key:"withIndex",value:function(e){if(e===Cr||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Cr||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Hr),r=t.getIterator(Hr),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Cr?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return qr||(qr=new t(new Nr(Or),null,Gr.Default))}}]),t}();Yr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Jr=new(function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.call(this,new Nr(Or),Yr.EMPTY_NODE,Gr.Default)}return e(s)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return Yr.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(Yr));Object.defineProperties(wr,{MIN:{value:new wr(pn,Yr.EMPTY_NODE)},MAX:{value:new wr(mn,Jr)}}),Tr.__EMPTY_NODE=Yr.EMPTY_NODE,Ur.__childrenNodeConstructor=Yr,Er=Jr,function(e){Lr=e}(Jr);function Qr(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return Yr.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),W(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(zt)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new Ur(r,Qr(n))}if(t instanceof Array){var i=Yr.EMPTY_NODE;return wn(t,(function(e,n){if(me(t,e)&&"."!==e.substring(0,1)){var r=Qr(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(Qr(n))}var a=[],o=!1,s=t;if(wn(s,(function(e,t){if("."!==e.substring(0,1)){var n=Qr(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new wr(e,n)))}})),0===a.length)return Yr.EMPTY_NODE;var u=zr(a,Pr,(function(e){return e.name}),Or);if(o){var c=zr(a,Hr.getCompare());return new Yr(u,Qr(n),new Gr({".priority":c},{".priority":Hr}))}return new Yr(u,Qr(n),Gr.Default)}!function(e){Ar=e}(Qr);
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
 */
var Xr,$r,Zr=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).indexPath_=t,W(!lr(t)&&".priority"!==rr(t),"Can't create PathIndex with empty path or .priority key"),i}return e(s)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?yn(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=Qr(e),r=Yr.EMPTY_NODE.updateChild(this.indexPath_,n);return new wr(t,r)}},{key:"maxPost",value:function(){var e=Yr.EMPTY_NODE.updateChild(this.indexPath_,Jr);return new wr(mn,e)}},{key:"toString",value:function(){return sr(this.indexPath_,0).join("/")}}]),r}(Ir),ei=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?yn(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return wr.MIN}},{key:"maxPost",value:function(){return wr.MAX}},{key:"makePost",value:function(e,t){var n=Qr(e);return new wr(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Ir),ti=new ei,ni="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */Xr=0,$r=[];
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
 */
function ri(e){return{type:"value",snapshotNode:e}}function ii(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ai(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function oi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
 */
var si=function(){"use strict";function t(){e(o)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Hr}return e(s)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pn}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Hr}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
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
 */function ui(e){var t,n={};return e.isDefault()||(e.index_===Hr?t="$priority":e.index_===ti?t="$value":e.index_===Cr?t="$key":(W(e.index_ instanceof Zr,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=fe(t),e.startSet_&&(n.startAt=fe(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+fe(e.indexStartName_))),e.endSet_&&(n.endAt=fe(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+fe(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function ci(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Hr&&(t.i=e.index_.toString()),t}
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
 */var li=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this)).repoInfo_=t,u.onDataUpdate_=i,u.authTokenProvider_=a,u.appCheckTokenProvider_=s,u.log_=ln("p:rest:"),u.listens_={},u}return e(s)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=ui(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),ye(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=ui(e._queryParams),r=e._path.toString(),i=new oe;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(d)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+we(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=de(h.responseText)}catch(e){fn("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&fn("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}($n),hi=function(){"use strict";function t(){e(o)(this,t),this.rootNode_=Yr.EMPTY_NODE}return e(s)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
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
 */
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
 */
function di(){return{value:null,children:new Map}}function fi(e,t,n){if(lr(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=rr(t);e.children.has(r)||e.children.set(r,di()),fi(e.children.get(r),t=ar(t),n)}}function vi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){vi(r,new tr(t.toString()+"/"+e),n)}))}var pi,mi,yi=function(){"use strict";function t(n){e(o)(this,t),this.collection_=n,this.last_=null}return e(s)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wn(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),_i=function(){"use strict";function t(n,r){e(o)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new yi(n);var i=1e4+2e4*Math.random();Rn(this.reportStats_.bind(this),Math.floor(i))}return e(s)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;wn(t,(function(t,i){i>0&&me(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Rn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
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
 */function gi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(mi=pi||(pi={}))[mi.OVERWRITE=0]="OVERWRITE",mi[mi.MERGE=1]="MERGE",mi[mi.ACK_USER_WRITE=2]="ACK_USER_WRITE",mi[mi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var ki,bi=function(){"use strict";function t(n,r,i){e(o)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=pi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(s)(t,[{key:"operationForChild",value:function(e){if(lr(this.path)){if(null!=this.affectedTree.value)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new tr(e));return new t(nr(),n,this.revert)}return W(rr(this.path)===e,"operationForChild called for unrelated child."),new t(ar(this.path),this.affectedTree,this.revert)}}]),t}(),wi=function(){"use strict";function t(n,r,i){e(o)(this,t),this.source=n,this.path=r,this.snap=i,this.type=pi.OVERWRITE}return e(s)(t,[{key:"operationForChild",value:function(e){return lr(this.path)?new t(this.source,nr(),this.snap.getImmediateChild(e)):new t(this.source,ar(this.path),this.snap)}}]),t}(),Ii=function(){"use strict";function t(n,r,i){e(o)(this,t),this.source=n,this.path=r,this.children=i,this.type=pi.MERGE}return e(s)(t,[{key:"operationForChild",value:function(e){if(lr(this.path)){var n=this.children.subtree(new tr(e));return n.isEmpty()?null:n.value?new wi(this.source,nr(),n.value):new t(this.source,nr(),n)}return W(rr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,ar(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),Ti=function(){"use strict";function t(n,r,i){e(o)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(s)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(lr(e))return this.isFullyInitialized()&&!this.filtered_;var t=rr(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
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
 */function Ci(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw H("Should only compare child_ events.");var r=new wr(t.childName,t.snapshotNode),i=new wr(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Si(e,t){return{eventCache:e,serverCache:t}}function xi(e,t,n,r){return Si(new Ti(t,n,r),e.serverCache)}function Ei(e,t,n,r){return Si(e.eventCache,new Ti(t,n,r))}function Ri(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ni(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var Pi=function(){return ki||(ki=new Nr(_n)),ki},Oi=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Pi();e(o)(this,t),this.value=n,this.children=r}return e(s)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:nr(),value:this.value};if(lr(e))return null;var n=rr(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(ar(e),t);return null!=i?{path:cr(new tr(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(lr(e))return this;var n=rr(e),r=this.children.get(n);return null!==r?r.subtree(ar(e)):new t(null)}},{key:"set",value:function(e,n){if(lr(e))return new t(n,this.children);var r=rr(e),i=(this.children.get(r)||new t(null)).set(ar(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(lr(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=rr(e),r=this.children.get(n);if(r){var i,a=r.remove(ar(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(lr(e))return this.value;var t=rr(e),n=this.children.get(t);return n?n.get(ar(e)):null}},{key:"setTree",value:function(e,n){if(lr(e))return n;var r,i=rr(e),a=(this.children.get(i)||new t(null)).setTree(ar(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(nr(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(cr(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,nr(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(lr(e))return null;var i=rr(e),a=this.children.get(i);return a?a.findOnPath_(ar(e),cr(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,nr(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(lr(e))return this;this.value&&r(n,this.value);var i=rr(e),a=this.children.get(i);return a?a.foreachOnPath_(ar(e),cr(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(nr(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(cr(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return wn(e,(function(e,t){n=n.set(new tr(e),t)})),n}}]),t}(),Di=function(){"use strict";function t(n){e(o)(this,t),this.writeTree_=n}return e(s)(t,null,[{key:"empty",value:function(){return new t(new Oi(null))}}]),t}();function Ai(e,t,n){if(lr(t))return new Di(new Oi(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=hr(i,t);return a=a.updateChild(o,n),new Di(e.writeTree_.set(i,a))}var s=new Oi(n),u=e.writeTree_.setTree(t,s);return new Di(u)}function Li(e,t,n){var r=e;return wn(n,(function(e,n){r=Ai(r,cr(t,e),n)})),r}function Mi(e,t){if(lr(t))return Di.empty();var n=e.writeTree_.setTree(t,new Oi(null));return new Di(n)}function Fi(e,t){return null!=Ui(e,t)}function Ui(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(hr(n.path,t)):null}function ji(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Hr,(function(e,n){t.push(new wr(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new wr(e,n.value))})),t}function qi(e,t){if(lr(t))return e;var n=Ui(e,t);return new Di(null!=n?new Oi(n):e.writeTree_.subtree(t))}function Wi(e){return e.writeTree_.isEmpty()}function Hi(e,t){return Bi(nr(),e.writeTree_,t)}function Bi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(W(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Bi(cr(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(cr(e,".priority"),r)),n}
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
 */function Vi(e,t){return ia(t,e)}function zi(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function Ki(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));W(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&Gi(s,r.path)?i=!1:vr(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=Ji(e.allWrites,Yi,nr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Mi(e.visibleWrites,r.path):wn(r.children,(function(t){e.visibleWrites=Mi(e.visibleWrites,cr(r.path,t))}));return!0}return!1}function Gi(e,t){if(e.snap)return vr(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&vr(cr(e.path,n),t))return!0;return!1}function Yi(e){return e.visible}function Ji(e,t,n){for(var r=Di.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)vr(n,o)?r=Ai(r,s=hr(n,o),a.snap):vr(o,n)&&(s=hr(o,n),r=Ai(r,nr(),a.snap.getChild(s)));else{if(!a.children)throw H("WriteRecord should have .snap or .children");if(vr(n,o))r=Li(r,s=hr(n,o),a.children);else if(vr(o,n))if(lr(s=hr(o,n)))r=Li(r,nr(),a.children);else{var u=ye(a.children,rr(s));if(u){var c=u.getChild(ar(s));r=Ai(r,nr(),c)}}}}}return r}function Qi(e,t,n,r,i){if(r||i){var a=qi(e.visibleWrites,t);if(!i&&Wi(a))return n;if(i||null!=n||Fi(a,nr())){return Hi(Ji(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(vr(e.path,t)||vr(t,e.path))}),t),n||Yr.EMPTY_NODE)}return null}var o=Ui(e.visibleWrites,t);if(null!=o)return o;var s=qi(e.visibleWrites,t);return Wi(s)?n:null!=n||Fi(s,nr())?Hi(s,n||Yr.EMPTY_NODE):null}function Xi(e,t,n,r){return Qi(e.writeTree,e.treePath,t,n,r)}function $i(e,t){return function(e,t,n){var r=Yr.EMPTY_NODE,i=Ui(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Hr,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=qi(e.visibleWrites,t);return n.forEachChild(Hr,(function(e,t){var n=Hi(qi(a,new tr(e)),t);r=r.updateImmediateChild(e,n)})),ji(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return ji(qi(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Zi(e,t,n,r){return function(e,t,n,r,i){W(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=cr(t,n);if(Fi(e.visibleWrites,a))return null;var o=qi(e.visibleWrites,a);return Wi(o)?i.getChild(n):Hi(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function ea(e,t){return function(e,t){return Ui(e.visibleWrites,t)}(e.writeTree,cr(e.treePath,t))}function ta(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=qi(e.visibleWrites,t),c=Ui(u,nr());if(null!=c)s=c;else{if(null==n)return[];s=Hi(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),d=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),f=d.getNext();f&&l.length<i;)0!==h(f,r)&&l.push(f),f=d.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function na(e,t,n){return function(e,t,n,r){var i=cr(t,n),a=Ui(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?Hi(qi(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function ra(e,t){return ia(cr(e.treePath,t),e.writeTree)}function ia(e,t){return{treePath:e,writeTree:t}}
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
 */var aa=function(){"use strict";function t(){e(o)(this,t),this.changeMap=new Map}return e(s)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;W("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),W(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,oi(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ai(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ii(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw H("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,oi(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),oa=new(function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),sa=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(o)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(s)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return na(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ni(this.viewCache_),i=ta(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
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
 */function ua(e,t,n,r,i){var a,o,s=new aa;if(n.type===pi.OVERWRITE){var u=n;u.source.fromUser?a=ha(e,t,u.path,u.snap,r,i,s):(W(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!lr(u.path),a=la(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===pi.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=cr(n,r);da(t,rr(c))&&(s=ha(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=cr(n,r);da(t,rr(c))||(s=ha(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(W(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=va(e,t,c.path,c.children,r,i,o,s))}else if(n.type===pi.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=ea(r,n))return t;var s,u=new sa(r,t,i),c=t.eventCache.getNode();if(lr(n)||".priority"===rr(n)){var l;if(t.serverCache.isFullyInitialized())l=Xi(r,Ni(t));else{var h=t.serverCache.getNode();W(h instanceof Yr,"serverChildren would be complete if leaf node"),l=$i(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var d=rr(n),f=na(r,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=c.getImmediateChild(d)),(s=null!=f?e.filter.updateChild(c,d,f,ar(n),u,a):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(c,d,Yr.EMPTY_NODE,ar(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Xi(r,Ni(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=ea(r,nr()),xi(t,s,o,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=ea(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(lr(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return la(e,t,n,u.getNode().getChild(n),i,a,s,o);if(lr(n)){var c=new Oi(null);return u.getNode().forEachChild(Cr,(function(e,t){c=c.set(new tr(e),t)})),va(e,t,n,c,i,a,s,o)}return t}var l=new Oi(null);return r.foreach((function(e,t){var r=cr(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),va(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==pi.LISTEN_COMPLETE)throw H("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Ei(t,a.getNode(),a.isFullyInitialized()||lr(n),a.isFiltered());return ca(e,o,n,r,oa,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ri(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(ri(Ri(t)))}}(t,a,h),{viewCache:a,changes:h}}function ca(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=ea(r,n))return t;if(lr(n))if(W(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Ni(t),l=$i(r,c instanceof Yr?c:Yr.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Xi(r,Ni(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var d=rr(n);if(".priority"===d){W(1===ir(n),"Can't have a priority with additional path components");var f=u.getNode(),v=Zi(r,n,f,s=t.serverCache.getNode());o=null!=v?e.filter.updatePriority(f,v):u.getNode()}else{var p,m=ar(n);if(u.isCompleteForChild(d)){s=t.serverCache.getNode();var y=Zi(r,n,u.getNode(),s);p=null!=y?u.getNode().getImmediateChild(d).updateChild(m,y):u.getNode().getImmediateChild(d)}else p=na(r,d,t.serverCache);o=null!=p?e.filter.updateChild(u.getNode(),d,p,m,i,a):u.getNode()}}return xi(t,o,u.isFullyInitialized()||lr(n),e.filter.filtersNodes())}function la(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(lr(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var d=rr(n);if(!c.isCompleteForPath(n)&&ir(n)>1)return t;var f=ar(n),v=c.getNode().getImmediateChild(d).updateChild(f,r);u=".priority"===d?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),d,v,f,oa,null)}var p=Ei(t,u,c.isFullyInitialized()||lr(n),l.filtersNodes());return ca(e,p,n,i,new sa(i,p,a),s)}function ha(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new sa(i,t,a);if(lr(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=xi(t,u,!0,e.filter.filtersNodes());else{var h=rr(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=xi(t,u,c.isFullyInitialized(),c.isFiltered());else{var d,f=ar(n),v=c.getNode().getImmediateChild(h);if(lr(f))d=r;else{var p=l.getCompleteChild(h);d=null!=p?".priority"===or(f)&&p.getChild(ur(f)).isEmpty()?p:p.updateChild(f,r):Yr.EMPTY_NODE}if(v.equals(d))s=t;else s=xi(t,e.filter.updateChild(c.getNode(),h,d,f,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function da(e,t){return e.eventCache.isCompleteForChild(t)}function fa(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function va(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=lr(n)?r:new Oi(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=fa(0,t.serverCache.getNode().getImmediateChild(n),r);c=la(e,c,new tr(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var h=fa(0,t.serverCache.getNode().getImmediateChild(n),r);c=la(e,c,new tr(n),h,i,a,o,s)}})),c}var pa;function ma(e,t){var n=Ni(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!lr(t)&&!n.getImmediateChild(rr(t)).isEmpty())?n.getChild(t):null}function ya(e,t,n,r){t.type===pi.MERGE&&null!==t.source.queryId&&(W(Ni(e.viewCache_),"We should always have a full cache before handling merges"),W(Ri(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=ua(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,W(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),W(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),W(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,_a(e,s.changes,s.viewCache.eventCache.getNode(),null)}function _a(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ci(e,i,"child_removed",t,r,n),Ci(e,i,"child_added",t,r,n),Ci(e,i,"child_moved",a,r,n),Ci(e,i,"child_changed",t,r,n),Ci(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var ga;function ka(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return W(null!=a,"SyncTree gave us an op for an invalid query."),ya(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value;o=o.concat(ya(d,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function ba(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||ma(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var wa=function t(n){"use strict";e(o)(this,t),this.listenProvider_=n,this.syncPointTree_=new Oi(null),this.pendingWriteTree_={visibleWrites:Di.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function Ia(e,t,n,r,i){return function(e,t,n,r,i){W(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ai(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ra(e,new wi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ta(e,t,n,r){!function(e,t,n,r){W(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Li(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);var i=Oi.fromObject(n);return Ra(e,new Ii({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Ca(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=zi(e.pendingWriteTree_,t),i=Ki(e.pendingWriteTree_,t);if(i){var a=new Oi(null);return null!=r.snap?a=a.set(nr(),!0):wn(r.children,(function(e){a=a.set(new tr(e),!0)})),Ra(e,new bi(r.path,a,n))}return[]}function Sa(e,t,n){return Ra(e,new wi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function xa(e,t,n,r){var i=Oa(e,r);if(null!=i){var a=Da(i),o=a.path,s=a.queryId,u=hr(o,t);return Aa(e,o,new wi(gi(s),u,n))}return[]}function Ea(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=ba(n,hr(e,t));if(r)return r}));return Qi(r,t,i,n,!0)}function Ra(e,t){return Na(t,e.syncPointTree_,null,Vi(e.pendingWriteTree_,nr()))}function Na(e,t,n,r){if(lr(e.path))return Pa(e,t,n,r);var i=t.get(nr());null==n&&null!=i&&(n=ba(i,nr()));var a=[],o=rr(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=ra(r,o);a=a.concat(Na(s,u,c,l))}return i&&(a=a.concat(ka(i,e,r,n))),a}function Pa(e,t,n,r){var i=t.get(nr());null==n&&null!=i&&(n=ba(i,nr()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=ra(r,t),u=e.operationForChild(t);u&&(a=a.concat(Pa(u,i,o,s)))})),i&&(a=a.concat(ka(i,e,r,n))),a}function Oa(e,t){return e.tagToQueryMap.get(t)}function Da(e){var t=e.indexOf("$");return W(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new tr(e.substr(0,t))}}function Aa(e,t,n){var r=e.syncPointTree_.get(t);return W(r,"Missing sync point for query tag that we're tracking"),ka(r,n,Vi(e.pendingWriteTree_,t),null)}
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
 */
var La=function(){"use strict";function t(n){e(o)(this,t),this.node_=n}return e(s)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Ma=function(){"use strict";function t(n,r){e(o)(this,t),this.syncTree_=n,this.path_=r}return e(s)(t,[{key:"getImmediateChild",value:function(e){var n=cr(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return Ea(this.syncTree_,this.path_)}}]),t}(),Fa=function(e,t,n){return e&&"object"==typeof e?(W(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ua(e[".sv"],t,n):"object"==typeof e[".sv"]?ja(e[".sv"],t):void W(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ua=function(e,t,n){if("timestamp"===e)return n.timestamp;W(!1,"Unexpected server value: "+e)},ja=function(e,t,n){e.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&W(!1,"Unexpected increment value: "+r);var i=t.node();if(W(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},qa=function(e,t,n,r){return Ha(t,new Ma(n,e),r)},Wa=function(e,t,n){return Ha(e,new La(t),n)};function Ha(e,t,n){var r,i=e.getPriority().val(),a=Fa(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Fa(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new Ur(s,Qr(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new Ur(a))),u.forEachChild(Hr,(function(e,i){var a=Ha(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
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
 */var Ba=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(o)(this,t),this.name=n,this.parent=r,this.node=i};function Va(e,t){for(var n=t instanceof tr?t:new tr(t),r=e,i=rr(n);null!==i;){var a=ye(r.node.children,i)||{children:{},childCount:0};r=new Ba(i,r,a),i=rr(n=ar(n))}return r}function za(e){return e.node.value}function Ka(e,t){e.node.value=t,Xa(e)}function Ga(e){return e.node.childCount>0}function Ya(e,t){wn(e.node.children,(function(n,r){t(new Ba(n,e,r))}))}function Ja(e,t,n,r){n&&!r&&t(e),Ya(e,(function(e){Ja(e,t,!0,r)})),n&&r&&t(e)}function Qa(e){return new tr(null===e.parent?e.name:Qa(e.parent)+"/"+e.name)}function Xa(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===za(e)&&!Ga(e)}(n),i=me(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Xa(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Xa(e))}
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
 */(e.parent,e.name,e)}var $a=/[\[\].#$\/\u0000-\u001F\u007F]/,Za=/[\[\].#$\u0000-\u001F\u007F]/,eo=10485760,to=function(e){return"string"==typeof e&&0!==e.length&&!$a.test(e)},no=function(e){return"string"==typeof e&&0!==e.length&&!Za.test(e)},ro=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!vn(e)||e&&"object"==typeof e&&me(e,".sv")},io=function(e,t,n,r){r&&void 0===t||ao(Ee(e,"value"),t,n)},ao=function(e,t,n){var r=n instanceof tr?new pr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+yr(r));if("function"==typeof t)throw new Error(e+"contains a function "+yr(r)+" with contents = "+t.toString());if(vn(t))throw new Error(e+"contains "+t.toString()+" "+yr(r));if("string"==typeof t&&t.length>3495253.3333333335&&Ne(t)>eo)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+yr(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(wn(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!to(t)))throw new Error(e+" contains an invalid key ("+t+") "+yr(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Ne(s),mr(o),ao(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Ne(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+yr(r)+" in addition to actual children.")}},oo=function(e,t,n,r){if(!r||void 0!==t){var i=Ee(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");var a=[];wn(t,(function(e,t){var r=new tr(e);if(ao(i,t,cr(n,r)),".priority"===or(r)&&!ro(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(r)})),function(e,t){var n,r;for(n=0;n<t.length;n++)for(var i=sr(r=t[n]),a=0;a<i.length;a++)if(".priority"===i[a]&&a===i.length-1);else if(!to(i[a]))throw new Error(e+"contains an invalid key ("+i[a]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(dr);var o=null;for(n=0;n<t.length;n++){if(r=t[n],null!==o&&vr(o,r))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}}(i,a)}},so=function(e,t,n,r){if(!(r&&void 0===n||no(n)))throw new Error(Ee(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},uo=function(e,t){if(".info"===rr(t))throw new Error(e+" failed = Can't modify data under /.info/")},co=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!to(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),no(e)}(n))throw new Error(Ee(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},lo=function t(){"use strict";e(o)(this,t),this.eventLists_=[],this.recursionDepth_=0};function ho(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||fr(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function fo(e,t,n){ho(e,n),vo(e,(function(e){return vr(e,t)||vr(t,e)}))}function vo(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(po(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function po(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();on&&cn("event: "+n.toString()),En(r)}}}
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
 */var mo="repo_interrupt",yo=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=di(),this.transactionQueueTree_=new Ba,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(s)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function _o(e,t,n){if(e.stats_=Hn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new li(e.repoInfo_,(function(t,n,r,i){bo(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return wo(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{fe(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new kr(e.repoInfo_,t,(function(t,n,r,i){bo(e,t,n,r,i)}),(function(t){wo(e,t)}),(function(t){!function(e,t){wn(t,(function(t,n){Io(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new _i(e.stats_,e.server_)},a=r.toString(),Wn[a]||(Wn[a]=i()),Wn[a]),e.infoData_=new hi,e.infoSyncTree_=new wa({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=Sa(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),Io(e,"connected",!1),e.serverSyncTree_=new wa({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);fo(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function go(e){var t=e.infoData_.getNode(new tr(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ko(e){return(t=(t={timestamp:go(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function bo(e,t,n,r,i){e.dataUpdateCount++;var a=new tr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=ge(n,(function(e){return Qr(e)}));o=function(e,t,n,r){var i=Oa(e,r);if(i){var a=Da(i),o=a.path,s=a.queryId,u=hr(o,t),c=Oi.fromObject(n);return Aa(e,o,new Ii(gi(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=Qr(n);o=xa(e.serverSyncTree_,a,u,i)}else if(r){var c=ge(n,(function(e){return Qr(e)}));o=function(e,t,n){var r=Oi.fromObject(n);return Ra(e,new Ii({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=Qr(n);o=Sa(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=Oo(e,a)),fo(e.eventQueue_,h,o)}function wo(e,t){Io(e,"connected",t),!1===t&&function(e){xo(e,"onDisconnectEvents");var t=ko(e),n=di();vi(e.onDisconnect_,nr(),(function(r,i){var a=qa(r,i,e.serverSyncTree_,t);fi(n,r,a)}));var r=[];vi(n,nr(),(function(t,n){r=r.concat(Sa(e.serverSyncTree_,t,n));var i=Fo(e,t);Oo(e,i)})),e.onDisconnect_=di(),fo(e.eventQueue_,nr(),r)}(e)}function Io(e,t,n){var r=new tr("/.info/"+t),i=Qr(n);e.infoData_.updateSnapshot(r,i);var a=Sa(e.infoSyncTree_,r,i);fo(e.eventQueue_,r,a)}function To(e){return e.nextWriteId_++}function Co(e,t,n,r,i){xo(e,"set",{path:t.toString(),value:n,priority:r});var a=ko(e),o=Qr(n,r),s=Ea(e.serverSyncTree_,t),u=Wa(o,s,a),c=To(e),l=Ia(e.serverSyncTree_,t,u,c,!0);ho(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),(function(n,r){var a="ok"===n;a||fn("set at "+t+" failed: "+n);var o=Ca(e.serverSyncTree_,c,!a);fo(e.eventQueue_,t,o),Eo(e,i,n,r)}));var h=Fo(e,t);Oo(e,h),fo(e.eventQueue_,h,[])}function So(e){e.persistentConnection_&&e.persistentConnection_.interrupt(mo)}function xo(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),cn.apply(void 0,[a].concat(e(l)(r)))}function Eo(e,t,n,r){t&&En((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),i=e;r&&(i+=": "+r);var a=new Error(i);a.code=e,t(a)}}))}function Ro(e,t,n){return Ea(e.serverSyncTree_,t,n)||Yr.EMPTY_NODE}function No(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Mo(e,t),za(t)){var n=Ao(e,t);W(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Po(e,Qa(t),n)}else Ga(t)&&Ya(t,(function(t){No(e,t)}))}function Po(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=Ro(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];W(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=hr(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){xo(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(Ca(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Mo(e,Va(e.transactionQueueTree_,t)),No(e,e.transactionQueueTree_),fo(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)En(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{fn("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Oo(e,t)}}),o)}function Oo(e,t){var n=Do(e,t),r=Qa(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=hr(n,u.path),l=!1,h=void 0;if(W(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(Ca(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(Ca(e.serverSyncTree_,u.currentWriteId,!0));else{var d=Ro(e,u.path,o);u.currentInputSnapshot=d;var f=t[r].update(d.val());if(void 0!==f){ao("transaction failed: Data returned ",f,u.path);var v=Qr(f);"object"==typeof f&&null!=f&&me(f,".priority")||(v=v.updatePriority(d.getPriority()));var p=u.currentWriteId,m=ko(e),y=Wa(v,d,m);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=y,u.currentWriteId=To(e),o.splice(o.indexOf(p),1),a=(a=a.concat(Ia(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(Ca(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",a=a.concat(Ca(e.serverSyncTree_,u.currentWriteId,!0))}fo(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Mo(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)En(i[u]);No(e,e.transactionQueueTree_)}(e,Ao(e,n),r),r}function Do(e,t){var n,r=e.transactionQueueTree_;for(n=rr(t);null!==n&&void 0===za(r);)r=Va(r,n),n=rr(t=ar(t));return r}function Ao(e,t){var n=[];return Lo(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Lo(e,t,n){var r=za(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);Ya(t,(function(t){Lo(e,t,n)}))}function Mo(e,t){var n=za(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Ka(t,n.length>0?n:void 0)}Ya(t,(function(t){Mo(e,t)}))}function Fo(e,t){var n=Qa(Do(e,t)),r=Va(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Uo(e,t)})),Uo(e,r),Ja(r,(function(t){Uo(e,t)})),n}function Uo(e,t){var n=za(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(W(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(W(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ca(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Ka(t,void 0):n.length=a+1,fo(e.eventQueue_,Qa(t),i);for(var s=0;s<r.length;s++)En(r[s])}}
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
 */var jo=function(e,t){var n=qo(e),r=n.namespace;"firebase.com"===n.domain&&dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Fn(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new tr(n.pathString)}},qo=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var d=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):fn("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),a=r}"ns"in d&&(a=d.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Wo=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(s)(t,[{key:"key",get:function(){return lr(this._path)?null:or(this._path)}},{key:"ref",get:function(){return new Ho(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=ci(this._queryParams),t=kn(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return ci(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Pe(e))instanceof t))return!1;var n=this._repo===e._repo,r=fr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Ho=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i){return e(o)(this,r),n.call(this,t,i,new si,!1)}return e(s)(r,[{key:"parent",get:function(){var e=ur(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Wo);function Bo(e,t){return(e=Pe(e))._checkNotDeleted("ref"),void 0!==t?Vo(e._root,t):e._root}function Vo(e,t){var n,r,i,a;return null===rr((e=Pe(e))._path)?(n="child",r="path",a=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),so(n,r,i,a)):so("child","path",t,!1),new Ho(e._repo,cr(e._path,t))}function zo(e,t){e=Pe(e),uo("set",e._path),io("set",t,e._path,!1);var n=new oe;return Co(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}function Ko(e,t){oo("update",t,e._path,!1);var n=new oe;return function(e,t,n,r){xo(e,"update",{path:t.toString(),value:n});var i=!0,a=ko(e),o={};if(wn(n,(function(n,r){i=!1,o[n]=qa(cr(t,n),Qr(r),e.serverSyncTree_,a)})),i)cn("update() called with empty data.  Don't do anything."),Eo(0,r,"ok",void 0);else{var s=To(e),u=Ta(e.serverSyncTree_,t,o,s);ho(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,i){var a="ok"===n;a||fn("update at "+t+" failed: "+n);var o=Ca(e.serverSyncTree_,s,!a),u=o.length>0?Oo(e,t):t;fo(e.eventQueue_,u,o),Eo(0,r,n,i)})),wn(n,(function(n){var r=Fo(e,cr(t,n));Oo(e,r)})),fo(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}!function(e){W(!pa,"__referenceConstructor has already been defined"),pa=e}(Ho),function(e){W(!ga,"__referenceConstructor has already been defined"),ga=e}(Ho);
/**
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
 */
var Go={},Yo=!1;function Jo(e,t,n,r){e.repoInfo_=new Fn("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function Qo(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),cn("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=jo(a,i),u=s.repoInfo,c=void 0;void 0!==w&&w.env&&(c=w.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=jo(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new On(On.OWNER):new Pn(e.name,e.options,t);co("Invalid Firebase Database URL",s),lr(s.path)||dn("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=Go[t.name];i||(i={},Go[t.name]=i);var a=i[e.toURLString()];a&&dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new yo(e,Yo,n,r),i[e.toURLString()]=a,a}(u,e,l,new Nn(e.name,n));return new Xo(h,e)}var Xo=function(){"use strict";function t(n,r){e(o)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(s)(t,[{key:"_repo",get:function(){return this._instanceStarted||(_o(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Ho(this._repo,nr())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=Go[t])&&n[e.key]===e||dn("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),So(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&dn("Cannot call "+e+" on a deleted database.")}}]),t}();function $o(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=Pe(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&dn("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new On(On.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:se(r.mockUserToken,e.app.options.projectId);a=new On(o)}Jo(i,t,n,a)}kr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},kr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){Yt=xt,wt(new Oe("database",(function(e,t){var n=t.instanceIdentifier;return Qo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Nt(Kt,Gt,e),Nt(Kt,Gt,"esm2017")}
/**
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
 */();f=i("ds8z5"),u=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),c=i("hKHmD");var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.default=function(e,t,n){return ts(e,t,n)};var es=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function ts(e,t,n){return(ts="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=es.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var ns=i("fVNic");v=i("eYQtU"),d=i("1t1Wn"),l=i("8nrFW"),C=i("2MbLg"),h=i("2TvXO");function rs(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function is(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var as=is,os=new ce("auth","Firebase",is()),ss=new Ve("@firebase/auth");function us(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;ss.logLevel<=Le.ERROR&&(a=ss).error.apply(a,["Auth (".concat(xt,"): ").concat(t)].concat(e(l)(r)))}
/**
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
 */function cs(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw ds.apply(void 0,[t].concat(e(l)(r)))}function ls(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return ds.apply(void 0,[t].concat(e(l)(r)))}function hs(t,n,r){var i=Object.assign(Object.assign({},as()),e(c)({},n,r));return new ce("auth","Firebase",i).create(n,{appName:t.name})}function ds(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(l)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(l)(u)))}return(a=os).create.apply(a,[t].concat(e(l)(r)))}function fs(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw ds.apply(void 0,[n].concat(e(l)(i)))}function vs(e){var t="INTERNAL ASSERTION FAILED: "+e;throw us(t),new Error(t)}function ps(e,t){e||vs(t)}
/**
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
 */var ms=new Map;function ys(e){ps(e instanceof Function,"Expected a class definition");var t=ms.get(e);return t?(ps(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ms.set(e,t),t)}
/**
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
 */function _s(e,t){var n=It(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ke(n.getOptions(),null!=t?t:{}))return r;cs(r,"already-initialized")}return n.initialize({options:t})}
/**
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
 */
function gs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ks(){return"http:"===bs()||"https:"===bs()}function bs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function ws(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!ks()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
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
 */
var Is=function(){"use strict";function t(n,r){e(o)(this,t),this.shortDelay=n,this.longDelay=r,ps(r>n,"Short delay should be less than long delay!"),this.isMobile=X()||$()}return e(s)(t,[{key:"get",value:function(){return ws()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
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
 */function Ts(e,t){ps(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
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
 */var Cs,Ss=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),xs=(Cs={},e(c)(Cs,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(Cs,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(Cs,"INVALID_IDENTIFIER","invalid-email"),e(c)(Cs,"MISSING_CONTINUE_URI","internal-error"),e(c)(Cs,"INVALID_PASSWORD","wrong-password"),e(c)(Cs,"MISSING_PASSWORD","internal-error"),e(c)(Cs,"EMAIL_EXISTS","email-already-in-use"),e(c)(Cs,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(Cs,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(Cs,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(Cs,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(Cs,"MISSING_REQ_TYPE","internal-error"),e(c)(Cs,"EMAIL_NOT_FOUND","user-not-found"),e(c)(Cs,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(Cs,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(Cs,"INVALID_OOB_CODE","invalid-action-code"),e(c)(Cs,"MISSING_OOB_CODE","internal-error"),e(c)(Cs,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(Cs,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(Cs,"TOKEN_EXPIRED","user-token-expired"),e(c)(Cs,"USER_NOT_FOUND","user-token-expired"),e(c)(Cs,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(Cs,"INVALID_CODE","invalid-verification-code"),e(c)(Cs,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(Cs,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(Cs,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(Cs,"SESSION_EXPIRED","code-expired"),e(c)(Cs,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(Cs,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(Cs,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(Cs,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(Cs,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(Cs,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(Cs,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(Cs,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(Cs,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(Cs,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(Cs,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Cs),Es=new Is(3e4,6e4);function Rs(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ns(e,t,n,r){return Ps.apply(this,arguments)}function Ps(){return Ps=e(u)(e(h).mark((function t(n,r,i,a){var o,s=arguments;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",Os(n,o,e(u)(e(h).mark((function t(){var o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=we(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Ss.fetch()(Ms(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Ps.apply(this,arguments)}function Os(e,t,n){return Ds.apply(this,arguments)}function Ds(){return(Ds=e(u)(e(h).mark((function t(n,r,i){var a,o,s,u,c,l,f,v,p;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},xs),r),t.prev=2,o=new Fs(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Us(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(d)(c.split(" : "),2),f=l[0],v=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Us(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Us(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Us(n,"user-disabled",u);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!v){t.next=34;break}throw hs(n,p,v);case 34:cs(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ue)){t.next=41;break}throw t.t0;case 41:cs(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function As(e,t,n,r){return Ls.apply(this,arguments)}function Ls(){return Ls=e(u)(e(h).mark((function t(n,r,i,a){var o,s,u=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Ns(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&cs(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Ls.apply(this,arguments)}function Ms(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Ts(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Fs=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(ls(n.auth,"network-request-failed"))}),Es.get())}))}return e(s)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Us(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ls(e,t,r);return i.customData._tokenResponse=n,i}function js(e,t){return qs.apply(this,arguments)}function qs(){return(qs=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ws(e,t){return Hs.apply(this,arguments)}function Hs(){return(Hs=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */function Bs(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function Vs(){return Vs=e(u)(e(h).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=Pe(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,fs((o=Ks(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Bs(zs(o.auth_time)),issuedAtTime:Bs(zs(o.iat)),expirationTime:Bs(zs(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Vs.apply(this,arguments)}function zs(e){return 1e3*Number(e)}function Ks(t){var n,r=e(d)(t.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return us("JWT malformed, contained fewer than 3 sections"),null;try{var s=G(a);return s?JSON.parse(s):(us("Failed to decode base64 JWT payload"),null)}catch(e){return us("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function Gs(e,t){return Ys.apply(this,arguments)}function Ys(){return Ys=
/**
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
 */
e(u)(e(h).mark((function t(n,r){var i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ue&&Js(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Ys.apply(this,arguments)}function Js(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */var Qs=function(){"use strict";function t(n){e(o)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(s)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(u)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Xs=function(){"use strict";function t(n,r){e(o)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(s)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
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
 */function $s(e){return Zs.apply(this,arguments)}function Zs(){return(Zs=
/**
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
 */
e(u)(e(h).mark((function t(n){var r,i,a,o,s,u,c,l,d,f,v;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Gs(n,Ws(i,{idToken:a}));case 7:fs(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?nu(s.providerUserInfo):[],c=tu(n.providerData,u),l=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Xs(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function eu(){return(eu=e(u)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Pe(n),e.next=3,$s(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tu(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(l)(r).concat(e(l)(n))}function nu(e){return e.map((function(e){var t=e.providerId,n=rs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ru(e,t){return iu.apply(this,arguments)}function iu(){return(iu=
/**
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
 */
e(u)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Os(n,{},e(u)(e(h).mark((function t(){var i,a,o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=we({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Ms(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ss.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var au=function(){"use strict";function t(){e(o)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(s)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){fs(e.idToken,"internal-error"),fs(void 0!==e.idToken,"internal-error"),fs(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,fs(n=Ks(t),"internal-error"),fs(void 0!==n.exp,"internal-error"),fs(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(fs(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(u)(e(h).mark((function i(){var a,o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ru(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return vs("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(fs("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(fs("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(fs("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
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
 */function ou(e,t){fs("string"==typeof e||void 0===e,"internal-error",{appName:t})}var su=function(){"use strict";function t(n){e(o)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,s=rs(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(l)(s.providerData):[],this.metadata=new Xs(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(s)(t,[{key:"getIdToken",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Gs(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(fs(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Vs.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return eu.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(fs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){fs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(h).mark((function i(){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,$s(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Gs(t,js(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,_=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,g=n.uid,k=n.emailVerified,b=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;fs(g&&I,e,"internal-error");var T=au.fromJSON(this.name,I);fs("string"==typeof g,e,"internal-error"),ou(h,e.name),ou(d,e.name),fs("boolean"==typeof k,e,"internal-error"),fs("boolean"==typeof b,e,"internal-error"),ou(f,e.name),ou(v,e.name),ou(p,e.name),ou(m,e.name),ou(y,e.name),ou(_,e.name);var C=new t({uid:g,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:_});return w&&Array.isArray(w)&&(C.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(u)(e(h).mark((function a(){var o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new au).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,$s(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),uu=function(){"use strict";function t(){e(o)(this,t),this.type="NONE",this.storage={}}return e(s)(t,[{key:"_isAvailable",value:function(){return e(u)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(u)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
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
 */uu.type="NONE";var cu=uu;
/**
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
 */function lu(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var hu=function(){"use strict";function t(n,r,i){e(o)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,s=a.config,u=a.name;this.fullUserKey=lu(this.userKey,s.apiKey,u),this.fullPersistenceKey=lu("persistence",s.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(s)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?su._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(u)(e(h).mark((function a(){var o,s,c,l,d,f,v,p,m,y,_,g,k;return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(ys(cu),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(u)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),s=o[0]||ys(cu),c=lu(i,n.config.apiKey,n.name),l=null,d=!0,f=!1,v=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(d=(m=p.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(c);case 16:if(!(_=a.sent)){a.next=22;break}return g=su._fromJSON(n,_),y!==s&&(l=g),s=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),f=!0,v=a.t1;case 35:a.prev=35,a.prev=36,d||null==p.return||p.return();case 38:if(a.prev=38,!f){a.next=41;break}throw v;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new t(s,n,i));case 46:if(s=k[0],!l){a.next=50;break}return a.next=50,s._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(u)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(s,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
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
 */function du(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_u(t))return"Blackberry";if(gu(t))return"Webos";if(vu(t))return"Safari";if((t.includes("chrome/")||pu(t))&&!t.includes("edge/"))return"Chrome";if(yu(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function fu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/firefox\//i.test(e)}function vu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/crios\//i.test(e)}function mu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/iemobile/i.test(e)}function yu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/android/i.test(e)}function _u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/blackberry/i.test(e)}function gu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/webos/i.test(e)}function ku(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bu(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return ku(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wu(){return((e=Q()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Iu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return ku(e)||yu(e)||gu(e)||_u(e)||/windows phone/i.test(e)||mu(e)}
/**
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
 */
function Tu(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=du(Q());break;case"Worker":t="".concat(du(Q()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(xt,"/").concat(r)}
/**
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
 */var Cu=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.queue=[]}return e(s)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a,o,s,u,c,l,d,f,v,p,m,y,_;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=n.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){e.next=16;break}return d=l.value,e.next=12,d(t);case 12:d.onAbort&&a.push(d.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),f=!0,v=!1,p=void 0,e.prev=36,m=a[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){_=y.value;try{_()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),v=!0,p=e.t2;case 44:e.prev=44,e.prev=45,f||null==m.return||m.return();case 47:if(e.prev=47,!v){e.next=50;break}throw p;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Su=function(){"use strict";function t(n,r,i){e(o)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eu(this),this.idTokenSubscription=new Eu(this),this.beforeStateQueue=new Cu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=os,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(s)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=ys(n));var r=this;return this._initializationPromise=this.queue(e(u)(e(h).mark((function i(){var a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,hu.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a,o,s,u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return fs(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,$s(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Pe(t):null)&&fs(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(u)(e(h).mark((function i(){return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&fs(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(ys(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ce("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(u)(e(h).mark((function i(){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return fs(i=t&&ys(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,hu.create(n,[ys(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(u)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fs(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return fs(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tu(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
/**
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
 */function xu(e){return Pe(e)}var Eu=function(){"use strict";function t(n){var r,i,a=this;e(o)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Se((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(s)(t,[{key:"next",get:function(){return fs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function Ru(t,n,r){var i=xu(t);fs(i._canInitEmulator,i,"emulator-config-failed"),fs(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Nu(n),s=function(t){var n=Nu(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Pu(i.substr(o.length+1))}}var s=e(d)(i.split(":"),2);return{host:s[0],port:Pu(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Nu(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pu(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Ou=function(){"use strict";function t(n,r){e(o)(this,t),this.providerId=n,this.signInMethod=r}return e(s)(t,[{key:"toJSON",value:function(){return vs("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return vs("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return vs("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return vs("not implemented")}}]),t}();function Du(e,t){return Au.apply(this,arguments)}function Au(){return(Au=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lu(e,t){return Mu.apply(this,arguments)}function Mu(){return(Mu=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signInWithPassword",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fu(e,t){return Uu.apply(this,arguments)}function Uu(){return(Uu=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signInWithEmailLink",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ju(e,t){return qu.apply(this,arguments)}function qu(){return(qu=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signInWithEmailLink",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Wu=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(o)(this,r),(s=n.call(this,"password",a))._email=t,s._password=i,s._tenantId=u,s}return e(s)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Lu(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Fu(t,{email:n._email,oobCode:n._password}));case 5:cs(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(u)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Du(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",ju(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:cs(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Ou);function Hu(e,t){return Bu.apply(this,arguments)}function Bu(){return(Bu=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signInWithIdp",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Vu=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(s)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Hu(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Hu(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Hu(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=we(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cs("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=rs(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Ou);function zu(e,t){return Ku.apply(this,arguments)}function Ku(){return(Ku=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ns(n,"POST","/v1/accounts:sendVerificationCode",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Gu(){return(Gu=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signInWithPhoneNumber",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yu(){return(Yu=e(u)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,As(n,"POST","/v1/accounts:signInWithPhoneNumber",Rs(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Us(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Ju=e(c)({},"USER_NOT_FOUND","user-not-found");function Qu(){return(Qu=e(u)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",As(n,"POST","/v1/accounts:signInWithPhoneNumber",Rs(n,i),Ju));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var Xu=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Gu.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Yu.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Qu.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Ou);
/**
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
 */var $u=function(){"use strict";function t(n){var r,i,a,s,u,c;e(o)(this,t);var l=Ie(Te(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);fs(h&&d&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=d,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(s)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Ie(Te(e)).link,n=t?Ie(Te(t)).deep_link_id:null,r=Ie(Te(e)).deep_link_id;return(r?Ie(Te(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
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
 */
var Zu=function(){"use strict";function t(){e(o)(this,t),this.providerId=t.PROVIDER_ID}return e(s)(t,null,[{key:"credential",value:function(e,t){return Wu._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=$u.parseLink(t);return fs(n,"argument-error"),Wu._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Zu.PROVIDER_ID="password",Zu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Zu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
var ec=function(){"use strict";function t(n){e(o)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(s)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),tc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(s)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(l)(this.scopes)}}]),r}(ec),nc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.call(this,"facebook.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Vu._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(tc);
/**
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
 */nc.FACEBOOK_SIGN_IN_METHOD="facebook.com",nc.PROVIDER_ID="facebook.com";
/**
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
 */
var rc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t;return e(o)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(s)(r,null,[{key:"credential",value:function(e,t){return Vu._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(tc);rc.GOOGLE_SIGN_IN_METHOD="google.com",rc.PROVIDER_ID="google.com";
/**
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
 */
var ic=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.call(this,"github.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Vu._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(tc);ic.GITHUB_SIGN_IN_METHOD="github.com",ic.PROVIDER_ID="github.com";
/**
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
 */
var ac=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.call(this,"twitter.com")}return e(s)(r,null,[{key:"credential",value:function(e,t){return Vu._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(tc);function oc(e,t){return sc.apply(this,arguments)}function sc(){return(sc=
/**
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
 */
e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",As(n,"POST","/v1/accounts:signUp",Rs(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */ac.TWITTER_SIGN_IN_METHOD="twitter.com",ac.PROVIDER_ID="twitter.com";var uc=function(){"use strict";function t(n){e(o)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(s)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(u)(e(h).mark((function o(){var s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,su._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=cc(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(u)(e(h).mark((function a(){var o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=cc(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function cc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
var lc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a,s){var u,c;return e(o)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=s,Object.setPrototypeOf(e(f)(u),r.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return e(s)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ue);function hc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw lc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function dc(e,t){return fc.apply(this,arguments)}function fc(){return fc=e(u)(e(h).mark((function t(n,r){var i,a,o=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Gs,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",uc._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),fc.apply(this,arguments)}function vc(e,t){return pc.apply(this,arguments)}function pc(){return pc=
/**
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
 */
e(u)(e(h).mark((function t(n,r){var i,a,o,s,u,c,l,d=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],o=n.auth,s="reauthenticate",e.prev=4,e.next=7,Gs(n,hc(o,s,r,n),i);case 7:return fs((u=e.sent).idToken,o,"internal-error"),fs(c=Ks(u.idToken),o,"internal-error"),l=c.sub,fs(n.uid===l,o,"user-mismatch"),e.abrupt("return",uc._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&cs(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),pc.apply(this,arguments)}function mc(e,t){return yc.apply(this,arguments)}function yc(){return yc=
/**
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
 */
e(u)(e(h).mark((function t(n,r){var i,a,o,s,u=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,hc(n,a,r);case 4:return o=e.sent,e.next=7,uc._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),yc.apply(this,arguments)}function _c(e,t){return gc.apply(this,arguments)}function gc(){return(gc=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",mc(xu(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kc(e,t,n){return bc.apply(this,arguments)}function bc(){return(bc=e(u)(e(h).mark((function t(n,r,i){var a,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=xu(n),e.next=3,oc(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,uc._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wc(e,t,n,r){return Pe(e).onIdTokenChanged(t,n,r)}function Ic(e,t,n){return Pe(e).beforeAuthStateChanged(t,n)}
/**
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
 */
function Tc(e,t){return Ns(e,"POST","/v2/accounts/mfaEnrollment:start",Rs(e,t))}new WeakMap;var Cc="__sak",Sc=function(){"use strict";function t(n,r){e(o)(this,t),this.storageRetriever=n,this.type=r}return e(s)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
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
 */var xc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){var t,i;return e(o)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(vu(i=Q())||ku(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=Iu(),t._shouldAllowMigration=!0,t}return e(s)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);wu()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(u)(e(h).mark((function o(){return e(h).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Zo)(e(ns)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(u)(e(h).mark((function a(){var o;return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Zo)(e(ns)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(u)(e(h).mark((function a(){return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Zo)(e(ns)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Sc);xc.type="LOCAL";var Ec=xc,Rc=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(){return e(o)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(s)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Sc);
/**
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
 */Rc.type="SESSION";var Nc=Rc;
/**
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
 */function Pc(t){return Promise.all(t.map((n=e(u)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
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
 */var Oc=function(){"use strict";function t(n){e(o)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(s)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a,o,s,c,l,d,f;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,o=a.eventId,s=a.eventType,c=a.data,null==(l=n.handlersMap[s])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),d=Array.from(l).map(function(){var t=e(u)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Pc(d);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
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
 */
function Dc(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Oc.receivers=[];var Ac=function(){"use strict";function t(n){e(o)(this,t),this.target=n,this.handlers=new Set}return e(s)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(u)(e(h).mark((function a(){var o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Dc("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
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
 */function Lc(){return window}
/**
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
 */
function Mc(){return void 0!==Lc().WorkerGlobalScope&&"function"==typeof Lc().importScripts}function Fc(){return Uc.apply(this,arguments)}function Uc(){return(Uc=e(u)(e(h).mark((function t(){var n;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
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
 */
var jc="firebaseLocalStorageDb",qc="firebaseLocalStorage",Wc="fbase_key",Hc=function(){"use strict";function t(n){e(o)(this,t),this.request=n}return e(s)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Bc(e,t){return e.transaction([qc],t?"readwrite":"readonly").objectStore(qc)}function Vc(){var e=indexedDB.deleteDatabase(jc);return new Hc(e).toPromise()}function zc(){var t=indexedDB.open(jc,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(qc,{keyPath:Wc})}catch(e){r(e)}})),t.addEventListener("success",e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(qc)){e.next=12;break}return i.close(),e.next=5,Vc();case 5:return e.t0=n,e.next=8,zc();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Kc(e,t,n){return Gc.apply(this,arguments)}function Gc(){return(Gc=e(u)(e(h).mark((function t(n,r,i){var a,o;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Bc(n,!0).put((a={},e(c)(a,Wc,r),e(c)(a,"value",i),a)),t.abrupt("return",new Hc(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Yc(e,t){return Jc.apply(this,arguments)}function Jc(){return(Jc=e(u)(e(h).mark((function t(n,r){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Bc(n,!1).get(r),e.next=3,new Hc(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qc(e,t){var n=Bc(e,!0).delete(t);return new Hc(n).toPromise()}var Xc=function(){"use strict";function t(){e(o)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(s)(t,[{key:"_openDb",value:function(){var t=this;return e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,zc();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mc()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(u)(e(h).mark((function n(){return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Oc._getInstance(Mc()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(u)(e(h).mark((function n(r,i){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(u)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Fc();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ac(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(u)(e(h).mark((function t(){var n;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,zc();case 5:return n=e.sent,e.next=8,Kc(n,Cc,"1");case 8:return e.next=10,Qc(n,Cc);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(u)(e(h).mark((function i(){return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(u)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Kc(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Yc(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(u)(e(h).mark((function r(){return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(u)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Qc(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r,i,a,o,s,u,c,l,d,f,v,p,m,y,_,g,k;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Bc(e,!1).getAll();return new Hc(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)d=l.value,f=d.fbase_key,v=d.value,a.add(f),JSON.stringify(t.localCache[f])!==JSON.stringify(v)&&(t.notifyListeners(f,v),i.push(f));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,m=!1,y=void 0,e.prev=27,_=Object.keys(t.localCache)[Symbol.iterator]();!(p=(g=_.next()).done);p=!0)k=g.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,p||null==_.return||_.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(u)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Xc.type="LOCAL";var $c=Xc;
/**
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
 */function Zc(e,t){return Ns(e,"POST","/v2/accounts/mfaSignIn:start",Rs(e,t))}function el(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ls("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function tl(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
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
 */
/**
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
 */
tl("rcb"),new Is(3e4,6e4);var nl="recaptcha";
/**
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
 */function rl(e,t,n){return il.apply(this,arguments)}function il(){return(il=e(u)(e(h).mark((function t(n,r,i){var a,o,s,u,c,l,d,f;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,fs("string"==typeof o,n,"argument-error"),fs(i.type===nl,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return fs("enroll"===u.type,n,"internal-error"),e.next=15,Tc(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return fs("signin"===u.type,n,"internal-error"),fs(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Zc(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,zu(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
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
 */
var al=function(){"use strict";function t(n){e(o)(this,t),this.providerId=t.PROVIDER_ID,this.auth=xu(n)}return e(s)(t,[{key:"verifyPhoneNumber",value:function(e,t){return rl(this.auth,e,Pe(t))}}],[{key:"credential",value:function(e,t){return Xu._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Xu._fromTokenResponse(n,r):null}}]),t}();
/**
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
 */
function ol(e,t){return t?ys(t):(fs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */al.PROVIDER_ID="phone",al.PHONE_SIGN_IN_METHOD="phone";var sl=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return Hu(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Hu(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Hu(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Ou);function ul(e){return mc(e.auth,new sl(e),e.bypassAuthState)}function cl(e){var t=e.auth,n=e.user;return fs(n,t,"internal-error"),vc(n,new sl(e),e.bypassAuthState)}function ll(e){return hl.apply(this,arguments)}function hl(){return(hl=e(u)(e(h).mark((function t(n){var r,i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,fs(i=n.user,r,"internal-error"),e.abrupt("return",dc(i,new sl(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
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
 */var dl=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(o)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(s)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(u)(e(h).mark((function t(r,i){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a,o,s,u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ul;case"linkViaPopup":case"linkViaRedirect":return ll;case"reauthViaPopup":case"reauthViaRedirect":return cl;default:cs(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ps(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),fl=new Is(2e3,1e4);
/**
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
 */var vl=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i,a,s,u){var c;return e(o)(this,r),(c=n.call(this,t,i,s,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(f)(c),c}return e(s)(r,[{key:"executeNotNull",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return fs(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ps(1===t.filter.length,"Popup operations only handle one event"),r=Dc(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ls(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ls(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ls(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,fl.get())};t()}}]),r}(dl);vl.currentPopupAction=null;
/**
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
 */
var pl=new Map,ml=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(s)(r,[{key:"execute",value:function(){var t=this,n=this;return e(u)(e(h).mark((function i(){var a,o;return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=pl.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,yl(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Zo)(e(ns)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:pl.set(n.auth._key(),a);case 21:return n.bypassAuthState||pl.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(Zo)(e(ns)(r.prototype),"onAuthEvent",n)};return e(u)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(u)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(dl);function yl(e,t){return _l.apply(this,arguments)}function _l(){return(_l=e(u)(e(h).mark((function t(n,r){var i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=bl(r),a=kl(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gl(e,t){pl.set(e._key(),t)}function kl(e){return ys(e._redirectPersistence)}function bl(e){return lu("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */function wl(e,t){return Il.apply(this,arguments)}function Il(){return Il=e(u)(e(h).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=xu(n),o=ol(a,r),s=new ml(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Il.apply(this,arguments)}
/**
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
 */
var Tl=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(s)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sl(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Sl(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ls(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cl(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Cl(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Cl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Sl(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function xl(e){return El.apply(this,arguments)}function El(){return El=
/**
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
 */
e(u)(e(h).mark((function t(n){var r,i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Ns(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),El.apply(this,arguments)}
/**
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
 */var Rl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nl=/^https?/;function Pl(){return(Pl=e(u)(e(h).mark((function t(n){var r,i,a,o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,xl(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Ol(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:cs(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ol(e){var t=gs(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Nl.test(r))return!1;if(Rl.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
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
 */var Dl=new Is(3e4,6e4);function Al(){var t=Lc().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(l)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ll=null;function Ml(e){return Ll=Ll||function(e){return new Promise((function(t,n){var r,i,a;function o(){Al(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Al(),n(ls(e,"network-request-failed"))},timeout:Dl.get()})}if(null===(i=null===(r=Lc().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Lc().gapi)||void 0===a?void 0:a.load)){var s=tl("iframefcb");return Lc()[s]=function(){gapi.load?o():n(ls(e,"network-request-failed"))},el("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ll=null,e}))}(e),Ll}
/**
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
 */var Fl=new Is(5e3,15e3),Ul={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ql(e){var t=e.config;fs(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Ts(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:xt},i=jl.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(we(r).slice(1))}function Wl(e){return Hl.apply(this,arguments)}function Hl(){return Hl=e(u)(e(h).mark((function t(n){var r,i;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ml(n);case 2:return r=t.sent,fs(i=Lc().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:ql(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ul,dontclear:!0},(function(t){return new Promise((r=e(u)(e(h).mark((function r(i,a){var o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){Lc().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=ls(n,"network-request-failed"),s=Lc().setTimeout((function(){a(o)}),Fl.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Hl.apply(this,arguments)}
/**
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
 */var Bl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vl="_blank",zl="http://localhost",Kl=function(){"use strict";function t(n){e(o)(this,t),this.window=n,this.associatedEvent=null}return e(s)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Gl(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Bl),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Q().toLowerCase();r&&(u=pu(l)?Vl:r),fu(l)&&(n=n||zl,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(d)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(bu(l)&&"_self"!==u)return Yl(n||"",u),new Kl(null);var f=window.open(n||"",u,h);fs(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Kl(f)}function Yl(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */var Jl="__/auth/handler",Ql="emulator/auth/handler";function Xl(t,n,r,i,a,o){fs(t.config.authDomain,t,"auth-domain-config-required"),fs(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:xt,eventId:a};if(n instanceof ec){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",_e(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var v=e(d)(h.value,2),p=v[0],m=v[1];s[p]=m}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof tc){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var _,g,k=s,b=!0,w=!1,I=void 0;try{for(var T,C=Object.keys(k)[Symbol.iterator]();!(b=(T=C.next()).done);b=!0){var S=T.value;void 0===k[S]&&delete k[S]}}catch(e){w=!0,I=e}finally{try{b||null==C.return||C.return()}finally{if(w)throw I}}return"".concat((_=t,g=_.config,g.emulator?Ts(g,Ql):"https://".concat(g.authDomain,"/").concat(Jl)),"?").concat(we(k).slice(1))}
/**
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
 */
var $l="webStorageSupport",Zl=function(){"use strict";function t(){e(o)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nc,this._completeRedirectFn=wl,this._overrideRedirectResult=gl}return e(s)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(u)(e(h).mark((function o(){var s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ps(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Xl(t,n,r,gs(),i),e.abrupt("return",Gl(t,u,Dc()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(u)(e(h).mark((function o(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Xl(t,n,r,gs(),i),Lc().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(ps(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wl(t);case 2:return i=e.sent,a=new Tl(t),i.register("authEvent",(function(e){return fs(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send($l,{type:$l},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),cs(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Pl.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Iu()||vu()||ku()}}]),t}(),eh=Zl,th=function(){"use strict";function t(n){e(o)(this,t),this.factorId=n}return e(s)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return vs("unexpected MultiFactorSessionType")}}}]),t}(),nh=function(t){"use strict";e(v)(r,t);var n=e(C)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(s)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Ns(e,"POST","/v2/accounts/mfaEnrollment:finalize",Rs(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ns(e,"POST","/v2/accounts/mfaSignIn:finalize",Rs(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(th);(function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"assertion",value:function(e){return nh._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var rh="@firebase/auth",ih="0.20.11",ah=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.internalListeners=new Map}return e(s)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(u)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){fs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
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
 */
var oh,sh=ae("authIdTokenMaxAge")||300,uh=null,ch=function(t){return n=e(u)(e(h).mark((function n(r){var i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>sh)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,uh!==o){e.next=12;break}return e.abrupt("return");case 12:return uh=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function lh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt(),t=It(e,"auth");if(t.isInitialized())return t.getImmediate();var n=_s(e,{popupRedirectResolver:eh,persistence:[$c,Ec,Nc]}),r=ae("authTokenSyncURL");if(r){var i=ch(r);Ic(n,i,(function(){return i(n.currentUser)})),wc(n,(function(e){return i(e)}))}var a=ne("auth");return a&&Ru(n,"http://".concat(a)),n}oh="Browser",wt(new Oe("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){fs(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),fs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:oh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tu(oh)},i=new Su(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ys);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),wt(new Oe("auth-internal",(function(e){var t=xu(e.getProvider("auth").getImmediate());return new ah(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(rh,ih,
/**
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
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(oh)),Nt(rh,ih,"esm2017");var hh,dh,fh,vh=i("h6c0i"),ph=Et(a),mh=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt(),n=arguments.length>1?arguments[1]:void 0,r=It(t,"database").getImmediate({identifier:n}),i=re("database");return i&&$o.apply(void 0,[r].concat(e(l)(i))),r}(ph),yh=lh(ph),_h=(document.querySelector("#sighup-modal"),document.querySelector("#sighin-modal"),document.querySelector("#sighout")),gh=document.querySelector("[data-reg-modal]"),kh=document.querySelector("[data-auth-modal]"),bh=document.querySelector("[data-reg-modal-open]"),wh=document.querySelector("[data-auth-modal-open]"),Ih=document.querySelector("#name-user"),Th=document.querySelector(".online-form"),Ch=function(){"use strict";function t(n){e(o)(this,t),this.userData=n}return e(s)(t,[{key:"sighUp",value:function(){var e=this;this.userData.email&&this.userData.password&&this.userData.name?this.userData.password.length<=5?vh.Notify.failure("Password is too short!"):kc(yh,this.userData.email,this.userData.password,this.userData.name).then((function(t){var n=t.user;zo(Bo(mh,"users/"+n.uid+"/auth/"),e.userData),Ih.innerHTML="".concat(e.userData.name),gh.classList.toggle("is-hidden"),wh.classList.add("is-hidden"),bh.classList.add("is-hidden"),_h.classList.remove("is-hidden"),vh.Notify.success("User is created!"),localStorage.setItem("name",e.userData.name),Th.reset()})).catch((function(e){e.code;var t=e.message;vh.Notify.failure(t)})):vh.Notify.failure("Please enter your email, password or name")}},{key:"sighIn",value:function(){var e,t,n,r=this;yh.currentUser;(e=yh,t=this.userData.email,n=this.userData.password,this.userData.name,_c(Pe(e),Zu.credential(t,n))).then((function(e){var t=e.user,n=new Date;Ko(Bo(mh,"users/"+t.uid),{last_login:n}),Ih.innerHTML="".concat(r.userData.name),kh.classList.toggle("is-hidden"),vh.Notify.success("You're welcome!"),wh.classList.add("is-hidden"),bh.classList.add("is-hidden"),_h.classList.remove("is-hidden"),localStorage.setItem("name",r.userData.name),Th.reset()})).catch((function(e){e.code;var t=e.message;vh.Notify.failure(t)}))}},{key:"sighOut",value:function(){var e;(e=yh,Pe(e).signOut()).then((function(){vh.Notify.success("Goodbye"),wh.classList.remove("is-hidden"),bh.classList.remove("is-hidden"),_h.classList.add("is-hidden"),Ih.innerHTML="",localStorage.removeItem("name")})).catch((function(e){e.code;var t=e.message;vh.Notify.failure(t)}))}}]),t}(),Sh=(function(){var e={openModalBtn:document.querySelector("[data-reg-modal-open]"),closeModalBtn:document.querySelector("[data-reg-modal-close]"),modal:document.querySelector("[data-reg-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-auth-modal-open]"),closeModalBtn:document.querySelector("[data-auth-modal-close]"),modal:document.querySelector("[data-auth-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),lh(Et(a))),xh=(Sh.currentUser,document.querySelector("#sighup-modal")),Eh=document.querySelector("#sighin-modal"),Rh=document.querySelector("#sighout"),Nh=document.querySelector("[data-reg-modal-open]"),Ph=document.querySelector("[data-auth-modal-open]"),Oh=document.querySelector("#name-user");hh=function(e){var t=localStorage.getItem("name");e&&(Oh.innerHTML=t,Ph.classList.add("is-hidden"),Nh.classList.add("is-hidden"),Rh.classList.remove("is-hidden"))},Pe(Sh).onAuthStateChanged(hh,dh,fh),xh.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("email-reg").value,n=document.getElementById("password-reg").value,r=document.getElementById("name-reg").value;new Ch({email:t,password:n,name:r}).sighUp()})),Eh.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("email-auth").value,n=document.getElementById("password-auth").value,r=document.getElementById("");new Ch({email:t,password:n,name:r}).sighIn()})),Rh.addEventListener("click",(function(e){(new Ch).sighOut()}));var Dh=i("4abQM");i("hihB6"),i("lATGj"),i("4F07H"),(0,Dh.getTrending)(),(0,Dh.getTrendingForDay)()}();
//# sourceMappingURL=index.ad98d7dd.js.map
