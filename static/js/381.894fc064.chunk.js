"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{6381:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,a=t(3433),o=t(9439),c=t(2791),u=t(763),i=t(4390),s=t(1810),l=t(7966),f=t(1965),d=t(5824),h=t(168),p=t(9202).Z.button(r||(r=(0,h.Z)(["\n  display: block;\n  width: 100px;\n  height: 24px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 150px;\n  border: none;\n  border-radius: 12px;\n  text-align: center;\n  text-decoration: underline;\n  color: var(--accent-color);\n  background-color: transparent;\n  font-family: 'Manrope';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  transition: color var(--tra);\n\n  :hover {\n    color: var(--button-active-color);\n  }\n\n  :focus-visible {\n    text-shadow: 1px 1px 2px var(--accent-color);\n    outline: none;\n  }\n"]))),v=t(184),g=function(e){var n=e.onClick;return(0,v.jsx)(p,{onClick:n,type:"button",children:"Load more"})},x=t(6518),b=t(5580),m=t(3524);function Z(){var e=(0,c.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],h=(0,c.useState)(1),p=(0,o.Z)(h,2),Z=p[0],k=p[1],S=(0,c.useState)(null),j=(0,o.Z)(S,2),w=j[0],D=j[1],z=(0,c.useState)("pending"),C=(0,o.Z)(z,2),E=C[0],M=C[1],F=(0,c.useState)("Enter the text"),I=(0,o.Z)(F,2),L=I[0],O=I[1],_=(0,c.useState)("To $"),y=(0,o.Z)(_,2),A=y[0],R=y[1],T=(0,c.useState)(""),$=(0,o.Z)(T,2),B=$[0],N=$[1],P=(0,c.useState)(""),q=(0,o.Z)(P,2),G=q[0],H=q[1],J=(0,c.useState)(""),K=(0,o.Z)(J,2),Q=K[0],U=K[1],V=(0,c.useState)(""),W=(0,o.Z)(V,2),X=W[0],Y=W[1],ee=(0,c.useState)([]),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,c.useRef)((0,u.debounce)((function(e){return U(e)}),300)).current,oe=(0,c.useRef)((0,u.debounce)((function(e){return Y(e)}),300)).current;(0,c.useEffect)((function(){(0,i.c)(Z).then((function(e){r(1===Z?e:function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))}),D(null),M("resolved")})).catch((function(e){D(e),M("rejected")}))}),[Z]),(0,c.useEffect)((function(){var e=(0,f.zD)(m.AZ);e&&O(e);var n=(0,f.zD)(m.Lg);n&&R(n);var t=(0,f.zD)(m.ev);t&&(N(t),U(t));var r=(0,f.zD)(m.pn);r&&(H(r),Y(r))}),[]),(0,c.useEffect)((function(){0===t.length&&re([]);var e={brand:L,price:A,minMileage:Q,maxMileage:X};re((0,l.B)(t,e))}),[t,L,A,Q,X]),(0,c.useEffect)((function(){return function(){ae.cancel(),oe.cancel()}}),[ae,oe]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.h,{brands:(0,s.T)(t),onFilterChange:function(e,n){switch(e){case"brand":O(n),(0,f.a1)(m.AZ,n);break;case"price":R(Number(n)),(0,f.a1)(m.Lg,Number(n));break;case"min":N(n),ae(n),(0,f.a1)(m.ev,n);break;case"max":H(n),oe(n),(0,f.a1)(m.pn,n);break;default:return}},onFilterReset:function(){O("Enter the text"),R("To $"),N(""),H(""),U(""),Y(""),(0,f.Od)(m.AZ),(0,f.Od)(m.Lg),(0,f.Od)(m.ev),(0,f.Od)(m.pn)},selectedBrand:L,selectedPrice:A,minMileage:B,maxMileage:G}),"pending"===E&&(0,v.jsx)(x.$,{}),"rejected"===E&&(0,v.jsx)("h3",{children:null===w||void 0===w?void 0:w.message}),"resolved"===E&&(0,v.jsx)(d.h,{cars:te,toggleFavorite:function(e){var n,t=null!==(n=(0,f.zD)(m.DI))&&void 0!==n?n:[];if(t.includes(e)){var r=t.findIndex((function(n){return n===e}));-1!==r&&t.splice(r,1),(0,f.a1)(m.DI,t)}else t.push(e),(0,f.a1)(m.DI,t)}}),Z<4&&(0,v.jsx)(g,{onClick:function(){k((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=381.894fc064.chunk.js.map