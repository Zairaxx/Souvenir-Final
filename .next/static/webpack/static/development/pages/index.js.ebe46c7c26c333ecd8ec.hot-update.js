webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MySouvenirs.js":
/*!***********************************!*\
  !*** ./components/MySouvenirs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brandontsegai/Desktop/Souvenir master-final/Souvenir-master/Souvenir-master/components/MySouvenirs.js";



var ElementContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MySouvenirs__ElementContainer",
  componentId: "sc-1ldl8qa-0"
})(["display:flex;justify-content:", ";padding:", ";font-family:'Ubuntu',sans-serif;"], function (props) {
  return props.center ? "center" : props.end ? "flex-end" : "flex-start";
}, function (props) {
  return props.center ? 0 : props.end ? "0 5px 0 0" : "0 0 0 5px";
});
var SouvenirWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MySouvenirs__SouvenirWrapper",
  componentId: "sc-1ldl8qa-1"
})(["border:1px solid white;border-radius:14px;min-width:80vw;margin:0 0 20px 0;background-image:", ";"], function (props) {
  return props.color || "background-image: linear-gradient(to right, #000 , #784343)";
});
var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MySouvenirs__HeroBg",
  componentId: "sc-1ldl8qa-2"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-image:linear-gradient(to right,#000,#333);min-width:100vw;min-height:100vh;overflow:visible;"]);
var HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "MySouvenirs__HeaderText",
  componentId: "sc-1ldl8qa-3"
})(["font-size:2.4em;@import url('https://fonts.googleapis.com/css?family=Cinzel');font-family:'Cinzel',serif;color:#FFF"]);
var ParagraphText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
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
        color: souvenir.color,
        className: "post",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, souvenir.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 0 15px 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, souvenir.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 5px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, souvenir.souvenirStory)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        width: "20px",
        height: "20px",
        src: "../images/big-music-note.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ParagraphText, {
        margin: "0 5px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: souvenir.audio,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBg, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, souvenirList)));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MySouvenirs);

/***/ })

})
//# sourceMappingURL=index.js.ebe46c7c26c333ecd8ec.hot-update.js.map