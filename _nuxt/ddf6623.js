(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{345:function(t,e,r){"use strict";r(49);var n=r(7),o=(r(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t.imageId){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.$get("/w/image/".concat(t.imageId,"?size=").concat(t.size));case 4:r=e.sent,t.imageSrc=r;case 6:case"end":return e.stop()}}),e)})))()}}),l=r(5),c=r(31),d=r.n(c),v=r(330),h=r(130),m=r(340),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",t._g(t._b({attrs:{src:t.imageSrc,height:t.height,contain:t.contain},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VImg:v.a,VProgressCircular:h.a,VRow:m.a})},349:function(t,e,r){t.exports=r.p+"img/store-logo-light.b503660.png"},362:function(t,e,r){"use strict";r(21),r(49);var n=r(7),o=r(345),l=(r(46),r(4),{name:"PageSettingsCard",components:{"async-img":o.a},props:{title:{type:String,default:"Page Title"},pageId:{type:Number,default:0}},data:function(){return{items:[],searchCategories:"",categories:["Loading ..."],newCategory:"",snackbar:!1,snackMessage:""}},watch:{title:function(t,e){this.getCategories()},searchCategories:function(t){var e=this;t&&(t.length<=2||this.$axios.get("/w/search/category",{params:{term:t}}).then((function(t){var r=t.data.pages.map((function(t){return t.title.split(":")[1]}));e.items=r.map((function(title){return{text:title,value:title}}))})).catch((function(t){console.log(t)})).finally((function(){e.items.filter((function(e){return e.value===t})).length<1&&e.items.push({text:"Add new category: ".concat(t),value:t})})))}},methods:{getCategories:function(){var t=this;t.$axios.get("/w/page/".concat(t.title,"/categories")).then((function(e){t.categories=e.data})).catch((function(t){console.error(t)}))},addNewCategory:function(){var t=this;t.$axios.post("/w/page/".concat(t.title,"/add/category/").concat(t.newCategory),{user:t.$auth.user.email}).then((function(e){switch(e.data.status){case"success":t.categories.push(t.newCategory),t.newCategory="",t.snackMessage="Successfully add category!",t.snackbar=!0;break;case"error":t.snackMessage=e.data.message,t.snackbar=!0}}))},removeCategory:function(t){var e=this;e.$axios.post("/w/page/".concat(e.title,"/del/category/").concat(t),{user:e.$auth.user.email}).then((function(r){switch(console.log(r),r.data.status){case"success":e.categories=e.categories.filter((function(e){return e!==t})),e.snackMessage="Successfully removed category!",e.snackbar=!0;break;case"error":e.snackMessage=r.data.message,e.snackbar=!0}}))}},mounted:function(){this.getCategories()}}),c=r(5),d=r(31),v=r.n(d),h=r(534),m=r(329),f=r(385),w=r(341),y=r(387),k=r(523),x=r(328),_=r(524),C=r(436),O=r(400),S=r(343),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""}},[r("v-icon",[t._v("mdi-cog")])],1),r("v-toolbar-title",[t._v("Settings")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("dialog-cancel")}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-title",[t._v(t._s(t.title))]),r("v-card-text",{staticClass:"pb-0"},[t.$auth.loggedIn?r("v-autocomplete",{attrs:{items:t.items,"search-input":t.searchCategories,label:"Add new tag",placeholder:"Start typing to search","append-outer-icon":"mdi-tag-plus"},on:{"update:searchInput":function(e){t.searchCategories=e},"update:search-input":function(e){t.searchCategories=e},"click:append-outer":t.addNewCategory},model:{value:t.newCategory,callback:function(e){t.newCategory=e},expression:"newCategory"}}):t._e()],1),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("Existing Tags:")]),r("v-chip-group",{staticClass:"pl-5",attrs:{column:""}},t._l(t.categories,(function(e,n){return r("v-chip",{key:n,attrs:{close:t.$auth.loggedIn,"close-icon":"mdi-delete",color:"teal","text-color":"white",to:{name:"album",query:{cat:e}}},on:{"click:close":function(r){return t.removeCategory(e)}}},[t._v(t._s(e))])})),1),r("v-snackbar",{attrs:{centered:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackMessage))])],1)}),[],!1,null,null,null),V=component.exports;v()(component,{VAutocomplete:h.a,VBtn:m.a,VCard:f.a,VCardSubtitle:w.b,VCardText:w.c,VCardTitle:w.d,VChip:y.a,VChipGroup:k.a,VIcon:x.a,VSnackbar:_.a,VSpacer:C.a,VToolbar:O.a,VToolbarTitle:S.a});var j,$={name:"CarouselsCard",components:{"async-img":o.a,"page-settings-card":V},props:{title:{type:String,default:"Album Title"},members:{type:Array,default:[{id:123}]},imageIndex:{type:Number,default:0}},data:function(){return{carouselsHeaderHeight:50,windowHeight:"900px",cycle:!0,settingsDialog:!1}},mounted:function(){var t=this;t.windowHeight=window.innerHeight-t.carouselsHeaderHeight+"px",t.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},methods:{onResize:function(){this.windowHeight=window.innerHeight-this.carouselsHeaderHeight+"px"},handlePageSettings:(j=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.settingsDialog=!0;case 1:case"end":return t.stop()}}),t,this)}))),function(){return j.apply(this,arguments)})}},A=r(555),I=r(525),T=r(526),P=r(330),D=r(527),B=Object(c.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-system-bar",{attrs:{flat:"",color:"primary",dark:"",height:t.carouselsHeaderHeight+"px"}},[n("v-img",{attrs:{src:r(349),contain:"","max-width":"80",width:"100%"}}),n("v-toolbar-title",[t._v("Album Carousel: "+t._s(t.title))]),n("v-spacer"),t.cycle?t._e():n("v-btn",{attrs:{icon:"",dark:""},on:{click:t.handlePageSettings}},[n("v-icon",[t._v("mdi-cog")])],1),t.cycle?t._e():n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!0}}},[n("v-icon",[t._v("mdi-play")])],1),t.cycle?n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!1}}},[n("v-icon",[t._v("mdi-pause")])],1):t._e(),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.cycle=!1,t.$emit("close-icon-click")}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("v-carousel",{attrs:{height:"100%",dark:!0,cycle:t.cycle,interval:"6000",progress:!0,"show-arrows-on-hover":""},model:{value:t.imageIndex,callback:function(e){t.imageIndex=e},expression:"imageIndex"}},t._l(t.members,(function(e,r){return n("v-carousel-item",{key:r},[n("async-img",{attrs:{imageId:e.id,size:"2048",height:t.windowHeight}})],1)})),1),n("v-dialog",{attrs:{fullscreen:t.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[n("page-settings-card",{attrs:{pageId:t.members[t.imageIndex].id,title:t.members[t.imageIndex].title},on:{"dialog-cancel":function(e){t.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),z=B.exports;v()(B,{VBtn:m.a,VCard:f.a,VCarousel:A.a,VCarouselItem:I.a,VDialog:T.a,VIcon:x.a,VImg:P.a,VSpacer:C.a,VSystemBar:D.a,VToolbarTitle:S.a});var E={name:"AlbumPhotoCard",components:{"async-img":o.a,"page-settings-card":V},props:{member:{type:Object,default:null},index:{type:Number,default:0}},data:function(){return{settingsDialog:!1,selected:!1}},computed:{photoTimeStamp:function(){return new Date(this.member.timestamp).toLocaleString("en-ca",{dateStyle:"long",timeStyle:"short",timeZone:"America/New_York"})}}},N=r(554),R=r(528),M=Object(c.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{class:{"on-hover":n},attrs:{elevation:n?16:2}},[r("async-img",{attrs:{imageId:t.member.id,size:"250",height:"250"},on:{click:function(e){return e.stopPropagation(),t.$emit("album-photo-click",t.index)}}}),r("v-card-text",[r("div",{staticClass:"font-weight-black"},[t._v(t._s(t.member.title.substring(5,35)))]),r("div",[t._v(t._s(t.photoTimeStamp))])]),t.$auth.loggedIn?r("v-card-actions",[r("v-checkbox",{attrs:{color:"warning"},on:{change:function(e){return t.$emit("album-photo-select",t.selected,t.member.id)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),r("v-spacer"),r("v-btn",{attrs:{icon:"",color:"success"},on:{click:function(e){t.settingsDialog=!0}}},[r("v-icon",[t._v("mdi-tag-plus")])],1),r("v-btn",{attrs:{icon:"",color:"indigo"}},[r("v-icon",[t._v("mdi-download")])],1)],1):t._e()],1)]}}])}),r("v-dialog",{attrs:{fullscreen:t.$vuetify.breakpoint.mobile,"max-width":"500"},model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[r("page-settings-card",{attrs:{pageId:t.member.id,title:t.member.title},on:{"dialog-cancel":function(e){t.settingsDialog=!1}}})],1)],1)}),[],!1,null,null,null),H=M.exports;v()(M,{VBtn:m.a,VCard:f.a,VCardActions:w.a,VCardText:w.c,VCheckbox:N.a,VDialog:T.a,VHover:R.a,VIcon:x.a,VSpacer:C.a});var L={name:"AlbumActionsDrawer",props:{selectedPhotosAmount:{type:Number,default:0}},data:function(){return{}},computed:{labelAddCategory:function(){return this.selectedPhotosAmount>0?"Add category ("+this.selectedPhotosAmount+")":"Select photo(s) to add category"}}},F=r(333),W=r(430),J=r(393),G=r(431),U=r(395),Y=r(342),Z=r(494),K=Object(c.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{staticClass:"ml-6",staticStyle:{top:"140px",height:"auto","max-height":"calc(100% - 80px)"},attrs:{floating:"",fixed:"",clipped:"","expand-on-hover":"",dark:""}},[r("v-list",[r("v-list-item",{staticClass:"px-2"},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",[t._v("mdi-dots-vertical")])],1),r("v-list-item-title",[t._v("Actions")])],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item",{attrs:{link:"",disabled:t.selectedPhotosAmount<=0},on:{click:function(e){return t.$emit("album-actions-add-category")}}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"green"}},[t._v("mdi-tag-plus")])],1),r("v-list-item-title",[t._v(t._s(t.labelAddCategory))])],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-up-bold")])],1),r("v-list-item-title",[t._v("Back to Top")])],1)],1)],1)}),[],!1,null,null,null),Q=K.exports;v()(K,{VDivider:F.a,VIcon:x.a,VList:W.a,VListItem:J.a,VListItemAvatar:G.a,VListItemIcon:U.a,VListItemTitle:Y.c,VNavigationDrawer:Z.a});var X={name:"BulkAddTagCard",props:{members:{type:Array,default:[]}},data:function(){return{items:[],searchCategories:"",newCategory:"",categories:["loading ..."],snackbar:!1,snackMessage:""}},watch:{searchCategories:function(t){var e=this;!t||t.length<=2?this.newCategory="":this.$axios.get("/w/search/category",{params:{term:t}}).then((function(t){var r=t.data.pages.map((function(t){return t.title.split(":")[1]}));e.items=r.map((function(title){return{text:title,value:title}}))})).catch((function(t){console.log(t)})).finally((function(){e.items.filter((function(e){return e.value===t})).length<1&&e.items.push({text:"Add new category: ".concat(t),value:t})}))}},methods:{bulkAddNewCategory:function(){var t=this;t.$axios.post("/w/bulk/add/category",{user:t.$auth.user.email,pageids:t.members.join("|"),category:t.newCategory}).then((function(e){switch(e.data.status){case"success":t.newCategory="",t.snackMessage="Successfully add category!",t.snackbar=!0;break;case"error":t.snackMessage=e.data.message,t.snackbar=!0}}))}}},tt=Object(c.a)(X,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""}},[r("v-icon",[t._v("mdi-cog")])],1),r("v-toolbar-title",[t._v("Add Category")]),r("v-spacer"),r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("dialog-cancel")}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-card-title",[t._v("Add category for "+t._s(t.members.length)+" pages")]),r("v-card-text",[t.$auth.loggedIn?r("v-autocomplete",{attrs:{items:t.items,"search-input":t.searchCategories,label:"Add Category",placeholder:"Start typing to search existing categories"},on:{"update:searchInput":function(e){t.searchCategories=e},"update:search-input":function(e){t.searchCategories=e}},scopedSlots:t._u([{key:"append-outer",fn:function(){return[r("v-icon",{attrs:{color:"success",disabled:t.newCategory.length<2},on:{click:t.bulkAddNewCategory}},[t._v("mdi-tag-plus")])]},proxy:!0}],null,!1,3977055828),model:{value:t.newCategory,callback:function(e){t.newCategory=e},expression:"newCategory"}}):t._e()],1),r("v-snackbar",{attrs:{timeout:"2000",centered:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackMessage))])],1)}),[],!1,null,null,null),et=tt.exports;v()(tt,{VAutocomplete:h.a,VBtn:m.a,VCard:f.a,VCardText:w.c,VCardTitle:w.d,VIcon:x.a,VSnackbar:_.a,VSpacer:C.a,VToolbar:O.a,VToolbarTitle:S.a});var at={name:"AlbumPhotos",components:{"carousels-card":z,"album-photo-card":H,"album-actions-drawer":Q,"bulk-add-tag-card":et},props:{title:{type:String,default:null},amount:{type:Number,default:0},members:{type:Array,default:function(){return[]}}},data:function(){return{imageIndex:0,showCarousels:!1,showBulkAddTags:!1,selectedMembers:[]}},mounted:function(){},methods:{handleAlbumPhotoClick:function(t){this.imageIndex=t,this.showCarousels=!0},handleAlbumPhotoSelect:function(t,e){t?this.selectedMembers.push(e):this.selectedMembers=this.selectedMembers.filter((function(t){return t!=e}))},handleBulkAddCategory:function(){this.showBulkAddTags=!0}}},it=r(517),st=r(370),nt=r(363),ot=r(340),lt=Object(c.a)(at,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[t.$auth.loggedIn&&t.members.length>0?r("album-actions-drawer",{attrs:{selectedPhotosAmount:t.selectedMembers.length},on:{"album-actions-add-category":t.handleBulkAddCategory}}):t._e(),t.members.length>0?r("v-container",{attrs:{fluid:""}},[t.title?r("h1",[t._v(t._s(t.title)+" ("+t._s(t.members.length)+" / "+t._s(t.amount)+")")]):t._e(),r("v-row",t._l(t.members,(function(e,n){return r("v-col",{key:e.id,staticClass:"d-flex child-flex"},[r("album-photo-card",{attrs:{member:e,index:n},on:{"album-photo-click":t.handleAlbumPhotoClick,"album-photo-select":t.handleAlbumPhotoSelect}})],1)})),1)],1):t._e(),t.members.length<=0?r("v-alert",[t._v("No album available")]):t._e(),r("v-dialog",{attrs:{fullscreen:"","hide-overlay":""},model:{value:t.showCarousels,callback:function(e){t.showCarousels=e},expression:"showCarousels"}},[r("carousels-card",{attrs:{title:t.title,members:t.members,imageIndex:t.imageIndex},on:{"close-icon-click":function(e){t.showCarousels=!1}}})],1),r("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showBulkAddTags,callback:function(e){t.showBulkAddTags=e},expression:"showBulkAddTags"}},[r("bulk-add-tag-card",{attrs:{members:t.selectedMembers},on:{"dialog-cancel":function(e){t.showBulkAddTags=!1}}})],1)],1)}),[],!1,null,"7f4ce554",null);e.a=lt.exports;v()(lt,{VAlert:it.a,VCard:f.a,VCol:st.a,VContainer:nt.a,VDialog:T.a,VRow:ot.a})},408:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("c176411c",content,!0,{sourceMap:!1})},409:function(t,e,r){(e=r(23)(!1)).push([t.i,'.theme--light.v-tabs>.v-tabs-bar{background-color:#fff}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-tabs .v-tab:hover:before{opacity:.04}.theme--light.v-tabs .v-tab--active:before,.theme--light.v-tabs .v-tab--active:hover:before,.theme--light.v-tabs .v-tab:focus:before{opacity:.12}.theme--light.v-tabs .v-tab--active:focus:before{opacity:.16}.theme--dark.v-tabs>.v-tabs-bar{background-color:#1e1e1e}.theme--dark.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--dark.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:hsla(0,0%,100%,.6)}.theme--dark.v-tabs .v-tab:hover:before{opacity:.08}.theme--dark.v-tabs .v-tab--active:before,.theme--dark.v-tabs .v-tab--active:hover:before,.theme--dark.v-tabs .v-tab:focus:before{opacity:.24}.theme--dark.v-tabs .v-tab--active:focus:before{opacity:.32}.theme--light.v-tabs-items{background-color:#fff}.theme--dark.v-tabs-items{background-color:#1e1e1e}.v-tabs-bar.accent .v-tab,.v-tabs-bar.accent .v-tabs-slider,.v-tabs-bar.error .v-tab,.v-tabs-bar.error .v-tabs-slider,.v-tabs-bar.info .v-tab,.v-tabs-bar.info .v-tabs-slider,.v-tabs-bar.primary .v-tab,.v-tabs-bar.primary .v-tabs-slider,.v-tabs-bar.secondary .v-tab,.v-tabs-bar.secondary .v-tabs-slider,.v-tabs-bar.success .v-tab,.v-tabs-bar.success .v-tabs-slider,.v-tabs-bar.warning .v-tab,.v-tabs-bar.warning .v-tabs-slider{color:#fff}.v-tabs{flex:1 1 auto;width:100%}.v-tabs .v-menu__activator{height:100%}.v-tabs:not(.v-tabs--vertical) .v-tab{white-space:normal}.v-tabs:not(.v-tabs--vertical).v-tabs--right>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__next,.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev{display:inline;display:initial;visibility:hidden}.v-tabs-bar{border-radius:inherit;height:48px}.v-tabs-bar.v-item-group>*{cursor:auto}.v-tab{align-items:center;cursor:pointer;display:flex;flex:0 1 auto;font-size:.875rem;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;min-width:90px;max-width:360px;outline:none;padding:0 16px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;transition:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-tab.v-tab{color:inherit}.v-tab:before{bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-tab:before,.v-tabs-slider{background-color:currentColor}.v-tabs-slider{height:100%;width:100%}.v-tabs-slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-ltr .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-left:42px}.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tab:first-child,.v-application--is-rtl .v-tabs--align-with-title>.v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing)>.v-slide-group__wrapper>.v-tabs-bar__content>.v-tabs-slider-wrapper+.v-tab{margin-right:42px}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-right:auto}.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-ltr .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:last-child,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:last-child{margin-left:auto}.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--centered>.v-tabs-bar .v-tabs-slider-wrapper+*,.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-bar__content>:first-child:not(.v-tabs-slider-wrapper),.v-application--is-rtl .v-tabs--fixed-tabs>.v-tabs-bar .v-tabs-slider-wrapper+*{margin-right:auto}.v-tabs--fixed-tabs>.v-tabs-bar .v-tab{flex:1 1 auto;width:100%}.v-tabs--grow>.v-tabs-bar .v-tab{flex:1 0 auto;max-width:none}.v-tabs--icons-and-text>.v-tabs-bar{height:72px}.v-tabs--icons-and-text>.v-tabs-bar .v-tab{flex-direction:column-reverse}.v-tabs--icons-and-text>.v-tabs-bar .v-tab>:first-child{margin-bottom:6px}.v-tabs--overflow>.v-tabs-bar .v-tab{flex:1 0 auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-left:auto}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:first-child,.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tabs-slider-wrapper+.v-tab{margin-right:auto}.v-application--is-ltr .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-right:0}.v-application--is-rtl .v-tabs--right>.v-tabs-bar .v-tab:last-child{margin-left:0}.v-tabs--vertical{display:flex}.v-tabs--vertical>.v-tabs-bar{flex:1 0 auto;height:auto}.v-tabs--vertical>.v-tabs-bar .v-slide-group__next,.v-tabs--vertical>.v-tabs-bar .v-slide-group__prev{display:none}.v-tabs--vertical>.v-tabs-bar .v-tabs-bar__content{flex-direction:column}.v-tabs--vertical>.v-tabs-bar .v-tab{height:48px}.v-tabs--vertical>.v-tabs-bar .v-tabs-slider{height:100%}.v-tabs--vertical>.v-window{flex:0 1 100%}.v-tabs--vertical.v-tabs--icons-and-text>.v-tabs-bar .v-tab{height:72px}.v-tab--active{color:inherit}.v-tab--active.v-tab:not(:focus):before{opacity:0}.v-tab--active .v-btn.v-btn--flat,.v-tab--active .v-icon{color:inherit}.v-tab--disabled{pointer-events:none;opacity:.5}',""]),t.exports=e},410:function(t,e,r){"use strict";r(20),r(8),r(6),r(4),r(12);var n=r(2),o=r(401),l=r(365);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return d(d({},o.a.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,i){return t.id||l.a.options.methods.getValue.call(this,t,i)}}})},496:function(t,e,r){"use strict";r(20),r(8),r(6),r(4),r(12),r(38);var n=r(2),o=r(139),l=r(104),c=r(40),d=r(3),v=r(32);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(v.a)(l.a,Object(o.a)("tabsBar"),c.a);e.a=f.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return m(m({"v-tab":!0},l.a.options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";this.$router&&this.to===Object(this.to)&&(t=this.$router.resolve(this.to,this.$route,this.append).href);return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,r=this.generateRouteLink(),n=r.tag,data=r.data;return data.attrs=m(m({},data.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),data.on=m(m({},data.on),{},{keydown:function(t){t.keyCode===d.r.enter&&e.click(t),e.$emit("keydown",t)}}),t(n,data,this.$slots.default)}})},516:function(t,e,r){"use strict";r(20),r(8),r(6),r(4),r(12),r(25);var n=r(2),o=(r(21),r(408),r(44),r(37),r(43),r(14),r(15),r(398)),l=r(40),c=r(140),d=r(32);function v(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(d.a)(o.a,c.a,l.a).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return f(f({},o.a.options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=o.a.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var r,n=this.items,o=t.path,l=e.path,c=!1,d=!1,h=v(n);try{for(h.s();!(r=h.n()).done;){var m=r.value;if(m.to===o?c=!0:m.to===l&&(d=!0),c&&d)break}}catch(t){h.e(t)}finally{h.f()}!c&&d&&(this.internalValue=void 0)}}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),y=r(410),k=r(48),x=Object(d.a)(k.a).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),_=r(350),C=r(351),O=r(3);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var V=Object(d.a)(k.a,_.a,l.a);e.a=V.extend().extend({name:"v-tabs",directives:{Resize:C.a},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(O.f)(this.slider.height),left:this.isReversed?void 0:Object(O.f)(this.slider.left),right:this.isReversed?Object(O.f)(this.slider.right):void 0,top:this.vertical?Object(O.f)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(O.f)(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var r=e.$el;t.slider={height:t.vertical?r.scrollHeight:Number(t.sliderSize),left:t.vertical?0:r.offsetLeft,right:t.vertical?0:r.offsetLeft+r.offsetWidth,top:r.offsetTop,width:t.vertical?Number(t.sliderSize):r.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var r=this,data={style:{height:Object(O.f)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){r.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,data),this.setBackgroundColor(this.backgroundColor,data),this.$createElement(w,data,[this.genSlider(e),t])},genItems:function(t,e){var r=this;return t||(e.length?this.$createElement(y.a,{props:{value:this.internalValue},on:{change:function(t){r.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(x,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,r=[],n=[],slot=this.$slots.default||[],o=slot.length,i=0;i<o;i++){var l=slot[i];if(l.componentOptions)switch(l.componentOptions.Ctor.options.name){case"v-tabs-slider":e=l;break;case"v-tabs-items":t=l;break;case"v-tab-item":r.push(l);break;default:n.push(l)}else n.push(l)}return{tab:n,slider:e,items:t,item:r}}},render:function(t){var e=this.parseNodes(),r=e.tab,n=e.slider,o=e.items,l=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(r,n),this.genItems(o,l)])}})},533:function(t,e,r){"use strict";r.r(e);var n={name:"PagePreviewCard",components:{"async-img":r(345).a},props:{pageItem:{type:Object,default:null}},data:function(){return{}}},o=r(5),l=r(31),c=r.n(l),d=r(329),v=r(385),h=r(341),m=r(528),f=r(328),w=r(436),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{class:{"on-hover":n},attrs:{elevation:n?16:2}},[r("v-card-title",[t._v(t._s(t.pageItem.title))]),6===t.pageItem.ns?r("async-img",{attrs:{imageId:t.pageItem.pageid,size:"250",height:"250"}}):t._e(),6!=t.pageItem.ns?r("v-card-text",[t._v(t._s(t.pageItem.comment))]):t._e(),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{icon:"",color:"success"}},[r("v-icon",[t._v("mdi-tag-plus")])],1),r("v-btn",{attrs:{icon:"",color:"indigo"}},[r("v-icon",[t._v("mdi-download")])],1)],1)],1)]}}])})],1)}),[],!1,null,null,null),y=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VHover:m.a,VIcon:f.a,VSpacer:w.a});var k={name:"RecentChanges",components:{"page-preview-card":y},props:{},data:function(){return{items:[]}},mounted:function(){this.loadChanges()},methods:{loadChanges:function(){var t=this,option={method:"get",url:"/w/search/recentchanges",params:{user:this.$auth.user.email,rcns:"*",rctype:"edit|new|log"}};t.$axios.request(option).then((function(e){e.data.error||(t.items=e.data.items)}))}}},x=r(517),_=r(370),C=r(340),O=Object(o.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.items.length>0?e("div",[e("div",{staticClass:"text-h5"},[this._v("Recent updates")]),e("v-row",this._l(this.items,(function(t,r){return e("v-col",{key:t.id,attrs:{cols:"4"}},[e("page-preview-card",{attrs:{pageItem:t}})],1)})),1)],1):e("div",[e("v-alert",[this._v("No recent chagnes!")])],1)])}),[],!1,null,null,null),S=O.exports;c()(O,{VAlert:x.a,VCol:_.a,VRow:C.a});var V={components:{"album-photos":r(362).a},data:function(){return{items:[],wContinue:null,loading:!1}},mounted:function(){this.loadNewFiles()},methods:{loadNewFiles:function(){var t=this,e={methos:"get",url:"/w/search/newfiles",params:{user:this.$auth.user.email}};t.wContinue&&(e.params.continue=t.wContinue),t.$axios.request(e).then((function(e){t.wContinue?t.items=t.items.concat(e.data.items):t.items=e.data.items,t.wContinue=e.data.hasOwnProperty("continue")?e.data.continue:null,t.loading=!1}))},loadMoreFiles:function(){this.loading=!0,this.loadNewFiles()}}},j=Object(o.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{attrs:{flat:""}},[e("album-photos",{attrs:{members:this.items}}),this.wContinue?e("v-btn",{attrs:{loading:this.loading,disabled:this.loading,block:"",color:"primary"},on:{click:this.loadMoreFiles}},[this._v("Load More")]):this._e()],1)}),[],!1,null,null,null),$=j.exports;c()(j,{VBtn:d.a,VCard:v.a});var A={name:"SearchHome",components:{"recent-changes":S,"new-files-card":$},data:function(){return{tabs:null}},props:{}},I=r(363),T=r(496),P=r(437),D=P.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=P.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),B=r(516),z=r(410),E=r(439),N=Object(o.a)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{ref:"container"},[r("v-tabs",{staticClass:"pb-4",attrs:{"background-color":"transparent",color:"deep-purple accent-4",grow:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[r("v-tab",[t._v("Search")]),r("v-tab",[t._v("New Files")]),r("v-tab",[t._v("Recent Changes")])],1),r("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[r("v-tab-item",[r("div",[r("div",{staticClass:"text-h3 text-center pb-4"},[t._v("Search OurTimeTogether")]),r("v-text-field",{attrs:{outlined:"",rounded:"",clearable:"",color:"purple",id:"input-query",autocomplete:"off",label:"Type your query here","prepend-inner-icon":"mdi-magnify","append-outer-icon":"mdi-cog-outline"}})],1)]),r("v-tab-item",[r("new-files-card")],1),r("v-tab-item",[r("recent-changes")],1)],1)],1)}),[],!1,null,null,null),R=N.exports;c()(N,{VContainer:I.a,VTab:T.a,VTabItem:D,VTabs:B.a,VTabsItems:z.a,VTextField:E.a});var M={name:"SearchHome",layout:"store",auth:!0,components:{"search-home":R}},H=Object(o.a)(M,(function(){var t=this.$createElement;return(this._self._c||t)("search-home")}),[],!1,null,null,null);e.default=H.exports}}]);