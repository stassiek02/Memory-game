(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},function(e,t,a){e.exports={App:"App_App__1vw52","App-logo":"App_App-logo__1AP8D","App-logo-spin":"App_App-logo-spin__3Vw5V","App-header":"App_App-header__N0ePk","App-link":"App_App-link__2-U1l"}},,,,function(e,t,a){var n={"./angular2.svg":20,"./babel.svg":21,"./bower.svg":22,"./browserify.svg":23,"./ember.svg":24,"./grunt.svg":25,"./gulp.svg":26,"./ionic.svg":27,"./meteor.svg":28,"./nodejs.svg":29,"./npm.svg":30,"./react.svg":31,"./vue.svg":32,"./yarn.svg":33,"./yeoman.svg":34};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=19},function(e,t,a){e.exports=a.p+"static/media/angular2.e224f5ed.svg"},function(e,t,a){e.exports=a.p+"static/media/babel.d255e75f.svg"},function(e,t,a){e.exports=a.p+"static/media/bower.2aff8e66.svg"},function(e,t,a){e.exports=a.p+"static/media/browserify.c18a4d86.svg"},function(e,t,a){e.exports=a.p+"static/media/ember.ad11f1d9.svg"},function(e,t,a){e.exports=a.p+"static/media/grunt.7835f1c5.svg"},function(e,t,a){e.exports=a.p+"static/media/gulp.771551b9.svg"},function(e,t,a){e.exports=a.p+"static/media/ionic.83ff7531.svg"},function(e,t,a){e.exports=a.p+"static/media/meteor.2a05c00f.svg"},function(e,t,a){e.exports=a.p+"static/media/nodejs.94cafb0d.svg"},function(e,t,a){e.exports=a.p+"static/media/npm.4ffaf293.svg"},function(e,t,a){e.exports=a.p+"static/media/react.9a28da9f.svg"},function(e,t,a){e.exports=a.p+"static/media/vue.22efb7c2.svg"},function(e,t,a){e.exports=a.p+"static/media/yarn.878ab384.svg"},function(e,t,a){e.exports=a.p+"static/media/yeoman.55e964d3.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),s=(a(14),a(1)),c=a(2),l=a(4),p=a(3),m=a(5),u=(a(15),a(16),["angular2","vue","react","grunt","npm","babel","ionic","gulp","yarn","nodejs"]),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={frameworks:u,finitializedFrameworks:[],openedFrameworks:[],matchedFrameworks:0,lvlSelected:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.start()}},{key:"start",value:function(e){this.setState({lvlSelected:e});var t=[],a=u.slice(0,e),n=[];n=a.concat(a),(n=this.shuffle(n)).map(function(e,a){t.push({name:e,index:a,close:!0,complete:!1,fail:!1})}),this.setState({finitializedFrameworks:t})}},{key:"wonGame",value:function(){var e=this.state,t=e.matchedFrameworks,a=e.lvlSelected;console.log(t),t===a&&alert("Congratulations! You just won the game")}},{key:"handleClick",value:function(e,t){var a=this;if(2===this.state.openedFrameworks.length)setTimeout(function(){a.check(a.state.openedFrameworks,a.state.finitializedFrameworks)},750);else{var n=this.state.finitializedFrameworks,o=this.state.openedFrameworks;n[t].close&&(n[t].close=!1,o.push(n[t]),this.setState({openedFrameworks:o,finitializedFrameworks:n}),2===this.state.openedFrameworks.length&&setTimeout(function(){a.check(o,n)},750))}}},{key:"check",value:function(e,t){2===e.length&&(e[0].name===e[1].name&&e[0].index!==e[1].index?(t[e[0].index].complete=!0,t[e[1].index].complete=!0,this.setState({openedFrameworks:[],finitializedFrameworks:t,matchedFrameworks:this.state.matchedFrameworks+1}),this.wonGame()):(t[e[0].index].close=!0,t[e[1].index].close=!0,this.setState({openedFrameworks:[],finitializedFrameworks:t})))}},{key:"shuffle",value:function(e){for(var t,a,n=e.length;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t;return e}},{key:"render",value:function(){var e=this,t=this.state.finitializedFrameworks,a=this.state.lvlSelected;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"heading"},"Play with me"),o.a.createElement("p",{className:"heading"},a?"I wish you luck":"Choose your level"),a?o.a.createElement("div",{className:"wrapper"},t.map(function(t,a){return o.a.createElement(f,{framework:t.name,onClick:function(){return e.handleClick(t.name,a)},complete:t.complete,close:t.close})})):o.a.createElement("div",{className:"buttons__wrapper"},o.a.createElement("button",{onClick:function(){return e.start(4)}},"Easy"),o.a.createElement("button",{onClick:function(){return e.start(8)}},"Medium"),o.a.createElement("button",{onClick:function(){return e.start(10)}},"Hard"))))}}]),t}(o.a.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"clicked",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"card"+(this.props.close?" ":" opened")+(this.props.complete?" matched":""),onClick:function(){return e.clicked(e.props.framework)}},o.a.createElement("div",{className:"front"},o.a.createElement("h2",null,"?")),o.a.createElement("div",{className:"back"},o.a.createElement("img",{src:a(19)("./"+this.props.framework+".svg")})))}}]),t}(o.a.Component),v=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.74847453.chunk.js.map