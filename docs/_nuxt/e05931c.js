(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1824:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));n(3);var r=n(38),o=(n(30),n(28),n(100),n(73),n(58),n(180)),c=n(231);function l(t){return Object(c.createDecorator)((function(e,n){e.methods[n]=Object(o.a)(e.methods[n],t)}))}function d(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e.length<=0)throw new Error("Atleast one path required");return Object(c.createDecorator)((function(t,n){var o=t.methods[n];"object"!==Object(r.a)(t.watch)&&(t.watch=Object.create(null));var c={};"string"!=typeof e[e.length-1]&&(c=e.splice(-1,1)[0]);var l=c,d=l.deep,f=void 0!==d&&d,m=l.immediate,h=void 0!==m&&m;e.forEach((function(path){t.watch[path]={handler:o,deep:f,immediate:h}}))}))}},1829:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(67);var r=n(180),o={computed:{validation:function(){return{}},isValid:function(){var t=this.validation;return Object.keys(t).every((function(e){return t[e]}))}}},c={data:function(){return{nextRoute:this.nextRoute||null}},mounted:function(){this.nextRoute=Object(r.e)(this.$route)},methods:{moveToNext:function(){if(this.nextRoute){var t=this.$router.resolve(this.nextRoute);t&&t.resolved.matched.length>0?this.$router.push(this.nextRoute):this.$router.push({name:"index"})}}}}},2396:function(t,e,n){},2397:function(t,e,n){},3401:function(t,e,n){t.exports=n.p+"img/logo.44da50b.svg"},3402:function(t,e,n){t.exports=n.p+"img/logo-name.82eb8b7.svg"},3403:function(t,e,n){t.exports=n.p+"img/walletconnect.84967c9.svg"},3404:function(t,e,n){t.exports=n.p+"img/metamask.3f22a0b.svg"},3405:function(t,e,n){t.exports=n.p+"img/portis.0d0f1ba.svg"},3406:function(t,e,n){t.exports=n.p+"img/metamask-big.78010a9.svg"},3407:function(t,e,n){"use strict";n(2396)},3408:function(t,e,n){"use strict";n(2397)},3429:function(t,e,n){"use strict";n.r(e);var r,o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"matic-logo"},[r("img",{attrs:{src:n(3401),alt:"Matic Network"}}),t._v(" "),r("img",{attrs:{src:n(3402),alt:"Matic Network"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-wallet-connect d-flex align-self-center"},[e("img",{staticClass:"align-self-center",attrs:{src:n(3403),alt:"wallet connect"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-metamask d-flex align-self-center"},[e("img",{staticClass:"align-self-center",attrs:{src:n(3404),alt:"Metamask"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-portis d-flex align-self-center"},[e("img",{staticClass:"align-self-center",attrs:{src:n(3405),alt:"portis"}})])}],c=(n(67),n(46),n(57),n(83),n(84),n(66),n(3)),l=n(17),d=n(18),f=n(26),m=n(27),h=n(14),v=n(35),w=(n(28),n(87),n(88),n(30),n(2)),y=n(56),k=(n(53),n(1)),x=n.n(k),O=n(68),_=(n(74),n(151)),j=n(8),C=n(34),R=n(1829),$=(n(1824),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"box"},[r("div",{staticClass:"box-body"},[r("div",{staticClass:"ps-16 ps-md-32 box-header"},[r("span",{staticClass:"font-heading-medium font-semibold col text-center"},[t._v("Metamask")])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row ps-x-32 ps-y-60 d-flex justify-content-center"},[r("div",{staticClass:"qrcode-container align-self-center m-4"},[r("img",{attrs:{height:"96",width:"96",src:n(3406),alt:"Connecting to metamask"}})]),t._v(" "),r("div",{staticClass:"col-12 font-body-small text-center text-muted ps-t-8"},[t._v("\n                Waiting for confirmation from Metamask\n              ")])])])])])])}]);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}var M,P,L=Object(y.a)({props:{loaded:{type:Boolean,required:!0}},components:{},middleware:[],mixins:[]})(r=function(t){Object(f.a)(n,t);var e=E(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"mounted",value:function(){}}]),n}(w.default))||r,N=L,D=(n(3407),n(23)),T=Object(D.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.loaded?n("div",{staticClass:"modal fade show"},[t._m(0)]):t._e(),t._v(" "),n("div",{staticClass:"modal-backdrop",class:{show:t.loaded}})])}),$,!1,null,"56ac6cae",null).exports;function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(m.a)(this,n)}}function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var I=(M=Object(y.a)({layout:"blank",components:{ConnectingMetamask:T},mixins:[R.b],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(O.b)("network",["networks","selectedNetwork"]))}),M(P=function(t){Object(f.a)(m,t);var e,n,r,o=S(m);function m(){var t;Object(l.a)(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=o.call.apply(o,[this].concat(n))).loading=!1,t.loaded=!1,t.metamaskLoading=!1,t.error=!1,t.sessionData=null,t.sessionCreated=!1,t.metamaskNetworkError=!1,t.queryParams={},t}return Object(d.a)(m,[{key:"mounted",value:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.nextRoute=this.nextRoute||{name:"index"},this.queryParams=this.$route.query,this.loaded=!0;case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"getLoginTypedData",value:function(address,t){return{types:{EIP712Domain:[{name:"name",type:"string"},{name:"host",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Test:[{name:"owner",type:"string"}]},domain:{name:"Opensea on Matic",host:"",version:"1",verifyingContract:"0x0",chainId:""},primaryType:"Test",message:{owner:address}}}},{key:"loginWithMetamask",value:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.loading){t.next=2;break}return t.abrupt("return");case 2:if(this.metamaskLoading=!0,this.error=null,Object(_.b)()){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Object(_.c)();case 8:if(!t.sent){t.next=13;break}return this.error=this.$t("metamask.lockedMessage"),this.metamaskLoading=!1,t.abrupt("return");case 13:if(window.ethereum.chainId=="0x"+this.networks.main.chainId.toString(16)||window.ethereum.chainId=="0x"+this.networks.matic.chainId.toString(16)){t.next=19;break}return this.metamaskNetworkError=!0,this.metamaskLoading=!1,t.abrupt("return");case 19:this.metamaskNetworkError=!1;case 20:return t.next=22,Object(_.a)();case 22:if(!(e=t.sent)){t.next=40;break}return this.loading=!0,t.prev=25,n=x()().unix(),t.next=29,Object(_.f)(e.toLowerCase(),this.getLoginTypedData(e.toLowerCase(),n),window.ethereum);case 29:if(!(r=t.sent).result){t.next=35;break}return o={strategy:j.a.strategies.METAMASK},C.b.set("loginStrategy",j.a.strategies.METAMASK),t.next=35,this.login(e,r.result,o);case 35:t.next=39;break;case 37:t.prev=37,t.t0=t.catch(25);case 39:this.loading=!1;case 40:this.metamaskLoading=!1;case 41:case"end":return t.stop()}}),t,this,[[25,37]])}))),function(){return n.apply(this,arguments)})},{key:"login",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(address,e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.$logger.track("user-login-start:login",{address:address}),t.prev=2,t.next=5,this.$store.dispatch("auth/doLogin",{address:address,signature:e});case 5:this.$logger.track("user-login-complete:login",{address:address}),this.moveToNext(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.error=t.t0.response&&t.t0.response.data&&t.t0.response.data.message||t.t0.message;case 12:this.loading=!1;case 13:case"end":return t.stop()}}),t,this,[[2,9]])}))),function(t,n,r){return e.apply(this,arguments)})}]),m}(w.default))||P),B=I,W=(n(3408),Object(D.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"container-fluid py-4 mt-5"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6 login-container text-center"},[t._m(0),t._v(" "),n("div",{staticClass:"container-fluid d-flex justify-content-center"},[n("div",{staticClass:"box ms-t-40 login-box"},[n("div",{staticClass:"box-body"},[n("div",{staticClass:"font-heading-medium font-semibold ps-16 ps-md-32"},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),n("div",{staticClass:"container"},[t._e(),t._v(" "),n("div",{staticClass:"row ps-x-32"},[n("div",{staticClass:"col-12 login-with no-top-border-radius ps-16 ps-md-20",class:{"cursor-pointer":!t.loading},on:{click:t.loginWithMetamask}},[n("div",{staticClass:"d-flex"},[t._m(2),t._v(" "),n("div",{staticClass:"d-flex flex-column text-left align-self-center ps-l-20"},[n("span",{staticClass:"font-heading font-semibold"},[t._v(t._s(t.$t("metamask.title")))]),t._v(" "),n("span",{staticClass:"font-body-small text-gray"},[t._v(t._s(t.$t("webConnectMsg")))])]),t._v(" "),n("svg-sprite-icon",{staticClass:"right-arrow align-self-center font-gray ml-auto",attrs:{name:"right-arrow"}})],1)])]),t._v(" "),t._e(),t._v(" "),n("div",{staticClass:"row justify-content-center wallet-download-info ms-t-32"},[t._v("\n                "+t._s(t.$t("downloadWallet"))+"\n                "),n("a",{staticClass:"link-color ps-l-4",attrs:{href:"https://metamask.io/download.html",target:"_blank"}},[t._v(t._s(t.$t("downloadHere")))])])])])])]),t._v(" "),t.metamaskNetworkError?n("div",{staticClass:"metamask-network-error m-2"},[t._v("\n        Select the "+t._s(t.networks.main.name)+" Network in the Metamask\n      ")]):t._e()])]),t._v(" "),n("connecting-metamask",{attrs:{loaded:t.metamaskLoading}})],1)}),o,!1,null,"04eba9d8",null));e.default=W.exports}}]);