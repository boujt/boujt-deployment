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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "strapi-sdk-js":
/*!********************************!*\
  !*** external "strapi-sdk-js" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("strapi-sdk-js");;

/***/ }),

/***/ "(api)/./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var strapi_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strapi-sdk-js */ \"strapi-sdk-js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([strapi_sdk_js__WEBPACK_IMPORTED_MODULE_0__]);\nstrapi_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const strapi = new strapi_sdk_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        url: \"https://shark-app-md2sm.ondigitalocean.app/\",\n        prefix: \"/api\",\n        store: {\n            key: \"strapi_jwt\",\n            useLocalStorage: false,\n            cookieOptions: {\n                path: \"/\"\n            }\n        },\n        axiosOptions: {}\n    });\n    console.log(strapi.getToken());\n    const user = await strapi.fetchUser();\n    console.log(user);\n    if (user) {\n        res.status(200).json({\n            message: \"AUTH OK\"\n        });\n    }\n    res.status(403).json({\n        message: \"AUTH DENIED\"\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFbUM7QUFLcEIsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlKLHFEQUFNLENBQUM7UUFDeEJLLEdBQUcsRUFBRSw2Q0FBNkM7UUFDbERDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLEtBQUssRUFBRTtZQUNMQyxHQUFHLEVBQUUsWUFBWTtZQUNqQkMsZUFBZSxFQUFFLEtBQUs7WUFDdEJDLGFBQWEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLEdBQUc7YUFBRTtTQUM3QjtRQUNEQyxZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixNQUFNLENBQUNXLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDL0IsTUFBTUMsSUFBSSxHQUFHLE1BQU1aLE1BQU0sQ0FBQ2EsU0FBUyxFQUFFO0lBQ3JDSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSUEsSUFBSSxFQUFFO1FBQ1JiLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLFNBQVM7U0FBRSxDQUFDLENBQUM7S0FDOUM7SUFFRGpCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLGFBQWE7S0FBRSxDQUFDLENBQUM7Q0FDbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VqdC8uL3BhZ2VzL2FwaS9oZWxsby50cz82NTdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFN0cmFwaSBmcm9tIFwic3RyYXBpLXNkay1qc1wiO1xudHlwZSBEYXRhID0ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnN0IHN0cmFwaSA9IG5ldyBTdHJhcGkoe1xuICAgIHVybDogXCJodHRwczovL3NoYXJrLWFwcC1tZDJzbS5vbmRpZ2l0YWxvY2Vhbi5hcHAvXCIsXG4gICAgcHJlZml4OiBcIi9hcGlcIixcbiAgICBzdG9yZToge1xuICAgICAga2V5OiBcInN0cmFwaV9qd3RcIixcbiAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgICBjb29raWVPcHRpb25zOiB7IHBhdGg6IFwiL1wiIH0sXG4gICAgfSxcbiAgICBheGlvc09wdGlvbnM6IHt9LFxuICB9KTtcbiAgY29uc29sZS5sb2coc3RyYXBpLmdldFRva2VuKCkpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgc3RyYXBpLmZldGNoVXNlcigpO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgaWYgKHVzZXIpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQVVUSCBPS1wiIH0pO1xuICB9XG5cbiAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiBcIkFVVEggREVOSUVEXCIgfSk7XG59XG4iXSwibmFtZXMiOlsiU3RyYXBpIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0cmFwaSIsInVybCIsInByZWZpeCIsInN0b3JlIiwia2V5IiwidXNlTG9jYWxTdG9yYWdlIiwiY29va2llT3B0aW9ucyIsInBhdGgiLCJheGlvc09wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VG9rZW4iLCJ1c2VyIiwiZmV0Y2hVc2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();