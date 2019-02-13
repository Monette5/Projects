/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(16);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi settings\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_settings?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(2);\n__webpack_require__(6);\n__webpack_require__(8);\n__webpack_require__(10);\n__webpack_require__(12);\n\nvar Wix = __webpack_require__(14);\nvar $ = __webpack_require__(15);\n\nvar origCompId = Wix.Utils.getOrigCompId();\n\nfunction onUpdate(key, value) {\n  Wix.Settings.triggerSettingsUpdatedEvent({ key: key, value: value }, origCompId);\n}\n\nfunction attachListeners() {\n  $('[wix-ctrl]').each(function (index, element) {\n    var $element = $(element);\n    var ctrl = $element.getCtrl();\n    if ($.isFunction(ctrl.onChange)) {\n      ctrl.onChange(function (value) {\n        onUpdate($element.attr('wix-param'), value);\n      });\n    }\n  });\n}\n\n$(attachListeners);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/settings.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/settings.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(3);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./main.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./main.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/css/main.scss\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/main.scss?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(4)();\n// imports\n\n\n// module\nexports.push([module.id, \"/* colors */\\n/* sizes */\\n.main-tab {\\n  text-align: center; }\\n  .main-tab .app-logo {\\n    height: auto;\\n    width: 60px;\\n    margin: 20px auto 0;\\n    position: relative; }\\n  .main-tab .app-description {\\n    text-align: center;\\n    padding: 0 24px;\\n    line-height: 21px;\\n    font-size: 14px; }\\n  .main-tab .main-cta-btn {\\n    width: 180px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./src/settings/css/main.scss\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/main.scss?./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader/lib/css-base.js\n// module id = 4\n// module chunks = 0 1\n//# sourceURL=webpack:///./~/css-loader/lib/css-base.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\nvar stylesInDom = {},\r\n\tmemoize = function(fn) {\r\n\t\tvar memo;\r\n\t\treturn function () {\r\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\t\treturn memo;\r\n\t\t};\r\n\t},\r\n\tisOldIE = memoize(function() {\r\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\r\n\t}),\r\n\tgetHeadElement = memoize(function () {\r\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\r\n\t}),\r\n\tsingletonElement = null,\r\n\tsingletonCounter = 0,\r\n\tstyleElementsInsertedAtTop = [];\r\n\r\nmodule.exports = function(list, options) {\r\n\tif(false) {\r\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the bottom of <head>.\r\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\r\n\r\n\tvar styles = listToStyles(list);\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update(newList) {\r\n\t\tvar mayRemove = [];\r\n\t\tfor(var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\r\n\t\t\t\t\tdomStyle.parts[j]();\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n}\r\n\r\nfunction addStylesToDom(styles, options) {\r\n\tfor(var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles(list) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\tfor(var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\t\tif(!newStyles[id])\r\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse\r\n\t\t\tnewStyles[id].parts.push(part);\r\n\t}\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement(options, styleElement) {\r\n\tvar head = getHeadElement();\r\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\r\n\tif (options.insertAt === \"top\") {\r\n\t\tif(!lastStyleElementInsertedAtTop) {\r\n\t\t\thead.insertBefore(styleElement, head.firstChild);\r\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\thead.appendChild(styleElement);\r\n\t\t}\r\n\t\tstyleElementsInsertedAtTop.push(styleElement);\r\n\t} else if (options.insertAt === \"bottom\") {\r\n\t\thead.appendChild(styleElement);\r\n\t} else {\r\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n\tstyleElement.parentNode.removeChild(styleElement);\r\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\r\n\tif(idx >= 0) {\r\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement(options) {\r\n\tvar styleElement = document.createElement(\"style\");\r\n\tstyleElement.type = \"text/css\";\r\n\tinsertStyleElement(options, styleElement);\r\n\treturn styleElement;\r\n}\r\n\r\nfunction createLinkElement(options) {\r\n\tvar linkElement = document.createElement(\"link\");\r\n\tlinkElement.rel = \"stylesheet\";\r\n\tinsertStyleElement(options, linkElement);\r\n\treturn linkElement;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n\tvar styleElement, update, remove;\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\r\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\r\n\t} else if(obj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\") {\r\n\t\tstyleElement = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t\tif(styleElement.href)\r\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyleElement = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, styleElement);\r\n\t\tremove = function() {\r\n\t\t\tremoveStyleElement(styleElement);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle(newObj) {\r\n\t\tif(newObj) {\r\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\r\n\t\t\t\treturn;\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = styleElement.childNodes;\r\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyleElement.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag(styleElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyleElement.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(styleElement.styleSheet) {\r\n\t\tstyleElement.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(styleElement.firstChild) {\r\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\r\n\t\t}\r\n\t\tstyleElement.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink(linkElement, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\tif(sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = linkElement.href;\r\n\r\n\tlinkElement.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc)\r\n\t\tURL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/style-loader/addStyles.js\n// module id = 5\n// module chunks = 0 1\n//# sourceURL=webpack:///./~/style-loader/addStyles.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(7);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./fontFace.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./fontFace.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/css/fontFace.scss\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/fontFace.scss?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(9);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./animations.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./animations.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/css/animations.scss\n// module id = 8\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/animations.scss?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(4)();\n// imports\n\n\n// module\nexports.push([module.id, \".animations-tab .button-wrapper-center {\\n  margin: 11px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./src/settings/css/animations.scss\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/animations.scss?./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(11);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./settings.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./settings.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/css/settings.scss\n// module id = 10\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/settings.scss?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(4)();\n// imports\n\n\n// module\nexports.push([module.id, \"/* colors */\\n/* sizes */\\n.main-tab {\\n  text-align: center; }\\n  .main-tab .app-logo {\\n    height: auto;\\n    width: 60px;\\n    margin: 20px auto 0;\\n    position: relative; }\\n  .main-tab .app-description {\\n    text-align: center;\\n    padding: 0 24px;\\n    line-height: 21px;\\n    font-size: 14px; }\\n  .main-tab .main-cta-btn {\\n    width: 180px; }\\n\\n/* colors */\\n/* sizes */\\n.support-tab .developer-info {\\n  font-size: 14px;\\n  padding: 17px 24px; }\\n  .support-tab .developer-info li {\\n line-height: 28px;\\n    height: 28px;\\n    cursor: pointer; }\\n    .support-tab .developer-info li svg {\\n      position: relative;\\n      top: 4px;\\n      padding-right: 7px; }\\n\\n.support-tab .review-paragraph {\\n  text-align: center;\\n  padding: 0 24px;\\n  line-height: 20px;\\n  font-size: 14px; }\\n\\n.support-tab .rate-us-btn {\\n  width: 192px; }\\n\\n.animations-tab .button-wrapper-center {\\n  margin: 11px; }\\n\\nbody p {\\n  margin: 12px auto; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./src/settings/css/settings.scss\n// module id = 11\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/settings.scss?./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(13);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./support.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./support.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/settings/css/support.scss\n// module id = 12\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/support.scss?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(4)();\n// imports\n\n\n// module\nexports.push([module.id, \"/* colors */\\n/* sizes */\\n.support-tab .developer-info {\\n  font-size: 14px;\\n  padding: 17px 24px; }\\n  .support-tab .developer-info li {\\n    color: #3899ec;\\n    line-height: 28px;\\n    height: 28px;\\n    cursor: pointer; }\\n    .support-tab .developer-info li svg {\\n      position: relative;\\n      top: 4px;\\n      padding-right: 7px; }\\n\\n.support-tab .review-paragraph {\\n  text-align: center;\\n  padding: 0 24px;\\n  line-height: 20px;\\n  font-size: 14px; }\\n\\n.support-tab .rate-us-btn {\\n  width: 192px; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js!./src/settings/css/support.scss\n// module id = 13\n// module chunks = 0\n//# sourceURL=webpack:///./src/settings/css/support.scss?./~/css-loader!./~/sass-loader?functions=selector-parse&root=C:/Users/LMK(PC)/pete/rolloverfx/js");

/***/ },
/* 14 */
/***/ function(module, exports) {

	eval("module.exports = Wix;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"Wix\"\n// module id = 14\n// module chunks = 0 1\n//# sourceURL=webpack:///external_%22Wix%22?");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("module.exports = $;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"$\"\n// module id = 15\n// module chunks = 0 1\n//# sourceURL=webpack:///external_%22$%22?");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n/*globals window __webpack_hash__ */\r\nif(false) {\r\n\tvar lastData;\r\n\tvar upToDate = function upToDate() {\r\n\t\treturn lastData.indexOf(__webpack_hash__) >= 0;\r\n\t};\r\n\tvar check = function check() {\r\n\t\tmodule.hot.check(true, function(err, updatedModules) {\r\n\t\t\tif(err) {\r\n\t\t\t\tif(module.hot.status() in {\r\n\t\t\t\t\t\tabort: 1,\r\n\t\t\t\t\t\tfail: 1\r\n\t\t\t\t\t}) {\r\n\t\t\t\t\tconsole.warn(\"[HMR] Cannot apply update. Need to do a full reload!\");\r\n\t\t\t\t\tconsole.warn(\"[HMR] \" + err.stack || err.message);\r\n\t\t\t\t\twindow.location.reload();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tconsole.warn(\"[HMR] Update failed: \" + err.stack || err.message);\r\n\t\t\t\t}\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tif(!updatedModules) {\r\n\t\t\t\tconsole.warn(\"[HMR] Cannot find update. Need to do a full reload!\");\r\n\t\t\t\tconsole.warn(\"[HMR] (Probably because of restarting the webpack-dev-server)\");\r\n\t\t\t\twindow.location.reload();\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tif(!upToDate()) {\r\n\t\t\t\tcheck();\r\n\t\t\t}\r\n\r\n\t\t\trequire(\"./log-apply-result\")(updatedModules, updatedModules);\r\n\r\n\t\t\tif(upToDate()) {\r\n\t\t\t\tconsole.log(\"[HMR] App is up to date.\");\r\n\t\t\t}\r\n\r\n\t\t});\r\n\t};\r\n\tvar addEventListener = window.addEventListener ? function(eventName, listener) {\r\n\t\twindow.addEventListener(eventName, listener, false);\r\n\t} : function(eventName, listener) {\r\n\t\twindow.attachEvent(\"on\" + eventName, listener);\r\n\t};\r\n\taddEventListener(\"message\", function(event) {\r\n\t\tif(typeof event.data === \"string\" && event.data.indexOf(\"webpackHotUpdate\") === 0) {\r\n\t\t\tlastData = event.data;\r\n\t\t\tif(!upToDate() && module.hot.status() === \"idle\") {\r\n\t\t\t\tconsole.log(\"[HMR] Checking for updates on the server...\");\r\n\t\t\t\tcheck();\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\tconsole.log(\"[HMR] Waiting for update signal from WDS...\");\r\n} else {\r\n\tthrow new Error(\"[HMR] Hot Module Replacement is disabled.\");\r\n}\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// (webpack)/hot/dev-server.js\n// module id = 16\n// module chunks = 0\n//# sourceURL=webpack:///(webpack)/hot/dev-server.js?");

/***/ }
/******/ ]);
