(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(5),c=s(1),r=s(8),n=s(7),l=s(0),o=s(2),h=s.n(o),d=s(6),u=s.n(d);s(15);function b(e){return"Rock"==e.value[0]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.value[1]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.value[2]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var j=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"],isGame:!0,movesIsDisabled:["Rock","Paper","Scissors",!1]},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e==t?this.setState({results:[e,t]}):"RockScissors"==s||"ScissorsPaper"==s||"PaperRock"==s?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}},{key:"renderSquare",value:function(e){var t=this;return Object(l.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"enableGamePage",value:function(){this.setState({isGame:!1})}},{key:"switchPage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Player score: "+this.state.player}),Object(l.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(l.jsx)("div",{children:"You played "+this.state.results[0]+". Computer played "+this.state.results[1]+"."}),Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(this.state.movesIsDisabled),this.renderSquare(this.state.movesIsDisabled),this.renderSquare(this.state.movesIsDisabled)]})]})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{}),Object(l.jsx)("ol",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]}),t=Object(l.jsx)("div",{className:"game2",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.switchPage,className:"loginbutton",children:"Next"})})});return Object(l.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(h.a.Component);u.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.5a7e9165.chunk.js.map