(this["webpackJsonp11-redux"]=this["webpackJsonp11-redux"]||[]).push([[0],{19:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t(2),o=t.n(r),i=t(3),u=t(7),s=t(8),a=t(10),d=t(9),p="INCREMENT",l="DECREMENT",b=function(){return{type:p}},j=function(){return{type:l}},h=t(1),f=function(n){Object(a.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(u.a)(this,t);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).incrementIfOdd=function(){n.props.count%2!==0&&n.props.increment()},n.incrementAsync=function(){setTimeout(n.props.increment,1e3)},n}return Object(s.a)(t,[{key:"render",value:function(){return Object(h.jsxs)("p",{children:["Clickeado: ",this.props.count," veces",Object(h.jsx)("button",{onClick:function(){},children:"+ "}),Object(h.jsx)("button",{onClick:function(){},children:"-  "}),Object(h.jsx)("button",{onClick:this.incrementIfOdd,children:"incrementa si es impar"}),Object(h.jsx)("button",{onClick:this.incrementAsync,children:"Incrementa despues de un segundos"})]})}}]),t}(c.Component),m=Object(i.b)((function(n){return{count:n.count}}),{increment:b,decrement:j})(f),O={count:0},v=createStore((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return{count:n.count+1};case l:return{count:n.count-1};default:return n}}));o.a.render(Object(h.jsx)(i.a,{store:v,children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5a8b0790.chunk.js.map