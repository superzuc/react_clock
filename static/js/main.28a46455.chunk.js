(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),i=c(4),a=c(5),s=c(7),r=c(6),l=c(1),u=c.n(l),d=(c(12),c(0));function m(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).timerId=null,e.state={time:"",hasClock:!0,clockName:""},e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.showClock=function(){e.setState({hasClock:!0})},e.updateTime=function(){var t=(new Date).toUTCString().slice(-12,-4);console.info(t),e.setState({time:t})},e.updateClockName=function(){var t=m();console.debug("Renamed from ".concat(e.state.clockName," to ").concat(t)),e.setState({clockName:t})},e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.hideClock),document.addEventListener("click",this.showClock),this.updateTime(),this.timerId=window.setInterval(this.updateTime,1e3),window.setInterval(this.updateClockName,3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock),this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.time,c=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("div",{children:c&&Object(d.jsxs)("div",{children:[Object(d.jsx)("strong",{children:n})," time is ",t]})})]})}}]),c}(u.a.Component);o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.28a46455.chunk.js.map