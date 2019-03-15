webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SouvenirForm.js":
/*!************************************!*\
  !*** ./components/SouvenirForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SouvenirForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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




var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "SouvenirForm__InputField",
  componentId: "sc-1929zk0-0"
})(["text-align:center;margin-bottom:2em;width:30em;border-radius:8px;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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
var FlexSlider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SouvenirForm__FlexSlider",
  componentId: "sc-1929zk0-2"
})(["background-image:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";top:", ";min-height:100vh;min-width:", ";left:", ";right:", ";overflow-x:hidden;overflow-y:", ";z-index:", ";padding:", ";"], function (props) {
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
var ColorBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "SouvenirForm__ColorBox",
  componentId: "sc-1929zk0-3"
})(["display:", ";width:13px;height:13px;background-image:", ";border:1px solid black;margin-left:5px;border-radius:3px;cursor:", ";&:hover{border:", ";}"], function (props) {
  return props.display || "flex";
}, function (props) {
  return props.color || "linear-gradient(to left, #003A3E , #141E30)";
}, function (props) {
  return props.cursor || "pointer";
}, function (props) {
  return props.hover || "3px solid black";
});
var SouvenirText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "SouvenirForm__SouvenirText",
  componentId: "sc-1929zk0-4"
})(["font-size:", ";color:", ";font-style:", ";"], function (props) {
  return props.size || "1rem";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.fontStyle || "normal";
});
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "SouvenirForm__TextArea",
  componentId: "sc-1929zk0-5"
})(["resize:none;margin:0 0 10px 0;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
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
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
          onSubmit: this.handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          minWidth: "100%",
          position: "relative",
          id: "pageOne",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "text",
          placeholder: "Name",
          id: "name",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "text",
          placeholder: "Location",
          id: "location",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
          type: "link",
          placeholder: "Add audio link",
          id: "audio",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          overflow: "visible",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, " Color:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          cursor: "auto",
          hover: "auto",
          color: this.state.color,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          width: "100%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "linear-gradient(to left, #114357 , #F29492)",
          onClick: function onClick() {
            return _this2.pickColor("linear-gradient(to left, #114357 , #F29492)");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "linear-gradient(to left, #fd746c , #ff9068)",
          onClick: function onClick() {
            return _this2.pickColor("linear-gradient(to left, #fd746c , #ff9068)");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "linear-gradient(to left, #6a3093 , #a044ff)",
          onClick: function onClick() {
            return _this2.pickColor("linear-gradient(to left, #6a3093 , #a044ff)");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "linear-gradient(to left, #f46b45 , #eea849)",
          onClick: function onClick() {
            return _this2.pickColor("linear-gradient(to left, #f46b45 , #eea849)");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
          color: "linear-gradient(to left, #003A3E , #141E30)",
          onClick: function onClick() {
            return _this2.pickColor("#FA8072");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "Write your story:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouvenirText, {
          fontStyle: "oblique",
          color: "white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, this.state.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
          cols: "50",
          rows: "15",
          id: "souvenirStory",
          onChange: this.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
          direction: "row",
          justify: "space-around",
          minWidth: "100%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "submit-souvenir",
          type: "submit",
          value: "Submit story",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          id: "cancel-form",
          type: "button",
          value: "Cancel",
          onClick: this.props.newSouvenir,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }))))));
      }
    }
  }]);

  return SouvenirForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.d63dce70e16d0c32cd97.hot-update.js.map