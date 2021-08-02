(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{14:function(e,t,n){e.exports={loading:"Loading_loading__2YYtB",spin:"Loading_spin__3OGiq"}},19:function(e,t,n){},2:function(e,t,n){e.exports={container:"App_container__isiry",main:"App_main__hnNLX",back:"App_back__35UyD","clear-container":"App_clear-container__3k5Ix","dark-container":"App_dark-container__Jf42J",elements:"App_elements__2-3tm",info:"App_info__1xyWc",p:"App_p__-Vc13",row:"App_row__Z2S3K",temp:"App_temp__q1sqa",msg:"App_msg__tmFM_",dark:"App_dark__26ork",button:"App_button__2imzQ",toggle:"App_toggle__3yOtA","toggle-light":"App_toggle-light__3NNnL"}},28:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=n(4),i=Object(r.b)({name:"city",initialState:{details:{icon:"",name:"",region:"",country:"",temp:"",wind:"",humidity:"",precipitation:"",code:""},error:""},reducers:{setstate:function(e,t){e.details=t.payload},seterrorr:function(e,t){e.error=t.payload.err}}}),o=i.actions,s=i.reducer,l=Object(r.b)({name:"input",initialState:{value:"",loading:!1},reducers:{setvalue:function(e,t){console.log("py",t.payload),e.value=t.payload},setloading:function(e,t){e.loading=t.payload}}}),u=l.actions,p=l.reducer,d=Object(r.a)({reducer:{city:s,input:p}}),j=(n(19),n(3)),m=n(8),b=n(0),_=n(2),g=n.n(_),h=n(5),O=n.n(h),x=n(12),f=n(6),v=n.n(f),y=n(1),N=function(e){var t=e.toggle,n=(Object(j.c)((function(e){return e.input})),Object(j.b)()),c=Object(b.useState)(""),a=Object(m.a)(c,2),r=a[0],i=a[1];return console.log(r),Object(b.useEffect)((function(){var e=setTimeout((function(){n(u.setloading(!1)),console.log("set")}),2e3);return function(){console.log("iunset"),n(u.setloading(!0)),clearTimeout(e)}}),[r,n]),Object(y.jsxs)("div",{className:v.a.input,children:[Object(y.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},className:"".concat(!0===t?v.a.dark:"")}),Object(y.jsx)("button",{className:"".concat(v.a.button,"  ").concat(!0===t?v.a.dark:""),onClick:function(){var e;n(u.setvalue(r)),n((e=r,console.log("me",e),function(){var t=Object(x.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(u.setloading(!0)),function(){var t=Object(x.a)(O.a.mark((function t(){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.weatherapi.com/v1/current.json?key=e0b53a0e6f624151a90110255210108&q=".concat(e));case 2:if(n=t.sent,console.log(n),n.ok){t.next=6;break}throw new Error("No Such Country Found");case 6:return t.next=8,n.json();case 8:return c=t.sent,console.log(c),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then((function(e){n(o.seterrorr({err:""})),n(o.setstate({icon:e.current.condition.icon,name:e.location.name,region:e.location.region,country:e.location.country,temp:e.current.temp_c,wind:e.current.wind_mph,humidity:e.current.humidity,precipitation:e.current.precip_mm,code:e.current.condition.code})),n(u.setloading(!1))})).catch((function(e){n(o.seterrorr({err:"Invalid location"})),n(u.setloading(!1))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Search"})]})},k=n(14),w=n.n(k),A=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:w.a.loading})})},S=n(9);var I=function(){var e=Object(b.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],a=(Object(j.b)(),Object(j.c)((function(e){return e.city}))),r=a.details,i=r.icon,o=r.name,s=(r.region,r.country,r.temp),l=r.wind,u=r.humidity,p=r.precipitation,d=r.code,_=a.error,h=Object(j.c)((function(e){return e.input})),O=h.value,x=h.loading;return Object(y.jsxs)("div",{className:"".concat(g.a.main," ").concat(n?g.a.dark:""),children:[Object(y.jsx)("div",{children:Object(y.jsx)(N,{toggle:n})}),Object(y.jsxs)("div",{className:" ".concat(g.a.container," ").concat(1e3===d&&!1===n?g.a["clear-container"]:!0===n?g.a["dark-container"]:""," "),children:[0===O.length&&!x&&Object(y.jsx)("p",{className:g.a.msg,children:"Enter some City Name and Press submit"}),x&&Object(y.jsx)(A,{}),_.length>0&&!x&&Object(y.jsx)("p",{children:_}),0===_.length&&!x&&O.length>0&&Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)("div",{className:g.a.details}),Object(y.jsx)("img",{alt:"",src:i}),Object(y.jsxs)("p",{className:g.a.temp,children:[s,"\xb0C"]}),Object(y.jsx)("p",{style:{margin:"27px 0px",fontSize:"19px"},children:o}),Object(y.jsxs)("div",{className:g.a.row,children:[Object(y.jsxs)("div",{className:g.a.elements,children:[Object(y.jsx)(S.c,{}),Object(y.jsx)("p",{className:g.a.p,children:"Wind"}),Object(y.jsx)("p",{className:g.a.info,children:l})]}),Object(y.jsxs)("div",{className:g.a.elements,children:[Object(y.jsx)(S.b,{}),Object(y.jsx)("p",{className:g.a.p,children:"Humidity"}),Object(y.jsx)("p",{className:g.a.info,children:u})]}),Object(y.jsxs)("div",{className:g.a.elements,children:[Object(y.jsx)(S.a,{}),Object(y.jsx)("p",{className:g.a.p,children:"Precipitation"}),Object(y.jsx)("p",{className:g.a.info,children:p})]})]})]})]}),Object(y.jsx)("button",{class:" ".concat(g.a.button," ").concat(n?g.a["toggle-light"]:g.a.toggle," "),onClick:function(){c((function(e){return!e}))},children:"Toggle"})]})};a.a.render(Object(y.jsx)(j.a,{store:d,children:Object(y.jsx)(I,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={input:"Input_input__1RGeV",button:"Input_button__2L7UX",dark:"Input_dark__mPjIE"}}},[[28,1,2]]]);
//# sourceMappingURL=main.9b6dcffe.chunk.js.map