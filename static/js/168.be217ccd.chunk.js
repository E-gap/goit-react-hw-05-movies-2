"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(439),r=n(791),s="Reviews_author__CqYAZ",c="Reviews_text__EqLvx",i="Reviews_reviewList__uMBar",o=n(689),u=n(734),h=n(184),l=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],l=t[1],v=(0,o.UO)().movieId;return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(v,"/reviews?api_key=").concat(u.J,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){l(e.results)}))}),[v]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:i,children:n.length>0?n.map((function(e){var t=e.id,n=e.author,a=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{className:s,children:"Author: ".concat(n)}),(0,h.jsx)("p",{className:c,children:a})]},t)})):(0,h.jsx)("p",{className:c,children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=168.be217ccd.chunk.js.map