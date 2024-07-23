var IonosGlobalNavigation=function(){"use strict";var k1=Object.defineProperty;var Z1=(g,p,m)=>p in g?k1(g,p,{enumerable:!0,configurable:!0,writable:!0,value:m}):g[p]=m;var _=(g,p,m)=>Z1(g,typeof p!="symbol"?p+"":p,m);function g(){}function p(e,t){for(const n in t)e[n]=t[n];return e}function m(e){return e()}function P(){return Object.create(null)}function Z(e){e.forEach(m)}function R(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function s1(e){return Object.keys(e).length===0}function r1(e,t,n,r){if(e){const i=J(e,t,n,r);return e[0](i)}}function J(e,t,n,r){return e[1]&&r?p(n.ctx.slice(),e[1](r(t))):n.ctx}function i1(e,t,n,r){if(e[2]&&r){const i=e[2](r(n));if(t.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(t.dirty.length,i.length);for(let l=0;l<o;l+=1)s[l]=t.dirty[l]|i[l];return s}return t.dirty|i}return t.dirty}function o1(e,t,n,r,i,s){if(i){const o=J(t,n,r,s);e.p(o,i)}}function c1(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function f(e,t){e.appendChild(t)}function G(e,t,n){const r=l1(e);if(!r.getElementById(t)){const i=L("style");i.id=t,i.textContent=n,C1(r,i)}}function l1(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function C1(e,t){return f(e.head||e,t),t.sheet}function v(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function L(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function U(e){return document.createTextNode(e)}function q(){return U(" ")}function a1(){return U("")}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function u1(e){return Array.from(e.childNodes)}function f1(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let z;function M(e){z=e}const b=[],K=[];let w=[];const Q=[],h1=Promise.resolve();let O=!1;function d1(){O||(O=!0,h1.then(k))}function D(e){w.push(e)}const I=new Set;let x=0;function k(){if(x!==0)return;const e=z;do{try{for(;x<b.length;){const t=b[x];x++,M(t),$1(t.$$)}}catch(t){throw b.length=0,x=0,t}for(M(null),b.length=0,x=0;K.length;)K.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];I.has(n)||(I.add(n),n())}w.length=0}while(b.length);for(;Q.length;)Q.pop()();O=!1,I.clear(),M(e)}function $1(e){if(e.fragment!==null){e.update(),Z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function _1(e){const t=[],n=[];w.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),w=t}const H=new Set;let g1;function E(e,t){e&&e.i&&(H.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(H.has(e))return;H.add(e),g1.c.push(()=>{H.delete(e)}),e.o(t)}}function W(e){e&&e.c()}function B(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),D(()=>{const s=e.$$.on_mount.map(m).filter(R);e.$$.on_destroy?e.$$.on_destroy.push(...s):Z(s),e.$$.on_mount=[]}),i.forEach(D)}function F(e,t){const n=e.$$;n.fragment!==null&&(_1(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function p1(e,t){e.$$.dirty[0]===-1&&(b.push(e),d1(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,i,s,o=null,l=[-1]){const u=z;M(e);const C=e.$$={fragment:null,ctx:[],props:s,update:g,not_equal:i,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:P(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};o&&o(C.root);let h=!1;if(C.ctx=n?n(e,t.props||{},(a,$,...V)=>{const j=V.length?V[0]:$;return C.ctx&&i(C.ctx[a],C.ctx[a]=j)&&(!C.skip_bound&&C.bound[a]&&C.bound[a](j),h&&p1(e,a)),$}):[],C.update(),h=!0,Z(C.before_update),C.fragment=r?r(C.ctx):!1,t.target){if(t.hydrate){const a=u1(t.target);C.fragment&&C.fragment.l(a),a.forEach(y)}else C.fragment&&C.fragment.c();t.intro&&E(e.$$.fragment),B(e,t.target,t.anchor),k()}M(u)}let Y;typeof HTMLElement=="function"&&(Y=class extends HTMLElement{constructor(t,n,r){super();_(this,"$$ctor");_(this,"$$s");_(this,"$$c");_(this,"$$cn",!1);_(this,"$$d",{});_(this,"$$r",!1);_(this,"$$p_d",{});_(this,"$$l",{});_(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const i=this.$$c.$on(t,n);this.$$l_u.set(n,i)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let o;return{c:function(){o=L("slot"),s!=="default"&&c(o,"name",s)},m:function(C,h){v(C,o,h)},d:function(C){C&&y(o)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=f1(this);for(const s of this.$$s)s in r&&(n[s]=[t(s)]);for(const s of this.attributes){const o=this.$$g_p(s.name);o in this.$$d||(this.$$d[o]=N(o,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const o=N(s,this.$$d[s],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,o)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const s in this.$$l)for(const o of this.$$l[s]){const l=this.$$c.$on(s,o);this.$$l_u.set(o,l)}this.$$l={}}}attributeChangedCallback(t,n,r){var i;this.$$r||(t=this.$$g_p(t),this.$$d[t]=N(t,r,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function N(e,t,n,r){var s;const i=(s=n[e])==null?void 0:s.type;if(t=i==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(i){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(i){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function t1(e,t,n,r,i,s){let o=class extends Y{constructor(){super(e,n,i),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(o.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(u){var C;u=N(l,u,t),this.$$d[l]=u,(C=this.$$c)==null||C.$set({[l]:u})}})}),r.forEach(l=>{Object.defineProperty(o.prototype,l,{get(){var u;return(u=this.$$c)==null?void 0:u[l]}})}),e.element=o,o}class e1{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){F(this,1),this.$destroy=g}$on(t,n){if(!R(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!s1(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const m1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(m1);function y1(e){G(e,"svelte-1ezuc1c","svg.svelte-1ezuc1c{fill:var(--ion-color-primary)}#easystorage.svelte-1ezuc1c{margin-top:5px}")}function b1(e){let t,n,r,i,s,o,l,u,C,h,a,$;return{c(){t=d("svg"),n=d("path"),r=d("path"),i=d("path"),s=d("path"),o=d("path"),l=d("path"),u=d("path"),C=d("path"),h=d("path"),a=d("path"),$=d("path"),c(n,"d","M0 15.884V0.484H9.988V2.882H2.541V6.732H7.106V9.13H2.541V13.464H10.45V15.884H0Z"),c(r,"d","M16.5732 16.148C15.3412 16.148 14.3732 15.8143 13.6692 15.147C12.9652 14.4797 12.6132 13.574 12.6132 12.43C12.6132 11.682 12.7929 11.033 13.1522 10.483C13.5116 9.92567 14.0176 9.49667 14.6702 9.196C15.3229 8.888 16.0856 8.734 16.9582 8.734C17.4716 8.734 17.9592 8.78533 18.4212 8.888C18.8906 8.98333 19.3086 9.13 19.6752 9.328V8.602C19.6752 7.88333 19.4919 7.35167 19.1252 7.007C18.7586 6.655 18.2049 6.479 17.4642 6.479C16.9216 6.479 16.3606 6.578 15.7812 6.776C15.2019 6.974 14.6336 7.26 14.0762 7.634L13.3392 5.665C13.9552 5.25433 14.6482 4.939 15.4182 4.719C16.1882 4.49167 16.9619 4.378 17.7392 4.378C19.1839 4.378 20.2656 4.73 20.9842 5.434C21.7102 6.13067 22.0732 7.17933 22.0732 8.58V15.884H19.6752V14.938C19.2792 15.3267 18.8136 15.6273 18.2782 15.84C17.7429 16.0453 17.1746 16.148 16.5732 16.148ZM17.0792 14.047C17.5559 14.047 18.0179 13.9443 18.4652 13.739C18.9199 13.5337 19.3232 13.2403 19.6752 12.859V11.33C19.3452 11.1467 18.9712 11.0073 18.5532 10.912C18.1426 10.8093 17.7392 10.758 17.3432 10.758C16.6099 10.758 16.0342 10.9083 15.6162 11.209C15.1982 11.5023 14.9892 11.9093 14.9892 12.43C14.9892 12.9287 15.1726 13.3247 15.5392 13.618C15.9059 13.904 16.4192 14.047 17.0792 14.047Z"),c(r,"fill","#003D8F"),c(i,"d","M28.8465 16.148C28.0031 16.148 27.1928 15.9683 26.4155 15.609C25.6381 15.2423 25.0148 14.7547 24.5455 14.146L26.1955 12.738C26.5841 13.1413 27.0205 13.4603 27.5045 13.695C27.9885 13.9297 28.4615 14.047 28.9235 14.047C29.5101 14.047 29.9648 13.9443 30.2875 13.739C30.6101 13.5263 30.7715 13.2293 30.7715 12.848C30.7715 12.6133 30.6981 12.4007 30.5515 12.21C30.4048 12.012 30.1481 11.8177 29.7815 11.627C29.4148 11.4363 28.9088 11.22 28.2635 10.978C27.0021 10.516 26.1075 10.0173 25.5795 9.482C25.0515 8.93933 24.7875 8.261 24.7875 7.447C24.7875 6.53033 25.1541 5.78967 25.8875 5.225C26.6208 4.66033 27.5741 4.378 28.7475 4.378C29.5468 4.378 30.2838 4.532 30.9585 4.84C31.6405 5.14067 32.2271 5.577 32.7185 6.149L31.0795 7.502C30.4121 6.82 29.6201 6.479 28.7035 6.479C28.2121 6.479 27.8198 6.57433 27.5265 6.765C27.2331 6.94833 27.0865 7.194 27.0865 7.502C27.0865 7.81 27.2551 8.085 27.5925 8.327C27.9371 8.56167 28.5678 8.83667 29.4845 9.152C30.3205 9.43067 31.0025 9.74233 31.5305 10.087C32.0658 10.4317 32.4545 10.8277 32.6965 11.275C32.9458 11.7223 33.0705 12.2393 33.0705 12.826C33.0705 13.86 32.6928 14.674 31.9375 15.268C31.1895 15.8547 30.1591 16.148 28.8465 16.148Z"),c(i,"fill","#003D8F"),c(s,"d","M36.8845 20.152L38.5895 15.664L34.3985 4.642H36.9175L39.4805 11.572C39.5539 11.748 39.6199 11.924 39.6785 12.1C39.7372 12.276 39.7885 12.4593 39.8325 12.65C39.8912 12.4593 39.9499 12.276 40.0085 12.1C40.0672 11.924 40.1259 11.748 40.1845 11.572L42.7695 4.642H45.3105L39.4145 20.152H36.8845Z"),c(s,"fill","#003D8F"),c(o,"d","M50.8465 16.148C50.0031 16.148 49.1928 15.9683 48.4155 15.609C47.6381 15.2423 47.0148 14.7547 46.5455 14.146L48.1955 12.738C48.5841 13.1413 49.0205 13.4603 49.5045 13.695C49.9885 13.9297 50.4615 14.047 50.9235 14.047C51.5101 14.047 51.9648 13.9443 52.2875 13.739C52.6101 13.5263 52.7715 13.2293 52.7715 12.848C52.7715 12.6133 52.6981 12.4007 52.5515 12.21C52.4048 12.012 52.1481 11.8177 51.7815 11.627C51.4148 11.4363 50.9088 11.22 50.2635 10.978C49.0021 10.516 48.1075 10.0173 47.5795 9.482C47.0515 8.93933 46.7875 8.261 46.7875 7.447C46.7875 6.53033 47.1541 5.78967 47.8875 5.225C48.6208 4.66033 49.5741 4.378 50.7475 4.378C51.5468 4.378 52.2838 4.532 52.9585 4.84C53.6405 5.14067 54.2271 5.577 54.7185 6.149L53.0795 7.502C52.4121 6.82 51.6201 6.479 50.7035 6.479C50.2121 6.479 49.8198 6.57433 49.5265 6.765C49.2331 6.94833 49.0865 7.194 49.0865 7.502C49.0865 7.81 49.2551 8.085 49.5925 8.327C49.9371 8.56167 50.5678 8.83667 51.4845 9.152C52.3205 9.43067 53.0025 9.74233 53.5305 10.087C54.0658 10.4317 54.4545 10.8277 54.6965 11.275C54.9458 11.7223 55.0705 12.2393 55.0705 12.826C55.0705 13.86 54.6928 14.674 53.9375 15.268C53.1895 15.8547 52.1591 16.148 50.8465 16.148Z"),c(o,"fill","#003D8F"),c(l,"d","M60.8934 16.148C60.0428 16.148 59.4011 15.906 58.9684 15.422C58.5358 14.938 58.3194 14.2303 58.3194 13.299V6.809H56.6144V4.642H58.3194V1.177L60.7834 0V4.642H63.4014V6.809H60.7834V12.76C60.7834 13.1633 60.8604 13.464 61.0144 13.662C61.1758 13.8527 61.4214 13.948 61.7514 13.948C62.2868 13.948 62.8698 13.772 63.5004 13.42L63.2254 15.642C62.8808 15.8107 62.5178 15.9353 62.1364 16.016C61.7551 16.104 61.3408 16.148 60.8934 16.148Z"),c(l,"fill","#003D8F"),c(u,"d","M70.5043 16.148C68.935 16.148 67.6993 15.6237 66.7973 14.575C65.8953 13.5263 65.4443 12.0927 65.4443 10.274C65.4443 9.064 65.6497 8.019 66.0603 7.139C66.471 6.259 67.054 5.58067 67.8093 5.104C68.572 4.62 69.4703 4.378 70.5043 4.378C71.5457 4.378 72.444 4.61633 73.1993 5.093C73.9547 5.56967 74.5377 6.248 74.9483 7.128C75.359 8.008 75.5643 9.053 75.5643 10.263C75.5643 11.473 75.359 12.518 74.9483 13.398C74.5377 14.278 73.9547 14.9563 73.1993 15.433C72.444 15.9097 71.5457 16.148 70.5043 16.148ZM70.5043 13.805C71.3183 13.805 71.9527 13.4933 72.4073 12.87C72.862 12.2467 73.0893 11.3777 73.0893 10.263C73.0893 9.141 72.8583 8.26833 72.3963 7.645C71.9417 7.02167 71.311 6.71 70.5043 6.71C69.6977 6.71 69.0633 7.02533 68.6013 7.656C68.1467 8.27933 67.9193 9.152 67.9193 10.274C67.9193 11.3813 68.1467 12.2467 68.6013 12.87C69.0633 13.4933 69.6977 13.805 70.5043 13.805Z"),c(u,"fill","#003D8F"),c(C,"d","M78.2849 15.884V4.642H80.7489V5.94C80.9689 5.456 81.2989 5.07467 81.7389 4.796C82.1863 4.51733 82.6776 4.378 83.2129 4.378C83.9683 4.378 84.6063 4.62367 85.1269 5.115L84.7859 7.392C84.5073 7.172 84.2286 7.01433 83.9499 6.919C83.6713 6.82367 83.3633 6.776 83.0259 6.776C82.5566 6.776 82.1533 6.89333 81.8159 7.128C81.4786 7.36267 81.2146 7.69633 81.0239 8.129C80.8406 8.56167 80.7489 9.075 80.7489 9.669V15.884H78.2849Z"),c(C,"fill","#003D8F"),c(h,"d","M90.2431 16.148C89.0111 16.148 88.0431 15.8143 87.3391 15.147C86.6351 14.4797 86.2831 13.574 86.2831 12.43C86.2831 11.682 86.4628 11.033 86.8221 10.483C87.1815 9.92567 87.6875 9.49667 88.3401 9.196C88.9928 8.888 89.7555 8.734 90.6281 8.734C91.1415 8.734 91.6291 8.78533 92.0911 8.888C92.5605 8.98333 92.9785 9.13 93.3451 9.328V8.602C93.3451 7.88333 93.1618 7.35167 92.7951 7.007C92.4285 6.655 91.8748 6.479 91.1341 6.479C90.5915 6.479 90.0305 6.578 89.4511 6.776C88.8718 6.974 88.3035 7.26 87.7461 7.634L87.0091 5.665C87.6251 5.25433 88.3181 4.939 89.0881 4.719C89.8581 4.49167 90.6318 4.378 91.4091 4.378C92.8538 4.378 93.9355 4.73 94.6541 5.434C95.3801 6.13067 95.7431 7.17933 95.7431 8.58V15.884H93.3451V14.938C92.9491 15.3267 92.4835 15.6273 91.9481 15.84C91.4128 16.0453 90.8445 16.148 90.2431 16.148ZM90.7491 14.047C91.2258 14.047 91.6878 13.9443 92.1351 13.739C92.5898 13.5337 92.9931 13.2403 93.3451 12.859V11.33C93.0151 11.1467 92.6411 11.0073 92.2231 10.912C91.8125 10.8093 91.4091 10.758 91.0131 10.758C90.2798 10.758 89.7041 10.9083 89.2861 11.209C88.8681 11.5023 88.6591 11.9093 88.6591 12.43C88.6591 12.9287 88.8425 13.3247 89.2091 13.618C89.5758 13.904 90.0891 14.047 90.7491 14.047Z"),c(h,"fill","#003D8F"),c(a,"d","M102.941 20.57L101.621 18.535C102.67 18.469 103.495 18.3443 104.096 18.161C104.705 17.9777 105.134 17.721 105.383 17.391C105.64 17.0683 105.768 16.6467 105.768 16.126V15.07C105.167 15.7887 104.309 16.148 103.194 16.148C102.234 16.148 101.405 15.9097 100.708 15.433C100.012 14.949 99.4726 14.267 99.0913 13.387C98.7173 12.507 98.5303 11.462 98.5303 10.252C98.5303 9.064 98.7246 8.03 99.1133 7.15C99.5019 6.27 100.048 5.588 100.752 5.104C101.456 4.62 102.285 4.378 103.238 4.378C103.759 4.378 104.236 4.466 104.668 4.642C105.108 4.81067 105.475 5.05267 105.768 5.368V4.642H108.243V15.114C108.243 16.038 108.144 16.83 107.946 17.49C107.756 18.1573 107.448 18.7037 107.022 19.129C106.604 19.5617 106.058 19.8917 105.383 20.119C104.709 20.3463 103.895 20.4967 102.941 20.57ZM103.623 13.805C104.041 13.805 104.441 13.6987 104.822 13.486C105.204 13.266 105.519 12.9727 105.768 12.606V7.876C105.548 7.53133 105.24 7.25267 104.844 7.04C104.448 6.82 104.052 6.71 103.656 6.71C102.798 6.71 102.142 7.01433 101.687 7.623C101.233 8.22433 101.005 9.10067 101.005 10.252C101.005 10.9927 101.112 11.627 101.324 12.155C101.537 12.683 101.838 13.09 102.226 13.376C102.615 13.662 103.081 13.805 103.623 13.805Z"),c(a,"fill","#003D8F"),c($,"d","M116.085 16.148C115.022 16.148 114.105 15.9023 113.335 15.411C112.565 14.9197 111.975 14.234 111.564 13.354C111.154 12.4667 110.948 11.4327 110.948 10.252C110.948 9.02733 111.161 7.97867 111.586 7.106C112.012 6.226 112.609 5.55133 113.379 5.082C114.149 4.61267 115.051 4.378 116.085 4.378C116.973 4.378 117.779 4.56867 118.505 4.95C119.239 5.33133 119.822 5.918 120.254 6.71C120.687 7.49467 120.903 8.49567 120.903 9.713C120.903 9.90367 120.9 10.131 120.892 10.395C120.885 10.6517 120.863 10.912 120.826 11.176H113.401C113.445 11.748 113.581 12.2467 113.808 12.672C114.043 13.0973 114.355 13.431 114.743 13.673C115.132 13.9077 115.59 14.025 116.118 14.025C116.632 14.025 117.086 13.9407 117.482 13.772C117.878 13.596 118.256 13.3173 118.615 12.936L120.045 14.443C119.583 14.949 119.019 15.3597 118.351 15.675C117.691 15.9903 116.936 16.148 116.085 16.148ZM113.412 9.185H118.483C118.461 8.64967 118.351 8.18033 118.153 7.777C117.963 7.37367 117.691 7.062 117.339 6.842C116.987 6.61467 116.558 6.501 116.052 6.501C115.348 6.501 114.747 6.721 114.248 7.161C113.757 7.601 113.478 8.27567 113.412 9.185Z"),c($,"fill","#003D8F"),c(t,"id","easystorage"),c(t,"width","121"),c(t,"height","21"),c(t,"viewBox","0 0 121 21"),c(t,"fill","none"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"class","svelte-1ezuc1c")},m(V,j){v(V,t,j),f(t,n),f(t,r),f(t,i),f(t,s),f(t,o),f(t,l),f(t,u),f(t,C),f(t,h),f(t,a),f(t,$)},d(V){V&&y(t)}}}function w1(e){let t,n,r,i,s,o;return{c(){t=d("svg"),n=d("path"),r=d("path"),i=d("path"),s=d("path"),o=d("path"),c(n,"d","M82.419 25.9966C81.9783 25.9978 81.5387 25.9531 81.1072 25.8633C80.1782 25.6713 79.2997 25.2868 78.5283 24.7347C77.7569 24.1826 77.1097 23.475 76.6283 22.6576L76.6038 22.612C76.3649 22.1595 76.307 21.633 76.4418 21.1394C76.5767 20.6457 76.8941 20.2218 77.3298 19.9534C77.6316 19.7719 77.9772 19.6761 78.3294 19.6764C78.6802 19.6769 79.0246 19.7707 79.3272 19.9482C79.6299 20.1257 79.8798 20.3805 80.0515 20.6865L80.1182 20.7987L80.3286 21.0828L80.6092 21.3669C80.9741 21.6826 81.4156 21.8967 81.8894 21.9877C82.2726 22.0618 82.667 22.0552 83.0475 21.9682C83.4279 21.8813 83.7861 21.7159 84.099 21.4826C84.4223 21.2526 84.6904 20.9536 84.8839 20.6073C85.0774 20.2609 85.1915 19.8758 85.2178 19.4799C85.2503 19.0881 85.1986 18.6938 85.0661 18.3236C84.9336 17.9534 84.7234 17.6158 84.4497 17.3335C84.4497 17.3335 77.9822 10.6695 77.8419 10.4836L77.5227 10.0101C76.766 8.82906 76.4242 7.42965 76.5512 6.03276C76.6204 5.06483 76.9069 4.12495 77.3894 3.283L77.67 2.79197C78.1805 2.06188 78.848 1.45545 79.6236 1.01725L79.9428 0.789271C81.4348 -0.0308526 83.1889 -0.233107 84.8284 0.225951C86.4679 0.68501 87.862 1.76876 88.7112 3.24442C88.8435 3.46712 88.9297 3.71415 88.9646 3.97082C88.9996 4.2275 88.9826 4.48858 88.9146 4.73855C88.8473 4.99304 88.7297 5.23149 88.5689 5.4399C88.4081 5.6483 88.2072 5.82245 87.9781 5.95209C87.6863 6.12522 87.353 6.21612 87.0136 6.21514C86.6647 6.21419 86.3223 6.12046 86.0215 5.94358C85.7208 5.76669 85.4724 5.51301 85.302 5.20853C85.117 4.89366 84.8671 4.6217 84.569 4.41067C84.2709 4.19964 83.9314 4.05437 83.5729 3.98447C83.2085 3.91349 82.8333 3.91893 82.471 4.00043C82.1088 4.08193 81.7674 4.23773 81.4685 4.45796C81.1813 4.68181 80.9451 4.96434 80.7758 5.28671C80.6064 5.60908 80.5078 5.96386 80.4864 6.32738C80.4561 6.69228 80.5028 7.05949 80.6237 7.40513C80.7445 7.75077 80.9368 8.06711 81.1879 8.33358L87.2661 14.6012C88.1829 15.5525 88.7994 16.7526 89.0385 18.0519C89.2776 19.3512 89.1289 20.6922 88.6108 21.9075C88.0927 23.1228 87.2283 24.1587 86.1253 24.8859C85.0223 25.6131 83.7296 25.9994 82.4085 25.9966H82.419Z"),c(r,"d","M63.1919 25.993C61.4595 25.9911 59.7986 25.3021 58.5736 24.0771C57.3486 22.8521 56.6596 21.1912 56.6577 19.4588V6.5342C56.6577 5.67611 56.8267 4.82643 57.1551 4.03367C57.4835 3.2409 57.9648 2.52058 58.5715 1.91382C59.1783 1.30707 59.8986 0.82576 60.6914 0.497386C61.4841 0.169012 62.3338 0 63.1919 0C64.05 0 64.8997 0.169012 65.6924 0.497386C66.4852 0.82576 67.2055 1.30707 67.8123 1.91382C68.419 2.52058 68.9003 3.2409 69.2287 4.03367C69.5571 4.82643 69.7261 5.67611 69.7261 6.5342V19.4588C69.7243 21.1912 69.0352 22.8521 67.8102 24.0771C66.5852 25.3021 64.9243 25.9911 63.1919 25.993ZM63.1919 3.94577C62.5057 3.9467 61.8479 4.21971 61.3626 4.70493C60.8774 5.19015 60.6044 5.84799 60.6035 6.5342V19.4588C60.5997 19.7997 60.6641 20.138 60.7929 20.4538C60.9216 20.7695 61.1121 21.0563 61.3532 21.2975C61.5944 21.5386 61.8812 21.7291 62.1969 21.8578C62.5127 21.9866 62.851 22.051 63.1919 22.0472C63.8781 22.0463 64.536 21.7733 65.0212 21.2881C65.5064 20.8028 65.7794 20.145 65.7803 19.4588V6.5342C65.7713 5.85053 65.4956 5.19741 65.0122 4.71394C64.5287 4.23048 63.8756 3.95485 63.1919 3.94577Z"),c(i,"d","M37.8124 13.3315V24.0394C37.8124 24.5622 37.6047 25.0636 37.235 25.4332C36.8654 25.8029 36.364 26.0106 35.8413 26.0106C35.3185 26.0106 34.8171 25.8029 34.4475 25.4332C34.0778 25.0636 33.8701 24.5622 33.8701 24.0394V5.14532L37.8124 13.3315ZM48.4572 20.8583V1.97117C48.4357 1.46232 48.2185 0.98144 47.8509 0.628979C47.4832 0.276517 46.9936 0.079733 46.4843 0.079733C45.975 0.079733 45.4854 0.276517 45.1178 0.628979C44.7501 0.98144 44.5329 1.46232 44.5114 1.97117V12.6686L48.4572 20.8583ZM37.6265 1.11888V1.0803C37.4488 0.762505 37.1899 0.497618 36.8762 0.312741C36.5625 0.127863 36.2054 0.0296321 35.8413 0.0280966C35.708 0.0274633 35.5751 0.0415785 35.4449 0.0701848C35.0015 0.156527 34.6026 0.395996 34.318 0.746708C34.0333 1.09742 33.881 1.53705 33.8877 1.98871V2.44115L44.7113 24.9128C44.8811 25.2326 45.1331 25.5013 45.4414 25.6912C45.7496 25.8811 46.103 25.9853 46.465 25.993C46.6176 25.9934 46.7696 25.9745 46.9175 25.9369C47.3531 25.8458 47.7441 25.6074 48.0245 25.2618C48.3049 24.9162 48.4577 24.4845 48.4572 24.0394V23.594C48.4572 23.594 37.9176 1.71864 37.6265 1.11888Z"),c(s,"d","M19.0796 25.993C17.3469 25.9921 15.6855 25.3033 14.4603 24.0781C13.2351 22.8529 12.5463 21.1915 12.5454 19.4588V6.5342C12.5454 4.80122 13.2338 3.13922 14.4592 1.91382C15.6846 0.688422 17.3466 0 19.0796 0C20.8126 0 22.4746 0.688422 23.7 1.91382C24.9254 3.13922 25.6138 4.80122 25.6138 6.5342V19.4588C25.6129 21.1915 24.9242 22.8529 23.699 24.0781C22.4738 25.3033 20.8123 25.9921 19.0796 25.993ZM19.0796 3.94577C18.7396 3.94531 18.4028 4.01195 18.0885 4.14186C17.7743 4.27178 17.4887 4.46242 17.2483 4.70287C17.0078 4.94332 16.8172 5.22885 16.6873 5.5431C16.5574 5.85735 16.4907 6.19415 16.4912 6.5342V19.4588C16.4912 20.1453 16.7639 20.8037 17.2493 21.2891C17.7347 21.7745 18.3931 22.0472 19.0796 22.0472C19.7661 22.0472 20.4245 21.7745 20.9099 21.2891C21.3953 20.8037 21.668 20.1453 21.668 19.4588V6.5342C21.659 5.85053 21.3833 5.19741 20.8999 4.71394C20.4164 4.23047 19.7633 3.95485 19.0796 3.94577Z"),c(o,"d","M2.14279 25.9827C1.85889 25.9841 1.57756 25.9288 1.3153 25.8201C1.05305 25.7114 0.815137 25.5514 0.615534 25.3495C0.41593 25.1476 0.25865 24.9079 0.152917 24.6444C0.0471839 24.3809 -0.00487247 24.099 -0.000199355 23.8151V2.11513C0.0099449 1.55105 0.242119 1.01373 0.645944 0.619752C1.04977 0.225777 1.59266 0.00693882 2.15682 0.0107235C2.62925 0.00381055 3.09025 0.156078 3.46562 0.443013C3.84099 0.729947 4.10888 1.13485 4.22616 1.59254C4.24062 1.64213 4.25233 1.69248 4.26123 1.74336V1.83805C4.28131 1.95386 4.2907 2.07126 4.28929 2.18879C4.28929 2.18879 4.28929 23.5836 4.28929 23.8292C4.29115 24.1119 4.23694 24.3922 4.12982 24.6538C4.02269 24.9155 3.86476 25.1533 3.66516 25.3536C3.46556 25.5538 3.22825 25.7125 2.96695 25.8205C2.70564 25.9285 2.42553 25.9836 2.14279 25.9827Z"),c(t,"width","90"),c(t,"height","26"),c(t,"viewBox","0 0 90 26"),c(t,"fill","none"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"class","svelte-1ezuc1c")},m(l,u){v(l,t,u),f(t,n),f(t,r),f(t,i),f(t,s),f(t,o)},d(l){l&&y(t)}}}function x1(e){let t;function n(s,o){if(s[0])return w1;if(s[1])return b1}let r=n(e),i=r&&r(e);return{c(){i&&i.c(),t=a1()},m(s,o){i&&i.m(s,o),v(s,t,o)},p(s,[o]){r!==(r=n(s))&&(i&&i.d(1),i=r&&r(s),i&&(i.c(),i.m(t.parentNode,t)))},i:g,o:g,d(s){s&&y(t),i&&i.d(s)}}}function V1(e,t,n){let{ionosIcon:r=!1}=t,{easystorage:i=!1}=t;return e.$$set=s=>{"ionosIcon"in s&&n(0,r=s.ionosIcon),"easystorage"in s&&n(1,i=s.easystorage)},[r,i]}class S extends e1{constructor(t){super(),X(this,t,V1,x1,T,{ionosIcon:0,easystorage:1},y1)}get ionosIcon(){return this.$$.ctx[0]}set ionosIcon(t){this.$$set({ionosIcon:t}),k()}get easystorage(){return this.$$.ctx[1]}set easystorage(t){this.$$set({easystorage:t}),k()}}t1(S,{ionosIcon:{type:"Boolean"},easystorage:{type:"Boolean"}},[],[],!0);function v1(e){G(e,"svelte-8ezuny",".ios-global-nav.svelte-8ezuny{--ion-blue:var(--color-primary, rgba(0, 61, 143, 1));--ion-color-primary:light-dark(var(--ion-blue), var(--ion-blue));--ion-white:var(--color-main-background, #fff);--ion-color-main-background:light-dark(var(--ion-white), var(--ion-white));display:flex;align-items:center;background-color:var(--ion-color-main-background);box-shadow:0px 2px 8px 0px rgba(113, 128, 149, 0.5);height:64px;padding:0 24px}.header-left.svelte-8ezuny{display:flex;align-items:center;text-decoration:none;gap:18px}.header-right.svelte-8ezuny{display:flex;align-items:center;margin-left:auto}@media(max-width: 768px){.ios-global-nav.svelte-8ezuny{padding:0 16px}.header-left.svelte-8ezuny{gap:12px}}")}function L1(e){let t,n,r,i,s,o,l,u;r=new S({props:{ionosIcon:!0}}),s=new S({props:{easystorage:!0}});const C=e[2].default,h=r1(C,e,e[1],null);return{c(){t=L("div"),n=L("a"),W(r.$$.fragment),i=q(),W(s.$$.fragment),o=q(),l=L("div"),h&&h.c(),c(n,"class","header-left svelte-8ezuny"),c(n,"href",e[0]),c(l,"class","header-right svelte-8ezuny"),c(t,"class","ios-global-nav svelte-8ezuny")},m(a,$){v(a,t,$),f(t,n),B(r,n,null),f(n,i),B(s,n,null),f(t,o),f(t,l),h&&h.m(l,null),u=!0},p(a,[$]){(!u||$&1)&&c(n,"href",a[0]),h&&h.p&&(!u||$&2)&&o1(h,C,a,a[1],u?i1(C,a[1],$,null):c1(a[1]),null)},i(a){u||(E(r.$$.fragment,a),E(s.$$.fragment,a),E(h,a),u=!0)},o(a){A(r.$$.fragment,a),A(s.$$.fragment,a),A(h,a),u=!1},d(a){a&&y(t),F(r),F(s),h&&h.d(a)}}}function M1(e,t,n){let{$$slots:r={},$$scope:i}=t;console.log("Dummy");let{home_src:s="#"}=t;return e.$$set=o=>{"home_src"in o&&n(0,s=o.home_src),"$$scope"in o&&n(1,i=o.$$scope)},[s,i,r]}class n1 extends e1{constructor(t){super(),X(this,t,M1,L1,T,{home_src:0},v1)}get home_src(){return this.$$.ctx[0]}set home_src(t){this.$$set({home_src:t}),k()}}return customElements.define("ionos-global-nav",t1(n1,{home_src:{}},["default"],[],!0)),n1}();
