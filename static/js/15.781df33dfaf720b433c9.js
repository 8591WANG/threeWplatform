webpackJsonp([15],{KG7M:function(e,t){},jWla:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("I2ex"),o=s("6zNY"),n={data:function(){return{houseId:"",houseHolderId:"123321",proveNumber:"32254345",sex:"男",phoneNumber:"54464",houseHolderName:"王",address:"山东省德州市",name:"海景房",price:"200",description:"傍晚时可漫步在海岸边，美丽的彩霞高挂天空，红红的夕阳也将缓缓降落，夜晚来临，地道的地方小吃美食将让您获得大大的满足，累了海滨民宿细心准备的舒适客房，将是您卸下所有疲惫的好地方，清晨从睡梦中醒来悦耳的鸟啼声，将与您一同迎向充满朝气的一天，如此悠闲的休憩时光就在海滨民宿，民宿主人希望每位旅客都到海滨来享受一个轻松自在的假期。",houseimg:"http://cdn.thsummer.com//NY",effect:!1,imgUrl:""}},methods:{dofunction:function(){},goToUrl:function(e,t,s){this.$router.push({path:e,query:{kind:t,type:s}})},handleCurrentChange:function(e){this.currentPage=e,console.log(this.currentPage)},changeeffect:function(e){var t=this;Object(i.i)(this.houseId,e).then(function(e){t.$router.push("showRequestList"),t.$message({message:"审核成功",type:"success"})})},gethousedetail:function(){var e=this;Object(i.g)(this.houseId).then(function(t){e.name=t.houseDetail.houseName,e.address=t.houseDetail.locationKey+t.houseDetail.location,e.price=t.houseDetail.price,e.description=t.houseDetail.description,e.houseimg=t.houseDetail.houseimg,e.effect=t.houseDetail.effect,e.proveNumber=t.houseDetail.proveNumber,e.imgUrl=t.houseDetail.imgUrl})},getHostInfo:function(){var e=this;Object(o.a)(this.houseHolderId).then(function(t){e.sex=t.houseHolder.sex,e.houseHolderName=t.houseHolder.houseHolderName,e.phoneNumber=t.houseHolder.phoneNumber})}},created:function(){this.houseId=this.$route.query.houseId,this.houseHolderId=this.$route.query.houseHolderId,this.gethousedetail(),this.getHostInfo()},watch:{changeeffect:function(){var e=this;this.$nextTick(function(){e.goToUrl("/showOneDetail")})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("img",{staticStyle:{width:"100%"},attrs:{src:"http://cdn.thsummer.com//top1"}}),e._v(" "),s("div",{staticClass:"return",on:{click:function(t){return e.goToUrl("/")}}},[e._v("返回首页")])]),e._v(" "),s("div",{staticStyle:{margin:"30px"}},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("房主信息")]),e._v(" "),s("div",{staticClass:"inform"},[e._v("房主ID:"+e._s(e.houseHolderId))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("姓名："+e._s(e.houseHolderName))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("身份证号码/房产证编码："+e._s(e.proveNumber))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("性别："+e._s(e.sex))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("联系方式："+e._s(e.phoneNumber))])],1),e._v(" "),s("div",{staticStyle:{margin:"30px"}},[s("el-divider",{attrs:{"content-position":"left"}},[e._v("房屋信息")]),e._v(" "),s("div",{staticClass:"inform"},[e._v("房屋ID:"+e._s(e.houseId))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("民宿名称（标题）："+e._s(e.name))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("价格："+e._s(e.price)+"¥")]),e._v(" "),s("div",{staticClass:"inform"},[e._v("房屋描述："+e._s(e.description))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("民宿位置："+e._s(e.address))]),e._v(" "),s("div",{staticClass:"inform"},[e._v("\n      房主上传图片：\n      "),s("a",{attrs:{href:e.imgUrl,target:"_blank"}},[e._v(e._s(e.imgUrl))])])],1),e._v(" "),s("div",[s("el-row",[s("el-button",{attrs:{type:"success"},on:{click:function(t){return e.changeeffect(!0)}}},[e._v("审核通过")]),e._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.changeeffect(!1)}}},[e._v("审核未通过")]),e._v(" "),s("el-button",{staticStyle:{"padding-left":"30px"},attrs:{type:"text"},on:{click:function(t){return e.goToUrl("/showRequestList")}}},[e._v("返回")])],1)],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"margin-top":"50px"}},[t("img",{staticStyle:{width:"100%"},attrs:{src:"http://cdn.thsummer.com//bottom"}})])}]};var a=s("VU/8")(n,r,!1,function(e){s("KG7M")},"data-v-1ef9c72a",null);t.default=a.exports}});