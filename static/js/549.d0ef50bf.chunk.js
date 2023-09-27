"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{1549:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,o,i,a,c,l,s,u,d,p,x,h=t(3433),f=t(9439),m=t(2791),g=t(4390),v=t(2782),j=t(2675),b=t(6518),Z=t(168),y=t(9202),k=y.Z.section(r||(r=(0,Z.Z)(["\n  padding-top: 100px;\n"]))),w=y.Z.form(o||(o=(0,Z.Z)(["\n  display: flex;\n  gap: 18px;\n  justify-content: space-around;\n  width: 859px;\n  height: 74px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),S=y.Z.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),q=y.Z.div(a||(a=(0,Z.Z)(["\n  display: flex;\n"]))),F=y.Z.div(c||(c=(0,Z.Z)(["\n  position: relative;\n"]))),C=y.Z.label(l||(l=(0,Z.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--secondary-text-color);\n"]))),z=y.Z.select(s||(s=(0,Z.Z)(["\n  height: 48px;\n  padding: 14px 18px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--select-color);\n"]))),_=y.Z.option(u||(u=(0,Z.Z)(["\n  color: var(--select-text-color);\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n"]))),T=y.Z.label(d||(d=(0,Z.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 14px;\n"]))),E=y.Z.input(p||(p=(0,Z.Z)(["\n  box-sizing: border-box;\n  width: 160px;\n  height: 48px;\n  padding: 14px 18px;\n  padding-left: 60px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--select-color);\n"]))),M=y.Z.button(x||(x=(0,Z.Z)(["\n  min-width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  align-self: end;\n  border: none;\n  border-radius: 12px;\n  text-align: center;\n  color: var(--button-text-color);\n  background-color: var(--accent-color);\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  transition: background-color var(--tra);\n\n  &:hover {\n    background-color: var(--button-active-color);\n  }\n"]))),$=t(184),D=function(n){var e=n.onSubmit,t=n.brands,r=n.prices;return(0,$.jsx)(k,{children:(0,$.jsxs)(w,{name:"car-search-form",onSubmit:e,children:[(0,$.jsxs)(S,{children:[(0,$.jsx)(C,{htmlFor:"car-select",children:"Car brand"}),(0,$.jsxs)(z,{name:"cars",id:"car-select",children:[(0,$.jsx)("option",{value:"",children:"Enter the text"}),t.map((function(n){var e=n.name;return(0,$.jsx)(_,{value:e,children:e},e)}))]})]}),(0,$.jsxs)(S,{children:[(0,$.jsx)(C,{htmlFor:"price-select",children:"Price / 1 hour"}),(0,$.jsxs)(z,{name:"prices",id:"price-select",children:[(0,$.jsx)("option",{value:"",children:"To $"}),r.map((function(n){var e=n.quantity;return(0,$.jsx)(_,{value:e,children:e},e)}))]})]}),(0,$.jsxs)(S,{children:[(0,$.jsx)(C,{children:"Car mileage / km"}),(0,$.jsxs)(q,{children:[(0,$.jsxs)(F,{children:[(0,$.jsx)(T,{htmlFor:"from",children:"From"}),(0,$.jsx)(E,{type:"number",name:"from",id:"from"})]}),(0,$.jsxs)(F,{children:[(0,$.jsx)(T,{htmlFor:"to",children:"To"}),(0,$.jsx)(E,{type:"number",name:"to",id:"to"})]})]})]}),(0,$.jsx)(M,{type:"submit",children:"Search"}),(0,$.jsx)(M,{type:"reset",children:"Reset"})]})})},O=[{quantity:"30"},{quantity:"40"},{quantity:"50"},{quantity:"60"},{quantity:"70"},{quantity:"80"}];function P(){var n=(0,m.useState)([]),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,m.useState)(1),i=(0,f.Z)(o,2),a=i[0],c=i[1],l=(0,m.useState)(null),s=(0,f.Z)(l,2),u=s[0],d=s[1],p=(0,m.useState)("pending"),x=(0,f.Z)(p,2),Z=x[0],y=x[1],k=a;(0,m.useEffect)((function(){(0,g.c)(a).then((function(n){r(1===a?n:function(e){return[].concat((0,h.Z)(e),(0,h.Z)(n))}),d(null),y("resolved")})).catch((function(n){d(n),y("rejected")}))}),[a]);var w=t.map((function(n){return n.make})).filter((function(n,e,t){return t.indexOf(n)===e})).map((function(n){return{name:n}}));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(D,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.cars.value.trim();t&&console.log(t);var r=e.prices.value;r&&console.log(r);var o=e.from.value;o&&console.log(o);var i=e.to.value;i&&console.log(i),e.reset()},brands:w,prices:O}),"pending"===Z&&(0,$.jsx)(b.$,{}),"rejected"===Z&&(0,$.jsx)("h3",{children:u.message}),"resolved"===Z&&(0,$.jsx)(v.h,{cars:t}),a<4&&(0,$.jsx)(j.Z,{onClick:function(){c(k+=1)}})]})}}}]);
//# sourceMappingURL=549.d0ef50bf.chunk.js.map