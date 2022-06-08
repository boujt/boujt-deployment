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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useStrapi\": () => (/* binding */ useStrapi)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-js */ \"strapi-sdk-js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__]);\nstrapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst defaultSettings = {\n    strapi: null,\n    user: null,\n    loading: false,\n    login: ()=>false\n    ,\n    logout: ()=>console.error(\"Strapi not initiated\")\n    ,\n    error: {}\n};\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultSettings);\nfunction AuthProvider({ children  }) {\n    const auth = useProvideAuth();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: auth,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/auth/auth.tsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\nconst useStrapi = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n};\nfunction useProvideAuth() {\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const strapi = new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    });\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const login = (data)=>{\n        console.log(data);\n        setLoading(true);\n        setError({});\n        strapi?.login({\n            identifier: data.uid,\n            password: data.pw\n        }).then((res)=>{\n            setUser(strapi.user);\n            setLoading(false);\n        }).catch((er)=>{\n            console.error(er);\n            setError((prev)=>{\n                return {\n                    ...prev,\n                    invalid_credentials: true\n                };\n            });\n            setLoading(false);\n        });\n    };\n    const logout = ()=>{\n        strapi.logout();\n        setUser(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        strapi.fetchUser().then((res)=>{\n            setLoading(false);\n            setUser(res);\n        }).catch((er)=>{\n            setLoading(false);\n        });\n        console.log(strapi);\n    }, []);\n    return {\n        strapi,\n        loading,\n        user,\n        login,\n        logout,\n        error\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakJkLE1BQU0sQ0FDSHFDLFNBQVMsRUFBRSxDQUNYTixJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2JsQixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEJVLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLENBQUM7U0FDZCxDQUFDLENBQ0RDLEtBQUssQ0FBQyxDQUFDQyxFQUFFLEdBQUs7WUFDYnBCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFDTFQsT0FBTyxDQUFDcUIsR0FBRyxDQUFDMUIsTUFBTSxDQUFDLENBQUM7S0FDckIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU87UUFDTEEsTUFBTTtRQUNORSxPQUFPO1FBQ1BELElBQUk7UUFDSkUsS0FBSztRQUNMQyxNQUFNO1FBQ05FLEtBQUs7S0FDTixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VqdC8uL2F1dGgvYXV0aC50c3g/YmUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlQ29udGV4dCxcbiAgY3JlYXRlQ29udGV4dCxcbiAgUHJvdmlkZXIsXG59IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU3RyYXBpLCB7IFN0cmFwaVVzZXIgfSBmcm9tIFwic3RyYXBpLXNkay1qc1wiO1xuaW1wb3J0IHsgVXNlcmRhdGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpbkZvcm1cIjtcbmltcG9ydCB7IEVycm9yU3RyYXBpVXNlciB9IGZyb20gXCIuLi91dGlscy90eXBlc1wiO1xuXG5pbnRlcmZhY2UgU3RyYXBpQ29udGV4dCB7XG4gIHN0cmFwaTogU3RyYXBpIHwgbnVsbDtcbiAgdXNlcjogU3RyYXBpVXNlciB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGxvZ2luOiAoZGF0YTogVXNlcmRhdGEpID0+IGJvb2xlYW47XG4gIGxvZ291dDogKCkgPT4gdm9pZDtcbiAgZXJyb3I6IEVycm9yU3RyYXBpVXNlcjtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBTdHJhcGlDb250ZXh0ID0ge1xuICBzdHJhcGk6IG51bGwsXG4gIHVzZXI6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBsb2dpbjogKCkgPT4gZmFsc2UsXG4gIGxvZ291dDogKCkgPT4gY29uc29sZS5lcnJvcihcIlN0cmFwaSBub3QgaW5pdGlhdGVkXCIpLFxuICBlcnJvcjoge30sXG59O1xuXG5jb25zdCBhdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RyYXBpQ29udGV4dD4oZGVmYXVsdFNldHRpbmdzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVN0cmFwaSA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuZnVuY3Rpb24gdXNlUHJvdmlkZUF1dGgoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxFcnJvclN0cmFwaVVzZXI+KHt9KTtcbiAgY29uc3Qgc3RyYXBpID0gbmV3IFN0cmFwaSh7XG4gICAgdXJsOiBcImh0dHBzOi8vc2hhcmstYXBwLW1kMnNtLm9uZGlnaXRhbG9jZWFuLmFwcC9cIixcbiAgICBwcmVmaXg6IFwiL2FwaVwiLFxuICAgIHN0b3JlOiB7XG4gICAgICBrZXk6IFwic3RyYXBpX2p3dFwiLFxuICAgICAgdXNlTG9jYWxTdG9yYWdlOiBmYWxzZSxcbiAgICAgIGNvb2tpZU9wdGlvbnM6IHsgcGF0aDogXCIvXCIgfSxcbiAgICB9LFxuICAgIGF4aW9zT3B0aW9uczoge30sXG4gIH0pO1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFN0cmFwaVVzZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBsb2dpbiA9IChkYXRhOiBVc2VyZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3Ioe30pO1xuICAgIHN0cmFwaVxuICAgICAgPy5sb2dpbih7IGlkZW50aWZpZXI6IGRhdGEudWlkLCBwYXNzd29yZDogZGF0YS5wdyB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVc2VyKHN0cmFwaS51c2VyKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyKTtcbiAgICAgICAgc2V0RXJyb3IoKHByZXYpID0+IHtcbiAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBpbnZhbGlkX2NyZWRlbnRpYWxzOiB0cnVlIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzdHJhcGkubG9nb3V0KCk7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc3RyYXBpXG4gICAgICAuZmV0Y2hVc2VyKClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVzZXIocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVyKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coc3RyYXBpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgc3RyYXBpLFxuICAgIGxvYWRpbmcsXG4gICAgdXNlcixcbiAgICBsb2dpbixcbiAgICBsb2dvdXQsXG4gICAgZXJyb3IsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJTdHJhcGkiLCJkZWZhdWx0U2V0dGluZ3MiLCJzdHJhcGkiLCJ1c2VyIiwibG9hZGluZyIsImxvZ2luIiwibG9nb3V0IiwiY29uc29sZSIsImVycm9yIiwiYXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInZhbHVlIiwidXNlU3RyYXBpIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwidXJsIiwicHJlZml4Iiwic3RvcmUiLCJrZXkiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJjb29raWVPcHRpb25zIiwicGF0aCIsImF4aW9zT3B0aW9ucyIsInNldFVzZXIiLCJkYXRhIiwibG9nIiwiaWRlbnRpZmllciIsInVpZCIsInBhc3N3b3JkIiwicHciLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlciIsInByZXYiLCJpbnZhbGlkX2NyZWRlbnRpYWxzIiwiZmV0Y2hVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./auth/auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @daily-co/daily-react-hooks */ \"@daily-co/daily-react-hooks\");\n/* harmony import */ var _daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @daily-co/daily-js */ \"@daily-co/daily-js\");\n/* harmony import */ var _daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth */ \"./auth/auth.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_auth__WEBPACK_IMPORTED_MODULE_5__]);\n_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: co , 1: setCo  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setCo(_daily_co_daily_js__WEBPACK_IMPORTED_MODULE_3___default().createCallObject({\n            url: \"gyovDfpFyZnUKWIoeU2r\"\n        }));\n    }, []);\n    if (!co) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_auth__WEBPACK_IMPORTED_MODULE_5__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_daily_co_daily_react_hooks__WEBPACK_IMPORTED_MODULE_2__.DailyProvider, {\n                callObject: co,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jakobkarlstrand/Documents/Programming/weknowit/boujt/client/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRTZCO0FBQ2Y7QUFDRDtBQUNBO0FBQ007QUFFbEQsU0FBU00sS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQsTUFBTSxFQVRSLEdBU1NDLEVBQUUsR0FUWCxHQVNhQyxLQUFLLE1BQUlQLCtDQUFRLEVBQUU7SUFDOUJELGdEQUFTLENBQUMsSUFBTTtRQUNkUSxLQUFLLENBQUNULDBFQUE0QixDQUFDO1lBQUVXLEdBQUcsRUFBRSxzQkFBc0I7U0FBRSxDQUFDLENBQUMsQ0FBQztLQUN0RSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDSCxFQUFFLEVBQUU7UUFDUCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQscUJBQ0UsOERBQUNMLG9EQUFZO2tCQUNYLDRFQUFDQyw0REFBYztzQkFDYiw0RUFBQ0wsc0VBQWE7Z0JBQUNhLFVBQVUsRUFBRUosRUFBRTswQkFDM0IsNEVBQUNGLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNkOzs7OztnQkFDRDs7Ozs7WUFDSixDQUNmO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm91anQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgRGFpbHlQcm92aWRlciB9IGZyb20gXCJAZGFpbHktY28vZGFpbHktcmVhY3QtaG9va3NcIjtcbmltcG9ydCBEYWlseUlmcmFtZSBmcm9tIFwiQGRhaWx5LWNvL2RhaWx5LWpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vYXV0aC9hdXRoXCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2NvLCBzZXRDb10gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvKERhaWx5SWZyYW1lLmNyZWF0ZUNhbGxPYmplY3QoeyB1cmw6IFwiZ3lvdkRmcEZ5Wm5VS1dJb2VVMnJcIiB9KSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWNvKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxEYWlseVByb3ZpZGVyIGNhbGxPYmplY3Q9e2NvfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvRGFpbHlQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkRhaWx5UHJvdmlkZXIiLCJEYWlseUlmcmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aFByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvIiwic2V0Q28iLCJjcmVhdGVDYWxsT2JqZWN0IiwidXJsIiwiY2FsbE9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

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