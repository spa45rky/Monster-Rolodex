(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),i=(n(12),n(4)),a=n(5),u=n(7),j=n(6),h=(n(13),n(14),n(0)),m=function(t){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.monster.id+10,"?set=set2&size=180x180")}),Object(h.jsxs)("h2",{children:[" ",t.monster.name," "]}),Object(h.jsx)("p",{children:t.monster.email})]})},d=(n(16),function(t){return Object(h.jsx)("div",{className:"card-list",children:t.monsters.map((function(t){return Object(h.jsx)(m,{monster:t},t.id)}))})}),l=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={monsters:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({monsters:e})}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d,{monsters:this.state.monsters})})}}]),n}(s.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),r(t),o(t)}))};n(17);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.1ade01ac.chunk.js.map