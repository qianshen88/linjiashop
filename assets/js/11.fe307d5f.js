(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("本项目采用前后端分离的架构方式，即前端采用vuejs开发界面，后端采用spring boot提供api服务。\n本节说明开发过程中接口的基本设计规范，开发人员可以根据实际情况做调整，但是如果你打算为本项目提交代码，请尽量遵守下面规范")]),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[t._v("前端部分包括手机h5(linjiashop-mobile),微信小程序(linjiashop-wxapp),app("),s("a",{attrs:{href:"https://gitee.com/microapp/linjiashop-flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("linjiashop-flutter"),s("OutboundLink")],1),t._v(","),s("a",{attrs:{href:"https://github.com/microapp-store/linjiashop-flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[t._v("已上前端项目公用一个api服务：linjiashop-mobile-api")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"接口设计规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口设计规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 接口设计规范")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"综述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综述","aria-hidden":"true"}},[this._v("#")]),this._v(" 综述")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端","aria-hidden":"true"}},[this._v("#")]),this._v(" 后端")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("所有接口必须指定method，\n"),s("ul",[s("li",[t._v("例如下面代码必须指定method为DELETE而，不能不指定method")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DELETE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" idUser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIdUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        addressService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("所有接口必须通过method明显显示其操作意思，比如获取数据：GET，删除数据：DELETE,编辑数据：POST(本项目不使用PUT)")]),t._v(" "),s("li",[t._v("GET方法尽量使用@PathVariable注解来获取参数，除非参数过于复杂则采用@RequestParam来接收，相应的前端也使用对应的方式提交参数")]),t._v(" "),s("li",[t._v("POST方法 ，如果参数过少可以采用@PathVariable或者@Requestaram来接收，如果参数较多则采用@RequestBody来接收参数")]),t._v(" "),s("li",[t._v("DELETE方法尽量根据id去删除数据，接收参数方式尽量使用@PathVariable来接收")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("针对上述后端接收参数的方式，前端要使用对应的方式提交参数")])])}],!1,null,null,null);a.default=e.exports}}]);