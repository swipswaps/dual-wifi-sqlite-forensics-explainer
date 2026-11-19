(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Lm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var uc={exports:{}},Ao={},cc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function X_(){if(mp)return ft;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(I,re,Ne){this.props=I,this.context=re,this.refs=w,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(I,re,Ne){this.props=I,this.context=re,this.refs=w,this.updater=Ne||S}var L=N.prototype=new g;L.constructor=N,T(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,q=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function W(I,re,Ne){var K,fe={},Ee=null,xe=null;if(re!=null)for(K in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)q.call(re,K)&&!U.hasOwnProperty(K)&&(fe[K]=re[K]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ne;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];fe.children=Ie}if(I&&I.defaultProps)for(K in Ae=I.defaultProps,Ae)fe[K]===void 0&&(fe[K]=Ae[K]);return{$$typeof:s,type:I,key:Ee,ref:xe,props:fe,_owner:O.current}}function b(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return re[Ne]})}var ie=/\/+/g;function Z(I,re){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):re.toString(36)}function ce(I,re,Ne,K,fe){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,fe=fe(xe),I=K===""?"."+Z(xe,0):K,C(fe)?(Ne="",I!=null&&(Ne=I.replace(ie,"$&/")+"/"),ce(fe,re,Ne,"",function(Ze){return Ze})):fe!=null&&(R(fe)&&(fe=b(fe,Ne+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(ie,"$&/")+"/")+I)),re.push(fe)),1;if(xe=0,K=K===""?".":K+":",C(I))for(var Ae=0;Ae<I.length;Ae++){Ee=I[Ae];var Ie=K+Z(Ee,Ae);xe+=ce(Ee,re,Ne,Ie,fe)}else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ae=0;!(Ee=I.next()).done;)Ee=Ee.value,Ie=K+Z(Ee,Ae++),xe+=ce(Ee,re,Ne,Ie,fe);else if(Ee==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(I,re,Ne){if(I==null)return I;var K=[],fe=0;return ce(I,K,"","",function(Ee){return re.call(Ne,Ee,fe++)}),K}function oe(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var ue={current:null},B={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:O};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:de,forEach:function(I,re,Ne){de(I,function(){re.apply(this,arguments)},Ne)},count:function(I){var re=0;return de(I,function(){re++}),re},toArray:function(I){return de(I,function(re){return re})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=N,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=ae,ft.cloneElement=function(I,re,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=T({},I.props),fe=I.key,Ee=I.ref,xe=I._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=O.current),re.key!==void 0&&(fe=""+re.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ie in re)q.call(re,Ie)&&!U.hasOwnProperty(Ie)&&(K[Ie]=re[Ie]===void 0&&Ae!==void 0?Ae[Ie]:re[Ie])}var Ie=arguments.length-2;if(Ie===1)K.children=Ne;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];K.children=Ae}return{$$typeof:s,type:I.type,key:fe,ref:Ee,props:K,_owner:xe}},ft.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=W,ft.createFactory=function(I){var re=W.bind(null,I);return re.type=I,re},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:f,render:I}},ft.isValidElement=R,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:oe}},ft.memo=function(I,re){return{$$typeof:m,type:I,compare:re===void 0?null:re}},ft.startTransition=function(I){var re=B.transition;B.transition={};try{I()}finally{B.transition=re}},ft.unstable_act=ae,ft.useCallback=function(I,re){return ue.current.useCallback(I,re)},ft.useContext=function(I){return ue.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ue.current.useDeferredValue(I)},ft.useEffect=function(I,re){return ue.current.useEffect(I,re)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(I,re,Ne){return ue.current.useImperativeHandle(I,re,Ne)},ft.useInsertionEffect=function(I,re){return ue.current.useInsertionEffect(I,re)},ft.useLayoutEffect=function(I,re){return ue.current.useLayoutEffect(I,re)},ft.useMemo=function(I,re){return ue.current.useMemo(I,re)},ft.useReducer=function(I,re,Ne){return ue.current.useReducer(I,re,Ne)},ft.useRef=function(I){return ue.current.useRef(I)},ft.useState=function(I){return ue.current.useState(I)},ft.useSyncExternalStore=function(I,re,Ne){return ue.current.useSyncExternalStore(I,re,Ne)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var gp;function Uf(){return gp||(gp=1,cc.exports=X_()),cc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function j_(){if(_p)return Ao;_p=1;var s=Uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return Ao.Fragment=n,Ao.jsx=d,Ao.jsxs=d,Ao}var vp;function q_(){return vp||(vp=1,uc.exports=j_()),uc.exports}var ne=q_(),Ct=Uf();const Y_=Lm(Ct);var Xa={},fc={exports:{}},An={},dc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function $_(){return xp||(xp=1,(function(s){function e(B,le){var ae=B.length;B.push(le);e:for(;0<ae;){var I=ae-1>>>1,re=B[I];if(0<a(re,le))B[I]=le,B[ae]=re,ae=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],ae=B.pop();if(ae!==le){B[0]=ae;e:for(var I=0,re=B.length,Ne=re>>>1;I<Ne;){var K=2*(I+1)-1,fe=B[K],Ee=K+1,xe=B[Ee];if(0>a(fe,ae))Ee<re&&0>a(xe,fe)?(B[I]=xe,B[Ee]=ae,I=Ee):(B[I]=fe,B[K]=ae,I=K);else if(Ee<re&&0>a(xe,ae))B[I]=xe,B[Ee]=ae,I=Ee;else break e}}return le}function a(B,le){var ae=B.sortIndex-le.sortIndex;return ae!==0?ae:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var h=[],m=[],_=1,v=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(m)}}function C(B){if(w=!1,L(B),!T)if(n(h)!==null)T=!0,oe(q);else{var le=n(m);le!==null&&ue(C,le.startTime-B)}}function q(B,le){T=!1,w&&(w=!1,g(W),W=-1),S=!0;var ae=x;try{for(L(le),v=n(h);v!==null&&(!(v.expirationTime>le)||B&&!k());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var re=I(v.expirationTime<=le);le=s.unstable_now(),typeof re=="function"?v.callback=re:v===n(h)&&r(h),L(le)}else r(h);v=n(h)}if(v!==null)var Ne=!0;else{var K=n(m);K!==null&&ue(C,K.startTime-le),Ne=!1}return Ne}finally{v=null,x=ae,S=!1}}var O=!1,U=null,W=-1,b=5,R=-1;function k(){return!(s.unstable_now()-R<b)}function ie(){if(U!==null){var B=s.unstable_now();R=B;var le=!0;try{le=U(!0,B)}finally{le?Z():(O=!1,U=null)}}else O=!1}var Z;if(typeof N=="function")Z=function(){N(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=ie,Z=function(){de.postMessage(null)}}else Z=function(){y(ie,0)};function oe(B){U=B,O||(O=!0,Z())}function ue(B,le){W=y(function(){B(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var ae=x;x=le;try{return B()}finally{x=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=x;x=B;try{return le()}finally{x=ae}},s.unstable_scheduleCallback=function(B,le,ae){var I=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?I+ae:I):ae=I,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,B={id:_++,callback:le,priorityLevel:B,startTime:ae,expirationTime:re,sortIndex:-1},ae>I?(B.sortIndex=ae,e(m,B),n(h)===null&&B===n(m)&&(w?(g(W),W=-1):w=!0,ue(C,ae-I))):(B.sortIndex=re,e(h,B),T||S||(T=!0,oe(q))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var le=x;return function(){var ae=x;x=le;try{return B.apply(this,arguments)}finally{x=ae}}}})(hc)),hc}var yp;function K_(){return yp||(yp=1,dc.exports=$_()),dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Z_(){if(Sp)return An;Sp=1;var s=Uf(),e=K_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,I;function re(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ne=!1;function K(t,i){if(!t||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,D=p.length-1;1<=M&&0<=D&&c[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==p[D]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=D);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function fe(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case W:return"StrictMode";case Z:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function me(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,se=null,pe=null;function Le(t){if(t=co(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),Re(t.stateNode,t.type,i))}}function Pe(t){se?pe?pe.push(t):pe=[t]:se=t}function rt(){if(se){var t=se,i=pe;if(pe=se=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Nt(t,i){return t(i)}function Xt(){}var _t=!1;function xn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Nt(t,i,o)}finally{_t=!1,(se!==null||pe!==null)&&(Xt(),rt())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var l=oa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $r=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{$r=!1}function Si(t,i,o,l,c,p,M,D,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var Mi=!1,Sr=null,Mr=!1,Wi=null,zo={onError:function(t){Mi=!0,Sr=t}};function Kr(t,i,o,l,c,p,M,D,F){Mi=!1,Sr=null,Si.apply(zo,arguments)}function Ho(t,i,o,l,c,p,M,D,F){if(Kr.apply(this,arguments),Mi){if(Mi){var J=Sr;Mi=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Wi=J)}}function ci(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Go(t){if(ci(t)!==t)throw Error(n(188))}function Ll(t){var i=t.alternate;if(!i){if(i=ci(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return Go(c),t;if(p===l)return Go(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=p;break}if(D===l){M=!0,l=c,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=c;break}if(D===l){M=!0,l=p,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Ll(t),t!==null?V(t):null}function V(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=V(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,G=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Mt=null,pt=null;function sn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,je=Math.log,$n=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(je(t)/$n|0)|0}var on=64,Kn=4194304;function jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=jt(D):(p&=M,p!==0&&(l=jt(p)))}else M=o&~c,M!==0?l=jt(M):p!==0&&(l=jt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-st(p),D=1<<M,F=c[M];F===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Pt(D,i)):F<=i&&(t.expiredLanes|=D),p&=~D}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function Bn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function yn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Wo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function Dl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var At=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Yf,Nl,$f,Kf,Zf,Il=!1,Xo=[],Xi=null,ji=null,qi=null,Ys=new Map,$s=new Map,Yi=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(i.pointerId)}}function Ks(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=co(i),i!==null&&Nl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function pg(t,i,o,l,c){switch(i){case"focusin":return Xi=Ks(Xi,t,i,o,l,c),!0;case"dragenter":return ji=Ks(ji,t,i,o,l,c),!0;case"mouseover":return qi=Ks(qi,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return Ys.set(p,Ks(Ys.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,$s.set(p,Ks($s.get(p)||null,t,i,o,l,c)),!0}return!1}function Jf(t){var i=Er(t.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=Vo(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Fl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Et=l,o.target.dispatchEvent(l),Et=null}else return i=co(o),i!==null&&Nl(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){jo(t)&&o.delete(i)}function mg(){Il=!1,Xi!==null&&jo(Xi)&&(Xi=null),ji!==null&&jo(ji)&&(ji=null),qi!==null&&jo(qi)&&(qi=null),Ys.forEach(ed),$s.forEach(ed)}function Zs(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function Qs(t){function i(c){return Zs(c,t)}if(0<Xo.length){Zs(Xo[0],t);for(var o=1;o<Xo.length;o++){var l=Xo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Zs(Xi,t),ji!==null&&Zs(ji,t),qi!==null&&Zs(qi,t),Ys.forEach(i),$s.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&Yi.shift()}var Zr=C.ReactCurrentBatchConfig,qo=!0;function gg(t,i,o,l){var c=At,p=Zr.transition;Zr.transition=null;try{At=1,Ul(t,i,o,l)}finally{At=c,Zr.transition=p}}function _g(t,i,o,l){var c=At,p=Zr.transition;Zr.transition=null;try{At=4,Ul(t,i,o,l)}finally{At=c,Zr.transition=p}}function Ul(t,i,o,l){if(qo){var c=Fl(t,i,o,l);if(c===null)Jl(t,i,l,Yo,o),Qf(t,l);else if(pg(c,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<hg.indexOf(t)){for(;c!==null;){var p=co(c);if(p!==null&&Yf(p),p=Fl(t,i,o,l),p===null&&Jl(t,i,l,Yo,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else Jl(t,i,l,null,o)}}var Yo=null;function Fl(t,i,o,l){if(Yo=null,t=H(l),t=Er(t),t!==null)if(i=ci(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Yo=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var $i=null,Ol=null,$o=null;function nd(){if($o)return $o;var t,i=Ol,o=i.length,l,c="value"in $i?$i.value:$i.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return $o=c.slice(t,1<l?1-l:void 0)}function Ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function id(){return!1}function Dn(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Zo:id,this.isPropagationStopped=id,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Dn(Qr),Js=ae({},Qr,{view:0,detail:0}),vg=Dn(Js),Bl,zl,eo,Qo=ae({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Bl=t.screenX-eo.screenX,zl=t.screenY-eo.screenY):zl=Bl=0,eo=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),rd=Dn(Qo),xg=ae({},Qo,{dataTransfer:0}),yg=Dn(xg),Sg=ae({},Js,{relatedTarget:0}),Hl=Dn(Sg),Mg=ae({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=Dn(Mg),Tg=ae({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=Dn(Tg),Ag=ae({},Qr,{data:0}),sd=Dn(Ag),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=bg[t])?!!i[t]:!1}function Vl(){return Pg}var Lg=ae({},Js,{key:function(t){if(t.key){var i=Cg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dg=Dn(Lg),Ng=ae({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Dn(Ng),Ig=ae({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Ug=Dn(Ig),Fg=ae({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Dn(Fg),kg=ae({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bg=Dn(kg),zg=[9,13,27,32],Gl=f&&"CompositionEvent"in window,to=null;f&&"documentMode"in document&&(to=document.documentMode);var Hg=f&&"TextEvent"in window&&!to,ad=f&&(!Gl||to&&8<to&&11>=to),ld=" ",ud=!1;function cd(t,i){switch(t){case"keyup":return zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Vg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return t=i.data,t===ld&&ud?null:t;default:return null}}function Gg(t,i){if(Jr)return t==="compositionend"||!Gl&&cd(t,i)?(t=nd(),$o=Ol=$i=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wg[t.type]:i==="textarea"}function hd(t,i,o,l){Pe(l),i=ia(i,"onChange"),0<i.length&&(o=new kl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var no=null,io=null;function Xg(t){Ld(t,0)}function Jo(t){var i=rs(t);if(ht(i))return t}function jg(t,i){if(t==="change")return i}var pd=!1;if(f){var Wl;if(f){var Xl="oninput"in document;if(!Xl){var md=document.createElement("div");md.setAttribute("oninput","return;"),Xl=typeof md.oninput=="function"}Wl=Xl}else Wl=!1;pd=Wl&&(!document.documentMode||9<document.documentMode)}function gd(){no&&(no.detachEvent("onpropertychange",_d),io=no=null)}function _d(t){if(t.propertyName==="value"&&Jo(io)){var i=[];hd(i,io,t,H(t)),xn(Xg,i)}}function qg(t,i,o){t==="focusin"?(gd(),no=i,io=o,no.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Yg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(io)}function $g(t,i){if(t==="click")return Jo(i)}function Kg(t,i){if(t==="input"||t==="change")return Jo(i)}function Zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Zg;function ro(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Qg(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=xd(o,p);var M=xd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jg=f&&"documentMode"in document&&11>=document.documentMode,es=null,ql=null,so=null,Yl=!1;function Md(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yl||es==null||es!==Lt(l)||(l=es,"selectionStart"in l&&jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=ia(ql,"onSelect"),0<l.length&&(i=new kl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function ea(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},$l={},Ed={};f&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ta(t){if($l[t])return $l[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return $l[t]=i[o];return t}var Td=ta("animationend"),wd=ta("animationiteration"),Ad=ta("animationstart"),Cd=ta("transitionend"),Rd=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Rd.set(t,i),u(i,[t])}for(var Kl=0;Kl<bd.length;Kl++){var Zl=bd[Kl],e_=Zl.toLowerCase(),t_=Zl[0].toUpperCase()+Zl.slice(1);Ki(e_,"on"+t_)}Ki(Td,"onAnimationEnd"),Ki(wd,"onAnimationIteration"),Ki(Ad,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ho(l,i,void 0,t),t.currentTarget=null}function Ld(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],F=D.instance,J=D.currentTarget;if(D=D.listener,F!==p&&c.isPropagationStopped())break e;Pd(c,D,J),p=F}else for(M=0;M<l.length;M++){if(D=l[M],F=D.instance,J=D.currentTarget,D=D.listener,F!==p&&c.isPropagationStopped())break e;Pd(c,D,J),p=F}}}if(Mr)throw t=Wi,Mr=!1,Wi=null,t}function It(t,i){var o=i[su];o===void 0&&(o=i[su]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function Ql(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[na]){t[na]=!0,r.forEach(function(o){o!=="selectionchange"&&(n_.has(o)||Ql(o,!1,t),Ql(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,Ql("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(td(i)){case 1:var c=gg;break;case 4:c=_g;break;default:c=Ul}o=c.bind(null,i,o,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Jl(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(F=M.tag,F===5||F===6){l=p=M;continue e}D=D.parentNode}}l=l.return}xn(function(){var J=p,ve=H(o),ye=[];e:{var ge=Rd.get(t);if(ge!==void 0){var De=kl,Be=t;switch(t){case"keypress":if(Ko(o)===0)break e;case"keydown":case"keyup":De=Dg;break;case"focusin":Be="focus",De=Hl;break;case"focusout":Be="blur",De=Hl;break;case"beforeblur":case"afterblur":De=Hl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Ug;break;case Td:case wd:case Ad:De=Eg;break;case Cd:De=Og;break;case"scroll":De=vg;break;case"wheel":De=Bg;break;case"copy":case"cut":case"paste":De=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=od}var He=(i&4)!==0,Vt=!He&&t==="scroll",j=He?ge!==null?ge+"Capture":null:ge;He=[];for(var z=J,Y;z!==null;){Y=z;var Te=Y.stateNode;if(Y.tag===5&&Te!==null&&(Y=Te,j!==null&&(Te=pn(z,j),Te!=null&&He.push(lo(z,Te,Y)))),Vt)break;z=z.return}0<He.length&&(ge=new De(ge,Be,null,o,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&o!==Et&&(Be=o.relatedTarget||o.fromElement)&&(Er(Be)||Be[Ti]))break e;if((De||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(Be=o.relatedTarget||o.toElement,De=J,Be=Be?Er(Be):null,Be!==null&&(Vt=ci(Be),Be!==Vt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=J),De!==Be)){if(He=rd,Te="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=od,Te="onPointerLeave",j="onPointerEnter",z="pointer"),Vt=De==null?ge:rs(De),Y=Be==null?ge:rs(Be),ge=new He(Te,z+"leave",De,o,ve),ge.target=Vt,ge.relatedTarget=Y,Te=null,Er(ve)===J&&(He=new He(j,z+"enter",Be,o,ve),He.target=Y,He.relatedTarget=Vt,Te=He),Vt=Te,De&&Be)t:{for(He=De,j=Be,z=0,Y=He;Y;Y=ns(Y))z++;for(Y=0,Te=j;Te;Te=ns(Te))Y++;for(;0<z-Y;)He=ns(He),z--;for(;0<Y-z;)j=ns(j),Y--;for(;z--;){if(He===j||j!==null&&He===j.alternate)break t;He=ns(He),j=ns(j)}He=null}else He=null;De!==null&&Nd(ye,ge,De,He,!1),Be!==null&&Vt!==null&&Nd(ye,Vt,Be,He,!0)}}e:{if(ge=J?rs(J):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var Xe=jg;else if(dd(ge))if(pd)Xe=Kg;else{Xe=Yg;var $e=qg}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=$g);if(Xe&&(Xe=Xe(t,J))){hd(ye,Xe,o,ve);break e}$e&&$e(t,ge,J),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch($e=J?rs(J):window,t){case"focusin":(dd($e)||$e.contentEditable==="true")&&(es=$e,ql=J,so=null);break;case"focusout":so=ql=es=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Md(ye,o,ve);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Md(ye,o,ve)}var Ke;if(Gl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Jr?cd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(ad&&o.locale!=="ko"&&(Jr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Jr&&(Ke=nd()):($i=ve,Ol="value"in $i?$i.value:$i.textContent,Jr=!0)),$e=ia(J,tt),0<$e.length&&(tt=new sd(tt,t,null,o,ve),ye.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=fd(o),Ke!==null&&(tt.data=Ke)))),(Ke=Hg?Vg(t,o):Gg(t,o))&&(J=ia(J,"onBeforeInput"),0<J.length&&(ve=new sd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:J}),ve.data=Ke))}Ld(ye,i)})}function lo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ia(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=pn(t,o),p!=null&&l.unshift(lo(t,p,c)),p=pn(t,i),p!=null&&l.push(lo(t,p,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,F=D.alternate,J=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&J!==null&&(D=J,c?(F=pn(o,p),F!=null&&M.unshift(lo(o,F,D))):c||(F=pn(o,p),F!=null&&M.push(lo(o,F,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(i_,`
`).replace(r_,"")}function ra(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function sa(){}var eu=null,tu=null;function nu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(a_)}:iu;function a_(t){setTimeout(function(){throw t})}function ru(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Qs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Qs(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),di="__reactFiber$"+is,uo="__reactProps$"+is,Ti="__reactContainer$"+is,su="__reactEvents$"+is,l_="__reactListeners$"+is,u_="__reactHandles$"+is;function Er(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[di])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function co(t){return t=t[di]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[uo]||null}var ou=[],ss=-1;function Qi(t){return{current:t}}function Ut(t){0>ss||(t.current=ou[ss],ou[ss]=null,ss--)}function Dt(t,i){ss++,ou[ss]=t.current,t.current=i}var Ji={},an=Qi(Ji),Sn=Qi(!1),Tr=Ji;function os(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Mn(t){return t=t.childContextTypes,t!=null}function aa(){Ut(Sn),Ut(an)}function Od(t,i,o){if(an.current!==Ji)throw Error(n(168));Dt(an,i),Dt(Sn,o)}function kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return ae({},o,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=an.current,Dt(an,t),Dt(Sn,Sn.current),!0}function Bd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=kd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,Ut(Sn),Ut(an),Dt(an,t)):Ut(Sn),Dt(Sn,o)}var wi=null,ua=!1,au=!1;function zd(t){wi===null?wi=[t]:wi.push(t)}function c_(t){ua=!0,zd(t)}function er(){if(!au&&wi!==null){au=!0;var t=0,i=At;try{var o=wi;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,ua=!1}catch(c){throw wi!==null&&(wi=wi.slice(t+1)),ee(ze,er),c}finally{At=i,au=!1}}return null}var as=[],ls=0,ca=null,fa=0,zn=[],Hn=0,wr=null,Ai=1,Ci="";function Ar(t,i){as[ls++]=fa,as[ls++]=ca,ca=t,fa=i}function Hd(t,i,o){zn[Hn++]=Ai,zn[Hn++]=Ci,zn[Hn++]=wr,wr=t;var l=Ai;t=Ci;var c=32-st(l)-1;l&=~(1<<c),o+=1;var p=32-st(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-st(i)+c|o<<c|l,Ci=p+t}else Ai=1<<p|o<<c|l,Ci=t}function lu(t){t.return!==null&&(Ar(t,1),Hd(t,1,0))}function uu(t){for(;t===ca;)ca=as[--ls],as[ls]=null,fa=as[--ls],as[ls]=null;for(;t===wr;)wr=zn[--Hn],zn[Hn]=null,Ci=zn[--Hn],zn[Hn]=null,Ai=zn[--Hn],zn[Hn]=null}var Nn=null,In=null,Ft=!1,Qn=null;function Vd(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,In=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,In=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fu(t){if(Ft){var i=In;if(i){var o=i;if(!Gd(t,i)){if(cu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Nn;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(cu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function da(t){if(t!==Nn)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!nu(t.type,t.memoizedProps)),i&&(i=In)){if(cu(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=Zi(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Nn?Zi(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=In;t;)t=Zi(t.nextSibling)}function us(){In=Nn=null,Ft=!1}function du(t){Qn===null?Qn=[t]:Qn.push(t)}var f_=C.ReactCurrentBatchConfig;function fo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=c.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function jd(t){var i=t._init;return i(t._payload)}function qd(t){function i(j,z){if(t){var Y=j.deletions;Y===null?(j.deletions=[z],j.flags|=16):Y.push(z)}}function o(j,z){if(!t)return null;for(;z!==null;)i(j,z),z=z.sibling;return null}function l(j,z){for(j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function c(j,z){return j=lr(j,z),j.index=0,j.sibling=null,j}function p(j,z,Y){return j.index=Y,t?(Y=j.alternate,Y!==null?(Y=Y.index,Y<z?(j.flags|=2,z):Y):(j.flags|=2,z)):(j.flags|=1048576,z)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,z,Y,Te){return z===null||z.tag!==6?(z=ic(Y,j.mode,Te),z.return=j,z):(z=c(z,Y),z.return=j,z)}function F(j,z,Y,Te){var Xe=Y.type;return Xe===U?ve(j,z,Y.props.children,Te,Y.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&jd(Xe)===z.type)?(Te=c(z,Y.props),Te.ref=fo(j,z,Y),Te.return=j,Te):(Te=Oa(Y.type,Y.key,Y.props,null,j.mode,Te),Te.ref=fo(j,z,Y),Te.return=j,Te)}function J(j,z,Y,Te){return z===null||z.tag!==4||z.stateNode.containerInfo!==Y.containerInfo||z.stateNode.implementation!==Y.implementation?(z=rc(Y,j.mode,Te),z.return=j,z):(z=c(z,Y.children||[]),z.return=j,z)}function ve(j,z,Y,Te,Xe){return z===null||z.tag!==7?(z=Ir(Y,j.mode,Te,Xe),z.return=j,z):(z=c(z,Y),z.return=j,z)}function ye(j,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number")return z=ic(""+z,j.mode,Y),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return Y=Oa(z.type,z.key,z.props,null,j.mode,Y),Y.ref=fo(j,null,z),Y.return=j,Y;case O:return z=rc(z,j.mode,Y),z.return=j,z;case oe:var Te=z._init;return ye(j,Te(z._payload),Y)}if(qe(z)||le(z))return z=Ir(z,j.mode,Y,null),z.return=j,z;ha(j,z)}return null}function ge(j,z,Y,Te){var Xe=z!==null?z.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Xe!==null?null:D(j,z,""+Y,Te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:return Y.key===Xe?F(j,z,Y,Te):null;case O:return Y.key===Xe?J(j,z,Y,Te):null;case oe:return Xe=Y._init,ge(j,z,Xe(Y._payload),Te)}if(qe(Y)||le(Y))return Xe!==null?null:ve(j,z,Y,Te,null);ha(j,Y)}return null}function De(j,z,Y,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return j=j.get(Y)||null,D(z,j,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case q:return j=j.get(Te.key===null?Y:Te.key)||null,F(z,j,Te,Xe);case O:return j=j.get(Te.key===null?Y:Te.key)||null,J(z,j,Te,Xe);case oe:var $e=Te._init;return De(j,z,Y,$e(Te._payload),Xe)}if(qe(Te)||le(Te))return j=j.get(Y)||null,ve(z,j,Te,Xe,null);ha(z,Te)}return null}function Be(j,z,Y,Te){for(var Xe=null,$e=null,Ke=z,tt=z=0,Jt=null;Ke!==null&&tt<Y.length;tt++){Ke.index>tt?(Jt=Ke,Ke=null):Jt=Ke.sibling;var St=ge(j,Ke,Y[tt],Te);if(St===null){Ke===null&&(Ke=Jt);break}t&&Ke&&St.alternate===null&&i(j,Ke),z=p(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=Jt}if(tt===Y.length)return o(j,Ke),Ft&&Ar(j,tt),Xe;if(Ke===null){for(;tt<Y.length;tt++)Ke=ye(j,Y[tt],Te),Ke!==null&&(z=p(Ke,z,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Ar(j,tt),Xe}for(Ke=l(j,Ke);tt<Y.length;tt++)Jt=De(Ke,j,tt,Y[tt],Te),Jt!==null&&(t&&Jt.alternate!==null&&Ke.delete(Jt.key===null?tt:Jt.key),z=p(Jt,z,tt),$e===null?Xe=Jt:$e.sibling=Jt,$e=Jt);return t&&Ke.forEach(function(ur){return i(j,ur)}),Ft&&Ar(j,tt),Xe}function He(j,z,Y,Te){var Xe=le(Y);if(typeof Xe!="function")throw Error(n(150));if(Y=Xe.call(Y),Y==null)throw Error(n(151));for(var $e=Xe=null,Ke=z,tt=z=0,Jt=null,St=Y.next();Ke!==null&&!St.done;tt++,St=Y.next()){Ke.index>tt?(Jt=Ke,Ke=null):Jt=Ke.sibling;var ur=ge(j,Ke,St.value,Te);if(ur===null){Ke===null&&(Ke=Jt);break}t&&Ke&&ur.alternate===null&&i(j,Ke),z=p(ur,z,tt),$e===null?Xe=ur:$e.sibling=ur,$e=ur,Ke=Jt}if(St.done)return o(j,Ke),Ft&&Ar(j,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=Y.next())St=ye(j,St.value,Te),St!==null&&(z=p(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Ft&&Ar(j,tt),Xe}for(Ke=l(j,Ke);!St.done;tt++,St=Y.next())St=De(Ke,j,tt,St.value,Te),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),z=p(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(W_){return i(j,W_)}),Ft&&Ar(j,tt),Xe}function Vt(j,z,Y,Te){if(typeof Y=="object"&&Y!==null&&Y.type===U&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:e:{for(var Xe=Y.key,$e=z;$e!==null;){if($e.key===Xe){if(Xe=Y.type,Xe===U){if($e.tag===7){o(j,$e.sibling),z=c($e,Y.props.children),z.return=j,j=z;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&jd(Xe)===$e.type){o(j,$e.sibling),z=c($e,Y.props),z.ref=fo(j,$e,Y),z.return=j,j=z;break e}o(j,$e);break}else i(j,$e);$e=$e.sibling}Y.type===U?(z=Ir(Y.props.children,j.mode,Te,Y.key),z.return=j,j=z):(Te=Oa(Y.type,Y.key,Y.props,null,j.mode,Te),Te.ref=fo(j,z,Y),Te.return=j,j=Te)}return M(j);case O:e:{for($e=Y.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===Y.containerInfo&&z.stateNode.implementation===Y.implementation){o(j,z.sibling),z=c(z,Y.children||[]),z.return=j,j=z;break e}else{o(j,z);break}else i(j,z);z=z.sibling}z=rc(Y,j.mode,Te),z.return=j,j=z}return M(j);case oe:return $e=Y._init,Vt(j,z,$e(Y._payload),Te)}if(qe(Y))return Be(j,z,Y,Te);if(le(Y))return He(j,z,Y,Te);ha(j,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,z!==null&&z.tag===6?(o(j,z.sibling),z=c(z,Y),z.return=j,j=z):(o(j,z),z=ic(Y,j.mode,Te),z.return=j,j=z),M(j)):o(j,z)}return Vt}var cs=qd(!0),Yd=qd(!1),pa=Qi(null),ma=null,fs=null,hu=null;function pu(){hu=fs=ma=null}function mu(t){var i=pa.current;Ut(pa),t._currentValue=i}function gu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){ma=t,hu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(En=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ma===null)throw Error(n(308));fs=t,ma.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Cr=null;function _u(t){Cr===null?Cr=[t]:Cr.push(t)}function $d(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,_u(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,_u(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function ga(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function _a(t,i,o,l){var c=t.updateQueue;tr=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,J=F.next;F.next=null,M===null?p=J:M.next=J,M=F;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==M&&(D===null?ve.firstBaseUpdate=J:D.next=J,ve.lastBaseUpdate=F))}if(p!==null){var ye=c.baseState;M=0,ve=J=F=null,D=p;do{var ge=D.lane,De=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=t,He=D;switch(ge=i,De=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(De,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(De,ye,ge):Be,ge==null)break e;ye=ae({},ye,ge);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(J=ve=De,F=ye):ve=ve.next=De,M|=ge;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(F=ye),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=ye}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var ho={},hi=Qi(ho),po=Qi(ho),mo=Qi(ho);function Rr(t){if(t===ho)throw Error(n(174));return t}function xu(t,i){switch(Dt(mo,i),Dt(po,t),Dt(hi,ho),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Ut(hi),Dt(hi,i)}function hs(){Ut(hi),Ut(po),Ut(mo)}function Jd(t){Rr(mo.current);var i=Rr(hi.current),o=Ve(i,t.type);i!==o&&(Dt(po,t),Dt(hi,o))}function yu(t){po.current===t&&(Ut(hi),Ut(po))}var Ot=Qi(0);function va(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Su=[];function Mu(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var xa=C.ReactCurrentDispatcher,Eu=C.ReactCurrentBatchConfig,br=0,kt=null,qt=null,Zt=null,ya=!1,go=!1,_o=0,d_=0;function ln(){throw Error(n(321))}function Tu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function wu(t,i,o,l,c,p){if(br=p,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?g_:__,t=o(l,c),go){p=0;do{if(go=!1,_o=0,25<=p)throw Error(n(301));p+=1,Zt=qt=null,i.updateQueue=null,xa.current=v_,t=o(l,c)}while(go)}if(xa.current=Ea,i=qt!==null&&qt.next!==null,br=0,Zt=qt=kt=null,ya=!1,i)throw Error(n(300));return t}function Au(){var t=_o!==0;return _o=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Gn(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Zt===null?kt.memoizedState:Zt.next;if(i!==null)Zt=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function vo(t,i){return typeof i=="function"?i(t):i}function Cu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var D=M=null,F=null,J=p;do{var ve=J.lane;if((br&ve)===ve)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var ye={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(D=F=ye,M=l):F=F.next=ye,kt.lanes|=ve,Pr|=ve}J=J.next}while(J!==null&&J!==p);F===null?M=l:F.next=D,Zn(l,i.memoizedState)||(En=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,kt.lanes|=p,Pr|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ru(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Zn(p,i.memoizedState)||(En=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function eh(){}function th(t,i){var o=kt,l=Gn(),c=i(),p=!Zn(l.memoizedState,c);if(p&&(l.memoizedState=c,En=!0),l=l.queue,bu(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,xo(9,ih.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(br&30)!==0||nh(o,i,c)}return c}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function oh(t){var i=Ri(t,1);i!==null&&ni(i,t,1,-1)}function ah(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=m_.bind(null,kt,t),[i.memoizedState,t]}function xo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Gn().memoizedState}function Sa(t,i,o,l){var c=pi();kt.flags|=t,c.memoizedState=xo(1|i,o,void 0,l===void 0?null:l)}function Ma(t,i,o,l){var c=Gn();l=l===void 0?null:l;var p=void 0;if(qt!==null){var M=qt.memoizedState;if(p=M.destroy,l!==null&&Tu(l,M.deps)){c.memoizedState=xo(i,o,p,l);return}}kt.flags|=t,c.memoizedState=xo(1|i,o,p,l)}function uh(t,i){return Sa(8390656,8,t,i)}function bu(t,i){return Ma(2048,8,t,i)}function ch(t,i){return Ma(4,2,t,i)}function fh(t,i){return Ma(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4,4,dh.bind(null,i,t),o)}function Pu(){}function ph(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=o):(Zn(o,i)||(o=mn(),kt.lanes|=o,Pr|=o,t.baseState=!0),i)}function h_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=Eu.transition;Eu.transition={};try{t(!1),i()}finally{At=o,Eu.transition=l}}function _h(){return Gn().memoizedState}function p_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var c=_n();ni(o,t,l,c),yh(o,i,l)}}function m_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(c.hasEagerState=!0,c.eagerState=D,Zn(D,M)){var F=i.interleaved;F===null?(c.next=c,_u(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=$d(t,i,c,l),o!==null&&(c=_n(),ni(o,t,l,c),yh(o,i,l))}}function vh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function xh(t,i){go=ya=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Dl(t,o)}}var Ea={readContext:Vn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},g_={readContext:Vn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:uh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Sa(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Sa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Sa(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=pi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=p_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Pu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=h_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=pi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(br&30)!==0||nh(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,uh(rh.bind(null,l,p,t),[t]),l.flags|=2048,xo(9,ih.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=pi(),i=Qt.identifierPrefix;if(Ft){var o=Ci,l=Ai;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=_o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=d_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},__={readContext:Vn,useCallback:ph,useContext:Vn,useEffect:bu,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Cu,useRef:lh,useState:function(){return Cu(vo)},useDebugValue:Pu,useDeferredValue:function(t){var i=Gn();return gh(i,qt.memoizedState,t)},useTransition:function(){var t=Cu(vo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},v_={readContext:Vn,useCallback:ph,useContext:Vn,useEffect:bu,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Ru,useRef:lh,useState:function(){return Ru(vo)},useDebugValue:Pu,useDeferredValue:function(t){var i=Gn();return qt===null?i.memoizedState=t:gh(i,qt.memoizedState,t)},useTransition:function(){var t=Ru(vo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Lu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ae({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ta={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),c=or(t),p=bi(l,c);p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),c=or(t),p=bi(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,c),i!==null&&(ni(i,t,c,l),ga(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=or(t),c=bi(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ni(i,t,l,o),ga(i,t,l))}};function Sh(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!ro(o,l)||!ro(c,p):!0}function Mh(t,i,o){var l=!1,c=Ji,p=i.contextType;return typeof p=="object"&&p!==null?p=Vn(p):(c=Mn(i)?Tr:an.current,l=i.contextTypes,p=(l=l!=null)?os(t,c):Ji),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function Du(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},vu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=Vn(p):(p=Mn(i)?Tr:an.current,c.context=os(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Lu(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ta.enqueueReplaceState(c,c.state,null),_a(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function Nu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Iu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){La||(La=!0,$u=l),Iu(t,i)},o}function wh(t,i,o){o=bi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Iu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Iu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new x_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=N_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var y_=C.ReactCurrentOwner,En=!1;function gn(t,i,o,l){i.child=t===null?Yd(i,null,o,l):cs(i,t.child,o,l)}function bh(t,i,o,l,c){o=o.render;var p=i.ref;return ds(i,c),l=wu(t,i,o,l,p,c),o=Au(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&o&&lu(i),i.flags|=1,gn(t,i,l,c),i.child)}function Ph(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!nc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Lh(t,i,p,l,c)):(t=Oa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:ro,o(M,l)&&t.ref===i.ref)return Pi(t,i,c)}return i.flags|=1,t=lr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Lh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(ro(p,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,Pi(t,i,c)}return Uu(t,i,o,l,c)}function Dh(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(gs,Un),Un|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(gs,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Dt(gs,Un),Un|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Dt(gs,Un),Un|=l;return gn(t,i,c,o),i.child}function Nh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,o,l,c){var p=Mn(o)?Tr:an.current;return p=os(i,p),ds(i,c),o=wu(t,i,o,l,p,c),l=Au(),t!==null&&!En?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Pi(t,i,c)):(Ft&&l&&lu(i),i.flags|=1,gn(t,i,o,c),i.child)}function Ih(t,i,o,l,c){if(Mn(o)){var p=!0;la(i)}else p=!1;if(ds(i,c),i.stateNode===null)Aa(t,i),Mh(i,o,l),Du(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var F=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Vn(J):(J=Mn(o)?Tr:an.current,J=os(i,J));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||F!==J)&&Eh(i,M,l,J),tr=!1;var ge=i.memoizedState;M.state=ge,_a(i,l,M,c),F=i.memoizedState,D!==l||ge!==F||Sn.current||tr?(typeof ve=="function"&&(Lu(i,o,ve,l),F=i.memoizedState),(D=tr||Sh(i,o,D,l,ge,F,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=J,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Kd(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:Jn(i.type,D),M.props=J,ye=i.pendingProps,ge=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Vn(F):(F=Mn(o)?Tr:an.current,F=os(i,F));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==F)&&Eh(i,M,l,F),tr=!1,ge=i.memoizedState,M.state=ge,_a(i,l,M,c);var Be=i.memoizedState;D!==ye||ge!==Be||Sn.current||tr?(typeof De=="function"&&(Lu(i,o,De,l),Be=i.memoizedState),(J=tr||Sh(i,o,J,l,ge,Be,F)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=F,l=J):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Fu(t,i,o,l,p,c)}function Fu(t,i,o,l,c,p){Nh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Bd(i,o,!1),Pi(t,i,p);l=i.stateNode,y_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,p),i.child=cs(i,null,D,p)):gn(t,i,D,p),i.memoizedState=l.state,c&&Bd(i,o,!0),i.child}function Uh(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),xu(t,i.containerInfo)}function Fh(t,i,o,l,c){return us(),du(c),i.flags|=256,gn(t,i,o,l),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,c=Ot.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Ot,c&1),t===null)return fu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=ka(M,l,0,null),t=Ir(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ku(o),i.memoizedState=Ou,t):Bu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return S_(t,i,M,l,D,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=lr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?p=lr(D,p):(p=Ir(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?ku(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Ou,l}return p=t.child,t=p.sibling,l=lr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Bu(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,o,l){return l!==null&&du(l),cs(i,t.child,null,o),t=Bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S_(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Nu(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),p=Ir(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=ku(M),i.memoizedState=Ou,p);if((i.mode&1)===0)return wa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Nu(p,l,void 0),wa(t,i,M,l)}if(D=(M&t.childLanes)!==0,En||D){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Ri(t,c),ni(l,t,c,-1))}return tc(),l=Nu(Error(n(421))),wa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=I_.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,In=Zi(c.nextSibling),Nn=i,Ft=!0,Qn=null,t!==null&&(zn[Hn++]=Ai,zn[Hn++]=Ci,zn[Hn++]=wr,Ai=t.id,Ci=t.overflow,wr=i),i=Bu(i,l.children),i.flags|=4096,i)}function kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),gu(t.return,i,o)}function zu(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function Bh(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,o,i);else if(t.tag===19)kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&va(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),zu(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&va(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}zu(i,!0,o,null,p);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function M_(t,i,o){switch(i.tag){case 3:Uh(i),us();break;case 5:Jd(i);break;case 1:Mn(i.type)&&la(i);break;case 4:xu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(pa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(Dt(Ot,Ot.current&1),t=Pi(t,i,o),t!==null?t.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Bh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return Pi(t,i,o)}var zh,Hu,Hh,Vh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Hu=function(){},Hh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(hi.current);var p=null;switch(o){case"input":c=X(t,c),l=X(t,l),p=[];break;case"select":c=ae({},c,{value:void 0}),l=ae({},l,{value:void 0}),p=[];break;case"textarea":c=E(t,c),l=E(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}ct(o,l);var M;o=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var D=c[J];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?p||(p=[]):(p=p||[]).push(J,null));for(J in l){var F=l[J];if(D=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&F!==D&&(F!=null||D!=null))if(J==="style")if(D){for(M in D)!D.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&D[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(p||(p=[]),p.push(J,o)),o=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(p=p||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(p=p||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&It("scroll",t),p||D===F||(p=[])):(p=p||[]).push(J,F))}o&&(p=p||[]).push("style",o);var J=p;(i.updateQueue=J)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function yo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function E_(t,i,o){var l=i.pendingProps;switch(uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return Mn(i.type)&&aa(),un(i),null;case 3:return l=i.stateNode,hs(),Ut(Sn),Ut(an),Mu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Qu(Qn),Qn=null))),Hu(t,i),un(i),null;case 5:yu(i);var c=Rr(mo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Rr(hi.current),da(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[di]=i,l[uo]=p,t=(i.mode&1)!==0,o){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(c=0;c<oo.length;c++)It(oo[c],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":hn(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":$(l,p),It("invalid",l)}ct(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ra(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ra(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&It("scroll",l)}switch(o){case"input":Rt(l),Ye(l,p,!0);break;case"textarea":Rt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=sa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[di]=i,t[uo]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":It("cancel",t),It("close",t),c=l;break;case"iframe":case"object":case"embed":It("load",t),c=l;break;case"video":case"audio":for(c=0;c<oo.length;c++)It(oo[c],t);c=l;break;case"source":It("error",t),c=l;break;case"img":case"image":case"link":It("error",t),It("load",t),c=l;break;case"details":It("toggle",t),c=l;break;case"input":hn(t,l),c=X(t,l),It("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ae({},l,{value:void 0}),It("invalid",t);break;case"textarea":$(t,l),c=E(t,l),It("invalid",t);break;default:c=l}ct(o,c),D=c;for(p in D)if(D.hasOwnProperty(p)){var F=D[p];p==="style"?Je(t,F):p==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ue(t,F)):p==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(t,F):typeof F=="number"&&lt(t,""+F):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?F!=null&&p==="onScroll"&&It("scroll",t):F!=null&&L(t,p,F,M))}switch(o){case"input":Rt(t),Ye(t,l,!1);break;case"textarea":Rt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=sa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(mo.current),Rr(hi.current),da(i)){if(l=i.stateNode,o=i.memoizedProps,l[di]=i,(p=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:ra(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return un(i),null;case 13:if(Ut(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),us(),i.flags|=98560,p=!1;else if(p=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[di]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),p=!1}else Qn!==null&&(Qu(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Yt===0&&(Yt=3):tc())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return hs(),Hu(t,i),t===null&&ao(i.stateNode.containerInfo),un(i),null;case 10:return mu(i.type._context),un(i),null;case 17:return Mn(i.type)&&aa(),un(i),null;case 19:if(Ut(Ot),p=i.memoizedState,p===null)return un(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)yo(p,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=va(t),M!==null){for(i.flags|=128,yo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(Ot,Ot.current&1|2),i.child}t=t.sibling}p.tail!==null&&Me()>_s&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304)}else{if(!l)if(t=va(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),yo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ft)return un(i),null}else 2*Me()-p.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Me(),i.sibling=null,o=Ot.current,Dt(Ot,l?o&1|2:o&1),i):(un(i),null);case 22:case 23:return ec(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function T_(t,i){switch(uu(i),i.tag){case 1:return Mn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Ut(Sn),Ut(an),Mu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(Ut(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ut(Ot),null;case 4:return hs(),null;case 10:return mu(i.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var Ca=!1,cn=!1,w_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){zt(t,i,l)}else o.current=null}function Vu(t,i,o){try{o()}catch(l){zt(t,i,l)}}var Gh=!1;function A_(t,i){if(eu=qo,t=Sd(),jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,F=-1,J=0,ve=0,ye=t,ge=null;t:for(;;){for(var De;ye!==o||c!==0&&ye.nodeType!==3||(D=M+c),ye!==p||l!==0&&ye.nodeType!==3||(F=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===o&&++J===c&&(D=M),ge===p&&++ve===l&&(F=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}o=D===-1||F===-1?null:{start:D,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(tu={focusedElem:t,selectionRange:o},qo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Vt=Be.memoizedState,j=i.stateNode,z=j.getSnapshotBeforeUpdate(i.elementType===i.type?He:Jn(i.type,He),Vt);j.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){zt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=Gh,Gh=!1,Be}function So(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&Vu(i,o,p)}c=c.next}while(c!==l)}}function Ra(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Gu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[uo],delete i[su],delete i[l_],delete i[u_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Xu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Xu(t,i,o),t=t.sibling;t!==null;)Xu(t,i,o),t=t.sibling}var tn=null,ei=!1;function ir(t,i,o){for(o=o.child;o!==null;)qh(t,i,o),o=o.sibling}function qh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Mt,o)}catch{}switch(o.tag){case 5:cn||ms(o,i);case 6:var l=tn,c=ei;tn=null,ir(t,i,o),tn=l,ei=c,tn!==null&&(ei?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ei?(t=tn,o=o.stateNode,t.nodeType===8?ru(t.parentNode,o):t.nodeType===1&&ru(t,o),Qs(t)):ru(tn,o.stateNode));break;case 4:l=tn,c=ei,tn=o.stateNode.containerInfo,ei=!0,ir(t,i,o),tn=l,ei=c;break;case 0:case 11:case 14:case 15:if(!cn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Vu(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!cn&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){zt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(cn=(l=cn)||o.memoizedState!==null,ir(t,i,o),cn=l):ir(t,i,o);break;default:ir(t,i,o)}}function Yh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new w_),i.forEach(function(l){var c=U_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:tn=D.stateNode,ei=!1;break e;case 3:tn=D.stateNode.containerInfo,ei=!0;break e;case 4:tn=D.stateNode.containerInfo,ei=!0;break e}D=D.return}if(tn===null)throw Error(n(160));qh(p,M,c),tn=null,ei=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(J){zt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),mi(t),l&4){try{So(3,t,t.return),Ra(3,t)}catch(He){zt(t,t.return,He)}try{So(5,t,t.return)}catch(He){zt(t,t.return,He)}}break;case 1:ti(i,t),mi(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(ti(i,t),mi(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(He){zt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&dt(c,p),it(D,M);var J=it(D,p);for(M=0;M<F.length;M+=2){var ve=F[M],ye=F[M+1];ve==="style"?Je(c,ye):ve==="dangerouslySetInnerHTML"?Ue(c,ye):ve==="children"?lt(c,ye):L(c,ve,ye,J)}switch(D){case"input":ut(c,p);break;case"textarea":me(c,p);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?P(c,!!p.multiple,De,!1):ge!==!!p.multiple&&(p.defaultValue!=null?P(c,!!p.multiple,p.defaultValue,!0):P(c,!!p.multiple,p.multiple?[]:"",!1))}c[uo]=p}catch(He){zt(t,t.return,He)}}break;case 6:if(ti(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(He){zt(t,t.return,He)}}break;case 3:if(ti(i,t),mi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(He){zt(t,t.return,He)}break;case 4:ti(i,t),mi(t);break;case 13:ti(i,t),mi(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(Yu=Me())),l&4&&Yh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(cn=(J=cn)||ve,ti(i,t),cn=J):ti(i,t),mi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:So(4,ge,ge.return);break;case 1:ms(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){zt(l,o,He)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Qh(ye);continue}}De!==null?(De.return=ge,Fe=De):Qh(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{c=ye.stateNode,J?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Qe("display",M))}catch(He){zt(t,t.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(He){zt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,t),mi(t),l&4&&Yh(t);break;case 21:break;default:ti(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var p=jh(t);Xu(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=jh(t);Wu(t,D,M);break;default:throw Error(n(161))}}catch(F){zt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function C_(t,i,o){Fe=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ca;if(!M){var D=c.alternate,F=D!==null&&D.memoizedState!==null||cn;D=Ca;var J=cn;if(Ca=M,(cn=F)&&!J)for(Fe=c;Fe!==null;)M=Fe,F=M.child,M.tag===22&&M.memoizedState!==null?Jh(c):F!==null?(F.return=M,Fe=F):Jh(c);for(;p!==null;)Fe=p,Kh(p),p=p.sibling;Fe=c,Ca=D,cn=J}Zh(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,Fe=p):Zh(t)}}function Zh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||Ra(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Qd(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Qs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Gu(i)}catch(ge){zt(i,i.return,ge)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Qh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Jh(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ra(4,i)}catch(F){zt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){zt(i,c,F)}}var p=i.return;try{Gu(i)}catch(F){zt(i,p,F)}break;case 5:var M=i.return;try{Gu(i)}catch(F){zt(i,M,F)}}}catch(F){zt(i,i.return,F)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var R_=Math.ceil,ba=C.ReactCurrentDispatcher,ju=C.ReactCurrentOwner,Wn=C.ReactCurrentBatchConfig,vt=0,Qt=null,Gt=null,nn=0,Un=0,gs=Qi(0),Yt=0,Mo=null,Pr=0,Pa=0,qu=0,Eo=null,Tn=null,Yu=0,_s=1/0,Li=null,La=!1,$u=null,rr=null,Da=!1,sr=null,Na=0,To=0,Ku=null,Ia=-1,Ua=0;function _n(){return(vt&6)!==0?Me():Ia!==-1?Ia:Ia=Me()}function or(t){return(t.mode&1)===0?1:(vt&2)!==0&&nn!==0?nn&-nn:f_.transition!==null?(Ua===0&&(Ua=mn()),Ua):(t=At,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function ni(t,i,o,l){if(50<To)throw To=0,Ku=null,Error(n(185));yn(t,o,l),((vt&2)===0||t!==Qt)&&(t===Qt&&((vt&2)===0&&(Pa|=o),Yt===4&&ar(t,nn)),wn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(_s=Me()+500,ua&&er()))}function wn(t,i){var o=t.callbackNode;kn(t,i);var l=fi(t,t===Qt?nn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?c_(tp.bind(null,t)):zd(tp.bind(null,t)),o_(function(){(vt&6)===0&&er()}),o=null;else{switch(qf(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=up(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Ia=-1,Ua=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(vs()&&t.callbackNode!==o)return null;var l=fi(t,t===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var c=vt;vt|=2;var p=ip();(Qt!==t||nn!==i)&&(Li=null,_s=Me()+500,Dr(t,i));do try{L_();break}catch(D){np(t,D)}while(!0);pu(),ba.current=p,vt=c,Gt!==null?i=0:(Qt=null,nn=0,i=Yt)}if(i!==0){if(i===2&&(c=Ei(t),c!==0&&(l=c,i=Zu(t,c))),i===1)throw o=Mo,Dr(t,0),ar(t,l),wn(t,Me()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!b_(c)&&(i=Fa(t,l),i===2&&(p=Ei(t),p!==0&&(l=p,i=Zu(t,p))),i===1))throw o=Mo,Dr(t,0),ar(t,l),wn(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Tn,Li);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Yu+500-Me(),10<i)){if(fi(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=iu(Nr.bind(null,t,Tn,Li),i);break}Nr(t,Tn,Li);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*R_(l/1960))-l,10<l){t.timeoutHandle=iu(Nr.bind(null,t,Tn,Li),l);break}Nr(t,Tn,Li);break;case 5:Nr(t,Tn,Li);break;default:throw Error(n(329))}}}return wn(t,Me()),t.callbackNode===o?ep.bind(null,t):null}function Zu(t,i){var o=Eo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=Tn,Tn=o,i!==null&&Qu(i)),t}function Qu(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function b_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!Zn(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~qu,i&=~Pa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((vt&6)!==0)throw Error(n(327));vs();var i=fi(t,0);if((i&1)===0)return wn(t,Me()),null;var o=Fa(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=Zu(t,l))}if(o===1)throw o=Mo,Dr(t,0),ar(t,i),wn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Tn,Li),wn(t,Me()),null}function Ju(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(_s=Me()+500,ua&&er())}}function Lr(t){sr!==null&&sr.tag===0&&(vt&6)===0&&vs();var i=vt;vt|=1;var o=Wn.transition,l=At;try{if(Wn.transition=null,At=1,t)return t()}finally{At=l,Wn.transition=o,vt=i,(vt&6)===0&&er()}}function ec(){Un=gs.current,Ut(gs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,s_(o)),Gt!==null)for(o=Gt.return;o!==null;){var l=o;switch(uu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:hs(),Ut(Sn),Ut(an),Mu();break;case 5:yu(l);break;case 4:hs();break;case 13:Ut(Ot);break;case 19:Ut(Ot);break;case 10:mu(l.type._context);break;case 22:case 23:ec()}o=o.return}if(Qt=t,Gt=t=lr(t.current,null),nn=Un=i,Yt=0,Mo=null,qu=Pa=Pr=0,Tn=Eo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}Cr=null}return t}function np(t,i){do{var o=Gt;try{if(pu(),xa.current=Ea,ya){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ya=!1}if(br=0,Zt=qt=kt=null,go=!1,_o=0,ju.current=null,o===null||o.return===null){Yt=1,Mo=i,Gt=null;break}e:{var p=t,M=o.return,D=o,F=i;if(i=nn,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,ve=D,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=Ch(M);if(De!==null){De.flags&=-257,Rh(De,M,D,p,i),De.mode&1&&Ah(p,J,i),i=De,F=J;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(F),i.updateQueue=He}else Be.add(F);break e}else{if((i&1)===0){Ah(p,J,i),tc();break e}F=Error(n(426))}}else if(Ft&&D.mode&1){var Vt=Ch(M);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Rh(Vt,M,D,p,i),du(ps(F,D));break e}}p=F=ps(F,D),Yt!==4&&(Yt=2),Eo===null?Eo=[p]:Eo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var j=Th(p,F,i);Zd(p,j);break e;case 1:D=F;var z=p.type,Y=p.stateNode;if((p.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(rr===null||!rr.has(Y)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=wh(p,D,i);Zd(p,Te);break e}}p=p.return}while(p!==null)}sp(o)}catch(Xe){i=Xe,Gt===o&&o!==null&&(Gt=o=o.return);continue}break}while(!0)}function ip(){var t=ba.current;return ba.current=Ea,t===null?Ea:t}function tc(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Qt===null||(Pr&268435455)===0&&(Pa&268435455)===0||ar(Qt,nn)}function Fa(t,i){var o=vt;vt|=2;var l=ip();(Qt!==t||nn!==i)&&(Li=null,Dr(t,i));do try{P_();break}catch(c){np(t,c)}while(!0);if(pu(),vt=o,ba.current=l,Gt!==null)throw Error(n(261));return Qt=null,nn=0,Yt}function P_(){for(;Gt!==null;)rp(Gt)}function L_(){for(;Gt!==null&&!G();)rp(Gt)}function rp(t){var i=lp(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?sp(t):Gt=i,ju.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=E_(o,i,Un),o!==null){Gt=o;return}}else{if(o=T_(o,i),o!==null){o.flags&=32767,Gt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Nr(t,i,o){var l=At,c=Wn.transition;try{Wn.transition=null,At=1,D_(t,i,o,l)}finally{Wn.transition=c,At=l}return null}function D_(t,i,o,l){do vs();while(sr!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(Wo(t,p),t===Qt&&(Gt=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Da||(Da=!0,up(nt,function(){return vs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var M=At;At=1;var D=vt;vt|=4,ju.current=null,A_(t,o),$h(o,t),Qg(tu),qo=!!eu,tu=eu=null,t.current=o,C_(o),we(),vt=D,At=M,Wn.transition=p}else t.current=o;if(Da&&(Da=!1,sr=t,Na=c),p=t.pendingLanes,p===0&&(rr=null),sn(o.stateNode),wn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(La)throw La=!1,t=$u,$u=null,t;return(Na&1)!==0&&t.tag!==0&&vs(),p=t.pendingLanes,(p&1)!==0?t===Ku?To++:(To=0,Ku=t):To=0,er(),null}function vs(){if(sr!==null){var t=qf(Na),i=Wn.transition,o=At;try{if(Wn.transition=null,At=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Na=0,(vt&6)!==0)throw Error(n(331));var c=vt;for(vt|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var F=0;F<D.length;F++){var J=D[F];for(Fe=J;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:So(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,De=ve.return;if(Wh(ve),ve===J){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var Be=p.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Vt=He.sibling;He.sibling=null,He=Vt}while(He!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:So(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,Fe=j;break e}Fe=p.return}}var z=t.current;for(Fe=z;Fe!==null;){M=Fe;var Y=M.child;if((M.subtreeFlags&2064)!==0&&Y!==null)Y.return=M,Fe=Y;else e:for(M=z;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ra(9,D)}}catch(Xe){zt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Fe=Te;break e}Fe=D.return}}if(vt=c,er(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{At=o,Wn.transition=i}}return!1}function op(t,i,o){i=ps(o,i),i=Th(t,i,1),t=nr(t,i,1),i=_n(),t!==null&&(yn(t,1,i),wn(t,i))}function zt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=ps(o,t),t=wh(i,t,1),i=nr(i,t,1),t=_n(),i!==null&&(yn(i,1,t),wn(i,t));break}}i=i.return}}function N_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(nn&o)===o&&(Yt===4||Yt===3&&(nn&130023424)===nn&&500>Me()-Yu?Dr(t,0):qu|=o),wn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var o=_n();t=Ri(t,i),t!==null&&(yn(t,i,o),wn(t,o))}function I_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function U_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return En=!1,M_(t,i,o);En=(t.flags&131072)!==0}else En=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var c=os(i,an.current);ds(i,o),c=wu(null,i,l,t,c,o);var p=Au();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(l)?(p=!0,la(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,vu(i),c.updater=Ta,i.stateNode=c,c._reactInternals=i,Du(i,l,t,o),i=Fu(null,i,l,!0,p,o)):(i.tag=0,Ft&&p&&lu(i),gn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=O_(l),t=Jn(l,t),c){case 0:i=Uu(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=bh(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Uu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ih(t,i,l,c,o);case 3:e:{if(Uh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,Kd(t,i),_a(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=ps(Error(n(423)),i),i=Fh(t,i,l,o,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Fh(t,i,l,o,c);break e}else for(In=Zi(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,Qn=null,o=Yd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===c){i=Pi(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&fu(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,nu(l,c)?M=null:p!==null&&nu(l,p)&&(i.flags|=32),Nh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&fu(i),null;case 13:return Oh(t,i,o);case 4:return xu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),bh(t,i,l,c,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,Dt(pa,l._currentValue),l._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===c.children&&!Sn.current){i=Pi(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(p.tag===1){F=bi(-1,o&-o),F.tag=2;var J=p.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),J.pending=F}}p.lanes|=o,F=p.alternate,F!==null&&(F.lanes|=o),gu(p.return,o,i),D.lanes|=o;break}F=F.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),gu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}gn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,o),c=Vn(c),l=l(c),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Ph(t,i,l,c,o);case 15:return Lh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Aa(t,i),i.tag=1,Mn(l)?(t=!0,la(i)):t=!1,ds(i,o),Mh(i,l,c),Du(i,l,c,o),Fu(null,i,l,!0,t,o);case 19:return Bh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function up(t,i){return ee(t,i)}function F_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new F_(t,i,o,l)}function nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O_(t){if(typeof t=="function")return nc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===de)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Oa(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")nc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Ir(o.children,c,p,i);case W:M=8,c|=8;break;case b:return t=Xn(12,o,i,c|2),t.elementType=b,t.lanes=p,t;case Z:return t=Xn(13,o,i,c),t.elementType=Z,t.lanes=p,t;case ce:return t=Xn(19,o,i,c),t.elementType=ce,t.lanes=p,t;case ue:return ka(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ie:M=11;break e;case de:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Ir(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function ka(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function ic(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function rc(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function k_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function sc(t,i,o,l,c,p,M,D,F){return t=new k_(t,i,o,D,F),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Xn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(p),t}function B_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function cp(t){if(!t)return Ji;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Mn(o))return kd(t,o,i)}return i}function fp(t,i,o,l,c,p,M,D,F){return t=sc(o,l,!0,t,c,p,M,D,F),t.context=cp(null),o=t.current,l=_n(),c=or(o),p=bi(l,c),p.callback=i??null,nr(o,p,c),t.current.lanes=c,yn(t,c,l),wn(t,l),t}function Ba(t,i,o,l){var c=i.current,p=_n(),M=or(c);return o=cp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ni(t,c,M,p),ga(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function oc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function z_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}Ha.prototype.render=ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Ba(null,t,null,null)}),i[Ti]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&Jf(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function H_(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var J=za(M);p.call(J)}}var M=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=M,t[Ti]=M.current,ao(t.nodeType===8?t.parentNode:t),Lr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var J=za(F);D.call(J)}}var F=sc(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=F,t[Ti]=F.current,ao(t.nodeType===8?t.parentNode:t),Lr(function(){Ba(i,F,o,l)}),F}function Ga(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var D=c;c=function(){var F=za(M);D.call(F)}}Ba(i,M,t,c)}else M=H_(o,i,t,c,l);return za(M)}Yf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);o!==0&&(Dl(i,o|1),wn(i,Me()),(vt&6)===0&&(_s=Me()+500,er()))}break;case 13:Lr(function(){var l=Ri(t,1);if(l!==null){var c=_n();ni(l,t,1,c)}}),oc(t,1)}},Nl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=_n();ni(i,t,134217728,o)}oc(t,134217728)}},$f=function(t){if(t.tag===13){var i=or(t),o=Ri(t,i);if(o!==null){var l=_n();ni(o,t,i,l)}oc(t,i)}},Kf=function(){return At},Zf=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Re=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=oa(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},Nt=Ju,Xt=Lr;var V_={usingClientEntryPoint:!1,Events:[co,rs,oa,Pe,rt,Ju]},wo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Mt=Wa.inject(G_),pt=Wa}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_,An.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(i))throw Error(n(200));return B_(t,i,null,o)},An.createRoot=function(t,i){if(!lc(t))throw Error(n(299));var o=!1,l="",c=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=sc(t,1,!1,null,null,o,!1,l,c),t[Ti]=i.current,ao(t.nodeType===8?t.parentNode:t),new ac(i)},An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},An.flushSync=function(t){return Lr(t)},An.hydrate=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,o)},An.hydrateRoot=function(t,i,o){if(!lc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=fp(i,null,t,1,o??null,c,!1,p,M),t[Ti]=i.current,ao(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ha(i)},An.render=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,o)},An.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},An.unstable_batchedUpdates=Ju,An.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Va(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,o,!1,l)},An.version="18.3.1-next-f1338f8080-20240426",An}var Mp;function Q_(){if(Mp)return fc.exports;Mp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fc.exports=Z_(),fc.exports}var Ep;function J_(){if(Ep)return Xa;Ep=1;var s=Q_();return Xa.createRoot=s.createRoot,Xa.hydrateRoot=s.hydrateRoot,Xa}var ev=J_();const tv=Lm(ev),nv=[{id:"start-docker-ssh",label:"Enable Docker Backend + Host SSH",command:'HOST_SSH_USER="$USER" HOST_SSH_HOST="host.docker.internal" HOST_SSH_MOUNT_DIR="$HOME/.ssh" docker compose up -d --build',detail:"Starts FastAPI + SQLite (WAL/FTS5) behind Caddy on http://127.0.0.1:8088 and mounts ~/.ssh read-only for SSH host commands."},{id:"verify-backend-health",label:"Verify Backend Health",command:"curl -sS http://127.0.0.1:8088/api/health",detail:"Confirms SQLite WAL journal mode, busy_timeout_ms, and SSH key/target configuration."}],iv=[{id:"broadcom",label:"Broadcom BCM4331 (PCI 14e4:4331)",iface:"wlp2s0b1",driver:"b43",ip:"192.168.4.45",metric:100,signalDbm:-32,gatewayLossPct:16,externalLossPct:5,gatewayRttMs:22.126,externalRttMs:31.58,role:"Higher RSSI / Higher Observed Loss in Sample"},{id:"realtek",label:"Realtek RTL8188ETV (USB 0bda:0179)",iface:"wlp0s20u2",driver:"rtl8xxxu",ip:"192.168.4.54",metric:602,signalDbm:-49,gatewayLossPct:0,externalLossPct:0,gatewayRttMs:19.865,externalRttMs:32.948,role:"Lower RSSI / 0% Sample Loss (Preserve Path)"}],pc=[{id:"bcm4331-loss-vs-rssi",domain:"wireless",title:"Broadcom BCM4331 Packet Loss Despite Higher RSSI",severity:"confirmed",evidence:"100-packet test on belkin2 (2462 MHz, ch 11): wlp2s0b1 (-32 dBm, metric 100) had 16% gateway loss and 5% external loss; wlp0s20u2 (-49 dBm, metric 602) had 0% loss.",mechanism:"Signal strength (-32 dBm) does not guarantee clean frame delivery under co-channel interference or link asymmetry; per-interface probes are required."},{id:"fix-wifi-wrong-adapter",domain:"wireless",title:"fix-wifi.sh (v39.8) Validates Aggregate/Realtek State as BCM4331 Recovery",severity:"defect",evidence:"Nov 18 journal shows b43/ssb unload and bcma/b43 reload, then selection of wlp0s20u2 (192.168.4.54) and WIFI_RECOVERY_SUCCESS while Broadcom was still connecting.",mechanism:"Matches first ^wl* interface and aggregate connectivity rather than binding recovery checks strictly to PCI 14e4:4331."},{id:"wl-migration-rolled-back",domain:"wireless",title:"Broadcom wl Driver Migration Rolled Back Three Times on Nov 10",severity:"mitigated",evidence:"/var/lib/wifi-durable/state records phase=rolled-back at epoch 1794348484 (2026-11-10 22:08:04 UTC); modprobe/modules-load/dracut migration files are absent; b43 active.",mechanism:"Guard timeouts (240s, 600s, 600s) expired without stable Wi-Fi on wl, triggering automatic rollback and initramfs rebuild."},{id:"sqlite-per-row-lock-contention",domain:"sqlite",title:"1,500 'database is locked (5)' Errors from Per-Row Writers & Masked Failures",severity:"defect",evidence:"collect-network.sh spawns per-row sqlite3 processes without busy_timeout; 1,500 lock errors occurred in 13 of 17 minutes while still echoing completion and exiting 0.",mechanism:"SQLite busy_timeout is per-connection; uncoordinated multi-process writes collide under SQLITE_BUSY while trailing echo masks failed statements."},{id:"ipv6-colon-split-truncation",domain:"sqlite",title:"IPv6 Address Truncation via Naive ':' Split in collect-network.sh",severity:"defect",evidence:"Captured SQL statement inserted local_addr='[fe80:57217' and remote_addr=':'.",mechanism:"Splitting bracketed IPv6 host:port strings on ':' rather than parsing bracketed IPv6 literals + final ':' delimiter corrupts endpoints."},{id:"db-integrity-pending-verification",domain:"sqlite",title:"SQLite Integrity Still Unknown After Read-Only Open Failure",severity:"unknown",evidence:"Prior read-only SQLite checks returned 'attempt to write a readonly database (8)' against WAL-mode files.",mechanism:"Safe backup and WAL-aware read-only verification must precede PRAGMA quick_check / PRAGMA integrity_check."},{id:"synchronized-60s-timers",domain:"systemd",title:"Synchronized 60s Oneshot Timers Share Target Database",severity:"confirmed",evidence:"sys-inspector-network.timer and sys-inspector-processes.timer trigger every 60s (OnBootSec=15s, OnUnitActiveSec=60s) as root oneshot services.",mechanism:"Overlapping periodic writers hit /var/lib/sys-inspector/sys-inspector.db concurrently without serialized write queueing."}],Tp=[{id:"batched-sqlite-writer-py",filename:"batched_sqlite_writer.py",language:"python",title:"Single-Transaction Batched SQLite Writer + Safe IPv6/IPv4 Endpoint Parser",summary:"Replaces per-row sqlite3 subprocesses with one connection, explicit PRAGMA journal_mode=WAL and PRAGMA busy_timeout=5000, bracket-aware host:port parsing, and subprocess.Popen when launching helper processes.",code:`#!/usr/bin/env python3
"""Batched SQLite writer with WAL + busy_timeout and bracket-safe endpoint parsing."""

import sqlite3
import subprocess
from pathlib import Path
from typing import Tuple


def parse_host_port(endpoint: str) -> Tuple[str, str]:
    """Parse 'host:port' or '[ipv6]:port' without splitting inside IPv6 literals."""
    value = endpoint.strip()
    if value.startswith("[") and "]:" in value:
        host_part, port_part = value.rsplit(":", 1)
        return host_part, port_part
    if ":" in value:
        host_part, port_part = value.rsplit(":", 1)
        return host_part, port_part
    return value, ""


def spawn_collector_helper(args: list[str]) -> int:
    """Start a helper process via subprocess.Popen and wait for its exit code."""
    proc = subprocess.Popen(args)
    return proc.wait()


def write_network_batch(db_path: Path, rows: list[tuple[str, str, str]]) -> int:
    """Persist rows in one transaction using a single WAL connection and busy_timeout."""
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path), timeout=5.0)
    try:
        conn.execute("PRAGMA journal_mode = WAL;")
        conn.execute("PRAGMA synchronous = NORMAL;")
        conn.execute("PRAGMA busy_timeout = 5000;")

        parsed_rows = []
        for raw_local, raw_remote, state in rows:
            local_host, _ = parse_host_port(raw_local)
            remote_host, _ = parse_host_port(raw_remote)
            parsed_rows.append((local_host, remote_host, state))

        with conn:
            conn.executemany(
                """
                INSERT INTO network_samples (local_addr, remote_addr, state)
                VALUES (?, ?, ?)
                """,
                parsed_rows,
            )
        return len(parsed_rows)
    finally:
        conn.close()


if __name__ == "__main__":
    sample = [
        ("192.168.4.54:52100", "1.1.1.1:443", "ESTABLISHED"),
        ("[fe80::1]:57217", "[fe80::2]:5353", "UNCONN"),
    ]
    inserted = write_network_batch(Path("/tmp/forensics-sample.db"), sample)
    print(f"Inserted {inserted} socket sample rows cleanly.")
`},{id:"per-iface-wifi-probe-sh",filename:"per-iface-wifi-probe.sh",language:"bash",title:"Per-Interface Wi-Fi Loss Probe (Avoids RSSI-Only & Aggregate Misattribution)",summary:"Probes each wireless interface explicitly by source IP rather than relying on RSSI alone or treating another adapter's connectivity as proof of BCM4331 recovery.",code:`#!/usr/bin/env bash
# Per-interface packet loss & RTT probe for dual-station hosts (e.g. wlp2s0b1 vs wlp0s20u2).

TARGET_GATEWAY="\${1:-192.168.4.1}"
PACKET_COUNT="\${2:-20}"

probe_interface() {
  iface="$1"
  src_ip="$(ip -4 -o addr show dev "$iface" | awk '{split($4, a, "/"); print a[1]; exit}')"

  if [ -z "$src_ip" ]; then
    printf "iface=%-10s status=no-ipv4
" "$iface"
    return 0
  fi

  ping_out="$(ping -n -c "$PACKET_COUNT" -W 1 -I "$src_ip" "$TARGET_GATEWAY")"
  loss_pct="$(printf "%s
" "$ping_out" | awk -F',' '/packet loss/ {gsub(/^[ 	]+|% packet loss.*/, "", $3); print $3}')"
  avg_rtt="$(printf "%s
" "$ping_out" | awk -F'/' '/rtt min/avg/max/ {print $5}')"

  printf "iface=%-10s src_ip=%-15s loss=%s%% avg_rtt_ms=%s
"     "$iface" "$src_ip" "\${loss_pct:-unknown}" "\${avg_rtt:-n/a}"
}

for dev in $(iw dev | awk '$1 == "Interface" {print $2}'); do
  probe_interface "$dev"
done
`}],rv=[{label:"SQLite WAL Mode Documentation (https://www.sqlite.org/wal.html)",url:"https://www.sqlite.org/wal.html"},{label:"SQLite Locking & Concurrency (https://www.sqlite.org/lockingv3.html)",url:"https://www.sqlite.org/lockingv3.html"},{label:"SQLite C Busy Handler Reference (https://www.sqlite.org/c3ref/busy_handler.html)",url:"https://www.sqlite.org/c3ref/busy_handler.html"},{label:"systemd.timer Documentation (https://www.freedesktop.org/software/systemd/man/systemd.timer.html)",url:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html"},{label:"Three.js Documentation (https://threejs.org/docs/)",url:"https://threejs.org/docs/"},{label:"Kleppmann — Designing Data-Intensive Applications (ISBN 978-1449373320)",url:"https://www.sqlite.org/wal.html"},{label:"Kurose & Ross — Computer Networking: A Top-Down Approach (ISBN 978-0136681557)",url:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html"},{label:"Kerrisk — The Linux Programming Interface (ISBN 978-1593272203)",url:"https://www.freedesktop.org/software/systemd/man/systemd.timer.html"}];function sv({backendDetected:s,backendUrl:e,health:n}){const[r,a]=Ct.useState(null),[u,d]=Ct.useState((n==null?void 0:n.ssh_host)||"host.docker.internal"),[f,h]=Ct.useState((n==null?void 0:n.ssh_user)||""),[m,_]=Ct.useState("wifi_status"),[v,x]=Ct.useState(null),[S,T]=Ct.useState(!1);Ct.useEffect(()=>{n!=null&&n.ssh_host&&d(n.ssh_host),n!=null&&n.ssh_user&&h(n.ssh_user)},[n]);async function w(g){try{navigator.clipboard&&navigator.clipboard.writeText&&await navigator.clipboard.writeText(g.command)}catch{}a(g.id),setTimeout(()=>{a(N=>N===g.id?null:N)},1800)}async function y(g){if(g.preventDefault(),!(!s||!e)){T(!0),x(null);try{const N=await fetch(`${e}/api/host/exec`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:m,host:u,user:f})}),L=await N.json();x({httpStatus:N.status,...L})}catch(N){x({error:String(N)})}finally{T(!1)}}}return ne.jsxs("section",{id:"enable-backend",className:"rounded-xl border border-sky-900/70 bg-slate-900/80 p-4",children:[ne.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[ne.jsxs("div",{children:[ne.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wider text-sky-300",children:"Enable Local Docker Backend & Host SSH Control"}),ne.jsx("p",{className:"mt-1 text-xs text-slate-300",children:"Run the command below on your workstation to start the FastAPI + SQLite (WAL/FTS5) + Caddy backend with SSH access to your host machine."})]}),ne.jsx("span",{className:"rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 font-mono text-[11px] text-slate-300",children:s?"Connected to :8088":"Static Mode (Optional Backend)"})]}),ne.jsx("div",{className:"mt-3 grid gap-3 md:grid-cols-2",children:nv.map(g=>ne.jsxs("div",{className:"rounded-lg border border-slate-800 bg-slate-950/90 p-3",children:[ne.jsxs("div",{className:"flex items-center justify-between gap-2",children:[ne.jsx("span",{className:"text-xs font-medium text-white",children:g.label}),ne.jsx("button",{type:"button",onClick:()=>w(g),className:"rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] text-slate-100 hover:bg-slate-700",children:r===g.id?"Copied":"Copy"})]}),ne.jsx("pre",{className:"mt-2 overflow-x-auto rounded bg-slate-900 p-2 font-mono text-[11px] text-sky-200",children:ne.jsx("code",{children:g.command})}),ne.jsx("p",{className:"mt-1.5 text-[11px] text-slate-400",children:g.detail})]},g.id))}),s&&ne.jsxs("form",{onSubmit:y,className:"mt-4 space-y-2 border-t border-slate-800 pt-3",children:[ne.jsx("div",{className:"text-xs font-semibold text-slate-200",children:"SSH Host Command Runner (Backend -> Host Workstation)"}),ne.jsxs("div",{className:"flex flex-wrap gap-2",children:[ne.jsx("input",{type:"text",value:f,onChange:g=>h(g.target.value),placeholder:"Host SSH username (e.g. fedora)",className:"rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white"}),ne.jsx("input",{type:"text",value:u,onChange:g=>d(g.target.value),placeholder:"Host IP or host.docker.internal",className:"rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white"}),ne.jsxs("select",{value:m,onChange:g=>_(g.target.value),className:"rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 font-mono text-xs text-white",children:[ne.jsx("option",{value:"wifi_status",children:"wifi_status"}),ne.jsx("option",{value:"journal_wifi",children:"journal_wifi"}),ne.jsx("option",{value:"sqlite_locks",children:"sqlite_locks"}),ne.jsx("option",{value:"disk_memory",children:"disk_memory"})]}),ne.jsx("button",{type:"submit",disabled:S,className:"rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500 disabled:opacity-50",children:S?"Running SSH...":"Run over SSH"})]}),v&&ne.jsx("pre",{className:"max-h-56 overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200",children:ne.jsx("code",{children:JSON.stringify(v,null,2)})})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="170",ov=0,wp=1,av=2,Dm=1,lv=2,Oi=3,xr=0,bn=1,ki=2,_r=0,Is=1,Ap=2,Cp=3,Rp=4,uv=5,Gr=100,cv=101,fv=102,dv=103,hv=104,pv=200,mv=201,gv=202,_v=203,qc=204,Yc=205,vv=206,xv=207,yv=208,Sv=209,Mv=210,Ev=211,Tv=212,wv=213,Av=214,$c=0,Kc=1,Zc=2,Os=3,Qc=4,Jc=5,ef=6,tf=7,Nm=0,Cv=1,Rv=2,vr=0,bv=1,Pv=2,Lv=3,Dv=4,Nv=5,Iv=6,Uv=7,Im=300,ks=301,Bs=302,nf=303,rf=304,Al=306,sf=1e3,Xr=1001,of=1002,ui=1003,Fv=1004,ja=1005,_i=1006,mc=1007,jr=1008,Vi=1009,Um=1010,Fm=1011,Uo=1012,Of=1013,qr=1014,Bi=1015,Fo=1016,kf=1017,Bf=1018,zs=1020,Om=35902,km=1021,Bm=1022,ai=1023,zm=1024,Hm=1025,Us=1026,Hs=1027,Vm=1028,zf=1029,Gm=1030,Hf=1031,Vf=1033,gl=33776,_l=33777,vl=33778,xl=33779,af=35840,lf=35841,uf=35842,cf=35843,ff=36196,df=37492,hf=37496,pf=37808,mf=37809,gf=37810,_f=37811,vf=37812,xf=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,Tf=37818,wf=37819,Af=37820,Cf=37821,yl=36492,Rf=36494,bf=36495,Wm=36283,Pf=36284,Lf=36285,Df=36286,Ov=3200,kv=3201,Xm=0,Bv=1,gr="",qn="srgb",Gs="srgb-linear",Cl="linear",bt="srgb",xs=7680,bp=519,zv=512,Hv=513,Vv=514,jm=515,Gv=516,Wv=517,Xv=518,jv=519,Pp=35044,Lp="300 es",zi=2e3,Ml=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,Nf=180/Math.PI;function Oo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Rn(s,e,n){return Math.max(e,Math.min(n,s))}function qv(s,e){return(s%e+e)%e}function _c(s,e,n){return(1-n)*s+n*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,d,f,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,h,m)}set(e,n,r,a,u,d,f,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],T=r[8],w=a[0],y=a[3],g=a[6],N=a[1],L=a[4],C=a[7],q=a[2],O=a[5],U=a[8];return u[0]=d*w+f*N+h*q,u[3]=d*y+f*L+h*O,u[6]=d*g+f*C+h*U,u[1]=m*w+_*N+v*q,u[4]=m*y+_*L+v*O,u[7]=m*g+_*C+v*U,u[2]=x*w+S*N+T*q,u[5]=x*y+S*L+T*O,u[8]=x*g+S*C+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*d*_-n*f*m-r*u*_+r*f*h+a*u*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=_*d-f*m,x=f*h-_*u,S=m*u-d*h,T=n*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(a*m-_*r)*w,e[2]=(f*r-a*d)*w,e[3]=x*w,e[4]=(_*n-a*h)*w,e[5]=(a*u-f*n)*w,e[6]=S*w,e[7]=(r*h-m*n)*w,e[8]=(d*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-a*m,a*h,-a*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(vc.makeScale(e,n)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new ot;function qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function El(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yv(){const s=El("canvas");return s.style.display="block",s}const Dp={};function No(s){s in Dp||(Dp[s]=!0,console.warn(s))}function $v(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Kv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?Cl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Np=[.64,.33,.3,.6,.15,.06],Ip=[.2126,.7152,.0722],Up=[.3127,.329],Fp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Gs]:{primaries:Np,whitePoint:Up,transfer:Cl,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:Ip,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:Np,whitePoint:Up,transfer:bt,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:Ip,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}});let ys;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=El("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Hi(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(xc(a[d].image)):u.push(xc(a[d]))}else u=xc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Pn extends Ws{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Xr,a=Xr,u=_i,d=jr,f=ai,h=Vi,m=Pn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Oo(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Im;Pn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,r=0,a=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,q=(g+1)/2,O=(_+x)/4,U=(v+w)/4,W=(T+y)/4;return L>C&&L>q?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=U/r):C>q?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=O/a,u=W/a):q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(q),r=U/u,a=W/u),this.set(r,a,u,n),this}let N=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(v-w)/N,this.z=(x-_)/N,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ym(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends t0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class $m extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[d+0],S=u[d+1],T=u[d+2],w=u[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(v!==w||h!==x||m!==S||_!==T){let y=1-f;const g=h*x+m*S+_*T+v*w,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const q=Math.sqrt(L),O=Math.atan2(q,g*N);y=Math.sin(y*O)/q,f=Math.sin(f*O)/q}const C=f*N;if(h=h*y+x*C,m=m*y+S*C,_=_*y+T*C,v=v*y+w*C,y===1-f){const q=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=q,m*=q,_*=q,v*=q}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=u[d],x=u[d+1],S=u[d+2],T=u[d+3];return e[n]=f*T+_*v+h*S-m*x,e[n+1]=h*T+_*x+m*v-f*S,e[n+2]=m*T+_*S+f*x-h*v,e[n+3]=_*T-f*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(a/2),v=f(u/2),x=h(r/2),S=h(a/2),T=h(u/2);switch(d){case"XYZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"YXZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"ZXY":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"ZYX":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"YZX":this._x=x*_*v+m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v-x*S*T;break;case"XZY":this._x=x*_*v-m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+d*f+a*m-u*h,this._y=a*_+d*h+u*f-r*m,this._z=u*_+d*m+r*h-a*f,this._w=d*_-r*f-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*a-f*r),_=2*(f*n-u*a),v=2*(u*r-d*n);return this.x=n+h*m+d*v-f*_,this.y=r+h*_+f*m-u*v,this.z=a+h*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,h=n.z;return this.x=a*h-u*f,this.y=u*d-r*h,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new Q,kp=new ko;class Bo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(u,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ya.subVectors(this.max,Ro),Ss.subVectors(e.a,Ro),Ms.subVectors(e.b,Ro),Es.subVectors(e.c,Ro),cr.subVectors(Ms,Ss),fr.subVectors(Es,Ms),Ur.subVectors(Ss,Es);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Ur.z,Ur.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Ur.z,0,-Ur.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Ur.y,Ur.x,0];return!Sc(n,Ss,Ms,Es,Ya)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,Ss,Ms,Es,Ya))?!1:($a.crossVectors(cr,fr),n=[$a.x,$a.y,$a.z],Sc(n,Ss,Ms,Es,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ii=new Q,qa=new Bo,Ss=new Q,Ms=new Q,Es=new Q,cr=new Q,fr=new Q,Ur=new Q,Ro=new Q,Ya=new Q,$a=new Q,Fr=new Q;function Sc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Fr.fromArray(s,u);const f=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),h=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const i0=new Bo,bo=new Q,Mc=new Q;class Rl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):i0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Mc)),this.expandByPoint(bo.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new Q,Ec=new Q,Ka=new Q,dr=new Q,Tc=new Q,Za=new Q,wc=new Q;class Km{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Ka),f=dr.dot(this.direction),h=-dr.dot(Ka),m=dr.lengthSq(),_=Math.abs(1-d*d);let v,x,S,T;if(_>0)if(v=d*h-f,x=d*f-h,T=u*_,v>=0)if(x>=-T)if(x<=T){const w=1/_;v*=w,x*=w,S=v*(v+d*x+2*f)+x*(d*v+x+2*h)+m}else x=u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x=-u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-d*u+f)),x=v>0?-u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(v=Math.max(0,-(d*u+f)),x=v>0?u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m);else x=d>0?-u:u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ec).addScaledVector(Ka,x),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,u){Tc.subVectors(n,e),Za.subVectors(r,e),wc.crossVectors(Tc,Za);let d=this.direction.dot(wc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const h=f*this.direction.dot(Za.crossVectors(dr,Za));if(h<0)return null;const m=f*this.direction.dot(Tc.cross(dr));if(m<0||h+m>d)return null;const _=-f*dr.dot(wc);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,d,f,h,m,_,v,x,S,T,w,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,h,m,_,v,x,S,T,w,y)}set(e,n,r,a,u,d,f,h,m,_,v,x,S,T,w,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=f,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=T,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),d=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*_,S=d*v,T=f*_,w=f*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=x-w*m,n[9]=-f*h,n[2]=w-x*m,n[6]=T+S*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*_,S=h*v,T=m*_,w=m*v;n[0]=x+w*f,n[4]=T*f-S,n[8]=d*m,n[1]=d*v,n[5]=d*_,n[9]=-f,n[2]=S*f-T,n[6]=w+x*f,n[10]=d*h}else if(e.order==="ZXY"){const x=h*_,S=h*v,T=m*_,w=m*v;n[0]=x-w*f,n[4]=-d*v,n[8]=T+S*f,n[1]=S+T*f,n[5]=d*_,n[9]=w-x*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const x=d*_,S=d*v,T=f*_,w=f*v;n[0]=h*_,n[4]=T*m-S,n[8]=x*m+w,n[1]=h*v,n[5]=w*m+x,n[9]=S*m-T,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,S=d*m,T=f*h,w=f*m;n[0]=h*_,n[4]=w-x*v,n[8]=T*v+S,n[1]=v,n[5]=d*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+T,n[10]=x-w*v}else if(e.order==="XZY"){const x=d*h,S=d*m,T=f*h,w=f*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+w,n[5]=d*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=f*_,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,n,r){const a=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),hr.crossVectors(r,Fn),hr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),hr.crossVectors(r,Fn)),hr.normalize(),Qa.crossVectors(Fn,hr),a[0]=hr.x,a[4]=Qa.x,a[8]=Fn.x,a[1]=hr.y,a[5]=Qa.y,a[9]=Fn.y,a[2]=hr.z,a[6]=Qa.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],g=r[14],N=r[3],L=r[7],C=r[11],q=r[15],O=a[0],U=a[4],W=a[8],b=a[12],R=a[1],k=a[5],ie=a[9],Z=a[13],ce=a[2],de=a[6],oe=a[10],ue=a[14],B=a[3],le=a[7],ae=a[11],I=a[15];return u[0]=d*O+f*R+h*ce+m*B,u[4]=d*U+f*k+h*de+m*le,u[8]=d*W+f*ie+h*oe+m*ae,u[12]=d*b+f*Z+h*ue+m*I,u[1]=_*O+v*R+x*ce+S*B,u[5]=_*U+v*k+x*de+S*le,u[9]=_*W+v*ie+x*oe+S*ae,u[13]=_*b+v*Z+x*ue+S*I,u[2]=T*O+w*R+y*ce+g*B,u[6]=T*U+w*k+y*de+g*le,u[10]=T*W+w*ie+y*oe+g*ae,u[14]=T*b+w*Z+y*ue+g*I,u[3]=N*O+L*R+C*ce+q*B,u[7]=N*U+L*k+C*de+q*le,u[11]=N*W+L*ie+C*oe+q*ae,u[15]=N*b+L*Z+C*ue+q*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],g=e[15];return T*(+u*h*v-a*m*v-u*f*x+r*m*x+a*f*S-r*h*S)+w*(+n*h*S-n*m*x+u*d*x-a*d*S+a*m*_-u*h*_)+y*(+n*m*v-n*f*S-u*d*v+r*d*S+u*f*_-r*m*_)+g*(-a*f*_-n*h*v+n*f*x+a*d*v-r*d*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],g=e[15],N=v*y*m-w*x*m+w*h*S-f*y*S-v*h*g+f*x*g,L=T*x*m-_*y*m-T*h*S+d*y*S+_*h*g-d*x*g,C=_*w*m-T*v*m+T*f*S-d*w*S-_*f*g+d*v*g,q=T*v*h-_*w*h-T*f*x+d*w*x+_*f*y-d*v*y,O=n*N+r*L+a*C+u*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=N*U,e[1]=(w*x*u-v*y*u-w*a*S+r*y*S+v*a*g-r*x*g)*U,e[2]=(f*y*u-w*h*u+w*a*m-r*y*m-f*a*g+r*h*g)*U,e[3]=(v*h*u-f*x*u-v*a*m+r*x*m+f*a*S-r*h*S)*U,e[4]=L*U,e[5]=(_*y*u-T*x*u+T*a*S-n*y*S-_*a*g+n*x*g)*U,e[6]=(T*h*u-d*y*u-T*a*m+n*y*m+d*a*g-n*h*g)*U,e[7]=(d*x*u-_*h*u+_*a*m-n*x*m-d*a*S+n*h*S)*U,e[8]=C*U,e[9]=(T*v*u-_*w*u-T*r*S+n*w*S+_*r*g-n*v*g)*U,e[10]=(d*w*u-T*f*u+T*r*m-n*w*m-d*r*g+n*f*g)*U,e[11]=(_*f*u-d*v*u-_*r*m+n*v*m+d*r*S-n*f*S)*U,e[12]=q*U,e[13]=(_*w*a-T*v*a+T*r*x-n*w*x-_*r*y+n*v*y)*U,e[14]=(T*f*a-d*w*a-T*r*h+n*w*h+d*r*y-n*f*y)*U,e[15]=(d*v*a-_*f*a+_*r*h-n*v*h-d*r*x+n*f*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,h=e.z,m=u*d,_=u*f;return this.set(m*d+r,m*f-a*h,m*h+a*f,0,m*f+a*h,_*f+r,_*h-a*d,0,m*h-a*f,_*h+a*d,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,h=n._w,m=u+u,_=d+d,v=f+f,x=u*m,S=u*_,T=u*v,w=d*_,y=d*v,g=f*v,N=h*m,L=h*_,C=h*v,q=r.x,O=r.y,U=r.z;return a[0]=(1-(w+g))*q,a[1]=(S+C)*q,a[2]=(T-L)*q,a[3]=0,a[4]=(S-C)*O,a[5]=(1-(x+g))*O,a[6]=(y+N)*O,a[7]=0,a[8]=(T+L)*U,a[9]=(y-N)*U,a[10]=(1-(x+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const d=Ts.set(a[4],a[5],a[6]).length(),f=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,_=1/d,v=1/f;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,n.setFromRotationMatrix(ri),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=zi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(f===zi)S=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(f===Ml)S=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=zi){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(d-u),x=(n+e)*m,S=(r+a)*_;let T,w;if(f===zi)T=(d+u)*v,w=-2*v;else if(f===Ml)T=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new Q,ri=new Bt,r0=new Q(0,0,0),s0=new Q(1,1,1),hr=new Q,Qa=new Q,Fn=new Q,Bp=new Bt,zp=new ko;class xi{constructor(e=0,n=0,r=0,a=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-Rn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Hp=new Q,ws=new ko,Ii=new Bt,Ja=new Q,Po=new Q,a0=new Q,l0=new ko,Vp=new Q(1,0,0),Gp=new Q(0,1,0),Wp=new Q(0,0,1),Xp={type:"added"},u0={type:"removed"},As={type:"childadded",child:null},Ac={type:"childremoved",child:null};class rn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Q,n=new xi,r=new ko,a=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Po,Ja,this.up):Ii.lookAt(Ja,Po,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Ii),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];u(e.shapes,v)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(u(e.materials,this.material[h]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(u(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}rn.DEFAULT_UP=new Q(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new Q,Ui=new Q,Cc=new Q,Fi=new Q,Cs=new Q,Rs=new Q,jp=new Q,Rc=new Q,bc=new Q,Pc=new Q,Lc=new Ht,Dc=new Ht,Nc=new Ht;class oi{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Ui.subVectors(r,n),Cc.subVectors(e,n);const d=si.dot(si),f=si.dot(Ui),h=si.dot(Cc),m=Ui.dot(Ui),_=Ui.dot(Cc),v=d*m-f*f;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*h-f*_)*x,T=(d*_-f*h)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,d,f,h){return this.getBarycoord(e,n,r,a,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Fi.x),h.addScaledVector(d,Fi.y),h.addScaledVector(f,Fi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,d){return Lc.setScalar(0),Dc.setScalar(0),Nc.setScalar(0),Lc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Nc.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Lc,u.x),d.addScaledVector(Dc,u.y),d.addScaledVector(Nc,u.z),d}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Ui.subVectors(e,n),si.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Cs.subVectors(a,r),Rs.subVectors(u,r),Rc.subVectors(e,r);const h=Cs.dot(Rc),m=Rs.dot(Rc);if(h<=0&&m<=0)return n.copy(r);bc.subVectors(e,a);const _=Cs.dot(bc),v=Rs.dot(bc);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return d=h/(h-_),n.copy(r).addScaledVector(Cs,d);Pc.subVectors(e,u);const S=Cs.dot(Pc),T=Rs.dot(Pc);if(T>=0&&S<=T)return n.copy(u);const w=S*m-h*T;if(w<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Rs,f);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return jp.subVectors(u,a),f=(v-_)/(v-_+(S-T)),n.copy(a).addScaledVector(jp,f);const g=1/(y+w+x);return d=w*g,f=x*g,n.copy(r).addScaledVector(Cs,d).addScaledVector(Rs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class gt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=qv(e,1),n=Rn(n,0,1),r=Rn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Ic(d,u,e+1/3),this.g=Ic(d,u,e),this.b=Ic(d,u,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return xt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Rn(dn.r*255,0,255))*65536+Math.round(Rn(dn.g*255,0,255))*256+Math.round(Rn(dn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,a=dn.g,u=dn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let h,m;const _=(f+d)/2;if(f===d)h=0,m=0;else{const v=d-f;switch(m=_<=.5?v/(d+f):v/(2-d-f),d){case r:h=(a-u)/v+(a<u?6:0);break;case a:h=(u-r)/v+2;break;case u:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=qn){xt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,a=dn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(el);const r=_c(pr.h,el.h,n),a=_c(pr.s,el.s,n),u=_c(pr.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new gt;gt.NAMES=Qm;let c0=0;class Xs extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Oo(),this.name="",this.blending=Is,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Yc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const h=u[f];delete h.metadata,d.push(h)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gf extends Xs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new Q,tl=new Tt;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Pp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Cn(n,this.array),r=Cn(r,this.array),a=Cn(a,this.array),u=Cn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class Jm extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class eg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ln extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const jn=new Bt,Uc=new rn,bs=new Q,On=new Bo,Lo=new Bo,en=new Q;class yi extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qm(e)?eg:Jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ln(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];On.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Lo.setFromBufferAttribute(f),this.morphTargetsRelative?(en.addVectors(On.min,Lo.min),On.expandByPoint(en),en.addVectors(On.max,Lo.max),On.expandByPoint(en)):(On.expandByPoint(Lo.min),On.expandByPoint(Lo.max))}On.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)en.fromBufferAttribute(f,m),h&&(bs.fromBufferAttribute(e,m),en.add(bs)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let W=0;W<r.count;W++)f[W]=new Q,h[W]=new Q;const m=new Q,_=new Q,v=new Q,x=new Tt,S=new Tt,T=new Tt,w=new Q,y=new Q;function g(W,b,R){m.fromBufferAttribute(r,W),_.fromBufferAttribute(r,b),v.fromBufferAttribute(r,R),x.fromBufferAttribute(u,W),S.fromBufferAttribute(u,b),T.fromBufferAttribute(u,R),_.sub(m),v.sub(m),S.sub(x),T.sub(x);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),f[W].add(w),f[b].add(w),f[R].add(w),h[W].add(y),h[b].add(y),h[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,b=N.length;W<b;++W){const R=N[W],k=R.start,ie=R.count;for(let Z=k,ce=k+ie;Z<ce;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new Q,C=new Q,q=new Q,O=new Q;function U(W){q.fromBufferAttribute(a,W),O.copy(q);const b=f[W];L.copy(b),L.sub(q.multiplyScalar(q.dot(b))).normalize(),C.crossVectors(O,b);const k=C.dot(h[W])<0?-1:1;d.setXYZW(W,L.x,L.y,L.z,k)}for(let W=0,b=N.length;W<b;++W){const R=N[W],k=R.start,ie=R.count;for(let Z=k,ce=k+ie;Z<ce;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Q,u=new Q,d=new Q,f=new Q,h=new Q,m=new Q,_=new Q,v=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),f.add(_),h.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(h.length*_);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new vi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const h=[],m=u[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new Bt,Or=new Km,nl=new Rl,Yp=new Q,il=new Q,rl=new Q,sl=new Q,Fc=new Q,ol=new Q,$p=new Q,al=new Q;class li extends rn{constructor(e=new yi,n=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){ol.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=f[h],v=u[h];_!==0&&(Fc.fromBufferAttribute(v,e),d?ol.addScaledVector(Fc,_):ol.addScaledVector(Fc.sub(n),_))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(nl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(nl,Yp)===null||Or.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(qp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(qp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=d[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,q=L;C<q;C+=3){const O=f.getX(C),U=f.getX(C+1),W=f.getX(C+2);a=ll(this,g,e,r,m,_,v,O,U,W),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,g=w;y<g;y+=3){const N=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);a=ll(this,d,e,r,m,_,v,N,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=d[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,q=L;C<q;C+=3){const O=C,U=C+1,W=C+2;a=ll(this,g,e,r,m,_,v,O,U,W),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,g=w;y<g;y+=3){const N=y,L=y+1,C=y+2;a=ll(this,d,e,r,m,_,v,N,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function d0(s,e,n,r,a,u,d,f){let h;if(e.side===bn?h=r.intersectTriangle(d,u,a,!0,f):h=r.intersectTriangle(a,u,d,e.side===xr,f),h===null)return null;al.copy(f),al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:s}}function ll(s,e,n,r,a,u,d,f,h,m){s.getVertexPosition(f,il),s.getVertexPosition(h,rl),s.getVertexPosition(m,sl);const _=d0(s,e,n,r,il,rl,sl,$p);if(_){const v=new Q;oi.getBarycoord($p,il,rl,sl,v),a&&(_.uv=oi.getInterpolatedAttribute(a,f,h,m,v,new Tt)),u&&(_.uv1=oi.getInterpolatedAttribute(u,f,h,m,v,new Tt)),d&&(_.normal=oi.getInterpolatedAttribute(d,f,h,m,v,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new Q,materialIndex:0};oi.getNormal(il,rl,sl,x.normal),_.face=x,_.barycoord=v}return _}class js extends yi{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const h=[],m=[],_=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(v,2));function T(w,y,g,N,L,C,q,O,U,W,b){const R=C/U,k=q/W,ie=C/2,Z=q/2,ce=O/2,de=U+1,oe=W+1;let ue=0,B=0;const le=new Q;for(let ae=0;ae<oe;ae++){const I=ae*k-Z;for(let re=0;re<de;re++){const Ne=re*R-ie;le[w]=Ne*N,le[y]=I*L,le[g]=ce,m.push(le.x,le.y,le.z),le[w]=0,le[y]=0,le[g]=O>0?1:-1,_.push(le.x,le.y,le.z),v.push(re/U),v.push(1-ae/W),ue+=1}}for(let ae=0;ae<W;ae++)for(let I=0;I<U;I++){const re=x+I+de*ae,Ne=x+I+de*(ae+1),K=x+(I+1)+de*(ae+1),fe=x+(I+1)+de*ae;h.push(re,Ne,fe),h.push(Ne,K,fe),B+=6}f.addGroup(S,B,b),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const a in r)e[a]=r[a]}return e}function h0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function tg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const p0={clone:Vs,merge:vn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Xs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ng extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Q,Kp=new Tt,Zp=new Tt;class Yn extends ng{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class _0 extends rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const u=new Yn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const d=new Yn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const f=new Yn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const h=new Yn(Ps,Ls,e,n);h.layers=this.layers,this.add(h);const m=new Yn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,h]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class ig extends Pn{constructor(e,n,r,a,u,d,f,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,a,u,d,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ig(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new js(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:_r});u.uniforms.tEquirect.value=n;const d=new li(a,u),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=_i),new _0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const Oc=new Q,x0=new Q,y0=new ot;class Hr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(x0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||y0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Rl,ul=new Q;class Wf{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,d=new Hr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],T=a[9],w=a[10],y=a[11],g=a[12],N=a[13],L=a[14],C=a[15];if(r[0].setComponents(h-u,x-m,y-S,C-g).normalize(),r[1].setComponents(h+u,x+m,y+S,C+g).normalize(),r[2].setComponents(h+d,x+_,y+T,C+N).normalize(),r[3].setComponents(h-d,x-_,y-T,C-N).normalize(),r[4].setComponents(h-f,x-v,y-w,C-L).normalize(),n===zi)r[5].setComponents(h+f,x+v,y+w,C+L).normalize();else if(n===Ml)r[5].setComponents(f,v,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ul.x=a.normal.x>0?e.max.x:e.min.x,ul.y=a.normal.y>0?e.max.y:e.min.y,ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function S0(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:u,update:d}}class bl extends yi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,_=h+1,v=e/f,x=n/h,S=[],T=[],w=[],y=[];for(let g=0;g<_;g++){const N=g*x-d;for(let L=0;L<m;L++){const C=L*v-u;T.push(C,-N,0),w.push(0,0,1),y.push(L/f),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let N=0;N<f;N++){const L=N+m*g,C=N+m*(g+1),q=N+1+m*(g+1),O=N+1+m*g;S.push(L,C,O),S.push(C,q,O)}this.setIndex(S),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,by=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Py=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:M0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:b0,batching_pars_vertex:P0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:N0,bsdfs:I0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:Q0,colorspace_pars_fragment:J0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:cx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:dx,lights_pars_begin:hx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Sx,lights_fragment_maps:Mx,lights_fragment_end:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:bx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ix,morphcolor_vertex:Ux,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:kx,normal_fragment_begin:Bx,normal_fragment_maps:zx,normal_pars_fragment:Hx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Qx,dithering_fragment:Jx,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:cy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:hy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:Sy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distanceRGBA_vert:by,distanceRGBA_frag:Py,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Ny,linedashed_frag:Iy,meshbasic_vert:Uy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:ky,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Vy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:jy,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:$y,points_frag:Ky,shadow_vert:Zy,shadow_frag:Qy,sprite_vert:Jy,sprite_frag:eS},be={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new gt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new gt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([be.common,be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([be.lights,be.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:vn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const cl={r:0,b:0,g:0},Br=new xi,tS=new Bt;function nS(s,e,n,r,a,u,d){const f=new gt(0);let h=u===!0?0:1,m,_,v=null,x=0,S=null;function T(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:e).get(L)),L}function w(N){let L=!1;const C=T(N);C===null?g(f,h):C&&C.isColor&&(g(C,1),L=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,d):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,L){const C=T(L);C&&(C.isCubeTexture||C.mapping===Al)?(_===void 0&&(_=new li(new js(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Vs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(q,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(L.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler(Br)),_.material.toneMapped=xt.getTransfer(C.colorSpace)!==bt,(v!==C||x!==C.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=C,x=C.version,S=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new li(new bl(2,2),new yr({name:"BackgroundMaterial",uniforms:Vs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=xt.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,L){N.getRGB(cl,tg(s)),r.buffers.color.setClear(cl.r,cl.g,cl.b,L,d)}return{getClearColor:function(){return f},setClearColor:function(N,L=1){f.set(N),h=L,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,g(f,h)},render:w,addToRenderList:y}}function iS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(R,k,ie,Z,ce){let de=!1;const oe=v(Z,ie,k);u!==oe&&(u=oe,m(u.object)),de=S(R,Z,ie,ce),de&&T(R,Z,ie,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,C(R,k,ie,Z),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function v(R,k,ie){const Z=ie.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let de=ce[k.id];de===void 0&&(de={},ce[k.id]=de);let oe=de[Z];return oe===void 0&&(oe=x(h()),de[Z]=oe),oe}function x(R){const k=[],ie=[],Z=[];for(let ce=0;ce<n;ce++)k[ce]=0,ie[ce]=0,Z[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,k,ie,Z){const ce=u.attributes,de=k.attributes;let oe=0;const ue=ie.getAttributes();for(const B in ue)if(ue[B].location>=0){const ae=ce[B];let I=de[B];if(I===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),ae===void 0||ae.attribute!==I||I&&ae.data!==I.data)return!0;oe++}return u.attributesNum!==oe||u.index!==Z}function T(R,k,ie,Z){const ce={},de=k.attributes;let oe=0;const ue=ie.getAttributes();for(const B in ue)if(ue[B].location>=0){let ae=de[B];ae===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const I={};I.attribute=ae,ae&&ae.data&&(I.data=ae.data),ce[B]=I,oe++}u.attributes=ce,u.attributesNum=oe,u.index=Z}function w(){const R=u.newAttributes;for(let k=0,ie=R.length;k<ie;k++)R[k]=0}function y(R){g(R,0)}function g(R,k){const ie=u.newAttributes,Z=u.enabledAttributes,ce=u.attributeDivisors;ie[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),ce[R]!==k&&(s.vertexAttribDivisor(R,k),ce[R]=k)}function N(){const R=u.newAttributes,k=u.enabledAttributes;for(let ie=0,Z=k.length;ie<Z;ie++)k[ie]!==R[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function L(R,k,ie,Z,ce,de,oe){oe===!0?s.vertexAttribIPointer(R,k,ie,ce,de):s.vertexAttribPointer(R,k,ie,Z,ce,de)}function C(R,k,ie,Z){w();const ce=Z.attributes,de=ie.getAttributes(),oe=k.defaultAttributeValues;for(const ue in de){const B=de[ue];if(B.location>=0){let le=ce[ue];if(le===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const ae=le.normalized,I=le.itemSize,re=e.get(le);if(re===void 0)continue;const Ne=re.buffer,K=re.type,fe=re.bytesPerElement,Ee=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===Of;if(le.isInterleavedBufferAttribute){const xe=le.data,Ae=xe.stride,Ie=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<B.locationSize;Ze++)L(B.location+Ze,I/B.locationSize,K,ae,Ae*fe,(Ie+I/B.locationSize*Ze)*fe,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,I/B.locationSize,K,ae,I*fe,I/B.locationSize*xe*fe,Ee)}}else if(oe!==void 0){const ae=oe[ue];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(B.location,ae);break;case 3:s.vertexAttrib3fv(B.location,ae);break;case 4:s.vertexAttrib4fv(B.location,ae);break;default:s.vertexAttrib1fv(B.location,ae)}}}}N()}function q(){W();for(const R in r){const k=r[R];for(const ie in k){const Z=k[ie];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete k[ie]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ie in k){const Z=k[ie];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete k[ie]}delete r[R.id]}function U(R){for(const k in r){const ie=r[k];if(ie[R.id]===void 0)continue;const Z=ie[R.id];for(const ce in Z)_(Z[ce].object),delete Z[ce];delete ie[R.id]}}function W(){b(),d=!0,u!==a&&(u=a,m(u.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:W,resetDefaultState:b,dispose:q,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function rS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=_[T];n.update(S,r,1)}function h(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)d(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w]*x[w];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function sS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(U){return!(U!==ai&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const W=U===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!W)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:q,maxSamples:O}}function oS(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new Hr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||u&&!y)u?_(null):m();else{const N=u?0:r,L=N*4;let C=g.clippingState||null;h.value=C,C=_(T,x,L,S);for(let q=0;q!==L;++q)C[q]=n[q];g.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const g=S+w*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==w;++L,C+=4)d.copy(v[L]).applyMatrix4(N,f),d.normal.toArray(y,C),y[C+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function aS(s){let e=new WeakMap;function n(d,f){return f===nf?d.mapping=ks:f===rf&&(d.mapping=Bs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===nf||f===rf)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new v0(h.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class sg extends ng{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Qp=[.125,.215,.35,.446,.526,.582],Wr=20,kc=new sg,Jp=new gt;let Bc=null,zc=0,Hc=0,Vc=!1;const Vr=(1+Math.sqrt(5))/2,Ds=1/Vr,em=[new Q(-Vr,Ds,0),new Q(Vr,Ds,0),new Q(-Ds,0,Vr),new Q(Ds,0,Vr),new Q(0,Vr,-Ds),new Q(0,Vr,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,zc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Fo,format:ai,colorSpace:Gs,depthBuffer:!1},a=nm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(u)),this._blurMaterial=uS(u,e,n)}return a}_compileMaterial(e){const n=new li(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a){const f=new Yn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Jp),_.toneMapping=vr,_.autoClear=!1;const S=new Gf({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),T=new li(new js,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Jp),w=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(f.up.set(0,h[g],0),f.lookAt(m[g],0,0)):N===1?(f.up.set(0,0,h[g]),f.lookAt(0,m[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,m[g]));const L=this._cubeSize;fl(a,N*L,g>2?L:0,L,L),_.setRenderTarget(a),w&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new li(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const h=this._cubeSize;fl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=em[(a-u-1)%em.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new li(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),w=u/T,y=isFinite(u)?1+Math.floor(_*w):Wr;y>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const g=[];let N=0;for(let U=0;U<Wr;++U){const W=U/w,b=Math.exp(-W*W/2);g.push(b),U===0?N+=b:U<y&&(N+=2*b)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[a],q=3*C*(a>L-Ns?a-L+Ns:0),O=4*(this._cubeSize-C);fl(n,q,O,3*C,2*C),h.setRenderTarget(n),h.render(v,kc)}}function lS(s){const e=[],n=[],r=[];let a=s;const u=s-Ns+1+Qp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let h=1/f;d>s-Ns?h=Qp[d-s+Ns-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,w=3,y=2,g=1,N=new Float32Array(w*T*S),L=new Float32Array(y*T*S),C=new Float32Array(g*T*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,W=O>2?0:-1,b=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];N.set(b,w*T*O),L.set(x,y*T*O);const R=[O,O,O,O,O,O];C.set(R,g*T*O)}const q=new yi;q.setAttribute("position",new vi(N,w)),q.setAttribute("uv",new vi(L,y)),q.setAttribute("faceIndex",new vi(C,g)),e.push(q),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function nm(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function uS(s,e,n){const r=new Float32Array(Wr),a=new Q(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function im(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function rm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===nf||h===rf,_=h===ks||h===Bs;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new tm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new tm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function fS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&No("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function dS(s,e,n,r){const a={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const w=x.morphAttributes[T];for(let y=0,g=w.length;y<g;y++)e.remove(w[y])}x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const w=S[T];for(let y=0,g=w.length;y<g;y++)e.update(w[y],s.ARRAY_BUFFER)}}function m(v){const x=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let L=0,C=N.length;L<C;L+=3){const q=N[L+0],O=N[L+1],U=N[L+2];x.push(q,O,O,U,U,q)}}else if(T!==void 0){const N=T.array;w=T.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const q=L+0,O=L+1,U=L+2;x.push(q,O,O,U,U,q)}}else return;const y=new(qm(x)?eg:Jm)(x,1);y.version=w;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function hS(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function h(x,S){s.drawElements(r,S,u,x*d),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,x*d,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function v(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/d,S[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,w,0,T);let g=0;for(let N=0;N<T;N++)g+=S[N]*w[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function pS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function mS(s,e,n){const r=new WeakMap,a=new Ht;function u(d,f,h){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let R=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let q=f.attributes.position.count*C,O=1;q>e.maxTextureSize&&(O=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*O*4*v),W=new $m(U,q,O,v);W.type=Bi,W.needsUpdate=!0;const b=C*4;for(let k=0;k<v;k++){const ie=g[k],Z=N[k],ce=L[k],de=q*O*4*k;for(let oe=0;oe<ie.count;oe++){const ue=oe*b;T===!0&&(a.fromBufferAttribute(ie,oe),U[de+ue+0]=a.x,U[de+ue+1]=a.y,U[de+ue+2]=a.z,U[de+ue+3]=0),w===!0&&(a.fromBufferAttribute(Z,oe),U[de+ue+4]=a.x,U[de+ue+5]=a.y,U[de+ue+6]=a.z,U[de+ue+7]=0),y===!0&&(a.fromBufferAttribute(ce,oe),U[de+ue+8]=a.x,U[de+ue+9]=a.y,U[de+ue+10]=a.z,U[de+ue+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:W,size:new Tt(q,O)},r.set(f,x),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function gS(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function d(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}class og extends Pn{constructor(e,n,r,a,u,d,f,h,m,_=Us){if(_!==Us&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Us&&(r=qr),r===void 0&&_===Hs&&(r=zs),super(null,a,u,d,f,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ag=new Pn,sm=new og(1,1),lg=new $m,ug=new n0,cg=new ig,om=[],am=[],lm=new Float32Array(16),um=new Float32Array(9),cm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=om[a];if(u===void 0&&(u=new Float32Array(a),om[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Pl(s,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function _S(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function SS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;cm.set(r),s.uniformMatrix2fv(this.addr,!1,cm),Kt(n,r)}}function MS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;um.set(r),s.uniformMatrix3fv(this.addr,!1,um),Kt(n,r)}}function ES(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;lm.set(r),s.uniformMatrix4fv(this.addr,!1,lm),Kt(n,r)}}function TS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function RS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(sm.compareFunction=jm,u=sm):u=ag,n.setTexture2D(e||u,a)}function NS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ug,a)}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||cg,a)}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||lg,a)}function FS(s){switch(s){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return yS;case 35674:return SS;case 35675:return MS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return wS;case 35668:case 35672:return AS;case 35669:case 35673:return CS;case 5125:return RS;case 36294:return bS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return US}}function OS(s,e){s.uniform1fv(this.addr,e)}function kS(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function BS(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function zS(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function HS(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function VS(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function GS(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function WS(s,e){s.uniform1iv(this.addr,e)}function XS(s,e){s.uniform2iv(this.addr,e)}function jS(s,e){s.uniform3iv(this.addr,e)}function qS(s,e){s.uniform4iv(this.addr,e)}function YS(s,e){s.uniform1uiv(this.addr,e)}function $S(s,e){s.uniform2uiv(this.addr,e)}function KS(s,e){s.uniform3uiv(this.addr,e)}function ZS(s,e){s.uniform4uiv(this.addr,e)}function QS(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||ag,u[d])}function JS(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||ug,u[d])}function eM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||cg,u[d])}function tM(s,e,n){const r=this.cache,a=e.length,u=Pl(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||lg,u[d])}function nM(s){switch(s){case 5126:return OS;case 35664:return kS;case 35665:return BS;case 35666:return zS;case 35674:return HS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return jS;case 35669:case 35673:return qS;case 5125:return YS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}class iM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=FS(n.type)}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nM(n.type)}}class sM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function fm(s,e){s.seq.push(e),s.map[e.id]=e}function oM(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),d=Gc.lastIndex;let f=u[1];const h=u[2]==="]",m=u[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===a){fm(n,m===void 0?new iM(f,s,e):new rM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new sM(f),fm(n,v)),n=v}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);oM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const aM=37297;let lM=0;function uM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const hm=new ot;function cM(s){xt._getMatrix(hm,xt.workingColorSpace,s);const e=`mat3( ${hm.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Cl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+uM(s.getShaderSource(e),d)}else return a}function fM(s,e){const n=cM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function dM(s,e){let n;switch(e){case bv:n="Linear";break;case Pv:n="Reinhard";break;case Lv:n="Cineon";break;case Dv:n="ACESFilmic";break;case Iv:n="AgX";break;case Uv:n="Neutral";break;case Nv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new Q;function hM(){xt.getLuminanceCoefficients(dl);const s=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function mM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function gM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Io(s){return s!==""}function mm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(_M,xM)}const vM=new Map;function xM(s,e){let n=at[e];if(n===void 0){const r=vM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return If(n)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(yM,SM)}function SM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function wM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Nm:e="ENVMAP_BLENDING_MULTIPLY";break;case Cv:e="ENVMAP_BLENDING_MIX";break;case Rv:e="ENVMAP_BLENDING_ADD";break}return e}function AM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function CM(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=MM(n),m=EM(n),_=TM(n),v=wM(n),x=AM(n),S=pM(n),T=mM(u),w=a.createProgram();let y,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(y=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?dM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,fM("linearToOutputTexel",n.outputColorSpace),hM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),d=If(d),d=mm(d,n),d=gm(d,n),f=If(f),f=mm(f,n),f=gm(f,n),d=_m(d),f=_m(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+y+d,C=N+g+f,q=dm(a,a.VERTEX_SHADER,L),O=dm(a,a.FRAGMENT_SHADER,C);a.attachShader(w,q),a.attachShader(w,O),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(k){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(q).trim(),ce=a.getShaderInfoLog(O).trim();let de=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,q,O);else{const ue=pm(a,q,"vertex"),B=pm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+ue+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Z===""||ce==="")&&(oe=!1);oe&&(k.diagnostics={runnable:de,programLog:ie,vertexShader:{log:Z,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(q),a.deleteShader(O),W=new Sl(a,w),b=gM(a,w)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,aM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=O,this}let RM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new PM(e),n.set(e,r)),r}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function LM(s,e,n,r,a,u,d){const f=new Zm,h=new bM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,R,k,ie,Z){const ce=ie.fog,de=Z.geometry,oe=b.isMeshStandardMaterial?ie.environment:null,ue=(b.isMeshStandardMaterial?n:e).get(b.envMap||oe),B=ue&&ue.mapping===Al?ue.image.height:null,le=T[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,I=ae!==void 0?ae.length:0;let re=0;de.morphAttributes.position!==void 0&&(re=1),de.morphAttributes.normal!==void 0&&(re=2),de.morphAttributes.color!==void 0&&(re=3);let Ne,K,fe,Ee;if(le){const _t=gi[le];Ne=_t.vertexShader,K=_t.fragmentShader}else Ne=b.vertexShader,K=b.fragmentShader,h.update(b),fe=h.getVertexShaderID(b),Ee=h.getFragmentShaderID(b);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,Rt=!!b.map,ht=!!b.matcap,Lt=!!ue,X=!!b.aoMap,hn=!!b.lightMap,dt=!!b.bumpMap,ut=!!b.normalMap,Ye=!!b.displacementMap,wt=!!b.emissiveMap,qe=!!b.metalnessMap,P=!!b.roughnessMap,E=b.anisotropy>0,$=b.clearcoat>0,me=b.dispersion>0,_e=b.iridescence>0,he=b.sheen>0,Ve=b.transmission>0,Ce=E&&!!b.anisotropyMap,Ue=$&&!!b.clearcoatMap,lt=$&&!!b.clearcoatNormalMap,Se=$&&!!b.clearcoatRoughnessMap,Oe=_e&&!!b.iridescenceMap,Qe=_e&&!!b.iridescenceThicknessMap,Je=he&&!!b.sheenColorMap,ke=he&&!!b.sheenRoughnessMap,ct=!!b.specularMap,it=!!b.specularColorMap,Et=!!b.specularIntensityMap,H=Ve&&!!b.transmissionMap,Re=Ve&&!!b.thicknessMap,se=!!b.gradientMap,pe=!!b.alphaMap,Le=b.alphaTest>0,Pe=!!b.alphaHash,rt=!!b.extensions;let Nt=vr;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Xt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:K,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Z.instanceColor!==null,instancingMorph:Ie&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Gs,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:ht,envMap:Lt,envMapMode:Lt&&ue.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:hn,bumpMap:dt,normalMap:ut,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ut&&b.normalMapType===Bv,normalMapTangentSpace:ut&&b.normalMapType===Xm,metalnessMap:qe,roughnessMap:P,anisotropy:E,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:he,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:it,specularIntensityMap:Et,transmission:Ve,transmissionMap:H,thicknessMap:Re,gradientMap:se,opaque:b.transparent===!1&&b.blending===Is&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:Pe,combine:b.combine,mapUv:Rt&&w(b.map.channel),aoMapUv:X&&w(b.aoMap.channel),lightMapUv:hn&&w(b.lightMap.channel),bumpMapUv:dt&&w(b.bumpMap.channel),normalMapUv:ut&&w(b.normalMap.channel),displacementMapUv:Ye&&w(b.displacementMap.channel),emissiveMapUv:wt&&w(b.emissiveMap.channel),metalnessMapUv:qe&&w(b.metalnessMap.channel),roughnessMapUv:P&&w(b.roughnessMap.channel),anisotropyMapUv:Ce&&w(b.anisotropyMap.channel),clearcoatMapUv:Ue&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(b.sheenRoughnessMap.channel),specularMapUv:ct&&w(b.specularMap.channel),specularColorMapUv:it&&w(b.specularColorMap.channel),specularIntensityMapUv:Et&&w(b.specularIntensityMap.channel),transmissionMapUv:H&&w(b.transmissionMap.channel),thicknessMapUv:Re&&w(b.thicknessMap.channel),alphaMapUv:pe&&w(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ut||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!de.attributes.uv&&(Rt||pe),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ki,flipSided:b.side===bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function g(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(N(R,b),L(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function N(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function L(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=T[b.type];let k;if(R){const ie=gi[R];k=p0.clone(ie.uniforms)}else k=b.uniforms;return k}function q(b,R){let k;for(let ie=0,Z=_.length;ie<Z;ie++){const ce=_[ie];if(ce.cacheKey===R){k=ce,++k.usedTimes;break}}return k===void 0&&(k=new CM(s,R,b,u),_.push(k)),k}function O(b){if(--b.usedTimes===0){const R=_.indexOf(b);_[R]=_[_.length-1],_.pop(),b.destroy()}}function U(b){h.remove(b)}function W(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:q,releaseProgram:O,releaseShaderCache:U,programs:_,dispose:W}}function DM(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,h){s.get(d)[f]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function NM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(v,x,S,T,w,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=w,g.group=y),e++,g}function f(v,x,S,T,w,y){const g=d(v,x,S,T,w,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(v,x,S,T,w,y){const g=d(v,x,S,T,w,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||NM),r.length>1&&r.sort(x||xm),a.length>1&&a.sort(x||xm)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:h,finish:_,sort:m}}function IM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new ym,s.set(r,[d])):a>=u.length?(d=new ym,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function UM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new gt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":n={color:new gt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function FM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let OM=0;function kM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BM(s){const e=new UM,n=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,u=new Bt,d=new Bt;function f(m){let _=0,v=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,T=0,w=0,y=0,g=0,N=0,L=0,C=0,q=0,O=0,U=0;m.sort(kM);for(let b=0,R=m.length;b<R;b++){const k=m[b],ie=k.color,Z=k.intensity,ce=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ie.r*Z,v+=ie.g*Z,x+=ie.b*Z;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],Z);U++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,B=n.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=k.shadow.matrix,N++}r.directional[S]=oe,S++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(ie).multiplyScalar(Z),oe.distance=ce,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[w]=oe;const ue=k.shadow;if(k.map&&(r.spotLightMap[q]=k.map,q++,ue.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[w]=ue.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=de,C++}w++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(ie).multiplyScalar(Z),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=oe,y++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const ue=k.shadow,B=n.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=k.shadow.matrix,L++}r.point[T]=oe,T++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(Z),oe.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[g]=oe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==T||W.spotLength!==w||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==C||W.numSpotMaps!==q||W.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+q-O,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,W.directionalLength=S,W.pointLength=T,W.spotLength=w,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=C,W.numSpotMaps=q,W.numLightProbes=U,r.version=OM++)}function h(m,_){let v=0,x=0,S=0,T=0,w=0;const y=_.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:r}}function Sm(s){const e=new BM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function zM(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new Sm(s),e.set(a,[f])):u>=d.length?(f=new Sm(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class HM extends Xs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends Xs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(s,e,n){let r=new Wf;const a=new Tt,u=new Tt,d=new Ht,f=new HM({depthPacking:kv}),h=new VM,m={},_=n.maxTextureSize,v={[xr]:bn,[bn]:xr,[ki]:ki},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new yi;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new li(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dm;let g=this.type;this.render=function(O,U,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(_r),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Z=g!==Oi&&this.type===Oi,ce=g===Oi&&this.type!==Oi;for(let de=0,oe=O.length;de<oe;de++){const ue=O[de],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const le=B.getFrameExtents();if(a.multiply(le),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,B.mapSize.y=u.y)),B.map===null||Z===!0||ce===!0){const I=this.type!==Oi?{minFilter:ui,magFilter:ui}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(a.x,a.y,I),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ae=B.getViewportCount();for(let I=0;I<ae;I++){const re=B.getViewport(I);d.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),ie.viewport(d),B.updateMatrices(ue,I),r=B.getFrustum(),C(U,W,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&N(B,W),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(b,R,k)};function N(O,U){const W=e.update(w);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,W,x,w,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,W,S,w,null)}function L(O,U,W,b){let R=null;const k=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=W.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ie=R.uuid,Z=U.uuid;let ce=m[ie];ce===void 0&&(ce={},m[ie]=ce);let de=ce[Z];de===void 0&&(de=R.clone(),ce[Z]=de,U.addEventListener("dispose",q)),R=de}if(R.visible=U.visible,R.wireframe=U.wireframe,b===Oi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:v[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=s.properties.get(R);ie.light=W}return R}function C(O,U,W,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Oi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const Z=e.update(O),ce=O.material;if(Array.isArray(ce)){const de=Z.groups;for(let oe=0,ue=de.length;oe<ue;oe++){const B=de[oe],le=ce[B.materialIndex];if(le&&le.visible){const ae=L(O,le,b,R);O.onBeforeShadow(s,O,U,W,Z,ae,B),s.renderBufferDirect(W,null,Z,ae,O,B),O.onAfterShadow(s,O,U,W,Z,ae,B)}}}else if(ce.visible){const de=L(O,ce,b,R);O.onBeforeShadow(s,O,U,W,Z,de,null),s.renderBufferDirect(W,null,Z,de,O,null),O.onAfterShadow(s,O,U,W,Z,de,null)}}const ie=O.children;for(let Z=0,ce=ie.length;Z<ce;Z++)C(ie[Z],U,W,b,R)}function q(O){O.target.removeEventListener("dispose",q);for(const W in m){const b=m[W],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const jM={[$c]:Kc,[Zc]:ef,[Qc]:tf,[Os]:Jc,[Kc]:$c,[ef]:Zc,[tf]:Qc,[Jc]:Os};function qM(s,e){function n(){let H=!1;const Re=new Ht;let se=null;const pe=new Ht(0,0,0,0);return{setMask:function(Le){se!==Le&&!H&&(s.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){H=Le},setClear:function(Le,Pe,rt,Nt,Xt){Xt===!0&&(Le*=Nt,Pe*=Nt,rt*=Nt),Re.set(Le,Pe,rt,Nt),pe.equals(Re)===!1&&(s.clearColor(Le,Pe,rt,Nt),pe.copy(Re))},reset:function(){H=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,se=null,pe=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Le;Le=null,this.setClear(Nt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!H&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Re&&(Pe=jM[Pe]),pe!==Pe){switch(Pe){case $c:s.depthFunc(s.NEVER);break;case Kc:s.depthFunc(s.ALWAYS);break;case Zc:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case Qc:s.depthFunc(s.EQUAL);break;case Jc:s.depthFunc(s.GEQUAL);break;case ef:s.depthFunc(s.GREATER);break;case tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){H=!1,se=null,pe=null,Le=null,Re=!1}}}function a(){let H=!1,Re=null,se=null,pe=null,Le=null,Pe=null,rt=null,Nt=null,Xt=null;return{setTest:function(_t){H||(_t?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!H&&(s.stencilMask(_t),Re=_t)},setFunc:function(_t,xn,pn){(se!==_t||pe!==xn||Le!==pn)&&(s.stencilFunc(_t,xn,pn),se=_t,pe=xn,Le=pn)},setOp:function(_t,xn,pn){(Pe!==_t||rt!==xn||Nt!==pn)&&(s.stencilOp(_t,xn,pn),Pe=_t,rt=xn,Nt=pn)},setLocked:function(_t){H=_t},setClear:function(_t){Xt!==_t&&(s.clearStencil(_t),Xt=_t)},reset:function(){H=!1,Re=null,se=null,pe=null,Le=null,Pe=null,rt=null,Nt=null,Xt=null}}}const u=new n,d=new r,f=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,g=null,N=null,L=null,C=null,q=null,O=null,U=new gt(0,0,0),W=0,b=!1,R=null,k=null,ie=null,Z=null,ce=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=ue>=2);let le=null,ae={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ne=new Ht().fromArray(I),K=new Ht().fromArray(re);function fe(H,Re,se,pe){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(H,Pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(Os),dt(!1),ut(wp),xe(s.CULL_FACE),X(_r);function xe(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ie(H,Re){return v[H]!==Re?(s.bindFramebuffer(H,Re),v[H]=Re,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(H,Re){let se=S,pe=!1;if(H){se=x.get(Re),se===void 0&&(se=[],x.set(Re,se));const Le=H.textures;if(se.length!==Le.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=Le.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function Rt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const ht={[Gr]:s.FUNC_ADD,[cv]:s.FUNC_SUBTRACT,[fv]:s.FUNC_REVERSE_SUBTRACT};ht[dv]=s.MIN,ht[hv]=s.MAX;const Lt={[pv]:s.ZERO,[mv]:s.ONE,[gv]:s.SRC_COLOR,[qc]:s.SRC_ALPHA,[Mv]:s.SRC_ALPHA_SATURATE,[yv]:s.DST_COLOR,[vv]:s.DST_ALPHA,[_v]:s.ONE_MINUS_SRC_COLOR,[Yc]:s.ONE_MINUS_SRC_ALPHA,[Sv]:s.ONE_MINUS_DST_COLOR,[xv]:s.ONE_MINUS_DST_ALPHA,[Ev]:s.CONSTANT_COLOR,[Tv]:s.ONE_MINUS_CONSTANT_COLOR,[wv]:s.CONSTANT_ALPHA,[Av]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Re,se,pe,Le,Pe,rt,Nt,Xt,_t){if(H===_r){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),H!==uv){if(H!==y||_t!==b){if((g!==Gr||C!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,C=Gr),_t)switch(H){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.ONE,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ap:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,L=null,q=null,O=null,U.set(0,0,0),W=0,y=H,b=_t}return}Le=Le||Re,Pe=Pe||se,rt=rt||pe,(Re!==g||Le!==C)&&(s.blendEquationSeparate(ht[Re],ht[Le]),g=Re,C=Le),(se!==N||pe!==L||Pe!==q||rt!==O)&&(s.blendFuncSeparate(Lt[se],Lt[pe],Lt[Pe],Lt[rt]),N=se,L=pe,q=Pe,O=rt),(Nt.equals(U)===!1||Xt!==W)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Xt),U.copy(Nt),W=Xt),y=H,b=!1}function hn(H,Re){H.side===ki?Ae(s.CULL_FACE):xe(s.CULL_FACE);let se=H.side===bn;Re&&(se=!se),dt(se),H.blending===Is&&H.transparent===!1?X(_r):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const pe=H.stencilWrite;f.setTest(pe),pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function ut(H){H!==ov?(xe(s.CULL_FACE),H!==k&&(H===wp?s.cullFace(s.BACK):H===av?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),k=H}function Ye(H){H!==ie&&(oe&&s.lineWidth(H),ie=H)}function wt(H,Re,se){H?(xe(s.POLYGON_OFFSET_FILL),(Z!==Re||ce!==se)&&(s.polygonOffset(Re,se),Z=Re,ce=se)):Ae(s.POLYGON_OFFSET_FILL)}function qe(H){H?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function P(H){H===void 0&&(H=s.TEXTURE0+de-1),le!==H&&(s.activeTexture(H),le=H)}function E(H,Re,se){se===void 0&&(le===null?se=s.TEXTURE0+de-1:se=le);let pe=ae[se];pe===void 0&&(pe={type:void 0,texture:void 0},ae[se]=pe),(pe.type!==H||pe.texture!==Re)&&(le!==se&&(s.activeTexture(se),le=se),s.bindTexture(H,Re||Ee[H]),pe.type=H,pe.texture=Re)}function $(){const H=ae[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function ke(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function ct(H,Re){let se=m.get(Re);se===void 0&&(se=new WeakMap,m.set(Re,se));let pe=se.get(H);pe===void 0&&(pe=s.getUniformBlockIndex(Re,H.name),se.set(H,pe))}function it(H,Re){const pe=m.get(Re).get(H);h.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,H.__bindingPointIndex),h.set(Re,pe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,ae={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,g=null,N=null,L=null,C=null,q=null,O=null,U=new gt(0,0,0),W=0,b=!1,R=null,k=null,ie=null,Z=null,ce=null,Ne.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:Rt,setBlending:X,setMaterial:hn,setFlipSided:dt,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:qe,activeTexture:P,bindTexture:E,unbindTexture:$,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:he,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Et}}function Mm(s,e,n,r){const a=YM(r);switch(n){case km:return s*e;case zm:return s*e;case Hm:return s*e*2;case Vm:return s*e/a.components*a.byteLength;case zf:return s*e/a.components*a.byteLength;case Gm:return s*e*2/a.components*a.byteLength;case Hf:return s*e*2/a.components*a.byteLength;case Bm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Vf:return s*e*4/a.components*a.byteLength;case gl:case _l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:case cf:return Math.max(s,16)*Math.max(e,8)/4;case af:case uf:return Math.max(s,8)*Math.max(e,8)/2;case ff:case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yl:case Rf:case bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wm:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YM(s){switch(s){case Vi:case Um:return{byteLength:1,components:1};case Uo:case Fm:case Fo:return{byteLength:2,components:1};case kf:case Bf:return{byteLength:2,components:4};case qr:case Of:case Bi:return{byteLength:4,components:1};case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function $M(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):El("canvas")}function w(P,E,$){let me=1;const _e=qe(P);if((_e.width>$||_e.height>$)&&(me=$/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(me*_e.width),Ve=Math.floor(me*_e.height);v===void 0&&(v=T(he,Ve));const Ce=E?T(he,Ve):v;return Ce.width=he,Ce.height=Ve,Ce.getContext("2d").drawImage(P,0,0,he,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Ve+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,E,$,me,_e=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=E;if(E===s.RED&&($===s.FLOAT&&(he=s.R32F),$===s.HALF_FLOAT&&(he=s.R16F),$===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.R8UI),$===s.UNSIGNED_SHORT&&(he=s.R16UI),$===s.UNSIGNED_INT&&(he=s.R32UI),$===s.BYTE&&(he=s.R8I),$===s.SHORT&&(he=s.R16I),$===s.INT&&(he=s.R32I)),E===s.RG&&($===s.FLOAT&&(he=s.RG32F),$===s.HALF_FLOAT&&(he=s.RG16F),$===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RG8UI),$===s.UNSIGNED_SHORT&&(he=s.RG16UI),$===s.UNSIGNED_INT&&(he=s.RG32UI),$===s.BYTE&&(he=s.RG8I),$===s.SHORT&&(he=s.RG16I),$===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGB8UI),$===s.UNSIGNED_SHORT&&(he=s.RGB16UI),$===s.UNSIGNED_INT&&(he=s.RGB32UI),$===s.BYTE&&(he=s.RGB8I),$===s.SHORT&&(he=s.RGB16I),$===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),$===s.UNSIGNED_INT&&(he=s.RGBA32UI),$===s.BYTE&&(he=s.RGBA8I),$===s.SHORT&&(he=s.RGBA16I),$===s.INT&&(he=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),E===s.RGBA){const Ve=_e?Cl:xt.getTransfer(me);$===s.FLOAT&&(he=s.RGBA32F),$===s.HALF_FLOAT&&(he=s.RGBA16F),$===s.UNSIGNED_BYTE&&(he=Ve===bt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(P,E){let $;return P?E===null||E===qr||E===zs?$=s.DEPTH24_STENCIL8:E===Bi?$=s.DEPTH32F_STENCIL8:E===Uo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===zs?$=s.DEPTH_COMPONENT24:E===Bi?$=s.DEPTH_COMPONENT32F:E===Uo&&($=s.DEPTH_COMPONENT16),$}function q(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ui&&P.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function O(P){const E=P.target;E.removeEventListener("dispose",O),W(E),E.isVideoTexture&&_.delete(E)}function U(P){const E=P.target;E.removeEventListener("dispose",U),R(E)}function W(P){const E=r.get(P);if(E.__webglInit===void 0)return;const $=P.source,me=x.get($);if(me){const _e=me[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(P),Object.keys(me).length===0&&x.delete($)}r.remove(P)}function b(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const $=P.source,me=x.get($);delete me[E.__cacheKey],d.memory.textures--}function R(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let _e=0;_e<E.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let me=0,_e=$.length;me<_e;me++){const he=r.get($[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove($[me])}r.remove(P)}let k=0;function ie(){k=0}function Z(){const P=k;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),k+=1,P}function ce(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function de(P,E){const $=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,P,E);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function oe(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function ue(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function B(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){fe($,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const le={[sf]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[of]:s.MIRRORED_REPEAT},ae={[ui]:s.NEAREST,[Fv]:s.NEAREST_MIPMAP_NEAREST,[ja]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},I={[zv]:s.NEVER,[jv]:s.ALWAYS,[Hv]:s.LESS,[jm]:s.LEQUAL,[Vv]:s.EQUAL,[Xv]:s.GEQUAL,[Gv]:s.GREATER,[Wv]:s.NOTEQUAL};function re(P,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===mc||E.magFilter===ja||E.magFilter===jr||E.minFilter===_i||E.minFilter===mc||E.minFilter===ja||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ae[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==ja&&E.minFilter!==jr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",O));const me=E.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const he=ce(E);if(he!==P.__cacheKey){_e[he]===void 0&&(_e[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,$=!0),_e[he].usedTimes++;const Ve=_e[P.__cacheKey];Ve!==void 0&&(_e[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&b(E)),P.__cacheKey=he,P.__webglTexture=_e[he].texture}return $}function K(P,E,$){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ne(P,E),he=E.source;n.bindTexture(me,P.__webglTexture,s.TEXTURE0+$);const Ve=r.get(he);if(he.version!==Ve.__version||_e===!0){n.activeTexture(s.TEXTURE0+$);const Ce=xt.getPrimaries(xt.workingColorSpace),Ue=E.colorSpace===gr?null:xt.getPrimaries(E.colorSpace),lt=E.colorSpace===gr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=w(E.image,!1,a.maxTextureSize);Se=wt(E,Se);const Oe=u.convert(E.format,E.colorSpace),Qe=u.convert(E.type);let Je=L(E.internalFormat,Oe,Qe,E.colorSpace,E.isVideoTexture);re(me,E);let ke;const ct=E.mipmaps,it=E.isVideoTexture!==!0,Et=Ve.__version===void 0||_e===!0,H=he.dataReady,Re=q(E,Se);if(E.isDepthTexture)Je=C(E.format===Hs,E.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,null));else if(E.isDataTexture)if(ct.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let se=0,pe=ct.length;se<pe;se++)ke=ct[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,Qe,ke.data);E.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Qe,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ct[0].width,ct[0].height,Se.depth);for(let se=0,pe=ct.length;se<pe;se++)if(ke=ct[se],E.format!==ai)if(Oe!==null)if(it){if(H)if(E.layerUpdates.size>0){const Le=Mm(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Pe,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Se.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,Se.depth,0,Oe,Qe,ke.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let se=0,pe=ct.length;se<pe;se++)ke=ct[se],E.format!==ai?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(E.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,Se.width,Se.height,Se.depth),H)if(E.layerUpdates.size>0){const se=Mm(Se.width,Se.height,E.format,E.type);for(const pe of E.layerUpdates){const Le=Se.data.subarray(pe*se/Se.data.BYTES_PER_ELEMENT,(pe+1)*se/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Oe,Qe,Le)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(E.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Re,Je,Se.width,Se.height,Se.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(E.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height);else{let se=Se.width,pe=Se.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,Je,se,pe,0,Oe,Qe,null),se>>=1,pe>>=1}}else if(ct.length>0){if(it&&Et){const se=qe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,se.width,se.height)}for(let se=0,pe=ct.length;se<pe;se++)ke=ct[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,se,Je,Oe,Qe,ke);E.generateMipmaps=!1}else if(it){if(Et){const se=qe(Se);n.texStorage2D(s.TEXTURE_2D,Re,Je,se.width,se.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,Se);y(E)&&g(me),Ve.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,$){if(E.image.length!==6)return;const me=Ne(P,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const he=r.get(_e);if(_e.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+$);const Ve=xt.getPrimaries(xt.workingColorSpace),Ce=E.colorSpace===gr?null:xt.getPrimaries(E.colorSpace),Ue=E.colorSpace===gr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!lt&&!Se?Oe[pe]=w(E.image[pe],!0,a.maxCubemapSize):Oe[pe]=Se?E.image[pe].image:E.image[pe],Oe[pe]=wt(E,Oe[pe]);const Qe=Oe[0],Je=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ct=L(E.internalFormat,Je,ke,E.colorSpace),it=E.isVideoTexture!==!0,Et=he.__version===void 0||me===!0,H=_e.dataReady;let Re=q(E,Qe);re(s.TEXTURE_CUBE_MAP,E);let se;if(lt){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){se=Oe[pe].mipmaps;for(let Le=0;Le<se.length;Le++){const Pe=se[Le];E.format!==ai?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,Pe.width,Pe.height,Je,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ct,Pe.width,Pe.height,0,Je,ke,Pe.data)}}}else{if(se=E.mipmaps,it&&Et){se.length>0&&Re++;const pe=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,Je,ke,Oe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Oe[pe].width,Oe[pe].height,0,Je,ke,Oe[pe].data);for(let Le=0;Le<se.length;Le++){const rt=se[Le].image[pe].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,rt.width,rt.height,Je,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ct,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,ke,Oe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ct,Je,ke,Oe[pe]);for(let Le=0;Le<se.length;Le++){const Pe=se[Le];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,Je,ke,Pe.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ct,Je,ke,Pe.image[pe])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),he.__version=_e.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,$,me,_e,he){const Ve=u.convert($.format,$.colorSpace),Ce=u.convert($.type),Ue=L($.internalFormat,Ve,Ce,$.colorSpace),lt=r.get(E),Se=r.get($);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>he),Qe=Math.max(1,E.height>>he);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,he,Ue,Oe,Qe,E.depth,0,Ve,Ce,null):n.texImage2D(_e,he,Ue,Oe,Qe,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Se.__webglTexture,0,dt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Se.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const me=E.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=C(E.stencilBuffer,_e),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=dt(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,P)}else{const me=E.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Ve=u.convert(he.format,he.colorSpace),Ce=u.convert(he.type),Ue=L(he.internalFormat,Ve,Ce,he.colorSpace),lt=dt(E);$&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ue,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const _e=me.__webglTexture,he=dt(E);if(E.depthTexture.format===Us)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Hs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const E=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=me}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[me],P,!1);else{const _e=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(P,E,$){const me=r.get(P);E!==void 0&&Ee(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ie(P)}function Rt(P){const E=P.texture,$=r.get(P),me=r.get(E);P.addEventListener("dispose",U);const _e=P.textures,he=P.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,d.memory.textures++),he){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)$.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else $.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const lt=r.get(_e[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&ut(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ue=_e[Ce];$.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const lt=u.convert(Ue.format,Ue.colorSpace),Se=u.convert(Ue.type),Oe=L(Ue.internalFormat,lt,Se,Ue.colorSpace,P.isXRRenderTarget===!0),Qe=dt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),xe($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ee($.__webglFramebuffer[Ce][Ue],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Ee($.__webglFramebuffer[Ce],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const lt=_e[Ce],Se=r.get(lt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),re(s.TEXTURE_2D,lt),Ee($.__webglFramebuffer,P,lt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),re(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ee($.__webglFramebuffer[Ue],P,E,s.COLOR_ATTACHMENT0,Ce,Ue);else Ee($.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Ce,0);y(E)&&g(Ce),n.unbindTexture()}P.depthBuffer&&Ie(P)}function ht(P){const E=P.textures;for(let $=0,me=E.length;$<me;$++){const _e=E[$];if(y(_e)){const he=N(P),Ve=r.get(_e).__webglTexture;n.bindTexture(he,Ve),g(he),n.unbindTexture()}}}const Lt=[],X=[];function hn(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,$=P.width,me=P.height;let _e=s.COLOR_BUFFER_BIT;const he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(P),Ce=E.length>1;if(Ce)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,$,me,0,0,$,me,_e,s.NEAREST),h===!0&&(Lt.length=0,X.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Lt.push(he),X.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function dt(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=d.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function wt(P,E){const $=P.colorSpace,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Gs&&$!==gr&&(xt.getTransfer($)===bt?(me!==ai||_e!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=de,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function KM(s,e){function n(r,a=gr){let u;const d=xt.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Um)return s.BYTE;if(r===Fm)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Fo)return s.HALF_FLOAT;if(r===km)return s.ALPHA;if(r===Bm)return s.RGB;if(r===ai)return s.RGBA;if(r===zm)return s.LUMINANCE;if(r===Hm)return s.LUMINANCE_ALPHA;if(r===Us)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Vm)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Gm)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(d===bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===af||r===lf||r===uf||r===cf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===af)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ff||r===df||r===hf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ff||r===df)return d===bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===hf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===pf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_f)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Af)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return d===bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yl||r===Rf||r===bf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===yl)return d===bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===Pf||r===Lf||r===Df)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===yl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class ZM extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:JM,fragmentShader:eE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new li(new bl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nE extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",h=1,m=null,_=null,v=null,x=null,S=null,T=null;const w=new tE,y=n.getContextAttributes();let g=null,N=null;const L=[],C=[],q=new Tt;let O=null;const U=new Yn;U.viewport=new Ht;const W=new Yn;W.viewport=new Ht;const b=[U,W],R=new ZM;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=L[K];return fe===void 0&&(fe=new Wc,L[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=L[K];return fe===void 0&&(fe=new Wc,L[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=L[K];return fe===void 0&&(fe=new Wc,L[K]=fe),fe.getHandSpace()};function Z(K){const fe=C.indexOf(K.inputSource);if(fe===-1)return;const Ee=L[fe];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,m||d),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function ce(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",de);for(let K=0;K<L.length;K++){const fe=C[K];fe!==null&&(C[K]=null,L[K].disconnect(fe))}k=null,ie=null,w.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Yr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=y.stencil?Hs:Us,Ee=y.stencil?zs:qr);const Ae={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Yr(x.textureWidth,x.textureHeight,{format:ai,type:Vi,depthTexture:new og(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(K){for(let fe=0;fe<K.removed.length;fe++){const Ee=K.removed[fe],xe=C.indexOf(Ee);xe>=0&&(C[xe]=null,L[xe].disconnect(Ee))}for(let fe=0;fe<K.added.length;fe++){const Ee=K.added[fe];let xe=C.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=C.length){C.push(Ee),xe=Ie;break}else if(C[Ie]===null){C[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Ae=L[xe];Ae&&Ae.connect(Ee)}}const oe=new Q,ue=new Q;function B(K,fe,Ee){oe.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const xe=oe.distanceTo(ue),Ae=fe.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Rt=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],hn=(Ie[8]+1)/Ie[0],dt=Ze*X,ut=Ze*hn,Ye=xe/(-X+hn),wt=Ye*-X;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Ze+Ye,P=Rt+Ye,E=dt-wt,$=ut+(xe-wt),me=ht*Rt/P*qe,_e=Lt*Rt/P*qe;K.projectionMatrix.makePerspective(E,$,me,_e,qe,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let fe=K.near,Ee=K.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),R.near=W.near=U.near=fe,R.far=W.far=U.far=Ee,(k!==R.near||ie!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ie=R.far),U.layers.mask=K.layers.mask|2,W.layers.mask=K.layers.mask|4,R.layers.mask=U.layers.mask|W.layers.mask;const xe=K.parent,Ae=R.cameras;le(R,xe);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],xe);Ae.length===2?B(R,U,W):R.projectionMatrix.copy(U.projectionMatrix),ae(K,R,xe)};function ae(K,fe,Ee){Ee===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Nf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(K){h=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let I=null;function re(K,fe){if(_=fe.getViewerPose(m||d),T=fe,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let xe=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ze=Ee[Ie];let Rt=null;if(S!==null)Rt=S.getViewport(Ze);else{const Lt=v.getViewSubImage(x,Ze);Rt=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(N,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(N))}let ht=b[Ie];ht===void 0&&(ht=new Yn,ht.layers.enable(Ie),ht.viewport=new Ht,b[Ie]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ie===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(ht)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=v.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=C[Ee],Ae=L[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,m||d)}I&&I(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Ne=new rg;Ne.setAnimationLoop(re),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const zr=new xi,iE=new Bt;function rE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,tg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,N,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),w(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?h(y,g,N,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===bn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===bn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,C=N.envMapRotation;L&&(y.envMap.value=L,zr.copy(C),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(iE.makeRotationFromEuler(zr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,N,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function sE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,L){const C=L.program;r.uniformBlockBinding(N,C)}function m(N,L){let C=a[N.id];C===void 0&&(T(N),C=_(N),a[N.id]=C,N.addEventListener("dispose",y));const q=L.program;r.updateUBOMapping(N,q);const O=e.render.frame;u[N.id]!==O&&(x(N),u[N.id]=O)}function _(N){const L=v();N.__bindingPointIndex=L;const C=s.createBuffer(),q=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,q,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function v(){for(let N=0;N<f;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],C=N.uniforms,q=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,U=C.length;O<U;O++){const W=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=W.length;b<R;b++){const k=W[b];if(S(k,O,b,q)===!0){const ie=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let de=0;de<Z.length;de++){const oe=Z[de],ue=w(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ie+ce,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,ce),ce+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,C,q){const O=N.value,U=L+"_"+C;if(q[U]===void 0)return typeof O=="number"||typeof O=="boolean"?q[U]=O:q[U]=O.clone(),!0;{const W=q[U];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return q[U]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function T(N){const L=N.uniforms;let C=0;const q=16;for(let U=0,W=L.length;U<W;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,k=b.length;R<k;R++){const ie=b[R],Z=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,de=Z.length;ce<de;ce++){const oe=Z[ce],ue=w(oe),B=C%q,le=B%ue.boundary,ae=B+le;C+=le,ae!==0&&q-ae<ue.storage&&(C+=q-ae),ie.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=C,C+=ue.storage}}}const O=C%q;return O>0&&(C+=q-O),N.__size=C,N.__cache={},this}function w(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const C=d.indexOf(L.__bindingPointIndex);d.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);d=[],a={},u={}}return{bind:h,update:m,dispose:g}}class oE{constructor(e={}){const{canvas:n=Yv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=vr,this.toneMappingExposure=1;const C=this;let q=!1,O=0,U=0,W=null,b=-1,R=null;const k=new Ht,ie=new Ht;let Z=null;const ce=new gt(0);let de=0,oe=n.width,ue=n.height,B=1,le=null,ae=null;const I=new Ht(0,0,oe,ue),re=new Ht(0,0,oe,ue);let Ne=!1;const K=new Wf;let fe=!1,Ee=!1;const xe=new Bt,Ae=new Bt,Ie=new Q,Ze=new Ht,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return W===null?B:1}let X=r;function hn(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const V="webgl2";if(X=hn(V,A),X===null)throw hn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let dt,ut,Ye,wt,qe,P,E,$,me,_e,he,Ve,Ce,Ue,lt,Se,Oe,Qe,Je,ke,ct,it,Et,H;function Re(){dt=new fS(X),dt.init(),it=new KM(X,dt),ut=new sS(X,dt,e,it),Ye=new qM(X,dt),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new pS(X),qe=new DM,P=new $M(X,dt,Ye,qe,ut,it,wt),E=new aS(C),$=new cS(C),me=new S0(X),Et=new iS(X,me),_e=new dS(X,me,wt,Et),he=new gS(X,_e,me,wt),Je=new mS(X,ut,P),Se=new oS(qe),Ve=new LM(C,E,$,dt,ut,Et,Se),Ce=new rE(C,qe),Ue=new IM,lt=new zM(dt),Qe=new nS(C,E,$,Ye,he,S,h),Oe=new XM(C,he,ut),H=new sE(X,wt,ut,Ye),ke=new rS(X,dt,wt),ct=new hS(X,dt,wt),wt.programs=Ve.programs,C.capabilities=ut,C.extensions=dt,C.properties=qe,C.renderLists=Ue,C.shadowMap=Oe,C.state=Ye,C.info=wt}Re();const se=new nE(C,X);this.xr=se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(oe,ue,!1))},this.getSize=function(A){return A.set(oe,ue)},this.setSize=function(A,V,ee=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ue=V,n.width=Math.floor(A*B),n.height=Math.floor(V*B),ee===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(oe*B,ue*B).floor()},this.setDrawingBufferSize=function(A,V,ee){oe=A,ue=V,B=ee,n.width=Math.floor(A*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,V,ee,te){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,V,ee,te),Ye.viewport(k.copy(I).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,V,ee,te){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,V,ee,te),Ye.scissor(ie.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ye.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,V=!0,ee=!0){let te=0;if(A){let G=!1;if(W!==null){const we=W.texture.format;G=we===Vf||we===Hf||we===zf}if(G){const we=W.texture.type,Me=we===Vi||we===qr||we===Uo||we===zs||we===kf||we===Bf,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(T[0]=et,T[1]=nt,T[2]=We,T[3]=ze,X.clearBufferuiv(X.COLOR,0,T)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=ze,X.clearBufferiv(X.COLOR,0,w))}else te|=X.COLOR_BUFFER_BIT}V&&(te|=X.DEPTH_BUFFER_BIT),ee&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),lt.dispose(),qe.dispose(),E.dispose(),$.dispose(),he.dispose(),Et.dispose(),H.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",$r),se.removeEventListener("sessionend",Gi),Si.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=wt.autoReset,V=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,G=Oe.type;Re(),wt.autoReset=A,Oe.enabled=V,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=G}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const V=A.target;V.removeEventListener("dispose",rt),Nt(V)}function Nt(A){Xt(A),qe.remove(A)}function Xt(A){const V=qe.get(A).programs;V!==void 0&&(V.forEach(function(ee){Ve.releaseProgram(ee)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ee,te,G,we){V===null&&(V=Rt);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ge=Vo(A,V,ee,te,G);Ye.setMaterial(te,Me);let ze=ee.index,et=1;if(te.wireframe===!0){if(ze=_e.getWireframeAttribute(ee),ze===void 0)return;et=2}const nt=ee.drawRange,We=ee.attributes.position;let mt=nt.start*et,Mt=(nt.start+nt.count)*et;we!==null&&(mt=Math.max(mt,we.start*et),Mt=Math.min(Mt,(we.start+we.count)*et)),ze!==null?(mt=Math.max(mt,0),Mt=Math.min(Mt,ze.count)):We!=null&&(mt=Math.max(mt,0),Mt=Math.min(Mt,We.count));const pt=Mt-mt;if(pt<0||pt===1/0)return;Et.setup(G,te,Ge,ee,ze);let sn,st=ke;if(ze!==null&&(sn=me.get(ze),st=ct,st.setIndex(sn)),G.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*Lt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(G.isLine){let je=te.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*Lt()),G.isLineSegments?st.setMode(X.LINES):G.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else G.isPoints?st.setMode(X.POINTS):G.isSprite&&st.setMode(X.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const je=G._multiDrawStarts,$n=G._multiDrawCounts,yt=G._multiDrawCount,on=ze?me.get(ze).bytesPerElement:1,Kn=qe.get(te).currentProgram.getUniforms();for(let jt=0;jt<yt;jt++)Kn.setValue(X,"_gl_DrawID",jt),st.render(je[jt]/on,$n[jt])}else if(G.isInstancedMesh)st.renderInstances(mt,pt,G.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,$n=Math.min(ee.instanceCount,je);st.renderInstances(mt,pt,$n)}else st.render(mt,pt)};function _t(A,V,ee){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Kr(A,V,ee),A.side=xr,A.needsUpdate=!0,Kr(A,V,ee),A.side=ki):Kr(A,V,ee)}this.compile=function(A,V,ee=null){ee===null&&(ee=A),g=lt.get(ee),g.init(V),L.push(g),ee.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),A!==ee&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const te=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const we=G.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const Ge=we[Me];_t(Ge,ee,G),te.add(Ge)}else _t(we,ee,G),te.add(we)}),L.pop(),g=null,te},this.compileAsync=function(A,V,ee=null){const te=this.compile(A,V,ee);return new Promise(G=>{function we(){if(te.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&te.delete(Me)}),te.size===0){G(A);return}setTimeout(we,10)}dt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let xn=null;function pn(A){xn&&xn(A)}function $r(){Si.stop()}function Gi(){Si.start()}const Si=new rg;Si.setAnimationLoop(pn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){xn=A,se.setAnimationLoop(A),A===null?Si.stop():Si.start()},se.addEventListener("sessionstart",$r),se.addEventListener("sessionend",Gi),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,V,W),g=lt.get(A,L.length),g.init(V),L.push(g),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Ee),y=Ue.get(A,N.length),y.init(),N.push(y),se.enabled===!0&&se.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&Mi(we,V,-1/0,C.sortObjects)}Mi(A,V,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(le,ae),ht=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ht&&Qe.addToRenderList(y,A),this.info.render.frame++,fe===!0&&Se.beginShadows();const ee=g.state.shadowsArray;Oe.render(ee,A,V),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=y.opaque,G=y.transmissive;if(g.setupLights(),V.isArrayCamera){const we=V.cameras;if(G.length>0)for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Mr(te,G,A,ze)}ht&&Qe.render(A);for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Sr(y,A,ze,ze.viewport)}}else G.length>0&&Mr(te,G,A,V),ht&&Qe.render(A),Sr(y,A,V);W!==null&&(P.updateMultisampleRenderTarget(W),P.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(C,A,V),Et.resetDefaultState(),b=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],fe===!0&&Se.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Mi(A,V,ee,te){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){te&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Me=he.update(A),Ge=A.material;Ge.visible&&y.push(A,Me,Ge,ee,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Me=he.update(A),Ge=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Me.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ge[We.materialIndex];mt&&mt.visible&&y.push(A,Me,mt,ee,Ze.z,We)}}else Ge.visible&&y.push(A,Me,Ge,ee,Ze.z,null)}}const we=A.children;for(let Me=0,Ge=we.length;Me<Ge;Me++)Mi(we[Me],V,ee,te)}function Sr(A,V,ee,te){const G=A.opaque,we=A.transmissive,Me=A.transparent;g.setupLightsView(ee),fe===!0&&Se.setGlobalState(C.clippingPlanes,ee),te&&Ye.viewport(k.copy(te)),G.length>0&&Wi(G,V,ee),we.length>0&&Wi(we,V,ee),Me.length>0&&Wi(Me,V,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mr(A,V,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Yr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Fo:Vi,minFilter:jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const we=g.state.transmissionRenderTarget[te.id],Me=te.viewport||k;we.setSize(Me.z,Me.w);const Ge=C.getRenderTarget();C.setRenderTarget(we),C.getClearColor(ce),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Qe.render(ee);const ze=C.toneMapping;C.toneMapping=vr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),fe===!0&&Se.setGlobalState(C.clippingPlanes,te),Wi(A,ee,te),P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=V.length;We<mt;We++){const Mt=V[We],pt=Mt.object,sn=Mt.geometry,st=Mt.material,je=Mt.group;if(st.side===ki&&pt.layers.test(te.layers)){const $n=st.side;st.side=bn,st.needsUpdate=!0,zo(pt,ee,te,sn,st,je),st.side=$n,st.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(we),P.updateRenderTargetMipmap(we))}C.setRenderTarget(Ge),C.setClearColor(ce,de),et!==void 0&&(te.viewport=et),C.toneMapping=ze}function Wi(A,V,ee){const te=V.isScene===!0?V.overrideMaterial:null;for(let G=0,we=A.length;G<we;G++){const Me=A[G],Ge=Me.object,ze=Me.geometry,et=te===null?Me.material:te,nt=Me.group;Ge.layers.test(ee.layers)&&zo(Ge,V,ee,ze,et,nt)}}function zo(A,V,ee,te,G,we){A.onBeforeRender(C,V,ee,te,G,we),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(C,V,ee,te,A,we),G.transparent===!0&&G.side===ki&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,C.renderBufferDirect(ee,V,te,G,A,we),G.side=xr,G.needsUpdate=!0,C.renderBufferDirect(ee,V,te,G,A,we),G.side=ki):C.renderBufferDirect(ee,V,te,G,A,we),A.onAfterRender(C,V,ee,te,G,we)}function Kr(A,V,ee){V.isScene!==!0&&(V=Rt);const te=qe.get(A),G=g.state.lights,we=g.state.shadowsArray,Me=G.state.version,Ge=Ve.getParameters(A,G.state,we,V,ee),ze=Ve.getProgramCacheKey(Ge);let et=te.programs;te.environment=A.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(A.isMeshStandardMaterial?$:E).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Me)return ci(A,Ge),nt}else Ge.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ge,C),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),te.uniforms=Ge.uniforms;const We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Se.uniform),ci(A,Ge),te.needsLights=Ll(A),te.lightsStateVersion=Me,te.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Ho(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Sl.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ci(A,V){const ee=qe.get(A);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Vo(A,V,ee,te,G){V.isScene!==!0&&(V=Rt),P.resetTextureUnits();const we=V.fog,Me=te.isMeshStandardMaterial?V.environment:null,Ge=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Gs,ze=(te.isMeshStandardMaterial?$:E).get(te.envMap||Me),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let pt=vr;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(pt=C.toneMapping);const sn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,st=sn!==void 0?sn.length:0,je=qe.get(te),$n=g.state.lights;if(fe===!0&&(Ee===!0||A!==R)){const mn=A===R&&te.id===b;Se.setState(te,A,mn)}let yt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==$n.state.version||je.outputColorSpace!==Ge||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isBatchedMesh&&je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==ze||te.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==mt||je.morphColors!==Mt||je.toneMapping!==pt||je.morphTargetsCount!==st)&&(yt=!0):(yt=!0,je.__version=te.version);let on=je.currentProgram;yt===!0&&(on=Kr(te,V,G));let Kn=!1,jt=!1,fi=!1;const Pt=on.getUniforms(),kn=je.uniforms;if(Ye.useProgram(on.program)&&(Kn=!0,jt=!0,fi=!0),te.id!==b&&(b=te.id,jt=!0),Kn||R!==A){Ye.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),Kv(xe),Zv(xe),Pt.setValue(X,"projectionMatrix",xe)):Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const Bn=Pt.map.cameraPosition;Bn!==void 0&&Bn.setValue(X,Ie.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,jt=!0,fi=!0)}if(G.isSkinnedMesh){Pt.setOptional(X,G,"bindMatrix"),Pt.setOptional(X,G,"bindMatrixInverse");const mn=G.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(X,"boneTexture",mn.boneTexture,P))}G.isBatchedMesh&&(Pt.setOptional(X,G,"batchingTexture"),Pt.setValue(X,"batchingTexture",G._matricesTexture,P),Pt.setOptional(X,G,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",G._indirectTexture,P),Pt.setOptional(X,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",G._colorsTexture,P));const Ei=ee.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Je.update(G,ee,on),(jt||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,Pt.setValue(X,"receiveShadow",G.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(kn.envMapIntensity.value=V.environmentIntensity),jt&&(Pt.setValue(X,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&Go(kn,fi),we&&te.fog===!0&&Ce.refreshFogUniforms(kn,we),Ce.refreshMaterialUniforms(kn,te,B,ue,g.state.transmissionRenderTarget[A.id]),Sl.upload(X,Ho(je),kn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Sl.upload(X,Ho(je),kn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(X,"center",G.center),Pt.setValue(X,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(X,"normalMatrix",G.normalMatrix),Pt.setValue(X,"modelMatrix",G.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const mn=te.uniformsGroups;for(let Bn=0,yn=mn.length;Bn<yn;Bn++){const Wo=mn[Bn];H.update(Wo,on),H.bind(Wo,on)}}return on}function Go(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,V,ee){qe.get(A.texture).__webglTexture=V,qe.get(A.depthTexture).__webglTexture=ee;const te=qe.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const ee=qe.get(A);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ee=0){W=A,O=V,U=ee;let te=!0,G=null,we=!1,Me=!1;if(A){const ze=qe.get(A);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(X.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ze.__hasExternalTextures)P.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?G=nt[V][ee]:G=nt[V],we=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?G=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?G=nt[ee]:G=nt,k.copy(A.viewport),ie.copy(A.scissor),Z=A.scissorTest}else k.copy(I).multiplyScalar(B).floor(),ie.copy(re).multiplyScalar(B).floor(),Z=Ne;if(Ye.bindFramebuffer(X.FRAMEBUFFER,G)&&te&&Ye.drawBuffers(A,G),Ye.viewport(k),Ye.scissor(ie),Ye.setScissorTest(Z),we){const ze=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,ee)}else if(Me){const ze=qe.get(A.texture),et=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,et)}b=-1},this.readRenderTargetPixels=function(A,V,ee,te,G,we,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-te&&ee>=0&&ee<=A.height-G&&X.readPixels(V,ee,te,G,it.convert(et),it.convert(nt),we)}finally{const ze=W!==null?qe.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,V,ee,te,G,we,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-te&&ee>=0&&ee<=A.height-G){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,we.byteLength,X.STREAM_READ),X.readPixels(V,ee,te,G,it.convert(et),it.convert(nt),0);const mt=W!==null?qe.get(W).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,mt);const Mt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await $v(X,Mt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,we),X.deleteBuffer(We),X.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,ee=0){A.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ee),G=Math.floor(A.image.width*te),we=Math.floor(A.image.height*te),Me=V!==null?V.x:0,Ge=V!==null?V.y:0;P.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,Me,Ge,G,we),Ye.unbindTexture()},this.copyTextureToTexture=function(A,V,ee=null,te=null,G=0){A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,ee=null);let we,Me,Ge,ze,et,nt,We,mt,Mt;const pt=A.isCompressedTexture?A.mipmaps[G]:A.image;ee!==null?(we=ee.max.x-ee.min.x,Me=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,et=ee.min.y,nt=ee.isBox3?ee.min.z:0):(we=pt.width,Me=pt.height,Ge=pt.depth||1,ze=0,et=0,nt=0),te!==null?(We=te.x,mt=te.y,Mt=te.z):(We=0,mt=0,Mt=0);const sn=it.convert(V.format),st=it.convert(V.type);let je;V.isData3DTexture?(P.setTexture3D(V,0),je=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),je=X.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),je=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);const $n=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),on=X.getParameter(X.UNPACK_SKIP_PIXELS),Kn=X.getParameter(X.UNPACK_SKIP_ROWS),jt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,pt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const fi=A.isDataArrayTexture||A.isData3DTexture,Pt=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const kn=qe.get(A),Ei=qe.get(V),mn=qe.get(kn.__renderTarget),Bn=qe.get(Ei.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let yn=0;yn<Ge;yn++)fi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,G,nt+yn),A.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(V).__webglTexture,G,Mt+yn),X.blitFramebuffer(ze,et,we,Me,We,mt,we,Me,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(je,G,We,mt,Mt+yn,ze,et,we,Me):X.copyTexSubImage2D(je,G,We,mt,Mt+yn,ze,et,we,Me);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(je,G,We,mt,Mt,we,Me,Ge,sn,st,pt.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(je,G,We,mt,Mt,we,Me,Ge,sn,pt.data):X.texSubImage3D(je,G,We,mt,Mt,we,Me,Ge,sn,st,pt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,G,We,mt,we,Me,sn,st,pt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,G,We,mt,pt.width,pt.height,sn,pt.data):X.texSubImage2D(X.TEXTURE_2D,G,We,mt,we,Me,sn,st,pt);X.pixelStorei(X.UNPACK_ROW_LENGTH,$n),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,on),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,jt),G===0&&V.generateMipmaps&&X.generateMipmap(je),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,V,ee=null,te=null,G=0){return A.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0),No('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,ee,te,G)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){O=0,U=0,W=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class aE extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fg extends Xs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new Q,wl=new Q,Em=new Bt,Do=new Km,pl=new Rl,Xc=new Q,Tm=new Q;class lE extends rn{constructor(e=new yi,n=new fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Tl.fromBufferAttribute(n,a-1),wl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Tl.distanceTo(wl);e.setAttribute("lineDistance",new Ln(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(a),pl.radius+=u,e.ray.intersectsSphere(pl)===!1)return;Em.copy(a).invert(),Do.copy(e.ray).applyMatrix4(Em);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let w=S,y=T-1;w<y;w+=m){const g=_.getX(w),N=_.getX(w+1),L=ml(this,e,Do,h,g,N);L&&n.push(L)}if(this.isLineLoop){const w=_.getX(T-1),y=_.getX(S),g=ml(this,e,Do,h,w,y);g&&n.push(g)}}else{const S=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let w=S,y=T-1;w<y;w+=m){const g=ml(this,e,Do,h,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=ml(this,e,Do,h,T-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function ml(s,e,n,r,a,u){const d=s.geometry.attributes.position;if(Tl.fromBufferAttribute(d,a),wl.fromBufferAttribute(d,u),n.distanceSqToSegment(Tl,wl,Xc,Tm)>r)return;Xc.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Xc);if(!(h<e.near||h>e.far))return{distance:h,point:Tm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const wm=new Q,Am=new Q;class uE extends lE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)wm.fromBufferAttribute(n,a),Am.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+wm.distanceTo(Am);e.setAttribute("lineDistance",new Ln(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jf extends yi{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:d,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(d+f,Math.PI);let m=0;const _=[],v=new Q,x=new Q,S=[],T=[],w=[],y=[];for(let g=0;g<=r;g++){const N=[],L=g/r;let C=0;g===0&&d===0?C=.5/n:g===r&&h===Math.PI&&(C=-.5/n);for(let q=0;q<=n;q++){const O=q/n;v.x=-e*Math.cos(a+O*u)*Math.sin(d+L*f),v.y=e*Math.cos(d+L*f),v.z=e*Math.sin(a+O*u)*Math.sin(d+L*f),T.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),y.push(O+C,1-L),N.push(m++)}_.push(N)}for(let g=0;g<r;g++)for(let N=0;N<n;N++){const L=_[g][N+1],C=_[g][N],q=_[g+1][N],O=_[g+1][N+1];(g!==0||d>0)&&S.push(L,C,O),(g!==r-1||h<Math.PI)&&S.push(C,q,O)}this.setIndex(S),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(w,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cE extends Xs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xm,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dg extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jc=new Bt,Cm=new Q,Rm=new Q;class fE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cm),Rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rm),n.updateMatrixWorld(),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dE extends fE{constructor(){super(new sg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hE extends dg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new dE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pE extends dg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bm(){return performance.now()}class gE extends uE{constructor(e=10,n=10,r=4473924,a=8947848){r=new gt(r),a=new gt(a);const u=n/2,d=e/n,f=e/2,h=[],m=[];for(let x=0,S=0,T=-f;x<=n;x++,T+=d){h.push(-f,0,T,f,0,T),h.push(T,0,-f,T,0,f);const w=x===u?r:a;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const _=new yi;_.setAttribute("position",new Ln(h,3)),_.setAttribute("color",new Ln(m,3));const v=new fg({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);function _E({activeFocus:s="all",contentionRate:e=.75}){const n=Ct.useRef(null),r=Ct.useRef(s),a=Ct.useRef(e);return Ct.useEffect(()=>{r.current=s},[s]),Ct.useEffect(()=>{a.current=e},[e]),Ct.useEffect(()=>{const u=n.current;if(!u)return;const d=u.clientWidth||720,f=u.clientHeight||320,h=new aE;h.background=new gt(132631);const m=new Yn(45,d/f,.1,100);m.position.set(0,4.4,9.2),m.lookAt(0,0,0);const _=new oE({antialias:!0});_.setSize(d,f),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.innerHTML="",u.appendChild(_.domElement);const v=new pE(9741240,1.1);h.add(v);const x=new hE(3718648,1.8);x.position.set(5,8,6),h.add(x);const S=new gE(12,12,1976635,988970);S.position.y=-1.5,h.add(S);const T=(k,ie,Z=[1.5,.7,1.1])=>{const ce=new js(...Z),de=new cE({color:k,roughness:.35,metalness:.25}),oe=new li(ce,de);return oe.position.set(...ie),h.add(oe),oe},w=T(16096779,[-3.8,.7,0]),y=T(1096065,[-3.8,-.8,0]),g=T(3718648,[0,.8,0]),N=T(8490232,[0,-.8,0]),L=T(16007006,[3.8,0,0],[1.7,1.4,1.3]),C=new jf(.14,12,12),q=new Gf({color:16638023}),O=[0,1,2].map(k=>{const ie=new li(C,q);return ie.position.set(0,(k-1)*.6,.8),h.add(ie),ie}),U=()=>{if(!u)return;const k=u.clientWidth||720,ie=u.clientHeight||320;m.aspect=k/ie,m.updateProjectionMatrix(),_.setSize(k,ie)};window.addEventListener("resize",U);let W;const b=new mE,R=()=>{W=requestAnimationFrame(R);const k=b.getElapsedTime(),ie=r.current,Z=.6+a.current*1.8;w.rotation.y=Math.sin(k*.8)*.15,y.rotation.y=Math.cos(k*.8)*.15,L.rotation.y=k*.35,w.scale.setScalar(ie==="wireless"||ie==="all"?1.08:.94),y.scale.setScalar(ie==="wireless"||ie==="all"?1.08:.94),g.scale.setScalar(ie==="systemd"||ie==="all"?1.08:.94),N.scale.setScalar(ie==="systemd"||ie==="all"?1.08:.94),L.scale.setScalar(ie==="sqlite"||ie==="all"?1.08:.94),O.forEach((ce,de)=>{const oe=(k*Z+de*.33)%1;ce.position.x=-2.8+oe*5.6,ce.position.y=Math.sin(oe*Math.PI*2+de)*.75}),_.render(h,m)};return R(),()=>{cancelAnimationFrame(W),window.removeEventListener("resize",U),_.dispose()}},[]),ne.jsxs("div",{className:"rounded-xl border border-slate-800 bg-slate-900/80 p-3",children:[ne.jsxs("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300",children:[ne.jsx("span",{className:"font-semibold uppercase tracking-wider text-sky-400",children:"3D Topology: Dual-Wi-Fi Plane, 60s Timers & SQLite WAL Target"}),ne.jsxs("div",{className:"flex flex-wrap gap-3 text-[11px]",children:[ne.jsx("span",{className:"text-amber-400",children:"■ BCM4331 (b43)"}),ne.jsx("span",{className:"text-emerald-400",children:"■ RTL8188ETV (rtl8xxxu)"}),ne.jsx("span",{className:"text-sky-400",children:"■ 60s Timers"}),ne.jsx("span",{className:"text-rose-400",children:"■ SQLite Store"})]})]}),ne.jsxs("div",{className:"mb-2 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400",children:[ne.jsx("div",{className:"rounded bg-slate-950/70 py-1",children:"Plane 1: Dual 2.4 GHz Stations"}),ne.jsx("div",{className:"rounded bg-slate-950/70 py-1",children:"Plane 2: 60s Oneshot Timers"}),ne.jsx("div",{className:"rounded bg-slate-950/70 py-1",children:"Plane 3: SQLite WAL Store"})]}),ne.jsx("div",{ref:n,className:"h-[320px] w-full overflow-hidden rounded-lg"})]})}const Pm={confirmed:"bg-sky-950 text-sky-300 border-sky-700",defect:"bg-rose-950 text-rose-300 border-rose-700",mitigated:"bg-emerald-950 text-emerald-300 border-emerald-700",unknown:"bg-amber-950 text-amber-300 border-amber-700"};function vE(){return ne.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70",children:ne.jsxs("table",{className:"min-w-full text-left text-xs",children:[ne.jsx("thead",{className:"border-b border-slate-800 bg-slate-900 text-slate-400",children:ne.jsxs("tr",{children:[ne.jsx("th",{className:"px-4 py-2.5",children:"Adapter / Driver"}),ne.jsx("th",{className:"px-4 py-2.5",children:"Interface / IP"}),ne.jsx("th",{className:"px-4 py-2.5",children:"Metric"}),ne.jsx("th",{className:"px-4 py-2.5",children:"RSSI"}),ne.jsx("th",{className:"px-4 py-2.5",children:"GW Loss"}),ne.jsx("th",{className:"px-4 py-2.5",children:"1.1.1.1 Loss"}),ne.jsx("th",{className:"px-4 py-2.5",children:"Role Assessment"})]})}),ne.jsx("tbody",{className:"divide-y divide-slate-800/80 text-slate-200",children:iv.map(s=>ne.jsxs("tr",{children:[ne.jsx("td",{className:"px-4 py-2.5 font-medium",children:s.label}),ne.jsxs("td",{className:"px-4 py-2.5 font-mono text-[11px]",children:[s.iface," (",s.ip,")"]}),ne.jsx("td",{className:"px-4 py-2.5 font-mono",children:s.metric}),ne.jsxs("td",{className:"px-4 py-2.5 font-mono",children:[s.signalDbm," dBm"]}),ne.jsxs("td",{className:"px-4 py-2.5 font-mono",children:[s.gatewayLossPct,"%"]}),ne.jsxs("td",{className:"px-4 py-2.5 font-mono",children:[s.externalLossPct,"%"]}),ne.jsx("td",{className:"px-4 py-2.5 text-slate-300",children:s.role})]},s.id))})]})})}function xE({findings:s,selectedFindingId:e,onSelectFinding:n,notes:r,backendDetected:a,onAddNote:u,noteDraft:d,setNoteDraft:f}){return ne.jsx("div",{className:"space-y-3",children:s.map(h=>{const m=h.id===e,_=r.filter(v=>v.finding_id===h.id);return ne.jsxs("article",{onClick:()=>n(h.id),className:`cursor-pointer rounded-xl border p-4 transition ${m?"border-sky-500 bg-slate-900":"border-slate-800 bg-slate-900/60 hover:border-slate-700"}`,children:[ne.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[ne.jsx("h3",{className:"text-sm font-semibold text-white",children:h.title}),ne.jsx("span",{className:`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${Pm[h.severity]||Pm.confirmed}`,children:h.severity})]}),ne.jsxs("p",{className:"mt-2 text-xs leading-relaxed text-slate-300",children:[ne.jsx("strong",{className:"text-slate-100",children:"Evidence:"})," ",h.evidence]}),ne.jsxs("p",{className:"mt-1.5 text-xs leading-relaxed text-slate-400",children:[ne.jsx("strong",{className:"text-slate-200",children:"Mechanism:"})," ",h.mechanism]}),_.length>0&&ne.jsx("div",{className:"mt-3 space-y-1.5 border-t border-slate-800 pt-2.5",children:_.map((v,x)=>ne.jsxs("div",{className:"rounded bg-slate-950/80 px-2.5 py-1.5 text-[11px] text-slate-300",children:[ne.jsxs("span",{className:"font-mono text-sky-400",children:[v.author,":"]})," ",v.note]},v.id||x))}),m&&ne.jsxs("form",{onSubmit:v=>{v.preventDefault(),v.stopPropagation(),u(h.id)},onClick:v=>v.stopPropagation(),className:"mt-3 flex gap-2 border-t border-slate-800 pt-3",children:[ne.jsx("input",{type:"text",value:d,onChange:v=>f(v.target.value),placeholder:a?"Persist operator annotation to SQLite WAL/FTS5 backend...":"Add local session annotation (connect Docker backend to persist)...",className:"flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"}),ne.jsx("button",{type:"submit",className:"rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500",children:"Save Note"})]})]},h.id)})})}function yE(){const[s,e]=Ct.useState(null),[n,r]=Ct.useState(()=>{const f={};return Tp.forEach((h,m)=>{f[h.id]=m===0}),f});function a(f){r(h=>({...h,[f]:!h[f]}))}async function u(f){try{navigator.clipboard&&navigator.clipboard.writeText&&await navigator.clipboard.writeText(f.code)}catch{}e(f.id),setTimeout(()=>{e(h=>h===f.id?null:h)},1800)}function d(f){const h=new Blob([f.code],{type:"text/plain;charset=utf-8"}),m=URL.createObjectURL(h),_=document.createElement("a");_.href=m,_.download=f.filename,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(m)}return ne.jsx("div",{className:"space-y-3",children:Tp.map(f=>{const h=!!n[f.id];return ne.jsxs("div",{className:"overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80",children:[ne.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2.5",children:[ne.jsxs("div",{className:"flex items-center gap-2.5",children:[ne.jsx("button",{type:"button","aria-label":`${h?"Collapse":"Expand"} ${f.filename}`,onClick:()=>a(f.id),className:"flex h-6 w-6 items-center justify-center rounded border border-slate-700 bg-slate-800 font-mono text-xs font-bold text-sky-300 hover:bg-slate-700",children:h?"-":"+"}),ne.jsxs("div",{children:[ne.jsx("div",{className:"text-xs font-semibold text-white",children:f.title}),ne.jsx("div",{className:"font-mono text-[11px] text-slate-400",children:f.filename})]})]}),ne.jsxs("div",{className:"flex items-center gap-2",children:[ne.jsx("button",{type:"button",onClick:()=>u(f),className:"rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-100 hover:bg-slate-700",children:s===f.id?"Copied":"Copy"}),ne.jsx("button",{type:"button",onClick:()=>d(f),className:"rounded-md bg-sky-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-sky-500",children:"Download"})]})]}),h&&ne.jsxs(ne.Fragment,{children:[ne.jsx("p",{className:"border-b border-slate-800/70 bg-slate-950/50 px-4 py-2 text-xs text-slate-300",children:f.summary}),ne.jsx("pre",{className:"max-h-80 overflow-auto bg-slate-950 p-4 font-mono text-[11px] leading-relaxed text-slate-200",children:ne.jsx("code",{children:f.code})})]})]},f.id)})})}const SE=[void 0,"http://127.0.0.1:8088","http://localhost:8088"].filter(Boolean);function ME(){const[s,e]=Ct.useState(null),[n,r]=Ct.useState(null),[a,u]=Ct.useState(!0);return Ct.useEffect(()=>{let d=!0;const f=new AbortController;async function h(){u(!0);for(const m of SE){const _=m.replace(/\/+$/,"");try{const v=setTimeout(()=>f.abort(),1200),x=await fetch(`${_}/api/health`,{signal:f.signal});if(clearTimeout(v),x.ok){const S=await x.json();d&&(e(_),r(S),u(!1));return}}catch{}}d&&(e(null),r(null),u(!1))}return h(),()=>{d=!1,f.abort()}},[]),{backendDetected:!!s,backendUrl:s,health:n,checking:a}}function EE(){const{backendDetected:s,backendUrl:e,health:n,checking:r}=ME(),[a,u]=Ct.useState("all"),[d,f]=Ct.useState(""),[h,m]=Ct.useState(.75),[_,v]=Ct.useState(pc[0].id),[x,S]=Ct.useState(pc),[T,w]=Ct.useState([]),[y,g]=Ct.useState("");Ct.useEffect(()=>{let C=!0;async function q(){if(!(!s||!e))try{const O=new URLSearchParams;a!=="all"&&O.set("domain",a),d.trim()&&O.set("q",d.trim());const U=await fetch(`${e}/api/findings?${O.toString()}`);if(!U.ok)return;const W=await U.json();C&&Array.isArray(W.findings)&&(S(W.findings),w(Array.isArray(W.notes)?W.notes:[]))}catch{}}return q(),()=>{C=!1}},[s,e,a,d]);const N=Ct.useMemo(()=>{if(s)return x;const C=d.trim().toLowerCase();return pc.filter(q=>{const O=a==="all"||q.domain===a,U=!C||q.title.toLowerCase().includes(C)||q.evidence.toLowerCase().includes(C)||q.mechanism.toLowerCase().includes(C);return O&&U})},[s,x,a,d]);async function L(C){const q=y.trim();if(q){if(s&&e)try{const O=await fetch(`${e}/api/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({finding_id:C,author:"auditor",note:q})});if(O.ok){const U=await O.json();w(W=>[U,...W]),g("");return}}catch{}w(O=>[{id:Date.now(),finding_id:C,author:"local-session",note:q},...O]),g("")}}return ne.jsxs("div",{id:"top",className:"min-h-screen bg-slate-950 text-slate-100",children:[ne.jsxs("header",{className:"border-b border-slate-800 bg-slate-900/90",children:[ne.jsxs("div",{className:"mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4",children:[ne.jsxs("div",{children:[ne.jsx("h1",{className:"text-lg font-bold tracking-tight text-white",children:"Dual-Wi-Fi & SQLite Contention Forensic Explainer"}),ne.jsx("p",{className:"text-xs text-slate-400",children:"Fedora Audit • BCM4331 (b43) vs. RTL8188ETV (rtl8xxxu) • SQLite WAL & Host SSH"})]}),ne.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs",children:[ne.jsx("span",{className:`h-2.5 w-2.5 rounded-full ${s?"bg-emerald-400":r?"bg-amber-400":"bg-slate-500"}`}),ne.jsx("span",{className:"font-mono text-slate-200",children:r?"Probing Docker backend...":s?`Backend Detected (${(n==null?void 0:n.engine)||"SQLite WAL/FTS5"})`:"Static Mode (No Docker Backend Detected)"})]})]}),ne.jsx("nav",{"aria-label":"Section jump links",className:"border-t border-slate-800/80 bg-slate-950/60",children:ne.jsxs("div",{className:"mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-2 text-xs",children:[ne.jsx("a",{href:"#enable-backend",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"1. Backend & SSH"}),ne.jsx("a",{href:"#topology-3d",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"2. 3D Topology"}),ne.jsx("a",{href:"#adapter-table",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"3. Wi-Fi Telemetry"}),ne.jsx("a",{href:"#findings-list",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"4. Findings"}),ne.jsx("a",{href:"#user-code",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"5. User Code"}),ne.jsx("a",{href:"#citations",className:"rounded bg-slate-900 px-2.5 py-1 text-sky-300 hover:bg-slate-800",children:"6. Citations"})]})})]}),ne.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-6",children:[ne.jsx(sv,{backendDetected:s,backendUrl:e,health:n}),ne.jsx("section",{id:"topology-3d",children:ne.jsx(_E,{activeFocus:a,contentionRate:h})}),ne.jsxs("section",{className:"grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:grid-cols-3",children:[ne.jsxs("div",{children:[ne.jsx("label",{className:"block text-xs font-medium text-slate-300",children:"Subsystem Filter"}),ne.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:["all","wireless","sqlite","systemd"].map(C=>ne.jsx("button",{type:"button",onClick:()=>u(C),className:`rounded-lg px-3 py-1 text-xs font-medium capitalize ${a===C?"bg-sky-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:C},C))})]}),ne.jsxs("div",{children:[ne.jsxs("label",{htmlFor:"search-input",className:"block text-xs font-medium text-slate-300",children:["Search Findings ",s?"(SQLite FTS5)":"(Client Filter)"]}),ne.jsx("input",{id:"search-input",type:"text",value:d,onChange:C=>f(C.target.value),placeholder:"Search lock, b43, ipv6, timer...",className:"mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none"})]}),ne.jsxs("div",{children:[ne.jsxs("label",{htmlFor:"contention-slider",className:"block text-xs font-medium text-slate-300",children:["3D Write-Contention Simulation Rate (",Math.round(h*100),"%)"]}),ne.jsx("input",{id:"contention-slider",type:"range",min:"0.1",max:"1",step:"0.05",value:h,onChange:C=>m(parseFloat(C.target.value)),className:"mt-3 w-full accent-sky-500"}),ne.jsxs("div",{className:"mt-1 flex justify-between font-mono text-[10px] text-slate-400",children:[ne.jsx("span",{children:"10%"}),ne.jsx("span",{children:"55%"}),ne.jsx("span",{children:"100%"})]})]})]}),ne.jsxs("section",{id:"adapter-table",className:"space-y-2",children:[ne.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wider text-slate-300",children:"Empirical Wireless Adapter Comparison (100-Packet Sample)"}),ne.jsx(vE,{})]}),ne.jsxs("section",{id:"findings-list",className:"space-y-3",children:[ne.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wider text-slate-300",children:"Audited Findings & Root-Cause Mechanisms"}),ne.jsx(xE,{findings:N,selectedFindingId:_,onSelectFinding:v,notes:T,backendDetected:s,onAddNote:L,noteDraft:y,setNoteDraft:g})]}),ne.jsxs("section",{id:"user-code",className:"space-y-3",children:[ne.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wider text-slate-300",children:"Example User Code (Collapsible + / - • Copy & Download)"}),ne.jsx(yE,{})]}),ne.jsxs("footer",{id:"citations",className:"rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-400",children:[ne.jsx("div",{className:"font-semibold text-slate-200",children:"Verified References & Citations"}),ne.jsx("ul",{className:"mt-2 grid gap-1.5 sm:grid-cols-2",children:rv.map(C=>ne.jsx("li",{children:ne.jsx("a",{href:C.url,target:"_blank",rel:"noreferrer",className:"text-sky-400 underline hover:text-sky-300",children:C.label})},C.label))})]})]})]})}tv.createRoot(document.getElementById("root")).render(ne.jsx(Y_.StrictMode,{children:ne.jsx(EE,{})}));
