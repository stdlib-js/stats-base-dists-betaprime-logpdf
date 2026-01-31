"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=q(function(z,f){
var g=require('@stdlib/math-base-special-betaln/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-log1p/dist'),d=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist');function l(e,r,u){var i;return o(e)||o(r)||o(u)||r<=0||u<=0?NaN:e<=0?F:(i=(r-1)*d(e),i-=(r+u)*y(e),i-=g(r,u),i)}f.exports=l
});var N=q(function(C,c){
var I=require('@stdlib/utils-constant-function/dist'),m=require('@stdlib/math-base-special-betaln/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-special-log1p/dist'),B=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist');function R(e,r){var u;if(v(e)||v(r)||e<=0||r<=0)return I(NaN);return u=m(e,r),i;function i(n){var t;return v(n)?NaN:n<=0?O:(t=(e-1)*B(n),t-=(e+r)*A(n),t-=u,t)}}c.exports=R
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=s(),k=N();j(a,"factory",k);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
