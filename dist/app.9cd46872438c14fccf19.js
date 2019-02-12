(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/home/App.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./src/home/App.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(/*! ./user */ "./src/home/user.js");

var _user2 = _interopRequireDefault(_user);

var _gest = __webpack_require__(/*! ./gest */ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/home/gest.js");

var _gest2 = _interopRequireDefault(_gest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class User extends Component {
//     render() {
//         return (<div>{this.props.user.name}</div>
//     );
//     }
// }

function NumList(props) {
    return _react2.default.createElement(
        'li',
        null,
        props.value
    );
}
function NumberCompe(props) {
    var numbers = props.numbers;
    // const numLists = numbers.map((number) =>
    //     <NumList key={number} value={number}/>
    // );
    return _react2.default.createElement(
        'ul',
        null,
        numbers.map(function (number) {
            return _react2.default.createElement(NumList, { key: number, value: number });
        })
    );
}

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            date: new Date(),
            usera: 'admin',
            isToggleOn: false
        };
        _this.activateLasers = _this.activateLasers.bind(_this);
        return _this;
    }
    // 挂载生命周期


    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
        // 卸载生命周期

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }

        // handleClick = () => {
        //     console.log('this is:', this);
        // }

    }, {
        key: 'activateLasers',
        value: function activateLasers(name, e) {
            console.log(this.state.isToggleOn);
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });

            console.log(this.state.isToggleOn);
        }
    }, {
        key: 'tick',
        value: function tick() {
            // setState() 来接受一个函数而不是一个对象。
            // 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var numbers = [1, 2, 3, 4, 5];
            var isToggleOn = this.state.isToggleOn;
            var model = null;
            if (isToggleOn) {
                model = _react2.default.createElement(_user2.default, { data: this.state, onClick: this.activateLasers });
            } else {
                model = _react2.default.createElement(_gest2.default, { onClick: this.activateLasers });
            }
            return _react2.default.createElement(
                'div',
                { style: {
                        width: '200px',
                        height: '80px',
                        backgroundColor: 'yellow',
                        fontSize: '24px',
                        textAlign: 'center'
                    }, className: 'App' },
                _react2.default.createElement(
                    'header',
                    { className: 'App-header' },
                    model,
                    _react2.default.createElement(NumberCompe, { numbers: numbers }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.activateLasers.bind(this, 'zhangana') },
                        this.state.isToggleOn ? 'ON' : 'OFF'
                    )
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(NumList, 'NumList', 'C:/Users/admin/Desktop/reectDemo/src/home/App.js');
    reactHotLoader.register(NumberCompe, 'NumberCompe', 'C:/Users/admin/Desktop/reectDemo/src/home/App.js');
    reactHotLoader.register(App, 'App', 'C:/Users/admin/Desktop/reectDemo/src/home/App.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/reectDemo/src/home/App.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/home/gest.js":
/*!******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./src/home/gest.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gest = function (_Component) {
    _inherits(Gest, _Component);

    function Gest(props) {
        _classCallCheck(this, Gest);

        var _this = _possibleConstructorReturn(this, (Gest.__proto__ || Object.getPrototypeOf(Gest)).call(this, props));

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Gest, [{
        key: '_handleClick',
        value: function _handleClick() {
            this.setState({
                count: ++this.state.count
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                'this is home~',
                _react2.default.createElement('br', null),
                '\u5F53\u524D\u8BA1\u6570\uFF1A',
                this.state.count,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2._handleClick();
                        } },
                    '\u81EAe\u589E'
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return Gest;
}(_react.Component);

var _default = Gest;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Gest, 'Gest', 'C:/Users/admin/Desktop/reectDemo/src/home/gest.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/reectDemo/src/home/gest.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/home/user.js":
/*!**************************!*\
  !*** ./src/home/user.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
    _inherits(User, _Component);

    function User(props) {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

        _this.state = {
            value: '',
            pass: '',
            text: '',
            selvalue: '1'
        };
        _this.handelSubmit = _this.handelSubmit.bind(_this);
        _this.handelChang = _this.handelChang.bind(_this);
        return _this;
    }

    _createClass(User, [{
        key: 'handelSubmit',
        value: function handelSubmit(event) {
            console.log(this.state);
            this.setState({
                value: '',
                pass: '',
                text: '',
                selvalue: '1'
            });
            event.preventDefault();
        }
    }, {
        key: 'handelChang',
        value: function handelChang(event) {
            console.log(event.target.value);
            // 控制全部大写
            // this.setState({value: event.target.value.toUpperCase()});
            // 多选框
            // const value = target.type === 'checkbox' ? target.checked : target.value;
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { style: {
                            width: '200px',
                            height: '80px',
                            backgroundColor: 'yellow',
                            fontSize: '24px',
                            textAlign: 'center'
                        }, onClick: this.props.onClick.bind(this, 'user') },
                    this.props.data.usera,
                    ' \u6CE8\u9500'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.data.date.toLocaleTimeString()
                ),
                '\u53D7\u63A7\u7EC4\u4EF6\uFF1A',
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handelSubmit },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Name:',
                        _react2.default.createElement('input', { type: 'text', name: 'value', value: this.state.value, onChange: this.handelChang })
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'label',
                        null,
                        'pass:',
                        _react2.default.createElement('input', { type: 'password', name: 'pass', value: this.state.pass, onChange: this.handelChang })
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'label',
                        null,
                        'textarea:',
                        _react2.default.createElement('textarea', { name: 'text', value: this.state.text, onChange: this.handelChang })
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'select',
                        { value: this.state.selvalue, onChange: this.handelChang, name: 'selvalue' },
                        _react2.default.createElement(
                            'option',
                            { value: '5' },
                            'Grapefruit'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '0' },
                            'Lime'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '1' },
                            'Coconut'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '2' },
                            'Mango'
                        )
                    ),
                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return User;
}(_react.Component);

var _default = User;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(User, 'User', 'C:/Users/admin/Desktop/reectDemo/src/home/user.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/reectDemo/src/home/user.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvZ2VzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS91c2VyLmpzIl0sIm5hbWVzIjpbIk51bUxpc3QiLCJwcm9wcyIsInZhbHVlIiwiTnVtYmVyQ29tcGUiLCJudW1iZXJzIiwibWFwIiwibnVtYmVyIiwiQXBwIiwic3RhdGUiLCJkYXRlIiwiRGF0ZSIsInVzZXJhIiwiaXNUb2dnbGVPbiIsImFjdGl2YXRlTGFzZXJzIiwiYmluZCIsInRpbWVySUQiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJjbGVhckludGVydmFsIiwibmFtZSIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJtb2RlbCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJDb21wb25lbnQiLCJHZXN0IiwiY291bnQiLCJfaGFuZGxlQ2xpY2siLCJVc2VyIiwicGFzcyIsInRleHQiLCJzZWx2YWx1ZSIsImhhbmRlbFN1Ym1pdCIsImhhbmRlbENoYW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm9uQ2xpY2siLCJkYXRhIiwidG9Mb2NhbGVUaW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixXQUFPO0FBQUE7QUFBQTtBQUFLQSxjQUFNQztBQUFYLEtBQVA7QUFDSDtBQUNELFNBQVNDLFdBQVQsQ0FBc0JGLEtBQXRCLEVBQTZCO0FBQ3pCLFFBQU1HLFVBQVVILE1BQU1HLE9BQXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBUztBQUFBO0FBQUE7QUFBS0EsZ0JBQVFD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QTtBQUFBLDhCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSx5QkFGSjtBQUdJO0FBQUE7QUFBQSw4QkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLHlCQUhKO0FBSUk7QUFBQTtBQUFBLDhCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKSixxQkFiSjtBQW1CSSw2REFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQW5CSjtBQVpBLGFBREo7QUFvQ0g7Ozs7Ozs7Ozs7O0VBcEU2QlQsZ0I7O2VBQWJJLEk7Ozs7Ozs7Ozs7Ozs7NEJBQUFBLEkiLCJmaWxlIjoiYXBwLjljZDQ2ODcyNDM4YzE0ZmNjZjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcbmltcG9ydCBHZXN0IGZyb20gJy4vZ2VzdCdcblxuLy8gY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKDxkaXY+e3RoaXMucHJvcHMudXNlci5uYW1lfTwvZGl2PlxuLy8gICAgICk7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBOdW1MaXN0IChwcm9wcykge1xuICAgIHJldHVybiA8bGk+e3Byb3BzLnZhbHVlfTwvbGk+XG59XG5mdW5jdGlvbiBOdW1iZXJDb21wZSAocHJvcHMpIHtcbiAgICBjb25zdCBudW1iZXJzID0gcHJvcHMubnVtYmVycztcbiAgICAvLyBjb25zdCBudW1MaXN0cyA9IG51bWJlcnMubWFwKChudW1iZXIpID0+XG4gICAgLy8gICAgIDxOdW1MaXN0IGtleT17bnVtYmVyfSB2YWx1ZT17bnVtYmVyfS8+XG4gICAgLy8gKTtcbiAgICByZXR1cm4gKCA8dWw+e251bWJlcnMubWFwKChudW1iZXIpPT5cbiAgICAgICAgPE51bUxpc3Qga2V5PXtudW1iZXJ9IHZhbHVlPXtudW1iZXJ9Lz5cbiAgICApfTwvdWw+KVxufVxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHVzZXJhIDogJ2FkbWluJyxcbiAgICAgICAgICAgIGlzVG9nZ2xlT246IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmF0ZUxhc2VycyA9IHRoaXMuYWN0aXZhdGVMYXNlcnMuYmluZCh0aGlzKVxuICAgIH1cbiAgICAvLyDmjILovb3nlJ/lkb3lkajmnJ9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy50aW1lcklEID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnRpY2soKSxcbiAgICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgLy8g5Y246L2955Sf5ZG95ZGo5pyfXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoaXMgaXM6JywgdGhpcyk7XG4gICAgLy8gfVxuXG4gICAgYWN0aXZhdGVMYXNlcnMgKG5hbWUsZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzVG9nZ2xlT24pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICBpc1RvZ2dsZU9uOiAhcHJldlN0YXRlLmlzVG9nZ2xlT25cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNUb2dnbGVPbilcbiAgICB9XG5cblxuICAgIHRpY2soKSB7XG4gICAgICAgIC8vIHNldFN0YXRlKCkg5p2l5o6l5Y+X5LiA5Liq5Ye95pWw6ICM5LiN5piv5LiA5Liq5a+56LGh44CCXG4gICAgICAgIC8vIOivpeWHveaVsOWwhuaOpeaUtuWFiOWJjeeahOeKtuaAgeS9nOS4uuesrOS4gOS4quWPguaVsO+8jOWwhuatpOasoeabtOaWsOiiq+W6lOeUqOaXtueahHByb3Bz5YGa5Li656ys5LqM5Liq5Y+C5pWw77yaXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNCwgNV07XG4gICAgICAgIGNvbnN0IGlzVG9nZ2xlT24gPSB0aGlzLnN0YXRlLmlzVG9nZ2xlT247XG4gICAgICAgIGxldCBtb2RlbCA9IG51bGxcbiAgICAgICAgaWYgKGlzVG9nZ2xlT24pIHtcbiAgICAgICAgICAgIG1vZGVsID0gPFVzZXIgZGF0YT17dGhpcy5zdGF0ZX0gb25DbGljaz17dGhpcy5hY3RpdmF0ZUxhc2Vyc30vPlxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBtb2RlbCA9IDxHZXN0IG9uQ2xpY2s9e3RoaXMuYWN0aXZhdGVMYXNlcnN9Lz5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDonMjAwcHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDonODBweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOid5ZWxsb3cnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOicyNHB4JyxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcidcbiAgICAgICAgfX0gY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cbiAgICAgICAgICAgIHttb2RlbH1cbiAgICAgICAgICAgICAgICA8TnVtYmVyQ29tcGUgbnVtYmVycz17bnVtYmVyc30vPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFjdGl2YXRlTGFzZXJzLmJpbmQodGhpcywnemhhbmdhbmEnKX0+e3RoaXMuc3RhdGUuaXNUb2dnbGVPbiA/ICdPTicgOiAnT0ZGJ308L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVDbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY291bnQ6ICsrdGhpcy5zdGF0ZS5jb3VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB0aGlzIGlzIGhvbWV+PGJyLz5cclxuICAgICAgICDlvZPliY3orqHmlbDvvJp7dGhpcy5zdGF0ZS5jb3VudH08YnIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5faGFuZGxlQ2xpY2soKX0+6IeqZeWinjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcGFzczonJyxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHNlbHZhbHVlOiAnMSdcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kZWxTdWJtaXQgPSB0aGlzLmhhbmRlbFN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5oYW5kZWxDaGFuZyA9IHRoaXMuaGFuZGVsQ2hhbmcuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgaGFuZGVsU3VibWl0IChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcGFzczonJyxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIHNlbHZhbHVlOiAnMSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGVsQ2hhbmcgKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIC8vIOaOp+WItuWFqOmDqOWkp+WGmVxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xyXG4gICAgICAgIC8vIOWkmumAieahhlxyXG4gICAgICAgIC8vIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6JzgwcHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOid5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6JzI0cHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICAgICAgfX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrLmJpbmQodGhpcywndXNlcicpfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEudXNlcmF9IOazqOmUgFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0YS5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cclxuICAgICAgICAgICAg5Y+X5o6n57uE5Lu277yaXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRlbFN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPSd2YWx1ZScgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRlbENoYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3M6XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9J3Bhc3MnIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRlbENoYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWE6XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRlbENoYW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWx2YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGVsQ2hhbmd9IG5hbWU9J3NlbHZhbHVlJz5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPkdyYXBlZnJ1aXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkxpbWU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkNvY29udXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk1hbmdvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9