(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d1b4fe9"],{"02f4":function(t,e,r){var n=r("4588"),c=r("be13");t.exports=function(t){return function(e,r){var i,o,a=String(c(e)),s=n(r),u=a.length;return s<0||s>=u?t?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===u||(o=a.charCodeAt(s+1))<56320||o>57343?t?a.charAt(s):i:t?a.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),c=r("32e9"),i=r("79e5"),o=r("be13"),a=r("2b4c"),s=r("520a"),u=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=a(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=h?!i((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!e})):void 0;if(!h||!v||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],g=r(o,p,""[t],(function(t,e,r,n,c){return e.exec===s?h&&!c?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),m=g[0],b=g[1];n(String.prototype,t,m),c(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,r){"use strict";var n=r("aae3"),c=r("cb7c"),i=r("ebd6"),o=r("0390"),a=r("9def"),s=r("5f1b"),u=r("520a"),l=r("79e5"),f=Math.min,p=[].push,h="split",v="length",d="lastIndex",g=4294967295,m=!l((function(){RegExp(g,"y")}));r("214f")("split",2,(function(t,e,r,l){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[v]||2!="ab"[h](/(?:ab)*/)[v]||4!="."[h](/(.?)(.?)/)[v]||"."[h](/()()/)[v]>1||""[h](/.?/)[v]?function(t,e){var c=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(c,t,e);var i,o,a,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?g:e>>>0,m=new RegExp(t.source,l+"g");while(i=u.call(m,c)){if(o=m[d],o>f&&(s.push(c.slice(f,i.index)),i[v]>1&&i.index<c[v]&&p.apply(s,i.slice(1)),a=i[0][v],f=o,s[v]>=h))break;m[d]===i.index&&m[d]++}return f===c[v]?!a&&m.test("")||s.push(""):s.push(c.slice(f)),s[v]>h?s.slice(0,h):s}:"0"[h](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var c=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,c,n):b.call(String(c),r,n)},function(t,e){var n=l(b,t,this,e,b!==r);if(n.done)return n.value;var u=c(t),p=String(this),h=i(u,RegExp),v=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(m?"y":"g"),x=new h(m?u:"^(?:"+u.source+")",d),_=void 0===e?g:e>>>0;if(0===_)return[];if(0===p.length)return null===s(x,p)?[p]:[];var C=0,$=0,y=[];while($<p.length){x.lastIndex=m?$:0;var k,E=s(x,m?p:p.slice($));if(null===E||(k=f(a(x.lastIndex+(m?0:$)),p.length))===C)$=o(p,$,v);else{if(y.push(p.slice(C,$)),y.length===_)return y;for(var w=1;w<=E.length-1;w++)if(y.push(E[w]),y.length===_)return y;$=C=k}}return y.push(p.slice(C)),y}]}))},"3eaf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cartWrap",on:{click:function(t){t.stopPropagation()}}},["/checkout/cart"!==t.$route.path?r("i",{staticClass:"rwdMenu fas fa-angle-left",on:{click:function(e){return t.$store.commit("OPENCART",!1)}}}):t._e(),r("h2",[t._v("CART")]),r("ul",t._l(t.cart.carts,(function(e,n){return r("li",{key:n},[r("img",{attrs:{src:e.product.imageUrl[0],alt:""}}),r("div",[r("h3",[t._v(t._s(e.product.title))]),r("p",[t._v("X "+t._s(e.qty)+" "+t._s(e.product.unit||"個"))])]),e.coupon?r("span",{class:{"text-success":e.coupon}},[t._v("\n        "+t._s(t._f("currency")(e.final_total))+"\n      ")]):r("span",[t._v("\n        "+t._s(t._f("currency")(e.total))+"\n      ")]),r("i",{staticClass:"far fa-trash-alt",on:{click:function(r){return t.removeCartItem(e.id)}}})])})),0),t.user.emailVerified&&0===t.cart.carts.length?r("div",{staticClass:"buysomething"},[r("h4",[t._v("哇！ 購物車目前沒有商品。")]),r("button",{staticClass:"btn",on:{click:function(e){e.preventDefault(),t.$router.push("/shop/all"),t.$store.commit("OPENCART",!1)}}},[t._v("逛逛去")])]):t._e(),t.user.emailVerified?t._e():r("div",{staticClass:"buysomething"},[r("h4",[t._v("登入會員來繼續購物。")]),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.$store.commit("OPENLOGINBOX",!0)}}},[t._v("註冊 / 登入")])]),r("h3",{class:{delete:t.cart.final_total!==t.cart.total}},[t._v("\n    總計 $ "+t._s(t._f("currency")(t.cart.total))+" 元\n  ")]),t.cart.final_total!==t.cart.total?r("h4",{staticClass:"text-right text-success"},[t._v("\n    折扣價 $ "+t._s(t._f("currency")(t.cart.final_total))+" 元\n  ")]):t._e(),t.user.emailVerified&&0!==t.cart.carts.length?r("div",{staticClass:"couponWrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.code,expression:"coupon.code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.coupon.code},on:{input:function(e){e.target.composing||t.$set(t.coupon,"code",e.target.value)}}}),r("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return e.preventDefault(),t.useCoupon(e)}}},[t._v("套用優惠碼")]),r("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return e.preventDefault(),t.goCheckout(e)}}},[t._v("\n      "+t._s("/checkout/cart"===t.$route.path?"下一步":"結帳去")+"\n    ")])]):t._e()])},c=[],i=(r("a481"),r("28a5"),{name:"cart",data:function(){return{coupon:{code:""}}},created:function(){this.user.emailVerified&&this.$store.dispatch("getCart")},methods:{removeCartItem:function(t){var e=this,r="".concat("https://go-where-shop.herokuapp.com","/api/cart/").concat(t);this.$store.commit("LOADINGCHANGE",!0),this.axios.delete(r).then((function(){e.$store.commit("LOADINGCHANGE",!1),e.$store.dispatch("getCart")}))},useCoupon:function(){var t=this,e=this,r="".concat("https://go-where-shop.herokuapp.com","/api/coupon");this.$store.commit("LOADINGCHANGE",!0),this.axios.post(r,{code:this.coupon.code}).then((function(r){e.coupon.code="",e.$store.commit("LOADINGCHANGE",!1),r.data.success&&t.$store.dispatch("getCart"),e.$store.dispatch("updateMessage",{message:r.data.message,status:r.data.success?"success":"error"})}))},goCheckout:function(){0!==this.$store.state.cart.carts.length&&("/checkout/cart"!==this.$route.path?(this.$store.commit("OPENCART",!this.$store.state.cartOpen),this.$router.push("/checkout/cart")):this.$router.push("/checkout/formData"))}},computed:{cart:function(){return this.$store.state.cart},user:function(){return this.$store.state.user}},filters:{currency:function(t){if(void 0===t)return"";var e=String(t).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}}}),o=i,a=(r("65e1"),r("2877")),s=Object(a["a"])(o,n,c,!1,null,null,null);e["default"]=s.exports},"520a":function(t,e,r){"use strict";var n=r("0bfb"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,a="lastIndex",s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(o=function(t){var e,r,o,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[a]),o=c.call(f,t),s&&o&&(f[a]=f.global?o.index+o[0].length:e),u&&o&&o.length>1&&i.call(o[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),c=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},"65e1":function(t,e,r){"use strict";var n=r("e009"),c=r.n(n);c.a},a481:function(t,e,r){"use strict";var n=r("cb7c"),c=r("4bf8"),i=r("9def"),o=r("4588"),a=r("0390"),s=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,d){return[function(n,c){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,c):r.call(String(i),n,c)},function(t,e){var c=d(r,t,this,e);if(c.done)return c.value;var f=n(t),p=String(this),h="function"===typeof e;h||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var x=[];while(1){var _=s(f,p);if(null===_)break;if(x.push(_),!m)break;var C=String(_[0]);""===C&&(f.lastIndex=a(p,i(f.lastIndex),b))}for(var $="",y=0,k=0;k<x.length;k++){_=x[k];for(var E=String(_[0]),w=u(l(o(_.index),p.length),0),A=[],R=1;R<_.length;R++)A.push(v(_[R]));var I=_.groups;if(h){var N=[E].concat(A,w,p);void 0!==I&&N.push(I);var S=String(e.apply(void 0,N))}else S=g(E,p,w,A,I,e);w>=y&&($+=p.slice(y,w)+S,y=w+E.length)}return $+p.slice(y)}];function g(t,e,n,i,o,a){var s=n+t.length,u=i.length,l=h;return void 0!==o&&(o=c(o),l=p),r.call(a,l,(function(r,c){var a;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":a=o[c.slice(1,-1)];break;default:var l=+c;if(0===l)return r;if(l>u){var p=f(l/10);return 0===p?r:p<=u?void 0===i[p-1]?c.charAt(1):i[p-1]+c.charAt(1):r}a=i[l-1]}return void 0===a?"":a}))}}))},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},e009:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5d1b4fe9.abf4b83b.js.map