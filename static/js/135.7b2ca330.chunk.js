"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,s,i){i.r(s),i.d(s,{default:function(){return k}});var a=i(439),t="MovieDetails_title__cUGs9",c="MovieDetails_flex__0hsSL",n="MovieDetails_image__c1FeV",l="MovieDetails_score__p8Kk2",r="MovieDetails_genres__Pnmgt",o="MovieDetails_overview__U5Vnb",d="MovieDetails_text__RHcc4",h="MovieDetails_listLink__Cgi5s",_="MovieDetails_link__U+v+7",v="MovieDetails_linkGoBack__wojGA",m="MovieDetails_border__mQZff",u=i(689),j=i(791),p=i(87),f=i(355),x=i(734),g=i(184),k=function(){var e,s,i,k,N=(0,j.useState)({}),M=(0,a.Z)(N,2),b=M[0],w=M[1],D=(0,u.UO)().movieId,U=(0,u.TH)();if((0,j.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(D,"?api_key=").concat(x.J,"&language=eu-US")).then((function(e){return e.json()})).then((function(e){w(e)}))}),[D]),0!==Object.keys(b).length){var y=b.poster_path,C=null!==(e=b.release_date)&&void 0!==e?e:b.first_air_date,G=C?C.slice(0,4):"",O=b.genres?b.genres.map((function(e){return e.name})).join(", "):"",S=null!==(s=null===(i=U.state)||void 0===i?void 0:i.from)&&void 0!==s?s:"/";return(0,g.jsxs)("div",{children:[(0,g.jsxs)(p.rU,{to:S,className:v,children:[(0,g.jsx)(f.BMs,{style:{marginRight:"10px"}})," Go back"]}),Object.keys(b).length>8?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"".concat(c," ").concat(m),children:[(0,g.jsx)("div",{className:n,children:(0,g.jsx)("img",{src:b.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(y):"https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg",alt:"actor face"})}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("p",{className:t,children:[null!==(k=b.title)&&void 0!==k?k:b.name," (",G,")"]}),(0,g.jsxs)("p",{className:l,children:["Use score: ",Math.round(10*b.vote_average)," %"]}),(0,g.jsx)("p",{className:o,children:"Overview"}),(0,g.jsx)("p",{className:d,children:b.overview}),(0,g.jsx)("p",{className:r,children:"Genres"}),(0,g.jsx)("p",{className:d,children:O})]})]}),(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)("p",{className:d,children:"Additional information"}),(0,g.jsxs)("ul",{className:h,children:[(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"cast",state:{from:S},className:_,children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(p.rU,{to:"reviews",state:{from:S},className:_,children:"Reviews"})})]})]}),(0,g.jsx)(j.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(u.j3,{})})]}):(0,g.jsx)("p",{children:"The resource you requested could not be found."})]})}}}}]);
//# sourceMappingURL=135.7b2ca330.chunk.js.map