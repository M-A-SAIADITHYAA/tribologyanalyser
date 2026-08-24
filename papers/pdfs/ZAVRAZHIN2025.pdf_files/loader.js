"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (_l, _l$i2) {
  function e(e, t, n, r) {
    Object.defineProperty(e, t, {
      get: n,
      set: r,
      enumerable: !0,
      configurable: !0
    });
  }
  var t,
    n,
    r = "u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : "u" > (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : "u" > (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : {};
  function i(e) {
    var _l$i;
    if (e = ((_l$i = l.i) === null || _l$i === void 0 ? void 0 : _l$i[e]) || e, !t) try {
      throw Error();
    } catch (r) {
      var n = ("" + r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
      if (!n) return o + e;
      t = n[0];
    }
    return new URL(o + e, t).toString();
  }
  var o = "./",
    s = {},
    c = {},
    l = r.parcelRequirecb08;
  null == l && ((l = function l(e) {
    if (e in s) return s[e].exports;
    if (e in c) {
      var t = c[e];
      delete c[e];
      var n = {
        id: e,
        exports: {}
      };
      return s[e] = n, t.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw r.code = "MODULE_NOT_FOUND", r;
  }).register = function (e, t) {
    c[e] = t;
  }, r.parcelRequirecb08 = l);
  var a = l.register;
  a("h2FSh", function (t, n) {
    function r(e, t, n, r, i, o, s) {
      try {
        var c = e[o](s),
          l = c.value;
      } catch (e) {
        n(e);
        return;
      }
      c.done ? t(l) : Promise.resolve(l).then(r, i);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, o) {
          var s = e.apply(t, n);
          function c(e) {
            r(s, i, o, c, l, "next", e);
          }
          function l(e) {
            r(s, i, o, c, l, "throw", e);
          }
          c(void 0);
        });
      };
    }
    e(t.exports, "_", function () {
      return i;
    });
  }), a("dmwAz", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e, t) {
      var n,
        r,
        i,
        o = {
          label: 0,
          sent: function sent() {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        },
        s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype),
        c = Object.defineProperty;
      return c(s, "next", {
        value: l(0)
      }), c(s, "throw", {
        value: l(1)
      }), c(s, "return", {
        value: l(2)
      }), "function" == typeof Symbol && c(s, Symbol.iterator, {
        value: function value() {
          return this;
        }
      }), s;
      function l(c) {
        return function (l) {
          var a = [c, l];
          if (n) throw TypeError("Generator is already executing.");
          for (; s && (s = 0, a[0] && (o = 0)), o;) try {
            if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
            switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
              case 0:
              case 1:
                i = a;
                break;
              case 4:
                return o.label++, {
                  value: a[1],
                  done: !1
                };
              case 5:
                o.label++, r = a[1], a = [0];
                continue;
              case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
              default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                  o = 0;
                  continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                  o.label = a[1];
                  break;
                }
                if (6 === a[0] && o.label < i[1]) {
                  o.label = i[1], i = a;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(a);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            a = t.call(e, o);
          } catch (e) {
            a = [6, e], r = 0;
          } finally {
            n = i = 0;
          }
          if (5 & a[0]) throw a[1];
          return {
            value: a[0] ? a[1] : void 0,
            done: !0
          };
        };
      }
    }
  }), a("kTJf3", function (t, n) {
    e(t.exports, "_", function () {
      return i;
    });
    var r = l("6lizL");
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }))), i.forEach(function (t) {
          (0, r._)(e, t, n[t]);
        });
      }
      return e;
    }
  }), a("6lizL", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
  }), a("7nwmn", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e, t) {
      return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function (e) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t.push.apply(t, n);
        }
        return t;
      }(Object(t)).forEach(function (n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
      }), e;
    }
  }), a("2ks5K", function (t, n) {
    e(t.exports, "CmpNotAllowedError", function () {
      return i;
    }), e(t.exports, "isCmpNotAllowedError", function () {
      return o;
    });
    var r = /*#__PURE__*/_createClass(function r(e, t) {
      _classCallCheck(this, r);
      this.name = e, this.message = void 0 === t ? "SDK Error" : t;
    });
    var i = /*#__PURE__*/function (_r) {
      function i(e) {
        var _this;
        _classCallCheck(this, i);
        _this = _callSuper(this, i, ["CMP_NOT_ALLOWED"]), _this.data = {
          showNotAllowedInfo: e
        };
        return _this;
      }
      _inherits(i, _r);
      return _createClass(i);
    }(r);
    var o = function o(e) {
      return "object" == _typeof(e) && "CMP_NOT_ALLOWED" === e.name;
    };
  }), a("3Krri", function (t, n) {
    e(t.exports, "UC_GEO_PARAM", function () {
      return r;
    }), e(t.exports, "parseGeoParam", function () {
      return l;
    });
    var r = "uc_cmp_country",
      i = /^[A-Za-z0-9-]+$/,
      o = /^[A-Za-z]{2}$/,
      s = /^([A-Za-z]{2})-([A-Za-z0-9]{2})$/,
      c = /^([A-Za-z]{2})([A-Za-z0-9]{2})$/;
    function l(e) {
      if ("string" != typeof e || 0 === e.length || e.length > 20) return null;
      var t = e.trim();
      if (0 === t.length || !i.test(t)) return null;
      if (o.test(t)) return {
        country: t.toUpperCase()
      };
      var n = t.match(s);
      if (n) return {
        country: n[1].toUpperCase(),
        region: n[2].toUpperCase()
      };
      var r = t.match(c);
      return r ? {
        country: r[1].toUpperCase(),
        region: r[2].toUpperCase()
      } : null;
    }
  }), a("96QDM", function (t, n) {
    e(t.exports, "webSdkEvents", function () {
      return r;
    });
    var r = new (/*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
        this.startTime = Date.now(), this.callbacks = {
          ALL: [],
          CMP_DATA_COMBINED: [],
          CONSENTS_APPLIED: [],
          INIT_ACTION: [],
          INIT_COMPLETE: [],
          LOCALSTORAGE_UPDATE: [],
          SCRIPTS_UNBLOCKED: [],
          WARN: [],
          ERROR: []
        };
      }
      return _createClass(_class, [{
        key: "subscribe",
        value: function subscribe(e, t) {
          if (!this.callbacks[e]) throw Error("Can't unsubscribe. Subscription \"".concat(e, "\" does not exist."));
          this.callbacks[e].push(t);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, t) {
          if (!this.callbacks[e]) throw Error("Can't unsubscribe. Subscription \"".concat(e, "\" does not exist."));
          this.callbacks[e] = this.callbacks[e].filter(function (e) {
            return t !== e;
          });
        }
      }, {
        key: "emit",
        value: function emit(e, t) {
          var _this2 = this;
          if (!this.callbacks[e]) throw Error("Can't emit event. Event \"".concat(e, "\" does not exist."));
          this.callbacks.ALL.concat(this.callbacks[e]).forEach(function (n) {
            n(e, t, Date.now() - _this2.startTime);
          });
        }
      }]);
    }())();
  }), a("1a1bx", function (t, n) {
    e(t.exports, "CMP_EVENT_TYPE", function () {
      return i;
    });
    var r,
      i = ((r = {}).CMP_SHOWN = "CMP_SHOWN", r.ACCEPT_ALL = "ACCEPT_ALL", r.DENY_ALL = "DENY_ALL", r.SAVE = "SAVE", r.COOKIE_POLICY_LINK = "COOKIE_POLICY_LINK", r.IMPRINT_LINK = "IMPRINT_LINK", r.MORE_INFORMATION_LINK = "MORE_INFORMATION_LINK", r.PRIVACY_POLICY_LINK = "PRIVACY_POLICY_LINK", r.CCPA_TOGGLES_ON = "CCPA_TOGGLES_ON", r.CCPA_TOGGLES_OFF = "CCPA_TOGGLES_OFF", r.SAY_MINE_LINK = "SAY_MINE_LINK", r.ACCEPT_EXPLICIT = "ACCEPT_EXPLICIT", r.ACCEPT_IMPLICIT = "ACCEPT_IMPLICIT", r.DENY_ALL_EXPLICIT = "DENY_ALL_EXPLICIT", r.DENY_ALL_IMPLICIT_CMP_NOT_SHOWN = "DENY_ALL_IMPLICIT_CMP_NOT_SHOWN", r.DENY_ALL_IMPLICIT_CMP_SHOWN = "DENY_ALL_IMPLICIT_CMP_SHOWN", r.CMP_REQUEST_DISPLAY = "CMP_REQUEST_DISPLAY", r.CMP_ELIGIBLE = "CMP_ELIGIBLE", r.AGE_VERIFICATION_ACCEPT = "AGE_VERIFICATION_ACCEPT", r.AGE_VERIFICATION_DENY = "AGE_VERIFICATION_DENY", r);
  }), a("l8qje", function (t, n) {
    e(t.exports, "webSdkEvents", function () {
      return l("96QDM").webSdkEvents;
    }), e(t.exports, "CMP_EVENT_TYPE", function () {
      return l("1a1bx").CMP_EVENT_TYPE;
    }), e(t.exports, "isCmpNotAllowedError", function () {
      return l("2ks5K").isCmpNotAllowedError;
    }), e(t.exports, "isTcfCmpController", function () {
      return r;
    }), e(t.exports, "isGdprCmpController", function () {
      return i;
    }), e(t.exports, "isUsCmpController", function () {
      return o;
    }), l("aSHyZ"), l("96QDM"), l("1a1bx"), l("2ks5K"), l("3Krri");
    var r = function r(e) {
        return "TCF" === e.setting.type;
      },
      i = function i(e) {
        return "GDPR" === e.setting.type;
      },
      o = function o(e) {
        return "US" === e.setting.type;
      };
  }), a("aSHyZ", function (t, n) {
    e(t.exports, "ThemeModel", function () {
      return p;
    });
    var r = l("kTJf3"),
      i = l("7nwmn");
    l("bY6u9");
    var o = l("eQDd5"),
      s = l("6f3tb"),
      c = l("h3t2d"),
      a = l("cPVgX");
    l("e08dO");
    var u = l("5O9YB");
    var p = /*#__PURE__*/function () {
      function p(e) {
        var _this3 = this;
        _classCallCheck(this, p);
        var t, n, s, c, l, a, _p3, d, h, f, m, C, _, g;
        this.screenTypes = ["desktop", "tablet", "mobile", "xs"], this.getScreenType = function () {
          var e = window.innerWidth;
          return e >= _this3.breakPoints.desktop ? "desktop" : e >= _this3.breakPoints.tablet ? "tablet" : e >= _this3.breakPoints.mobile ? "mobile" : "xs";
        }, this.getScreenTypeZoomIndependent = function () {
          var e = window.screen.width;
          return e >= _this3.breakPoints.desktop ? "desktop" : e >= _this3.breakPoints.tablet ? "tablet" : e >= _this3.breakPoints.mobile ? "mobile" : "xs";
        }, this.getZoomLevel = function () {
          var e = 100 * window.devicePixelRatio;
          return e >= _this3.zoomLevels["zoom-xxl"] ? "zoom-xxl" : e >= _this3.zoomLevels["zoom-xl"] ? "zoom-xl" : e >= _this3.zoomLevels["zoom-lg"] ? "zoom-lg" : e > _this3.zoomLevels["zoom-sm"] && e < _this3.zoomLevels["zoom-lg"] ? "zoom-normal" : e <= _this3.zoomLevels["zoom-xs"] ? "zoom-xxs" : e <= _this3.zoomLevels["zoom-xs"] ? "zoom-xs" : e <= _this3.zoomLevels["zoom-sm"] ? "zoom-sm" : "zoom-normal";
        }, this.getCmpTheme = function (e, t) {
          var n,
            s,
            c,
            l,
            a = _this3.screenTypes.indexOf((null == t ? void 0 : t.screenType) || _this3.getScreenType()),
            _p4 = (null == (n = _this3.cmp) ? void 0 : n.screens) || {},
            d = _p4.desktop,
            h = _p4.tablet,
            f = _p4.mobile,
            m = _p4.xs,
            C = (null == t || null == (s = t.custom) ? void 0 : s.screens) || {},
            _ = C.desktop,
            g = C.tablet,
            v = C.mobile,
            b = C.xs,
            E = (0, u.mergeDeep)([a >= 0 && (null == d ? void 0 : d.base) || {}, a >= 0 && (null == _ ? void 0 : _.base) || {}, a >= 1 && (null == h ? void 0 : h.base) || {}, a >= 1 && (null == g ? void 0 : g.base) || {}, a >= 2 && (null == (l = o.ucCmpTheme.screens) || null == (c = l.mobile) ? void 0 : c.base) || {}, a >= 2 && (null == f ? void 0 : f.base) || {}, a >= 2 && (null == v ? void 0 : v.base) || {}, a >= 3 && (null == m ? void 0 : m.base) || {}, a >= 3 && (null == b ? void 0 : b.base) || {}, "base" !== e && a >= 0 && d && d[e] || {}, "base" !== e && a >= 0 && _ && _[e] || {}, "base" !== e && a >= 1 && h && h[e] || {}, "base" !== e && a >= 1 && g && g[e] || {}, "base" !== e && a >= 2 && f && f[e] || {}, "base" !== e && a >= 2 && v && v[e] || {}, "base" !== e && a >= 3 && m && m[e] || {}, "base" !== e && a >= 3 && b && b[e] || {}], _this3.getCmpThemeDefaults());
          return (0, i._)((0, r._)({}, E), {
            layout: (0, r._)({}, E.layout, (null == t ? void 0 : t.direction) && {
              direction: t.direction
            })
          });
        }, this.custom = e.custom, this.breakPoints = {
          desktop: (null == (t = e.breakPoints) ? void 0 : t.desktop) || 1024,
          tablet: (null == (n = e.breakPoints) ? void 0 : n.desktop) || 768,
          mobile: (null == (s = e.breakPoints) ? void 0 : s.desktop) || 360
        }, this.zoomLevels = {
          "zoom-xxl": (null == (c = e.zoomLevels) ? void 0 : c["zoom-xxl"]) || 400,
          "zoom-xl": (null == (l = e.zoomLevels) ? void 0 : l["zoom-xl"]) || 300,
          "zoom-lg": (null == (a = e.zoomLevels) ? void 0 : a["zoom-lg"]) || 150,
          "zoom-normal": (null == (_p3 = e.zoomLevels) ? void 0 : _p3["zoom-normal"]) || 100,
          "zoom-sm": (null == (d = e.zoomLevels) ? void 0 : d["zoom-sm"]) || 80,
          "zoom-xs": (null == (h = e.zoomLevels) ? void 0 : h["zoom-xs"]) || 75,
          "zoom-xxs": (null == (f = e.zoomLevels) ? void 0 : f["zoom-xxs"]) || 50
        }, this.cmp = (0, u.mergeDeep)([(null == (m = e.custom) ? void 0 : m.cmp) || {}], e.cmp || {}), this.privacyButton = (0, u.mergeDeep)([(null == (C = e.custom) ? void 0 : C.privacyButton) || {}], e.privacyButton || {}), this.privacyNotice = (0, u.mergeDeep)([(null == (_ = e.custom) ? void 0 : _.privacyNotice) || {}], e.privacyNotice || {}), this.embeddings = (0, u.mergeDeep)([(null == (g = e.custom) ? void 0 : g.embeddings) || {}], e.embeddings || {});
      }
      return _createClass(p, [{
        key: "getPrivacyButtonTheme",
        value: function getPrivacyButtonTheme(e) {
          var t,
            n,
            i,
            o = this.screenTypes.indexOf((null == e ? void 0 : e.screenType) || this.getScreenType()),
            s = (null == (t = this.privacyButton) ? void 0 : t.screens) || {},
            l = s.desktop,
            a = s.tablet,
            _p = s.mobile,
            d = s.xs,
            h = (null == e || null == (n = e.custom) ? void 0 : n.screens) || {},
            f = h.desktop,
            m = h.tablet,
            C = h.mobile,
            _ = h.xs,
            g = (0, u.mergeDeep)([o >= 0 && l || {}, o >= 0 && f || {}, o >= 1 && a || {}, o >= 1 && m || {}, o >= 2 && (null == (i = c.ucPrivacyButtonTheme.screens) ? void 0 : i.mobile) || {}, o >= 2 && _p || {}, o >= 2 && C || {}, o >= 3 && d || {}, o >= 3 && _ || {}], this.getPrivacyButtonThemeDefaults());
          return (0, r._)({}, g, (null == e ? void 0 : e.direction) && {
            direction: e.direction
          });
        }
      }, {
        key: "getPrivacyNoticeTheme",
        value: function getPrivacyNoticeTheme(e) {
          var t = this.getPrivacyNoticeThemeDefaults();
          return (0, r._)({}, t, (null == e ? void 0 : e.direction) && {
            direction: e.direction
          });
        }
      }, {
        key: "getEmbeddingsTheme",
        value: function getEmbeddingsTheme(e) {
          var t,
            n,
            o = this.screenTypes.indexOf((null == e ? void 0 : e.screenType) || this.getScreenType()),
            s = (null == (t = this.embeddings) ? void 0 : t.screens) || {},
            c = s.desktop,
            l = s.tablet,
            a = s.mobile,
            _p2 = s.xs,
            d = (null == e || null == (n = e.custom) ? void 0 : n.screens) || {},
            h = d.desktop,
            f = d.tablet,
            m = d.mobile,
            C = d.xs,
            _ = (0, u.mergeDeep)([o >= 0 && c || {}, o >= 0 && h || {}, o >= 1 && l || {}, o >= 1 && f || {}, o >= 2 && a || {}, o >= 2 && m || {}, o >= 3 && _p2 || {}, o >= 3 && C || {}], this.getEmbeddingsThemeDefaults());
          return (0, i._)((0, r._)({}, _), {
            layout: (0, r._)({}, _.layout, (null == e ? void 0 : e.direction) && {
              direction: e.direction
            })
          });
        }
      }, {
        key: "getCmpThemeDefaults",
        value: function getCmpThemeDefaults() {
          var e;
          return (0, u.mergeDeep)([(null == (e = this.cmp) ? void 0 : e.default) || {}], o.ucCmpTheme.default);
        }
      }, {
        key: "getEmbeddingsThemeDefaults",
        value: function getEmbeddingsThemeDefaults() {
          var e;
          return (0, u.mergeDeep)([(null == (e = this.embeddings) ? void 0 : e.default) || {}], this.getCmpThemeDefaults());
        }
      }, {
        key: "getPrivacyButtonThemeDefaults",
        value: function getPrivacyButtonThemeDefaults() {
          var e;
          return (0, u.mergeDeep)([(null == (e = this.privacyButton) ? void 0 : e.default) || {}], c.ucPrivacyButtonTheme.default);
        }
      }, {
        key: "getPrivacyNoticeThemeDefaults",
        value: function getPrivacyNoticeThemeDefaults() {
          var e;
          return (0, u.mergeDeep)([(null == (e = this.privacyNotice) ? void 0 : e.default) || {}], a.ucPrivacyNoticeTheme.default);
        }
      }, {
        key: "getThemeDefaults",
        value: function getThemeDefaults() {
          return {
            privacyButton: (0, u.mergeDeep)([this.privacyButton || {}], c.ucPrivacyButtonTheme),
            cmp: (0, u.mergeDeep)([this.cmp || {}], o.ucCmpTheme),
            embeddings: (0, u.mergeDeep)([this.embeddings || {}], s.ucEmbeddingsTheme)
          };
        }
      }]);
    }();
  }), a("bY6u9", function (t, n) {
    e(t.exports, "getCategoriesWithServicesConsent", function () {
      return l("1GZBo").getCategoriesWithServicesConsent;
    }), e(t.exports, "applyVendorRestrictions", function () {
      return l("1RK5T").applyVendorRestrictions;
    }), e(t.exports, "API_VERSION", function () {
      return l("l5WgP").API_VERSION;
    }), e(t.exports, "CONSENT_DATA_VERSION", function () {
      return l("eSiVJ").CONSENT_DATA_VERSION;
    }), e(t.exports, "USNAT_DEFAULT_STRING", function () {
      return l("eSiVJ").USNAT_DEFAULT_STRING;
    }), e(t.exports, "USFL_DEFAULT_STRING", function () {
      return l("eSiVJ").USFL_DEFAULT_STRING;
    }), e(t.exports, "ucCmpTheme", function () {
      return l("eQDd5").ucCmpTheme;
    }), e(t.exports, "ucEmbeddingsTheme", function () {
      return l("6f3tb").ucEmbeddingsTheme;
    }), e(t.exports, "ucPrivacyButtonTheme", function () {
      return l("h3t2d").ucPrivacyButtonTheme;
    }), e(t.exports, "ucPrivacyNoticeTheme", function () {
      return l("cPVgX").ucPrivacyNoticeTheme;
    }), l("l5WgP"), l("1RK5T"), l("1GZBo"), l("eSiVJ"), l("1thdS"), l("eQDd5"), l("6f3tb"), l("h3t2d"), l("cPVgX");
  }), a("l5WgP", function (t, n) {
    e(t.exports, "API_VERSION", function () {
      return r;
    });
    var r = 1;
  }), a("1RK5T", function (t, n) {
    e(t.exports, "applyVendorRestrictions", function () {
      return r;
    });
    var r = function r(e, t) {
      var n,
        r,
        i,
        o,
        s,
        c,
        l = [],
        a = [],
        u = e.specialPurposes,
        p = null != (i = t.notAllowedPurposes) ? i : [],
        d = null != (o = t.legIntPurposes) ? o : [],
        h = null != (s = t.purposes) ? s : [],
        f = null != (c = e.flexiblePurposes) ? c : [];
      return (null == (n = e.purposes) ? void 0 : n.length) && (p.length ? e.purposes.filter(function (e) {
        return -1 === p.indexOf(e);
      }) : _toConsumableArray(e.purposes)).forEach(function (e) {
        var t = d.indexOf(e) >= 0,
          n = f.indexOf(e) >= 0;
        t && n ? a.push(e) : t && !n || l.push(e);
      }), (null == (r = e.legIntPurposes) ? void 0 : r.length) && (p.length ? e.legIntPurposes.filter(function (e) {
        return -1 === p.indexOf(e);
      }) : _toConsumableArray(e.legIntPurposes)).forEach(function (e) {
        var t = h.indexOf(e) >= 0,
          n = f.indexOf(e) >= 0;
        t && n ? l.push(e) : t && !n || a.push(e);
      }), {
        purposes: l,
        legIntPurposes: a,
        specialPurposes: u
      };
    };
  }), a("1GZBo", function (t, n) {
    e(t.exports, "getCategoriesWithServicesConsent", function () {
      return s;
    });
    var r = l("kTJf3"),
      i = l("7nwmn"),
      o = l("7qJ26");
    l("e08dO"), l("2JuCu");
    var s = function s(e, t) {
      return e && t ? Object.entries(e).reduce(function (e, n) {
        var s = (0, o._)(n, 2),
          c = s[0],
          l = s[1],
          a = l.dps ? Object.entries(l.dps).length : 0,
          u = l.dps ? Object.entries(l.dps).reduce(function (e, n) {
            var r, i;
            return (null == (i = t[(0, o._)(n, 1)[0]]) || null == (r = i.consent) ? void 0 : r.given) ? e + 1 : e;
          }, 0) : 0,
          p = l.dps ? Object.entries(l.dps).reduce(function (e, n) {
            var r,
              i,
              o = n[0];
            return e[o] = (null == (i = t[o]) || null == (r = i.consent) ? void 0 : r.given) || !1, e;
          }, {}) : {};
        return e[c] = (0, i._)((0, r._)({}, l), {
          dps: p,
          state: 0 === u ? "ALL_DENIED" : u === a ? "ALL_ACCEPTED" : "SOME_ACCEPTED"
        }), e;
      }, e) : {};
    };
  }), a("7qJ26", function (t, n) {
    e(t.exports, "_", function () {
      return c;
    });
    var r = l("kDOo8"),
      i = l("lQr44"),
      o = l("cIov5"),
      s = l("6yoor");
    function c(e, t) {
      return (0, r._)(e) || (0, i._)(e, t) || (0, s._)(e, t) || (0, o._)();
    }
  }), a("kDOo8", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e) {
      if (Array.isArray(e)) return e;
    }
  }), a("lQr44", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e, t) {
      var n,
        r,
        i = null == e ? null : "u" > (typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) && e[Symbol.iterator] || e["@@iterator"];
      if (null != i) {
        var o = [],
          s = !0,
          c = !1;
        try {
          for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
        } catch (e) {
          c = !0, r = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (c) throw r;
          }
        }
        return o;
      }
    }
  }), a("cIov5", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  }), a("6yoor", function (t, n) {
    e(t.exports, "_", function () {
      return i;
    });
    var r = l("2XpbL");
    function i(e, t) {
      if (e) {
        if ("string" == typeof e) return (0, r._)(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, r._)(e, t);
      }
    }
  }), a("2XpbL", function (t, n) {
    e(t.exports, "_", function () {
      return r;
    });
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
  }), a("e08dO", function (t, n) {
    e(t.exports, "UCConsole", function () {
      return l("9N50I").UCConsole;
    }), e(t.exports, "mergeDeep", function () {
      return l("5O9YB").mergeDeep;
    }), e(t.exports, "convertCookieMaxAge", function () {
      return l("5O9YB").convertCookieMaxAge;
    }), e(t.exports, "convertDomain", function () {
      return l("5O9YB").convertDomain;
    }), e(t.exports, "getFormattedLegalDescription", function () {
      return l("5O9YB").getFormattedLegalDescription;
    }), e(t.exports, "sha256", function () {
      return l("2JuCu").sha256;
    }), e(t.exports, "getNonce", function () {
      return l("9r8RE").getNonce;
    }), e(t.exports, "applyNonce", function () {
      return l("9r8RE").applyNonce;
    }), e(t.exports, "isValidNonce", function () {
      return l("9r8RE").isValidNonce;
    }), e(t.exports, "setNonceInStore", function () {
      return l("9r8RE").setNonceInStore;
    }), e(t.exports, "getNonceAttribute", function () {
      return l("9r8RE").getNonceAttribute;
    }), l("5O9YB"), l("2JuCu"), l("9N50I"), l("9r8RE");
  }), a("5O9YB", function (t, n) {
    e(t.exports, "convertCookieMaxAge", function () {
      return o;
    }), e(t.exports, "convertDomain", function () {
      return s;
    }), e(t.exports, "getFormattedLegalDescription", function () {
      return c;
    }), e(t.exports, "mergeDeep", function () {
      return _a;
    });
    var r = l("kTJf3"),
      i = l("7nwmn");
    l("9N50I"), l("2JuCu");
    var o = function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          session: "Session",
          day: "Day",
          days: "Days",
          minute: "Minute",
          minutes: "Minutes"
        };
        if (null === e) return " - ";
        if (e <= 0) return t.session;
        var n = "",
          r = e / 86400;
        if (r < 1) {
          var i = Math.round(e / 60);
          n = n.concat("".concat(i, " ").concat(1 === i ? t.minute : t.minutes));
        } else r = Math.round(r), n = n.concat("".concat(r, " ").concat(1 === r ? t.day : t.days));
        return n;
      },
      s = function s(e, t, n) {
        return "*" === e ? "".concat(e, " (").concat(t, ")") : e.includes("*") ? "".concat(e, " (").concat(n, ")") : e;
      },
      c = function c(e) {
        var t = e.replace(/\s+/g, ""),
          n = e.match(/[^\r\n]+/g);
        if ((null == n ? void 0 : n.reduce(function (e, t) {
          return e + t.replace(/\s+/g, "").length;
        }, 0)) !== t.length) return e;
        var r = [{
            bulletPoints: [],
            title: ""
          }],
          i = 0;
        return n && (n.forEach(function (e, t) {
          e.startsWith("*") ? r[i].bulletPoints.push(" " === e.substr(1, 1) ? e.substr(2) : e.substr(1)) : (t > 0 && (i += 1), r[i] = {
            bulletPoints: [],
            title: e
          });
        }), r.reduce(function (e, t) {
          return e + t.title.replace(/\s|\u002a+/g, "").length + t.bulletPoints.reduce(function (e, t) {
            return e + t.replace(/\s|\u002a+/g, "").length;
          }, 0);
        }, 0) === t.replace(/\u002a+/g, "").length) ? r : e;
      },
      _a = function a(e, t) {
        var n;
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = (0, r._)({}, t);
        if (!((n = s) && "object" == _typeof(n))) throw Error("Source param should be an object");
        return e.length ? (e.forEach(function (e) {
          e && "object" == _typeof(e) && Object.keys(e).forEach(function (t) {
            var n = e[t],
              c = s[t];
            if (void 0 === c) s = (0, i._)((0, r._)({}, s), _defineProperty({}, t, n));else if (Array.isArray(n) && Array.isArray(c)) {
              if (o) {
                var _e;
                s = (0, i._)((0, r._)({}, s), _defineProperty({}, t, (_e = n.concat(c)).filter(function (t, n) {
                  return _e.indexOf(t) === n;
                })));
              } else s = (0, i._)((0, r._)({}, s), _defineProperty({}, t, n));
            } else s = n && "object" == _typeof(n) && c && "object" == _typeof(c) ? (0, i._)((0, r._)({}, s), _defineProperty({}, t, _a([(0, r._)({}, n)], c))) : (0, i._)((0, r._)({}, s), _defineProperty({}, t, n));
          });
        }), s) : t;
      };
  }), a("9N50I", function (t, n) {
    e(t.exports, "UCConsole", function () {
      return r;
    });
    var r = /*#__PURE__*/function () {
      function r() {
        _classCallCheck(this, r);
      }
      return _createClass(r, null, [{
        key: "log",
        value: function log(e, t) {
          var _console;
          for (var n = arguments.length, _r2 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r2[i - 2] = arguments[i];
          (_console = console).log.apply(_console, ["%cUsercentrics [".concat(e, "]:"), "background-color: rgba(0, 0, 255, 0.3); color: white; padding: 1px 5px", " ".concat(t)].concat(_r2));
        }
      }, {
        key: "logWithTrace",
        value: function logWithTrace(e, t) {
          var _console2;
          for (var n = arguments.length, _r3 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r3[i - 2] = arguments[i];
          (_console2 = console).groupCollapsed.apply(_console2, ["%cUsercentrics [".concat(e, "]:"), "background-color: rgba(0, 0, 255, 0.3); color: white; padding: 1px 5px", " ".concat(t)].concat(_r3)), console.trace(), console.groupEnd();
        }
      }, {
        key: "info",
        value: function info(e, t) {
          var _console3;
          for (var n = arguments.length, _r4 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r4[i - 2] = arguments[i];
          (_console3 = console).info.apply(_console3, ["%cUsercentrics [".concat(e, "]:"), "background-color: rgba(0, 0, 255, 0.6); color: white; padding: 1px 5px", " ".concat(t)].concat(_r4));
        }
      }, {
        key: "infoWithTrace",
        value: function infoWithTrace(e, t) {
          var _console4;
          for (var n = arguments.length, _r5 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r5[i - 2] = arguments[i];
          (_console4 = console).groupCollapsed.apply(_console4, ["%cUsercentrics [".concat(e, "]:"), "background-color: rgba(0, 0, 255, 0.6); color: white; padding: 1px 5px", " ".concat(t)].concat(_r5)), console.trace(), console.groupEnd();
        }
      }, {
        key: "warn",
        value: function warn(e, t) {
          var _console5;
          for (var n = arguments.length, _r6 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r6[i - 2] = arguments[i];
          (_console5 = console).warn.apply(_console5, ["Usercentrics [".concat(e, "]: ").concat(t)].concat(_r6));
        }
      }, {
        key: "error",
        value: function error(e, t) {
          var _console6;
          for (var n = arguments.length, _r7 = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) _r7[i - 2] = arguments[i];
          (_console6 = console).error.apply(_console6, ["Usercentrics [".concat(e, "]: ").concat(t)].concat(_r7));
        }
      }]);
    }();
  }), a("2JuCu", function (t, n) {
    e(t.exports, "sha256", function () {
      return i;
    });
    var r = l("dQXy6"),
      i = function i(e) {
        return (r && r.__esModule ? r.default : r)(e).toString();
      };
  }), a("dQXy6", function (e, t) {
    var n;
    n = l("7A3Oh"), function (e) {
      var t = n.lib,
        r = t.WordArray,
        i = t.Hasher,
        o = n.algo,
        s = [],
        c = [];
      function l(e) {
        return (e - (0 | e)) * 0x100000000 | 0;
      }
      for (var a = 2, u = 0; u < 64;) (function (t) {
        for (var n = e.sqrt(t), r = 2; r <= n; r++) if (!(t % r)) return !1;
        return !0;
      })(a) && (u < 8 && (s[u] = l(e.pow(a, .5))), c[u] = l(e.pow(a, 1 / 3)), u++), a++;
      var p = [],
        d = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(s.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], l = n[4], a = n[5], u = n[6], d = n[7], h = 0; h < 64; h++) {
              if (h < 16) p[h] = 0 | e[t + h];else {
                var f = p[h - 15],
                  m = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  C = p[h - 2],
                  _ = (C << 15 | C >>> 17) ^ (C << 13 | C >>> 19) ^ C >>> 10;
                p[h] = m + p[h - 7] + _ + p[h - 16];
              }
              var g = l & a ^ ~l & u,
                v = r & i ^ r & o ^ i & o,
                b = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                E = d + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + g + c[h] + p[h],
                w = b + v;
              d = u, u = a, a = l, l = s + E | 0, s = o, o = i, i = r, r = E + w | 0;
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + l | 0, n[5] = n[5] + a | 0, n[6] = n[6] + u | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              r = 8 * this._nDataBytes,
              i = 8 * t.sigBytes;
            return n[i >>> 5] |= 128 << 24 - i % 32, n[(i + 64 >>> 9 << 4) + 14] = e.floor(r / 0x100000000), n[(i + 64 >>> 9 << 4) + 15] = r, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      n.SHA256 = i._createHelper(d), n.HmacSHA256 = i._createHmacHelper(d);
    }(Math), e.exports = n.SHA256;
  }), a("7A3Oh", function (e, t) {
    var n;
    e.exports = n || function (e, t) {
      if ("u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.crypto && (n = window.crypto), "u" > (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.crypto && (n = self.crypto), "u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis.crypto && (n = globalThis.crypto), !n && "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.msCrypto && (n = window.msCrypto), !n && void 0 !== r && r.crypto && (n = r.crypto), !n) try {
        n = l("lGqhX");
      } catch (e) {}
      var n,
        i = function i() {
          if (n) {
            if ("function" == typeof n.getRandomValues) try {
              return n.getRandomValues(new Uint32Array(1))[0];
            } catch (e) {}
            if ("function" == typeof n.randomBytes) try {
              return n.randomBytes(4).readInt32LE();
            } catch (e) {}
          }
          throw Error("Native crypto module could not be used to get secure random number.");
        },
        o = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        c = s.lib = {},
        a = c.Base = {
          extend: function extend(e) {
            var t = o(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        u = c.WordArray = a.extend({
          init: function init(e, n) {
            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length;
          },
          toString: function toString(e) {
            return (e || d).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              r = this.sigBytes,
              i = e.sigBytes;
            if (this.clamp(), r % 4) for (var o = 0; o < i; o++) {
              var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
            } else for (var c = 0; c < i; c += 4) t[r + c >>> 2] = n[c >>> 2];
            return this.sigBytes += i, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 0xffffffff << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = a.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(e) {
            for (var t = [], n = 0; n < e; n += 4) t.push(i());
            return new u.init(t, e);
          }
        }),
        p = s.enc = {},
        d = p.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
              var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
            }
            return r.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
            return new u.init(n, t / 2);
          }
        },
        h = p.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
              var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              r.push(String.fromCharCode(o));
            }
            return r.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
            return new u.init(n, t);
          }
        },
        f = p.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(h.stringify(e)));
            } catch (e) {
              throw Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return h.parse(unescape(encodeURIComponent(e)));
          }
        },
        m = c.BufferedBlockAlgorithm = a.extend({
          reset: function reset() {
            this._data = new u.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n,
              r = this._data,
              i = r.words,
              o = r.sigBytes,
              s = this.blockSize,
              c = o / (4 * s),
              l = (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) * s,
              a = e.min(4 * l, o);
            if (l) {
              for (var p = 0; p < l; p += s) this._doProcessBlock(i, p);
              n = i.splice(0, l), r.sigBytes -= a;
            }
            return new u.init(n, a);
          },
          clone: function clone() {
            var e = a.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      c.Hasher = m.extend({
        cfg: a.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          m.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new C.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var C = s.algo = {};
      return s;
    }(Math);
  }), a("lGqhX", function (e, t) {}), a("9r8RE", function (t, n) {
    e(t.exports, "isValidNonce", function () {
      return s;
    }), e(t.exports, "getNonce", function () {
      return c;
    }), e(t.exports, "applyNonce", function () {
      return l;
    }), e(t.exports, "getNonceAttribute", function () {
      return a;
    }), e(t.exports, "setNonceInStore", function () {
      return u;
    });
    var r = Symbol.for("usercentrics.csp.nonce"),
      i = "u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : self,
      o = /^[A-Za-z0-9+/=_-]+$/,
      s = function s(e) {
        return !!e && o.test(e);
      },
      c = function c() {
        if ("u" > (typeof document === "undefined" ? "undefined" : _typeof(document))) {
          var e = document.getElementById("usercentrics-cmp"),
            t = (null == e ? void 0 : e.nonce) || (null == e ? void 0 : e.dataset.nonce);
          if (t) {
            if (s(t)) return t;
            console.warn("Invalid CSP nonce detected: \"".concat(t, "\". This nonce will be ignored."));
          }
        }
        if ("u" > (typeof window === "undefined" ? "undefined" : _typeof(window))) {
          var n,
            o = null == (n = window.ucCmpConfig) ? void 0 : n.nonce;
          if (o) {
            if (s(o)) return o;
            console.warn("Invalid CSP nonce detected: \"".concat(o, "\". This nonce will be ignored."));
          }
        }
        var c = i[r];
        if (s(c)) return c;
      },
      l = function l(e) {
        var t = c();
        t && (e.nonce = t, e.setAttribute("nonce", t));
      },
      a = function a() {
        var e = c();
        return e ? " nonce=\"".concat(e, "\"") : "";
      },
      u = function u(e) {
        i[r] = e;
      };
  }), a("eSiVJ", function (t, n) {
    e(t.exports, "CONSENT_DATA_VERSION", function () {
      return r;
    }), e(t.exports, "USNAT_DEFAULT_STRING", function () {
      return i;
    }), e(t.exports, "USFL_DEFAULT_STRING", function () {
      return o;
    });
    var r = 1,
      i = "DBABLA~BVVqAAAAAACA",
      o = "DBABAw~BVoAAACA";
  }), a("1thdS", function (t, n) {
    e(t.exports, "ucPrivacyButtonTheme", function () {
      return l("h3t2d").ucPrivacyButtonTheme;
    }), e(t.exports, "ucPrivacyNoticeTheme", function () {
      return l("cPVgX").ucPrivacyNoticeTheme;
    }), e(t.exports, "ucEmbeddingsTheme", function () {
      return l("6f3tb").ucEmbeddingsTheme;
    }), e(t.exports, "ucCmpTheme", function () {
      return l("eQDd5").ucCmpTheme;
    }), l("eQDd5"), l("6f3tb"), l("h3t2d"), l("cPVgX");
  }), a("eQDd5", function (t, n) {
    e(t.exports, "ucCmpThemeDefault", function () {
      return s;
    }), e(t.exports, "ucCmpMobileBase", function () {
      return c;
    }), e(t.exports, "ucCmpTheme", function () {
      return a;
    });
    var r = l("kF8dH"),
      i = "#0045a5",
      o = {
        main: {
          primary: "#303030",
          neutral: "#f5f5f5",
          tertiary: "#dddddd",
          text: "#333333",
          border: "#dddddd"
        },
        links: {
          icon: "#303030",
          anchor: "blue"
        },
        cmp: {
          background: "#ffffff",
          overlay: "#000000",
          scrollbarThumb: "#acacac"
        },
        buttons: {
          primary: {
            background: i,
            text: "#ffffff",
            hoverBackground: i,
            border: "none",
            hoverBorder: "none",
            hoverText: "#ffffff"
          },
          default: {
            background: "#f5f5f5",
            text: "#303030",
            hoverBackground: i,
            border: "none",
            hoverBorder: "none",
            hoverText: "#303030"
          }
        },
        tabs: {
          tabActive: i,
          tabInactive: "#303030",
          border: "1px solid red",
          containerBackground: "#ffffff"
        },
        toggle: {
          background: {
            active: i,
            inactive: "#595959",
            disabled: "#cccccc"
          },
          handle: {
            active: "#ffffff",
            inactive: "#ffffff",
            disabled: "#ffffff"
          }
        }
      },
      s = {
        layout: {
          direction: "ltr",
          borderRadius: "8px",
          size: {
            maxWidth: "625px",
            maxHeight: "80vh"
          },
          useBackgroundShadow: !0,
          position: "center",
          template: r.FIRST_LAYER_VARIANT.WALL,
          spacing: {
            xxs: "4px",
            xs: "8px",
            sm: "12px",
            md: "16px",
            lg: "20px",
            xl: "24px",
            xxl: "28px",
            xxxl: "32px",
            xxxxl: "36px"
          },
          defaultTab: "first",
          borderWidth: "1px",
          borderColor: "#D6D6D6"
        },
        elements: {
          buttons: {
            borderRadius: "4px",
            order: [["more", "deny", "accept"]]
          },
          logo: {
            position: "left",
            alt: "",
            url: ""
          }
        },
        visibility: {
          removeCcpaToggle: !1,
          hideLanguageSwitch: !1,
          showCategoriesToggles: !1,
          showMoreInformationLink: !1,
          hideDataProcessingServices: !1,
          hideServicesToggles: !1,
          showAcceptAndCloseText: !1,
          showCloseButton: !0,
          tcf: {
            showDescriptions: !1,
            hideNonIab: !1,
            hideToggles: !1,
            hideVendorToggles: !1,
            showSharedOutsideEu: !0
          }
        },
        features: {
          denyConsentsOnClose: !1,
          themeMode: {
            enabled: !1,
            defaultTheme: "light",
            autoDetect: !0
          },
          overlay: {
            enabled: !0,
            opacity: "0.7"
          }
        },
        colors: {
          light: o,
          dark: o
        },
        typography: {
          font: "Arial",
          size: 14,
          fixedSize: !1
        }
      },
      c = {
        layout: {
          spacing: {
            xxs: "2px",
            xs: "4px",
            sm: "6px",
            md: "8px",
            lg: "10px",
            xl: "12px",
            xxl: "14px",
            xxxl: "16px",
            xxxxl: "18px"
          },
          position: "bottom"
        }
      },
      a = {
        default: s,
        screens: {
          mobile: {
            base: c
          }
        }
      };
  }), a("kF8dH", function (t, n) {
    e(t.exports, "FIRST_LAYER_VARIANT", function () {
      return i;
    });
    var r,
      i = ((r = {}).BANNER = "BANNER", r.WALL = "WALL", r.BAR = "BAR", r.DIALOG = "DIALOG", r.FLAT = "FLAT", r.FLOAT = "FLOAT", r.WIDGET = "WIDGET", r);
  }), a("6f3tb", function (t, n) {
    e(t.exports, "ucEmbeddingsTheme", function () {
      return i;
    });
    var r = l("eQDd5"),
      i = {
        default: r.ucCmpThemeDefault,
        screens: {
          mobile: r.ucCmpMobileBase
        }
      };
  }), a("h3t2d", function (t, n) {
    e(t.exports, "ucPrivacyButtonTheme", function () {
      return r;
    });
    var r = {
      default: {
        position: "left",
        size: 54,
        direction: "ltr",
        pages: [],
        backgroundColor: "#0045a5",
        icon: {
          type: "fingerprint",
          color: "#fff"
        }
      },
      screens: {
        mobile: {
          size: 44
        }
      }
    };
  }), a("cPVgX", function (t, n) {
    e(t.exports, "ucPrivacyNoticeTheme", function () {
      return r;
    });
    var r = {
      default: {
        position: "left",
        direction: "ltr"
      }
    };
  }), a("aWyxI", function (t, n) {
    e(t.exports, "EMBEDDINGS_VARIANT", function () {
      return o;
    }), e(t.exports, "EMBEDDINGS_TYPE", function () {
      return s;
    }), e(t.exports, "EmbedAttributeNames", function () {
      return c;
    });
    var r,
      i,
      o = ((r = {}).TCF = "TCF", r.GDPR = "GDPR", r),
      s = ((i = {}).ALL = "all", i.CATEGORIES = "category", i.CATEGORIES_ONLY = "category-only", i.PURPOSES = "purposes", i.VENDORS = "vendors", i.SERVICE_SPECIFIC = "service-specific", i.DEFAULT_TRACKER = "default", i.MATRIX_TRACKER = "matrix", i),
      c = {
        gdprVariant: "uc-embed",
        trackerVariant: "uc-embed-tracker",
        trackerType: "uc-embed-tracker-type",
        tcfVariant: "uc-embed-tcf",
        embedType: "uc-embed-type",
        showAllCategories: "uc-embed-show-all-categories",
        showToggles: "uc-embed-show-toggle",
        serviceSpecific: "uc-embed-service-id"
      };
  }), a("TZuok", function (t, n) {
    e(t.exports, "isGpcToastVisible", function () {
      return r;
    });
    var r = function r(e) {
      return !0 === navigator.globalPrivacyControl && !0 === e.consent.gpcSignal && (e.ui.gpcSignalHonoured || "US" === e.setting.type) && !e.ui.showCmpForGpc;
    };
  }), a("iQbPz", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("cvCP4"))]).then(function () {
      return l("8cHXj");
    });
  }), a("iXnEM", function (e, t) {
    var n = {};
    e.exports = function (e) {
      return n[e] || (n[e] = new Promise(function (t, r) {
        if ([].concat(document.getElementsByTagName("script")).some(function (t) {
          return t.src === e;
        })) return void t();
        var i = ("u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : self)[Symbol.for("usercentrics.csp.nonce")] || "",
          o = document.createElement("link");
        o.href = e, o.rel = "preload", o.as = "script", i && o.setAttribute("nonce", i), document.head.appendChild(o);
        var s = document.createElement("script");
        s.async = !0, s.type = "text/javascript", s.src = e, i && (s.nonce = i, s.setAttribute("nonce", i)), s.onerror = function (t) {
          var i = TypeError("Failed to fetch dynamically imported module: " + e + ". Error: " + t.message);
          s.onerror = s.onload = null, s.remove(), delete n[e], r(i);
        }, s.onload = function () {
          s.onerror = s.onload = null, t();
        }, document.getElementsByTagName("head")[0].appendChild(s);
      }).catch(function (t) {
        throw delete n[e], t;
      })), n[e];
    };
  }), a("88mA5", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("hf18y"))]).then(function () {
      return l("4jVGQ");
    });
  }), a("cKxgP", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("eNFcy"))]).then(function () {
      return l("9nI40");
    });
  }), a("4BbNn", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("c2NOK"))]).then(function () {
      return l("byTH9");
    });
  }), a("iShQf", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("3dTMD"))]).then(function () {
      return l("50TIk");
    });
  }), a("lzpqw", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("6R4Sf")), l("iXnEM")(i("kCmCY")), l("iXnEM")(i("1vqd5"))]).then(function () {
      return l("1KHPe");
    });
  }), a("amHxy", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("dFGw1"))]).then(function () {
      return l("u64tR");
    });
  }), a("cuyGf", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("7i17b"))]).then(function () {
      return l("2BC28");
    });
  }), a("cZ4Sv", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("2zaLE"))]).then(function () {
      return l("9Kksi");
    });
  }), a("eugIQ", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("hkbsl"))]).then(function () {
      return l("gx0oy");
    });
  }), a("2Xqcs", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("6R4Sf")), l("iXnEM")(i("kCmCY")), l("iXnEM")(i("6qfG9"))]).then(function () {
      return l("7Plgl");
    });
  }), a("htBYg", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("igLJs"))]).then(function () {
      return l("hfPOY");
    });
  }), a("2HTbq", function (e, t) {
    e.exports = Promise.all([l("iXnEM")(i("kCmCY")), l("iXnEM")(i("ikwC3"))]).then(function () {
      return l("XgdKN");
    });
  }), a("lWoWV", function (e, t) {
    e.exports = l("iXnEM")(i("155UB")).then(function () {
      return l("6iQdj");
    });
  }), a("jeSVY", function (e, t) {
    e.exports = l("iXnEM")(i("fnUGp")).then(function () {
      return l("5R3b3");
    });
  }), a("eStmB", function (e, t) {
    e.exports = l("iXnEM")(i("1mNJf")).then(function () {
      return l("lrSWU");
    });
  }), a("cIlZI", function (e, t) {
    e.exports = l("iXnEM")(i("h2EMz")).then(function () {
      return l("8IlZ6");
    });
  }), a("LaEjf", function (e, t) {
    e.exports = l("iXnEM")(i("95v68")).then(function () {
      return l("8BkwZ");
    });
  }), a("cgrZl", function (e, t) {
    e.exports = l("iXnEM")(i("ikNzn")).then(function () {
      return l("k2wJk");
    });
  }), Object.assign((_l$i2 = (_l = l).i) !== null && _l$i2 !== void 0 ? _l$i2 : _l.i = {}, {
    cvCP4: "v/4.14.0/TvGdprCmpView.652a54fd.js",
    cQLBC: "v/4.14.0/sections.2e4ad416.js",
    "6R4Sf": "v/4.14.0/ServiceDetailsTvView.681ae92e.js",
    kCmCY: "TvGdprCmpView.e367da82.js",
    jUt2k: "v/4.14.0/ServiceDetailsView.54cb801f.js",
    "4KBWk": "v/4.14.0/ModalView.5273edf8.js",
    "6xYuv": "v/4.14.0/CategoryDetailsView.4c295351.js",
    "6z4NJ": "v/4.14.0/AutoblockerMoreInfoView.7526f560.js",
    i8ZeD: "v/4.14.0/getToastifyStyle.4f0a73d7.js",
    fzw8Y: "v/4.14.0/wix.028af98c.js",
    "3DZaC": "v/4.14.0/cb.71517c00.js",
    dqYqA: "v/4.14.0/secondLayer.03af4dcd.js",
    dblYi: "v/4.14.0/privacyButton.b88220a4.js",
    "1Ua38": "v/4.14.0/privacyNotice.342498ae.js",
    hf18y: "v/4.14.0/CbGdprCmpView.f64f8862.js",
    eNFcy: "v/4.14.0/WixGdprCmpView.db460ff0.js",
    c2NOK: "v/4.14.0/ShopifyGdprCmpView.3a111730.js",
    "3dTMD": "v/4.14.0/UcGdprCmpView.1e8e99a0.js",
    "1vqd5": "v/4.14.0/TvUsCmpView.be05eaea.js",
    dFGw1: "v/4.14.0/CbUsCmpView.6ab2fb14.js",
    "7i17b": "v/4.14.0/WixUsCmpView.3b46f7b4.js",
    "2zaLE": "v/4.14.0/ShopifyUsCmpView.72bf869c.js",
    hkbsl: "v/4.14.0/UcUsCmpView.88610865.js",
    "6qfG9": "v/4.14.0/TvTcfCmpView.f6729a75.js",
    "6fJIH": "v/4.14.0/VendorDetailsView.2c43e0da.js",
    igLJs: "v/4.14.0/CbTcfCmpView.e5cba785.js",
    ikwC3: "v/4.14.0/UcTcfCmpView.d78deb8e.js",
    "155UB": "v/4.14.0/WebSdk.lib.125010d0.js",
    "5aKgu": "v/4.14.0/GdprCmpController.0e465e5f.js",
    "5TAwo": "v/4.14.0/UsCmpController.bcb57a87.js",
    aRnz9: "v/4.14.0/TcfCmpController.ab55fc98.js",
    fnUGp: "v/4.14.0/TrackerEmbeddingsView.208bdabf.js",
    "1mNJf": "v/4.14.0/DefaultGdprEmbeddingsView.a4714515.js",
    h2EMz: "v/4.14.0/DefaultTcfEmbeddingsView.d62299d0.js",
    "95v68": "v/4.14.0/DefaultErrorView.a14e360e.js",
    ikNzn: "v/4.14.0/loader.polyfills.56e5361b.js"
  });
  var u = l("h2FSh"),
    p = l("dmwAz"),
    u = l("h2FSh"),
    d = l("kTJf3"),
    h = l("7nwmn"),
    p = l("dmwAz"),
    f = l("2ks5K"),
    m = l("3Krri"),
    C = l("96QDM"),
    _ = {
      wix: "wix",
      shopify: "uc"
    },
    g = {
      shopify: ["FLAT", "FLOAT"]
    },
    v = function v(e) {
      var t;
      return null != (t = _[e]) ? t : e;
    },
    b = ["uc", "tv", "cb"].concat(_toConsumableArray(Object.keys(_))),
    u = l("h2FSh"),
    p = l("dmwAz"),
    E = l("1a1bx"),
    w = l("l8qje"),
    T = l("aWyxI");
  l("e08dO");
  var y = l("9N50I"),
    A = l("TZuok"),
    u = l("h2FSh"),
    p = l("dmwAz"),
    S = new (/*#__PURE__*/function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }
      return _createClass(_class2, [{
        key: "getGdprView",
        value: function getGdprView(e) {
          return (0, u._)(function () {
            var t, n, r;
            return (0, p._)(this, function (i) {
              return "tv" === e.ui.theme ? [2, l("iQbPz").then(function (t) {
                return (0, t.initGdprCmpView)(e);
              })] : "cb" === e.ui.theme || ["BAR", "DIALOG"].includes((null == (r = e.theme.cmp) || null == (n = r.default) || null == (t = n.layout) ? void 0 : t.template) || "") ? [2, l("88mA5").then(function (t) {
                return (0, t.initGdprCmpView)(e);
              })] : "wix" === e.ui.theme ? [2, l("cKxgP").then(function (t) {
                return (0, t.initGdprCmpView)(e);
              })] : "shopify" === e.ui.theme ? [2, l("4BbNn").then(function (t) {
                return (0, t.initGdprCmpView)(e);
              })] : [2, l("iShQf").then(function (t) {
                return (0, t.initGdprCmpView)(e);
              })];
            });
          })();
        }
      }, {
        key: "getUsView",
        value: function getUsView(e) {
          return (0, u._)(function () {
            return (0, p._)(this, function (t) {
              return "tv" === e.ui.theme ? [2, l("lzpqw").then(function (t) {
                return (0, t.initUsCmpView)(e);
              })] : "cb" === e.ui.theme ? [2, l("amHxy").then(function (t) {
                return (0, t.initUsCmpView)(e);
              })] : "wix" === e.ui.theme ? [2, l("cuyGf").then(function (t) {
                return (0, t.initUsCmpView)(e);
              })] : "shopify" === e.ui.theme ? [2, l("cZ4Sv").then(function (t) {
                return (0, t.initUsCmpView)(e);
              })] : [2, l("eugIQ").then(function (t) {
                return (0, t.initUsCmpView)(e);
              })];
            });
          })();
        }
      }, {
        key: "getTcfView",
        value: function getTcfView(e) {
          return (0, u._)(function () {
            var t, n, r;
            return (0, p._)(this, function (i) {
              return "tv" === e.ui.theme ? [2, l("2Xqcs").then(function (t) {
                return (0, t.initTcfCmpView)(e);
              })] : "cb" === e.ui.theme || ["BAR", "DIALOG"].includes((null == (r = e.theme.cmp) || null == (n = r.default) || null == (t = n.layout) ? void 0 : t.template) || "") ? [2, l("htBYg").then(function (t) {
                return (0, t.initTcfCmpView)(e);
              })] : [2, l("2HTbq").then(function (t) {
                return (0, t.initTcfCmpView)(e);
              })];
            });
          })();
        }
      }, {
        key: "setWebSdk",
        value: function setWebSdk(e) {
          this.webSdk = e;
        }
      }, {
        key: "getWebSdk",
        value: function getWebSdk() {
          return (0, u._)(function () {
            return (0, p._)(this, function (e) {
              return this.webSdk ? [2, this.webSdk] : [2, l("lWoWV").then(function (e) {
                return e.default;
              })];
            });
          }).call(this);
        }
      }]);
    }())(),
    u = l("h2FSh"),
    p = l("dmwAz"),
    T = l("aWyxI"),
    x = function x(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (0, u._)(function () {
        var n, r, i, o, s, c, a;
        return (0, p._)(this, function (u) {
          switch (u.label) {
            case 0:
              if (n = [], t || n.push(window.__ucCmp.init()), r = document.getElementsByClassName(T.EmbedAttributeNames.gdprVariant), i = document.getElementsByClassName(T.EmbedAttributeNames.tcfVariant), !((o = document.getElementsByClassName(T.EmbedAttributeNames.trackerVariant)).length > 0)) return [3, 2];
              return [4, l("jeSVY")];
            case 1:
              s = u.sent().initTrackerEmbeddingsView, Array.from(o).forEach(function (t) {
                n.push(s(e, t));
              }), u.label = 2;
            case 2:
              if (!(r.length || i.length)) return [3, 6];
              if (!(r.length > 0)) return [3, 4];
              return [4, l("eStmB")];
            case 3:
              c = u.sent().initGdprEmbeddingsView, Array.from(r).forEach(function (t) {
                n.push(c(e, t));
              }), u.label = 4;
            case 4:
              if (!(i.length > 0 && "TCF" === e.setting.type)) return [3, 6];
              return [4, l("cIlZI")];
            case 5:
              a = u.sent().initTcfEmbeddingsView, Array.from(i).forEach(function (t) {
                n.push(a(e, t));
              }), u.label = 6;
            case 6:
              return [4, Promise.all(n)];
            case 7:
              return u.sent(), [2];
          }
        });
      })();
    };
  var I = /*#__PURE__*/function () {
    function I(e) {
      _classCallCheck(this, I);
      this.cmpController = e;
    }
    return _createClass(I, [{
      key: "init",
      value: function init() {
        return (0, u._)(function () {
          var e, t, n, r;
          return (0, p._)(this, function (i) {
            return (null == (t = window.ucCmpConfig) || null == (e = t.ui) ? void 0 : e.suppress) === !0 ? [2] : (n = "none" !== this.cmpController.ui.initialView, r = (0, A.isGpcToastVisible)(this.cmpController), n || r) ? [2, this.loadCmpView()] : [2];
          });
        }).call(this);
      }
    }, {
      key: "loadCmpView",
      value: function loadCmpView() {
        return (0, u._)(function () {
          var e, t, n, r, i, o;
          return (0, p._)(this, function (s) {
            switch (s.label) {
              case 0:
                if ("inactive" === this.cmpController.ui.lifecycleStatus) return [2, console.warn("CMP is inactive")];
                switch (this.cmpController.setting.type) {
                  case "GDPR":
                    return [3, 1];
                  case "TCF":
                    return [3, 4];
                  case "US":
                    return [3, 7];
                }
                return [3, 10];
              case 1:
                if (!(0, w.isGdprCmpController)(this.cmpController)) return [3, 3];
                return t = (e = this).setView, [4, S.getGdprView(this.cmpController)];
              case 2:
                t.apply(e, [s.sent()]), s.label = 3;
              case 3:
                return [3, 10];
              case 4:
                if (!(0, w.isTcfCmpController)(this.cmpController)) return [3, 6];
                return r = (n = this).setView, [4, S.getTcfView(this.cmpController)];
              case 5:
                r.apply(n, [s.sent()]), s.label = 6;
              case 6:
                return [3, 10];
              case 7:
                if (!(0, w.isUsCmpController)(this.cmpController)) return [3, 9];
                return o = (i = this).setView, [4, S.getUsView(this.cmpController)];
              case 8:
                o.apply(i, [s.sent()]), s.label = 9;
              case 9:
                return [3, 10];
              case 10:
                return [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "setView",
      value: function setView(e) {
        this.cmpView = e;
      }
    }, {
      key: "getCmpConfig",
      value: function getCmpConfig() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getCmpConfig()];
          });
        }).call(this);
      }
    }, {
      key: "removePreviousEmbeddings",
      value: function removePreviousEmbeddings() {
        var e = document.querySelector(".embeddings-shadow-wrapper"),
          t = document.querySelector(".".concat(T.EmbedAttributeNames.gdprVariant, ", .").concat(T.EmbedAttributeNames.tcfVariant, ", .").concat(T.EmbedAttributeNames.trackerVariant));
        t || y.UCConsole.warn("hydrateEmbeddings -> No element with the className embeddings-shadow-wrapper, ".concat(T.EmbedAttributeNames.gdprVariant, ", ").concat(T.EmbedAttributeNames.tcfVariant, ", ").concat(T.EmbedAttributeNames.trackerVariant, " was found")), e && t && t.removeChild(e);
      }
    }, {
      key: "hydrateEmbeddings",
      value: function hydrateEmbeddings() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return this.removePreviousEmbeddings(), [2, x(this.cmpController, !0)];
          });
        }).call(this);
      }
    }, {
      key: "isAgeVerificationEnabled",
      value: function isAgeVerificationEnabled() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return this.cmpView ? [2, this.cmpView.isAgeVerificationEnabled()] : [2, !1];
          });
        }).call(this);
      }
    }, {
      key: "isAgeVerificationRequired",
      value: function isAgeVerificationRequired() {
        return (0, u._)(function () {
          var e, t;
          return (0, p._)(this, function (n) {
            return this.cmpView ? [2, this.cmpView.isAgeVerificationRequired()] : (t = (e = this.cmpController).getAgeVerificationConfig(), [2, !!((0, w.isUsCmpController)(this.cmpController) && (null == t ? void 0 : t.enabled) && (null == t ? void 0 : t.verificationMethod) === "yesno" && !e.getAgeVerificationStatus())]);
          });
        }).call(this);
      }
    }, {
      key: "showFirstLayer",
      value: function showFirstLayer() {
        return (0, u._)(function () {
          var e;
          return (0, p._)(this, function (t) {
            switch (t.label) {
              case 0:
                if (this.cmpView) return [3, 2];
                return [4, this.loadCmpView()];
              case 1:
                t.sent(), t.label = 2;
              case 2:
                return null == (e = this.cmpView) || e.showFirstLayer(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "showSecondLayer",
      value: function showSecondLayer(e) {
        return (0, u._)(function () {
          var t;
          return (0, p._)(this, function (n) {
            switch (n.label) {
              case 0:
                if (this.cmpView) return [3, 2];
                return [4, this.loadCmpView()];
              case 1:
                n.sent(), n.label = 2;
              case 2:
                return null == (t = this.cmpView) || t.showSecondLayer(e), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "showAutoblockerMoreInfoView",
      value: function showAutoblockerMoreInfoView(e, t) {
        return (0, u._)(function () {
          var n;
          return (0, p._)(this, function (r) {
            switch (r.label) {
              case 0:
                if (this.cmpView) return [3, 2];
                return [4, this.loadCmpView()];
              case 1:
                r.sent(), r.label = 2;
              case 2:
                return null == (n = this.cmpView) || n.showAutoblockerMoreInfoView(e, t), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "showDsrForm",
      value: function showDsrForm() {
        return (0, u._)(function () {
          var e;
          return (0, p._)(this, function (t) {
            switch (t.label) {
              case 0:
                if (this.cmpView) return [3, 2];
                return [4, this.loadCmpView()];
              case 1:
                t.sent(), t.label = 2;
              case 2:
                return null == (e = this.cmpView) || e.showDsrForm(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "showServiceDetails",
      value: function showServiceDetails(e) {
        return (0, u._)(function () {
          var t;
          return (0, p._)(this, function (n) {
            switch (n.label) {
              case 0:
                if (this.cmpView) return [3, 2];
                return [4, this.loadCmpView()];
              case 1:
                n.sent(), n.label = 2;
              case 2:
                return null == (t = this.cmpView) || t.showServiceDetails(e), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "updateTheme",
      value: function updateTheme(e) {
        return (0, u._)(function () {
          var t, n, r, i;
          return (0, p._)(this, function (o) {
            return null == (t = this.cmpView) || t.updateTheme(e), null == (i = this.cmpView) || i.updatePartials([null == (n = e.custom) ? void 0 : n.hooks, null == (r = e.custom) ? void 0 : r.partials]), [2];
          });
        }).call(this);
      }
    }, {
      key: "getServicesBaseInfo",
      value: function getServicesBaseInfo() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getServicesBaseInfo()];
          });
        }).call(this);
      }
    }, {
      key: "closeCmp",
      value: function closeCmp() {
        return (0, u._)(function () {
          var e;
          return (0, p._)(this, function (t) {
            return null == (e = this.cmpView) || e.closeCmp(), [2];
          });
        }).call(this);
      }
    }, {
      key: "getConsentDetails",
      value: function getConsentDetails() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getConsentDetails()];
          });
        }).call(this);
      }
    }, {
      key: "acceptAllConsents",
      value: function acceptAllConsents() {
        return (0, u._)(function () {
          var e, t;
          return (0, p._)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.cmpController.acceptAllConsents()];
              case 1:
                return n.sent(), this.cmpController.setAnalyticsPixel(E.CMP_EVENT_TYPE.ACCEPT_ALL, "__ucCmp"), (0, w.isTcfCmpController)(this.cmpController) && this.cmpController.tcf.updateConsentScreen(null != (t = null == (e = this.cmpView) ? void 0 : e.getConsentScreen()) ? t : 0), [4, this.cmpController.saveConsents()];
              case 2:
                return n.sent(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "denyAllConsents",
      value: function denyAllConsents() {
        return (0, u._)(function () {
          var e, t;
          return (0, p._)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.cmpController.denyAllConsents()];
              case 1:
                return n.sent(), this.cmpController.setAnalyticsPixel(E.CMP_EVENT_TYPE.DENY_ALL, "__ucCmp"), (0, w.isTcfCmpController)(this.cmpController) && this.cmpController.tcf.updateConsentScreen(null != (t = null == (e = this.cmpView) ? void 0 : e.getConsentScreen()) ? t : 0), [4, this.cmpController.saveConsents()];
              case 2:
                return n.sent(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "refreshScripts",
      value: function refreshScripts() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.unblockScriptsWithConsent()];
          });
        }).call(this);
      }
    }, {
      key: "updateCategoriesConsents",
      value: function updateCategoriesConsents(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cmpController.updateCategoriesConsents(e)];
              case 1:
                return t.sent(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "updateServicesConsents",
      value: function updateServicesConsents(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cmpController.updateServicesConsents(e)];
              case 1:
                return t.sent(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "updateTcfConsents",
      value: function updateTcfConsents(e) {
        return (0, u._)(function () {
          var t, n, r;
          return (0, p._)(this, function (i) {
            return e.vendors && (null == (t = this.cmpController.tcf) || t.setVendorsConsent(e.vendors)), e.purposes && (null == (n = this.cmpController.tcf) || n.setPurposesConsent(e.purposes)), e.specialFeatures && (null == (r = this.cmpController.tcf) || r.setSpecialFeaturesConsent(e.specialFeatures)), [2];
          });
        }).call(this);
      }
    }, {
      key: "saveConsents",
      value: function saveConsents() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EXPLICIT";
        return (0, u._)(function () {
          var t, n;
          return (0, p._)(this, function (r) {
            switch (r.label) {
              case 0:
                return this.cmpController.setAnalyticsPixel(E.CMP_EVENT_TYPE.SAVE, "__ucCmp"), (0, w.isTcfCmpController)(this.cmpController) && this.cmpController.tcf.updateConsentScreen(null != (n = null == (t = this.cmpView) ? void 0 : t.getConsentScreen()) ? n : 0), [4, this.cmpController.saveConsents(e)];
              case 1:
                return r.sent(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(e) {
        return (0, u._)(function () {
          var t;
          return (0, p._)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.cmpController.changeLanguage(e)];
              case 1:
                if (n.sent(), this.cmpView) return [3, 3];
                return [4, this.loadCmpView()];
              case 2:
                n.sent(), n.label = 3;
              case 3:
                return null == (t = this.cmpView) || t.render(), [2];
            }
          });
        }).call(this);
      }
    }, {
      key: "getActiveLanguage",
      value: function getActiveLanguage() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getLanguage()];
          });
        }).call(this);
      }
    }, {
      key: "getControllerId",
      value: function getControllerId() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getControllerId()];
          });
        }).call(this);
      }
    }, {
      key: "isConsentRequired",
      value: function isConsentRequired() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpController.getIsConsentRequired()];
          });
        }).call(this);
      }
    }, {
      key: "isInitialized",
      value: function isInitialized() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, !0];
          });
        })();
      }
    }, {
      key: "clearUserSession",
      value: function clearUserSession() {
        return (0, u._)(function () {
          var e;
          return (0, p._)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.cmpController.clearStorage()];
              case 1:
                return t.sent(), null == (e = this.cmpView) || e.resetAgeVerification(), [2];
            }
          });
        }).call(this);
      }
    }]);
  }();
  var u = l("h2FSh"),
    p = l("dmwAz"),
    E = l("1a1bx"),
    w = l("l8qje");
  l("e08dO");
  var y = l("9N50I"),
    P = window.__ucCmp,
    L = function L(e, t, n) {
      return (0, u._)(function () {
        return (0, p._)(this, function (r) {
          return n && y.UCConsole.warn("consentType ".concat(n, " not supported yet")), [2, P.updateServicesConsents(e.map(function (e) {
            return {
              id: e,
              consent: t
            };
          }))];
        });
      })();
    };
  var N = /*#__PURE__*/function () {
    function N(e) {
      _classCallCheck(this, N);
      n = e, P = window.__ucCmp;
    }
    return _createClass(N, [{
      key: "acceptAllConsents",
      value: function acceptAllConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, P.acceptAllConsents()];
          });
        })();
      }
    }, {
      key: "acceptService",
      value: function acceptService(e, t) {
        return (0, u._)(function () {
          return (0, p._)(this, function (n) {
            return [2, L([e], !0, t)];
          });
        })();
      }
    }, {
      key: "acceptServices",
      value: function acceptServices(e, t) {
        return (0, u._)(function () {
          return (0, p._)(this, function (n) {
            return [2, L(e, !0, t)];
          });
        })();
      }
    }, {
      key: "areAllConsentsAccepted",
      value: function areAllConsentsAccepted() {
        return n.areAllConsentsAccepted();
      }
    }, {
      key: "areAllRequiredConsentsAccepted",
      value: function areAllRequiredConsentsAccepted() {
        return (0, w.isTcfCmpController)(n) ? n.areAllRequiredConsentsAccepted() : (y.UCConsole.warn("UcUi - areAllRequiredConsentsAccepted", "This method is only available for TCF configurations."), !1);
      }
    }, {
      key: "clearStorage",
      value: function clearStorage() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, n.clearStorage()];
          });
        })();
      }
    }, {
      key: "closeCMP",
      value: function closeCMP() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, P.closeCmp()];
          });
        })();
      }
    }, {
      key: "denyAllConsents",
      value: function denyAllConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, P.denyAllConsents()];
          });
        })();
      }
    }, {
      key: "denyAndCloseCcpa",
      value: function denyAndCloseCcpa() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, P.denyAllConsents()];
              case 1:
                return e.sent(), [2, this.closeCMP()];
            }
          });
        }).call(this);
      }
    }, {
      key: "enableScriptsForServicesWithConsent",
      value: function enableScriptsForServicesWithConsent() {
        n.unblockScriptsWithConsent();
      }
    }, {
      key: "getActiveLanguage",
      value: function getActiveLanguage() {
        return n.ui.getLanguage();
      }
    }, {
      key: "getControllerId",
      value: function getControllerId() {
        return n.getControllerId() || "";
      }
    }, {
      key: "getTCFDisclosedVendorsSegmentString",
      value: function getTCFDisclosedVendorsSegmentString() {
        var e;
        return null == (e = n.tcf) ? void 0 : e.getDisclosedVendorsSegmentString();
      }
    }, {
      key: "isConsentRequired",
      value: function isConsentRequired() {
        var e = n.getIsConsentRequired();
        return void 0 === e ? null : e;
      }
    }, {
      key: "isInitialized",
      value: function isInitialized() {
        return !0;
      }
    }, {
      key: "rejectService",
      value: function rejectService(e, t) {
        return (0, u._)(function () {
          return (0, p._)(this, function (n) {
            return [2, L([e], !1, t)];
          });
        })();
      }
    }, {
      key: "rejectServices",
      value: function rejectServices(e, t) {
        return (0, u._)(function () {
          return (0, p._)(this, function (n) {
            return [2, L(e, !1, t)];
          });
        })();
      }
    }, {
      key: "showFirstLayer",
      value: function showFirstLayer() {
        return P.showFirstLayer();
      }
    }, {
      key: "showSecondLayer",
      value: function showSecondLayer(e) {
        return "string" == typeof e && (["purposes", "vendors", "services", "categories"].concat(_toConsumableArray(Object.keys(n.dps.categories))).includes(e) || e.startsWith("vendor-") || e.startsWith("purpose-") || e.startsWith("feature-") || e.startsWith("special-purpose-") || e.startsWith("special-feature-")) ? P.showSecondLayer(e) : "string" == typeof e ? P.showServiceDetails(e) : P.showSecondLayer();
      }
    }, {
      key: "updateLanguage",
      value: function updateLanguage(e) {
        return n.changeLanguage(e);
      }
    }, {
      key: "getServicesBaseInfo",
      value: function getServicesBaseInfo() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, P.getServicesBaseInfo()];
              case 1:
                return [2, e.sent()];
            }
          });
        })();
      }
    }, {
      key: "getServicesFullInfo",
      value: function getServicesFullInfo() {
        return Promise.resolve([]);
      }
    }, {
      key: "getSettingsCore",
      value: function getSettingsCore() {}
    }, {
      key: "getSettingsLabels",
      value: function getSettingsLabels() {
        return {};
      }
    }, {
      key: "getSettingsUI",
      value: function getSettingsUI() {}
    }, {
      key: "getTCFVendors",
      value: function getTCFVendors() {
        return (0, w.isTcfCmpController)(n) ? n.getTCFVendors() : void y.UCConsole.warn("UcUi - getTCFVendors", "getTCFVendors method is only available for TCF configurations.");
      }
    }, {
      key: "updateChoicesForTcf",
      value: function updateChoicesForTcf(e, t) {
        return y.UCConsole.log("UcUi - updateChoicesForTcf", "TODO: apply decisions & fromLayer", e, t), n.setAnalyticsPixel(E.CMP_EVENT_TYPE.SAVE, "__ucCmp"), Promise.resolve();
      }
    }, {
      key: "restartCMP",
      value: function restartCMP() {
        return Promise.resolve();
      }
    }, {
      key: "restartEmbeddings",
      value: function restartEmbeddings() {
        return Promise.resolve();
      }
    }, {
      key: "injectTCString",
      value: function injectTCString(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            return y.UCConsole.log("UcUi - injectTCString", "TODO: apply tcString", e), [2, !1];
          });
        })();
      }
    }]);
  }();
  var V = /*#__PURE__*/function () {
    function V() {
      _classCallCheck(this, V);
    }
    return _createClass(V, null, [{
      key: "dispatchUcUiViewChangedEvent",
      value: function dispatchUcUiViewChangedEvent(e) {
        var t = new window.CustomEvent("UC_UI_VIEW_CHANGED", {
          detail: e
        });
        window.dispatchEvent(t);
      }
    }, {
      key: "dispatchUcUiInitComplete",
      value: function dispatchUcUiInitComplete() {
        var e = new window.CustomEvent("UC_UI_INITIALIZED");
        window.dispatchEvent(e);
      }
    }]);
  }();
  var O = new (/*#__PURE__*/function () {
      function _class3() {
        _classCallCheck(this, _class3);
        this.startTime = Date.now(), this.callbacks = {
          ALL: [],
          SDK_INIT_COMPLETE: [],
          INIT_COMPLETE: [],
          EMBEDDINGS_CONSENTS_UPDATE: [],
          CMP_CONSENTS_UPDATE: [],
          CMP_API_INIT_COMPLETE: []
        };
      }
      return _createClass(_class3, [{
        key: "subscribe",
        value: function subscribe(e, t) {
          if (!this.callbacks[e]) throw Error("Can't unsubscribe. Subscription \"".concat(e, "\" does not exist."));
          this.callbacks[e].push(t);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e, t) {
          if (!this.callbacks[e]) throw Error("Can't unsubscribe. Subscription \"".concat(e, "\" does not exist."));
          this.callbacks[e] = this.callbacks[e].filter(function (e) {
            return t !== e;
          });
        }
      }, {
        key: "emit",
        value: function emit(e, t) {
          var _this4 = this;
          if (!this.callbacks[e]) throw Error("Can't emit event. Event \"".concat(e, "\" does not exist."));
          this.callbacks.ALL.concat(this.callbacks[e]).forEach(function (n) {
            n(e, t, Date.now() - _this4.startTime);
          });
        }
      }]);
    }())(),
    u = l("h2FSh"),
    p = l("dmwAz");
  var D = /*#__PURE__*/function () {
    function D() {
      _classCallCheck(this, D);
    }
    return _createClass(D, [{
      key: "cmpCall",
      value: function cmpCall(e, t, n) {
        return (0, u._)(function () {
          return (0, p._)(this, function (r) {
            return [2, new Promise(function (r) {
              O.subscribe(e, function () {
                return (0, u._)(function () {
                  var e;
                  return (0, p._)(this, function (i) {
                    return (e = window.__ucCmp)[t].apply(e, [n]).then(function (e) {
                      return r(e);
                    }), [2];
                  });
                })();
              });
            })];
          });
        })();
      }
    }, {
      key: "refreshScripts",
      value: function refreshScripts() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "refreshScripts")];
          });
        }).call(this);
      }
    }, {
      key: "getActiveLanguage",
      value: function getActiveLanguage() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "getActiveLanguage")];
          });
        }).call(this);
      }
    }, {
      key: "getControllerId",
      value: function getControllerId() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "getControllerId")];
          });
        }).call(this);
      }
    }, {
      key: "isConsentRequired",
      value: function isConsentRequired() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "isConsentRequired")];
          });
        }).call(this);
      }
    }, {
      key: "isInitialized",
      value: function isInitialized() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "isInitialized")];
          });
        }).call(this);
      }
    }, {
      key: "updateTcfConsents",
      value: function updateTcfConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "updateTcfConsents")];
          });
        }).call(this);
      }
    }, {
      key: "showFirstLayer",
      value: function showFirstLayer() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "showFirstLayer")];
          });
        }).call(this);
      }
    }, {
      key: "showSecondLayer",
      value: function showSecondLayer(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            return [2, this.cmpCall("INIT_COMPLETE", "showSecondLayer", e)];
          });
        }).call(this);
      }
    }, {
      key: "showServiceDetails",
      value: function showServiceDetails(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "showServiceDetails", e)];
          });
        }).call(this);
      }
    }, {
      key: "showAutoblockerMoreInfoView",
      value: function showAutoblockerMoreInfoView() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "showAutoblockerMoreInfoView")];
          });
        }).call(this);
      }
    }, {
      key: "showDsrForm",
      value: function showDsrForm() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "showDsrForm")];
          });
        }).call(this);
      }
    }, {
      key: "updateTheme",
      value: function updateTheme(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "updateTheme", e)];
          });
        }).call(this);
      }
    }, {
      key: "closeCmp",
      value: function closeCmp() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "closeCmp")];
          });
        }).call(this);
      }
    }, {
      key: "getConsentDetails",
      value: function getConsentDetails() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "getConsentDetails")];
          });
        }).call(this);
      }
    }, {
      key: "acceptAllConsents",
      value: function acceptAllConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "acceptAllConsents")];
          });
        }).call(this);
      }
    }, {
      key: "denyAllConsents",
      value: function denyAllConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "denyAllConsents")];
          });
        }).call(this);
      }
    }, {
      key: "updateCategoriesConsents",
      value: function updateCategoriesConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "updateCategoriesConsents")];
          });
        }).call(this);
      }
    }, {
      key: "updateServicesConsents",
      value: function updateServicesConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "updateServicesConsents")];
          });
        }).call(this);
      }
    }, {
      key: "saveConsents",
      value: function saveConsents() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "saveConsents")];
          });
        }).call(this);
      }
    }, {
      key: "changeLanguage",
      value: function changeLanguage(e) {
        return (0, u._)(function () {
          return (0, p._)(this, function (t) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "changeLanguage", e)];
          });
        }).call(this);
      }
    }, {
      key: "getCmpConfig",
      value: function getCmpConfig() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "getCmpConfig")];
          });
        }).call(this);
      }
    }, {
      key: "hydrateEmbeddings",
      value: function hydrateEmbeddings() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "hydrateEmbeddings")];
          });
        }).call(this);
      }
    }, {
      key: "clearUserSession",
      value: function clearUserSession() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("INIT_COMPLETE", "clearStorage")];
          });
        }).call(this);
      }
    }, {
      key: "isAgeVerificationRequired",
      value: function isAgeVerificationRequired() {
        return (0, u._)(function () {
          return (0, p._)(this, function (e) {
            return [2, this.cmpCall("SDK_INIT_COMPLETE", "isAgeVerificationRequired")];
          });
        }).call(this);
      }
    }]);
  }();
  l("e08dO");
  var M = l("9r8RE");
  (0, u._)(function () {
    return (0, p._)(this, function (e) {
      switch (e.label) {
        case 0:
          if (!(!Object.entries || window.NodeList && !NodeList.prototype.forEach)) return [3, 2];
          return [4, l("cgrZl")];
        case 1:
          e.sent(), e.label = 2;
        case 2:
          return [4, (0, u._)(function () {
            var e, t, n, r, i, o, s, c, a, E, w, T, y, A, P, L, k, R, F, B, H, U, z, j, G, Y, X, W, K, $, q, Z, J, Q;
            return (0, p._)(this, function (ee) {
              switch (ee.label) {
                case 0:
                  return [4, (0, u._)(function () {
                    var e;
                    return (0, p._)(this, function (t) {
                      return window.__ucCmp = new D(), e = new window.CustomEvent("UC_CMP_API_READY"), window.dispatchEvent(e), [2];
                    });
                  })()];
                case 1:
                  var et;
                  return ee.sent(), a = (c = function () {
                    var e = document.getElementById("usercentrics-cmp"),
                      t = function () {
                        var e = new URLSearchParams(window.location.search).get(m.UC_GEO_PARAM);
                        if (e) {
                          var t = (0, m.parseGeoParam)(e);
                          if (t) return t.region ? "".concat(t.country, ",").concat(t.region) : t.country;
                        }
                      }();
                    if (e) {
                      var n = e.dataset,
                        r = n.theme,
                        i = n.language,
                        o = n.rulesetId,
                        s = n.settingsId,
                        c = n.controllerId,
                        l = n.crossDomainEnabled,
                        a = n.userLocation,
                        u = n.draft,
                        p = n.legislationView,
                        f = n.sandbox,
                        C = n.cacheVersion,
                        _ = n.euMode,
                        g = n.disableTracking,
                        v = n.excludeAcceptAllVendors,
                        E = n.abVariant,
                        w = n.customCmp,
                        T = n.nonce;
                      return (0, d._)((0, h._)((0, d._)((0, h._)((0, d._)({
                        language: i,
                        rulesetId: o,
                        settingsId: s,
                        controllerId: c,
                        crossDomainEnabled: "true" === l,
                        location: null != t ? t : a,
                        draft: "true" === u,
                        legislationView: p,
                        sandbox: !!f
                      }, C && {
                        cacheVersion: parseInt(C)
                      }), {
                        euMode: !!_,
                        disableTracking: "true" === g,
                        theme: r && b.includes(r) ? r : "uc"
                      }), v && {
                        excludeAcceptAllVendors: JSON.parse(v)
                      }, E && {
                        abVariant: E
                      }), {
                        customCmp: "true" === w
                      }), T && {
                        nonce: T
                      });
                    }
                    return (0, d._)({
                      theme: "uc",
                      crossDomainEnabled: !1,
                      disableTracking: !1
                    }, t && {
                      location: t
                    });
                  }()).rulesetId, E = c.settingsId, w = c.controllerId, T = c.language, y = c.location, A = c.draft, P = c.legislationView, L = c.sandbox, k = c.cacheVersion, R = c.euMode, F = c.theme, B = c.disableTracking, H = c.excludeAcceptAllVendors, U = c.abVariant, z = c.customCmp, j = c.nonce, (et = (0, M.getNonce)()) && (0, M.setNonceInStore)(et), G = null == y ? void 0 : y.split(","), Y = T || (null == (e = window.ucCmpGTMConfig) ? void 0 : e.language), X = function () {
                    if (G && 0 !== G.length) return {
                      country: G[0],
                      region: function (e) {
                        if (e) return e.length > 2 ? e.substring(2) : e;
                      }(G[1]),
                      city: G[2]
                    };
                  }(), W = (0, d._)((0, h._)((0, d._)({
                    uiVersion: (null == (t = window.__ucMock) ? void 0 : t.uiVersion) || "4.14.0"
                  }, F && {
                    uiTheme: v(F)
                  }, A && {
                    draft: A
                  }, P && {
                    legislationView: P
                  }, L && {
                    sandbox: L
                  }, "number" == typeof k && {
                    cacheVersion: k
                  }, Y && {
                    language: Y
                  }, R && {
                    euMode: R
                  }), {
                    disableTracking: B
                  }), X && {
                    location: X
                  }, H && {
                    excludeAcceptAllVendors: H
                  }, U && {
                    abVariant: U
                  }, z && {
                    customCmp: z
                  }, j && {
                    nonce: j
                  }), "web.cmp.usercentrics-sandbox.eu" === document.location.hostname && C.webSdkEvents.subscribe("CMP_DATA_COMBINED", function (e, t) {
                    localStorage.setItem("ucSdkCombinedCmpData", JSON.stringify(t));
                  }), [4, S.getWebSdk()];
                case 2:
                  K = new (ee.sent())(W), $ = E || (null == (n = window.ucCmpGTMConfig) ? void 0 : n.settingsId), q = a || (null == (r = window.ucCmpGTMConfig) ? void 0 : r.rulesetId), Z = function Z() {
                    return (0, u._)(function () {
                      var e;
                      return (0, p._)(this, function (t) {
                        if (q) return [2, K.initByRuleSet(q, w)];
                        if ($) return [2, K.initBySetting($, w)];
                        if (null == (e = window.ucCmpConfig) ? void 0 : e.core) return [2, K.initByCoreData(window.ucCmpConfig.core)];
                        throw Error("Usercentrics: bad script configuration");
                      });
                    })();
                  }, ee.label = 3;
                case 3:
                  return ee.trys.push([3, 5,, 6]), [4, Z()];
                case 4:
                  return J = ee.sent(), [3, 6];
                case 5:
                  return Q = ee.sent(), (0, f.isCmpNotAllowedError)(Q) && Q.data.showNotAllowedInfo ? l("LaEjf").then(function (e) {
                    (0, e.initErrorView)();
                  }) : console.error("CMP initialization failed:", Q), [2];
                case 6:
                  return F && F in _ && (J.ui.theme = function (e, t) {
                    if (!(e in _)) return e;
                    var n = g[e];
                    return n ? t && n.includes(t.toUpperCase()) ? e : v(e) : e;
                  }(F, null == (s = J.theme.cmp) || null == (o = s.default) || null == (i = o.layout) ? void 0 : i.template)), window.__ucCmp = new I(J), O.emit("SDK_INIT_COMPLETE"), [4, x(J)];
                case 7:
                  return ee.sent(), window.UC_UI = new N(J), O.emit("INIT_COMPLETE"), V.dispatchUcUiInitComplete(), [2];
              }
            });
          })()];
        case 3:
          return e.sent(), [2];
      }
    });
  })();
})();