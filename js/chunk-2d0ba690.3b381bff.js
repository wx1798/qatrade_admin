(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba690"],{"36a8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d2-container",[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"路由存储指当前路由的存储区域，\n        不同路由之间存储不会相互干扰，\n        使用 await this.$store.dispatch('d2admin/db/databasePage') 获得存储实例进行操作，\n        不同路由条件下获取的存储实例指向位置不同，\n        可以指定路由区分依据 name | path | fullPath，\n        默认根据路由的 name 区分不同的路由"}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"d2-mt-0"},[e._v("增加不重复字段")]),a("el-button",{on:{click:e.handleSetRandom}},[e._v("增加")]),a("p",[e._v("增加自定义字段")]),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"字段名"},model:{value:e.keyNameToSet,callback:function(t){e.keyNameToSet=t},expression:"keyNameToSet"}}),a("el-input",{staticClass:"d2-mr-5",staticStyle:{width:"100px"},attrs:{placeholder:"值"},model:{value:e.valueToSet,callback:function(t){e.valueToSet=t},expression:"valueToSet"}}),a("el-button",{on:{click:e.handleSet}},[e._v("增加")]),a("p",[e._v("删除字段")]),a("el-select",{attrs:{placeholder:"请选择要删除的 key"},model:{value:e.keyNameToDelete,callback:function(t){e.keyNameToDelete=t},expression:"keyNameToDelete"}},e._l(e.keyNameList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("p",[e._v("清空当前用户数据")]),a("el-button",{on:{click:e.handleClear}},[e._v("清空")])],1),a("el-col",{attrs:{span:12}},[a("d2-highlight",{attrs:{code:e.dataDisplay}})],1)],1)],2)},r=[],s=(a("a4d3"),a("4de4"),a("d81d"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("96cf"),a("ade3")),l=a("60bb"),i=a("5880");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{dataDisplay:"",keyNameToSet:"",valueToSet:"",keyNameList:[],keyNameToDelete:""}},watch:{keyNameToDelete:function(e){e&&this.handleDelete(e)}},mounted:function(){this.load()},methods:c({},Object(i["mapActions"])("d2admin/db",["databasePage","databasePageClear"]),{load:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.databasePage());case 2:e=t.sent,this.dataDisplay=JSON.stringify(e.value(),null,2),this.keyNameList=Object.keys(e.value()).map((function(e){return{value:e,label:e}}));case 5:case"end":return t.stop()}}),null,this)},handleDelete:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.databasePage());case 2:t=a.sent,t.unset(e).write(),this.load(),this.keyNameToDelete="";case 6:case"end":return a.stop()}}),null,this)},handleClear:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.databasePageClear());case 2:this.load();case 3:case"end":return e.stop()}}),null,this)},handleSet:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.keyNameToSet){t.next=3;break}return this.$message.error("字段名不能为空"),t.abrupt("return");case 3:return t.next=5,regeneratorRuntime.awrap(this.databasePage());case 5:e=t.sent,e.set(this.keyNameToSet,this.valueToSet).write(),this.load();case 8:case"end":return t.stop()}}),null,this)},handleSetRandom:function(){var e,t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e=Object(l["uniqueId"])(),a.next=3,regeneratorRuntime.awrap(this.databasePage());case 3:t=a.sent,t.set("uniqueKey".concat(e),"value".concat(e)).write(),this.load();case 6:case"end":return a.stop()}}),null,this)}})},d=u,p=a("2877"),h=function(e){e.options.__source="src/views/demo/playground/db/page-public/index.vue"},b=h,m=Object(p["a"])(d,n,r,!1,null,null,null);"function"===typeof b&&b(m);t["default"]=m.exports}}]);