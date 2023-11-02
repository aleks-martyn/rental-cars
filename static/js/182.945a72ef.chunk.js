"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[182],{2182:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,o,i,l,a,c,u,d,s,p,x,f,h,g,v,Z,b,m,j=t(9439),w=t(2791),k=t(4390),y=t(5824),C=t(7762),z=function(n,e){if(e&&n&&0!==n.length){var t,r=[],o=(0,C.Z)(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;n.includes(i.id)&&r.push(i)}}catch(l){o.e(l)}finally{o.f()}return r}},S=t(1810),T=t(1965),F=t(2675),V=t(6518),D=t(4164),I=t(168),M=t(9202),E=t(5172),O=t(5678),R=M.Z.div(r||(r=(0,I.Z)(["\n  display: flex;\n  width: ",";\n  gap: 8px;\n  flex-direction: column;\n  justify-content: space-between;\n"])),(function(n){return function(n){return"brand"===n?"224px":"125px"}(n.id)})),K=M.Z.p(o||(o=(0,I.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--secondary-text-color);\n"]))),P=M.Z.div(i||(i=(0,I.Z)(["\n  position: relative;\n"]))),_=M.Z.div(l||(l=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-radius: 14px;\n  background-color: var(--select-color);\n  cursor: pointer;\n"]))),B=M.Z.span(a||(a=(0,I.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n"]))),L=(0,M.Z)(E.Z)(c||(c=(0,I.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),$=(0,M.Z)(O.Z)(u||(u=(0,I.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),A=M.Z.div(d||(d=(0,I.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ",";\n"])),(function(n){return"true"===n.isToggleOn?"block":"none"})),H=M.Z.div(s||(s=(0,I.Z)(["\n  position: absolute;\n  border: 1px solid var(--select-border-color);\n  border-radius: 14px;\n  left: ","px;\n  width: ","px;\n  top: ","px;\n  background-color: var(--background-color);\n  box-shadow: 0 4px 36px var(--select-shadow-color);\n  overflow: hidden;\n"])),(function(n){return null===n||void 0===n?void 0:n.left}),(function(n){return null===n||void 0===n?void 0:n.width}),(function(n){return null===n||void 0===n?void 0:n.top})),U=M.Z.div(p||(p=(0,I.Z)(["\n  cursor: pointer;\n  padding: 8px 14px;\n  color: ",";\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n\n  &:hover {\n    color: var(--button-text-color);\n    background-color: var(--accent-color);\n  }\n"])),(function(n){return n.item===n.currentValue?"var(--primary-text-color)":"var(--select-text-color)"})),W=t(184),q=document.getElementById("select-body-root"),G=function(n){var e=n.title,t=n.id,r=n.items,o=n.onValueChange,i=n.currentValue,l=(0,w.useState)(!1),a=(0,j.Z)(l,2),c=a[0],u=a[1],d=(0,w.useState)(null),s=(0,j.Z)(d,2),p=s[0],x=s[1],f=(0,w.useState)(null),h=(0,j.Z)(f,2),g=h[0],v=h[1],Z=(0,w.useState)(null),b=(0,j.Z)(Z,2),m=b[0],k=b[1],y=(0,w.useState)(null),C=(0,j.Z)(y,2),z=C[0],S=C[1],T=g+z+4;return(0,W.jsxs)(R,{id:t,children:[(0,W.jsx)(K,{children:e}),(0,W.jsxs)(P,{onClick:function(n){x(n.currentTarget.offsetLeft),v(n.currentTarget.offsetTop),k(n.currentTarget.offsetWidth),S(n.currentTarget.offsetHeight)},children:[(0,W.jsxs)(_,{onClick:function(){u((function(n){return!n}))},children:[(0,W.jsx)(B,{children:i}),c?(0,W.jsx)($,{}):(0,W.jsx)(L,{})]}),(0,D.createPortal)((0,W.jsx)(A,{isToggleOn:c.toString(),onClick:function(n){n.currentTarget===n.target&&u(!1)},children:(0,W.jsx)(H,{left:p,top:T,width:m,children:null===r||void 0===r?void 0:r.map((function(n){return(0,W.jsx)(U,{tabIndex:1,currentValue:i,item:n,onClick:function(n){var e=n.target.textContent;o(t,e),u(!1)},children:n},n)}))})}),q)]})]})},J=M.Z.div(x||(x=(0,I.Z)(["\n  position: relative;\n"]))),N=M.Z.label(f||(f=(0,I.Z)(["\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n"]))),Q=M.Z.input(h||(h=(0,I.Z)(["\n  box-sizing: border-box;\n  width: 160px;\n  height: 48px;\n  padding: 14px 18px;\n  padding-left: 60px;\n  border: none;\n  border-right: 1px solid ",";\n  border-radius: ",";\n  background-color: var(--select-color);\n  color: var(--primary-text-color);\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n"])),(function(n){return function(n){return"min"===n?"var(--input-border-color)":"none"}(n.id)}),(function(n){return function(n){return"min"===n?"14px 0 0 14px":"0 14px 14px 0"}(n.id)})),X=function(n){var e=n.id,t=n.label,r=n.currentValue,o=n.onFilterChange;return(0,W.jsxs)(J,{children:[(0,W.jsx)(N,{htmlFor:e,children:t}),(0,W.jsx)(Q,{type:"number",min:0,id:e,value:r,onChange:function(n){var e=n.target,t=e.id,r=e.value;o(t,r)}})]})},Y=t(3524),nn=M.Z.div(g||(g=(0,I.Z)(["\n  padding-top: 100px;\n  display: flex;\n  gap: 18px;\n  justify-content: space-around;\n  width: 859px;\n  height: 74px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),en=M.Z.div(v||(v=(0,I.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),tn=M.Z.label(Z||(Z=(0,I.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--secondary-text-color);\n"]))),rn=M.Z.div(b||(b=(0,I.Z)(["\n  display: flex;\n"]))),on=M.Z.button(m||(m=(0,I.Z)(["\n  min-width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  align-self: end;\n  border: none;\n  border-radius: 12px;\n  text-align: center;\n  color: var(--button-text-color);\n  background-color: var(--accent-color);\n  font-family: 'Manrope';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  transition: background-color var(--tra);\n\n  &:hover {\n    background-color: var(--button-active-color);\n  }\n"]))),ln=function(n){var e=n.brands,t=n.onFilterChange,r=n.onFilterReset,o=n.selectedBrand,i=n.selectedPrice,l=n.minMileage,a=n.maxMileage;return(0,W.jsxs)(nn,{children:[(0,W.jsx)(G,{title:"Car brand",id:"brand",items:e,onValueChange:t,currentValue:o}),(0,W.jsx)(G,{title:"Price / 1 hour",id:"price",items:Y.Hj,onValueChange:t,currentValue:i}),(0,W.jsxs)(en,{children:[(0,W.jsx)(tn,{children:"Car mileage / km"}),(0,W.jsxs)(rn,{children:[(0,W.jsx)(X,{id:"min",label:"From",currentValue:l,onFilterChange:t}),(0,W.jsx)(X,{id:"max",label:"To",currentValue:a,onFilterChange:t})]})]}),(0,W.jsx)(on,{type:"button",onClick:r,children:"Reset"})]})};function an(){var n=(0,w.useState)([]),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=(0,w.useState)([]),i=(0,j.Z)(o,2),l=i[0],a=i[1],c=(0,w.useState)("Enter the text"),u=(0,j.Z)(c,2),d=u[0],s=u[1],p=(0,w.useState)("To $"),x=(0,j.Z)(p,2),f=x[0],h=x[1],g=(0,w.useState)(""),v=(0,j.Z)(g,2),Z=v[0],b=v[1],m=(0,w.useState)(""),C=(0,j.Z)(m,2),D=C[0],I=C[1],M=(0,w.useState)(null),E=(0,j.Z)(M,2),O=E[0],R=E[1],K=(0,w.useState)("pending"),P=(0,j.Z)(K,2),_=P[0],B=P[1];(0,w.useEffect)((function(){(0,k.o)().then((function(n){r(n),R(null),B("resolved")})).catch((function(n){R(n),B("rejected")}))}),[]),(0,w.useEffect)((function(){var n,e=null!==(n=(0,T.zD)(Y.DI))&&void 0!==n?n:[];a(z(e,t)),R(null),B("resolved")}),[t]),(0,w.useEffect)((function(){var n=(0,T.zD)(Y.Il);n&&s(n);var e=(0,T.zD)(Y.cl);e&&h(e);var t=(0,T.zD)(Y.Rz);t&&b(t);var r=(0,T.zD)(Y.Kr);r&&I(r)}),[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ln,{brands:(0,S.T)(l),onFilterChange:function(n,e){switch(n){case"brand":s(e),(0,T.a1)(Y.Il,e);break;case"price":h(e),(0,T.a1)(Y.cl,e);break;case"min":b(e),(0,T.a1)(Y.Rz,e);break;case"max":I(e),(0,T.a1)(Y.Kr,e);break;default:return}},onFilterReset:function(){s("Enter the text"),h("To $"),b(""),I(""),(0,T.Od)(Y.Il),(0,T.Od)(Y.cl),(0,T.Od)(Y.Rz),(0,T.Od)(Y.Kr)},selectedBrand:d,selectedPrice:f,minMileage:Z,maxMileage:D}),"pending"===_&&(0,W.jsx)(V.$,{}),"rejected"===_&&(0,W.jsx)("h3",{children:O.message}),"resolved"===_&&(0,W.jsx)(y.h,{cars:l,toggleFavorite:function(n){var e,r=null!==(e=(0,T.zD)(Y.DI))&&void 0!==e?e:[];if(null===r||void 0===r?void 0:r.find((function(e){return e===n}))){var o=null===r||void 0===r?void 0:r.findIndex((function(e){return e===n}));-1!==o&&(null===r||void 0===r||r.splice(o,1)),(0,T.a1)(Y.DI,r),a(z(r,t))}}}),(0,W.jsx)(F.Z,{onClick:function(){return console.log("Under development")}})]})}},5172:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),l=(0,o.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");e.Z=l},5678:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),l=(0,o.default)((0,i.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");e.Z=l}}]);
//# sourceMappingURL=182.945a72ef.chunk.js.map