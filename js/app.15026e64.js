(function(t){function e(e){for(var i,r,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="4678"},b383:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"py-3",attrs:{direction:"vertical"}},[s("el-header",[s("el-dialog",{attrs:{title:"YouTube頻道整理器",visible:t.welcomePage,fullscreen:""},on:{"update:visible":function(e){t.welcomePage=e}}},[s("h1",{staticClass:"text-center"},[t._v("歡迎使用YouTube頻道整理器")]),s("h3",{staticClass:"text-center"},[t._v("這個小工具可以幫助分類您訂閱的頻道")]),s("h3",{staticClass:"text-center"},[t._v("*此工具不會回傳任何您的個人資料至網路，請安心使用")]),s("div",{staticClass:"text-center"},[s("el-button",{on:{click:t.oauthSignIn}},[t._v("登入YouTube授權")])],1)]),s("el-button",{on:{click:function(e){t.allSubscriptions=!0}}},[t._v("顯示訂閱列表")]),s("el-dialog",{attrs:{title:"訂閱列表",visible:t.allSubscriptions,width:"80%",top:"5vh"},on:{"update:visible":function(e){t.allSubscriptions=e}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("el-button",{staticClass:"m-2",attrs:{type:"primary",plain:""},on:{click:function(e){t.subscriptItems=[],t.getSubscript("")}}},[t._v("取得/更新列表")]),t._v("數量："+t._s(t.subscriptItems.length))],1)]),s("el-card",[s("div",{staticClass:"row"},t._l(t.subscriptItems,(function(e,i){return s("div",{key:i,staticClass:"col-auto py-3"},[s("el-popover",{attrs:{placement:"top-start",title:e.snippet.title,width:"200",trigger:"hover"}},[s("el-link",{attrs:{href:"https://www.youtube.com/channel/"+e.snippet.resourceId.channelId,type:"primary",target:"_blank"}},[t._v("開啟頻道連結")]),s("div",{staticStyle:{"max-height":"150px",overflow:"auto"}},[t._v(t._s(e.snippet.description))]),s("el-avatar",{attrs:{slot:"reference",src:e.snippet.thumbnails.default.url},slot:"reference"})],1)],1)})),0)])],1)],1),s("el-main",[s("div",{staticClass:"row"},[t._l(t.channelGroup,(function(e,i){return s("div",{staticClass:"col-3"},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"d-flex justify-content-between"},[s("div",[t._v(t._s(e.title))]),s("div",[s("el-button",{staticClass:"mr-1",attrs:{type:"info",size:"mini",round:""},on:{click:function(e){return t.editChannelGroup(i)}}},[t._v("編輯")]),s("el-popconfirm",{attrs:{title:"確定刪除群組嗎？"},on:{onConfirm:function(e){return t.deleteChannelGroup(i)}}},[s("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",plain:"",round:""},slot:"reference"},[t._v("刪除")])],1)],1)])]),s("div",{staticClass:"row"},t._l(t.channelGroup[i].groupItems,(function(e,i){return s("div",{key:i,staticClass:"col-auto py-3"},[s("el-popover",{attrs:{placement:"top-start",title:e.title,width:"200",trigger:"hover"}},[s("el-link",{attrs:{href:"https://www.youtube.com/channel/"+e.resourceId.channelId,type:"primary",target:"_blank"}},[t._v("開啟頻道連結")]),s("div",{staticStyle:{"max-height":"150px",overflow:"auto"}},[t._v(t._s(e.description))]),s("el-avatar",{attrs:{slot:"reference",src:e.thumbnails.default.url},slot:"reference"})],1)],1)})),0),s("div",{staticClass:"row"},[s("el-button",{staticClass:"w-100",attrs:{icon:"el-icon-video-play",type:"primary",plain:""},on:{click:function(e){return t.getVideo(i)}}},[t._v("觀看影片")])],1)])],1)})),s("div",{staticClass:"col-3",on:{click:function(e){t.editSubscriptionsGroupIndex=-1,t.editSubscriptionsGroup=!0}}},[s("el-card",{staticClass:"new-group-button"},[s("el-tooltip",{attrs:{value:!t.welcomePage&&0==t.channelGroup.length,effect:"light",content:"建立群組吧！",placement:"right"}},[s("i",{staticClass:"el-icon-circle-plus"})])],1)],1)],2),s("el-dialog",{attrs:{title:-1==t.editSubscriptionsGroupIndex?"新增群組":"編輯群組",visible:t.editSubscriptionsGroup,width:"80%",top:"5vh","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},on:{"update:visible":function(e){t.editSubscriptionsGroup=e}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("el-button",{staticClass:"m-2",attrs:{type:"primary",plain:""},on:{click:function(e){t.subscriptItems=[],t.getSubscript("")}}},[t._v("取得/更新列表")]),t._v("數量："+t._s(t.subscriptItems.length))],1)]),s("el-card",{staticStyle:{"max-height":"60vh",overflow:"auto"}},[s("div",{staticClass:"row"},t._l(t.subscriptItems,(function(e,i){return s("div",{key:i,staticClass:"col-auto py-3",on:{click:function(s){return t.select(e.snippet)}}},[s("el-popover",{attrs:{placement:"top-start",title:e.snippet.title,width:"200",trigger:"hover"}},[s("el-link",{attrs:{href:"https://www.youtube.com/channel/"+e.snippet.resourceId.channelId,type:"primary",target:"_blank"}},[t._v("開啟頻道連結")]),s("div",{staticStyle:{"max-height":"150px",overflow:"auto"}},[t._v(t._s(e.snippet.description))]),s("el-avatar",{attrs:{slot:"reference",src:e.snippet.thumbnails.default.url},slot:"reference"})],1)],1)})),0)])],1),s("div",{staticClass:"col-4"},[s("el-input",{staticClass:"mb-3",attrs:{placeholder:"请输入内容",required:""},model:{value:t.editGroupName,callback:function(e){t.editGroupName=e},expression:"editGroupName"}},[s("template",{slot:"prepend"},[t._v("群組名稱：")])],2),s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("選中頻道("+t._s(t.editDlgSelectList.length)+"/10)")]),s("div",{staticClass:"row"},t._l(t.editDlgSelectList,(function(e,i){return s("div",{key:i,staticClass:"col-auto py-3",on:{click:function(e){return t.remove(i)}}},[s("el-popover",{attrs:{placement:"top-start",title:e.title,width:"200",trigger:"hover"}},[s("el-link",{attrs:{href:"https://www.youtube.com/channel/"+e.resourceId.channelId,type:"primary",target:"_blank"}},[t._v("開啟頻道連結")]),s("div",{staticStyle:{"max-height":"150px",overflow:"auto"}},[t._v(t._s(e.description))]),s("el-avatar",{attrs:{slot:"reference",src:e.thumbnails.default.url},slot:"reference"})],1)],1)})),0)]),s("el-button",{staticClass:"mt-3",attrs:{type:"success",plain:""},on:{click:function(e){return t.saveGroup()}}},[t._v("儲存")]),s("el-button",{staticClass:"mt-3",attrs:{type:"danger",plain:""},on:{click:function(e){t.editGroupName="",t.editSubscriptionsGroup=!1,t.editDlgSelectList=[]}}},[t._v("不儲存")])],1)])]),s("el-dialog",{attrs:{title:"觀看影片",visible:t.videoListDlg,width:"80%",top:"5vh"},on:{"update:visible":function(e){t.videoListDlg=e}}},[s("el-card",[s("div",{staticClass:"row"},t._l(t.videoList,(function(e,i){return s("div",{key:i,staticClass:"col-2"},[s("el-card",[s("el-tag",{staticClass:"mb-1",attrs:{type:"danger",size:"mini"}},[t._v(t._s(t.moment(e.publishedAt).fromNow()))]),s("a",{attrs:{href:"https://www.youtube.com/watch?v="+e.resourceId.videoId,target:"_blank"}},[s("img",{staticClass:"w-100",attrs:{src:e.thumbnails.standard.url}}),s("div",[t._v(t._s(e.title))]),s("div",[t._v(t._s(t.moment(e.publishedAt).format("YYYY-MM-DD hh:mm")))])])],1)],1)})),0)])],1)],1)],1)},a=[],r=s("bc3a"),c=s.n(r),o=s("c1df"),l=s.n(o),u=i["default"].extend({name:"app",components:{},data:function(){var t=[],e=[],s=[],i=[],n=[];return{moment:l.a,welcomePage:!1,videoListDlg:!1,allSubscriptions:!1,editSubscriptionsGroup:!1,editSubscriptionsGroupIndex:-1,editDlgSelectList:n,editGroupName:"",channelGroup:s,subscriptItems:i,groupPlaylist:e,videoList:t,apiUrl:"https://www.googleapis.com/youtube/v3/",appKey:"AIzaSyAeVBh05wd_KIecntjV8vdNZmt_FEAaQlo",access_token:"",clientID:"980157943798-muko6d7qpq95ksdean0671ehh77687tu.apps.googleusercontent.com"}},watch:{subscriptItems:{handler:function(t){localStorage.setItem("subscriptItems",JSON.stringify(t))},deep:!0},channelGroup:{handler:function(t){localStorage.setItem("channelGroup",JSON.stringify(t))},deep:!0}},created:function(){l.a.locale("zh-tw");var t=new URL(location.href),e=t.hash.split("&").reduce((function(t,e){var s=e.split("=");return t[s[0]]=s[1],t}),{});e.access_token&&(this.access_token=e.access_token);var s=localStorage.getItem("subscriptItems"),i=localStorage.getItem("channelGroup");this.subscriptItems=s?JSON.parse(s):[],this.channelGroup=i?JSON.parse(i):[],this.welcomePage=""==this.access_token,this.welcomePage||0!=this.subscriptItems.length||this.getSubscript("")},methods:{oauthSignIn:function(){var t="https://accounts.google.com/o/oauth2/v2/auth",e=document.createElement("form");e.setAttribute("method","GET"),e.setAttribute("action",t);var s={client_id:this.clientID,redirect_uri:"https://oranjixu.github.io/youtube_channel_manager/",response_type:"token",scope:"https://www.googleapis.com/auth/youtube.readonly",include_granted_scopes:"true",state:"pass-through value"};for(var i in s){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",i),n.setAttribute("value",s[i]),e.appendChild(n)}document.body.appendChild(e),e.submit()},getSubscript:function(t){var e=this,s={key:this.appKey,part:"id,snippet,contentDetails,subscriberSnippet",mine:"true",maxResults:"50",order:"relevance",pageToken:t,access_token:this.access_token};c.a.get(this.apiUrl+"subscriptions",{params:s}).then((function(t){var s,i=t.data.items;(s=e.subscriptItems).push.apply(s,i),t.data.nextPageToken&&e.getSubscript(t.data.nextPageToken)})).catch((function(t){401==t.response.status&&e.oauthSignIn()}))},getChannels:function(t,e){var s=this,i={key:this.appKey,part:"id,snippet,contentDetails",id:"",maxResults:"50",access_token:this.access_token};i.id=this.channelGroup[t].groupItems.reduce((function(t,e){return t.push(e.resourceId.channelId),t}),[]).toString(),c.a.get(this.apiUrl+"channels",{params:i}).then((function(t){s.groupPlaylist=t.data.items.reduce((function(t,e){return t.push(e.contentDetails.relatedPlaylists.uploads),t}),[]),e&&e()})).catch((function(t){401==t.response.status&&s.oauthSignIn()}))},getPlaylistItems:function(t){var e=this,s={key:this.appKey,part:"id,snippet,contentDetails",playlistId:t,maxResults:"5",access_token:this.access_token};c.a.get(this.apiUrl+"playlistItems",{params:s}).then((function(t){var s,i=t.data.items.reduce((function(t,e){return t.push(e.snippet),t}),[]);(s=e.videoList).push.apply(s,i),e.videoList.sort((function(t,s){return-e.moment(t.publishedAt).diff(e.moment(s.publishedAt))}))})).catch((function(t){401==t.response.status&&e.oauthSignIn()}))},getVideo:function(t){var e=this;this.videoList=[],this.getChannels(t,(function(){e.groupPlaylist.forEach((function(t){e.getPlaylistItems(t)}))})),this.videoListDlg=!0},select:function(t){this.editDlgSelectList.some((function(e){return e.resourceId.channelId==t.resourceId.channelId}))||(this.editDlgSelectList.length<10?this.editDlgSelectList.push(t):this.$message({message:"群組頻道數至多10個",type:"warning"}))},remove:function(t){this.editDlgSelectList.splice(t,1)},editChannelGroup:function(t){this.editSubscriptionsGroupIndex=t,this.editDlgSelectList=JSON.parse(JSON.stringify(this.channelGroup[t].groupItems)),this.editGroupName=JSON.parse(JSON.stringify(this.channelGroup[t].title)),this.editSubscriptionsGroup=!0},deleteChannelGroup:function(t){this.channelGroup.splice(t,1),localStorage.setItem("channelGroup",JSON.stringify(this.channelGroup))},saveGroup:function(){var t={title:this.editGroupName,groupItems:this.editDlgSelectList};-1==this.editSubscriptionsGroupIndex?this.channelGroup.push(t):this.channelGroup[this.editSubscriptionsGroupIndex]=t,localStorage.setItem("channelGroup",JSON.stringify(this.channelGroup)),this.editGroupName="",this.editDlgSelectList=[],this.editSubscriptionsGroup=!1}}}),p=u,d=s("2877"),h=Object(d["a"])(p,n,a,!1,null,null,null),f=h.exports,b=s("5c96"),m=s.n(b),v=(s("21b6"),s("3d5b"),s("0fae"),s("b383"),s("c87b")),j=s.n(v);i["default"].use(m.a,{locale:j.a}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.15026e64.js.map