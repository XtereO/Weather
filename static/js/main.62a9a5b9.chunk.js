(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var c=n(45),a=n.n(c).a.create({baseURL:"http://api.openweathermap.org/data/2.5/"}),r="ef155a3a841668736116d3334f0f6ee1",i=function(e){return a.get("forecast?q=".concat(e,"&cnt=",14,"&appid=").concat(r)).then((function(e){return e.data}))},o=function(e){return a.get("weather?q=".concat(e,"&appid=").concat(r)).then((function(e){return e.data}))},s=function(e,t){return a.get("weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(r)).then((function(e){return e.data}))},l=function(e,t){return a.get("air_pollution?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(r)).then((function(e){return e.data}))}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return b}));var c=n(10),a=n.n(c),r=n(12),i=n(18),o=n(2),s=n(13),l="reduceWeather/SET_Weather",u="reduceWeather/SET_Term",d={mainTheme:"Weather",description:"Forecast on near days",news:[{description:"O my god! Sun sooner is die!!!",img:"https://artfiles.alphacoders.com/305/thumb-1920-30564.jpg"},{description:"Its joke)",img:"https://artfiles.alphacoders.com/305/thumb-1920-30564.jpg"}],allWeather:[{dt:0,main:{temp:0,temp_min:0,temp_max:0,pressure:0,sea_level:0,grnd_level:0,humidity:0,temp_kf:0},weather:[{id:0,main:"",description:"",icon:""}],clouds:{all:0},wind:{speed:0,deg:0},sys:{pod:""},dt_txt:""}],term:""},h=function(e){return{type:u,term:e}},j=function(e){return{type:l,allWeather:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"London";return function(){var t=Object(r.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.d)(e);case 2:c=t.sent,n(j(c.list)),n(h(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{allWeather:Object(i.a)(t.allWeather)});case u:return Object(o.a)(Object(o.a)({},e),{},{term:t.term});default:return e}}},38:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b}));var c=n(10),a=n.n(c),r=n(12),i=n(2),o=n(13),s="reduceCoordinate/Find_Coordinate_City_By_Name",l="reduceCoordinate/Find_City_By_Coordinate",u={mainTheme:"Coordinate",description:"Find out ",news:[{img:"https://i.artfile.ru/1920x1200_580824_[www.ArtFile.ru].jpg",description:"e mae 3 materik!"}],lat:null,lon:null,city:null,filter:{lat:null,lon:null,city:null}},d=function(e,t,n){return{type:s,lat:e,lon:t,cityName:n}},h=function(e){return function(){var t=Object(r.a)(a.a.mark((function t(n){var c,r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)(e);case 2:c=t.sent.coord,r=c.lat,i=c.lon,n(d(r,i,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t,n){return{type:l,cityName:e,lat:t,lon:n}},b=function(e,t){return function(){var n=Object(r.a)(a.a.mark((function n(c){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(e,t);case 2:r=n.sent.name,c(j(r,e,t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)(Object(i.a)({},e),{},{lat:t.lat,lon:t.lon,filter:Object(i.a)(Object(i.a)({},e.filter),{},{city:t.cityName})});case l:return Object(i.a)(Object(i.a)({},e),{},{city:t.cityName,filter:Object(i.a)(Object(i.a)({},e.filter),{},{lat:t.lat,lon:t.lon})});default:return e}}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var c=n(10),a=n.n(c),r=n(12),i=n(2),o=n(13),s="reducePollution/Set_Pollution",l={mainTheme:"Pollution",description:"Check place on pollution",news:[{description:"e mae save planet",img:"https://c.wallhere.com/photos/56/29/tree_glade_sun_light_shadow_grass-674839.jpg!d"}],aqi:null,components:{co:null,no:null,no2:null,o3:null,so2:null,pm2_5:null,pm10:null,nh3:null},filter:{lat:null,lon:null}},u=function(e,t,n){return{type:s,payload:e,lat:t,lon:n}},d=function(e,t){return function(){var n=Object(r.a)(a.a.mark((function n(c){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.c)(e,t);case 2:r=n.sent.list[0],i={aqi:r.main.aqi,components:{co:r.components.co,no:r.components.no,no2:r.components.no2,o3:r.components.o3,so2:r.components.so2,pm2_5:r.components.pm2_5,pm10:r.components.pm10,nh3:r.components.nh3}},c(u(i,e,t));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(i.a)(Object(i.a)({},e),{},{aqi:t.payload.aqi,components:Object(i.a)({},t.payload.components),filter:{lat:t.lat,lon:t.lon}});default:return e}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var c=n(18),a=n(2),r="reduceMain/Do_Feedback",i="reduceMain/Set_Page",o={mainTheme:"Main",description:"About us",feedbacks:[{name:"XtrOne",text:"LoL",date:"orbidOL"}],page:1,portionSize:5},s=function(e){return{type:i,page:e}},l=function(e,t){return{type:r,feedback:{text:e,name:t,date:(new Date).toLocaleString()}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(a.a)(Object(a.a)({},e),{},{feedbacks:[].concat(Object(c.a)(e.feedbacks),[t.feedback])});case i:return Object(a.a)(Object(a.a)({},e),{},{page:t.page});default:return e}}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u}));var c=n(2),a="reduceNews/Change_Page_Pollution",r="reduceNews/Change_Page_Coordinate",i="reduceNews/Change_Page_Weather",o={mainTheme:"News",description:"All news and features",pageCoordinate:1,pagePollution:1,pageWeather:1},s=function(e){return{type:a,page:e}},l=function(e){return{type:r,page:e}},u=function(e){return{type:i,page:e}};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(c.a)(Object(c.a)({},e),{},{pagePollution:t.page});case i:return Object(c.a)(Object(c.a)({},e),{},{pageWeather:t.page});case r:return Object(c.a)(Object(c.a)({},e),{},{pageCoordinate:t.page});default:return e}}},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),i=n.n(r),o=(n(51),n(21)),s=n(11),l=n(4),u=(n(52),n(53),n(1)),d=function(e){return e.show?Object(u.jsx)(s.b,{style:{textDecoration:"none"},to:e.show?e.navigate:"",children:Object(u.jsxs)("div",{className:"itemAside p-2",children:[Object(u.jsx)("div",{children:e.navigate}),Object(u.jsx)("div",{className:"right",children:e.children})]})}):Object(u.jsx)("div",{className:"itemAside p-2",children:Object(u.jsx)("div",{className:"right",children:e.children})})},h=function(e){return console.log(e),Object(u.jsxs)("div",{className:"bg-primary Aside",style:{height:"100%"},children:[Object(u.jsx)("br",{}),Object(u.jsx)(d,{navigate:"Weather",show:e.show,children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-thermometer",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z"}),Object(u.jsx)("path",{d:"M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})]})}),Object(u.jsx)(d,{navigate:"Coordinate",show:e.show,children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-map",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"})})}),Object(u.jsx)(d,{navigate:"Pollution",show:e.show,children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-tree",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"})})})]})},j=function(e){return Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-twitter ml-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-facebook ml-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"currentColor",className:"bi bi-instagram ml-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-youtube ml-2",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"})})})]})},b=function(e){return Object(u.jsx)("div",{className:"container p-3",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"Main",className:"Link",children:"About our company"})}),Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"News",className:"Link",children:"News and Features"})})]}),Object(u.jsx)("div",{className:"col-md-4"}),Object(u.jsxs)("div",{className:"col-md-4",children:[Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{children:"Stay connected"}),Object(u.jsx)("div",{children:Object(u.jsx)(j,{})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"/Main",style:{textDecoration:"none"},children:Object(u.jsx)("div",{className:"LinkBlock",children:"Feedback"})})})]})]})})},p=function(e){return Object(u.jsx)(a.a.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(e,{})})},m=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,101))})),f=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,102))})),O=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,103))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,99))})),x=a.a.lazy((function(){return n.e(4).then(n.bind(null,100))}));var g=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),d=i[0],j=i[1],g=function(){j(!d)},w=function(){window.innerWidth>760?a(!0):a(!1)};return Object(c.useEffect)((function(){window.addEventListener("resize",w),w()}),[]),Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:n?d?"AppEditMode":"App":"",children:[n?Object(u.jsx)("div",{onClick:g,className:"sticky-top",children:Object(u.jsx)(h,{show:d})}):Object(u.jsxs)("div",{className:"p-2",children:[Object(u.jsxs)("div",{className:"PhoneAside",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-outline-primary",onClick:g,children:"Menu"})}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"Main",style:{textDecoration:"none"},children:Object(u.jsx)("button",{className:"btn btn-outline-primary right",children:"Main"})})})]}),Object(u.jsx)("div",{className:d?"mt-2":"",children:d&&Object(u.jsx)(h,{show:d})})]}),Object(u.jsxs)("div",{onClick:function(){j(!1)},className:"Article",children:[Object(u.jsx)(l.a,{path:"/Weather",render:function(){return p(f)}}),Object(u.jsx)(l.a,{path:"/Coordinate",render:function(){return p(m)}}),Object(u.jsx)(l.a,{path:"/Pollution",render:function(){return p(O)}}),Object(u.jsx)(l.a,{path:"/Main",render:function(){return p(v)}}),Object(u.jsx)(l.a,{path:"/News",render:function(){return p(x)}}),Object(u.jsx)("div",{className:"Footer",children:Object(u.jsx)(b,{})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},y=n(27),N=n(44),_=n(14),C=n(29),k=n(38),A=n(39),z=n(40),L=n(41),M=Object(_.c)({weather:C.a,coordinate:k.a,pollution:A.a,main:z.b,news:L.d}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,S=Object(_.e)(M,P(Object(_.a)(N.a)));i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y.a,{store:S,children:Object(u.jsx)(g,{})})}),document.getElementById("root")),w()}},[[82,2,3]]]);
//# sourceMappingURL=main.62a9a5b9.chunk.js.map