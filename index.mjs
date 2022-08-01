// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function g(e,t,n){return!p(e)||h(e)?new TypeError(u("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!p(t)||h(t)?new TypeError(u("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):!p(n)||h(n)?new TypeError(u("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",n)):e<=n&&n<=t?null:new RangeError(u("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",e,t,n))}function j(e,t,n,s){var r,i;return r=(s-t)/(n-t),(i=e())<r?t+f((n-t)*(s-t)*i):n-f((n-t)*(n-s)*(1-i))}function c(){var p,h,f,c,b,v,y;if(0===arguments.length)h=m();else if(1===arguments.length){if(!s(p=arguments[0]))throw new TypeError(u("0PT2h",p));if(i(p,"prng")){if(!r(p.prng))throw new TypeError(u("0PT7M","prng",p.prng));h=p.prng}else h=m(p)}else{if(c=g(b=arguments[0],v=arguments[1],y=arguments[2]))throw c;if(arguments.length>3){if(!s(p=arguments[3]))throw new TypeError(u("0PT2h",p));if(i(p,"prng")){if(!r(p.prng))throw new TypeError(u("0PT7M","prng",p.prng));h=p.prng}else h=m(p)}else h=m()}return e(f=void 0===b?R:M,"NAME","triangular"),p&&p.prng?(e(f,"seed",null),e(f,"seedLength",null),n(f,"state",o(null),d),e(f,"stateLength",null),e(f,"byteLength",null),e(f,"toJSON",o(null)),e(f,"PRNG",h)):(t(f,"seed",w),t(f,"seedLength",x),n(f,"state",E,L),t(f,"stateLength",N),t(f,"byteLength",T),e(f,"toJSON",P),e(f,"PRNG",h),h=h.normalized),f;function w(){return h.seed}function x(){return h.seedLength}function N(){return h.stateLength}function T(){return h.byteLength}function E(){return h.state}function L(e){h.state=e}function P(){var e={type:"PRNG"};return e.name=f.NAME,e.state=l(h.state),e.params=void 0===b?[]:[b,v,y],e}function M(){return j(h,b,v,y)}function R(e,t,n){return a(e)||a(t)||a(n)||!(e<=n&&n<=t)?NaN:j(h,e,t,n)}}var b=c();e(b,"factory",c);export{b as default,c as factory};
//# sourceMappingURL=index.mjs.map