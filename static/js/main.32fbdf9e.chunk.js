(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(5),c=s(1),n=s(8),r=s(7),l=s(0),o=s(2),h=s.n(o),u=s(6),d=s.n(u);s(15);function b(e){return e.value.includes("Rock")?Object(l.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"rock",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):e.value.includes("Paper")?Object(l.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"paper",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):e.value.includes("Scissors")?Object(l.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"scissors",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var j=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={player:0,computer:0,results:["n_nothing","nothing"],isGame:!0,movesIsDisabled:["Rock","Paper","Scissors","false"]},i.enableGamePage=i.enableGamePage.bind(Object(c.a)(i)),i.switchPage=i.switchPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"checkWinner",value:function(){9!==this.state.player&&9!==this.state.player||this.setState({movesIsDisabled:["Rock","Paper","Scissors","true"]})}},{key:"handleClick",value:function(e){var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e.split("_")[1]===t?this.setState({results:[e,t]}):s.includes("RockScissors")||s.includes("ScissorsPaper")||s.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]}),this.checkWinner()}},{key:"renderSquare",value:function(e){var t=this;return Object(l.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"enableGamePage",value:function(){this.setState({isGame:!1})}},{key:"switchPage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Player score: "+this.state.player}),Object(l.jsx)("div",{children:"Computer score: "+this.state.computer}),Object(l.jsx)("div",{children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[0])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[1])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[2]))]})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.enableGamePage,className:"loginbutton",children:"Next"})})]}),t=Object(l.jsx)("div",{className:"game2",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:this.switchPage,className:"loginbutton",children:"Next"})})});return Object(l.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(h.a.Component);d.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.32fbdf9e.chunk.js.map