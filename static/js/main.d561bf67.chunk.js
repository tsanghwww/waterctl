(this.webpackJsonpwaterctl=this.webpackJsonpwaterctl||[]).push([[0],{57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=(n(57),n(25)),s=n.n(i),l=n(40),u=n(41),d=n(15),b=n(3),h=n(94),j=n(104),f=n(35),g=n(37),p=n(36),v=n(96),w=n(98),O=n(103),m=n(99),x=n(46),k=n.n(x),S=n(47),y=n.n(S),W=n(102),C=n(100),N=n(105),A=n(101),B=n(4),P=Object(h.a)((function(e){return Object(j.a)({root:{flexGrow:1,paddingTop:"20px",display:"flex",alignItems:"center"},paper:{padding:e.spacing(2),margin:e.spacing(1),width:e.spacing(36)},button:{"& > *":{marginRight:e.spacing(2)}},buttonProgress:{color:f.a.A400,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},startButtonSuccess:{backgroundColor:g.a[500],"&:hover":{backgroundColor:g.a[700]}},startButtonFailure:{backgroundColor:p.a[500],"&:hover":{backgroundColor:p.a[700]}}})})),U=function(e){var t=a.a.useState(!0),n=Object(d.a)(t,2),r=n[0],c=n[1],o=function(){c(!1)};return Object(B.jsxs)(W.a,{style:{whiteSpace:"pre-wrap"},open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(C.a,{children:Object(B.jsx)(N.a,{id:"alert-dialog-description",children:e.errorDescription})}),Object(B.jsx)(A.a,{children:Object(B.jsx)(O.a,{onClick:o,color:"primary",autoFocus:!0,children:"\u597d"})})]})},I=function(){var e,t=P(),n=a.a.useState(!1),r=Object(d.a)(n,2),c=r[0],o=r[1],i=a.a.useState(0),h=Object(d.a)(i,2),j=h[0],f=h[1],g=a.a.useState(!1),p=Object(d.a)(g,2),x=p[0],S=p[1],W=a.a.useState(!1),C=Object(d.a)(W,2),N=C[0],A=C[1],I=a.a.useState(""),E=Object(d.a)(I,2),F=E[0],T=E[1],D=a.a.useState(Object),L=Object(d.a)(D,2),z=L[0],J=L[1],R=a.a.useState(Object),V=Object(d.a)(R,2),q=V[0],G=V[1],M=Object(b.a)((e={},Object(u.a)(e,t.startButtonSuccess,x),Object(u.a)(e,t.startButtonFailure,N),e)),Q=function(e){return console.log("Current:",e),e},$=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.bluetooth.requestDevice({filters:[{namePrefix:"Water"}],optionalServices:["generic_access"]});case 2:return t=e.sent,Q(t),f(20),e.next=7,t.gatt.connect();case 7:return n=e.sent,J(n),Q(n),f(40),e.next=13,n.getPrimaryService(61936);case 13:return r=e.sent,Q(r),f(60),e.next=18,r.getCharacteristic(61937);case 18:return a=e.sent,G(a),Q(a),f(80),c=new Uint8Array([254,254,9,178,1,43,220,0,112,226,235,32,1,1,0,0,0,108,48,0]),console.log("Writing: ",c),e.next=26,a.writeValue(c);case 26:f(100);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Uint8Array([254,254,9,179,0,0]),console.log("Writing: ",t),e.next=4,q.writeValue(t);case 4:return e.next=6,z.disconnect();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(e){o(!1),e.toString().match(/User cancelled/)||(A(!0),navigator.bluetooth?e.toString().match(/User denied the browser permission/)?T("\u84dd\u7259\u6743\u9650\u906d\u62d2\u3002\n\n\u8bf7\u524d\u5f80\u624b\u673a\u8bbe\u7f6e\uff0c\u6388\u4e88\u6d4f\u89c8\u5668\u201c\u4f4d\u7f6e\u4fe1\u606f\u201d\u6743\u9650\u3002\n\u6b64\u6743\u9650\u4e0d\u4f1a\u7528\u4e8e\u5b9a\u4f4d\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b\u201c\u7591\u96be\u89e3\u7b54\u201d\u3002"):e.toString().match(/NetworkError/)?T("\u8fde\u63a5\u4e0d\u7a33\u5b9a\uff0c\u65e0\u6cd5\u4e0e\u6c34\u63a7\u5668\u5efa\u7acb\u8fde\u63a5\u3002\n\u8bf7\u91cd\u8bd5\u3002"):T("\u672a\u77e5\u9519\u8bef\uff1a\n"+e.toString()+"\n\n\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2aBug\uff0c\u8bf7\u622a\u56fe\u5e76\u53cd\u9988\u7ed9\u5f00\u53d1\u8005\u3002"):T("\u627e\u4e0d\u5230\u84dd\u7259\u786c\u4ef6\uff0c\u6216\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u3002\n\n\u8bf7\u53c2\u8003\u4e0b\u65b9\u201c\u7591\u96be\u89e3\u7b54\u201d\u3002"))};return Object(B.jsxs)("div",{className:t.root,children:[F&&Object(B.jsx)(U,{errorDescription:F}),Object(B.jsxs)(v.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(B.jsx)(v.a,{item:!0,children:Object(B.jsx)(w.a,{className:t.paper,children:Object(B.jsxs)("div",{className:t.button,children:[Object(B.jsxs)(O.a,{variant:"contained",color:"primary",startIcon:Object(B.jsx)(k.a,{}),className:M,disabled:c,onClick:function(){c||(T(""),S(!1),A(!1),o(!0),f(-1),$().then((function(e){S(!0),o(!1)})).catch((function(e){return H(e)})))},children:["\u542f\u52a8",c&&j<0&&Object(B.jsx)(m.a,{size:24,className:t.buttonProgress}),c&&j>=0&&Object(B.jsx)(m.a,{size:24,className:t.buttonProgress,variant:"determinate",value:j})]}),Object(B.jsx)(O.a,{variant:"contained",color:"primary",startIcon:Object(B.jsx)(y.a,{}),onClick:function(){_(),S(!1),A(!1)},children:"\u7ed3\u675f"})]})})}),Object(B.jsx)(v.a,{item:!0,children:Object(B.jsx)(w.a,{className:t.paper,children:Object(B.jsxs)("div",{className:t.button,children:[Object(B.jsx)(O.a,{variant:"outlined",href:"https://github.com/celesWuff/waterctl/blob/master/FAQ.md",children:"\u7591\u96be\u89e3\u7b54"}),Object(B.jsx)(O.a,{variant:"outlined",href:"https://github.com/celesWuff/waterctl",children:"\u6e90\u4ee3\u7801"})]})})})]})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(I,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.d561bf67.chunk.js.map