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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _variables_continentsArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/continentsArray */ \"./variables/continentsArray.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n\n\nvar _jsxFileName = \"/Users/topphestmark/c/react-2/civid-vaccines/pages/index.tsx\";\n\n\n\n\nfunction Home({\n  countriesArray\n}) {\n  const {\n    0: search,\n    1: setSearch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: loading,\n    1: setLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  const countriesSearch = countriesArray.filter(con => con.country.toLowerCase().includes(search.toLowerCase()));\n\n  const handleSearch = e => {\n    e.preventDefault();\n    setSearch(e.target.value.toLowerCase());\n  };\n\n  const continentsData = countriesArray.filter(obj => _variables_continentsArray__WEBPACK_IMPORTED_MODULE_3__.continentsArray.includes(obj.country));\n  const worldData = countriesArray.filter(obj => obj.country === \"World\");\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setTimeout(() => {\n      countriesArray && setLoading(false);\n    }, 1000);\n  }, [countriesArray]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Covid Vaccines Tracker\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Covid-19 vaccines tracking per country.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"author\",\n        content: \"Topp Hestmark.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Header, {\n        children: \" Covid Vaccines Tracker \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.WorldList, {\n          worldData: worldData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.ContinentsList, {\n          continents: continentsData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {\n          type: \"text\",\n          placeholder: \"Search for countries\",\n          onChange: handleSearch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.CountriesList, {\n          countries: countriesSearch\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const res = await fetch(\"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json\");\n  const countriesArray = await res.json();\n  return {\n    props: {\n      countriesArray\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpZC12YWNjaW5lcy8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sIm5hbWVzIjpbIkhvbWUiLCJjb3VudHJpZXNBcnJheSIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb3VudHJpZXNTZWFyY2giLCJmaWx0ZXIiLCJjb24iLCJjb3VudHJ5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiY29udGluZW50c0RhdGEiLCJvYmoiLCJjb250aW5lbnRzQXJyYXkiLCJ3b3JsZERhdGEiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBVWUsU0FBU0EsSUFBVCxDQUFjO0FBQzNCQztBQUQyQixDQUFkLEVBRW9DO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxRQUFNRyxlQUFlLEdBQUdOLGNBQWMsQ0FBQ08sTUFBZixDQUF1QkMsR0FBRCxJQUM1Q0EsR0FBRyxDQUFDQyxPQUFKLENBQVlDLFdBQVosR0FBMEJDLFFBQTFCLENBQW1DVixNQUFNLENBQUNTLFdBQVAsRUFBbkMsQ0FEc0IsQ0FBeEI7O0FBSUEsUUFBTUUsWUFBWSxHQUFJQyxDQUFELElBQXNDO0FBQ3pEQSxLQUFDLENBQUNDLGNBQUY7QUFFQVosYUFBUyxDQUFDVyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlTixXQUFmLEVBQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsUUFBTU8sY0FBYyxHQUFHakIsY0FBYyxDQUFDTyxNQUFmLENBQXVCVyxHQUFELElBQzNDQyxnRkFBQSxDQUF5QkQsR0FBRyxDQUFDVCxPQUE3QixDQURxQixDQUF2QjtBQUlBLFFBQU1XLFNBQVMsR0FBR3BCLGNBQWMsQ0FBQ08sTUFBZixDQUNmVyxHQUFELElBQWNBLEdBQUcsQ0FBQ1QsT0FBSixLQUFnQixPQURkLENBQWxCO0FBSUFZLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxjQUFVLENBQUMsTUFBTTtBQUNmdEIsb0JBQWMsSUFBSUssVUFBVSxDQUFDLEtBQUQsQ0FBNUI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FKUSxFQUlOLENBQUNMLGNBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBTUU7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUUsOERBQUMsK0NBQUQ7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdJLE9BQU8sZ0JBQ04sOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURNLGdCQUdOO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBVyxtQkFBUyxFQUFFZ0I7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHVEQUFEO0FBQWdCLG9CQUFVLEVBQUVIO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyxrREFBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUscUJBQVcsRUFBQyxzQkFGZDtBQUdFLGtCQUFRLEVBQUVMO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQVFFLDhEQUFDLHNEQUFEO0FBQWUsbUJBQVMsRUFBRU47QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUEsa0JBREY7QUE4QkQ7QUFFTSxNQUFNaUIsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FDckIsd0dBRHFCLENBQXZCO0FBR0EsUUFBTXpCLGNBQWMsR0FBRyxNQUFNd0IsR0FBRyxDQUFDRSxJQUFKLEVBQTdCO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTDNCO0FBREs7QUFERixHQUFQO0FBS0QsQ0FYTSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCB7IGNvbnRpbmVudHNBcnJheSB9IGZyb20gXCIuLi92YXJpYWJsZXMvY29udGluZW50c0FycmF5XCI7XG5cbmltcG9ydCB7XG4gIExheW91dCxcbiAgSGVhZGVyLFxuICBQcm9ncmVzc0JhcixcbiAgQ29udGluZW50c0xpc3QsXG4gIENvdW50cmllc0xpc3QsXG4gIFNlYXJjaEJhcixcbiAgV29ybGRMaXN0LFxufSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtcbiAgY291bnRyaWVzQXJyYXksXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY291bnRyaWVzU2VhcmNoID0gY291bnRyaWVzQXJyYXkuZmlsdGVyKChjb246IGFueSkgPT5cbiAgICBjb24uY291bnRyeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgfTtcblxuICBjb25zdCBjb250aW5lbnRzRGF0YSA9IGNvdW50cmllc0FycmF5LmZpbHRlcigob2JqOiBhbnkpID0+XG4gICAgY29udGluZW50c0FycmF5LmluY2x1ZGVzKG9iai5jb3VudHJ5KVxuICApO1xuXG4gIGNvbnN0IHdvcmxkRGF0YSA9IGNvdW50cmllc0FycmF5LmZpbHRlcihcbiAgICAob2JqOiBhbnkpID0+IG9iai5jb3VudHJ5ID09PSBcIldvcmxkXCJcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY291bnRyaWVzQXJyYXkgJiYgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtjb3VudHJpZXNBcnJheV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q292aWQgVmFjY2luZXMgVHJhY2tlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQ292aWQtMTkgdmFjY2luZXMgdHJhY2tpbmcgcGVyIGNvdW50cnkuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJUb3BwIEhlc3RtYXJrLlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXI+IENvdmlkIFZhY2NpbmVzIFRyYWNrZXIgPC9IZWFkZXI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxQcm9ncmVzc0JhciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8V29ybGRMaXN0IHdvcmxkRGF0YT17d29ybGREYXRhfSAvPlxuICAgICAgICAgICAgPENvbnRpbmVudHNMaXN0IGNvbnRpbmVudHM9e2NvbnRpbmVudHNEYXRhfSAvPlxuICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjb3VudHJpZXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb3VudHJpZXNMaXN0IGNvdW50cmllcz17Y291bnRyaWVzU2VhcmNofSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vb3dpZC9jb3ZpZC0xOS1kYXRhL21hc3Rlci9wdWJsaWMvZGF0YS92YWNjaW5hdGlvbnMvdmFjY2luYXRpb25zLmpzb25cIlxuICApO1xuICBjb25zdCBjb3VudHJpZXNBcnJheSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY291bnRyaWVzQXJyYXksXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./variables/continentsArray.ts":
/*!**************************************!*\
  !*** ./variables/continentsArray.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"continentsArray\": function() { return /* binding */ continentsArray; }\n/* harmony export */ });\nconst continentsArray = [\"Africa\", \"Asia\", \"Europe\", \"North America\", \"Oceania\", \"South America\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpZC12YWNjaW5lcy8uL3ZhcmlhYmxlcy9jb250aW5lbnRzQXJyYXkudHM/NTU4OCJdLCJuYW1lcyI6WyJjb250aW5lbnRzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxlQUF5QixHQUFHLENBQ3ZDLFFBRHVDLEVBRXZDLE1BRnVDLEVBR3ZDLFFBSHVDLEVBSXZDLGVBSnVDLEVBS3ZDLFNBTHVDLEVBTXZDLGVBTnVDLENBQWxDIiwiZmlsZSI6Ii4vdmFyaWFibGVzL2NvbnRpbmVudHNBcnJheS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb250aW5lbnRzQXJyYXk6IHN0cmluZ1tdID0gW1xuICBcIkFmcmljYVwiLFxuICBcIkFzaWFcIixcbiAgXCJFdXJvcGVcIixcbiAgXCJOb3J0aCBBbWVyaWNhXCIsXG4gIFwiT2NlYW5pYVwiLFxuICBcIlNvdXRoIEFtZXJpY2FcIixcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./variables/continentsArray.ts\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_index_ts"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();