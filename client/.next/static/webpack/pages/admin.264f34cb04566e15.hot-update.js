"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin.tsx":
/*!*************************!*\
  !*** ./pages/admin.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"./node_modules/strapi-sdk-js/dist/index.mjs\");\n\n\n\nfunction Admin() {\n    var strapi = new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    });\n    console.log(strapi.fetchUser());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"laddar\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 19,\n                columnNumber: 19\n            }, this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"inloggad\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this),\n            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"utloggad\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this),\n            user === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return signinWithEmail(\"jakka150@email.com\", \"Jakka150!\");\n                },\n                children: [\n                    \" \",\n                    \"Login\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return signout();\n                },\n                children: \" Log out\"\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/admin.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDUztBQUVwQixTQUFTRSxLQUFLLEdBQUc7SUFDOUIsSUFBTUMsTUFBTSxHQUFHLElBQUlGLHFEQUFNLENBQUM7UUFDeEJHLEdBQUcsRUFBRSw2Q0FBNkM7UUFDbERDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLEtBQUssRUFBRTtZQUNMQyxHQUFHLEVBQUUsWUFBWTtZQUNqQkMsZUFBZSxFQUFFLEtBQUs7WUFDdEJDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLEdBQUc7YUFBRTtTQUM3QjtRQUNEQyxZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixNQUFNLENBQUNXLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDaEMscUJBQ0UsOERBQUNDLEtBQUc7O1lBQ0RDLE9BQU8sa0JBQUksOERBQUNDLEdBQUM7MEJBQUMsUUFBTTs7Ozs7b0JBQUk7WUFDeEJDLElBQUksa0JBQUksOERBQUNELEdBQUM7MEJBQUMsVUFBUTs7Ozs7b0JBQUk7WUFDdkIsQ0FBQ0MsSUFBSSxrQkFBSSw4REFBQ0QsR0FBQzswQkFBQyxVQUFROzs7OztvQkFBSTtZQUN4QkMsSUFBSSxLQUFLLElBQUksaUJBQ1osOERBQUNDLFFBQU07Z0JBQ0xDLE9BQU8sRUFBRTsyQkFBTUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQztpQkFBQTs7b0JBRWhFLEdBQUc7b0JBQUMsT0FFUDs7Ozs7O29CQUFTLGlCQUVULDhEQUFDRixRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1FLE9BQU8sRUFBRTtpQkFBQTswQkFBRSxVQUFROzs7OztvQkFBUzs7Ozs7O1lBRWpELENBQ047Q0FDSDtBQTlCdUJwQixLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluLnRzeD82YzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTdHJhcGkgZnJvbSBcInN0cmFwaS1zZGstanNcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vYXV0aC9hdXRoXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcbiAgY29uc3Qgc3RyYXBpID0gbmV3IFN0cmFwaSh7XG4gICAgdXJsOiBcImh0dHBzOi8vc2hhcmstYXBwLW1kMnNtLm9uZGlnaXRhbG9jZWFuLmFwcC9cIixcbiAgICBwcmVmaXg6IFwiL2FwaVwiLFxuICAgIHN0b3JlOiB7XG4gICAgICBrZXk6IFwic3RyYXBpX2p3dFwiLFxuICAgICAgdXNlTG9jYWxTdG9yYWdlOiBmYWxzZSxcbiAgICAgIGNvb2tpZU9wdGlvbnM6IHsgcGF0aDogXCIvXCIgfSxcbiAgICB9LFxuICAgIGF4aW9zT3B0aW9uczoge30sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHN0cmFwaS5mZXRjaFVzZXIoKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtsb2FkaW5nICYmIDxwPmxhZGRhcjwvcD59XG4gICAgICB7dXNlciAmJiA8cD5pbmxvZ2dhZDwvcD59XG4gICAgICB7IXVzZXIgJiYgPHA+dXRsb2dnYWQ8L3A+fVxuICAgICAge3VzZXIgPT09IG51bGwgPyAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduaW5XaXRoRW1haWwoXCJqYWtrYTE1MEBlbWFpbC5jb21cIiwgXCJKYWtrYTE1MCFcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKX0+IExvZyBvdXQ8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJhcGkiLCJBZG1pbiIsInN0cmFwaSIsInVybCIsInByZWZpeCIsInN0b3JlIiwia2V5IiwidXNlTG9jYWxTdG9yYWdlIiwiY29va2llT3B0aW9ucyIsInBhdGgiLCJheGlvc09wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyIiwiZGl2IiwibG9hZGluZyIsInAiLCJ1c2VyIiwiYnV0dG9uIiwib25DbGljayIsInNpZ25pbldpdGhFbWFpbCIsInNpZ25vdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.tsx\n");

/***/ })

});