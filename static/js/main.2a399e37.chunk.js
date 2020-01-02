(this["webpackJsonpkyle-harman-portfolio"]=this["webpackJsonpkyle-harman-portfolio"]||[]).push([[0],{17:function(n,e,t){n.exports=t(33)},22:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(10),c=t.n(i),o=(t(22),t(3)),l=t(14),u=t(1),d=t(2);function m(){var n=Object(u.a)(["\n\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n  \n  &:focus {\n    outline: none;\n  }\n\n  div:first-child {\n    width: 2rem;\n    transform: ","; \n    \n  }\n  div:nth-child(2) {\n    width: 1.5rem;\n    opacity: ",";\n  }\n  div:last-child {\n    width: ",";\n    transform: ","; \n  }\n  \n  div {\n    height: 2px;\n    /* background-color: ","; */\n    background-color: #000;\n    transition: all 0.3s linear;\n  }\n"]);return m=function(){return n},n}var s=d.a.button(m(),(function(n){return n.active?"translateY(10px) rotate(-45deg)":null}),(function(n){return n.active?"0":"1"}),(function(n){return n.active?"2rem":"1rem"}),(function(n){return n.active?"translateY(-10px) rotate(45deg)":null}),(function(n){return n.active?"#fff":"#000"}));function f(n){return r.a.createElement(s,{onClick:n.clicked,active:n.active},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function p(){var n=Object(u.a)(["\n    text-decoration: none;\n    font-weight: 700;\n    font-size: 5rem;\n    margin: 0.5rem;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: black;\n    color: white;\n    transition: all 0.3s ease-in-out;\n    \n    &:hover {\n        background: url(",");\n        background-size: cover;\n        background-position: center;\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-stroke-width: 0px;\n        color: transparent;\n    }\n\n   @media (max-width: 768px) {\n        font-size: 4rem;\n        -webkit-text-stroke-width: 0px;\n        background: url(",");\n        background-size: cover;\n        background-position: center;\n        background-clip: text;\n        -webkit-background-clip: text;\n        color: transparent;\n   } \n\n   @media (max-width: 425px) {\n        font-size: 3rem;\n   } \n"]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.5s ease-in-out;\n  transform: ",";\n  overflow: clip;\n\n    div {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        top: 45vh;\n        right: 10px;\n        \n    }\n\n    p {\n        transform: rotate(90deg); \n    }\n\n    ul {\n        margin: 10px;\n        padding: 0;\n        text-decoration: none;\n        list-style: none;\n\n        & li {\n        margin: 10px;\n        }\n    }\n\n    @media (max-width: 425px) {\n\n        div {\n            top: 90vh;\n            width: 100%;\n        }\n\n        ul { display: flex; }\n        p { display: none; }\n    }\n"]);return h=function(){return n},n}var b=d.a.nav(h(),(function(n){return n.active?"translateX(0%)":"translateX(-100%)"})),v=Object(d.a)(o.a)(p(),(function(n){return n.background}),(function(n){return n.background})),g=function(n){return r.a.createElement(b,{active:n.active,onClick:n.clicked},r.a.createElement(v,{to:"/",background:"https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80"},"Home."),r.a.createElement(v,{to:"/about",background:"https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},"About."),r.a.createElement(v,{to:"/projects",background:"https://images.unsplash.com/photo-1565855991995-7a5ceb19ee95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},"Projects."),r.a.createElement(v,{to:"/contact",background:"https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},"Contact."),r.a.createElement("div",null,r.a.createElement("p",null,"Connect "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{to:"#"},r.a.createElement("i",{className:"fab fa-github fa-lg"}))),r.a.createElement("li",null,r.a.createElement(o.a,{to:"#"},r.a.createElement("i",{className:"fab fa-linkedin-in fa-lg"}))))))};function k(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 30px;\n    \n"]);return k=function(){return n},n}var E=d.a.nav(k());function x(n){return r.a.createElement("header",null,r.a.createElement(E,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"harman.")),r.a.createElement(g,{active:n.active,clicked:n.clicked}),r.a.createElement(f,{clicked:n.clicked,active:n.active})))}var w=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1];return r.a.createElement("div",null,r.a.createElement(x,{clicked:function(){i(!t)},active:t}))};function y(){return r.a.createElement("div",null,r.a.createElement("h1",null,"welcome"))}function j(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"))}function O(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"))}function z(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(o.b,null,r.a.createElement(y,{path:"/"}),r.a.createElement(j,{path:"/about"}),r.a.createElement(O,{path:"/projects"}),r.a.createElement(z,{path:"/contact"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2a399e37.chunk.js.map