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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Nunito&display=swap);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0; }\\n\\nbutton {\\n  text-decoration: none;\\n  outline: none;\\n  transition: all .2s linear;\\n  -moz-transition: all .2s linear;\\n  -webkit-transition: all .2s linear;\\n  -o-transition: all .2s linear;\\n  font-family: 'Open Sans'; }\\n\\n.app {\\n  margin: 0 auto;\\n  margin-top: 200px;\\n  max-width: 1200px;\\n  height: 800px; }\\n\\n/* City search, show info about weather */\\n.up-block {\\n  display: flex;\\n  justify-content: space-between;\\n  min-height: 50%;\\n  /* background-color: #432C85; */\\n  background: linear-gradient(to top, #8d67e4, #2E1D65);\\n  border-radius: 20px 20px 0 0;\\n  box-shadow: 0 0.5rem 2rem 0.5rem rgba(0, 0, 255, 0.2);\\n  /* box-shadow: 0 -0.5rem 2rem 0.5rem rgba(0, 0, 255, 0.2); */\\n  /* box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1); */ }\\n\\n#weatherBlock {\\n  max-width: 500px;\\n  margin-left: 75px;\\n  margin-top: 45px; }\\n\\n.weatherTemperature {\\n  text-align: center;\\n  margin: 0 auto;\\n  color: #fff;\\n  font-size: 140px;\\n  font-family: 'Nunito', sans-serif; }\\n\\n.weatherCondition {\\n  color: #ddd8e9;\\n  text-transform: uppercase;\\n  margin: 0 auto;\\n  max-width: 150px;\\n  font-family: 'Montserrat', sans-serif;\\n  font-size: 20px;\\n  letter-spacing: 7px; }\\n\\n.weatherExtraData {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  margin-top: 35px;\\n  max-height: 100px;\\n  width: 350px; }\\n\\n.weatherHumidity {\\n  max-width: 250px;\\n  font-family: 'Montserrat', sans-serif;\\n  color: #ddd8e9;\\n  font-size: 20px; }\\n\\n.weatherWind {\\n  max-width: 65px;\\n  font-family: 'Montserrat', sans-serif;\\n  color: #ddd8e9;\\n  font-size: 20px; }\\n\\n/* Input */\\n.cityInputBlock {\\n  margin-top: 70px;\\n  margin-right: 70px; }\\n\\n#cityInput {\\n  text-align: center;\\n  max-width: 140px;\\n  border: none;\\n  background-color: inherit;\\n  color: #fff;\\n  font-family: 'Open Sans', sans-serif;\\n  text-transform: uppercase;\\n  font-size: 24px; }\\n\\n.cityInputLine {\\n  margin: 0 auto;\\n  margin-top: 5px;\\n  width: 50px;\\n  border: solid;\\n  border-width: 2px;\\n  border-color: #fff;\\n  border-radius: 20px; }\\n\\n/* Other */\\n.down-block {\\n  min-height: 50%;\\n  border-radius: 0 0 20px 20px;\\n  box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2); }\\n\\n/* transition: all .3s linear;\\n    -moz-transition: all .3s linear;\\n    -webkit-transition: all .3s linear;\\n    -o-transition: all .3s linear; */\\n@media screen and (max-width: 1440px) {\\n  .app {\\n    margin-top: 75px;\\n    max-width: 950px; }\\n  .weatherTemperature {\\n    font-size: 130px; } }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar cityInput = document.getElementById(\"cityInput\");\ncityInput.addEventListener(\"keydown\", function (event) {\n  if (event.code === \"Enter\") {\n    getWeather();\n  }\n});\n\nfunction loadCookie() {\n  cityInput.value = getCookie('city') ? getCookie('city') : '';\n}\n\nfunction getReq() {\n  if (getCookie('city')) {\n    getWeather();\n  }\n}\n\nloadCookie();\ngetReq();\n\nfunction getWeather() {\n  var CITY = cityInput.value;\n  var key = \"&appid=1ffca6db0ea908d8883ff72a55ebaf21\";\n  var metric = '&units=metric';\n  var blockNumbers = CITY.replace(/^([^0-9]*)$/);\n  var weatherBlock = document.getElementById(\"weatherBlock\");\n  var date = new Date();\n  setCookie('city', CITY);\n\n  if (CITY == 0 || CITY == blockNumbers) {\n    return weatherBlock.innerHTML = \"\";\n  } else {\n    fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\" + CITY + key + metric).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      var textParse;\n\n      if (data.sys) {\n        textParse = \"<div style=\\\"width: 418px;\\\">\\n                            <div class=\\\"weatherTemperature\\\">\\n                                \".concat(data.main.temp.toFixed(0), \"&deg; <!-- Temperature -->\\n                            </div>\\n\\n                            <div class=\\\"weatherCondition\\\">\\n                                \").concat(data.weather[0].main, \" <!-- Weather Condition -->\\n                            </div>\\n                        </div>\\n\\n                        <div class=\\\"weatherExtraData\\\">\\n                            <div class=\\\"weatherHumidity\\\">\\n                                <div style=\\\"text-align: center; font-size: 15px; letter-spacing: 2px;\\\">HUMIDITY</div>\\n                                <div style=\\\"text-align: center; margin-top: 7px;\\\">\").concat(data.main.humidity, \"%</div>\\n                            </div>\\n\\n                            <div style=\\\"height: 50px; border: solid; \\n                                border-width: 0.5px; border-radius: 20px; \\n                                color: #ddd8e9; opacity: 0.5;\\\"></div>\\n\\n                            <div class=\\\"weatherWind\\\">\\n                                <div style=\\\"font-size: 15px; text-align: center; letter-spacing: 2px;\\\">WIND</div>\\n                                <div style=\\\"text-align: center; margin-top: 7px;\\\">\").concat(data.wind.speed.toFixed(0), \" M/S</div>\\n                            </div>\\n                        </div>\\n\\n                        <!-- <div>\\n                            \").concat(date.getHours(), \":\").concat(date.getMinutes(), \"\\n                        </div> -->\");\n        weatherBlock.innerHTML = textParse;\n      } else {\n        switch (data.cod) {\n          case '400':\n            textParse = \"<div>Bad request</div>\";\n            weatherBlock.innerHTML = textParse;\n            break;\n\n          case '404':\n            textParse = \"<div>Sorry, there is no such city in our database</div>\";\n            weatherBlock.innerHTML = textParse;\n            break;\n\n          default:\n            textParse = \"<div>\".concat(data.message, \"</div>\");\n            break;\n        }\n      }\n    })[\"catch\"](function (error) {\n      // const errorStatus = `<div>${error.cod}: ${error.message}</div>`;\n      // document.getElementById('response').innerHTML = errorStatus;\n      console.log(error);\n    });\n  }\n}\n\n;\n\nfunction getCookie(name) {\n  var matches = document.cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"));\n  return matches ? decodeURIComponent(matches[1]) : undefined;\n}\n\nfunction setCookie(name, value, options) {\n  options = options || {};\n  var expires = options.expires;\n\n  if (typeof expires == \"number\" && expires) {\n    var d = new Date();\n    d.setTime(d.getTime() + expires * 1000);\n    expires = options.expires = d;\n  }\n\n  if (expires && expires.toUTCString) {\n    options.expires = expires.toUTCString();\n  }\n\n  value = encodeURIComponent(value);\n  var updatedCookie = name + \"=\" + value;\n\n  for (var propName in options) {\n    updatedCookie += \"; \" + propName;\n    var propValue = options[propName];\n\n    if (propValue !== true) {\n      updatedCookie += \"=\" + propValue;\n    }\n  }\n\n  document.cookie = updatedCookie;\n}\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });