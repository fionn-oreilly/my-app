(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(5),c=s(1),r=s(8),n=s(7),o=s(0),l=s(2),h=s.n(l),d=s(6),u=s.n(d),b=(s(15),function(e){return"Rock"==e.moves[0]?Object(o.jsx)("button",{disabled:e.isDisabled.value,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.moves[1]?Object(o.jsx)("button",{disabled:e.isDisabled.value,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.moves[2]?Object(o.jsx)("button",{disabled:e.isDisabled.value,className:"square",onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}),j=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"],isDisabled:"true",isGame:!0,moves:["Rock","Paper","Scissors"]},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e==t?this.setState({results:[e,t]}):"RockScissors"==s||"ScissorsPaper"==s||"PaperRock"==s?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}},{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"enableGamePage",value:function(){this.setState({isGame:!1})}},{key:"switchPage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"Player score: "+this.state.player}),Object(o.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(o.jsx)("div",{children:"You played "+this.state.results[0]+". Computer played "+this.state.results[1]+"."}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(this.state),this.renderSquare(this.state),this.renderSquare(this.state)]})]})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{}),Object(o.jsx)("ol",{})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]}),t=Object(o.jsx)("div",{className:"game2",children:Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.switchPage,className:"loginbutton",children:"Next"})})});return Object(o.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(h.a.Component);u.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.aabc6b94.chunk.js.map