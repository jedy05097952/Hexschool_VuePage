(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b48884"],{"0fa5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"shop"}},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("info"),r("navbar"),r("sidebar"),r("div",{staticClass:"content"},[r("h2",{staticClass:"path"},[t._v("/ "+t._s(t.$route.name)+" / "+t._s(t.$route.params.shop_id))]),r("ul",{staticClass:"product"},t._l(t.products,(function(e,n){return r("li",{key:n,on:{click:function(r){return t.getOnePro(e.id)}}},[r("div",[r("img",{attrs:{src:e.imageUrl}}),e.description?r("img",{staticClass:"hoverImg",attrs:{src:e.description}}):t._e(),r("div",{staticClass:"mask"},[r("i",{staticClass:"fas fa-plus",on:{click:function(r){return r.stopPropagation(),t.addtoCart(e.id)}}}),r("i",{staticClass:"far fa-heart"})])]),r("h3",[t._v(t._s(e.title))]),r("p",[t._v("NT$ "+t._s(e.price||0))])])})),0),0===t.products.length?r("h3",{staticClass:"noProducts"},[t._v("\n      抱歉，這個商品類別沒有相關商品\n    ")]):t._e()]),r("foot"),r("transition",{attrs:{name:"cartFade"}},[t.cartOpen?r("cart"):t._e()],1),r("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content border-0"},[r("div",{staticClass:"modal-self"},[r("div",{staticClass:"imageWrap"},[r("img",{attrs:{src:t.product.imageUrl}}),t.product.description?r("img",{staticClass:"hoverImg",attrs:{src:t.product.description}}):t._e()]),r("i",{staticClass:"close",attrs:{"aria-hidden":"true","data-dismiss":"modal","aria-label":"Close"}},[t._v("x")]),r("ul",{staticClass:"itemInfo"},[r("li",[r("h2",[t._v(t._s(t.product.title))])]),r("li",[r("h4",[t._v(t._s(t.product.content||"-"))])]),r("li",{staticClass:"origin"},[t._v("NT$ "+t._s(t.product.origin_price))]),r("li",{staticClass:"final"},[t._v("NT$ "+t._s(t.product.price))]),r("li",[r("div",{staticClass:"form-control"},[r("button",{staticClass:"btn less",on:{click:function(e){return t.qtyChange(-1)}}},[r("i",{staticClass:"fas fa-minus"})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyQty,expression:"buyQty"}],attrs:{type:"number",max:"10",min:"1"},domProps:{value:t.buyQty},on:{input:function(e){e.target.composing||(t.buyQty=e.target.value)}}}),r("button",{staticClass:"btn plus",on:{click:function(e){return t.qtyChange(1)}}},[r("i",{staticClass:"fas fa-plus"})]),r("button",{staticClass:"btn btn-outline-info commit",on:{click:function(e){return t.addtoCart(t.product.id,t.buyQty)}}},[t._v("加入購物車")])])])])])])])])],1)},i=[],o=r("a745"),a=r.n(o);function s(t){if(a()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var c=r("774e"),u=r.n(c),l=r("c8bb"),f=r.n(l);function d(t){if(f()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return s(t)||d(t)||p()}var h=r("1157"),g=r.n(h),y=r("3eaf"),b=r("77b9"),_=r("9d8d"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{rwdOpen:t.rwdOpen},attrs:{id:"sidebarWrap"}},[r("i",{staticClass:"rwdMenu",on:{click:function(e){t.rwdOpen=!t.rwdOpen}}},[t._v("MENU")]),r("div",{staticClass:"sidebarSelf"},[r("h2",[t._v("Category")]),r("ul",{staticClass:"itemNav"},[r("li",[r("router-link",{attrs:{to:"/shop/all"}},[t._v("ALL")])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.$router.push("/shop/vintage_all")}}},[t._v("VINTAGE\n          "),r("i",{staticClass:"fas fa-sort-down",on:{click:function(e){return t.openSideMenu("vintage")}}})]),r("transition",{attrs:{name:"sideFade"}},[t.vintageOpen?r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/vintage_top"}},[t._v("上衣")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_coat"}},[t._v("外套")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_shoes"}},[t._v("鞋子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_pants"}},[t._v("褲子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/vintage_dress"}},[t._v("洋裝")])],1)]):t._e()])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.$router.push("/shop/select_all")}}},[t._v("\n          SELECT\n          "),r("i",{staticClass:"fas fa-sort-down",on:{click:function(e){return t.openSideMenu("select")}}})]),r("transition",{attrs:{name:"sideFade"}},[t.selectOpen?r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/select_converse"}},[t._v("Coverse")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_keen"}},[t._v("Keen")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_vans"}},[t._v("Vans")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_martens"}},[t._v("Dr.Martens")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_carhartt"}},[t._v("Carhartt")])],1),r("li",[r("router-link",{attrs:{to:"/shop/select_thenorthface"}},[t._v("The North Face")])],1)]):t._e()])],1),r("li",[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.target!==e.currentTarget?null:t.$router.push("/shop/accessories_all")}}},[t._v("ACCESSORIES\n          "),r("i",{staticClass:"fas fa-sort-down",on:{click:function(e){return t.openSideMenu("accessories")}}})]),r("transition",{attrs:{name:"sideFade"}},[t.accessoriesOpen?r("ul",[r("li",[r("router-link",{attrs:{to:"/shop/accessories_hairpin"}},[t._v("髮夾")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_earpin"}},[t._v("耳環")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_socks"}},[t._v("襪子")])],1),r("li",[r("router-link",{attrs:{to:"/shop/accessories_bag"}},[t._v("背包")])],1)]):t._e()])],1),r("li",[r("router-link",{attrs:{to:"/shop/sale"}},[t._v("SALE")])],1)])])])},x=[],O={name:"sidebar",data:function(){return{vintageOpen:!1,selectOpen:!1,accessoriesOpen:!1,rwdOpen:!1}},methods:{openSideMenu:function(t){this["".concat(t,"Open")]=!this["".concat(t,"Open")]}}},C=O,k=(r("519a"),r("2877")),S=Object(k["a"])(C,m,x,!1,null,null,null),w=S.exports,L=r("c89d"),A={name:"Shop",components:{cart:y["default"],foot:b["a"],navbar:_["a"],sidebar:w,info:L["a"]},data:function(){return{buyQty:1,product:{}}},created:function(){this.$store.dispatch("getProducts",{pageNum:1,isAdmin:!1,item:"product"}),this.$store.dispatch("getCart")},methods:{addtoCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/cart"),i={data:{product_id:t,qty:r}};this.$store.commit("LOADINGCHANGE",!0),this.axios.post(n,i).then((function(){e.$store.commit("LOADINGCHANGE",!1),e.$store.dispatch("getCart"),g()("#productModal").modal("hide")}))},getOnePro:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("hiro","/product/").concat(t);this.axios.get(r).then((function(t){e.product=t.data.product,e.butQty=1,g()("#productModal").modal("show")}))},qtyChange:function(t){1===t&&this.buyQty>=10?this.buyQty=10:-1===t&&this.buyQty<=1?this.buyQty=1:this.buyQty+=t}},computed:{products:function(){var t=this.$route.params.shop_id,e=v(this.$store.state.products);return-1!==t.indexOf("vintage")?(e=e.filter((function(t){return-1!==t.category.indexOf("vintage")})),"vintage_all"===t?e:"vintage_top"===t?e.filter((function(t){return-1!==t.category.indexOf("top")})):"vintage_pants"===t?e.filter((function(t){return-1!==t.category.indexOf("pants")})):"vintage_dress"===t?e.filter((function(t){return-1!==t.category.indexOf("dress")})):"vintage_coat"===t?e.filter((function(t){return-1!==t.category.indexOf("coat")})):"vintage_shoes"===t&&e.filter((function(t){return-1!==t.category.indexOf("shoes")}))):-1!==t.indexOf("select")?(e=e.filter((function(t){return-1!==t.category.indexOf("brand")})),"select_all"===t?e:"select_converse"===t?e.filter((function(t){return-1!==t.category.indexOf("converse")})):"select_martens"===t?e.filter((function(t){return-1!==t.category.toLowerCase().indexOf("martens")})):"select_keen"===t?e.filter((function(t){return-1!==t.category.indexOf("keen")})):"select_carhartt"===t?e.filter((function(t){return-1!==t.category.indexOf("carhartt")})):"select_thenorthface"===t?e.filter((function(t){return-1!==t.category.toLowerCase().indexOf("north")})):"select_vans"===t&&e.filter((function(t){return-1!==t.category.indexOf("vans")}))):-1!==t.indexOf("accessories")?(e=e.filter((function(t){return-1!==t.category.indexOf("accessories")})),"accessories_all"===t?e:"accessories_bag"===t?e.filter((function(t){return-1!==t.category.indexOf("bag")})):"accessories_hairpin"===t?e.filter((function(t){return-1!==t.category.indexOf("hairpin")})):"accessories_earpin"===t?e.filter((function(t){return-1!==t.category.indexOf("earpin")})):"accessories_socks"===t&&e.filter((function(t){return-1!==t.category.indexOf("socks")}))):-1!==t.indexOf("sale")?e.filter((function(t){return 0===t.category.indexOf("sale")})):e},isLoading:function(){return this.$store.state.isLoading},cartOpen:function(){return this.$store.state.cartOpen}}},T=A,M=(r("a6b9"),Object(k["a"])(T,n,i,!1,null,null,null));e["default"]=M.exports},"0fc9":function(t,e,r){var n=r("3a38"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=n(t),t<0?i(t+e,0):o(t,e)}},1654:function(t,e,r){"use strict";var n=r("71c1")(!0);r("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),i=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},"241e":function(t,e,r){var n=r("25eb");t.exports=function(t){return Object(n(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"30f1":function(t,e,r){"use strict";var n=r("b8e3"),i=r("63b6"),o=r("9138"),a=r("35e8"),s=r("481b"),c=r("8f60"),u=r("45f2"),l=r("53e2"),f=r("5168")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",h="values",g=function(){return this};t.exports=function(t,e,r,y,b,_,m){c(r,e,y);var x,O,C,k=function(t){if(!d&&t in A)return A[t];switch(t){case v:return function(){return new r(this,t)};case h:return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=e+" Iterator",w=b==h,L=!1,A=t.prototype,T=A[f]||A[p]||b&&A[b],M=T||k(b),j=b?w?k("entries"):M:void 0,E="Array"==e&&A.entries||T;if(E&&(C=l(E.call(new t)),C!==Object.prototype&&C.next&&(u(C,S,!0),n||"function"==typeof C[f]||a(C,f,g))),w&&T&&T.name!==h&&(L=!0,M=function(){return T.call(this)}),n&&!m||!d&&!L&&A[f]||a(A,f,M),s[e]=M,s[S]=g,b)if(x={values:w?M:k(h),keys:_?M:k(v),entries:j},m)for(O in x)O in A||o(A,O,x[O]);else i(i.P+i.F*(d||L),e,x);return x}},"32fc":function(t,e,r){var n=r("e53d").document;t.exports=n&&n.documentElement},"335c":function(t,e,r){var n=r("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},"36c3":function(t,e,r){var n=r("335c"),i=r("25eb");t.exports=function(t){return n(i(t))}},3702:function(t,e,r){var n=r("481b"),i=r("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},"3a38":function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},"40c3":function(t,e,r){var n=r("6b4c"),i=r("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(r){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},"45f2":function(t,e,r){var n=r("d9f6").f,i=r("07e3"),o=r("5168")("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,r){var n=r("5168")("iterator"),i=!1;try{var o=[7][n]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},t(o)}catch(a){}return r}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,r){var n=r("dbdb")("wks"),i=r("62a0"),o=r("e53d").Symbol,a="function"==typeof o,s=t.exports=function(t){return n[t]||(n[t]=a&&o[t]||(a?o:i)("Symbol."+t))};s.store=n},"519a":function(t,e,r){"use strict";var n=r("78e6"),i=r.n(n);i.a},"53e2":function(t,e,r){var n=r("07e3"),i=r("241e"),o=r("5559")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"549b":function(t,e,r){"use strict";var n=r("d864"),i=r("63b6"),o=r("241e"),a=r("b0dc"),s=r("3702"),c=r("b447"),u=r("20fd"),l=r("7cd6");i(i.S+i.F*!r("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,i,f,d=o(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,y=0,b=l(d);if(g&&(h=n(h,v>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(e=c(d.length),r=new p(e);e>y;y++)u(r,y,g?h(d[y],y):d[y]);else for(f=b.call(d),r=new p;!(i=f.next()).done;y++)u(r,y,g?a(f,h,[i.value,y],!0):i.value);return r.length=y,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},5559:function(t,e,r){var n=r("dbdb")("keys"),i=r("62a0");t.exports=function(t){return n[t]||(n[t]=i(t))}},"5b4e":function(t,e,r){var n=r("36c3"),i=r("b447"),o=r("0fc9");t.exports=function(t){return function(e,r,a){var s,c=n(e),u=i(c.length),l=o(a,u);if(t&&r!=r){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}}},"62a0":function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},"6b4c":function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"6c1c":function(t,e,r){r("c367");for(var n=r("e53d"),i=r("35e8"),o=r("481b"),a=r("5168")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=n[u],f=l&&l.prototype;f&&!f[a]&&i(f,a,u),o[u]=o.Array}},"71c1":function(t,e,r){var n=r("3a38"),i=r("25eb");t.exports=function(t){return function(e,r){var o,a,s=String(i(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},"774e":function(t,e,r){t.exports=r("d2d5")},"78e6":function(t,e,r){},"7cd6":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},"7e90":function(t,e,r){var n=r("d9f6"),i=r("e4ae"),o=r("c3a1");t.exports=r("8e60")?Object.defineProperties:function(t,e){i(t);var r,a=o(e),s=a.length,c=0;while(s>c)n.f(t,r=a[c++],e[r]);return t}},8436:function(t,e){t.exports=function(){}},"8f60":function(t,e,r){"use strict";var n=r("a159"),i=r("aebd"),o=r("45f2"),a={};r("35e8")(a,r("5168")("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(a,{next:i(1,r)}),o(t,e+" Iterator")}},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},9138:function(t,e,r){t.exports=r("35e8")},"95d5":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a159:function(t,e,r){var n=r("e4ae"),i=r("7e90"),o=r("1691"),a=r("5559")("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=r("1ec9")("iframe"),n=o.length,i="<",a=">";e.style.display="none",r("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),u=t.F;while(n--)delete u[c][o[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(s[c]=n(t),r=new s,s[c]=null,r[a]=t):r=u(),void 0===e?r:i(r,e)}},a6b9:function(t,e,r){"use strict";var n=r("f86c"),i=r.n(n);i.a},a745:function(t,e,r){t.exports=r("f410")},b0dc:function(t,e,r){var n=r("e4ae");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){var o=t["return"];throw void 0!==o&&n(o.call(t)),a}}},b447:function(t,e,r){var n=r("3a38"),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c367:function(t,e,r){"use strict";var n=r("8436"),i=r("50ed"),o=r("481b"),a=r("36c3");t.exports=r("30f1")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},c3a1:function(t,e,r){var n=r("e6f3"),i=r("1691");t.exports=Object.keys||function(t){return n(t,i)}},c8bb:function(t,e,r){t.exports=r("54a1")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},dbdb:function(t,e,r){var n=r("584a"),i=r("e53d"),o="__core-js_shared__",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e6f3:function(t,e,r){var n=r("07e3"),i=r("36c3"),o=r("5b4e")(!1),a=r("5559")("IE_PROTO");t.exports=function(t,e){var r,s=i(t),c=0,u=[];for(r in s)r!=a&&n(s,r)&&u.push(r);while(e.length>c)n(s,r=e[c++])&&(~o(u,r)||u.push(r));return u}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray},f86c:function(t,e,r){}}]);
//# sourceMappingURL=chunk-49b48884.392b7d21.js.map