webpackJsonp([1],{HQD8:function(e,t){},NHnr:function(e,t,n){"use strict";function a(e){n("sYb0")}function s(e){n("lw9O")}function o(e){n("YSLu")}function r(e){n("hPUL")}function i(e){n("HQD8")}Object.defineProperty(t,"__esModule",{value:!0});var u=n("7+uW"),l={name:"app",methods:{setLanguage:function(e){this.$i18n.locale=e,window.localStorage.setItem("userLanguage",e)}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"row center-xs"},[n("div",{staticClass:"col-xs-1",attrs:{id:"left"}},[n("section",{attrs:{id:"section"}},[n("router-link",{attrs:{to:"/"}},[n("span",[e._v("index")])]),e._v(" "),n("router-link",{attrs:{to:"/article"}},[n("span",[e._v("article")])]),e._v(" "),n("router-link",{attrs:{to:"/link"}},[n("span",[e._v("link")])]),e._v(" "),n("router-link",{attrs:{to:"/about"}},[n("span",[e._v("about")])])],1)]),e._v(" "),n("div",{staticClass:"col-xs-6"},[n("div",{attrs:{id:"content"}},[n("router-view")],1),e._v(" "),n("footer",[n("span",[e._v(e._s(e.$t("message.sankou"))),n("a",{attrs:{href:"https://otakism.com/",target:"_ost"}},[e._v("宅談")])]),e._v("，\n  \t\t\t\t"),n("span",[n("a",{on:{click:function(t){e.setLanguage("zh")}}},[e._v("中文")]),e._v(" "),n("a",{on:{click:function(t){e.setLanguage("ja")}}},[e._v("日本語")])]),e._v(" "),n("span",{staticStyle:{display:"inline-block"}},[e._v("© 2018 ゆきの")])])])])])},p=[],v={render:c,staticRenderFns:p},_=v,d=n("VU/8"),m=a,g=d(l,_,!1,m,null,null),f=g.exports,h=n("/ocq"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",[e._v("この青空に約束を")]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$t("message.indexPage"))}}),e._v(" "),n("p",{staticStyle:{"padding-left":"2rem"}},[e._v(e._s(e.$t("message.indexPageFrom")))])])},k=[],x={render:b,staticRenderFns:k},y=x,$=n("VU/8"),w=s,L=$(null,y,!1,w,"data-v-68e17e20",null),P=L.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",[e._v(e._s(e.$t("message.bunsyou")))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$t("message.bunsyouNotice"))}})])},H=[],N={render:F,staticRenderFns:H},S=N,U=n("VU/8"),E=o,M=U(null,S,!1,E,"data-v-69310420",null),R=M.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",[e._v(e._s(e.$t("message.link")))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$t("message.bunsyouNotice"))}})])},V=[],j={render:T,staticRenderFns:V},A=j,C=n("VU/8"),I=r,Y=C(null,A,!1,I,"data-v-416f2d59",null),O=Y.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h1",[e._v(e._s(e.$t("message.about")))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.$t("message.bunsyouNotice"))}})])},D=[],Q={render:z,staticRenderFns:D},q=Q,J=n("VU/8"),W=i,B=J(null,q,!1,W,"data-v-0a375714",null),G=B.exports;u.a.use(h.a);var K=new h.a({routes:[{path:"/",name:"Index",component:P},{path:"/article",name:"Article",component:R},{path:"/link",name:"Link",component:O},{path:"/about",name:"About",component:G}]}),X=n("hmpv");u.a.use(X.a),u.a.config.productionTip=!1;var Z={zh:{message:{hello:"hello world",sankou:"配色参考",indexPage:"你如今在何处做着什么呢 <br> 在这片天空的延续之处吗",indexPageFrom:"——《you -mirror sky-》",bunsyou:"文章归档",bunsyouNotice:"待编辑。",link:"友链",about:"关于"}},ja:{message:{hello:"こんにちは、世界",sankou:"色彩参考",indexPage:"あなたは今どこで何をしていますか <br> この空の続く場所にいますか",indexPageFrom:"——『you -mirror sky-』",bunsyou:"文章リスト",bunsyouNotice:"整理中。",link:"リンク",about:"本サイトについて"}}};if(window.localStorage.getItem("userLanguage"))var ee=window.localStorage.getItem("userLanguage");else var ee="ja";var te=new X.a({locale:ee,messages:Z});new u.a({el:"#app",router:K,i18n:te,template:"<App/>",components:{App:f}}).$mount("#app")},YSLu:function(e,t){},hPUL:function(e,t){},lw9O:function(e,t){},sYb0:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6115559b830f966b9706.js.map