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

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useStrapi\": () => (/* binding */ useStrapi)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"strapi-sdk-js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__]);\nstrapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst defaultSettings = {\n    strapi: {}\n};\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSettings);\nfunction AuthProvider({ children  }) {\n    const auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/auth/auth.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\nconst useStrapi = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\nfunction useProvideAuth() {\n    const { 0: strapi , 1: setStrapi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    }));\n    return {\n        strapi\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoL2F1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1lO0FBRW9CO0FBTW5DLE1BQU1NLGVBQWUsR0FBa0I7SUFDckNDLE1BQU0sRUFBRSxFQUFFO0NBQ1g7QUFFRCxNQUFNQyxXQUFXLGlCQUFHTCxvREFBYSxDQUFnQkcsZUFBZSxDQUFDO0FBRTFELFNBQVNHLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6QyxNQUFNQyxJQUFJLEdBQUdDLGNBQWMsRUFBRTtJQUM3QixxQkFBTyw4REFBQ0osV0FBVyxDQUFDSixRQUFRO1FBQUNTLEtBQUssRUFBRUYsSUFBSTtrQkFBR0QsUUFBUTs7Ozs7WUFBd0IsQ0FBQztDQUM3RTtBQUVNLE1BQU1JLFNBQVMsR0FBRyxJQUFNO0lBQzdCLE9BQU9aLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDLENBQUM7QUFFRixTQUFTSSxjQUFjLEdBQUc7SUFDeEIsTUFBTSxFQTlCUixHQThCU0wsTUFBTSxHQTlCZixHQThCaUJRLFNBQVMsTUFBSWQsK0NBQVEsQ0FDbEMsSUFBSUkscURBQU0sQ0FBQztRQUNUVyxHQUFHLEVBQUUsNkNBQTZDO1FBQ2xEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxLQUFLLEVBQUU7WUFDTEMsR0FBRyxFQUFFLFlBQVk7WUFDakJDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxHQUFHO2FBQUU7U0FDN0I7UUFDREMsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQyxDQUNIO0lBRUQsT0FBTztRQUNMaEIsTUFBTTtLQUNQLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdWp0Ly4vYXV0aC9hdXRoLnRzeD9iZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VDb250ZXh0LFxuICBjcmVhdGVDb250ZXh0LFxuICBQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTdHJhcGkgZnJvbSBcInN0cmFwaS1zZGstanNcIjtcblxuaW50ZXJmYWNlIFN0cmFwaUNvbnRleHQge1xuICBzdHJhcGk6IE9iamVjdDtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBTdHJhcGlDb250ZXh0ID0ge1xuICBzdHJhcGk6IHt9LFxufTtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0cmFwaUNvbnRleHQ+KGRlZmF1bHRTZXR0aW5ncyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdHJhcGkgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xuICBjb25zdCBbc3RyYXBpLCBzZXRTdHJhcGldID0gdXNlU3RhdGUoXG4gICAgbmV3IFN0cmFwaSh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zaGFyay1hcHAtbWQyc20ub25kaWdpdGFsb2NlYW4uYXBwL1wiLFxuICAgICAgcHJlZml4OiBcIi9hcGlcIixcbiAgICAgIHN0b3JlOiB7XG4gICAgICAgIGtleTogXCJzdHJhcGlfand0XCIsXG4gICAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgICAgIGNvb2tpZU9wdGlvbnM6IHsgcGF0aDogXCIvXCIgfSxcbiAgICAgIH0sXG4gICAgICBheGlvc09wdGlvbnM6IHt9LFxuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdHJhcGksXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJTdHJhcGkiLCJkZWZhdWx0U2V0dGluZ3MiLCJzdHJhcGkiLCJhdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidmFsdWUiLCJ1c2VTdHJhcGkiLCJzZXRTdHJhcGkiLCJ1cmwiLCJwcmVmaXgiLCJzdG9yZSIsImtleSIsInVzZUxvY2FsU3RvcmFnZSIsImNvb2tpZU9wdGlvbnMiLCJwYXRoIiwiYXhpb3NPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @daily-co/daily-react-hooks */ \"@daily-co/daily-react-hooks\");\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @daily-co/daily-js */ \"@daily-co/daily-js\");\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth */ \"./auth/auth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_auth__WEBPACK_IMPORTED_MODULE_5__]);\n_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: co , 1: setCo  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setCo(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3___default().createCallObject({\n            url: \"gyovDfpFyZnUKWIoeU2r\"\n        }));\n    }, []);\n    if (!co) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_auth__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__.DailyProvider, {\n            callObject: co,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUU2QjtBQUNmO0FBQ0Q7QUFDQTtBQUU1QyxTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxNQUFNLEVBUlIsR0FRU0MsRUFBRSxHQVJYLEdBUWFDLEtBQUssTUFBSU4sK0NBQVEsRUFBRTtJQUM5QkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RPLEtBQUssQ0FBQ1IsMEVBQTRCLENBQUM7WUFBRVUsR0FBRyxFQUFFLHNCQUFzQjtTQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJLENBQUNILEVBQUUsRUFBRTtRQUNQLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxxQkFDRSw4REFBQ0osb0RBQVk7a0JBQ1gsNEVBQUNKLHNFQUFhO1lBQUNZLFVBQVUsRUFBRUosRUFBRTtzQkFDM0IsNEVBQUNGLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNkOzs7OztZQUNILENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VqdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBEYWlseVByb3ZpZGVyIH0gZnJvbSBcIkBkYWlseS1jby9kYWlseS1yZWFjdC1ob29rc1wiO1xuaW1wb3J0IERhaWx5SWZyYW1lIGZyb20gXCJAZGFpbHktY28vZGFpbHktanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9hdXRoL2F1dGhcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbY28sIHNldENvXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q28oRGFpbHlJZnJhbWUuY3JlYXRlQ2FsbE9iamVjdCh7IHVybDogXCJneW92RGZwRnlablVLV0lvZVUyclwiIH0pKTtcbiAgfSwgW10pO1xuXG4gIGlmICghY28pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxEYWlseVByb3ZpZGVyIGNhbGxPYmplY3Q9e2NvfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9EYWlseVByb3ZpZGVyPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJEYWlseVByb3ZpZGVyIiwiRGFpbHlJZnJhbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY28iLCJzZXRDbyIsImNyZWF0ZUNhbGxPYmplY3QiLCJ1cmwiLCJjYWxsT2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@daily-co/daily-js":
/*!*************************************!*\
  !*** external "@daily-co/daily-js" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@daily-co/daily-js");

/***/ }),

/***/ "@daily-co/daily-react-hooks":
/*!**********************************************!*\
  !*** external "@daily-co/daily-react-hooks" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@daily-co/daily-react-hooks");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "strapi-sdk-js":
/*!********************************!*\
  !*** external "strapi-sdk-js" ***!
  \********************************/
/***/ ((module) => {

"use strict";
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