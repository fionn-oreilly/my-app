(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),r=s(8),i=s.n(r),o=(s(14),s(2)),l=s(3),u=s(4),h=s(6),j=s(5);s.p,s(15);function d(e){return"Rock"==e.value?Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:Object(a.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.value?Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:Object(a.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.value?Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:Object(a.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var b=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"]},a}return Object(u.a)(s,[{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e==t?this.setState({results:[e,t]}):"RockScissors"==s||"ScissorsPaper"==s||"PaperRock"==s?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}},{key:"renderSquare",value:function(e){var t=this;return Object(a.jsx)(d,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Player score: "+this.state.player}),Object(a.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(a.jsx)("div",{children:"You played "+this.state.results[0]+". Computer played "+this.state.results[1]+"."}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare("Rock"),this.renderSquare("Paper"),this.renderSquare("Scissors")]})]})}}]),s}(c.a.Component),m=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={isGame:!0,username:"",password:""},a.enableGamePage=a.enableGamePage.bind(Object(o.a)(a)),a}return Object(u.a)(s,[{key:"enableGamePage",value:function(){this.setState({isGamePage:!1})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(b,{})}),Object(a.jsxs)("div",{className:"game-info",children:[Object(a.jsx)("div",{}),Object(a.jsx)("ol",{})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]})}}]),s}(c.a.Component),p=(c.a.Component,m),g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.83eec764.chunk.js.map