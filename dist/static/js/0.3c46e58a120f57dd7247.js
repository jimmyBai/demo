webpackJsonp([0],{XKvz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),n=a.n(s),o={name:"assessment",data:function(){return{listData:[{name:"Cotton - Pure Conventional",tips:"Want it blended?",value:""},{name:"Cotton - Organic",tips:"Want it blended?",value:""},{name:"Poleyester",tips:"Edit to add more blend？",value:""},{name:"Spandex",tips:"Want it blended?",value:""},{name:"Wool",tips:"Want it blended?",value:""}],total:"",infotext1:"Choose at least one more fabric to compltete your blend",infotext2:"Sounds like a good blend!"}},filters:{viewMoney:function(t){var e=t.toString();if(t)return e+"%"}},mounted:function(){sessionStorage.removeItem("FABRIC")},methods:{changeNum:function(t){/^[1-9]\d*$/.test(t.value)||(t.value=""),t.value>100&&(t.value="");var e=0;this.listData.forEach(function(t){t.value&&(e+=parseFloat(t.value))}),e>100?(this.total=e-parseFloat(t.value)+100-(e-parseFloat(t.value)),t.value=100-(e-parseFloat(t.value))):this.total=e},gotoPage:function(){var t=[],e={};this.listData.forEach(function(a){a.value&&(e={name:a.name,value:a.value},t.push(e))}),sessionStorage.setItem("FABRIC",n()(t)),this.$router.push("/page/placeOrigin")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"formData"},[a("div",{staticClass:"head-title"},[a("h3",{domProps:{textContent:t._s(t.$t("page.assessment.title"))}})]),t._v(" "),a("div",{staticClass:"stock-list"},[a("ul",t._l(t.listData,function(e,s){return a("li",{key:s,staticClass:"content"},[a("div",{staticClass:"stockNmae"},[a("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),a("div",{staticClass:"stockinfo"},[e.value&&e.value>0?a("div",{staticClass:"tips",domProps:{textContent:t._s(e.tips)}}):t._e(),t._v(" "),a("div",{staticClass:"inputInfo"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:[function(a){a.target.composing||t.$set(e,"value",a.target.value)},function(a){a.stopPropagation(),t.changeNum(e)}]}})])])])})),t._v(" "),a("div",{staticClass:"stock-total"},[""!=t.total?a("div",{staticClass:"totalline"},[a("div",{staticClass:"text"},[t.total<100?a("p",{domProps:{textContent:t._s(t.infotext1)}}):t._e(),t._v(" "),t.total>=100?a("p",{domProps:{textContent:t._s(t.infotext2)}}):t._e()]),t._v(" "),a("div",{staticClass:"showtotal"},[a("div",{staticClass:"totalBox",domProps:{textContent:t._s(t.$options.filters.viewMoney(t.total))}})])]):t._e()]),t._v(" "),a("div",{staticClass:"nextBtn"},[a("div",{staticClass:"goNext",class:{active:100==t.total},domProps:{textContent:t._s(t.$t("page.assessment.nextBtn"))},on:{click:function(e){100==t.total&&t.gotoPage()}}})])])])},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("aOuP")},"data-v-c106bcae",null);e.default=l.exports},aOuP:function(t,e){},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var s=a("FeBl"),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}});