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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var _Users_jakobkarlstrand_Documents_Programming_weknowit_boujt_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jakobkarlstrand_Documents_Programming_weknowit_boujt_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jakobkarlstrand_Documents_Programming_weknowit_boujt_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! strapi-sdk-js */ \"./node_modules/strapi-sdk-js/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar defaultSettings = {\n    user: null,\n    jwt: null,\n    loading: false,\n    signinWithEmail: function() {\n        return console.log(\"first\");\n    },\n    signout: function() {\n        return console.log(\"hej\");\n    }\n};\nvar authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(defaultSettings);\nfunction AuthProvider(param) {\n    var children = param.children;\n    _s();\n    var auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/auth/auth.tsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_s(AuthProvider, \"XNU4Jn8u4aVzJknlKOHFJq03xMo=\", false, function() {\n    return [\n        useProvideAuth\n    ];\n});\n_c = AuthProvider;\nvar useAuth = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(authContext);\n};\n_s1(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useProvideAuth() {\n    _s2();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user1 = ref4[0], setUser = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), jwt1 = ref1[0], setJWT = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    })), strapi = ref3[0], setStrapi = ref3[1];\n    var handleUser = function(user, jwt) {\n        console.log(user);\n        if (user) {\n            setLoading(false);\n            setUser(user);\n            setJWT(jwt);\n            return user;\n        } else {\n            setLoading(false);\n            setUser(null);\n            setJWT(null);\n            return false;\n        }\n    };\n    var signout = function() {\n        return strapi.logout();\n    };\n    var signinWithEmail = function() {\n        var _ref = _asyncToGenerator(_Users_jakobkarlstrand_Documents_Programming_weknowit_boujt_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(email, password) {\n            var ref, user, jwt;\n            return _Users_jakobkarlstrand_Documents_Programming_weknowit_boujt_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        _ctx.next = 3;\n                        return strapi.login({\n                            identifier: email,\n                            password: password\n                        });\n                    case 3:\n                        ref = _ctx.sent;\n                        user = ref.user;\n                        jwt = ref.jwt;\n                        handleUser(user, jwt);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signinWithEmail(email, password) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        user: user1,\n        jwt: jwt1,\n        loading: loading,\n        signout: signout,\n        signinWithEmail: signinWithEmail\n    };\n}\n_s2(useProvideAuth, \"tfJ9Mzm+fm53wtDABXF6Pe6CtTI=\");\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aU5BQU8wQixLQUFhLEVBQUVDLFFBQWdCLEVBQUs7Z0JBRTNDLEdBR3BCLEVBSE05QixJQUFJLEVBQUVDLEdBQUc7Ozs7d0JBRGpCZSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUNXUyxNQUFNLENBQUNNLEtBQUssQ0FBQzs0QkFDdkNDLFVBQVUsRUFBRUgsS0FBSzs0QkFDakJDLFFBQVEsRUFBRUEsUUFBUTt5QkFDbkIsQ0FBQzs7d0JBSG9CLEdBR3BCO3dCQUhNOUIsSUFBSSxHQUFVLEdBR3BCLENBSE1BLElBQUk7d0JBQUVDLEdBQUcsR0FBSyxHQUdwQixDQUhZQSxHQUFHO3dCQUlqQjBCLFVBQVUsQ0FBQzNCLElBQUksRUFBRUMsR0FBRyxDQUFDLENBQUM7Ozs7OztTQUN2Qjt3QkFQS0UsZUFBZSxDQUFVMEIsS0FBYSxFQUFFQyxRQUFnQjs7O09BTzdEO0lBRUQsT0FBTztRQUNMOUIsSUFBSSxFQUFKQSxLQUFJO1FBQ0pDLEdBQUcsRUFBSEEsSUFBRztRQUNIQyxPQUFPLEVBQVBBLE9BQU87UUFDUEksT0FBTyxFQUFQQSxPQUFPO1FBQ1BILGVBQWUsRUFBZkEsZUFBZTtLQUNoQixDQUFDO0NBQ0g7SUFwRFFRLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXV0aC9hdXRoLnRzeD9iZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSxcbiAgdXNlRWZmZWN0LFxuICB1c2VDb250ZXh0LFxuICBjcmVhdGVDb250ZXh0LFxuICBQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTdHJhcGkgZnJvbSBcInN0cmFwaS1zZGstanNcIjtcblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0IHtcbiAgdXNlcjogT2JqZWN0IHwgbnVsbDtcbiAgand0OiBzdHJpbmcgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBzaWduaW5XaXRoRW1haWw6IEZ1bmN0aW9uO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IEF1dGhDb250ZXh0ID0ge1xuICB1c2VyOiBudWxsLFxuICBqd3Q6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaWduaW5XaXRoRW1haWw6ICgpID0+IGNvbnNvbGUubG9nKFwiZmlyc3RcIiksXG4gIHNpZ25vdXQ6ICgpID0+IGNvbnNvbGUubG9nKFwiaGVqXCIpLFxufTtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0PihkZWZhdWx0U2V0dGluZ3MpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBband0LCBzZXRKV1RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3RyYXBpLCBzZXRTdHJhcGldID0gdXNlU3RhdGUoXG4gICAgbmV3IFN0cmFwaSh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9zaGFyay1hcHAtbWQyc20ub25kaWdpdGFsb2NlYW4uYXBwL1wiLFxuICAgICAgcHJlZml4OiBcIi9hcGlcIixcbiAgICAgIHN0b3JlOiB7XG4gICAgICAgIGtleTogXCJzdHJhcGlfand0XCIsXG4gICAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgICAgIGNvb2tpZU9wdGlvbnM6IHsgcGF0aDogXCIvXCIgfSxcbiAgICAgIH0sXG4gICAgICBheGlvc09wdGlvbnM6IHt9LFxuICAgIH0pXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlVXNlciA9ICh1c2VyLCBqd3QpID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBpZiAodXNlcikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgc2V0SldUKGp3dCk7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgc2V0SldUKG51bGwpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiBzdHJhcGkubG9nb3V0KCk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbmluV2l0aEVtYWlsID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHsgdXNlciwgand0IH0gPSBhd2FpdCBzdHJhcGkubG9naW4oe1xuICAgICAgaWRlbnRpZmllcjogZW1haWwsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSk7XG4gICAgaGFuZGxlVXNlcih1c2VyLCBqd3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBqd3QsXG4gICAgbG9hZGluZyxcbiAgICBzaWdub3V0LFxuICAgIHNpZ25pbldpdGhFbWFpbCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsIlN0cmFwaSIsImRlZmF1bHRTZXR0aW5ncyIsInVzZXIiLCJqd3QiLCJsb2FkaW5nIiwic2lnbmluV2l0aEVtYWlsIiwiY29uc29sZSIsImxvZyIsInNpZ25vdXQiLCJhdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aCIsInVzZVByb3ZpZGVBdXRoIiwidmFsdWUiLCJ1c2VBdXRoIiwic2V0VXNlciIsInNldEpXVCIsInNldExvYWRpbmciLCJ1cmwiLCJwcmVmaXgiLCJzdG9yZSIsImtleSIsInVzZUxvY2FsU3RvcmFnZSIsImNvb2tpZU9wdGlvbnMiLCJwYXRoIiwiYXhpb3NPcHRpb25zIiwic3RyYXBpIiwic2V0U3RyYXBpIiwiaGFuZGxlVXNlciIsImxvZ291dCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImlkZW50aWZpZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ })

});