(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{345:function(e,t,n){"use strict";n(49);var o=n(7),r=(n(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.imageId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$get("/w/image/".concat(e.imageId,"?size=").concat(e.size));case 4:n=t.sent,e.imageSrc=n;case 6:case"end":return t.stop()}}),t)})))()}}),c=n(5),l=n(31),d=n.n(l),m=n(330),h=n(130),v=n(340),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-img",e._g(e._b({attrs:{src:e.imageSrc,height:e.height,contain:e.contain},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VImg:m.a,VProgressCircular:h.a,VRow:v.a})},349:function(e,t,n){e.exports=n.p+"img/store-logo-light.b503660.png"},362:function(e,t,n){"use strict";n(21),n(49);var o=n(7),r=n(345),c=(n(46),n(4),{name:"PageSettingsCard",components:{"async-img":r.a},props:{title:{type:String,default:"Page Title"},pageId:{type:Number,default:0}},data:function(){return{items:[],searchCategories:"",categories:["Loading ..."],newCategory:"",snackbar:!1,snackMessage:""}},watch:{title:function(e,t){this.getCategories()},searchCategories:function(e){var t=this;e&&(e.length<=2||this.$axios.get("/w/search/category",{params:{term:e}}).then((function(e){var n=e.data.pages.map((function(e){return e.title.split(":")[1]}));t.items=n.map((function(title){return{text:title,value:title}}))})).catch((function(e){console.log(e)})).finally((function(){t.items.filter((function(t){return t.value===e})).length<1&&t.items.push({text:"Add new category: ".concat(e),value:e})})))}},methods:{getCategories:function(){var e=this;e.$axios.get("/w/page/".concat(e.title,"/categories")).then((function(t){e.categories=t.data})).catch((function(e){console.error(e)}))},addNewCategory:function(){var e=this;e.$axios.post("/w/page/".concat(e.title,"/add/category/").concat(e.newCategory),{user:e.$auth.user.email}).then((function(t){switch(t.data.status){case"success":e.categories.push(e.newCategory),e.newCategory="",e.snackMessage="Successfully add category!",e.snackbar=!0;break;case"error":e.snackMessage=t.data.message,e.snackbar=!0}}))},removeCategory:function(e){var t=this;t.$axios.post("/w/page/".concat(t.title,"/del/category/").concat(e),{user:t.$auth.user.email}).then((function(n){switch(console.log(n),n.data.status){case"success":t.categories=t.categories.filter((function(t){return t!==e})),t.snackMessage="Successfully removed category!",t.snackbar=!0;break;case"error":t.snackMessage=n.data.message,t.snackbar=!0}}))}},mounted:function(){this.getCategories()}}),l=n(5),d=n(31),m=n.n(d),h=n(534),v=n(329),f=n(385),y=n(341),k=n(387),w=n(523),C=n(328),_=n(524),x=n(436),V=n(400),A=n(343),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-btn",{attrs:{icon:"",dark:""}},[n("v-icon",[e._v("mdi-cog")])],1),n("v-toolbar-title",[e._v("Settings")]),n("v-spacer"),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.$emit("dialog-cancel")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-card-title",[e._v(e._s(e.title))]),n("v-card-text",{staticClass:"pb-0"},[e.$auth.loggedIn?n("v-autocomplete",{attrs:{items:e.items,"search-input":e.searchCategories,label:"Add new tag",placeholder:"Start typing to search","append-outer-icon":"mdi-tag-plus"},on:{"update:searchInput":function(t){e.searchCategories=t},"update:search-input":function(t){e.searchCategories=t},"click:append-outer":e.addNewCategory},model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}}):e._e()],1),n("v-card-subtitle",{staticClass:"pb-0"},[e._v("Existing Tags:")]),n("v-chip-group",{staticClass:"pl-5",attrs:{column:""}},e._l(e.categories,(function(t,o){return n("v-chip",{key:o,attrs:{close:e.$auth.loggedIn,"close-icon":"mdi-delete",color:"teal","text-color":"white",to:{name:"album",query:{cat:t}}},on:{"click:close":function(n){return e.removeCategory(t)}}},[e._v(e._s(t))])})),1),n("v-snackbar",{attrs:{centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",o,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.snackMessage))])],1)}),[],!1,null,null,null),$=component.exports;m()(component,{VAutocomplete:h.a,VBtn:v.a,VCard:f.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VChip:k.a,VChipGroup:w.a,VIcon:C.a,VSnackbar:_.a,VSpacer:x.a,VToolbar:V.a,VToolbarTitle:A.a});var S,I={name:"CarouselsCard",components:{"async-img":r.a,"page-settings-card":$},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]},imageIndex:{type:Number,default:0}},data:function(){return{carouselsHeaderHeight:50,windowHeight:"900px",cycle:!0,settingsDialog:!1}},mounted:function(){var e=this;e.windowHeight=window.innerHeight-e.carouselsHeaderHeight+"px",e.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},methods:{onResize:function(){this.windowHeight=window.innerHeight-this.carouselsHeaderHeight+"px"},handlePageSettings:(S=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.settingsDialog=!0;case 1:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})}},T=n(555),M=n(525),P=n(526),D=n(330),H=n(527),B=Object(l.a)(I,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[o("v-system-bar",{attrs:{flat:"",color:"primary",dark:"",height:e.carouselsHeaderHeight+"px"}},[o("v-img",{attrs:{src:n(349),contain:"","max-width":"80",width:"100%"}}),o("v-toolbar-title",[e._v("Album Carousel: "+e._s(e.title))]),o("v-spacer"),e.cycle?e._e():o("v-btn",{attrs:{icon:"",dark:""},on:{click:e.handlePageSettings}},[o("v-icon",[e._v("mdi-cog")])],1),e.cycle?e._e():o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!0}}},[o("v-icon",[e._v("mdi-play")])],1),e.cycle?o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!1}}},[o("v-icon",[e._v("mdi-pause")])],1):e._e(),o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.cycle=!1,e.$emit("close-icon-click")}}},[o("v-icon",[e._v("mdi-close")])],1)],1),o("v-carousel",{attrs:{height:"100%",dark:!0,cycle:e.cycle,interval:"6000",progress:!0,"show-arrows-on-hover":""},model:{value:e.imageIndex,callback:function(t){e.imageIndex=t},expression:"imageIndex"}},e._l(e.members,(function(t,n){return o("v-carousel-item",{key:n},[o("async-img",{attrs:{imageId:t.id,size:"2048",height:e.windowHeight}})],1)})),1),o("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[o("page-settings-card",{attrs:{pageId:e.members[e.imageIndex].id,title:e.members[e.imageIndex].title},on:{"dialog-cancel":function(t){e.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),j=B.exports;m()(B,{VBtn:v.a,VCard:f.a,VCarousel:T.a,VCarouselItem:M.a,VDialog:P.a,VIcon:C.a,VImg:D.a,VSpacer:x.a,VSystemBar:H.a,VToolbarTitle:A.a});var N={name:"AlbumPhotoCard",components:{"async-img":r.a,"page-settings-card":$},props:{member:{type:Object,default:null},index:{type:Number,default:0}},data:function(){return{settingsDialog:!1,selected:!1}},computed:{photoTimeStamp:function(){return new Date(this.member.timestamp).toLocaleString("en-ca",{dateStyle:"long",timeStyle:"short",timeZone:"America/New_York"})}}},O=n(554),E=n(528),L=Object(l.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[n("v-card",{class:{"on-hover":o},attrs:{elevation:o?16:2}},[n("async-img",{attrs:{imageId:e.member.id,size:"250",height:"250"},on:{click:function(t){return t.stopPropagation(),e.$emit("album-photo-click",e.index)}}}),n("v-card-text",[n("div",{staticClass:"font-weight-black"},[e._v(e._s(e.member.title.substring(5,35)))]),n("div",[e._v(e._s(e.photoTimeStamp))])]),e.$auth.loggedIn?n("v-card-actions",[n("v-checkbox",{attrs:{color:"warning"},on:{change:function(t){return e.$emit("album-photo-select",e.selected,e.member.id)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-spacer"),n("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(t){e.settingsDialog=!0}}},[n("v-icon",[e._v("mdi-tag-plus")])],1),n("v-btn",{attrs:{icon:"",color:"indigo"}},[n("v-icon",[e._v("mdi-download")])],1)],1):e._e()],1)]}}])}),n("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[n("page-settings-card",{attrs:{pageId:e.member.id,title:e.member.title},on:{"dialog-cancel":function(t){e.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),z=L.exports;m()(L,{VBtn:v.a,VCard:f.a,VCardActions:y.a,VCardText:y.c,VCheckbox:O.a,VDialog:P.a,VHover:E.a,VIcon:C.a,VSpacer:x.a});var R={name:"AlbumActionsDrawer",props:{selectedPhotosAmount:{type:Number,default:0}},data:function(){return{}},computed:{labelAddCategory:function(){return this.selectedPhotosAmount>0?"Add category ("+this.selectedPhotosAmount+")":"Select photo(s) to add category"}}},J=n(333),Y=n(430),G=n(393),Z=n(431),F=n(395),K=n(342),Q=n(494),U=Object(l.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"ml-6",staticStyle:{top:"140px",height:"auto","max-height":"calc(100% - 80px)"},attrs:{floating:"",fixed:"",clipped:"","expand-on-hover":"",dark:""}},[n("v-list",[n("v-list-item",{staticClass:"px-2"},[n("v-list-item-avatar",{attrs:{color:"primary"}},[n("v-icon",[e._v("mdi-dots-vertical")])],1),n("v-list-item-title",[e._v("Actions")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item",{attrs:{link:"",disabled:e.selectedPhotosAmount<=0},on:{click:function(t){return e.$emit("album-actions-add-category")}}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"green"}},[e._v("mdi-tag-plus")])],1),n("v-list-item-title",[e._v(e._s(e.labelAddCategory))])],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"warning"}},[e._v("mdi-arrow-up-bold")])],1),n("v-list-item-title",[e._v("Back to Top")])],1)],1)],1)}),[],!1,null,null,null),W=U.exports;m()(U,{VDivider:J.a,VIcon:C.a,VList:Y.a,VListItem:G.a,VListItemAvatar:Z.a,VListItemIcon:F.a,VListItemTitle:K.c,VNavigationDrawer:Q.a});var X={name:"BulkAddTagCard",props:{members:{type:Array,default:[]}},data:function(){return{items:[],searchCategories:"",newCategory:"",categories:["loading ..."],snackbar:!1,snackMessage:""}},watch:{searchCategories:function(e){var t=this;!e||e.length<=2?this.newCategory="":this.$axios.get("/w/search/category",{params:{term:e}}).then((function(e){var n=e.data.pages.map((function(e){return e.title.split(":")[1]}));t.items=n.map((function(title){return{text:title,value:title}}))})).catch((function(e){console.log(e)})).finally((function(){t.items.filter((function(t){return t.value===e})).length<1&&t.items.push({text:"Add new category: ".concat(e),value:e})}))}},methods:{bulkAddNewCategory:function(){var e=this;e.$axios.post("/w/bulk/add/category",{user:e.$auth.user.email,pageids:e.members.join("|"),category:e.newCategory}).then((function(t){switch(t.data.status){case"success":e.newCategory="",e.snackMessage="Successfully add category!",e.snackbar=!0;break;case"error":e.snackMessage=t.data.message,e.snackbar=!0}}))}}},ee=Object(l.a)(X,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[n("v-btn",{attrs:{icon:"",dark:""}},[n("v-icon",[e._v("mdi-cog")])],1),n("v-toolbar-title",[e._v("Add Category")]),n("v-spacer"),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){return e.$emit("dialog-cancel")}}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-card-title",[e._v("Add category for "+e._s(e.members.length)+" pages")]),n("v-card-text",[e.$auth.loggedIn?n("v-autocomplete",{attrs:{items:e.items,"search-input":e.searchCategories,label:"Add Category",placeholder:"Start typing to search existing categories"},on:{"update:searchInput":function(t){e.searchCategories=t},"update:search-input":function(t){e.searchCategories=t}},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("v-icon",{attrs:{color:"success",disabled:e.newCategory.length<2},on:{click:e.bulkAddNewCategory}},[e._v("mdi-tag-plus")])]},proxy:!0}],null,!1,3977055828),model:{value:e.newCategory,callback:function(t){e.newCategory=t},expression:"newCategory"}}):e._e()],1),n("v-snackbar",{attrs:{timeout:"2000",centered:""},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",o,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.snackMessage))])],1)}),[],!1,null,null,null),te=ee.exports;m()(ee,{VAutocomplete:h.a,VBtn:v.a,VCard:f.a,VCardText:y.c,VCardTitle:y.d,VIcon:C.a,VSnackbar:_.a,VSpacer:x.a,VToolbar:V.a,VToolbarTitle:A.a});var ae={name:"AlbumPhotos",components:{"carousels-card":j,"album-photo-card":z,"album-actions-drawer":W,"bulk-add-tag-card":te},props:{title:{type:String,default:null},amount:{type:Number,default:0},members:{type:Array,default:function(){return[]}}},data:function(){return{imageIndex:0,showCarousels:!1,showBulkAddTags:!1,selectedMembers:[]}},mounted:function(){},methods:{handleAlbumPhotoClick:function(e){this.imageIndex=e,this.showCarousels=!0},handleAlbumPhotoSelect:function(e,t){e?this.selectedMembers.push(t):this.selectedMembers=this.selectedMembers.filter((function(e){return e!=t}))},handleBulkAddCategory:function(){this.showBulkAddTags=!0}}},ne=n(517),oe=n(370),re=n(363),se=n(340),ie=Object(l.a)(ae,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:""}},[e.$auth.loggedIn&&e.members.length>0?n("album-actions-drawer",{attrs:{selectedPhotosAmount:e.selectedMembers.length},on:{"album-actions-add-category":e.handleBulkAddCategory}}):e._e(),e.$auth.loggedIn&&e.members.length>0?n("v-container",{attrs:{fluid:""}},[e.title?n("h1",[e._v(e._s(e.title)+" ("+e._s(e.members.length)+" / "+e._s(e.amount)+")")]):e._e(),n("v-row",e._l(e.members,(function(t,o){return n("v-col",{key:t.id,staticClass:"d-flex child-flex"},[n("album-photo-card",{attrs:{member:t,index:o},on:{"album-photo-click":e.handleAlbumPhotoClick,"album-photo-select":e.handleAlbumPhotoSelect}})],1)})),1)],1):e._e(),e.members.length<=0?n("v-alert",[e._v("No album available")]):e._e(),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":""},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[n("carousels-card",{attrs:{title:e.title,members:e.members,imageIndex:e.imageIndex},on:{"close-icon-click":function(t){e.showCarousels=!1}}})],1),n("v-dialog",{attrs:{"max-width":"600"},model:{value:e.showBulkAddTags,callback:function(t){e.showBulkAddTags=t},expression:"showBulkAddTags"}},[n("bulk-add-tag-card",{attrs:{members:e.selectedMembers},on:{"dialog-cancel":function(t){e.showBulkAddTags=!1}}})],1)],1)}),[],!1,null,"421e666a",null);t.a=ie.exports;m()(ie,{VAlert:ne.a,VCard:f.a,VCol:oe.a,VContainer:re.a,VDialog:P.a,VRow:se.a})},538:function(e,t,n){"use strict";n.r(t);var o={name:"SharingAlbum",layout:"store",auth:!1,components:{"album-photos":n(362).a},data:function(){return{members:[],wContinue:null,photoAmount:-1,loading:!1,limitPerPage:12}},watch:{$route:function(e,t){this.members=[],this.wContinue=null,this.photoAmount=-1,this.loadMembers()}},mounted:function(){this.loadMembers()},updated:function(){this.$vuetify.goTo(document.body.scrollHeight)},methods:{loadMembers:function(){var e=this,option={method:"get",url:"/w/album/sharing/"+e.$route.query.cat,params:{limit:e.limitPerPage}};e.wContinue&&(option.params.continue=e.wContinue),e.$axios.request(option).then((function(t){t.data.error||(null===e.wContinue?e.members=t.data.items:e.members=e.members.concat(t.data.items),e.wContinue=t.data.hasOwnProperty("continue")?t.data.continue:null,e.photoAmount=t.data.hasOwnProperty("amount")?t.data.amount:-1,e.loading=!1)}))},loadMoreMembers:function(){this.loading=!0,this.loadMembers()}},computed:{pageHeight:function(){return document.body.scrollHeight}}},r=n(5),c=n(31),l=n.n(c),d=n(517),m=n(329),h=n(363),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{ref:"container"},[e.$route.query.cat&&e.members.length>0?n("album-photos",{attrs:{title:e.$route.query.cat,amount:e.photoAmount,members:e.members}}):n("div",[n("v-alert",{staticClass:"mt-12",attrs:{border:"bottom",type:"warning",prominent:""}},[e._v("You need "),n("strong",{staticClass:"purple--text"},[e._v("valid ")]),e._v("sharing id to access sharing albums!"),n("br"),e._v("Contact the "),n("strong",{staticClass:"purple--text"},[e._v("site owner ")]),e._v("to get the sharing id!")])],1),e.wContinue?n("v-btn",{attrs:{loading:e.loading,disabled:e.loading,block:"",color:"primary"},on:{click:e.loadMoreMembers}},[e._v("Click to Load More (Showing "+e._s(e.members.length)+" of "+e._s(e.photoAmount)+" items)")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAlert:d.a,VBtn:m.a,VContainer:h.a})}}]);