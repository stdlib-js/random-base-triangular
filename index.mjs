// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var h=p.isPrimitive,j=u,c=g;var b=function(e,t,n){return!h(e)||c(e)?new TypeError(j("invalid argument. First argument must be a number and not `NaN`. Value: `%s`.",e)):!h(t)||c(t)?new TypeError(j("invalid argument. Second argument must be a number and not `NaN`. Value: `%s`.",t)):!h(n)||c(n)?new TypeError(j("invalid argument. Third argument must be a number and not `NaN`. Value: `%s`.",n)):e<=n&&n<=t?null:new RangeError(j("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `[%f,%f,%f]`.",e,t,n))},v=f;var y=function(e,t,n,r){var s,i;return s=(r-t)/(n-t),(i=e())<s?t+v((n-t)*(r-t)*i):n-v((n-t)*(n-r)*(1-i))},x=e,w=t,N=n,E=r,L=s,T=i,O=o,V=a,P=m.factory,R=d,G=l,S=u,A=b,J=y;var M=function(){var e,t,n,r,s,i,o;if(0===arguments.length)t=P();else if(1===arguments.length){if(!E(e=arguments[0]))throw new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",e));if(T(e,"prng")){if(!L(e.prng))throw new TypeError(S("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",e.prng));t=e.prng}else t=P(e)}else{if(r=A(s=arguments[0],i=arguments[1],o=arguments[2]))throw r;if(arguments.length>3){if(!E(e=arguments[3]))throw new TypeError(S("invalid argument. Options argument must be an object. Value: `%s`.",e));if(T(e,"prng")){if(!L(e.prng))throw new TypeError(S("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",e.prng));t=e.prng}else t=P(e)}else t=P()}return x(n=void 0===s?h:f,"NAME","triangular"),e&&e.prng?(x(n,"seed",null),x(n,"seedLength",null),N(n,"state",O(null),V),x(n,"stateLength",null),x(n,"byteLength",null),x(n,"toJSON",O(null)),x(n,"PRNG",t)):(w(n,"seed",a),w(n,"seedLength",m),N(n,"state",u,p),w(n,"stateLength",d),w(n,"byteLength",l),x(n,"toJSON",g),x(n,"PRNG",t),t=t.normalized),n;function a(){return t.seed}function m(){return t.seedLength}function d(){return t.stateLength}function l(){return t.byteLength}function u(){return t.state}function p(e){t.state=e}function g(){var e={type:"PRNG"};return e.name=n.NAME,e.state=G(t.state),e.params=void 0===s?[]:[s,i,o],e}function f(){return J(t,s,i,o)}function h(e,n,r){return R(e)||R(n)||R(r)||!(e<=r&&r<=n)?NaN:J(t,e,n,r)}},q=M(),z=M;e(q,"factory",z);var F=q;export{F as default,z as factory};
//# sourceMappingURL=index.mjs.map
