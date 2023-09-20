"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{1549:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,o,i,a,c,s,l,u,d,p,x=r(5861),h=r(9439),f=r(4687),m=r.n(f),v=r(2791),g=r(4390),b=r(2782),j=r(2675),Z=r(6518),y=r(168),k=r(9202),w=k.Z.section(t||(t=(0,y.Z)(["\n  padding-top: 100px;\n"]))),S=k.Z.form(o||(o=(0,y.Z)(["\n  display: flex;\n  gap: 18px;\n  justify-content: space-around;\n  width: 859px;\n  height: 74px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),q=k.Z.div(i||(i=(0,y.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),F=k.Z.div(a||(a=(0,y.Z)(["\n  display: flex;\n"]))),C=k.Z.div(c||(c=(0,y.Z)(["\n  position: relative;\n"]))),_=k.Z.label(s||(s=(0,y.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--secondary-text-color);\n"]))),z=k.Z.select(l||(l=(0,y.Z)(["\n  height: 48px;\n  padding: 14px 18px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--select-color);\n"]))),T=k.Z.label(u||(u=(0,y.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 14px;\n"]))),E=k.Z.input(d||(d=(0,y.Z)(["\n  box-sizing: border-box;\n  width: 160px;\n  height: 48px;\n  padding: 14px 18px;\n  padding-left: 60px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--select-color);\n"]))),$=k.Z.button(p||(p=(0,y.Z)(["\n  min-width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  align-self: end;\n  border: none;\n  border-radius: 12px;\n  text-align: center;\n  color: var(--button-text-color);\n  background-color: var(--accent-color);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  transition: background-color var(--tra);\n\n  &:hover {\n    background-color: var(--button-active-color);\n  }\n"]))),D=r(184),O=function(n){var e=n.onSubmit,r=n.brands,t=n.prices;return(0,D.jsx)(w,{children:(0,D.jsxs)(S,{name:"car-search-form",onSubmit:e,children:[(0,D.jsxs)(q,{children:[(0,D.jsx)(_,{htmlFor:"car-select",children:"Car brand"}),(0,D.jsxs)(z,{name:"cars",id:"car-select",children:[(0,D.jsx)("option",{value:"",children:"Enter the text"}),r.map((function(n){var e=n.name;return(0,D.jsx)("option",{value:e,children:e},e)}))]})]}),(0,D.jsxs)(q,{children:[(0,D.jsx)(_,{htmlFor:"price-select",children:"Price / 1 hour"}),(0,D.jsxs)(z,{name:"prices",id:"price-select",children:[(0,D.jsx)("option",{value:"",children:"To $"}),t.map((function(n){var e=n.quantity;return(0,D.jsx)("option",{value:e,children:e},e)}))]})]}),(0,D.jsxs)(q,{children:[(0,D.jsx)(_,{children:"Car mileage / km"}),(0,D.jsxs)(F,{children:[(0,D.jsxs)(C,{children:[(0,D.jsx)(T,{htmlFor:"from",children:"From"}),(0,D.jsx)(E,{type:"number",name:"from",id:"from"})]}),(0,D.jsxs)(C,{children:[(0,D.jsx)(T,{htmlFor:"to",children:"To"}),(0,D.jsx)(E,{type:"number",name:"to",id:"to"})]})]})]}),(0,D.jsx)($,{type:"submit",children:"Search"})]})})},P=[{quantity:"30"},{quantity:"40"},{quantity:"50"},{quantity:"60"},{quantity:"70"},{quantity:"80"}];function A(){var n=(0,v.useState)([]),e=(0,h.Z)(n,2),r=e[0],t=e[1],o=(0,v.useState)(1),i=(0,h.Z)(o,2),a=i[0],c=i[1],s=(0,v.useState)(null),l=(0,h.Z)(s,2),u=l[0],d=l[1],p=(0,v.useState)("pending"),f=(0,h.Z)(p,2),y=f[0],k=f[1],w=a,S=r.map((function(n){return n.make})).filter((function(n,e,r){return r.indexOf(n)===e})).map((function(n){return{name:n}}));(0,v.useEffect)((function(){var n=function(){var n=(0,x.Z)(m().mark((function n(e){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.c)(e);case 3:r=n.sent,t(r),k("resolved"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),d(n.t0),k("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();n(a)}),[a]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(O,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.cars.value.trim();r&&console.log(r);var t=e.prices.value;t&&console.log(t);var o=e.from.value;o&&console.log(o);var i=e.to.value;i&&console.log(i),e.reset()},brands:S,prices:P}),"pending"===y&&(0,D.jsx)(Z.$,{}),"rejected"===y&&(0,D.jsx)("h3",{children:u.message}),"resolved"===y&&(0,D.jsx)(b.h,{cars:r}),a<4&&(0,D.jsx)(j.Z,{onClick:function(){c(w+=1)}})]})}}}]);
//# sourceMappingURL=549.3315d377.chunk.js.map