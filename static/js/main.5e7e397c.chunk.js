(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(5),c=s(1),n=s(7),r=s(6),o=s(0),l=s(2),h=s.n(l),b=s(8),u=s.n(b);s(15);function d(e){return"Rock"==e.value?Object(o.jsx)("button",{disabled:this.state.isDisabled,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.value?Object(o.jsx)("button",{disabled:this.state.isDisabled,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.value?Object(o.jsx)("button",{disabled:this.state.isDisabled,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var j=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"],isDisabled:!0,isGame:!0},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e==t?this.setState({results:[e,t]}):"RockScissors"==s||"ScissorsPaper"==s||"PaperRock"==s?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}},{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(d,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"Player score: "+this.state.player}),Object(o.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(o.jsx)("div",{children:"You played "+this.state.results[0]+". Computer played "+this.state.results[1]+"."}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare("Rock"),this.renderSquare("Paper"),this.renderSquare("Scissors")]})]})}}]),s}(h.a.Component),m=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={isGame:!0,username:"",password:""},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"enableGamePage",value:function(){this.setState({isGame:!1})}},{key:"switchPage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(j,{})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]}),t=Object(o.jsx)("div",{className:"game2",children:Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.switchPage,className:"loginbutton",children:"Next"})})});return Object(o.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(h.a.Component);u.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.5e7e397c.chunk.js.map