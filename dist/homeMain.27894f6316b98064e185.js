(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{47:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(5).enterModule,enterModule&&enterModule(module);var Gest=function(_Component){function Gest(e){_classCallCheck(this,Gest);var t=_possibleConstructorReturn(this,(Gest.__proto__||Object.getPrototypeOf(Gest)).call(this,e));return t.state={count:0},t}return _inherits(Gest,_Component),_createClass(Gest,[{key:"_handleClick",value:function(){this.setState({count:++this.state.count})}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,"this is home~",_react2.default.createElement("br",null),"当前计数：",this.state.count,_react2.default.createElement("br",null),_react2.default.createElement("button",{onClick:function(){return e._handleClick()}},"自e增"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Gest}(_react.Component),_default=Gest,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(5).default,leaveModule=__webpack_require__(5).leaveModule,reactHotLoader&&(reactHotLoader.register(Gest,"Gest","C:/Users/admin/Desktop/reectDemo/src/home/gest.js"),reactHotLoader.register(_default,"default","C:/Users/admin/Desktop/reectDemo/src/home/gest.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))},48:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_user=__webpack_require__(51),_user2=_interopRequireDefault(_user),_gest=__webpack_require__(47),_gest2=_interopRequireDefault(_gest),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function NumList(e){return _react2.default.createElement("li",null,e.value)}function NumberCompe(e){var t=e.numbers;return _react2.default.createElement("ul",null,t.map(function(e){return _react2.default.createElement(NumList,{key:e,value:e})}))}enterModule=__webpack_require__(5).enterModule,enterModule&&enterModule(module);var App=function(_Component){function App(e){_classCallCheck(this,App);var t=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e));return t.state={date:new Date,usera:"admin",isToggleOn:!1},t.activateLasers=t.activateLasers.bind(t),t}return _inherits(App,_Component),_createClass(App,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"activateLasers",value:function(e,t){console.log(this.state.isToggleOn),this.setState(function(e){return{isToggleOn:!e.isToggleOn}}),console.log(this.state.isToggleOn)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var e=null;return e=this.state.isToggleOn?_react2.default.createElement(_user2.default,{data:this.state,onClick:this.activateLasers}):_react2.default.createElement(_gest2.default,{onClick:this.activateLasers}),_react2.default.createElement("div",{style:{width:"200px",height:"80px",backgroundColor:"yellow",fontSize:"24px",textAlign:"center"},className:"App"},_react2.default.createElement("header",{className:"App-header"},e,_react2.default.createElement(NumberCompe,{numbers:[1,2,3,4,5]}),_react2.default.createElement("button",{onClick:this.activateLasers.bind(this,"zhangana")},this.state.isToggleOn?"ON":"OFF")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(_react.Component),_default=App,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(5).default,leaveModule=__webpack_require__(5).leaveModule,reactHotLoader&&(reactHotLoader.register(NumList,"NumList","C:/Users/admin/Desktop/reectDemo/src/home/App.js"),reactHotLoader.register(NumberCompe,"NumberCompe","C:/Users/admin/Desktop/reectDemo/src/home/App.js"),reactHotLoader.register(App,"App","C:/Users/admin/Desktop/reectDemo/src/home/App.js"),reactHotLoader.register(_default,"default","C:/Users/admin/Desktop/reectDemo/src/home/App.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))},51:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(5).enterModule,enterModule&&enterModule(module);var User=function(_Component){function User(e){_classCallCheck(this,User);var t=_possibleConstructorReturn(this,(User.__proto__||Object.getPrototypeOf(User)).call(this,e));return t.state={value:"",pass:"",text:"",selvalue:"1"},t.handelSubmit=t.handelSubmit.bind(t),t.handelChang=t.handelChang.bind(t),t}return _inherits(User,_Component),_createClass(User,[{key:"handelSubmit",value:function(e){console.log(this.state),this.setState({value:"",pass:"",text:"",selvalue:"1"}),e.preventDefault()}},{key:"handelChang",value:function(e){console.log(e.target.value),this.setState(_defineProperty({},e.target.name,e.target.value))}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement("button",{style:{width:"200px",height:"80px",backgroundColor:"yellow",fontSize:"24px",textAlign:"center"},onClick:this.props.onClick.bind(this,"user")},this.props.data.usera," 注销"),_react2.default.createElement("p",null,this.props.data.date.toLocaleTimeString()),"受控组件：",_react2.default.createElement("form",{onSubmit:this.handelSubmit},_react2.default.createElement("label",null,"Name:",_react2.default.createElement("input",{type:"text",name:"value",value:this.state.value,onChange:this.handelChang})),_react2.default.createElement("br",null),_react2.default.createElement("label",null,"pass:",_react2.default.createElement("input",{type:"password",name:"pass",value:this.state.pass,onChange:this.handelChang})),_react2.default.createElement("br",null),_react2.default.createElement("label",null,"textarea:",_react2.default.createElement("textarea",{name:"text",value:this.state.text,onChange:this.handelChang})),_react2.default.createElement("br",null),_react2.default.createElement("select",{value:this.state.selvalue,onChange:this.handelChang,name:"selvalue"},_react2.default.createElement("option",{value:"5"},"Grapefruit"),_react2.default.createElement("option",{value:"0"},"Lime"),_react2.default.createElement("option",{value:"1"},"Coconut"),_react2.default.createElement("option",{value:"2"},"Mango")),_react2.default.createElement("input",{type:"submit",value:"Submit"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),User}(_react.Component),_default=User,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(5).default,leaveModule=__webpack_require__(5).leaveModule,reactHotLoader&&(reactHotLoader.register(User,"User","C:/Users/admin/Desktop/reectDemo/src/home/user.js"),reactHotLoader.register(_default,"default","C:/Users/admin/Desktop/reectDemo/src/home/user.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))}}]);
//# sourceMappingURL=homeMain.27894f6316b98064e185.js.map