(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c28a32"],{2375:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"bouncing-loader"},[n("div"),n("div"),n("div")])])}],s=(n("6fa7"),n("2877")),c={},i=Object(s["a"])(c,a,r,!1,null,"1b8ef1c2",null);e["a"]=i.exports},"25d3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("Spinner"):n("div",{staticClass:"container py-5"},[n("div",[n("h1",[t._v(t._s(t.restaurant.name))]),n("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),n("hr"),n("ul",[n("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength)+" ")]),n("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts)+" ")])]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},r=[],s=n("5530"),c=n("1da1"),i=(n("96cf"),n("b0c0"),n("c4c3")),u=n("2375"),o=n("2fa3"),l={components:{Spinner:u["a"]},data:function(){return{restaurant:{name:"",categoryName:"未分類",commentsLength:-1,viewCounts:-1},isLoading:!0}},beforeRouteUpdate:function(t,e,n){var a=t.params.id;this.fetchRestaurant(a),n()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i["a"].getRestaurant({restaurantId:t});case 3:a=n.sent,r=a.data,c=r.restaurant,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{name:c.name,categoryName:c.Category?c.Category.name:"未分類",commentsLength:c.Comments?c.Comments.length:0,viewCounts:c.viewCounts?c.viewCounts:0}),e.isLoading=!1,n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),o["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},f=l,m=n("2877"),d=Object(m["a"])(f,a,r,!1,null,null,null);e["default"]=d.exports},"6fa7":function(t,e,n){"use strict";n("ffd3")},ffd3:function(t,e,n){}}]);
//# sourceMappingURL=chunk-27c28a32.436a5379.js.map