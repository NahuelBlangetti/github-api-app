(this["webpackJsonpgithub-api-app"]=this["webpackJsonpgithub-api-app"]||[]).push([[0],{19:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(12),i=c.n(a),r=(c(18),c(9)),l=c(17),o=c(7),j=(c(19),c(5)),h=c(0);function d(e){var t=e.currentPage,c=e.setCurrentPage,s=e.cantRepos,a=Object(n.useState)(1),i=Object(o.a)(a,2),r=i[0],l=i[1];return Object(h.jsx)("div",{class:"conteiner center",children:Object(h.jsx)(j.Pagination,{items:s,leftBtn:Object(h.jsx)(j.PaginationButton,{onSelect:function(){l(r-1),c(t-1)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-left-square",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})})}),maxButtons:1,rightBtn:Object(h.jsx)(j.PaginationButton,{onSelect:function(){l(r+1),c(t+1)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right-square",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})})})})})}var b=c(29),u=c.n(b),x={contenido:{arriba:"50%",izquierda:"50%",derecha:"auto",abajo:"auto",marginRight:"-50%",transform:"traducir(-50%, -50%)"}};function O(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1),i=Object(o.a)(a,2),b=i[0],O=i[1],g=Object(n.useState)(10),p=Object(o.a)(g,2),f=p[0],v=(p[1],c.length/f),m=Object(n.useState)(!1),w=Object(o.a)(m,2),y=w[0],N=w[1],C=Object(n.useState)([]),k=Object(o.a)(C,2),B=k[0],z=k[1],S=Object(n.useState)([]),H=Object(o.a)(S,2),M=H[0],L=H[1];function P(){N(!1)}var R=function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){var c,n,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t.name),c="https://api.github.com/repos/".concat(t.owner.login,"/").concat(t.name,"/contents"),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:s=e.sent,z(s),N(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var t,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repositories");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){V()}),[]);var q=B.map((function(e){return Object(h.jsx)(j.CollectionItem,{children:Object(h.jsxs)("p",{class:"fst-normal",children:[e.name," - ",Object(h.jsxs)("a",{href:e._links.html,class:"indigo-text darken-4 font-small",children:["View Folder ",Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"})]})," "]})]})})})),A=c.slice((b-1)*f,(b-1)*f+f).map((function(e){var t=e;return Object(h.jsxs)("li",{className:"row collection-item",children:[Object(h.jsxs)("div",{class:"col2",children:[Object(h.jsx)("h5",{class:"fst-normal mayus",children:e.name}),Object(h.jsx)("p",{class:"fst-italic",children:e.description})]}),Object(h.jsx)("div",{class:"col1",children:Object(h.jsx)("a",{class:"secondary-content btn-floating btn-small waves-effect waves-light indigo darken-4",onClick:function(){return R(t)},children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),Object(h.jsx)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"})]})})})]},e.id)}));return Object(h.jsxs)("div",{class:"m-5 conteiner",children:[Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"collection with-header stripedstriped",children:A})}),Object(h.jsxs)(u.a,{isOpen:y,onRequestClose:P,style:x,overlayClassName:"modal-overlay",className:"modal-content",children:[Object(h.jsx)(j.Button,{className:"secondary-content button indigo darken-4",onClick:P,children:"X"}),Object(h.jsxs)("h5",{children:["Repostorio By: ",Object(h.jsx)("a",{className:"mayus indigo-text darken-4",children:M})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(j.Row,{children:Object(h.jsx)(j.Col,{s:12,children:Object(h.jsx)(j.Collection,{children:q})})})]}),Object(h.jsx)(d,{currentPage:b,setCurrentPage:O,cantRepos:v})]})}function g(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("nav",{children:Object(h.jsx)("div",{class:"nav-wrapper indigo darken-4",children:Object(h.jsx)("a",{href:"#",class:"brand-logo center",children:"Repositories by GitHub"})})}),Object(h.jsx)(O,{})]})}function p(){return Object(h.jsxs)("footer",{className:"page-footer indigo darken-4",children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col l8",children:[Object(h.jsx)("h5",{className:"text-white blue-text",children:"Api Rest GitHub"}),Object(h.jsxs)("p",{className:"grey-text text-lighten-4",children:["Espero que les haya gustado el dise\xf1o y funcionamiento de la pagina, asi obtener una oportunidad de crecimiento.",Object(h.jsx)("br",{}),"Gracias por su tiempo."]})]}),Object(h.jsxs)("div",{className:"col l3 offset-l30 s12",children:[Object(h.jsx)("h5",{className:"blue-text",children:"Links"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/nahuelblangetti/",children:"LinkedIn"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/NahuelBlangetti",children:"GitHub"})})]})]})]})}),Object(h.jsx)("div",{className:"footer-copyright blue-text",children:Object(h.jsx)("div",{clas:!0,children:"\xa9 2022 by Leonardo Nahuel Blangetti"})})]})}function f(){return Object(h.jsxs)("div",{class:"light-blue lighten-5",children:[Object(h.jsx)(g,{}),Object(h.jsx)(p,{})]})}var v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},m=document.getElementById("root");i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),m),v()}},[[88,1,2]]]);
//# sourceMappingURL=main.f7a73e34.chunk.js.map