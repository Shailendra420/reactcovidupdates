(this.webpackJsonpcoronavirusupdate=this.webpackJsonpcoronavirusupdate||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=n(21),s=n(169),l=n(182),d=n(184),u=n(44),b=n.n(u),j=n(57),g=n(58),h=n.n(g),p=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.covid19api.com/countries");case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.covid19api.com/total/dayone/country/".concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m=n(165),O=n(167),x=n(170),v=n(171),C=n(6),y=Object(m.a)((function(e){return{logo:{flexGrow:"1",cursor:"pointer"}}})),D=function(e){var t=y();return Object(C.jsxs)(O.a,{position:"static",children:[Object(C.jsx)(s.a,{}),Object(C.jsx)(x.a,{children:Object(C.jsx)(v.a,{variant:"h5",className:t.logo,children:"Covid Updates Based on Country"})})]})},N=n(30),w=n(187),L=n(185),R=function(e){var t=e.setCountryName,n=e.country;return Object(C.jsx)(L.a,{disablePortal:!0,id:"combo-box-demo",options:n,sx:{width:300},renderInput:function(e){return Object(C.jsx)(w.a,Object(N.a)(Object(N.a)({},e),{},{label:"Country"}))},getOptionLabel:function(e){return"".concat(e.Country)},getOptionSelected:function(e,t){return e.Country===t.Country},onChange:function(e,n){return t(n.Country)}})},k=n(77),S=function(e){var t=e.covidCountryData;return Object(C.jsx)(k.a,{data:{labels:t.map((function(e){return e.Date})),datasets:[{label:"Active",data:t.map((function(e){return e.Active})),lineTension:0,fill:!1,borderColor:"rgb(0, 123, 255)",backgroundColor:"rgba(0, 123, 255, 0.2)"},{label:"Confirmed",data:t.map((function(e){return e.Confirmed})),lineTension:0,fill:!1,borderColor:"rgb(255, 7, 58)",backgroundColor:"rgba(255, 7, 58, 0.2)"},{label:"Deaths",data:t.map((function(e){return e.Deaths})),lineTension:0,fill:!1,borderColor:"rgb(108, 117, 125)",backgroundColor:"rgba(108, 117, 125, 0.2)"},{label:"Recovered",data:t.map((function(e){return e.Recovered})),lineTension:0,fill:!1,borderColor:"rgb(40, 167, 69)",backgroundColor:"rgba(40, 167, 69, 0.2)"}]},options:{scales:{x:{ticks:{font:{size:8}}}}}})},P=n(177),B=n(181),H=n(180),T=n(176),F=n(178),I=n(179),A=n(123),W=n(186),E=Object(m.a)({table:{minWidth:"100%"},tableHead:{fontWeight:700,color:"#6c757d",paddingRight:4,paddingLeft:5},tableBody:{},dateColumnBody:{fontWeight:700,color:"#6c757d",paddingRight:4,paddingLeft:5},activeColumn:{color:"rgb(0, 123, 255)",paddingRight:4,paddingLeft:5},confirmedColumn:{color:"rgb(255, 7, 58)",paddingRight:4,paddingLeft:5},deathsColumn:{color:"rgb(108, 117, 125)",paddingRight:4,paddingLeft:5},recoveredColumn:{color:"rgb(40, 167, 69)",paddingRight:4,paddingLeft:5}}),J=function(e){var t=e.covidCountryData,n=r.a.useState(2),a=Object(i.a)(n,2),c=a[0],o=a[1],s=r.a.useState(10),l=Object(i.a)(s,2),d=l[0],u=l[1],b=E();return Object(C.jsxs)(T.a,{component:A.a,children:[Object(C.jsxs)(P.a,{className:b.table,"aria-label":"simple table",children:[Object(C.jsx)(F.a,{children:Object(C.jsxs)(I.a,{children:[Object(C.jsx)(H.a,{className:b.tableHead,children:"Date"}),Object(C.jsx)(H.a,{className:b.tableHead,align:"right",children:"Active"}),Object(C.jsx)(H.a,{className:b.tableHead,align:"right",children:"Confirmed"}),Object(C.jsx)(H.a,{className:b.tableHead,align:"right",children:"Deaths"}),Object(C.jsx)(H.a,{className:b.tableHead,align:"right",children:"Recovered"})]})}),Object(C.jsx)(B.a,{className:b.tableBody,children:t.slice(c*d,c*d+d).reverse().map((function(e){return Object(C.jsxs)(I.a,{"data-country":e.Country,children:[Object(C.jsx)(H.a,{className:b.dateColumnBody,component:"th",scope:"row",children:new Date(e.Date).toLocaleString()}),Object(C.jsx)(H.a,{className:b.activeColumn,align:"right",children:e.Active}),Object(C.jsx)(H.a,{className:b.confirmedColumn,align:"right",children:e.Confirmed}),Object(C.jsx)(H.a,{className:b.deathsColumn,align:"right",children:e.Deaths}),Object(C.jsx)(H.a,{className:b.recoveredColumn,align:"right",children:e.Recovered})]},e.ID)}))})]}),Object(C.jsx)(W.a,{component:"div",count:t.length,page:c,onPageChange:function(e,t){o(t)},rowsPerPage:d,onRowsPerPageChange:function(e){u(parseInt(e.target.value,10)),o(0)}})]})},z=function(e){var t=Object(a.useState)("south-africa"),n=Object(i.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),b=u[0],j=u[1],g=Object(a.useState)([]),h=Object(i.a)(g,2),m=h[0],O=h[1];return Object(a.useEffect)((function(){var e=r.trim().toLowerCase().split(" ").join("-");p().then((function(e){j(e)})),f(e).then((function(e){O(e),console.log("covidCountryData",m)}))}),[r]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(s.a,{}),Object(C.jsx)(D,{}),Object(C.jsx)(l.a,{container:!0,spacing:0,style:{width:"100%"},children:Object(C.jsxs)(l.a,{item:!0,xs:12,children:[Object(C.jsx)(d.a,{m:2,pt:3,children:Object(C.jsx)(R,{setCountryName:c,country:b})}),Object(C.jsx)(d.a,{m:2,pt:3,children:Object(C.jsx)(S,{covidCountryData:m})}),Object(C.jsx)(d.a,{m:2,pt:3,children:Object(C.jsx)(J,{covidCountryData:m})})]})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(z,{})}),document.getElementById("root")),G()}},[[121,1,2]]]);
//# sourceMappingURL=main.776b9573.chunk.js.map