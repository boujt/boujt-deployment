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
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./auth/auth.tsx":
/*!***********************!*\
  !*** ./auth/auth.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useStrapi\": () => (/* binding */ useStrapi)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"strapi-sdk-js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__]);\nstrapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst defaultSettings = {\n    strapi: {}\n};\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSettings);\nfunction AuthProvider({ children  }) {\n    const auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/auth/auth.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\nconst useStrapi = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\nfunction useProvideAuth() {\n    const { 0: strapi , 1: setStrapi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    }));\n    return {\n        strapi\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoL2F1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1lO0FBRW9CO0FBTW5DLE1BQU1NLGVBQWUsR0FBa0I7SUFDckNDLE1BQU0sRUFBRSxFQUFFO0NBQ1g7QUFFRCxNQUFNQyxXQUFXLGlCQUFHTCxvREFBYSxDQUFnQkcsZUFBZSxDQUFDO0FBRTFELFNBQVNHLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6QyxNQUFNQyxJQUFJLEdBQUdDLGNBQWMsRUFBRTtJQUM3QixxQkFBTyw4REFBQ0osV0FBVyxDQUFDSixRQUFRO1FBQUNTLEtBQUssRUFBRUYsSUFBSTtrQkFBR0QsUUFBUTs7Ozs7WUFBd0IsQ0FBQztDQUM3RTtBQUVNLE1BQU1JLFNBQVMsR0FBRyxJQUFNO0lBQzdCLE9BQU9aLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDLENBQUM7QUFFRixTQUFTSSxjQUFjLEdBQUc7SUFDeEIsTUFBTSxFQTlCUixHQThCU0wsTUFBTSxHQTlCZixHQThCaUJRLFNBQVMsTUFBSWQsK0NBQVEsQ0FDbEMsSUFBSUkscURBQU0sQ0FBQztRQUNUVyxHQUFHLEVBQUUsNkNBQTZDO1FBQ2xEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxLQUFLLEVBQUU7WUFDTEMsR0FBRyxFQUFFLFlBQVk7WUFDakJDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxHQUFHO2FBQUU7U0FDN0I7UUFDREMsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQyxDQUNIO0lBRUQsT0FBTztRQUNMaEIsTUFBTTtLQUNQLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdWp0Ly4vYXV0aC9hdXRoLnRzeD9iZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VDb250ZXh0LFxuICBjcmVhdGVDb250ZXh0LFxuICBQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTdHJhcGkgZnJvbSBcInN0cmFwaS1zZGstanNcIjtcblxuaW50ZXJmYWNlIFN0cmFwaUNvbnRleHQge1xuICBzdHJhcGk6IE9iamVjdDtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBTdHJhcGlDb250ZXh0ID0ge1xuICBzdHJhcGk6IHt9LFxufTtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0cmFwaUNvbnRleHQ+KGRlZmF1bHRTZXR0aW5ncyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VQcm92aWRlQXV0aCgpO1xuICByZXR1cm4gPGF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRofT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdHJhcGkgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KGF1dGhDb250ZXh0KTtcbn07XG5cbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xuICBjb25zdCBbc3RyYXBpLCBzZXRTdHJhcGldID0gdXNlU3RhdGUoXG4gICAgbmV3IFN0cmFwaSh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zaGFyay1hcHAtbWQyc20ub25kaWdpdGFsb2NlYW4uYXBwL1wiLFxuICAgICAgcHJlZml4OiBcIi9hcGlcIixcbiAgICAgIHN0b3JlOiB7XG4gICAgICAgIGtleTogXCJzdHJhcGlfand0XCIsXG4gICAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgICAgIGNvb2tpZU9wdGlvbnM6IHsgcGF0aDogXCIvXCIgfSxcbiAgICAgIH0sXG4gICAgICBheGlvc09wdGlvbnM6IHt9LFxuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdHJhcGksXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJTdHJhcGkiLCJkZWZhdWx0U2V0dGluZ3MiLCJzdHJhcGkiLCJhdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidmFsdWUiLCJ1c2VTdHJhcGkiLCJzZXRTdHJhcGkiLCJ1cmwiLCJwcmVmaXgiLCJzdG9yZSIsImtleSIsInVzZUxvY2FsU3RvcmFnZSIsImNvb2tpZU9wdGlvbnMiLCJwYXRoIiwiYXhpb3NPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ }),

/***/ "./pages/admin.tsx":
/*!*************************!*\
  !*** ./pages/admin.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth */ \"./auth/auth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_auth__WEBPACK_IMPORTED_MODULE_2__]);\n_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Admin() {\n    const { strapi  } = (0,_auth_auth__WEBPACK_IMPORTED_MODULE_2__.useStrapi)();\n    console.log(strapi);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>strapi.login({\n                        identifier: \"jakka150@email.com\",\n                        password: \"Jakka150!\"\n                    })\n                ,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>strapi.logout()\n                ,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFd0I7QUFDbkMsU0FBU0UsS0FBSyxHQUFHO0lBQzlCLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLHFEQUFTLEVBQUU7SUFDOUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUVwQixxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRSxJQUNQTCxNQUFNLENBQUNNLEtBQUssQ0FBQzt3QkFDWEMsVUFBVSxFQUFFLG9CQUFvQjt3QkFDaENDLFFBQVEsRUFBRSxXQUFXO3FCQUN0QixDQUFDO2dCQUFBOzBCQUVMLE9BRUQ7Ozs7O29CQUFTOzBCQUNULDhEQUFDSixRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTUwsTUFBTSxDQUFDUyxNQUFNLEVBQUU7Z0JBQUE7MEJBQUUsU0FBTzs7Ozs7b0JBQVM7Ozs7OztZQUNwRCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VqdC8uL3BhZ2VzL2FkbWluLnRzeD82YzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHJhcGkgZnJvbSBcInN0cmFwaS1zZGstanNcIjtcbmltcG9ydCB7IHVzZUF1dGgsIHVzZVN0cmFwaSB9IGZyb20gXCIuLi9hdXRoL2F1dGhcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCB7IHN0cmFwaSB9ID0gdXNlU3RyYXBpKCk7XG4gIGNvbnNvbGUubG9nKHN0cmFwaSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIHN0cmFwaS5sb2dpbih7XG4gICAgICAgICAgICBpZGVudGlmaWVyOiBcImpha2thMTUwQGVtYWlsLmNvbVwiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiSmFra2ExNTAhXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICBMb2dpblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0cmFwaS5sb2dvdXQoKX0+TG9nIG91dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RyYXBpIiwiQWRtaW4iLCJzdHJhcGkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImxvZ2luIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/admin.tsx"));
module.exports = __webpack_exports__;

})();