(this["webpackJsonphooks-practice"]=this["webpackJsonphooks-practice"]||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(4),r=s.n(i),j=(s(9),s(2)),a=(s(10),s(0)),o=function(e){var t=e.items;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsxs)("div",{className:"comment",children:[Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{children:[e.id," ."]}),"Commented by :"," ",Object(a.jsx)("span",{style:{fontWeight:"600"},children:e.name})]}),Object(a.jsx)("p",{children:e.body})]},e.id)}))})},b=function(e){var t=e.setResourceType;return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("h1",{children:"React Hooks Practice"})}),Object(a.jsxs)("div",{className:"btns",children:[Object(a.jsxs)("button",{onClick:function(){return t("Posts")},children:["Posts ",Object(a.jsx)("i",{className:"fas fa-newspaper"})]}),Object(a.jsxs)("button",{onClick:function(){return t("Users")},children:["Users ",Object(a.jsx)("i",{className:"fas fa-users"})]}),Object(a.jsxs)("button",{onClick:function(){return t("Comments")},children:["Comments ",Object(a.jsx)("i",{className:"fas fa-comments"})]})]})]})},d=function(e){var t=e.items;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsxs)("h4",{children:[Object(a.jsxs)("span",{style:{fontSize:"16px",fontWeight:"400"},children:[e.id," ."]}),e.title]}),Object(a.jsx)("p",{children:e.body})]},e.id)}))})},l=function(e){var t=e.items;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsxs)("div",{className:"user",children:[Object(a.jsxs)("h4",{children:["Name : ",e.name]}),Object(a.jsxs)("p",{children:["Email : ",e.email]}),Object(a.jsxs)("p",{children:["Phone : ",e.phone]}),Object(a.jsxs)("p",{children:["Website : ",e.website]})]},e.id)}))})};var h=function(){var e=Object(c.useState)("Users"),t=Object(j.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)([]),r=Object(j.a)(i,2),h=r[0],u=r[1],O=Object(c.useState)(!1),m=Object(j.a)(O,2),x=m[0],f=m[1],p=Object(c.useState)([]),v=Object(j.a)(p,2),N=v[0],C=v[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/".concat(s)).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){f(!0),C(""+e)}))}),[s]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)(b,{setResourceType:n}),Object(a.jsx)("h1",{children:s}),"Posts"===s&&Object(a.jsx)(d,{items:h}),"Users"===s&&Object(a.jsx)(l,{items:h}),"Comments"===s&&Object(a.jsx)(o,{items:h}),x&&Object(a.jsxs)("div",{children:[N," data for ",s]})]})})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.c43ab809.chunk.js.map