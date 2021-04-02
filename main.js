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

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nlet getWeatherData = (function () {\n    async function getWeather(zip) {\n        try {\n            let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=9f2b95e435dab1c30dd5b0d61dd89876&units=imperial\n            `)\n            let weatherDataReturn = await weatherData.json();\n            console.log(weatherDataReturn)\n            return  weatherDataReturn   \n        }\n        catch(err){\n            alert(err)\n        }\n    // return weatherDataReturn   \n    };\n    return { getWeather }\n}())\n\n\n//# sourceURL=webpack://weather-app/./src/getWeather.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeaderModule\": () => (/* binding */ createHeaderModule)\n/* harmony export */ });\n/* harmony import */ var _src_getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/getWeather.js */ \"./src/getWeather.js\");\n/* harmony import */ var _src_weatherReport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/weatherReport.js */ \"./src/weatherReport.js\");\n\n\n\nlet createHeaderModule = (function () {\n\n    function createHeader() {\n        let content = document.getElementById('content');\n        let headerContainer = document.createElement('div')\n            headerContainer.setAttribute('id','header-container')\n            content.appendChild(headerContainer)\n        let headerLeftContainer=document.createElement('div')\n            headerLeftContainer.className='header-left-right-container'\n            headerContainer.appendChild(headerLeftContainer)\n        let title = document.createElement('h1')\n            title.classList='title'\n            title.textContent = 'Get Weather'\n            headerLeftContainer.appendChild(title)\n        let searchCopy=document.createElement('h3')\n            searchCopy.classList = 'search-box-header'\n            searchCopy.textContent = 'Enter Zip Code'\n            headerLeftContainer.appendChild(searchCopy)\n        let searchContainer=document.createElement('div')\n            searchContainer.className='search-container'\n            headerLeftContainer.appendChild(searchContainer)\n        let searchInput=document.createElement('input')\n            searchInput.className='search-input'\n            searchInput.setAttribute('pattern',\"^[0-9]{5}(?:-[0-9]{4})?$\")\n            searchInput.required = true;\n            searchContainer.appendChild(searchInput)\n        let formErrorMessage=document.createElement('div')\n            formErrorMessage.className = 'error-message'\n            formErrorMessage.textContent = ''\n            headerLeftContainer.appendChild(formErrorMessage)\n        let searchButton=document.createElement('button')\n            searchButton.classList='search-button'\n            searchButton.textContent='>'\n            searchContainer.appendChild(searchButton)\n        \n        let headerRightContainer=document.createElement('div')\n            headerRightContainer.className='header-right-left-container'\n            headerContainer.appendChild(headerRightContainer)\n        let headerIcon = document.createElement('img')\n            headerIcon.src='./headericon.png'\n            headerIcon.className='header-icon'\n            headerRightContainer.appendChild(headerIcon)\n    \n            searchButton.addEventListener('click', (e) => {\n\n                \n                var oldWeatherReport = document.querySelector(\".weather-report-container\");\n                if(typeof(oldWeatherReport) != 'undefined' && oldWeatherReport != null){\n                    content.removeChild(oldWeatherReport)\n                    sendData();\n                } else{\n                    sendData();\n                }\n                searchInput.value=''\n            })\n        \n            let sendData = async function() {\n                showFormError();\n                if (searchInput.validity.valid) {\n                    let tryThis = await _src_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData.getWeather(searchInput.value);\n                    let thenThis = await _src_weatherReport_js__WEBPACK_IMPORTED_MODULE_1__.createWeatherReport.createWeatherReportComponent(tryThis['name'],tryThis['weather'][0]['icon'],tryThis['weather'][0]['description'],tryThis['main']['temp'],tryThis['main']['feels_like'],tryThis['main']['temp_min'],tryThis['main']['temp_max'])\n                }\n            } \n\n        function showFormError() {\n            if (searchInput.validity.valid) {\n                formErrorMessage.textContent=''\n            }\n            else if (searchInput.validity.valueMissing) {\n                formErrorMessage.textContent = 'This is a required field'\n            }\n            else if (searchInput.validity.patternMismatch) {\n                formErrorMessage.textContent = 'Must be 5 digits'\n            }\n        }\n    }\n\n    function createWeatherReportComponent(city, tempature, feelslike, low, high){\n        let content=document.getElementById('content')\n        let weatherReportContainer=document.createElement('div')\n            weatherReportContainer.className='weather-report-container'\n            content.appendChild(weatherReportContainer)\n        let cityHeader=document.createElement('h1')\n            cityHeader.textContent = city\n            weatherReportContainer.appendChild(cityHeader)\n    }\n\n\n\n   \n;\n \nreturn { createHeader, createWeatherReportComponent }\n\n}());\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/header.js */ \"./src/header.js\");\n/* harmony import */ var _src_weatherReport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/weatherReport.js */ \"./src/weatherReport.js\");\n/* harmony import */ var _src_getWeather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/getWeather.js */ \"./src/getWeather.js\");\n\n\n\n \n_src_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeaderModule.createHeader();\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherReport.js":
/*!******************************!*\
  !*** ./src/weatherReport.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWeatherReport\": () => (/* binding */ createWeatherReport)\n/* harmony export */ });\n/* harmony import */ var _src_getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/getWeather.js */ \"./src/getWeather.js\");\n\n\nlet createWeatherReport = (function () {\n\n    function createWeatherReportComponent(city, icon, description, currentTemp, feelslike, low, high){\n        let content=document.getElementById('content')\n        let weatherReportContainer=document.createElement('div')\n            weatherReportContainer.className='weather-report-container'\n            content.appendChild(weatherReportContainer)\n        let cityHeader=document.createElement('h1')\n            cityHeader.className='city-header'\n            cityHeader.textContent = city\n            weatherReportContainer.appendChild(cityHeader)\n        let weatherIcon=document.createElement('img')\n            weatherIcon.className='weather-icon'\n            weatherIcon.src='http://openweathermap.org/img/wn/'+icon+'@2x.png'\n            weatherReportContainer.appendChild(weatherIcon)\n        let weatherDescription=document.createElement('h2')\n            weatherDescription.className= 'temp-data'\n            weatherDescription.textContent=description.toUpperCase()\n            weatherReportContainer.appendChild(weatherDescription)\n        let temperature=document.createElement('h3')\n            temperature.className= 'temp-data'\n            temperature.textContent = 'Temperature: ' + Math.round(currentTemp) + '°'\n            weatherReportContainer.appendChild(temperature)\n        let feelsLikeTemp=document.createElement('h3')\n            feelsLikeTemp.className= 'temp-data'\n            feelsLikeTemp.textContent = 'Feels Like: ' + Math.round(feelslike) + '°'\n            weatherReportContainer.appendChild(feelsLikeTemp)\n        let minMax=document.createElement('h3')\n            minMax.className= 'temp-data'\n            minMax.textContent = 'Low Temp: ' + Math.round(low) + '° ' + 'High Temp: ' + Math.round(high) + '°'\n            weatherReportContainer.appendChild(minMax)\n\n\n       \n    }\n\n    return { createWeatherReportComponent }\n}());\n\n \n\n//# sourceURL=webpack://weather-app/./src/weatherReport.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
