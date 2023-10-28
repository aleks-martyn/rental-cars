"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{7496:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,o,i,c,l,a,s,u,d,p,x,h=r(3433),f=r(9439),m=r(2791),v=r(4390),g=function(n){return n.map((function(n){return n.make})).filter((function(n,e,r){return r.indexOf(n)===e}))},b=r(1965),j=r(5824),Z=r(2675),k=r(6518),y=r(3524),w=r(168),S=r(9202),F=S.Z.section(t||(t=(0,w.Z)(["\n  padding-top: 100px;\n"]))),z=S.Z.form(o||(o=(0,w.Z)(["\n  display: flex;\n  gap: 18px;\n  justify-content: space-around;\n  width: 859px;\n  height: 74px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),C=S.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),_=S.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n"]))),T=S.Z.div(l||(l=(0,w.Z)(["\n  position: relative;\n"]))),E=S.Z.label(a||(a=(0,w.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--secondary-text-color);\n"]))),M=S.Z.select(s||(s=(0,w.Z)(["\n  height: 48px;\n  padding: 14px 18px;\n  border: none;\n  border-radius: 14px;\n  background-color: var(--select-color);\n"]))),$=S.Z.option(u||(u=(0,w.Z)(["\n  color: var(--select-text-color);\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n"]))),D=S.Z.label(d||(d=(0,w.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 14px;\n"]))),H=S.Z.input(p||(p=(0,w.Z)(["\n  box-sizing: border-box;\n  width: 160px;\n  height: 48px;\n  padding: 14px 18px;\n  padding-left: 60px;\n  border: none;\n  border-right: 1px solid ",";\n  border-radius: ",";\n  background-color: var(--select-color);\n"])),(function(n){return function(n){return"from"===n?"var(--input-border-color)":"none"}(n.name)}),(function(n){return function(n){return"from"===n?"14px 0 0 14px":"0 14px 14px 0"}(n.name)})),I=S.Z.button(x||(x=(0,w.Z)(["\n  min-width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  align-self: end;\n  border: none;\n  border-radius: 12px;\n  text-align: center;\n  color: var(--button-text-color);\n  background-color: var(--accent-color);\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  transition: background-color var(--tra);\n\n  &:hover {\n    background-color: var(--button-active-color);\n  }\n"]))),O=r(184),P=function(n){var e=n.onSubmit,r=n.brands;return(0,O.jsx)(F,{children:(0,O.jsxs)(z,{name:"car-search-form",onSubmit:e,children:[(0,O.jsxs)(C,{children:[(0,O.jsx)(E,{htmlFor:"car-select",children:"Car brand"}),(0,O.jsxs)(M,{name:"cars",id:"car-select",children:[(0,O.jsx)("option",{value:"",children:"Enter the text"}),r.map((function(n){return(0,O.jsx)($,{value:n,children:n},n)}))]})]}),(0,O.jsxs)(C,{children:[(0,O.jsx)(E,{htmlFor:"price-select",children:"Price / 1 hour"}),(0,O.jsxs)(M,{name:"prices",id:"price-select",children:[(0,O.jsx)("option",{value:"",children:"To $"}),y.H.map((function(n){return(0,O.jsx)($,{value:n,children:n},n)}))]})]}),(0,O.jsxs)(C,{children:[(0,O.jsx)(E,{children:"Car mileage / km"}),(0,O.jsxs)(_,{children:[(0,O.jsxs)(T,{children:[(0,O.jsx)(D,{htmlFor:"from",children:"From"}),(0,O.jsx)(H,{type:"number",min:0,name:"from",id:"from"})]}),(0,O.jsxs)(T,{children:[(0,O.jsx)(D,{htmlFor:"to",children:"To"}),(0,O.jsx)(H,{type:"number",min:0,name:"to",id:"to"})]})]})]}),(0,O.jsx)(I,{type:"submit",children:"Search"}),(0,O.jsx)(I,{type:"reset",children:"Reset"})]})})};function R(){var n=(0,m.useState)([]),e=(0,f.Z)(n,2),r=e[0],t=e[1],o=(0,m.useState)(1),i=(0,f.Z)(o,2),c=i[0],l=i[1],a=(0,m.useState)(null),s=(0,f.Z)(a,2),u=s[0],d=s[1],p=(0,m.useState)("pending"),x=(0,f.Z)(p,2),w=x[0],S=x[1];(0,m.useEffect)((function(){(0,v.c)(c).then((function(n){t(1===c?n:function(e){return[].concat((0,h.Z)(e),(0,h.Z)(n))}),d(null),S("resolved")})).catch((function(n){d(n),S("rejected")}))}),[c]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(P,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,r=e.cars.value.trim();r&&console.log(r);var t=e.prices.value;t&&console.log(t);var o=e.from.value;o&&console.log(o);var i=e.to.value;i&&console.log(i),e.reset()},brands:g(r)}),"pending"===w&&(0,O.jsx)(k.$,{}),"rejected"===w&&(0,O.jsx)("h3",{children:u.message}),"resolved"===w&&(0,O.jsx)(j.h,{cars:r,toggleFavorite:function(n){var e=(0,b.z)(y.k);if(null===e||void 0===e?void 0:e.find((function(e){return e===n}))){var r=null===e||void 0===e?void 0:e.findIndex((function(e){return e===n}));-1!==r&&(null===e||void 0===e||e.splice(r,1)),(0,b.a)(y.k,e)}else null===e||void 0===e||e.push(n),(0,b.a)(y.k,e)}}),c<4&&(0,O.jsx)(Z.Z,{onClick:function(){l((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=496.240a05b0.chunk.js.map