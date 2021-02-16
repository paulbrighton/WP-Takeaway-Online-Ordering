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
}); // Swap text for button on Our Food cards

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.our-food-overlay-main').hover(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main').addClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main-btn').addClass('over-text-block');
}, function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main').removeClass('over-text-none');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.food-main-btn').removeClass('over-text-block');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsIm8iLCJuIiwiaSIsImlkIiwibG9hZGVkIiwiY2FsbCIsIm0iLCJjIiwicCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInIiLCJhIiwidSIsInMiLCJmIiwiZCIsImwiLCJiIiwidiIsInkiLCJnIiwiaCIsInciLCJrIiwieCIsIm9mZnNldCIsImRlbGF5IiwiZWFzaW5nIiwiZHVyYXRpb24iLCJkaXNhYmxlIiwib25jZSIsInN0YXJ0RXZlbnQiLCJ0aHJvdHRsZURlbGF5IiwiZGVib3VuY2VEZWxheSIsImRpc2FibGVNdXRhdGlvbk9ic2VydmVyIiwiaiIsIk8iLCJNIiwiZm9yRWFjaCIsIm5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTIiwibW9iaWxlIiwicGhvbmUiLCJ0YWJsZXQiLCJfIiwiZG9jdW1lbnQiLCJhbGwiLCJ3aW5kb3ciLCJhdG9iIiwiaXNTdXBwb3J0ZWQiLCJjb25zb2xlIiwiaW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJpbmRleE9mIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWFkeSIsImluaXQiLCJyZWZyZXNoIiwicmVmcmVzaEhhcmQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUeXBlRXJyb3IiLCJsZWFkaW5nIiwibWF4V2FpdCIsInRyYWlsaW5nIiwiY2FuY2VsIiwiZmx1c2giLCJ2YWx1ZU9mIiwicmVwbGFjZSIsInRlc3QiLCJzbGljZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJOYU4iLCJwYXJzZUludCIsInNlbGYiLCJGdW5jdGlvbiIsInRvU3RyaW5nIiwiTWF0aCIsIm1heCIsIm1pbiIsIkRhdGUiLCJub3ciLCJkYXRhc2V0IiwiYW9zIiwiY2hpbGRyZW4iLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIk1vek11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInJlbW92ZWROb2RlcyIsIkFycmF5IiwiYWRkZWROb2RlcyIsImNvbmNhdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInN1YnN0ciIsImdldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGFnZVlPZmZzZXQiLCJpbm5lckhlaWdodCIsImFuY2hvciIsImFuY2hvclBsYWNlbWVudCIsImlzTmFOIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcCIsIm9mZnNldEhlaWdodCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ0YWdOYW1lIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIm9mZnNldFBhcmVudCIsImxlZnQiLCJtYXAiLCJmYWN0b3J5IiwiJCIsIlNsaWNrIiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsInRleHQiLCJkb3RzIiwiZG90c0NsYXNzIiwiZHJhZ2dhYmxlIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJsYXp5TG9hZCIsIm1vYmlsZUZpcnN0IiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkRvdHNIb3ZlciIsInJlc3BvbmRUbyIsInJlc3BvbnNpdmUiLCJyb3dzIiwicnRsIiwic2xpZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwiZGF0YSIsIm9wdGlvbnMiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJhdHRyIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJhbmltU3RhcnQiLCJzdGVwIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwidW5zbGljayIsInRyaWdnZXIiLCJldmVudCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsImlzIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCJvbiIsIiRzZiIsImdldEN1cnJlbnQiLCJzbGlja0N1cnJlbnRTbGlkZSIsImJyZWFrUG9pbnQiLCJjb3VudGVyIiwicGFnZXJRdHkiLCJnZXRMZWZ0IiwidmVydGljYWxIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInRhcmdldFNsaWRlIiwiY29lZiIsImZsb29yIiwib3V0ZXJXaWR0aCIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsInB1c2giLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImFicyIsImdvVG8iLCJzbGlja0dvVG8iLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJtYXRjaCIsImtleUNvZGUiLCJsb2FkUmFuZ2UiLCJjbG9uZVJhbmdlIiwicmFuZ2VTdGFydCIsInJhbmdlRW5kIiwibG9hZEltYWdlcyIsImltYWdlc1Njb3BlIiwiaW1hZ2UiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwib25sb2FkIiwib25lcnJvciIsInNyYyIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwicmVzcG9uc2l2ZVNldHRpbmdzIiwidHlwZSIsInNwbGljZSIsInNvcnQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvblByb3BzIiwic2V0RGltZW5zaW9ucyIsInBhZGRpbmciLCJzZXRGYWRlIiwicmlnaHQiLCJzZXRIZWlnaHQiLCJzZXRPcHRpb24iLCJzbGlja1NldE9wdGlvbiIsIml0ZW0iLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5Iiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0b2dnbGUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsInJvdW5kIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsInNxcnQiLCJwb3ciLCJ1bmZpbHRlclNsaWRlcyIsInNsaWNrVW5maWx0ZXIiLCJmcm9tQnJlYWtwb2ludCIsImZuIiwiYXJncyIsInJldCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiaHRtbCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJBT1MiLCJpbml0Q2xhc3NOYW1lIiwiYW5pbWF0ZWRDbGFzc05hbWUiLCJ1c2VDbGFzc05hbWVzIiwibWlycm9yIiwiaXNPcGVuIiwiY2xpY2siLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiLCJwcm9wIiwiaG92ZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyw0Q0FBaUJDLE9BQWpCLE1BQTBCLDBDQUFpQkMsTUFBakIsRUFBMUIsR0FBa0RBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFlRCxDQUFDLEVBQWxFLEdBQXFFLFFBQXNDRyxpQ0FBTyxFQUFELG9DQUFJSCxDQUFKO0FBQUE7QUFBQTtBQUFBLG9HQUE1QyxHQUFtRCxTQUF4SDtBQUEySyxDQUF6TCxDQUEwTCxJQUExTCxFQUErTCxZQUFVO0FBQUMsU0FBTyxVQUFTRCxDQUFULEVBQVc7QUFBQyxhQUFTQyxDQUFULENBQVdJLENBQVgsRUFBYTtBQUFDLFVBQUdDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFKLEVBQVEsT0FBT0MsQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS0gsT0FBWjtBQUFvQixVQUFJSyxDQUFDLEdBQUNELENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQUs7QUFBQ0gsZUFBTyxFQUFDLEVBQVQ7QUFBWU0sVUFBRSxFQUFDSCxDQUFmO0FBQWlCSSxjQUFNLEVBQUMsQ0FBQztBQUF6QixPQUFYO0FBQXVDLGFBQU9ULENBQUMsQ0FBQ0ssQ0FBRCxDQUFELENBQUtLLElBQUwsQ0FBVUgsQ0FBQyxDQUFDTCxPQUFaLEVBQW9CSyxDQUFwQixFQUFzQkEsQ0FBQyxDQUFDTCxPQUF4QixFQUFnQ0QsQ0FBaEMsR0FBbUNNLENBQUMsQ0FBQ0UsTUFBRixHQUFTLENBQUMsQ0FBN0MsRUFBK0NGLENBQUMsQ0FBQ0wsT0FBeEQ7QUFBZ0U7O0FBQUEsUUFBSUksQ0FBQyxHQUFDLEVBQU47QUFBUyxXQUFPTCxDQUFDLENBQUNVLENBQUYsR0FBSVgsQ0FBSixFQUFNQyxDQUFDLENBQUNXLENBQUYsR0FBSU4sQ0FBVixFQUFZTCxDQUFDLENBQUNZLENBQUYsR0FBSSxPQUFoQixFQUF3QlosQ0FBQyxDQUFDLENBQUQsQ0FBaEM7QUFBb0MsR0FBMU0sQ0FBMk0sQ0FBQyxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUM7O0FBQWEsYUFBU0QsQ0FBVCxDQUFXTCxDQUFYLEVBQWE7QUFBQyxhQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQ2MsVUFBTCxHQUFnQmQsQ0FBaEIsR0FBa0I7QUFBQyxtQkFBUUE7QUFBVCxPQUF6QjtBQUFxQzs7QUFBQSxRQUFJTyxDQUFDLEdBQUNRLE1BQU0sQ0FBQ0MsTUFBUCxJQUFlLFVBQVNoQixDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2dCLFNBQVMsQ0FBQ0MsTUFBeEIsRUFBK0JqQixDQUFDLEVBQWhDLEVBQW1DO0FBQUMsWUFBSUssQ0FBQyxHQUFDVyxTQUFTLENBQUNoQixDQUFELENBQWY7O0FBQW1CLGFBQUksSUFBSUksQ0FBUixJQUFhQyxDQUFiO0FBQWVTLGdCQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDVixJQUFoQyxDQUFxQ0osQ0FBckMsRUFBdUNELENBQXZDLE1BQTRDTCxDQUFDLENBQUNLLENBQUQsQ0FBRCxHQUFLQyxDQUFDLENBQUNELENBQUQsQ0FBbEQ7QUFBZjtBQUFzRTs7QUFBQSxhQUFPTCxDQUFQO0FBQVMsS0FBdks7QUFBQSxRQUF3S3FCLENBQUMsR0FBQ2YsQ0FBQyxDQUFDLENBQUQsQ0FBM0s7QUFBQSxRQUErS2dCLENBQUMsSUFBRWpCLENBQUMsQ0FBQ2dCLENBQUQsQ0FBRCxFQUFLZixDQUFDLENBQUMsQ0FBRCxDQUFSLENBQWhMO0FBQUEsUUFBNkxpQixDQUFDLEdBQUNsQixDQUFDLENBQUNpQixDQUFELENBQWhNO0FBQUEsUUFBb01WLENBQUMsR0FBQ04sQ0FBQyxDQUFDLENBQUQsQ0FBdk07QUFBQSxRQUEyTWtCLENBQUMsR0FBQ25CLENBQUMsQ0FBQ08sQ0FBRCxDQUE5TTtBQUFBLFFBQWtOYSxDQUFDLEdBQUNuQixDQUFDLENBQUMsQ0FBRCxDQUFyTjtBQUFBLFFBQXlOb0IsQ0FBQyxHQUFDckIsQ0FBQyxDQUFDb0IsQ0FBRCxDQUE1TjtBQUFBLFFBQWdPRSxDQUFDLEdBQUNyQixDQUFDLENBQUMsQ0FBRCxDQUFuTztBQUFBLFFBQXVPTyxDQUFDLEdBQUNSLENBQUMsQ0FBQ3NCLENBQUQsQ0FBMU87QUFBQSxRQUE4T2hCLENBQUMsR0FBQ0wsQ0FBQyxDQUFDLEVBQUQsQ0FBalA7QUFBQSxRQUFzUHNCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ00sQ0FBRCxDQUF6UDtBQUFBLFFBQTZQa0IsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDLEVBQUQsQ0FBaFE7QUFBQSxRQUFxUXdCLENBQUMsR0FBQ3pCLENBQUMsQ0FBQ3dCLENBQUQsQ0FBeFE7QUFBQSxRQUE0UUUsQ0FBQyxHQUFDekIsQ0FBQyxDQUFDLEVBQUQsQ0FBL1E7QUFBQSxRQUFvUjBCLENBQUMsR0FBQzNCLENBQUMsQ0FBQzBCLENBQUQsQ0FBdlI7QUFBQSxRQUEyUkUsQ0FBQyxHQUFDLEVBQTdSO0FBQUEsUUFBZ1NDLENBQUMsR0FBQyxDQUFDLENBQW5TO0FBQUEsUUFBcVNDLENBQUMsR0FBQztBQUFDQyxZQUFNLEVBQUMsR0FBUjtBQUFZQyxXQUFLLEVBQUMsQ0FBbEI7QUFBb0JDLFlBQU0sRUFBQyxNQUEzQjtBQUFrQ0MsY0FBUSxFQUFDLEdBQTNDO0FBQStDQyxhQUFPLEVBQUMsQ0FBQyxDQUF4RDtBQUEwREMsVUFBSSxFQUFDLENBQUMsQ0FBaEU7QUFBa0VDLGdCQUFVLEVBQUMsa0JBQTdFO0FBQWdHQyxtQkFBYSxFQUFDLEVBQTlHO0FBQWlIQyxtQkFBYSxFQUFDLEVBQS9IO0FBQWtJQyw2QkFBdUIsRUFBQyxDQUFDO0FBQTNKLEtBQXZTO0FBQUEsUUFBcWNDLENBQUMsR0FBQyxTQUFGQSxDQUFFLEdBQVU7QUFBQyxVQUFJOUMsQ0FBQyxHQUFDaUIsU0FBUyxDQUFDQyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTRCxTQUFTLENBQUMsQ0FBRCxDQUF0QyxJQUEyQ0EsU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBOEQsVUFBR2pCLENBQUMsS0FBR2tDLENBQUMsR0FBQyxDQUFDLENBQU4sQ0FBRCxFQUFVQSxDQUFiLEVBQWUsT0FBT0QsQ0FBQyxHQUFDLENBQUMsR0FBRUgsQ0FBQyxXQUFKLEVBQWNHLENBQWQsRUFBZ0JFLENBQWhCLENBQUYsRUFBcUIsQ0FBQyxHQUFFUCxDQUFDLFdBQUosRUFBY0ssQ0FBZCxFQUFnQkUsQ0FBQyxDQUFDTSxJQUFsQixDQUFyQixFQUE2Q1IsQ0FBcEQ7QUFBc0QsS0FBcmxCO0FBQUEsUUFBc2xCYyxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxHQUFVO0FBQUNkLE9BQUMsR0FBQyxDQUFDLEdBQUVELENBQUMsV0FBSixHQUFGLEVBQWtCYyxDQUFDLEVBQW5CO0FBQXNCLEtBQXpuQjtBQUFBLFFBQTBuQkUsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDZixPQUFDLENBQUNnQixPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUNELFNBQUMsQ0FBQ2tELElBQUYsQ0FBT0MsZUFBUCxDQUF1QixVQUF2QixHQUFtQ25ELENBQUMsQ0FBQ2tELElBQUYsQ0FBT0MsZUFBUCxDQUF1QixpQkFBdkIsQ0FBbkMsRUFBNkVuRCxDQUFDLENBQUNrRCxJQUFGLENBQU9DLGVBQVAsQ0FBdUIsbUJBQXZCLENBQTdFLEVBQXlIbkQsQ0FBQyxDQUFDa0QsSUFBRixDQUFPQyxlQUFQLENBQXVCLGdCQUF2QixDQUF6SDtBQUFrSyxPQUExTDtBQUE0TCxLQUFuMEI7QUFBQSxRQUFvMEJDLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNwRCxDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLEtBQUcsQ0FBQyxDQUFMLElBQVEsYUFBV0EsQ0FBWCxJQUFjYSxDQUFDLFdBQUQsQ0FBVXdDLE1BQVYsRUFBdEIsSUFBMEMsWUFBVXJELENBQVYsSUFBYWEsQ0FBQyxXQUFELENBQVV5QyxLQUFWLEVBQXZELElBQTBFLGFBQVd0RCxDQUFYLElBQWNhLENBQUMsV0FBRCxDQUFVMEMsTUFBVixFQUF4RixJQUE0RyxjQUFZLE9BQU92RCxDQUFuQixJQUFzQkEsQ0FBQyxPQUFLLENBQUMsQ0FBaEo7QUFBa0osS0FBcCtCO0FBQUEsUUFBcStCd0QsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU3hELENBQVQsRUFBVztBQUFDbUMsT0FBQyxHQUFDNUIsQ0FBQyxDQUFDNEIsQ0FBRCxFQUFHbkMsQ0FBSCxDQUFILEVBQVNpQyxDQUFDLEdBQUMsQ0FBQyxHQUFFRCxDQUFDLFdBQUosR0FBWDtBQUEyQixVQUFJL0IsQ0FBQyxHQUFDd0QsUUFBUSxDQUFDQyxHQUFULElBQWMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUE1QjtBQUFpQyxhQUFPUixDQUFDLENBQUNqQixDQUFDLENBQUNLLE9BQUgsQ0FBRCxJQUFjdkMsQ0FBZCxHQUFnQitDLENBQUMsRUFBakIsSUFBcUJiLENBQUMsQ0FBQ1UsdUJBQUYsSUFBMkJuQixDQUFDLFdBQUQsQ0FBVW1DLFdBQVYsRUFBM0IsS0FBcURDLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLG1MQUFiLEdBQWtNNUIsQ0FBQyxDQUFDVSx1QkFBRixHQUEwQixDQUFDLENBQWxSLEdBQXFSWSxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLGlCQUE1QyxFQUE4RDlCLENBQUMsQ0FBQ0csTUFBaEUsQ0FBclIsRUFBNlZtQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLG1CQUE1QyxFQUFnRTlCLENBQUMsQ0FBQ0ksUUFBbEUsQ0FBN1YsRUFBeWFrQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLGdCQUE1QyxFQUE2RDlCLENBQUMsQ0FBQ0UsS0FBL0QsQ0FBemEsRUFBK2UsdUJBQXFCRixDQUFDLENBQUNPLFVBQXZCLElBQW1DLENBQUMsVUFBRCxFQUFZLGFBQVosRUFBMkJ3QixPQUEzQixDQUFtQ1QsUUFBUSxDQUFDVSxVQUE1QyxJQUF3RCxDQUFDLENBQTVGLEdBQThGckIsQ0FBQyxDQUFDLENBQUMsQ0FBRixDQUEvRixHQUFvRyxXQUFTWCxDQUFDLENBQUNPLFVBQVgsR0FBc0JpQixNQUFNLENBQUNTLGdCQUFQLENBQXdCakMsQ0FBQyxDQUFDTyxVQUExQixFQUFxQyxZQUFVO0FBQUNJLFNBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtBQUFNLE9BQXRELENBQXRCLEdBQThFVyxRQUFRLENBQUNXLGdCQUFULENBQTBCakMsQ0FBQyxDQUFDTyxVQUE1QixFQUF1QyxZQUFVO0FBQUNJLFNBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtBQUFNLE9BQXhELENBQWpxQixFQUEydEJhLE1BQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUMsQ0FBQyxHQUFFNUMsQ0FBQyxXQUFKLEVBQWNzQixDQUFkLEVBQWdCWCxDQUFDLENBQUNTLGFBQWxCLEVBQWdDLENBQUMsQ0FBakMsQ0FBakMsQ0FBM3RCLEVBQWl5QmUsTUFBTSxDQUFDUyxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNEMsQ0FBQyxHQUFFNUMsQ0FBQyxXQUFKLEVBQWNzQixDQUFkLEVBQWdCWCxDQUFDLENBQUNTLGFBQWxCLEVBQWdDLENBQUMsQ0FBakMsQ0FBNUMsQ0FBanlCLEVBQWszQmUsTUFBTSxDQUFDUyxnQkFBUCxDQUF3QixRQUF4QixFQUFpQyxDQUFDLEdBQUU3QyxDQUFDLFdBQUosRUFBYyxZQUFVO0FBQUMsU0FBQyxHQUFFSyxDQUFDLFdBQUosRUFBY0ssQ0FBZCxFQUFnQkUsQ0FBQyxDQUFDTSxJQUFsQjtBQUF3QixPQUFqRCxFQUFrRE4sQ0FBQyxDQUFDUSxhQUFwRCxDQUFqQyxDQUFsM0IsRUFBdTlCUixDQUFDLENBQUNVLHVCQUFGLElBQTJCbkIsQ0FBQyxXQUFELENBQVUyQyxLQUFWLENBQWdCLFlBQWhCLEVBQTZCdEIsQ0FBN0IsQ0FBbC9CLEVBQWtoQ2QsQ0FBdmlDLENBQVA7QUFBaWpDLEtBQWhtRTs7QUFBaW1FakMsS0FBQyxDQUFDRSxPQUFGLEdBQVU7QUFBQ29FLFVBQUksRUFBQ2QsQ0FBTjtBQUFRZSxhQUFPLEVBQUN6QixDQUFoQjtBQUFrQjBCLGlCQUFXLEVBQUN6QjtBQUE5QixLQUFWO0FBQTJDLEdBQTd0RSxFQUE4dEUsVUFBUy9DLENBQVQsRUFBV0MsQ0FBWCxFQUFhLENBQUUsQ0FBN3VFLE1BQWt2RSxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLEtBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUM7O0FBQWEsZUFBU0ssQ0FBVCxDQUFXTixDQUFYLEVBQWFDLENBQWIsRUFBZUssQ0FBZixFQUFpQjtBQUFDLGlCQUFTRCxDQUFULENBQVdKLENBQVgsRUFBYTtBQUFDLGNBQUlLLENBQUMsR0FBQ3NCLENBQU47QUFBQSxjQUFRdkIsQ0FBQyxHQUFDd0IsQ0FBVjtBQUFZLGlCQUFPRCxDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0ssQ0FBQyxHQUFDakMsQ0FBYixFQUFlOEIsQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDeUUsS0FBRixDQUFRcEUsQ0FBUixFQUFVQyxDQUFWLENBQXhCO0FBQXFDOztBQUFBLGlCQUFTZSxDQUFULENBQVdyQixDQUFYLEVBQWE7QUFBQyxpQkFBT2tDLENBQUMsR0FBQ2xDLENBQUYsRUFBSWdDLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBaEIsRUFBc0IrQyxDQUFDLEdBQUMzQyxDQUFDLENBQUNMLENBQUQsQ0FBRixHQUFNK0IsQ0FBcEM7QUFBc0M7O0FBQUEsaUJBQVNULENBQVQsQ0FBV3RCLENBQVgsRUFBYTtBQUFDLGNBQUlNLENBQUMsR0FBQ04sQ0FBQyxHQUFDaUMsQ0FBUjtBQUFBLGNBQVU1QixDQUFDLEdBQUNMLENBQUMsR0FBQ2tDLENBQWQ7QUFBQSxjQUFnQjNCLENBQUMsR0FBQ04sQ0FBQyxHQUFDSyxDQUFwQjtBQUFzQixpQkFBTzhDLENBQUMsR0FBQ04sQ0FBQyxDQUFDdkMsQ0FBRCxFQUFHdUIsQ0FBQyxHQUFDekIsQ0FBTCxDQUFGLEdBQVVFLENBQWxCO0FBQW9COztBQUFBLGlCQUFTSyxDQUFULENBQVdaLENBQVgsRUFBYTtBQUFDLGNBQUlNLENBQUMsR0FBQ04sQ0FBQyxHQUFDaUMsQ0FBUjtBQUFBLGNBQVU1QixDQUFDLEdBQUNMLENBQUMsR0FBQ2tDLENBQWQ7QUFBZ0IsaUJBQU8sS0FBSyxDQUFMLEtBQVNELENBQVQsSUFBWTNCLENBQUMsSUFBRUwsQ0FBZixJQUFrQkssQ0FBQyxHQUFDLENBQXBCLElBQXVCOEMsQ0FBQyxJQUFFL0MsQ0FBQyxJQUFFeUIsQ0FBcEM7QUFBc0M7O0FBQUEsaUJBQVNMLENBQVQsR0FBWTtBQUFDLGNBQUl6QixDQUFDLEdBQUMrQyxDQUFDLEVBQVA7QUFBVSxpQkFBT25DLENBQUMsQ0FBQ1osQ0FBRCxDQUFELEdBQUswQixDQUFDLENBQUMxQixDQUFELENBQU4sR0FBVSxNQUFLZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHSCxDQUFDLENBQUN0QixDQUFELENBQUosQ0FBakIsQ0FBakI7QUFBNEM7O0FBQUEsaUJBQVMwQixDQUFULENBQVcxQixDQUFYLEVBQWE7QUFBQyxpQkFBT2dDLENBQUMsR0FBQyxLQUFLLENBQVAsRUFBU3dCLENBQUMsSUFBRTVCLENBQUgsR0FBS3ZCLENBQUMsQ0FBQ0wsQ0FBRCxDQUFOLElBQVc0QixDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0UsQ0FBdEIsQ0FBaEI7QUFBeUM7O0FBQUEsaUJBQVNKLENBQVQsR0FBWTtBQUFDLGVBQUssQ0FBTCxLQUFTSyxDQUFULElBQVkyQyxZQUFZLENBQUMzQyxDQUFELENBQXhCLEVBQTRCRSxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0NOLENBQUMsR0FBQ0ssQ0FBQyxHQUFDSixDQUFDLEdBQUNHLENBQUMsR0FBQyxLQUFLLENBQTdDO0FBQStDOztBQUFBLGlCQUFTbkIsQ0FBVCxHQUFZO0FBQUMsaUJBQU8sS0FBSyxDQUFMLEtBQVNtQixDQUFULEdBQVdELENBQVgsR0FBYUwsQ0FBQyxDQUFDcUIsQ0FBQyxFQUFGLENBQXJCO0FBQTJCOztBQUFBLGlCQUFTcEMsQ0FBVCxHQUFZO0FBQUMsY0FBSVgsQ0FBQyxHQUFDK0MsQ0FBQyxFQUFQO0FBQUEsY0FBVXpDLENBQUMsR0FBQ00sQ0FBQyxDQUFDWixDQUFELENBQWI7O0FBQWlCLGNBQUc0QixDQUFDLEdBQUNYLFNBQUYsRUFBWVksQ0FBQyxHQUFDLElBQWQsRUFBbUJJLENBQUMsR0FBQ2pDLENBQXJCLEVBQXVCTSxDQUExQixFQUE0QjtBQUFDLGdCQUFHLEtBQUssQ0FBTCxLQUFTMEIsQ0FBWixFQUFjLE9BQU9YLENBQUMsQ0FBQ1ksQ0FBRCxDQUFSO0FBQVksZ0JBQUdtQixDQUFILEVBQUssT0FBT3BCLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBWixFQUFrQkksQ0FBQyxDQUFDNEIsQ0FBRCxDQUExQjtBQUE4Qjs7QUFBQSxpQkFBTyxLQUFLLENBQUwsS0FBU0QsQ0FBVCxLQUFhQSxDQUFDLEdBQUMwQyxVQUFVLENBQUNqRCxDQUFELEVBQUd4QixDQUFILENBQXpCLEdBQWdDOEIsQ0FBdkM7QUFBeUM7O0FBQUEsWUFBSUgsQ0FBSjtBQUFBLFlBQU1DLENBQU47QUFBQSxZQUFRQyxDQUFSO0FBQUEsWUFBVUMsQ0FBVjtBQUFBLFlBQVlDLENBQVo7QUFBQSxZQUFjQyxDQUFkO0FBQUEsWUFBZ0JDLENBQUMsR0FBQyxDQUFsQjtBQUFBLFlBQW9CYyxDQUFDLEdBQUMsQ0FBQyxDQUF2QjtBQUFBLFlBQXlCSSxDQUFDLEdBQUMsQ0FBQyxDQUE1QjtBQUFBLFlBQThCSSxDQUFDLEdBQUMsQ0FBQyxDQUFqQzs7QUFBbUMsWUFBRyxjQUFZLE9BQU94RCxDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNwRCxDQUFkLENBQU47QUFBdUIsZUFBT3ZCLENBQUMsR0FBQ3NCLENBQUMsQ0FBQ3RCLENBQUQsQ0FBRCxJQUFNLENBQVIsRUFBVU0sQ0FBQyxDQUFDRCxDQUFELENBQUQsS0FBTzBDLENBQUMsR0FBQyxDQUFDLENBQUMxQyxDQUFDLENBQUN1RSxPQUFOLEVBQWN6QixDQUFDLEdBQUMsYUFBWTlDLENBQTVCLEVBQThCd0IsQ0FBQyxHQUFDc0IsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDWixDQUFDLENBQUNqQixDQUFDLENBQUN3RSxPQUFILENBQUQsSUFBYyxDQUFmLEVBQWlCN0UsQ0FBakIsQ0FBRixHQUFzQjZCLENBQXZELEVBQXlEMEIsQ0FBQyxHQUFDLGNBQWFsRCxDQUFiLEdBQWUsQ0FBQyxDQUFDQSxDQUFDLENBQUN5RSxRQUFuQixHQUE0QnZCLENBQTlGLENBQVYsRUFBMkc3QyxDQUFDLENBQUNxRSxNQUFGLEdBQVNyRCxDQUFwSCxFQUFzSGhCLENBQUMsQ0FBQ3NFLEtBQUYsR0FBUXBFLENBQTlILEVBQWdJRixDQUF2STtBQUF5STs7QUFBQSxlQUFTTixDQUFULENBQVdMLENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCO0FBQUMsWUFBSWdCLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBQSxZQUFTQyxDQUFDLEdBQUMsQ0FBQyxDQUFaO0FBQWMsWUFBRyxjQUFZLE9BQU90QixDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNwRCxDQUFkLENBQU47QUFBdUIsZUFBT2pCLENBQUMsQ0FBQ0YsQ0FBRCxDQUFELEtBQU9nQixDQUFDLEdBQUMsYUFBWWhCLENBQVosR0FBYyxDQUFDLENBQUNBLENBQUMsQ0FBQ3dFLE9BQWxCLEdBQTBCeEQsQ0FBNUIsRUFBOEJDLENBQUMsR0FBQyxjQUFhakIsQ0FBYixHQUFlLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDMEUsUUFBbkIsR0FBNEJ6RCxDQUFuRSxHQUFzRWhCLENBQUMsQ0FBQ04sQ0FBRCxFQUFHQyxDQUFILEVBQUs7QUFBQzRFLGlCQUFPLEVBQUN4RCxDQUFUO0FBQVd5RCxpQkFBTyxFQUFDN0UsQ0FBbkI7QUFBcUI4RSxrQkFBUSxFQUFDekQ7QUFBOUIsU0FBTCxDQUE5RTtBQUFxSDs7QUFBQSxlQUFTZixDQUFULENBQVdQLENBQVgsRUFBYTtBQUFDLFlBQUlDLENBQUMsR0FBQyxlQUFhLE9BQU9ELENBQXBCLEdBQXNCLFdBQXRCLEdBQWtDWSxDQUFDLENBQUNaLENBQUQsQ0FBekM7QUFBNkMsZUFBTSxDQUFDLENBQUNBLENBQUYsS0FBTSxZQUFVQyxDQUFWLElBQWEsY0FBWUEsQ0FBL0IsQ0FBTjtBQUF3Qzs7QUFBQSxlQUFTb0IsQ0FBVCxDQUFXckIsQ0FBWCxFQUFhO0FBQUMsZUFBTSxDQUFDLENBQUNBLENBQUYsSUFBSyxhQUFXLGVBQWEsT0FBT0EsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NZLENBQUMsQ0FBQ1osQ0FBRCxDQUE5QyxDQUFYO0FBQThEOztBQUFBLGVBQVNzQixDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQyxlQUFNLGFBQVcsZUFBYSxPQUFPQSxDQUFwQixHQUFzQixXQUF0QixHQUFrQ1ksQ0FBQyxDQUFDWixDQUFELENBQTlDLEtBQW9EcUIsQ0FBQyxDQUFDckIsQ0FBRCxDQUFELElBQU1rQyxDQUFDLENBQUN4QixJQUFGLENBQU9WLENBQVAsS0FBVzBCLENBQTNFO0FBQTZFOztBQUFBLGVBQVNILENBQVQsQ0FBV3ZCLENBQVgsRUFBYTtBQUFDLFlBQUcsWUFBVSxPQUFPQSxDQUFwQixFQUFzQixPQUFPQSxDQUFQO0FBQVMsWUFBR3NCLENBQUMsQ0FBQ3RCLENBQUQsQ0FBSixFQUFRLE9BQU95QixDQUFQOztBQUFTLFlBQUdsQixDQUFDLENBQUNQLENBQUQsQ0FBSixFQUFRO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLGNBQVksT0FBT0QsQ0FBQyxDQUFDa0YsT0FBckIsR0FBNkJsRixDQUFDLENBQUNrRixPQUFGLEVBQTdCLEdBQXlDbEYsQ0FBL0M7QUFBaURBLFdBQUMsR0FBQ08sQ0FBQyxDQUFDTixDQUFELENBQUQsR0FBS0EsQ0FBQyxHQUFDLEVBQVAsR0FBVUEsQ0FBWjtBQUFjOztBQUFBLFlBQUcsWUFBVSxPQUFPRCxDQUFwQixFQUFzQixPQUFPLE1BQUlBLENBQUosR0FBTUEsQ0FBTixHQUFRLENBQUNBLENBQWhCO0FBQWtCQSxTQUFDLEdBQUNBLENBQUMsQ0FBQ21GLE9BQUYsQ0FBVXhELENBQVYsRUFBWSxFQUFaLENBQUY7QUFBa0IsWUFBSXJCLENBQUMsR0FBQ0ssQ0FBQyxDQUFDeUUsSUFBRixDQUFPcEYsQ0FBUCxDQUFOO0FBQWdCLGVBQU9NLENBQUMsSUFBRXNCLENBQUMsQ0FBQ3dELElBQUYsQ0FBT3BGLENBQVAsQ0FBSCxHQUFhNkIsQ0FBQyxDQUFDN0IsQ0FBQyxDQUFDcUYsS0FBRixDQUFRLENBQVIsQ0FBRCxFQUFZL0UsQ0FBQyxHQUFDLENBQUQsR0FBRyxDQUFoQixDQUFkLEdBQWlDTyxDQUFDLENBQUN1RSxJQUFGLENBQU9wRixDQUFQLElBQVV5QixDQUFWLEdBQVksQ0FBQ3pCLENBQXJEO0FBQXVEOztBQUFBLFVBQUlZLENBQUMsR0FBQyxjQUFZLE9BQU8wRSxNQUFuQixJQUEyQixvQkFBaUJBLE1BQU0sQ0FBQ0MsUUFBeEIsQ0FBM0IsR0FBNEQsVUFBU3ZGLENBQVQsRUFBVztBQUFDLHVCQUFjQSxDQUFkO0FBQWdCLE9BQXhGLEdBQXlGLFVBQVNBLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsSUFBRSxjQUFZLE9BQU9zRixNQUF0QixJQUE4QnRGLENBQUMsQ0FBQ3dGLFdBQUYsS0FBZ0JGLE1BQTlDLElBQXNEdEYsQ0FBQyxLQUFHc0YsTUFBTSxDQUFDbkUsU0FBakUsR0FBMkUsUUFBM0UsV0FBMkZuQixDQUEzRixDQUFQO0FBQW9HLE9BQS9NO0FBQUEsVUFBZ053QixDQUFDLEdBQUMscUJBQWxOO0FBQUEsVUFBd09DLENBQUMsR0FBQ2dFLEdBQTFPO0FBQUEsVUFBOE8vRCxDQUFDLEdBQUMsaUJBQWhQO0FBQUEsVUFBa1FDLENBQUMsR0FBQyxZQUFwUTtBQUFBLFVBQWlSZCxDQUFDLEdBQUMsb0JBQW5SO0FBQUEsVUFBd1NGLENBQUMsR0FBQyxZQUExUztBQUFBLFVBQXVUaUIsQ0FBQyxHQUFDLGFBQXpUO0FBQUEsVUFBdVVDLENBQUMsR0FBQzZELFFBQXpVO0FBQUEsVUFBa1Y1RCxDQUFDLEdBQUMsYUFBVyxlQUFhLE9BQU83QixDQUFwQixHQUFzQixXQUF0QixHQUFrQ1csQ0FBQyxDQUFDWCxDQUFELENBQTlDLEtBQW9EQSxDQUFwRCxJQUF1REEsQ0FBQyxDQUFDYyxNQUFGLEtBQVdBLE1BQWxFLElBQTBFZCxDQUE5WjtBQUFBLFVBQWdhOEIsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNEQsSUFBcEIsR0FBeUIsV0FBekIsR0FBcUMvRSxDQUFDLENBQUMrRSxJQUFELENBQWpELEtBQTBEQSxJQUExRCxJQUFnRUEsSUFBSSxDQUFDNUUsTUFBTCxLQUFjQSxNQUE5RSxJQUFzRjRFLElBQXhmO0FBQUEsVUFBNmYzRCxDQUFDLEdBQUNGLENBQUMsSUFBRUMsQ0FBSCxJQUFNNkQsUUFBUSxDQUFDLGFBQUQsQ0FBUixFQUFyZ0I7QUFBQSxVQUEraEIzRCxDQUFDLEdBQUNsQixNQUFNLENBQUNJLFNBQXhpQjtBQUFBLFVBQWtqQmUsQ0FBQyxHQUFDRCxDQUFDLENBQUM0RCxRQUF0akI7QUFBQSxVQUErakIxRCxDQUFDLEdBQUMyRCxJQUFJLENBQUNDLEdBQXRrQjtBQUFBLFVBQTBrQmpELENBQUMsR0FBQ2dELElBQUksQ0FBQ0UsR0FBamxCO0FBQUEsVUFBcWxCakQsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDLGVBQU9mLENBQUMsQ0FBQ2lFLElBQUYsQ0FBT0MsR0FBUCxFQUFQO0FBQW9CLE9BQXRuQjs7QUFBdW5CbEcsT0FBQyxDQUFDRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxLQUE3c0UsRUFBK3NFSyxJQUEvc0UsQ0FBb3RFVCxDQUFwdEUsRUFBc3RFLFlBQVU7QUFBQyxhQUFPLElBQVA7QUFBWSxLQUF2QixFQUF0dEU7QUFBaXZFLEdBQWovSSxFQUFrL0ksVUFBU0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxLQUFDLFVBQVNBLENBQVQsRUFBVztBQUFDOztBQUFhLGVBQVNLLENBQVQsQ0FBV04sQ0FBWCxFQUFhQyxDQUFiLEVBQWVLLENBQWYsRUFBaUI7QUFBQyxpQkFBU0MsQ0FBVCxDQUFXTixDQUFYLEVBQWE7QUFBQyxjQUFJSyxDQUFDLEdBQUNzQixDQUFOO0FBQUEsY0FBUXZCLENBQUMsR0FBQ3dCLENBQVY7QUFBWSxpQkFBT0QsQ0FBQyxHQUFDQyxDQUFDLEdBQUMsS0FBSyxDQUFULEVBQVdrQixDQUFDLEdBQUM5QyxDQUFiLEVBQWU4QixDQUFDLEdBQUMvQixDQUFDLENBQUN5RSxLQUFGLENBQVFwRSxDQUFSLEVBQVVDLENBQVYsQ0FBeEI7QUFBcUM7O0FBQUEsaUJBQVNlLENBQVQsQ0FBV3JCLENBQVgsRUFBYTtBQUFDLGlCQUFPK0MsQ0FBQyxHQUFDL0MsQ0FBRixFQUFJZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHeEIsQ0FBSCxDQUFoQixFQUFzQitDLENBQUMsR0FBQ3pDLENBQUMsQ0FBQ1AsQ0FBRCxDQUFGLEdBQU0rQixDQUFwQztBQUFzQzs7QUFBQSxpQkFBU1IsQ0FBVCxDQUFXdkIsQ0FBWCxFQUFhO0FBQUMsY0FBSU0sQ0FBQyxHQUFDTixDQUFDLEdBQUNpQyxDQUFSO0FBQUEsY0FBVTVCLENBQUMsR0FBQ0wsQ0FBQyxHQUFDK0MsQ0FBZDtBQUFBLGNBQWdCeEMsQ0FBQyxHQUFDTixDQUFDLEdBQUNLLENBQXBCO0FBQXNCLGlCQUFPOEMsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDNUIsQ0FBRCxFQUFHdUIsQ0FBQyxHQUFDekIsQ0FBTCxDQUFGLEdBQVVFLENBQWxCO0FBQW9COztBQUFBLGlCQUFTaUIsQ0FBVCxDQUFXeEIsQ0FBWCxFQUFhO0FBQUMsY0FBSU0sQ0FBQyxHQUFDTixDQUFDLEdBQUNpQyxDQUFSO0FBQUEsY0FBVTVCLENBQUMsR0FBQ0wsQ0FBQyxHQUFDK0MsQ0FBZDtBQUFnQixpQkFBTyxLQUFLLENBQUwsS0FBU2QsQ0FBVCxJQUFZM0IsQ0FBQyxJQUFFTCxDQUFmLElBQWtCSyxDQUFDLEdBQUMsQ0FBcEIsSUFBdUI4QyxDQUFDLElBQUUvQyxDQUFDLElBQUV5QixDQUFwQztBQUFzQzs7QUFBQSxpQkFBU0wsQ0FBVCxHQUFZO0FBQUMsY0FBSXpCLENBQUMsR0FBQzhDLENBQUMsRUFBUDtBQUFVLGlCQUFPdEIsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFELEdBQUswQixDQUFDLENBQUMxQixDQUFELENBQU4sR0FBVSxNQUFLZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHRixDQUFDLENBQUN2QixDQUFELENBQUosQ0FBakIsQ0FBakI7QUFBNEM7O0FBQUEsaUJBQVMwQixDQUFULENBQVcxQixDQUFYLEVBQWE7QUFBQyxpQkFBT2dDLENBQUMsR0FBQyxLQUFLLENBQVAsRUFBU3dCLENBQUMsSUFBRTVCLENBQUgsR0FBS3JCLENBQUMsQ0FBQ1AsQ0FBRCxDQUFOLElBQVc0QixDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0UsQ0FBdEIsQ0FBaEI7QUFBeUM7O0FBQUEsaUJBQVNKLENBQVQsR0FBWTtBQUFDLGVBQUssQ0FBTCxLQUFTSyxDQUFULElBQVkyQyxZQUFZLENBQUMzQyxDQUFELENBQXhCLEVBQTRCZSxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0NuQixDQUFDLEdBQUNLLENBQUMsR0FBQ0osQ0FBQyxHQUFDRyxDQUFDLEdBQUMsS0FBSyxDQUE3QztBQUErQzs7QUFBQSxpQkFBU25CLENBQVQsR0FBWTtBQUFDLGlCQUFPLEtBQUssQ0FBTCxLQUFTbUIsQ0FBVCxHQUFXRCxDQUFYLEdBQWFMLENBQUMsQ0FBQ29CLENBQUMsRUFBRixDQUFyQjtBQUEyQjs7QUFBQSxpQkFBU25DLENBQVQsR0FBWTtBQUFDLGNBQUlYLENBQUMsR0FBQzhDLENBQUMsRUFBUDtBQUFBLGNBQVV4QyxDQUFDLEdBQUNrQixDQUFDLENBQUN4QixDQUFELENBQWI7O0FBQWlCLGNBQUc0QixDQUFDLEdBQUNYLFNBQUYsRUFBWVksQ0FBQyxHQUFDLElBQWQsRUFBbUJJLENBQUMsR0FBQ2pDLENBQXJCLEVBQXVCTSxDQUExQixFQUE0QjtBQUFDLGdCQUFHLEtBQUssQ0FBTCxLQUFTMEIsQ0FBWixFQUFjLE9BQU9YLENBQUMsQ0FBQ1ksQ0FBRCxDQUFSO0FBQVksZ0JBQUdtQixDQUFILEVBQUssT0FBT3BCLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBWixFQUFrQk0sQ0FBQyxDQUFDMEIsQ0FBRCxDQUExQjtBQUE4Qjs7QUFBQSxpQkFBTyxLQUFLLENBQUwsS0FBU0QsQ0FBVCxLQUFhQSxDQUFDLEdBQUMwQyxVQUFVLENBQUNqRCxDQUFELEVBQUd4QixDQUFILENBQXpCLEdBQWdDOEIsQ0FBdkM7QUFBeUM7O0FBQUEsWUFBSUgsQ0FBSjtBQUFBLFlBQU1DLENBQU47QUFBQSxZQUFRQyxDQUFSO0FBQUEsWUFBVUMsQ0FBVjtBQUFBLFlBQVlDLENBQVo7QUFBQSxZQUFjQyxDQUFkO0FBQUEsWUFBZ0JjLENBQUMsR0FBQyxDQUFsQjtBQUFBLFlBQW9CQyxDQUFDLEdBQUMsQ0FBQyxDQUF2QjtBQUFBLFlBQXlCSSxDQUFDLEdBQUMsQ0FBQyxDQUE1QjtBQUFBLFlBQThCSSxDQUFDLEdBQUMsQ0FBQyxDQUFqQzs7QUFBbUMsWUFBRyxjQUFZLE9BQU94RCxDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNoRSxDQUFkLENBQU47QUFBdUIsZUFBT1gsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDckIsQ0FBRCxDQUFELElBQU0sQ0FBUixFQUFVSSxDQUFDLENBQUNDLENBQUQsQ0FBRCxLQUFPMEMsQ0FBQyxHQUFDLENBQUMsQ0FBQzFDLENBQUMsQ0FBQ3VFLE9BQU4sRUFBY3pCLENBQUMsR0FBQyxhQUFZOUMsQ0FBNUIsRUFBOEJ3QixDQUFDLEdBQUNzQixDQUFDLEdBQUNsQixDQUFDLENBQUNaLENBQUMsQ0FBQ2hCLENBQUMsQ0FBQ3dFLE9BQUgsQ0FBRCxJQUFjLENBQWYsRUFBaUI3RSxDQUFqQixDQUFGLEdBQXNCNkIsQ0FBdkQsRUFBeUQwQixDQUFDLEdBQUMsY0FBYWxELENBQWIsR0FBZSxDQUFDLENBQUNBLENBQUMsQ0FBQ3lFLFFBQW5CLEdBQTRCdkIsQ0FBOUYsQ0FBVixFQUEyRzdDLENBQUMsQ0FBQ3FFLE1BQUYsR0FBU3JELENBQXBILEVBQXNIaEIsQ0FBQyxDQUFDc0UsS0FBRixHQUFRcEUsQ0FBOUgsRUFBZ0lGLENBQXZJO0FBQXlJOztBQUFBLGVBQVNOLENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLGVBQWEsT0FBT0QsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0N1QixDQUFDLENBQUN2QixDQUFELENBQXpDO0FBQTZDLGVBQU0sQ0FBQyxDQUFDQSxDQUFGLEtBQU0sWUFBVUMsQ0FBVixJQUFhLGNBQVlBLENBQS9CLENBQU47QUFBd0M7O0FBQUEsZUFBU00sQ0FBVCxDQUFXUCxDQUFYLEVBQWE7QUFBQyxlQUFNLENBQUMsQ0FBQ0EsQ0FBRixJQUFLLGFBQVcsZUFBYSxPQUFPQSxDQUFwQixHQUFzQixXQUF0QixHQUFrQ3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBOUMsQ0FBWDtBQUE4RDs7QUFBQSxlQUFTcUIsQ0FBVCxDQUFXckIsQ0FBWCxFQUFhO0FBQUMsZUFBTSxhQUFXLGVBQWEsT0FBT0EsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0N1QixDQUFDLENBQUN2QixDQUFELENBQTlDLEtBQW9ETyxDQUFDLENBQUNQLENBQUQsQ0FBRCxJQUFNaUMsQ0FBQyxDQUFDdkIsSUFBRixDQUFPVixDQUFQLEtBQVd5QixDQUEzRTtBQUE2RTs7QUFBQSxlQUFTSCxDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQyxZQUFHLFlBQVUsT0FBT0EsQ0FBcEIsRUFBc0IsT0FBT0EsQ0FBUDtBQUFTLFlBQUdxQixDQUFDLENBQUNyQixDQUFELENBQUosRUFBUSxPQUFPd0IsQ0FBUDs7QUFBUyxZQUFHbkIsQ0FBQyxDQUFDTCxDQUFELENBQUosRUFBUTtBQUFDLGNBQUlDLENBQUMsR0FBQyxjQUFZLE9BQU9ELENBQUMsQ0FBQ2tGLE9BQXJCLEdBQTZCbEYsQ0FBQyxDQUFDa0YsT0FBRixFQUE3QixHQUF5Q2xGLENBQS9DO0FBQWlEQSxXQUFDLEdBQUNLLENBQUMsQ0FBQ0osQ0FBRCxDQUFELEdBQUtBLENBQUMsR0FBQyxFQUFQLEdBQVVBLENBQVo7QUFBYzs7QUFBQSxZQUFHLFlBQVUsT0FBT0QsQ0FBcEIsRUFBc0IsT0FBTyxNQUFJQSxDQUFKLEdBQU1BLENBQU4sR0FBUSxDQUFDQSxDQUFoQjtBQUFrQkEsU0FBQyxHQUFDQSxDQUFDLENBQUNtRixPQUFGLENBQVV6RCxDQUFWLEVBQVksRUFBWixDQUFGO0FBQWtCLFlBQUlwQixDQUFDLEdBQUNPLENBQUMsQ0FBQ3VFLElBQUYsQ0FBT3BGLENBQVAsQ0FBTjtBQUFnQixlQUFPTSxDQUFDLElBQUVLLENBQUMsQ0FBQ3lFLElBQUYsQ0FBT3BGLENBQVAsQ0FBSCxHQUFhNEIsQ0FBQyxDQUFDNUIsQ0FBQyxDQUFDcUYsS0FBRixDQUFRLENBQVIsQ0FBRCxFQUFZL0UsQ0FBQyxHQUFDLENBQUQsR0FBRyxDQUFoQixDQUFkLEdBQWlDcUIsQ0FBQyxDQUFDeUQsSUFBRixDQUFPcEYsQ0FBUCxJQUFVd0IsQ0FBVixHQUFZLENBQUN4QixDQUFyRDtBQUF1RDs7QUFBQSxVQUFJdUIsQ0FBQyxHQUFDLGNBQVksT0FBTytELE1BQW5CLElBQTJCLG9CQUFpQkEsTUFBTSxDQUFDQyxRQUF4QixDQUEzQixHQUE0RCxVQUFTdkYsQ0FBVCxFQUFXO0FBQUMsdUJBQWNBLENBQWQ7QUFBZ0IsT0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsZUFBT0EsQ0FBQyxJQUFFLGNBQVksT0FBT3NGLE1BQXRCLElBQThCdEYsQ0FBQyxDQUFDd0YsV0FBRixLQUFnQkYsTUFBOUMsSUFBc0R0RixDQUFDLEtBQUdzRixNQUFNLENBQUNuRSxTQUFqRSxHQUEyRSxRQUEzRSxXQUEyRm5CLENBQTNGLENBQVA7QUFBb0csT0FBL007QUFBQSxVQUFnTlksQ0FBQyxHQUFDLHFCQUFsTjtBQUFBLFVBQXdPWSxDQUFDLEdBQUNpRSxHQUExTztBQUFBLFVBQThPaEUsQ0FBQyxHQUFDLGlCQUFoUDtBQUFBLFVBQWtRQyxDQUFDLEdBQUMsWUFBcFE7QUFBQSxVQUFpUkMsQ0FBQyxHQUFDLG9CQUFuUjtBQUFBLFVBQXdTZCxDQUFDLEdBQUMsWUFBMVM7QUFBQSxVQUF1VEYsQ0FBQyxHQUFDLGFBQXpUO0FBQUEsVUFBdVVpQixDQUFDLEdBQUM4RCxRQUF6VTtBQUFBLFVBQWtWN0QsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNUIsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NzQixDQUFDLENBQUN0QixDQUFELENBQTlDLEtBQW9EQSxDQUFwRCxJQUF1REEsQ0FBQyxDQUFDYyxNQUFGLEtBQVdBLE1BQWxFLElBQTBFZCxDQUE5WjtBQUFBLFVBQWdhNkIsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNkQsSUFBcEIsR0FBeUIsV0FBekIsR0FBcUNwRSxDQUFDLENBQUNvRSxJQUFELENBQWpELEtBQTBEQSxJQUExRCxJQUFnRUEsSUFBSSxDQUFDNUUsTUFBTCxLQUFjQSxNQUE5RSxJQUFzRjRFLElBQXhmO0FBQUEsVUFBNmY1RCxDQUFDLEdBQUNGLENBQUMsSUFBRUMsQ0FBSCxJQUFNOEQsUUFBUSxDQUFDLGFBQUQsQ0FBUixFQUFyZ0I7QUFBQSxVQUEraEI1RCxDQUFDLEdBQUNqQixNQUFNLENBQUNJLFNBQXhpQjtBQUFBLFVBQWtqQmMsQ0FBQyxHQUFDRCxDQUFDLENBQUM2RCxRQUF0akI7QUFBQSxVQUErakIzRCxDQUFDLEdBQUM0RCxJQUFJLENBQUNDLEdBQXRrQjtBQUFBLFVBQTBrQjVELENBQUMsR0FBQzJELElBQUksQ0FBQ0UsR0FBamxCO0FBQUEsVUFBcWxCbEQsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDLGVBQU9mLENBQUMsQ0FBQ2tFLElBQUYsQ0FBT0MsR0FBUCxFQUFQO0FBQW9CLE9BQXRuQjs7QUFBdW5CbEcsT0FBQyxDQUFDRSxPQUFGLEdBQVVJLENBQVY7QUFBWSxLQUF6Z0UsRUFBMmdFSSxJQUEzZ0UsQ0FBZ2hFVCxDQUFoaEUsRUFBa2hFLFlBQVU7QUFBQyxhQUFPLElBQVA7QUFBWSxLQUF2QixFQUFsaEU7QUFBNmlFLEdBQTdpTixFQUE4aU4sVUFBU0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYSxhQUFTSyxDQUFULENBQVdOLENBQVgsRUFBYTtBQUFDLFVBQUlDLENBQUMsR0FBQyxLQUFLLENBQVg7QUFBQSxVQUFhSSxDQUFDLEdBQUMsS0FBSyxDQUFwQjtBQUFBLFVBQXNCRSxDQUFDLEdBQUMsS0FBSyxDQUE3Qjs7QUFBK0IsV0FBSU4sQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDRCxDQUFDLENBQUNrQixNQUFaLEVBQW1CakIsQ0FBQyxJQUFFLENBQXRCLEVBQXdCO0FBQUMsWUFBR0ksQ0FBQyxHQUFDTCxDQUFDLENBQUNDLENBQUQsQ0FBSCxFQUFPSSxDQUFDLENBQUM4RixPQUFGLElBQVc5RixDQUFDLENBQUM4RixPQUFGLENBQVVDLEdBQS9CLEVBQW1DLE9BQU0sQ0FBQyxDQUFQO0FBQVMsWUFBRzdGLENBQUMsR0FBQ0YsQ0FBQyxDQUFDZ0csUUFBRixJQUFZL0YsQ0FBQyxDQUFDRCxDQUFDLENBQUNnRyxRQUFILENBQWxCLEVBQStCLE9BQU0sQ0FBQyxDQUFQO0FBQVM7O0FBQUEsYUFBTSxDQUFDLENBQVA7QUFBUzs7QUFBQSxhQUFTaEcsQ0FBVCxHQUFZO0FBQUMsYUFBT3NELE1BQU0sQ0FBQzJDLGdCQUFQLElBQXlCM0MsTUFBTSxDQUFDNEMsc0JBQWhDLElBQXdENUMsTUFBTSxDQUFDNkMsbUJBQXRFO0FBQTBGOztBQUFBLGFBQVNqRyxDQUFULEdBQVk7QUFBQyxhQUFNLENBQUMsQ0FBQ0YsQ0FBQyxFQUFUO0FBQVk7O0FBQUEsYUFBU2dCLENBQVQsQ0FBV3JCLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsVUFBSUssQ0FBQyxHQUFDcUQsTUFBTSxDQUFDRixRQUFiO0FBQUEsVUFBc0JsRCxDQUFDLEdBQUNGLENBQUMsRUFBekI7QUFBQSxVQUE0QmdCLENBQUMsR0FBQyxJQUFJZCxDQUFKLENBQU1lLENBQU4sQ0FBOUI7QUFBdUNDLE9BQUMsR0FBQ3RCLENBQUYsRUFBSW9CLENBQUMsQ0FBQ29GLE9BQUYsQ0FBVW5HLENBQUMsQ0FBQ29HLGVBQVosRUFBNEI7QUFBQ0MsaUJBQVMsRUFBQyxDQUFDLENBQVo7QUFBY0MsZUFBTyxFQUFDLENBQUMsQ0FBdkI7QUFBeUJDLG9CQUFZLEVBQUMsQ0FBQztBQUF2QyxPQUE1QixDQUFKO0FBQTJFOztBQUFBLGFBQVN2RixDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQ0EsT0FBQyxJQUFFQSxDQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQzZHLEtBQUssQ0FBQzNGLFNBQU4sQ0FBZ0JrRSxLQUFoQixDQUFzQjNFLElBQXRCLENBQTJCVixDQUFDLENBQUMrRyxVQUE3QixDQUFOO0FBQUEsWUFBK0MxRyxDQUFDLEdBQUN5RyxLQUFLLENBQUMzRixTQUFOLENBQWdCa0UsS0FBaEIsQ0FBc0IzRSxJQUF0QixDQUEyQlYsQ0FBQyxDQUFDNkcsWUFBN0IsQ0FBakQ7QUFBQSxZQUE0RnRHLENBQUMsR0FBQ04sQ0FBQyxDQUFDK0csTUFBRixDQUFTM0csQ0FBVCxDQUE5RjtBQUEwRyxZQUFHQyxDQUFDLENBQUNDLENBQUQsQ0FBSixFQUFRLE9BQU9nQixDQUFDLEVBQVI7QUFBVyxPQUFuSixDQUFIO0FBQXdKOztBQUFBUixVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRixDQUFDLEdBQUMsYUFBVSxDQUFFLENBQWxCOztBQUFtQnRCLEtBQUMsV0FBRCxHQUFVO0FBQUM0RCxpQkFBVyxFQUFDdEQsQ0FBYjtBQUFlOEQsV0FBSyxFQUFDaEQ7QUFBckIsS0FBVjtBQUFrQyxHQUExdk8sRUFBMnZPLFVBQVNyQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhLGFBQVNLLENBQVQsQ0FBV04sQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFHLEVBQUVELENBQUMsWUFBWUMsQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSTJFLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlEOztBQUFBLGFBQVN2RSxDQUFULEdBQVk7QUFBQyxhQUFPOEcsU0FBUyxDQUFDQyxTQUFWLElBQXFCRCxTQUFTLENBQUNFLE1BQS9CLElBQXVDMUQsTUFBTSxDQUFDMkQsS0FBOUMsSUFBcUQsRUFBNUQ7QUFBK0Q7O0FBQUF2RyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRyxDQUFDLEdBQUMsWUFBVTtBQUFDLGVBQVNQLENBQVQsQ0FBV0EsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxhQUFJLElBQUlLLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0wsQ0FBQyxDQUFDaUIsTUFBaEIsRUFBdUJaLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxjQUFJRCxDQUFDLEdBQUNKLENBQUMsQ0FBQ0ssQ0FBRCxDQUFQO0FBQVdELFdBQUMsQ0FBQ2tILFVBQUYsR0FBYWxILENBQUMsQ0FBQ2tILFVBQUYsSUFBYyxDQUFDLENBQTVCLEVBQThCbEgsQ0FBQyxDQUFDbUgsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVW5ILENBQVYsS0FBY0EsQ0FBQyxDQUFDb0gsUUFBRixHQUFXLENBQUMsQ0FBMUIsQ0FBaEQsRUFBNkUxRyxNQUFNLENBQUNrRyxjQUFQLENBQXNCakgsQ0FBdEIsRUFBd0JLLENBQUMsQ0FBQ3FILEdBQTFCLEVBQThCckgsQ0FBOUIsQ0FBN0U7QUFBOEc7QUFBQzs7QUFBQSxhQUFPLFVBQVNKLENBQVQsRUFBV0ssQ0FBWCxFQUFhRCxDQUFiLEVBQWU7QUFBQyxlQUFPQyxDQUFDLElBQUVOLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDa0IsU0FBSCxFQUFhYixDQUFiLENBQUosRUFBb0JELENBQUMsSUFBRUwsQ0FBQyxDQUFDQyxDQUFELEVBQUdJLENBQUgsQ0FBeEIsRUFBOEJKLENBQXJDO0FBQXVDLE9BQTlEO0FBQStELEtBQWhQLEVBQU47QUFBQSxRQUF5UG9CLENBQUMsR0FBQywwVEFBM1A7QUFBQSxRQUFzakJDLENBQUMsR0FBQyx5a0RBQXhqQjtBQUFBLFFBQWtvRUMsQ0FBQyxHQUFDLHFWQUFwb0U7QUFBQSxRQUEwOUVYLENBQUMsR0FBQyx5a0RBQTU5RTtBQUFBLFFBQXNpSVksQ0FBQyxHQUFDLFlBQVU7QUFBQyxlQUFTeEIsQ0FBVCxHQUFZO0FBQUNNLFNBQUMsQ0FBQyxJQUFELEVBQU1OLENBQU4sQ0FBRDtBQUFVOztBQUFBLGFBQU9PLENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLENBQUM7QUFBQzBILFdBQUcsRUFBQyxPQUFMO0FBQWFSLGFBQUssRUFBQyxpQkFBVTtBQUFDLGNBQUlsSCxDQUFDLEdBQUNLLENBQUMsRUFBUDtBQUFVLGlCQUFNLEVBQUUsQ0FBQ2dCLENBQUMsQ0FBQytELElBQUYsQ0FBT3BGLENBQVAsQ0FBRCxJQUFZLENBQUNzQixDQUFDLENBQUM4RCxJQUFGLENBQU9wRixDQUFDLENBQUMySCxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBUCxDQUFmLENBQU47QUFBNEM7QUFBcEYsT0FBRCxFQUF1RjtBQUFDRCxXQUFHLEVBQUMsUUFBTDtBQUFjUixhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJbEgsQ0FBQyxHQUFDSyxDQUFDLEVBQVA7QUFBVSxpQkFBTSxFQUFFLENBQUNrQixDQUFDLENBQUM2RCxJQUFGLENBQU9wRixDQUFQLENBQUQsSUFBWSxDQUFDWSxDQUFDLENBQUN3RSxJQUFGLENBQU9wRixDQUFDLENBQUMySCxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBUCxDQUFmLENBQU47QUFBNEM7QUFBckYsT0FBdkYsRUFBOEs7QUFBQ0QsV0FBRyxFQUFDLFFBQUw7QUFBY1IsYUFBSyxFQUFDLGlCQUFVO0FBQUMsaUJBQU8sS0FBSzdELE1BQUwsTUFBZSxDQUFDLEtBQUtDLEtBQUwsRUFBdkI7QUFBb0M7QUFBbkUsT0FBOUssQ0FBSCxDQUFELEVBQXlQdEQsQ0FBaFE7QUFBa1EsS0FBcFMsRUFBeGlJOztBQUErMElDLEtBQUMsV0FBRCxHQUFVLElBQUl1QixDQUFKLEVBQVY7QUFBZ0IsR0FBaDFYLEVBQWkxWCxVQUFTeEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYWMsVUFBTSxDQUFDa0csY0FBUCxDQUFzQmhILENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUNpSCxXQUFLLEVBQUMsQ0FBQztBQUFSLEtBQXJDOztBQUFpRCxRQUFJNUcsQ0FBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxFQUFiLEVBQWU7QUFBQyxVQUFJRCxDQUFDLEdBQUNMLENBQUMsQ0FBQ2tELElBQUYsQ0FBTzBFLFlBQVAsQ0FBb0IsZUFBcEIsQ0FBTjtBQUEyQzNILE9BQUMsR0FBQ0QsQ0FBQyxDQUFDNkgsUUFBSixHQUFhN0gsQ0FBQyxDQUFDa0QsSUFBRixDQUFPNEUsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBckIsQ0FBYixHQUFpRCxlQUFhLE9BQU8xSCxDQUFwQixLQUF3QixZQUFVQSxDQUFWLElBQWEsQ0FBQ0MsRUFBRCxJQUFJLFdBQVNELENBQWxELEtBQXNETCxDQUFDLENBQUNrRCxJQUFGLENBQU80RSxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixhQUF4QixDQUF2RztBQUE4SSxLQUEvTTtBQUFBLFFBQWdOM0gsQ0FBQyxHQUFDLFdBQVNMLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSUksQ0FBQyxHQUFDc0QsTUFBTSxDQUFDc0UsV0FBYjtBQUFBLFVBQXlCMUgsQ0FBQyxHQUFDb0QsTUFBTSxDQUFDdUUsV0FBbEM7QUFBOENsSSxPQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV3FCLENBQVgsRUFBYTtBQUFDZixTQUFDLENBQUNOLENBQUQsRUFBR08sQ0FBQyxHQUFDRixDQUFMLEVBQU9KLENBQVAsQ0FBRDtBQUFXLE9BQW5DO0FBQXFDLEtBQW5UOztBQUFvVEEsS0FBQyxXQUFELEdBQVVJLENBQVY7QUFBWSxHQUE3dFksRUFBOHRZLFVBQVNMLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQzs7QUFBYSxhQUFTRCxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLGFBQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDYyxVQUFMLEdBQWdCZCxDQUFoQixHQUFrQjtBQUFDLG1CQUFRQTtBQUFULE9BQXpCO0FBQXFDOztBQUFBZSxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRyxDQUFDLEdBQUNELENBQUMsQ0FBQyxFQUFELENBQVA7QUFBQSxRQUFZZSxDQUFDLEdBQUNoQixDQUFDLENBQUNFLENBQUQsQ0FBZjtBQUFBLFFBQW1CZSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV00sQ0FBWCxFQUFhO0FBQUNOLFNBQUMsQ0FBQ2tELElBQUYsQ0FBTzRFLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCLEdBQWlDL0gsQ0FBQyxDQUFDNkgsUUFBRixHQUFXLENBQUMsR0FBRXhHLENBQUMsV0FBSixFQUFjckIsQ0FBQyxDQUFDa0QsSUFBaEIsRUFBcUJqRCxDQUFDLENBQUNtQyxNQUF2QixDQUE1QztBQUEyRSxPQUFuRyxHQUFxR3BDLENBQTVHO0FBQThHLEtBQWpKOztBQUFrSkMsS0FBQyxXQUFELEdBQVVxQixDQUFWO0FBQVksR0FBNy9ZLEVBQTgvWSxVQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDOztBQUFhLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsYUFBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNjLFVBQUwsR0FBZ0JkLENBQWhCLEdBQWtCO0FBQUMsbUJBQVFBO0FBQVQsT0FBekI7QUFBcUM7O0FBQUFlLFVBQU0sQ0FBQ2tHLGNBQVAsQ0FBc0JoSCxDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDaUgsV0FBSyxFQUFDLENBQUM7QUFBUixLQUFyQzs7QUFBaUQsUUFBSTNHLENBQUMsR0FBQ0QsQ0FBQyxDQUFDLEVBQUQsQ0FBUDtBQUFBLFFBQVllLENBQUMsR0FBQ2hCLENBQUMsQ0FBQ0UsQ0FBRCxDQUFmO0FBQUEsUUFBbUJlLENBQUMsR0FBQyxXQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxVQUFJSyxDQUFDLEdBQUMsQ0FBTjtBQUFBLFVBQVFELENBQUMsR0FBQyxDQUFWO0FBQUEsVUFBWUUsQ0FBQyxHQUFDb0QsTUFBTSxDQUFDdUUsV0FBckI7QUFBQSxVQUFpQzVHLENBQUMsR0FBQztBQUFDYyxjQUFNLEVBQUNwQyxDQUFDLENBQUM0SCxZQUFGLENBQWUsaUJBQWYsQ0FBUjtBQUEwQ08sY0FBTSxFQUFDbkksQ0FBQyxDQUFDNEgsWUFBRixDQUFlLGlCQUFmLENBQWpEO0FBQW1GUSx1QkFBZSxFQUFDcEksQ0FBQyxDQUFDNEgsWUFBRixDQUFlLDJCQUFmO0FBQW5HLE9BQW5DOztBQUFtTCxjQUFPdEcsQ0FBQyxDQUFDYyxNQUFGLElBQVUsQ0FBQ2lHLEtBQUssQ0FBQy9HLENBQUMsQ0FBQ2MsTUFBSCxDQUFoQixLQUE2Qi9CLENBQUMsR0FBQ3FGLFFBQVEsQ0FBQ3BFLENBQUMsQ0FBQ2MsTUFBSCxDQUF2QyxHQUFtRGQsQ0FBQyxDQUFDNkcsTUFBRixJQUFVMUUsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEJoSCxDQUFDLENBQUM2RyxNQUE1QixDQUFWLEtBQWdEbkksQ0FBQyxHQUFDeUQsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEJoSCxDQUFDLENBQUM2RyxNQUE1QixFQUFvQyxDQUFwQyxDQUFsRCxDQUFuRCxFQUE2STdILENBQUMsR0FBQyxDQUFDLEdBQUVlLENBQUMsV0FBSixFQUFjckIsQ0FBZCxFQUFpQnVJLEdBQWhLLEVBQW9LakgsQ0FBQyxDQUFDOEcsZUFBN0s7QUFBOEwsYUFBSSxZQUFKO0FBQWlCOztBQUFNLGFBQUksZUFBSjtBQUFvQjlILFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBRixHQUFlLENBQWxCO0FBQW9COztBQUFNLGFBQUksZUFBSjtBQUFvQmxJLFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBTDtBQUFrQjs7QUFBTSxhQUFJLFlBQUo7QUFBaUJsSSxXQUFDLElBQUVDLENBQUMsR0FBQyxDQUFMO0FBQU87O0FBQU0sYUFBSSxlQUFKO0FBQW9CRCxXQUFDLElBQUVDLENBQUMsR0FBQyxDQUFGLEdBQUlQLENBQUMsQ0FBQ3dJLFlBQVQ7QUFBc0I7O0FBQU0sYUFBSSxlQUFKO0FBQW9CbEksV0FBQyxJQUFFQyxDQUFDLEdBQUMsQ0FBRixHQUFJUCxDQUFDLENBQUN3SSxZQUFGLEdBQWUsQ0FBdEI7QUFBd0I7O0FBQU0sYUFBSSxTQUFKO0FBQWNsSSxXQUFDLElBQUVDLENBQUg7QUFBSzs7QUFBTSxhQUFJLFlBQUo7QUFBaUJELFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBRixHQUFlakksQ0FBbEI7QUFBb0I7O0FBQU0sYUFBSSxZQUFKO0FBQWlCRCxXQUFDLElBQUVOLENBQUMsQ0FBQ3dJLFlBQUYsR0FBZSxDQUFmLEdBQWlCakksQ0FBcEI7QUFBcGdCOztBQUEwaEIsYUFBT2UsQ0FBQyxDQUFDOEcsZUFBRixJQUFtQjlHLENBQUMsQ0FBQ2MsTUFBckIsSUFBNkJpRyxLQUFLLENBQUNwSSxDQUFELENBQWxDLEtBQXdDSSxDQUFDLEdBQUNKLENBQTFDLEdBQTZDSyxDQUFDLEdBQUNELENBQXREO0FBQXdELEtBQXh5Qjs7QUFBeXlCSixLQUFDLFdBQUQsR0FBVXFCLENBQVY7QUFBWSxHQUFwN2EsRUFBcTdhLFVBQVN0QixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhYyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUk1RyxDQUFDLEdBQUMsV0FBU04sQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBTixFQUFRSyxDQUFDLEdBQUMsQ0FBZCxFQUFnQk4sQ0FBQyxJQUFFLENBQUNxSSxLQUFLLENBQUNySSxDQUFDLENBQUN5SSxVQUFILENBQVQsSUFBeUIsQ0FBQ0osS0FBSyxDQUFDckksQ0FBQyxDQUFDMEksU0FBSCxDQUEvQztBQUE4RHpJLFNBQUMsSUFBRUQsQ0FBQyxDQUFDeUksVUFBRixJQUFjLFVBQVF6SSxDQUFDLENBQUMySSxPQUFWLEdBQWtCM0ksQ0FBQyxDQUFDNEksVUFBcEIsR0FBK0IsQ0FBN0MsQ0FBSCxFQUFtRHRJLENBQUMsSUFBRU4sQ0FBQyxDQUFDMEksU0FBRixJQUFhLFVBQVExSSxDQUFDLENBQUMySSxPQUFWLEdBQWtCM0ksQ0FBQyxDQUFDNkksU0FBcEIsR0FBOEIsQ0FBM0MsQ0FBdEQsRUFBb0c3SSxDQUFDLEdBQUNBLENBQUMsQ0FBQzhJLFlBQXhHO0FBQTlEOztBQUFtTCxhQUFNO0FBQUNQLFdBQUcsRUFBQ2pJLENBQUw7QUFBT3lJLFlBQUksRUFBQzlJO0FBQVosT0FBTjtBQUFxQixLQUExTjs7QUFBMk5BLEtBQUMsV0FBRCxHQUFVSyxDQUFWO0FBQVksR0FBeHViLEVBQXl1YixVQUFTTixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhYyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUk1RyxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTTixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLEdBQUNBLENBQUMsSUFBRXlELFFBQVEsQ0FBQzZFLGdCQUFULENBQTBCLFlBQTFCLENBQUwsRUFBNkN4QixLQUFLLENBQUMzRixTQUFOLENBQWdCNkgsR0FBaEIsQ0FBb0J0SSxJQUFwQixDQUF5QlYsQ0FBekIsRUFBMkIsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsZUFBTTtBQUFDa0QsY0FBSSxFQUFDbEQ7QUFBTixTQUFOO0FBQWUsT0FBdEQsQ0FBcEQ7QUFBNEcsS0FBOUg7O0FBQStIQyxLQUFDLFdBQUQsR0FBVUssQ0FBVjtBQUFZLEdBQWg4YixDQUEzTSxDQUFQO0FBQXFwYyxDQUEvMWMsQ0FBRCxDOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUUsV0FBUzJJLE9BQVQsRUFBa0I7QUFDaEI7O0FBQ0EsTUFBSSxJQUFKLEVBQWdEO0FBQzVDN0kscUNBQU8sQ0FBQywyQ0FBRCxDQUFELG9DQUFhNkksT0FBYjtBQUFBO0FBQUE7QUFBQSxvR0FBTjtBQUNILEdBRkQsTUFFTyxFQUlOO0FBRUosQ0FWQyxFQVVBLFVBQVNDLENBQVQsRUFBWTtBQUNWOztBQUNBLE1BQUlDLEtBQUssR0FBR3hGLE1BQU0sQ0FBQ3dGLEtBQVAsSUFBZ0IsRUFBNUI7O0FBRUFBLE9BQUssR0FBSSxZQUFXO0FBRWhCLFFBQUlDLFdBQVcsR0FBRyxDQUFsQjs7QUFFQSxhQUFTRCxLQUFULENBQWVFLE9BQWYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBRTlCLFVBQUk5RixDQUFDLEdBQUcsSUFBUjtBQUFBLFVBQWMrRixZQUFkOztBQUVBL0YsT0FBQyxDQUFDZ0csUUFBRixHQUFhO0FBQ1RDLHFCQUFhLEVBQUUsSUFETjtBQUVUQyxzQkFBYyxFQUFFLEtBRlA7QUFHVEMsb0JBQVksRUFBRVQsQ0FBQyxDQUFDRyxPQUFELENBSE47QUFJVE8sa0JBQVUsRUFBRVYsQ0FBQyxDQUFDRyxPQUFELENBSko7QUFLVFEsY0FBTSxFQUFFLElBTEM7QUFNVEMsZ0JBQVEsRUFBRSxJQU5EO0FBT1RDLGlCQUFTLEVBQUUsa0ZBUEY7QUFRVEMsaUJBQVMsRUFBRSwwRUFSRjtBQVNUQyxnQkFBUSxFQUFFLEtBVEQ7QUFVVEMscUJBQWEsRUFBRSxJQVZOO0FBV1RDLGtCQUFVLEVBQUUsS0FYSDtBQVlUQyxxQkFBYSxFQUFFLE1BWk47QUFhVEMsZUFBTyxFQUFFLE1BYkE7QUFjVEMsb0JBQVksRUFBRSxzQkFBU0MsTUFBVCxFQUFpQmhLLENBQWpCLEVBQW9CO0FBQzlCLGlCQUFPMkksQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJzQixJQUE5QixDQUFtQ2pLLENBQUMsR0FBRyxDQUF2QyxDQUFQO0FBQ0gsU0FoQlE7QUFpQlRrSyxZQUFJLEVBQUUsS0FqQkc7QUFrQlRDLGlCQUFTLEVBQUUsWUFsQkY7QUFtQlRDLGlCQUFTLEVBQUUsSUFuQkY7QUFvQlRySSxjQUFNLEVBQUUsUUFwQkM7QUFxQlRzSSxvQkFBWSxFQUFFLElBckJMO0FBc0JUQyxZQUFJLEVBQUUsS0F0Qkc7QUF1QlRDLHFCQUFhLEVBQUUsS0F2Qk47QUF3QlRDLHFCQUFhLEVBQUUsS0F4Qk47QUF5QlRDLGdCQUFRLEVBQUUsSUF6QkQ7QUEwQlRDLG9CQUFZLEVBQUUsQ0ExQkw7QUEyQlRDLGdCQUFRLEVBQUUsVUEzQkQ7QUE0QlRDLG1CQUFXLEVBQUUsS0E1Qko7QUE2QlRDLG9CQUFZLEVBQUUsSUE3Qkw7QUE4QlRDLG9CQUFZLEVBQUUsSUE5Qkw7QUErQlRDLHdCQUFnQixFQUFFLEtBL0JUO0FBZ0NUQyxpQkFBUyxFQUFFLFFBaENGO0FBaUNUQyxrQkFBVSxFQUFFLElBakNIO0FBa0NUQyxZQUFJLEVBQUUsQ0FsQ0c7QUFtQ1RDLFdBQUcsRUFBRSxLQW5DSTtBQW9DVEMsYUFBSyxFQUFFLEVBcENFO0FBcUNUQyxvQkFBWSxFQUFFLENBckNMO0FBc0NUQyxvQkFBWSxFQUFFLENBdENMO0FBdUNUQyxzQkFBYyxFQUFFLENBdkNQO0FBd0NUQyxhQUFLLEVBQUUsR0F4Q0U7QUF5Q1RDLGFBQUssRUFBRSxJQXpDRTtBQTBDVEMsb0JBQVksRUFBRSxLQTFDTDtBQTJDVEMsaUJBQVMsRUFBRSxJQTNDRjtBQTRDVEMsc0JBQWMsRUFBRSxDQTVDUDtBQTZDVEMsY0FBTSxFQUFFLElBN0NDO0FBOENUQyxvQkFBWSxFQUFFLElBOUNMO0FBK0NUQyxxQkFBYSxFQUFFLEtBL0NOO0FBZ0RUQyxnQkFBUSxFQUFFLEtBaEREO0FBaURUQyx1QkFBZSxFQUFFLEtBakRSO0FBa0RUQyxzQkFBYyxFQUFFLElBbERQO0FBbURUQyxjQUFNLEVBQUU7QUFuREMsT0FBYjtBQXNEQWxKLE9BQUMsQ0FBQ21KLFFBQUYsR0FBYTtBQUNUQyxpQkFBUyxFQUFFLEtBREY7QUFFVEMsZ0JBQVEsRUFBRSxLQUZEO0FBR1RDLHFCQUFhLEVBQUUsSUFITjtBQUlUQyx3QkFBZ0IsRUFBRSxDQUpUO0FBS1RDLG1CQUFXLEVBQUUsSUFMSjtBQU1UQyxvQkFBWSxFQUFFLENBTkw7QUFPVEMsaUJBQVMsRUFBRSxDQVBGO0FBUVRDLGFBQUssRUFBRSxJQVJFO0FBU1RDLGlCQUFTLEVBQUUsSUFURjtBQVVUQyxrQkFBVSxFQUFFLElBVkg7QUFXVEMsaUJBQVMsRUFBRSxDQVhGO0FBWVRDLGtCQUFVLEVBQUUsSUFaSDtBQWFUQyxrQkFBVSxFQUFFLElBYkg7QUFjVEMsaUJBQVMsRUFBRSxLQWRGO0FBZVRDLGtCQUFVLEVBQUUsSUFmSDtBQWdCVEMsa0JBQVUsRUFBRSxJQWhCSDtBQWlCVEMsbUJBQVcsRUFBRSxJQWpCSjtBQWtCVEMsZUFBTyxFQUFFLElBbEJBO0FBbUJUQyxlQUFPLEVBQUUsS0FuQkE7QUFvQlRDLG1CQUFXLEVBQUUsQ0FwQko7QUFxQlRDLGlCQUFTLEVBQUUsSUFyQkY7QUFzQlRDLGVBQU8sRUFBRSxLQXRCQTtBQXVCVEMsYUFBSyxFQUFFLElBdkJFO0FBd0JUQyxtQkFBVyxFQUFFLEVBeEJKO0FBeUJUQyx5QkFBaUIsRUFBRSxLQXpCVjtBQTBCVEMsaUJBQVMsRUFBRTtBQTFCRixPQUFiO0FBNkJBbkYsT0FBQyxDQUFDb0YsTUFBRixDQUFTOUssQ0FBVCxFQUFZQSxDQUFDLENBQUNtSixRQUFkO0FBRUFuSixPQUFDLENBQUMrSyxnQkFBRixHQUFxQixJQUFyQjtBQUNBL0ssT0FBQyxDQUFDZ0wsUUFBRixHQUFhLElBQWI7QUFDQWhMLE9BQUMsQ0FBQ2lMLFFBQUYsR0FBYSxJQUFiO0FBQ0FqTCxPQUFDLENBQUNrTCxXQUFGLEdBQWdCLEVBQWhCO0FBQ0FsTCxPQUFDLENBQUNtTCxrQkFBRixHQUF1QixFQUF2QjtBQUNBbkwsT0FBQyxDQUFDb0wsY0FBRixHQUFtQixLQUFuQjtBQUNBcEwsT0FBQyxDQUFDcUwsUUFBRixHQUFhLEtBQWI7QUFDQXJMLE9BQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFDQXRMLE9BQUMsQ0FBQ3VMLE1BQUYsR0FBVyxRQUFYO0FBQ0F2TCxPQUFDLENBQUN3TCxNQUFGLEdBQVcsSUFBWDtBQUNBeEwsT0FBQyxDQUFDeUwsWUFBRixHQUFpQixJQUFqQjtBQUNBekwsT0FBQyxDQUFDK0gsU0FBRixHQUFjLElBQWQ7QUFDQS9ILE9BQUMsQ0FBQzBMLFFBQUYsR0FBYSxDQUFiO0FBQ0ExTCxPQUFDLENBQUMyTCxXQUFGLEdBQWdCLElBQWhCO0FBQ0EzTCxPQUFDLENBQUM0TCxPQUFGLEdBQVlsRyxDQUFDLENBQUNHLE9BQUQsQ0FBYjtBQUNBN0YsT0FBQyxDQUFDNkwsWUFBRixHQUFpQixJQUFqQjtBQUNBN0wsT0FBQyxDQUFDOEwsYUFBRixHQUFrQixJQUFsQjtBQUNBOUwsT0FBQyxDQUFDK0wsY0FBRixHQUFtQixJQUFuQjtBQUNBL0wsT0FBQyxDQUFDZ00sZ0JBQUYsR0FBcUIsa0JBQXJCO0FBQ0FoTSxPQUFDLENBQUNpTSxXQUFGLEdBQWdCLENBQWhCO0FBQ0FqTSxPQUFDLENBQUNrTSxXQUFGLEdBQWdCLElBQWhCO0FBRUFuRyxrQkFBWSxHQUFHTCxDQUFDLENBQUNHLE9BQUQsQ0FBRCxDQUFXc0csSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUEzQztBQUVBbk0sT0FBQyxDQUFDb00sT0FBRixHQUFZMUcsQ0FBQyxDQUFDb0YsTUFBRixDQUFTLEVBQVQsRUFBYTlLLENBQUMsQ0FBQ2dHLFFBQWYsRUFBeUJGLFFBQXpCLEVBQW1DQyxZQUFuQyxDQUFaO0FBRUEvRixPQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFFQXpILE9BQUMsQ0FBQ3FNLGdCQUFGLEdBQXFCck0sQ0FBQyxDQUFDb00sT0FBdkI7O0FBRUEsVUFBSSxPQUFPbk0sUUFBUSxDQUFDcU0sU0FBaEIsS0FBOEIsV0FBbEMsRUFBK0M7QUFDM0N0TSxTQUFDLENBQUN1TCxNQUFGLEdBQVcsV0FBWDtBQUNBdkwsU0FBQyxDQUFDZ00sZ0JBQUYsR0FBcUIscUJBQXJCO0FBQ0gsT0FIRCxNQUdPLElBQUksT0FBTy9MLFFBQVEsQ0FBQ3NNLFlBQWhCLEtBQWlDLFdBQXJDLEVBQWtEO0FBQ3JEdk0sU0FBQyxDQUFDdUwsTUFBRixHQUFXLGNBQVg7QUFDQXZMLFNBQUMsQ0FBQ2dNLGdCQUFGLEdBQXFCLHdCQUFyQjtBQUNIOztBQUVEaE0sT0FBQyxDQUFDd00sUUFBRixHQUFhOUcsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDd00sUUFBVixFQUFvQnhNLENBQXBCLENBQWI7QUFDQUEsT0FBQyxDQUFDME0sYUFBRixHQUFrQmhILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzBNLGFBQVYsRUFBeUIxTSxDQUF6QixDQUFsQjtBQUNBQSxPQUFDLENBQUMyTSxnQkFBRixHQUFxQmpILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzJNLGdCQUFWLEVBQTRCM00sQ0FBNUIsQ0FBckI7QUFDQUEsT0FBQyxDQUFDNE0sV0FBRixHQUFnQmxILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzRNLFdBQVYsRUFBdUI1TSxDQUF2QixDQUFoQjtBQUNBQSxPQUFDLENBQUM2TSxZQUFGLEdBQWlCbkgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDNk0sWUFBVixFQUF3QjdNLENBQXhCLENBQWpCO0FBQ0FBLE9BQUMsQ0FBQzhNLGFBQUYsR0FBa0JwSCxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUM4TSxhQUFWLEVBQXlCOU0sQ0FBekIsQ0FBbEI7QUFDQUEsT0FBQyxDQUFDK00sV0FBRixHQUFnQnJILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQytNLFdBQVYsRUFBdUIvTSxDQUF2QixDQUFoQjtBQUNBQSxPQUFDLENBQUNnTixZQUFGLEdBQWlCdEgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDZ04sWUFBVixFQUF3QmhOLENBQXhCLENBQWpCO0FBQ0FBLE9BQUMsQ0FBQ2lOLFdBQUYsR0FBZ0J2SCxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNpTixXQUFWLEVBQXVCak4sQ0FBdkIsQ0FBaEI7QUFDQUEsT0FBQyxDQUFDa04sVUFBRixHQUFleEgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDa04sVUFBVixFQUFzQmxOLENBQXRCLENBQWY7QUFFQUEsT0FBQyxDQUFDNEYsV0FBRixHQUFnQkEsV0FBVyxFQUEzQixDQTFJOEIsQ0E0STlCO0FBQ0E7QUFDQTs7QUFDQTVGLE9BQUMsQ0FBQ21OLFFBQUYsR0FBYSwyQkFBYjs7QUFHQW5OLE9BQUMsQ0FBQ29OLG1CQUFGOztBQUNBcE4sT0FBQyxDQUFDYyxJQUFGLENBQU8sSUFBUDtBQUVIOztBQUVELFdBQU82RSxLQUFQO0FBRUgsR0E3SlEsRUFBVDs7QUErSkFBLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IwUCxXQUFoQixHQUE4QixZQUFXO0FBQ3JDLFFBQUlyTixDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixFQUFvQ0MsSUFBcEMsQ0FBeUM7QUFDckMscUJBQWU7QUFEc0IsS0FBekMsRUFFR0QsSUFGSCxDQUVRLDBCQUZSLEVBRW9DQyxJQUZwQyxDQUV5QztBQUNyQyxrQkFBWTtBQUR5QixLQUZ6QztBQU1ILEdBVEQ7O0FBV0E1SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlAsUUFBaEIsR0FBMkI3SCxLQUFLLENBQUNoSSxTQUFOLENBQWdCOFAsUUFBaEIsR0FBMkIsVUFBU0MsTUFBVCxFQUFpQkMsS0FBakIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBRXJGLFFBQUk1TixDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJLE9BQU8yTixLQUFQLEtBQWtCLFNBQXRCLEVBQWlDO0FBQzdCQyxlQUFTLEdBQUdELEtBQVo7QUFDQUEsV0FBSyxHQUFHLElBQVI7QUFDSCxLQUhELE1BR08sSUFBSUEsS0FBSyxHQUFHLENBQVIsSUFBY0EsS0FBSyxJQUFJM04sQ0FBQyxDQUFDa0ssVUFBN0IsRUFBMEM7QUFDN0MsYUFBTyxLQUFQO0FBQ0g7O0FBRURsSyxLQUFDLENBQUM2TixNQUFGOztBQUVBLFFBQUksT0FBT0YsS0FBUCxLQUFrQixRQUF0QixFQUFnQztBQUM1QixVQUFJQSxLQUFLLEtBQUssQ0FBVixJQUFlM04sQ0FBQyxDQUFDcUssT0FBRixDQUFVM00sTUFBVixLQUFxQixDQUF4QyxFQUEyQztBQUN2Q2dJLFNBQUMsQ0FBQ2dJLE1BQUQsQ0FBRCxDQUFVSSxRQUFWLENBQW1COU4sQ0FBQyxDQUFDb0ssV0FBckI7QUFDSCxPQUZELE1BRU8sSUFBSXdELFNBQUosRUFBZTtBQUNsQmxJLFNBQUMsQ0FBQ2dJLE1BQUQsQ0FBRCxDQUFVSyxZQUFWLENBQXVCL04sQ0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhTCxLQUFiLENBQXZCO0FBQ0gsT0FGTSxNQUVBO0FBQ0hqSSxTQUFDLENBQUNnSSxNQUFELENBQUQsQ0FBVU8sV0FBVixDQUFzQmpPLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJELEVBQVYsQ0FBYUwsS0FBYixDQUF0QjtBQUNIO0FBQ0osS0FSRCxNQVFPO0FBQ0gsVUFBSUMsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3BCbEksU0FBQyxDQUFDZ0ksTUFBRCxDQUFELENBQVVRLFNBQVYsQ0FBb0JsTyxDQUFDLENBQUNvSyxXQUF0QjtBQUNILE9BRkQsTUFFTztBQUNIMUUsU0FBQyxDQUFDZ0ksTUFBRCxDQUFELENBQVVJLFFBQVYsQ0FBbUI5TixDQUFDLENBQUNvSyxXQUFyQjtBQUNIO0FBQ0o7O0FBRURwSyxLQUFDLENBQUNxSyxPQUFGLEdBQVlySyxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLEtBQUt1SixPQUFMLENBQWFqRSxLQUFwQyxDQUFaOztBQUVBbkksS0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixLQUFLdUosT0FBTCxDQUFhakUsS0FBcEMsRUFBMkNnRyxNQUEzQzs7QUFFQW5PLEtBQUMsQ0FBQ29LLFdBQUYsQ0FBY2dFLE1BQWQsQ0FBcUJwTyxDQUFDLENBQUNxSyxPQUF2Qjs7QUFFQXJLLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENILE9BQUMsQ0FBQ0csT0FBRCxDQUFELENBQVcwSCxJQUFYLENBQWdCLGtCQUFoQixFQUFvQ0ksS0FBcEM7QUFDSCxLQUZEOztBQUlBM04sS0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssS0FBQyxDQUFDc08sTUFBRjtBQUVILEdBM0NEOztBQTZDQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I0USxhQUFoQixHQUFnQyxZQUFXO0FBQ3ZDLFFBQUl2TyxDQUFDLEdBQUcsSUFBUjs7QUFDQSxRQUFJQSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEtBQTJCLENBQTNCLElBQWdDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVbEcsY0FBVixLQUE2QixJQUE3RCxJQUFxRWxHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBaEcsRUFBdUc7QUFDbkcsVUFBSXlGLFlBQVksR0FBR3hPLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJELEVBQVYsQ0FBYWhPLENBQUMsQ0FBQ3lKLFlBQWYsRUFBNkJnRixXQUE3QixDQUF5QyxJQUF6QyxDQUFuQjs7QUFDQXpPLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUWdFLE9BQVIsQ0FBZ0I7QUFDWkMsY0FBTSxFQUFFSDtBQURJLE9BQWhCLEVBRUd4TyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiO0FBR0g7QUFDSixHQVJEOztBQVVBNUMsT0FBSyxDQUFDaEksU0FBTixDQUFnQmlSLFlBQWhCLEdBQStCLFVBQVNDLFVBQVQsRUFBcUJDLFFBQXJCLEVBQStCO0FBRTFELFFBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUFBLFFBQ0kvTyxDQUFDLEdBQUcsSUFEUjs7QUFHQUEsS0FBQyxDQUFDdU8sYUFBRjs7QUFFQSxRQUFJdk8sQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUFsQixJQUEwQmxJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBckQsRUFBNEQ7QUFDeEQ4RixnQkFBVSxHQUFHLENBQUNBLFVBQWQ7QUFDSDs7QUFDRCxRQUFJN08sQ0FBQyxDQUFDNEssaUJBQUYsS0FBd0IsS0FBNUIsRUFBbUM7QUFDL0IsVUFBSTVLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIvSSxTQUFDLENBQUNvSyxXQUFGLENBQWNzRSxPQUFkLENBQXNCO0FBQ2xCbkosY0FBSSxFQUFFc0o7QUFEWSxTQUF0QixFQUVHN08sQ0FBQyxDQUFDb00sT0FBRixDQUFVN0QsS0FGYixFQUVvQnZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXROLE1BRjlCLEVBRXNDZ1EsUUFGdEM7QUFHSCxPQUpELE1BSU87QUFDSDlPLFNBQUMsQ0FBQ29LLFdBQUYsQ0FBY3NFLE9BQWQsQ0FBc0I7QUFDbEIzSixhQUFHLEVBQUU4SjtBQURhLFNBQXRCLEVBRUc3TyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiLEVBRW9CdkksQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGOUIsRUFFc0NnUSxRQUZ0QztBQUdIO0FBRUosS0FYRCxNQVdPO0FBRUgsVUFBSTlPLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFDNUIsWUFBSXBMLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEJsSSxXQUFDLENBQUN3SixXQUFGLEdBQWdCLENBQUV4SixDQUFDLENBQUN3SixXQUFwQjtBQUNIOztBQUNEOUQsU0FBQyxDQUFDO0FBQ0VzSixtQkFBUyxFQUFFaFAsQ0FBQyxDQUFDd0o7QUFEZixTQUFELENBQUQsQ0FFR2tGLE9BRkgsQ0FFVztBQUNQTSxtQkFBUyxFQUFFSDtBQURKLFNBRlgsRUFJRztBQUNDOVAsa0JBQVEsRUFBRWlCLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdELEtBRHJCO0FBRUN6SixnQkFBTSxFQUFFa0IsQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGbkI7QUFHQ21RLGNBQUksRUFBRSxjQUFTdk0sR0FBVCxFQUFjO0FBQ2hCQSxlQUFHLEdBQUdKLElBQUksQ0FBQzRNLElBQUwsQ0FBVXhNLEdBQVYsQ0FBTjs7QUFDQSxnQkFBSTFDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUJnRyx1QkFBUyxDQUFDL08sQ0FBQyxDQUFDZ0wsUUFBSCxDQUFULEdBQXdCLGVBQ3BCdEksR0FEb0IsR0FDZCxVQURWOztBQUVBMUMsZUFBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQkosU0FBbEI7QUFDSCxhQUpELE1BSU87QUFDSEEsdUJBQVMsQ0FBQy9PLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBVCxHQUF3QixtQkFDcEJ0SSxHQURvQixHQUNkLEtBRFY7O0FBRUExQyxlQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCSixTQUFsQjtBQUNIO0FBQ0osV0FkRjtBQWVDSyxrQkFBUSxFQUFFLG9CQUFXO0FBQ2pCLGdCQUFJTixRQUFKLEVBQWM7QUFDVkEsc0JBQVEsQ0FBQzVSLElBQVQ7QUFDSDtBQUNKO0FBbkJGLFNBSkg7QUEwQkgsT0E5QkQsTUE4Qk87QUFFSDhDLFNBQUMsQ0FBQ3FQLGVBQUY7O0FBQ0FSLGtCQUFVLEdBQUd2TSxJQUFJLENBQUM0TSxJQUFMLENBQVVMLFVBQVYsQ0FBYjs7QUFFQSxZQUFJN08sQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QmdHLG1CQUFTLENBQUMvTyxDQUFDLENBQUNnTCxRQUFILENBQVQsR0FBd0IsaUJBQWlCNkQsVUFBakIsR0FBOEIsZUFBdEQ7QUFDSCxTQUZELE1BRU87QUFDSEUsbUJBQVMsQ0FBQy9PLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBVCxHQUF3QixxQkFBcUI2RCxVQUFyQixHQUFrQyxVQUExRDtBQUNIOztBQUNEN08sU0FBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQkosU0FBbEI7O0FBRUEsWUFBSUQsUUFBSixFQUFjO0FBQ1Y1TixvQkFBVSxDQUFDLFlBQVc7QUFFbEJsQixhQUFDLENBQUNzUCxpQkFBRjs7QUFFQVIsb0JBQVEsQ0FBQzVSLElBQVQ7QUFDSCxXQUxTLEVBS1A4QyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUxILENBQVY7QUFNSDtBQUVKO0FBRUo7QUFFSixHQTlFRDs7QUFnRkE1QyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNFIsWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJdlAsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJc0csUUFBUSxHQUFHdEcsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFEekI7O0FBR0EsUUFBS0EsUUFBUSxJQUFJQSxRQUFRLEtBQUssSUFBOUIsRUFBcUM7QUFDakNBLGNBQVEsR0FBR1osQ0FBQyxDQUFDWSxRQUFELENBQUQsQ0FBWWtKLEdBQVosQ0FBZ0J4UCxDQUFDLENBQUM0TCxPQUFsQixDQUFYO0FBQ0g7O0FBRUQsV0FBT3RGLFFBQVA7QUFFSCxHQVhEOztBQWFBWCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMkksUUFBaEIsR0FBMkIsVUFBU3FILEtBQVQsRUFBZ0I7QUFFdkMsUUFBSTNOLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXNHLFFBQVEsR0FBR3RHLENBQUMsQ0FBQ3VQLFlBQUYsRUFEZjs7QUFHQSxRQUFLakosUUFBUSxLQUFLLElBQWIsSUFBcUIsUUFBT0EsUUFBUCxNQUFvQixRQUE5QyxFQUF5RDtBQUNyREEsY0FBUSxDQUFDK0gsSUFBVCxDQUFjLFlBQVc7QUFDckIsWUFBSW9CLE1BQU0sR0FBRy9KLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdLLEtBQVIsQ0FBYyxVQUFkLENBQWI7O0FBQ0EsWUFBRyxDQUFDRCxNQUFNLENBQUM1RSxTQUFYLEVBQXNCO0FBQ2xCNEUsZ0JBQU0sQ0FBQ0UsWUFBUCxDQUFvQmhDLEtBQXBCLEVBQTJCLElBQTNCO0FBQ0g7QUFDSixPQUxEO0FBTUg7QUFFSixHQWREOztBQWdCQWhJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IwUixlQUFoQixHQUFrQyxVQUFTbEgsS0FBVCxFQUFnQjtBQUU5QyxRQUFJbkksQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFAsVUFBVSxHQUFHLEVBRGpCOztBQUdBLFFBQUk1UCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCdUksZ0JBQVUsQ0FBQzVQLENBQUMsQ0FBQytMLGNBQUgsQ0FBVixHQUErQi9MLENBQUMsQ0FBQzhMLGFBQUYsR0FBa0IsR0FBbEIsR0FBd0I5TCxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUFsQyxHQUEwQyxLQUExQyxHQUFrRHZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZGLE9BQTNGO0FBQ0gsS0FGRCxNQUVPO0FBQ0grSSxnQkFBVSxDQUFDNVAsQ0FBQyxDQUFDK0wsY0FBSCxDQUFWLEdBQStCLGFBQWEvTCxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUF2QixHQUErQixLQUEvQixHQUF1Q3ZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZGLE9BQWhGO0FBQ0g7O0FBRUQsUUFBSTdHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJySCxPQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCUyxVQUFsQjtBQUNILEtBRkQsTUFFTztBQUNINVAsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhN0YsS0FBYixFQUFvQmdILEdBQXBCLENBQXdCUyxVQUF4QjtBQUNIO0FBRUosR0FqQkQ7O0FBbUJBakssT0FBSyxDQUFDaEksU0FBTixDQUFnQjZPLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSXhNLENBQUMsR0FBRyxJQUFSOztBQUVBQSxLQUFDLENBQUMwTSxhQUFGOztBQUVBLFFBQUsxTSxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE2QztBQUN6Q3JJLE9BQUMsQ0FBQ3NKLGFBQUYsR0FBa0J1RyxXQUFXLENBQUU3UCxDQUFDLENBQUMyTSxnQkFBSixFQUFzQjNNLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFGLGFBQWhDLENBQTdCO0FBQ0g7QUFFSixHQVZEOztBQVlBZixPQUFLLENBQUNoSSxTQUFOLENBQWdCK08sYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJMU0sQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDc0osYUFBTixFQUFxQjtBQUNqQndHLG1CQUFhLENBQUM5UCxDQUFDLENBQUNzSixhQUFILENBQWI7QUFDSDtBQUVKLEdBUkQ7O0FBVUEzRCxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1AsZ0JBQWhCLEdBQW1DLFlBQVc7QUFFMUMsUUFBSTNNLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSStQLE9BQU8sR0FBRy9QLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUJ6SixDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUR6Qzs7QUFHQSxRQUFLLENBQUN0SSxDQUFDLENBQUN3TCxNQUFILElBQWEsQ0FBQ3hMLENBQUMsQ0FBQ3NMLFdBQWhCLElBQStCLENBQUN0TCxDQUFDLENBQUNxTCxRQUF2QyxFQUFrRDtBQUU5QyxVQUFLckwsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUE1QixFQUFvQztBQUVoQyxZQUFLeEgsQ0FBQyxDQUFDMEosU0FBRixLQUFnQixDQUFoQixJQUF1QjFKLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIsQ0FBbkIsS0FBNkJ6SixDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBdEUsRUFBMkU7QUFDdkVsSyxXQUFDLENBQUMwSixTQUFGLEdBQWMsQ0FBZDtBQUNILFNBRkQsTUFJSyxJQUFLMUosQ0FBQyxDQUFDMEosU0FBRixLQUFnQixDQUFyQixFQUF5QjtBQUUxQnFHLGlCQUFPLEdBQUcvUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBckM7O0FBRUEsY0FBS3RJLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIsQ0FBakIsS0FBdUIsQ0FBNUIsRUFBZ0M7QUFDNUJ6SixhQUFDLENBQUMwSixTQUFGLEdBQWMsQ0FBZDtBQUNIO0FBRUo7QUFFSjs7QUFFRDFKLE9BQUMsQ0FBQzJQLFlBQUYsQ0FBZ0JJLE9BQWhCO0FBRUg7QUFFSixHQTdCRDs7QUErQkFwSyxPQUFLLENBQUNoSSxTQUFOLENBQWdCcVMsV0FBaEIsR0FBOEIsWUFBVztBQUVyQyxRQUFJaFEsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUF6QixFQUFnQztBQUU1QnJHLE9BQUMsQ0FBQ2dLLFVBQUYsR0FBZXRFLENBQUMsQ0FBQzFGLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdGLFNBQVgsQ0FBRCxDQUF1QjBKLFFBQXZCLENBQWdDLGFBQWhDLENBQWY7QUFDQWpRLE9BQUMsQ0FBQytKLFVBQUYsR0FBZXJFLENBQUMsQ0FBQzFGLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVGLFNBQVgsQ0FBRCxDQUF1QnlKLFFBQXZCLENBQWdDLGFBQWhDLENBQWY7O0FBRUEsVUFBSWpRLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTdCLEVBQTRDO0FBRXhDckksU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixjQUF6QixFQUF5Q0MsVUFBekMsQ0FBb0Qsc0JBQXBEOztBQUNBblEsU0FBQyxDQUFDK0osVUFBRixDQUFhbUcsV0FBYixDQUF5QixjQUF6QixFQUF5Q0MsVUFBekMsQ0FBb0Qsc0JBQXBEOztBQUVBLFlBQUluUSxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWdCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0YsU0FBMUIsQ0FBSixFQUEwQztBQUN0Q3ZHLFdBQUMsQ0FBQ2dLLFVBQUYsQ0FBYWtFLFNBQWIsQ0FBdUJsTyxDQUFDLENBQUNvTSxPQUFGLENBQVVqRyxZQUFqQztBQUNIOztBQUVELFlBQUluRyxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWdCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUYsU0FBMUIsQ0FBSixFQUEwQztBQUN0Q3hHLFdBQUMsQ0FBQytKLFVBQUYsQ0FBYStELFFBQWIsQ0FBc0I5TixDQUFDLENBQUNvTSxPQUFGLENBQVVqRyxZQUFoQztBQUNIOztBQUVELFlBQUluRyxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCeEgsV0FBQyxDQUFDZ0ssVUFBRixDQUNLaUcsUUFETCxDQUNjLGdCQURkLEVBRUsxQyxJQUZMLENBRVUsZUFGVixFQUUyQixNQUYzQjtBQUdIO0FBRUosT0FuQkQsTUFtQk87QUFFSHZOLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXpGLEdBQWIsQ0FBa0J2RSxDQUFDLENBQUMrSixVQUFwQixFQUVLa0csUUFGTCxDQUVjLGNBRmQsRUFHSzFDLElBSEwsQ0FHVTtBQUNGLDJCQUFpQixNQURmO0FBRUYsc0JBQVk7QUFGVixTQUhWO0FBUUg7QUFFSjtBQUVKLEdBMUNEOztBQTRDQTVILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J5UyxTQUFoQixHQUE0QixZQUFXO0FBRW5DLFFBQUlwUSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0lqRCxDQURKO0FBQUEsUUFDT3NULEdBRFA7O0FBR0EsUUFBSXJRLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5GLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJqSCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF4RCxFQUFzRTtBQUVsRXJJLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXFFLFFBQVYsQ0FBbUIsY0FBbkI7O0FBRUFJLFNBQUcsR0FBRzNLLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWXVLLFFBQVosQ0FBcUJqUSxDQUFDLENBQUNvTSxPQUFGLENBQVVsRixTQUEvQixDQUFOOztBQUVBLFdBQUtuSyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlpRCxDQUFDLENBQUNzUSxXQUFGLEVBQWpCLEVBQWtDdlQsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3RDc1QsV0FBRyxDQUFDakMsTUFBSixDQUFXMUksQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMEksTUFBWixDQUFtQnBPLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRGLFlBQVYsQ0FBdUI1SixJQUF2QixDQUE0QixJQUE1QixFQUFrQzhDLENBQWxDLEVBQXFDakQsQ0FBckMsQ0FBbkIsQ0FBWDtBQUNIOztBQUVEaUQsT0FBQyxDQUFDMkosS0FBRixHQUFVMEcsR0FBRyxDQUFDdkMsUUFBSixDQUFhOU4sQ0FBQyxDQUFDb00sT0FBRixDQUFVaEcsVUFBdkIsQ0FBVjs7QUFFQXBHLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUTJELElBQVIsQ0FBYSxJQUFiLEVBQW1CaUQsS0FBbkIsR0FBMkJOLFFBQTNCLENBQW9DLGNBQXBDO0FBRUg7QUFFSixHQXJCRDs7QUF1QkF0SyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlMsUUFBaEIsR0FBMkIsWUFBVztBQUVsQyxRQUFJeFEsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FLLE9BQUYsR0FDSXJLLENBQUMsQ0FBQzRMLE9BQUYsQ0FDSy9JLFFBREwsQ0FDZTdDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWpFLEtBQVYsR0FBa0IscUJBRGpDLEVBRUs4SCxRQUZMLENBRWMsYUFGZCxDQURKO0FBS0FqUSxLQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNxSyxPQUFGLENBQVUzTSxNQUF6Qjs7QUFFQXNDLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENILE9BQUMsQ0FBQ0csT0FBRCxDQUFELENBQ0swSCxJQURMLENBQ1Usa0JBRFYsRUFDOEJJLEtBRDlCLEVBRUt4QixJQUZMLENBRVUsaUJBRlYsRUFFNkJ6RyxDQUFDLENBQUNHLE9BQUQsQ0FBRCxDQUFXMEgsSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUZ6RDtBQUdILEtBSkQ7O0FBTUF2TixLQUFDLENBQUM0TCxPQUFGLENBQVVxRSxRQUFWLENBQW1CLGNBQW5COztBQUVBalEsS0FBQyxDQUFDb0ssV0FBRixHQUFpQnBLLENBQUMsQ0FBQ2tLLFVBQUYsS0FBaUIsQ0FBbEIsR0FDWnhFLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDb0ksUUFBaEMsQ0FBeUM5TixDQUFDLENBQUM0TCxPQUEzQyxDQURZLEdBRVo1TCxDQUFDLENBQUNxSyxPQUFGLENBQVVvRyxPQUFWLENBQWtCLDRCQUFsQixFQUFnREMsTUFBaEQsRUFGSjtBQUlBMVEsS0FBQyxDQUFDMEssS0FBRixHQUFVMUssQ0FBQyxDQUFDb0ssV0FBRixDQUFjdUcsSUFBZCxDQUNOLDJCQURNLEVBQ3VCRCxNQUR2QixFQUFWOztBQUVBMVEsS0FBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQixTQUFsQixFQUE2QixDQUE3Qjs7QUFFQSxRQUFJblAsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6QixJQUFpQzNHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsS0FBMkIsSUFBaEUsRUFBc0U7QUFDbEV6SSxPQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLEdBQTJCLENBQTNCO0FBQ0g7O0FBRUQ1QyxLQUFDLENBQUMsZ0JBQUQsRUFBbUIxRixDQUFDLENBQUM0TCxPQUFyQixDQUFELENBQStCNEQsR0FBL0IsQ0FBbUMsT0FBbkMsRUFBNENTLFFBQTVDLENBQXFELGVBQXJEOztBQUVBalEsS0FBQyxDQUFDNFEsYUFBRjs7QUFFQTVRLEtBQUMsQ0FBQ2dRLFdBQUY7O0FBRUFoUSxLQUFDLENBQUNvUSxTQUFGOztBQUVBcFEsS0FBQyxDQUFDNlEsVUFBRjs7QUFHQTdRLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0IsT0FBTzlRLENBQUMsQ0FBQ3lKLFlBQVQsS0FBMEIsUUFBMUIsR0FBcUN6SixDQUFDLENBQUN5SixZQUF2QyxHQUFzRCxDQUF4RTs7QUFFQSxRQUFJekosQ0FBQyxDQUFDb00sT0FBRixDQUFVakYsU0FBVixLQUF3QixJQUE1QixFQUFrQztBQUM5Qm5ILE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUXVGLFFBQVIsQ0FBaUIsV0FBakI7QUFDSDtBQUVKLEdBaEREOztBQWtEQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvVCxTQUFoQixHQUE0QixZQUFXO0FBRW5DLFFBQUkvUSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWNsQyxDQUFkO0FBQUEsUUFBaUJNLENBQWpCO0FBQUEsUUFBb0JoQixDQUFwQjtBQUFBLFFBQXVCNFQsU0FBdkI7QUFBQSxRQUFrQ0MsV0FBbEM7QUFBQSxRQUErQ0MsY0FBL0M7QUFBQSxRQUE4REMsZ0JBQTlEOztBQUVBSCxhQUFTLEdBQUcvUSxRQUFRLENBQUNtUixzQkFBVCxFQUFaO0FBQ0FGLGtCQUFjLEdBQUdsUixDQUFDLENBQUM0TCxPQUFGLENBQVUvSSxRQUFWLEVBQWpCOztBQUVBLFFBQUc3QyxDQUFDLENBQUNvTSxPQUFGLENBQVVuRSxJQUFWLEdBQWlCLENBQXBCLEVBQXVCO0FBRW5Ca0osc0JBQWdCLEdBQUduUixDQUFDLENBQUNvTSxPQUFGLENBQVVoRSxZQUFWLEdBQXlCcEksQ0FBQyxDQUFDb00sT0FBRixDQUFVbkUsSUFBdEQ7QUFDQWdKLGlCQUFXLEdBQUczTyxJQUFJLENBQUM0TSxJQUFMLENBQ1ZnQyxjQUFjLENBQUN4VCxNQUFmLEdBQXdCeVQsZ0JBRGQsQ0FBZDs7QUFJQSxXQUFJclQsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHbVQsV0FBZixFQUE0Qm5ULENBQUMsRUFBN0IsRUFBZ0M7QUFDNUIsWUFBSXFLLEtBQUssR0FBR2xJLFFBQVEsQ0FBQ29SLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxhQUFJalQsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkUsSUFBekIsRUFBK0I3SixDQUFDLEVBQWhDLEVBQW9DO0FBQ2hDLGNBQUlrVCxHQUFHLEdBQUdyUixRQUFRLENBQUNvUixhQUFULENBQXVCLEtBQXZCLENBQVY7O0FBQ0EsZUFBSWpVLENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBRzRDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhFLFlBQXpCLEVBQXVDaEwsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxnQkFBSXFTLE1BQU0sR0FBSTNSLENBQUMsR0FBR3FULGdCQUFKLElBQXlCL1MsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVaEUsWUFBZixHQUErQmhMLENBQXZELENBQWQ7O0FBQ0EsZ0JBQUk4VCxjQUFjLENBQUNLLEdBQWYsQ0FBbUI5QixNQUFuQixDQUFKLEVBQWdDO0FBQzVCNkIsaUJBQUcsQ0FBQ0UsV0FBSixDQUFnQk4sY0FBYyxDQUFDSyxHQUFmLENBQW1COUIsTUFBbkIsQ0FBaEI7QUFDSDtBQUNKOztBQUNEdEgsZUFBSyxDQUFDcUosV0FBTixDQUFrQkYsR0FBbEI7QUFDSDs7QUFDRE4saUJBQVMsQ0FBQ1EsV0FBVixDQUFzQnJKLEtBQXRCO0FBQ0g7O0FBRURuSSxPQUFDLENBQUM0TCxPQUFGLENBQVU2RixLQUFWLEdBQWtCckQsTUFBbEIsQ0FBeUI0QyxTQUF6Qjs7QUFDQWhSLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVS9JLFFBQVYsR0FBcUJBLFFBQXJCLEdBQWdDQSxRQUFoQyxHQUNLc00sR0FETCxDQUNTO0FBQ0QsaUJBQVMsTUFBTW5QLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhFLFlBQWpCLEdBQWlDLEdBRHhDO0FBRUQsbUJBQVc7QUFGVixPQURUO0FBTUg7QUFFSixHQXRDRDs7QUF3Q0F6QyxPQUFLLENBQUNoSSxTQUFOLENBQWdCK1QsZUFBaEIsR0FBa0MsVUFBU0MsT0FBVCxFQUFrQkMsV0FBbEIsRUFBK0I7QUFFN0QsUUFBSTVSLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTZSLFVBREo7QUFBQSxRQUNnQkMsZ0JBRGhCO0FBQUEsUUFDa0NDLGNBRGxDO0FBQUEsUUFDa0RDLGlCQUFpQixHQUFHLEtBRHRFOztBQUVBLFFBQUlDLFdBQVcsR0FBR2pTLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNHLEtBQVYsRUFBbEI7O0FBQ0EsUUFBSWpHLFdBQVcsR0FBRzlMLE1BQU0sQ0FBQ2dTLFVBQVAsSUFBcUJ6TSxDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsRUFBdkM7O0FBRUEsUUFBSWxTLENBQUMsQ0FBQytILFNBQUYsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUJnSyxvQkFBYyxHQUFHOUYsV0FBakI7QUFDSCxLQUZELE1BRU8sSUFBSWpNLENBQUMsQ0FBQytILFNBQUYsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDakNnSyxvQkFBYyxHQUFHRSxXQUFqQjtBQUNILEtBRk0sTUFFQSxJQUFJalMsQ0FBQyxDQUFDK0gsU0FBRixLQUFnQixLQUFwQixFQUEyQjtBQUM5QmdLLG9CQUFjLEdBQUd6UCxJQUFJLENBQUNFLEdBQUwsQ0FBU3lKLFdBQVQsRUFBc0JnRyxXQUF0QixDQUFqQjtBQUNIOztBQUVELFFBQUtqUyxDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLElBQ0RoSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLENBQXFCdEssTUFEcEIsSUFFRHNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBFLFVBQVYsS0FBeUIsSUFGN0IsRUFFbUM7QUFFL0I4SixzQkFBZ0IsR0FBRyxJQUFuQjs7QUFFQSxXQUFLRCxVQUFMLElBQW1CN1IsQ0FBQyxDQUFDa0wsV0FBckIsRUFBa0M7QUFDOUIsWUFBSWxMLENBQUMsQ0FBQ2tMLFdBQUYsQ0FBY3ROLGNBQWQsQ0FBNkJpVSxVQUE3QixDQUFKLEVBQThDO0FBQzFDLGNBQUk3UixDQUFDLENBQUNxTSxnQkFBRixDQUFtQjFFLFdBQW5CLEtBQW1DLEtBQXZDLEVBQThDO0FBQzFDLGdCQUFJb0ssY0FBYyxHQUFHL1IsQ0FBQyxDQUFDa0wsV0FBRixDQUFjMkcsVUFBZCxDQUFyQixFQUFnRDtBQUM1Q0MsOEJBQWdCLEdBQUc5UixDQUFDLENBQUNrTCxXQUFGLENBQWMyRyxVQUFkLENBQW5CO0FBQ0g7QUFDSixXQUpELE1BSU87QUFDSCxnQkFBSUUsY0FBYyxHQUFHL1IsQ0FBQyxDQUFDa0wsV0FBRixDQUFjMkcsVUFBZCxDQUFyQixFQUFnRDtBQUM1Q0MsOEJBQWdCLEdBQUc5UixDQUFDLENBQUNrTCxXQUFGLENBQWMyRyxVQUFkLENBQW5CO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsVUFBSUMsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDM0IsWUFBSTlSLENBQUMsQ0FBQytLLGdCQUFGLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLGNBQUkrRyxnQkFBZ0IsS0FBSzlSLENBQUMsQ0FBQytLLGdCQUF2QixJQUEyQzZHLFdBQS9DLEVBQTREO0FBQ3hENVIsYUFBQyxDQUFDK0ssZ0JBQUYsR0FDSStHLGdCQURKOztBQUVBLGdCQUFJOVIsQ0FBQyxDQUFDbUwsa0JBQUYsQ0FBcUIyRyxnQkFBckIsTUFBMkMsU0FBL0MsRUFBMEQ7QUFDdEQ5UixlQUFDLENBQUNvUyxPQUFGLENBQVVOLGdCQUFWO0FBQ0gsYUFGRCxNQUVPO0FBQ0g5UixlQUFDLENBQUNvTSxPQUFGLEdBQVkxRyxDQUFDLENBQUNvRixNQUFGLENBQVMsRUFBVCxFQUFhOUssQ0FBQyxDQUFDcU0sZ0JBQWYsRUFDUnJNLENBQUMsQ0FBQ21MLGtCQUFGLENBQ0kyRyxnQkFESixDQURRLENBQVo7O0FBR0Esa0JBQUlILE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNsQjNSLGlCQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFDSDs7QUFDRHpILGVBQUMsQ0FBQ2UsT0FBRixDQUFVNFEsT0FBVjtBQUNIOztBQUNESyw2QkFBaUIsR0FBR0YsZ0JBQXBCO0FBQ0g7QUFDSixTQWpCRCxNQWlCTztBQUNIOVIsV0FBQyxDQUFDK0ssZ0JBQUYsR0FBcUIrRyxnQkFBckI7O0FBQ0EsY0FBSTlSLENBQUMsQ0FBQ21MLGtCQUFGLENBQXFCMkcsZ0JBQXJCLE1BQTJDLFNBQS9DLEVBQTBEO0FBQ3REOVIsYUFBQyxDQUFDb1MsT0FBRixDQUFVTixnQkFBVjtBQUNILFdBRkQsTUFFTztBQUNIOVIsYUFBQyxDQUFDb00sT0FBRixHQUFZMUcsQ0FBQyxDQUFDb0YsTUFBRixDQUFTLEVBQVQsRUFBYTlLLENBQUMsQ0FBQ3FNLGdCQUFmLEVBQ1JyTSxDQUFDLENBQUNtTCxrQkFBRixDQUNJMkcsZ0JBREosQ0FEUSxDQUFaOztBQUdBLGdCQUFJSCxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEIzUixlQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFDSDs7QUFDRHpILGFBQUMsQ0FBQ2UsT0FBRixDQUFVNFEsT0FBVjtBQUNIOztBQUNESywyQkFBaUIsR0FBR0YsZ0JBQXBCO0FBQ0g7QUFDSixPQWpDRCxNQWlDTztBQUNILFlBQUk5UixDQUFDLENBQUMrSyxnQkFBRixLQUF1QixJQUEzQixFQUFpQztBQUM3Qi9LLFdBQUMsQ0FBQytLLGdCQUFGLEdBQXFCLElBQXJCO0FBQ0EvSyxXQUFDLENBQUNvTSxPQUFGLEdBQVlwTSxDQUFDLENBQUNxTSxnQkFBZDs7QUFDQSxjQUFJc0YsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ2xCM1IsYUFBQyxDQUFDeUosWUFBRixHQUFpQnpKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNFLFlBQTNCO0FBQ0g7O0FBQ0R6SCxXQUFDLENBQUNlLE9BQUYsQ0FBVTRRLE9BQVY7O0FBQ0FLLDJCQUFpQixHQUFHRixnQkFBcEI7QUFDSDtBQUNKLE9BN0Q4QixDQStEL0I7OztBQUNBLFVBQUksQ0FBQ0gsT0FBRCxJQUFZSyxpQkFBaUIsS0FBSyxLQUF0QyxFQUE4QztBQUMxQ2hTLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQ3JTLENBQUQsRUFBSWdTLGlCQUFKLENBQWhDO0FBQ0g7QUFDSjtBQUVKLEdBdEZEOztBQXdGQXJNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JpUCxXQUFoQixHQUE4QixVQUFTMEYsS0FBVCxFQUFnQkMsV0FBaEIsRUFBNkI7QUFFdkQsUUFBSXZTLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXdTLE9BQU8sR0FBRzlNLENBQUMsQ0FBQzRNLEtBQUssQ0FBQ0csYUFBUCxDQURmO0FBQUEsUUFFSUMsV0FGSjtBQUFBLFFBRWlCbkksV0FGakI7QUFBQSxRQUU4Qm9JLFlBRjlCLENBRnVELENBTXZEOzs7QUFDQSxRQUFHSCxPQUFPLENBQUNJLEVBQVIsQ0FBVyxHQUFYLENBQUgsRUFBb0I7QUFDaEJOLFdBQUssQ0FBQ08sY0FBTjtBQUNILEtBVHNELENBV3ZEOzs7QUFDQSxRQUFHLENBQUNMLE9BQU8sQ0FBQ0ksRUFBUixDQUFXLElBQVgsQ0FBSixFQUFzQjtBQUNsQkosYUFBTyxHQUFHQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBVjtBQUNIOztBQUVESCxnQkFBWSxHQUFJM1MsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBNUQ7QUFDQW9LLGVBQVcsR0FBR0MsWUFBWSxHQUFHLENBQUgsR0FBTyxDQUFDM1MsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDeUosWUFBbEIsSUFBa0N6SixDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUE3RTs7QUFFQSxZQUFRZ0ssS0FBSyxDQUFDbkcsSUFBTixDQUFXNEcsT0FBbkI7QUFFSSxXQUFLLFVBQUw7QUFDSXhJLG1CQUFXLEdBQUdtSSxXQUFXLEtBQUssQ0FBaEIsR0FBb0IxUyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUE5QixHQUErQ3RJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUJxSyxXQUF0Rjs7QUFDQSxZQUFJMVMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0IsRUFBMkM7QUFDdkNySSxXQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCYyxXQUFoQyxFQUE2QyxLQUE3QyxFQUFvRGdJLFdBQXBEO0FBQ0g7O0FBQ0Q7O0FBRUosV0FBSyxNQUFMO0FBQ0loSSxtQkFBVyxHQUFHbUksV0FBVyxLQUFLLENBQWhCLEdBQW9CMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBOUIsR0FBK0NvSyxXQUE3RDs7QUFDQSxZQUFJMVMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0IsRUFBMkM7QUFDdkNySSxXQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCYyxXQUFoQyxFQUE2QyxLQUE3QyxFQUFvRGdJLFdBQXBEO0FBQ0g7O0FBQ0Q7O0FBRUosV0FBSyxPQUFMO0FBQ0ksWUFBSTVFLEtBQUssR0FBRzJFLEtBQUssQ0FBQ25HLElBQU4sQ0FBV3dCLEtBQVgsS0FBcUIsQ0FBckIsR0FBeUIsQ0FBekIsR0FDUjJFLEtBQUssQ0FBQ25HLElBQU4sQ0FBV3dCLEtBQVgsSUFBb0I2RSxPQUFPLENBQUM3RSxLQUFSLEtBQWtCM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FEcEQ7O0FBR0F0SSxTQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUNnVCxjQUFGLENBQWlCckYsS0FBakIsQ0FBZixFQUF3QyxLQUF4QyxFQUErQzRFLFdBQS9DOztBQUNBQyxlQUFPLENBQUMzUCxRQUFSLEdBQW1Cd1AsT0FBbkIsQ0FBMkIsT0FBM0I7QUFDQTs7QUFFSjtBQUNJO0FBekJSO0FBNEJILEdBL0NEOztBQWlEQTFNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JxVixjQUFoQixHQUFpQyxVQUFTckYsS0FBVCxFQUFnQjtBQUU3QyxRQUFJM04sQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJaVQsVUFESjtBQUFBLFFBQ2dCQyxhQURoQjs7QUFHQUQsY0FBVSxHQUFHalQsQ0FBQyxDQUFDbVQsbUJBQUYsRUFBYjtBQUNBRCxpQkFBYSxHQUFHLENBQWhCOztBQUNBLFFBQUl2RixLQUFLLEdBQUdzRixVQUFVLENBQUNBLFVBQVUsQ0FBQ3ZWLE1BQVgsR0FBb0IsQ0FBckIsQ0FBdEIsRUFBK0M7QUFDM0NpUSxXQUFLLEdBQUdzRixVQUFVLENBQUNBLFVBQVUsQ0FBQ3ZWLE1BQVgsR0FBb0IsQ0FBckIsQ0FBbEI7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLLElBQUlaLENBQVQsSUFBY21XLFVBQWQsRUFBMEI7QUFDdEIsWUFBSXRGLEtBQUssR0FBR3NGLFVBQVUsQ0FBQ25XLENBQUQsQ0FBdEIsRUFBMkI7QUFDdkI2USxlQUFLLEdBQUd1RixhQUFSO0FBQ0E7QUFDSDs7QUFDREEscUJBQWEsR0FBR0QsVUFBVSxDQUFDblcsQ0FBRCxDQUExQjtBQUNIO0FBQ0o7O0FBRUQsV0FBTzZRLEtBQVA7QUFDSCxHQXBCRDs7QUFzQkFoSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCeVYsYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJcFQsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixJQUFrQmpILENBQUMsQ0FBQzJKLEtBQUYsS0FBWSxJQUFsQyxFQUF3QztBQUVwQ2pFLE9BQUMsQ0FBQyxJQUFELEVBQU8xRixDQUFDLENBQUMySixLQUFULENBQUQsQ0FDSzBKLEdBREwsQ0FDUyxhQURULEVBQ3dCclQsQ0FBQyxDQUFDNE0sV0FEMUIsRUFFS3lHLEdBRkwsQ0FFUyxrQkFGVCxFQUU2QjNOLENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQ3NULFNBQVYsRUFBcUJ0VCxDQUFyQixFQUF3QixJQUF4QixDQUY3QixFQUdLcVQsR0FITCxDQUdTLGtCQUhULEVBRzZCM04sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLEtBQXhCLENBSDdCOztBQUtBLFVBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbENqRyxTQUFDLENBQUMySixLQUFGLENBQVEwSixHQUFSLENBQVksZUFBWixFQUE2QnJULENBQUMsQ0FBQ2tOLFVBQS9CO0FBQ0g7QUFDSjs7QUFFRGxOLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlILEdBQVYsQ0FBYyx3QkFBZDs7QUFFQSxRQUFJclQsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBQ3BFckksT0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXFKLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0NyVCxDQUFDLENBQUM0TSxXQUFsQyxDQUFoQjtBQUNBNU0sT0FBQyxDQUFDK0osVUFBRixJQUFnQi9KLENBQUMsQ0FBQytKLFVBQUYsQ0FBYXNKLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0NyVCxDQUFDLENBQUM0TSxXQUFsQyxDQUFoQjs7QUFFQSxVQUFJNU0sQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLFNBQUMsQ0FBQ2dLLFVBQUYsSUFBZ0JoSyxDQUFDLENBQUNnSyxVQUFGLENBQWFxSixHQUFiLENBQWlCLGVBQWpCLEVBQWtDclQsQ0FBQyxDQUFDa04sVUFBcEMsQ0FBaEI7QUFDQWxOLFNBQUMsQ0FBQytKLFVBQUYsSUFBZ0IvSixDQUFDLENBQUMrSixVQUFGLENBQWFzSixHQUFiLENBQWlCLGVBQWpCLEVBQWtDclQsQ0FBQyxDQUFDa04sVUFBcEMsQ0FBaEI7QUFDSDtBQUNKOztBQUVEbE4sS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLGtDQUFaLEVBQWdEclQsQ0FBQyxDQUFDZ04sWUFBbEQ7O0FBQ0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksaUNBQVosRUFBK0NyVCxDQUFDLENBQUNnTixZQUFqRDs7QUFDQWhOLEtBQUMsQ0FBQzBLLEtBQUYsQ0FBUTJJLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q3JULENBQUMsQ0FBQ2dOLFlBQTlDOztBQUNBaE4sS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLG9DQUFaLEVBQWtEclQsQ0FBQyxDQUFDZ04sWUFBcEQ7O0FBRUFoTixLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksYUFBWixFQUEyQnJULENBQUMsQ0FBQzZNLFlBQTdCOztBQUVBbkgsS0FBQyxDQUFDekYsUUFBRCxDQUFELENBQVlvVCxHQUFaLENBQWdCclQsQ0FBQyxDQUFDZ00sZ0JBQWxCLEVBQW9DaE0sQ0FBQyxDQUFDdVQsVUFBdEM7O0FBRUF2VCxLQUFDLENBQUN3VCxrQkFBRjs7QUFFQSxRQUFJeFQsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUTJJLEdBQVIsQ0FBWSxlQUFaLEVBQTZCclQsQ0FBQyxDQUFDa04sVUFBL0I7QUFDSDs7QUFFRCxRQUFJbE4sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQzVCLE9BQUMsQ0FBQzFGLENBQUMsQ0FBQ29LLFdBQUgsQ0FBRCxDQUFpQnZILFFBQWpCLEdBQTRCd1EsR0FBNUIsQ0FBZ0MsYUFBaEMsRUFBK0NyVCxDQUFDLENBQUM4TSxhQUFqRDtBQUNIOztBQUVEcEgsS0FBQyxDQUFDdkYsTUFBRCxDQUFELENBQVVrVCxHQUFWLENBQWMsbUNBQW1DclQsQ0FBQyxDQUFDNEYsV0FBbkQsRUFBZ0U1RixDQUFDLENBQUN5VCxpQkFBbEU7QUFFQS9OLEtBQUMsQ0FBQ3ZGLE1BQUQsQ0FBRCxDQUFVa1QsR0FBVixDQUFjLHdCQUF3QnJULENBQUMsQ0FBQzRGLFdBQXhDLEVBQXFENUYsQ0FBQyxDQUFDMFQsTUFBdkQ7QUFFQWhPLEtBQUMsQ0FBQyxtQkFBRCxFQUFzQjFGLENBQUMsQ0FBQ29LLFdBQXhCLENBQUQsQ0FBc0NpSixHQUF0QyxDQUEwQyxXQUExQyxFQUF1RHJULENBQUMsQ0FBQzZTLGNBQXpEO0FBRUFuTixLQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVWtULEdBQVYsQ0FBYyxzQkFBc0JyVCxDQUFDLENBQUM0RixXQUF0QyxFQUFtRDVGLENBQUMsQ0FBQytNLFdBQXJEO0FBRUgsR0F2REQ7O0FBeURBcEgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjZWLGtCQUFoQixHQUFxQyxZQUFXO0FBRTVDLFFBQUl4VCxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLGtCQUFaLEVBQWdDM04sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBQWhDOztBQUNBQSxLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksa0JBQVosRUFBZ0MzTixDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FBaEM7QUFFSCxHQVBEOztBQVNBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQmdXLFdBQWhCLEdBQThCLFlBQVc7QUFFckMsUUFBSTNULENBQUMsR0FBRyxJQUFSO0FBQUEsUUFBY2tSLGNBQWQ7O0FBRUEsUUFBR2xSLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5FLElBQVYsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkJpSixvQkFBYyxHQUFHbFIsQ0FBQyxDQUFDcUssT0FBRixDQUFVeEgsUUFBVixHQUFxQkEsUUFBckIsRUFBakI7QUFDQXFPLG9CQUFjLENBQUNmLFVBQWYsQ0FBMEIsT0FBMUI7O0FBQ0FuUSxPQUFDLENBQUM0TCxPQUFGLENBQVU2RixLQUFWLEdBQWtCckQsTUFBbEIsQ0FBeUI4QyxjQUF6QjtBQUNIO0FBRUosR0FWRDs7QUFZQXZMLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrUCxZQUFoQixHQUErQixVQUFTeUYsS0FBVCxFQUFnQjtBQUUzQyxRQUFJdFMsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDMkwsV0FBRixLQUFrQixLQUF0QixFQUE2QjtBQUN6QjJHLFdBQUssQ0FBQ3NCLHdCQUFOO0FBQ0F0QixXQUFLLENBQUN1QixlQUFOO0FBQ0F2QixXQUFLLENBQUNPLGNBQU47QUFDSDtBQUVKLEdBVkQ7O0FBWUFsTixPQUFLLENBQUNoSSxTQUFOLENBQWdCbVcsT0FBaEIsR0FBMEIsVUFBUy9TLE9BQVQsRUFBa0I7QUFFeEMsUUFBSWYsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzBNLGFBQUY7O0FBRUExTSxLQUFDLENBQUMySyxXQUFGLEdBQWdCLEVBQWhCOztBQUVBM0ssS0FBQyxDQUFDb1QsYUFBRjs7QUFFQTFOLEtBQUMsQ0FBQyxlQUFELEVBQWtCMUYsQ0FBQyxDQUFDNEwsT0FBcEIsQ0FBRCxDQUE4QnVDLE1BQTlCOztBQUVBLFFBQUluTyxDQUFDLENBQUMySixLQUFOLEVBQWE7QUFDVDNKLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUW5GLE1BQVI7QUFDSDs7QUFFRCxRQUFLeEUsQ0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXRNLE1BQWxDLEVBQTJDO0FBRXZDc0MsT0FBQyxDQUFDZ0ssVUFBRixDQUNLa0csV0FETCxDQUNpQix5Q0FEakIsRUFFS0MsVUFGTCxDQUVnQixvQ0FGaEIsRUFHS2hCLEdBSEwsQ0FHUyxTQUhULEVBR21CLEVBSG5COztBQUtBLFVBQUtuUCxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWlCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0YsU0FBM0IsQ0FBTCxFQUE2QztBQUN6Q3ZHLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXhGLE1BQWI7QUFDSDtBQUNKOztBQUVELFFBQUt4RSxDQUFDLENBQUMrSixVQUFGLElBQWdCL0osQ0FBQyxDQUFDK0osVUFBRixDQUFhck0sTUFBbEMsRUFBMkM7QUFFdkNzQyxPQUFDLENBQUMrSixVQUFGLENBQ0ttRyxXQURMLENBQ2lCLHlDQURqQixFQUVLQyxVQUZMLENBRWdCLG9DQUZoQixFQUdLaEIsR0FITCxDQUdTLFNBSFQsRUFHbUIsRUFIbkI7O0FBS0EsVUFBS25QLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBaUI1QixDQUFDLENBQUNvTSxPQUFGLENBQVU1RixTQUEzQixDQUFMLEVBQTZDO0FBQ3pDeEcsU0FBQyxDQUFDK0osVUFBRixDQUFhdkYsTUFBYjtBQUNIO0FBQ0o7O0FBR0QsUUFBSXhFLENBQUMsQ0FBQ3FLLE9BQU4sRUFBZTtBQUVYckssT0FBQyxDQUFDcUssT0FBRixDQUNLNkYsV0FETCxDQUNpQixtRUFEakIsRUFFS0MsVUFGTCxDQUVnQixhQUZoQixFQUdLQSxVQUhMLENBR2dCLGtCQUhoQixFQUlLOUIsSUFKTCxDQUlVLFlBQVU7QUFDWjNJLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZILElBQVIsQ0FBYSxPQUFiLEVBQXNCN0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUcsSUFBUixDQUFhLGlCQUFiLENBQXRCO0FBQ0gsT0FOTDs7QUFRQW5NLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDZ0csTUFBM0M7O0FBRUFuTyxPQUFDLENBQUNvSyxXQUFGLENBQWMrRCxNQUFkOztBQUVBbk8sT0FBQyxDQUFDMEssS0FBRixDQUFReUQsTUFBUjs7QUFFQW5PLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXdDLE1BQVYsQ0FBaUJwTyxDQUFDLENBQUNxSyxPQUFuQjtBQUNIOztBQUVEckssS0FBQyxDQUFDMlQsV0FBRjs7QUFFQTNULEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsY0FBdEI7O0FBQ0FsUSxLQUFDLENBQUM0TCxPQUFGLENBQVVzRSxXQUFWLENBQXNCLG1CQUF0Qjs7QUFDQWxRLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsY0FBdEI7O0FBRUFsUSxLQUFDLENBQUM2SyxTQUFGLEdBQWMsSUFBZDs7QUFFQSxRQUFHLENBQUM5SixPQUFKLEVBQWE7QUFDVGYsT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixTQUFsQixFQUE2QixDQUFDclMsQ0FBRCxDQUE3QjtBQUNIO0FBRUosR0F4RUQ7O0FBMEVBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJSLGlCQUFoQixHQUFvQyxVQUFTbkgsS0FBVCxFQUFnQjtBQUVoRCxRQUFJbkksQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFAsVUFBVSxHQUFHLEVBRGpCOztBQUdBQSxjQUFVLENBQUM1UCxDQUFDLENBQUMrTCxjQUFILENBQVYsR0FBK0IsRUFBL0I7O0FBRUEsUUFBSS9MLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJySCxPQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCUyxVQUFsQjtBQUNILEtBRkQsTUFFTztBQUNINVAsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhN0YsS0FBYixFQUFvQmdILEdBQXBCLENBQXdCUyxVQUF4QjtBQUNIO0FBRUosR0FiRDs7QUFlQWpLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvVyxTQUFoQixHQUE0QixVQUFTQyxVQUFULEVBQXFCbEYsUUFBckIsRUFBK0I7QUFFdkQsUUFBSTlPLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFFNUJwTCxPQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFnRyxVQUFiLEVBQXlCN0UsR0FBekIsQ0FBNkI7QUFDekJqRyxjQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRDtBQURPLE9BQTdCOztBQUlBbEosT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QnRGLE9BQXpCLENBQWlDO0FBQzdCdUYsZUFBTyxFQUFFO0FBRG9CLE9BQWpDLEVBRUdqVSxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiLEVBRW9CdkksQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGOUIsRUFFc0NnUSxRQUZ0QztBQUlILEtBVkQsTUFVTztBQUVIOU8sT0FBQyxDQUFDcVAsZUFBRixDQUFrQjJFLFVBQWxCOztBQUVBaFUsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QjdFLEdBQXpCLENBQTZCO0FBQ3pCOEUsZUFBTyxFQUFFLENBRGdCO0FBRXpCL0ssY0FBTSxFQUFFbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQ7QUFGTyxPQUE3Qjs7QUFLQSxVQUFJNEYsUUFBSixFQUFjO0FBQ1Y1TixrQkFBVSxDQUFDLFlBQVc7QUFFbEJsQixXQUFDLENBQUNzUCxpQkFBRixDQUFvQjBFLFVBQXBCOztBQUVBbEYsa0JBQVEsQ0FBQzVSLElBQVQ7QUFDSCxTQUxTLEVBS1A4QyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUxILENBQVY7QUFNSDtBQUVKO0FBRUosR0FsQ0Q7O0FBb0NBNUMsT0FBSyxDQUFDaEksU0FBTixDQUFnQnVXLFlBQWhCLEdBQStCLFVBQVNGLFVBQVQsRUFBcUI7QUFFaEQsUUFBSWhVLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFFNUJwTCxPQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFnRyxVQUFiLEVBQXlCdEYsT0FBekIsQ0FBaUM7QUFDN0J1RixlQUFPLEVBQUUsQ0FEb0I7QUFFN0IvSyxjQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CO0FBRkUsT0FBakMsRUFHR2xKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdELEtBSGIsRUFHb0J2SSxDQUFDLENBQUNvTSxPQUFGLENBQVV0TixNQUg5QjtBQUtILEtBUEQsTUFPTztBQUVIa0IsT0FBQyxDQUFDcVAsZUFBRixDQUFrQjJFLFVBQWxCOztBQUVBaFUsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QjdFLEdBQXpCLENBQTZCO0FBQ3pCOEUsZUFBTyxFQUFFLENBRGdCO0FBRXpCL0ssY0FBTSxFQUFFbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQjtBQUZGLE9BQTdCO0FBS0g7QUFFSixHQXRCRDs7QUF3QkF2RCxPQUFLLENBQUNoSSxTQUFOLENBQWdCd1csWUFBaEIsR0FBK0J4TyxLQUFLLENBQUNoSSxTQUFOLENBQWdCeVcsV0FBaEIsR0FBOEIsVUFBU0MsTUFBVCxFQUFpQjtBQUUxRSxRQUFJclUsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSXFVLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBRWpCclUsT0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssT0FBQyxDQUFDNk4sTUFBRjs7QUFFQTdOLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDZ0csTUFBM0M7O0FBRUFuTyxPQUFDLENBQUM2TCxZQUFGLENBQWV3SSxNQUFmLENBQXNCQSxNQUF0QixFQUE4QnZHLFFBQTlCLENBQXVDOU4sQ0FBQyxDQUFDb0ssV0FBekM7O0FBRUFwSyxPQUFDLENBQUNzTyxNQUFGO0FBRUg7QUFFSixHQWxCRDs7QUFvQkEzSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCMlcsWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJdFUsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzRMLE9BQUYsQ0FDS3lILEdBREwsQ0FDUyx3QkFEVCxFQUVLa0IsRUFGTCxDQUVRLHdCQUZSLEVBRWtDLEdBRmxDLEVBRXVDLFVBQVNqQyxLQUFULEVBQWdCO0FBRW5EQSxXQUFLLENBQUNzQix3QkFBTjtBQUNBLFVBQUlZLEdBQUcsR0FBRzlPLENBQUMsQ0FBQyxJQUFELENBQVg7QUFFQXhFLGdCQUFVLENBQUMsWUFBVztBQUVsQixZQUFJbEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVdkUsWUFBZCxFQUE2QjtBQUN6QjdILFdBQUMsQ0FBQ3FMLFFBQUYsR0FBYW1KLEdBQUcsQ0FBQzVCLEVBQUosQ0FBTyxRQUFQLENBQWI7O0FBQ0E1UyxXQUFDLENBQUN3TSxRQUFGO0FBQ0g7QUFFSixPQVBTLEVBT1AsQ0FQTyxDQUFWO0FBU0gsS0FoQkQ7QUFpQkgsR0FyQkQ7O0FBdUJBN0csT0FBSyxDQUFDaEksU0FBTixDQUFnQjhXLFVBQWhCLEdBQTZCOU8sS0FBSyxDQUFDaEksU0FBTixDQUFnQitXLGlCQUFoQixHQUFvQyxZQUFXO0FBRXhFLFFBQUkxVSxDQUFDLEdBQUcsSUFBUjs7QUFDQSxXQUFPQSxDQUFDLENBQUN5SixZQUFUO0FBRUgsR0FMRDs7QUFPQTlELE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IyUyxXQUFoQixHQUE4QixZQUFXO0FBRXJDLFFBQUl0USxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJMlUsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxRQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxRQUFJN1UsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3QixVQUFJeEgsQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTlCLEVBQTRDO0FBQ3ZDLFVBQUV3TSxRQUFGO0FBQ0osT0FGRCxNQUVPO0FBQ0gsZUFBT0YsVUFBVSxHQUFHM1UsQ0FBQyxDQUFDa0ssVUFBdEIsRUFBa0M7QUFDOUIsWUFBRTJLLFFBQUY7QUFDQUYsb0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGlCQUFPLElBQUk1VSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLElBQTRCdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBdEMsR0FBcURySSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUEvRCxHQUFnRnRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJHO0FBQ0g7QUFDSjtBQUNKLEtBVkQsTUFVTyxJQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUN0Q2tPLGNBQVEsR0FBRzdVLENBQUMsQ0FBQ2tLLFVBQWI7QUFDSCxLQUZNLE1BRUEsSUFBRyxDQUFDbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFBZCxFQUF3QjtBQUMzQnVPLGNBQVEsR0FBRyxJQUFJdlMsSUFBSSxDQUFDNE0sSUFBTCxDQUFVLENBQUNsUCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixJQUEwQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQTlELENBQWY7QUFDSCxLQUZNLE1BRUQ7QUFDRixhQUFPcU0sVUFBVSxHQUFHM1UsQ0FBQyxDQUFDa0ssVUFBdEIsRUFBa0M7QUFDOUIsVUFBRTJLLFFBQUY7QUFDQUYsa0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGVBQU8sSUFBSTVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsSUFBNEJ0SSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF0QyxHQUFxRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQS9ELEdBQWdGdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckc7QUFDSDtBQUNKOztBQUVELFdBQU93TSxRQUFRLEdBQUcsQ0FBbEI7QUFFSCxHQWhDRDs7QUFrQ0FsUCxPQUFLLENBQUNoSSxTQUFOLENBQWdCbVgsT0FBaEIsR0FBMEIsVUFBU2QsVUFBVCxFQUFxQjtBQUUzQyxRQUFJaFUsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNk8sVUFESjtBQUFBLFFBRUlrRyxjQUZKO0FBQUEsUUFHSUMsY0FBYyxHQUFHLENBSHJCO0FBQUEsUUFJSUMsV0FKSjtBQUFBLFFBS0lDLElBTEo7O0FBT0FsVixLQUFDLENBQUN1SyxXQUFGLEdBQWdCLENBQWhCO0FBQ0F3SyxrQkFBYyxHQUFHL1UsQ0FBQyxDQUFDcUssT0FBRixDQUFVa0csS0FBVixHQUFrQjlCLFdBQWxCLENBQThCLElBQTlCLENBQWpCOztBQUVBLFFBQUl6TyxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLFVBQUl4SCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUN2Q3JJLFNBQUMsQ0FBQ3VLLFdBQUYsR0FBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWVuSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixHQUEwQyxDQUFDLENBQTNEO0FBQ0E2TSxZQUFJLEdBQUcsQ0FBQyxDQUFSOztBQUVBLFlBQUlsVixDQUFDLENBQUNvTSxPQUFGLENBQVVyRCxRQUFWLEtBQXVCLElBQXZCLElBQStCL0ksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE1RCxFQUFrRTtBQUM5RCxjQUFJM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixLQUEyQixDQUEvQixFQUFrQztBQUM5QjZNLGdCQUFJLEdBQUcsQ0FBQyxHQUFSO0FBQ0gsV0FGRCxNQUVPLElBQUlsVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEtBQTJCLENBQS9CLEVBQWtDO0FBQ3JDNk0sZ0JBQUksR0FBRyxDQUFDLENBQVI7QUFDSDtBQUNKOztBQUNERixzQkFBYyxHQUFJRCxjQUFjLEdBQUcvVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE1QixHQUE0QzZNLElBQTdEO0FBQ0g7O0FBQ0QsVUFBSWxWLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXpCLEtBQTRDLENBQWhELEVBQW1EO0FBQy9DLFlBQUkwTCxVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUF2QixHQUF3Q3RJLENBQUMsQ0FBQ2tLLFVBQTFDLElBQXdEbEssQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckYsRUFBbUc7QUFDL0YsY0FBSTJMLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBQW5CLEVBQStCO0FBQzNCbEssYUFBQyxDQUFDdUssV0FBRixHQUFpQixDQUFDdkssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixJQUEwQjJMLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBQXpDLENBQUQsSUFBeURsSyxDQUFDLENBQUNtSyxVQUE1RCxHQUEwRSxDQUFDLENBQTNGO0FBQ0E2SywwQkFBYyxHQUFJLENBQUNoVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLElBQTBCMkwsVUFBVSxHQUFHaFUsQ0FBQyxDQUFDa0ssVUFBekMsQ0FBRCxJQUF5RDZLLGNBQTFELEdBQTRFLENBQUMsQ0FBOUY7QUFDSCxXQUhELE1BR087QUFDSC9VLGFBQUMsQ0FBQ3VLLFdBQUYsR0FBa0J2SyxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUExQixHQUE0Q3RJLENBQUMsQ0FBQ21LLFVBQS9DLEdBQTZELENBQUMsQ0FBOUU7QUFDQTZLLDBCQUFjLEdBQUtoVixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUExQixHQUE0Q3lNLGNBQTdDLEdBQStELENBQUMsQ0FBakY7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQXpCRCxNQXlCTztBQUNILFVBQUlmLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXZCLEdBQXNDckksQ0FBQyxDQUFDa0ssVUFBNUMsRUFBd0Q7QUFDcERsSyxTQUFDLENBQUN1SyxXQUFGLEdBQWdCLENBQUV5SixVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF4QixHQUF3Q3JJLENBQUMsQ0FBQ2tLLFVBQTNDLElBQXlEbEssQ0FBQyxDQUFDbUssVUFBM0U7QUFDQTZLLHNCQUFjLEdBQUcsQ0FBRWhCLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhCLEdBQXdDckksQ0FBQyxDQUFDa0ssVUFBM0MsSUFBeUQ2SyxjQUExRTtBQUNIO0FBQ0o7O0FBRUQsUUFBSS9VLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUN4Q3JJLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQXlLLG9CQUFjLEdBQUcsQ0FBakI7QUFDSDs7QUFFRCxRQUFJaFYsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6QixJQUFpQzNHLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEvRCxFQUE2RTtBQUN6RXJJLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBa0J2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFyQixDQUFoQixHQUFzRCxDQUF2RCxHQUE4RHJJLENBQUMsQ0FBQ21LLFVBQUYsR0FBZW5LLENBQUMsQ0FBQ2tLLFVBQWxCLEdBQWdDLENBQTdHO0FBQ0gsS0FGRCxNQUVPLElBQUlsSyxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQXpCLElBQWlDM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUE1RCxFQUFrRTtBQUNyRXhILE9BQUMsQ0FBQ3VLLFdBQUYsSUFBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQWYsR0FBd0RySSxDQUFDLENBQUNtSyxVQUEzRTtBQUNILEtBRk0sTUFFQSxJQUFJbkssQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUN0QzNHLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQXZLLE9BQUMsQ0FBQ3VLLFdBQUYsSUFBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQWhDO0FBQ0g7O0FBRUQsUUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUI4RixnQkFBVSxHQUFLbUYsVUFBVSxHQUFHaFUsQ0FBQyxDQUFDbUssVUFBaEIsR0FBOEIsQ0FBQyxDQUFoQyxHQUFxQ25LLENBQUMsQ0FBQ3VLLFdBQXBEO0FBQ0gsS0FGRCxNQUVPO0FBQ0hzRSxnQkFBVSxHQUFLbUYsVUFBVSxHQUFHZSxjQUFkLEdBQWdDLENBQUMsQ0FBbEMsR0FBdUNDLGNBQXBEO0FBQ0g7O0FBRUQsUUFBSWhWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFFbEMsVUFBSTlJLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixJQUEwQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsS0FBckUsRUFBNEU7QUFDeEV5TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixjQUF2QixFQUF1Q21MLEVBQXZDLENBQTBDZ0csVUFBMUMsQ0FBZDtBQUNILE9BRkQsTUFFTztBQUNIaUIsbUJBQVcsR0FBR2pWLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNtTCxFQUF2QyxDQUEwQ2dHLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpFLENBQWQ7QUFDSDs7QUFFRCxVQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUF0QixFQUE0QjtBQUN4QixZQUFJK00sV0FBVyxDQUFDLENBQUQsQ0FBZixFQUFvQjtBQUNoQnBHLG9CQUFVLEdBQUcsQ0FBQzdPLENBQUMsQ0FBQ29LLFdBQUYsQ0FBYzhILEtBQWQsS0FBd0IrQyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVoUSxVQUF2QyxHQUFvRGdRLFdBQVcsQ0FBQy9DLEtBQVosRUFBckQsSUFBNEUsQ0FBQyxDQUExRjtBQUNILFNBRkQsTUFFTztBQUNIckQsb0JBQVUsR0FBSSxDQUFkO0FBQ0g7QUFDSixPQU5ELE1BTU87QUFDSEEsa0JBQVUsR0FBR29HLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJBLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZWhRLFVBQWYsR0FBNEIsQ0FBQyxDQUE5QyxHQUFrRCxDQUEvRDtBQUNIOztBQUVELFVBQUlqRixDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBQy9CLFlBQUkzRyxDQUFDLENBQUNrSyxVQUFGLElBQWdCbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUIsSUFBMENySSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLEtBQXJFLEVBQTRFO0FBQ3hFeU4scUJBQVcsR0FBR2pWLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNtTCxFQUF2QyxDQUEwQ2dHLFVBQTFDLENBQWQ7QUFDSCxTQUZELE1BRU87QUFDSGlCLHFCQUFXLEdBQUdqVixDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDbUwsRUFBdkMsQ0FBMENnRyxVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF2QixHQUFzQyxDQUFoRixDQUFkO0FBQ0g7O0FBRUQsWUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsY0FBSStNLFdBQVcsQ0FBQyxDQUFELENBQWYsRUFBb0I7QUFDaEJwRyxzQkFBVSxHQUFHLENBQUM3TyxDQUFDLENBQUNvSyxXQUFGLENBQWM4SCxLQUFkLEtBQXdCK0MsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlaFEsVUFBdkMsR0FBb0RnUSxXQUFXLENBQUMvQyxLQUFaLEVBQXJELElBQTRFLENBQUMsQ0FBMUY7QUFDSCxXQUZELE1BRU87QUFDSHJELHNCQUFVLEdBQUksQ0FBZDtBQUNIO0FBQ0osU0FORCxNQU1PO0FBQ0hBLG9CQUFVLEdBQUdvRyxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVoUSxVQUFmLEdBQTRCLENBQUMsQ0FBOUMsR0FBa0QsQ0FBL0Q7QUFDSDs7QUFFRDRKLGtCQUFVLElBQUksQ0FBQzdPLENBQUMsQ0FBQzBLLEtBQUYsQ0FBUXdILEtBQVIsS0FBa0IrQyxXQUFXLENBQUNHLFVBQVosRUFBbkIsSUFBK0MsQ0FBN0Q7QUFDSDtBQUNKOztBQUVELFdBQU92RyxVQUFQO0FBRUgsR0F6R0Q7O0FBMkdBbEosT0FBSyxDQUFDaEksU0FBTixDQUFnQjBYLFNBQWhCLEdBQTRCMVAsS0FBSyxDQUFDaEksU0FBTixDQUFnQjJYLGNBQWhCLEdBQWlDLFVBQVNDLE1BQVQsRUFBaUI7QUFFMUUsUUFBSXZWLENBQUMsR0FBRyxJQUFSOztBQUVBLFdBQU9BLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW1KLE1BQVYsQ0FBUDtBQUVILEdBTkQ7O0FBUUE1UCxPQUFLLENBQUNoSSxTQUFOLENBQWdCd1YsbUJBQWhCLEdBQXNDLFlBQVc7QUFFN0MsUUFBSW5ULENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTJVLFVBQVUsR0FBRyxDQURqQjtBQUFBLFFBRUlDLE9BQU8sR0FBRyxDQUZkO0FBQUEsUUFHSVksT0FBTyxHQUFHLEVBSGQ7QUFBQSxRQUlJalQsR0FKSjs7QUFNQSxRQUFJdkMsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QmpGLFNBQUcsR0FBR3ZDLENBQUMsQ0FBQ2tLLFVBQVI7QUFDSCxLQUZELE1BRU87QUFDSHlLLGdCQUFVLEdBQUczVSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLEdBQTJCLENBQUMsQ0FBekM7QUFDQXNNLGFBQU8sR0FBRzVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsR0FBMkIsQ0FBQyxDQUF0QztBQUNBL0YsU0FBRyxHQUFHdkMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlLENBQXJCO0FBQ0g7O0FBRUQsV0FBT3lLLFVBQVUsR0FBR3BTLEdBQXBCLEVBQXlCO0FBQ3JCaVQsYUFBTyxDQUFDQyxJQUFSLENBQWFkLFVBQWI7QUFDQUEsZ0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGFBQU8sSUFBSTVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsSUFBNEJ0SSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF0QyxHQUFxRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQS9ELEdBQWdGdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckc7QUFDSDs7QUFFRCxXQUFPbU4sT0FBUDtBQUVILEdBeEJEOztBQTBCQTdQLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IrWCxRQUFoQixHQUEyQixZQUFXO0FBRWxDLFdBQU8sSUFBUDtBQUVILEdBSkQ7O0FBTUEvUCxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1ksYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJM1YsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFYsZUFESjtBQUFBLFFBQ3FCQyxXQURyQjtBQUFBLFFBQ2tDQyxZQURsQzs7QUFHQUEsZ0JBQVksR0FBRzlWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBekIsR0FBZ0MzRyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQS9DLEdBQXdGLENBQXZHOztBQUVBLFFBQUlySSxDQUFDLENBQUNvTSxPQUFGLENBQVUzRCxZQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ2pDekksT0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixjQUFuQixFQUFtQ2UsSUFBbkMsQ0FBd0MsVUFBU1YsS0FBVCxFQUFnQnhGLEtBQWhCLEVBQXVCO0FBQzNELFlBQUlBLEtBQUssQ0FBQ2xELFVBQU4sR0FBbUI2USxZQUFuQixHQUFtQ3BRLENBQUMsQ0FBQ3lDLEtBQUQsQ0FBRCxDQUFTaU4sVUFBVCxLQUF3QixDQUEzRCxHQUFpRXBWLENBQUMsQ0FBQ3dLLFNBQUYsR0FBYyxDQUFDLENBQXBGLEVBQXdGO0FBQ3BGcUwscUJBQVcsR0FBRzFOLEtBQWQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSixPQUxEOztBQU9BeU4scUJBQWUsR0FBR3RULElBQUksQ0FBQ3lULEdBQUwsQ0FBU3JRLENBQUMsQ0FBQ21RLFdBQUQsQ0FBRCxDQUFldEksSUFBZixDQUFvQixrQkFBcEIsSUFBMEN2TixDQUFDLENBQUN5SixZQUFyRCxLQUFzRSxDQUF4RjtBQUVBLGFBQU9tTSxlQUFQO0FBRUgsS0FaRCxNQVlPO0FBQ0gsYUFBTzVWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQWpCO0FBQ0g7QUFFSixHQXZCRDs7QUF5QkEzQyxPQUFLLENBQUNoSSxTQUFOLENBQWdCcVksSUFBaEIsR0FBdUJyUSxLQUFLLENBQUNoSSxTQUFOLENBQWdCc1ksU0FBaEIsR0FBNEIsVUFBUzlOLEtBQVQsRUFBZ0JvSyxXQUFoQixFQUE2QjtBQUU1RSxRQUFJdlMsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzRNLFdBQUYsQ0FBYztBQUNWVCxVQUFJLEVBQUU7QUFDRjRHLGVBQU8sRUFBRSxPQURQO0FBRUZwRixhQUFLLEVBQUV6TCxRQUFRLENBQUNpRyxLQUFEO0FBRmI7QUFESSxLQUFkLEVBS0dvSyxXQUxIO0FBT0gsR0FYRDs7QUFhQTVNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtRCxJQUFoQixHQUF1QixVQUFTb1YsUUFBVCxFQUFtQjtBQUV0QyxRQUFJbFcsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSSxDQUFDMEYsQ0FBQyxDQUFDMUYsQ0FBQyxDQUFDNEwsT0FBSCxDQUFELENBQWF1SyxRQUFiLENBQXNCLG1CQUF0QixDQUFMLEVBQWlEO0FBRTdDelEsT0FBQyxDQUFDMUYsQ0FBQyxDQUFDNEwsT0FBSCxDQUFELENBQWFxRSxRQUFiLENBQXNCLG1CQUF0Qjs7QUFFQWpRLE9BQUMsQ0FBQytRLFNBQUY7O0FBQ0EvUSxPQUFDLENBQUN3USxRQUFGOztBQUNBeFEsT0FBQyxDQUFDb1csUUFBRjs7QUFDQXBXLE9BQUMsQ0FBQ3FXLFNBQUY7O0FBQ0FyVyxPQUFDLENBQUNzVyxVQUFGOztBQUNBdFcsT0FBQyxDQUFDdVcsZ0JBQUY7O0FBQ0F2VyxPQUFDLENBQUN3VyxZQUFGOztBQUNBeFcsT0FBQyxDQUFDNlEsVUFBRjs7QUFDQTdRLE9BQUMsQ0FBQzBSLGVBQUYsQ0FBa0IsSUFBbEI7O0FBQ0ExUixPQUFDLENBQUNzVSxZQUFGO0FBRUg7O0FBRUQsUUFBSTRCLFFBQUosRUFBYztBQUNWbFcsT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixDQUFDclMsQ0FBRCxDQUExQjtBQUNIOztBQUVELFFBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbENqRyxPQUFDLENBQUN5VyxPQUFGO0FBQ0g7O0FBRUQsUUFBS3pXLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQWYsRUFBMEI7QUFFdEJ6RyxPQUFDLENBQUN3TCxNQUFGLEdBQVcsS0FBWDs7QUFDQXhMLE9BQUMsQ0FBQ3dNLFFBQUY7QUFFSDtBQUVKLEdBcENEOztBQXNDQTdHLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4WSxPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUl6VyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ1EwVyxZQUFZLEdBQUdwVSxJQUFJLENBQUM0TSxJQUFMLENBQVVsUCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFuQyxDQUR2QjtBQUFBLFFBRVFzTyxpQkFBaUIsR0FBRzNXLENBQUMsQ0FBQ21ULG1CQUFGLEdBQXdCa0IsTUFBeEIsQ0FBK0IsVUFBU3VDLEdBQVQsRUFBYztBQUM3RCxhQUFRQSxHQUFHLElBQUksQ0FBUixJQUFlQSxHQUFHLEdBQUc1VyxDQUFDLENBQUNrSyxVQUE5QjtBQUNILEtBRm1CLENBRjVCOztBQU1BbEssS0FBQyxDQUFDcUssT0FBRixDQUFVOUYsR0FBVixDQUFjdkUsQ0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixDQUFkLEVBQW1EQyxJQUFuRCxDQUF3RDtBQUNwRCxxQkFBZSxNQURxQztBQUVwRCxrQkFBWTtBQUZ3QyxLQUF4RCxFQUdHRCxJQUhILENBR1EsMEJBSFIsRUFHb0NDLElBSHBDLENBR3lDO0FBQ3JDLGtCQUFZO0FBRHlCLEtBSHpDOztBQU9BLFFBQUl2TixDQUFDLENBQUMySixLQUFGLEtBQVksSUFBaEIsRUFBc0I7QUFDbEIzSixPQUFDLENBQUNxSyxPQUFGLENBQVVtRixHQUFWLENBQWN4UCxDQUFDLENBQUNvSyxXQUFGLENBQWNrRCxJQUFkLENBQW1CLGVBQW5CLENBQWQsRUFBbURlLElBQW5ELENBQXdELFVBQVN0UixDQUFULEVBQVk7QUFDaEUsWUFBSThaLGlCQUFpQixHQUFHRixpQkFBaUIsQ0FBQ2pXLE9BQWxCLENBQTBCM0QsQ0FBMUIsQ0FBeEI7QUFFQTJJLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZILElBQVIsQ0FBYTtBQUNULGtCQUFRLFVBREM7QUFFVCxnQkFBTSxnQkFBZ0J2TixDQUFDLENBQUM0RixXQUFsQixHQUFnQzdJLENBRjdCO0FBR1Qsc0JBQVksQ0FBQztBQUhKLFNBQWI7O0FBTUEsWUFBSThaLGlCQUFpQixLQUFLLENBQUMsQ0FBM0IsRUFBOEI7QUFDM0IsY0FBSUMsaUJBQWlCLEdBQUcsd0JBQXdCOVcsQ0FBQyxDQUFDNEYsV0FBMUIsR0FBd0NpUixpQkFBaEU7O0FBQ0EsY0FBSW5SLENBQUMsQ0FBQyxNQUFNb1IsaUJBQVAsQ0FBRCxDQUEyQnBaLE1BQS9CLEVBQXVDO0FBQ3JDZ0ksYUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhO0FBQ1Qsa0NBQW9CdUo7QUFEWCxhQUFiO0FBR0Q7QUFDSDtBQUNKLE9BakJEOztBQW1CQTlXLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUTRELElBQVIsQ0FBYSxNQUFiLEVBQXFCLFNBQXJCLEVBQWdDRCxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQ2UsSUFBM0MsQ0FBZ0QsVUFBU3RSLENBQVQsRUFBWTtBQUN4RCxZQUFJZ2EsZ0JBQWdCLEdBQUdKLGlCQUFpQixDQUFDNVosQ0FBRCxDQUF4QztBQUVBMkksU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhO0FBQ1Qsa0JBQVE7QUFEQyxTQUFiO0FBSUE3SCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVE0SCxJQUFSLENBQWEsUUFBYixFQUF1QmlELEtBQXZCLEdBQStCaEQsSUFBL0IsQ0FBb0M7QUFDaEMsa0JBQVEsS0FEd0I7QUFFaEMsZ0JBQU0sd0JBQXdCdk4sQ0FBQyxDQUFDNEYsV0FBMUIsR0FBd0M3SSxDQUZkO0FBR2hDLDJCQUFpQixnQkFBZ0JpRCxDQUFDLENBQUM0RixXQUFsQixHQUFnQ21SLGdCQUhqQjtBQUloQyx3QkFBZWhhLENBQUMsR0FBRyxDQUFMLEdBQVUsTUFBVixHQUFtQjJaLFlBSkQ7QUFLaEMsMkJBQWlCLElBTGU7QUFNaEMsc0JBQVk7QUFOb0IsU0FBcEM7QUFTSCxPQWhCRCxFQWdCRzFJLEVBaEJILENBZ0JNaE8sQ0FBQyxDQUFDeUosWUFoQlIsRUFnQnNCNkQsSUFoQnRCLENBZ0IyQixRQWhCM0IsRUFnQnFDQyxJQWhCckMsQ0FnQjBDO0FBQ3RDLHlCQUFpQixNQURxQjtBQUV0QyxvQkFBWTtBQUYwQixPQWhCMUMsRUFtQkd5SixHQW5CSDtBQW9CSDs7QUFFRCxTQUFLLElBQUlqYSxDQUFDLEdBQUNpRCxDQUFDLENBQUN5SixZQUFSLEVBQXNCbEgsR0FBRyxHQUFDeEYsQ0FBQyxHQUFDaUQsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBM0MsRUFBeUR0TCxDQUFDLEdBQUd3RixHQUE3RCxFQUFrRXhGLENBQUMsRUFBbkUsRUFBdUU7QUFDckUsVUFBSWlELENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdFLGFBQWQsRUFBNkI7QUFDM0J2SCxTQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFqUixDQUFiLEVBQWdCd1EsSUFBaEIsQ0FBcUI7QUFBQyxzQkFBWTtBQUFiLFNBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0x2TixTQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFqUixDQUFiLEVBQWdCb1QsVUFBaEIsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGOztBQUVEblEsS0FBQyxDQUFDcU4sV0FBRjtBQUVILEdBbEVEOztBQW9FQTFILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JzWixlQUFoQixHQUFrQyxZQUFXO0FBRXpDLFFBQUlqWCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJQSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRixNQUFWLEtBQXFCLElBQXJCLElBQTZCckcsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUQsRUFBd0U7QUFDcEVySSxPQUFDLENBQUNnSyxVQUFGLENBQ0lxSixHQURKLENBQ1EsYUFEUixFQUVJa0IsRUFGSixDQUVPLGFBRlAsRUFFc0I7QUFDZHhCLGVBQU8sRUFBRTtBQURLLE9BRnRCLEVBSU0vUyxDQUFDLENBQUM0TSxXQUpSOztBQUtBNU0sT0FBQyxDQUFDK0osVUFBRixDQUNJc0osR0FESixDQUNRLGFBRFIsRUFFSWtCLEVBRkosQ0FFTyxhQUZQLEVBRXNCO0FBQ2R4QixlQUFPLEVBQUU7QUFESyxPQUZ0QixFQUlNL1MsQ0FBQyxDQUFDNE0sV0FKUjs7QUFNQSxVQUFJNU0sQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXVLLEVBQWIsQ0FBZ0IsZUFBaEIsRUFBaUN2VSxDQUFDLENBQUNrTixVQUFuQzs7QUFDQWxOLFNBQUMsQ0FBQytKLFVBQUYsQ0FBYXdLLEVBQWIsQ0FBZ0IsZUFBaEIsRUFBaUN2VSxDQUFDLENBQUNrTixVQUFuQztBQUNIO0FBQ0o7QUFFSixHQXRCRDs7QUF3QkF2SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCdVosYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJbFgsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBQ2xFM0MsT0FBQyxDQUFDLElBQUQsRUFBTzFGLENBQUMsQ0FBQzJKLEtBQVQsQ0FBRCxDQUFpQjRLLEVBQWpCLENBQW9CLGFBQXBCLEVBQW1DO0FBQy9CeEIsZUFBTyxFQUFFO0FBRHNCLE9BQW5DLEVBRUcvUyxDQUFDLENBQUM0TSxXQUZMOztBQUlBLFVBQUk1TSxDQUFDLENBQUNvTSxPQUFGLENBQVVuRyxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDakcsU0FBQyxDQUFDMkosS0FBRixDQUFRNEssRUFBUixDQUFXLGVBQVgsRUFBNEJ2VSxDQUFDLENBQUNrTixVQUE5QjtBQUNIO0FBQ0o7O0FBRUQsUUFBSWxOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5GLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJqSCxDQUFDLENBQUNvTSxPQUFGLENBQVV0RSxnQkFBVixLQUErQixJQUExRCxJQUFrRTlILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQS9GLEVBQTZHO0FBRXpHM0MsT0FBQyxDQUFDLElBQUQsRUFBTzFGLENBQUMsQ0FBQzJKLEtBQVQsQ0FBRCxDQUNLNEssRUFETCxDQUNRLGtCQURSLEVBQzRCN08sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBRDVCLEVBRUt1VSxFQUZMLENBRVEsa0JBRlIsRUFFNEI3TyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FGNUI7QUFJSDtBQUVKLEdBdEJEOztBQXdCQTJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3WixlQUFoQixHQUFrQyxZQUFXO0FBRXpDLFFBQUluWCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVV4RSxZQUFmLEVBQThCO0FBRTFCNUgsT0FBQyxDQUFDMEssS0FBRixDQUFRNkosRUFBUixDQUFXLGtCQUFYLEVBQStCN08sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBQS9COztBQUNBQSxPQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsa0JBQVgsRUFBK0I3TyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FBL0I7QUFFSDtBQUVKLEdBWEQ7O0FBYUEyRixPQUFLLENBQUNoSSxTQUFOLENBQWdCNFksZ0JBQWhCLEdBQW1DLFlBQVc7QUFFMUMsUUFBSXZXLENBQUMsR0FBRyxJQUFSOztBQUVBQSxLQUFDLENBQUNpWCxlQUFGOztBQUVBalgsS0FBQyxDQUFDa1gsYUFBRjs7QUFDQWxYLEtBQUMsQ0FBQ21YLGVBQUY7O0FBRUFuWCxLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsa0NBQVgsRUFBK0M7QUFDM0M2QyxZQUFNLEVBQUU7QUFEbUMsS0FBL0MsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsaUNBQVgsRUFBOEM7QUFDMUM2QyxZQUFNLEVBQUU7QUFEa0MsS0FBOUMsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsOEJBQVgsRUFBMkM7QUFDdkM2QyxZQUFNLEVBQUU7QUFEK0IsS0FBM0MsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsb0NBQVgsRUFBaUQ7QUFDN0M2QyxZQUFNLEVBQUU7QUFEcUMsS0FBakQsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBSUFoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsYUFBWCxFQUEwQnZVLENBQUMsQ0FBQzZNLFlBQTVCOztBQUVBbkgsS0FBQyxDQUFDekYsUUFBRCxDQUFELENBQVlzVSxFQUFaLENBQWV2VSxDQUFDLENBQUNnTSxnQkFBakIsRUFBbUN0RyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUN1VCxVQUFWLEVBQXNCdlQsQ0FBdEIsQ0FBbkM7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUTZKLEVBQVIsQ0FBVyxlQUFYLEVBQTRCdlUsQ0FBQyxDQUFDa04sVUFBOUI7QUFDSDs7QUFFRCxRQUFJbE4sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQzVCLE9BQUMsQ0FBQzFGLENBQUMsQ0FBQ29LLFdBQUgsQ0FBRCxDQUFpQnZILFFBQWpCLEdBQTRCMFIsRUFBNUIsQ0FBK0IsYUFBL0IsRUFBOEN2VSxDQUFDLENBQUM4TSxhQUFoRDtBQUNIOztBQUVEcEgsS0FBQyxDQUFDdkYsTUFBRCxDQUFELENBQVVvVSxFQUFWLENBQWEsbUNBQW1DdlUsQ0FBQyxDQUFDNEYsV0FBbEQsRUFBK0RGLENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQ3lULGlCQUFWLEVBQTZCelQsQ0FBN0IsQ0FBL0Q7QUFFQTBGLEtBQUMsQ0FBQ3ZGLE1BQUQsQ0FBRCxDQUFVb1UsRUFBVixDQUFhLHdCQUF3QnZVLENBQUMsQ0FBQzRGLFdBQXZDLEVBQW9ERixDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUMwVCxNQUFWLEVBQWtCMVQsQ0FBbEIsQ0FBcEQ7QUFFQTBGLEtBQUMsQ0FBQyxtQkFBRCxFQUFzQjFGLENBQUMsQ0FBQ29LLFdBQXhCLENBQUQsQ0FBc0NtSyxFQUF0QyxDQUF5QyxXQUF6QyxFQUFzRHZVLENBQUMsQ0FBQzZTLGNBQXhEO0FBRUFuTixLQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVW9VLEVBQVYsQ0FBYSxzQkFBc0J2VSxDQUFDLENBQUM0RixXQUFyQyxFQUFrRDVGLENBQUMsQ0FBQytNLFdBQXBEO0FBQ0FySCxLQUFDLENBQUMxRixDQUFDLENBQUMrTSxXQUFILENBQUQ7QUFFSCxHQTNDRDs7QUE2Q0FwSCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMFosTUFBaEIsR0FBeUIsWUFBVztBQUVoQyxRQUFJclgsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBRXBFckksT0FBQyxDQUFDZ0ssVUFBRixDQUFhc04sSUFBYjs7QUFDQXRYLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYXVOLElBQWI7QUFFSDs7QUFFRCxRQUFJdFgsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBRWxFckksT0FBQyxDQUFDMkosS0FBRixDQUFRMk4sSUFBUjtBQUVIO0FBRUosR0FqQkQ7O0FBbUJBM1IsT0FBSyxDQUFDaEksU0FBTixDQUFnQnVQLFVBQWhCLEdBQTZCLFVBQVNvRixLQUFULEVBQWdCO0FBRXpDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUixDQUZ5QyxDQUd4Qzs7O0FBQ0QsUUFBRyxDQUFDc1MsS0FBSyxDQUFDN0MsTUFBTixDQUFhdEssT0FBYixDQUFxQm9TLEtBQXJCLENBQTJCLHVCQUEzQixDQUFKLEVBQXlEO0FBQ3JELFVBQUlqRixLQUFLLENBQUNrRixPQUFOLEtBQWtCLEVBQWxCLElBQXdCeFgsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUF4RCxFQUE4RDtBQUMxRGpHLFNBQUMsQ0FBQzRNLFdBQUYsQ0FBYztBQUNWVCxjQUFJLEVBQUU7QUFDRjRHLG1CQUFPLEVBQUUvUyxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLElBQWxCLEdBQXlCLE1BQXpCLEdBQW1DO0FBRDFDO0FBREksU0FBZDtBQUtILE9BTkQsTUFNTyxJQUFJb0ssS0FBSyxDQUFDa0YsT0FBTixLQUFrQixFQUFsQixJQUF3QnhYLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBeEQsRUFBOEQ7QUFDakVqRyxTQUFDLENBQUM0TSxXQUFGLENBQWM7QUFDVlQsY0FBSSxFQUFFO0FBQ0Y0RyxtQkFBTyxFQUFFL1MsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUFsQixHQUF5QixVQUF6QixHQUFzQztBQUQ3QztBQURJLFNBQWQ7QUFLSDtBQUNKO0FBRUosR0FwQkQ7O0FBc0JBdkMsT0FBSyxDQUFDaEksU0FBTixDQUFnQitKLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSTFILENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXlYLFNBREo7QUFBQSxRQUNlQyxVQURmO0FBQUEsUUFDMkJDLFVBRDNCO0FBQUEsUUFDdUNDLFFBRHZDOztBQUdBLGFBQVNDLFVBQVQsQ0FBb0JDLFdBQXBCLEVBQWlDO0FBRTdCcFMsT0FBQyxDQUFDLGdCQUFELEVBQW1Cb1MsV0FBbkIsQ0FBRCxDQUFpQ3pKLElBQWpDLENBQXNDLFlBQVc7QUFFN0MsWUFBSTBKLEtBQUssR0FBR3JTLENBQUMsQ0FBQyxJQUFELENBQWI7QUFBQSxZQUNJc1MsV0FBVyxHQUFHdFMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLFdBQWIsQ0FEbEI7QUFBQSxZQUVJMEssV0FBVyxHQUFHdlMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLGFBQWIsQ0FGbEI7QUFBQSxZQUdJMkssVUFBVSxHQUFJeFMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLFlBQWIsS0FBOEJ2TixDQUFDLENBQUM0TCxPQUFGLENBQVUyQixJQUFWLENBQWUsWUFBZixDQUhoRDtBQUFBLFlBSUk0SyxXQUFXLEdBQUdsWSxRQUFRLENBQUNvUixhQUFULENBQXVCLEtBQXZCLENBSmxCOztBQU1BOEcsbUJBQVcsQ0FBQ0MsTUFBWixHQUFxQixZQUFXO0FBRTVCTCxlQUFLLENBQ0FySixPQURMLENBQ2E7QUFBRXVGLG1CQUFPLEVBQUU7QUFBWCxXQURiLEVBQzZCLEdBRDdCLEVBQ2tDLFlBQVc7QUFFckMsZ0JBQUlnRSxXQUFKLEVBQWlCO0FBQ2JGLG1CQUFLLENBQ0F4SyxJQURMLENBQ1UsUUFEVixFQUNvQjBLLFdBRHBCOztBQUdBLGtCQUFJQyxVQUFKLEVBQWdCO0FBQ1pILHFCQUFLLENBQ0F4SyxJQURMLENBQ1UsT0FEVixFQUNtQjJLLFVBRG5CO0FBRUg7QUFDSjs7QUFFREgsaUJBQUssQ0FDQXhLLElBREwsQ0FDVSxLQURWLEVBQ2lCeUssV0FEakIsRUFFS3RKLE9BRkwsQ0FFYTtBQUFFdUYscUJBQU8sRUFBRTtBQUFYLGFBRmIsRUFFNkIsR0FGN0IsRUFFa0MsWUFBVztBQUNyQzhELG1CQUFLLENBQ0E1SCxVQURMLENBQ2dCLGtDQURoQixFQUVLRCxXQUZMLENBRWlCLGVBRmpCO0FBR0gsYUFOTDs7QUFPQWxRLGFBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQ3JTLENBQUQsRUFBSStYLEtBQUosRUFBV0MsV0FBWCxDQUFoQztBQUNILFdBckJMO0FBdUJILFNBekJEOztBQTJCQUcsbUJBQVcsQ0FBQ0UsT0FBWixHQUFzQixZQUFXO0FBRTdCTixlQUFLLENBQ0E1SCxVQURMLENBQ2lCLFdBRGpCLEVBRUtELFdBRkwsQ0FFa0IsZUFGbEIsRUFHS0QsUUFITCxDQUdlLHNCQUhmOztBQUtBalEsV0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixlQUFsQixFQUFtQyxDQUFFclMsQ0FBRixFQUFLK1gsS0FBTCxFQUFZQyxXQUFaLENBQW5DO0FBRUgsU0FURDs7QUFXQUcsbUJBQVcsQ0FBQ0csR0FBWixHQUFrQk4sV0FBbEI7QUFFSCxPQWhERDtBQWtESDs7QUFFRCxRQUFJaFksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQixVQUFJM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3Qm1RLGtCQUFVLEdBQUczWCxDQUFDLENBQUN5SixZQUFGLElBQWtCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUF6QixHQUE2QixDQUEvQyxDQUFiO0FBQ0F1UCxnQkFBUSxHQUFHRCxVQUFVLEdBQUczWCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF2QixHQUFzQyxDQUFqRDtBQUNILE9BSEQsTUFHTztBQUNIc1Asa0JBQVUsR0FBR3JWLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWXZDLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQS9DLENBQVosQ0FBYjtBQUNBdVAsZ0JBQVEsR0FBRyxLQUFLNVgsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUF6QixHQUE2QixDQUFsQyxJQUF1Q3JJLENBQUMsQ0FBQ3lKLFlBQXBEO0FBQ0g7QUFDSixLQVJELE1BUU87QUFDSGtPLGdCQUFVLEdBQUczWCxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEdBQXFCeEgsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QnJJLENBQUMsQ0FBQ3lKLFlBQWhELEdBQStEekosQ0FBQyxDQUFDeUosWUFBOUU7QUFDQW1PLGNBQVEsR0FBR3RWLElBQUksQ0FBQzRNLElBQUwsQ0FBVXlJLFVBQVUsR0FBRzNYLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpDLENBQVg7O0FBQ0EsVUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekIsWUFBSXNRLFVBQVUsR0FBRyxDQUFqQixFQUFvQkEsVUFBVTtBQUM5QixZQUFJQyxRQUFRLElBQUk1WCxDQUFDLENBQUNrSyxVQUFsQixFQUE4QjBOLFFBQVE7QUFDekM7QUFDSjs7QUFFREgsYUFBUyxHQUFHelgsQ0FBQyxDQUFDNEwsT0FBRixDQUFVMEIsSUFBVixDQUFlLGNBQWYsRUFBK0J6TCxLQUEvQixDQUFxQzhWLFVBQXJDLEVBQWlEQyxRQUFqRCxDQUFaOztBQUVBLFFBQUk1WCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3RDLFVBQUk2USxTQUFTLEdBQUdaLFVBQVUsR0FBRyxDQUE3QjtBQUFBLFVBQ0lhLFNBQVMsR0FBR1osUUFEaEI7QUFBQSxVQUVJdk4sT0FBTyxHQUFHckssQ0FBQyxDQUFDNEwsT0FBRixDQUFVMEIsSUFBVixDQUFlLGNBQWYsQ0FGZDs7QUFJQSxXQUFLLElBQUl2USxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBOUIsRUFBOEN2TCxDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLFlBQUl3YixTQUFTLEdBQUcsQ0FBaEIsRUFBbUJBLFNBQVMsR0FBR3ZZLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUEzQjtBQUNuQnVOLGlCQUFTLEdBQUdBLFNBQVMsQ0FBQ2xULEdBQVYsQ0FBYzhGLE9BQU8sQ0FBQzJELEVBQVIsQ0FBV3VLLFNBQVgsQ0FBZCxDQUFaO0FBQ0FkLGlCQUFTLEdBQUdBLFNBQVMsQ0FBQ2xULEdBQVYsQ0FBYzhGLE9BQU8sQ0FBQzJELEVBQVIsQ0FBV3dLLFNBQVgsQ0FBZCxDQUFaO0FBQ0FELGlCQUFTO0FBQ1RDLGlCQUFTO0FBQ1o7QUFDSjs7QUFFRFgsY0FBVSxDQUFDSixTQUFELENBQVY7O0FBRUEsUUFBSXpYLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUN4Q3FQLGdCQUFVLEdBQUcxWCxDQUFDLENBQUM0TCxPQUFGLENBQVUwQixJQUFWLENBQWUsY0FBZixDQUFiO0FBQ0F1SyxnQkFBVSxDQUFDSCxVQUFELENBQVY7QUFDSCxLQUhELE1BSUEsSUFBSTFYLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEvQyxFQUE2RDtBQUN6RHFQLGdCQUFVLEdBQUcxWCxDQUFDLENBQUM0TCxPQUFGLENBQVUwQixJQUFWLENBQWUsZUFBZixFQUFnQ3pMLEtBQWhDLENBQXNDLENBQXRDLEVBQXlDN0IsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBbkQsQ0FBYjtBQUNBd1AsZ0JBQVUsQ0FBQ0gsVUFBRCxDQUFWO0FBQ0gsS0FIRCxNQUdPLElBQUkxWCxDQUFDLENBQUN5SixZQUFGLEtBQW1CLENBQXZCLEVBQTBCO0FBQzdCaU8sZ0JBQVUsR0FBRzFYLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVTBCLElBQVYsQ0FBZSxlQUFmLEVBQWdDekwsS0FBaEMsQ0FBc0M3QixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQUMsQ0FBaEUsQ0FBYjtBQUNBd1AsZ0JBQVUsQ0FBQ0gsVUFBRCxDQUFWO0FBQ0g7QUFFSixHQTFHRDs7QUE0R0EvUixPQUFLLENBQUNoSSxTQUFOLENBQWdCMlksVUFBaEIsR0FBNkIsWUFBVztBQUVwQyxRQUFJdFcsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQytNLFdBQUY7O0FBRUEvTSxLQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCO0FBQ2Q4RSxhQUFPLEVBQUU7QUFESyxLQUFsQjs7QUFJQWpVLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsZUFBdEI7O0FBRUFsUSxLQUFDLENBQUNxWCxNQUFGOztBQUVBLFFBQUlyWCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3RDMUgsT0FBQyxDQUFDeVksbUJBQUY7QUFDSDtBQUVKLEdBbEJEOztBQW9CQTlTLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IrYSxJQUFoQixHQUF1Qi9TLEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnYixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUkzWSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDNE0sV0FBRixDQUFjO0FBQ1ZULFVBQUksRUFBRTtBQUNGNEcsZUFBTyxFQUFFO0FBRFA7QUFESSxLQUFkO0FBTUgsR0FWRDs7QUFZQXBOLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4VixpQkFBaEIsR0FBb0MsWUFBVztBQUUzQyxRQUFJelQsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzBSLGVBQUY7O0FBQ0ExUixLQUFDLENBQUMrTSxXQUFGO0FBRUgsR0FQRDs7QUFTQXBILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JpYixLQUFoQixHQUF3QmpULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrYixVQUFoQixHQUE2QixZQUFXO0FBRTVELFFBQUk3WSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDME0sYUFBRjs7QUFDQTFNLEtBQUMsQ0FBQ3dMLE1BQUYsR0FBVyxJQUFYO0FBRUgsR0FQRDs7QUFTQTdGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtYixJQUFoQixHQUF1Qm5ULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvYixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUkvWSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDd00sUUFBRjs7QUFDQXhNLEtBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQVYsR0FBcUIsSUFBckI7QUFDQXpHLEtBQUMsQ0FBQ3dMLE1BQUYsR0FBVyxLQUFYO0FBQ0F4TCxLQUFDLENBQUNxTCxRQUFGLEdBQWEsS0FBYjtBQUNBckwsS0FBQyxDQUFDc0wsV0FBRixHQUFnQixLQUFoQjtBQUVILEdBVkQ7O0FBWUEzRixPQUFLLENBQUNoSSxTQUFOLENBQWdCcWIsU0FBaEIsR0FBNEIsVUFBU3JMLEtBQVQsRUFBZ0I7QUFFeEMsUUFBSTNOLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUksQ0FBQ0EsQ0FBQyxDQUFDNkssU0FBUCxFQUFtQjtBQUVmN0ssT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixhQUFsQixFQUFpQyxDQUFDclMsQ0FBRCxFQUFJMk4sS0FBSixDQUFqQzs7QUFFQTNOLE9BQUMsQ0FBQ29KLFNBQUYsR0FBYyxLQUFkOztBQUVBLFVBQUlwSixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUN2Q3JJLFNBQUMsQ0FBQytNLFdBQUY7QUFDSDs7QUFFRC9NLE9BQUMsQ0FBQ3dLLFNBQUYsR0FBYyxJQUFkOztBQUVBLFVBQUt4SyxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUFmLEVBQTBCO0FBQ3RCekcsU0FBQyxDQUFDd00sUUFBRjtBQUNIOztBQUVELFVBQUl4TSxDQUFDLENBQUNvTSxPQUFGLENBQVVuRyxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDakcsU0FBQyxDQUFDeVcsT0FBRjs7QUFFQSxZQUFJelcsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0UsYUFBZCxFQUE2QjtBQUN6QixjQUFJMFIsYUFBYSxHQUFHdlQsQ0FBQyxDQUFDMUYsQ0FBQyxDQUFDcUssT0FBRixDQUFVa0gsR0FBVixDQUFjdlIsQ0FBQyxDQUFDeUosWUFBaEIsQ0FBRCxDQUFyQjtBQUNBd1AsdUJBQWEsQ0FBQzFMLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsQ0FBL0IsRUFBa0MyTCxLQUFsQztBQUNIO0FBQ0o7QUFFSjtBQUVKLEdBL0JEOztBQWlDQXZULE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3YixJQUFoQixHQUF1QnhULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J5YixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUlwWixDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDNE0sV0FBRixDQUFjO0FBQ1ZULFVBQUksRUFBRTtBQUNGNEcsZUFBTyxFQUFFO0FBRFA7QUFESSxLQUFkO0FBTUgsR0FWRDs7QUFZQXBOLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrVixjQUFoQixHQUFpQyxVQUFTUCxLQUFULEVBQWdCO0FBRTdDQSxTQUFLLENBQUNPLGNBQU47QUFFSCxHQUpEOztBQU1BbE4sT0FBSyxDQUFDaEksU0FBTixDQUFnQjhhLG1CQUFoQixHQUFzQyxVQUFVWSxRQUFWLEVBQXFCO0FBRXZEQSxZQUFRLEdBQUdBLFFBQVEsSUFBSSxDQUF2Qjs7QUFFQSxRQUFJclosQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJc1osV0FBVyxHQUFHNVQsQ0FBQyxDQUFFLGdCQUFGLEVBQW9CMUYsQ0FBQyxDQUFDNEwsT0FBdEIsQ0FEbkI7QUFBQSxRQUVJbU0sS0FGSjtBQUFBLFFBR0lDLFdBSEo7QUFBQSxRQUlJQyxXQUpKO0FBQUEsUUFLSUMsVUFMSjtBQUFBLFFBTUlDLFdBTko7O0FBUUEsUUFBS21CLFdBQVcsQ0FBQzViLE1BQWpCLEVBQTBCO0FBRXRCcWEsV0FBSyxHQUFHdUIsV0FBVyxDQUFDL0ksS0FBWixFQUFSO0FBQ0F5SCxpQkFBVyxHQUFHRCxLQUFLLENBQUN4SyxJQUFOLENBQVcsV0FBWCxDQUFkO0FBQ0EwSyxpQkFBVyxHQUFHRixLQUFLLENBQUN4SyxJQUFOLENBQVcsYUFBWCxDQUFkO0FBQ0EySyxnQkFBVSxHQUFJSCxLQUFLLENBQUN4SyxJQUFOLENBQVcsWUFBWCxLQUE0QnZOLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVTJCLElBQVYsQ0FBZSxZQUFmLENBQTFDO0FBQ0E0SyxpQkFBVyxHQUFHbFksUUFBUSxDQUFDb1IsYUFBVCxDQUF1QixLQUF2QixDQUFkOztBQUVBOEcsaUJBQVcsQ0FBQ0MsTUFBWixHQUFxQixZQUFXO0FBRTVCLFlBQUlILFdBQUosRUFBaUI7QUFDYkYsZUFBSyxDQUNBeEssSUFETCxDQUNVLFFBRFYsRUFDb0IwSyxXQURwQjs7QUFHQSxjQUFJQyxVQUFKLEVBQWdCO0FBQ1pILGlCQUFLLENBQ0F4SyxJQURMLENBQ1UsT0FEVixFQUNtQjJLLFVBRG5CO0FBRUg7QUFDSjs7QUFFREgsYUFBSyxDQUNBeEssSUFETCxDQUNXLEtBRFgsRUFDa0J5SyxXQURsQixFQUVLN0gsVUFGTCxDQUVnQixrQ0FGaEIsRUFHS0QsV0FITCxDQUdpQixlQUhqQjs7QUFLQSxZQUFLbFEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEcsY0FBVixLQUE2QixJQUFsQyxFQUF5QztBQUNyQ2xHLFdBQUMsQ0FBQytNLFdBQUY7QUFDSDs7QUFFRC9NLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBRXJTLENBQUYsRUFBSytYLEtBQUwsRUFBWUMsV0FBWixDQUFoQzs7QUFDQWhZLFNBQUMsQ0FBQ3lZLG1CQUFGO0FBRUgsT0F4QkQ7O0FBMEJBTixpQkFBVyxDQUFDRSxPQUFaLEdBQXNCLFlBQVc7QUFFN0IsWUFBS2dCLFFBQVEsR0FBRyxDQUFoQixFQUFvQjtBQUVoQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNvQm5ZLG9CQUFVLENBQUUsWUFBVztBQUNuQmxCLGFBQUMsQ0FBQ3lZLG1CQUFGLENBQXVCWSxRQUFRLEdBQUcsQ0FBbEM7QUFDSCxXQUZTLEVBRVAsR0FGTyxDQUFWO0FBSUgsU0FYRCxNQVdPO0FBRUh0QixlQUFLLENBQ0E1SCxVQURMLENBQ2lCLFdBRGpCLEVBRUtELFdBRkwsQ0FFa0IsZUFGbEIsRUFHS0QsUUFITCxDQUdlLHNCQUhmOztBQUtBalEsV0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixlQUFsQixFQUFtQyxDQUFFclMsQ0FBRixFQUFLK1gsS0FBTCxFQUFZQyxXQUFaLENBQW5DOztBQUVBaFksV0FBQyxDQUFDeVksbUJBQUY7QUFFSDtBQUVKLE9BMUJEOztBQTRCQU4saUJBQVcsQ0FBQ0csR0FBWixHQUFrQk4sV0FBbEI7QUFFSCxLQWhFRCxNQWdFTztBQUVIaFksT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixpQkFBbEIsRUFBcUMsQ0FBRXJTLENBQUYsQ0FBckM7QUFFSDtBQUVKLEdBbEZEOztBQW9GQTJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvRCxPQUFoQixHQUEwQixVQUFVd1ksWUFBVixFQUF5QjtBQUUvQyxRQUFJdlosQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUFjeUosWUFBZDtBQUFBLFFBQTRCK1AsZ0JBQTVCOztBQUVBQSxvQkFBZ0IsR0FBR3haLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTVDLENBSitDLENBTS9DO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBWCxJQUF5QnhILENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIrUCxnQkFBOUMsRUFBa0U7QUFDOUR4WixPQUFDLENBQUN5SixZQUFGLEdBQWlCK1AsZ0JBQWpCO0FBQ0gsS0FWOEMsQ0FZL0M7OztBQUNBLFFBQUt4WixDQUFDLENBQUNrSyxVQUFGLElBQWdCbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBL0IsRUFBOEM7QUFDMUNySSxPQUFDLENBQUN5SixZQUFGLEdBQWlCLENBQWpCO0FBRUg7O0FBRURBLGdCQUFZLEdBQUd6SixDQUFDLENBQUN5SixZQUFqQjs7QUFFQXpKLEtBQUMsQ0FBQzhULE9BQUYsQ0FBVSxJQUFWOztBQUVBcE8sS0FBQyxDQUFDb0YsTUFBRixDQUFTOUssQ0FBVCxFQUFZQSxDQUFDLENBQUNtSixRQUFkLEVBQXdCO0FBQUVNLGtCQUFZLEVBQUVBO0FBQWhCLEtBQXhCOztBQUVBekosS0FBQyxDQUFDYyxJQUFGOztBQUVBLFFBQUksQ0FBQ3lZLFlBQUwsRUFBb0I7QUFFaEJ2WixPQUFDLENBQUM0TSxXQUFGLENBQWM7QUFDVlQsWUFBSSxFQUFFO0FBQ0Y0RyxpQkFBTyxFQUFFLE9BRFA7QUFFRnBGLGVBQUssRUFBRWxFO0FBRkw7QUFESSxPQUFkLEVBS0csS0FMSDtBQU9IO0FBRUosR0FyQ0Q7O0FBdUNBOUQsT0FBSyxDQUFDaEksU0FBTixDQUFnQnlQLG1CQUFoQixHQUFzQyxZQUFXO0FBRTdDLFFBQUlwTixDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWM2UixVQUFkO0FBQUEsUUFBMEI0SCxpQkFBMUI7QUFBQSxRQUE2Q3RiLENBQTdDO0FBQUEsUUFDSXViLGtCQUFrQixHQUFHMVosQ0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixJQUF3QixJQURqRDs7QUFHQSxRQUFLdEMsQ0FBQyxDQUFDaVUsSUFBRixDQUFPRCxrQkFBUCxNQUErQixPQUEvQixJQUEwQ0Esa0JBQWtCLENBQUNoYyxNQUFsRSxFQUEyRTtBQUV2RXNDLE9BQUMsQ0FBQytILFNBQUYsR0FBYy9ILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJFLFNBQVYsSUFBdUIsUUFBckM7O0FBRUEsV0FBTThKLFVBQU4sSUFBb0I2SCxrQkFBcEIsRUFBeUM7QUFFckN2YixTQUFDLEdBQUc2QixDQUFDLENBQUNrTCxXQUFGLENBQWN4TixNQUFkLEdBQXFCLENBQXpCOztBQUVBLFlBQUlnYyxrQkFBa0IsQ0FBQzliLGNBQW5CLENBQWtDaVUsVUFBbEMsQ0FBSixFQUFtRDtBQUMvQzRILDJCQUFpQixHQUFHQyxrQkFBa0IsQ0FBQzdILFVBQUQsQ0FBbEIsQ0FBK0JBLFVBQW5ELENBRCtDLENBRy9DO0FBQ0E7O0FBQ0EsaUJBQU8xVCxDQUFDLElBQUksQ0FBWixFQUFnQjtBQUNaLGdCQUFJNkIsQ0FBQyxDQUFDa0wsV0FBRixDQUFjL00sQ0FBZCxLQUFvQjZCLENBQUMsQ0FBQ2tMLFdBQUYsQ0FBYy9NLENBQWQsTUFBcUJzYixpQkFBN0MsRUFBaUU7QUFDN0R6WixlQUFDLENBQUNrTCxXQUFGLENBQWMwTyxNQUFkLENBQXFCemIsQ0FBckIsRUFBdUIsQ0FBdkI7QUFDSDs7QUFDREEsYUFBQztBQUNKOztBQUVENkIsV0FBQyxDQUFDa0wsV0FBRixDQUFjdUssSUFBZCxDQUFtQmdFLGlCQUFuQjs7QUFDQXpaLFdBQUMsQ0FBQ21MLGtCQUFGLENBQXFCc08saUJBQXJCLElBQTBDQyxrQkFBa0IsQ0FBQzdILFVBQUQsQ0FBbEIsQ0FBK0IvTCxRQUF6RTtBQUVIO0FBRUo7O0FBRUQ5RixPQUFDLENBQUNrTCxXQUFGLENBQWMyTyxJQUFkLENBQW1CLFVBQVMvYixDQUFULEVBQVlNLENBQVosRUFBZTtBQUM5QixlQUFTNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVekUsV0FBWixHQUE0QjdKLENBQUMsR0FBQ00sQ0FBOUIsR0FBa0NBLENBQUMsR0FBQ04sQ0FBM0M7QUFDSCxPQUZEO0FBSUg7QUFFSixHQXRDRDs7QUF3Q0E2SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMlEsTUFBaEIsR0FBeUIsWUFBVztBQUVoQyxRQUFJdE8sQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FLLE9BQUYsR0FDSXJLLENBQUMsQ0FBQ29LLFdBQUYsQ0FDS3ZILFFBREwsQ0FDYzdDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWpFLEtBRHhCLEVBRUs4SCxRQUZMLENBRWMsYUFGZCxDQURKO0FBS0FqUSxLQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNxSyxPQUFGLENBQVUzTSxNQUF6Qjs7QUFFQSxRQUFJc0MsQ0FBQyxDQUFDeUosWUFBRixJQUFrQnpKLENBQUMsQ0FBQ2tLLFVBQXBCLElBQWtDbEssQ0FBQyxDQUFDeUosWUFBRixLQUFtQixDQUF6RCxFQUE0RDtBQUN4RHpKLE9BQUMsQ0FBQ3lKLFlBQUYsR0FBaUJ6SixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBNUM7QUFDSDs7QUFFRCxRQUFJdEksQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTlCLEVBQTRDO0FBQ3hDckksT0FBQyxDQUFDeUosWUFBRixHQUFpQixDQUFqQjtBQUNIOztBQUVEekosS0FBQyxDQUFDb04sbUJBQUY7O0FBRUFwTixLQUFDLENBQUNvVyxRQUFGOztBQUNBcFcsS0FBQyxDQUFDNFEsYUFBRjs7QUFDQTVRLEtBQUMsQ0FBQ2dRLFdBQUY7O0FBQ0FoUSxLQUFDLENBQUN3VyxZQUFGOztBQUNBeFcsS0FBQyxDQUFDaVgsZUFBRjs7QUFDQWpYLEtBQUMsQ0FBQ29RLFNBQUY7O0FBQ0FwUSxLQUFDLENBQUM2USxVQUFGOztBQUNBN1EsS0FBQyxDQUFDa1gsYUFBRjs7QUFDQWxYLEtBQUMsQ0FBQ3dULGtCQUFGOztBQUNBeFQsS0FBQyxDQUFDbVgsZUFBRjs7QUFFQW5YLEtBQUMsQ0FBQzBSLGVBQUYsQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekI7O0FBRUEsUUFBSTFSLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlFLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbEM1QixPQUFDLENBQUMxRixDQUFDLENBQUNvSyxXQUFILENBQUQsQ0FBaUJ2SCxRQUFqQixHQUE0QjBSLEVBQTVCLENBQStCLGFBQS9CLEVBQThDdlUsQ0FBQyxDQUFDOE0sYUFBaEQ7QUFDSDs7QUFFRDlNLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0IsT0FBTzlRLENBQUMsQ0FBQ3lKLFlBQVQsS0FBMEIsUUFBMUIsR0FBcUN6SixDQUFDLENBQUN5SixZQUF2QyxHQUFzRCxDQUF4RTs7QUFFQXpKLEtBQUMsQ0FBQytNLFdBQUY7O0FBQ0EvTSxLQUFDLENBQUNzVSxZQUFGOztBQUVBdFUsS0FBQyxDQUFDd0wsTUFBRixHQUFXLENBQUN4TCxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUF0Qjs7QUFDQXpHLEtBQUMsQ0FBQ3dNLFFBQUY7O0FBRUF4TSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLFFBQWxCLEVBQTRCLENBQUNyUyxDQUFELENBQTVCO0FBRUgsR0FoREQ7O0FBa0RBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQitWLE1BQWhCLEdBQXlCLFlBQVc7QUFFaEMsUUFBSTFULENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUkwRixDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsT0FBc0JsUyxDQUFDLENBQUNpTSxXQUE1QixFQUF5QztBQUNyQzlLLGtCQUFZLENBQUNuQixDQUFDLENBQUM4WixXQUFILENBQVo7QUFDQTlaLE9BQUMsQ0FBQzhaLFdBQUYsR0FBZ0IzWixNQUFNLENBQUNlLFVBQVAsQ0FBa0IsWUFBVztBQUN6Q2xCLFNBQUMsQ0FBQ2lNLFdBQUYsR0FBZ0J2RyxDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsRUFBaEI7O0FBQ0FsUyxTQUFDLENBQUMwUixlQUFGOztBQUNBLFlBQUksQ0FBQzFSLENBQUMsQ0FBQzZLLFNBQVAsRUFBbUI7QUFBRTdLLFdBQUMsQ0FBQytNLFdBQUY7QUFBa0I7QUFDMUMsT0FKZSxFQUliLEVBSmEsQ0FBaEI7QUFLSDtBQUNKLEdBWkQ7O0FBY0FwSCxPQUFLLENBQUNoSSxTQUFOLENBQWdCb2MsV0FBaEIsR0FBOEJwVSxLQUFLLENBQUNoSSxTQUFOLENBQWdCcWMsV0FBaEIsR0FBOEIsVUFBU3JNLEtBQVQsRUFBZ0JzTSxZQUFoQixFQUE4QkMsU0FBOUIsRUFBeUM7QUFFakcsUUFBSWxhLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUksT0FBTzJOLEtBQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0JzTSxrQkFBWSxHQUFHdE0sS0FBZjtBQUNBQSxXQUFLLEdBQUdzTSxZQUFZLEtBQUssSUFBakIsR0FBd0IsQ0FBeEIsR0FBNEJqYSxDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBbkQ7QUFDSCxLQUhELE1BR087QUFDSHlELFdBQUssR0FBR3NNLFlBQVksS0FBSyxJQUFqQixHQUF3QixFQUFFdE0sS0FBMUIsR0FBa0NBLEtBQTFDO0FBQ0g7O0FBRUQsUUFBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUFmLElBQW9CeUQsS0FBSyxHQUFHLENBQTVCLElBQWlDQSxLQUFLLEdBQUczTixDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBNUQsRUFBK0Q7QUFDM0QsYUFBTyxLQUFQO0FBQ0g7O0FBRURsSyxLQUFDLENBQUM2TixNQUFGOztBQUVBLFFBQUlxTSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEJsYSxPQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLEdBQXlCMkIsTUFBekI7QUFDSCxLQUZELE1BRU87QUFDSHhFLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDNkYsRUFBM0MsQ0FBOENMLEtBQTlDLEVBQXFEbkosTUFBckQ7QUFDSDs7QUFFRHhFLEtBQUMsQ0FBQ3FLLE9BQUYsR0FBWXJLLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLENBQVo7O0FBRUFuSSxLQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLEtBQUt1SixPQUFMLENBQWFqRSxLQUFwQyxFQUEyQ2dHLE1BQTNDOztBQUVBbk8sS0FBQyxDQUFDb0ssV0FBRixDQUFjZ0UsTUFBZCxDQUFxQnBPLENBQUMsQ0FBQ3FLLE9BQXZCOztBQUVBckssS0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssS0FBQyxDQUFDc08sTUFBRjtBQUVILEdBakNEOztBQW1DQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3YyxNQUFoQixHQUF5QixVQUFTOVYsUUFBVCxFQUFtQjtBQUV4QyxRQUFJckUsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJb2EsYUFBYSxHQUFHLEVBRHBCO0FBQUEsUUFFSXpiLENBRko7QUFBQSxRQUVPTCxDQUZQOztBQUlBLFFBQUkwQixDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCN0QsY0FBUSxHQUFHLENBQUNBLFFBQVo7QUFDSDs7QUFDRDFGLEtBQUMsR0FBR3FCLENBQUMsQ0FBQ3lMLFlBQUYsSUFBa0IsTUFBbEIsR0FBMkJuSixJQUFJLENBQUM0TSxJQUFMLENBQVU3SyxRQUFWLElBQXNCLElBQWpELEdBQXdELEtBQTVEO0FBQ0EvRixLQUFDLEdBQUcwQixDQUFDLENBQUN5TCxZQUFGLElBQWtCLEtBQWxCLEdBQTBCbkosSUFBSSxDQUFDNE0sSUFBTCxDQUFVN0ssUUFBVixJQUFzQixJQUFoRCxHQUF1RCxLQUEzRDtBQUVBK1YsaUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ3lMLFlBQUgsQ0FBYixHQUFnQ3BILFFBQWhDOztBQUVBLFFBQUlyRSxDQUFDLENBQUM0SyxpQkFBRixLQUF3QixLQUE1QixFQUFtQztBQUMvQjVLLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBYytFLEdBQWQsQ0FBa0JpTCxhQUFsQjtBQUNILEtBRkQsTUFFTztBQUNIQSxtQkFBYSxHQUFHLEVBQWhCOztBQUNBLFVBQUlwYSxDQUFDLENBQUNvTCxjQUFGLEtBQXFCLEtBQXpCLEVBQWdDO0FBQzVCZ1AscUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBYixHQUE0QixlQUFlck0sQ0FBZixHQUFtQixJQUFuQixHQUEwQkwsQ0FBMUIsR0FBOEIsR0FBMUQ7O0FBQ0EwQixTQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCaUwsYUFBbEI7QUFDSCxPQUhELE1BR087QUFDSEEscUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBYixHQUE0QixpQkFBaUJyTSxDQUFqQixHQUFxQixJQUFyQixHQUE0QkwsQ0FBNUIsR0FBZ0MsUUFBNUQ7O0FBQ0EwQixTQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCaUwsYUFBbEI7QUFDSDtBQUNKO0FBRUosR0EzQkQ7O0FBNkJBelUsT0FBSyxDQUFDaEksU0FBTixDQUFnQjBjLGFBQWhCLEdBQWdDLFlBQVc7QUFFdkMsUUFBSXJhLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIsVUFBSS9JLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0IzRyxTQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVk7QUFDUm1MLGlCQUFPLEVBQUcsU0FBU3RhLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXhGO0FBRHJCLFNBQVo7QUFHSDtBQUNKLEtBTkQsTUFNTztBQUNINUcsT0FBQyxDQUFDMEssS0FBRixDQUFRaUUsTUFBUixDQUFlM08sQ0FBQyxDQUFDcUssT0FBRixDQUFVa0csS0FBVixHQUFrQjlCLFdBQWxCLENBQThCLElBQTlCLElBQXNDek8sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBL0Q7O0FBQ0EsVUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0IzRyxTQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVk7QUFDUm1MLGlCQUFPLEVBQUd0YSxDQUFDLENBQUNvTSxPQUFGLENBQVV4RixhQUFWLEdBQTBCO0FBRDVCLFNBQVo7QUFHSDtBQUNKOztBQUVENUcsS0FBQyxDQUFDNEosU0FBRixHQUFjNUosQ0FBQyxDQUFDMEssS0FBRixDQUFRd0gsS0FBUixFQUFkO0FBQ0FsUyxLQUFDLENBQUM2SixVQUFGLEdBQWU3SixDQUFDLENBQUMwSyxLQUFGLENBQVFpRSxNQUFSLEVBQWY7O0FBR0EsUUFBSTNPLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBdkIsSUFBZ0MvSSxDQUFDLENBQUNvTSxPQUFGLENBQVV0RCxhQUFWLEtBQTRCLEtBQWhFLEVBQXVFO0FBQ25FOUksT0FBQyxDQUFDbUssVUFBRixHQUFlN0gsSUFBSSxDQUFDNE0sSUFBTCxDQUFVbFAsQ0FBQyxDQUFDNEosU0FBRixHQUFjNUosQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBbEMsQ0FBZjs7QUFDQXJJLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBYzhILEtBQWQsQ0FBb0I1UCxJQUFJLENBQUM0TSxJQUFMLENBQVdsUCxDQUFDLENBQUNtSyxVQUFGLEdBQWVuSyxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDbkYsTUFBakUsQ0FBcEI7QUFFSCxLQUpELE1BSU8sSUFBSXNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDekM5SSxPQUFDLENBQUNvSyxXQUFGLENBQWM4SCxLQUFkLENBQW9CLE9BQU9sUyxDQUFDLENBQUNrSyxVQUE3QjtBQUNILEtBRk0sTUFFQTtBQUNIbEssT0FBQyxDQUFDbUssVUFBRixHQUFlN0gsSUFBSSxDQUFDNE0sSUFBTCxDQUFVbFAsQ0FBQyxDQUFDNEosU0FBWixDQUFmOztBQUNBNUosT0FBQyxDQUFDb0ssV0FBRixDQUFjdUUsTUFBZCxDQUFxQnJNLElBQUksQ0FBQzRNLElBQUwsQ0FBV2xQLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWtHLEtBQVYsR0FBa0I5QixXQUFsQixDQUE4QixJQUE5QixJQUFzQ3pPLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNuRixNQUF4RixDQUFyQjtBQUNIOztBQUVELFFBQUlrQixNQUFNLEdBQUdvQixDQUFDLENBQUNxSyxPQUFGLENBQVVrRyxLQUFWLEdBQWtCNkUsVUFBbEIsQ0FBNkIsSUFBN0IsSUFBcUNwVixDQUFDLENBQUNxSyxPQUFGLENBQVVrRyxLQUFWLEdBQWtCMkIsS0FBbEIsRUFBbEQ7O0FBQ0EsUUFBSWxTLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsS0FBaEMsRUFBdUM5SSxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDcVAsS0FBdkMsQ0FBNkNsUyxDQUFDLENBQUNtSyxVQUFGLEdBQWV2TCxNQUE1RDtBQUUxQyxHQXJDRDs7QUF1Q0ErRyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNGMsT0FBaEIsR0FBMEIsWUFBVztBQUVqQyxRQUFJdmEsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNk8sVUFESjs7QUFHQTdPLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENnSixnQkFBVSxHQUFJN08sQ0FBQyxDQUFDbUssVUFBRixHQUFld0QsS0FBaEIsR0FBeUIsQ0FBQyxDQUF2Qzs7QUFDQSxVQUFJM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUF0QixFQUE0QjtBQUN4QnhDLFNBQUMsQ0FBQ0csT0FBRCxDQUFELENBQVdzSixHQUFYLENBQWU7QUFDWDlLLGtCQUFRLEVBQUUsVUFEQztBQUVYbVcsZUFBSyxFQUFFM0wsVUFGSTtBQUdYOUosYUFBRyxFQUFFLENBSE07QUFJWG1FLGdCQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CLENBSmhCO0FBS1grSyxpQkFBTyxFQUFFO0FBTEUsU0FBZjtBQU9ILE9BUkQsTUFRTztBQUNIdk8sU0FBQyxDQUFDRyxPQUFELENBQUQsQ0FBV3NKLEdBQVgsQ0FBZTtBQUNYOUssa0JBQVEsRUFBRSxVQURDO0FBRVhrQixjQUFJLEVBQUVzSixVQUZLO0FBR1g5SixhQUFHLEVBQUUsQ0FITTtBQUlYbUUsZ0JBQU0sRUFBRWxKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxELE1BQVYsR0FBbUIsQ0FKaEI7QUFLWCtLLGlCQUFPLEVBQUU7QUFMRSxTQUFmO0FBT0g7QUFDSixLQW5CRDs7QUFxQkFqVSxLQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFoTyxDQUFDLENBQUN5SixZQUFmLEVBQTZCMEYsR0FBN0IsQ0FBaUM7QUFDN0JqRyxZQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CLENBREU7QUFFN0IrSyxhQUFPLEVBQUU7QUFGb0IsS0FBakM7QUFLSCxHQS9CRDs7QUFpQ0F0TyxPQUFLLENBQUNoSSxTQUFOLENBQWdCOGMsU0FBaEIsR0FBNEIsWUFBVztBQUVuQyxRQUFJemEsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixLQUEyQixDQUEzQixJQUFnQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxHLGNBQVYsS0FBNkIsSUFBN0QsSUFBcUVsRyxDQUFDLENBQUNvTSxPQUFGLENBQVVyRCxRQUFWLEtBQXVCLEtBQWhHLEVBQXVHO0FBQ25HLFVBQUl5RixZQUFZLEdBQUd4TyxDQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFoTyxDQUFDLENBQUN5SixZQUFmLEVBQTZCZ0YsV0FBN0IsQ0FBeUMsSUFBekMsQ0FBbkI7O0FBQ0F6TyxPQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVksUUFBWixFQUFzQlgsWUFBdEI7QUFDSDtBQUVKLEdBVEQ7O0FBV0E3SSxPQUFLLENBQUNoSSxTQUFOLENBQWdCK2MsU0FBaEIsR0FDQS9VLEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnZCxjQUFoQixHQUFpQyxZQUFXO0FBRXhDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVRLFFBQUkzYSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWM3QixDQUFkO0FBQUEsUUFBaUJ5YyxJQUFqQjtBQUFBLFFBQXVCckYsTUFBdkI7QUFBQSxRQUErQjdSLEtBQS9CO0FBQUEsUUFBc0MzQyxPQUFPLEdBQUcsS0FBaEQ7QUFBQSxRQUF1RDRZLElBQXZEOztBQUVBLFFBQUlqVSxDQUFDLENBQUNpVSxJQUFGLENBQVFsYyxTQUFTLENBQUMsQ0FBRCxDQUFqQixNQUEyQixRQUEvQixFQUEwQztBQUV0QzhYLFlBQU0sR0FBSTlYLFNBQVMsQ0FBQyxDQUFELENBQW5CO0FBQ0FzRCxhQUFPLEdBQUd0RCxTQUFTLENBQUMsQ0FBRCxDQUFuQjtBQUNBa2MsVUFBSSxHQUFHLFVBQVA7QUFFSCxLQU5ELE1BTU8sSUFBS2pVLENBQUMsQ0FBQ2lVLElBQUYsQ0FBUWxjLFNBQVMsQ0FBQyxDQUFELENBQWpCLE1BQTJCLFFBQWhDLEVBQTJDO0FBRTlDOFgsWUFBTSxHQUFJOVgsU0FBUyxDQUFDLENBQUQsQ0FBbkI7QUFDQWlHLFdBQUssR0FBR2pHLFNBQVMsQ0FBQyxDQUFELENBQWpCO0FBQ0FzRCxhQUFPLEdBQUd0RCxTQUFTLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxVQUFLQSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCLFlBQWpCLElBQWlDaUksQ0FBQyxDQUFDaVUsSUFBRixDQUFRbGMsU0FBUyxDQUFDLENBQUQsQ0FBakIsTUFBMkIsT0FBakUsRUFBMkU7QUFFdkVrYyxZQUFJLEdBQUcsWUFBUDtBQUVILE9BSkQsTUFJTyxJQUFLLE9BQU9sYyxTQUFTLENBQUMsQ0FBRCxDQUFoQixLQUF3QixXQUE3QixFQUEyQztBQUU5Q2tjLFlBQUksR0FBRyxRQUFQO0FBRUg7QUFFSjs7QUFFRCxRQUFLQSxJQUFJLEtBQUssUUFBZCxFQUF5QjtBQUVyQjNaLE9BQUMsQ0FBQ29NLE9BQUYsQ0FBVW1KLE1BQVYsSUFBb0I3UixLQUFwQjtBQUdILEtBTEQsTUFLTyxJQUFLaVcsSUFBSSxLQUFLLFVBQWQsRUFBMkI7QUFFOUJqVSxPQUFDLENBQUMySSxJQUFGLENBQVFrSCxNQUFSLEVBQWlCLFVBQVVzRixHQUFWLEVBQWVqRSxHQUFmLEVBQXFCO0FBRWxDNVcsU0FBQyxDQUFDb00sT0FBRixDQUFVeU8sR0FBVixJQUFpQmpFLEdBQWpCO0FBRUgsT0FKRDtBQU9ILEtBVE0sTUFTQSxJQUFLK0MsSUFBSSxLQUFLLFlBQWQsRUFBNkI7QUFFaEMsV0FBTWlCLElBQU4sSUFBY2xYLEtBQWQsRUFBc0I7QUFFbEIsWUFBSWdDLENBQUMsQ0FBQ2lVLElBQUYsQ0FBUTNaLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBFLFVBQWxCLE1BQW1DLE9BQXZDLEVBQWlEO0FBRTdDaEksV0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixHQUF1QixDQUFFdEUsS0FBSyxDQUFDa1gsSUFBRCxDQUFQLENBQXZCO0FBRUgsU0FKRCxNQUlPO0FBRUh6YyxXQUFDLEdBQUc2QixDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLENBQXFCdEssTUFBckIsR0FBNEIsQ0FBaEMsQ0FGRyxDQUlIOztBQUNBLGlCQUFPUyxDQUFDLElBQUksQ0FBWixFQUFnQjtBQUVaLGdCQUFJNkIsQ0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQjdKLENBQXJCLEVBQXdCMFQsVUFBeEIsS0FBdUNuTyxLQUFLLENBQUNrWCxJQUFELENBQUwsQ0FBWS9JLFVBQXZELEVBQW9FO0FBRWhFN1IsZUFBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQjRSLE1BQXJCLENBQTRCemIsQ0FBNUIsRUFBOEIsQ0FBOUI7QUFFSDs7QUFFREEsYUFBQztBQUVKOztBQUVENkIsV0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQnlOLElBQXJCLENBQTJCL1IsS0FBSyxDQUFDa1gsSUFBRCxDQUFoQztBQUVIO0FBRUo7QUFFSjs7QUFFRCxRQUFLN1osT0FBTCxFQUFlO0FBRVhmLE9BQUMsQ0FBQzZOLE1BQUY7O0FBQ0E3TixPQUFDLENBQUNzTyxNQUFGO0FBRUg7QUFFSixHQWhHRDs7QUFrR0EzSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCb1AsV0FBaEIsR0FBOEIsWUFBVztBQUVyQyxRQUFJL00sQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FhLGFBQUY7O0FBRUFyYSxLQUFDLENBQUN5YSxTQUFGOztBQUVBLFFBQUl6YSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCckgsT0FBQyxDQUFDbWEsTUFBRixDQUFTbmEsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFUO0FBQ0gsS0FGRCxNQUVPO0FBQ0h6SixPQUFDLENBQUN1YSxPQUFGO0FBQ0g7O0FBRUR2YSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLENBQUNyUyxDQUFELENBQWpDO0FBRUgsR0FoQkQ7O0FBa0JBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQnlZLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSXBXLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSThhLFNBQVMsR0FBRzdhLFFBQVEsQ0FBQzhhLElBQVQsQ0FBY0MsS0FEOUI7O0FBR0FoYixLQUFDLENBQUN5TCxZQUFGLEdBQWlCekwsQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixJQUF2QixHQUE4QixLQUE5QixHQUFzQyxNQUF2RDs7QUFFQSxRQUFJL0ksQ0FBQyxDQUFDeUwsWUFBRixLQUFtQixLQUF2QixFQUE4QjtBQUMxQnpMLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXFFLFFBQVYsQ0FBbUIsZ0JBQW5CO0FBQ0gsS0FGRCxNQUVPO0FBQ0hqUSxPQUFDLENBQUM0TCxPQUFGLENBQVVzRSxXQUFWLENBQXNCLGdCQUF0QjtBQUNIOztBQUVELFFBQUk0SyxTQUFTLENBQUNHLGdCQUFWLEtBQStCQyxTQUEvQixJQUNBSixTQUFTLENBQUNLLGFBQVYsS0FBNEJELFNBRDVCLElBRUFKLFNBQVMsQ0FBQ00sWUFBVixLQUEyQkYsU0FGL0IsRUFFMEM7QUFDdEMsVUFBSWxiLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXhELE1BQVYsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0I1SSxTQUFDLENBQUNvTCxjQUFGLEdBQW1CLElBQW5CO0FBQ0g7QUFDSjs7QUFFRCxRQUFLcEwsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0UsSUFBZixFQUFzQjtBQUNsQixVQUFLLE9BQU9ySCxDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFqQixLQUE0QixRQUFqQyxFQUE0QztBQUN4QyxZQUFJbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQixDQUF2QixFQUEyQjtBQUN2QmxKLFdBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxELE1BQVYsR0FBbUIsQ0FBbkI7QUFDSDtBQUNKLE9BSkQsTUFJTztBQUNIbEosU0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQmxKLENBQUMsQ0FBQ2dHLFFBQUYsQ0FBV2tELE1BQTlCO0FBQ0g7QUFDSjs7QUFFRCxRQUFJNFIsU0FBUyxDQUFDTyxVQUFWLEtBQXlCSCxTQUE3QixFQUF3QztBQUNwQ2xiLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxZQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLGNBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGFBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ1EsbUJBQVYsS0FBa0NKLFNBQWxDLElBQStDSixTQUFTLENBQUNTLGlCQUFWLEtBQWdDTCxTQUFuRixFQUE4RmxiLENBQUMsQ0FBQ2dMLFFBQUYsR0FBYSxLQUFiO0FBQ2pHOztBQUNELFFBQUk4UCxTQUFTLENBQUNVLFlBQVYsS0FBMkJOLFNBQS9CLEVBQTBDO0FBQ3RDbGIsT0FBQyxDQUFDZ0wsUUFBRixHQUFhLGNBQWI7QUFDQWhMLE9BQUMsQ0FBQzhMLGFBQUYsR0FBa0IsZ0JBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGVBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ1EsbUJBQVYsS0FBa0NKLFNBQWxDLElBQStDSixTQUFTLENBQUNXLGNBQVYsS0FBNkJQLFNBQWhGLEVBQTJGbGIsQ0FBQyxDQUFDZ0wsUUFBRixHQUFhLEtBQWI7QUFDOUY7O0FBQ0QsUUFBSThQLFNBQVMsQ0FBQ1ksZUFBVixLQUE4QlIsU0FBbEMsRUFBNkM7QUFDekNsYixPQUFDLENBQUNnTCxRQUFGLEdBQWEsaUJBQWI7QUFDQWhMLE9BQUMsQ0FBQzhMLGFBQUYsR0FBa0IsbUJBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGtCQUFuQjtBQUNBLFVBQUkrTyxTQUFTLENBQUNRLG1CQUFWLEtBQWtDSixTQUFsQyxJQUErQ0osU0FBUyxDQUFDUyxpQkFBVixLQUFnQ0wsU0FBbkYsRUFBOEZsYixDQUFDLENBQUNnTCxRQUFGLEdBQWEsS0FBYjtBQUNqRzs7QUFDRCxRQUFJOFAsU0FBUyxDQUFDYSxXQUFWLEtBQTBCVCxTQUE5QixFQUF5QztBQUNyQ2xiLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxhQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLGVBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGNBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ2EsV0FBVixLQUEwQlQsU0FBOUIsRUFBeUNsYixDQUFDLENBQUNnTCxRQUFGLEdBQWEsS0FBYjtBQUM1Qzs7QUFDRCxRQUFJOFAsU0FBUyxDQUFDYyxTQUFWLEtBQXdCVixTQUF4QixJQUFxQ2xiLENBQUMsQ0FBQ2dMLFFBQUYsS0FBZSxLQUF4RCxFQUErRDtBQUMzRGhMLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxXQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLFdBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLFlBQW5CO0FBQ0g7O0FBQ0QvTCxLQUFDLENBQUM0SyxpQkFBRixHQUFzQjVLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZELFlBQVYsSUFBMkI3SSxDQUFDLENBQUNnTCxRQUFGLEtBQWUsSUFBZixJQUF1QmhMLENBQUMsQ0FBQ2dMLFFBQUYsS0FBZSxLQUF2RjtBQUNILEdBN0REOztBQWdFQXJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtVCxlQUFoQixHQUFrQyxVQUFTbkQsS0FBVCxFQUFnQjtBQUU5QyxRQUFJM04sQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJOFYsWUFESjtBQUFBLFFBQ2tCK0YsU0FEbEI7QUFBQSxRQUM2Qm5KLFdBRDdCO0FBQUEsUUFDMENvSixTQUQxQzs7QUFHQUQsYUFBUyxHQUFHN2IsQ0FBQyxDQUFDNEwsT0FBRixDQUNQMEIsSUFETyxDQUNGLGNBREUsRUFFUDRDLFdBRk8sQ0FFSyx5Q0FGTCxFQUdQM0MsSUFITyxDQUdGLGFBSEUsRUFHYSxNQUhiLENBQVo7O0FBS0F2TixLQUFDLENBQUNxSyxPQUFGLENBQ0syRCxFQURMLENBQ1FMLEtBRFIsRUFFS3NDLFFBRkwsQ0FFYyxlQUZkOztBQUlBLFFBQUlqUSxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBRS9CLFVBQUlvVixRQUFRLEdBQUcvYixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpCLEtBQStCLENBQS9CLEdBQW1DLENBQW5DLEdBQXVDLENBQXREO0FBRUF5TixrQkFBWSxHQUFHeFQsSUFBSSxDQUFDNlMsS0FBTCxDQUFXblYsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUFwQyxDQUFmOztBQUVBLFVBQUlySSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBRTdCLFlBQUltRyxLQUFLLElBQUltSSxZQUFULElBQXlCbkksS0FBSyxJQUFLM04sQ0FBQyxDQUFDa0ssVUFBRixHQUFlLENBQWhCLEdBQXFCNEwsWUFBM0QsRUFBeUU7QUFDckU5VixXQUFDLENBQUNxSyxPQUFGLENBQ0t4SSxLQURMLENBQ1c4TCxLQUFLLEdBQUdtSSxZQUFSLEdBQXVCaUcsUUFEbEMsRUFDNENwTyxLQUFLLEdBQUdtSSxZQUFSLEdBQXVCLENBRG5FLEVBRUs3RixRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSCxTQU5ELE1BTU87QUFFSG1GLHFCQUFXLEdBQUcxUyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCc0YsS0FBdkM7QUFDQWtPLG1CQUFTLENBQ0poYSxLQURMLENBQ1c2USxXQUFXLEdBQUdvRCxZQUFkLEdBQTZCLENBQTdCLEdBQWlDaUcsUUFENUMsRUFDc0RySixXQUFXLEdBQUdvRCxZQUFkLEdBQTZCLENBRG5GLEVBRUs3RixRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSDs7QUFFRCxZQUFJSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUVia08sbUJBQVMsQ0FDSjdOLEVBREwsQ0FDUTZOLFNBQVMsQ0FBQ25lLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJzQyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUR6QyxFQUVLNEgsUUFGTCxDQUVjLGNBRmQ7QUFJSCxTQU5ELE1BTU8sSUFBSXRDLEtBQUssS0FBSzNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUE3QixFQUFnQztBQUVuQzJSLG1CQUFTLENBQ0o3TixFQURMLENBQ1FoTyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQURsQixFQUVLNEgsUUFGTCxDQUVjLGNBRmQ7QUFJSDtBQUVKOztBQUVEalEsT0FBQyxDQUFDcUssT0FBRixDQUNLMkQsRUFETCxDQUNRTCxLQURSLEVBRUtzQyxRQUZMLENBRWMsY0FGZDtBQUlILEtBNUNELE1BNENPO0FBRUgsVUFBSXRDLEtBQUssSUFBSSxDQUFULElBQWNBLEtBQUssSUFBSzNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW9FO0FBRWhFckksU0FBQyxDQUFDcUssT0FBRixDQUNLeEksS0FETCxDQUNXOEwsS0FEWCxFQUNrQkEsS0FBSyxHQUFHM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFEcEMsRUFFSzRILFFBRkwsQ0FFYyxjQUZkLEVBR0sxQyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtILE9BUEQsTUFPTyxJQUFJc08sU0FBUyxDQUFDbmUsTUFBVixJQUFvQnNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWxDLEVBQWdEO0FBRW5Ed1QsaUJBQVMsQ0FDSjVMLFFBREwsQ0FDYyxjQURkLEVBRUsxQyxJQUZMLENBRVUsYUFGVixFQUV5QixPQUZ6QjtBQUlILE9BTk0sTUFNQTtBQUVIdU8saUJBQVMsR0FBRzliLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJDO0FBQ0FxSyxtQkFBVyxHQUFHMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUF2QixHQUE4QnhILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUJzRixLQUF2RCxHQUErREEsS0FBN0U7O0FBRUEsWUFBSTNOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsSUFBMEJySSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFwQyxJQUF1RHRJLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZXlELEtBQWhCLEdBQXlCM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0YsRUFBMkc7QUFFdkd3VCxtQkFBUyxDQUNKaGEsS0FETCxDQUNXNlEsV0FBVyxJQUFJMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QnlULFNBQTdCLENBRHRCLEVBQytEcEosV0FBVyxHQUFHb0osU0FEN0UsRUFFSzdMLFFBRkwsQ0FFYyxjQUZkLEVBR0sxQyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtILFNBUEQsTUFPTztBQUVIc08sbUJBQVMsQ0FDSmhhLEtBREwsQ0FDVzZRLFdBRFgsRUFDd0JBLFdBQVcsR0FBRzFTLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBRGhELEVBRUs0SCxRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSDtBQUVKO0FBRUo7O0FBRUQsUUFBSXZOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFFLFFBQVYsS0FBdUIsVUFBdkIsSUFBcUMxSCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQWhFLEVBQStFO0FBQzNFMUgsT0FBQyxDQUFDMEgsUUFBRjtBQUNIO0FBQ0osR0FyR0Q7O0FBdUdBL0IsT0FBSyxDQUFDaEksU0FBTixDQUFnQmlULGFBQWhCLEdBQWdDLFlBQVc7QUFFdkMsUUFBSTVRLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSWpELENBREo7QUFBQSxRQUNPaVgsVUFEUDtBQUFBLFFBQ21CZ0ksYUFEbkI7O0FBR0EsUUFBSWhjLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekJySCxPQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEdBQXVCLEtBQXZCO0FBQ0g7O0FBRUQsUUFBSTNHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsSUFBdkIsSUFBK0J4SCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXRELEVBQTZEO0FBRXpEMk0sZ0JBQVUsR0FBRyxJQUFiOztBQUVBLFVBQUloVSxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUV2QyxZQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQnFWLHVCQUFhLEdBQUdoYyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gyVCx1QkFBYSxHQUFHaGMsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUI7QUFDSDs7QUFFRCxhQUFLdEwsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDa0ssVUFBWCxFQUF1Qm5OLENBQUMsR0FBSWlELENBQUMsQ0FBQ2tLLFVBQUYsR0FDcEI4UixhQURSLEVBQ3dCamYsQ0FBQyxJQUFJLENBRDdCLEVBQ2dDO0FBQzVCaVgsb0JBQVUsR0FBR2pYLENBQUMsR0FBRyxDQUFqQjtBQUNBMkksV0FBQyxDQUFDMUYsQ0FBQyxDQUFDcUssT0FBRixDQUFVMkosVUFBVixDQUFELENBQUQsQ0FBeUJpSSxLQUF6QixDQUErQixJQUEvQixFQUFxQzFPLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQ0tBLElBREwsQ0FDVSxrQkFEVixFQUM4QnlHLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBRDdDLEVBRUtnRSxTQUZMLENBRWVsTyxDQUFDLENBQUNvSyxXQUZqQixFQUU4QjZGLFFBRjlCLENBRXVDLGNBRnZDO0FBR0g7O0FBQ0QsYUFBS2xULENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lmLGFBQWEsR0FBSWhjLENBQUMsQ0FBQ2tLLFVBQW5DLEVBQStDbk4sQ0FBQyxJQUFJLENBQXBELEVBQXVEO0FBQ25EaVgsb0JBQVUsR0FBR2pYLENBQWI7QUFDQTJJLFdBQUMsQ0FBQzFGLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJKLFVBQVYsQ0FBRCxDQUFELENBQXlCaUksS0FBekIsQ0FBK0IsSUFBL0IsRUFBcUMxTyxJQUFyQyxDQUEwQyxJQUExQyxFQUFnRCxFQUFoRCxFQUNLQSxJQURMLENBQ1Usa0JBRFYsRUFDOEJ5RyxVQUFVLEdBQUdoVSxDQUFDLENBQUNrSyxVQUQ3QyxFQUVLNEQsUUFGTCxDQUVjOU4sQ0FBQyxDQUFDb0ssV0FGaEIsRUFFNkI2RixRQUY3QixDQUVzQyxjQUZ0QztBQUdIOztBQUNEalEsU0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixFQUFvQ0EsSUFBcEMsQ0FBeUMsTUFBekMsRUFBaURlLElBQWpELENBQXNELFlBQVc7QUFDN0QzSSxXQUFDLENBQUMsSUFBRCxDQUFELENBQVE2SCxJQUFSLENBQWEsSUFBYixFQUFtQixFQUFuQjtBQUNILFNBRkQ7QUFJSDtBQUVKO0FBRUosR0ExQ0Q7O0FBNENBNUgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJWLFNBQWhCLEdBQTRCLFVBQVU0SSxNQUFWLEVBQW1CO0FBRTNDLFFBQUlsYyxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJLENBQUNrYyxNQUFMLEVBQWM7QUFDVmxjLE9BQUMsQ0FBQ3dNLFFBQUY7QUFDSDs7QUFDRHhNLEtBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0I0USxNQUFoQjtBQUVILEdBVEQ7O0FBV0F2VyxPQUFLLENBQUNoSSxTQUFOLENBQWdCbVAsYUFBaEIsR0FBZ0MsVUFBU3dGLEtBQVQsRUFBZ0I7QUFFNUMsUUFBSXRTLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUltYyxhQUFhLEdBQ2J6VyxDQUFDLENBQUM0TSxLQUFLLENBQUM3QyxNQUFQLENBQUQsQ0FBZ0JtRCxFQUFoQixDQUFtQixjQUFuQixJQUNJbE4sQ0FBQyxDQUFDNE0sS0FBSyxDQUFDN0MsTUFBUCxDQURMLEdBRUkvSixDQUFDLENBQUM0TSxLQUFLLENBQUM3QyxNQUFQLENBQUQsQ0FBZ0IyTSxPQUFoQixDQUF3QixjQUF4QixDQUhSO0FBS0EsUUFBSXpPLEtBQUssR0FBR3pMLFFBQVEsQ0FBQ2lhLGFBQWEsQ0FBQzVPLElBQWQsQ0FBbUIsa0JBQW5CLENBQUQsQ0FBcEI7QUFFQSxRQUFJLENBQUNJLEtBQUwsRUFBWUEsS0FBSyxHQUFHLENBQVI7O0FBRVosUUFBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUV4Q3JJLE9BQUMsQ0FBQzJQLFlBQUYsQ0FBZWhDLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsSUFBN0I7O0FBQ0E7QUFFSDs7QUFFRDNOLEtBQUMsQ0FBQzJQLFlBQUYsQ0FBZWhDLEtBQWY7QUFFSCxHQXRCRDs7QUF3QkFoSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1MsWUFBaEIsR0FBK0IsVUFBU2hDLEtBQVQsRUFBZ0IwTyxJQUFoQixFQUFzQjlKLFdBQXRCLEVBQW1DO0FBRTlELFFBQUkwQyxXQUFKO0FBQUEsUUFBaUJxSCxTQUFqQjtBQUFBLFFBQTRCQyxRQUE1QjtBQUFBLFFBQXNDQyxTQUF0QztBQUFBLFFBQWlEM04sVUFBVSxHQUFHLElBQTlEO0FBQUEsUUFDSTdPLENBQUMsR0FBRyxJQURSO0FBQUEsUUFDY3ljLFNBRGQ7O0FBR0FKLFFBQUksR0FBR0EsSUFBSSxJQUFJLEtBQWY7O0FBRUEsUUFBSXJjLENBQUMsQ0FBQ29KLFNBQUYsS0FBZ0IsSUFBaEIsSUFBd0JwSixDQUFDLENBQUNvTSxPQUFGLENBQVVuRCxjQUFWLEtBQTZCLElBQXpELEVBQStEO0FBQzNEO0FBQ0g7O0FBRUQsUUFBSWpKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJySCxDQUFDLENBQUN5SixZQUFGLEtBQW1Ca0UsS0FBbEQsRUFBeUQ7QUFDckQ7QUFDSDs7QUFFRCxRQUFJME8sSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDaEJyYyxPQUFDLENBQUNzRyxRQUFGLENBQVdxSCxLQUFYO0FBQ0g7O0FBRURzSCxlQUFXLEdBQUd0SCxLQUFkO0FBQ0FrQixjQUFVLEdBQUc3TyxDQUFDLENBQUM4VSxPQUFGLENBQVVHLFdBQVYsQ0FBYjtBQUNBdUgsYUFBUyxHQUFHeGMsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFaO0FBRUF6SixLQUFDLENBQUN3SixXQUFGLEdBQWdCeEosQ0FBQyxDQUFDd0ssU0FBRixLQUFnQixJQUFoQixHQUF1QmdTLFNBQXZCLEdBQW1DeGMsQ0FBQyxDQUFDd0ssU0FBckQ7O0FBRUEsUUFBSXhLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsS0FBdkIsSUFBZ0N4SCxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLEtBQXpELEtBQW1FZ0gsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHM04sQ0FBQyxDQUFDc1EsV0FBRixLQUFrQnRRLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXBILENBQUosRUFBeUk7QUFDckksVUFBSXRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUI0TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDeUosWUFBaEI7O0FBQ0EsWUFBSThJLFdBQVcsS0FBSyxJQUFoQixJQUF3QnZTLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW1FO0FBQy9EckksV0FBQyxDQUFDNE8sWUFBRixDQUFlNE4sU0FBZixFQUEwQixZQUFXO0FBQ2pDeGMsYUFBQyxDQUFDZ1osU0FBRixDQUFZL0QsV0FBWjtBQUNILFdBRkQ7QUFHSCxTQUpELE1BSU87QUFDSGpWLFdBQUMsQ0FBQ2daLFNBQUYsQ0FBWS9ELFdBQVo7QUFDSDtBQUNKOztBQUNEO0FBQ0gsS0FaRCxNQVlPLElBQUlqVixDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLEtBQXZCLElBQWdDeEgsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6RCxLQUFrRWdILEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQWpILENBQUosRUFBdUk7QUFDMUksVUFBSXRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUI0TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDeUosWUFBaEI7O0FBQ0EsWUFBSThJLFdBQVcsS0FBSyxJQUFoQixJQUF3QnZTLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW1FO0FBQy9EckksV0FBQyxDQUFDNE8sWUFBRixDQUFlNE4sU0FBZixFQUEwQixZQUFXO0FBQ2pDeGMsYUFBQyxDQUFDZ1osU0FBRixDQUFZL0QsV0FBWjtBQUNILFdBRkQ7QUFHSCxTQUpELE1BSU87QUFDSGpWLFdBQUMsQ0FBQ2daLFNBQUYsQ0FBWS9ELFdBQVo7QUFDSDtBQUNKOztBQUNEO0FBQ0g7O0FBRUQsUUFBS2pWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQWYsRUFBMEI7QUFDdEJxSixtQkFBYSxDQUFDOVAsQ0FBQyxDQUFDc0osYUFBSCxDQUFiO0FBQ0g7O0FBRUQsUUFBSTJMLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUNqQixVQUFJalYsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0NnVSxpQkFBUyxHQUFHdGMsQ0FBQyxDQUFDa0ssVUFBRixHQUFnQmxLLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXJEO0FBQ0gsT0FGRCxNQUVPO0FBQ0hnVSxpQkFBUyxHQUFHdGMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlK0ssV0FBM0I7QUFDSDtBQUNKLEtBTkQsTUFNTyxJQUFJQSxXQUFXLElBQUlqVixDQUFDLENBQUNrSyxVQUFyQixFQUFpQztBQUNwQyxVQUFJbEssQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0NnVSxpQkFBUyxHQUFHLENBQVo7QUFDSCxPQUZELE1BRU87QUFDSEEsaUJBQVMsR0FBR3JILFdBQVcsR0FBR2pWLENBQUMsQ0FBQ2tLLFVBQTVCO0FBQ0g7QUFDSixLQU5NLE1BTUE7QUFDSG9TLGVBQVMsR0FBR3JILFdBQVo7QUFDSDs7QUFFRGpWLEtBQUMsQ0FBQ29KLFNBQUYsR0FBYyxJQUFkOztBQUVBcEosS0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixjQUFsQixFQUFrQyxDQUFDclMsQ0FBRCxFQUFJQSxDQUFDLENBQUN5SixZQUFOLEVBQW9CNlMsU0FBcEIsQ0FBbEM7O0FBRUFDLFlBQVEsR0FBR3ZjLENBQUMsQ0FBQ3lKLFlBQWI7QUFDQXpKLEtBQUMsQ0FBQ3lKLFlBQUYsR0FBaUI2UyxTQUFqQjs7QUFFQXRjLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0I5USxDQUFDLENBQUN5SixZQUFwQjs7QUFFQSxRQUFLekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFBZixFQUEwQjtBQUV0Qm1XLGVBQVMsR0FBR3pjLENBQUMsQ0FBQ3VQLFlBQUYsRUFBWjtBQUNBa04sZUFBUyxHQUFHQSxTQUFTLENBQUMvTSxLQUFWLENBQWdCLFVBQWhCLENBQVo7O0FBRUEsVUFBSytNLFNBQVMsQ0FBQ3ZTLFVBQVYsSUFBd0J1UyxTQUFTLENBQUNyUSxPQUFWLENBQWtCL0QsWUFBL0MsRUFBOEQ7QUFDMURvVSxpQkFBUyxDQUFDM0wsZUFBVixDQUEwQjlRLENBQUMsQ0FBQ3lKLFlBQTVCO0FBQ0g7QUFFSjs7QUFFRHpKLEtBQUMsQ0FBQzZRLFVBQUY7O0FBQ0E3USxLQUFDLENBQUN3VyxZQUFGOztBQUVBLFFBQUl4VyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLFVBQUlrTCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFFdEJ2UyxTQUFDLENBQUNrVSxZQUFGLENBQWVxSSxRQUFmOztBQUVBdmMsU0FBQyxDQUFDK1QsU0FBRixDQUFZdUksU0FBWixFQUF1QixZQUFXO0FBQzlCdGMsV0FBQyxDQUFDZ1osU0FBRixDQUFZc0QsU0FBWjtBQUNILFNBRkQ7QUFJSCxPQVJELE1BUU87QUFDSHRjLFNBQUMsQ0FBQ2daLFNBQUYsQ0FBWXNELFNBQVo7QUFDSDs7QUFDRHRjLE9BQUMsQ0FBQ3VPLGFBQUY7O0FBQ0E7QUFDSDs7QUFFRCxRQUFJZ0UsV0FBVyxLQUFLLElBQWhCLElBQXdCdlMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckQsRUFBbUU7QUFDL0RySSxPQUFDLENBQUM0TyxZQUFGLENBQWVDLFVBQWYsRUFBMkIsWUFBVztBQUNsQzdPLFNBQUMsQ0FBQ2daLFNBQUYsQ0FBWXNELFNBQVo7QUFDSCxPQUZEO0FBR0gsS0FKRCxNQUlPO0FBQ0h0YyxPQUFDLENBQUNnWixTQUFGLENBQVlzRCxTQUFaO0FBQ0g7QUFFSixHQXRIRDs7QUF3SEEzVyxPQUFLLENBQUNoSSxTQUFOLENBQWdCMFksU0FBaEIsR0FBNEIsWUFBVztBQUVuQyxRQUFJclcsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBRXBFckksT0FBQyxDQUFDZ0ssVUFBRixDQUFhMFMsSUFBYjs7QUFDQTFjLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYTJTLElBQWI7QUFFSDs7QUFFRCxRQUFJMWMsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBRWxFckksT0FBQyxDQUFDMkosS0FBRixDQUFRK1MsSUFBUjtBQUVIOztBQUVEMWMsS0FBQyxDQUFDNEwsT0FBRixDQUFVcUUsUUFBVixDQUFtQixlQUFuQjtBQUVILEdBbkJEOztBQXFCQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnZixjQUFoQixHQUFpQyxZQUFXO0FBRXhDLFFBQUlDLEtBQUo7QUFBQSxRQUFXQyxLQUFYO0FBQUEsUUFBa0JoZixDQUFsQjtBQUFBLFFBQXFCaWYsVUFBckI7QUFBQSxRQUFpQzljLENBQUMsR0FBRyxJQUFyQzs7QUFFQTRjLFNBQUssR0FBRzVjLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY29TLE1BQWQsR0FBdUIvYyxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUE3QztBQUNBSCxTQUFLLEdBQUc3YyxDQUFDLENBQUMySyxXQUFGLENBQWNzUyxNQUFkLEdBQXVCamQsQ0FBQyxDQUFDMkssV0FBRixDQUFjdVMsSUFBN0M7QUFDQXJmLEtBQUMsR0FBR3lFLElBQUksQ0FBQzZhLEtBQUwsQ0FBV04sS0FBWCxFQUFrQkQsS0FBbEIsQ0FBSjtBQUVBRSxjQUFVLEdBQUd4YSxJQUFJLENBQUM4YSxLQUFMLENBQVd2ZixDQUFDLEdBQUcsR0FBSixHQUFVeUUsSUFBSSxDQUFDK2EsRUFBMUIsQ0FBYjs7QUFDQSxRQUFJUCxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDaEJBLGdCQUFVLEdBQUcsTUFBTXhhLElBQUksQ0FBQ3lULEdBQUwsQ0FBUytHLFVBQVQsQ0FBbkI7QUFDSDs7QUFFRCxRQUFLQSxVQUFVLElBQUksRUFBZixJQUF1QkEsVUFBVSxJQUFJLENBQXpDLEVBQTZDO0FBQ3pDLGFBQVE5YyxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLEtBQWxCLEdBQTBCLE1BQTFCLEdBQW1DLE9BQTNDO0FBQ0g7O0FBQ0QsUUFBSzRVLFVBQVUsSUFBSSxHQUFmLElBQXdCQSxVQUFVLElBQUksR0FBMUMsRUFBZ0Q7QUFDNUMsYUFBUTljLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsS0FBbEIsR0FBMEIsTUFBMUIsR0FBbUMsT0FBM0M7QUFDSDs7QUFDRCxRQUFLNFUsVUFBVSxJQUFJLEdBQWYsSUFBd0JBLFVBQVUsSUFBSSxHQUExQyxFQUFnRDtBQUM1QyxhQUFROWMsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixLQUFsQixHQUEwQixPQUExQixHQUFvQyxNQUE1QztBQUNIOztBQUNELFFBQUlsSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFWLEtBQThCLElBQWxDLEVBQXdDO0FBQ3BDLFVBQUs4VCxVQUFVLElBQUksRUFBZixJQUF1QkEsVUFBVSxJQUFJLEdBQXpDLEVBQStDO0FBQzNDLGVBQU8sTUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsV0FBTyxVQUFQO0FBRUgsR0FoQ0Q7O0FBa0NBblgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJmLFFBQWhCLEdBQTJCLFVBQVNoTCxLQUFULEVBQWdCO0FBRXZDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0lrSyxVQURKO0FBQUEsUUFFSVIsU0FGSjs7QUFJQTFKLEtBQUMsQ0FBQ3FKLFFBQUYsR0FBYSxLQUFiO0FBQ0FySixLQUFDLENBQUN5SyxPQUFGLEdBQVksS0FBWjs7QUFFQSxRQUFJekssQ0FBQyxDQUFDaUssU0FBTixFQUFpQjtBQUNiakssT0FBQyxDQUFDaUssU0FBRixHQUFjLEtBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFFRGpLLEtBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFDQXRMLEtBQUMsQ0FBQzJMLFdBQUYsR0FBa0IzTCxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLEdBQTRCLEVBQTlCLEdBQXFDLEtBQXJDLEdBQTZDLElBQTdEOztBQUVBLFFBQUt2ZCxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEtBQXVCOUIsU0FBNUIsRUFBd0M7QUFDcEMsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBS2xiLENBQUMsQ0FBQzJLLFdBQUYsQ0FBYzZTLE9BQWQsS0FBMEIsSUFBL0IsRUFBc0M7QUFDbEN4ZCxPQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLENBQUNyUyxDQUFELEVBQUlBLENBQUMsQ0FBQzJjLGNBQUYsRUFBSixDQUExQjtBQUNIOztBQUVELFFBQUszYyxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLElBQTZCdmQsQ0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBaEQsRUFBMkQ7QUFFdkQvVCxlQUFTLEdBQUcxSixDQUFDLENBQUMyYyxjQUFGLEVBQVo7O0FBRUEsY0FBU2pULFNBQVQ7QUFFSSxhQUFLLE1BQUw7QUFDQSxhQUFLLE1BQUw7QUFFSVEsb0JBQVUsR0FDTmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsR0FDSXpJLENBQUMsQ0FBQ2dULGNBQUYsQ0FBa0JoVCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUFuQyxDQURKLEdBRUkzVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUh6QjtBQUtBM1YsV0FBQyxDQUFDdUosZ0JBQUYsR0FBcUIsQ0FBckI7QUFFQTs7QUFFSixhQUFLLE9BQUw7QUFDQSxhQUFLLElBQUw7QUFFSVcsb0JBQVUsR0FDTmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsR0FDSXpJLENBQUMsQ0FBQ2dULGNBQUYsQ0FBa0JoVCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUFuQyxDQURKLEdBRUkzVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUh6QjtBQUtBM1YsV0FBQyxDQUFDdUosZ0JBQUYsR0FBcUIsQ0FBckI7QUFFQTs7QUFFSjtBQTFCSjs7QUErQkEsVUFBSUcsU0FBUyxJQUFJLFVBQWpCLEVBQThCO0FBRTFCMUosU0FBQyxDQUFDMlAsWUFBRixDQUFnQnpGLFVBQWhCOztBQUNBbEssU0FBQyxDQUFDMkssV0FBRixHQUFnQixFQUFoQjs7QUFDQTNLLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkIsQ0FBQ3JTLENBQUQsRUFBSTBKLFNBQUosQ0FBM0I7QUFFSDtBQUVKLEtBM0NELE1BMkNPO0FBRUgsVUFBSzFKLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY29TLE1BQWQsS0FBeUIvYyxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUE1QyxFQUFtRDtBQUUvQ2hkLFNBQUMsQ0FBQzJQLFlBQUYsQ0FBZ0IzUCxDQUFDLENBQUN5SixZQUFsQjs7QUFDQXpKLFNBQUMsQ0FBQzJLLFdBQUYsR0FBZ0IsRUFBaEI7QUFFSDtBQUVKO0FBRUosR0EvRUQ7O0FBaUZBaEYsT0FBSyxDQUFDaEksU0FBTixDQUFnQnFQLFlBQWhCLEdBQStCLFVBQVNzRixLQUFULEVBQWdCO0FBRTNDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RCxLQUFWLEtBQW9CLEtBQXJCLElBQWdDLGdCQUFnQnZJLFFBQWhCLElBQTRCRCxDQUFDLENBQUNvTSxPQUFGLENBQVU1RCxLQUFWLEtBQW9CLEtBQXBGLEVBQTRGO0FBQ3hGO0FBQ0gsS0FGRCxNQUVPLElBQUl4SSxDQUFDLENBQUNvTSxPQUFGLENBQVVqRixTQUFWLEtBQXdCLEtBQXhCLElBQWlDbUwsS0FBSyxDQUFDcUgsSUFBTixDQUFXalosT0FBWCxDQUFtQixPQUFuQixNQUFnQyxDQUFDLENBQXRFLEVBQXlFO0FBQzVFO0FBQ0g7O0FBRURWLEtBQUMsQ0FBQzJLLFdBQUYsQ0FBYytTLFdBQWQsR0FBNEJwTCxLQUFLLENBQUNxTCxhQUFOLElBQXVCckwsS0FBSyxDQUFDcUwsYUFBTixDQUFvQkMsT0FBcEIsS0FBZ0MxQyxTQUF2RCxHQUN4QjVJLEtBQUssQ0FBQ3FMLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCbGdCLE1BREosR0FDYSxDQUR6QztBQUdBc0MsS0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBZCxHQUF5QnpkLENBQUMsQ0FBQzRKLFNBQUYsR0FBYzVKLENBQUMsQ0FBQ29NLE9BQUYsQ0FDbEN6RCxjQURMOztBQUdBLFFBQUkzSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFWLEtBQThCLElBQWxDLEVBQXdDO0FBQ3BDaEosT0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBZCxHQUF5QnpkLENBQUMsQ0FBQzZKLFVBQUYsR0FBZTdKLENBQUMsQ0FBQ29NLE9BQUYsQ0FDbkN6RCxjQURMO0FBRUg7O0FBRUQsWUFBUTJKLEtBQUssQ0FBQ25HLElBQU4sQ0FBV2lMLE1BQW5CO0FBRUksV0FBSyxPQUFMO0FBQ0lwWCxTQUFDLENBQUM2ZCxVQUFGLENBQWF2TCxLQUFiOztBQUNBOztBQUVKLFdBQUssTUFBTDtBQUNJdFMsU0FBQyxDQUFDOGQsU0FBRixDQUFZeEwsS0FBWjs7QUFDQTs7QUFFSixXQUFLLEtBQUw7QUFDSXRTLFNBQUMsQ0FBQ3NkLFFBQUYsQ0FBV2hMLEtBQVg7O0FBQ0E7QUFaUjtBQWdCSCxHQXJDRDs7QUF1Q0EzTSxPQUFLLENBQUNoSSxTQUFOLENBQWdCbWdCLFNBQWhCLEdBQTRCLFVBQVN4TCxLQUFULEVBQWdCO0FBRXhDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0krZCxVQUFVLEdBQUcsS0FEakI7QUFBQSxRQUVJQyxPQUZKO0FBQUEsUUFFYXJCLGNBRmI7QUFBQSxRQUU2QlksV0FGN0I7QUFBQSxRQUUwQ1UsY0FGMUM7QUFBQSxRQUUwREwsT0FGMUQ7QUFBQSxRQUVtRU0sbUJBRm5FOztBQUlBTixXQUFPLEdBQUd0TCxLQUFLLENBQUNxTCxhQUFOLEtBQXdCekMsU0FBeEIsR0FBb0M1SSxLQUFLLENBQUNxTCxhQUFOLENBQW9CQyxPQUF4RCxHQUFrRSxJQUE1RTs7QUFFQSxRQUFJLENBQUM1ZCxDQUFDLENBQUNxSixRQUFILElBQWVySixDQUFDLENBQUNpSyxTQUFqQixJQUE4QjJULE9BQU8sSUFBSUEsT0FBTyxDQUFDbGdCLE1BQVIsS0FBbUIsQ0FBaEUsRUFBbUU7QUFDL0QsYUFBTyxLQUFQO0FBQ0g7O0FBRURzZ0IsV0FBTyxHQUFHaGUsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFWO0FBRUF6SixLQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEdBQXFCWSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXTyxLQUFuQyxHQUEyQzdMLEtBQUssQ0FBQzhMLE9BQXRFO0FBQ0FwZSxLQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCVSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXUyxLQUFuQyxHQUEyQy9MLEtBQUssQ0FBQ2dNLE9BQXRFO0FBRUF0ZSxLQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLEdBQTRCamIsSUFBSSxDQUFDOGEsS0FBTCxDQUFXOWEsSUFBSSxDQUFDaWMsSUFBTCxDQUNuQ2pjLElBQUksQ0FBQ2tjLEdBQUwsQ0FBU3hlLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY3FTLElBQWQsR0FBcUJoZCxDQUFDLENBQUMySyxXQUFGLENBQWNvUyxNQUE1QyxFQUFvRCxDQUFwRCxDQURtQyxDQUFYLENBQTVCO0FBR0FtQix1QkFBbUIsR0FBRzViLElBQUksQ0FBQzhhLEtBQUwsQ0FBVzlhLElBQUksQ0FBQ2ljLElBQUwsQ0FDN0JqYyxJQUFJLENBQUNrYyxHQUFMLENBQVN4ZSxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCbGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjc1MsTUFBNUMsRUFBb0QsQ0FBcEQsQ0FENkIsQ0FBWCxDQUF0Qjs7QUFHQSxRQUFJLENBQUNqZCxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFYLElBQThCLENBQUNoSixDQUFDLENBQUN5SyxPQUFqQyxJQUE0Q3lULG1CQUFtQixHQUFHLENBQXRFLEVBQXlFO0FBQ3JFbGUsT0FBQyxDQUFDaUssU0FBRixHQUFjLElBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJakssQ0FBQyxDQUFDb00sT0FBRixDQUFVcEQsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQ2hKLE9BQUMsQ0FBQzJLLFdBQUYsQ0FBYzRTLFdBQWQsR0FBNEJXLG1CQUE1QjtBQUNIOztBQUVEdkIsa0JBQWMsR0FBRzNjLENBQUMsQ0FBQzJjLGNBQUYsRUFBakI7O0FBRUEsUUFBSXJLLEtBQUssQ0FBQ3FMLGFBQU4sS0FBd0J6QyxTQUF4QixJQUFxQ2xiLENBQUMsQ0FBQzJLLFdBQUYsQ0FBYzRTLFdBQWQsR0FBNEIsQ0FBckUsRUFBd0U7QUFDcEV2ZCxPQUFDLENBQUN5SyxPQUFGLEdBQVksSUFBWjtBQUNBNkgsV0FBSyxDQUFDTyxjQUFOO0FBQ0g7O0FBRURvTCxrQkFBYyxHQUFHLENBQUNqZSxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLEtBQWxCLEdBQTBCLENBQTFCLEdBQThCLENBQUMsQ0FBaEMsS0FBc0NsSSxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEdBQXFCaGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjb1MsTUFBbkMsR0FBNEMsQ0FBNUMsR0FBZ0QsQ0FBQyxDQUF2RixDQUFqQjs7QUFDQSxRQUFJL2MsQ0FBQyxDQUFDb00sT0FBRixDQUFVcEQsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQ2lWLG9CQUFjLEdBQUdqZSxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCbGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjc1MsTUFBbkMsR0FBNEMsQ0FBNUMsR0FBZ0QsQ0FBQyxDQUFsRTtBQUNIOztBQUdETSxlQUFXLEdBQUd2ZCxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUE1QjtBQUVBdmQsS0FBQyxDQUFDMkssV0FBRixDQUFjNlMsT0FBZCxHQUF3QixLQUF4Qjs7QUFFQSxRQUFJeGQsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QixVQUFLeEgsQ0FBQyxDQUFDeUosWUFBRixLQUFtQixDQUFuQixJQUF3QmtULGNBQWMsS0FBSyxPQUE1QyxJQUF5RDNjLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNzUSxXQUFGLEVBQWxCLElBQXFDcU0sY0FBYyxLQUFLLE1BQXJILEVBQThIO0FBQzFIWSxtQkFBVyxHQUFHdmQsQ0FBQyxDQUFDMkssV0FBRixDQUFjNFMsV0FBZCxHQUE0QnZkLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhGLFlBQXBEO0FBQ0FwSCxTQUFDLENBQUMySyxXQUFGLENBQWM2UyxPQUFkLEdBQXdCLElBQXhCO0FBQ0g7QUFDSjs7QUFFRCxRQUFJeGQsQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5Qi9JLE9BQUMsQ0FBQ3dLLFNBQUYsR0FBY3dULE9BQU8sR0FBR1QsV0FBVyxHQUFHVSxjQUF0QztBQUNILEtBRkQsTUFFTztBQUNIamUsT0FBQyxDQUFDd0ssU0FBRixHQUFjd1QsT0FBTyxHQUFJVCxXQUFXLElBQUl2ZCxDQUFDLENBQUMwSyxLQUFGLENBQVFpRSxNQUFSLEtBQW1CM08sQ0FBQyxDQUFDNEosU0FBekIsQ0FBWixHQUFtRHFVLGNBQTNFO0FBQ0g7O0FBQ0QsUUFBSWplLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBELGVBQVYsS0FBOEIsSUFBbEMsRUFBd0M7QUFDcENoSixPQUFDLENBQUN3SyxTQUFGLEdBQWN3VCxPQUFPLEdBQUdULFdBQVcsR0FBR1UsY0FBdEM7QUFDSDs7QUFFRCxRQUFJamUsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0UsSUFBVixLQUFtQixJQUFuQixJQUEyQnJILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFELFNBQVYsS0FBd0IsS0FBdkQsRUFBOEQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSTFJLENBQUMsQ0FBQ29KLFNBQUYsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDdEJwSixPQUFDLENBQUN3SyxTQUFGLEdBQWMsSUFBZDtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUVEeEssS0FBQyxDQUFDbWEsTUFBRixDQUFTbmEsQ0FBQyxDQUFDd0ssU0FBWDtBQUVILEdBNUVEOztBQThFQTdFLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrZ0IsVUFBaEIsR0FBNkIsVUFBU3ZMLEtBQVQsRUFBZ0I7QUFFekMsUUFBSXRTLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTRkLE9BREo7O0FBR0E1ZCxLQUFDLENBQUNzTCxXQUFGLEdBQWdCLElBQWhCOztBQUVBLFFBQUl0TCxDQUFDLENBQUMySyxXQUFGLENBQWMrUyxXQUFkLEtBQThCLENBQTlCLElBQW1DMWQsQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpFLEVBQStFO0FBQzNFckksT0FBQyxDQUFDMkssV0FBRixHQUFnQixFQUFoQjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUkySCxLQUFLLENBQUNxTCxhQUFOLEtBQXdCekMsU0FBeEIsSUFBcUM1SSxLQUFLLENBQUNxTCxhQUFOLENBQW9CQyxPQUFwQixLQUFnQzFDLFNBQXpFLEVBQW9GO0FBQ2hGMEMsYUFBTyxHQUFHdEwsS0FBSyxDQUFDcUwsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBVjtBQUNIOztBQUVENWQsS0FBQyxDQUFDMkssV0FBRixDQUFjb1MsTUFBZCxHQUF1Qi9jLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY3FTLElBQWQsR0FBcUJZLE9BQU8sS0FBSzFDLFNBQVosR0FBd0IwQyxPQUFPLENBQUNPLEtBQWhDLEdBQXdDN0wsS0FBSyxDQUFDOEwsT0FBMUY7QUFDQXBlLEtBQUMsQ0FBQzJLLFdBQUYsQ0FBY3NTLE1BQWQsR0FBdUJqZCxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCVSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDUyxLQUFoQyxHQUF3Qy9MLEtBQUssQ0FBQ2dNLE9BQTFGO0FBRUF0ZSxLQUFDLENBQUNxSixRQUFGLEdBQWEsSUFBYjtBQUVILEdBckJEOztBQXVCQTFELE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4Z0IsY0FBaEIsR0FBaUM5WSxLQUFLLENBQUNoSSxTQUFOLENBQWdCK2dCLGFBQWhCLEdBQWdDLFlBQVc7QUFFeEUsUUFBSTFlLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQzZMLFlBQUYsS0FBbUIsSUFBdkIsRUFBNkI7QUFFekI3TCxPQUFDLENBQUM2TixNQUFGOztBQUVBN04sT0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixLQUFLdUosT0FBTCxDQUFhakUsS0FBcEMsRUFBMkNnRyxNQUEzQzs7QUFFQW5PLE9BQUMsQ0FBQzZMLFlBQUYsQ0FBZWlDLFFBQWYsQ0FBd0I5TixDQUFDLENBQUNvSyxXQUExQjs7QUFFQXBLLE9BQUMsQ0FBQ3NPLE1BQUY7QUFFSDtBQUVKLEdBaEJEOztBQWtCQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrUSxNQUFoQixHQUF5QixZQUFXO0FBRWhDLFFBQUk3TixDQUFDLEdBQUcsSUFBUjs7QUFFQTBGLEtBQUMsQ0FBQyxlQUFELEVBQWtCMUYsQ0FBQyxDQUFDNEwsT0FBcEIsQ0FBRCxDQUE4QnBILE1BQTlCOztBQUVBLFFBQUl4RSxDQUFDLENBQUMySixLQUFOLEVBQWE7QUFDVDNKLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUW5GLE1BQVI7QUFDSDs7QUFFRCxRQUFJeEUsQ0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBZ0I1QixDQUFDLENBQUNvTSxPQUFGLENBQVU3RixTQUExQixDQUFwQixFQUEwRDtBQUN0RHZHLE9BQUMsQ0FBQ2dLLFVBQUYsQ0FBYXhGLE1BQWI7QUFDSDs7QUFFRCxRQUFJeEUsQ0FBQyxDQUFDK0osVUFBRixJQUFnQi9KLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBZ0I1QixDQUFDLENBQUNvTSxPQUFGLENBQVU1RixTQUExQixDQUFwQixFQUEwRDtBQUN0RHhHLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYXZGLE1BQWI7QUFDSDs7QUFFRHhFLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FDSzZGLFdBREwsQ0FDaUIsc0RBRGpCLEVBRUszQyxJQUZMLENBRVUsYUFGVixFQUV5QixNQUZ6QixFQUdLNEIsR0FITCxDQUdTLE9BSFQsRUFHa0IsRUFIbEI7QUFLSCxHQXZCRDs7QUF5QkF4SixPQUFLLENBQUNoSSxTQUFOLENBQWdCeVUsT0FBaEIsR0FBMEIsVUFBU3VNLGNBQVQsRUFBeUI7QUFFL0MsUUFBSTNlLENBQUMsR0FBRyxJQUFSOztBQUNBQSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLFNBQWxCLEVBQTZCLENBQUNyUyxDQUFELEVBQUkyZSxjQUFKLENBQTdCOztBQUNBM2UsS0FBQyxDQUFDOFQsT0FBRjtBQUVILEdBTkQ7O0FBUUFuTyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlksWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJeFcsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJOFYsWUFESjs7QUFHQUEsZ0JBQVksR0FBR3hULElBQUksQ0FBQzZTLEtBQUwsQ0FBV25WLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUIsQ0FBcEMsQ0FBZjs7QUFFQSxRQUFLckksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUNEckcsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFEeEIsSUFFRCxDQUFDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFGZixFQUUwQjtBQUV0QnhILE9BQUMsQ0FBQ2dLLFVBQUYsQ0FBYWtHLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDM0MsSUFBM0MsQ0FBZ0QsZUFBaEQsRUFBaUUsT0FBakU7O0FBQ0F2TixPQUFDLENBQUMrSixVQUFGLENBQWFtRyxXQUFiLENBQXlCLGdCQUF6QixFQUEyQzNDLElBQTNDLENBQWdELGVBQWhELEVBQWlFLE9BQWpFOztBQUVBLFVBQUl2TixDQUFDLENBQUN5SixZQUFGLEtBQW1CLENBQXZCLEVBQTBCO0FBRXRCekosU0FBQyxDQUFDZ0ssVUFBRixDQUFhaUcsUUFBYixDQUFzQixnQkFBdEIsRUFBd0MxQyxJQUF4QyxDQUE2QyxlQUE3QyxFQUE4RCxNQUE5RDs7QUFDQXZOLFNBQUMsQ0FBQytKLFVBQUYsQ0FBYW1HLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDM0MsSUFBM0MsQ0FBZ0QsZUFBaEQsRUFBaUUsT0FBakU7QUFFSCxPQUxELE1BS08sSUFBSXZOLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEzQyxJQUEyRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsS0FBeEYsRUFBK0Y7QUFFbEczRyxTQUFDLENBQUMrSixVQUFGLENBQWFrRyxRQUFiLENBQXNCLGdCQUF0QixFQUF3QzFDLElBQXhDLENBQTZDLGVBQTdDLEVBQThELE1BQTlEOztBQUNBdk4sU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixnQkFBekIsRUFBMkMzQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUVILE9BTE0sTUFLQSxJQUFJdk4sQ0FBQyxDQUFDeUosWUFBRixJQUFrQnpKLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUFqQyxJQUFzQ2xLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBbkUsRUFBeUU7QUFFNUUzRyxTQUFDLENBQUMrSixVQUFGLENBQWFrRyxRQUFiLENBQXNCLGdCQUF0QixFQUF3QzFDLElBQXhDLENBQTZDLGVBQTdDLEVBQThELE1BQTlEOztBQUNBdk4sU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixnQkFBekIsRUFBMkMzQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUVIO0FBRUo7QUFFSixHQWpDRDs7QUFtQ0E1SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCa1QsVUFBaEIsR0FBNkIsWUFBVztBQUVwQyxRQUFJN1EsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDMkosS0FBRixLQUFZLElBQWhCLEVBQXNCO0FBRWxCM0osT0FBQyxDQUFDMkosS0FBRixDQUNLMkQsSUFETCxDQUNVLElBRFYsRUFFUzRDLFdBRlQsQ0FFcUIsY0FGckIsRUFHUzhHLEdBSFQ7O0FBS0FoWCxPQUFDLENBQUMySixLQUFGLENBQ0syRCxJQURMLENBQ1UsSUFEVixFQUVLVSxFQUZMLENBRVExTCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBdEMsQ0FGUixFQUdLMkgsUUFITCxDQUdjLGNBSGQ7QUFLSDtBQUVKLEdBbEJEOztBQW9CQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I0VixVQUFoQixHQUE2QixZQUFXO0FBRXBDLFFBQUl2VCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUFmLEVBQTBCO0FBRXRCLFVBQUt4RyxRQUFRLENBQUNELENBQUMsQ0FBQ3VMLE1BQUgsQ0FBYixFQUEwQjtBQUV0QnZMLFNBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsSUFBaEI7QUFFSCxPQUpELE1BSU87QUFFSHRMLFNBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFFSDtBQUVKO0FBRUosR0FsQkQ7O0FBb0JBNUYsR0FBQyxDQUFDa1osRUFBRixDQUFLbFAsS0FBTCxHQUFhLFlBQVc7QUFDcEIsUUFBSTFQLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTZhLEdBQUcsR0FBR3BkLFNBQVMsQ0FBQyxDQUFELENBRG5CO0FBQUEsUUFFSW9oQixJQUFJLEdBQUd2YixLQUFLLENBQUMzRixTQUFOLENBQWdCa0UsS0FBaEIsQ0FBc0IzRSxJQUF0QixDQUEyQk8sU0FBM0IsRUFBc0MsQ0FBdEMsQ0FGWDtBQUFBLFFBR0lVLENBQUMsR0FBRzZCLENBQUMsQ0FBQ3RDLE1BSFY7QUFBQSxRQUlJWCxDQUpKO0FBQUEsUUFLSStoQixHQUxKOztBQU1BLFNBQUsvaEIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHb0IsQ0FBaEIsRUFBbUJwQixDQUFDLEVBQXBCLEVBQXdCO0FBQ3BCLFVBQUksUUFBTzhkLEdBQVAsS0FBYyxRQUFkLElBQTBCLE9BQU9BLEdBQVAsSUFBYyxXQUE1QyxFQUNJN2EsQ0FBQyxDQUFDakQsQ0FBRCxDQUFELENBQUsyUyxLQUFMLEdBQWEsSUFBSS9KLEtBQUosQ0FBVTNGLENBQUMsQ0FBQ2pELENBQUQsQ0FBWCxFQUFnQjhkLEdBQWhCLENBQWIsQ0FESixLQUdJaUUsR0FBRyxHQUFHOWUsQ0FBQyxDQUFDakQsQ0FBRCxDQUFELENBQUsyUyxLQUFMLENBQVdtTCxHQUFYLEVBQWdCNVosS0FBaEIsQ0FBc0JqQixDQUFDLENBQUNqRCxDQUFELENBQUQsQ0FBSzJTLEtBQTNCLEVBQWtDbVAsSUFBbEMsQ0FBTjtBQUNKLFVBQUksT0FBT0MsR0FBUCxJQUFjLFdBQWxCLEVBQStCLE9BQU9BLEdBQVA7QUFDbEM7O0FBQ0QsV0FBTzllLENBQVA7QUFDSCxHQWZEO0FBaUJILENBajdGQyxDQUFELEM7Ozs7Ozs7Ozs7O0FDakJEckQsTUFBTSxDQUFDRCxPQUFQLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakMsTUFBSSxDQUFDQSxNQUFNLENBQUNvaUIsZUFBWixFQUE2QjtBQUM1QnBpQixVQUFNLENBQUNxaUIsU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7O0FBQ0FyaUIsVUFBTSxDQUFDc2lCLEtBQVAsR0FBZSxFQUFmLENBRjRCLENBRzVCOztBQUNBLFFBQUksQ0FBQ3RpQixNQUFNLENBQUNrRyxRQUFaLEVBQXNCbEcsTUFBTSxDQUFDa0csUUFBUCxHQUFrQixFQUFsQjtBQUN0QnRGLFVBQU0sQ0FBQ2tHLGNBQVAsQ0FBc0I5RyxNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUN2Q29ILGdCQUFVLEVBQUUsSUFEMkI7QUFFdkN3TixTQUFHLEVBQUUsZUFBVztBQUNmLGVBQU81VSxNQUFNLENBQUN3QixDQUFkO0FBQ0E7QUFKc0MsS0FBeEM7QUFNQVosVUFBTSxDQUFDa0csY0FBUCxDQUFzQjlHLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ25Db0gsZ0JBQVUsRUFBRSxJQUR1QjtBQUVuQ3dOLFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBTzVVLE1BQU0sQ0FBQ0ksQ0FBZDtBQUNBO0FBSmtDLEtBQXBDO0FBTUFKLFVBQU0sQ0FBQ29pQixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7O0FBQ0QsU0FBT3BpQixNQUFQO0FBQ0EsQ0FyQkQsQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFFQStJLDZDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjZPLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDaEQ3TywrQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJ3WixJQUF2QixDQUE0Qiw2REFBNUI7QUFDQXhaLCtDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3laLE9BQWhDOztBQUNBLE1BQUksQ0FBQ3paLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVCxJQUFSLEdBQWU5RixFQUFmLENBQWtCLFVBQWxCLENBQUwsRUFBb0M7QUFDbENsTixpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ1QsSUFBUixHQUFlMEcsU0FBZixDQUF5QixHQUF6QjtBQUNBMVosaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRILElBQVIsQ0FBYSxtQkFBYixFQUFrQzRSLElBQWxDLENBQXVDLDJEQUF2QztBQUNEO0FBQ0YsQ0FQRCxFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtDQUdBO0FBQ0E7O0FBQ0FHLDBDQUFHLENBQUN2ZSxJQUFKLENBQVM7QUFDUDtBQUNBOUIsU0FBTyxFQUFFLEtBRkY7QUFFUztBQUNoQkUsWUFBVSxFQUFFLGtCQUhMO0FBR3lCO0FBQ2hDb2dCLGVBQWEsRUFBRSxVQUpSO0FBSW9CO0FBQzNCQyxtQkFBaUIsRUFBRSxhQUxaO0FBSzJCO0FBQ2xDQyxlQUFhLEVBQUUsS0FOUjtBQU1lO0FBQ3RCbmdCLHlCQUF1QixFQUFFLEtBUGxCO0FBT3lCO0FBQ2hDRCxlQUFhLEVBQUUsRUFSUjtBQVFZO0FBQ25CRCxlQUFhLEVBQUUsRUFUUjtBQVNZO0FBRW5CO0FBQ0FQLFFBQU0sRUFBRSxHQVpEO0FBWU07QUFDYkMsT0FBSyxFQUFFLENBYkE7QUFhRztBQUNWRSxVQUFRLEVBQUUsR0FkSDtBQWNRO0FBQ2ZELFFBQU0sRUFBRSxNQWZEO0FBZVM7QUFDaEJHLE1BQUksRUFBRSxLQWhCQztBQWdCTTtBQUNid2dCLFFBQU0sRUFBRSxLQWpCRDtBQWlCUTtBQUNmN2EsaUJBQWUsRUFBRSxZQWxCVixDQWtCdUI7O0FBbEJ2QixDQUFULEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBRUFjLDZDQUFDLENBQUMsWUFBWTtBQUNaLE1BQUlnYSxNQUFNLEdBQUcsQ0FBYjtBQUNBaGEsK0NBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2lhLEtBQWQsQ0FBb0IsWUFBWTtBQUM5QixRQUFJRCxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQkUsYUFBTztBQUNSLEtBRkQsTUFFTztBQUNMQyxjQUFRO0FBQ1Q7QUFDRixHQU5EO0FBT0FuYSwrQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlaWEsS0FBZixDQUFxQixZQUFZO0FBQy9CRSxZQUFRO0FBQ1QsR0FGRDs7QUFJQSxXQUFTRCxPQUFULEdBQW9CO0FBQ2xCM2YsWUFBUSxDQUFDNmYsY0FBVCxDQUF3QixPQUF4QixFQUFpQzlFLEtBQWpDLENBQXVDOUksS0FBdkMsR0FBK0MsTUFBL0M7QUFDQXdOLFVBQU0sR0FBRyxDQUFUO0FBQ0Q7O0FBRUQsV0FBU0csUUFBVCxHQUFxQjtBQUNuQjVmLFlBQVEsQ0FBQzZmLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUM5RSxLQUFqQyxDQUF1QzlJLEtBQXZDLEdBQStDLElBQS9DO0FBQ0F3TixVQUFNLEdBQUcsQ0FBVDtBQUNEO0FBQ0YsQ0F0QkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBaGEsNkNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUI2TyxFQUFuQixDQUFzQixZQUF0QixFQUFvQyx5QkFBcEMsRUFBK0QsVUFBQy9YLENBQUQsRUFBTztBQUNwRWtKLCtDQUFDLENBQUNsSixDQUFDLENBQUNpVyxhQUFILENBQUQsQ0FBbUJ4QyxRQUFuQixDQUE0QixNQUE1QjtBQUNBM1AsU0FBTyxDQUFDeWYsR0FBUixDQUFZLGFBQVo7QUFDRCxDQUhELEVBR0d4TCxFQUhILENBR00sWUFITixFQUdvQix5QkFIcEIsRUFHK0MsVUFBQy9YLENBQUQsRUFBTztBQUNwRGtKLCtDQUFDLENBQUNsSixDQUFDLENBQUNpVyxhQUFILENBQUQsQ0FBbUJ2QyxXQUFuQixDQUErQixNQUEvQjtBQUNELENBTEQ7QUFPQXhLLDZDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNk8sRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0Isb0JBQS9CLEVBQXFELFVBQUMvWCxDQUFELEVBQU87QUFDMURBLEdBQUMsQ0FBQ3FXLGNBQUY7QUFDQXJXLEdBQUMsQ0FBQ3FYLGVBQUY7QUFDQSxNQUFJbU0sV0FBVyxHQUFHdGEsNkNBQUMsQ0FBQ2xKLENBQUMsQ0FBQ2lXLGFBQUgsQ0FBbkI7QUFDQSxNQUFJd04sU0FBUyxHQUFHRCxXQUFXLENBQUN0UCxNQUFaLEVBQWhCO0FBQ0EsTUFBSXdQLFNBQVMsR0FBR0QsU0FBUyxDQUFDdlAsTUFBVixFQUFoQjs7QUFDQSxNQUFJd1AsU0FBUyxDQUFDL0osUUFBVixDQUFtQixNQUFuQixDQUFKLEVBQWdDO0FBQzlCK0osYUFBUyxDQUFDM2IsR0FBVixDQUFjMmIsU0FBUyxDQUFDNVMsSUFBVixDQUFlLGlCQUFmLENBQWQsRUFBaUQ0QyxXQUFqRCxDQUE2RCxNQUE3RDtBQUNBK1AsYUFBUyxDQUFDMWIsR0FBVixDQUFjMmIsU0FBUyxDQUFDNVMsSUFBVixDQUFlLEdBQWYsQ0FBZCxFQUFtQ0MsSUFBbkMsQ0FBd0MsZUFBeEMsRUFBeUQsT0FBekQ7QUFDQXlTLGVBQVcsQ0FBQzFTLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDQyxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxPQUExRDtBQUNBeVMsZUFBVyxDQUFDMVMsSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0QsR0FMRCxNQUtPO0FBQ0wyUyxhQUFTLENBQUNDLFFBQVYsQ0FBbUIsT0FBbkIsRUFBNEI3UyxJQUE1QixDQUFpQyxpQkFBakMsRUFBb0QrRSxPQUFwRCxDQUE0RCxPQUE1RDtBQUNBNk4sYUFBUyxDQUFDalEsUUFBVixDQUFtQixNQUFuQjtBQUNBZ1EsYUFBUyxDQUFDMVMsSUFBVixDQUFlLGVBQWYsRUFBZ0MsTUFBaEM7QUFDQXlTLGVBQVcsQ0FBQzFTLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDQyxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxNQUExRDtBQUNBeVMsZUFBVyxDQUFDMVMsSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE9BQTFEO0FBQ0Q7QUFDRixDQWxCRDtBQW9CQTdILDZDQUFDLENBQUN6RixRQUFELENBQUQsQ0FBWTBmLEtBQVosQ0FBa0IsVUFBQ25qQixDQUFELEVBQU87QUFDdkIsTUFBSWtKLDZDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmhJLE1BQXpCLEVBQWlDO0FBQy9CZ0ksaURBQUMsQ0FBQyw0Q0FBRCxDQUFELENBQWdEMk0sT0FBaEQsQ0FBd0QsT0FBeEQ7QUFDRDtBQUNGLENBSkQsRTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEzTSw2Q0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmdLLEtBQWxCLENBQXdCO0FBQ3RCaEksVUFBUSxFQUFFLGFBRFk7QUFFdEJGLFVBQVEsRUFBRSxJQUZZO0FBR3RCUCxNQUFJLEVBQUUsSUFIZ0I7QUFJdEJaLFFBQU0sRUFBRSxLQUpjO0FBS3RCSSxVQUFRLEVBQUUsSUFMWTtBQU10QkMsZUFBYSxFQUFFLElBTk87QUFPdEJXLE1BQUksRUFBRSxJQVBnQjtBQVF0QmtCLE9BQUssRUFBRTtBQVJlLENBQXhCO0FBV0E3Qyw2Q0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJnSyxLQUE5QixDQUFvQztBQUNsQ2xJLFVBQVEsRUFBRSxJQUR3QjtBQUVsQ25CLFFBQU0sRUFBRSxJQUYwQjtBQUdsQ0ksVUFBUSxFQUFFLElBSHdCO0FBSWxDQyxlQUFhLEVBQUUsSUFKbUI7QUFLbENXLE1BQUksRUFBRSxJQUw0QjtBQU1sQ2tCLE9BQUssRUFBRSxJQU4yQjtBQU9sQy9CLFdBQVMsRUFBRSx1R0FQdUI7QUFRbENELFdBQVMsRUFBRTtBQVJ1QixDQUFwQztBQVdBYiw2Q0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JnSyxLQUEvQixDQUFxQztBQUNuQ2xJLFVBQVEsRUFBRSxJQUR5QjtBQUVuQ25CLFFBQU0sRUFBRSxJQUYyQjtBQUduQ0ksVUFBUSxFQUFFLElBSHlCO0FBSW5DQyxlQUFhLEVBQUUsSUFKb0I7QUFLbkNXLE1BQUksRUFBRSxJQUw2QjtBQU1uQ2tCLE9BQUssRUFBRSxJQU40QjtBQU9uQy9CLFdBQVMsRUFBRSxnR0FQd0I7QUFRbkNELFdBQVMsRUFBRTtBQVJ3QixDQUFyQztBQVdBYiw2Q0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJnSyxLQUF6QixDQUErQjtBQUM3Qi9JLFlBQVUsRUFBRSxJQURpQjtBQUU3QkMsZUFBYSxFQUFFLE1BRmM7QUFHN0J5QixjQUFZLEVBQUUsQ0FIZTtBQUk3QjVCLFVBQVEsRUFBRSxJQUptQjtBQUs3QkMsZUFBYSxFQUFFLElBTGM7QUFNN0JMLFFBQU0sRUFBRSxLQU5xQjtBQU83QlksTUFBSSxFQUFFLElBUHVCO0FBUTdCZSxZQUFVLEVBQUUsQ0FDVjtBQUNFNkosY0FBVSxFQUFFLEdBRGQ7QUFFRS9MLFlBQVEsRUFBRTtBQUNSTyxZQUFNLEVBQUUsS0FEQTtBQUVSTSxnQkFBVSxFQUFFLElBRko7QUFHUkMsbUJBQWEsRUFBRSxNQUhQO0FBSVJ5QixrQkFBWSxFQUFFO0FBSk47QUFGWixHQURVLEVBVVY7QUFDRXdKLGNBQVUsRUFBRSxHQURkO0FBRUUvTCxZQUFRLEVBQUU7QUFDUk8sWUFBTSxFQUFFLEtBREE7QUFFUk0sZ0JBQVUsRUFBRSxJQUZKO0FBR1JDLG1CQUFhLEVBQUUsTUFIUDtBQUlSeUIsa0JBQVksRUFBRTtBQUpOO0FBRlosR0FWVTtBQVJpQixDQUEvQixFOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQTNDLDZDQUFDLENBQUN6RixRQUFELENBQUQsQ0FBWVksS0FBWixDQUFrQixZQUFNO0FBQ3RCNkUsK0NBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0ssS0FBdEIsQ0FBNEI7QUFDMUIsY0FBVSxLQURnQjtBQUUxQixzQkFBa0I7QUFGUSxHQUE1QjtBQUtBaEssK0NBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCZ0ssS0FBekI7O0FBQ0EsTUFBSTBRLEVBQUUsQ0FBQ0MsU0FBSCxJQUFnQkQsRUFBRSxDQUFDQyxTQUFILENBQWFDLGdCQUFqQyxFQUFtRDtBQUNqREYsTUFBRSxDQUFDQyxTQUFILENBQWFDLGdCQUFiLENBQThCQyxJQUE5QixDQUFtQywwQkFBbkMsRUFBK0QsVUFBQ0MsU0FBRCxFQUFlO0FBQzVFLFVBQUlBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsYUFBbEIsSUFBbUNGLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsYUFBbEIsQ0FBZ0NDLE1BQWhDLEtBQTJDLCtCQUFsRixFQUFtSDtBQUNqSEgsaUJBQVMsQ0FBQ0ksU0FBVixDQUFvQnRULElBQXBCLENBQXlCLHFCQUF6QixFQUFnRG9DLEtBQWhEO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7QUFDRixDQWRELEUsQ0FnQkE7O0FBQ0FoSyw2Q0FBQyxDQUFDekYsUUFBRCxDQUFELENBQVlZLEtBQVosQ0FBa0IsWUFBTTtBQUN0QjZFLCtDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCbWIsSUFBbEIsQ0FBdUIsVUFBdkIsRUFBbUMsSUFBbkM7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQW5iLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9iLEtBQTVCLENBQWtDLFlBQVk7QUFDNUNwYiwrQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVLLFFBQWhCLENBQXlCLGdCQUF6QjtBQUNBdkssK0NBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CdUssUUFBcEIsQ0FBNkIsaUJBQTdCO0FBQ0QsQ0FIRCxFQUdHLFlBQVk7QUFDYnZLLCtDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCd0ssV0FBaEIsQ0FBNEIsZ0JBQTVCO0FBQ0F4SywrQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0J3SyxXQUFwQixDQUFnQyxpQkFBaEM7QUFDRCxDQU5ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkFPUz10KCk6ZS5BT1M9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciBpPW5bb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiZGlzdC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LHI9bigxKSxhPShvKHIpLG4oNikpLHU9byhhKSxjPW4oNykscz1vKGMpLGY9big4KSxkPW8oZiksbD1uKDkpLHA9byhsKSxtPW4oMTApLGI9byhtKSx2PW4oMTEpLHk9byh2KSxnPW4oMTQpLGg9byhnKSx3PVtdLGs9ITEseD17b2Zmc2V0OjEyMCxkZWxheTowLGVhc2luZzpcImVhc2VcIixkdXJhdGlvbjo0MDAsZGlzYWJsZTohMSxvbmNlOiExLHN0YXJ0RXZlbnQ6XCJET01Db250ZW50TG9hZGVkXCIsdGhyb3R0bGVEZWxheTo5OSxkZWJvdW5jZURlbGF5OjUwLGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiExfSxqPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihlJiYoaz0hMCksaylyZXR1cm4gdz0oMCx5LmRlZmF1bHQpKHcseCksKDAsYi5kZWZhdWx0KSh3LHgub25jZSksd30sTz1mdW5jdGlvbigpe3c9KDAsaC5kZWZhdWx0KSgpLGooKX0sTT1mdW5jdGlvbigpe3cuZm9yRWFjaChmdW5jdGlvbihlLHQpe2Uubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIil9KX0sUz1mdW5jdGlvbihlKXtyZXR1cm4gZT09PSEwfHxcIm1vYmlsZVwiPT09ZSYmcC5kZWZhdWx0Lm1vYmlsZSgpfHxcInBob25lXCI9PT1lJiZwLmRlZmF1bHQucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJnAuZGVmYXVsdC50YWJsZXQoKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpPT09ITB9LF89ZnVuY3Rpb24oZSl7eD1pKHgsZSksdz0oMCxoLmRlZmF1bHQpKCk7dmFyIHQ9ZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2I7cmV0dXJuIFMoeC5kaXNhYmxlKXx8dD9NKCk6KHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5pc1N1cHBvcnRlZCgpfHwoY29uc29sZS5pbmZvKCdcXG4gICAgICBhb3M6IE11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIsXFxuICAgICAgY29kZSBtdXRhdGlvbnMgb2JzZXJ2aW5nIGhhcyBiZWVuIGRpc2FibGVkLlxcbiAgICAgIFlvdSBtYXkgaGF2ZSB0byBjYWxsIFwicmVmcmVzaEhhcmQoKVwiIGJ5IHlvdXJzZWxmLlxcbiAgICAnKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyPSEwKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIix4LmVhc2luZyksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIix4LmR1cmF0aW9uKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiLHguZGVsYXkpLFwiRE9NQ29udGVudExvYWRlZFwiPT09eC5zdGFydEV2ZW50JiZbXCJjb21wbGV0ZVwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKT4tMT9qKCEwKTpcImxvYWRcIj09PXguc3RhcnRFdmVudD93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKDAsdS5kZWZhdWx0KShmdW5jdGlvbigpeygwLGIuZGVmYXVsdCkodyx4Lm9uY2UpfSx4LnRocm90dGxlRGVsYXkpKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQucmVhZHkoXCJbZGF0YS1hb3NdXCIsTyksdyl9O2UuZXhwb3J0cz17aW5pdDpfLHJlZnJlc2g6aixyZWZyZXNoSGFyZDpPfX0sZnVuY3Rpb24oZSx0KXt9LCwsLCxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBvKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLGs9dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBrPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9vKGUpOmd9ZnVuY3Rpb24gYShlKXt2YXIgbj1lLXcsbz1lLWssaT10LW47cmV0dXJuIFM/aihpLHktbyk6aX1mdW5jdGlvbiBjKGUpe3ZhciBuPWUtdyxvPWUtaztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1PKCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLGEoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP28oZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxrPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChPKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1PKCksbj1jKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxvKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LGs9MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIHQ9dSh0KXx8MCxpKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/eCh1KG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIHI9ITAsYT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIGkobykmJihyPVwibGVhZGluZ1wiaW4gbz8hIW8ubGVhZGluZzpyLGE9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6YSksbihlLHQse2xlYWRpbmc6cixtYXhXYWl0OnQsdHJhaWxpbmc6YX0pfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl8fHIoZSkmJmsuY2FsbChlKT09ZH1mdW5jdGlvbiB1KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGEoZSkpcmV0dXJuIGY7aWYoaShlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1pKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGwsXCJcIik7dmFyIG49bS50ZXN0KGUpO3JldHVybiBufHxiLnRlc3QoZSk/dihlLnNsaWNlKDIpLG4/Mjo4KTpwLnRlc3QoZSk/ZjorZX12YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGY9TmFOLGQ9XCJbb2JqZWN0IFN5bWJvbF1cIixsPS9eXFxzK3xcXHMrJC9nLHA9L15bLStdMHhbMC05YS1mXSskL2ksbT0vXjBiWzAxXSskL2ksYj0vXjBvWzAtN10rJC9pLHY9cGFyc2VJbnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQsZz1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpjKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaD15fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdz1PYmplY3QucHJvdG90eXBlLGs9dy50b1N0cmluZyx4PU1hdGgubWF4LGo9TWF0aC5taW4sTz1mdW5jdGlvbigpe3JldHVybiBoLkRhdGUubm93KCl9O2UuZXhwb3J0cz1vfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLE89dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBPPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9pKGUpOmd9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLXcsbz1lLU8saT10LW47cmV0dXJuIFM/eChpLHktbyk6aX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUtdyxvPWUtTztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1qKCk7cmV0dXJuIHMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLHUoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP2koZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxPPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChqKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1qKCksbj1zKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxpKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LE89MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYyk7cmV0dXJuIHQ9YSh0KXx8MCxvKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/ayhhKG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKXx8aShlKSYmdy5jYWxsKGUpPT1mfWZ1bmN0aW9uIGEoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYocihlKSlyZXR1cm4gcztpZihvKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPW8odCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgbj1wLnRlc3QoZSk7cmV0dXJuIG58fG0udGVzdChlKT9iKGUuc2xpY2UoMiksbj8yOjgpOmwudGVzdChlKT9zOitlfXZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIscz1OYU4sZj1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxwPS9eMGJbMDFdKyQvaSxtPS9eMG9bMC03XSskL2ksYj1wYXJzZUludCx2PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnUodCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOnUoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixnPXZ8fHl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxoPU9iamVjdC5wcm90b3R5cGUsdz1oLnRvU3RyaW5nLGs9TWF0aC5tYXgseD1NYXRoLm1pbixqPWZ1bmN0aW9uKCl7cmV0dXJuIGcuRGF0ZS5ub3coKX07ZS5leHBvcnRzPW59KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD12b2lkIDAsbz12b2lkIDAsaT12b2lkIDA7Zm9yKHQ9MDt0PGUubGVuZ3RoO3QrPTEpe2lmKG89ZVt0XSxvLmRhdGFzZXQmJm8uZGF0YXNldC5hb3MpcmV0dXJuITA7aWYoaT1vLmNoaWxkcmVuJiZuKG8uY2hpbGRyZW4pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIG8oKXtyZXR1cm4gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcn1mdW5jdGlvbiBpKCl7cmV0dXJuISFvKCl9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudCxpPW8oKSxyPW5ldyBpKGEpO3U9dCxyLm9ic2VydmUobi5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLHJlbW92ZWROb2RlczohMH0pfWZ1bmN0aW9uIGEoZSl7ZSYmZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuYWRkZWROb2Rlcyksbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLnJlbW92ZWROb2RlcyksaT10LmNvbmNhdChvKTtpZihuKGkpKXJldHVybiB1KCl9KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdT1mdW5jdGlvbigpe307dC5kZWZhdWx0PXtpc1N1cHBvcnRlZDppLHJlYWR5OnJ9fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhfHxcIlwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksYT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSx1PS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaSxjPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpfXJldHVybiBpKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXIudGVzdChlKSYmIWEudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghdS50ZXN0KGUpJiYhYy50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX1dKSxlfSgpO3QuZGVmYXVsdD1uZXcgc30sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9uY2VcIik7dD5lLnBvc2l0aW9uP2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWFuaW1hdGVcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8mJihcImZhbHNlXCI9PT1vfHwhbiYmXCJ0cnVlXCIhPT1vKSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhb3MtYW5pbWF0ZVwiKX0sbz1mdW5jdGlvbihlLHQpe3ZhciBvPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5pbm5lckhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuKGUsaStvLHQpfSl9O3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMikscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtaW5pdFwiKSxlLnBvc2l0aW9uPSgwLHIuZGVmYXVsdCkoZS5ub2RlLHQub2Zmc2V0KX0pLGV9O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMykscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89MCxpPXdpbmRvdy5pbm5lckhlaWdodCxhPXtvZmZzZXQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vZmZzZXRcIiksYW5jaG9yOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yXCIpLGFuY2hvclBsYWNlbWVudDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnRcIil9O3N3aXRjaChhLm9mZnNldCYmIWlzTmFOKGEub2Zmc2V0KSYmKG89cGFyc2VJbnQoYS5vZmZzZXQpKSxhLmFuY2hvciYmZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcikmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpWzBdKSxuPSgwLHIuZGVmYXVsdCkoZSkudG9wLGEuYW5jaG9yUGxhY2VtZW50KXtjYXNlXCJ0b3AtYm90dG9tXCI6YnJlYWs7Y2FzZVwiY2VudGVyLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcInRvcC1jZW50ZXJcIjpuKz1pLzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwidG9wLXRvcFwiOm4rPWk7YnJlYWs7Y2FzZVwiYm90dG9tLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0K2k7YnJlYWs7Y2FzZVwiY2VudGVyLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0LzIraX1yZXR1cm4gYS5hbmNob3JQbGFjZW1lbnR8fGEub2Zmc2V0fHxpc05hTih0KXx8KG89dCksbitvfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7ZSYmIWlzTmFOKGUub2Zmc2V0TGVmdCkmJiFpc05hTihlLm9mZnNldFRvcCk7KXQrPWUub2Zmc2V0TGVmdC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbExlZnQ6MCksbis9ZS5vZmZzZXRUb3AtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxUb3A6MCksZT1lLm9mZnNldFBhcmVudDtyZXR1cm57dG9wOm4sbGVmdDp0fX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFvc11cIiksQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGUsZnVuY3Rpb24oZSl7cmV0dXJue25vZGU6ZX19KX07dC5kZWZhdWx0PW59XSl9KTsiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLWFjY29yZGlvbi0tZXhwYW5kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1kb3duIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICAkKCcuYy1hY2NvcmRpb25fX2JvZHk6dmlzaWJsZScpLnNsaWRlVXAoKVxuICBpZiAoISQodGhpcykubmV4dCgpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKDIwMClcbiAgICAkKHRoaXMpLmZpbmQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXVwIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICB9XG59KVxuIiwiLy8gbnBtIGluc3RhbGwgYW9zIC0tc2F2ZVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnXG5cbi8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIG9wdGlvbmFsIHNldHRpbmdzIG9iamVjdFxuLy8gYmVsb3cgbGlzdGVkIGRlZmF1bHQgc2V0dGluZ3NcbkFPUy5pbml0KHtcbiAgLy8gR2xvYmFsIHNldHRpbmdzOlxuICBkaXNhYmxlOiBmYWxzZSwgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cbiAgc3RhcnRFdmVudDogJ0RPTUNvbnRlbnRMb2FkZWQnLCAvLyBuYW1lIG9mIHRoZSBldmVudCBkaXNwYXRjaGVkIG9uIHRoZSBkb2N1bWVudCwgdGhhdCBBT1Mgc2hvdWxkIGluaXRpYWxpemUgb25cbiAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JywgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgdXNlQ2xhc3NOYW1lczogZmFsc2UsIC8vIGlmIHRydWUsIHdpbGwgYWRkIGNvbnRlbnQgb2YgYGRhdGEtYW9zYCBhcyBjbGFzc2VzIG9uIHNjcm9sbFxuICBkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjogZmFsc2UsIC8vIGRpc2FibGVzIGF1dG9tYXRpYyBtdXRhdGlvbnMnIGRldGVjdGlvbnMgKGFkdmFuY2VkKVxuICBkZWJvdW5jZURlbGF5OiA1MCwgLy8gdGhlIGRlbGF5IG9uIGRlYm91bmNlIHVzZWQgd2hpbGUgcmVzaXppbmcgd2luZG93IChhZHZhbmNlZClcbiAgdGhyb3R0bGVEZWxheTogOTksIC8vIHRoZSBkZWxheSBvbiB0aHJvdHRsZSB1c2VkIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZSAoYWR2YW5jZWQpXG5cbiAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XG4gIG9mZnNldDogMTIwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGR1cmF0aW9uOiA0MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZWFzaW5nOiAnZWFzZScsIC8vIGRlZmF1bHQgZWFzaW5nIGZvciBBT1MgYW5pbWF0aW9uc1xuICBvbmNlOiBmYWxzZSwgLy8gd2hldGhlciBhbmltYXRpb24gc2hvdWxkIGhhcHBlbiBvbmx5IG9uY2UgLSB3aGlsZSBzY3JvbGxpbmcgZG93blxuICBtaXJyb3I6IGZhbHNlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXG4gIGFuY2hvclBsYWNlbWVudDogJ3RvcC1ib3R0b20nIC8vIGRlZmluZXMgd2hpY2ggcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVnYXJkaW5nIHRvIHdpbmRvdyBzaG91bGQgdHJpZ2dlciB0aGUgYW5pbWF0aW9uXG5cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNPcGVuID0gMFxuICAkKCcub3BlbmJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNPcGVuID09PSAwKSB7XG4gICAgICBvcGVuTmF2KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXYoKVxuICAgIH1cbiAgfSlcbiAgJCgnLmNsb3NlYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlTmF2KClcbiAgfSlcblxuICBmdW5jdGlvbiBvcGVuTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIGlzT3BlbiA9IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcwJSdcbiAgICBpc09wZW4gPSAwXG4gIH1cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpXG4gIGNvbnNvbGUubG9nKCdtb3VzZSBlbnRlcicpXG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpXG59KVxuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KClcbiAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKVxuICBpZiAobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgfSBlbHNlIHtcbiAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkuY2xpY2soKGUpID0+IHtcbiAgaWYgKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgfVxufSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuXG4kKCcuc2xpZGVyLWRvdHMnKS5zbGljayh7XG4gIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAzMDAwXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1pbnNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldi1pbnNpZGVcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT4nXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1vdXRzaWRlJykuc2xpY2soe1xuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tb3ZlcmZsb3cnKS5zbGljayh7XG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgc2xpZGVzVG9TaG93OiAzLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgZG90czogdHJ1ZSxcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgfVxuICAgIH1cbiAgXVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdidcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbidcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hb3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hY2NvcmRpb24nXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInXG4vLyBpbXBvcnQgd2VicGFja1N0cmVhbSBmcm9tICd3ZWJwYWNrLXN0cmVhbSdcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCcuYy1wb3N0X19nYWxsZXJ5Jykuc2xpY2soe1xuICAgICdhcnJvd3MnOiBmYWxzZSxcbiAgICAnYWRhcHRpdmVIZWlnaHQnOiB0cnVlXG4gIH0pXG5cbiAgJCgnLm1vc3RfcmVjZW50X3dpZGdldCcpLnNsaWNrKClcbiAgaWYgKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xuICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoJ3BhcnRpYWwtY29udGVudC1yZW5kZXJlZCcsIChwbGFjZW1lbnQpID0+IHtcbiAgICAgIGlmIChwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMuaWRCYXNlID09PSAnX3RoZW1lbmFtZV9tb3N0X3JlY2VudF93aWRnZXQnKSB7XG4gICAgICAgIHBsYWNlbWVudC5jb250YWluZXIuZmluZCgnLm1vc3RfcmVjZW50X3dpZGdldCcpLnNsaWNrKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4vLyBEaXNhYmxlZCBmb3JtIHN1Ym1pdCBidXR0b24gZm9yIENGN1xuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCcjZm9ybS1zdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG59KVxuXG4vLyBTd2FwIHRleHQgZm9yIGJ1dHRvbiBvbiBPdXIgRm9vZCBjYXJkc1xuJCgnLm91ci1mb29kLW92ZXJsYXktbWFpbicpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZvb2QtbWFpbicpLmFkZENsYXNzKCdvdmVyLXRleHQtbm9uZScpXG4gICQoJy5mb29kLW1haW4tYnRuJykuYWRkQ2xhc3MoJ292ZXItdGV4dC1ibG9jaycpXG59LCBmdW5jdGlvbiAoKSB7XG4gICQoJy5mb29kLW1haW4nKS5yZW1vdmVDbGFzcygnb3Zlci10ZXh0LW5vbmUnKVxuICAkKCcuZm9vZC1tYWluLWJ0bicpLnJlbW92ZUNsYXNzKCdvdmVyLXRleHQtYmxvY2snKVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=