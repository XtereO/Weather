(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[5],{101:function(e,n,t){"use strict";t.r(n);var l=t(20),o=t(13),c=t(22),i=t(43),a=t(30),s=(t(1),t(89)),r=t(0),m=function(e){var n=e.components.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.k})]},e.name)}));return Object(r.jsxs)("div",{className:"container mt-4",children:[Object(r.jsx)("h1",{children:"Features"}),Object(r.jsx)("div",{children:e.news}),Object(r.jsx)("h1",{className:"mt-4",children:"Find out pollution on coordinate"}),Object(r.jsx)(s.a,{submit:e.setPollutionThunk,lat:e.filter.lat?e.filter.lat:0,lon:e.filter.lon?e.filter.lon:0}),Object(r.jsxs)("table",{className:"table table-primary",children:[Object(r.jsxs)("thead",{children:[Object(r.jsx)("th",{children:"Element"}),Object(r.jsx)("th",{children:"Koeficent"})]}),Object(r.jsx)("tbody",{children:n})]}),e.aqi?Object(r.jsx)("div",{className:"right",children:Object(r.jsxs)("h2",{children:["Average rating pollution - ",6-e.aqi]})}):Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("h3",{children:"*Enter lat and lon to get analys"})})]})};n.default=Object(o.d)(Object(l.b)((function(e){return{mainTheme:e.pollution.mainTheme,description:e.pollution.description,news:Object(c.a)(e.pollution.news),aqi:e.pollution.aqi,components:[{name:"co",k:e.pollution.components.co},{name:"no",k:e.pollution.components.no},{name:"no2",k:e.pollution.components.no2},{name:"o3",k:e.pollution.components.o3},{name:"so2",k:e.pollution.components.so2},{name:"pm2_5",k:e.pollution.components.pm2_5},{name:"pm10",k:e.pollution.components.pm10},{name:"nh3",k:e.pollution.components.nh3}],filter:{lat:e.pollution.filter.lat,lon:e.pollution.filter.lon}}}),{setPollutionThunk:i.b}),a.a)(m)},89:function(e,n,t){"use strict";var l=t(88),o=t(0);n.a=function(e){return Object(o.jsx)(l.a,{initialValues:{lat:e.lat,lon:e.lon},validate:function(){return{}},onSubmit:function(n){e.submit(n.lat,n.lon)},children:function(e){var n=e.handleChange,t=e.handleSubmit,l=e.values;return Object(o.jsx)("form",{onSubmit:t,children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-5 mb-2 d-flex center",children:["Lat",Object(o.jsx)("div",{className:"ml-2",children:Object(o.jsx)("input",{name:"lat",onChange:n,value:l.lat,className:"formInput w-100",type:"number"})})]}),Object(o.jsxs)("div",{className:"col-md-5 mb-2 d-flex center",children:["Lon",Object(o.jsx)("div",{className:"ml-2",children:Object(o.jsx)("input",{name:"lon",type:"number",onChange:n,value:l.lon,className:"formInput w-100"})})]}),Object(o.jsx)("div",{className:"col-md-2 center",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Search"})})]})})}})}}}]);
//# sourceMappingURL=5.3956242f.chunk.js.map