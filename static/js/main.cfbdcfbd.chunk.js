(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s(3),c=s(4),n=s(6),i=s(5),o=s(0),l=s(1),u=s.n(l),h=s(8),j=s.n(h);s(15);function d(e){return"Rock"==e.value?Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.value?Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.value?Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var b=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"]},a}return Object(c.a)(s,[{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e==t?this.setState({results:[e,t]}):"RockScissors"==s||"ScissorsPaper"==s||"PaperRock"==s?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}},{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(d,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"Player score: "+this.state.player}),Object(o.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(o.jsx)("div",{children:"You played "+this.state.results[0]+". Computer played "+this.state.results[1]+"."}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare("Rock"),this.renderSquare("Paper"),this.renderSquare("Scissors")]})]})}}]),s}(u.a.Component),m=function(e){Object(n.a)(s,e);var t=Object(i.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={isGame:!0,username:"",password:""},c.enableGamePage=c.enableGamePage.bind(Object(a.a)(c)),c}return Object(c.a)(s,[{key:"enableGamePage",value:function(){return this.setState({isGamePage:!1}),Object(o.jsx)("div",{className:"game",children:"hi"})}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(b,{})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{}),Object(o.jsx)("ol",{})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]})}}]),s}(u.a.Component);u.a.Component;j.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.cfbdcfbd.chunk.js.map