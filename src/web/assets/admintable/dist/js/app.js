(function(e){function t(t){for(var n,r,l=t[0],o=t[1],c=t[2],u=0,h=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},5202:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("8bbf"),s=a.n(n),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-admin-table",class:{"vue-admin-table-padded":e.padded}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showToolbar,expression:"showToolbar"}],staticClass:"toolbar"},[a("div",{staticClass:"flex"},[e._l(e.actions,(function(t,n){return a("div",{key:n},[a("admin-table-action-button",{attrs:{label:t.label,icon:t.icon,action:t.action,actions:t.actions,ids:e.checks,enabled:!!e.checks.length},on:{reload:e.reload}})],1)})),e.search&&!e.tableData.length?a("div",{staticClass:"flex-grow texticon search icon clearable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"text fullwidth",attrs:{type:"text",autocomplete:"off",placeholder:e.searchPlaceholder},domProps:{value:e.searchTerm},on:{input:[function(t){t.target.composing||(e.searchTerm=t.target.value)},e.handleSearch]}}),a("div",{staticClass:"clear hidden",attrs:{title:e.searchClearTitle}})]):e._e()],2)]),a("div",{class:{"content-pane":e.fullPage}},[this.isEmpty?a("div",[a("p",[e._v(e._s(e.emptyMessage))])]):e._e(),a("div",{staticClass:"tableview",class:{loading:e.isLoading},style:{display:this.isEmpty?"hidden":"block"}},[a("div",{staticClass:"tablepane vue-admin-tablepane"},[a("vuetable",{ref:"vuetable",attrs:{"append-params":e.appendParams,"api-mode":!!e.apiUrl,"api-url":e.apiUrl,css:e.tableCss,data:e.tableData,"detail-row-component":e.detailRow,fields:e.fields,"per-page":e.perPage,"pagination-path":"pagination"},on:{"vuetable:loaded":e.init,"vuetable:loading":e.loading,"vuetable:pagination-data":e.onPaginationData},scopedSlots:e._u([{key:"checkbox",fn:function(t){return[a("admin-table-checkbox",{attrs:{id:t.rowData.id,checks:e.checks},on:{addCheck:e.addCheck,removeCheck:e.removeCheck}})]}},{key:"title",fn:function(t){return[void 0!==t.rowData.status?a("span",{staticClass:"status",class:{enabled:t.rowData.status}}):e._e(),t.rowData.url?a("a",{staticClass:"cell-bold",attrs:{href:t.rowData.url}},[e._v(e._s(t.rowData.title))]):e._e(),t.rowData.url?e._e():a("span",{staticClass:"cell-bold"},[e._v(e._s(t.rowData.title))])]}},{key:"handle",fn:function(t){return[a("code",[e._v(e._s(t.rowData.handle))])]}},{key:"menu",fn:function(t){return[t.rowData.menu.showItems?[a("a",{attrs:{href:t.rowData.menu.url}},[e._v(e._s(t.rowData.menu.label)+" ("+e._s(t.rowData.menu.items.length)+")")]),a("a",{staticClass:"menubtn",attrs:{title:t.rowData.menu.label}}),a("div",{staticClass:"menu"},[a("ul",e._l(t.rowData.menu.items,(function(t,n){return a("li",{key:n},[a("a",{attrs:{href:t.url}},[e._v(e._s(t.label))])])})),0)])]:[a("a",{attrs:{href:t.rowData.menu.url}},[e._v(e._s(t.rowData.menu.label))])]]}},{key:"detail",fn:function(t){return[t.rowData.detail.content?a("div",{staticStyle:{cursor:"pointer"},domProps:{innerHTML:e._s(t.rowData.detail.handle)},on:{click:function(a){return e.handleDetailRow(t.rowData.id)}}}):e._e()]}},{key:"reorder",fn:function(t){return[a("i",{staticClass:"move icon vue-table-move-handle",class:{disabled:!e.canReorder},attrs:{"data-id":t.rowData.id}})]}},{key:"delete",fn:function(t){return[void 0==t.rowData._showDelete||1==t.rowData._showDelete?a("admin-table-delete-button",{attrs:{id:t.rowData.id,name:t.rowData.title,"success-message":e.deleteSuccessMessage,"confirmation-message":e.deleteConfirmationMessage,"action-url":e.deleteAction,disabled:!e.canDelete},on:{reload:function(a){return e.remove(t.rowIndex)}}}):e._e()]}}])})],1),a("admin-table-pagination",{ref:"pagination",attrs:{itemLabels:e.itemLabels},on:{"vuetable-pagination:change-page":e.onChangePage}})],1)])])},r=[],l=(a("386d"),a("6b54"),a("ac6a"),a("75fc")),o=(a("c5f6"),a("c3d0")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tablePagination?a("div",{staticClass:"vue-admin-table-pagination flex pagination"},[a("div",{staticClass:"page-link",class:[e.isOnFirstPage?"disabled":""],attrs:{"data-icon":"leftangle",title:"Previous Page"},on:{click:function(t){return e.loadPage("prev")}}}),a("div",{staticClass:"page-link",class:[e.isOnLastPage?"disabled":""],attrs:{"data-icon":"rightangle",title:"Next Page"},on:{click:function(t){return e.loadPage("next")}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tablePagination,expression:"tablePagination"}],staticClass:"page-info"},[e._v(e._s(e.tablePagination.from)+"-"+e._s(e.tablePagination.to)+" of "+e._s(e.tablePagination.total)+" "+e._s(e.countWording))])]):e._e()},d=[],u=a("eb37"),h={name:"AdminTablePagination",mixins:[u["a"]],props:{itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}}},computed:{countWording:function(){return 1==this.tablePagination.total?this.itemLabels.singular:this.itemLabels.plural}}},f=h,p=(a("5dba"),a("2877")),b=Object(p["a"])(f,c,d,!1,null,null,null),m=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"delete icon",class:{disabled:e.disabled},attrs:{title:e._f("t")("Delete","app"),role:"button",href:"#"},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},v=[],C=(a("7f7f"),a("cebe")),k=a.n(C),y={name:"AdminTableDeleteButton",props:{id:[Number,String],name:String,confirmationMessage:String,actionUrl:String,successMessage:String,disabled:Boolean},data:function(){return{}},computed:{success:function(){return void 0!==this.successMessage?Craft.t("site",this.successMessage,{name:this.name}):Craft.t("app","“{name}” deleted.",{name:this.name})},confirm:function(){return void 0!==this.confirmationMessage?Craft.t("site",this.confirmationMessage,{name:this.name}):Craft.t("app","Are you sure you want to delete “{name}”?",{name:this.name})}},methods:{confirmDelete:function(){return confirm(this.confirm)},handleClick:function(){var e=this;!this.disabled&&this.confirmDelete()&&k.a.post(Craft.getActionUrl(this.actionUrl),{id:this.id},{headers:{"X-CSRF-Token":Craft.csrfTokenValue}}).then((function(t){t.data&&void 0!==t.data.success&&t.data.success&&(Craft.cp.displayNotice(e.success),e.$emit("reload"))}))}}},_=y,w=Object(p["a"])(_,g,v,!1,null,"58f7d032",null),D=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"checkbox",class:{checked:e.isChecked},attrs:{title:e._f("t")("Select","app")},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},P=[],A={name:"AdminTableCheckbox",props:{id:Number,selectAll:Boolean,checks:Array},data:function(){return{}},computed:{isChecked:function(){return-1!==this.checks.indexOf(this.id)}},methods:{handleClick:function(){this.isChecked?this.$emit("removeCheck",this.id):this.$emit("addCheck",this.id)}}},S=A,O=Object(p["a"])(S,x,P,!1,null,"c6882ea6",null),T=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{ref:"form",attrs:{method:"post"}},[a("input",{attrs:{type:"hidden",name:e.tokenName},domProps:{value:e.tokenValue}}),a("input",{attrs:{type:"hidden",name:"action"},domProps:{value:e.action}}),a("input",{attrs:{type:"hidden",name:e.param},domProps:{value:e.value}}),e._l(e.ids,(function(e,t){return a("input",{key:t,attrs:{type:"hidden",name:"ids[]"},domProps:{value:e}})})),a("div",{ref:"button",staticClass:"btn menubtn",attrs:{"data-icon":e.icon}},[e._v(e._s(e.label))]),e.actions.length?a("div",{staticClass:"menu"},[a("ul",{staticClass:"padded"},e._m(0),0)]):e._e()],2)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return e._l(e.actions,(function(t,n){return a("li",{key:n},[a("a",{class:{error:void 0!==t.error&&t.error},attrs:{href:"#","data-param":t.param,"data-value":t.value,"data-ajax":t.ajax},on:{click:function(a){return a.preventDefault(),e.handleClick(t.param,t.value,t.action,t.ajax)}}},[t.status?a("span",{class:"status "+t.status}):e._e(),e._v(e._s(t.label)+"\n        ")])])}))}],L={name:"AdminTableActionButton",props:{action:String,actions:Array,enabled:Boolean,ids:Array,label:String,icon:String},data:function(){return{button:null,tokenName:Craft.csrfTokenName,tokenValue:Craft.csrfTokenValue,param:"",value:""}},methods:{handleClick:function(e,t,a,n){var s=this;if(n){var i={ids:this.ids};i[e]=t,Craft.postActionRequest(a,i,(function(e){e.success&&Craft.cp.displayNotice(Craft.t("app","Updated.")),s.$emit("reload")}))}else this.action=a,this.param=e,this.value=t,this.$nextTick((function(){s.$refs.form.submit()}))}},created:function(){},watch:{enabled:function(){this.enabled?(this.button.removeClass("disabled"),this.button.data("menubtn").enable()):(this.button.addClass("disabled"),this.button.data("menubtn").disable())}},mounted:function(){var e=this;this.$nextTick((function(){Craft.initUiElements(e.$refs.form),e.button=$(e.$refs.button),e.button.data("menubtn").disable(),e.button.addClass("disabled")}))}},E=L,N=Object(p["a"])(E,j,M,!1,null,"4b35c6ff",null),B=N.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.rowData.detail.content?a("div",{domProps:{innerHTML:e._s(e.rowData.detail.content)}}):e._e()},R=[],U={name:"AdminTableDeleteButton",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number},options:{type:Object}},data:function(){return{}}},F=U,V=Object(p["a"])(F,I,R,!1,null,"7c9832a1",null),q=V.exports,J=a("aa47"),H=a("2ef0"),W={components:{Vuetable:o["a"],AdminTablePagination:m,AdminTableCheckbox:T,AdminTableDeleteButton:D,AdminTableActionButton:B},props:{actions:{type:Array,default:function(){return[]}},checkboxes:{type:Boolean,default:!1},columns:{type:Array,default:function(){return[]}},deleteAction:{type:String,default:null},deleteCallback:{type:Function},deleteConfirmationMessage:{type:String},deleteSuccessMessage:{type:String},emptyMessage:{type:String,default:Craft.t("app","No data available.")},fullPage:{type:Boolean,default:!1},itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}},minItems:{type:Number},padded:{type:Boolean,default:!1},perPage:{type:Number,default:40},reorderAction:{type:String},reorderSuccessMessage:{type:String,default:Craft.t("app","Items reordered.")},reorderFailMessage:{type:String,default:Craft.t("app","Couldn’t reorder items.")},search:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:Craft.t("app","Search")},tableData:{type:Array,default:function(){return[]}},tableDataEndpoint:{type:String}},data:function(){return{checks:[],currentPage:1,detailRow:q,isEmpty:!1,isLoading:!0,searchClearTitle:Craft.t("app","Clear"),searchTerm:null,selectAll:null,sortable:null,tableBodySelector:".vuetable-body",tableClass:"data fullwidth"}},methods:{init:function(){var e=this,t=this.$el.querySelector(this.tableBodySelector);this.canReorder&&(this.sortable=J["a"].create(t,{handle:".move.icon",onSort:this.handleReorder})),this.isEmpty=!this.$refs.vuetable.tableData.length,this.$nextTick((function(){e.$refs.vuetable&&(e.selectAll=e.$refs.vuetable.$el.querySelector(".selectallcontainer"),e.selectAll&&e.selectAll.addEventListener("click",e.handleSelectAll))})),this.isLoading=!1},loading:function(){this.isLoading=!0},handleReorder:function(e){var t=this,a=Object(l["a"])(e.target.querySelectorAll(".vue-table-move-handle"));if(a.length){var n=Object(H["map"])(a,(function(e){return e.dataset.id})),s={ids:JSON.stringify(n),startPosition:1+(this.currentPage>1?(this.currentPage-1)*this.perPage:0)};Craft.postActionRequest(this.reorderAction,s,(function(e){e&&e.success&&Craft.cp.displayNotice(t.reorderSuccessMessage)}))}else Craft.cp.displayError(this.reorderFailMessage)},addCheck:function(e){-1===this.checks.indexOf(e)&&this.checks.push(e)},removeCheck:function(e){var t=this.checks.indexOf(e);t>=0&&this.checks.splice(t,1)},handleSearch:Object(H["debounce"])((function(){this.reload()}),350),handleSelectAll:function(){var e=this,t=this.$refs.vuetable.tableData;this.checks.length!=t.length?t.forEach((function(t){e.addCheck(t.id)})):this.checks=[]},handleDetailRow:function(e){this.$refs.vuetable.toggleDetailRow(e)},deselectAll:function(){this.checks=[]},reload:function(){console.log("reloading"),this.isLoading=!0,this.deselectAll(),this.$refs.vuetable.reload()},remove:function(e){this.isLoading=!0,this.apiUrl?(this.deselectAll(),this.$refs.vuetable.reload()):(Vue.delete(this.$refs.vuetable.tableData,e),this.$refs.vuetable.refresh()),this.deleteCallback&&"[object Function]"==={}.toString.call(this.deleteCallback)&&this.deleteCallback(),this.isLoading=!1},onPaginationData:function(e){this.currentPage=e.current_page,this.$refs.pagination.setPaginationData(e),this.deselectAll()},onChangePage:function(e){this.$refs.vuetable.changePage(e),this.deselectAll()}},computed:{apiUrl:function(){return this.tableDataEndpoint?Craft.getActionUrl(this.tableDataEndpoint):""},appendParams:function(){return this.searchTerm?{search:this.searchTerm}:{}},canDelete:function(){return!(this.minItems&&this.$refs.vuetable.tableData.length<=this.minItems)},canReorder:function(){return this.$refs.vuetable.tableData.length>1&&this.reorderAction&&this.$el.querySelector(this.tableBodySelector)&&!this.$refs.vuetable.tablePagination},fields:function(){var e=this,t=[];this.showCheckboxes&&t.push({name:"__slot:checkbox",titleClass:"thin",title:'<div class="checkbox-cell selectallcontainer" role="checkbox" tabindex="0" aria-checked="false"><div class="checkbox"></div></div>',dataClass:"checkbox-cell"});var a=Object(H["map"])(this.columns,(function(t){return e.reorderAction&&t.hasOwnProperty("sortField")?(delete t.sortField,t):t}));return t=[].concat(Object(l["a"])(t),Object(l["a"])(a)),this.reorderAction&&t.push({name:"__slot:reorder",title:"",titleClass:"thin"}),this.deleteAction&&t.push({name:"__slot:delete",titleClass:"thin"}),t},showCheckboxes:function(){return this.actions.length&&this.checkboxes},showToolbar:function(){return this.actions.length||this.search&&!this.tableData.length},tableCss:function(){return{ascendingClass:"ordered asc",descendingClass:"ordered desc",sortableIcon:"orderable",handleIcon:"move icon",loadingClass:"loading",tableClass:this.tableClass}}},watch:{checks:function(){if(this.selectAll){var e=this.selectAll.querySelector(".checkbox");this.checks.length&&this.checks.length==this.$refs.vuetable.tableData.length?(e.classList.add("checked"),e.classList.remove("indeterminate")):this.checks.length&&this.checks.length!=this.$refs.vuetable.tableData.length?(e.classList.remove("checked"),e.classList.add("indeterminate")):(e.classList.remove("checked"),e.classList.remove("indeterminate"))}}}},G=W,X=(a("5c0b"),Object(p["a"])(G,i,r,!1,null,null,null)),z=X.exports;function K(e,t,a){return Craft.t(t,e,a)}s.a.filter("t",K),Craft.VueAdminTable=Garnish.Base.extend({init:function(e){this.setSettings(e,Craft.VueAdminTable.defaults);var t=this.settings;return new s.a({components:{App:z},data:function(){return{}},render:function(e){return e(z,{props:t})}}).$mount(this.settings.container)}},{defaults:{actions:[],checkboxes:!1,columns:[],container:null,deleteAction:null,reorderAction:null,reorderSuccessMessage:Craft.t("app","Items reordered."),reorderFailMessage:Craft.t("app","Couldn’t reorder items."),search:!1,searchPlaceholder:Craft.t("app","Search"),tableData:[],tableDataEndpoint:null}})},"5c0b":function(e,t,a){"use strict";var n=a("5202"),s=a.n(n);s.a},"5dba":function(e,t,a){"use strict";var n=a("be49"),s=a.n(n);s.a},"8bbf":function(e,t){e.exports=Vue},be49:function(e,t,a){},cebe:function(e,t){e.exports=axios}});
//# sourceMappingURL=app.js.map