(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var i=s(4),a=s(5),c=s(1),n=s(8),r=s(7),l=s(0),o=s(2),d=s.n(o),u=s(6),h=s.n(u);s(15),s(16),s(17);function b(e){return e.value.includes("Rock")?Object(l.jsx)("button",{class:"btn btn-outline-primary mr-1",disabled:e.value.includes("true"),"alt-text":"rock",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"300",height:"300"})}):e.value.includes("Paper")?Object(l.jsx)("button",{class:"btn btn-outline-primary mr-1",disabled:e.value.includes("true"),"alt-text":"paper",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"300",height:"300"})}):e.value.includes("Scissors")?Object(l.jsx)("button",{class:"btn btn-outline-primary mr-1",disabled:e.value.includes("true"),"alt-text":"scissors",className:"square",onClick:e.onClick,children:Object(l.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"300",height:"300"})}):void 0}var j=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={player:0,computer:0,results:["n_nothing","nothing"],isGame:!0,movesIsDisabled:["Rock","Paper","Scissors","false"]},a.gamePage=a.gamePage.bind(Object(c.a)(a)),a.loginPage=a.loginPage.bind(Object(c.a)(a)),a}return Object(a.a)(s,[{key:"handleClick",value:function(e){if(10===this.state.player||10===this.state.computer)this.setState({movesIsDisabled:["Rock","Paper","Scissors","true"]});else{var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e.split("_")[1]===t?this.setState({results:[e,t]}):s.includes("RockScissors")||s.includes("ScissorsPaper")||s.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}}},{key:"renderSquare",value:function(e){var t=this;return Object(l.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"loginPage",value:function(){this.setState({isGame:!1})}},{key:"gamePage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(l.jsx)("div",{class:"d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{class:"d-flex justify-content-center",style:"margin-top:100px",children:Object(l.jsx)("h2",{class:"text-primary",children:"Rock Paper Scissors!"})}),Object(l.jsxs)("div",{className:"game-board",children:[Object(l.jsxs)("div",{class:"d-flex justify-content-center",children:[this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[0])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[1])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[2]))]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"d-flex justify-content-center",children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(l.jsx)("div",{class:"d-flex justify-content-center",children:"Computer score: "+this.state.computer}),Object(l.jsx)("div",{class:"d-flex justify-content-center",children:"Player score: "+this.state.player})]})]}),Object(l.jsx)("div",{class:"d-flex justify-content-center",children:Object(l.jsx)("button",{onClick:this.loginPage,className:"loginbutton",children:"Login"})})]})}),t=Object(l.jsx)("div",{className:"game2",children:Object(l.jsx)("div",{class:"d-flex justify-content-center",children:Object(l.jsx)("button",{onClick:this.gamePage,className:"loginbutton",children:"Play"})})});return Object(l.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(d.a.Component);h.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.0bf5b3b6.chunk.js.map