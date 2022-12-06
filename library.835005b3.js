var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequired7c6=r),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));const s=document.querySelector(".scrollToTopBtn"),o=document.querySelector(".pagination__list");s.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting?s.classList.remove("is-hidden"):s.classList.add("is-hidden")}))}),{rootMargin:"40%",threshold:.5}).observe(o);const a={DARK:"dark-theme",LIGHT:"light-theme"};var c={teamList:document.querySelector(".team-list"),teamBtn:document.querySelector(".page-footer__action-btn"),lightboxBtn:document.querySelector(".lightbox-button"),movieList:document.querySelector(".main__section-list"),iconCloseBtn:document.querySelectorAll(".close-icon-container"),loginModal:document.querySelector(".login-page"),closeBtn:document.querySelector(".close-icon-container"),header:document.getElementById("page-header"),navMenu:document.getElementById("page-nav"),navLinks:document.querySelectorAll(".link-nav"),checkBox:document.querySelector("#theme-switch-toggle"),serchForm:document.querySelector(".search-form-js"),searchFormInput:document.querySelector(".search-form__input"),nextBtn:document.querySelector(".next-btn-js"),watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),errorMessage:document.querySelector(".search-form__field-error"),libraryPage:document.querySelector(".library-page-js"),libraryInfo:document.querySelector(".main__library-info"),headerContainer:document.querySelector(".header-container-js"),libraryContainer:document.querySelector(".library__section-list"),mainWrapper:document.querySelector(".main__section-wrapper"),glide:document.querySelector(".js-trending"),filmCards:document.querySelector(".js-film-cards"),openFooterModalBtn:document.querySelector("[data-footer-modal-open]"),closeFooterModalBtn:document.querySelector("[data-footer-modal-close]"),footerModal:document.querySelector("[data-footer-modal]"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),filmInfoContainer:document.querySelector(".film-info"),addToWatchedBtn:document.querySelector(".add-watched"),addToQueueBtn:document.querySelector(".add-queue")};const l=document.body.classList;localStorage.getItem("theme")?localStorage.getItem("theme")===a.LIGHT?l.add(a.LIGHT):localStorage.getItem("theme")===a.DARK&&(c.checkBox.checked=!0,l.add(a.DARK)):l.add(a.LIGHT),c.checkBox.addEventListener("change",(function(e){c.checkBox.checked?(localStorage.setItem("theme",a.DARK),l.replace(a.LIGHT,a.DARK)):c.checkBox.checked||(localStorage.setItem("theme",a.LIGHT),l.replace(a.DARK,a.LIGHT))}));var u,h,d,f,p={};function m(e,t){return function(){return e.apply(t,arguments)}}u=p,h="default",d=function(){return $},f=function(e){return $=e},Object.defineProperty(u,h,{get:d,set:f,enumerable:!0,configurable:!0});const{toString:g}=Object.prototype,{getPrototypeOf:_}=Object,y=(v=Object.create(null),e=>{const t=g.call(e);return v[t]||(v[t]=t.slice(8,-1).toLowerCase())});var v;const w=e=>(e=e.toLowerCase(),t=>y(t)===e),b=e=>t=>typeof t===e,{isArray:I}=Array,E=b("undefined");const T=w("ArrayBuffer");const C=b("string"),k=b("function"),S=b("number"),x=e=>null!==e&&"object"==typeof e,N=e=>{if("object"!==y(e))return!1;const t=_(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},R=w("Date"),O=w("File"),A=w("Blob"),P=w("FileList"),L=w("URLSearchParams");function D(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),I(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function M(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const U="undefined"==typeof self?void 0===e?void 0:e:self,B=e=>!E(e)&&e!==U;const F=(j="undefined"!=typeof Uint8Array&&_(Uint8Array),e=>j&&e instanceof j);var j;const q=w("HTMLFormElement"),H=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),W=w("RegExp"),z=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};D(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var $={isArray:I,isArrayBuffer:T,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&k(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||g.call(e)===t||k(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&T(e.buffer),t},isString:C,isNumber:S,isBoolean:e=>!0===e||!1===e,isObject:x,isPlainObject:N,isUndefined:E,isDate:R,isFile:O,isBlob:A,isRegExp:W,isFunction:k,isStream:e=>x(e)&&k(e.pipe),isURLSearchParams:L,isTypedArray:F,isFileList:P,forEach:D,merge:function e(){const{caseless:t}=B(this)&&this||{},n={},i=(i,r)=>{const s=t&&M(n,r)||r;N(n[s])&&N(i)?n[s]=e(n[s],i):N(i)?n[s]=e({},i):I(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&D(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(D(t,((t,i)=>{n&&k(t)?e[i]=m(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&_(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:y,kindOfTest:w,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!S(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:q,hasOwnProperty:H,hasOwnProp:H,reduceDescriptors:z,freezeMethods:e=>{z(e,((t,n)=>{if(k(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];k(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return I(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:M,global:U,isContextDefined:B,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(x(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=I(e)?[]:{};return D(e,((e,t)=>{const s=n(e,i+1);!E(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function V(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}p.default.inherits(V,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const K=V.prototype,G={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{G[e]={value:e}})),Object.defineProperties(V,G),Object.defineProperty(K,"isAxiosError",{value:!0}),V.from=(e,t,n,i,r,s)=>{const o=Object.create(K);return p.default.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),V.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var J,Y,Q,X=V,Z=t("object"==typeof self?self.FormData:window.FormData);Y=function(e){var t,n,i=ce(e),r=i[0],s=i[1],o=new re(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=ie[e.charCodeAt(n)]<<18|ie[e.charCodeAt(n+1)]<<12|ie[e.charCodeAt(n+2)]<<6|ie[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=ie[e.charCodeAt(n)]<<2|ie[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=ie[e.charCodeAt(n)]<<10|ie[e.charCodeAt(n+1)]<<4|ie[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},Q=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(le(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(ne[t>>2]+ne[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(ne[t>>10]+ne[t>>4&63]+ne[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var ee,te,ne=[],ie=[],re="undefined"!=typeof Uint8Array?Uint8Array:Array,se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oe=0,ae=se.length;oe<ae;++oe)ne[oe]=se[oe],ie[se.charCodeAt(oe)]=oe;function ce(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function le(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(ne[(r=i)>>18&63]+ne[r>>12&63]+ne[r>>6&63]+ne[63&r]);return s.join("")}ie["-".charCodeAt(0)]=62,ie["_".charCodeAt(0)]=63,ee=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},te=function(e,t,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*c-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*m};const ue="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;J=de;function he(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,de.prototype),t}function de(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return me(e)}return fe(e,t,n)}function fe(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!de.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|ve(e,t);let i=he(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Xe(e,Uint8Array)){const t=new Uint8Array(e);return _e(t.buffer,t.byteOffset,t.byteLength)}return ge(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Xe(e,ArrayBuffer)||e&&Xe(e.buffer,ArrayBuffer))return _e(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Xe(e,SharedArrayBuffer)||e&&Xe(e.buffer,SharedArrayBuffer)))return _e(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return de.from(i,t,n);const r=function(e){if(de.isBuffer(e)){const t=0|ye(e.length),n=he(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ze(e.length)?he(0):ge(e);if("Buffer"===e.type&&Array.isArray(e.data))return ge(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return de.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function pe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function me(e){return pe(e),he(e<0?0:0|ye(e))}function ge(e){const t=e.length<0?0:0|ye(e.length),n=he(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function _e(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,de.prototype),i}function ye(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function ve(e,t){if(de.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Xe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Je(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ye(e).length;default:if(r)return i?-1:Je(e).length;t=(""+t).toLowerCase(),r=!0}}function we(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Pe(this,t,n);case"utf8":case"utf-8":return Re(this,t,n);case"ascii":return Oe(this,t,n);case"latin1":case"binary":return Ae(this,t,n);case"base64":return Ne(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Le(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function be(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function Ie(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ze(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=de.from(t,i)),de.isBuffer(t))return 0===t.length?-1:Ee(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Ee(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function Ee(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(e,s+i)!==l(t,i)){n=!1;break}if(n)return s}return-1}function Te(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Ze(i))return o;e[n+o]=i}return o}function Ce(e,t,n,i){return Qe(Je(t,e.length-n),e,n,i)}function ke(e,t,n,i){return Qe(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Se(e,t,n,i){return Qe(Ye(t),e,n,i)}function xe(e,t,n,i){return Qe(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function Ne(e,t,n){return 0===t&&n===e.length?Q(e):Q(e.slice(t,n))}function Re(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}de.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),de.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(de.prototype,"parent",{enumerable:!0,get:function(){if(de.isBuffer(this))return this.buffer}}),Object.defineProperty(de.prototype,"offset",{enumerable:!0,get:function(){if(de.isBuffer(this))return this.byteOffset}}),de.poolSize=8192,de.from=function(e,t,n){return fe(e,t,n)},Object.setPrototypeOf(de.prototype,Uint8Array.prototype),Object.setPrototypeOf(de,Uint8Array),de.alloc=function(e,t,n){return function(e,t,n){return pe(e),e<=0?he(e):void 0!==t?"string"==typeof n?he(e).fill(t,n):he(e).fill(t):he(e)}(e,t,n)},de.allocUnsafe=function(e){return me(e)},de.allocUnsafeSlow=function(e){return me(e)},de.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==de.prototype},de.compare=function(e,t){if(Xe(e,Uint8Array)&&(e=de.from(e,e.offset,e.byteLength)),Xe(t,Uint8Array)&&(t=de.from(t,t.offset,t.byteLength)),!de.isBuffer(e)||!de.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},de.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},de.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return de.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=de.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Xe(t,Uint8Array))r+t.length>i.length?(de.isBuffer(t)||(t=de.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!de.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},de.byteLength=ve,de.prototype._isBuffer=!0,de.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)be(this,t,t+1);return this},de.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)be(this,t,t+3),be(this,t+1,t+2);return this},de.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)be(this,t,t+7),be(this,t+1,t+6),be(this,t+2,t+5),be(this,t+3,t+4);return this},de.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Re(this,0,e):we.apply(this,arguments)},de.prototype.toLocaleString=de.prototype.toString,de.prototype.equals=function(e){if(!de.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===de.compare(this,e)},de.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ue&&(de.prototype[ue]=de.prototype.inspect),de.prototype.compare=function(e,t,n,i,r){if(Xe(e,Uint8Array)&&(e=de.from(e,e.offset,e.byteLength)),!de.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},de.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},de.prototype.indexOf=function(e,t,n){return Ie(this,e,t,n,!0)},de.prototype.lastIndexOf=function(e,t,n){return Ie(this,e,t,n,!1)},de.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return Te(this,e,t,n);case"utf8":case"utf-8":return Ce(this,e,t,n);case"ascii":case"latin1":case"binary":return ke(this,e,t,n);case"base64":return Se(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},de.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Oe(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Ae(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Pe(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=et[e[i]];return r}function Le(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function De(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Me(e,t,n,i,r,s){if(!de.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Ue(e,t,n,i,r){$e(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Be(e,t,n,i,r){$e(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Fe(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function je(e,t,n,i,r){return t=+t,n>>>=0,r||Fe(e,0,n,4),te(e,t,n,i,23,4),n+4}function qe(e,t,n,i,r){return t=+t,n>>>=0,r||Fe(e,0,n,8),te(e,t,n,i,52,8),n+8}de.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,de.prototype),i},de.prototype.readUintLE=de.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},de.prototype.readUintBE=de.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},de.prototype.readUint8=de.prototype.readUInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),this[e]},de.prototype.readUint16LE=de.prototype.readUInt16LE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]|this[e+1]<<8},de.prototype.readUint16BE=de.prototype.readUInt16BE=function(e,t){return e>>>=0,t||De(e,2,this.length),this[e]<<8|this[e+1]},de.prototype.readUint32LE=de.prototype.readUInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},de.prototype.readUint32BE=de.prototype.readUInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},de.prototype.readBigUInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ke(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),de.prototype.readBigUInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ke(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),de.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},de.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||De(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},de.prototype.readInt8=function(e,t){return e>>>=0,t||De(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},de.prototype.readInt16LE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},de.prototype.readInt16BE=function(e,t){e>>>=0,t||De(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},de.prototype.readInt32LE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},de.prototype.readInt32BE=function(e,t){return e>>>=0,t||De(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},de.prototype.readBigInt64LE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ke(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),de.prototype.readBigInt64BE=tt((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ke(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),de.prototype.readFloatLE=function(e,t){return e>>>=0,t||De(e,4,this.length),ee(this,e,!0,23,4)},de.prototype.readFloatBE=function(e,t){return e>>>=0,t||De(e,4,this.length),ee(this,e,!1,23,4)},de.prototype.readDoubleLE=function(e,t){return e>>>=0,t||De(e,8,this.length),ee(this,e,!0,52,8)},de.prototype.readDoubleBE=function(e,t){return e>>>=0,t||De(e,8,this.length),ee(this,e,!1,52,8)},de.prototype.writeUintLE=de.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},de.prototype.writeUintBE=de.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Me(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},de.prototype.writeUint8=de.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,255,0),this[t]=255&e,t+1},de.prototype.writeUint16LE=de.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},de.prototype.writeUint16BE=de.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},de.prototype.writeUint32LE=de.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},de.prototype.writeUint32BE=de.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},de.prototype.writeBigUInt64LE=tt((function(e,t=0){return Ue(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),de.prototype.writeBigUInt64BE=tt((function(e,t=0){return Be(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),de.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},de.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Me(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},de.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},de.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},de.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},de.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},de.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Me(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},de.prototype.writeBigInt64LE=tt((function(e,t=0){return Ue(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),de.prototype.writeBigInt64BE=tt((function(e,t=0){return Be(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),de.prototype.writeFloatLE=function(e,t,n){return je(this,e,t,!0,n)},de.prototype.writeFloatBE=function(e,t,n){return je(this,e,t,!1,n)},de.prototype.writeDoubleLE=function(e,t,n){return qe(this,e,t,!0,n)},de.prototype.writeDoubleBE=function(e,t,n){return qe(this,e,t,!1,n)},de.prototype.copy=function(e,t,n,i){if(!de.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},de.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!de.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=de.isBuffer(e)?e:de.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const He={};function We(e,t,n){He[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function ze(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function $e(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new He.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ve(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Ke(t,e.length-(n+1))}(i,r,s)}function Ve(e,t){if("number"!=typeof e)throw new He.ERR_INVALID_ARG_TYPE(t,"number",e)}function Ke(e,t,n){if(Math.floor(e)!==e)throw Ve(e,n),new He.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new He.ERR_BUFFER_OUT_OF_BOUNDS;throw new He.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}We("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),We("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),We("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=ze(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=ze(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ge=/[^+/0-9A-Za-z-_]/g;function Je(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ye(e){return Y(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ge,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Qe(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Xe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ze(e){return e!=e}const et=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function tt(e){return"undefined"==typeof BigInt?nt:e}function nt(){throw new Error("BigInt not supported")}var it=J;function rt(e){return p.default.isPlainObject(e)||p.default.isArray(e)}function st(e){return p.default.endsWith(e,"[]")?e.slice(0,-2):e}function ot(e,t,n){return e?e.concat(t).map((function(e,t){return e=st(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const at=p.default.toFlatObject(p.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var ct=function(e,t,n){if(!p.default.isObject(e))throw new TypeError("target must be an object");t=t||new(Z||FormData);const i=(n=p.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!p.default.isUndefined(t[e])}))).metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=t)&&p.default.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!p.default.isFunction(r))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(p.default.isDate(e))return e.toISOString();if(!a&&p.default.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return p.default.isArrayBuffer(e)||p.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):it.from(e):e}function u(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(p.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(p.default.isArray(e)&&function(e){return p.default.isArray(e)&&!e.some(rt)}(e)||p.default.isFileList(e)||p.default.endsWith(n,"[]")&&(a=p.default.toArray(e)))return n=st(n),a.forEach((function(e,i){!p.default.isUndefined(e)&&null!==e&&t.append(!0===o?ot([n],i,s):null===o?n:n+"[]",l(e))})),!1;return!!rt(e)||(t.append(ot(r,n,s),l(e)),!1)}const h=[],d=Object.assign(at,{defaultVisitor:u,convertValue:l,isVisitable:rt});if(!p.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!p.default.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),p.default.forEach(n,(function(n,s){!0===(!(p.default.isUndefined(n)||null===n)&&r.call(t,n,p.default.isString(s)?s.trim():s,i,d))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function lt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ut(e,t){this._pairs=[],e&&ct(e,this,t)}const ht=ut.prototype;ht.append=function(e,t){this._pairs.push([e,t])},ht.toString=function(e){const t=e?function(t){return e.call(this,t,lt)}:lt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var dt=ut;function ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pt(e,t,n){if(!t)return e;const i=n&&n.encode||ft,r=n&&n.serialize;let s;if(s=r?r(t,n):p.default.isURLSearchParams(t)?t.toString():new dt(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var mt=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){p.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},gt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t="undefined"!=typeof URLSearchParams?URLSearchParams:dt,yt=FormData;const vt=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var wt={isBrowser:!0,classes:{URLSearchParams:_t,FormData:yt,Blob:Blob},isStandardBrowserEnv:vt,protocols:["http","https","file","blob","url","data"]};function bt(e,t){return ct(e,new wt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return wt.isNode&&p.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var It=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&p.default.isArray(i)?i.length:s,a)return p.default.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&p.default.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&p.default.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(p.default.isFormData(e)&&p.default.isFunction(e.entries)){const n={};return p.default.forEachEntry(e,((e,i)=>{t(function(e){return p.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const Et={"Content-Type":void 0};const Tt={transitional:gt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=p.default.isObject(e);r&&p.default.isHTMLForm(e)&&(e=new FormData(e));if(p.default.isFormData(e))return i&&i?JSON.stringify(It(e)):e;if(p.default.isArrayBuffer(e)||p.default.isBuffer(e)||p.default.isStream(e)||p.default.isFile(e)||p.default.isBlob(e))return e;if(p.default.isArrayBufferView(e))return e.buffer;if(p.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return bt(e,this.formSerializer).toString();if((s=p.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ct(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(p.default.isString(e))try{return(t||JSON.parse)(e),p.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Tt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&p.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw X.from(e,X.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.default.forEach(["delete","get","head"],(function(e){Tt.headers[e]={}})),p.default.forEach(["post","put","patch"],(function(e){Tt.headers[e]=p.default.merge(Et)}));var Ct=Tt;const kt=p.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var St=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&kt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const xt=Symbol("internals");function Nt(e){return e&&String(e).trim().toLowerCase()}function Rt(e){return!1===e||null==e?e:p.default.isArray(e)?e.map(Rt):String(e)}function Ot(e,t,n,i){return p.default.isFunction(i)?i.call(this,t,n):p.default.isString(t)?p.default.isString(i)?-1!==t.indexOf(i):p.default.isRegExp(i)?i.test(t):void 0:void 0}let At=Symbol.iterator,Pt=Symbol.toStringTag;class Lt{set(e,t,n){const i=this;function r(e,t,n){const r=Nt(t);if(!r)throw new Error("header name must be a non-empty string");const s=p.default.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=Rt(e))}const s=(e,t)=>p.default.forEach(e,((e,n)=>r(e,n,t)));return p.default.isPlainObject(e)||e instanceof this.constructor?s(e,t):p.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(St(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Nt(e)){const n=p.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(p.default.isFunction(t))return t.call(this,e,n);if(p.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Nt(e)){const n=p.default.findKey(this,e);return!(!n||t&&!Ot(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Nt(e)){const r=p.default.findKey(n,e);!r||t&&!Ot(0,n[r],r,t)||(delete n[r],i=!0)}}return p.default.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return p.default.forEach(this,((i,r)=>{const s=p.default.findKey(n,r);if(s)return t[s]=Rt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=Rt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return p.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&p.default.isArray(n)?n.join(", "):n)})),t}[At](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Pt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[xt]=this[xt]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Nt(e);t[i]||(!function(e,t){const n=p.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return p.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),p.default.freezeMethods(Lt.prototype),p.default.freezeMethods(Lt);var Dt=Lt;function Mt(e,t){const n=this||Ct,i=t||n,r=Dt.from(i.headers);let s=i.data;return p.default.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Ut(e){return!(!e||!e.__CANCEL__)}function Bt(e,t,n){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,n),this.name="CanceledError"}p.default.inherits(Bt,X,{__CANCEL__:!0});var Ft=Bt;function jt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var qt=wt.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),p.default.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),p.default.isString(i)&&o.push("path="+i),p.default.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ht(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Wt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Ht(e,t):t}var zt=wt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=p.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function $t(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Vt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function Kt(e,t){let n=0;const i=Vt(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var Gt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Dt.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}p.default.isFormData(i)&&wt.isStandardBrowserEnv&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=Wt(e.baseURL,e.url);function u(){if(!c)return;const i=Dt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());jt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),pt(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new X("Request aborted",X.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new X("Network Error",X.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||gt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new X(t,i.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,c)),c=null},wt.isStandardBrowserEnv){const t=(e.withCredentials||zt(l))&&e.xsrfCookieName&&qt.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&p.default.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),p.default.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Kt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Kt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Ft(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=$t(l);h&&-1===wt.protocols.indexOf(h)?n(new X("Unsupported protocol "+h+":",X.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const Jt={http:null,xhr:Gt};p.default.forEach(Jt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Yt={getAdapter:e=>{e=p.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=p.default.isString(n)?Jt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new X(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(p.default.hasOwnProp(Jt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!p.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Jt};function Qt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ft}function Xt(e){Qt(e),e.headers=Dt.from(e.headers),e.data=Mt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Yt.getAdapter(e.adapter||Ct.adapter)(e).then((function(t){return Qt(e),t.data=Mt.call(e,e.transformResponse,t),t.headers=Dt.from(t.headers),t}),(function(t){return Ut(t)||(Qt(e),t&&t.response&&(t.response.data=Mt.call(e,e.transformResponse,t.response),t.response.headers=Dt.from(t.response.headers))),Promise.reject(t)}))}const Zt=e=>e instanceof Dt?e.toJSON():e;function en(e,t){t=t||{};const n={};function i(e,t,n){return p.default.isPlainObject(e)&&p.default.isPlainObject(t)?p.default.merge.call({caseless:n},e,t):p.default.isPlainObject(t)?p.default.merge({},t):p.default.isArray(t)?t.slice():t}function r(e,t,n){return p.default.isUndefined(t)?p.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!p.default.isUndefined(t))return i(void 0,t)}function o(e,t){return p.default.isUndefined(t)?p.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(Zt(e),Zt(t),!0)};return p.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);p.default.isUndefined(o)&&s!==a||(n[i]=o)})),n}const tn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{tn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const nn={};tn.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new X(i(r," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!nn[r]&&(nn[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var rn={assertOptions:function(e,t,n){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new X("option "+s+" must be "+n,X.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}},validators:tn};const sn=rn.validators;class on{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=en(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&rn.assertOptions(n,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),void 0!==i&&rn.assertOptions(i,{encode:sn.function,serialize:sn.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&p.default.merge(r.common,r[t.method]),s&&p.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Dt.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Xt.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=Xt.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return pt(Wt((e=en(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new mt,response:new mt}}}p.default.forEach(["delete","get","head","options"],(function(e){on.prototype[e]=function(t,n){return this.request(en(n||{},{method:e,url:t,data:(n||{}).data}))}})),p.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(en(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}on.prototype[e]=t(),on.prototype[e+"Form"]=t(!0)}));var an=on;class cn{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new cn((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Ft(e,i,r),t(n.reason))}))}}var ln=cn;const un=function e(t){const n=new an(t),i=m(an.prototype.request,n);return p.default.extend(i,an.prototype,n,{allOwnKeys:!0}),p.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(en(t,n))},i}(Ct);un.Axios=an,un.CanceledError=Ft,un.CancelToken=ln,un.isCancel=Ut,un.VERSION="1.2.0",un.toFormData=ct,un.AxiosError=X,un.Cancel=un.CanceledError,un.all=function(e){return Promise.all(e)},un.spread=function(e){return function(t){return e.apply(null,t)}},un.isAxiosError=function(e){return p.default.isObject(e)&&!0===e.isAxiosError},un.AxiosHeaders=Dt,un.formToJSON=e=>It(p.default.isHTMLForm(e)?new FormData(e):e),un.default=un;var hn=un;const{Axios:dn,AxiosError:fn,CanceledError:pn,isCancel:mn,CancelToken:gn,VERSION:_n,all:yn,Cancel:vn,isAxiosError:wn,spread:bn,toFormData:In,AxiosHeaders:En,formToJSON:Tn}=hn;var Cn,kn={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */function Sn(e,n){const i={totalItems:n,itemsPerPage:Math.round(n/e),visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(t(kn))("pagination",i).on("afterMove",(e=>{const t=e.page;Nn(),async function(e){try{const t=new URLSearchParams({api_key:"10612ebbbeaf2ad5999e09badf85e183",query:xn.value.split(" ").join("+")}),n=e,i=await hn.get(`https://api.themoviedb.org/3/search/movie?${t}&page=${n}`);if(200!==i.status)throw new Error(i.status);return i.data}catch(e){e.message}}(t).then((e=>{const{results:t}=e;console.log("pagination",e),function(e){let t="";window.scrollTo({top:0,behavior:"smooth"}),t=[...e].map((({poster_path:e,title:t,genre_ids:n,release_date:i,id:r})=>`<a href="#" class="film-trending__item" data-film-id=${r}>\n        <img class= "film-trending__img" src="${`https://image.tmdb.org/t/p/original${e}`}" alt="${t}" loading="lazy" width="280px"\n\t\t    height ="402px"/>\n            <div class="film-info">\n                <p class="film-name">${t}</p>\n                <div class="film-description">\n                  <p class="film-description__genre">Drama, Action |</p>\n                  <p class="film-description__release">${i.slice(0,4)}</p>\n                </div>\n            </div>\n        </a>`)).join(""),c.filmCards.insertAdjacentHTML("beforeend",t)}(t)})).catch((e=>{e.message}))}))}window,Cn=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,s,o=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),s=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,s;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,r=n;n>=0&&r<s;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=s(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),s=n(0),o=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(e,t){this._options=s({},l,t),this._currentPage=0,this._view=new a(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(s/2),(n=(t=Math.max(e-i,1))+s-1)>r&&(t=Math.max(r-s+1,1),n=r)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),r=n(14),s=n(4),o=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){i(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var i=this;s(e)?(e=e.split(u),l(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,l(e,(function(e,t){i.on(t,e,n)})))},h.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void l(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},h.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,s=t===i.context,o=r&&s;return o&&n._forgetContext(i.context),o}},h.prototype._offByEventName=function(e,t){var n=this,i=c(t),r=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?l(e,(function(e,t){i.off(t,e)})):s(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},h.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),s=n(21),o=n(22),a=n(24),c=n(25),l=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||c(t,this._firstItemClassName),n!==r||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,r=s(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),s=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=s(e,t),a=!1;r(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,s){i(t)?r(t.split(/\s+/g),(function(t){o(e,t,n,s)})):r(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,c=[];a?i(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,c)<0&&c.push(e)})),o(e,c))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],s=0,o=0;return r(t,(function(e,r){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,r)),o=r+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),s=!1,o="";return r(i.exps,(function(e,t){return(s=w(e,n))&&(o=b(i.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var i=w(e,n),o=s(i)?"@index":"@key",c={},l="";return r(i,(function(e,i){c[o]=i,c["@this"]=e,a(n,c),l+=b(t.slice(),n)})),l},with:function(e,t,n){var r=i("as",e),s=e[r+1],o=w(e.slice(0,r),n),c={};return c[s]=o,b(t,a(n,c))||""}},_=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(s,i)),s=i+n[0].length,n=t.exec(e);return r.push(e.slice(s)),r};function y(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:f.test(e)?i=e.replace(p,""):l.test(e)?i=y((n=e.split(u))[0],t)[y(n[1],t)]:h.test(e)?i=y((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function v(e,t,n){for(var i,r,s,a,c=g[e],l=1,u=2,h=t[u];l&&o(h);)0===h.indexOf(e)?l+=1:0===h.indexOf("/"+e)&&(l-=1,i=u),h=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(r=0,s=i,(a=t.splice(r+1,s-r)).pop(),a),n),t}function w(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(y(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function b(e,t){for(var n,i,r,s=1,a=e[s];o(a);)i=(n=a.split(" "))[0],g[i]?(r=v(i,e.splice(s,e.length-s),t),e=e.concat(r)):e[s]=w(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return b(_(e,c),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},kn=Cn();const{elements:{query:xn}}=c.serchForm;function Nn(){c.filmCards.innerHTML=""}xn.addEventListener("input",(e=>{var t;t=e.data,xn.value=xn.value.trim().toLowerCase()," "===t&&(xn.value+=" ")})),c.serchForm.addEventListener("submit",(e=>{e.preventDefault(),Nn(),async function(){try{const e=new URLSearchParams({api_key:"10612ebbbeaf2ad5999e09badf85e183",query:xn.value.split(" ").join("+")}),t=1,n=await hn.get(`https://api.themoviedb.org/3/search/movie?${e}&page=${t}`);if(200!==n.status)throw new Error(console.log("Search result not successful. Enter the correct movie name and "));return console.log(n.data),n.data}catch(e){e.message}}().then((e=>{const{results:t,total_pages:n,total_results:i}=e;if(0===t.length||""===xn.value)return console.log("Search result not successful. Enter the correct movie name and ");!function(e){let t="";t=[...e].map((({poster_path:e,title:t,genre_ids:n,release_date:i,id:r})=>`<a href="#" class="film-trending__item" data-film-id=${r}>\n        <img class= "film-trending__img" src="${`https://image.tmdb.org/t/p/original${e}`}" alt="${t}" loading="lazy" width="280px"\n\t\t    height ="402px"/>\n            <div class="film-info">\n                <p class="film-name">${t}</p>\n                <div class="film-description">\n                  <p class="film-description__genre">Drama, Action |</p>\n                  <p class="film-description__release">${i.slice(0,4)}</p>\n                </div>\n            </div>\n        </a>`)).join(""),window.scrollTo({top:300,behavior:"smooth"}),c.filmCards.insertAdjacentHTML("beforeend",t)}(t),Sn(n,i)})).catch((e=>{e.message}))}));const Rn={apiKey:"AIzaSyAH_Owns7cMrT8pGCLt32chdrdhm6DGte4",authDomain:"filmoteka-project-45131.firebaseapp.com",projectId:"filmoteka-project-45131",storageBucket:"filmoteka-project-45131.appspot.com",messagingSenderId:"4911157215",appId:"1:4911157215:web:07f069ebba88729a083e6a",measurementId:"G-XQS01LFW6F"};var On,An,Pn,Ln=On={};function Dn(){throw new Error("setTimeout has not been defined")}function Mn(){throw new Error("clearTimeout has not been defined")}function Un(e){if(An===setTimeout)return setTimeout(e,0);if((An===Dn||!An)&&setTimeout)return An=setTimeout,setTimeout(e,0);try{return An(e,0)}catch(t){try{return An.call(null,e,0)}catch(t){return An.call(this,e,0)}}}!function(){try{An="function"==typeof setTimeout?setTimeout:Dn}catch(e){An=Dn}try{Pn="function"==typeof clearTimeout?clearTimeout:Mn}catch(e){Pn=Mn}}();var Bn,Fn=[],jn=!1,qn=-1;function Hn(){jn&&Bn&&(jn=!1,Bn.length?Fn=Bn.concat(Fn):qn=-1,Fn.length&&Wn())}function Wn(){if(!jn){var e=Un(Hn);jn=!0;for(var t=Fn.length;t;){for(Bn=Fn,Fn=[];++qn<t;)Bn&&Bn[qn].run();qn=-1,t=Fn.length}Bn=null,jn=!1,function(e){if(Pn===clearTimeout)return clearTimeout(e);if((Pn===Mn||!Pn)&&clearTimeout)return Pn=clearTimeout,clearTimeout(e);try{Pn(e)}catch(t){try{return Pn.call(null,e)}catch(t){return Pn.call(this,e)}}}(e)}}function zn(e,t){this.fun=e,this.array=t}function $n(){}Ln.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Fn.push(new zn(e,t)),1!==Fn.length||jn||Un(Wn)},zn.prototype.run=function(){this.fun.apply(null,this.array)},Ln.title="browser",Ln.browser=!0,Ln.env={},Ln.argv=[],Ln.version="",Ln.versions={},Ln.on=$n,Ln.addListener=$n,Ln.once=$n,Ln.off=$n,Ln.removeListener=$n,Ln.removeAllListeners=$n,Ln.emit=$n,Ln.prependListener=$n,Ln.prependOnceListener=$n,Ln.listeners=function(e){return[]},Ln.binding=function(e){throw new Error("process.binding is not supported")},Ln.cwd=function(){return"/"},Ln.chdir=function(e){throw new Error("process.chdir is not supported")},Ln.umask=function(){return 0};
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
const Vn=!1,Kn=!1,Gn="${JSCORE_VERSION}",Jn=function(e,t){if(!e)throw Yn(t)},Yn=function(e){return new Error("Firebase Database ("+Gn+") INTERNAL ASSERT FAILED: "+e)},Qn=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Zn=function(e){const t=Qn(e);return Xn.encodeByteArray(t,!0)},ei=function(e){return Zn(e).replace(/\./g,"")},ti=function(e){try{return Xn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function ni(e){return ii(void 0,e)}function ii(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ii(e[n],t[n]));return e}
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
function ri(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function si(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ri())}function oi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ai(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ci(){const e=ri();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function li(){return!0===Vn||!0===Kn}
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
const ui=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,hi=()=>{try{return ui()||(()=>{if(void 0===On||void 0===On.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ti(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},di=e=>{var t,n;return null===(n=null===(t=hi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},fi=e=>{const t=di(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},pi=e=>{var t;return null===(t=hi())||void 0===t?void 0:t[`_${e}`]};
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
class mi{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function gi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ei(JSON.stringify({alg:"none",type:"JWT"})),ei(JSON.stringify(s)),""].join(".")}
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
 */class _i extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(vi,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new _i(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const vi=/\{\$([^}]+)}/g;
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
 */function wi(e){return JSON.parse(e)}function bi(e){return JSON.stringify(e)}
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
 */const Ii=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=wi(ti(s[0])||""),n=wi(ti(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Ei=function(e){const t=Ii(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Ti=function(e){const t=Ii(e).claims;return"object"==typeof t&&!0===t.admin};
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
function Ci(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ki(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Si(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function xi(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Ni(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Ri(n)&&Ri(s)){if(!Ni(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Ri(e){return null!==e&&"object"==typeof e}
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
function Oi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Pi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Li{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Di(e,t){const n=new Mi(e,t);return n.subscribe.bind(n)}class Mi{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Ui),void 0===i.error&&(i.error=Ui),void 0===i.complete&&(i.complete=Ui);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Ui(){}
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
 */function Bi(e,t){return`${e} failed: ${t} argument `}
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
const Fi=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Jn(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ji=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function qi(e){return e&&e._delegate?e._delegate:e}class Hi{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Wi{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new mi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class zi{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const $i=[];var Vi,Ki;(Ki=Vi||(Vi={}))[Ki.DEBUG=0]="DEBUG",Ki[Ki.VERBOSE=1]="VERBOSE",Ki[Ki.INFO=2]="INFO",Ki[Ki.WARN=3]="WARN",Ki[Ki.ERROR=4]="ERROR",Ki[Ki.SILENT=5]="SILENT";const Gi={debug:Vi.DEBUG,verbose:Vi.VERBOSE,info:Vi.INFO,warn:Vi.WARN,error:Vi.ERROR,silent:Vi.SILENT},Ji=Vi.INFO,Yi={[Vi.DEBUG]:"log",[Vi.VERBOSE]:"log",[Vi.INFO]:"info",[Vi.WARN]:"warn",[Vi.ERROR]:"error"},Qi=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Yi[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Xi{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Vi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Gi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Vi.DEBUG,...e),this._logHandler(this,Vi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Vi.VERBOSE,...e),this._logHandler(this,Vi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Vi.INFO,...e),this._logHandler(this,Vi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Vi.WARN,...e),this._logHandler(this,Vi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Vi.ERROR,...e),this._logHandler(this,Vi.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ji,this._logHandler=Qi,this._userLogHandler=null,$i.push(this)}}let Zi,er;const tr=new WeakMap,nr=new WeakMap,ir=new WeakMap,rr=new WeakMap,sr=new WeakMap;let or={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return nr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ir.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ar(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(er||(er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ur(this),t),lr(tr.get(this))}:function(...t){return lr(e.apply(ur(this),t))}:function(t,...n){const i=e.call(ur(this),t,...n);return ir.set(i,t.sort?t.sort():[t]),lr(i)}}function cr(e){return"function"==typeof e?ar(e):(e instanceof IDBTransaction&&function(e){if(nr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));nr.set(e,t)}(e),t=e,(Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,or):e);var t}function lr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(lr(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&tr.set(t,e)})).catch((()=>{})),sr.set(t,e),t}(e);if(rr.has(e))return rr.get(e);const t=cr(e);return t!==e&&(rr.set(e,t),sr.set(t,e)),t}const ur=e=>sr.get(e);function hr(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=lr(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(lr(o.result),e.oldVersion,e.newVersion,lr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const dr=["get","getKey","getAll","getAllKeys","count"],fr=["put","add","delete","clear"],pr=new Map;function mr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(pr.get(t))return pr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=fr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!dr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return pr.set(t,s),s}or=(e=>({...e,get:(t,n,i)=>mr(t,n)||e.get(t,n,i),has:(t,n)=>!!mr(t,n)||e.has(t,n)}))(or);
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
class gr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const _r=new Xi("@firebase/app"),yr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},vr=new Map,wr=new Map;function br(e,t){try{e.container.addComponent(t)}catch(n){_r.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ir(e){const t=e.name;if(wr.has(t))return _r.debug(`There were multiple attempts to register component ${t}.`),!1;wr.set(t,e);for(const t of vr.values())br(t,e);return!0}function Er(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Tr=new yi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Cr{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Hi("app",(()=>this),"PUBLIC"))}}
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
 */function kr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Tr.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=hi())||void 0===s?void 0:s.config),!n)throw Tr.create("no-options");const o=vr.get(r);if(o){if(Ni(n,o.options)&&Ni(i,o.config))return o;throw Tr.create("duplicate-app",{appName:r})}const a=new zi(r);for(const e of wr.values())a.addComponent(e);const c=new Cr(n,i,a);return vr.set(r,c),c}function Sr(e="[DEFAULT]"){const t=vr.get(e);if(!t&&"[DEFAULT]"===e)return kr();if(!t)throw Tr.create("no-app",{appName:e});return t}function xr(e,t,n){var i;let r=null!==(i=yr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void _r.warn(e.join(" "))}Ir(new Hi(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Nr=null;function Rr(){return Nr||(Nr=hr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Tr.create("idb-open",{originalErrorMessage:e.message})}))),Nr}async function Or(e,t){var n;try{const n=(await Rr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ar(e)),n.done}catch(e){if(e instanceof _i)_r.warn(e.message);else{const t=Tr.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});_r.warn(t.message)}}}function Ar(e){return`${e.name}!${e.options.appId}`}
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
 */class Pr{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Lr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Lr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Mr(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ei(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dr(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Lr(){return(new Date).toISOString().substring(0,10)}class Dr{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await Rr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ar(e))}catch(e){if(e instanceof _i)_r.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});_r.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Or(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Or(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Mr(e){return ei(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Ur;Ur="",Ir(new Hi("platform-logger",(e=>new gr(e)),"PRIVATE")),Ir(new Hi("heartbeat",(e=>new Pr(e)),"PRIVATE")),xr("@firebase/app","0.8.4",Ur),xr("@firebase/app","0.8.4","esm2017"),xr("fire-js","");
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
xr("firebase","9.14.0","app");
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
 */let Br="";
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
class Fr{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),bi(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:wi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class jr{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ci(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const qr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Fr(t)}}catch(e){}return new jr},Hr=qr("localStorage"),Wr=qr("sessionStorage"),zr=new Xi("@firebase/database"),$r=function(){let e=1;return function(){return e++}}(),Vr=function(e){const t=Fi(e),n=new Li;n.update(t);const i=n.digest();return Xn.encodeByteArray(i)},Kr=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Kr.apply(null,i):t+="object"==typeof i?bi(i):i,t+=" "}return t};let Gr=null,Jr=!0;const Yr=function(e,t){Jn(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(zr.logLevel=Vi.VERBOSE,Gr=zr.log.bind(zr),t&&Wr.set("logging_enabled",!0)):"function"==typeof e?Gr=e:(Gr=null,Wr.remove("logging_enabled"))},Qr=function(...e){if(!0===Jr&&(Jr=!1,null===Gr&&!0===Wr.get("logging_enabled")&&Yr(!0)),Gr){const t=Kr.apply(null,e);Gr(t)}},Xr=function(e){return function(...t){Qr(e,...t)}},Zr=function(...e){const t="FIREBASE INTERNAL ERROR: "+Kr(...e);zr.error(t)},es=function(...e){const t=`FIREBASE FATAL ERROR: ${Kr(...e)}`;throw zr.error(t),new Error(t)},ts=function(...e){const t="FIREBASE WARNING: "+Kr(...e);zr.warn(t)},ns=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},is=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=hs(e),i=hs(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},rs=function(e,t){return e===t?0:e<t?-1:1},ss=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+bi(t))},os=function(e){if("object"!=typeof e||null===e)return bi(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=bi(t[i]),n+=":",n+=os(e[t[i]]);return n+="}",n},as=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function cs(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const ls=function(e){Jn(!ns(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const us=new RegExp("^-?(0*)\\d{1,10}$"),hs=function(e){if(us.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ds=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ts("Exception was thrown by user callback.",t),e}),Math.floor(0))}},fs=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class ps{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ts(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class ms{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Qr("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ts(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class gs{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}gs.OWNER="owner";
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
const _s=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class ys{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}}function vs(e,t,n){let i;if(Jn("string"==typeof t,"typeof type must == string"),Jn("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return cs(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class ws{incrementCounter(e,t=1){Ci(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ni(this.counters_)}constructor(){this.counters_={}}}
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
 */const bs={},Is={};function Es(e){const t=e.toString();return bs[t]||(bs[t]=new ws),bs[t]}
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
class Ts{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ds((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class Cs{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ts(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(li()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ks(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&_s.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cs.forceAllow_=!0}static forceDisallow(){Cs.forceDisallow_=!0}static isAvailable(){return!li()&&(!!Cs.forceAllow_||!(Cs.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=bi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Zn(t),i=as(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(li())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=bi(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xr(e),this.stats_=Es(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),vs(t,"long_polling",e))}}class ks{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Qr("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){li()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Qr("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,li())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=$r(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ks.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Qr("frame writing exception"),e.stack&&Qr(e.stack),Qr(e)}}}}
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
 */let Ss=null;"undefined"!=typeof MozWebSocket?Ss=MozWebSocket:"undefined"!=typeof WebSocket&&(Ss=WebSocket);class xs{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!li()&&"undefined"!=typeof location&&location.hostname&&_s.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),vs(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let e;if(li()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Br}/${On.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Ss(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){xs.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ss&&!xs.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||!0===Hr.get("previous_websocket_failure")}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=wi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Jn(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=bi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=as(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xr(this.connId),this.stats_=Es(t),this.connURL=xs.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}xs.responsesRequiredToBeHealthy=2,xs.healthyTimeout=3e4;
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
class Ns{static get ALL_TRANSPORTS(){return[Cs,xs]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=xs&&xs.isAvailable();let n=t&&!xs.previouslyFailed();if(e.webSocketOnly&&(t||ts("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[xs];else{const e=this.transports_=[];for(const t of Ns.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Ns.globalTransportInitialized_=!1;class Rs{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fs((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ss("t",e),n=ss("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ss("t",e),n=ss("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ss("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Zr("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ts("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),fs((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xr("c:"+this.id+":"),this.transportManager_=new Ns(t),this.log_("Connection created"),this.start_()}}
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
 */class Os{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class As{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Jn(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Jn(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class Ps extends As{static getInstance(){return new Ps}getInitialEvent(e){return Jn("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||si()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class Ls{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Ds(){return new Ls("")}function Ms(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Us(e){return e.pieces_.length-e.pieceNum_}function Bs(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ls(e.pieces_,t)}function Fs(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function js(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function qs(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ls(t,0)}function Hs(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ls)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ls(n,0)}function Ws(e){return e.pieceNum_>=e.pieces_.length}function zs(e,t){const n=Ms(e),i=Ms(t);if(null===n)return t;if(n===i)return zs(Bs(e),Bs(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function $s(e,t){const n=js(e,0),i=js(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=is(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Vs(e,t){if(Us(e)!==Us(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ks(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Us(e)>Us(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Gs{constructor(e,t){this.errorPrefix_=t,this.parts_=js(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ji(this.parts_[e]);Js(this)}}function Js(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ys(e))}function Ys(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Qs extends As{static getInstance(){return new Qs}getInitialEvent(e){return Jn("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class Xs extends Os{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(bi(r)),Jn(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new mi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Jn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Jn(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Xs.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Ci(e,"w")){const n=ki(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ts(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Ti(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ei(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Jn(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+bi(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Zr("Unrecognized action received from server: "+bi(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Jn(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xs.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Jn(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Qr("getToken() completed but was canceled"):(Qr("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new Rs(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ts(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&ts(e),a())}}}interrupt(e){Qr("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qr("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Si(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>os(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ls(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Qr("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Qr("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";li()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Br.replace(/\./g,"-")]=1,si()?e["framework.cordova"]=1:ai()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ps.getInstance().currentlyOnline();return Si(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Xs.nextPersistentConnectionId_++,this.log_=Xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!li())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qs.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ps.getInstance().on("online",this.onOnline_,this)}}Xs.nextPersistentConnectionId_=0,Xs.nextConnectionId_=0;
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
class Zs{static Wrap(e,t){return new Zs(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class eo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Zs("[MIN_NAME]",e),i=new Zs("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Zs.MIN}}
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
 */let to;class no extends eo{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(e){to=e}compare(e,t){return is(e.name,t.name)}isDefinedOn(e){throw Yn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Zs.MIN}maxPost(){return new Zs("[MAX_NAME]",to)}makePost(e,t){return Jn("string"==typeof e,"KeyIndex indexValue must always be a string."),new Zs(e,to)}toString(){return".key"}}const io=new no;
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
 */class ro{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class so{copy(e,t,n,i,r){return new so(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return oo.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return oo.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,so.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,so.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:so.RED,this.left=null!=i?i:oo.EMPTY_NODE,this.right=null!=r?r:oo.EMPTY_NODE}}so.RED=!0,so.BLACK=!1;class oo{insert(e,t){return new oo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,so.BLACK,null,null))}remove(e){return new oo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,so.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ro(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ro(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}constructor(e,t=oo.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function ao(e,t){return is(e.name,t.name)}function co(e,t){return is(e,t)}
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
 */let lo;oo.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new so(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const uo=function(e){return"number"==typeof e?"number:"+ls(e):"string:"+e},ho=function(e){if(e.isLeafNode()){const t=e.val();Jn("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ci(t,".sv"),"Priority must be a string or number.")}else Jn(e===lo||e.isEmpty(),"priority of unexpected type.");Jn(e===lo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let fo,po,mo;class go{static set __childrenNodeConstructor(e){fo=e}static get __childrenNodeConstructor(){return fo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new go(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:go.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ws(e)?this:".priority"===Ms(e)?this.priorityNode_:go.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:go.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ms(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Jn(".priority"!==n||1===Us(e),".priority must be the last token in a path"),this.updateImmediateChild(n,go.__childrenNodeConstructor.EMPTY_NODE.updateChild(Bs(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?ls(this.value_):this.value_,this.lazyHash_=Vr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===go.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof go.__childrenNodeConstructor?-1:(Jn(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=go.VALUE_TYPE_ORDER.indexOf(t),r=go.VALUE_TYPE_ORDER.indexOf(n);return Jn(i>=0,"Unknown leaf type: "+t),Jn(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=go.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Jn(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ho(this.priorityNode_)}}go.VALUE_TYPE_ORDER=["object","boolean","number","string"];const _o=new class extends eo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?is(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Zs.MIN}maxPost(){return new Zs("[MAX_NAME]",new go("[PRIORITY-POST]",mo))}makePost(e,t){const n=po(e);return new Zs(t,new go("[PRIORITY-POST]",n))}toString(){return".priority"}},yo=Math.log(2);
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
 */class vo{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/yo,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const wo=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new so(a,o.node,so.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new so(a,o.node,so.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new so(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,so.BLACK):(a(i,so.BLACK),a(i,so.RED))}return s}(new vo(e.length));return new oo(i||t,s)};
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
 */let bo;const Io={};class Eo{static get Default(){return Jn(Io&&_o,"ChildrenNode.ts has not been loaded"),bo=bo||new Eo({".priority":Io},{".priority":_o}),bo}get(e){const t=ki(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof oo?t:null}hasIndex(e){return Ci(this.indexSet_,e.toString())}addIndex(e,t){Jn(e!==io,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Zs.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?wo(n,e.getCompare()):Io;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new Eo(l,c)}addToIndexes(e,t){const n=xi(this.indexes_,((n,i)=>{const r=ki(this.indexSet_,i);if(Jn(r,"Missing index implementation for "+i),n===Io){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Zs.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),wo(n,r.getCompare())}return Io}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Zs(e.name,i))),r.insert(e,e.node)}}));return new Eo(n,this.indexSet_)}removeFromIndexes(e,t){const n=xi(this.indexes_,(n=>{if(n===Io)return n;{const i=t.get(e.name);return i?n.remove(new Zs(e.name,i)):n}}));return new Eo(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let To;class Co{static get EMPTY_NODE(){return To||(To=new Co(new oo(co),null,Eo.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||To}updatePriority(e){return this.children_.isEmpty()?this:new Co(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?To:t}}getChild(e){const t=Ms(e);return null===t?this:this.getImmediateChild(t).getChild(Bs(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Jn(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Zs(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?To:this.priorityNode_;return new Co(i,s,r)}}updateChild(e,t){const n=Ms(e);if(null===n)return t;{Jn(".priority"!==Ms(e)||1===Us(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Bs(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(_o,((s,o)=>{t[s]=o.val(e),n++,r&&Co.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+uo(this.getPriority().val())+":"),this.forEachChild(_o,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Vr(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Zs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Zs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Zs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Zs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Zs.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ko?-1:0}withIndex(e){if(e===io||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Co(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===io||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(_o),n=t.getIterator(_o);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===io?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ho(this.priorityNode_),this.children_.isEmpty()&&Jn(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Co.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ko=new class extends Co{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Co.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new oo(co),Co.EMPTY_NODE,Eo.Default)}};Object.defineProperties(Zs,{MIN:{value:new Zs("[MIN_NAME]",Co.EMPTY_NODE)},MAX:{value:new Zs("[MAX_NAME]",ko)}}),no.__EMPTY_NODE=Co.EMPTY_NODE,go.__childrenNodeConstructor=Co,lo=ko,function(e){mo=e}(ko);function So(e,t=null){if(null===e)return Co.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Jn(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new go(e,So(t))}if(e instanceof Array){let n=Co.EMPTY_NODE;return cs(e,((t,i)=>{if(Ci(e,t)&&"."!==t.substring(0,1)){const e=So(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(So(t))}{const n=[];let i=!1;if(cs(e,((e,t)=>{if("."!==e.substring(0,1)){const r=So(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Zs(e,r)))}})),0===n.length)return Co.EMPTY_NODE;const r=wo(n,ao,(e=>e.name),co);if(i){const e=wo(n,_o.getCompare());return new Co(r,So(t),new Eo({".priority":e},{".priority":_o}))}return new Co(r,So(t),Eo.Default)}}!function(e){po=e}(So);
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
class xo extends eo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?is(e.name,t.name):r}makePost(e,t){const n=So(e),i=Co.EMPTY_NODE.updateChild(this.indexPath_,n);return new Zs(t,i)}maxPost(){const e=Co.EMPTY_NODE.updateChild(this.indexPath_,ko);return new Zs("[MAX_NAME]",e)}toString(){return js(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Jn(!Ws(e)&&".priority"!==Ms(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const No=new class extends eo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?is(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Zs.MIN}maxPost(){return Zs.MAX}makePost(e,t){const n=So(e);return new Zs(t,n)}toString(){return".value"}},Ro="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */!function(){let e=0;const t=[]}();
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
function Oo(e){return{type:"value",snapshotNode:e}}function Ao(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Po(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Lo(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Do{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Jn(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Jn(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Jn(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Jn(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Jn(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_o}copy(){const e=new Do;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_o}}function Mo(e){const t={};if(e.isDefault())return t;let n;return e.index_===_o?n="$priority":e.index_===No?n="$value":e.index_===io?n="$key":(Jn(e.index_ instanceof xo,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=bi(n),e.startSet_&&(t.startAt=bi(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+bi(e.indexStartName_))),e.endSet_&&(t.endAt=bi(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+bi(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Uo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==_o&&(t.i=e.index_.toString()),t}
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
 */class Bo extends Os{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Jn(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Bo.getListenId_(e,n),o={};this.listens_[s]=o;const a=Mo(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ki(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Bo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mo(e._queryParams),n=e._path.toString(),i=new mi;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oi(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=wi(o.responseText)}catch(e){ts("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&ts("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Xr("p:rest:"),this.listens_={}}}
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
 */class Fo{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Co.EMPTY_NODE}}
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
 */function jo(){return{value:null,children:new Map}}function qo(e,t,n){if(Ws(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ms(t);e.children.has(i)||e.children.set(i,jo());qo(e.children.get(i),t=Bs(t),n)}}function Ho(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{Ho(i,new Ls(t.toString()+"/"+e),n)}))}class Wo{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&cs(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class zo{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;cs(e,((e,i)=>{i>0&&Ci(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),fs(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wo(e);const n=1e4+2e4*Math.random();fs(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var $o,Vo;function Ko(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Vo=$o||($o={}))[Vo.OVERWRITE=0]="OVERWRITE",Vo[Vo.MERGE=1]="MERGE",Vo[Vo.ACK_USER_WRITE=2]="ACK_USER_WRITE",Vo[Vo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Go{operationForChild(e){if(Ws(this.path)){if(null!=this.affectedTree.value)return Jn(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ls(e));return new Go(Ds(),t,this.revert)}}return Jn(Ms(this.path)===e,"operationForChild called for unrelated child."),new Go(Bs(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=$o.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class Jo{operationForChild(e){return Ws(this.path)?new Jo(this.source,Ds(),this.snap.getImmediateChild(e)):new Jo(this.source,Bs(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=$o.OVERWRITE}}
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
 */class Yo{operationForChild(e){if(Ws(this.path)){const t=this.children.subtree(new Ls(e));return t.isEmpty()?null:t.value?new Jo(this.source,Ds(),t.value):new Yo(this.source,Ds(),t)}return Jn(Ms(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yo(this.source,Bs(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=$o.MERGE}}
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
 */class Qo{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ws(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ms(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */function Xo(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Yn("Should only compare child_ events.");const i=new Zs(t.childName,t.snapshotNode),r=new Zs(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Zo(e,t){return{eventCache:e,serverCache:t}}function ea(e,t,n,i){return Zo(new Qo(t,n,i),e.serverCache)}function ta(e,t,n,i){return Zo(e.eventCache,new Qo(t,n,i))}function na(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ia(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ra;class sa{static fromObject(e){let t=new sa(null);return cs(e,((e,n)=>{t=t.set(new Ls(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ds(),value:this.value};if(Ws(e))return null;{const n=Ms(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Bs(e),t);if(null!=r){return{path:Hs(new Ls(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ws(e))return this;{const t=Ms(e),n=this.children.get(t);return null!==n?n.subtree(Bs(e)):new sa(null)}}set(e,t){if(Ws(e))return new sa(t,this.children);{const n=Ms(e),i=(this.children.get(n)||new sa(null)).set(Bs(e),t),r=this.children.insert(n,i);return new sa(this.value,r)}}remove(e){if(Ws(e))return this.children.isEmpty()?new sa(null):new sa(null,this.children);{const t=Ms(e),n=this.children.get(t);if(n){const i=n.remove(Bs(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new sa(null):new sa(this.value,r)}return this}}get(e){if(Ws(e))return this.value;{const t=Ms(e),n=this.children.get(t);return n?n.get(Bs(e)):null}}setTree(e,t){if(Ws(e))return t;{const n=Ms(e),i=(this.children.get(n)||new sa(null)).setTree(Bs(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new sa(this.value,r)}}fold(e){return this.fold_(Ds(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Hs(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ds(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ws(e))return null;{const i=Ms(e),r=this.children.get(i);return r?r.findOnPath_(Bs(e),Hs(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ds(),t)}foreachOnPath_(e,t,n){if(Ws(e))return this;{this.value&&n(t,this.value);const i=Ms(e),r=this.children.get(i);return r?r.foreachOnPath_(Bs(e),Hs(t,i),n):new sa(null)}}foreach(e){this.foreach_(Ds(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Hs(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ra||(ra=new oo(rs)),ra))()){this.value=e,this.children=t}}
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
 */class oa{static empty(){return new oa(new sa(null))}constructor(e){this.writeTree_=e}}function aa(e,t,n){if(Ws(t))return new oa(new sa(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=zs(r,t);return s=s.updateChild(o,n),new oa(e.writeTree_.set(r,s))}{const i=new sa(n),r=e.writeTree_.setTree(t,i);return new oa(r)}}}function ca(e,t,n){let i=e;return cs(n,((e,n)=>{i=aa(i,Hs(t,e),n)})),i}function la(e,t){if(Ws(t))return oa.empty();{const n=e.writeTree_.setTree(t,new sa(null));return new oa(n)}}function ua(e,t){return null!=ha(e,t)}function ha(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(zs(n.path,t)):null}function da(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(_o,((e,n)=>{t.push(new Zs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Zs(e,n.value))})),t}function fa(e,t){if(Ws(t))return e;{const n=ha(e,t);return new oa(null!=n?new sa(n):e.writeTree_.subtree(t))}}function pa(e){return e.writeTree_.isEmpty()}function ma(e,t){return ga(Ds(),e.writeTree_,t)}function ga(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Jn(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=ga(Hs(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Hs(e,".priority"),i)),n}}
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
 */function _a(e,t){return Ra(t,e)}function ya(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Jn(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&va(t,i.path)?r=!1:Ks(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=ba(e.allWrites,wa,Ds()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=la(e.visibleWrites,i.path);else{cs(i.children,(t=>{e.visibleWrites=la(e.visibleWrites,Hs(i.path,t))}))}return!0}return!1}function va(e,t){if(e.snap)return Ks(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ks(Hs(e.path,n),t))return!0;return!1}function wa(e){return e.visible}function ba(e,t,n){let i=oa.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Ks(n,e)?(t=zs(n,e),i=aa(i,t,s.snap)):Ks(e,n)&&(t=zs(e,n),i=aa(i,Ds(),s.snap.getChild(t)));else{if(!s.children)throw Yn("WriteRecord should have .snap or .children");if(Ks(n,e))t=zs(n,e),i=ca(i,t,s.children);else if(Ks(e,n))if(t=zs(e,n),Ws(t))i=ca(i,Ds(),s.children);else{const e=ki(s.children,Ms(t));if(e){const n=e.getChild(Bs(t));i=aa(i,Ds(),n)}}}}}return i}function Ia(e,t,n,i,r){if(i||r){const s=fa(e.visibleWrites,t);if(!r&&pa(s))return n;if(r||null!=n||ua(s,Ds())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ks(e.path,t)||Ks(t,e.path))};return ma(ba(e.allWrites,s,t),n||Co.EMPTY_NODE)}return null}{const i=ha(e.visibleWrites,t);if(null!=i)return i;{const i=fa(e.visibleWrites,t);if(pa(i))return n;if(null!=n||ua(i,Ds())){return ma(i,n||Co.EMPTY_NODE)}return null}}}function Ea(e,t,n,i){return Ia(e.writeTree,e.treePath,t,n,i)}function Ta(e,t){return function(e,t,n){let i=Co.EMPTY_NODE;const r=ha(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(_o,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=fa(e.visibleWrites,t);return n.forEachChild(_o,((e,t)=>{const n=ma(fa(r,new Ls(e)),t);i=i.updateImmediateChild(e,n)})),da(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return da(fa(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Ca(e,t,n,i){return function(e,t,n,i,r){Jn(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Hs(t,n);if(ua(e.visibleWrites,s))return null;{const t=fa(e.visibleWrites,s);return pa(t)?r.getChild(n):ma(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function ka(e,t){return function(e,t){return ha(e.visibleWrites,t)}(e.writeTree,Hs(e.treePath,t))}function Sa(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=fa(e.visibleWrites,t),l=ha(c,Ds());if(null!=l)a=l;else{if(null==n)return[];a=ma(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function xa(e,t,n){return function(e,t,n,i){const r=Hs(t,n),s=ha(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return ma(fa(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Na(e,t){return Ra(Hs(e.treePath,t),e.writeTree)}function Ra(e,t){return{treePath:e,writeTree:t}}
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
 */class Oa{trackChildChange(e){const t=e.type,n=e.childName;Jn("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Jn(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Lo(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Po(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Ao(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Yn("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Lo(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const Aa=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Pa{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Qo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xa(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ia(this.viewCache_),r=Sa(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function La(e,t,n,i,r){const s=new Oa;let o,a;if(n.type===$o.OVERWRITE){const c=n;c.source.fromUser?o=Ua(e,t,c.path,c.snap,i,r,s):(Jn(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Ws(c.path),o=Ma(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===$o.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=Hs(n,i);Ba(t,Ms(l))&&(a=Ua(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=Hs(n,i);Ba(t,Ms(l))||(a=Ua(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(Jn(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=ja(e,t,c.path,c.children,i,r,a,s))}else if(n.type===$o.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=ka(i,n))return t;{const a=new Pa(i,t,r),c=t.eventCache.getNode();let l;if(Ws(n)||".priority"===Ms(n)){let n;if(t.serverCache.isFullyInitialized())n=Ea(i,ia(t));else{const e=t.serverCache.getNode();Jn(e instanceof Co,"serverChildren would be complete if leaf node"),n=Ta(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=Ms(n);let u=xa(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,Bs(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Co.EMPTY_NODE,Bs(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ea(i,ia(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=ka(i,Ds()),ea(t,l,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=ka(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Ws(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ma(e,t,n,c.getNode().getChild(n),r,s,a,o);if(Ws(n)){let i=new sa(null);return c.getNode().forEachChild(io,((e,t)=>{i=i.set(new Ls(e),t)})),ja(e,t,n,i,r,s,a,o)}return t}{let l=new sa(null);return i.foreach(((e,t)=>{const i=Hs(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),ja(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==$o.LISTEN_COMPLETE)throw Yn("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=ta(t,s.getNode(),s.isFullyInitialized()||Ws(n),s.isFiltered());return Da(e,o,n,i,Aa,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=na(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Oo(na(t)))}}(t,o,c),{viewCache:o,changes:c}}function Da(e,t,n,i,r,s){const o=t.eventCache;if(null!=ka(i,n))return t;{let a,c;if(Ws(n))if(Jn(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ia(t),r=Ta(i,n instanceof Co?n:Co.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Ea(i,ia(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=Ms(n);if(".priority"===l){Jn(1===Us(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=Ca(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=Bs(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Ca(i,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=xa(i,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,r,s):o.getNode()}}return ea(t,a,o.isFullyInitialized()||Ws(n),e.filter.filtersNodes())}}function Ma(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(Ws(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=Ms(n);if(!c.isCompleteForPath(n)&&Us(n)>1)return t;const r=Bs(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,r,Aa,null)}const h=ta(t,l,c.isFullyInitialized()||Ws(n),u.filtersNodes());return Da(e,h,n,r,new Pa(r,h,s),a)}function Ua(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Pa(r,t,s);if(Ws(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=ea(t,l,!0,e.filter.filtersNodes());else{const r=Ms(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ea(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Bs(n),l=a.getNode().getImmediateChild(r);let h;if(Ws(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===Fs(s)&&e.getChild(qs(s)).isEmpty()?e:e.updateChild(s,i):Co.EMPTY_NODE}if(l.equals(h))c=t;else{c=ea(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Ba(e,t){return e.eventCache.isCompleteForChild(t)}function Fa(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ja(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Ws(n)?i:new sa(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=Fa(0,t.serverCache.getNode().getImmediateChild(n),i);l=Ma(e,l,new Ls(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=Fa(0,t.serverCache.getNode().getImmediateChild(n),i);l=Ma(e,l,new Ls(n),c,r,s,o,a)}})),l}function qa(e,t){const n=ia(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ws(t)&&!n.getImmediateChild(Ms(t)).isEmpty())?n.getChild(t):null}function Ha(e,t,n,i){t.type===$o.MERGE&&null!==t.source.queryId&&(Jn(ia(e.viewCache_),"We should always have a full cache before handling merges"),Jn(na(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=La(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Jn(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Jn(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Jn(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Wa(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Wa(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Xo(e,r,"child_removed",t,i,n),Xo(e,r,"child_added",t,i,n),Xo(e,r,"child_moved",s,i,n),Xo(e,r,"child_changed",t,i,n),Xo(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let za,$a;function Va(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Jn(null!=s,"SyncTree gave us an op for an invalid query."),Ha(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Ha(s,t,n,i));return r}}function Ka(e,t){let n=null;for(const i of e.views.values())n=n||qa(i,t);return n}class Ga{constructor(e){this.listenProvider_=e,this.syncPointTree_=new sa(null),this.pendingWriteTree_={visibleWrites:oa.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ja(e,t,n,i,r){return function(e,t,n,i,r){Jn(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=aa(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?tc(e,new Jo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ya(e,t,n,i){!function(e,t,n,i){Jn(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=ca(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=sa.fromObject(n);return tc(e,new Yo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Qa(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ya(e.pendingWriteTree_,t)){let t=new sa(null);return null!=i.snap?t=t.set(Ds(),!0):cs(i.children,(e=>{t=t.set(new Ls(e),!0)})),tc(e,new Go(i.path,t,n))}return[]}function Xa(e,t,n){return tc(e,new Jo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Za(e,t,n,i){const r=rc(e,i);if(null!=r){const i=sc(r),s=i.path,o=i.queryId,a=zs(s,t);return oc(e,s,new Jo(Ko(o),a,n))}return[]}function ec(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ka(n,zs(e,t));if(i)return i}));return Ia(i,t,r,n,!0)}function tc(e,t){return nc(t,e.syncPointTree_,null,_a(e.pendingWriteTree_,Ds()))}function nc(e,t,n,i){if(Ws(e.path))return ic(e,t,n,i);{const r=t.get(Ds());null==n&&null!=r&&(n=Ka(r,Ds()));let s=[];const o=Ms(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Na(i,o);s=s.concat(nc(a,c,e,t))}return r&&(s=s.concat(Va(r,e,i,n))),s}}function ic(e,t,n,i){const r=t.get(Ds());null==n&&null!=r&&(n=Ka(r,Ds()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Na(i,t),c=e.operationForChild(t);c&&(s=s.concat(ic(c,r,o,a)))})),r&&(s=s.concat(Va(r,e,i,n))),s}function rc(e,t){return e.tagToQueryMap.get(t)}function sc(e){const t=e.indexOf("$");return Jn(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ls(e.substr(0,t))}}function oc(e,t,n){const i=e.syncPointTree_.get(t);Jn(i,"Missing sync point for query tag that we're tracking");return Va(i,n,_a(e.pendingWriteTree_,t),null)}
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
class ac{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ac(t)}node(){return this.node_}constructor(e){this.node_=e}}class cc{getImmediateChild(e){const t=Hs(this.path_,e);return new cc(this.syncTree_,t)}node(){return ec(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const lc=function(e,t,n){return e&&"object"==typeof e?(Jn(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?uc(e[".sv"],t,n):"object"==typeof e[".sv"]?hc(e[".sv"],t):void Jn(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},uc=function(e,t,n){if("timestamp"===e)return n.timestamp;Jn(!1,"Unexpected server value: "+e)},hc=function(e,t,n){e.hasOwnProperty("increment")||Jn(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Jn(!1,"Unexpected increment value: "+i);const r=t.node();if(Jn(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},dc=function(e,t,n,i){return pc(t,new cc(n,e),i)},fc=function(e,t,n){return pc(e,new ac(t),n)};function pc(e,t,n){const i=e.getPriority().val(),r=lc(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=lc(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new go(s,So(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new go(r))),i.forEachChild(_o,((e,i)=>{const r=pc(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class mc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function gc(e,t){let n=t instanceof Ls?t:new Ls(t),i=e,r=Ms(n);for(;null!==r;){const e=ki(i.node.children,r)||{children:{},childCount:0};i=new mc(r,i,e),n=Bs(n),r=Ms(n)}return i}function _c(e){return e.node.value}function yc(e,t){e.node.value=t,Ec(e)}function vc(e){return e.node.childCount>0}function wc(e,t){cs(e.node.children,((n,i)=>{t(new mc(n,e,i))}))}function bc(e,t,n,i){n&&!i&&t(e),wc(e,(e=>{bc(e,t,!0,i)})),n&&i&&t(e)}function Ic(e){return new Ls(null===e.parent?e.name:Ic(e.parent)+"/"+e.name)}function Ec(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===_c(e)&&!vc(e)}(n),r=Ci(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ec(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ec(e))}
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
 */(e.parent,e.name,e)}const Tc=/[\[\].#$\/\u0000-\u001F\u007F]/,Cc=/[\[\].#$\u0000-\u001F\u007F]/,kc=function(e){return"string"==typeof e&&0!==e.length&&!Tc.test(e)},Sc=function(e){return"string"==typeof e&&0!==e.length&&!Cc.test(e)},xc=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!ns(e)||e&&"object"==typeof e&&Ci(e,".sv")},Nc=function(e,t,n,i){i&&void 0===t||Rc(Bi(e,"value"),t,n)},Rc=function(e,t,n){const i=n instanceof Ls?new Gs(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ys(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ys(i)+" with contents = "+t.toString());if(ns(t))throw new Error(e+"contains "+t.toString()+" "+Ys(i));if("string"==typeof t&&t.length>10485760/3&&ji(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Ys(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(cs(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!kc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ys(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ji(a),Js(o),Rc(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=ji(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ys(i)+" in addition to actual children.")}},Oc=function(e,t,n,i){if(i&&void 0===t)return;const r=Bi(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const s=[];cs(t,((e,t)=>{const i=new Ls(e);if(Rc(r,t,Hs(n,i)),".priority"===Fs(i)&&!xc(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=js(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!kc(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort($s);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Ks(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,s)},Ac=function(e,t,n,i){if(!(i&&void 0===n||Sc(n)))throw new Error(Bi(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Pc=function(e,t){if(".info"===Ms(t))throw new Error(e+" failed = Can't modify data under /.info/")},Lc=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!kc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Sc(e)}(n))throw new Error(Bi(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Dc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mc(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Vs(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Uc(e,t,n){Mc(e,n),Bc(e,(e=>Ks(e,t)||Ks(t,e)))}function Bc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Fc(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Fc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Gr&&Qr("event: "+n.toString()),ds(i)}}}
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
 */class jc{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Dc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jo(),this.transactionQueueTree_=new mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function qc(e,t,n){if(e.stats_=Es(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Bo(e.repoInfo_,((t,n,i,r)=>{zc(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>$c(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{bi(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Xs(e.repoInfo_,t,((t,n,i,r)=>{zc(e,t,n,i,r)}),(t=>{$c(e,t)}),(t=>{!function(e,t){cs(t,((t,n)=>{Vc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Is[n]||(Is[n]=t()),Is[n]}(e.repoInfo_,(()=>new zo(e.stats_,e.server_))),e.infoData_=new Fo,e.infoSyncTree_=new Ga({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Xa(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Vc(e,"connected",!1),e.serverSyncTree_=new Ga({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Uc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Hc(e){const t=e.infoData_.getNode(new Ls(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Wc(e){return(t=(t={timestamp:Hc(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function zc(e,t,n,i,r){e.dataUpdateCount++;const s=new Ls(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=xi(n,(e=>So(e)));o=function(e,t,n,i){const r=rc(e,i);if(r){const i=sc(r),s=i.path,o=i.queryId,a=zs(s,t),c=sa.fromObject(n);return oc(e,s,new Yo(Ko(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=So(n);o=Za(e.serverSyncTree_,s,t,r)}else if(i){const t=xi(n,(e=>So(e)));o=function(e,t,n){const i=sa.fromObject(n);return tc(e,new Yo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=So(n);o=Xa(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=el(e,s)),Uc(e.eventQueue_,a,o)}function $c(e,t){Vc(e,"connected",t),!1===t&&function(e){Yc(e,"onDisconnectEvents");const t=Wc(e),n=jo();Ho(e.onDisconnect_,Ds(),((i,r)=>{const s=dc(i,r,e.serverSyncTree_,t);qo(n,i,s)}));let i=[];Ho(n,Ds(),((t,n)=>{i=i.concat(Xa(e.serverSyncTree_,t,n));const r=sl(e,t);el(e,r)})),e.onDisconnect_=jo(),Uc(e.eventQueue_,Ds(),i)}(e)}function Vc(e,t,n){const i=new Ls("/.info/"+t),r=So(n);e.infoData_.updateSnapshot(i,r);const s=Xa(e.infoSyncTree_,i,r);Uc(e.eventQueue_,i,s)}function Kc(e){return e.nextWriteId_++}function Gc(e,t,n,i,r){Yc(e,"set",{path:t.toString(),value:n,priority:i});const s=Wc(e),o=So(n,i),a=ec(e.serverSyncTree_,t),c=fc(o,a,s),l=Kc(e),u=Ja(e.serverSyncTree_,t,c,l,!0);Mc(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||ts("set at "+t+" failed: "+n);const o=Qa(e.serverSyncTree_,l,!s);Uc(e.eventQueue_,t,o),Qc(e,r,n,i)}));const h=sl(e,t);el(e,h),Uc(e.eventQueue_,h,[])}function Jc(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Yc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Qr(n,...t)}function Qc(e,t,n,i){t&&ds((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Xc(e,t,n){return ec(e.serverSyncTree_,t,n)||Co.EMPTY_NODE}function Zc(e,t=e.transactionQueueTree_){if(t||rl(e,t),_c(t)){const n=nl(e,t);Jn(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Xc(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Jn(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=zs(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Yc(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Qa(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();rl(e,gc(e.transactionQueueTree_,t)),Zc(e,e.transactionQueueTree_),Uc(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)ds(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ts("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}el(e,t)}}),o)}(e,Ic(t),n)}else vc(t)&&wc(t,(t=>{Zc(e,t)}))}function el(e,t){const n=tl(e,t),i=Ic(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=zs(n,c.path);let u,h=!1;if(Jn(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(Qa(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(Qa(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Xc(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Rc("transaction failed: Data returned ",i,c.path);let t=So(i);"object"==typeof i&&null!=i&&Ci(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Wc(e),l=fc(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Kc(e),s.splice(s.indexOf(o),1),r=r.concat(Ja(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Qa(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(Qa(e.serverSyncTree_,c.currentWriteId,!0))}Uc(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;rl(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)ds(i[e]);Zc(e,e.transactionQueueTree_)}(e,nl(e,n),i),i}function tl(e,t){let n,i=e.transactionQueueTree_;for(n=Ms(t);null!==n&&void 0===_c(i);)i=gc(i,n),n=Ms(t=Bs(t));return i}function nl(e,t){const n=[];return il(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function il(e,t,n){const i=_c(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);wc(t,(t=>{il(e,t,n)}))}function rl(e,t){const n=_c(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,yc(t,n.length>0?n:void 0)}wc(t,(t=>{rl(e,t)}))}function sl(e,t){const n=Ic(tl(e,t)),i=gc(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{ol(e,t)})),ol(e,i),bc(i,(t=>{ol(e,t)})),n}function ol(e,t){const n=_c(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Jn(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Jn(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Qa(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?yc(t,void 0):n.length=s+1,Uc(e.eventQueue_,Ic(t),r);for(let e=0;e<i.length;e++)ds(i[e])}}
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
 */const al=function(e,t){const n=cl(e),i=n.namespace;"firebase.com"===n.domain&&es(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ts("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ys(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Ls(n.pathString)}},cl=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ts(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
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
class ll{get key(){return Ws(this._path)?null:Fs(this._path)}get ref(){return new ul(this._repo,this._path)}get _queryIdentifier(){const e=Uo(this._queryParams),t=os(e);return"{}"===t?"default":t}get _queryObject(){return Uo(this._queryParams)}isEqual(e){if(!((e=qi(e))instanceof ll))return!1;const t=this._repo===e._repo,n=Vs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class ul extends ll{get parent(){const e=qs(this._path);return null===e?null:new ul(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Do,!1)}}function hl(e,t){return(e=qi(e))._checkNotDeleted("ref"),void 0!==t?dl(e._root,t):e._root}function dl(e,t){var n,i,r,s;return null===Ms((e=qi(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ac(n,i,r,s)):Ac("child","path",t,!1),new ul(e._repo,Hs(e._path,t))}function fl(e,t){e=qi(e),Pc("set",e._path),Nc("set",t,e._path,!1);const n=new mi;return Gc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function pl(e,t){Oc("update",t,e._path,!1);const n=new mi;return function(e,t,n,i){Yc(e,"update",{path:t.toString(),value:n});let r=!0;const s=Wc(e),o={};if(cs(n,((n,i)=>{r=!1,o[n]=dc(Hs(t,n),So(i),e.serverSyncTree_,s)})),r)Qr("update() called with empty data.  Don't do anything."),Qc(0,i,"ok",void 0);else{const r=Kc(e),s=Ya(e.serverSyncTree_,t,o,r);Mc(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||ts("update at "+t+" failed: "+n);const a=Qa(e.serverSyncTree_,r,!o),c=a.length>0?el(e,t):t;Uc(e.eventQueue_,c,a),Qc(0,i,n,s)})),cs(n,(n=>{const i=sl(e,Hs(t,n));el(e,i)})),Uc(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){Jn(!za,"__referenceConstructor has already been defined"),za=e}(ul),function(e){Jn(!$a,"__referenceConstructor has already been defined"),$a=e}(ul);
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
const ml={};let gl=!1;function _l(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qr("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=al(s,r),l=c.repoInfo;void 0!==On&&On.env&&(a=On.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=al(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new gs(gs.OWNER):new ms(e.name,e.options,t);Lc("Invalid Firebase Database URL",c),Ws(c.path)||es("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=ml[t.name];r||(r={},ml[t.name]=r);let s=r[e.toURLString()];s&&es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new jc(e,gl,n,i),r[e.toURLString()]=s,s}(l,e,u,new ps(e.name,n));return new yl(h,e)}class yl{get _repo(){return this._instanceStarted||(qc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ul(this._repo,Ds())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ml[t];n&&n[e.key]===e||es(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Jc(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&es("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Xs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Xs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){Br="9.14.0",Ir(new Hi("database",((e,{instanceIdentifier:t})=>_l(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),xr("@firebase/database","0.13.10",e),xr("@firebase/database","0.13.10","esm2017")}
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
 */();function vl(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bl=wl,Il=new yi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),El=new Xi("@firebase/auth");function Tl(e,...t){El.logLevel<=Vi.ERROR&&El.error(`Auth (9.14.0): ${e}`,...t)}
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
 */function Cl(e,...t){throw xl(e,...t)}function kl(e,...t){return xl(e,...t)}function Sl(e,t,n){const i=Object.assign(Object.assign({},bl()),{[t]:n});return new yi("auth","Firebase",i).create(t,{appName:e.name})}function xl(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Il.create(e,...t)}function Nl(e,t,...n){if(!e)throw xl(t,...n)}function Rl(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tl(t),new Error(t)}function Ol(e,t){e||Rl(t)}
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
 */const Al=new Map;function Pl(e){Ol(e instanceof Function,"Expected a class definition");let t=Al.get(e);return t?(Ol(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Al.set(e,t),t)}
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
function Ll(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Dl(){return"http:"===Ml()||"https:"===Ml()}function Ml(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ul(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Dl()||oi()||"connection"in navigator))||navigator.onLine}
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
class Bl{get(){return Ul()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ol(t>e,"Short delay should be less than long delay!"),this.isMobile=si()||ai()}}
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
 */function Fl(e,t){Ol(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class jl{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Rl("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Rl("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Rl("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ql={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Hl=new Bl(3e4,6e4);
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
 */function Wl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zl(e,t,n,i,r={}){return $l(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Oi(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),jl.fetch()(Kl(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function $l(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ql),t);try{const t=new Gl(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Jl(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Jl(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Jl(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Jl(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Sl(e,a,o);Cl(e,a)}}catch(t){if(t instanceof _i)throw t;Cl(e,"network-request-failed")}}async function Vl(e,t,n,i,r={}){const s=await zl(e,t,n,i,r);return"mfaPendingCredential"in s&&Cl(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Kl(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Fl(e.config,r):`${e.config.apiScheme}://${r}`}class Gl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(kl(this.auth,"network-request-failed"))),Hl.get())}))}}function Jl(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=kl(e,t,i);return r.customData._tokenResponse=n,r}
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
function Yl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Ql(e){return 1e3*Number(e)}function Xl(e){var t;const[n,i,r]=e.split(".");if(void 0===n||void 0===i||void 0===r)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const e=ti(i);return e?JSON.parse(e):(Tl("Failed to decode base64 JWT payload"),null)}catch(e){return Tl("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function Zl(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof _i&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class eu{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class tu{_initializeTime(){this.lastSignInTime=Yl(this.lastLoginAt),this.creationTime=Yl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function nu(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Zl(e,async function(e,t){return zl(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Nl(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=vl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=function(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}
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
class iu{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Nl(e.idToken,"internal-error"),Nl(void 0!==e.idToken,"internal-error"),Nl(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Xl(e);return Nl(t,"internal-error"),Nl(void 0!==t.exp,"internal-error"),Nl(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Nl(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await $l(e,{},(async()=>{const n=Oi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Kl(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",jl.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new iu;return n&&(Nl("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Nl("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Nl("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new iu,this.toJSON())}_performRefresh(){return Rl("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function ru(e,t){Nl("string"==typeof e||void 0===e,"internal-error",{appName:t})}class su{async getIdToken(e){const t=await Zl(this,this.stsTokenManager.getToken(this.auth,e));return Nl(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=qi(e),i=await n.getIdToken(t),r=Xl(i);Nl(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Yl(Ql(r.auth_time)),issuedAtTime:Yl(Ql(r.iat)),expirationTime:Yl(Ql(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=qi(e);await nu(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Nl(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new su(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Nl(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await nu(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zl(this,async function(e,t){return zl(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:I}=t;Nl(y&&I,e,"internal-error");const E=iu.fromJSON(this.name,I);Nl("string"==typeof y,e,"internal-error"),ru(u,e.name),ru(h,e.name),Nl("boolean"==typeof v,e,"internal-error"),Nl("boolean"==typeof w,e,"internal-error"),ru(d,e.name),ru(f,e.name),ru(p,e.name),ru(m,e.name),ru(g,e.name),ru(_,e.name);const T=new su({uid:y,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:_});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new iu;i.updateFromServerResponse(t);const r=new su({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await nu(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tu(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class ou{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ou.type="NONE";const au=ou;
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
 */function cu(e,t,n){return`firebase:${e}:${t}:${n}`}class lu{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?su._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lu(Pl(au),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Pl(au);const s=cu(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=su._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new lu(r,e,n)):new lu(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=cu(this.userKey,i.apiKey,r),this.fullPersistenceKey=cu("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function uu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gu(t))return"Blackberry";if(_u(t))return"Webos";if(du(t))return"Safari";if((t.includes("chrome/")||fu(t))&&!t.includes("edge/"))return"Chrome";if(mu(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function hu(e=ri()){return/firefox\//i.test(e)}function du(e=ri()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fu(e=ri()){return/crios\//i.test(e)}function pu(e=ri()){return/iemobile/i.test(e)}function mu(e=ri()){return/android/i.test(e)}function gu(e=ri()){return/blackberry/i.test(e)}function _u(e=ri()){return/webos/i.test(e)}function yu(e=ri()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vu(){return ci()&&10===document.documentMode}function wu(e=ri()){return yu(e)||mu(e)||_u(e)||gu(e)||/windows phone/i.test(e)||pu(e)}
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
function bu(e,t=[]){let n;switch(e){case"Browser":n=uu(ri());break;case"Worker":n=`${uu(ri())}-${e}`;break;default:n=e}return`${n}/JsCore/9.14.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Iu{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Eu{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pl(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lu.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Nl(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await nu(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qi(e):null;return t&&Nl(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Nl(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Pl(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pl(e)||this._popupRedirectResolver;Nl(t,this,"argument-error"),this.redirectPersistenceManager=await lu.create(this,[Pl(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Nl(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Nl(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new Iu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Il,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Tu(e){return qi(e)}class Cu{get next(){return Nl(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Di((e=>this.observer=e))}}function ku(e,t,n){const i=Tu(e);Nl(i._canInitEmulator,i,"emulator-config-failed"),Nl(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Su(t),{host:o,port:a}=function(e){const t=Su(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:xu(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:xu(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Su(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Nu{toJSON(){return Rl("not implemented")}_getIdTokenResponse(e){return Rl("not implemented")}_linkToIdToken(e,t){return Rl("not implemented")}_getReauthenticationResolver(e){return Rl("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Ru(e,t){return zl(e,"POST","/v1/accounts:update",t)}
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
class Ou extends Nu{static _fromEmailAndPassword(e,t){return new Ou(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ou(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Vl(e,"POST","/v1/accounts:signInWithPassword",Wl(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",Wl(e,t))}(e,{email:this._email,oobCode:this._password});default:Cl(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ru(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Vl(e,"POST","/v1/accounts:signInWithEmailLink",Wl(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Cl(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Au(e,t){return Vl(e,"POST","/v1/accounts:signInWithIdp",Wl(e,t))}
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
 */class Pu extends Nu{static _fromParams(e){const t=new Pu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cl("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=vl(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Pu(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Au(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Au(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Au(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Oi(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Lu={USER_NOT_FOUND:"user-not-found"};
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
class Du extends Nu{static _fromVerification(e,t){return new Du({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Du({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Vl(e,"POST","/v1/accounts:signInWithPhoneNumber",Wl(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Vl(e,"POST","/v1/accounts:signInWithPhoneNumber",Wl(e,t));if(n.temporaryProof)throw Jl(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Vl(e,"POST","/v1/accounts:signInWithPhoneNumber",Wl(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Lu)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Du({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Mu{static parseLink(e){const t=function(e){const t=Ai(Pi(e)).link,n=t?Ai(Pi(t)).deep_link_id:null,i=Ai(Pi(e)).deep_link_id;return(i?Ai(Pi(i)).link:null)||i||n||t||e}(e);try{return new Mu(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=Ai(Pi(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Nl(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Uu{static credential(e,t){return Ou._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mu.parseLink(t);return Nl(n,"argument-error"),Ou._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Uu.PROVIDER_ID}}Uu.PROVIDER_ID="password",Uu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Uu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Bu{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Fu extends Bu{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ju extends Fu{static credential(e){return Pu._fromParams({providerId:ju.PROVIDER_ID,signInMethod:ju.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ju.credentialFromTaggedObject(e)}static credentialFromError(e){return ju.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ju.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ju.FACEBOOK_SIGN_IN_METHOD="facebook.com",ju.PROVIDER_ID="facebook.com";
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
class qu extends Fu{static credential(e,t){return Pu._fromParams({providerId:qu.PROVIDER_ID,signInMethod:qu.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qu.credentialFromTaggedObject(e)}static credentialFromError(e){return qu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qu.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}qu.GOOGLE_SIGN_IN_METHOD="google.com",qu.PROVIDER_ID="google.com";
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
class Hu extends Fu{static credential(e){return Pu._fromParams({providerId:Hu.PROVIDER_ID,signInMethod:Hu.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hu.credentialFromTaggedObject(e)}static credentialFromError(e){return Hu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Hu.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Hu.GITHUB_SIGN_IN_METHOD="github.com",Hu.PROVIDER_ID="github.com";
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
class Wu extends Fu{static credential(e,t){return Pu._fromParams({providerId:Wu.PROVIDER_ID,signInMethod:Wu.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wu.credentialFromTaggedObject(e)}static credentialFromError(e){return Wu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Wu.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function zu(e,t){return Vl(e,"POST","/v1/accounts:signUp",Wl(e,t))}
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
 */Wu.TWITTER_SIGN_IN_METHOD="twitter.com",Wu.PROVIDER_ID="twitter.com";class $u{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await su._fromIdTokenResponse(e,n,i),s=Vu(n);return new $u({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Vu(n);return new $u({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Vu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Ku extends _i{static _fromErrorAndOperation(e,t,n,i){return new Ku(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Gu(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ku._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function Ju(e,t,n=!1){const i=await Zl(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $u._forOperation(e,"link",i)}
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
async function Yu(e,t,n=!1){var i;const{auth:r}=e,s="reauthenticate";try{const i=await Zl(e,Gu(r,s,t,e),n);Nl(i.idToken,r,"internal-error");const o=Xl(i.idToken);Nl(o,r,"internal-error");const{sub:a}=o;return Nl(e.uid===a,r,"user-mismatch"),$u._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&Cl(r,"user-mismatch"),e}}
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
 */async function Qu(e,t,n=!1){const i="signIn",r=await Gu(e,i,t),s=await $u._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Xu(e,t){return Qu(Tu(e),t)}async function Zu(e,t,n){const i=Tu(e),r=await zu(i,{returnSecureToken:!0,email:t,password:n}),s=await $u._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}new WeakMap;
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
class eh{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class th extends eh{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);vu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ri();return du(e)||yu(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=wu(),this._shouldAllowMigration=!0}}th.type="LOCAL";const nh=th;
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
 */class ih extends eh{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ih.type="SESSION";const rh=ih;
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
class sh{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new sh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function oh(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */sh.receivers=[];class ah{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=oh("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function ch(){return window}
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
function lh(){return void 0!==ch().WorkerGlobalScope&&"function"==typeof ch().importScripts}class uh{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function hh(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function dh(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new uh(e).toPromise()}(),t(await dh()))}))}))}async function fh(e,t,n){const i=hh(e,!0).put({fbase_key:t,value:n});return new uh(i).toPromise()}function ph(e,t){const n=hh(e,!0).delete(t);return new uh(n).toPromise()}class mh{async _openDb(){return this.db||(this.db=await dh()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(lh()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ah(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dh();return await fh(e,"__sak","1"),await ph(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>fh(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=hh(e,!1).get(t),i=await new uh(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ph(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hh(e,!1).getAll();return new uh(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}mh.type="LOCAL";const gh=mh;
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
 */function _h(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=kl("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function yh(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
yh("rcb"),new Bl(3e4,6e4);async function vh(e,t,n){var i;const r=await n.verify();try{let s;if(Nl("string"==typeof r,e,"argument-error"),Nl("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Nl("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return zl(e,"POST","/v2/accounts/mfaEnrollment:start",Wl(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Nl("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Nl(n,e,"missing-multi-factor-info");const o=await function(e,t){return zl(e,"POST","/v2/accounts/mfaSignIn:start",Wl(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return zl(e,"POST","/v1/accounts:sendVerificationCode",Wl(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class wh{verifyPhoneNumber(e,t){return vh(this.auth,e,qi(t))}static credential(e,t){return Du._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wh.credentialFromTaggedObject(t)}static credentialFromError(e){return wh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Du._fromTokenResponse(t,n):null}constructor(e){this.providerId=wh.PROVIDER_ID,this.auth=Tu(e)}}
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
function bh(e,t){return t?Pl(t):(Nl(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */wh.PROVIDER_ID="phone",wh.PHONE_SIGN_IN_METHOD="phone";class Ih extends Nu{_getIdTokenResponse(e){return Au(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Au(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Au(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Eh(e){return Qu(e.auth,new Ih(e),e.bypassAuthState)}function Th(e){const{auth:t,user:n}=e;return Nl(n,t,"internal-error"),Yu(n,new Ih(e),e.bypassAuthState)}async function Ch(e){const{auth:t,user:n}=e;return Nl(n,t,"internal-error"),Ju(n,new Ih(e),e.bypassAuthState)}
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
 */class kh{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eh;case"linkViaPopup":case"linkViaRedirect":return Ch;case"reauthViaPopup":case"reauthViaRedirect":return Th;default:Cl(this.auth,"internal-error")}}resolve(e){Ol(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ol(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Sh=new Bl(2e3,1e4);class xh extends kh{async executeNotNull(){const e=await this.execute();return Nl(e,this.auth,"internal-error"),e}async onExecution(){Ol(1===this.filter.length,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(kl(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(kl(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xh.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(kl(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Sh.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,xh.currentPopupAction&&xh.currentPopupAction.cancel(),xh.currentPopupAction=this}}xh.currentPopupAction=null;
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
const Nh=new Map;class Rh extends kh{async execute(){let e=Nh.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ph(t),i=Ah(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Nh.set(this.auth._key(),e)}return this.bypassAuthState||Nh.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Oh(e,t){Nh.set(e._key(),t)}function Ah(e){return Pl(e._redirectPersistence)}function Ph(e){return cu("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Lh(e,t,n=!1){const i=Tu(e),r=bh(i,t),s=new Rh(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Dh{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Uh(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(kl(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Mh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Uh({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Bh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fh=/^https?/;async function jh(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return zl(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(qh(e))return}catch(e){}Cl(e,"unauthorized-domain")}function qh(e){const t=Ll(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Fh.test(n))return!1;if(Bh.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const Hh=new Bl(3e4,6e4);function Wh(){const e=ch().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let zh=null;function $h(e){return zh=zh||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Wh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wh(),n(kl(e,"network-request-failed"))},timeout:Hh.get()})}if(null===(r=null===(i=ch().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ch().gapi)||void 0===s?void 0:s.load)){const t=yh("iframefcb");return ch()[t]=()=>{gapi.load?o():n(kl(e,"network-request-failed"))},_h(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw zh=null,e}))}(e),zh}
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
 */const Vh=new Bl(5e3,15e3),Kh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jh(e){const t=e.config;Nl(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fl(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.14.0"},r=Gh.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Oi(i).slice(1)}`}
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
const Yh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Qh{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Xh(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yh),{width:i.toString(),height:r.toString(),top:s,left:o}),l=ri().toLowerCase();n&&(a=fu(l)?"_blank":n),hu(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ri()){var t;return yu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new Qh(null);const h=window.open(t||"",a,u);Nl(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Qh(h)}function Zh(e,t,n,i,r,s){Nl(e.config.authDomain,e,"auth-domain-config-required"),Nl(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.14.0",eventId:r};if(t instanceof Bu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Si(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Fu){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Fl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${Oi(a).slice(1)}`}const ed=class{async _openPopup(e,t,n,i){var r;Ol(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Xh(e,Zh(e,t,n,Ll(),i),oh())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Zh(e,t,n,Ll(),i),ch().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ol(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await $h(e),n=ch().gapi;return Nl(n,e,"internal-error"),t.open({where:document.body,url:Jh(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kh,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=kl(e,"network-request-failed"),s=ch().setTimeout((()=>{i(r)}),Vh.get());function o(){ch().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Dh(e);return t.register("authEvent",(t=>{Nl(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Cl(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wu()||du()||yu()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rh,this._completeRedirectFn=Lh,this._overrideRedirectResult=Oh}};
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
class td{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Nl(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const nd=pi("authIdTokenMaxAge")||300;let id=null;function rd(e=Sr()){const t=Er(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Er(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ni(n.getOptions(),null!=t?t:{}))return e;Cl(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ed,persistence:[gh,nh,rh]}),i=pi("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>nd)return;const i=null==t?void 0:t.token;id!==i&&(id=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){qi(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){qi(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=di("auth");return s&&ku(n,`http://${s}`),n}var sd;sd="Browser",Ir(new Hi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{Nl(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Nl(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:sd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bu(sd)},o=new Eu(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Pl);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ir(new Hi("auth-internal",(e=>{const t=Tu(e.getProvider("auth").getImmediate());return new td(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),xr("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(sd)),xr("@firebase/auth","0.20.11","esm2017");var od={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof od?od=t(e):e.Notiflix=t(e)}(void 0!==e?e:"undefined"!=typeof window?window:od,(function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",r="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=l(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;t||f.Notify.init({});var m=l(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),t=l(!0,t,g)}var _,y,v=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(_=u,(y=e.document.createElement("div")).innerHTML=_,u=y.textContent||y.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(o.overlayID)||e.document.createElement("div");b.id=o.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=v.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var I=e.document.createElement("div");I.id=t.ID+"-"+h,I.className=t.className+" "+v.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),I.style.fontSize=t.fontSize,I.style.color=v.textColor,I.style.background=v.background,I.style.borderRadius=t.borderRadius,I.style.pointerEvents="all",t.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(I.style.animationDuration=t.cssAnimationDuration+"ms");var E="";if(t.closeButton&&"function"!=typeof d&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)I.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?E:"");else{var T="";a===n?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),I.innerHTML=T+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?E:"")}else I.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?E:"");if("left-bottom"===t.position||"right-bottom"===t.position){var C=e.document.getElementById(o.wrapID);C.insertBefore(I,C.firstChild)}else e.document.getElementById(o.wrapID).appendChild(I);var k=e.document.getElementById(I.id);if(k){var S,x,N=function(){k.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},R=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(x)};if(t.closeButton&&"function"!=typeof d)e.document.getElementById(I.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){R(),clearTimeout(e)}),t.cssAnimationDuration)}));if(("function"==typeof d||t.clickToClose)&&k.addEventListener("click",(function(){"function"==typeof d&&d(),N();var e=setTimeout((function(){R(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var O=function(){S=setTimeout((function(){N()}),t.timeout),x=setTimeout((function(){R()}),t.timeout+t.cssAnimationDuration)};O(),t.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(S),clearTimeout(x)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),O()})))}}if(t.showOnlyTheLastOne&&h>0)for(var A=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),P=0;P<A.length;P++){var L=A[P];null!==L.parentNode&&L.parentNode.removeChild(L)}t=l(!0,t,m)},f={Notify:{init:function(n){t=l(!0,o,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(r,e,t,n)},info:function(e,t,n){d(s,e,t,n)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}}));const ad=kr(Rn),cd=function(e=Sr(),t){const n=Er(e,"database").getImmediate({identifier:t}),i=fi("database");return i&&function(e,t,n,i={}){(e=qi(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&es("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&es('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new gs(gs.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:gi(i.mockUserToken,e.app.options.projectId);s=new gs(t)}!function(e,t,n,i){e.repoInfo_=new ys(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...i),n}(ad),ld=rd(ad),ud=(document.querySelector("#sighup-modal"),document.querySelector("#sighin-modal"),document.querySelector("#sighout")),hd=document.querySelector("[data-reg-modal]"),dd=document.querySelector("[data-auth-modal]"),fd=document.querySelector("[data-reg-modal-open]"),pd=document.querySelector("[data-auth-modal-open]"),md=document.querySelector("#name-user"),gd=document.querySelector(".online-form");class _d{sighUp(){this.userData.email&&this.userData.password&&this.userData.name?this.userData.password.length<=5?od.Notify.failure("Password is too short!"):Zu(ld,this.userData.email,this.userData.password,this.userData.name).then((e=>{const t=e.user;fl(hl(cd,"users/"+t.uid+"/auth/"),this.userData),md.innerHTML=`${this.userData.name}`,hd.classList.toggle("is-hidden"),pd.classList.add("is-hidden"),fd.classList.add("is-hidden"),ud.classList.remove("is-hidden"),od.Notify.success("User is created!"),localStorage.setItem("name",this.userData.name),gd.reset()})).catch((e=>{e.code;const t=e.message;od.Notify.failure(t)})):od.Notify.failure("Please enter your email, password or name")}sighIn(){ld.currentUser;var e,t,n;
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
 */(e=ld,t=this.userData.email,n=this.userData.password,this.userData.name,Xu(qi(e),Uu.credential(t,n))).then((e=>{const t=e.user,n=new Date;pl(hl(cd,"users/"+t.uid),{last_login:n}),md.innerHTML=`${this.userData.name}`,dd.classList.toggle("is-hidden"),od.Notify.success("You're welcome!"),pd.classList.add("is-hidden"),fd.classList.add("is-hidden"),ud.classList.remove("is-hidden"),localStorage.setItem("name",this.userData.name),gd.reset()})).catch((e=>{e.code;const t=e.message;od.Notify.failure(t)}))}sighOut(){var e;(e=ld,qi(e).signOut()).then((()=>{od.Notify.success("Goodbye"),pd.classList.remove("is-hidden"),fd.classList.remove("is-hidden"),ud.classList.add("is-hidden"),md.innerHTML="",localStorage.removeItem("name")})).catch((e=>{e.code;const t=e.message;od.Notify.failure(t)}))}constructor(e){this.userData=e}}(()=>{const e={openModalBtn:document.querySelector("[data-reg-modal-open]"),closeModalBtn:document.querySelector("[data-reg-modal-close]"),modal:document.querySelector("[data-reg-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-auth-modal-open]"),closeModalBtn:document.querySelector("[data-auth-modal-close]"),modal:document.querySelector("[data-auth-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const yd=rd(kr(Rn)),vd=(yd.currentUser,document.querySelector("#sighup-modal")),wd=document.querySelector("#sighin-modal"),bd=document.querySelector("#sighout"),Id=document.querySelector("[data-reg-modal-open]"),Ed=document.querySelector("[data-auth-modal-open]"),Td=document.querySelector("#name-user");var Cd,kd,Sd;
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
function xd(e){return(xd="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rd(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Od(e,t,n){return t&&Rd(e.prototype,t),n&&Rd(e,n),e}function Ad(e){return(Ad=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pd(e,t){return(Pd=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ld(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Dd(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Ad(e);if(t){var r=Ad(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Ld(this,n)}}function Md(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Ad(e)););return e}function Ud(){return Ud="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=Md(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},Ud.apply(this,arguments)}Cd=e=>{const t=localStorage.getItem("name");e&&(Td.innerHTML=t,Ed.classList.add("is-hidden"),Id.classList.add("is-hidden"),bd.classList.remove("is-hidden"))},qi(yd).onAuthStateChanged(Cd,kd,Sd),vd.addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("email-reg").value,n=document.getElementById("password-reg").value,i=document.getElementById("name-reg").value;new _d({email:t,password:n,name:i}).sighUp()})),wd.addEventListener("click",(function(e){e.preventDefault();const t=document.getElementById("email-auth").value,n=document.getElementById("password-auth").value,i=document.getElementById("");new _d({email:t,password:n,name:i}).sighIn()})),bd.addEventListener("click",(function(e){(new _d).sighOut()}));var Bd={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function Fd(e){console.error("[Glide warn]: ".concat(e))}function jd(e){return parseInt(e)}function qd(e){return"string"==typeof e}function Hd(e){var t=xd(e);return"function"===t||"object"===t&&!!e}function Wd(e){return"function"==typeof e}function zd(e){return void 0===e}function $d(e){return e.constructor===Array}function Vd(e,t,n){var i={};for(var r in t)Wd(t[r])?i[r]=t[r](e,i,n):Fd("Extension must be a function");for(var s in i)Wd(i[s].mount)&&i[s].mount();return i}function Kd(e,t,n){Object.defineProperty(e,t,n)}function Gd(e,t){var n=Object.assign({},e,t);return t.hasOwnProperty("classes")&&(n.classes=Object.assign({},e.classes,t.classes),t.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},e.classes.direction,t.classes.direction)),t.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},e.classes.type,t.classes.type)),t.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},e.classes.slide,t.classes.slide)),t.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},e.classes.arrow,t.classes.arrow)),t.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},e.classes.nav,t.classes.nav))),t.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),n}var Jd=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Nd(this,e),this.events=t,this.hop=t.hasOwnProperty}return Od(e,[{key:"on",value:function(e,t){if(!$d(e)){this.hop.call(this.events,e)||(this.events[e]=[]);var n=this.events[e].push(t)-1;return{remove:function(){delete this.events[e][n]}}}for(var i=0;i<e.length;i++)this.on(e[i],t)}},{key:"emit",value:function(e,t){if($d(e))for(var n=0;n<e.length;n++)this.emit(e[n],t);else this.hop.call(this.events,e)&&this.events[e].forEach((function(e){e(t||{})}))}}]),e}(),Yd=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Nd(this,e),this._c={},this._t=[],this._e=new Jd,this.disabled=!1,this.selector=t,this.settings=Gd(Bd,n),this.index=this.settings.startAt}return Od(e,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),Hd(e)?this._c=Vd(this,e,this._e):Fd("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return $d(e)?this._t=e:Fd("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=Gd(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,t){return this._e.on(e,t),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){Hd(e)?this._o=e:Fd("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=jd(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),e}();function Qd(){return(new Date).getTime()}function Xd(e,t,n){var i,r,s,o,a=0;n||(n={});var c=function(){a=!1===n.leading?0:Qd(),i=null,o=e.apply(r,s),i||(r=s=null)},l=function(){var l=Qd();a||!1!==n.leading||(a=l);var u=t-(l-a);return r=this,s=arguments,u<=0||u>t?(i&&(clearTimeout(i),i=null),a=l,o=e.apply(r,s),i||(r=s=null)):i||!1===n.trailing||(i=setTimeout(c,u)),o};return l.cancel=function(){clearTimeout(i),a=0,i=r=s=null},l}var Zd={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function ef(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}return[]}function tf(e){return!!(e&&e instanceof window.HTMLElement)}function nf(e){return Array.prototype.slice.call(e)}var rf=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Nd(this,e),this.listeners=t}return Od(e,[{key:"on",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];qd(e)&&(e=[e]);for(var r=0;r<e.length;r++)this.listeners[e[r]]=n,t.addEventListener(e[r],this.listeners[e[r]],i)}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];qd(e)&&(e=[e]);for(var i=0;i<e.length;i++)t.removeEventListener(e[i],this.listeners[e[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();var sf=["ltr","rtl"],of={">":"<","<":">","=":"="};function af(e,t){return{modify:function(e){return t.Direction.is("rtl")?-e:e}}}function cf(e,t){return{modify:function(e){var n=Math.floor(e/t.Sizes.slideWidth);return e+t.Gaps.value*n}}}function lf(e,t){return{modify:function(e){return e+t.Clones.grow/2}}}function uf(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var i=t.Peek.value;return Hd(i)?n-i.before:n-i}return n}}}function hf(e,t){return{modify:function(n){var i=t.Gaps.value,r=t.Sizes.width,s=e.settings.focusAt,o=t.Sizes.slideWidth;return"center"===s?n-(r/2-o/2):n-o*s-i*s}}}var df=!1;try{var ff=Object.defineProperty({},"passive",{get:function(){df=!0}});window.addEventListener("testPassive",null,ff),window.removeEventListener("testPassive",null,ff)}catch(u){}var pf=df,mf=["touchstart","mousedown"],gf=["touchmove","mousemove"],_f=["touchend","touchcancel","mouseup","mouseleave"],yf=["mousedown","mousemove","mouseup","mouseleave"];var vf="".concat('[data-glide-el^="controls"]',' [data-glide-dir*="<"]'),wf="".concat('[data-glide-el^="controls"]',' [data-glide-dir*=">"]');function bf(e){return Hd(e)?(t=e,Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e[n],e}),{})):(Fd("Breakpoints option must be an object"),{});var t}var If={Html:function(e,t,n){var i={mount:function(){this.root=e.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=nf(this.wrapper.children).filter((function(t){return!t.classList.contains(e.settings.classes.slide.clone)}))}};return Kd(i,"root",{get:function(){return i._r},set:function(e){qd(e)&&(e=document.querySelector(e)),tf(e)?i._r=e:Fd("Root element must be a existing Html node")}}),Kd(i,"track",{get:function(){return i._t},set:function(e){tf(e)?i._t=e:Fd("Could not find track element. Please use ".concat('[data-glide-el="track"]'," attribute."))}}),Kd(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(e,t,n){var i={set:function(n){var i=function(e,t,n){var i=[cf,lf,uf,hf].concat(e._t,[af]);return{mutate:function(r){for(var s=0;s<i.length;s++){var o=i[s];Wd(o)&&Wd(o().modify)?r=o(e,t,n).modify(r):Fd("Transformer should be a function that returns an object with `modify()` method")}return r}}}(e,t).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=r,t.Html.wrapper.style.webkitTransform=r,t.Html.wrapper.style.transform=r},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var n=t.Sizes.length,i=e.index,r=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!e.isType("carousel")||!t.Run.isOffset())return i.set(r.movement);t.Transition.after((function(){n.emit("translate.jump"),i.set(t.Sizes.slideWidth*e.index)}));var s=t.Sizes.slideWidth*t.Translate.getStartIndex();return i.set(s-t.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(e,t,n){var i=!1,r={compose:function(t){var n=e.settings;return i?"".concat(t," 0ms ").concat(n.animationTimingFunc):"".concat(t," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(e)},remove:function(){t.Html.wrapper.style.transition=""},after:function(e){setTimeout((function(){e()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return Kd(r,"duration",{get:function(){var n=e.settings;return e.isType("slider")&&t.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(e,t,n){var i={mount:function(){this.value=e.settings.direction},resolve:function(e){var t=e.slice(0,1);return this.is("rtl")?e.split(t).join(of[t]):e},is:function(e){return this.value===e},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return Kd(i,"value",{get:function(){return i._v},set:function(e){sf.indexOf(e)>-1?i._v=e:Fd("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(e,t,n){var i={mount:function(){this.value=e.settings.peek}};return Kd(i,"value",{get:function(){return i._v},set:function(e){Hd(e)?(e.before=jd(e.before),e.after=jd(e.after)):e=jd(e),i._v=e}}),Kd(i,"reductor",{get:function(){var t=i.value,n=e.settings.perView;return Hd(t)?t.before/n+t.after/n:2*t/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(e,t,n){var i={setupSlides:function(){for(var e="".concat(this.slideWidth,"px"),n=t.Html.slides,i=0;i<n.length;i++)n[i].style.width=e},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var e=t.Html.slides,n=0;n<e.length;n++)e[n].style.width="";t.Html.wrapper.style.width=""}};return Kd(i,"length",{get:function(){return t.Html.slides.length}}),Kd(i,"width",{get:function(){return t.Html.track.offsetWidth}}),Kd(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+t.Gaps.grow+t.Clones.grow}}),Kd(i,"slideWidth",{get:function(){return i.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(e,t,n){var i={apply:function(e){for(var n=0,i=e.length;n<i;n++){var r=e[n].style,s=t.Direction.value;r[Zd[s][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==e.length-1?r[Zd[s][1]]="".concat(this.value/2,"px"):r[Zd[s][1]]=""}},remove:function(e){for(var t=0,n=e.length;t<n;t++){var i=e[t].style;i.marginLeft="",i.marginRight=""}}};return Kd(i,"value",{get:function(){return jd(e.settings.gap)}}),Kd(i,"grow",{get:function(){return i.value*t.Sizes.length}}),Kd(i,"reductor",{get:function(){var t=e.settings.perView;return i.value*(t-1)/t}}),n.on(["build.after","update"],Xd((function(){i.apply(t.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(t.Html.wrapper.children)})),i},Move:function(e,t,n){var i={mount:function(){this._o=0},make:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),t.Transition.after((function(){n.emit("move.after",{movement:e.value})}))}};return Kd(i,"offset",{get:function(){return i._o},set:function(e){i._o=zd(e)?0:jd(e)}}),Kd(i,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),Kd(i,"value",{get:function(){var e=this.offset,n=this.translate;return t.Direction.is("rtl")?n+e:n-e}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(e,t,n){var i={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=t.Html.slides,r=e.settings,s=r.perView,o=r.classes,a=r.cloningRatio;if(0!==i.length)for(var c=+!!e.settings.peek,l=s+c+Math.round(s/2),u=i.slice(0,l).reverse(),h=i.slice(-1*l),d=0;d<Math.max(a,Math.floor(s/i.length));d++){for(var f=0;f<u.length;f++){var p=u[f].cloneNode(!0);p.classList.add(o.slide.clone),n.push(p)}for(var m=0;m<h.length;m++){var g=h[m].cloneNode(!0);g.classList.add(o.slide.clone),n.unshift(g)}}return n},append:function(){for(var e=this.items,n=t.Html,i=n.wrapper,r=n.slides,s=Math.floor(e.length/2),o=e.slice(0,s).reverse(),a=e.slice(-1*s).reverse(),c="".concat(t.Sizes.slideWidth,"px"),l=0;l<a.length;l++)i.appendChild(a[l]);for(var u=0;u<o.length;u++)i.insertBefore(o[u],r[0]);for(var h=0;h<e.length;h++)e[h].style.width=c},remove:function(){for(var e=this.items,n=0;n<e.length;n++)t.Html.wrapper.removeChild(e[n])}};return Kd(i,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){e.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(e,t,n){var i=new rf,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,Xd((function(){n.emit("resize")}),e.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(e,t,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var n=e.settings.classes,i=t.Html.slides[e.index];i&&(i.classList.add(n.slide.active),ef(i).forEach((function(e){e.classList.remove(n.slide.active)})))},removeClasses:function(){var n=e.settings.classes,i=n.type,r=n.slide;t.Html.root.classList.remove(i[e.settings.type]),t.Html.slides.forEach((function(e){e.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(e,t,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),e.enable()})))},calculate:function(){var t=this.move,n=this.length,r=t.steps,s=t.direction,o=1;if("="===s)return e.settings.bound&&jd(r)>n?void(e.index=n):void(e.index=r);if(">"!==s||">"!==r)if("<"!==s||"<"!==r){if("|"===s&&(o=e.settings.perView||1),">"===s||"|"===s&&">"===r){var a=function(t){var n=e.index;return e.isType("carousel")?n+t:n+(t-n%t)}(o);return a>n&&(this._o=!0),void(e.index=function(t,n){var r=i.length;if(t<=r)return t;if(e.isType("carousel"))return t-(r+1);if(e.settings.rewind)return i.isBound()&&!i.isEnd()?r:0;return i.isBound()?r:Math.floor(r/n)*n}(a,o))}if("<"===s||"|"===s&&"<"===r){var c=function(t){var n=e.index;return e.isType("carousel")?n-t:(Math.ceil(n/t)-1)*t}(o);return c<0&&(this._o=!0),void(e.index=function(t,n){var r=i.length;if(t>=0)return t;if(e.isType("carousel"))return t+(r+1);if(e.settings.rewind)return i.isBound()&&i.isStart()?r:Math.floor(r/n)*n;return 0}(c,o))}Fd("Invalid direction pattern [".concat(s).concat(r,"] has been used"))}else e.index=0;else e.index=n},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e?!!this._o&&("|>"===e?"|"===this.move.direction&&">"===this.move.steps:"|<"===e?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===e):this._o},isBound:function(){return e.isType("slider")&&"center"!==e.settings.focusAt&&e.settings.bound}};return Kd(i,"move",{get:function(){return this._m},set:function(e){var t=e.substr(1);this._m={direction:e.substr(0,1),steps:t?jd(t)?jd(t):t:0}}}),Kd(i,"length",{get:function(){var n=e.settings,i=t.Html.slides.length;return this.isBound()?i-1-(jd(n.perView)-1)+jd(n.focusAt):i-1}}),Kd(i,"offset",{get:function(){return this._o}}),i},Swipe:function(e,t,n){var i=new rf,r=0,s=0,o=0,a=!1,c=!!pf&&{passive:!0},l={mount:function(){this.bindSwipeStart()},start:function(t){if(!a&&!e.disabled){this.disable();var i=this.touches(t);r=null,s=jd(i.pageX),o=jd(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!e.disabled){var a=e.settings,c=a.touchAngle,l=a.touchRatio,u=a.classes,h=this.touches(i),d=jd(h.pageX)-s,f=jd(h.pageY)-o,p=Math.abs(d<<2),m=Math.abs(f<<2),g=Math.sqrt(p+m),_=Math.sqrt(m);if(!(180*(r=Math.asin(_/g))/Math.PI<c))return!1;i.stopPropagation(),t.Move.make(d*parseFloat(l)),t.Html.root.classList.add(u.dragging),n.emit("swipe.move")}},end:function(i){if(!e.disabled){var o=e.settings,a=o.perSwipe,c=o.touchAngle,l=o.classes,u=this.touches(i),h=this.threshold(i),d=u.pageX-s,f=180*r/Math.PI;this.enable(),d>h&&f<c?t.Run.make(t.Direction.resolve("".concat(a,"<"))):d<-h&&f<c?t.Run.make(t.Direction.resolve("".concat(a,">"))):t.Move.make(),t.Html.root.classList.remove(l.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=e.settings,s=r.swipeThreshold,o=r.dragThreshold;s&&i.on(mf[0],t.Html.wrapper,(function(e){n.start(e)}),c),o&&i.on(mf[1],t.Html.wrapper,(function(e){n.start(e)}),c)},unbindSwipeStart:function(){i.off(mf[0],t.Html.wrapper,c),i.off(mf[1],t.Html.wrapper,c)},bindSwipeMove:function(){var n=this;i.on(gf,t.Html.wrapper,Xd((function(e){n.move(e)}),e.settings.throttle),c)},unbindSwipeMove:function(){i.off(gf,t.Html.wrapper,c)},bindSwipeEnd:function(){var e=this;i.on(_f,t.Html.wrapper,(function(t){e.end(t)}))},unbindSwipeEnd:function(){i.off(_f,t.Html.wrapper)},touches:function(e){return yf.indexOf(e.type)>-1?e:e.touches[0]||e.changedTouches[0]},threshold:function(t){var n=e.settings;return yf.indexOf(t.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return n.on("build.after",(function(){t.Html.root.classList.add(e.settings.classes.swipeable)})),n.on("destroy",(function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),i.destroy()})),l},Images:function(e,t,n){var i=new rf,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",t.Html.wrapper)},dragstart:function(e){e.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(e,t,n){var i=new rf,r=!1,s=!1,o={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",t.Html.wrapper,this.click)},unbind:function(){i.off("click",t.Html.wrapper)},click:function(e){s&&(e.stopPropagation(),e.preventDefault())},detach:function(){if(s=!0,!r){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!1;r=!0}return this},attach:function(){if(s=!1,r){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!0;r=!1}return this}};return Kd(o,"items",{get:function(){return o._a}}),n.on("swipe.move",(function(){o.detach()})),n.on("swipe.end",(function(){t.Transition.after((function(){o.attach()}))})),n.on("destroy",(function(){o.attach(),o.unbind(),i.destroy()})),o},Controls:function(e,t,n){var i=new rf,r=!!pf&&{passive:!0},s={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this._arrowControls={previous:t.Html.root.querySelectorAll(vf),next:t.Html.root.querySelectorAll(wf)},this.addBindings()},setActive:function(){for(var e=0;e<this._n.length;e++)this.addClass(this._n[e].children)},removeActive:function(){for(var e=0;e<this._n.length;e++)this.removeClass(this._n[e].children)},addClass:function(t){var n=e.settings,i=t[e.index];i&&i&&(i.classList.add(n.classes.nav.active),ef(i).forEach((function(e){e.classList.remove(n.classes.nav.active)})))},removeClass:function(t){var n=t[e.index];n&&n.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var n=s._arrowControls.next,i=s._arrowControls.previous;this.resetArrowState(n,i),0===e.index&&this.disableArrow(i),e.index===t.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var t=e.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(e){nf(e).forEach((function(e){e.classList.remove(t.classes.arrow.disabled)}))}))},disableArrow:function(){for(var t=e.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(e){nf(e).forEach((function(e){e.classList.add(t.classes.arrow.disabled)}))}))},addBindings:function(){for(var e=0;e<this._c.length;e++)this.bind(this._c[e].children)},removeBindings:function(){for(var e=0;e<this._c.length;e++)this.unbind(this._c[e].children)},bind:function(e){for(var t=0;t<e.length;t++)i.on("click",e[t],this.click),i.on("touchstart",e[t],this.click,r)},unbind:function(e){for(var t=0;t<e.length;t++)i.off(["click","touchstart"],e[t])},click:function(e){pf||"touchstart"!==e.type||e.preventDefault();var n=e.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(n))}};return Kd(s,"items",{get:function(){return s._c}}),n.on(["mount.after","move.after"],(function(){s.setActive()})),n.on(["mount.after","run"],(function(){s.setArrowState()})),n.on("destroy",(function(){s.removeBindings(),s.removeActive(),i.destroy()})),s},Keyboard:function(e,t,n){var i=new rf,r={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=e.settings.perSwipe;"ArrowRight"===n.code&&t.Run.make(t.Direction.resolve("".concat(i,">"))),"ArrowLeft"===n.code&&t.Run.make(t.Direction.resolve("".concat(i,"<")))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(e,t,n){var i=new rf,r={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),e.settings.autoplay&&zd(this._i)&&(this._i=setInterval((function(){i.stop(),t.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var e=this;i.on("mouseover",t.Html.root,(function(){e._e&&e.stop()})),i.on("mouseout",t.Html.root,(function(){e._e&&e.start()}))},unbind:function(){i.off(["mouseover","mouseout"],t.Html.root)}};return Kd(r,"time",{get:function(){var n=t.Html.slides[e.index].getAttribute("data-glide-autoplay");return jd(n||e.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(e,t,n){var i=new rf,r=e.settings,s=bf(r.breakpoints),o=Object.assign({},r),a={match:function(e){if(void 0!==window.matchMedia)for(var t in e)if(e.hasOwnProperty(t)&&window.matchMedia("(max-width: ".concat(t,"px)")).matches)return e[t];return o}};return Object.assign(r,a.match(s)),i.on("resize",window,Xd((function(){e.settings=Gd(r,a.match(s))}),e.settings.throttle)),n.on("update",(function(){s=bf(s),o=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},Ef=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pd(e,t)}(n,Yd);var t=Dd(n);function n(){return Nd(this,n),t.apply(this,arguments)}return Od(n,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ud(Ad(n.prototype),"mount",this).call(this,Object.assign({},If,e))}}]),n}(),Tf={};Object.defineProperty(Tf,"__esModule",{value:!0}),Tf.default=function(e,t){var n=Cf.default(e,t,"get");return kf.default(e,n)};var Cf=Sf(r("fExtF")),kf=Sf(r("iaRLo"));function Sf(e){return e&&e.__esModule?e:{default:e}}var xf={};Object.defineProperty(xf,"__esModule",{value:!0}),xf.default=function(e,t,n){Rf.default(e,t),t.set(e,n)};var Nf,Rf=(Nf=r("7K24o"))&&Nf.__esModule?Nf:{default:Nf};var Of=new WeakMap;class Af{async fetchTrendingForWeek(){try{return(await hn.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=10612ebbbeaf2ad5999e09badf85e183&page=${t(Tf)(this,Of)}`)).data}catch(e){console.error(e),od.Notify.failure(e.message,"Oops ...something went wrong")}}async fetchTrendingForDay(){try{return(await hn.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=10612ebbbeaf2ad5999e09badf85e183&page=${t(Tf)(this,Of)}`)).data}catch(e){console.error(e),od.Notify.failure(e.message,"Oops ...something went wrong")}}async fetchQueryResultsForGenres(){try{const e=await hn.get("https://api.themoviedb.org/3/genre/movie/list?api_key=10612ebbbeaf2ad5999e09badf85e183&language=en-US");return e.data.genres}catch(e){console.error(e)}}constructor(){t(xf)(this,Of,{writable:!0,value:1})}}const Pf=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},Lf=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},Df=new Af;function Mf(e){let t;const n=Lf("genre"),i=[];return e.map((e=>n.filter((t=>t.id===e)))).map((e=>{i.push(e[0].name)})),t=i.length>0&&i.length<=3?i.join(", "):`${i[0]}, ${i[1]}, Other`,t}function Uf({poster_path:e,title:t,genre_ids:n,vote_average:i,vote_count:r,original_title:s,popularity:o,overview:a,id:l}){let u,h=`https://image.tmdb.org/t/p/original${e}`;u=n?Mf(n):"Сurrently unavailable";const d=`<img class="img__cart" src="${h}" alt="${t}" loading="lazy" />\n    <div class="position" data-film-id=${l}>\n      <h1 class="modal__title">${t}</h1>\n      <table>\n        <tr>\n          <td>Vote / Votes</td>\n          <td>${i} / ${r}</td>\n        </tr>\n        <tr>\n          <td>Popularity</td>\n          <td>${o}</td>\n        </tr>\n        <tr>\n          <td>Original Title</td>\n          <td>${s}</td>\n        </tr>\n        <tr>\n          <td>Genre</td>\n          <td>${u}</td>\n        </tr>\n      </table>\n      <h2 class="modal__text">ABOUT</h2>\n      <p class="text">${a}</p>`;c.filmInfoContainer.innerHTML=d}function Bf(e){Pf("currentFilmsStorage",JSON.stringify(e))}function Ff(e){Pf("glideFilmsStorage",JSON.stringify(e))}c.filmCards.addEventListener("click",(function(e){if(e.preventDefault(),jf=e.target.closest("a"),!jf)return;const t=jf.getAttribute("data-film-id"),n=JSON.parse(Lf("currentFilmsStorage")).find((e=>e.id===Number(t)));c.modal.classList.remove("is-hidden"),Uf(n)})),c.glide.addEventListener("click",(function(e){if(e.preventDefault(),console.log("cl"),jf=e.target.closest("li"),!jf)return;const t=jf.getAttribute("data-film-id"),n=JSON.parse(Lf("glideFilmsStorage")).find((e=>e.id===Number(t)));c.modal.classList.remove("is-hidden"),Uf(n)}));let jf="";const qf=new Af,Hf=new Ef(".glide",{type:"carousel",startAt:0,perView:6,autoplay:1700,hoverpause:!0,bound:!0});let Wf=[];function zf(){c.footerModal.classList.toggle("is-hidden")}c.addToWatchedBtn.addEventListener("click",(function(){const e=jf.getAttribute("data-film-id"),t=JSON.parse(Lf("currentFilmsStorage")).find((t=>t.id===Number(e)));Wf.push(t),console.log(Wf),Pf("watchedFilmsStorage",JSON.stringify(Wf))})),c.openFooterModalBtn.addEventListener("click",zf),c.closeFooterModalBtn.addEventListener("click",zf),async function(){try{const{results:e}=await qf.fetchTrendingForWeek();Ff(e),console.log(e),function(e){const t=e.map((({poster_path:e,title:t,id:n})=>`\n    <li class="glide__slide" data-film-id=${n}>\n        <img\n        class="glide-slide__img"\n        src="${`https://image.tmdb.org/t/p/original${e}`}"\n        alt="${t}"\n        width="124px"\n\t\t    height ="180px"\n      />\n    </li>`)).join("");c.glide.innerHTML=t,Hf.mount()}(e)}catch(e){console.log(e)}}(),async function(){try{const{results:e}=await qf.fetchTrendingForDay();Bf(e),Df.fetchQueryResultsForGenres().then((e=>{Pf("genre",e)})).catch((e=>console.log(e))),function(e){const t=e.map((({poster_path:e,title:t,genre_ids:n,release_date:i,id:r})=>{let s,o=`https://image.tmdb.org/t/p/original${e}`,a=i.slice(0,4);return s=n?Mf(n):"Сurrently unavailable",`<a class="film-trending__item" data-film-id=${r}>\n        <img class= "film-trending__img" src="${o}" alt="${t}" loading="lazy" width="280px"\n\t\t    height ="402px"/>\n            <div class="film-info">\n                <p class="film-name">${t}</p>\n                <div class="film-description">\n                  <p class="film-description__genre">${s} |</p>\n                  <p class="film-description__release">${a}</p>\n                </div>\n            </div>\n        </a>`})).join("");c.filmCards.innerHTML=t}(e)}catch(e){console.log(e)}}();
//# sourceMappingURL=library.835005b3.js.map
