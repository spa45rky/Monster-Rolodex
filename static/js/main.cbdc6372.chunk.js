(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(5),s=n.n(c),r=(n(16),n(6)),u=n(7),o=n(10),l=n(9),d=(n(17),n(18),n(1)),m=(n(20),n(21),n(22),n(23),n(3)),p=n(8),f=n.n(p),h=n(11),j=function(e){var t=e.items,n=(e.handleChange,t||[{name:"empty_name",id:0,value:"empty_string",displayText:"default_text"},{name:"empty_name1",id:1,value:"empty_string",displayText:"default_text1"},{name:"empty_name2",id:2,value:"empty_string",displayText:"default_text2"},{name:"empty_name3",id:3,value:"empty_string",displayText:"default_text3"},{name:"empty_name4",id:4,value:"empty_string5",displayText:"default_text4"}]),i=(e.progressCounter,Object(a.useState)(n)),c=Object(m.a)(i,2),s=c[0],r=c[1],u=Object(a.useState)([]),o=Object(m.a)(u,2),l=o[0],p=o[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(h.a,{easing:"easeOutElastic",duration:1e3,loop:!0,delay:240,translateX:"13rem",scale:[.75,.9],children:s.map((function(e,t){return Object(d.jsx)("button",{onClick:function(){return function(e){l.push(s[e].id),p(l);var t=f.a.remove(s,(function(t){return s[e].id!==t.id}));r(t),console.log(l)}(t)},className:"bubble w-100 m-5 h-100 p-3",name:e.name,id:e.id,value:e.value,children:Object(d.jsx)("span",{className:"url-text",children:e.displayText})},t)}))})})},b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(j,{})})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};n(25);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),y()}},[[26,1,2]]]);
//# sourceMappingURL=main.cbdc6372.chunk.js.map