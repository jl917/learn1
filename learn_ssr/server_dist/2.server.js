exports.ids=[2],exports.modules={173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=i(l),o=n(40),a=n(199),s=n(221);i(n(74));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={loading:!1},e.getU=e.getU.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),this.getU()}},{key:"getU",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this.setState({loading:!0}),this.props.getUser("https://randomuser.me/api/?results="+e)}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidUpdate",value:function(){console.log(this.props.users)}},{key:"render",value:function(){var e=this;return u.default.createElement("div",null,u.default.createElement("button",{onClick:function(){return console.log(e.props)}},"this.props"),u.default.createElement("button",{onClick:function(){return console.log(e)}},"this"),u.default.createElement("button",{onClick:function(){return console.log(history)}}," hitsory "),u.default.createElement("button",{onClick:function(){return e.props.history.goBack()}}," goback "),u.default.createElement(o.Link,{to:{pathname:"/userlist",search:"?result=20"}},u.default.createElement("button",{onClick:function(){return e.getU(20)}},"result 20")),u.default.createElement(o.Link,{to:{pathname:"/userlist",search:"?result=10"}},u.default.createElement("button",{onClick:function(){return e.getU(10)}},"result 10")),u.default.createElement(o.Link,{to:{pathname:"/userlist",search:"?result=5"}},u.default.createElement("button",{onClick:function(){return e.getU(5)}},"result 5")),this.props.users&&this.props.users.results?u.default.createElement("table",{className:"table"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"username"),u.default.createElement("th",null,"name"),u.default.createElement("th",null,"tel"),u.default.createElement("th",null,"email"))),u.default.createElement("tbody",null,this.props.users.results.map(function(e){return u.default.createElement("tr",{key:e.login.uuid},u.default.createElement("th",null,e.login.username),u.default.createElement("th",null,e.name.first," ",e.name.last),u.default.createElement("th",null,e.phone),u.default.createElement("th",null,e.email))}))):u.default.createElement("div",null,"nodata"))}}]),t}();t.default=(0,s.connect)(function(e){return e},function(e){return{getUser:function(t){e(a.user_actions.getUser(t))}}})(c)},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.users=t.user_actions=void 0;var r,l=n(200),u=n(220),o=(r=u)&&r.__esModule?r:{default:r};var a=(0,l.createActions)({GET_USER:function(e){return(0,o.default)(e).then(function(e){return e.json()})}}),s=(0,l.handleActions)({GET_USER_PENDING:function(e,t){return Object.assign(e,{loading:!0})},GET_USER_FULFILLED:function(e,t){return Object.assign(t.payload,{loading:!1})},GET_USER_REJECTED:function(e,t){console.log(t)}},{});t.user_actions=a,t.users=s}};