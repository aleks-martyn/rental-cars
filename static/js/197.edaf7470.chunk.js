"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{6197:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(9439),u=n(2791),a=n(763),c=n(4390),s=n(5824),l=n(7762),i=n(1810),o=n(7966),f=n(1965),d=n(2675),h=n(6518),v=n(5580),g=n(3524),m=n(184);function Z(){var e=(0,u.useState)([]),t=(0,r.Z)(e,2),n=t[0],Z=t[1],b=(0,u.useState)([]),S=(0,r.Z)(b,2),k=S[0],p=S[1],x=(0,u.useState)([]),j=(0,r.Z)(x,2),z=j[0],D=j[1],E=(0,u.useState)("Enter the text"),R=(0,r.Z)(E,2),w=R[0],I=R[1],C=(0,u.useState)("To $"),F=(0,r.Z)(C,2),M=F[0],O=F[1],_=(0,u.useState)(""),K=(0,r.Z)(_,2),T=K[0],$=K[1],y=(0,u.useState)(""),B=(0,r.Z)(y,2),N=B[0],P=B[1],U=(0,u.useState)(null),q=(0,r.Z)(U,2),A=q[0],G=q[1],H=(0,u.useState)("pending"),J=(0,r.Z)(H,2),L=J[0],Q=J[1],V=(0,u.useState)([]),W=(0,r.Z)(V,2),X=W[0],Y=W[1],ee=(0,u.useState)(""),te=(0,r.Z)(ee,2),ne=te[0],re=te[1],ue=(0,u.useState)(""),ae=(0,r.Z)(ue,2),ce=ae[0],se=ae[1],le=(0,u.useRef)((0,a.debounce)((function(e){return re(e)}),300)).current,ie=(0,u.useRef)((0,a.debounce)((function(e){return se(e)}),300)).current;(0,u.useEffect)((function(){var e;(0,c.o)().then((function(e){Z(e),G(null),Q("resolved")})).catch((function(e){G(e),Q("rejected")})),p(null!==(e=(0,f.zD)(g.DI))&&void 0!==e?e:[])}),[]),(0,u.useEffect)((function(){D(function(e,t){if(!t||!e||0===e.length||0===t.length)return[];var n,r=[],u=(0,l.Z)(t);try{for(u.s();!(n=u.n()).done;){var a=n.value;e.includes(a.id)&&r.push(a)}}catch(c){u.e(c)}finally{u.f()}return r}(k,n))}),[n,k]),(0,u.useEffect)((function(){var e=(0,f.zD)(g.Il);e&&I(e);var t=(0,f.zD)(g.cl);t&&O(t);var n=(0,f.zD)(g.Rz);n&&($(n),re(n));var r=(0,f.zD)(g.Kr);r&&(P(r),se(r))}),[]),(0,u.useEffect)((function(){0===z.length&&Y([]);var e={brand:w,price:M,minMileage:ne,maxMileage:ce};Y((0,o.B)(z,e))}),[z,w,M,ne,ce]),(0,u.useEffect)((function(){return function(){le.cancel(),ie.cancel()}}),[le,ie]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.h,{brands:(0,i.T)(z),onFilterChange:function(e,t){switch(e){case"brand":I(t),(0,f.a1)(g.Il,t);break;case"price":O(Number(t)),(0,f.a1)(g.cl,Number(t));break;case"min":$(t),le(t),(0,f.a1)(g.Rz,t);break;case"max":P(t),ie(t),(0,f.a1)(g.Kr,t);break;default:return}},onFilterReset:function(){I("Enter the text"),O("To $"),$(""),P(""),re(""),se(""),(0,f.Od)(g.Il),(0,f.Od)(g.cl),(0,f.Od)(g.Rz),(0,f.Od)(g.Kr)},selectedBrand:w,selectedPrice:M,minMileage:T,maxMileage:N}),"pending"===L&&(0,m.jsx)(h.$,{}),"rejected"===L&&(0,m.jsx)("h3",{children:null===A||void 0===A?void 0:A.message}),"resolved"===L&&X.length>0&&(0,m.jsx)(s.h,{cars:X,toggleFavorite:function(e){var t=k.filter((function(t){return t!==e}));p(t),(0,f.a1)(g.DI,t)}}),(0,m.jsx)(d.Z,{onClick:function(){return console.log("Under development")}})]})}}}]);
//# sourceMappingURL=197.edaf7470.chunk.js.map