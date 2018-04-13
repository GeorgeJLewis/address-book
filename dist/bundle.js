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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar storage = window.localStorage;\n\nvar renderContacts = function renderContacts() {\n  var contacts = JSON.parse(storage.getItem('contacts'));\n\n  var div = document.querySelector('.contact-list');\n\n  if (contacts) {\n    div.innerHTML = '';\n    var ul = document.createElement('ul');\n\n    contacts.forEach(function (contact) {\n      var li = document.createElement('li');\n\n      li.innerHTML = '\\n      <span>' + contact.name + '</span>\\n      <span>' + contact.email + '</span>\\n      <span>' + contact.phone + '</span>\\n      ';\n      ul.appendChild(li);\n    });\n\n    div.appendChild(ul);\n  } else {\n    div.innerHTML = '<p>You have no contacts in your address book</p>';\n  }\n};\n\nvar resetFormField = function resetFormField() {\n  var addContactForm = document.querySelector('.new-contact-form');\n\n  addContactForm.elements.name.value = '';\n  addContactForm.elements.email.value = '';\n  addContactForm.elements.phone.value = '';\n  addContactForm.elements.company.value = '';\n  addContactForm.elements.notes.value = '';\n  addContactForm.elements.twitter.value = '';\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  renderContacts();\n  var addContactForm = document.querySelector('.new-contact-form');\n\n  addContactForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    var _addContactForm$eleme = addContactForm.elements,\n        name = _addContactForm$eleme.name,\n        email = _addContactForm$eleme.email,\n        phone = _addContactForm$eleme.phone,\n        company = _addContactForm$eleme.company,\n        notes = _addContactForm$eleme.notes,\n        twitter = _addContactForm$eleme.twitter;\n\n\n    var contact = {\n      name: name.value,\n      email: email.value,\n      phone: phone.value,\n      company: company.value,\n      notes: notes.value,\n      twitter: twitter.value\n    };\n\n    console.log(contact);\n\n    var contacts = JSON.parse(storage.getItem('contacts')) || [];\n\n    contacts.push(contact);\n\n    storage.setItem('contacts', JSON.stringify(contact));\n    renderContacts();\n    resetFormField();\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });