(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var n=s(4),i=s(5),c=s(6),a=s(1),r=s(9),l=s(8),o=s(0),d=s(2),u=s.n(d),h=s(7),j=s.n(h);s(16),s(17),s(18);function b(e){return e.value.includes("Rock")?Object(o.jsx)("button",{class:"btn btn-outline-primary mr-4",disabled:e.value.includes("true"),onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png",width:"200",height:"200"})}):e.value.includes("Paper")?Object(o.jsx)("button",{class:"btn btn-outline-primary mr-4",disabled:e.value.includes("true"),onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/paper.png",width:"200",height:"200"})}):e.value.includes("Scissors")?Object(o.jsx)("button",{class:"btn btn-outline-primary",disabled:e.value.includes("true"),onClick:e.onClick,children:Object(o.jsx)("img",{src:"https://hacktoberfest.lingonsaft.com/images/scissors.png",width:"200",height:"200"})}):void 0}var m=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={playerScore:0,computerScore:0,results:["n_nothing","nothing"],currentPage:"game",movesIsDisabled:["Rock","Paper","Scissors","false"],username:"hi",password:"hi",nameinput:"",passinput:""},n.gamePage=n.gamePage.bind(Object(a.a)(n)),n.loginPage=n.loginPage.bind(Object(a.a)(n)),n.login=n.login.bind(Object(a.a)(n)),n.resetGame=n.resetGame.bind(Object(a.a)(n)),n.registerPage=n.registerPage.bind(Object(a.a)(n)),n.handleChange=n.handleChange.bind(Object(a.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(a.a)(n)),n}return Object(c.a)(s,[{key:"handleClick",value:function(e){if(10===this.state.playerScore||10===this.state.computerScore)this.setState({movesIsDisabled:["Rock","Paper","Scissors","true"]});else{var t=["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],s=e+t;e.split("_")[1]===t?this.setState({results:[e,t]}):s.includes("RockScissors")||s.includes("ScissorsPaper")||s.includes("PaperRock")?this.setState({player:this.state.player+1,results:[e,t]}):this.setState({computer:this.state.computerScore+1,results:[e,t]})}}},{key:"renderButton",value:function(e){var t=this;return Object(o.jsx)(b,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"loginPage",value:function(){this.setState({currentPage:"login"})}},{key:"gamePage",value:function(){this.setState({currentPage:"game"})}},{key:"registerPage",value:function(){this.setState({currentPage:"register"})}},{key:"checkWinner",value:function(){return 10===this.state.playerScore?Object(o.jsx)("div",{class:"d-flex justify-content-center text-success font-weight-bold",children:"You win!"}):10===this.state.computerScore?Object(o.jsx)("div",{class:"d-flex justify-content-center text-danger font-weight-bold",children:"Computer wins."}):void 0}},{key:"resetGame",value:function(){return this.setState({playerScore:0,computerScore:0,results:["n_nothing","nothing"],movesIsDisabled:["Rock","Paper","Scissors","false"]}),Object(o.jsx)(s,{})}},{key:"handleSubmit",value:function(){this.setState({currentPage:"login"}),alert('Account with username "'+this.state.username+'" created.')}},{key:"handleChange",value:function(e){var t=e.target.name,s=e.target.value;this.setState(Object(n.a)({},t,s))}},{key:"storeLogin",value:function(e){var t=e.target.name,s=e.target.value;this.setState(Object(n.a)({},t,s))}},{key:"login",value:function(e){this.state.username===this.state.userinput&&this.state.password===this.state.passinput?this.setState({currentPage:"game"}):alert("Username or password incorrect"+this.state.username+this.state.password)}},{key:"render",value:function(){var e=Object(o.jsx)("div",{class:"d-flex justify-content-center",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{class:"d-flex justify-content-center mt-4",children:Object(o.jsx)("h2",{class:"text-primary",children:"Rock Paper Scissors!"})}),Object(o.jsx)("div",{class:"d-flex justify-content-center mt-2",children:Object(o.jsx)("h4",{class:"text-primary",children:"Game Page"})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{class:"d-flex justify-content-center mt-4",children:[this.renderButton(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[0])),this.renderButton(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[1])),this.renderButton(this.state.movesIsDisabled[3].concat("_",this.state.movesIsDisabled[2]))]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{class:"d-flex justify-content-center mt-4",children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(o.jsx)("div",{class:"d-flex justify-content-center mt-2",children:"Computer score: "+this.state.computerScore}),Object(o.jsx)("div",{class:"d-flex justify-content-center mt-2",children:"Player score: "+this.state.playerScore}),this.checkWinner()]})]}),Object(o.jsxs)("div",{class:"d-flex justify-content-center mt-4",children:[Object(o.jsx)("button",{class:"btn btn-outline-dark",onClick:this.registerPage,children:"Register"}),Object(o.jsx)("button",{class:"btn btn-outline-dark",onClick:this.loginPage,children:"Login"}),Object(o.jsx)("button",{class:"btn btn-primary",onClick:this.resetGame,children:"Reset Game"})]})]})}),t=Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"d-flex justify-content-center mt-5",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{class:"d-flex justify-content-center mt-4",children:Object(o.jsx)("h2",{class:"text-primary",children:"Rock Paper Scissors!"})}),Object(o.jsx)("div",{class:"d-flex justify-content-center mt-2",children:Object(o.jsx)("h4",{class:"text-primary",children:"Register Page"})}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("div",{class:"form-group mt-4",children:Object(o.jsxs)("label",{children:["Username:",Object(o.jsx)("input",{name:"username",type:"text",placeholder:"username",onChange:this.handleChange})]})}),Object(o.jsx)("div",{class:"form-group",children:Object(o.jsxs)("label",{children:["Password:",Object(o.jsx)("input",{name:"password",type:"password",placeholder:"password",onChange:this.handleChange})]})}),Object(o.jsxs)("div",{class:"d-flex justify-content-center",children:[Object(o.jsx)("input",{type:"submit",class:"btn btn-primary",value:"Register"}),Object(o.jsx)("button",{class:"btn btn-outline-dark",onClick:this.gamePage,children:"Play"})]})]})]})})}),s=Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"d-flex justify-content-center mt-4",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{class:"d-flex justify-content-center mt-4",children:Object(o.jsx)("h2",{class:"text-primary",children:"Rock Paper Scissors!"})}),Object(o.jsx)("div",{class:"d-flex justify-content-center mt-2",children:Object(o.jsx)("h4",{class:"text-primary",children:"Login Page"})}),Object(o.jsxs)("form",{onSubmit:this.login,children:[Object(o.jsx)("div",{class:"form-group mt-4",children:Object(o.jsxs)("label",{children:["Username:",Object(o.jsx)("input",{name:"nameinput",type:"text",placeholder:"username",onChange:this.storeLogin})]})}),Object(o.jsx)("div",{class:"form-group",children:Object(o.jsxs)("label",{children:["Password:",Object(o.jsx)("input",{name:"passinput",type:"password",placeholder:"password",onChange:this.storeLogin})]})}),Object(o.jsxs)("div",{class:"d-flex justify-content-center",children:[Object(o.jsx)("input",{type:"submit",class:"btn btn-primary",value:"Login"}),Object(o.jsx)("button",{class:"btn btn-outline-dark",onClick:this.gamePage,children:"Play"})]})]})]})})});return"login"===this.state.currentPage.value?s:"register"===this.state.currentPage.value?t:e}}]),s}(u.a.Component);j.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))},16:function(e,t,s){}},[[10,1,2]]]);
//# sourceMappingURL=main.b64b8f08.chunk.js.map