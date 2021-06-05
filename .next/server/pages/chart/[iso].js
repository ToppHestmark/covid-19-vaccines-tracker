/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/chart/[iso]";
exports.ids = ["pages/chart/[iso]"];
exports.modules = {

/***/ "./pages/chart/[iso].tsx":
/*!*******************************!*\
  !*** ./pages/chart/[iso].tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n\nvar _jsxFileName = \"/Users/topphestmark/c/react-2/civid-vaccines/pages/chart/[iso].tsx\";\n\n\n\nconst ChartPage = ({\n  countriesArray\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const countryIsoCode = router.query.iso;\n  const selectedCountry = countriesArray.find(obj => obj.iso_code === countryIsoCode);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {\n      children: [\" \", selectedCountry.country.toUpperCase(), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Chart, {\n      selectedCountry: selectedCountry\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartPage);\nconst getStaticProps = async () => {\n  const res = await fetch(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json\");\n  const countriesArray = await res.json();\n  return {\n    props: {\n      countriesArray\n    }\n  };\n};\nasync function getStaticPaths() {\n  const res = await fetch(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json\");\n  const countries = await res.json();\n  const paths = countries.map(country => ({\n    params: {\n      iso: country.iso_code\n    }\n  }));\n  return {\n    paths,\n    fallback: \"blocking\"\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpZC12YWNjaW5lcy8uL3BhZ2VzL2NoYXJ0L1tpc29dLnRzeD9lN2MyIl0sIm5hbWVzIjpbIkNoYXJ0UGFnZSIsImNvdW50cmllc0FycmF5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY291bnRyeUlzb0NvZGUiLCJxdWVyeSIsImlzbyIsInNlbGVjdGVkQ291bnRyeSIsImZpbmQiLCJvYmoiLCJpc29fY29kZSIsImNvdW50cnkiLCJ0b1VwcGVyQ2FzZSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsImNvdW50cmllcyIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiZmFsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFDakJDO0FBRGlCLENBQUQsS0FFb0M7QUFDcEQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLGNBQWMsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEdBQXBDO0FBRUEsUUFBTUMsZUFBZSxHQUFHTixjQUFjLENBQUNPLElBQWYsQ0FDckJDLEdBQUQsSUFBY0EsR0FBRyxDQUFDQyxRQUFKLEtBQWlCTixjQURULENBQXhCO0FBSUEsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBQSw0QkFDRSw4REFBQywrQ0FBRDtBQUFBLHNCQUFVRyxlQUFlLENBQUNJLE9BQWhCLENBQXdCQyxXQUF4QixFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDhDQUFEO0FBQU8scUJBQWUsRUFBRUw7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBaEJEOztBQWtCQSwrREFBZVAsU0FBZjtBQUVPLE1BQU1hLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3JCLHdHQURxQixDQUF2QjtBQUdBLFFBQU1kLGNBQWMsR0FBRyxNQUFNYSxHQUFHLENBQUNFLElBQUosRUFBN0I7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMaEI7QUFESztBQURGLEdBQVA7QUFLRCxDQVhNO0FBYUEsZUFBZWlCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUosR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsd0dBRHFCLENBQXZCO0FBR0EsUUFBTUksU0FBUyxHQUFHLE1BQU1MLEdBQUcsQ0FBQ0UsSUFBSixFQUF4QjtBQUVBLFFBQU1JLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxHQUFWLENBQWVWLE9BQUQsS0FBeUI7QUFDbkRXLFVBQU0sRUFBRTtBQUFFaEIsU0FBRyxFQUFFSyxPQUFPLENBQUNEO0FBQWY7QUFEMkMsR0FBekIsQ0FBZCxDQUFkO0FBSUEsU0FBTztBQUFFVSxTQUFGO0FBQVNHLFlBQVEsRUFBRTtBQUFuQixHQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9jaGFydC9baXNvXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExheW91dCwgQ2hhcnQsIEhlYWRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgQ291bnRyaWVzIGZyb20gXCIuL0NoYXJ0Lm1vZGVsc1wiO1xuXG5jb25zdCBDaGFydFBhZ2UgPSAoe1xuICBjb3VudHJpZXNBcnJheSxcbn06IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNvdW50cnlJc29Db2RlID0gcm91dGVyLnF1ZXJ5LmlzbztcblxuICBjb25zdCBzZWxlY3RlZENvdW50cnkgPSBjb3VudHJpZXNBcnJheS5maW5kKFxuICAgIChvYmo6IGFueSkgPT4gb2JqLmlzb19jb2RlID09PSBjb3VudHJ5SXNvQ29kZVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+IHtzZWxlY3RlZENvdW50cnkuY291bnRyeS50b1VwcGVyQ2FzZSgpfSA8L0hlYWRlcj5cbiAgICAgIDxDaGFydCBzZWxlY3RlZENvdW50cnk9e3NlbGVjdGVkQ291bnRyeX0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0UGFnZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vd2lkL2NvdmlkLTE5LWRhdGEvbWFzdGVyL3B1YmxpYy9kYXRhL3ZhY2NpbmF0aW9ucy92YWNjaW5hdGlvbnMuanNvblwiXG4gICk7XG4gIGNvbnN0IGNvdW50cmllc0FycmF5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb3VudHJpZXNBcnJheSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vd2lkL2NvdmlkLTE5LWRhdGEvbWFzdGVyL3B1YmxpYy9kYXRhL3ZhY2NpbmF0aW9ucy92YWNjaW5hdGlvbnMuanNvblwiXG4gICk7XG4gIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBjb3VudHJpZXMubWFwKChjb3VudHJ5OiBDb3VudHJpZXMpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlzbzogY291bnRyeS5pc29fY29kZSB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBcImJsb2NraW5nXCIgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chart/[iso].tsx\n");

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("recharts");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_index_ts"], function() { return __webpack_exec__("./pages/chart/[iso].tsx"); });
module.exports = __webpack_exports__;

})();