/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_builders/svg-collection/svg-collection-require-all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_builders/svg-collection/svg-collection-require-all.js":
/*!****************************************************************!*\
  !*** ./_builders/svg-collection/svg-collection-require-all.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n *\r\n * Ce fichier appelé depuis webpack importe tous les fichiers svg\r\n *\r\n */\r\nfunction requireAll(r) {\r\n    r.keys().forEach(r);\r\n}\r\nrequireAll(\r\n    __webpack_require__(\"./src sync recursive svg-collection-(.*)\\\\/(.*)\\\\.svg$\")\r\n);\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fYnVpbGRlcnMvc3ZnLWNvbGxlY3Rpb24vc3ZnLWNvbGxlY3Rpb24tcmVxdWlyZS1hbGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9fYnVpbGRlcnMvc3ZnLWNvbGxlY3Rpb24vc3ZnLWNvbGxlY3Rpb24tcmVxdWlyZS1hbGwuanM/YTk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICpcclxuICogQ2UgZmljaGllciBhcHBlbMOpIGRlcHVpcyB3ZWJwYWNrIGltcG9ydGUgdG91cyBsZXMgZmljaGllcnMgc3ZnXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcclxuICAgIHIua2V5cygpLmZvckVhY2gocik7XHJcbn1cclxucmVxdWlyZUFsbChcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vLi4vc3JjJywgdHJ1ZSwgL3N2Zy1jb2xsZWN0aW9uLSguKilcXC8oLiopXFwuc3ZnJC8pXHJcbik7XHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_builders/svg-collection/svg-collection-require-all.js\n");

/***/ }),

/***/ "./src sync recursive svg-collection-(.*)\\/(.*)\\.svg$":
/*!**************************************************!*\
  !*** ./src sync svg-collection-(.*)\/(.*)\.svg$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./svg-collection-icon/add.svg\": \"./src/svg-collection-icon/add.svg\",\n\t\"./svg-collection-icon/android.svg\": \"./src/svg-collection-icon/android.svg\",\n\t\"./svg-collection-icon/bag.svg\": \"./src/svg-collection-icon/bag.svg\",\n\t\"./svg-collection-icon/battery.svg\": \"./src/svg-collection-icon/battery.svg\",\n\t\"./svg-collection-icon/bell.svg\": \"./src/svg-collection-icon/bell.svg\",\n\t\"./svg-collection-icon/bluetooth.svg\": \"./src/svg-collection-icon/bluetooth.svg\",\n\t\"./svg-collection-icon/bookmark.svg\": \"./src/svg-collection-icon/bookmark.svg\",\n\t\"./svg-collection-icon/briefcase.svg\": \"./src/svg-collection-icon/briefcase.svg\",\n\t\"./svg-collection-icon/calendar.svg\": \"./src/svg-collection-icon/calendar.svg\",\n\t\"./svg-collection-icon/cancel-1.svg\": \"./src/svg-collection-icon/cancel-1.svg\",\n\t\"./svg-collection-icon/cancel.svg\": \"./src/svg-collection-icon/cancel.svg\",\n\t\"./svg-collection-icon/casque.svg\": \"./src/svg-collection-icon/casque.svg\",\n\t\"./svg-collection-icon/check.svg\": \"./src/svg-collection-icon/check.svg\",\n\t\"./svg-collection-icon/clip.svg\": \"./src/svg-collection-icon/clip.svg\",\n\t\"./svg-collection-icon/clock-1.svg\": \"./src/svg-collection-icon/clock-1.svg\",\n\t\"./svg-collection-icon/clock.svg\": \"./src/svg-collection-icon/clock.svg\",\n\t\"./svg-collection-icon/close.svg\": \"./src/svg-collection-icon/close.svg\",\n\t\"./svg-collection-icon/cloud.svg\": \"./src/svg-collection-icon/cloud.svg\",\n\t\"./svg-collection-icon/cloud_done.svg\": \"./src/svg-collection-icon/cloud_done.svg\",\n\t\"./svg-collection-icon/cloudy.svg\": \"./src/svg-collection-icon/cloudy.svg\",\n\t\"./svg-collection-icon/correct.svg\": \"./src/svg-collection-icon/correct.svg\",\n\t\"./svg-collection-icon/credit-card.svg\": \"./src/svg-collection-icon/credit-card.svg\",\n\t\"./svg-collection-icon/cursor-1.svg\": \"./src/svg-collection-icon/cursor-1.svg\",\n\t\"./svg-collection-icon/cursor.svg\": \"./src/svg-collection-icon/cursor.svg\",\n\t\"./svg-collection-icon/cut.svg\": \"./src/svg-collection-icon/cut.svg\",\n\t\"./svg-collection-icon/cutlery.svg\": \"./src/svg-collection-icon/cutlery.svg\",\n\t\"./svg-collection-icon/dashboard.svg\": \"./src/svg-collection-icon/dashboard.svg\",\n\t\"./svg-collection-icon/down-arrow.svg\": \"./src/svg-collection-icon/down-arrow.svg\",\n\t\"./svg-collection-icon/download.svg\": \"./src/svg-collection-icon/download.svg\",\n\t\"./svg-collection-icon/edit.svg\": \"./src/svg-collection-icon/edit.svg\",\n\t\"./svg-collection-icon/envelope.svg\": \"./src/svg-collection-icon/envelope.svg\",\n\t\"./svg-collection-icon/export.svg\": \"./src/svg-collection-icon/export.svg\",\n\t\"./svg-collection-icon/favorite.svg\": \"./src/svg-collection-icon/favorite.svg\",\n\t\"./svg-collection-icon/file.svg\": \"./src/svg-collection-icon/file.svg\",\n\t\"./svg-collection-icon/flash.svg\": \"./src/svg-collection-icon/flash.svg\",\n\t\"./svg-collection-icon/folder.svg\": \"./src/svg-collection-icon/folder.svg\",\n\t\"./svg-collection-icon/forward.svg\": \"./src/svg-collection-icon/forward.svg\",\n\t\"./svg-collection-icon/gallery.svg\": \"./src/svg-collection-icon/gallery.svg\",\n\t\"./svg-collection-icon/gamepad.svg\": \"./src/svg-collection-icon/gamepad.svg\",\n\t\"./svg-collection-icon/garbage.svg\": \"./src/svg-collection-icon/garbage.svg\",\n\t\"./svg-collection-icon/headphones.svg\": \"./src/svg-collection-icon/headphones.svg\",\n\t\"./svg-collection-icon/heart.svg\": \"./src/svg-collection-icon/heart.svg\",\n\t\"./svg-collection-icon/help.svg\": \"./src/svg-collection-icon/help.svg\",\n\t\"./svg-collection-icon/home.svg\": \"./src/svg-collection-icon/home.svg\",\n\t\"./svg-collection-icon/hourglass.svg\": \"./src/svg-collection-icon/hourglass.svg\",\n\t\"./svg-collection-icon/info.svg\": \"./src/svg-collection-icon/info.svg\",\n\t\"./svg-collection-icon/layer.svg\": \"./src/svg-collection-icon/layer.svg\",\n\t\"./svg-collection-icon/layout.svg\": \"./src/svg-collection-icon/layout.svg\",\n\t\"./svg-collection-icon/left-arrow-1.svg\": \"./src/svg-collection-icon/left-arrow-1.svg\",\n\t\"./svg-collection-icon/left-arrow.svg\": \"./src/svg-collection-icon/left-arrow.svg\",\n\t\"./svg-collection-icon/left.svg\": \"./src/svg-collection-icon/left.svg\",\n\t\"./svg-collection-icon/lightning.svg\": \"./src/svg-collection-icon/lightning.svg\",\n\t\"./svg-collection-icon/link.svg\": \"./src/svg-collection-icon/link.svg\",\n\t\"./svg-collection-icon/lock.svg\": \"./src/svg-collection-icon/lock.svg\",\n\t\"./svg-collection-icon/logout.svg\": \"./src/svg-collection-icon/logout.svg\",\n\t\"./svg-collection-icon/magnet.svg\": \"./src/svg-collection-icon/magnet.svg\",\n\t\"./svg-collection-icon/map.svg\": \"./src/svg-collection-icon/map.svg\",\n\t\"./svg-collection-icon/menu.svg\": \"./src/svg-collection-icon/menu.svg\",\n\t\"./svg-collection-icon/monitor.svg\": \"./src/svg-collection-icon/monitor.svg\",\n\t\"./svg-collection-icon/moon.svg\": \"./src/svg-collection-icon/moon.svg\",\n\t\"./svg-collection-icon/padnote.svg\": \"./src/svg-collection-icon/padnote.svg\",\n\t\"./svg-collection-icon/paint.svg\": \"./src/svg-collection-icon/paint.svg\",\n\t\"./svg-collection-icon/pause.svg\": \"./src/svg-collection-icon/pause.svg\",\n\t\"./svg-collection-icon/photo-camera.svg\": \"./src/svg-collection-icon/photo-camera.svg\",\n\t\"./svg-collection-icon/placeholder.svg\": \"./src/svg-collection-icon/placeholder.svg\",\n\t\"./svg-collection-icon/play-button.svg\": \"./src/svg-collection-icon/play-button.svg\",\n\t\"./svg-collection-icon/plug.svg\": \"./src/svg-collection-icon/plug.svg\",\n\t\"./svg-collection-icon/power.svg\": \"./src/svg-collection-icon/power.svg\",\n\t\"./svg-collection-icon/presentation.svg\": \"./src/svg-collection-icon/presentation.svg\",\n\t\"./svg-collection-icon/printer.svg\": \"./src/svg-collection-icon/printer.svg\",\n\t\"./svg-collection-icon/profile.svg\": \"./src/svg-collection-icon/profile.svg\",\n\t\"./svg-collection-icon/prohibition.svg\": \"./src/svg-collection-icon/prohibition.svg\",\n\t\"./svg-collection-icon/push-pin.svg\": \"./src/svg-collection-icon/push-pin.svg\",\n\t\"./svg-collection-icon/puzzle.svg\": \"./src/svg-collection-icon/puzzle.svg\",\n\t\"./svg-collection-icon/refresh.svg\": \"./src/svg-collection-icon/refresh.svg\",\n\t\"./svg-collection-icon/remove.svg\": \"./src/svg-collection-icon/remove.svg\",\n\t\"./svg-collection-icon/rewind.svg\": \"./src/svg-collection-icon/rewind.svg\",\n\t\"./svg-collection-icon/right-arrow-1.svg\": \"./src/svg-collection-icon/right-arrow-1.svg\",\n\t\"./svg-collection-icon/right-arrow.svg\": \"./src/svg-collection-icon/right-arrow.svg\",\n\t\"./svg-collection-icon/right.svg\": \"./src/svg-collection-icon/right.svg\",\n\t\"./svg-collection-icon/rocket-launch.svg\": \"./src/svg-collection-icon/rocket-launch.svg\",\n\t\"./svg-collection-icon/screen.svg\": \"./src/svg-collection-icon/screen.svg\",\n\t\"./svg-collection-icon/search.svg\": \"./src/svg-collection-icon/search.svg\",\n\t\"./svg-collection-icon/settings-1.svg\": \"./src/svg-collection-icon/settings-1.svg\",\n\t\"./svg-collection-icon/settings-2.svg\": \"./src/svg-collection-icon/settings-2.svg\",\n\t\"./svg-collection-icon/settings.svg\": \"./src/svg-collection-icon/settings.svg\",\n\t\"./svg-collection-icon/share.svg\": \"./src/svg-collection-icon/share.svg\",\n\t\"./svg-collection-icon/shield.svg\": \"./src/svg-collection-icon/shield.svg\",\n\t\"./svg-collection-icon/shopping-cart.svg\": \"./src/svg-collection-icon/shopping-cart.svg\",\n\t\"./svg-collection-icon/shutter.svg\": \"./src/svg-collection-icon/shutter.svg\",\n\t\"./svg-collection-icon/smartphone.svg\": \"./src/svg-collection-icon/smartphone.svg\",\n\t\"./svg-collection-icon/speech-bubble.svg\": \"./src/svg-collection-icon/speech-bubble.svg\",\n\t\"./svg-collection-icon/speedometer.svg\": \"./src/svg-collection-icon/speedometer.svg\",\n\t\"./svg-collection-icon/stats.svg\": \"./src/svg-collection-icon/stats.svg\",\n\t\"./svg-collection-icon/store.svg\": \"./src/svg-collection-icon/store.svg\",\n\t\"./svg-collection-icon/sun.svg\": \"./src/svg-collection-icon/sun.svg\",\n\t\"./svg-collection-icon/switch.svg\": \"./src/svg-collection-icon/switch.svg\",\n\t\"./svg-collection-icon/tag.svg\": \"./src/svg-collection-icon/tag.svg\",\n\t\"./svg-collection-icon/target.svg\": \"./src/svg-collection-icon/target.svg\",\n\t\"./svg-collection-icon/timer.svg\": \"./src/svg-collection-icon/timer.svg\",\n\t\"./svg-collection-icon/unlock.svg\": \"./src/svg-collection-icon/unlock.svg\",\n\t\"./svg-collection-icon/up-arrow.svg\": \"./src/svg-collection-icon/up-arrow.svg\",\n\t\"./svg-collection-icon/upload.svg\": \"./src/svg-collection-icon/upload.svg\",\n\t\"./svg-collection-icon/video-camera.svg\": \"./src/svg-collection-icon/video-camera.svg\",\n\t\"./svg-collection-icon/video.svg\": \"./src/svg-collection-icon/video.svg\",\n\t\"./svg-collection-icon/visible.svg\": \"./src/svg-collection-icon/visible.svg\",\n\t\"./svg-collection-icon/voice-recorder.svg\": \"./src/svg-collection-icon/voice-recorder.svg\",\n\t\"./svg-collection-icon/volume.svg\": \"./src/svg-collection-icon/volume.svg\",\n\t\"./svg-collection-icon/waiting.svg\": \"./src/svg-collection-icon/waiting.svg\",\n\t\"./svg-collection-icon/warning.svg\": \"./src/svg-collection-icon/warning.svg\",\n\t\"./svg-collection-icon/wifi-bold.svg\": \"./src/svg-collection-icon/wifi-bold.svg\",\n\t\"./svg-collection-icon/wifi.svg\": \"./src/svg-collection-icon/wifi.svg\",\n\t\"./svg-collection-icon/zoom-out.svg\": \"./src/svg-collection-icon/zoom-out.svg\",\n\t\"./svg-collection-icon/zoom.svg\": \"./src/svg-collection-icon/zoom.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive svg-collection-(.*)\\\\/(.*)\\\\.svg$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMgc3luYyByZWN1cnNpdmUgc3ZnLWNvbGxlY3Rpb24tKC4qKVxcLyguKilcXC5zdmckLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgc3ZnLWNvbGxlY3Rpb24tKC4qKVxcLyguKilcXC5zdmckP2Y4Y2YiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vYWRkLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYWRkLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9hbmRyb2lkLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYW5kcm9pZC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vYmFnLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYmFnLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9iYXR0ZXJ5LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYmF0dGVyeS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vYmVsbC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2JlbGwuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2JsdWV0b290aC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2JsdWV0b290aC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vYm9va21hcmsuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ib29rbWFyay5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vYnJpZWZjYXNlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYnJpZWZjYXNlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jYWxlbmRhci5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2NhbGVuZGFyLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwtMS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2NhbmNlbC0xLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2Nhc3F1ZS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nhc3F1ZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY2hlY2suc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jaGVjay5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY2xpcC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2NsaXAuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2Nsb2NrLTEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9jay0xLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9jay5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nsb2NrLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9zZS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nsb3VkLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZF9kb25lLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY2xvdWRfZG9uZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY2xvdWR5LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY2xvdWR5LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jb3JyZWN0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY29ycmVjdC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY3JlZGl0LWNhcmQuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jcmVkaXQtY2FyZC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY3Vyc29yLTEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXJzb3ItMS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vY3Vyc29yLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY3Vyc29yLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXQuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXQuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2N1dGxlcnkuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXRsZXJ5LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9kYXNoYm9hcmQuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kYXNoYm9hcmQuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2Rvd24tYXJyb3cuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kb3duLWFycm93LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9kb3dubG9hZC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Rvd25sb2FkLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9lZGl0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZWRpdC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vZW52ZWxvcGUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9lbnZlbG9wZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vZXhwb3J0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZXhwb3J0LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9mYXZvcml0ZS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Zhdm9yaXRlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9maWxlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZmlsZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vZmxhc2guc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mbGFzaC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vZm9sZGVyLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZm9sZGVyLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9mb3J3YXJkLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZm9yd2FyZC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vZ2FsbGVyeS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2dhbGxlcnkuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2dhbWVwYWQuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9nYW1lcGFkLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9nYXJiYWdlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZ2FyYmFnZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vaGVhZHBob25lcy5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2hlYWRwaG9uZXMuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2hlYXJ0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vaGVhcnQuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2hlbHAuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9oZWxwLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9ob21lLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vaG9tZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vaG91cmdsYXNzLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vaG91cmdsYXNzLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9pbmZvLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vaW5mby5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbGF5ZXIuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sYXllci5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbGF5b3V0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGF5b3V0LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LWFycm93LTEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LWFycm93LTEuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2xlZnQtYXJyb3cuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LWFycm93LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGVmdC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbGlnaHRuaW5nLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGlnaHRuaW5nLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9saW5rLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGluay5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbG9jay5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xvY2suc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL2xvZ291dC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xvZ291dC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbWFnbmV0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbWFnbmV0LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9tYXAuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tYXAuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL21lbnUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tZW51LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9tb25pdG9yLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbW9uaXRvci5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vbW9vbi5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL21vb24uc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3BhZG5vdGUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYWRub3RlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9wYWludC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3BhaW50LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9wYXVzZS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3BhdXNlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9waG90by1jYW1lcmEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9waG90by1jYW1lcmEuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3BsYWNlaG9sZGVyLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcGxhY2Vob2xkZXIuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3BsYXktYnV0dG9uLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcGxheS1idXR0b24uc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3BsdWcuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbHVnLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9wb3dlci5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3Bvd2VyLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9wcmVzZW50YXRpb24uc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcmVzZW50YXRpb24uc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3ByaW50ZXIuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcmludGVyLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9wcm9maWxlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcHJvZmlsZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vcHJvaGliaXRpb24uc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcm9oaWJpdGlvbi5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vcHVzaC1waW4uc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wdXNoLXBpbi5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vcHV6emxlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcHV6emxlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9yZWZyZXNoLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcmVmcmVzaC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vcmVtb3ZlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcmVtb3ZlLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9yZXdpbmQuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yZXdpbmQuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3JpZ2h0LWFycm93LTEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC1hcnJvdy0xLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC1hcnJvdy5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3JpZ2h0LWFycm93LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3JpZ2h0LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9yb2NrZXQtbGF1bmNoLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcm9ja2V0LWxhdW5jaC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc2NyZWVuLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2NyZWVuLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9zZWFyY2guc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZWFyY2guc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3NldHRpbmdzLTEuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy0xLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy0yLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2V0dGluZ3MtMi5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc2V0dGluZ3Muc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc2hhcmUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaGFyZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc2hpZWxkLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2hpZWxkLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9zaG9wcGluZy1jYXJ0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2hvcHBpbmctY2FydC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc2h1dHRlci5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NodXR0ZXIuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3NtYXJ0cGhvbmUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zbWFydHBob25lLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9zcGVlY2gtYnViYmxlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc3BlZWNoLWJ1YmJsZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc3BlZWRvbWV0ZXIuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zcGVlZG9tZXRlci5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc3RhdHMuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdGF0cy5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc3RvcmUuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdG9yZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vc3VuLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc3VuLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi9zd2l0Y2guc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zd2l0Y2guc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3RhZy5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3RhZy5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vdGFyZ2V0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdGFyZ2V0LnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi90aW1lci5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3RpbWVyLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi91bmxvY2suc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi91bmxvY2suc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3VwLWFycm93LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdXAtYXJyb3cuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3VwbG9hZC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3VwbG9hZC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vdmlkZW8tY2FtZXJhLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdmlkZW8tY2FtZXJhLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi92aWRlby5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3ZpZGVvLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi92aXNpYmxlLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdmlzaWJsZS5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vdm9pY2UtcmVjb3JkZXIuc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92b2ljZS1yZWNvcmRlci5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vdm9sdW1lLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdm9sdW1lLnN2Z1wiLFxuXHRcIi4vc3ZnLWNvbGxlY3Rpb24taWNvbi93YWl0aW5nLnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vd2FpdGluZy5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vd2FybmluZy5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dhcm5pbmcuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3dpZmktYm9sZC5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dpZmktYm9sZC5zdmdcIixcblx0XCIuL3N2Zy1jb2xsZWN0aW9uLWljb24vd2lmaS5zdmdcIjogXCIuL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dpZmkuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3pvb20tb3V0LnN2Z1wiOiBcIi4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vem9vbS1vdXQuc3ZnXCIsXG5cdFwiLi9zdmctY29sbGVjdGlvbi1pY29uL3pvb20uc3ZnXCI6IFwiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi96b29tLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBzdmctY29sbGVjdGlvbi0oLiopXFxcXC8oLiopXFxcXC5zdmckXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src sync recursive svg-collection-(.*)\\/(.*)\\.svg$\n");

/***/ }),

/***/ "./src/svg-collection-icon/add.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/add.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-add-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-add-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9hZGQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYWRkLnN2Zz81ZjllIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYWRkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYWRkLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/add.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/android.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/android.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-android-usage\",\n      viewBox: \"0 0 768 768\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-android-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9hbmRyb2lkLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2FuZHJvaWQuc3ZnPzAxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1hbmRyb2lkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3NjggNzY4XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYW5kcm9pZC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/android.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/bag.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/bag.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-bag-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-bag-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9iYWcuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYmFnLnN2Zz9mM2NiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYmFnLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYmFnLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/bag.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/battery.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/battery.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-battery-usage\",\n      viewBox: \"0 0 24.8 12.2\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-battery-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9iYXR0ZXJ5LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2JhdHRlcnkuc3ZnPzcyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1iYXR0ZXJ5LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNC44IDEyLjJcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN2Z0NvbGxlY3Rpb24vaWNvbi5zdmcjaWNvbi1iYXR0ZXJ5LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/battery.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/bell.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/bell.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-bell-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-bell-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9iZWxsLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2JlbGwuc3ZnPzQyMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1iZWxsLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYmVsbC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/bell.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/bluetooth.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/bluetooth.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-bluetooth-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-bluetooth-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ibHVldG9vdGguc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYmx1ZXRvb3RoLnN2Zz82YmUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYmx1ZXRvb3RoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYmx1ZXRvb3RoLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/bluetooth.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/bookmark.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/bookmark.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-bookmark-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-bookmark-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ib29rbWFyay5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ib29rbWFyay5zdmc/ZjcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWJvb2ttYXJrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYm9va21hcmstdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/bookmark.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/briefcase.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/briefcase.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-briefcase-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-briefcase-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9icmllZmNhc2Uuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vYnJpZWZjYXNlLnN2Zz9mOTA3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYnJpZWZjYXNlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tYnJpZWZjYXNlLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/briefcase.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/calendar.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/calendar.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-calendar-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-calendar-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYWxlbmRhci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYWxlbmRhci5zdmc/ODQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNhbGVuZGFyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2FsZW5kYXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/calendar.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cancel-1.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/cancel-1.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cancel-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cancel-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwtMS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwtMS5zdmc/OTNiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNhbmNlbC0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2FuY2VsLTEtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cancel-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cancel.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/cancel.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cancel-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cancel-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYW5jZWwuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY2FuY2VsLnN2Zz9mMDRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY2FuY2VsLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2FuY2VsLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cancel.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/casque.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/casque.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-casque-usage\",\n      viewBox: \"0 0 73.1 36.2\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-casque-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jYXNxdWUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY2FzcXVlLnN2Zz9iZTljIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY2FzcXVlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3My4xIDM2LjJcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN2Z0NvbGxlY3Rpb24vaWNvbi5zdmcjaWNvbi1jYXNxdWUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/casque.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/check.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/check.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-check-usage\",\n      viewBox: \"0 0 23.1 18.6\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-check-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jaGVjay5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jaGVjay5zdmc/YzM2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNoZWNrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyMy4xIDE4LjZcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN2Z0NvbGxlY3Rpb24vaWNvbi5zdmcjaWNvbi1jaGVjay11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/check.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/clip.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/clip.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-clip-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-clip-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbGlwLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2NsaXAuc3ZnPzZmYTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jbGlwLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xpcC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/clip.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/clock-1.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/clock-1.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-clock-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-clock-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9jay0xLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nsb2NrLTEuc3ZnPzJkYzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jbG9jay0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xvY2stMS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/clock-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/clock.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/clock.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-clock-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-clock-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9jay5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9jay5zdmc/Zjg2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNsb2NrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xvY2stdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/clock.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/close.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/close.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-close-usage\",\n      viewBox: \"0 0 19 19\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-close-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9zZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG9zZS5zdmc/OTcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNsb3NlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxOSAxOVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3ZnQ29sbGVjdGlvbi9pY29uLnN2ZyNpY29uLWNsb3NlLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/close.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cloud.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/cloud.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cloud-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cloud-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZC5zdmc/YTdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNsb3VkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xvdWQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cloud.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cloud_done.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/cloud_done.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cloud_done-usage\",\n      viewBox: \"0 0 768 768\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cloud_done-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZF9kb25lLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Nsb3VkX2RvbmUuc3ZnP2Q0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jbG91ZF9kb25lLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3NjggNzY4XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xvdWRfZG9uZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cloud_done.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cloudy.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/cloudy.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cloudy-usage\",\n      viewBox: \"0 0 51 39.4\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cloudy-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jbG91ZHkuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY2xvdWR5LnN2Zz82MzQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY2xvdWR5LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MSAzOS40XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY2xvdWR5LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cloudy.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/correct.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/correct.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-correct-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-correct-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jb3JyZWN0LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2NvcnJlY3Quc3ZnPzJkNWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jb3JyZWN0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY29ycmVjdC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/correct.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/credit-card.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/credit-card.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-credit-card-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-credit-card-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jcmVkaXQtY2FyZC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jcmVkaXQtY2FyZC5zdmc/NGY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNyZWRpdC1jYXJkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY3JlZGl0LWNhcmQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/credit-card.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cursor-1.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/cursor-1.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cursor-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cursor-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXJzb3ItMS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXJzb3ItMS5zdmc/YjQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWN1cnNvci0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY3Vyc29yLTEtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cursor-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cursor.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/cursor.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cursor-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cursor-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXJzb3Iuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY3Vyc29yLnN2Zz84NmYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY3Vyc29yLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY3Vyc29yLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cursor.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cut.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/cut.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cut-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cut-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vY3V0LnN2Zz9iYjRiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY3V0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY3V0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cut.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/cutlery.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/cutlery.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-cutlery-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-cutlery-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9jdXRsZXJ5LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2N1dGxlcnkuc3ZnPzU5MDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jdXRsZXJ5LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tY3V0bGVyeS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/cutlery.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/dashboard.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/dashboard.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-dashboard-usage\",\n      viewBox: \"0 0 27 5\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-dashboard-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kYXNoYm9hcmQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZGFzaGJvYXJkLnN2Zz82NzAxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tZGFzaGJvYXJkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNyA1XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZGFzaGJvYXJkLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/dashboard.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/down-arrow.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/down-arrow.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-down-arrow-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-down-arrow-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kb3duLWFycm93LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2Rvd24tYXJyb3cuc3ZnPzk3ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1kb3duLWFycm93LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZG93bi1hcnJvdy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/down-arrow.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/download.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/download.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-download-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-download-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kb3dubG9hZC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9kb3dubG9hZC5zdmc/YTIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWRvd25sb2FkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZG93bmxvYWQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/download.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/edit.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/edit.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-edit-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-edit-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9lZGl0LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2VkaXQuc3ZnPzdhMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1lZGl0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZWRpdC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/edit.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/envelope.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/envelope.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-envelope-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-envelope-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9lbnZlbG9wZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9lbnZlbG9wZS5zdmc/NjVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWVudmVsb3BlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZW52ZWxvcGUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/envelope.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/export.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/export.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-export-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-export-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9leHBvcnQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZXhwb3J0LnN2Zz8xODM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tZXhwb3J0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZXhwb3J0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/export.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/favorite.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/favorite.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-favorite-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-favorite-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mYXZvcml0ZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mYXZvcml0ZS5zdmc/NmU5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWZhdm9yaXRlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZmF2b3JpdGUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/favorite.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/file.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/file.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-file-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-file-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9maWxlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2ZpbGUuc3ZnP2RmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1maWxlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZmlsZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/file.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/flash.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/flash.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-flash-usage\",\n      viewBox: \"0 0 12.8 6.9\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-flash-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mbGFzaC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mbGFzaC5zdmc/NDI3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWZsYXNoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMi44IDYuOVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3ZnQ29sbGVjdGlvbi9pY29uLnN2ZyNpY29uLWZsYXNoLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/flash.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/folder.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/folder.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-folder-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-folder-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mb2xkZXIuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vZm9sZGVyLnN2Zz9hMzc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tZm9sZGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZm9sZGVyLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/folder.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/forward.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/forward.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-forward-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-forward-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9mb3J3YXJkLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2ZvcndhcmQuc3ZnPzc3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1mb3J3YXJkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZm9yd2FyZC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/forward.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/gallery.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/gallery.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-gallery-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-gallery-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9nYWxsZXJ5LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2dhbGxlcnkuc3ZnP2I1ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1nYWxsZXJ5LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZ2FsbGVyeS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/gallery.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/gamepad.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/gamepad.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-gamepad-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-gamepad-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9nYW1lcGFkLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2dhbWVwYWQuc3ZnPzVjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1nYW1lcGFkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZ2FtZXBhZC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/gamepad.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/garbage.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/garbage.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-garbage-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-garbage-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9nYXJiYWdlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2dhcmJhZ2Uuc3ZnP2JjOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1nYXJiYWdlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tZ2FyYmFnZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/garbage.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/headphones.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/headphones.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-headphones-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-headphones-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9oZWFkcGhvbmVzLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2hlYWRwaG9uZXMuc3ZnPzY0ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1oZWFkcGhvbmVzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taGVhZHBob25lcy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/headphones.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/heart.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/heart.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-heart-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-heart-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9oZWFydC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9oZWFydC5zdmc/NmFiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWhlYXJ0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taGVhcnQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/heart.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/help.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/help.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-help-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-help-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9oZWxwLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2hlbHAuc3ZnPzQ5ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1oZWxwLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taGVscC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/help.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/home.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/home.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-home-usage\",\n      viewBox: \"0 0 29 25.9\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-home-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ob21lLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2hvbWUuc3ZnP2UwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1ob21lLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyOSAyNS45XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taG9tZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/home.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/hourglass.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/hourglass.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-hourglass-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-hourglass-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9ob3VyZ2xhc3Muc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vaG91cmdsYXNzLnN2Zz9lMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24taG91cmdsYXNzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taG91cmdsYXNzLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/hourglass.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/info.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/info.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-info-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-info-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9pbmZvLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2luZm8uc3ZnP2I2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1pbmZvLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24taW5mby11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/info.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/layer.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/layer.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-layer-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-layer-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sYXllci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sYXllci5zdmc/N2Y2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWxheWVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGF5ZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/layer.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/layout.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/layout.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-layout-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-layout-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sYXlvdXQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGF5b3V0LnN2Zz9iODY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbGF5b3V0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGF5b3V0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/layout.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/left-arrow-1.svg":
/*!**************************************************!*\
  !*** ./src/svg-collection-icon/left-arrow-1.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-left-arrow-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-left-arrow-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LWFycm93LTEuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGVmdC1hcnJvdy0xLnN2Zz8yMTBhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbGVmdC1hcnJvdy0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGVmdC1hcnJvdy0xLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/left-arrow-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/left-arrow.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/left-arrow.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-left-arrow-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-left-arrow-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LWFycm93LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xlZnQtYXJyb3cuc3ZnP2Y2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1sZWZ0LWFycm93LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGVmdC1hcnJvdy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/left-arrow.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/left.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/left.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-left-usage\",\n      viewBox: \"0 0 24 14.3\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-left-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sZWZ0LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xlZnQuc3ZnPzAyNmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1sZWZ0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAxNC4zXCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGVmdC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/left.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/lightning.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/lightning.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-lightning-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-lightning-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9saWdodG5pbmcuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbGlnaHRuaW5nLnN2Zz81NzI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbGlnaHRuaW5nLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGlnaHRuaW5nLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/lightning.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/link.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/link.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-link-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-link-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9saW5rLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xpbmsuc3ZnP2EwOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1saW5rLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbGluay11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/link.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/lock.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/lock.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-lock-usage\",\n      viewBox: \"0 0 1024 1024\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-lock-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sb2NrLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL2xvY2suc3ZnPzYwZDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1sb2NrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN2Z0NvbGxlY3Rpb24vaWNvbi5zdmcjaWNvbi1sb2NrLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/lock.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/logout.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/logout.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-logout-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-logout-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9sb2dvdXQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbG9nb3V0LnN2Zz9kNDBlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbG9nb3V0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbG9nb3V0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/logout.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/magnet.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/magnet.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-magnet-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-magnet-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tYWduZXQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbWFnbmV0LnN2Zz9lZTdjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbWFnbmV0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbWFnbmV0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/magnet.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/map.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/map.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-map-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-map-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tYXAuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vbWFwLnN2Zz8yZWRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbWFwLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbWFwLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/map.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/menu.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/menu.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-menu-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-menu-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tZW51LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL21lbnUuc3ZnP2YyYmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1tZW51LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbWVudS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/menu.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/monitor.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/monitor.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-monitor-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-monitor-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tb25pdG9yLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL21vbml0b3Iuc3ZnP2I5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1tb25pdG9yLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbW9uaXRvci11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/monitor.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/moon.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/moon.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-moon-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-moon-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9tb29uLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL21vb24uc3ZnP2RjNjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1tb29uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tbW9vbi11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/moon.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/padnote.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/padnote.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-padnote-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-padnote-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYWRub3RlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3BhZG5vdGUuc3ZnP2IwZGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1wYWRub3RlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGFkbm90ZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/padnote.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/paint.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/paint.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-paint-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-paint-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYWludC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYWludC5zdmc/OTRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXBhaW50LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGFpbnQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/paint.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/pause.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/pause.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-pause-usage\",\n      viewBox: \"0 0 17.7 22.6\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-pause-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYXVzZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wYXVzZS5zdmc/MmE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXBhdXNlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNy43IDIyLjZcIixcbiAgICAgIHVybDogX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN2Z0NvbGxlY3Rpb24vaWNvbi5zdmcjaWNvbi1wYXVzZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/pause.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/photo-camera.svg":
/*!**************************************************!*\
  !*** ./src/svg-collection-icon/photo-camera.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-photo-camera-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-photo-camera-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9waG90by1jYW1lcmEuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcGhvdG8tY2FtZXJhLnN2Zz9hZDk2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcGhvdG8tY2FtZXJhLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGhvdG8tY2FtZXJhLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/photo-camera.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/placeholder.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/placeholder.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-placeholder-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-placeholder-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbGFjZWhvbGRlci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbGFjZWhvbGRlci5zdmc/YmQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXBsYWNlaG9sZGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGxhY2Vob2xkZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/placeholder.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/play-button.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/play-button.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-play-button-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-play-button-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbGF5LWJ1dHRvbi5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbGF5LWJ1dHRvbi5zdmc/NDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXBsYXktYnV0dG9uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGxheS1idXR0b24tdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/play-button.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/plug.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/plug.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-plug-usage\",\n      viewBox: \"0 0 768 768\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-plug-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wbHVnLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3BsdWcuc3ZnPzk0MzAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1wbHVnLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3NjggNzY4XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcGx1Zy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/plug.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/power.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/power.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-power-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-power-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wb3dlci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wb3dlci5zdmc/MWEwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXBvd2VyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcG93ZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/power.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/presentation.svg":
/*!**************************************************!*\
  !*** ./src/svg-collection-icon/presentation.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-presentation-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-presentation-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcmVzZW50YXRpb24uc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcHJlc2VudGF0aW9uLnN2Zz9jNjg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcHJlc2VudGF0aW9uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHJlc2VudGF0aW9uLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/presentation.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/printer.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/printer.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-printer-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-printer-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcmludGVyLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3ByaW50ZXIuc3ZnPzkzYzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1wcmludGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHJpbnRlci11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/printer.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/profile.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/profile.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-profile-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-profile-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcm9maWxlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3Byb2ZpbGUuc3ZnPzQyM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1wcm9maWxlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHJvZmlsZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/profile.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/prohibition.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/prohibition.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-prohibition-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-prohibition-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcm9oaWJpdGlvbi5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wcm9oaWJpdGlvbi5zdmc/ODkzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXByb2hpYml0aW9uLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHJvaGliaXRpb24tdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/prohibition.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/push-pin.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/push-pin.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-push-pin-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-push-pin-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wdXNoLXBpbi5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wdXNoLXBpbi5zdmc/MGJiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXB1c2gtcGluLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHVzaC1waW4tdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/push-pin.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/puzzle.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/puzzle.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-puzzle-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-puzzle-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9wdXp6bGUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcHV6emxlLnN2Zz82M2MxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcHV6emxlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcHV6emxlLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/puzzle.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/refresh.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/refresh.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-refresh-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-refresh-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yZWZyZXNoLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3JlZnJlc2guc3ZnP2IzOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1yZWZyZXNoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcmVmcmVzaC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/refresh.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/remove.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/remove.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-remove-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-remove-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yZW1vdmUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcmVtb3ZlLnN2Zz83YjgwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcmVtb3ZlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcmVtb3ZlLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/remove.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/rewind.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/rewind.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-rewind-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-rewind-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yZXdpbmQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vcmV3aW5kLnN2Zz8zYTdkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tcmV3aW5kLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcmV3aW5kLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/rewind.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/right-arrow-1.svg":
/*!***************************************************!*\
  !*** ./src/svg-collection-icon/right-arrow-1.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-right-arrow-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-right-arrow-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC1hcnJvdy0xLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3JpZ2h0LWFycm93LTEuc3ZnPzA1ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1yaWdodC1hcnJvdy0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcmlnaHQtYXJyb3ctMS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/right-arrow-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/right-arrow.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/right-arrow.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-right-arrow-usage\",\n      viewBox: \"0 0 8.1 14.3\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-right-arrow-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC1hcnJvdy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC1hcnJvdy5zdmc/OWVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXJpZ2h0LWFycm93LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA4LjEgMTQuM1wiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3ZnQ29sbGVjdGlvbi9pY29uLnN2ZyNpY29uLXJpZ2h0LWFycm93LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/right-arrow.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/right.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/right.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-right-usage\",\n      viewBox: \"0 0 24 14.3\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-right-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yaWdodC5zdmc/NWJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXJpZ2h0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAxNC4zXCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcmlnaHQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/right.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/rocket-launch.svg":
/*!***************************************************!*\
  !*** ./src/svg-collection-icon/rocket-launch.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-rocket-launch-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-rocket-launch-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9yb2NrZXQtbGF1bmNoLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3JvY2tldC1sYXVuY2guc3ZnP2M3ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1yb2NrZXQtbGF1bmNoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tcm9ja2V0LWxhdW5jaC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/rocket-launch.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/screen.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/screen.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-screen-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-screen-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zY3JlZW4uc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2NyZWVuLnN2Zz9mNjRkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tc2NyZWVuLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2NyZWVuLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/screen.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/search.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/search.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-search-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-search-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZWFyY2guc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2VhcmNoLnN2Zz81ZDc1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tc2VhcmNoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2VhcmNoLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/search.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/settings-1.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/settings-1.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-settings-1-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-settings-1-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy0xLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NldHRpbmdzLTEuc3ZnP2NjM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zZXR0aW5ncy0xLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2V0dGluZ3MtMS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/settings-1.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/settings-2.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/settings-2.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-settings-2-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-settings-2-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy0yLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NldHRpbmdzLTIuc3ZnP2ExMGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zZXR0aW5ncy0yLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2V0dGluZ3MtMi11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/settings-2.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/settings.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/settings.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-settings-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-settings-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zZXR0aW5ncy5zdmc/ZGNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXNldHRpbmdzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2V0dGluZ3MtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/settings.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/share.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/share.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-share-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-share-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaGFyZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaGFyZS5zdmc/YWM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXNoYXJlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2hhcmUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/share.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/shield.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/shield.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-shield-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-shield-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaGllbGQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc2hpZWxkLnN2Zz84YzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tc2hpZWxkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2hpZWxkLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/shield.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/shopping-cart.svg":
/*!***************************************************!*\
  !*** ./src/svg-collection-icon/shopping-cart.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-shopping-cart-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-shopping-cart-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaG9wcGluZy1jYXJ0LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3Nob3BwaW5nLWNhcnQuc3ZnPzAwMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zaG9wcGluZy1jYXJ0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2hvcHBpbmctY2FydC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/shopping-cart.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/shutter.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/shutter.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-shutter-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-shutter-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zaHV0dGVyLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NodXR0ZXIuc3ZnPzEyN2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zaHV0dGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc2h1dHRlci11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/shutter.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/smartphone.svg":
/*!************************************************!*\
  !*** ./src/svg-collection-icon/smartphone.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-smartphone-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-smartphone-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zbWFydHBob25lLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NtYXJ0cGhvbmUuc3ZnP2I0MjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zbWFydHBob25lLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc21hcnRwaG9uZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/smartphone.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/speech-bubble.svg":
/*!***************************************************!*\
  !*** ./src/svg-collection-icon/speech-bubble.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-speech-bubble-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-speech-bubble-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zcGVlY2gtYnViYmxlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3NwZWVjaC1idWJibGUuc3ZnPzIxZTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1zcGVlY2gtYnViYmxlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3BlZWNoLWJ1YmJsZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/speech-bubble.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/speedometer.svg":
/*!*************************************************!*\
  !*** ./src/svg-collection-icon/speedometer.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-speedometer-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-speedometer-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zcGVlZG9tZXRlci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zcGVlZG9tZXRlci5zdmc/NmE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXNwZWVkb21ldGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3BlZWRvbWV0ZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/speedometer.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/stats.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/stats.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-stats-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-stats-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdGF0cy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdGF0cy5zdmc/Y2JjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXN0YXRzLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3RhdHMtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/stats.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/store.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/store.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-store-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-store-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdG9yZS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdG9yZS5zdmc/MjQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXN0b3JlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3RvcmUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/store.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/sun.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/sun.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-sun-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-sun-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zdW4uc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc3VuLnN2Zz9hODkxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tc3VuLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3VuLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/sun.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/switch.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/switch.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-switch-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-switch-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi9zd2l0Y2guc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vc3dpdGNoLnN2Zz81ZGZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tc3dpdGNoLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tc3dpdGNoLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/switch.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/tag.svg":
/*!*****************************************!*\
  !*** ./src/svg-collection-icon/tag.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-tag-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-tag-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi90YWcuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdGFnLnN2Zz80N2NjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdGFnLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdGFnLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/tag.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/target.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/target.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-target-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-target-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi90YXJnZXQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdGFyZ2V0LnN2Zz83NmM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdGFyZ2V0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdGFyZ2V0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/target.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/timer.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/timer.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-timer-usage\",\n      viewBox: \"0 0 62 59.5\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-timer-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi90aW1lci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi90aW1lci5zdmc/YjJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXRpbWVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA2MiA1OS41XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdGltZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/timer.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/unlock.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/unlock.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-unlock-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-unlock-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi91bmxvY2suc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdW5sb2NrLnN2Zz9iMzA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdW5sb2NrLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdW5sb2NrLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/unlock.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/up-arrow.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/up-arrow.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-up-arrow-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-up-arrow-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi91cC1hcnJvdy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi91cC1hcnJvdy5zdmc/NWJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXVwLWFycm93LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdXAtYXJyb3ctdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/up-arrow.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/upload.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/upload.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-upload-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-upload-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi91cGxvYWQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdXBsb2FkLnN2Zz81ZmUxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdXBsb2FkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdXBsb2FkLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/upload.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/video-camera.svg":
/*!**************************************************!*\
  !*** ./src/svg-collection-icon/video-camera.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-video-camera-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-video-camera-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92aWRlby1jYW1lcmEuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdmlkZW8tY2FtZXJhLnN2Zz9jMjA3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdmlkZW8tY2FtZXJhLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdmlkZW8tY2FtZXJhLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/video-camera.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/video.svg":
/*!*******************************************!*\
  !*** ./src/svg-collection-icon/video.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-video-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-video-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92aWRlby5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92aWRlby5zdmc/NjFmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXZpZGVvLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdmlkZW8tdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/video.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/visible.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/visible.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-visible-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-visible-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92aXNpYmxlLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3Zpc2libGUuc3ZnPzQzODkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi12aXNpYmxlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdmlzaWJsZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/visible.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/voice-recorder.svg":
/*!****************************************************!*\
  !*** ./src/svg-collection-icon/voice-recorder.svg ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-voice-recorder-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-voice-recorder-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92b2ljZS1yZWNvcmRlci5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92b2ljZS1yZWNvcmRlci5zdmc/MTljMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXZvaWNlLXJlY29yZGVyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdm9pY2UtcmVjb3JkZXItdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/voice-recorder.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/volume.svg":
/*!********************************************!*\
  !*** ./src/svg-collection-icon/volume.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-volume-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-volume-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi92b2x1bWUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vdm9sdW1lLnN2Zz9kZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tdm9sdW1lLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tdm9sdW1lLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/volume.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/waiting.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/waiting.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-waiting-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-waiting-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi93YWl0aW5nLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dhaXRpbmcuc3ZnPzgxMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi13YWl0aW5nLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24td2FpdGluZy11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/waiting.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/warning.svg":
/*!*********************************************!*\
  !*** ./src/svg-collection-icon/warning.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-warning-usage\",\n      viewBox: \"0 0 6.1 23.1\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-warning-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi93YXJuaW5nLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dhcm5pbmcuc3ZnPzg3NzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi13YXJuaW5nLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA2LjEgMjMuMVwiLFxuICAgICAgdXJsOiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3ZnQ29sbGVjdGlvbi9pY29uLnN2ZyNpY29uLXdhcm5pbmctdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/warning.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/wifi-bold.svg":
/*!***********************************************!*\
  !*** ./src/svg-collection-icon/wifi-bold.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-wifi-bold-usage\",\n      viewBox: \"0 0 768 768\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-wifi-bold-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi93aWZpLWJvbGQuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1jb2xsZWN0aW9uLWljb24vd2lmaS1ib2xkLnN2Zz8zMGVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24td2lmaS1ib2xkLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA3NjggNzY4XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24td2lmaS1ib2xkLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/wifi-bold.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/wifi.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/wifi.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-wifi-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-wifi-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi93aWZpLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3dpZmkuc3ZnPzA0YmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi13aWZpLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24td2lmaS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/wifi.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/zoom-out.svg":
/*!**********************************************!*\
  !*** ./src/svg-collection-icon/zoom-out.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-zoom-out-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-zoom-out-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi96b29tLW91dC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi96b29tLW91dC5zdmc/YmY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLXpvb20tb3V0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tem9vbS1vdXQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/zoom-out.svg\n");

/***/ }),

/***/ "./src/svg-collection-icon/zoom.svg":
/*!******************************************!*\
  !*** ./src/svg-collection-icon/zoom.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n      id: \"icon-zoom-usage\",\n      viewBox: \"0 0 129 129\",\n      url: __webpack_require__.p + \"svgCollection/icon.svg#icon-zoom-usage\",\n      toString: function () {\n        return this.url;\n      }\n    });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWNvbGxlY3Rpb24taWNvbi96b29tLnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctY29sbGVjdGlvbi1pY29uL3pvb20uc3ZnPzkyODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi16b29tLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxMjkgMTI5XCIsXG4gICAgICB1cmw6IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdmdDb2xsZWN0aW9uL2ljb24uc3ZnI2ljb24tem9vbS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-collection-icon/zoom.svg\n");

/***/ })

/******/ });