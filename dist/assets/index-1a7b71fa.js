import{J as ve,q as je,K as Ne,M as Pe,v as we,N as ke,r as x,A as Fe,m as Ae,b as T,O as Ce,j as c,L as R,p as q,I as te,P as Se,G as re,H as C,Q as ze}from"./index-187f8b77.js";import{B as Oe}from"./Button-816b9e9d.js";import{Q as De}from"./QuantityController-ab2a2573.js";import"./InputNumber-6393f7be.js";var oe=Symbol.for("immer-nothing"),ne=Symbol.for("immer-draftable"),h=Symbol.for("immer-state");function _(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var j=Object.getPrototypeOf;function N(e){return!!e&&!!e[h]}function b(e){var t;return e?ue(e)||Array.isArray(e)||!!e[ne]||!!((t=e.constructor)!=null&&t[ne])||D(e)||M(e):!1}var Me=Object.prototype.constructor.toString();function ue(e){if(!e||typeof e!="object")return!1;const t=j(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Me}function w(e,t){O(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function O(e){const t=e[h];return t?t.type_:Array.isArray(e)?1:D(e)?2:M(e)?3:0}function W(e,t){return O(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function le(e,t,r){const n=O(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ee(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function D(e){return e instanceof Map}function M(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function G(e,t){if(D(e))return new Map(e);if(M(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&ue(e))return j(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[h];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const a=n[s],o=r[a];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(j(e),r)}function Y(e,t=!1){return E(e)||N(e)||!b(e)||(O(e)>1&&(e.set=e.add=e.clear=e.delete=Ie),Object.freeze(e),t&&w(e,(r,n)=>Y(n,!0))),e}function Ie(){_(2)}function E(e){return Object.isFrozen(e)}var Be={};function v(e){const t=Be[e];return t||_(0,e),t}var k;function de(){return k}function $e(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function se(e,t){t&&(v("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function U(e){X(e),e.drafts_.forEach(Te),e.drafts_=null}function X(e){e===k&&(k=e.parent_)}function ce(e){return k=$e(k,e)}function Te(e){const t=e[h];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ie(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[h].modified_&&(U(t),_(4)),b(e)&&(e=S(t,e),t.parent_||z(t,e)),t.patches_&&v("Patches").generateReplacementPatches_(r[h].base_,e,t.patches_,t.inversePatches_)):e=S(t,r,[]),U(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==oe?e:void 0}function S(e,t,r){if(E(t))return t;const n=t[h];if(!n)return w(t,(s,a)=>ae(e,n,t,s,a,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return z(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let a=s,o=!1;n.type_===3&&(a=new Set(s),s.clear(),o=!0),w(a,(d,f)=>ae(e,n,s,d,f,r,o)),z(e,s,!1),r&&e.patches_&&v("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ae(e,t,r,n,s,a,o){if(N(s)){const d=a&&t&&t.type_!==3&&!W(t.assigned_,n)?a.concat(n):void 0,f=S(e,s,d);if(le(r,n,f),N(f))e.canAutoFreeze_=!1;else return}else o&&r.add(s);if(b(s)&&!E(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;S(e,s),(!t||!t.scope_.parent_)&&z(e,s)}}function z(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Y(t,r)}function Re(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:de(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,a=Z;r&&(s=[n],a=F);const{revoke:o,proxy:d}=Proxy.revocable(s,a);return n.draft_=d,n.revoke_=o,d}var Z={get(e,t){if(t===h)return e;const r=g(e);if(!W(r,t))return qe(e,r,t);const n=r[t];return e.finalized_||!b(n)?n:n===L(e.base_,t)?(Q(e),e.copy_[t]=J(n,e)):n},has(e,t){return t in g(e)},ownKeys(e){return Reflect.ownKeys(g(e))},set(e,t,r){const n=fe(g(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=L(g(e),t),a=s==null?void 0:s[h];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Ee(r,s)&&(r!==void 0||W(e.base_,t)))return!0;Q(e),H(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return L(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Q(e),H(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=g(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){_(11)},getPrototypeOf(e){return j(e.base_)},setPrototypeOf(){_(12)}},F={};w(Z,(e,t)=>{F[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});F.deleteProperty=function(e,t){return F.set.call(this,e,t,void 0)};F.set=function(e,t,r){return Z.set.call(this,e[0],t,r,e[0])};function L(e,t){const r=e[h];return(r?g(r):e)[t]}function qe(e,t,r){var s;const n=fe(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function fe(e,t){if(!(t in e))return;let r=j(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=j(r)}}function H(e){e.modified_||(e.modified_=!0,e.parent_&&H(e.parent_))}function Q(e){e.copy_||(e.copy_=G(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Le=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const a=r;r=t;const o=this;return function(f=a,...p){return o.produce(f,P=>r.call(this,P,...p))}}typeof r!="function"&&_(6),n!==void 0&&typeof n!="function"&&_(7);let s;if(b(t)){const a=ce(this),o=J(t,void 0);let d=!0;try{s=r(o),d=!1}finally{d?U(a):X(a)}return se(a,n),ie(s,a)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===oe&&(s=void 0),this.autoFreeze_&&Y(s,!0),n){const a=[],o=[];v("Patches").generateReplacementPatches_(t,s,a,o),n(a,o)}return s}else _(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(o,...d)=>this.produceWithPatches(o,f=>t(f,...d));let n,s;return[this.produce(t,r,(o,d)=>{n=o,s=d}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){b(e)||_(8),N(e)&&(e=Qe(e));const t=ce(this),r=J(e,void 0);return r[h].isManual_=!0,X(t),r}finishDraft(e,t){const r=e&&e[h];(!r||!r.isManual_)&&_(9);const{scope_:n}=r;return se(n,t),ie(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=v("Patches").applyPatches_;return N(e)?n(e,t):this.produce(e,s=>n(s,t))}};function J(e,t){const r=D(e)?v("MapSet").proxyMap_(e,t):M(e)?v("MapSet").proxySet_(e,t):Re(e,t);return(t?t.scope_:de()).drafts_.push(r),r}function Qe(e){return N(e)||_(10,e),he(e)}function he(e){if(!b(e)||E(e))return e;const t=e[h];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=G(e,t.scope_.immer_.useStrictShallowCopy_)}else r=G(e,!0);return w(r,(n,s)=>{le(r,n,he(s))}),t&&(t.finalized_=!1),r}var m=new Le,K=m.produce;m.produceWithPatches.bind(m);m.setAutoFreeze.bind(m);m.setUseStrictShallowCopy.bind(m);m.applyPatches.bind(m);m.createDraft.bind(m);m.finishDraft.bind(m);function Ke(e,t,r,n){for(var s=-1,a=e==null?0:e.length;++s<a;){var o=e[s];t(n,o,r(o),e)}return n}var We=Ke;function Ge(e){return function(t,r,n){for(var s=-1,a=Object(t),o=n(t),d=o.length;d--;){var f=o[e?d:++s];if(r(a[f],f,a)===!1)break}return t}}var Ue=Ge,Xe=Ue,He=Xe(),Je=He,Ye=Je,Ze=ve;function Ve(e,t){return e&&Ye(e,t,Ze)}var et=Ve,tt=je;function rt(e,t){return function(r,n){if(r==null)return r;if(!tt(r))return e(r,n);for(var s=r.length,a=t?s:-1,o=Object(r);(t?a--:++a<s)&&n(o[a],a,o)!==!1;);return r}}var nt=rt,st=et,ct=nt,it=ct(st),at=it,ot=at;function ut(e,t,r,n){return ot(e,function(s,a,o){t(n,s,r(s),o)}),n}var lt=ut,dt=We,ft=lt,ht=Ne,mt=Pe;function _t(e,t){return function(r,n){var s=mt(r)?dt:ft,a=t?t():{};return s(r,e,ht(n),a)}}var yt=_t,pt=ke,xt=yt,gt=xt(function(e,t,r){pt(e,r,t)}),bt=gt;const vt=we(bt);function kt(){var ee;const{extendedPurchases:e,setExtendedPurchases:t}=x.useContext(Fe),{data:r,refetch:n}=Ae({queryKey:["purchases",{status:re.inCart}],queryFn:()=>C.getPurchases({status:re.inCart})}),s=T({mutationFn:i=>C.updatePurchase(i),onSuccess:()=>{n()}}),a=T({mutationFn:i=>C.buyProducts(i),onSuccess:i=>{n(),ze.success(i.data.message,{position:"top-center",autoClose:1e3})}}),o=T({mutationFn:i=>C.deletePurchase(i),onSuccess:()=>{n()}}),f=(ee=Ce().state)==null?void 0:ee.purchaseId,p=r==null?void 0:r.data.data,P=x.useMemo(()=>e.every(i=>i.checked),[e]),y=x.useMemo(()=>e.filter(i=>i.checked),[e]),me=y.length,V=x.useMemo(()=>y.reduce((i,u)=>i+u.product.price*u.buy_count,0),[y]),_e=x.useMemo(()=>y.reduce((i,u)=>i+u.product.price_before_discount*u.buy_count,0),[y]);x.useEffect(()=>{t(i=>{const u=vt(i,"_id");return(p==null?void 0:p.map(l=>{var A;const $=f===l._id;return{...l,disabled:!1,checked:$||!!((A=u[l._id])!=null&&A.checked)}}))||[]})},[p,f]),x.useEffect(()=>()=>{history.replaceState(null,"")},[]);const ye=i=>u=>{t(K(l=>{l[i].checked=u.target.checked}))},I=()=>{t(i=>i.map(u=>({...u,checked:!P})))},pe=i=>u=>{t(K(l=>{l[i].buy_count=u}))},B=(i,u,l)=>{if(l){const $=e[i];t(K(A=>{A[i].disabled=!0})),s.mutate({product_id:$.product._id,buy_count:u})}},xe=i=>()=>{const u=e[i]._id;o.mutate([u])},ge=()=>{const i=y.map(u=>u._id);o.mutate(i)},be=()=>{if(y.length>0){const i=y.map(u=>({product_id:u.product._id,buy_count:u.buy_count}));a.mutate(i)}};return c.jsx("div",{className:"bg-neutral-100 py-16",children:c.jsx("div",{className:"container",children:e.length>0?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"overflow-auto",children:c.jsxs("div",{className:"min-w-[1000px]",children:[c.jsxs("div",{className:"grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow",children:[c.jsx("div",{className:"col-span-6",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"flex flex-shrink-0 items-center justify-center pr-3",children:c.jsx("input",{type:"checkbox",className:"h-5 w-5 accent-orange",checked:P,onChange:I})}),c.jsx("div",{className:"flex-grow text-black",children:"Sản phẩm"})]})}),c.jsx("div",{className:"col-span-6",children:c.jsxs("div",{className:"grid grid-cols-5 text-center",children:[c.jsx("div",{className:"col-span-2",children:"Đơn giá"}),c.jsx("div",{className:"col-span-1",children:"Số lượng"}),c.jsx("div",{className:"col-span-1",children:"Số tiền"}),c.jsx("div",{className:"col-span-1",children:"Thao tác"})]})})]}),e.length>0&&c.jsx("div",{className:"my-3 rounded-sm bg-white p-5 shadow",children:e.map((i,u)=>c.jsxs("div",{className:"mb-5 grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0",children:[c.jsx("div",{className:"col-span-6",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex flex-shrink-0 items-center justify-center pr-3",children:c.jsx("input",{type:"checkbox",className:"h-5 w-5 accent-orange",checked:i.checked,onChange:ye(u)})}),c.jsx("div",{className:"flex-grow",children:c.jsxs("div",{className:"flex",children:[c.jsx(R,{className:"h-20 w-20 flex-shrink-0",to:`${q.home}${te({name:i.product.name,id:i.product._id})}`,children:c.jsx("img",{alt:i.product.name,src:i.product.image})}),c.jsx("div",{className:"flex-grow px-2 pt-1 pb-2",children:c.jsx(R,{to:`${q.home}${te({name:i.product.name,id:i.product._id})}`,className:"text-left line-clamp-2",children:i.product.name})})]})})]})}),c.jsx("div",{className:"col-span-6",children:c.jsxs("div",{className:"grid grid-cols-5 items-center",children:[c.jsx("div",{className:"col-span-2",children:c.jsxs("div",{className:"flex items-center justify-center",children:[c.jsxs("span",{className:"text-gray-300 line-through",children:["₫",new Intl.NumberFormat().format(i.product.price_before_discount)]}),c.jsxs("span",{className:"ml-3",children:["₫",new Intl.NumberFormat().format(i.product.price)]})]})}),c.jsx("div",{className:"col-span-1",children:c.jsx(De,{max:i.product.quantity,value:i.buy_count,classNameWrapper:"flex items-center",onIncrease:l=>B(u,l,l<=i.product.quantity),onDecrease:l=>B(u,l,l>=1),onType:pe(u),onFocusOut:l=>B(u,l,l>=1&&l<=i.product.quantity&&l!==p[u].buy_count),disabled:i.disabled})}),c.jsx("div",{className:"col-span-1",children:c.jsxs("span",{className:"text-orange",children:["₫",new Intl.NumberFormat().format(i.product.price*i.buy_count)]})}),c.jsx("div",{className:"col-span-1",children:c.jsx("button",{onClick:xe(u),className:"bg-none text-black transition-colors hover:text-orange",children:"Xóa"})})]})})]},i._id))})]})}),c.jsxs("div",{className:"sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("div",{className:"flex flex-shrink-0 items-center justify-center pr-3",children:c.jsx("input",{type:"checkbox",className:"h-5 w-5 accent-orange",checked:P,onChange:I})}),c.jsxs("button",{className:"mx-3 border-none bg-none",onClick:I,children:["Chọn tất cả (",e.length,")"]}),c.jsx("button",{className:"mx-3 border-none bg-none",onClick:ge,children:"Xóa"})]}),c.jsxs("div",{className:"mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center sm:justify-end",children:[c.jsxs("div",{children:["Tổng thanh toán (",me," sản phẩm):"]}),c.jsxs("div",{className:"ml-2 text-2xl text-orange",children:["₫",new Intl.NumberFormat().format(V)]})]}),c.jsxs("div",{className:"flex items-center text-sm sm:justify-end",children:[c.jsx("div",{className:"text-gray-500",children:"Tiết kiệm"}),c.jsxs("div",{className:"ml-6 text-orange",children:["₫",new Intl.NumberFormat().format(_e-V)]})]})]}),c.jsx(Oe,{className:"mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0",onClick:be,disabled:a.isLoading,children:"Mua hàng"})]})]})]}):c.jsxs("div",{className:"text-center",children:[c.jsx("img",{src:Se,alt:"no purchase",className:"mx-auto h-24 w-24"}),c.jsx("div",{className:"mt-5 font-bold text-gray-400",children:"Giỏ hàng của bạn còn trống"}),c.jsx("div",{className:"mt-5 text-center",children:c.jsx(R,{to:q.home,className:" rounded-sm bg-orange px-10 py-2  uppercase text-white transition-all hover:bg-orange/80",children:"Mua ngay"})})]})})})}export{kt as default};
