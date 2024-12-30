"use strict";var l=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var w=l(function(er,N){
var c=require('@stdlib/assert-is-number/dist').isPrimitive,v=require('@stdlib/error-tools-fmtprodmsg/dist'),q=require('@stdlib/assert-is-nan/dist');function H(t,r,e){return !c(t)||q(t)?new TypeError(v('0p96v',t)):!c(r)||q(r)?new TypeError(v('0p96w',r)):!c(e)||q(e)?new TypeError(v('0p97C',e)):t<=e&&e<=r?null:new RangeError(v('0p99C',"a <= c <= b",t,r,e));}N.exports=H
});var L=l(function(tr,O){
var b=require('@stdlib/math-base-special-sqrt/dist');function I(t,r,e,o){var a,u,i;return a=(o-r)/(e-r),i=t(),i<a?(u=(e-r)*(o-r),r+b(u*i)):(u=(e-r)*(e-o),e-b(u*(1-i)))}O.exports=I
});var y=l(function(nr,V){
var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),S=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),E=require('@stdlib/assert-is-plain-object/dist'),R=require('@stdlib/assert-is-function/dist'),T=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/utils-constant-function/dist'),K=require('@stdlib/utils-noop/dist'),m=require('@stdlib/random-base-mt19937/dist').factory,h=require('@stdlib/math-base-assert-is-nan/dist'),Q=require('@stdlib/array-to-json/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),U=w(),P=L();function X(){var t,r,e,o,a,u,i;if(arguments.length===0)r=m();else if(arguments.length===1){if(t=arguments[0],!E(t))throw new TypeError(p('0p92V',t));if(T(t,"prng")){if(!R(t.prng))throw new TypeError(p('0p96u',"prng",t.prng));r=t.prng}else r=m(t)}else{if(a=arguments[0],u=arguments[1],i=arguments[2],o=U(a,u,i),o)throw o;if(arguments.length>3){if(t=arguments[3],!E(t))throw new TypeError(p('0p92V',t));if(T(t,"prng")){if(!R(t.prng))throw new TypeError(p('0p96u',"prng",t.prng));r=t.prng}else r=m(t)}else r=m()}return a===void 0?e=D:e=C,s(e,"NAME","triangular"),t&&t.prng?(s(e,"seed",null),s(e,"seedLength",null),S(e,"state",x(null),K),s(e,"stateLength",null),s(e,"byteLength",null),s(e,"toJSON",x(null)),s(e,"PRNG",r)):(f(e,"seed",G),f(e,"seedLength",J),S(e,"state",W,k),f(e,"stateLength",z),f(e,"byteLength",M),s(e,"toJSON",B),s(e,"PRNG",r),r=r.normalized),e;function G(){return r.seed}function J(){return r.seedLength}function z(){return r.stateLength}function M(){return r.byteLength}function W(){return r.state}function k(n){r.state=n}function B(){var n={};return n.type="PRNG",n.name=e.NAME,n.state=Q(r.state),a===void 0?n.params=[]:n.params=[a,u,i],n}function C(){return P(r,a,u,i)}function D(n,d,g){return h(n)||h(d)||h(g)||!(n<=g&&g<=d)?NaN:P(r,n,d,g)}}V.exports=X
});var A=l(function(ar,j){
var Y=y(),Z=Y();j.exports=Z
});var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=A(),$=y();_(F,"factory",$);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
