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
exports.id = "pages/api/chat_room/create";
exports.ids = ["pages/api/chat_room/create"];
exports.modules = {

/***/ "(api)/./pages/api/chat_room/create.tsx":
/*!****************************************!*\
  !*** ./pages/api/chat_room/create.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const options = {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\",\n                Authorization: `Bearer ${process.env.DAILY_API_KEY}`\n            },\n            body: JSON.stringify({\n                properties: {\n                    enable_prejoin_ui: false,\n                    enable_knocking: false,\n                    enable_network_ui: true,\n                    enable_screenshare: false,\n                    enable_chat: true,\n                    lang: \"sv\",\n                    geo: \"eu-central-1\",\n                    exp: Math.round(Date.now() / 1000) + 1000,\n                    eject_at_room_exp: true,\n                    start_video_off: true,\n                    start_audio_off: true\n                }\n            })\n        };\n        const dailyRes = await fetch(`https://api.daily.co/v1/rooms`, options);\n        const response = await dailyRes.json();\n        if (response.error) {\n            return res.status(500).json(response.error);\n        }\n        return res.status(200).json(response);\n    }\n    return res.status(401);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdF9yb29tL2NyZWF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLE9BQU8sR0FBRztZQUNkRCxNQUFNLEVBQUUsTUFBTTtZQUNkRSxPQUFPLEVBQUU7Z0JBQ1BDLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUMsQ0FBQzthQUNyRDtZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUNuQkMsVUFBVSxFQUFFO29CQUNWQyxpQkFBaUIsRUFBRSxLQUFLO29CQUN4QkMsZUFBZSxFQUFFLEtBQUs7b0JBQ3RCQyxpQkFBaUIsRUFBRSxJQUFJO29CQUN2QkMsa0JBQWtCLEVBQUUsS0FBSztvQkFDekJDLFdBQVcsRUFBRSxJQUFJO29CQUNqQkMsSUFBSSxFQUFFLElBQUk7b0JBQ1ZDLEdBQUcsRUFBRSxjQUFjO29CQUNuQkMsR0FBRyxFQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJO29CQUN6Q0MsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkJDLGVBQWUsRUFBRSxJQUFJO29CQUNyQkMsZUFBZSxFQUFFLElBQUk7aUJBQ3RCO2FBQ0YsQ0FBQztTQUNIO1FBRUQsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixDQUFDLEVBQUUzQixPQUFPLENBQUM7UUFFdEUsTUFBTTRCLFFBQVEsR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtRQUV0QyxJQUFJRCxRQUFRLENBQUNFLEtBQUssRUFBRTtZQUNsQixPQUFPaEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUNELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPaEMsR0FBRyxDQUFDaUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUNELFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsT0FBTzlCLEdBQUcsQ0FBQ2lDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdWp0Ly4vcGFnZXMvYXBpL2NoYXRfcm9vbS9jcmVhdGUudHN4PzNiN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBSUxZX0FQSV9LRVl9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBlbmFibGVfcHJlam9pbl91aTogZmFsc2UsXG4gICAgICAgICAgZW5hYmxlX2tub2NraW5nOiBmYWxzZSxcbiAgICAgICAgICBlbmFibGVfbmV0d29ya191aTogdHJ1ZSxcbiAgICAgICAgICBlbmFibGVfc2NyZWVuc2hhcmU6IGZhbHNlLFxuICAgICAgICAgIGVuYWJsZV9jaGF0OiB0cnVlLFxuICAgICAgICAgIGxhbmc6IFwic3ZcIixcbiAgICAgICAgICBnZW86IFwiZXUtY2VudHJhbC0xXCIsXG4gICAgICAgICAgZXhwOiBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSArIDEwMDAsXG4gICAgICAgICAgZWplY3RfYXRfcm9vbV9leHA6IHRydWUsXG4gICAgICAgICAgc3RhcnRfdmlkZW9fb2ZmOiB0cnVlLFxuICAgICAgICAgIHN0YXJ0X2F1ZGlvX29mZjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICBjb25zdCBkYWlseVJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5kYWlseS5jby92MS9yb29tc2AsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYWlseVJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihyZXNwb25zZS5lcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMSk7XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJEQUlMWV9BUElfS0VZIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9wZXJ0aWVzIiwiZW5hYmxlX3ByZWpvaW5fdWkiLCJlbmFibGVfa25vY2tpbmciLCJlbmFibGVfbmV0d29ya191aSIsImVuYWJsZV9zY3JlZW5zaGFyZSIsImVuYWJsZV9jaGF0IiwibGFuZyIsImdlbyIsImV4cCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJub3ciLCJlamVjdF9hdF9yb29tX2V4cCIsInN0YXJ0X3ZpZGVvX29mZiIsInN0YXJ0X2F1ZGlvX29mZiIsImRhaWx5UmVzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat_room/create.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat_room/create.tsx"));
module.exports = __webpack_exports__;

})();