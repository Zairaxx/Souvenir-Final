module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_SouvenirForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SouvenirForm */ "./components/SouvenirForm.js");
/* harmony import */ var _components_MySouvenirs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MySouvenirs */ "./components/MySouvenirs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/globals */ "react-reveal/globals");
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_globals__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/components/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







react_reveal_globals__WEBPACK_IMPORTED_MODULE_5___default()({
  ssrFadeout: true
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "App__Flex",
  componentId: "sc-16jexjb-0"
})(["background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";height:", ";top:", ";min-width:", ";left:", ";right:", ";overflow:", ";overflow-y:", ";"], function (props) {
  return props.bgColor || "auto";
}, function (props) {
  return props.display || "flex";
}, function (props) {
  return props.position || "auto";
}, function (props) {
  return props.direction || "column";
}, function (props) {
  return props.alignItems || "center";
}, function (props) {
  return props.justify || "center";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.height || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
}, function (props) {
  return props.overflow || "auto";
}, function (props) {
  return props.overflowY || "auto";
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      souvenirs: [{
        name: "Vietnam livin",
        location: "Ho chi Minh, Vietnam",
        color: "blue",
        audio: "https://www.youtube.com/watch?v=jemgIOAjGDw",
        souvenirStory: "I had fun traveling for a week. I met cool people and had great food, such as Banh Mi. Will definitely go again."
      }, {
        name: "Chile during Christmas",
        location: "Valparaiso, Chile",
        color: "blue",
        audio: "www.spotify.com",
        souvenirStory: "I had fun traveling for a week. I met cool people and had great food, such as ceviché. Will definitely go again."
      }],
      showCollection: false,
      createSouvenir: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addSouvenir", function (souvenir) {
      souvenir.id = Math.random();
      souvenir.date = "Today"; // moment().format('MMMM Do YYYY, h:mm:ss a');

      var souvenirs = [].concat(_toConsumableArray(_this.state.souvenirs), [souvenir]);

      _this.setState({
        souvenirs: souvenirs
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCollection", function (e) {
      _this.setState({
        showCollection: !_this.state.showCollection
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "newSouvenir", function (e) {
      _this.setState({
        createSouvenir: !_this.state.createSouvenir
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        justify: "space-between",
        height: "auto",
        overflow: "visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
        scrollFade: this.scrollFade,
        getCollection: this.getCollection,
        showCollection: this.state.showCollection,
        createSouvenir: this.state.createSouvenir,
        newSouvenir: this.newSouvenir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SouvenirForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        souvenirs: this.state.souvenirs,
        addSouvenir: this.addSouvenir,
        newSouvenir: this.newSouvenir,
        createSouvenir: this.state.createSouvenir,
        getCollection: this.getCollection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MySouvenirs__WEBPACK_IMPORTED_MODULE_3__["default"], {
        souvenirs: this.state.souvenirs,
        showCollection: this.state.showCollection,
        newSouvenir: this.newSouvenir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/components/Hero.js";



var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Hero__HeroText",
  componentId: "sc-1kp3y8c-0"
})(["@import url('https://fonts.googleapis.com/css?family=Cinzel');font-family:'Cinzel',serif;font-size:3.6rem;color:#FFF;text-align:center;"]);
var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__HeroBg",
  componentId: "sc-1kp3y8c-1"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-image:linear-gradient(to left,#003A3E,#141E30);min-width:100vw;min-height:100vh;overflow:visible;"]);
var scrollIt = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:translateY(0px);}50%{transform:translateY(35px);}100%{transform:translate(Y)}"]);
var HeroSlogan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Hero__HeroSlogan",
  componentId: "sc-1kp3y8c-2"
})(["@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');font-family:'Amatic SC',cursive;color:white;text-align:center;margin:-1px;"]);
var ScrollDown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__ScrollDown",
  componentId: "sc-1kp3y8c-3"
})(["animation:", " 1.5s linear infinite;"], scrollIt);
var NavSite = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__NavSite",
  componentId: "sc-1kp3y8c-4"
})(["position:relative;background-image:linear-gradient(to left,#003A3E,#141E30);min-width:100vw;min-height:100vh;display:flex;flex-direction:column;justify-content:space-around;align-items:center;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Hero__NavItem",
  componentId: "sc-1kp3y8c-5"
})(["margin:0px;border:1px solid white;border-radius:10px;min-width:160px;min-height:50px;text-align:center;display:flex;justify-content:center;align-items:center;cursor:pointer;margin:10px 10px;&:hover{background-color:white;color:black;}"]);

var Hero = function Hero(_ref) {
  var scrollFade = _ref.scrollFade,
      getCollection = _ref.getCollection,
      showCollection = _ref.showCollection,
      createSouvenir = _ref.createSouvenir,
      newSouvenir = _ref.newSouvenir;

  var imgSrc = __webpack_require__(/*! ../images/scroll-arrow-light.png */ "./images/scroll-arrow-light.png");

  if (showCollection === false && createSouvenir == false) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBg, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, " Souvenir ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), "Write it down. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), "Read it out loud. Listen closely. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), "Live it. All over again.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollDown, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: imgSrc,
      alt: "Scroll down to view more",
      width: "120px",
      height: "40px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSite, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      right: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Start a new journey", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      onClick: newSouvenir,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Create new Souvenir")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      right: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, " Take a glimpse at your memories.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
      onClick: getCollection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Collection"))))));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/MySouvenirs.js":
/*!***********************************!*\
  !*** ./components/MySouvenirs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/components/MySouvenirs.js";



var ElementContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MySouvenirs__ElementContainer",
  componentId: "sc-1ldl8qa-0"
})(["display:flex;justify-content:", ";padding:", ";font-family:'Ubuntu',sans-serif;"], function (props) {
  return props.center ? "center" : props.end ? "flex-end" : "flex-start";
}, function (props) {
  return props.center ? 0 : props.end ? "0 5px 0 0" : "0 0 0 5px";
});
var SouvenirWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MySouvenirs__SouvenirWrapper",
  componentId: "sc-1ldl8qa-1"
})(["border:1px solid white;border-radius:14px;min-width:80vw;margin:0 0 20px 0;"]);
var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MySouvenirs__HeroBg",
  componentId: "sc-1ldl8qa-2"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-image:linear-gradient(to right,#000,#784343);min-width:100vw;min-height:100vh;overflow:visible;"]);
var HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "MySouvenirs__HeaderText",
  componentId: "sc-1ldl8qa-3"
})(["font-size:2.4em;@import url('https://fonts.googleapis.com/css?family=Cinzel');font-family:'Cinzel',serif;color:#FFF"]);
var ParagraphText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "MySouvenirs__ParagraphText",
  componentId: "sc-1ldl8qa-4"
})(["font-size:1.6em;color:#FFF;@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');font-family:'Amatic SC',cursive;margin:", ";"], function (props) {
  return props.margin || "0";
});

var MySouvenirs = function MySouvenirs(_ref) {
  var souvenirs = _ref.souvenirs,
      showCollection = _ref.showCollection;

  var imgSound = __webpack_require__(/*! ../images/scroll-arrow-light.png */ "./images/scroll-arrow-light.png");

  var souvenirList = souvenirs.map(function (souvenir) {
    if (souvenir !== 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouvenirWrapper, {
        className: "post",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, souvenir.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 0 15px 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, souvenir.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 5px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, souvenir.souvenirStory)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "20px",
        height: "20px",
        src: "../images/big-music-note.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 5px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: souvenir.audio,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, souvenir.audio))));
    } else {
      return null;
    }
  });

  if (showCollection === true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBg, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, souvenirList)));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MySouvenirs);

/***/ }),

/***/ "./components/SouvenirForm.js":
/*!************************************!*\
  !*** ./components/SouvenirForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SouvenirForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MySouvenirs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MySouvenirs */ "./components/MySouvenirs.js");
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/components/SouvenirForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "SouvenirForm__InputField",
  componentId: "sc-1929zk0-0"
})(["text-align:center;margin-bottom:2em;width:30em;border-radius:8px;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SouvenirForm__Flex",
  componentId: "sc-1929zk0-1"
})(["background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";height:", ";top:", ";min-width:", ";left:", ";right:", ";overflow:", ";"], function (props) {
  return props.bgColor || "auto";
}, function (props) {
  return props.display || "flex";
}, function (props) {
  return props.position || "auto";
}, function (props) {
  return props.direction || "column";
}, function (props) {
  return props.alignItems || "center";
}, function (props) {
  return props.justify || "center";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.height || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
}, function (props) {
  return props.overflow || "auto";
});
var FlexSlider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SouvenirForm__FlexSlider",
  componentId: "sc-1929zk0-2"
})(["background-image:linear-gradient(to left,#003A3E,#141E30);display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";top:", ";min-width:", ";left:", ";right:", ";overflow-x:hidden;overflow-y:", ";z-index:", ";padding:", ";"], function (props) {
  return props.display || "flex";
}, function (props) {
  return props.position || "auto";
}, function (props) {
  return props.direction || "column";
}, function (props) {
  return props.alignItems || "center";
}, function (props) {
  return props.justify || "center";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
}, function (props) {
  return props.overflowY || "visible";
}, function (props) {
  return props.zIndex || "0";
}, function (props) {
  return props.padding || "0";
});
var ColorBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "SouvenirForm__ColorBox",
  componentId: "sc-1929zk0-3"
})(["display:", ";width:13px;height:13px;background-color:", ";border:1px solid black;margin-left:5px;border-radius:3px;cursor:", ";&:hover{border:", ";}"], function (props) {
  return props.display || "flex";
}, function (props) {
  return props.color || "white";
}, function (props) {
  return props.cursor || "pointer";
}, function (props) {
  return props.hover || "3px solid black";
});
var SouvenirText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "SouvenirForm__SouvenirText",
  componentId: "sc-1929zk0-4"
})(["font-size:", ";color:", ";font-style:", ";"], function (props) {
  return props.size || "1rem";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.fontStyle || "normal";
});
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "SouvenirForm__TextArea",
  componentId: "sc-1929zk0-5"
})(["resize:none;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "SouvenirForm__Form",
  componentId: "sc-1929zk0-6"
})(["display:flex;"]);

var SouvenirForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SouvenirForm, _Component);

  function SouvenirForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SouvenirForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SouvenirForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: "",
      location: "",
      color: "",
      audio: "",
      souvenirStory: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pickColor", function (color) {
      _this.setState({
        color: color
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.addSouvenir(_this.state);

      _this.props.newSouvenir();
    });

    return _this;
  }

  _createClass(SouvenirForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.createSouvenir === false) {
        return null;
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexSlider, {
          id: "flex-slider-wrapper",
          direction: "row",
          minWidth: "100vw",
          position: "relative",
          justify: "center",
          bgColor: this.state.color || "white",
          overflow: "visible",
          overflowY: "hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          minWidth: "100%",
          position: "relative",
          id: "pageOne",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "text",
          placeholder: "Name",
          id: "name",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "text",
          placeholder: "Location",
          id: "location",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "link",
          placeholder: "Add audio link",
          id: "audio",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          overflow: "visible",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, " Color:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          cursor: "auto",
          hover: "auto",
          color: this.state.color,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          width: "100%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "#DC143C",
          onClick: function onClick() {
            return _this2.pickColor("#DC143C");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "#87CEFA",
          onClick: function onClick() {
            return _this2.pickColor("#87CEFA");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "#1E90FF",
          onClick: function onClick() {
            return _this2.pickColor("#1E90FF");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "#00FF7F",
          onClick: function onClick() {
            return _this2.pickColor("#00FF7F");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "#FA8072",
          onClick: function onClick() {
            return _this2.pickColor("#FA8072");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, "Write your story:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouvenirText, {
          fontStyle: "oblique",
          color: "white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, this.state.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
          cols: "50",
          rows: "15",
          id: "souvenirStory",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          justify: "space-around",
          minWidth: "100%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "submit-souvenir",
          type: "submit",
          value: "Submit story",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "cancel-form",
          type: "button",
          value: "Cancel",
          onClick: this.props.newSouvenir,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }))))));
      }
    }
  }]);

  return SouvenirForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./images/scroll-arrow-light.png":
/*!***************************************!*\
  !*** ./images/scroll-arrow-light.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-reveal/globals":
/*!***************************************!*\
  !*** external "react-reveal/globals" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/globals");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map