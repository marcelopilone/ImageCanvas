const t="image-canvas";let n=false;const e=(t,n="")=>{{return()=>{}}};const s=(t,n)=>{{return()=>{}}};const o="{visibility:hidden}.hydrated{visibility:inherit}";const c={};const l=t=>{t=typeof t;return t==="object"||t==="function"};function i(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const f=(t,n,...e)=>{let s=null;let o=false;let c=false;const i=[];const f=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!l(s)){s=String(s)}if(o&&c){i[i.length-1].t+=s}else{i.push(o?r(null,s):s)}c=o}}};f(e);const u=r(t,null);u.o=n;if(i.length>0){u.l=i}return u};const r=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const u={};const a=t=>t&&t.u===u;const d=(t,n)=>{if(t!=null&&!l(t)){if(n&2){return parseFloat(t)}if(n&1){return String(t)}return t}return t};const y=t=>X(t).p;const h=(t,n,e)=>{const s=lt.ce(n,e);t.dispatchEvent(s);return s};const p=new WeakMap;const $=(t,n,e)=>{let s=st.get(t);if(ft&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}st.set(t,s)};const m=(t,n,e)=>{var s;const o=w(n);const c=st.get(o);t=t.nodeType===11?t:ct;if(c){if(typeof c==="string"){t=t.head||t;let n=p.get(t);let e;if(!n){p.set(t,n=new Set)}if(!n.has(o)){{e=ct.createElement("style");e.innerHTML=c;const n=(s=lt.$)!==null&&s!==void 0?s:i(ct);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(o)}}}else if(!t.adoptedStyleSheets.includes(c)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]}}return o};const v=t=>{const n=t.m;const s=t.p;const o=e("attachStyles",n.v);m(s.getRootNode(),n);o()};const w=(t,n)=>"sc-"+t.v;const b=(t,n,e,s,o,c)=>{if(e!==s){n.toLowerCase();if(n==="style"){{for(const n in e){if(!s||s[n]==null){if(n.includes("-")){t.style.removeProperty(n)}else{t.style[n]=""}}}}for(const n in s){if(!e||s[n]!==e[n]){if(n.includes("-")){t.style.setProperty(n,s[n])}else{t.style[n]=s[n]}}}}else;}};const S=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||c;const i=n.o||c;{for(s in l){if(!(s in i)){b(o,s,l[s],undefined)}}}for(s in i){b(o,s,l[s],i[s])}};const g=(t,n,e,s)=>{const o=n.l[e];let c=0;let l;let i;if(o.t!==null){l=o.h=ct.createTextNode(o.t)}else{l=o.h=ct.createElement(o.u);{S(null,o)}if(o.l){for(c=0;c<o.l.length;++c){i=g(t,o,c);if(i){l.appendChild(i)}}}}return l};const j=(t,n,e,s,o,c)=>{let l=t;let i;for(;o<=c;++o){if(s[o]){i=g(null,e,o);if(i){s[o].h=i;l.insertBefore(i,n)}}}};const k=(t,n,e)=>{for(let s=n;s<=e;++s){const n=t[s];if(n){const t=n.h;if(t){t.remove()}}}};const M=(t,n,e,s)=>{let o=0;let c=0;let l=n.length-1;let i=n[0];let f=n[l];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=l&&c<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--l]}else if(u==null){u=s[++c]}else if(a==null){a=s[--r]}else if(C(i,u)){O(i,u);i=n[++o];u=s[++c]}else if(C(f,a)){O(f,a);f=n[--l];a=s[--r]}else if(C(i,a)){O(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(C(f,u)){O(f,u);t.insertBefore(f.h,i.h);f=n[--l];u=s[++c]}else{{d=g(n&&n[c],e,c);u=s[++c]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>l){j(t,s[r+1]==null?null:s[r+1].h,e,s,c,r)}else if(c>r){k(n,o,l)}};const C=(t,n)=>{if(t.u===n.u){return true}return false};const O=(t,n)=>{const e=n.h=t.h;const s=t.l;const o=n.l;const c=n.t;if(c===null){{{S(t,n)}}if(s!==null&&o!==null){M(e,s,n,o)}else if(o!==null){if(t.t!==null){e.textContent=""}j(e,null,n,o,0,o.length-1)}else if(s!==null){k(s,0,s.length-1)}}else if(t.t!==c){e.data=c}};const P=(t,n,e=false)=>{const s=t.p;const o=t.S||r(null,null);const c=a(n)?n:f(null,null,n);if(e&&c.o){for(const t of Object.keys(c.o)){if(s.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){c.o[t]=s[t]}}}c.u=null;c.i|=4;t.S=c;c.h=o.h=s;O(o,c)};const U=(t,n)=>{if(n&&!t.g&&n["s-p"]){n["s-p"].push(new Promise((n=>t.g=n)))}};const x=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}U(t,t.j);const e=()=>E(t,n);return pt(e)};const E=(t,n)=>{const s=e("scheduleUpdate",t.m.v);const o=t.k;let c;if(n){{c=R(o,"componentWillLoad")}}s();return L(c,(()=>T(t,o,n)))};const L=(t,n)=>N(t)?t.then(n):n();const N=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const T=async(t,n,s)=>{var o;const c=t.p;const l=e("update",t.m.v);const i=c["s-rc"];if(s){v(t)}const f=e("render",t.m.v);{W(t,n,c,s)}if(i){i.map((t=>t()));c["s-rc"]=undefined}f();l();{const n=(o=c["s-p"])!==null&&o!==void 0?o:[];const e=()=>A(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const W=(t,n,e,s)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{P(t,n,s)}}}}catch(n){tt(n,t.p)}return null};const A=t=>{const n=t.m.v;const s=t.p;const o=e("postUpdate",n);const c=t.j;if(!(t.i&64)){t.i|=64;{q(s)}o();{t.M(s);if(!c){F()}}}else{o()}{if(t.g){t.g();t.g=undefined}if(t.i&512){ht((()=>x(t,false)))}t.i&=~(4|512)}};const F=n=>{{q(ct.documentElement)}ht((()=>h(ot,"appload",{detail:{namespace:t}})))};const R=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){tt(t)}}return undefined};const q=t=>t.classList.add("hydrated");const H=(t,n)=>X(t).C.get(n);const I=(t,n,e,s)=>{const o=X(t);const c=o.p;const l=o.C.get(n);const i=o.i;const f=o.k;e=d(e,s.O[n][0]);const r=Number.isNaN(l)&&Number.isNaN(e);const u=e!==l&&!r;if((!(i&8)||l===undefined)&&u){o.C.set(n,e);if(f){if(s.P&&i&128){const t=s.P[n];if(t){t.map((t=>{try{f[t](e,l,n)}catch(t){tt(t,c)}}))}}if((i&(2|16))===2){x(o,false)}}}};const V=(t,n,e)=>{if(n.O){if(t.watchers){n.P=t.watchers}const s=Object.entries(n.O);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return H(this,t)},set(e){I(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){lt.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const _=async(t,n,o,c,l)=>{if((n.i&32)===0){n.i|=32;{l=et(o);if(l.then){const t=s();l=await l;t()}if(!l.isProxied){{o.P=l.watchers}V(l,o,2);l.isProxied=true}const t=e("createInstance",o.v);{n.i|=8}try{new l(n)}catch(t){tt(t)}{n.i&=~8}{n.i|=128}t()}if(l.style){let t=l.style;const n=w(o);if(!st.has(n)){const s=e("registerStyles",o.v);$(n,t,!!(o.i&1));s()}}}const i=n.j;const f=()=>x(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const z=t=>{};const B=t=>{if((lt.i&1)===0){const n=X(t);const s=n.m;const o=e("connectedCallback",s.v);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){U(n,n.j=e);break}}}if(s.O){Object.entries(s.O).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{_(t,n,s)}}else{if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>z()))}}o()}};const D=t=>{};const G=async t=>{if((lt.i&1)===0){const n=X(t);if(n===null||n===void 0?void 0:n.k);else if(n===null||n===void 0?void 0:n.U){n.U.then((()=>D()))}}};const J=(t,n={})=>{var s;const c=e();const l=[];const f=n.exclude||[];const r=ot.customElements;const u=ct.head;const a=u.querySelector("meta[charset]");const d=ct.createElement("style");const y=[];let h;let p=true;Object.assign(lt,n);lt.L=new URL(n.resourcesUrl||"./",ct.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],v:n[1],O:n[2],N:n[3]};{e.O=n[2]}{e.P={}}const s=e.v;const o=class extends HTMLElement{constructor(t){super(t);t=this;Z(t,e)}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){y.push(this)}else{lt.jmp((()=>B(this)))}}disconnectedCallback(){lt.jmp((()=>G(this)))}componentOnReady(){return X(this).U}};e.T=t[0];if(!f.includes(s)&&!r.get(s)){l.push(s);r.define(s,V(o,e,1))}}))}));{d.innerHTML=l+o;d.setAttribute("data-styles","");const t=(s=lt.$)!==null&&s!==void 0?s:i(ct);if(t!=null){d.setAttribute("nonce",t)}u.insertBefore(d,a?a.nextSibling:u.firstChild)}p=false;if(y.length){y.map((t=>t.connectedCallback()))}else{{lt.jmp((()=>h=setTimeout(F,30)))}}c()};const K=t=>lt.$=t;const Q=new WeakMap;const X=t=>Q.get(t);const Y=(t,n)=>Q.set(n.k=t,n);const Z=(t,n)=>{const e={i:0,p:t,m:n,C:new Map};{e.U=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return Q.set(t,e)};const tt=(t,n)=>(0,console.error)(t,n);const nt=new Map;const et=(t,n,e)=>{const s=t.v.replace(/-/g,"_");const o=t.T;const c=nt.get(o);if(c){return c[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{nt.set(o,t)}return t[s]}),tt)};const st=new Map;const ot=typeof window!=="undefined"?window:{};const ct=ot.document||{head:{}};const lt={i:0,L:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const it=t=>Promise.resolve(t);const ft=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const rt=[];const ut=[];const at=(t,e)=>s=>{t.push(s);if(!n){n=true;if(e&&lt.i&4){ht(yt)}else{lt.raf(yt)}}};const dt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){tt(t)}}t.length=0};const yt=()=>{dt(rt);{dt(ut);if(n=rt.length>0){lt.raf(yt)}}};const ht=t=>it().then(t);const pt=at(ut,true);export{J as b,y as g,f as h,it as p,Y as r,K as s};
//# sourceMappingURL=p-793090eb.js.map