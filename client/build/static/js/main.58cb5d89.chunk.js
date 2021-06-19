(this.webpackJsonpstoic=this.webpackJsonpstoic||[]).push([[0],{16:function(t,e,n){},31:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},68:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var s=n(1),o=n(32),a=n.n(o),c=(n(39),n(2)),i=n(3),r=n(7),u=n(5),l=n(4),h=(n(40),n(18)),d=n(17),j=n.n(d),b=n(15),p=n(33),f=n(9),m=n(8),O=n.n(m),g=n(14),v=(n(68),n(31),n(0)),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.author;function e(t){switch(t){case"Marcus Aurelius":return["https://en.wikipedia.org/wiki/Marcus_Aurelius","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Marcus_Aurelius_Louvre_MR561_n02.jpg/164px-Marcus_Aurelius_Louvre_MR561_n02.jpg"];case"Seneca":return["https://en.wikipedia.org/wiki/Seneca_the_Younger","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG/170px-0_S%C3%A9n%C3%A8que_-_Mus%C3%A9e_du_Prado_-_Cat._144_-_%282%29.JPG"];case"Epictetus":return["https://en.wikipedia.org/wiki/Epictetus","https://3quarksdaily.com/wp-content/uploads/2019/04/Crito-1a-259x360.jpg"]}}return Object(v.jsx)("div",{className:"face",children:Object(v.jsx)("a",{href:e(t)[0],children:Object(v.jsx)("img",{src:e(t)[1],alt:t})})})}}]),n}(s.Component),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).handleClick=s.handleClick.bind(Object(r.a)(s)),s}return Object(i.a)(n,[{key:"handleClick",value:function(){this.props.addThis(this.props.id)}},{key:"render",value:function(){var t=this,e=this.props.source;return Object(v.jsxs)("div",{className:"Joke",children:[Object(v.jsx)(x,{source:this.props.source,author:this.props.author}),Object(v.jsxs)("div",{className:"Joke-text",children:[Object(v.jsx)("p",{}),this.props.text,Object(v.jsx)("br",{}),Object(v.jsxs)("span",{children:[this.props.author,",",Object(v.jsx)("br",{})," ",function(e){return e.includes("Meditations")?Object(v.jsx)("a",{href:"http://classics.mit.edu/Antoninus/meditations.mb.txt",target:"_blank",children:"Mediations"}):t.props.source}(e)]}),Object(v.jsx)("button",{className:"Joke-addButton",onClick:this.handleClick,children:"+"})]})]})}}]),n}(s.Component),y=(n(16),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setTimeout((function(){t.props.togglePop()}),1e3);return function(){return clearTimeout(e)}}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"modal_content",children:this.props.message?this.props.message:this.props.dupe?"Already  saved!":"Saved the quote."})}}]),n}(s.Component)),w=(n(70),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"About",children:Object(v.jsx)("div",{children:this.props.loading?Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Getting the wisdom..."}),Object(v.jsx)("i",{className:"fas fa-spinner fa-pulse",style:{fontSize:"4rem"}})]}):Object(v.jsxs)("div",{onClick:this.props.about,children:[Object(v.jsx)("hr",{}),Object(v.jsx)("p",{children:"Armen Agabekian (v2021)*"}),Object(v.jsx)("a",{href:"mailto:armasconi@gmail.com",children:"email"}),Object(v.jsx)("hr",{})]})})})}}]),n}(s.Component)),N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).handleClick=s.handleClick.bind(Object(r.a)(s)),s.toggleAbout=s.toggleAbout.bind(Object(r.a)(s)),s.addThis=s.addThis.bind(Object(r.a)(s)),s.state={quotes:JSON.parse(window.localStorage.getItem("quotes")||"[]"),selected:[],loading:!1,dupe:!1,about:!1},s.seenQuotes=new Set(s.state.quotes.map((function(t){return t.id}))),s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){0===this.state.quotes.length&&(this.setState({loading:!0}),this.fetchQuotes())}},{key:"fetchQuotes",value:function(){var t=Object(p.a)(j.a.mark((function t(){var e,n,s,o=this;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,e=[];case 2:if(!(e.length<this.props.numJokesToGet)){t.next=10;break}return t.next=5,O.a.get("https://stoic-server.herokuapp.com/random");case 5:n=t.sent,s=n.data[0],this.seenQuotes.has(s.id)?console.log("****************duplicate found ****************",n.id):e.push({text:s.body,author:s.author,source:s.quotesource,id:s.id}),t.next=2;break;case 10:this.setState((function(t){return{loading:!1,quotes:[].concat(Object(b.a)(t.quotes),e)}}),(function(){return window.localStorage.setItem("quotes",JSON.stringify(o.state.quotes))})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),alert(t.t0);case 16:case"end":return t.stop()}}),t,this,[[0,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"handleVote",value:function(t,e){var n=this;this.setState((function(n){return{quotes:n.quotes.map((function(n){return n.id===t?Object(h.a)(Object(h.a)({},n),{},{votes:n.votes+e}):n}))}}),(function(){return window.localStorage.setItem("quotes",JSON.stringify(n.state.quotes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0}),this.setState({about:!1}),this.fetchQuotes()}},{key:"toggleAbout",value:function(){this.setState({about:!this.state.about})}},{key:"addThis",value:function(t){var e=this;O.a.get("http://localhost:8000/api/entries").then((function(n){var s=new Set(n.data.map((function(t){return t.content[0].id}))),o=e.state.quotes.filter((function(e){return e.id==t})),a=o[0].id;e.props.togglePop(),s.has(a)?(e.setState({dupe:!0}),console.log("you alreay saved the quote",a)):(console.log("grabbed quote",o,a,s),O.a.post("http://localhost:8000/api/entries",{content:o,comments:[]},e.setState({dupe:!1})))}))}},{key:"render",value:function(){var t=this;Object(g.v4)();return Object(v.jsxs)("div",{className:"JokeList",children:[Object(v.jsxs)("div",{className:"JokeList-sidebar",children:[Object(v.jsx)("img",{className:"image1",src:"images/logo.jpg",alt:"logo"}),Object(v.jsx)("button",{className:"getmore",onClick:this.handleClick,children:this.state.loading?Object(v.jsx)("i",{className:"fas fa-spinner fa-pulse",style:{fontSize:"1rem"}}):"Add More Quotes"}),Object(v.jsx)(f.a,{to:"/favs/",style:{color:"#8a0303",marginTop:"5px"},children:Object(v.jsx)("i",{className:"fas fa-scroll"})}),Object(v.jsx)("div",{onClick:this.toggleAbout,className:"JokeList-title",children:"stoic companion"})]}),Object(v.jsxs)("div",{className:"JokeList-jokes",children:[this.state.about?Object(v.jsx)(w,{about:this.toggleAbout}):"",this.props.modal?Object(v.jsx)(y,{dupe:this.state.dupe,togglePop:this.props.togglePop,modal:this.state.modal}):null,this.state.loading?Object(v.jsx)(w,{loading:this.state.loading,email:"armasconi@gmail.com"}):this.state.quotes.map((function(e,n){return Object(v.jsx)(k,{id:e.id,text:e.text,author:e.author,source:e.source,addThis:t.addThis},n)}))]})]})}}]),n}(s.Component);N.defaultProps={numJokesToGet:10};var _=n(12),C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"Favs-back",children:[Object(v.jsx)(f.a,{to:this.props.link,style:{color:"white"},children:Object(v.jsx)("span",{className:"arrow",children:Object(v.jsx)("i",{className:"fas fa-angle-left"})})}),Object(v.jsx)(f.a,{to:"/",children:Object(v.jsx)("i",{className:"fas fa-archway home "})}),Object(v.jsx)("p",{className:"Favs-title",children:this.props.title})]})})}}]),n}(s.Component),S=(n(71),function(t){var e=t.id,n=t.modal,o=t.togglePop,a=Object(s.useState)(""),c=Object(_.a)(a,2),i=c[0],r=c[1],u=Object(s.useState)([{}]),l=Object(_.a)(u,2),h=l[0],d=l[1],j=Object(s.useState)(""),p=Object(_.a)(j,2),f=p[0],m=p[1],g=Object(s.useState)(""),x=Object(_.a)(g,2),k=x[0],w=x[1],N=function(){O.a.get("http://localhost:8000/api/entries/"+e).then((function(t){return d(t.data.comments)})).catch((function(t){return console.log("bummer, error:",t)}))};Object(s.useEffect)((function(){N()}),[h]);return Object(v.jsxs)("div",{className:"JokeList-jokes",children:[Object(v.jsx)(C,{link:"/favs",title:"musings"}),n?Object(v.jsx)(y,{message:k,togglePop:o}):"",h.map((function(t,n){return Object(v.jsxs)("div",{className:"Note-comments",index:n,children:[Object(v.jsx)("div",{className:"close",onClick:function(n){return function(t,e,n){var s="http://localhost:8000/api/entries/cut/".concat(t,"/").concat(e);O.a.patch(s).then((function(t){})).catch((function(t){return console.log(t)}))}(e,t._id)},children:Object(v.jsx)("i",{className:"fa fa-times"})}),Object(v.jsxs)("p",{children:[t.author," wrote: ",Object(v.jsx)("br",{})," ",Object(v.jsx)("span",{children:t.text})]})]})})),Object(v.jsxs)("form",{className:"Note-form",onSubmit:function(t){if(t.preventDefault(),i.length<3)w("title needs 3+ chars"),o();else if(f.length<3)w("comment 3+ chars"),o();else{new d([].concat(Object(b.a)(h),[{text:f,author:i,date:Date()}]));w(""),O.a.patch("http://localhost:8000/api/entries/"+e,{author:i,text:f}).then((function(t){t.data.errors&&setErrors(t.data.errors)})).catch((function(t){return console.log(t)})),N(),m(""),r("")}},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Name"}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"Note-input",type:"text",value:i,onChange:function(t){return r(t.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Comment"}),Object(v.jsx)("br",{}),Object(v.jsx)("textarea",{className:"Note-input",cols:23,value:f,onChange:function(t){return m(t.target.value)}})]}),Object(v.jsx)("input",{className:"btn btn-primary submit",type:"submit",value:"post"})]})]})}),q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Joke",children:Object(v.jsxs)("div",{className:"Joke-text",children:[Object(v.jsx)("p",{children:this.props.text}),Object(v.jsx)("br",{}),Object(v.jsxs)("span",{children:[this.props.author,Object(v.jsx)("br",{}),this.props.source,Object(v.jsx)("br",{}),Object(v.jsxs)(f.a,{to:"/note/".concat(this.props.id,"/"),style:{fontFamily:"arial",fontSize:".7rem",letterSpacing:".6px"},children:["notes (",this.props.nums_of_comms,")"]})]})]})})}}]),n}(s.Component),A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={favs:[]},s.deleteEntry=s.deleteEntry.bind(Object(r.a)(s)),s}return Object(i.a)(n,[{key:"getSavedQuotes",value:function(){var t=this;O.a.get("http://localhost:8000/api/entries").then((function(e){t.setState({favs:e.data})}))}},{key:"componentDidMount",value:function(){this.getSavedQuotes()}},{key:"updateEntry",value:function(t){console.log(t),O.a.put("http://localhost:8000/api/entries/"+t).then((function(t){})).catch((function(t){return console.log(t)}))}},{key:"deleteEntry",value:function(t){console.log("deleted: ",t),O.a.delete("http://localhost:8000/api/entries/"+t).then((function(t){})).catch((function(t){return console.log(t)})),this.setState({favs:this.state.favs.filter((function(e){return e._id!=t}))})}},{key:"render",value:function(){var t=this;Object(g.v4)();return Object(v.jsxs)("div",{className:"JokeList-jokes",children:[Object(v.jsx)(C,{title:"saved quotes",link:"/"}),0===this.state.favs.length?Object(v.jsx)("p",{className:"Favs-message",children:'No saved quotes yet, you can add them by using a "+" button'}):this.state.favs.map((function(e,n){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"close",children:Object(v.jsx)("i",{className:"fa fa-times",onClick:function(n){t.deleteEntry(e._id)}})}),Object(v.jsx)(q,{qid:e.content[0].id,id:e._id,text:e.content[0].text,author:e.content[0].author,source:e.content[0].source,update:t.updateEntry,nums_of_comms:e.comments?e.comments.length:0})]},n)}))]})}}]),n}(s.Component),J=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={modal:!1},s.togglePop=s.togglePop.bind(Object(r.a)(s)),s}return Object(i.a)(n,[{key:"togglePop",value:function(){this.setState({modal:!this.state.modal}),console.log("state flip")}},{key:"render",value:function(){return Object(v.jsxs)(f.b,{className:"App",children:[Object(v.jsx)(N,{path:"/",togglePop:this.togglePop,modal:this.state.modal}),Object(v.jsx)(S,{path:"/note/:id/",togglePop:this.togglePop,modal:this.state.modal}),Object(v.jsx)(A,{path:"/favs"}),Object(v.jsx)(w,{path:"/about"})]})}}]),n}(s.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}a.a.render(Object(v.jsx)(J,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):M(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):M(t)}))}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.58cb5d89.chunk.js.map