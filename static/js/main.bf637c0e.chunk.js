(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},206:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(8),o=a(0),s=a.n(o),u=a(71),i=a.n(u),l=a(72),d=a(73),f=a(83),p=a(82),m=a(223),v=a(227),h=a(224),b=a(225),y=a(32),x=a.n(y),E=a(33),C=a.n(E),g=a(13),k=a.n(g),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?s.a.createElement("div",{className:k.a.container},s.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},s.a.createElement(m.a,{xs:12,md:3,component:v.a,className:C()(k.a.card,k.a.infected)},s.a.createElement(h.a,null,s.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),s.a.createElement(b.a,{variant:"h5"}," ",s.a.createElement(x.a,{start:0,end:a.value,duration:1,separator:","})," "),s.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),s.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19."))),s.a.createElement(m.a,{xs:12,md:3,component:v.a,className:C()(k.a.card,k.a.recovered)},s.a.createElement(h.a,null,s.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),s.a.createElement(b.a,{variant:"h5"}," ",s.a.createElement(x.a,{start:0,end:n.value,duration:1,separator:","})," "),s.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),s.a.createElement(b.a,{variant:"body2"}," Number of recoveries from COVID-19."))),s.a.createElement(m.a,{xs:12,md:3,component:v.a,className:C()(k.a.card,k.a.deaths)},s.a.createElement(h.a,null,s.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),s.a.createElement(b.a,{variant:"h5"}," ",s.a.createElement(x.a,{start:0,end:r.value,duration:1,separator:","})," "),s.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),s.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19."))))):"Loading..."},j=a(31),_=a(45),O=a(34),S=a.n(O),D="https://covid19.mathdro.id/api",N=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,o,s,u,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,c=n.data,o=c.confirmed,s=c.recovered,u=c.deaths,i=c.lastUpdate,e.abrupt("return",{confirmed:o,recovered:s,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(79),B=a.n(A),R=function(e){var t=e.data,a=t.confirmed,n=t.recovered,u=t.deaths,i=e.country,l=Object(o.useState)({}),d=Object(j.a)(l,2),f=d[0],p=d[1];Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a?s.a.createElement(_.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255,7,58,.6)","rgba(40,167,69, 0.6)","rgba(108,117,125, 0.6)"],data:[a.value,n.value,u.value]}]},options:{responsive:!0,legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)},scales:{yAxes:[{ticks:{fontSize:12,fontFamily:"'Roboto Condensed', sans-serif",fontColor:"#000",fontStyle:"500"}}],xAxes:[{ticks:{fontSize:12,fontFamily:"'Roboto Condensed', sans-serif",fontColor:"#000",fontStyle:"500"},gridLines:{display:!1,drawBorder:!1}}]}}}):null,v=f[0]?s.a.createElement(_.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgba(255,7,58)",fill:!1},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(108,117,125)",fill:!1}]},options:{responsive:!0,legend:{display:!0},scales:{yAxes:[{ticks:{fontSize:12,fontFamily:"'Roboto Condensed', sans-serif",fontColor:"#000",fontStyle:"500"}}],xAxes:[{ticks:{fontSize:12,fontFamily:"'Roboto Condensed', sans-serif",fontColor:"#000",fontStyle:"500"},gridLines:{display:!1,drawBorder:!1}}]}}}):null;return s.a.createElement("div",{className:B.a.container},i?m:v)},V=a(228),F=a(226),U=a(80),L=a.n(U),W=function(e){var t=e.handleCountryChange,a=Object(o.useState)([]),n=Object(j.a)(a,2),u=n[0],i=n[1];return Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,z();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s.a.createElement(V.a,{className:L.a.formControl},s.a.createElement(F.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},s.a.createElement("option",{value:""},"Global"),u.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}))))},G=a(81),J=a.n(G),M=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return s.a.createElement("div",{className:J.a.container},s.a.createElement("h1",null,"COVID-19 Tracker"),s.a.createElement(w,{data:t}),s.a.createElement(W,{handleCountryChange:this.handleCountryChange}),s.a.createElement(R,{data:t,country:a}))}}]),a}(s.a.Component);function P(){return(P=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=9;break}return e.prev=1,e.next=4,navigator.serviceWorker.register("./sw.js");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("Service Worker failed");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}i.a.render(s.a.createElement(M,null),document.getElementById("root")),function(){P.apply(this,arguments)}()},79:function(e,t,a){e.exports={container:"Charts_container__1mZfu"}},80:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},81:function(e,t,a){e.exports={container:"App_container__1MQN3"}},86:function(e,t,a){e.exports=a(206)}},[[86,1,2]]]);
//# sourceMappingURL=main.bf637c0e.chunk.js.map