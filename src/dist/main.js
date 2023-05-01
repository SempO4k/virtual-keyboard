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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".page-wrapper {\\r\\n margin: 0 auto;\\r\\n}\\r\\n\\r\\n.textarea {\\r\\n  display: block;\\r\\n  width: 700px;\\r\\n  height: 200px;\\r\\n  margin: 10px auto;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n  width: 710px;\\r\\n  margin: 10px auto;\\r\\n  padding: 5px;\\r\\n  background: #888;\\r\\n  border: 3px solid #222;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  row-gap: 5px;\\r\\n}\\r\\n\\r\\n.keyboard .key {\\r\\n  display: inline-block;\\r\\n  min-width: 40px;\\r\\n  height: 40px;\\r\\n  background: #444;\\r\\n  margin-left: 6px;\\r\\n  border-radius: 3px;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  line-height: 40px;\\r\\n  cursor: pointer;\\r\\n  transition: all .1s ease-in-out;\\r\\n}\\r\\n.caseDown,\\r\\n.caseUp,\\r\\n.shiftCaps,\\r\\n.caps {\\r\\n  display:block;\\r\\n  width:100;\\r\\n}\\r\\n/* .key:hover {\\r\\n  background: #9e9c9c;\\r\\n  border-radius: 10px;\\r\\n} */\\r\\n\\r\\n.keyboard .key.active {\\r\\n  background: #cecccc;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.Tab {\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.Backspace,\\r\\n.CapsLock,\\r\\n.ShiftLeft {\\r\\n  width: 100px;\\r\\n}\\r\\n\\r\\n.Delete {\\r\\n  width: 44px;\\r\\n}\\r\\n.Tab {\\r\\n  width: 50px;\\r\\n}\\r\\n.Enter,\\r\\n.ShiftRight {\\r\\n  width: 86px;\\r\\n}\\r\\n\\r\\n.Space {\\r\\n  width: 330px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.description,\\r\\n.language {\\r\\n  text-align: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data/buttons.js":
/*!*****************************!*\
  !*** ./src/data/buttons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = [\n  { keyId: 'Backquote', keySymbol: '`', langRu: '`' },\n  { keyId: 'Digit1', keySymbol: '1', langRu: '1' },\n  { keyId: 'Digit2', keySymbol: '2', langRu: '2' },\n  { keyId: 'Digit3', keySymbol: '3', langRu: '3' },\n  { keyId: 'Digit4', keySymbol: '4', langRu: '4' },\n  { keyId: 'Digit5', keySymbol: '5', langRu: '5' },\n  { keyId: 'Digit6', keySymbol: '6', langRu: '6' },\n  { keyId: 'Digit7', keySymbol: '7', langRu: '7' },\n  { keyId: 'Digit8', keySymbol: '8', langRu: '8' },\n  { keyId: 'Digit9', keySymbol: '9', langRu: '9' },\n  { keyId: 'Digit0', keySymbol: '0', langRu: '0' },\n  { keyId: 'Minus', keySymbol: '-', langRu: '-' },\n  { keyId: 'Equal', keySymbol: '=', langRu: '=' },\n  { keyId: 'Backspace', keySymbol: 'Backspace', langRu: 'Backspace' },\n  { keyId: 'Tab', keySymbol: 'Tab', langRu: 'Tab' },\n  { keyId: 'KeyQ', keySymbol: 'q', langRu: 'й' },\n  { keyId: 'KeyW', keySymbol: 'w', langRu: 'ц' },\n  { keyId: 'KeyE', keySymbol: 'e', langRu: 'у' },\n  { keyId: 'KeyR', keySymbol: 'r', langRu: 'к' },\n  { keyId: 'KeyT', keySymbol: 't', langRu: 'е' },\n  { keyId: 'KeyY', keySymbol: 'y', langRu: 'н' },\n  { keyId: 'KeyU', keySymbol: 'u', langRu: 'г' },\n  { keyId: 'KeyI', keySymbol: 'i', langRu: 'ш' },\n  { keyId: 'KeyO', keySymbol: 'o', langRu: 'щ' },\n  { keyId: 'KeyP', keySymbol: 'p', langRu: 'з' },\n  { keyId: 'BracketLeft', keySymbol: '[', langRu: 'х' },\n  { keyId: 'BracketRight', keySymbol: ']', langRu: 'ъ' },\n  { keyId: 'Backslash', keySymbol: '\\\\', langRu: '\\\\' },\n  { keyId: 'Delete', keySymbol: 'Del', langRu: 'Del' },\n  { keyId: 'CapsLock', keySymbol: 'CapsLock', langRu: 'CapsLock' },\n  { keyId: 'KeyA', keySymbol: 'a', langRu: 'ф' },\n  { keyId: 'KeyS', keySymbol: 's', langRu: 'ы' },\n  { keyId: 'KeyD', keySymbol: 'd', langRu: 'в' },\n  { keyId: 'KeyF', keySymbol: 'f', langRu: 'а' },\n  { keyId: 'KeyG', keySymbol: 'g', langRu: 'п' },\n  { keyId: 'KeyH', keySymbol: 'h', langRu: 'р' },\n  { keyId: 'KeyJ', keySymbol: 'j', langRu: 'о' },\n  { keyId: 'KeyK', keySymbol: 'k', langRu: 'л' },\n  { keyId: 'KeyL', keySymbol: 'l', langRu: 'д' },\n  { keyId: 'Semicolon', keySymbol: ';', langRu: 'ж' },\n  { keyId: 'Quote', keySymbol: '\\'', langRu: 'э' },\n  { keyId: 'Enter', keySymbol: 'Enter', langRu: 'Enter' },\n  { keyId: 'ShiftLeft', keySymbol: 'Shift', langRu: 'Shift' },\n  { keyId: 'KeyZ', keySymbol: 'z', langRu: 'я' },\n  { keyId: 'KeyX', keySymbol: 'x', langRu: 'ч' },\n  { keyId: 'KeyC', keySymbol: 'c', langRu: 'с' },\n  { keyId: 'KeyV', keySymbol: 'v', langRu: 'м' },\n  { keyId: 'KeyB', keySymbol: 'b', langRu: 'и' },\n  { keyId: 'KeyN', keySymbol: 'n', langRu: 'т' },\n  { keyId: 'KeyM', keySymbol: 'm', langRu: 'ь' },\n  { keyId: 'Comma', keySymbol: ',', langRu: 'б' },\n  { keyId: 'Period', keySymbol: '.', langRu: 'ю' },\n  { keyId: 'Slash', keySymbol: '/', langRu: '.' },\n  { keyId: 'ArrowUp', keySymbol: '▲', langRu: '▲' },\n  { keyId: 'ShiftRight', keySymbol: 'Shift', langRu: 'Shift' },\n  { keyId: 'ControlLeft', keySymbol: 'Ctrl', langRu: 'Ctrl' },\n  { keyId: 'OSLeft', keySymbol: 'Win', langRu: 'Win' },\n  { keyId: 'AltLeft', keySymbol: 'Alt', langRu: 'Alt' },\n  { keyId: 'Space', keySymbol: '', langRu: '' },\n  { keyId: 'AltRight', keySymbol: 'Alt', langRu: 'Alt' },\n  { keyId: 'ArrowLeft', keySymbol: '◄', langRu: '◄' },\n  { keyId: 'ArrowDown', keySymbol: '▼', langRu: '▼' },\n  { keyId: 'ArrowRight', keySymbol: '►', langRu: '►' },\n  { keyId: 'ControlRight', keySymbol: 'Ctrl', langRu: 'Ctrl' },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/data/buttons.js?");

/***/ }),

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor({ keyId, keySymbol, langRu }) {\n    this.keyId = keyId;\n    this.keySymbol = keySymbol;\n    this.ruLang = langRu;\n  }\n\n  generateButton() {\n    const buttonCase = document.createElement('div');\n    buttonCase.className = `key ${this.keyId}`;\n\n    for (let i = 0; i < 2; i += 1) {\n      const lang = document.createElement('span');\n      lang.className = (i === 1) ? 'lang en' : 'lang ru hidden';\n      buttonCase.append(lang);\n      const caseDown = document.createElement('span');\n      const caseUp = document.createElement('span');\n      const shiftCaps = document.createElement('span');\n      caseDown.className = 'caseDown';\n      caseUp.className = 'caseUp hidden';\n      shiftCaps.className = 'shiftCaps hidden';\n      lang.append(caseDown);\n      lang.append(caseUp);\n      lang.append(shiftCaps);\n      caseDown.textContent = (i === 1) ? this.keySymbol : this.ruLang;\n      caseUp.textContent = (i === 1) ? (this.keySymbol).toUpperCase() : (this.ruLang).toUpperCase();\n      shiftCaps.textContent = (i === 1) ? this.keySymbol : this.ruLang;\n      caseDown.className = 'caseDown';\n      caseUp.className = 'caseUp hidden';\n      shiftCaps.className = 'shiftCaps hidden';\n    }\n    return buttonCase;\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/Button.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _data_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/buttons */ \"./src/data/buttons.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/js/Button.js\");\n/* eslint-disable no-unused-expressions */\n\n\n\n\nconst cssClasses = {\n  PAGE_WRAPPER: 'page-wrapper',\n  TEXTAREA: 'textarea',\n  KEYBOARD: 'keyboard',\n};\nconst SPECIAL_KEYS = [\n  'Backspace',\n  'Delete',\n  'Space',\n  'Tab',\n  'Enter',\n  'CapsLock',\n  'ShiftLeft',\n  'ShiftRight',\n  'AltLeft',\n  'AltRight',\n  'ControlLeft',\n  'ControlRight',\n  'MetaLeft',\n];\n\nconst pressed = new Set();\n\nfunction createElement(tagName, className) {\n  const element = document.createElement(tagName);\n  element.className = className;\n  return element;\n}\n\nfunction createComponent() {\n  const component = createElement('div', cssClasses.PAGE_WRAPPER);\n  const textArea = createElement('textarea', cssClasses.TEXTAREA);\n  const keyboard = createElement('div', cssClasses.KEYBOARD);\n  const os = createElement('p', 'description');\n  const language = createElement('p', 'language');\n  component.appendChild(textArea);\n  component.appendChild(keyboard);\n  component.appendChild(os);\n  component.appendChild(language);\n  return component;\n}\n\nfunction appendDescription() {\n  document.querySelector('.description').textContent = 'Создано в Windows OS';\n  document.querySelector('.language').textContent = 'Для переключения языка использовать LeftShift + LeftAlt';\n}\n\ndocument.body.appendChild(createComponent());\n\nfunction generateButtons(keyLayout) {\n  const buttons = [];\n  keyLayout.forEach((key) => {\n    buttons.push(new _Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"](key));\n  });\n  return buttons;\n}\nfunction renderButtonToDom() {\n  const boardContainer = document.querySelector('.keyboard');\n  generateButtons(_data_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).forEach((key) => {\n    boardContainer.append(key.generateButton());\n  });\n}\n\nfunction switchLang() {\n  const lang = document.querySelectorAll('.lang');\n  lang.forEach((key) => {\n    key.classList.contains('hidden')\n      ? key.classList.remove('hidden')\n      : key.classList.add('hidden');\n  });\n  const language = (lang[0].classList.contains('hidden')) ? 'en' : 'ru';\n  localStorage.setItem('lang', language);\n}\n\nfunction switchCase() {\n  const lang = document.querySelectorAll('.lang');\n  lang.forEach((key) => {\n    if (key.querySelectorAll('span')[0].classList.contains('hidden')) {\n      key.querySelectorAll('span')[0].classList.add('hidden');\n    }\n    if (key.querySelectorAll('span')[1].classList.contains('hidden')) {\n      key.querySelectorAll('span')[1].classList.add('hidden');\n    }\n    if (key.querySelectorAll('span')[2].classList.contains('hidden')) {\n      key.querySelectorAll('span')[2].classList.add('hidden');\n    }\n  });\n}\n\nfunction addActive(e) {\n  document.querySelector(`.${e}`).classList.add('active');\n}\n\n// function removeActive(e) {\n//   document.querySelector(`.${e}`).classList.remove('active');\n// }\n\nfunction addKeyFunctions(e) {\n  const textarea = document.querySelector('.textarea');\n  const point = textarea.selectionStart;\n  const target = document.querySelector(`.${e}`);\n  if (SPECIAL_KEYS.includes(e)) {\n    switch (e) {\n      case 'Space':\n        textarea.value += ' ';\n        break;\n      case 'CapsLock':\n        break;\n      case 'Enter':\n        textarea.value += '\\n';\n        break;\n      case 'Backspace':\n        if (point > 0 && point <= textarea.value.length - 1) {\n          textarea.value = textarea.value.slice(0, point - 1)\n          + textarea.value.slice(point, textarea.value.length);\n          textarea.selectionStart = point - 1;\n          textarea.selectionEnd = point - 1;\n        } else {\n          textarea.value = textarea.value.slice(0, -1);\n          textarea.selectionStart = point - 1;\n          textarea.selectionEnd = point - 1;\n        }\n        break;\n      case 'Delete':\n        if (point >= 0 && point <= textarea.value.length - 1) {\n          textarea.value = textarea.value.slice(0, point)\n          + textarea.value.slice(point + 1, textarea.value.length);\n          textarea.selectionStart = point;\n          textarea.selectionEnd = point;\n        }\n        break;\n      case 'Tab':\n        textarea.value += '\\t';\n        break;\n      default:\n        break;\n    }\n    if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) switchLang();\n    if (pressed.has('ShiftLeft')) switchCase();\n  } else {\n    textarea.value = textarea.value.slice(0, point)\n    + target.outerText + textarea.value.slice(point, textarea.value.length);\n    textarea.selectionStart = point + target.outerText.length;\n    textarea.selectionEnd = point + target.outerText.length;\n  }\n  addActive(e);\n}\n\nfunction keyDownHandler() {\n  document.addEventListener('keydown', (event) => {\n    event.preventDefault();\n    pressed.add(event.code);\n    addKeyFunctions(event.code);\n  });\n}\n\nfunction keyUpHandler() {\n  document.addEventListener('keyup', (event) => {\n    event.preventDefault();\n    const target = document.querySelector(`.${event.code}`);\n    target.classList.remove('active');\n    pressed.delete(event.code);\n  });\n}\n\nfunction mouseDownHandler() {\n  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {\n    event.preventDefault();\n    if (event.target.tagName === 'SPAN') {\n      const elem = event.target.closest('div').classList[1];\n      addKeyFunctions(elem);\n    }\n  });\n}\n\nfunction mouseUpHandler() {\n  document.querySelector('.keyboard').addEventListener('mouseup', (event) => {\n    event.target.classList.remove('active');\n  });\n}\n\nwindow.addEventListener('load', () => {\n  if (_data_buttons__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    renderButtonToDom();\n    appendDescription();\n    keyDownHandler();\n    keyUpHandler();\n    mouseDownHandler();\n    mouseUpHandler();\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/app.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;