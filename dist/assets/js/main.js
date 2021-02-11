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

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y["default"])(w, x), (0, b["default"])(w, x.once), w;
    },
        O = function O() {
      w = (0, h["default"])(), j();
    },
        M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p["default"].mobile() || "phone" === e && p["default"].phone() || "tablet" === e && p["default"].tablet() || "function" == typeof e && e() === !0;
    },
        _ = function _(e) {
      x = i(x, e), w = (0, h["default"])();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d["default"].isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u["default"])(function () {
        (0, b["default"])(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d["default"].ready("[data-aos]", O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = function u() {};

    t["default"] = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, _n) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t["default"] = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r["default"])(e.node, t.offset);
      }), e;
    };

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r["default"])(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t["default"] = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t["default"] = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t["default"] = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/assets/js/components/accordion.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/accordion.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion--expand').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__btn').html('<span><i class="fas fa-angle-double-down fa-xs"></i></span>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__body:visible').slideUp();

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().is(':visible')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().slideDown(200);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.c-accordion__btn').html('<span><i class="fas fa-angle-double-up fa-xs"></i></span>');
  }
});

/***/ }),

/***/ "./src/assets/js/components/aos.js":
/*!*****************************************!*\
  !*** ./src/assets/js/components/aos.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
// npm install aos --save
 // You can also pass an optional settings object
// below listed default settings

aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

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

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider-dots').slick({
  lazyLoad: 'progressive',
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 3000
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--arrows-inside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next-inside" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev-inside" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--arrows-outside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--overflow').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
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
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aos */ "./src/assets/js/components/aos.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion */ "./src/assets/js/components/accordion.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");






 // import webpackStream from 'webpack-stream'

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post__gallery').slick({
    'arrows': false,
    'adaptiveHeight': true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.most_recent_widget').slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === '_themename_most_recent_widget') {
        placement.container.find('.most_recent_widget').slick();
      }
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsIm8iLCJuIiwiaSIsImlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInIiLCJhIiwidSIsInMiLCJmIiwiZCIsImwiLCJiIiwidiIsInkiLCJnIiwiaCIsInciLCJrIiwieCIsIm9mZnNldCIsImRlbGF5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkaXNhYmxlIiwib25jZSIsInN0YXJ0RXZlbnQiLCJ0aHJvdHRsZURlbGF5IiwiZGVib3VuY2VEZWxheSIsImRpc2FibGVNdXRhdGlvbk9ic2VydmVyIiwiaiIsIk8iLCJNIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTIiwibW9iaWxlIiwicGhvbmUiLCJ0YWJsZXQiLCJfIiwiZG9jdW1lbnQiLCJhbGwiLCJ3aW5kb3ciLCJhdG9iIiwiaXNTdXBwb3J0ZWQiLCJjb25zb2xlIiwiaW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJpbmRleE9mIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWFkeSIsImluaXQiLCJyZWZyZXNoIiwicmVmcmVzaEhhcmQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUeXBlRXJyb3IiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIiwiY2FuY2VsIiwiZmx1c2giLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJzbGljZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJOYU4iLCJwYXJzZUludCIsInNlbGYiLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiTWF0aCIsIm1heCIsIm1pbiIsIkRhdGUiLCJub3ciLCJkYXRhc2V0IiwiYW9zIiwiY2hpbGRyZW4iLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIk1vek11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlbW92ZWROb2RlcyIsIkFycmF5IiwiYWRkZWROb2RlcyIsImNvbmNhdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInN1YnN0ciIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImFuY2hvciIsImFuY2hvclBsYWNlbWVudCIsImlzTmFOIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcCIsIm9mZnNldEhlaWdodCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0YWdOYW1lIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIm9mZnNldFBhcmVudCIsImxlZnQiLCJtYXAiLCJmYWN0b3J5IiwiJCIsIlNsaWNrIiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsInRleHQiLCJkb3RzIiwiZG90c0NsYXNzIiwiZHJhZ2dhYmxlIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJsYXp5TG9hZCIsIm1vYmlsZUZpcnN0IiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkRvdHNIb3ZlciIsInJlc3BvbmRUbyIsInJlc3BvbnNpdmUiLCJyb3dzIiwicnRsIiwic2xpZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJhbmltU3RhcnQiLCJzdGVwIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwidW5zbGljayIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib3V0ZXJXaWR0aCIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsInB1c2giLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImFicyIsImdvVG8iLCJzbGlja0dvVG8iLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvblByb3BzIiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInNxcnQiLCJwb3ciLCJ1bmZpbHRlclNsaWRlcyIsInNsaWNrVW5maWx0ZXIiLCJmcm9tQnJlYWtwb2ludCIsImZuIiwiYXJncyIsInJldCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiaHRtbCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJBT1MiLCJpbml0Q2xhc3NOYW1lIiwiYW5pbWF0ZWRDbGFzc05hbWUiLCJ1c2VDbGFzc05hbWVzIiwibWlycm9yIiwiaXNPcGVuIiwiY2xpY2siLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyw0Q0FBaUJDLE9BQWpCLE1BQTBCLDBDQUFpQkMsTUFBakIsRUFBMUIsR0FBa0RBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFlRCxDQUFDLEVBQWxFLEdBQXFFLFFBQXNDRyxpQ0FBTyxFQUFELG9DQUFJSCxDQUFKO0FBQUE7QUFBQTtBQUFBLG9HQUE1QyxHQUFtRCxTQUF4SDtBQUEySyxDQUF6TCxDQUEwTCxJQUExTCxFQUErTCxZQUFVO0FBQUMsU0FB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QUFNO0FBQ3RCNkUsK0NBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0ssS0FBdEIsQ0FBNEI7QUFDMUIsY0FBVSxLQURnQjtBQUUxQixzQkFBa0I7QUFGUSxHQUE1QjtBQUtBaEssK0NBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCZ0ssS0FBekI7O0FBQ0EsTUFBSTBRLEVBQUUsQ0FBQ0MsU0FBSCxJQUFnQkQsRUFBRSxDQUFDQyxTQUFILENBQWFDLGdCQUFqQyxFQUFtRDtBQUNqREYsTUFBRSxDQUFDQyxTQUFILENBQWFDLGdCQUFiLENBQThCQyxJQUE5QixDQUFtQywwQkFBbkMsRUFBK0QsVUFBQ0MsU0FBRCxFQUFlO0FBQzVFLFVBQUlBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsYUFBbEIsSUFBbUNGLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsYUFBbEIsQ0FBZ0NDLE1BQWhDLEtBQTJDLCtCQUFsRixFQUFtSDtBQUNqSEgsaUJBQVMsQ0FBQ0ksU0FBVixDQUFvQnRULElBQXBCLENBQXlCLHFCQUF6QixFQUFnRG9DLEtBQWhEO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7QUFDRixDQWRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQU9TPXQoKTplLkFPUz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIGk9bltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJkaXN0L1wiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0scj1uKDEpLGE9KG8ociksbig2KSksdT1vKGEpLGM9big3KSxzPW8oYyksZj1uKDgpLGQ9byhmKSxsPW4oOSkscD1vKGwpLG09bigxMCksYj1vKG0pLHY9bigxMSkseT1vKHYpLGc9bigxNCksaD1vKGcpLHc9W10saz0hMSx4PXtvZmZzZXQ6MTIwLGRlbGF5OjAsZWFzaW5nOlwiZWFzZVwiLGR1cmF0aW9uOjQwMCxkaXNhYmxlOiExLG9uY2U6ITEsc3RhcnRFdmVudDpcIkRPTUNvbnRlbnRMb2FkZWRcIix0aHJvdHRsZURlbGF5Ojk5LGRlYm91bmNlRGVsYXk6NTAsZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6ITF9LGo9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO2lmKGUmJihrPSEwKSxrKXJldHVybiB3PSgwLHkuZGVmYXVsdCkodyx4KSwoMCxiLmRlZmF1bHQpKHcseC5vbmNlKSx3fSxPPWZ1bmN0aW9uKCl7dz0oMCxoLmRlZmF1bHQpKCksaigpfSxNPWZ1bmN0aW9uKCl7dy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKX0pfSxTPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ITB8fFwibW9iaWxlXCI9PT1lJiZwLmRlZmF1bHQubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJnAuZGVmYXVsdC5waG9uZSgpfHxcInRhYmxldFwiPT09ZSYmcC5kZWZhdWx0LnRhYmxldCgpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCk9PT0hMH0sXz1mdW5jdGlvbihlKXt4PWkoeCxlKSx3PSgwLGguZGVmYXVsdCkoKTt2YXIgdD1kb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYjtyZXR1cm4gUyh4LmRpc2FibGUpfHx0P00oKTooeC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LmlzU3VwcG9ydGVkKCl8fChjb25zb2xlLmluZm8oJ1xcbiAgICAgIGFvczogTXV0YXRpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcixcXG4gICAgICBjb2RlIG11dGF0aW9ucyBvYnNlcnZpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXFxuICAgICAgWW91IG1heSBoYXZlIHRvIGNhbGwgXCJyZWZyZXNoSGFyZCgpXCIgYnkgeW91cnNlbGYuXFxuICAgICcpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI9ITApLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiLHguZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLHguZHVyYXRpb24pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIseC5kZWxheSksXCJET01Db250ZW50TG9hZGVkXCI9PT14LnN0YXJ0RXZlbnQmJltcImNvbXBsZXRlXCIsXCJpbnRlcmFjdGl2ZVwiXS5pbmRleE9mKGRvY3VtZW50LnJlYWR5U3RhdGUpPi0xP2ooITApOlwibG9hZFwiPT09eC5zdGFydEV2ZW50P3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoMCx1LmRlZmF1bHQpKGZ1bmN0aW9uKCl7KDAsYi5kZWZhdWx0KSh3LHgub25jZSl9LHgudGhyb3R0bGVEZWxheSkpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5yZWFkeShcIltkYXRhLWFvc11cIixPKSx3KX07ZS5leHBvcnRzPXtpbml0Ol8scmVmcmVzaDpqLHJlZnJlc2hIYXJkOk99fSxmdW5jdGlvbihlLHQpe30sLCwsLGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIG8odCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsaz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGs9ZSxoPXNldFRpbWVvdXQoZix0KSxNP28oZSk6Z31mdW5jdGlvbiBhKGUpe3ZhciBuPWUtdyxvPWUtayxpPXQtbjtyZXR1cm4gUz9qKGkseS1vKTppfWZ1bmN0aW9uIGMoZSl7dmFyIG49ZS13LG89ZS1rO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPU8oKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsYShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/byhlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLGs9MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKE8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPU8oKSxuPWMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLG8odyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsaz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gdD11KHQpfHwwLGkobikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz94KHUobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUsdCxvKXt2YXIgcj0hMCxhPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gaShvKSYmKHI9XCJsZWFkaW5nXCJpbiBvPyEhby5sZWFkaW5nOnIsYT1cInRyYWlsaW5nXCJpbiBvPyEhby50cmFpbGluZzphKSxuKGUsdCx7bGVhZGluZzpyLG1heFdhaXQ6dCx0cmFpbGluZzphfSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl9ZnVuY3Rpb24gYShlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKXx8cihlKSYmay5jYWxsKGUpPT1kfWZ1bmN0aW9uIHUoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gZjtpZihpKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWkodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UobCxcIlwiKTt2YXIgbj1tLnRlc3QoZSk7cmV0dXJuIG58fGIudGVzdChlKT92KGUuc2xpY2UoMiksbj8yOjgpOnAudGVzdChlKT9mOitlfXZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsZj1OYU4sZD1cIltvYmplY3QgU3ltYm9sXVwiLGw9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxtPS9eMGJbMDFdKyQvaSxiPS9eMG9bMC03XSskL2ksdj1wYXJzZUludCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCxnPVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOmMoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixoPXl8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PU9iamVjdC5wcm90b3R5cGUsaz13LnRvU3RyaW5nLHg9TWF0aC5tYXgsaj1NYXRoLm1pbixPPWZ1bmN0aW9uKCl7cmV0dXJuIGguRGF0ZS5ub3coKX07ZS5leHBvcnRzPW99KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsTz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIE89ZSxoPXNldFRpbWVvdXQoZix0KSxNP2koZSk6Z31mdW5jdGlvbiB1KGUpe3ZhciBuPWUtdyxvPWUtTyxpPXQtbjtyZXR1cm4gUz94KGkseS1vKTppfWZ1bmN0aW9uIHMoZSl7dmFyIG49ZS13LG89ZS1PO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPWooKTtyZXR1cm4gcyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsdShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/aShlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLE89MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKGooKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPWooKSxuPXMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLGkodyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsTz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihjKTtyZXR1cm4gdD1hKHQpfHwwLG8obikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz9rKGEobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKX1mdW5jdGlvbiByKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfHxpKGUpJiZ3LmNhbGwoZSk9PWZ9ZnVuY3Rpb24gYShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihyKGUpKXJldHVybiBzO2lmKG8oZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9byh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciBuPXAudGVzdChlKTtyZXR1cm4gbnx8bS50ZXN0KGUpP2IoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3M6K2V9dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixzPU5hTixmPVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHA9L14wYlswMV0rJC9pLG09L14wb1swLTddKyQvaSxiPXBhcnNlSW50LHY9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6dSh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6dShzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGc9dnx8eXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGg9T2JqZWN0LnByb3RvdHlwZSx3PWgudG9TdHJpbmcsaz1NYXRoLm1heCx4PU1hdGgubWluLGo9ZnVuY3Rpb24oKXtyZXR1cm4gZy5EYXRlLm5vdygpfTtlLmV4cG9ydHM9bn0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PXZvaWQgMCxvPXZvaWQgMCxpPXZvaWQgMDtmb3IodD0wO3Q8ZS5sZW5ndGg7dCs9MSl7aWYobz1lW3RdLG8uZGF0YXNldCYmby5kYXRhc2V0LmFvcylyZXR1cm4hMDtpZihpPW8uY2hpbGRyZW4mJm4oby5jaGlsZHJlbikpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gbygpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfWZ1bmN0aW9uIGkoKXtyZXR1cm4hIW8oKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49d2luZG93LmRvY3VtZW50LGk9bygpLHI9bmV3IGkoYSk7dT10LHIub2JzZXJ2ZShuLmRvY3VtZW50RWxlbWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAscmVtb3ZlZE5vZGVzOiEwfSl9ZnVuY3Rpb24gYShlKXtlJiZlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5hZGRlZE5vZGVzKSxvPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucmVtb3ZlZE5vZGVzKSxpPXQuY29uY2F0KG8pO2lmKG4oaSkpcmV0dXJuIHUoKX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciB1PWZ1bmN0aW9uKCl7fTt0LmRlZmF1bHQ9e2lzU3VwcG9ydGVkOmkscmVhZHk6cn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbygpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmF8fFwiXCJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxyPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxhPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLGM9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSl9cmV0dXJuIGkoZSxbe2tleTpcInBob25lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghci50ZXN0KGUpJiYhYS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJtb2JpbGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCF1LnRlc3QoZSkmJiFjLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcInRhYmxldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9iaWxlKCkmJiF0aGlzLnBob25lKCl9fV0pLGV9KCk7dC5kZWZhdWx0PW5ldyBzfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1lLm5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb25jZVwiKTt0PmUucG9zaXRpb24/ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtYW5pbWF0ZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbyYmKFwiZmFsc2VcIj09PW98fCFuJiZcInRydWVcIiE9PW8pJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFvcy1hbmltYXRlXCIpfSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LmlubmVySGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlLHIpe24oZSxpK28sdCl9KX07dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEyKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxuKXtlLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1pbml0XCIpLGUucG9zaXRpb249KDAsci5kZWZhdWx0KShlLm5vZGUsdC5vZmZzZXQpfSksZX07dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEzKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3ZhciBuPTAsbz0wLGk9d2luZG93LmlubmVySGVpZ2h0LGE9e29mZnNldDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9mZnNldFwiKSxhbmNob3I6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3JcIiksYW5jaG9yUGxhY2VtZW50OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudFwiKX07c3dpdGNoKGEub2Zmc2V0JiYhaXNOYU4oYS5vZmZzZXQpJiYobz1wYXJzZUludChhLm9mZnNldCkpLGEuYW5jaG9yJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcilbMF0pLG49KDAsci5kZWZhdWx0KShlKS50b3AsYS5hbmNob3JQbGFjZW1lbnQpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOm4rPWkvMjticmVhaztjYXNlXCJib3R0b20tY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcImNlbnRlci1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJ0b3AtdG9wXCI6bis9aTticmVhaztjYXNlXCJib3R0b20tdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQraTticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQvMitpfXJldHVybiBhLmFuY2hvclBsYWNlbWVudHx8YS5vZmZzZXR8fGlzTmFOKHQpfHwobz10KSxuK299O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZT1lfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW9zXVwiKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZSxmdW5jdGlvbihlKXtyZXR1cm57bm9kZTplfX0pfTt0LmRlZmF1bHQ9bn1dKX0pOyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtYWNjb3JkaW9uLS1leHBhbmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWRvd24gZmEteHNcIj48L2k+PC9zcGFuPicpXG4gICQoJy5jLWFjY29yZGlvbl9fYm9keTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gIGlmICghJCh0aGlzKS5uZXh0KCkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oMjAwKVxuICAgICQodGhpcykuZmluZCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtdXAgZmEteHNcIj48L2k+PC9zcGFuPicpXG4gIH1cbn0pXG4iLCIvLyBucG0gaW5zdGFsbCBhb3MgLS1zYXZlXG5pbXBvcnQgQU9TIGZyb20gJ2FvcydcblxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4vLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuQU9TLmluaXQoe1xuICAvLyBHbG9iYWwgc2V0dGluZ3M6XG4gIGRpc2FibGU6IGZhbHNlLCAvLyBhY2NlcHRzIGZvbGxvd2luZyB2YWx1ZXM6ICdwaG9uZScsICd0YWJsZXQnLCAnbW9iaWxlJywgYm9vbGVhbiwgZXhwcmVzc2lvbiBvciBmdW5jdGlvblxuICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxuICBpbml0Q2xhc3NOYW1lOiAnYW9zLWluaXQnLCAvLyBjbGFzcyBhcHBsaWVkIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIGFuaW1hdGVkQ2xhc3NOYW1lOiAnYW9zLWFuaW1hdGUnLCAvLyBjbGFzcyBhcHBsaWVkIG9uIGFuaW1hdGlvblxuICB1c2VDbGFzc05hbWVzOiBmYWxzZSwgLy8gaWYgdHJ1ZSwgd2lsbCBhZGQgY29udGVudCBvZiBgZGF0YS1hb3NgIGFzIGNsYXNzZXMgb24gc2Nyb2xsXG4gIGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiBmYWxzZSwgLy8gZGlzYWJsZXMgYXV0b21hdGljIG11dGF0aW9ucycgZGV0ZWN0aW9ucyAoYWR2YW5jZWQpXG4gIGRlYm91bmNlRGVsYXk6IDUwLCAvLyB0aGUgZGVsYXkgb24gZGVib3VuY2UgdXNlZCB3aGlsZSByZXNpemluZyB3aW5kb3cgKGFkdmFuY2VkKVxuICB0aHJvdHRsZURlbGF5OiA5OSwgLy8gdGhlIGRlbGF5IG9uIHRocm90dGxlIHVzZWQgd2hpbGUgc2Nyb2xsaW5nIHRoZSBwYWdlIChhZHZhbmNlZClcblxuICAvLyBTZXR0aW5ncyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcbiAgb2Zmc2V0OiAxMjAsIC8vIG9mZnNldCAoaW4gcHgpIGZyb20gdGhlIG9yaWdpbmFsIHRyaWdnZXIgcG9pbnRcbiAgZGVsYXk6IDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZHVyYXRpb246IDQwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBlYXNpbmc6ICdlYXNlJywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXG4gIG9uY2U6IGZhbHNlLCAvLyB3aGV0aGVyIGFuaW1hdGlvbiBzaG91bGQgaGFwcGVuIG9ubHkgb25jZSAtIHdoaWxlIHNjcm9sbGluZyBkb3duXG4gIG1pcnJvcjogZmFsc2UsIC8vIHdoZXRoZXIgZWxlbWVudHMgc2hvdWxkIGFuaW1hdGUgb3V0IHdoaWxlIHNjcm9sbGluZyBwYXN0IHRoZW1cbiAgYW5jaG9yUGxhY2VtZW50OiAndG9wLWJvdHRvbScgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cblxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBpc09wZW4gPSAwXG4gICQoJy5vcGVuYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc09wZW4gPT09IDApIHtcbiAgICAgIG9wZW5OYXYoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU5hdigpXG4gICAgfVxuICB9KVxuICAkKCcuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VOYXYoKVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9wZW5OYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaXNPcGVuID0gMVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIGlzT3BlbiA9IDBcbiAgfVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJylcbiAgY29uc29sZS5sb2coJ21vdXNlIGVudGVyJylcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJylcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKVxuICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpXG4gIGlmIChtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICB9XG59KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5cbiQoJy5zbGlkZXItZG90cycpLnNsaWNrKHtcbiAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gIGluZmluaXRlOiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMDBcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLWluc2lkZScpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHQtaW5zaWRlXCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLW91dHNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+J1xufSlcblxuJCgnLmMtc2xpZGVyLS1vdmVyZmxvdycpLnNsaWNrKHtcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICBzbGlkZXNUb1Nob3c6IDMsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBhcnJvd3M6IGZhbHNlLFxuICBkb3RzOiB0cnVlLFxuICByZXNwb25zaXZlOiBbXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9oYW1idXJnZXItbmF2J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcbmltcG9ydCAnLi9jb21wb25lbnRzL2FvcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY29yZGlvbidcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcidcbi8vIGltcG9ydCB3ZWJwYWNrU3RyZWFtIGZyb20gJ3dlYnBhY2stc3RyZWFtJ1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJy5jLXBvc3RfX2dhbGxlcnknKS5zbGljayh7XG4gICAgJ2Fycm93cyc6IGZhbHNlLFxuICAgICdhZGFwdGl2ZUhlaWdodCc6IHRydWVcbiAgfSlcblxuICAkKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKVxuICBpZiAod3AuY3VzdG9taXplICYmIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoKSB7XG4gICAgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2guYmluZCgncGFydGlhbC1jb250ZW50LXJlbmRlcmVkJywgKHBsYWNlbWVudCkgPT4ge1xuICAgICAgaWYgKHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMgJiYgcGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cy5pZEJhc2UgPT09ICdfdGhlbWVuYW1lX21vc3RfcmVjZW50X3dpZGdldCcpIHtcbiAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9