(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(39),a=c.n(s),i=c(19),o=(c(49),c(50),c(51),c(7)),l=c(4),j=(c(52),c.p+"static/media/tmovie.ad0fc74a.png"),u=c(0),d=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],b=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=d.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(u.jsx)("div",{ref:t,className:"header",children:Object(u.jsxs)("div",{className:"header__wrap container",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsxs)(o.b,{to:"/",children:[" ",Object(u.jsx)("img",{src:j,alt:""})," "]})}),Object(u.jsx)("ul",{className:"header__nav",children:d.map((function(e,t){return Object(u.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(u.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},m=(c(59),c.p+"static/media/footer-bg.4880e38d.png"),h=function(){return Object(u.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsxs)("div",{className:"footer__content container",children:[Object(u.jsx)("div",{className:"footer__content__logo",children:Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("img",{src:j,alt:""})})})}),Object(u.jsxs)("div",{className:"footer__content__menus",children:[Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),Object(u.jsx)(o.b,{to:"/",children:"Contact us"}),Object(u.jsx)(o.b,{to:"/",children:"About us"})]}),Object(u.jsx)("div",{className:"footer__content__menu"}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"You must watch"}),Object(u.jsx)(o.b,{to:"/",children:"Recent release"}),Object(u.jsx)(o.b,{to:"/",children:"Top IMDB"})]})]})]})})},p=(c(60),function(e){return Object(u.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(u.jsx)(p,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},O=p,x=c(6),f=c.n(x),_=c(10),g=c(9),N=c(105),y=c(103),w=c(106),k=c(104),C=(c(62),function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(u.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(u.jsx)("i",{className:"bx bx-x"})})]})}),T=function(e){var t=Object(n.useState)(!1),c=Object(g.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){s(e.active)}),[e.active]),Object(u.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},L=c(42),I=c.n(L),V=c(43),M=c.n(V),S={baseUrl:"https://api.themoviedb.org/3/",apiKey:"0a9166ff166af8e5d002090cb24c40e3",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},E=I.a.create({baseURL:S.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return M.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:S.apiKey}))}});E.interceptors.request.use(function(){var e=Object(_.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var R=E,q={movie:"movie",tv:"tv"},A={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},B={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},H={getMoviesList:function(e,t){var c="movie/"+A[e];return R.get(c,t)},getTvList:function(e,t){var c="tv/"+B[e];return R.get(c,t)},getVideos:function(e,t){var c=q[e]+"/"+t+"/videos";return R.get(c,{params:{}})},search:function(e,t){var c="search/"+q[e];return R.get(c,t)},detail:function(e,t,c){var n=q[e]+"/"+t;return R.get(n,c)},credits:function(e,t){var c=q[e]+"/"+t+"/credits";return R.get(c,{params:{}})},similar:function(e,t){var c=q[e]+"/"+t+"/similar";return R.get(c,{params:{}})}},U=(c(95),function(e){var t=Object(l.f)(),c=e.item,n=S.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(_.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,H.getVideos(q.movie,c.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(u.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(u.jsx)("h1",{children:"Trending Now..."}),Object(u.jsx)("h2",{className:"title",children:c.title}),Object(u.jsx)("div",{className:"overview",children:c.overview}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(O,{onClick:function(){return t.push("/movie/"+c.id)},children:"Watch now"}),Object(u.jsx)(v,{onClick:r,children:"Watch trailer"})]})]}),Object(u.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(u.jsx)("img",{src:S.w500Image(c.poster_path),alt:""})})]})})}),F=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(u.jsx)(T,{active:!1,id:"modal_".concat(t.id),children:Object(u.jsx)(C,{onClose:function(){return c.current.setAttribute("src","")},children:Object(u.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},J=function(){N.a.use([y.a]);var e=Object(n.useState)([]),t=Object(g.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(_.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,H.getMoviesList(A.popular,{params:t});case 4:c=e.sent,r(c.results.slice(1,8)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"hero-slide",children:[Object(u.jsx)(w.a,{modules:[y.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,autoplay:{delay:3e3},children:c.map((function(e,t){return Object(u.jsx)(k.a,{children:function(t){var c=t.isActive;return Object(u.jsx)(U,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(u.jsx)(F,{item:e},t)}))]})},K=(c(96),c(97),function(e){var t=e.item,c="/"+q[e.category]+"/"+t.id,n=S.w500Image(t.poster_path||t.backdrop_path);return Object(u.jsxs)(o.b,{to:c,children:[Object(u.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsx)(O,{children:Object(u.jsx)("i",{className:"bx bx-play"})})}),Object(u.jsx)("h3",{children:t.title||t.name})]})}),P=function(e){var t=Object(n.useState)([]),c=Object(g.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(_.a)(f.a.mark((function t(){var c,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,H.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,H.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,H.similar(e.category,e.id);case 17:c=t.sent;case 18:s(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsx)("div",{className:"movie-list",children:Object(u.jsx)(w.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(u.jsx)(k.a,{children:Object(u.jsx)(K,{item:t,category:e.category})},c)}))})})},W=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(P,{category:q.movie,type:A.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(P,{category:q.movie,type:A.top_rated})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(P,{category:q.tv,type:B.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(P,{category:q.tv,type:B.top_rated})]})]})]})},z=(c(98),c(28),c(99),c(100),c(101),function(){return Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{path:"/",exact:!0,component:W})})});var D=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{render:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,Object(i.a)({},e)),Object(u.jsx)(z,{}),Object(u.jsx)(h,{})]})}})})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.e06c240d.chunk.js.map