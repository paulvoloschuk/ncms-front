exports.ids = [2];
exports.modules = {

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(134);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(163);
	
	var _async = __webpack_require__(370);
	
	var _Async = __webpack_require__(372);
	
	var _Async2 = _interopRequireDefault(_Async);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapDispatchToProps = {
	    fetchData: _async.fetchData
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        fetchedData: state.fetchedData
	    };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	    import { createSelector } from 'reselect'
	    const counter = (state) => state.counter
	    const tripleCount = createSelector(counter, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      counter: tripleCount(state)
	    })
	
	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Async2.default);

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.fetchData = exports.FETCHING_DATA = exports.FETCHED_DATA = undefined;
	
	var _defineProperty2 = __webpack_require__(363);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(61);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _ACTION_HANDLERS;
	
	exports.startFetching = startFetching;
	exports.fetchedData = fetchedData;
	exports.default = asyncReducer;
	
	var _isomorphicFetch = __webpack_require__(371);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var FETCHED_DATA = exports.FETCHED_DATA = 'FETCHED_DATA';
	var FETCHING_DATA = exports.FETCHING_DATA = 'FETCHING_DATA';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function startFetching() {
	  return {
	    type: FETCHING_DATA
	  };
	}
	
	function fetchedData(data) {
	  return {
	    type: FETCHED_DATA,
	    payload: data
	  };
	}
	
	var fetchData = exports.fetchData = function fetchData() {
	  return function (dispatch) {
	    dispatch(startFetching());
	
	    return (0, _isomorphicFetch2.default)('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
	      return response.json();
	    }).then(function (data) {
	      return dispatch(fetchedData(data));
	    });
	  };
	};
	
	var actions = exports.actions = {
	  fetchData: fetchData
	
	  // ------------------------------------
	  // Action Handlers
	  // ------------------------------------
	};var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, FETCHING_DATA, function (state, action) {
	  return (0, _extends3.default)({}, state, { fetching: true });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, FETCHED_DATA, function (state, action) {
	  return (0, _extends3.default)({}, state, { fetching: false, fetchedData: action.payload });
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = { fetching: false, fetchedData: {} };
	function asyncReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  var handler = ACTION_HANDLERS[action.type];
	
	  return handler ? handler(state, action) : state;
	}

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Async = undefined;
	
	var _stringify = __webpack_require__(5);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(133);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(137);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(155);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class;
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(111);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactResolver = __webpack_require__(345);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Async = exports.Async = (_dec = (0, _reactResolver.resolve)('fetchedData', function (props) {
	  var fetchData = props.fetchData;
	
	
	  return fetchData().then(function (action) {
	    return action.payload;
	  });
	}), _dec(_class = function (_React$Component) {
	  (0, _inherits3.default)(Async, _React$Component);
	
	  function Async() {
	    (0, _classCallCheck3.default)(this, Async);
	    return (0, _possibleConstructorReturn3.default)(this, (Async.__proto__ || (0, _getPrototypeOf2.default)(Async)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Async, [{
	    key: 'render',
	    value: function render() {
	      var fetchedData = this.props.fetchedData;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, { title: 'Async' }),
	        (0, _stringify2.default)(fetchedData)
	      );
	    }
	  }]);
	  return Async;
	}(_react2.default.Component)) || _class);
	
	
	Async.propTypes = {
	  fetchData: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Async;

/***/ })

};;
//# sourceMappingURL=2.server.js.map