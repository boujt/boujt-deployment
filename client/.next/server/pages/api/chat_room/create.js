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

/***/ "(api)/./src/pages/api/chat_room/create.tsx":
/*!********************************************!*\
  !*** ./src/pages/api/chat_room/create.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const options = {\n            method: \"POST\",\n            headers: {\n                Accept: \"application/json\",\n                \"Content-Type\": \"application/json\",\n                Authorization: `Bearer ${process.env.DAILY_API_KEY}`\n            },\n            body: JSON.stringify({\n                properties: {\n                    enable_prejoin_ui: false,\n                    enable_knocking: false,\n                    enable_network_ui: true,\n                    enable_screenshare: false,\n                    enable_chat: true,\n                    lang: \"sv\",\n                    geo: \"eu-central-1\",\n                    exp: Math.round(Date.now() / 1000) + 1000,\n                    eject_at_room_exp: true,\n                    start_video_off: true,\n                    start_audio_off: true,\n                    max_participants: 2\n                }\n            })\n        };\n        const dailyRes = await fetch(`https://api.daily.co/v1/rooms`, options);\n        const response = await dailyRes.json();\n        if (response.error) {\n            return res.status(500).json(response.error);\n        }\n        return res.status(200).json(response);\n    }\n    return res.status(401);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXRfcm9vbS9jcmVhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxPQUFPLEdBQUc7WUFDZEQsTUFBTSxFQUFFLE1BQU07WUFDZEUsT0FBTyxFQUFFO2dCQUNQQyxNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQ0MsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDLENBQUM7YUFDckQ7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbkJDLFVBQVUsRUFBRTtvQkFDVkMsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEJDLGVBQWUsRUFBRSxLQUFLO29CQUN0QkMsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkJDLGtCQUFrQixFQUFFLEtBQUs7b0JBQ3pCQyxXQUFXLEVBQUUsSUFBSTtvQkFDakJDLElBQUksRUFBRSxJQUFJO29CQUNWQyxHQUFHLEVBQUUsY0FBYztvQkFDbkJDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTtvQkFDekNDLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCQyxlQUFlLEVBQUUsSUFBSTtvQkFDckJDLGVBQWUsRUFBRSxJQUFJO29CQUNyQkMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDcEI7YUFDRixDQUFDO1NBQ0g7UUFFRCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsNkJBQTZCLENBQUMsRUFBRTVCLE9BQU8sQ0FBQztRQUV0RSxNQUFNNkIsUUFBUSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO1FBRXRDLElBQUlELFFBQVEsQ0FBQ0UsS0FBSyxFQUFFO1lBQ2xCLE9BQU9qQyxHQUFHLENBQUNrQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNGLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU9qQyxHQUFHLENBQUNrQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNGLElBQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUM7S0FDdkM7SUFFRCxPQUFPL0IsR0FBRyxDQUFDa0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm91anQvLi9zcmMvcGFnZXMvYXBpL2NoYXRfcm9vbS9jcmVhdGUudHN4P2E4YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkRBSUxZX0FQSV9LRVl9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBlbmFibGVfcHJlam9pbl91aTogZmFsc2UsXG4gICAgICAgICAgZW5hYmxlX2tub2NraW5nOiBmYWxzZSxcbiAgICAgICAgICBlbmFibGVfbmV0d29ya191aTogdHJ1ZSxcbiAgICAgICAgICBlbmFibGVfc2NyZWVuc2hhcmU6IGZhbHNlLFxuICAgICAgICAgIGVuYWJsZV9jaGF0OiB0cnVlLFxuICAgICAgICAgIGxhbmc6IFwic3ZcIixcbiAgICAgICAgICBnZW86IFwiZXUtY2VudHJhbC0xXCIsXG4gICAgICAgICAgZXhwOiBNYXRoLnJvdW5kKERhdGUubm93KCkgLyAxMDAwKSArIDEwMDAsXG4gICAgICAgICAgZWplY3RfYXRfcm9vbV9leHA6IHRydWUsXG4gICAgICAgICAgc3RhcnRfdmlkZW9fb2ZmOiB0cnVlLFxuICAgICAgICAgIHN0YXJ0X2F1ZGlvX29mZjogdHJ1ZSxcbiAgICAgICAgICBtYXhfcGFydGljaXBhbnRzOiAyLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfTtcblxuICAgIGNvbnN0IGRhaWx5UmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmRhaWx5LmNvL3YxL3Jvb21zYCwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhaWx5UmVzLmpzb24oKTtcblxuICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHJlc3BvbnNlLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIkRBSUxZX0FQSV9LRVkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3BlcnRpZXMiLCJlbmFibGVfcHJlam9pbl91aSIsImVuYWJsZV9rbm9ja2luZyIsImVuYWJsZV9uZXR3b3JrX3VpIiwiZW5hYmxlX3NjcmVlbnNoYXJlIiwiZW5hYmxlX2NoYXQiLCJsYW5nIiwiZ2VvIiwiZXhwIiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsIm5vdyIsImVqZWN0X2F0X3Jvb21fZXhwIiwic3RhcnRfdmlkZW9fb2ZmIiwic3RhcnRfYXVkaW9fb2ZmIiwibWF4X3BhcnRpY2lwYW50cyIsImRhaWx5UmVzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat_room/create.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat_room/create.tsx"));
module.exports = __webpack_exports__;

})();