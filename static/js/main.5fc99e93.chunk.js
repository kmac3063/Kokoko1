(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(22),r=n.n(i),a=n(12),o=n.n(a),s=n(26),d=n.n(s),l=n(30),j=n(20),u=n(17),b=n(5),f=(n(131),n(134)),O=n(135),x=n(136),p=n(4),h=function(e){var t=e.id,n=e.go,c=(e.fetchedUser,e.showQRReader,e.codeList),i=e.logText,r=e.fake;return Object(p.jsxs)(b.i,{id:t,children:[Object(p.jsx)(b.j,{children:"QR \u043f\u0440\u0438\u043b\u043e\u0436\u0443\u043b\u044c\u043a\u04303"}),Object(p.jsx)(b.d,{multiline:!0,children:i}),Object(p.jsx)(b.d,{onClick:r,before:Object(p.jsx)(f.a,{}),children:"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"}),Object(p.jsx)(b.d,{onClick:n,"data-to":"QrList",expandable:!0,before:Object(p.jsx)(O.a,{}),indicator:Object(p.jsx)(b.e,{mode:"primary",children:c.length}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 QR \u043a\u043e\u0434\u043e\u0432"}),Object(p.jsx)(b.n,{}),Object(p.jsx)(b.d,{onClick:n,"data-to":"AllowedQrList",expandable:!0,before:Object(p.jsx)(x.a,{}),children:"\u0411\u043e\u043d\u0443\u0441\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})]})},g=(n.p,n(137)),m=function(e){var t,n=e.id,c=e.fetchedUser,i=e.go;return Object(p.jsx)(b.i,{id:n,children:Object(p.jsx)(b.f,{children:Object(p.jsx)(b.l,{icon:Object(p.jsx)(g.a,{}),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, "+(t=c,(null==t||null==t.first_name?"\u041f\u0440\u0438\u044f\u0442\u0435\u043b\u044c":c.first_name)+"!"),action:Object(p.jsx)(b.c,{size:"m",onClick:i,"data-to":"Home",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a QR \u043a\u043e\u0434\u0430\u043c"}),children:'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430 "\u0424\u0438\u043d\u0430\u043b \u0412\u0435\u0437\u0434\u0435\u043a\u043e\u0434\u0430 2021"'})})})},v=function(e){var t=e.id,n=e.go,c=(e.fetchedUser,e.codeList),i=e.setCodeList;return Object(p.jsxs)(b.i,{id:t,children:[Object(p.jsx)(b.j,{left:Object(p.jsx)(b.k,{onClick:n,"data-to":"Home"}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u0434\u043e\u0432"}),Object(p.jsx)(b.f,{children:Object(p.jsx)(b.h,{children:c.map((function(e){return Object(p.jsx)(b.d,{multiline:!0,removable:!0,onRemove:function(){var t;t=e.id,console.log("onRemove id: "+t),console.log("Before: "+c),console.log("After: "+c.filter((function(e){return e.id!==t}))),i(c.filter((function(e){return e.id!==t})))},children:e.text},e.id)}))})})]})},y=n(21),S=function(e){var t=e.id,n=e.go,c=(e.fetchedUser,e.codeList),i=e.allowedList;return Object(p.jsxs)(b.i,{id:t,children:[Object(p.jsx)(b.j,{left:Object(p.jsx)(b.k,{onClick:n,"data-to":"Home",label:b.r===b.p?"\u041d\u0430\u0437\u0430\u0434":void 0}),children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),Object(p.jsxs)(b.d,{multiline:!0,children:[" \u041a\u043e\u0434 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u043c, \u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043e\u0434\u043d\u0443 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u0442\u0440\u043e\u043a: ",i.map((function(e,t){return'"'+e.text+'"'+(t===i.length-1?"":",")}))]}),Object(p.jsx)(b.o,{}),Object(p.jsx)(b.f,{header:Object(p.jsx)(b.g,{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),children:Object(p.jsx)(b.h,{children:function(){console.log(c),console.log(i);var e,t=[],n=Object(y.a)(c);try{for(n.s();!(e=n.n()).done;){var r=e.value;console.log("code: "+r.text),console.log("codeType: "+typeof r.text);var a,o=!1,s=Object(y.a)(i);try{for(s.s();!(a=s.n()).done;){var d=a.value;if(r.text.includes(d.text)){o=!0;break}}}catch(l){s.e(l)}finally{s.f()}o&&t.push(r)}}catch(l){n.e(l)}finally{n.f()}return t}().map((function(e){return Object(p.jsx)(b.d,{multiline:!0,children:e.text},e.id)}))})}),Object(p.jsx)(b.f,{header:Object(p.jsx)(b.g,{children:"\u041d\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),children:Object(p.jsx)(b.h,{children:function(){var e,t=[],n=Object(y.a)(c);try{for(n.s();!(e=n.n()).done;){var r,a=e.value,o=!1,s=Object(y.a)(i);try{for(s.s();!(r=s.n()).done;){var d=r.value;if(a.text.includes(d.text)){o=!0;break}}}catch(l){s.e(l)}finally{s.f()}o||t.push(a)}}catch(l){n.e(l)}finally{n.f()}return t}().map((function(e){return Object(p.jsx)(b.d,{multiline:!0,children:e.text},e.id)}))})})]})},k=function(){arguments.length>0&&void 0!==arguments[0]||allowedList;return function(){var e=Object(c.useState)("WelcomeScreen"),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(u.a)(r,2),s=a[0],f=a[1],O=Object(c.useState)(Object(p.jsx)(b.m,{size:"large"})),x=Object(u.a)(O,2),g=x[0],y=x[1],k=Object(c.useState)(null),A=Object(u.a)(k,2),L=(A[0],A[1]),K=Object(c.useState)([]),W=Object(u.a)(K,2),R=W[0],V=W[1],w=Object(c.useState)(0),C=Object(u.a)(w,2),Q=C[0],U=C[1],I=Object(c.useState)(""),G=Object(u.a)(I,2),J=G[0],N=G[1];function T(e,t){var n=Object(c.useRef)(!1);Object(c.useEffect)((function(){n.current?e():n.current=!0}),t)}Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(null),e.next=3,o.a.send("VKWebAppGetUserInfo");case 3:t=e.sent,f(t),o.a.send("VKWebAppStorageGetKeys",{count:2,offset:0});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if(N((function(){return"Type: "+n+". Data: "+JSON.stringify(c)})),"VKWebAppUpdateConfig"===n){var i=document.createAttribute("scheme");i.value="client_light",L(i.value),document.body.attributes.setNamedItem(i)}"VKWebAppStorageGetKeysFailed"!==n&&"VKWebAppStorageGetFailed"!==n||(o.a.send("VKWebAppStorageSet",{key:"maxId",value:"0"}),o.a.send("VKWebAppStorageSet",{key:"codeList",value:JSON.stringify([])})),"VKWebAppStorageGetKeysResult"===n&&o.a.send("VKWebAppStorageGet",{keys:["maxId","codeList"]}),"VKWebAppStorageGetResult"===n&&(U(parseInt(c.keys.filter((function(e){return"maxId"===e.key})).value)),V(JSON.parse(c.keys.filter((function(e){return"codeList"===e.key})).value))),"VKWebAppOpenCodeReaderResult"===n&&(V([].concat(Object(j.a)(R),[{text:c.code_data,id:Q}])),U(Q+1))})),function(){e.apply(this,arguments)}()}),[]),T((function(){o.a.send("VKWebAppStorageSet",{key:"maxId",value:JSON.stringify(Q)}).then((function(e){}))}),[Q]),T((function(){o.a.send("VKWebAppStorageSet",{key:"codeList",value:JSON.stringify(R)})}),[R]);var H=function(e){i(e.currentTarget.dataset.to)};return Object(p.jsx)(b.a,{children:Object(p.jsx)(b.b,{children:Object(p.jsxs)(b.q,{activePanel:n,popout:g,children:[Object(p.jsx)(m,{id:"WelcomeScreen",fetchedUser:s,go:H}),Object(p.jsx)(h,{id:"Home",fetchedUser:s,go:H,showQRReader:function(){o.a.send("VKWebAppOpenCodeReader")},codeList:R,logText:J,fake:function(){V([].concat(Object(j.a)(R),[{text:"ASD",id:Q}])),U(Q+1)}}),Object(p.jsx)(v,{id:"QrList",fetchedUser:s,go:H,codeList:R,setCodeList:V}),Object(p.jsx)(S,{id:"AllowedQrList",fetchedUser:s,go:H,codeList:R,allowedList:[{text:"test",id:4},{text:"b",id:5},{text:"123",id:6}]})]})})})}()};o.a.send("VKWebAppInit"),r.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.5fc99e93.chunk.js.map