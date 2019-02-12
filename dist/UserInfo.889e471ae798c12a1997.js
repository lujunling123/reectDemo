(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./src/home/UserInfo.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./src/home/UserInfo.js ***!
  \**********************************************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _userInfo = __webpack_require__(/*! actions/userInfo */ "./src/redux/actions/userInfo.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
    _inherits(UserInfo, _Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$userInfo = this.props.userInfo,
                userInfo = _props$userInfo.userInfo,
                isLoading = _props$userInfo.isLoading,
                errorMsg = _props$userInfo.errorMsg;

            return _react2.default.createElement(
                'div',
                null,
                isLoading ? '请求信息中......' : errorMsg ? errorMsg : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u4FE1\u606F\uFF1A'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u7528\u6237\u540D\uFF1A',
                        userInfo.name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u4ECB\u7ECD\uFF1A',
                        userInfo.intro
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.getUserInfo();
                        } },
                    '\u8BF7\u6C42\u7528\u6237\u4FE1\u606F'
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

    return UserInfo;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return { userInfo: state.userInfo };
}, { getUserInfo: _userInfo.getUserInfo })(UserInfo);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(UserInfo, 'UserInfo', 'C:/Users/admin/Desktop/reectDemo/src/home/UserInfo.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/admin/Desktop/reectDemo/src/home/UserInfo.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9Vc2VySW5mby5qcyJdLCJuYW1lcyI6WyJVc2VySW5mbyIsInByb3BzIiwidXNlckluZm8iLCJpc0xvYWRpbmciLCJlcnJvck1zZyIsIm5hbWUiLCJpbnRybyIsImdldFVzZXJJbmZvIiwiQ29tcG9uZW50Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7aUNBRU87QUFBQTs7QUFBQSxrQ0FDbUMsS0FBS0MsS0FBTCxDQUFXQyxRQUQ5QztBQUFBLGdCQUNFQSxRQURGLG1CQUNFQSxRQURGO0FBQUEsZ0JBQ1lDLFNBRFosbUJBQ1lBLFNBRFo7QUFBQSxnQkFDdUJDLFFBRHZCLG1CQUN1QkEsUUFEdkI7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBO0FBRUlELDRCQUFZLGFBQVosR0FFUUMsV0FBV0EsUUFBWCxHQUNKO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFFWjtBQUFBO0FBQUE7QUFBQTtBQUFRRixpQ0FBU0c7QUFBakIscUJBRlk7QUFHWjtBQUFBO0FBQUE7QUFBQTtBQUFPSCxpQ0FBU0k7QUFBaEI7QUFIWSxpQkFMUjtBQVlSO0FBQUE7QUFBQSxzQkFBUSxTQUFTO0FBQUEsbUNBQU0sT0FBS0wsS0FBTCxDQUFXTSxXQUFYLEVBQU47QUFBQSx5QkFBakI7QUFBQTtBQUFBO0FBWlEsYUFESjtBQWdCSDs7Ozs7Ozs7Ozs7RUFwQmtCQyxnQjs7ZUF1QlIseUJBQVEsVUFBQ0MsS0FBRDtBQUFBLFdBQVksRUFBQ1AsVUFBVU8sTUFBTVAsUUFBakIsRUFBWjtBQUFBLENBQVIsRUFBaUQsRUFBQ0ssa0NBQUQsRUFBakQsRUFBZ0VQLFFBQWhFLEM7Ozs7Ozs7Ozs7Ozs7OzRCQXZCVEEsUSIsImZpbGUiOiJVc2VySW5mby44ODllNDcxYWU3OThjMTJhMTk5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtnZXRVc2VySW5mb30gZnJvbSBcImFjdGlvbnMvdXNlckluZm9cIjtcclxuXHJcbmNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3VzZXJJbmZvLCBpc0xvYWRpbmcsIGVycm9yTXNnfSA9IHRoaXMucHJvcHMudXNlckluZm87XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nID8gJ+ivt+axguS/oeaBr+S4rS4uLi4uLicgOlxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cgPyBlcnJvck1zZyA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7nlKjmiLfkv6Hmga/vvJo8L3A+XHJcbiAgICAgICAgPHA+55So5oi35ZCN77yae3VzZXJJbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPuS7i+e7je+8mnt1c2VySW5mby5pbnRyb308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2V0VXNlckluZm8oKX0+6K+35rGC55So5oi35L+h5oGvPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiAoe3VzZXJJbmZvOiBzdGF0ZS51c2VySW5mb30pLCB7Z2V0VXNlckluZm99KShVc2VySW5mbyk7Il0sInNvdXJjZVJvb3QiOiIifQ==