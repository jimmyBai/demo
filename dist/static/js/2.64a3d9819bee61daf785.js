webpackJsonp([2],{JNCt:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Jtum"),a={name:"assessment",data:function(){return{listA:[{name:"Agricultural Production",text:"USA"},{name:"Textile Production",text:"China"},{name:"Spinning",text:"China"},{name:"Weaving",text:"China"},{name:"Bleaching & Dyeing",text:"China"},{name:"Finishing",text:"China"}],listB:[{name:"Agricultural Production",text:"China"},{name:"Textile Production",text:"China"},{name:"Spinning",text:"China"},{name:"Weaving",text:"USA"},{name:"Bleaching & Dyeing",text:"USA"},{name:"Finishing",text:"USA"}]}},mounted:function(){var t=document.getElementById("country1");Object(s.a)(t,22,"#8cce87","#b2b2b2");var e=document.getElementById("country2");Object(s.a)(e,49,"#ff8f2f","#b2b2b2")},methods:{gopage:function(){this.$router.push("/page/placeOrigin")}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scoreBox"},[i("div",{staticClass:"shead"},[t._m(0),t._v(" "),i("div",{staticClass:"shead-right"},[i("div",{staticClass:"btn"},[i("span",{on:{click:t.gopage}},[t._v("New Selection")])])])]),t._v(" "),i("div",{staticClass:"chartshow"},[i("div",{staticClass:"flex-echart"},[i("div",{staticClass:"left pre-5"},[t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"shortTable"},[i("ul",[t._m(3),t._v(" "),t._l(t.listA,function(e,s){return i("li",{key:s},[i("div",{staticClass:"itme-xd"},[i("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),i("div",{staticClass:"itme-xd"},[i("span",{staticClass:"inText",domProps:{textContent:t._s(e.text)}})])])})],2)])]),t._v(" "),i("div",{staticClass:"right pre-5"},[t._m(4),t._v(" "),t._m(5),t._v(" "),i("div",{staticClass:"shortTable"},[i("ul",[t._m(6),t._v(" "),t._l(t.listA,function(e,s){return i("li",{key:s},[i("div",{staticClass:"itme-xd"},[i("span",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),i("div",{staticClass:"itme-xd"},[i("span",{staticClass:"inText",domProps:{textContent:t._s(e.text)}})])])})],2)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shead-left"},[e("span",[this._v("Pure Conventional Cotton")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[e("span",[this._v("Country Selection 1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasBar"},[e("div",{staticClass:"time-graph"},[e("canvas",{attrs:{id:"country1",width:"160",height:"160"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"head"},[e("div",{staticClass:"itme-xd"},[e("span",[this._v("Production Stage")])]),this._v(" "),e("div",{staticClass:"itme-xd"},[e("span",[this._v("Select Country")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name"},[e("span",[this._v("Country Selection 2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasBar"},[e("div",{staticClass:"time-graph"},[e("canvas",{attrs:{id:"country2",width:"160",height:"160"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"head"},[e("div",{staticClass:"itme-xd"},[e("span",[this._v("Production Stage")])]),this._v(" "),e("div",{staticClass:"itme-xd"},[e("span",[this._v("Select Country")])])])}]};var c=i("VU/8")(a,n,!1,function(t){i("gFIJ")},"data-v-6886e45b",null);e.default=c.exports},Jtum:function(t,e,i){"use strict";e.a=function(t,e,i,s){var a=t.getContext("2d"),n=t.width/2,c=t.height/2,r=2*Math.PI/100,l=0;!function o(){window.requestAnimationFrame(o),a.clearRect(0,0,t.width,t.height),function(){a.save(),a.beginPath(),a.lineWidth=20;var t=n-a.lineWidth;a.lineCap="round",a.strokeStyle=s,a.arc(n,c,t,0,2*Math.PI,!1),a.stroke(),a.closePath(),a.restore()}(),function(t){a.save(),a.fillStyle=i,a.font="40px Helvetica";var e=a.measureText(t.toFixed(0)).width;a.fillText(t.toFixed(0),n-e/2,c+20),a.restore()}(l),function(t){a.save(),a.strokeStyle=i,a.lineWidth=20,a.lineCap="round";var e=n-a.lineWidth;a.beginPath(),a.arc(n,c,e,-Math.PI/2,-Math.PI/2+t*r,!1),a.stroke(),a.closePath(),a.restore()}(l),l>=e||(l+=1)}()}},gFIJ:function(t,e){}});