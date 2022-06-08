"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./auth/auth.tsx":
/*!***********************!*\
  !*** ./auth/auth.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useStrapi\": () => (/* binding */ useStrapi)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"strapi-sdk-js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__]);\nstrapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst defaultSettings = {\n    strapi: {}\n};\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSettings);\nfunction AuthProvider({ children  }) {\n    const auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\programming\\\\weknowit\\\\boujt\\\\boujt\\\\client\\\\auth\\\\auth.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\nconst useStrapi = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\nfunction useProvideAuth() {\n    const { 0: strapi , 1: setStrapi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    }));\n    return {\n        strapi\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoL2F1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1lO0FBRW9CO0FBTW5DLE1BQU1NLGVBQWUsR0FBa0I7SUFDckNDLE1BQU0sRUFBRSxFQUFFO0NBQ1g7QUFFRCxNQUFNQyxXQUFXLGlCQUFHTCxvREFBYSxDQUFnQkcsZUFBZSxDQUFDO0FBRTFELFNBQVNHLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6QyxNQUFNQyxJQUFJLEdBQUdDLGNBQWMsRUFBRTtJQUM3QixxQkFBTyw4REFBQ0osV0FBVyxDQUFDSixRQUFRO1FBQUNTLEtBQUssRUFBRUYsSUFBSTtrQkFBR0QsUUFBUTs7Ozs7WUFBd0IsQ0FBQztDQUM3RTtBQUVNLE1BQU1JLFNBQVMsR0FBRyxJQUFNO0lBQzdCLE9BQU9aLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDLENBQUM7QUFFRixTQUFTSSxjQUFjLEdBQUc7SUFDeEIsTUFBTSxFQTlCUixHQThCU0wsTUFBTSxHQTlCZixHQThCaUJRLFNBQVMsTUFBSWQsK0NBQVEsQ0FDbEMsSUFBSUkscURBQU0sQ0FBQztRQUNUVyxHQUFHLEVBQUUsNkNBQTZDO1FBQ2xEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxLQUFLLEVBQUU7WUFDTEMsR0FBRyxFQUFFLFlBQVk7WUFDakJDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxHQUFHO2FBQUU7U0FDN0I7UUFDREMsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQyxDQUNIO0lBRUQsT0FBTztRQUNMaEIsTUFBTTtLQUNQLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdWp0Ly4vYXV0aC9hdXRoLnRzeD9iZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDb250ZXh0LFxyXG4gIGNyZWF0ZUNvbnRleHQsXHJcbiAgUHJvdmlkZXIsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU3RyYXBpIGZyb20gXCJzdHJhcGktc2RrLWpzXCI7XHJcblxyXG5pbnRlcmZhY2UgU3RyYXBpQ29udGV4dCB7XHJcbiAgc3RyYXBpOiBPYmplY3Q7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5nczogU3RyYXBpQ29udGV4dCA9IHtcclxuICBzdHJhcGk6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0cmFwaUNvbnRleHQ+KGRlZmF1bHRTZXR0aW5ncyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0cmFwaSA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VQcm92aWRlQXV0aCgpIHtcclxuICBjb25zdCBbc3RyYXBpLCBzZXRTdHJhcGldID0gdXNlU3RhdGUoXHJcbiAgICBuZXcgU3RyYXBpKHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vc2hhcmstYXBwLW1kMnNtLm9uZGlnaXRhbG9jZWFuLmFwcC9cIixcclxuICAgICAgcHJlZml4OiBcIi9hcGlcIixcclxuICAgICAgc3RvcmU6IHtcclxuICAgICAgICBrZXk6IFwic3RyYXBpX2p3dFwiLFxyXG4gICAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXHJcbiAgICAgICAgY29va2llT3B0aW9uczogeyBwYXRoOiBcIi9cIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBheGlvc09wdGlvbnM6IHt9LFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RyYXBpLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiU3RyYXBpIiwiZGVmYXVsdFNldHRpbmdzIiwic3RyYXBpIiwiYXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInZhbHVlIiwidXNlU3RyYXBpIiwic2V0U3RyYXBpIiwidXJsIiwicHJlZml4Iiwic3RvcmUiLCJrZXkiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJjb29raWVPcHRpb25zIiwicGF0aCIsImF4aW9zT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @daily-co/daily-react-hooks */ \"@daily-co/daily-react-hooks\");\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @daily-co/daily-js */ \"@daily-co/daily-js\");\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth */ \"./auth/auth.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_auth__WEBPACK_IMPORTED_MODULE_4__]);\n_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: co , 1: setCo  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCo(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_2___default().createCallObject({\n            url: \"gyovDfpFyZnUKWIoeU2r\"\n        }));\n    }, []);\n    if (!co) {\n        return null;\n    }\n    // ChakraProvider lets us use theme functionality throughout the context tree\n    // TODO: Explain other provider wrappers\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_auth__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_1__.DailyProvider, {\n                callObject: co,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\programming\\\\weknowit\\\\boujt\\\\boujt\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\programming\\\\weknowit\\\\boujt\\\\boujt\\\\client\\\\pages\\\\_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\programming\\\\weknowit\\\\boujt\\\\boujt\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\programming\\\\weknowit\\\\boujt\\\\boujt\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNmO0FBQ0Q7QUFDQTtBQUNNO0FBRWxELFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELE1BQU0sRUFSUixHQVFTQyxFQUFFLEdBUlgsR0FRYUMsS0FBSyxNQUFJUCwrQ0FBUSxFQUFFO0lBQzlCRCxnREFBUyxDQUFDLElBQU07UUFDZFEsS0FBSyxDQUFDVCwwRUFBNEIsQ0FBQztZQUFFVyxHQUFHLEVBQUUsc0JBQXNCO1NBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQ0gsRUFBRSxFQUFFO1FBQ1AsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELDZFQUE2RTtJQUM3RSx3Q0FBd0M7SUFDeEMscUJBQ0UsOERBQUNKLDREQUFjO2tCQUNiLDRFQUFDRCxvREFBWTtzQkFDWCw0RUFBQ0osc0VBQWE7Z0JBQUNhLFVBQVUsRUFBRUosRUFBRTswQkFDM0IsNEVBQUNGLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNkOzs7OztnQkFDSDs7Ozs7WUFDQSxDQUNqQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdWp0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IERhaWx5UHJvdmlkZXIgfSBmcm9tIFwiQGRhaWx5LWNvL2RhaWx5LXJlYWN0LWhvb2tzXCI7XHJcbmltcG9ydCBEYWlseUlmcmFtZSBmcm9tIFwiQGRhaWx5LWNvL2RhaWx5LWpzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2F1dGgvYXV0aFwiO1xyXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgW2NvLCBzZXRDb10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDbyhEYWlseUlmcmFtZS5jcmVhdGVDYWxsT2JqZWN0KHsgdXJsOiBcImd5b3ZEZnBGeVpuVUtXSW9lVTJyXCIgfSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFjbykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBDaGFrcmFQcm92aWRlciBsZXRzIHVzIHVzZSB0aGVtZSBmdW5jdGlvbmFsaXR5IHRocm91Z2hvdXQgdGhlIGNvbnRleHQgdHJlZVxyXG4gIC8vIFRPRE86IEV4cGxhaW4gb3RoZXIgcHJvdmlkZXIgd3JhcHBlcnNcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxEYWlseVByb3ZpZGVyIGNhbGxPYmplY3Q9e2NvfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0RhaWx5UHJvdmlkZXI+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkRhaWx5UHJvdmlkZXIiLCJEYWlseUlmcmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aFByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvIiwic2V0Q28iLCJjcmVhdGVDYWxsT2JqZWN0IiwidXJsIiwiY2FsbE9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@daily-co/daily-js":
/*!*************************************!*\
  !*** external "@daily-co/daily-js" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@daily-co/daily-js");

/***/ }),

/***/ "@daily-co/daily-react-hooks":
/*!**********************************************!*\
  !*** external "@daily-co/daily-react-hooks" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@daily-co/daily-react-hooks");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "strapi-sdk-js":
/*!********************************!*\
  !*** external "strapi-sdk-js" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("strapi-sdk-js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();