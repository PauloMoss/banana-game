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

/***/ "./src/AutonomousDraw.ts":
/*!*******************************!*\
  !*** ./src/AutonomousDraw.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutonomousDraw)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _Illustration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Illustration */ \"./src/Illustration.ts\");\n\n\nclass AutonomousDraw extends _Illustration__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas, context, img) {\n        super(context, 0, 0, img);\n        this.canvas = canvas;\n        const randomInitialPosition = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randomIntFromInterval)(0, this.canvas.width - 80);\n        this.x = randomInitialPosition;\n        this.speedY = 5;\n    }\n    move() {\n        this.y += this.speedY;\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/AutonomousDraw.ts?");

/***/ }),

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bomb)\n/* harmony export */ });\n/* harmony import */ var _AutonomousDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutonomousDraw */ \"./src/AutonomousDraw.ts\");\n\nclass Bomb extends _AutonomousDraw__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(canvas, context) {\n        const bomb = new Image();\n        bomb.src = `../src/assets/sprites/bomb_circle.png`;\n        super(canvas, context, bomb);\n        this.img = bomb;\n        this.x = 40;\n        this.y = 50;\n        this.radius = 20;\n    }\n    updateImageDrop(game) {\n        this.move();\n        if (game.player.checkCollision(this)) {\n            game.endGame();\n        }\n        if (this.y > game.canvas.height - 125) {\n            game.deleteDropable(this);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Bomb.ts?");

/***/ }),

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.ts\");\n/* harmony import */ var _AutonomousDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutonomousDraw */ \"./src/AutonomousDraw.ts\");\n\n\nclass Fruit extends _AutonomousDraw__WEBPACK_IMPORTED_MODULE_1__.default {\n    constructor(canvas, context) {\n        const fruit = new Image();\n        const fruitType = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randomFruit)();\n        fruit.src = `../src/assets/sprites/${fruitType.name}.png`;\n        super(canvas, context, fruit);\n        this.img = fruit;\n        this.name = fruitType.name;\n        this.points = fruitType.points;\n    }\n    updateImageDrop(game) {\n        this.move();\n        if (game.player.checkCollision(this)) {\n            let newScore = 0;\n            if (this.points === null) {\n                newScore = game.score * 2;\n            }\n            else {\n                newScore = game.score + this.points;\n            }\n            game.deleteDropable(this);\n            game.updateScore(newScore);\n        }\n        if (this.y > game.canvas.height - 125) {\n            game.deleteDropable(this);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bomb */ \"./src/Bomb.ts\");\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fruit */ \"./src/Fruit.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n\n\n\nclass Game {\n    constructor(screenWidth, screenHeight, canvas) {\n        this.canvas = canvas;\n        this.canvas.width = screenWidth;\n        this.canvas.height = screenHeight;\n        this.context = this.canvas.getContext(\"2d\");\n    }\n    start() {\n        this.resetPlayerAndDropables();\n        this.startIntervals();\n    }\n    resetPlayerAndDropables() {\n        this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__.default(this.context, this.canvas.width / 2, this.canvas.height - 125);\n        this.dropables = [];\n        this.score = 0;\n    }\n    spawnFruit() {\n        this.dropables.push(new _Fruit__WEBPACK_IMPORTED_MODULE_1__.default(this.canvas, this.context));\n    }\n    spawnBomb() {\n        this.dropables.push(new _Bomb__WEBPACK_IMPORTED_MODULE_0__.default(this.canvas, this.context));\n    }\n    deleteDropable(dropable) {\n        this.dropables = this.dropables.filter((d) => d !== dropable);\n    }\n    updateScore(newScore) {\n        const element = document.querySelector(\".score\");\n        if (newScore - this.score > 10) {\n            element.classList.add(\"highlight\");\n            setTimeout(() => element.classList.remove(\"highlight\"), 100);\n        }\n        this.score = newScore;\n        element.innerText = \"Score: \" + this.score.toFixed(1);\n    }\n    gameLoop() {\n        this.updateImageDrop();\n        this.renderGame();\n    }\n    renderGame() {\n        this.clearScreen();\n        this.player.drawImage();\n        this.dropables.forEach((dropable) => dropable.drawImage());\n    }\n    updateImageDrop() {\n        this.dropables.forEach((dropable) => dropable.updateImageDrop(this));\n    }\n    startIntervals() {\n        this.clearIntervals();\n        const { setInterval } = window;\n        this.intervalsIds = [\n            setInterval(() => this.gameLoop(), 1000 / 60),\n            setInterval(() => this.spawnFruit(), 1000),\n            setInterval(() => this.spawnBomb(), 2000),\n        ];\n    }\n    clearIntervals() {\n        var _a;\n        (_a = this.intervalsIds) === null || _a === void 0 ? void 0 : _a.forEach(clearInterval);\n    }\n    clearScreen() {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n    onKeyDown(event) {\n        let moveX;\n        if (event.key === \"ArrowLeft\") {\n            moveX = -1;\n        }\n        else if (event.key === \"ArrowRight\") {\n            moveX = +1;\n        }\n        else\n            return;\n        this.player.moveTo(moveX, this.canvas);\n    }\n    endGame() {\n        this.clearIntervals();\n        setTimeout(() => {\n            alert(`Fim do jogo! Você fez ${this.score.toFixed(1)} pontos!`);\n        }, 2000);\n    }\n}\n/*\n      \n      */\n\n\n//# sourceURL=webpack://BananaGame/./src/Game.ts?");

/***/ }),

/***/ "./src/Illustration.ts":
/*!*****************************!*\
  !*** ./src/Illustration.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Illustration)\n/* harmony export */ });\nclass Illustration {\n    constructor(context, initialX, initialY, img) {\n        this.context = context;\n        this.x = initialX;\n        this.y = initialY;\n        this.img = img;\n        this.radius = 40;\n    }\n    drawImage() {\n        this.context.drawImage(this.img, this.x, this.y, 80, 100);\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Illustration.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Illustration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Illustration */ \"./src/Illustration.ts\");\n\nclass Player extends _Illustration__WEBPACK_IMPORTED_MODULE_0__.default {\n    constructor(context, initialX, initialY) {\n        const allien = new Image();\n        allien.src = \"../src/assets/sprites/alien.png\";\n        super(context, initialX, initialY, allien);\n        this.img = allien;\n    }\n    moveTo(delta, canvas) {\n        if (this.x < 10 && delta < 0)\n            return;\n        if (this.x > canvas.width - 90 && delta > 0)\n            return;\n        delta = delta * 10;\n        this.x = this.x + delta;\n    }\n    checkCollision(image) {\n        const distance = Math.sqrt(Math.pow((this.x - image.x), 2) + Math.pow((this.y - image.y), 2));\n        return distance < this.radius + image.radius;\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/Player.ts?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomIntFromInterval\": () => (/* binding */ randomIntFromInterval),\n/* harmony export */   \"randomFruit\": () => (/* binding */ randomFruit)\n/* harmony export */ });\nfunction randomIntFromInterval(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\nfunction randomFruit() {\n    const chance = Math.random();\n    if (chance <= 0.05) {\n        return { name: \"banana\", points: null };\n    }\n    else if (chance > 0.05 && chance <= 0.2) {\n        return { name: \"strawberry\", points: 30 };\n    }\n    else if (chance > 0.2 && chance <= 0.4) {\n        return { name: \"watermelon\", points: 20 };\n    }\n    else if (chance > 0.4 && chance <= 0.7) {\n        return { name: \"orange\", points: 10 };\n    }\n    else if (chance > 0.7 && chance <= 1) {\n        return { name: \"red-apple\", points: 5 };\n    }\n}\n\n\n//# sourceURL=webpack://BananaGame/./src/helpers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nconst screenWidth = window.innerWidth;\nconst screenHeight = window.innerHeight;\nconst canvas = document.querySelector(\"#canvas\");\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__.default(screenWidth, screenHeight, canvas);\ngame.start();\nwindow.addEventListener(\"keydown\", (event) => {\n    game.onKeyDown(event);\n});\ncanvas.addEventListener(\"click\", () => {\n    game.start();\n});\n\n\n//# sourceURL=webpack://BananaGame/./src/index.ts?");

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