(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2adb8293","chunk-6eae0f0c"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var s,i,o=String(a(e)),c=n(r),l=o.length;return c<0||c>=l?t?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===l||(i=o.charCodeAt(c+1))<56320||i>57343?t?o.charAt(c):s:t?o.slice(c,c+2):i-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1d63":function(t,e,r){"use strict";var n=r("e5a2"),a=r.n(n);a.a},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),s=r("79e5"),i=r("be13"),o=r("2b4c"),c=r("520a"),l=o("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var v=o(t),h=!s((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),p=h?!s((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[v](""),!e})):void 0;if(!h||!p||"replace"===t&&!u||"split"===t&&!f){var d=/./[v],_=r(i,v,""[t],(function(t,e,r,n,a){return e.exec===c?h&&!a?{done:!0,value:d.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),g=_[0],m=_[1];n(String.prototype,t,g),a(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"28a5":function(t,e,r){"use strict";var n=r("aae3"),a=r("cb7c"),s=r("ebd6"),i=r("0390"),o=r("9def"),c=r("5f1b"),l=r("520a"),u=r("79e5"),f=Math.min,v=[].push,h="split",p="length",d="lastIndex",_=4294967295,g=!u((function(){RegExp(_,"y")}));r("214f")("split",2,(function(t,e,r,u){var m;return m="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(a,t,e);var s,i,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?_:e>>>0,g=new RegExp(t.source,u+"g");while(s=l.call(g,a)){if(i=g[d],i>f&&(c.push(a.slice(f,s.index)),s[p]>1&&s.index<a[p]&&v.apply(c,s.slice(1)),o=s[0][p],f=i,c[p]>=h))break;g[d]===s.index&&g[d]++}return f===a[p]?!o&&g.test("")||c.push(""):c.push(a.slice(f)),c[p]>h?c.slice(0,h):c}:"0"[h](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var a=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,n):m.call(String(a),r,n)},function(t,e){var n=u(m,t,this,e,m!==r);if(n.done)return n.value;var l=a(t),v=String(this),h=s(l,RegExp),p=l.unicode,d=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),b=new h(g?l:"^(?:"+l.source+")",d),C=void 0===e?_:e>>>0;if(0===C)return[];if(0===v.length)return null===c(b,v)?[v]:[];var x=0,k=0,$=[];while(k<v.length){b.lastIndex=g?k:0;var E,y=c(b,g?v:v.slice(k));if(null===y||(E=f(o(b.lastIndex+(g?0:k)),v.length))===x)k=i(v,k,p);else{if($.push(v.slice(x,k)),$.length===C)return $;for(var w=1;w<=y.length-1;w++)if($.push(y[w]),$.length===C)return $;k=x=E}}return $.push(v.slice(x)),$}]}))},"39d2":function(t,e,r){"use strict";var n=r("49f3"),a=r.n(n);a.a},"3eaf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cartWrap"},["/checkout/cart"!==t.$route.path?r("i",{staticClass:"rwdMenu",on:{click:function(e){return t.$store.commit("OPENCART",!t.$store.state.cartOpen)}}},[t._v("<<")]):t._e(),t._m(0),r("ul",t._l(t.cart.carts,(function(e,n){return r("li",{key:n},[r("img",{attrs:{src:e.product.imageUrl,alt:""}}),r("div",[r("h3",[t._v(t._s(e.product.title))]),r("p",[t._v("X "+t._s(e.qty)+" "+t._s(e.product.unit||"個"))])]),e.coupon?r("span",{class:{"text-success":e.coupon}},[t._v("\n        "+t._s(t._f("currency")(e.final_total))+"\n      ")]):r("span",[t._v("\n        "+t._s(t._f("currency")(e.total))+"\n      ")]),r("i",{staticClass:"far fa-trash-alt",on:{click:function(r){return t.removeCartItem(e.id)}}})])})),0),r("h3",{class:{delete:t.cart.final_total!==t.cart.total}},[t._v("\n    總計 $ "+t._s(t._f("currency")(t.cart.total))+" 元\n  ")]),t.cart.final_total!==t.cart.total?r("h4",{staticClass:"text-right text-success"},[t._v("\n    折扣價 $ "+t._s(t._f("currency")(t.cart.final_total))+" 元\n  ")]):t._e(),r("div",{staticClass:"couponWrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.code,expression:"coupon.code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.coupon.code},on:{input:function(e){e.target.composing||t.$set(t.coupon,"code",e.target.value)}}}),r("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return e.preventDefault(),t.useCoupon(e)}}},[t._v("套用優惠碼")]),r("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return e.preventDefault(),t.goCheckout(e)}}},[t._v("\n      "+t._s("/checkout/cart"===t.$route.path?"下一步":"結帳去")+"\n    ")])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[t._v("Cart"),r("i",{staticClass:"fas fa-cart-plus"})])}],s=(r("a481"),r("28a5"),{name:"cart",data:function(){return{coupon:{code:""}}},created:function(){this.$store.dispatch("getCart")},methods:{removeCartItem:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/cart/").concat(t);this.$store.commit("LOADINGCHANGE",!0),this.axios.delete(r).then((function(){e.$store.commit("LOADINGCHANGE",!1),e.$store.dispatch("getCart")}))},useCoupon:function(){var t=this,e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/coupon");this.$store.commit("LOADINGCHANGE",!0),this.axios.post(r,{data:{code:this.coupon.code}}).then((function(r){e.coupon.code="",e.$store.commit("LOADINGCHANGE",!1),r.data.success?t.$store.dispatch("getCart"):e.$store.dispatch("updateMessage",{message:r.data.message,status:"danger"})}))},goCheckout:function(){"/checkout/cart"!==this.$route.path?(this.$store.commit("OPENCART",!this.$store.state.cartOpen),this.$router.push("/checkout/cart")):this.$router.push("/checkout/formData")}},computed:{cart:function(){return this.$store.state.cart}},filters:{currency:function(t){if(void 0===t)return"";var e=String(t).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}}}),i=s,o=(r("65e1"),r("2877")),c=Object(o["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},"49f3":function(t,e,r){},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,s=String.prototype.replace,i=a,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(t){var e,r,i,u,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),c&&(e=f[o]),i=a.call(f,t),c&&i&&(f[o]=f.global?i.index+i[0].length:e),l&&i&&i.length>1&&s.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),t.exports=i},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var s=r.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"65e1":function(t,e,r){"use strict";var n=r("e009"),a=r.n(n);a.a},"77b9":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",[r("ul",{staticClass:"contact"},[r("li",[t._v("Contact")]),r("li",[t._v("TEL: 07-1234567")]),r("li",[t._v("MAIL: gowhere@gmail.com")]),r("li",[t._v("Time: 12:00 - 22:00")])]),r("div",[r("h5",[t._v("©Copright 2019 TSAI-HUNG LI")]),r("p",[t._v("僅個人作品練習，無任何商業用途")])]),r("ul",{staticClass:"follow"},[r("li",[t._v("Follow Go! Where?")]),r("li",[r("i",{staticClass:"fab fa-instagram"}),t._v("Instagram")]),r("li",[r("i",{staticClass:"fab fa-line"}),t._v("Line")]),r("li",[r("i",{staticClass:"fab fa-facebook-f"}),t._v("Facebook")]),r("li",[r("i",{staticClass:"fab fa-twitter"}),t._v("Twitter")])])])])}],s={name:"foot",data:function(){return{}}},i=s,o=(r("39d2"),r("2877")),c=Object(o["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},"9d8d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar"},[r("div",{staticClass:"logo",on:{click:function(e){return t.$router.push("/")}}},[t._v("\n    Go! Where?\n  ")]),r("ul",{staticClass:"itemNav"},[r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("ABOUT")])],1),r("li",[r("router-link",{attrs:{to:"/shop/all"}},[t._v("ALL")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_all"}},[t._v("VINTAGE\n        "),r("i",{staticClass:"fas fa-sort-down"})]),r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/vintage_top"}},[t._v("上衣")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_coat"}},[t._v("外套")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_shoes"}},[t._v("鞋子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_pants"}},[t._v("褲子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_dress"}},[t._v("洋裝")])],1)])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_all"}},[t._v("SELECT\n        "),r("i",{staticClass:"fas fa-sort-down"})]),r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/select_converse"}},[t._v("Coverse")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_keen"}},[t._v("Keen")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_vans"}},[t._v("Vans")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_martens"}},[t._v("Dr.Martens")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_carhartt"}},[t._v("Carhartt")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_thenorthface"}},[t._v("The North Face")])],1)])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_all"}},[t._v("ACCESSORIES\n        "),r("i",{staticClass:"fas fa-sort-down"})]),r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/accessories_hairpin"}},[t._v("髮夾")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_earpin"}},[t._v("耳環")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_socks"}},[t._v("襪子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_bag"}},[t._v("背包")])],1)])],1),r("li",[r("router-link",{attrs:{to:"/shop/sale"}},[t._v("SALE")])],1)]),r("ul",{staticClass:"accountNav"},[r("li",{on:{click:function(e){return t.$router.push("/admin/login")}}},[r("i",{staticClass:"far fa-user-circle"})]),t._m(0),r("li",{on:{click:t.openCart}},[r("i",{staticClass:"fas fa-shopping-cart"}),0!==t.cartLen?r("i",{staticClass:"cartQty"},[t._v(t._s(t.cartLen))]):t._e()])]),t._m(1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("i",{staticClass:"far fa-heart"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"couponWrap"},[r("i",{staticClass:"fas fa-birthday-cake"}),r("div",{staticClass:"couponInfo"},[r("h5",[t._v("為慶祝本店週年慶，即日起在購物欄輸入comehere，即可享七折優惠！")])])])}],s={name:"navbar",data:function(){return{}},methods:{openCart:function(){this.$store.commit("OPENCART",!this.$store.state.cartOpen)}},computed:{cartLen:function(){return this.$store.state.cart.carts.length}}},i=s,o=(r("cfa4"),r("2877")),c=Object(o["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),s=r("9def"),i=r("4588"),o=r("0390"),c=r("5f1b"),l=Math.max,u=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,d){return[function(n,a){var s=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,s,a):r.call(String(s),n,a)},function(t,e){var a=d(r,t,this,e);if(a.done)return a.value;var f=n(t),v=String(this),h="function"===typeof e;h||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}var b=[];while(1){var C=c(f,v);if(null===C)break;if(b.push(C),!g)break;var x=String(C[0]);""===x&&(f.lastIndex=o(v,s(f.lastIndex),m))}for(var k="",$=0,E=0;E<b.length;E++){C=b[E];for(var y=String(C[0]),w=l(u(i(C.index),v.length),0),A=[],S=1;S<C.length;S++)A.push(p(C[S]));var I=C.groups;if(h){var O=[y].concat(A,w,v);void 0!==I&&O.push(I);var N=String(e.apply(void 0,O))}else N=_(y,v,w,A,I,e);w>=$&&(k+=v.slice($,w)+N,$=w+y.length)}return k+v.slice($)}];function _(t,e,n,s,i,o){var c=n+t.length,l=s.length,u=h;return void 0!==i&&(i=a(i),u=v),r.call(o,u,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":o=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>l){var v=f(u/10);return 0===v?r:v<=l?void 0===s[v-1]?a.charAt(1):s[v-1]+a.charAt(1):r}o=s[u-1]}return void 0===o?"":o}))}}))},aae3:function(t,e,r){var n=r("d3f4"),a=r("2d95"),s=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c89d:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,n){return r("div",{key:n,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),r("button",{staticClass:"close",staticStyle:{transform:"translateY(-5px)"},attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.$store.commit("REMOVEMESSAGE",n)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},a=[],s={name:"tem_info",computed:{messages:function(){return this.$store.state.messages}}},i=s,o=(r("1d63"),r("2877")),c=Object(o["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},cfa4:function(t,e,r){"use strict";var n=r("f3ab"),a=r.n(n);a.a},e009:function(t,e,r){},e5a2:function(t,e,r){},f3ab:function(t,e,r){}}]);
//# sourceMappingURL=chunk-2adb8293.49a98c1f.js.map