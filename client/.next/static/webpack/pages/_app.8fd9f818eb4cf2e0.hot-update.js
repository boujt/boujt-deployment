"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./auth/auth.tsx":
/*!***********************!*\
  !*** ./auth/auth.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useStrapi\": function() { return /* binding */ useStrapi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"./node_modules/strapi-sdk-js/dist/index.mjs\");\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar defaultSettings = {\n    strapi: {}\n};\nvar authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSettings);\nfunction AuthProvider(param) {\n    var children = param.children;\n    _s();\n    var auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/auth/auth.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\n_s(AuthProvider, \"XNU4Jn8u4aVzJknlKOHFJq03xMo=\", false, function() {\n    return [\n        useProvideAuth\n    ];\n});\n_c = AuthProvider;\nvar useStrapi = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\n_s1(useStrapi, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useProvideAuth() {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    })), strapi = ref[0], setStrapi = ref[1];\n    return {\n        strapi: strapi\n    };\n}\n_s2(useProvideAuth, \"AD8qjR/Lpxs3+CFhID1Tpqj9fjc=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hdXRoL2F1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQU1lO0FBRW9COztBQU1uQyxJQUFNTSxlQUFlLEdBQWtCO0lBQ3JDQyxNQUFNLEVBQUUsRUFBRTtDQUNYO0FBRUQsSUFBTUMsV0FBVyxpQkFBR0wsb0RBQWEsQ0FBZ0JHLGVBQWUsQ0FBQztBQUUxRCxTQUFTRyxZQUFZLENBQUMsS0FBWSxFQUFFO1FBQWQsUUFBVSxHQUFWLEtBQVksQ0FBVkMsUUFBUTs7SUFDckMsSUFBTUMsSUFBSSxHQUFHQyxjQUFjLEVBQUU7SUFDN0IscUJBQU8sOERBQUNKLFdBQVcsQ0FBQ0osUUFBUTtRQUFDUyxLQUFLLEVBQUVGLElBQUk7a0JBQUdELFFBQVE7Ozs7O1lBQXdCLENBQUM7Q0FDN0U7R0FIZUQsWUFBWTs7UUFDYkcsY0FBYzs7O0FBRGJILEtBQUFBLFlBQVk7QUFLckIsSUFBTUssU0FBUyxHQUFHLFdBQU07O0lBQzdCLE9BQU9aLGlEQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDLENBQUM7SUFGV00sU0FBUztBQUl0QixTQUFTRixjQUFjLEdBQUc7O0lBQ3hCLElBQTRCWCxHQVczQixHQVgyQkEsK0NBQVEsQ0FDbEMsSUFBSUkscURBQU0sQ0FBQztRQUNUVSxHQUFHLEVBQUUsNkNBQTZDO1FBQ2xEQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxLQUFLLEVBQUU7WUFDTEMsR0FBRyxFQUFFLFlBQVk7WUFDakJDLGVBQWUsRUFBRSxLQUFLO1lBQ3RCQyxhQUFhLEVBQUU7Z0JBQUVDLElBQUksRUFBRSxHQUFHO2FBQUU7U0FDN0I7UUFDREMsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQyxDQUNILEVBekNILE1BOEJlLEdBQWVyQixHQVczQixHQVhZLEVBOUJmLFNBOEIwQixHQUFJQSxHQVczQixHQVh1QjtJQWF4QixPQUFPO1FBQ0xNLE1BQU0sRUFBTkEsTUFBTTtLQUNQLENBQUM7Q0FDSDtJQWpCUUssY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hdXRoL2F1dGgudHN4P2JlMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUNvbnRleHQsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIFByb3ZpZGVyLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFN0cmFwaSBmcm9tIFwic3RyYXBpLXNkay1qc1wiO1xuXG5pbnRlcmZhY2UgU3RyYXBpQ29udGV4dCB7XG4gIHN0cmFwaTogT2JqZWN0O1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IFN0cmFwaUNvbnRleHQgPSB7XG4gIHN0cmFwaToge30sXG59O1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RyYXBpQ29udGV4dD4oZGVmYXVsdFNldHRpbmdzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVN0cmFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XG4gIGNvbnN0IFtzdHJhcGksIHNldFN0cmFwaV0gPSB1c2VTdGF0ZShcbiAgICBuZXcgU3RyYXBpKHtcbiAgICAgIHVybDogXCJodHRwczovL3NoYXJrLWFwcC1tZDJzbS5vbmRpZ2l0YWxvY2Vhbi5hcHAvXCIsXG4gICAgICBwcmVmaXg6IFwiL2FwaVwiLFxuICAgICAgc3RvcmU6IHtcbiAgICAgICAga2V5OiBcInN0cmFwaV9qd3RcIixcbiAgICAgICAgdXNlTG9jYWxTdG9yYWdlOiBmYWxzZSxcbiAgICAgICAgY29va2llT3B0aW9uczogeyBwYXRoOiBcIi9cIiB9LFxuICAgICAgfSxcbiAgICAgIGF4aW9zT3B0aW9uczoge30sXG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHN0cmFwaSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsIlN0cmFwaSIsImRlZmF1bHRTZXR0aW5ncyIsInN0cmFwaSIsImF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJ2YWx1ZSIsInVzZVN0cmFwaSIsInVybCIsInByZWZpeCIsInN0b3JlIiwia2V5IiwidXNlTG9jYWxTdG9yYWdlIiwiY29va2llT3B0aW9ucyIsInBhdGgiLCJheGlvc09wdGlvbnMiLCJzZXRTdHJhcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ })

});