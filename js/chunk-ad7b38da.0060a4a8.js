(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad7b38da"],{"02f4":function(t,e,a){var s=a("4588"),r=a("be13");t.exports=function(t){return function(e,a){var i,n,o=String(r(e)),c=s(a),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(n=o.charCodeAt(c+1))<56320||n>57343?t?o.charAt(c):i:t?o.slice(c,c+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),r=a("32e9"),i=a("79e5"),n=a("be13"),o=a("2b4c"),c=a("520a"),l=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=v?!i((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[l]=function(){return a}),a[p](""),!e})):void 0;if(!v||!m||"replace"===t&&!u||"split"===t&&!d){var f=/./[p],h=a(n,p,""[t],(function(t,e,a,s,r){return e.exec===c?v&&!r?{done:!0,value:f.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}})),g=h[0],b=h[1];s(String.prototype,t,g),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,a){"use strict";var s=a("aae3"),r=a("cb7c"),i=a("ebd6"),n=a("0390"),o=a("9def"),c=a("5f1b"),l=a("520a"),u=a("79e5"),d=Math.min,p=[].push,v="split",m="length",f="lastIndex",h=4294967295,g=!u((function(){RegExp(h,"y")}));a("214f")("split",2,(function(t,e,a,u){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[m]||2!="ab"[v](/(?:ab)*/)[m]||4!="."[v](/(.?)(.?)/)[m]||"."[v](/()()/)[m]>1||""[v](/.?/)[m]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!s(t))return a.call(r,t,e);var i,n,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=void 0===e?h:e>>>0,g=new RegExp(t.source,u+"g");while(i=l.call(g,r)){if(n=g[f],n>d&&(c.push(r.slice(d,i.index)),i[m]>1&&i.index<r[m]&&p.apply(c,i.slice(1)),o=i[0][m],d=n,c[m]>=v))break;g[f]===i.index&&g[f]++}return d===r[m]?!o&&g.test("")||c.push(""):c.push(r.slice(d)),c[m]>v?c.slice(0,v):c}:"0"[v](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,s){var r=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,r,s):b.call(String(r),a,s)},function(t,e){var s=u(b,t,this,e,b!==a);if(s.done)return s.value;var l=r(t),p=String(this),v=i(l,RegExp),m=l.unicode,f=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),x=new v(g?l:"^(?:"+l.source+")",f),C=void 0===e?h:e>>>0;if(0===C)return[];if(0===p.length)return null===c(x,p)?[p]:[];var _=0,y=0,w=[];while(y<p.length){x.lastIndex=g?y:0;var $,E=c(x,g?p:p.slice(y));if(null===E||($=d(o(x.lastIndex+(g?0:y)),p.length))===_)y=n(p,y,m);else{if(w.push(p.slice(_,y)),w.length===C)return w;for(var k=1;k<=E.length-1;k++)if(w.push(E[k]),w.length===C)return w;y=_=$}}return w.push(p.slice(_)),w}]}))},"520a":function(t,e,a){"use strict";var s=a("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,n=r,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(n=function(t){var e,a,n,u,d=this;return l&&(a=new RegExp("^"+d.source+"$(?!\\s)",s.call(d))),c&&(e=d[o]),n=r.call(d,t),c&&n&&(d[o]=d.global?n.index+n[0].length:e),l&&n&&n.length>1&&i.call(n[0],a,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)})),n}),t.exports=n},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"7f7f":function(t,e,a){var s=a("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},8191:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer_orders"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"row mt-4"},t._l(t.products,(function(e,s){return a("div",{key:s,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),a("h6",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),a("p",{staticClass:"card-text"},[t._v(t._s(e.content||"_"))]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a("del",{staticClass:"h6"},[t._v("原價 "+t._s(e.origin_price||0)+" 元")]),a("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(e.price||0)+" 元")])])]),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getOnePro(e.id)}}},[t.selected===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            查看更多\n          ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(e.id)}}},[t.selected===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])})),0),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.product.title))])]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("img",{staticClass:"img-fluid mx-auto d-block",staticStyle:{"max-height":"400px"},attrs:{src:t.product.imageUrl}}),a("h5",{staticClass:"font-weight-normal mt-3 mb-4"},[t._v(t._s(t.product.content))]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price||0)+" 元")]),a("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t.product.price||0)+" 元")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.butQty,expression:"butQty"}],staticClass:"custom-select mt-5",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.butQty=e.target.multiple?a:a[0]}}},t._l(10,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v("\n                  選購 "+t._s(e)+" "+t._s(t.product.unit||"個")+"\n                ")])})),0)])])]),a("div",{staticClass:"modal-footer"},[a("h6",{staticClass:"mr-4 pt-2"},[t._v("總計 "+t._s(t.product.price*t.butQty||0)+" 元")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.butQty)}}},[t._v("加到購物車")])])])])]),0!==t.cart.carts.length?a("div",{staticClass:"d-block mx-auto mt-4",staticStyle:{width:"60%"}},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.cart.carts,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",{staticClass:"align-middle"},[t._v("\n            "+t._s(e.product.title)+"\n            "),e.coupon?a("div",{staticClass:"text-success"},[t._v("\n              已套用優惠券\n            ")]):t._e()]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.total)))])])})),0),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),a("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()])]),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.code,expression:"coupon.code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon.code},on:{input:function(e){e.target.composing||t.$set(t.coupon,"code",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.useCoupon(e)}}},[t._v("\n          套用優惠碼\n        ")])])])]):t._e(),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email","data-vv-as":"Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名","data-vv-as":"姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("name")))])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.phone,expression:"form.user.phone"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",name:"phone",placeholder:"請輸入電話","data-vv-as":"電話"},domProps:{value:t.form.user.phone},on:{input:function(e){e.target.composing||t.$set(t.form.user,"phone",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("phone")))])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址","data-vv-as":"地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("address")))])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{id:"comment",cols:"30",rows:"10",name:"message","data-vv-as":"留言"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("message")))])]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.formCommit(e)}}},[t._v("送出訂單")])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th"),a("th",[t._v("品名")]),a("th",[t._v("數量")]),a("th",[t._v("單價")])])}],i=(a("a481"),a("28a5"),a("7f7f"),a("1157")),n=a.n(i),o={name:"Admin_orderTest",components:{},data:function(){return{product:{},selected:null,butQty:1,coupon:{code:""},form:{message:"",user:{}}}},created:function(){this.$store.dispatch("getProducts",{pageNum:1,isAdmin:!1,item:"product"}),this.$store.dispatch("getCart")},methods:{getOnePro:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/product/").concat(t);this.runStatus(t),this.axios.get(a).then((function(t){e.product=t.data.product,e.selected="",e.butQty=1,n()("#productModal").modal("show")}))},runStatus:function(t){this.selected=t},addtoCart:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/cart"),r={data:{product_id:t,qty:a}};this.runStatus(t),this.axios.post(s,r).then((function(){e.$store.dispatch("getCart"),e.selected="",n()("#productModal").modal("hide")}))},removeCartItem:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/cart/").concat(t);this.$store.commit("LOADINGCHANGE",!0),this.axios.delete(a).then((function(){e.$store.commit("LOADINGCHANGE",!1),e.$store.dispatch("getCart")}))},useCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/coupon");this.$store.commit("LOADINGCHANGE",!0),this.axios.post(e,{data:{code:this.coupon.code}}).then((function(e){t.coupon.code="",t.$store.commit("LOADINGCHANGE",!1),e.data.success?t.$store.dispatch("getCart"):t.$store.dispatch("updateMessage",{message:e.data.message,status:"danger"})}))},formCommit:function(){var t=this,e=this;this.$validator.validateAll().then((function(a){if(a){t.$store.commit("LOADINGCHANGE",!0);var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/order"),r={data:{user:{name:e.form.user.name,email:e.form.user.email,tel:e.form.user.phone,address:e.form.user.address},message:e.form.message}};t.axios.post(s,r).then((function(t){e.$store.commit("LOADINGCHANGE",!1),t.data.success?e.$router.push("/checkouttest/".concat(t.data.orderId)):e.$store.dispatch("updateMessage",{message:t.data.message,status:"danger"})}))}}))}},computed:{products:function(){return this.$store.state.products},isLoading:function(){return this.$store.state.isLoading},cart:function(){return this.$store.state.cart}},filters:{currency:function(t){if(void 0===t)return"";var e=String(t).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}}},c=o,l=a("2877"),u=Object(l["a"])(c,s,r,!1,null,null,null);e["default"]=u.exports},a481:function(t,e,a){"use strict";var s=a("cb7c"),r=a("4bf8"),i=a("9def"),n=a("4588"),o=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,(function(t,e,a,f){return[function(s,r){var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i,r):a.call(String(i),s,r)},function(t,e){var r=f(a,t,this,e);if(r.done)return r.value;var d=s(t),p=String(this),v="function"===typeof e;v||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var x=[];while(1){var C=c(d,p);if(null===C)break;if(x.push(C),!g)break;var _=String(C[0]);""===_&&(d.lastIndex=o(p,i(d.lastIndex),b))}for(var y="",w=0,$=0;$<x.length;$++){C=x[$];for(var E=String(C[0]),k=l(u(n(C.index),p.length),0),N=[],A=1;A<C.length;A++)N.push(m(C[A]));var S=C.groups;if(v){var I=[E].concat(N,k,p);void 0!==S&&I.push(S);var q=String(e.apply(void 0,I))}else q=h(E,p,k,N,S,e);k>=w&&(y+=p.slice(w,k)+q,w=k+E.length)}return y+p.slice(w)}];function h(t,e,s,i,n,o){var c=s+t.length,l=i.length,u=v;return void 0!==n&&(n=r(n),u=p),a.call(o,u,(function(a,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(c);case"<":o=n[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>l){var p=d(u/10);return 0===p?a:p<=l?void 0===i[p-1]?r.charAt(1):i[p-1]+r.charAt(1):a}o=i[u-1]}return void 0===o?"":o}))}}))},aae3:function(t,e,a){var s=a("d3f4"),r=a("2d95"),i=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})}}]);
//# sourceMappingURL=chunk-ad7b38da.0060a4a8.js.map