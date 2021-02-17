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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/components/image-grid-text.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/components/image-grid-text.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // Swap text for button on Our Food cards

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay--main').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main-btn').removeClass('over-text-block');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay--dim-sum').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-dim-sum').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-dim-sum-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-dim-sum').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-dim-sum-btn').removeClass('over-text-block');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay--thai').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-thai').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-thai-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-thai').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-thai-btn').removeClass('over-text-block');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay--appetisers').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-appetisers').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-appetisers-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-appetisers').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-appetisers-btn').removeClass('over-text-block');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay--noodles').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-noodles').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-noodles-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-noodles').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-noodles-btn').removeClass('over-text-block');
});

/***/ }),

/***/ "./src/assets/js/components/navigation/hamburger-nav.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/components/navigation/hamburger-nav.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var isOpen = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.openbtn').click(function () {
    if (isOpen === 0) {
      openNav();
    } else {
      closeNav();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.closebtn').click(function () {
    closeNav();
  });

  function openNav() {
    document.getElementById('myNav').style.width = '100%';
    isOpen = 1;
  }

  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
    isOpen = 0;
  }
});

/***/ }),

/***/ "./src/assets/js/components/navigation/navigation.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/components/navigation/navigation.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
  console.log('mouse enter');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_hamburger_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/hamburger-nav */ "./src/assets/js/components/navigation/hamburger-nav.js");
/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation */ "./src/assets/js/components/navigation/navigation.js");
/* harmony import */ var _components_image_grid_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image-grid-text */ "./src/assets/js/components/image-grid-text.js");


 // import 'slick-carousel'
// import './components/aos'
// import './components/accordion'
// import './components/slider'

 // Disabled form submit button for CF7

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-submit').prop('disabled', true);
});

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulbrighton/Sites/taste-of-china/wp-content/themes/yp-digital-fw/src/assets/js/main.js */"./src/assets/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2ltYWdlLWdyaWQtdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9oYW1idXJnZXItbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJob3ZlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc09wZW4iLCJjbGljayIsIm9wZW5OYXYiLCJjbG9zZU5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIndpZHRoIiwib24iLCJlIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwicGFyZW50IiwibWVudV9pdGVtIiwiaGFzQ2xhc3MiLCJhZGQiLCJmaW5kIiwiYXR0ciIsInNpYmxpbmdzIiwidHJpZ2dlciIsImxlbmd0aCIsInJlYWR5IiwicHJvcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQUEsNkNBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxLQUE3QixDQUFtQyxZQUFZO0FBQzdDRCwrQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsUUFBaEIsQ0FBeUIsZ0JBQXpCO0FBQ0FGLCtDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsUUFBcEIsQ0FBNkIsaUJBQTdCO0FBQ0QsQ0FIRCxFQUdHLFlBQVk7QUFDYkYsK0NBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JHLFdBQWhCLENBQTRCLGdCQUE1QjtBQUNBSCwrQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JHLFdBQXBCLENBQWdDLGlCQUFoQztBQUNELENBTkQ7QUFRQUgsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxLQUFoQyxDQUFzQyxZQUFZO0FBQ2hERCwrQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsUUFBbkIsQ0FBNEIsZ0JBQTVCO0FBQ0FGLCtDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkUsUUFBdkIsQ0FBZ0MsaUJBQWhDO0FBQ0QsQ0FIRCxFQUdHLFlBQVk7QUFDYkYsK0NBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJHLFdBQW5CLENBQStCLGdCQUEvQjtBQUNBSCwrQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJHLFdBQXZCLENBQW1DLGlCQUFuQztBQUNELENBTkQ7QUFRQUgsNkNBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxLQUE3QixDQUFtQyxZQUFZO0FBQzdDRCwrQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkUsUUFBaEIsQ0FBeUIsZ0JBQXpCO0FBQ0FGLCtDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsUUFBcEIsQ0FBNkIsaUJBQTdCO0FBQ0QsQ0FIRCxFQUdHLFlBQVk7QUFDYkYsK0NBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JHLFdBQWhCLENBQTRCLGdCQUE1QjtBQUNBSCwrQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JHLFdBQXBCLENBQWdDLGlCQUFoQztBQUNELENBTkQ7QUFRQUgsNkNBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxLQUFuQyxDQUF5QyxZQUFZO0FBQ25ERCwrQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLFFBQXRCLENBQStCLGdCQUEvQjtBQUNBRiwrQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJFLFFBQTFCLENBQW1DLGlCQUFuQztBQUNELENBSEQsRUFHRyxZQUFZO0FBQ2JGLCtDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsV0FBdEIsQ0FBa0MsZ0JBQWxDO0FBQ0FILCtDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkcsV0FBMUIsQ0FBc0MsaUJBQXRDO0FBQ0QsQ0FORDtBQVFBSCw2Q0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEtBQWhDLENBQXNDLFlBQVk7QUFDaERELCtDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CRSxRQUFuQixDQUE0QixnQkFBNUI7QUFDQUYsK0NBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRSxRQUF2QixDQUFnQyxpQkFBaEM7QUFDRCxDQUhELEVBR0csWUFBWTtBQUNiRiwrQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsV0FBbkIsQ0FBK0IsZ0JBQS9CO0FBQ0FILCtDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsV0FBdkIsQ0FBbUMsaUJBQW5DO0FBQ0QsQ0FORCxFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQUgsNkNBQUMsQ0FBQyxZQUFZO0FBQ1osTUFBSUksTUFBTSxHQUFHLENBQWI7QUFDQUosK0NBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY0ssS0FBZCxDQUFvQixZQUFZO0FBQzlCLFFBQUlELE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCRSxhQUFPO0FBQ1IsS0FGRCxNQUVPO0FBQ0xDLGNBQVE7QUFDVDtBQUNGLEdBTkQ7QUFPQVAsK0NBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUssS0FBZixDQUFxQixZQUFZO0FBQy9CRSxZQUFRO0FBQ1QsR0FGRDs7QUFJQSxXQUFTRCxPQUFULEdBQW9CO0FBQ2xCRSxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLEtBQWpDLENBQXVDQyxLQUF2QyxHQUErQyxNQUEvQztBQUNBUCxVQUFNLEdBQUcsQ0FBVDtBQUNEOztBQUVELFdBQVNHLFFBQVQsR0FBcUI7QUFDbkJDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsS0FBakMsQ0FBdUNDLEtBQXZDLEdBQStDLElBQS9DO0FBQ0FQLFVBQU0sR0FBRyxDQUFUO0FBQ0Q7QUFDRixDQXRCQSxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUFKLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CWSxFQUFuQixDQUFzQixZQUF0QixFQUFvQyx5QkFBcEMsRUFBK0QsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BFYiwrQ0FBQyxDQUFDYSxDQUFDLENBQUNDLGFBQUgsQ0FBRCxDQUFtQlosUUFBbkIsQ0FBNEIsTUFBNUI7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNELENBSEQsRUFHR0osRUFISCxDQUdNLFlBSE4sRUFHb0IseUJBSHBCLEVBRytDLFVBQUNDLENBQUQsRUFBTztBQUNwRGIsK0NBQUMsQ0FBQ2EsQ0FBQyxDQUFDQyxhQUFILENBQUQsQ0FBbUJYLFdBQW5CLENBQStCLE1BQS9CO0FBQ0QsQ0FMRDtBQU9BSCw2Q0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlksRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0Isb0JBQS9CLEVBQXFELFVBQUNDLENBQUQsRUFBTztBQUMxREEsR0FBQyxDQUFDSSxjQUFGO0FBQ0FKLEdBQUMsQ0FBQ0ssZUFBRjtBQUNBLE1BQUlDLFdBQVcsR0FBR25CLDZDQUFDLENBQUNhLENBQUMsQ0FBQ0MsYUFBSCxDQUFuQjtBQUNBLE1BQUlNLFNBQVMsR0FBR0QsV0FBVyxDQUFDRSxNQUFaLEVBQWhCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHRixTQUFTLENBQUNDLE1BQVYsRUFBaEI7O0FBQ0EsTUFBSUMsU0FBUyxDQUFDQyxRQUFWLENBQW1CLE1BQW5CLENBQUosRUFBZ0M7QUFDOUJELGFBQVMsQ0FBQ0UsR0FBVixDQUFjRixTQUFTLENBQUNHLElBQVYsQ0FBZSxpQkFBZixDQUFkLEVBQWlEdEIsV0FBakQsQ0FBNkQsTUFBN0Q7QUFDQWlCLGFBQVMsQ0FBQ0ksR0FBVixDQUFjRixTQUFTLENBQUNHLElBQVYsQ0FBZSxHQUFmLENBQWQsRUFBbUNDLElBQW5DLENBQXdDLGVBQXhDLEVBQXlELE9BQXpEO0FBQ0FQLGVBQVcsQ0FBQ00sSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE9BQTFEO0FBQ0FQLGVBQVcsQ0FBQ00sSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0QsR0FMRCxNQUtPO0FBQ0xKLGFBQVMsQ0FBQ0ssUUFBVixDQUFtQixPQUFuQixFQUE0QkYsSUFBNUIsQ0FBaUMsaUJBQWpDLEVBQW9ERyxPQUFwRCxDQUE0RCxPQUE1RDtBQUNBTixhQUFTLENBQUNwQixRQUFWLENBQW1CLE1BQW5CO0FBQ0FrQixhQUFTLENBQUNNLElBQVYsQ0FBZSxlQUFmLEVBQWdDLE1BQWhDO0FBQ0FQLGVBQVcsQ0FBQ00sSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0FQLGVBQVcsQ0FBQ00sSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE9BQTFEO0FBQ0Q7QUFDRixDQWxCRDtBQW9CQTFCLDZDQUFDLENBQUNRLFFBQUQsQ0FBRCxDQUFZSCxLQUFaLENBQWtCLFVBQUNRLENBQUQsRUFBTztBQUN2QixNQUFJYiw2Q0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI2QixNQUF6QixFQUFpQztBQUMvQjdCLGlEQUFDLENBQUMsNENBQUQsQ0FBRCxDQUFnRDRCLE9BQWhELENBQXdELE9BQXhEO0FBQ0Q7QUFDRixDQUpELEU7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0NBR0E7O0FBQ0E1Qiw2Q0FBQyxDQUFDUSxRQUFELENBQUQsQ0FBWXNCLEtBQVosQ0FBa0IsWUFBTTtBQUN0QjlCLCtDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCK0IsSUFBbEIsQ0FBdUIsVUFBdkIsRUFBbUMsSUFBbkM7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLy8gU3dhcCB0ZXh0IGZvciBidXR0b24gb24gT3VyIEZvb2QgY2FyZHNcbiQoJy5vdXItZm9vZC1vdmVybGF5LS1tYWluJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAkKCcuZm9vZC1tYWluJykuYWRkQ2xhc3MoJ292ZXItdGV4dC1ub25lJylcbiAgJCgnLmZvb2QtbWFpbi1idG4nKS5hZGRDbGFzcygnb3Zlci10ZXh0LWJsb2NrJylcbn0sIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZvb2QtbWFpbicpLnJlbW92ZUNsYXNzKCdvdmVyLXRleHQtbm9uZScpXG4gICQoJy5mb29kLW1haW4tYnRuJykucmVtb3ZlQ2xhc3MoJ292ZXItdGV4dC1ibG9jaycpXG59KVxuXG4kKCcub3VyLWZvb2Qtb3ZlcmxheS0tZGltLXN1bScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZvb2QtZGltLXN1bScpLmFkZENsYXNzKCdvdmVyLXRleHQtbm9uZScpXG4gICQoJy5mb29kLWRpbS1zdW0tYnRuJykuYWRkQ2xhc3MoJ292ZXItdGV4dC1ibG9jaycpXG59LCBmdW5jdGlvbiAoKSB7XG4gICQoJy5mb29kLWRpbS1zdW0nKS5yZW1vdmVDbGFzcygnb3Zlci10ZXh0LW5vbmUnKVxuICAkKCcuZm9vZC1kaW0tc3VtLWJ0bicpLnJlbW92ZUNsYXNzKCdvdmVyLXRleHQtYmxvY2snKVxufSlcblxuJCgnLm91ci1mb29kLW92ZXJsYXktLXRoYWknKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICQoJy5mb29kLXRoYWknKS5hZGRDbGFzcygnb3Zlci10ZXh0LW5vbmUnKVxuICAkKCcuZm9vZC10aGFpLWJ0bicpLmFkZENsYXNzKCdvdmVyLXRleHQtYmxvY2snKVxufSwgZnVuY3Rpb24gKCkge1xuICAkKCcuZm9vZC10aGFpJykucmVtb3ZlQ2xhc3MoJ292ZXItdGV4dC1ub25lJylcbiAgJCgnLmZvb2QtdGhhaS1idG4nKS5yZW1vdmVDbGFzcygnb3Zlci10ZXh0LWJsb2NrJylcbn0pXG5cbiQoJy5vdXItZm9vZC1vdmVybGF5LS1hcHBldGlzZXJzJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAkKCcuZm9vZC1hcHBldGlzZXJzJykuYWRkQ2xhc3MoJ292ZXItdGV4dC1ub25lJylcbiAgJCgnLmZvb2QtYXBwZXRpc2Vycy1idG4nKS5hZGRDbGFzcygnb3Zlci10ZXh0LWJsb2NrJylcbn0sIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZvb2QtYXBwZXRpc2VycycpLnJlbW92ZUNsYXNzKCdvdmVyLXRleHQtbm9uZScpXG4gICQoJy5mb29kLWFwcGV0aXNlcnMtYnRuJykucmVtb3ZlQ2xhc3MoJ292ZXItdGV4dC1ibG9jaycpXG59KVxuXG4kKCcub3VyLWZvb2Qtb3ZlcmxheS0tbm9vZGxlcycpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZvb2Qtbm9vZGxlcycpLmFkZENsYXNzKCdvdmVyLXRleHQtbm9uZScpXG4gICQoJy5mb29kLW5vb2RsZXMtYnRuJykuYWRkQ2xhc3MoJ292ZXItdGV4dC1ibG9jaycpXG59LCBmdW5jdGlvbiAoKSB7XG4gICQoJy5mb29kLW5vb2RsZXMnKS5yZW1vdmVDbGFzcygnb3Zlci10ZXh0LW5vbmUnKVxuICAkKCcuZm9vZC1ub29kbGVzLWJ0bicpLnJlbW92ZUNsYXNzKCdvdmVyLXRleHQtYmxvY2snKVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBpc09wZW4gPSAwXG4gICQoJy5vcGVuYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc09wZW4gPT09IDApIHtcbiAgICAgIG9wZW5OYXYoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU5hdigpXG4gICAgfVxuICB9KVxuICAkKCcuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VOYXYoKVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9wZW5OYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaXNPcGVuID0gMVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIGlzT3BlbiA9IDBcbiAgfVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJylcbiAgY29uc29sZS5sb2coJ21vdXNlIGVudGVyJylcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJylcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKVxuICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpXG4gIGlmIChtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICB9XG59KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdidcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbidcbi8vIGltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9hb3MnXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9hY2NvcmRpb24nXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInXG5pbXBvcnQgJy4vY29tcG9uZW50cy9pbWFnZS1ncmlkLXRleHQnXG5cbi8vIERpc2FibGVkIGZvcm0gc3VibWl0IGJ1dHRvbiBmb3IgQ0Y3XG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJyNmb3JtLXN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSlcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9