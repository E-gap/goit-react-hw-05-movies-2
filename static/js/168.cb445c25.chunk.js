"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var c=n(439),r=n(791),a="Reviews_author__CqYAZ",i="Reviews_text__EqLvx",s="Reviews_reviewList__uMBar",o=n(689),u=n(734),h=n(184),l=function(){var e=(0,r.useState)([]),t=(0,c.Z)(e,2),n=t[0],l=t[1],f=(0,o.UO)().movieId;return(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=").concat(u.J,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){l(e.results)}))}),[f]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:s,children:n.length>0?n.map((function(e){var t=e.id,n=e.author,c=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{className:a,children:"Author: ".concat(n)}),(0,h.jsx)("p",{className:i,children:c})]},t)})):(0,h.jsx)("p",{className:i,children:"We don't have any reviews for this movie"})})})}},734:function(e,t,n){n.d(t,{J:function(){return c}});var c="1b60c1098299c5cc97f7c1027b35f488"}}]);
//# sourceMappingURL=168.cb445c25.chunk.js.map