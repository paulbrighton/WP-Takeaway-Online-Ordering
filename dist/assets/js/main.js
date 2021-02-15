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
}); // Disabled form submit button for CF7

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsIm8iLCJuIiwiaSIsImlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInIiLCJhIiwidSIsInMiLCJmIiwiZCIsImwiLCJiIiwidiIsInkiLCJnIiwiaCIsInciLCJrIiwieCIsIm9mZnNldCIsImRlbGF5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkaXNhYmxlIiwib25jZSIsInN0YXJ0RXZlbnQiLCJ0aHJvdHRsZURlbGF5IiwiZGVib3VuY2VEZWxheSIsImRpc2FibGVNdXRhdGlvbk9ic2VydmVyIiwiaiIsIk8iLCJNIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTIiwibW9iaWxlIiwicGhvbmUiLCJ0YWJsZXQiLCJfIiwiZG9jdW1lbnQiLCJhbGwiLCJ3aW5kb3ciLCJhdG9iIiwiaXNTdXBwb3J0ZWQiLCJjb25zb2xlIiwiaW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJpbmRleE9mIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWFkeSIsImluaXQiLCJyZWZyZXNoIiwicmVmcmVzaEhhcmQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUeXBlRXJyb3IiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIiwiY2FuY2VsIiwiZmx1c2giLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJzbGljZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJOYU4iLCJwYXJzZUludCIsInNlbGYiLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiTWF0aCIsIm1heCIsIm1pbiIsIkRhdGUiLCJub3ciLCJkYXRhc2V0IiwiYW9zIiwiY2hpbGRyZW4iLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIk1vek11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlbW92ZWROb2RlcyIsIkFycmF5IiwiYWRkZWROb2RlcyIsImNvbmNhdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInN1YnN0ciIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImFuY2hvciIsImFuY2hvclBsYWNlbWVudCIsImlzTmFOIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcCIsIm9mZnNldEhlaWdodCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0YWdOYW1lIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIm9mZnNldFBhcmVudCIsImxlZnQiLCJtYXAiLCJmYWN0b3J5IiwiJCIsIlNsaWNrIiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsInRleHQiLCJkb3RzIiwiZG90c0NsYXNzIiwiZHJhZ2dhYmxlIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJsYXp5TG9hZCIsIm1vYmlsZUZpcnN0IiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkRvdHNIb3ZlciIsInJlc3BvbmRUbyIsInJlc3BvbnNpdmUiLCJyb3dzIiwicnRsIiwic2xpZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJhbmltU3RhcnQiLCJzdGVwIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwidW5zbGljayIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib3V0ZXJXaWR0aCIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsInB1c2giLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImFicyIsImdvVG8iLCJzbGlja0dvVG8iLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvblByb3BzIiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInNxcnQiLCJwb3ciLCJ1bmZpbHRlclNsaWRlcyIsInNsaWNrVW5maWx0ZXIiLCJmcm9tQnJlYWtwb2ludCIsImZuIiwiYXJncyIsInJldCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiaHRtbCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJBT1MiLCJpbml0Q2xhc3NOYW1lIiwiYW5pbWF0ZWRDbGFzc05hbWUiLCJ1c2VDbGFzc05hbWVzIiwibWlycm9yIiwiaXNPcGVuIiwiY2xpY2siLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiLCJwcm9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsNENBQWlCQyxPQUFqQixNQUEwQiwwQ0FBaUJDLE1BQWpCLEVBQTFCLEdBQWtEQSxNQUFNLENBQUNELE9BQVAsR0FBZUQsQ0FBQyxFQUFsRSxHQUFxRSxRQUFzQ0csaUNBQU8sRUFBRCxvQ0FBSUgsQ0FBSjtBQUFBO0FBQUE7QUFBQSxvR0FBNUMsR0FBbUQsU0FBeEg7QUFBMkssQ0FBekwsQ0FBMEwsSUFBMUwsRUFBK0wsWUFBVTtB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Q0FBa0IsWUFBTTtBQUN0QjZFLCtDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmdLLEtBQXRCLENBQTRCO0FBQzFCLGNBQVUsS0FEZ0I7QUFFMUIsc0JBQWtCO0FBRlEsR0FBNUI7QUFLQWhLLCtDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmdLLEtBQXpCOztBQUNBLE1BQUkwUSxFQUFFLENBQUNDLFNBQUgsSUFBZ0JELEVBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxnQkFBakMsRUFBbUQ7QUFDakRGLE1BQUUsQ0FBQ0MsU0FBSCxDQUFhQyxnQkFBYixDQUE4QkMsSUFBOUIsQ0FBbUMsMEJBQW5DLEVBQStELFVBQUNDLFNBQUQsRUFBZTtBQUM1RSxVQUFJQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0JDLGFBQWxCLElBQW1DRixTQUFTLENBQUNDLE9BQVYsQ0FBa0JDLGFBQWxCLENBQWdDQyxNQUFoQyxLQUEyQywrQkFBbEYsRUFBbUg7QUFDakhILGlCQUFTLENBQUNJLFNBQVYsQ0FBb0J0VCxJQUFwQixDQUF5QixxQkFBekIsRUFBZ0RvQyxLQUFoRDtBQUNEO0FBQ0YsS0FKRDtBQUtEO0FBQ0YsQ0FkRCxFLENBZ0JBOztBQUNBaEssNkNBQUMsQ0FBQ3pGLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFlBQU07QUFDdEI2RSwrQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm1iLElBQWxCLENBQXVCLFVBQXZCLEVBQW1DLElBQW5DO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSx3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BT1M9dCgpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgaT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cImRpc3QvXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxyPW4oMSksYT0obyhyKSxuKDYpKSx1PW8oYSksYz1uKDcpLHM9byhjKSxmPW4oOCksZD1vKGYpLGw9big5KSxwPW8obCksbT1uKDEwKSxiPW8obSksdj1uKDExKSx5PW8odiksZz1uKDE0KSxoPW8oZyksdz1bXSxrPSExLHg9e29mZnNldDoxMjAsZGVsYXk6MCxlYXNpbmc6XCJlYXNlXCIsZHVyYXRpb246NDAwLGRpc2FibGU6ITEsb25jZTohMSxzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwiLHRocm90dGxlRGVsYXk6OTksZGVib3VuY2VEZWxheTo1MCxkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjohMX0saj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07aWYoZSYmKGs9ITApLGspcmV0dXJuIHc9KDAseS5kZWZhdWx0KSh3LHgpLCgwLGIuZGVmYXVsdCkodyx4Lm9uY2UpLHd9LE89ZnVuY3Rpb24oKXt3PSgwLGguZGVmYXVsdCkoKSxqKCl9LE09ZnVuY3Rpb24oKXt3LmZvckVhY2goZnVuY3Rpb24oZSx0KXtlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3NcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIpfSl9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT0hMHx8XCJtb2JpbGVcIj09PWUmJnAuZGVmYXVsdC5tb2JpbGUoKXx8XCJwaG9uZVwiPT09ZSYmcC5kZWZhdWx0LnBob25lKCl8fFwidGFibGV0XCI9PT1lJiZwLmRlZmF1bHQudGFibGV0KCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKT09PSEwfSxfPWZ1bmN0aW9uKGUpe3g9aSh4LGUpLHc9KDAsaC5kZWZhdWx0KSgpO3ZhciB0PWRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iO3JldHVybiBTKHguZGlzYWJsZSl8fHQ/TSgpOih4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKXx8KGNvbnNvbGUuaW5mbygnXFxuICAgICAgYW9zOiBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLFxcbiAgICAgIGNvZGUgbXV0YXRpb25zIG9ic2VydmluZyBoYXMgYmVlbiBkaXNhYmxlZC5cXG4gICAgICBZb3UgbWF5IGhhdmUgdG8gY2FsbCBcInJlZnJlc2hIYXJkKClcIiBieSB5b3Vyc2VsZi5cXG4gICAgJykseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcj0hMCksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIseC5lYXNpbmcpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIseC5kdXJhdGlvbiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIix4LmRlbGF5KSxcIkRPTUNvbnRlbnRMb2FkZWRcIj09PXguc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTE/aighMCk6XCJsb2FkXCI9PT14LnN0YXJ0RXZlbnQ/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgwLHUuZGVmYXVsdCkoZnVuY3Rpb24oKXsoMCxiLmRlZmF1bHQpKHcseC5vbmNlKX0seC50aHJvdHRsZURlbGF5KSkseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LnJlYWR5KFwiW2RhdGEtYW9zXVwiLE8pLHcpfTtlLmV4cG9ydHM9e2luaXQ6XyxyZWZyZXNoOmoscmVmcmVzaEhhcmQ6T319LGZ1bmN0aW9uKGUsdCl7fSwsLCwsZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gbyh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxrPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gaz1lLGg9c2V0VGltZW91dChmLHQpLE0/byhlKTpnfWZ1bmN0aW9uIGEoZSl7dmFyIG49ZS13LG89ZS1rLGk9dC1uO3JldHVybiBTP2ooaSx5LW8pOml9ZnVuY3Rpb24gYyhlKXt2YXIgbj1lLXcsbz1lLWs7cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9TygpO3JldHVybiBjKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZixhKGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9vKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksaz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoTygpKX1mdW5jdGlvbiBtKCl7dmFyIGU9TygpLG49YyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksbyh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxrPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiB0PXUodCl8fDAsaShuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP3godShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSx0LG8pe3ZhciByPSEwLGE9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiBpKG8pJiYocj1cImxlYWRpbmdcImluIG8/ISFvLmxlYWRpbmc6cixhPVwidHJhaWxpbmdcImluIG8/ISFvLnRyYWlsaW5nOmEpLG4oZSx0LHtsZWFkaW5nOnIsbWF4V2FpdDp0LHRyYWlsaW5nOmF9KX1mdW5jdGlvbiBpKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKX1mdW5jdGlvbiBhKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfHxyKGUpJiZrLmNhbGwoZSk9PWR9ZnVuY3Rpb24gdShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihhKGUpKXJldHVybiBmO2lmKGkoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9aSh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShsLFwiXCIpO3ZhciBuPW0udGVzdChlKTtyZXR1cm4gbnx8Yi50ZXN0KGUpP3YoZS5zbGljZSgyKSxuPzI6OCk6cC50ZXN0KGUpP2Y6K2V9dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixmPU5hTixkPVwiW29iamVjdCBTeW1ib2xdXCIsbD0vXlxccyt8XFxzKyQvZyxwPS9eWy0rXTB4WzAtOWEtZl0rJC9pLG09L14wYlswMV0rJC9pLGI9L14wb1swLTddKyQvaSx2PXBhcnNlSW50LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LGc9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6YyhzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGg9eXx8Z3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLHc9T2JqZWN0LnByb3RvdHlwZSxrPXcudG9TdHJpbmcseD1NYXRoLm1heCxqPU1hdGgubWluLE89ZnVuY3Rpb24oKXtyZXR1cm4gaC5EYXRlLm5vdygpfTtlLmV4cG9ydHM9b30pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gaSh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxPPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gTz1lLGg9c2V0VGltZW91dChmLHQpLE0/aShlKTpnfWZ1bmN0aW9uIHUoZSl7dmFyIG49ZS13LG89ZS1PLGk9dC1uO3JldHVybiBTP3goaSx5LW8pOml9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLXcsbz1lLU87cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9aigpO3JldHVybiBzKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZix1KGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9pKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksTz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoaigpKX1mdW5jdGlvbiBtKCl7dmFyIGU9aigpLG49cyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksaSh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxPPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGMpO3JldHVybiB0PWEodCl8fDAsbyhuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP2soYShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gaShlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl8fGkoZSkmJncuY2FsbChlKT09Zn1mdW5jdGlvbiBhKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKHIoZSkpcmV0dXJuIHM7aWYobyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1vKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGQsXCJcIik7dmFyIG49cC50ZXN0KGUpO3JldHVybiBufHxtLnRlc3QoZSk/YihlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/czorZX12YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxjPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLHM9TmFOLGY9XCJbb2JqZWN0IFN5bWJvbF1cIixkPS9eXFxzK3xcXHMrJC9nLGw9L15bLStdMHhbMC05YS1mXSskL2kscD0vXjBiWzAxXSskL2ksbT0vXjBvWzAtN10rJC9pLGI9cGFyc2VJbnQsdj1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjp1KHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjp1KHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsZz12fHx5fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksaD1PYmplY3QucHJvdG90eXBlLHc9aC50b1N0cmluZyxrPU1hdGgubWF4LHg9TWF0aC5taW4saj1mdW5jdGlvbigpe3JldHVybiBnLkRhdGUubm93KCl9O2UuZXhwb3J0cz1ufSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dm9pZCAwLG89dm9pZCAwLGk9dm9pZCAwO2Zvcih0PTA7dDxlLmxlbmd0aDt0Kz0xKXtpZihvPWVbdF0sby5kYXRhc2V0JiZvLmRhdGFzZXQuYW9zKXJldHVybiEwO2lmKGk9by5jaGlsZHJlbiYmbihvLmNoaWxkcmVuKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBvKCl7cmV0dXJuIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcnx8d2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJ9ZnVuY3Rpb24gaSgpe3JldHVybiEhbygpfWZ1bmN0aW9uIHIoZSx0KXt2YXIgbj13aW5kb3cuZG9jdW1lbnQsaT1vKCkscj1uZXcgaShhKTt1PXQsci5vYnNlcnZlKG4uZG9jdW1lbnRFbGVtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMCxyZW1vdmVkTm9kZXM6ITB9KX1mdW5jdGlvbiBhKGUpe2UmJmUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmFkZGVkTm9kZXMpLG89QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5yZW1vdmVkTm9kZXMpLGk9dC5jb25jYXQobyk7aWYobihpKSlyZXR1cm4gdSgpfSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZnVuY3Rpb24oKXt9O3QuZGVmYXVsdD17aXNTdXBwb3J0ZWQ6aSxyZWFkeTpyfX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYXx8XCJcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLGE9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksdT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2ksYz0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKX1yZXR1cm4gaShlLFt7a2V5OlwicGhvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCFyLnRlc3QoZSkmJiFhLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcIm1vYmlsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXUudGVzdChlKSYmIWMudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwidGFibGV0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2JpbGUoKSYmIXRoaXMucGhvbmUoKX19XSksZX0oKTt0LmRlZmF1bHQ9bmV3IHN9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPWUubm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vbmNlXCIpO3Q+ZS5wb3NpdGlvbj9lLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1hbmltYXRlXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBvJiYoXCJmYWxzZVwiPT09b3x8IW4mJlwidHJ1ZVwiIT09bykmJmUubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYW9zLWFuaW1hdGVcIil9LG89ZnVuY3Rpb24oZSx0KXt2YXIgbz13aW5kb3cucGFnZVlPZmZzZXQsaT13aW5kb3cuaW5uZXJIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUscil7bihlLGkrbyx0KX0pfTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTIpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlLG4pe2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWluaXRcIiksZS5wb3NpdGlvbj0oMCxyLmRlZmF1bHQpKGUubm9kZSx0Lm9mZnNldCl9KSxlfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTMpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7dmFyIG49MCxvPTAsaT13aW5kb3cuaW5uZXJIZWlnaHQsYT17b2Zmc2V0OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb2Zmc2V0XCIpLGFuY2hvcjplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvclwiKSxhbmNob3JQbGFjZW1lbnQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50XCIpfTtzd2l0Y2goYS5vZmZzZXQmJiFpc05hTihhLm9mZnNldCkmJihvPXBhcnNlSW50KGEub2Zmc2V0KSksYS5hbmNob3ImJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKVswXSksbj0oMCxyLmRlZmF1bHQpKGUpLnRvcCxhLmFuY2hvclBsYWNlbWVudCl7Y2FzZVwidG9wLWJvdHRvbVwiOmJyZWFrO2Nhc2VcImNlbnRlci1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcImJvdHRvbS1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJ0b3AtY2VudGVyXCI6bis9aS8yO2JyZWFrO2Nhc2VcImJvdHRvbS1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwiY2VudGVyLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcInRvcC10b3BcIjpuKz1pO2JyZWFrO2Nhc2VcImJvdHRvbS10b3BcIjpuKz1lLm9mZnNldEhlaWdodCtpO2JyZWFrO2Nhc2VcImNlbnRlci10b3BcIjpuKz1lLm9mZnNldEhlaWdodC8yK2l9cmV0dXJuIGEuYW5jaG9yUGxhY2VtZW50fHxhLm9mZnNldHx8aXNOYU4odCl8fChvPXQpLG4rb307dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO2UmJiFpc05hTihlLm9mZnNldExlZnQpJiYhaXNOYU4oZS5vZmZzZXRUb3ApOyl0Kz1lLm9mZnNldExlZnQtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxMZWZ0OjApLG4rPWUub2Zmc2V0VG9wLShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsVG9wOjApLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJue3RvcDpuLGxlZnQ6dH19O3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe3JldHVybiBlPWV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hb3NdXCIpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLGZ1bmN0aW9uKGUpe3JldHVybntub2RlOmV9fSl9O3QuZGVmYXVsdD1ufV0pfSk7IiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1hY2NvcmRpb24tLWV4cGFuZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtZG93biBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgJCgnLmMtYWNjb3JkaW9uX19ib2R5OnZpc2libGUnKS5zbGlkZVVwKClcbiAgaWYgKCEkKHRoaXMpLm5leHQoKS5pcygnOnZpc2libGUnKSkge1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigyMDApXG4gICAgJCh0aGlzKS5maW5kKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS11cCBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgfVxufSlcbiIsIi8vIG5wbSBpbnN0YWxsIGFvcyAtLXNhdmVcbmltcG9ydCBBT1MgZnJvbSAnYW9zJ1xuXG4vLyBZb3UgY2FuIGFsc28gcGFzcyBhbiBvcHRpb25hbCBzZXR0aW5ncyBvYmplY3Rcbi8vIGJlbG93IGxpc3RlZCBkZWZhdWx0IHNldHRpbmdzXG5BT1MuaW5pdCh7XG4gIC8vIEdsb2JhbCBzZXR0aW5nczpcbiAgZGlzYWJsZTogZmFsc2UsIC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXG4gIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXG4gIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXG4gIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcbiAgZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6IGZhbHNlLCAvLyBkaXNhYmxlcyBhdXRvbWF0aWMgbXV0YXRpb25zJyBkZXRlY3Rpb25zIChhZHZhbmNlZClcbiAgZGVib3VuY2VEZWxheTogNTAsIC8vIHRoZSBkZWxheSBvbiBkZWJvdW5jZSB1c2VkIHdoaWxlIHJlc2l6aW5nIHdpbmRvdyAoYWR2YW5jZWQpXG4gIHRocm90dGxlRGVsYXk6IDk5LCAvLyB0aGUgZGVsYXkgb24gdGhyb3R0bGUgdXNlZCB3aGlsZSBzY3JvbGxpbmcgdGhlIHBhZ2UgKGFkdmFuY2VkKVxuXG4gIC8vIFNldHRpbmdzIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gb24gcGVyLWVsZW1lbnQgYmFzaXMsIGJ5IGBkYXRhLWFvcy0qYCBhdHRyaWJ1dGVzOlxuICBvZmZzZXQ6IDEyMCwgLy8gb2Zmc2V0IChpbiBweCkgZnJvbSB0aGUgb3JpZ2luYWwgdHJpZ2dlciBwb2ludFxuICBkZWxheTogMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBkdXJhdGlvbjogNDAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGVhc2luZzogJ2Vhc2UnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcbiAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cbiAgbWlycm9yOiBmYWxzZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxuICBhbmNob3JQbGFjZW1lbnQ6ICd0b3AtYm90dG9tJyAvLyBkZWZpbmVzIHdoaWNoIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlZ2FyZGluZyB0byB3aW5kb3cgc2hvdWxkIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlzT3BlbiA9IDBcbiAgJCgnLm9wZW5idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzT3BlbiA9PT0gMCkge1xuICAgICAgb3Blbk5hdigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2KClcbiAgICB9XG4gIH0pXG4gICQoJy5jbG9zZWJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZU5hdigpXG4gIH0pXG5cbiAgZnVuY3Rpb24gb3Blbk5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICBpc09wZW4gPSAxXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMCUnXG4gICAgaXNPcGVuID0gMFxuICB9XG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKVxuICBjb25zb2xlLmxvZygnbW91c2UgZW50ZXInKVxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxufSlcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgbWVudV9idXR0b24gPSAkKGUuY3VycmVudFRhcmdldClcbiAgbGV0IG1lbnVfbGluayA9IG1lbnVfYnV0dG9uLnBhcmVudCgpXG4gIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KClcbiAgaWYgKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYWRkKG1lbnVfaXRlbS5maW5kKCdhJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gIH0gZWxzZSB7XG4gICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICBtZW51X2l0ZW0uYWRkQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XG4gIGlmICgkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpIHtcbiAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gIH1cbn0pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcblxuJCgnLnNsaWRlci1kb3RzJykuc2xpY2soe1xuICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGRvdHM6IHRydWUsXG4gIGFycm93czogZmFsc2UsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMzAwMFxufSlcblxuJCgnLmMtc2xpZGVyLS1hcnJvd3MtaW5zaWRlJykuc2xpY2soe1xuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stbmV4dC1pbnNpZGVcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT4nLFxuICBwcmV2QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLXByZXYtaW5zaWRlXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+J1xufSlcblxuJCgnLmMtc2xpZGVyLS1hcnJvd3Mtb3V0c2lkZScpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT4nLFxuICBwcmV2QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT4nXG59KVxuXG4kKCcuYy1zbGlkZXItLW92ZXJmbG93Jykuc2xpY2soe1xuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gIHNsaWRlc1RvU2hvdzogMyxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGFycm93czogZmFsc2UsXG4gIGRvdHM6IHRydWUsXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW9zJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICAnYXJyb3dzJzogZmFsc2UsXG4gICAgJ2FkYXB0aXZlSGVpZ2h0JzogdHJ1ZVxuICB9KVxuXG4gICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gIGlmICh3cC5jdXN0b21pemUgJiYgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2gpIHtcbiAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKCdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCAocGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cyAmJiBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT0gJ190aGVtZW5hbWVfbW9zdF9yZWNlbnRfd2lkZ2V0Jykge1xuICAgICAgICBwbGFjZW1lbnQuY29udGFpbmVyLmZpbmQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuLy8gRGlzYWJsZWQgZm9ybSBzdWJtaXQgYnV0dG9uIGZvciBDRjdcbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnI2Zvcm0tc3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=