/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n\nclass Game {\n    constructor(screenWidth, screenHeight, canvas) {\n        this.canvas = canvas;\n        this.canvas.width = screenWidth;\n        this.canvas.height = screenHeight;\n        this.context = this.canvas.getContext(\"2d\");\n    }\n    start() {\n        this.resetPlayer();\n        this.startIntervals();\n    }\n    resetPlayer() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__.default(this.context, this.canvas.width / 2, this.canvas.height - 125);\n    }\n    onKeyDown(event) {\n        let moveX = 0;\n        if (event.key === \"ArrowLeft\") {\n            moveX = -1;\n        }\n        else if (event.key === \"ArrowRight\") {\n            moveX = +1;\n        }\n        else\n            return;\n        this.player.moveTo(moveX);\n    }\n    gameLoop() {\n        //this.updateState();\n        this.renderGame();\n    }\n    renderGame() {\n        this.clearScreen();\n        this.player.draw();\n    }\n    startIntervals() {\n        this.clearIntervals();\n        const { setInterval } = window;\n        this.intervalsIds = [setInterval(() => this.gameLoop(), 1000 / 60)];\n    }\n    clearIntervals() {\n        var _a;\n        (_a = this.intervalsIds) === null || _a === void 0 ? void 0 : _a.forEach(clearInterval);\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n}\n/*\n      setInterval(() => this.spawnBomb(), 2000),\n      setInterval(() => this.spawnFruit(), 1000),\n      setInterval(() => this.spawnBanana(), 2000),*/\n\n\n//# sourceURL=webpack://BananaGame/./src/Game.ts?");

/***/ }),

/***/ "./src/Illustration.ts":
/*!*****************************!*\
  !*** ./src/Illustration.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Illustration)\n/* harmony export */ });\nclass Illustration {\n    constructor(context, initialX, initialY, img) {\n        this.context = context;\n        this.x = initialX;\n        this.y = initialY;\n        this.img = img;\n    }\n    draw() {\n        this.context.drawImage(this.img, this.x, this.y, 80, 100);\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Illustration.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Illustration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Illustration */ \"./src/Illustration.ts\");\n\nclass Player extends _Illustration__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, initialX, initialY) {\n        const allien = new Image();\n        allien.src = \"../src/assets/sprites/alien.png\";\n        super(context, initialX, initialY, allien);\n        this.img = allien;\n    }\n    moveTo(delta) {\n        delta = delta * 10;\n        this.x = this.x + delta;\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Player.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst screenWidth = window.innerWidth;\nconst screenHeight = window.innerHeight;\nconst canvas = document.querySelector(\"#canvas\");\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(screenWidth, screenHeight, canvas);\ngame.start();\nwindow.addEventListener(\"keydown\", (event) => {\n    game.onKeyDown(event);\n});\n\n\n//# sourceURL=webpack://BananaGame/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;