(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var i=s(4),a=s(5),c=s(1),n=s(8),l=s(7),r=s(0),o=s(2),u=s.n(o),d=s(6),h=s.n(d);s(15),s(16),s(17);function b(e){return e.value.includes("Rock")?Object(r.jsx)("button",{class:"btn btn-outline-primary mx-5",disabled:e.value.includes("true"),className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"200",height:"200"})}):e.value.includes("Paper")?Object(r.jsx)("button",{class:"btn btn-outline-primary mx-5",disabled:e.value.includes("true"),className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"200",height:"200"})}):e.value.includes("Scissors")?Object(r.jsx)("button",{class:"btn btn-outline-primary mx-5",disabled:e.value.includes("true"),className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"200",height:"200"})}):void 0}var j=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={player:0,computer:0,results:["n_nothing","nothing"],isGame:!0,movesIsDisabled:["Rock","Paper","Scissors","false"]},a.gamePage=a.gamePage.bind(Object(c.a)(a)),a.loginPage=a.loginPage.bind(Object(c.a)(a)),a.playAgain=a.playAgain.bind(Object(c.a)(a)),a}return Object(a.a)(s,[{key:"handleClick",value:function(e){if(10===this.state.player||10===this.state.computer)this.setState({movesIsDisabled:["Rock","Paper","Scissors","true"]});else{var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e.split("_")[1]===t?this.setState({results:[e,t]}):s.includes("RockScissors")||s.includes("ScissorsPaper")||s.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}}},{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"loginPage",value:function(){this.setState({isGame:!1})}},{key:"gamePage",value:function(){this.setState({isGame:!0})}},{key:"checkWinner",value:function(){return 10===this.state.player?Object(r.jsx)("div",{class:"d-flex justify-content-center text-success font-weight-bold",children:"You win!"}):10===this.state.computer?Object(r.jsx)("div",{class:"d-flex justify-content-center text-danger font-weight-bold",children:"Computer wins."}):void 0}},{key:"playAgain",value:function(){return this.setState({player:0,computer:0,results:["n_nothing","nothing"],movesIsDisabled:["Rock","Paper","Scissors","false"]}),Object(r.jsx)(s,{})}},{key:"render",value:function(){var e=Object(r.jsx)("div",{class:"d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{class:"d-flex justify-content-center mt-1",children:Object(r.jsx)("h2",{class:"text-primary",children:"Rock Paper Scissors!"})}),Object(r.jsxs)("div",{className:"game-board",children:[Object(r.jsxs)("div",{class:"d-flex justify-content-center",children:[this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[0])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[1])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[2]))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"Computer score: "+this.state.computer}),Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"Player score: "+this.state.player}),this.checkWinner()]})]}),Object(r.jsxs)("div",{class:"d-flex justify-content-center",children:[Object(r.jsx)("button",{onClick:this.loginPage,className:"loginbutton",children:"Login"}),Object(r.jsx)("button",{onClick:this.playAgain,className:"resetbutton",children:"Play Again"})]})]})}),t=Object(r.jsx)("div",{className:"game2",children:Object(r.jsx)("div",{class:"d-flex justify-content-center",children:Object(r.jsx)("button",{onClick:this.gamePage,className:"loginbutton",children:"Play"})})});return Object(r.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(u.a.Component);h.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.81c7ebac.chunk.js.map