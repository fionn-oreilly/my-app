(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,s,t){},9:function(e,s,t){"use strict";t.r(s);var a=t(4),i=t(5),c=t(1),n=t(8),r=t(7),l=t(0),o=t(2),h=t.n(o),d=t(6),u=t.n(d);t(15);function b(e){return"Rock"==e.value[0]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):"Paper"==e.value[1]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):"Scissors"==e.value[2]?Object(l.jsx)("button",{disabled:e.value[3],className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var j=function(e){Object(n.a)(t,e);var s=Object(r.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=s.call(this,e)).state={player:0,computer:0,results:["nothing","nothing"],isGame:!0,movesIsDisabled:["Rock","Paper","Scissors","false"]},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(t,[{key:"handleClick",value:function(e){var s=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],t=e+s;e==s?this.setState({results:[e,s]}):t.includes("RockScissors")||t.includes("ScissorsPaper")||t.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,s]}):this.setState({computer:this.state.computer+1,results:[e,s]})}},{key:"renderSquare",value:function(e){var s=this;return Object(l.jsx)(b,{value:e,onClick:function(){return s.handleClick(e)}})}},{key:"enableGamePage",value:function(){this.setState({isGame:!1})}},{key:"switchPage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Player score: "+this.state.player}),Object(l.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(l.jsx)("div",{children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(this.state.movesIsDisabled[3]+"_"+this.state.movesIsDisabled[0]),this.renderSquare(this.state.movesIsDisabled[3]+"_"+this.state.movesIsDisabled[1]),this.renderSquare(this.state.movesIsDisabled[3]+"_"+this.state.movesIsDisabled[2])]})]})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{}),Object(l.jsx)("ol",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]}),s=Object(l.jsx)("div",{className:"game2",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.switchPage,className:"loginbutton",children:"Next"})})});return Object(l.jsx)("div",{children:this.state.isGame?e:s})}}]),t}(h.a.Component);u.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.bb922a70.chunk.js.map