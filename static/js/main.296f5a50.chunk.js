(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var a=s(4),i=s(5),c=s(1),n=s(8),l=s(7),r=s(0),o=s(2),d=s.n(o),u=s(6),h=s.n(u);s(15),s(16),s(17);function j(e){return e.value.includes("Rock")?Object(r.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"rock",className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"100",height:"100"})}):e.value.includes("Paper")?Object(r.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"paper",className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"100",height:"100"})}):e.value.includes("Scissors")?Object(r.jsx)("button",{disabled:e.value.includes("true"),"alt-text":"scissors",className:"square",onClick:e.onClick,children:Object(r.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"100",height:"100"})}):void 0}var b=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).state={player:0,computer:0,results:["n_nothing","nothing"],isGame:!1,movesIsDisabled:["Rock","Paper","Scissors","false"]},i.gamePage=i.gamePage.bind(Object(c.a)(i)),i.loginPage=i.loginPage.bind(Object(c.a)(i)),i}return Object(i.a)(s,[{key:"handleClick",value:function(e){if(10===this.state.player||10===this.state.computer)this.setState({movesIsDisabled:["Rock","Paper","Scissors","true"]});else{var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e.split("_")[1]===t?this.setState({results:[e,t]}):s.includes("RockScissors")||s.includes("ScissorsPaper")||s.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computer+1,results:[e,t]})}}},{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(j,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"loginPage",value:function(){this.setState({isGame:!1})}},{key:"gamePage",value:function(){this.setState({isGame:!0})}},{key:"render",value:function(){var e=Object(r.jsx)("div",{class:"d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"Player score: "+this.state.player}),Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"Computer score: "+this.state.computer}),Object(r.jsx)("div",{class:"d-flex justify-content-center",children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(r.jsxs)("div",{class:"d-flex justify-content-center",children:[this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[0])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[1])),this.renderSquare(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[2]))]})]})}),Object(r.jsx)("div",{class:"d-flex justify-content-center",children:Object(r.jsx)("button",{onClick:this.loginPage,className:"loginbutton",children:"Login"})})]})}),t=Object(r.jsx)("div",{className:"game2",children:Object(r.jsx)("div",{class:"d-flex justify-content-center",children:Object(r.jsx)("button",{onClick:this.gamePage,className:"loginbutton",children:"Play"})})});return Object(r.jsx)("div",{children:this.state.isGame?e:t})}}]),s}(d.a.Component);h.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.296f5a50.chunk.js.map