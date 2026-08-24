"use strict";

function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  function e(e, t, s, n) {
    Object.defineProperty(e, t, {
      get: s,
      set: n,
      enumerable: !0,
      configurable: !0
    });
  }
  function t(e, t) {
    return Object.keys(t).forEach(function (s) {
      "default" === s || "__esModule" === s || Object.prototype.hasOwnProperty.call(e, s) || Object.defineProperty(e, s, {
        enumerable: !0,
        get: function get() {
          return t[s];
        }
      });
    }), e;
  }
  function s(e) {
    var _r$i;
    if (e = ((_r$i = r.i) === null || _r$i === void 0 ? void 0 : _r$i[e]) || e, !n) try {
      throw Error();
    } catch (s) {
      var t = ("" + s.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
      if (!t) return i + e;
      n = t[0];
    }
    return new URL(i + e, n).toString();
  }
  var n,
    i = "../../",
    r = ("u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : "u" > (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : "u" > (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : {}).parcelRequirecb08,
    o = r.register;
  o("6iQdj", function (t, s) {
    e(t.exports, "CMP_EVENT_TYPE", function () {
      return r("1a1bx").CMP_EVENT_TYPE;
    }), e(t.exports, "isCmpNotAllowedError", function () {
      return r("2ks5K").isCmpNotAllowedError;
    }), e(t.exports, "isGdprCmpController", function () {
      return r("l8qje").isGdprCmpController;
    }), e(t.exports, "isTcfCmpController", function () {
      return r("l8qje").isTcfCmpController;
    }), e(t.exports, "isUsCmpController", function () {
      return r("l8qje").isUsCmpController;
    }), e(t.exports, "parseGeoParam", function () {
      return r("3Krri").parseGeoParam;
    }), e(t.exports, "UC_GEO_PARAM", function () {
      return r("3Krri").UC_GEO_PARAM;
    }), e(t.exports, "webSdkEvents", function () {
      return r("96QDM").webSdkEvents;
    }), e(t.exports, "default", function () {
      return n;
    }), r("1a1bx"), r("2ks5K"), r("l8qje"), r("3Krri"), r("96QDM");
    var n = r("aWbNH").WebSdk;
  }), o("aWbNH", function (t, s) {
    e(t.exports, "WebSdk", function () {
      return F;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("dmwAz");
    r("bxjJO");
    var d = r("iBXA0"),
      c = r("h8zqI"),
      l = r("3WziU"),
      u = r("fSIyh"),
      g = r("dIChF"),
      E = r("bY6u9"),
      p = r("l8qje"),
      h = r("lAwM5"),
      S = r("rMJIj"),
      I = r("5hUSA"),
      _ = r("1a1bx");
    r("2hIpA");
    var C = r("168i4"),
      T = r("2ks5K"),
      N = r("ayOF0"),
      O = r("e08dO"),
      v = r("4tLOk"),
      m = r("3G7LV"),
      A = r("gIDkr"),
      f = r("5CKHf"),
      U = r("280OB"),
      b = r("bo49W"),
      D = r("bVBWk"),
      V = r("96QDM"),
      P = function P(e) {
        return (0, n._)(function () {
          var t;
          return (0, a._)(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, (t = new (0, l.default)(e)).init()];
              case 1:
                if (s.sent()) return [2, t];
                return [2];
            }
          });
        })();
      };
    var F = /*#__PURE__*/function () {
      function F(e) {
        var _this = this;
        _classCallCheck(this, F);
        this.draft = !1, this.watermark = !1, this.sandbox = !1, this.euMode = !1, this.customPurModel = !1, this.disableTracking = !1, this.implicitAcceptArmed = !1, this.isCurrentDomainAllowed = function (e) {
          var t,
            s = window.location.hostname.replace(/^www\./, ""),
            n = window.location.pathname,
            i = null == (t = e.allowedDomains) ? void 0 : t.list,
            r = e.testDomains;
          if (!(null == i ? void 0 : i.length)) return !0;
          var o = !1;
          i.forEach(function (e) {
            if (e.includes("*")) {
              if ("*." === e.slice(0, 2)) s.includes(e.slice(2)) && (o = !0);else if ("/*" === e.slice(-2)) {
                var t = e.slice(0, -2);
                t.split("/")[0] === s && (s + n).includes(t) && (o = !0);
              }
            } else e.includes("/") ? s + n === e && (o = !0) : s === e && (o = !0);
          });
          var a = Array.isArray(r) && r.some(function (e) {
            return e.testDomain === window.location.host;
          });
          return !o && a && (_this.watermark = !0, _this.disableTracking = !0, o = !0), o;
        }, this.watermark = !1, this.draft = (null == e ? void 0 : e.draft) === !0, this.sandbox = (null == e ? void 0 : e.sandbox) === !0, this.euMode = (null == e ? void 0 : e.euMode) === !0, this.customPurModel = (null == e ? void 0 : e.customCmp) === !0, this.location = null == e ? void 0 : e.location, this.language = null == e ? void 0 : e.language, this.uiVersion = null == e ? void 0 : e.uiVersion, this.legislationView = null == e ? void 0 : e.legislationView, this.uiTheme = (null == e ? void 0 : e.uiTheme) || "uc", this.disableTracking = (null == e ? void 0 : e.disableTracking) || !1, this.excludeAcceptAllVendors = (null == e ? void 0 : e.excludeAcceptAllVendors) || [], this.abVariant = null == e ? void 0 : e.abVariant, (0, b.setNonce)(null == e ? void 0 : e.nonce), this.apiService = new (0, d.default)({
          sandbox: null == e ? void 0 : e.sandbox,
          euMode: null == e ? void 0 : e.euMode,
          cacheVersion: null == e ? void 0 : e.cacheVersion
        }), this.localStorageService = new (0, u.default)(), this.backwardsCompatibilityService = new (0, I.default)(this.localStorageService, null == e ? void 0 : e.sandbox);
      }
      return _createClass(F, [{
        key: "initByRuleSet",
        value: function initByRuleSet(e, t) {
          return (0, n._)(function () {
            var s;
            return (0, a._)(this, function (n) {
              switch (n.label) {
                case 0:
                  return V.webSdkEvents.emit("INIT_ACTION", {
                    initByRuleSet: e
                  }), [4, this.apiService.fetchInitDataByRuleSetId(e, this.location)];
                case 1:
                  return s = n.sent(), [2, this.init((0, o._)((0, i._)({}, s), {
                    controllerId: t
                  }))];
              }
            });
          }).call(this);
        }
      }, {
        key: "initBySetting",
        value: function initBySetting(e, t) {
          return (0, n._)(function () {
            var s;
            return (0, a._)(this, function (n) {
              switch (n.label) {
                case 0:
                  return V.webSdkEvents.emit("INIT_ACTION", {
                    initBySetting: {
                      settingsId: e
                    }
                  }), [4, this.apiService.fetchInitDataBySettingsId(e, (0, i._)({
                    location: this.location,
                    language: this.language
                  }, this.draft && {
                    draft: !0
                  }))];
                case 1:
                  return s = n.sent(), [2, this.init((0, o._)((0, i._)({}, s), {
                    controllerId: t
                  }))];
              }
            });
          }).call(this);
        }
      }, {
        key: "initByCoreData",
        value: function initByCoreData(e, t) {
          return (0, n._)(function () {
            var s, n, r;
            return (0, a._)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (V.webSdkEvents.emit("INIT_ACTION", {
                    initByCoreData: e
                  }), !(null == (s = window.ucCmpConfig) ? void 0 : s.location)) return [3, 2];
                  return [4, window.ucCmpConfig.location];
                case 1:
                  return n = a.sent(), [3, 3];
                case 2:
                  n = void 0, a.label = 3;
                case 3:
                  return r = {
                    settingsCoreData: e,
                    location: n
                  }, [2, this.init((0, o._)((0, i._)({}, r), {
                    controllerId: t
                  }))];
              }
            });
          }).call(this);
        }
      }, {
        key: "init",
        value: function init(e) {
          return (0, n._)(function (e) {
            var t, s, n, d, l, u, I, T, b, F, L, w, M, R, y, x, G, B, k, Y, j, H, z, W, K, Q, J, q, $, X, Z, ee, et, es, en, ei, er, eo, ea, ed, ec, el, eu, eg, eE;
            return (0, a._)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (t = e.settingsCoreData, n = void 0 === (s = e.location) ? this.location || {
                    country: "DE"
                  } : s, l = void 0 === (d = e.language) ? this.language : d, u = e.compressedConsentDataString, I = e.controllerId, window.dispatchEvent(new CustomEvent("UC_SETTINGS_ID_RESOLVED", {
                    detail: {
                      settingsId: t.id,
                      sandbox: t.sandbox
                    }
                  })), y = void 0, x = window.UC_UI_USER_SESSION_DATA, !y && x && (y = (0, i._)({}, x)), !y && window[g.WINDOW_MOBILE_SDK_NAMESPACE] && "function" == typeof window[g.WINDOW_MOBILE_SDK_NAMESPACE].getUserSessionData && (y = (0, h.fixUserSessionDataTimestampConsentAction)({
                    userSessionDataString: window[g.WINDOW_MOBILE_SDK_NAMESPACE].getUserSessionData()
                  })), y && (G = (0, h.convertUserSessionDataToV2LocalStorageEntry)(y, t, !1), this.localStorageService.setV2LocalStorageRestoredData(G)), t.crossDomainConsentSharingEnabled && t.cmp.mainDomain && (0, A.initCdcs)(t.cmp.mainDomain), B = t.crossDeviceConsentSharingEnabled, !(I && B)) return [3, 2];
                  return [4, this.apiService.fetchUcStringForRestoration(I, t.id)];
                case 1:
                  (Y = a.sent()) && "" !== Y.action && Y.consents && Y.consents.length > 0 && (y = (0, h.fixUserSessionDataTimestampConsentAction)({
                    userSessionData: Y
                  })) && (j = (0, h.convertUserSessionDataToV2LocalStorageEntry)(y, t, !0), this.localStorageService.setV2LocalStorageRestoredData(j)), a.label = 2;
                case 2:
                  return [4, this.backwardsCompatibilityService.transformLocalStorage(t.id)];
                case 3:
                  if (a.sent(), H = this.localStorageService.getConsentString(), !(I && B) || !(t.crossDomainConsentSharingEnabled && !(null == (b = window.ucCmpConfig) || null == (T = b.core) ? void 0 : T.cmp.mainDomain) && H && "" !== H)) return [3, 6];
                  return [4, P(t.id)];
                case 4:
                  return [4, null == (z = a.sent()) ? void 0 : z.setConsentString(H)];
                case 5:
                  a.sent(), k = z, a.label = 6;
                case 6:
                  if (this.verifyCoreData(t), I && !B && O.UCConsole.error("WebSdk - initBySetting", "Cross Device Consent Sharing is not enabled for SettingsID: \"".concat(t.id, "\". Could not restore consent.")), W = !!(!0 === t.enableBotDetection && (0, U.isUserBot)(navigator.userAgent)) || void 0, K = window.location.origin.includes("app.usercentrics.eu") && window.location.pathname.includes("/browser-ui/preview/"), W || K || (0, D.setTrackingPixel)(t.id, this.sandbox, this.euMode), !(t.crossDomainConsentSharingEnabled && !(null == (L = window.ucCmpConfig) || null == (F = L.core) ? void 0 : F.cmp.mainDomain))) return [3, 9];
                  if (q = k) return [3, 8];
                  return [4, P(t.id)];
                case 7:
                  q = a.sent(), a.label = 8;
                case 8:
                  return J = q, [3, 10];
                case 9:
                  J = void 0, a.label = 10;
                case 10:
                  if (Q = J, $ = this.backwardsCompatibilityService.getMigratedConsentString(), !(Q && $)) return [3, 12];
                  return [4, Q.setConsentString($)];
                case 11:
                  a.sent(), a.label = 12;
                case 12:
                  return [4, (X = new (0, c.default)({
                    apiService: this.apiService,
                    crossDomainService: Q,
                    localStorageService: this.localStorageService
                  })).getConsentData(t.id, u)];
                case 13:
                  Z = a.sent(), ee = new (0, C.CmpDataRequestModel)({
                    settingsCoreData: t,
                    location: n
                  }, (0, i._)((0, o._)((0, i._)({
                    isBot: W,
                    consentData: Z,
                    theme: this.uiTheme
                  }, this.sandbox && {
                    sandbox: !0
                  }, this.draft && {
                    draft: !0
                  }, this.legislationView && {
                    legislationView: this.legislationView
                  }), {
                    language: l,
                    isGppActive: !!t.gpp || void 0
                  }), this.abVariant && {
                    abVariant: this.abVariant
                  })), a.label = 14;
                case 14:
                  return a.trys.push([14, 17,, 18]), [4, ee.getRequestData()];
                case 15:
                  return es = a.sent(), [4, this.apiService.fetchCmpData(es)];
                case 16:
                  return et = a.sent(), [3, 18];
                case 17:
                  throw ei = (en = a.sent()) instanceof Error ? en.message : "Failed to fetch CMP data", V.webSdkEvents.emit("ERROR", {
                    message: ei,
                    error: en
                  }), O.UCConsole.error("WebSdk - init", "Failed to fetch CMP data", en), en;
                case 18:
                  if (!("US" === et.setting.type && (null == n ? void 0 : n.country) === "US" && t.gpp)) return [3, 20];
                  return [4, Promise.resolve(r("5bEzQ"))];
                case 19:
                  er = new (a.sent().GppModel)(t.gpp, {
                    currentLocation: this.location,
                    consentData: Z
                  }), eo = et.consent, er.setApplicableSections(et.setting.type, this.location), ea = er.getLegalSection(), et.isCmpSupressed && er.setCmpDisplayDisabled(), Z && "onInitialPageLoad" !== Z.updatedBy || eo.usflString !== E.USFL_DEFAULT_STRING && eo.usnatString !== E.USNAT_DEFAULT_STRING || (er.generateUsString(), er.setUsString(er.usString)), "usfl" === ea ? eo.usflString = er.usString : eo.usnatString = er.usString, a.label = 20;
                case 20:
                  return ed = W || !et.core.analyticsEnabled || this.disableTracking ? void 0 : new (0, S.default)({
                    settingsId: et.setting.id,
                    abTestVariant: et.setting.abVariant,
                    euMode: this.euMode,
                    sandbox: this.sandbox
                  }), (null == (ec = null == (w = et.integrations) ? void 0 : w.scripts) ? void 0 : ec.length) && (el = ec.map(function (e) {
                    var t,
                      s = document.createElement("script");
                    try {
                      if (t = new URL(e.src), !["https:"].includes(t.protocol)) return null;
                    } catch (e) {
                      return null;
                    }
                    return s.src = t.toString(), s.async = e.async, s.type = e.type, e.attributes.length && e.attributes.forEach(function (e) {
                      "nonce" !== e.name.toLowerCase() && s.setAttribute(e.name, e.value);
                    }), (0, O.applyNonce)(s), s;
                  }).filter(function (e) {
                    return null !== e;
                  }), (0, v.domContentLoaded)().then(function () {
                    el.forEach(function (e) {
                      document.body.appendChild(e);
                    });
                  })), eu = et.core.tagLoggerEnabled ? new (0, N.default)({
                    settingsId: et.setting.id,
                    localStorageService: this.localStorageService,
                    apiService: this.apiService
                  }) : void 0, eg = {
                    apiService: this.apiService,
                    localStorageService: this.localStorageService,
                    consentService: X,
                    analyticsService: ed,
                    tagLoggerService: eu
                  }, [4, (this.getCmpController || (0, m.getCmpController))(et, eg, (0, i._)({
                    consentData: Z,
                    settingsCoreData: t,
                    uiVersion: this.uiVersion,
                    draft: this.draft,
                    customPurModel: this.customPurModel,
                    watermark: this.watermark,
                    gpp: er,
                    location: n
                  }, this.excludeAcceptAllVendors && {
                    excludeAcceptAllVendors: this.excludeAcceptAllVendors
                  }))];
                case 21:
                  return eE = a.sent(), (0, p.isUsCmpController)(eE) && (0, f.isUsConsentModel)(eE.consent) && !(null == (M = eE.consent) ? void 0 : M.gpcSignal) && this.armAcceptImplicitOnSessionEnd(eE, et.setting.id), eE.setAnalyticsPixel(_.CMP_EVENT_TYPE.CMP_ELIGIBLE), ((null == (R = eE.consent) ? void 0 : R.gpcSignal) || eE.ui.showGpcLabel) && ("none" === eE.ui.initialView || "button" === eE.ui.initialView) && eE.setAnalyticsPixel(_.CMP_EVENT_TYPE.DENY_ALL_IMPLICIT_CMP_NOT_SHOWN), [4, eE.applyConsents(null == Z ? void 0 : Z.hash, null == Z ? void 0 : Z.interaction, !1, !0)];
                case 22:
                  return a.sent(), this.localStorageService.setUiData({
                    language: eE.getLanguage()
                  }), V.webSdkEvents.emit("INIT_COMPLETE"), er && (er.setCmpStatusLoaded(), ("none" === eE.ui.initialView || "button" === eE.ui.initialView || "privacyNotice" === eE.ui.initialView) && er.setCmpSignalReady()), [2, eE];
              }
            });
          }).apply(this, arguments);
        }
      }, {
        key: "armAcceptImplicitOnSessionEnd",
        value: function armAcceptImplicitOnSessionEnd(e, t) {
          var _this2 = this;
          if (!this.implicitAcceptArmed) {
            this.implicitAcceptArmed = !0;
            var s = function s() {
                S.default.hasFired(_.CMP_EVENT_TYPE.ACCEPT_EXPLICIT, t, !0) || S.default.hasFired(_.CMP_EVENT_TYPE.DENY_ALL_EXPLICIT, t, !0) || e.setAnalyticsPixel(_.CMP_EVENT_TYPE.ACCEPT_IMPLICIT, void 0, {
                  unloadSafe: !0
                }), i();
              },
              n = function n() {
                "hidden" === document.visibilityState && s();
              };
            window.addEventListener("pagehide", s, {
              once: !0
            }), document.addEventListener("visibilitychange", n, {
              once: !0
            }), window.addEventListener("beforeunload", s, {
              once: !0
            });
            var i = function i() {
              window.removeEventListener("pagehide", s), document.removeEventListener("visibilitychange", n), window.removeEventListener("beforeunload", s), _this2.implicitAcceptArmed = !1;
            };
          }
        }
      }, {
        key: "verifyCoreData",
        value: function verifyCoreData(e) {
          if (!this.isCurrentDomainAllowed(e)) {
            var t;
            throw O.UCConsole.error("WebSdk - initBySetting", "The domain \"".concat(location.hostname, "\" has not been added to the allow list for this Usercentrics account.")), new (0, T.CmpNotAllowedError)((null == (t = e.allowedDomains) ? void 0 : t.showErrorCmp) === !0);
          }
        }
      }]);
    }();
  }), o("bxjJO", function (t, s) {
    e(t.exports, "ApiService", function () {
      return r("iBXA0").default;
    }), e(t.exports, "ConsentService", function () {
      return r("h8zqI").default;
    }), e(t.exports, "CrossDomainService", function () {
      return r("3WziU").default;
    }), e(t.exports, "CustomEventService", function () {
      return r("xXOcf").default;
    }), e(t.exports, "DataLayerService", function () {
      return r("9QnPa").default;
    }), e(t.exports, "LocalStorageService", function () {
      return r("fSIyh").default;
    }), e(t.exports, "ScriptService", function () {
      return r("kA7xy").default;
    }), r("rMJIj"), r("xXOcf"), r("9QnPa"), r("iBXA0"), r("h8zqI"), r("3WziU"), r("fSIyh"), r("kA7xy");
  }), o("rMJIj", function (t, s) {
    e(t.exports, "default", function () {
      return c;
    });
    var n = r("kTJf3"),
      i = r("2WodU"),
      o = r("1a1bx"),
      a = r("bvqPv"),
      d = r("cnbVL");
    var c = /*#__PURE__*/function () {
      function c(e) {
        var _this3 = this;
        _classCallCheck(this, c);
        var t,
          s,
          i = e.settingsId,
          r = e.abTestVariant,
          o = e.euMode,
          l = e.sandbox;
        this.version = 2, this.setAnalyticsPixel = function (e, t, s) {
          if (_this3.getIsValidEventType(e)) {
            c.saveForSettingsId(_this3.settingsId, e, null == s ? void 0 : s.isUs);
            var n = Date.now(),
              i = encodeURIComponent(document.location.href),
              r = _this3.getActionType(e, t),
              o = "v=".concat(_this3.version, "&sid=").concat(_this3.settingsId, "&t=").concat(r, "&abv=").concat(_this3.abTestVariant || "", "&r=").concat(i, "&cb=").concat(n),
              a = "".concat(_this3.domains.analytics, "/uct?").concat(o);
            (null == s ? void 0 : s.unloadSafe) ? "u" > (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(a) || (c.isKeepaliveSupported() ? fetch(a, {
              keepalive: !0
            }).catch(function () {}) : new Image().src = a) : c.isKeepaliveSupported() ? fetch(a, {
              keepalive: !0
            }).catch(function () {}) : new Image().src = a : new Image().src = a, d.V2BridgeCustomEvents.dispatchUcUiCmpEvent(e, t, _this3.abTestVariant);
          }
        }, this.domains = (0, n._)({
          analytics: a.TRACK_EVENT_DOMAINS[void 0 !== l && l ? "SANDBOX" : "PROD"][void 0 !== o && o ? "EU_URI" : "URI"]
        }, (null == (s = window.ucCmpConfig) || null == (t = s.proxy) ? void 0 : t.analytics) && {
          analytics: window.ucCmpConfig.proxy.analytics
        }), this.settingsId = i, this.abTestVariant = r, c.loadForSettingsId(i);
      }
      return _createClass(c, [{
        key: "getIsValidEventType",
        value: function getIsValidEventType(e) {
          return !!Object.values(o.CMP_EVENT_TYPE).includes(e);
        }
      }, {
        key: "getActionType",
        value: function getActionType(e, t) {
          switch (e) {
            case o.CMP_EVENT_TYPE.CMP_SHOWN:
              return i.UI_ACTION_TYPE.CMP_SHOWN;
            case o.CMP_EVENT_TYPE.ACCEPT_ALL:
              if (t) switch (t) {
                case "first":
                  return i.UI_ACTION_TYPE.ACCEPT_ALL_L1;
                case "second":
                  return i.UI_ACTION_TYPE.ACCEPT_ALL_L2;
              }
              return i.UI_ACTION_TYPE.ACCEPT_ALL;
            case o.CMP_EVENT_TYPE.DENY_ALL:
              if (t) switch (t) {
                case "first":
                  return i.UI_ACTION_TYPE.DENY_ALL_L1;
                case "second":
                  return i.UI_ACTION_TYPE.DENY_ALL_L2;
              }
              return i.UI_ACTION_TYPE.DENY_ALL;
            case o.CMP_EVENT_TYPE.SAVE:
              if (t) switch (t) {
                case "first":
                  return i.UI_ACTION_TYPE.SAVE_L1;
                case "second":
                  return i.UI_ACTION_TYPE.SAVE_L2;
              }
              return i.UI_ACTION_TYPE.SAVE;
            case o.CMP_EVENT_TYPE.CCPA_TOGGLES_ON:
              return i.UI_ACTION_TYPE.CCPA_TOGGLES_ON;
            case o.CMP_EVENT_TYPE.CCPA_TOGGLES_OFF:
              return i.UI_ACTION_TYPE.CCPA_TOGGLES_OFF;
            case o.CMP_EVENT_TYPE.COOKIE_POLICY_LINK:
              return i.UI_ACTION_TYPE.COOKIE_POLICY_LINK;
            case o.CMP_EVENT_TYPE.IMPRINT_LINK:
              return i.UI_ACTION_TYPE.IMPRINT_LINK;
            case o.CMP_EVENT_TYPE.MORE_INFORMATION_LINK:
              return i.UI_ACTION_TYPE.MORE_INFORMATION_LINK;
            case o.CMP_EVENT_TYPE.PRIVACY_POLICY_LINK:
              return i.UI_ACTION_TYPE.PRIVACY_POLICY_LINK;
            case o.CMP_EVENT_TYPE.SAY_MINE_LINK:
              return i.UI_ACTION_TYPE.SAY_MINE_LINK;
            case o.CMP_EVENT_TYPE.ACCEPT_EXPLICIT:
              return i.UI_ACTION_TYPE.ACCEPT_EXPLICIT;
            case o.CMP_EVENT_TYPE.ACCEPT_IMPLICIT:
              return i.UI_ACTION_TYPE.ACCEPT_IMPLICIT;
            case o.CMP_EVENT_TYPE.DENY_ALL_EXPLICIT:
              return i.UI_ACTION_TYPE.DENY_ALL_EXPLICIT;
            case o.CMP_EVENT_TYPE.DENY_ALL_IMPLICIT_CMP_NOT_SHOWN:
              return i.UI_ACTION_TYPE.DENY_ALL_IMPLICIT_CMP_NOT_SHOWN;
            case o.CMP_EVENT_TYPE.DENY_ALL_IMPLICIT_CMP_SHOWN:
              return i.UI_ACTION_TYPE.DENY_ALL_IMPLICIT_CMP_SHOWN;
            case o.CMP_EVENT_TYPE.CMP_REQUEST_DISPLAY:
              return i.UI_ACTION_TYPE.CMP_REQUEST_DISPLAY;
            case o.CMP_EVENT_TYPE.CMP_ELIGIBLE:
              return i.UI_ACTION_TYPE.CMP_ELIGIBLE;
            case o.CMP_EVENT_TYPE.AGE_VERIFICATION_ACCEPT:
              return i.UI_ACTION_TYPE.AGE_VERIFICATION_ACCEPT;
            case o.CMP_EVENT_TYPE.AGE_VERIFICATION_DENY:
              return i.UI_ACTION_TYPE.AGE_VERIFICATION_DENY;
            default:
              return i.UI_ACTION_TYPE.UNDEFINED;
          }
        }
      }], [{
        key: "storageKey",
        value: function storageKey(e) {
          return "".concat(c.STORAGE_PREFIX).concat(e);
        }
      }, {
        key: "isKeepaliveSupported",
        value: function isKeepaliveSupported() {
          if (void 0 !== c.keepaliveSupported) return c.keepaliveSupported;
          try {
            c.keepaliveSupported = "u" > (typeof Request === "undefined" ? "undefined" : _typeof(Request)) && "keepalive" in new Request("https://x");
          } catch (e) {
            c.keepaliveSupported = !1;
          }
          return c.keepaliveSupported;
        }
      }, {
        key: "loadForSettingsId",
        value: function loadForSettingsId(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = new Set();
          if (t) {
            var n = window.localStorage.getItem(c.storageKey(e));
            n && (s = new Set(JSON.parse(n)));
          }
          return c.firedEventsBySettingsId.set(e, s), s;
        }
      }, {
        key: "saveForSettingsId",
        value: function saveForSettingsId(e, t) {
          var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = c.loadForSettingsId(e, s);
          n.add(t), s && window.localStorage.setItem(c.storageKey(e), JSON.stringify(Array.from(n)));
        }
      }, {
        key: "hasFired",
        value: function hasFired(e, t) {
          var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return c.loadForSettingsId(t, s).has(e);
        }
      }]);
    }();
    c.STORAGE_PREFIX = "uc:analytics:firedEvents:", c.firedEventsBySettingsId = new Map();
  }), o("2WodU", function (t, s) {
    e(t.exports, "UI_ACTION_TYPE", function () {
      return i;
    });
    var n,
      i = ((n = {})[n.UNDEFINED = 0] = "UNDEFINED", n[n.CMP_SHOWN = 1] = "CMP_SHOWN", n[n.ACCEPT_ALL = 2] = "ACCEPT_ALL", n[n.DENY_ALL = 3] = "DENY_ALL", n[n.SAVE = 4] = "SAVE", n[n.ACCEPT_ALL_L1 = 5] = "ACCEPT_ALL_L1", n[n.DENY_ALL_L1 = 6] = "DENY_ALL_L1", n[n.SAVE_L1 = 7] = "SAVE_L1", n[n.ACCEPT_ALL_L2 = 8] = "ACCEPT_ALL_L2", n[n.DENY_ALL_L2 = 9] = "DENY_ALL_L2", n[n.SAVE_L2 = 10] = "SAVE_L2", n[n.COOKIE_POLICY_LINK = 11] = "COOKIE_POLICY_LINK", n[n.IMPRINT_LINK = 12] = "IMPRINT_LINK", n[n.MORE_INFORMATION_LINK = 13] = "MORE_INFORMATION_LINK", n[n.PRIVACY_POLICY_LINK = 14] = "PRIVACY_POLICY_LINK", n[n.CCPA_TOGGLES_ON = 15] = "CCPA_TOGGLES_ON", n[n.CCPA_TOGGLES_OFF = 16] = "CCPA_TOGGLES_OFF", n[n.SAY_MINE_LINK = 17] = "SAY_MINE_LINK", n[n.ACCEPT_EXPLICIT = 18] = "ACCEPT_EXPLICIT", n[n.ACCEPT_IMPLICIT = 19] = "ACCEPT_IMPLICIT", n[n.DENY_ALL_EXPLICIT = 20] = "DENY_ALL_EXPLICIT", n[n.DENY_ALL_IMPLICIT_CMP_NOT_SHOWN = 21] = "DENY_ALL_IMPLICIT_CMP_NOT_SHOWN", n[n.DENY_ALL_IMPLICIT_CMP_SHOWN = 22] = "DENY_ALL_IMPLICIT_CMP_SHOWN", n[n.CMP_REQUEST_DISPLAY = 23] = "CMP_REQUEST_DISPLAY", n[n.CMP_ELIGIBLE = 24] = "CMP_ELIGIBLE", n[n.AGE_VERIFICATION_ACCEPT = 25] = "AGE_VERIFICATION_ACCEPT", n[n.AGE_VERIFICATION_DENY = 26] = "AGE_VERIFICATION_DENY", n);
  }), o("bvqPv", function (t, s) {
    e(t.exports, "TRACK_EVENT_DOMAINS", function () {
      return n;
    });
    var n = {
      PROD: {
        URI: "https://uct.service.usercentrics.eu",
        EU_URI: "https://uct.eu.usercentrics.eu"
      },
      SANDBOX: {
        URI: "https://uct.service.usercentrics.eu",
        EU_URI: "https://uct.eu.usercentrics.eu"
      }
    };
  }), o("cnbVL", function (t, s) {
    e(t.exports, "V2BridgeCustomEvents", function () {
      return o;
    });
    var n = r("kTJf3"),
      i = r("7qJ26");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "getConsentDetailsV2",
        value: function getConsentDetailsV2(e) {
          var t = {};
          Object.entries(e.categories).map(function (e) {
            var s = (0, i._)(e, 2),
              n = s[0],
              r = s[1];
            "SOME_ACCEPTED" === r.state ? t[n] = null : t[n] = "ALL_ACCEPTED" === r.state;
          });
          var s = {};
          Object.entries(e.services).map(function (e) {
            var t,
              n = (0, i._)(e, 2)[1];
            s[n.name] = !!(null == (t = n.consent) ? void 0 : t.given);
          });
          var r = {
            action: e.consent.updatedBy,
            event: "consent_status",
            type: e.consent.type,
            ucCategory: t
          };
          return (0, n._)({}, r, s);
        }
      }, {
        key: "dispatchUcUiCmpEvent",
        value: function dispatchUcUiCmpEvent(e, t, s) {
          this.dispatch("UC_UI_CMP_EVENT", {
            abTestVariant: s,
            source: t,
            type: e
          });
        }
      }, {
        key: "dispatchUcUiViewChangedEvent",
        value: function dispatchUcUiViewChangedEvent(e) {
          var t = {
              none: "NONE",
              first: "FIRST_LAYER",
              second: "SECOND_LAYER",
              button: "PRIVACY_BUTTON",
              privacyNotice: "PRIVACY_NOTICE"
            },
            s = new window.CustomEvent("UC_UI_VIEW_CHANGED", {
              detail: {
                previousView: e.previousView ? t[e.previousView] : void 0,
                view: t[e.view]
              }
            });
          window.dispatchEvent(s);
        }
      }, {
        key: "dispatch",
        value: function dispatch(e, t) {
          var s = new window.CustomEvent(e, {
            detail: t
          });
          window.dispatchEvent(s);
        }
      }]);
    }();
  }), o("xXOcf", function (t, s) {
    e(t.exports, "default", function () {
      return i;
    });
    var n = r("cnbVL");
    var i = /*#__PURE__*/function () {
      function i(e) {
        _classCallCheck(this, i);
        this.eventNames = e;
      }
      return _createClass(i, [{
        key: "dispatchConsentDetails",
        value: function dispatchConsentDetails(e) {
          var _this4 = this;
          this.dispatch("UC_CONSENT", e);
          var t = n.V2BridgeCustomEvents.getConsentDetailsV2(e);
          this.eventNames.forEach(function (e) {
            _this4.dispatch(e, t);
          });
        }
      }, {
        key: "dispatchUcGcmUpdateEvent",
        value: function dispatchUcGcmUpdateEvent(e) {
          this.dispatch("UC_GCM_UPDATE", e);
        }
      }, {
        key: "dispatchUcUetUpdateEvent",
        value: function dispatchUcUetUpdateEvent(e) {
          this.dispatch("UC_UET_UPDATE", e);
        }
      }, {
        key: "dispatchUcAcsUpdateEvent",
        value: function dispatchUcAcsUpdateEvent(e) {
          this.dispatch("UC_ACS_UPDATE", e);
        }
      }, {
        key: "dispatchUcClarityUpdateEvent",
        value: function dispatchUcClarityUpdateEvent(e) {
          this.dispatch("UC_CLARITY_UPDATE", e);
        }
      }, {
        key: "dispatchCategoryConsentDetails",
        value: function dispatchCategoryConsentDetails(e) {
          this.dispatch("UC_CATEGORY_CONSENT", e);
        }
      }, {
        key: "dispatch",
        value: function dispatch(e, t) {
          var s = new window.CustomEvent(e, {
            detail: t
          });
          window.dispatchEvent(s);
        }
      }]);
    }();
  }), o("9QnPa", function (t, s) {
    e(t.exports, "default", function () {
      return i;
    });
    var n = r("e08dO");
    var i = /*#__PURE__*/function () {
      function i(e) {
        var _this5 = this;
        _classCallCheck(this, i);
        this.windowDataLayers = window, this.dataLayers = e, e.forEach(function (e) {
          _this5.windowDataLayers[e] || (_this5.windowDataLayers[e] = []);
        });
      }
      return _createClass(i, [{
        key: "push",
        value: function push(e) {
          var _this6 = this;
          this.dataLayers.forEach(function (t) {
            try {
              _this6.windowDataLayers[t].push(e);
            } catch (e) {
              n.UCConsole.warn("dataLayer", "Could not push to dataLayer ".concat(t), e);
            }
          });
        }
      }]);
    }();
  }), o("iBXA0", function (t, s) {
    e(t.exports, "default", function () {
      return u;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("7qJ26"),
      d = r("dmwAz"),
      c = r("2J7XN"),
      l = r("e08dO");
    var u = /*#__PURE__*/function () {
      function u(e) {
        _classCallCheck(this, u);
        this.cache = {}, this.sandbox = !0 === e.sandbox, this.cacheVersion = e.cacheVersion, this.euMode = !0 === e.euMode, this.domains = this.getDomains(), this.paths = this.getPaths();
      }
      return _createClass(u, [{
        key: "getDomains",
        value: function getDomains() {
          var e,
            t = this.euMode && 1 ? "https://v1.api.service.eu1.cmp.usercentrics.eu" : "https://v1.api.service.cmp.usercentrics.eu";
          return (0, i._)({
            api: t || c.API_DOMAINS[this.sandbox ? "SANDBOX" : "PROD"][this.euMode ? "EU_URI" : "URI"],
            consent: c.SAVE_CONSENTS_DOMAINS[this.sandbox ? "SANDBOX" : "PROD"][this.euMode ? "EU_URI" : "URI"],
            crossDevice: c.RETRIEVE_CONSENTS_DOMAINS[this.sandbox ? "SANDBOX" : "PROD"][this.euMode ? "EU_URI" : "URI"],
            logger: c.GRAPHQL_DOMAINS[this.sandbox ? "SANDBOX" : "PROD"][this.euMode ? "EU_URI" : "URI"]
          }, (null == (e = window.ucCmpConfig) ? void 0 : e.proxy) && (0, i._)({}, window.ucCmpConfig.proxy));
        }
      }, {
        key: "getPaths",
        value: function getPaths() {
          return {
            api: "/latest/",
            consent: "/consent/uw/3",
            crossDevice: "/",
            logger: this.sandbox ? "/" : "/graphql"
          };
        }
      }, {
        key: "getCachedData",
        value: function getCachedData(e) {
          return this.cache[e];
        }
      }, {
        key: "setCachedData",
        value: function setCachedData(e, t) {
          this.cache[e] = t;
        }
      }, {
        key: "getQueryTargetData",
        value: function getQueryTargetData() {
          return (0, i._)({}, this.sandbox && {
            sandbox: !0
          }, "number" == typeof this.cacheVersion && {
            cacheVersion: this.cacheVersion
          });
        }
      }, {
        key: "getUrl",
        value: function getUrl(e, t) {
          var s = "";
          if (t) {
            var n = new URLSearchParams();
            Object.entries(t).forEach(function (e) {
              var t = (0, a._)(e, 2),
                s = t[0],
                i = t[1];
              null != i && n.set(s, i.toString());
            }), s = n.toString();
          }
          return "".concat(e).concat(s ? "?".concat(s) : "");
        }
      }, {
        key: "fetchLocalizedJson",
        value: function fetchLocalizedJson(e) {
          return (0, n._)(function () {
            var t;
            return (0, d._)(this, function (s) {
              return t = {
                country: "UNKNOWN"
              }, [2, window.fetch("".concat(this.domains.api).concat(this.paths.api).concat(e)).then(function (e) {
                return (0, n._)(function () {
                  var s, n;
                  return (0, d._)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (!e.ok) return [3, 2];
                        return t.country = (s = e.headers.get("x-client-geo-location") || "DE,DEBY").split(",")[0], t.region = s.split(",")[1] ? s.split(",")[1].substring(2) : "", n = {}, [4, e.json()];
                      case 1:
                        return [2, (n.data = i.sent(), n.location = t, n)];
                      case 2:
                        return [2, {
                          data: null,
                          location: t
                        }];
                    }
                  });
                })();
              }).catch(function () {
                return {
                  data: null,
                  location: t
                };
              })];
            });
          }).call(this);
        }
      }, {
        key: "fetchJson",
        value: function fetchJson(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, n._)(function () {
            var s, i;
            return (0, d._)(this, function (r) {
              var _this7 = this;
              return t && void 0 !== (s = this.getCachedData(e)) ? [2, s] : (i = "".concat(this.domains.api).concat(this.paths.api).concat(e), [2, window.fetch(i).then(function (e) {
                return (0, n._)(function () {
                  var t;
                  return (0, d._)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (!e.ok) return [3, 2];
                        return [4, e.json()];
                      case 1:
                        return t = s.sent(), this.setCachedData(i, t), [2, t];
                      case 2:
                        return [2, null];
                    }
                  });
                }).call(_this7);
              }).catch(function () {
                return null;
              })]);
            });
          }).call(this);
        }
      }, {
        key: "fetchCmpData",
        value: function fetchCmpData(e) {
          return (0, n._)(function (e) {
            var t, s, n, r;
            return (0, d._)(this, function (o) {
              switch (o.label) {
                case 0:
                  return t = e.params, s = e.query, n = this.getUrl("".concat(t.version, "/cmp/").concat(t.language, "/").concat(t.settingsType, "/").concat(t.settingsId, "/").concat(t.previousSettingsVersion, "/").concat(t.activeSettingsVersion), (0, i._)({}, s, this.getQueryTargetData())), [4, this.fetchJson(n)];
                case 1:
                  if (!(r = o.sent())) throw l.UCConsole.error("ApiService - fetchCmpData", "Failed to fetch CMP data from: ".concat(n)), Error("No CMP data");
                  return [2, r];
              }
            });
          }).apply(this, arguments);
        }
      }, {
        key: "fetchRuleSetCoreData",
        value: function fetchRuleSetCoreData(e, t) {
          return (0, n._)(function () {
            var s, n, r, o, a, c, l, u, g, E;
            return (0, d._)(this, function (d) {
              switch (d.label) {
                case 0:
                  return s = this.getUrl("ruleSetData", (0, i._)({
                    id: e
                  }, this.getQueryTargetData())), [4, this.fetchLocalizedJson(s)];
                case 1:
                  if (r = (n = d.sent()).data, o = n.location, !r) throw Error("No ruleset data");
                  return a = t || o || {
                    country: "DE",
                    region: "BY"
                  }, c = r.rules, l = r.defaultRule.settingsId, u = c.find(function (e) {
                    var t;
                    return !!a.region && (null == (t = e.locations) ? void 0 : t.includes("".concat(a.country).concat(a.region)));
                  }) || c.find(function (e) {
                    var t;
                    return null == (t = e.locations) ? void 0 : t.includes(a.country);
                  }), [4, this.fetchSettingsCoreData(u ? u.settingsId : l)];
                case 2:
                  return g = d.sent(), E = !u && !!r.defaultRule.noShow || void 0, [2, {
                    location: a,
                    ruleSetCoreData: (0, i._)({
                      ruleSetNoShow: E
                    }, g.settingsCoreData)
                  }];
              }
            });
          }).call(this);
        }
      }, {
        key: "fetchI18nData",
        value: function fetchI18nData(e) {
          return (0, n._)(function (e) {
            var t, s, n, r, o, a, c, l, u, g, E;
            return (0, d._)(this, function (d) {
              return t = e.settingsId, s = e.settingsType, n = e.settingsVersion, r = e.language, o = e.activeTcfVendorsListVersion, a = e.previousTcfVendorsListVersion, c = e.previousTcfPolicyVersion, l = e.theme, u = e.draft, g = (0, i._)({}, o && {
                activeTcfVendorsListVersion: o
              }, a && {
                previousTcfVendorsListVersion: a
              }, c && {
                previousTcfPolicyVersion: c
              }, l && {
                theme: l
              }, u && {
                draft: !0
              }), E = this.getUrl("i18n/".concat(r, "/").concat(s, "/").concat(t, "/").concat(n), (0, i._)({}, g, this.getQueryTargetData())), [2, this.fetchJson(E, !0)];
            });
          }).apply(this, arguments);
        }
      }, {
        key: "fetchSettingsCoreData",
        value: function fetchSettingsCoreData(e, t) {
          return (0, n._)(function () {
            var s, n, r, o;
            return (0, d._)(this, function (a) {
              switch (a.label) {
                case 0:
                  return s = this.getUrl("core/".concat(e), (0, i._)({}, (null == t ? void 0 : t.draft) && {
                    draft: !0
                  }, this.getQueryTargetData())), [4, this.fetchLocalizedJson(s)];
                case 1:
                  if (r = (n = a.sent()).location, !(o = n.data)) throw Error("No core data available for ".concat(s));
                  return o.gpp && "function" != typeof window.__gpp && (o.gpp = void 0), [2, {
                    location: r,
                    settingsCoreData: o
                  }];
              }
            });
          }).call(this);
        }
      }, {
        key: "fetchStoredInfoData",
        value: function fetchStoredInfoData(e) {
          return (0, n._)(function () {
            return (0, d._)(this, function (t) {
              return [2, this.fetchJson("storedInfo?uri=".concat(e), !0)];
            });
          }).call(this);
        }
      }, {
        key: "fetchInitDataBySettingsId",
        value: function fetchInitDataBySettingsId(e, t) {
          return (0, n._)(function () {
            var s, n, i;
            return (0, d._)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, this.fetchSettingsCoreData(e, (null == t ? void 0 : t.draft) && {
                    draft: !0
                  })];
                case 1:
                  return n = (s = r.sent()).location, i = s.settingsCoreData, [2, {
                    location: (null == t ? void 0 : t.location) || n || {
                      country: "DE",
                      region: "BY"
                    },
                    settingsCoreData: i,
                    language: null == t ? void 0 : t.language
                  }];
              }
            });
          }).call(this);
        }
      }, {
        key: "fetchInitDataByRuleSetId",
        value: function fetchInitDataByRuleSetId(e, t) {
          return (0, n._)(function () {
            var s;
            return (0, d._)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.fetchRuleSetCoreData(e, t)];
                case 1:
                  return [2, {
                    location: (s = n.sent()).location,
                    settingsCoreData: s.ruleSetCoreData
                  }];
              }
            });
          }).call(this);
        }
      }, {
        key: "saveConsentData",
        value: function saveConsentData(e) {
          return (0, n._)(function (e) {
            var t, s, n, r, c, l, u, g, E, p, h, S, I, _;
            return (0, d._)(this, function (d) {
              return t = e.services, s = e.consent, n = e.settingsType, r = e.vendors, c = e.ucString, l = e.analyticsEnabled, u = e.consentWebhookEnabled, g = e.crossDeviceEnabled, E = e.isGppActive, p = e.location, h = "TCF" === n && r && {
                consentString: s.tcString,
                consentMeta: JSON.stringify({
                  timestamp: Date.now(),
                  vendors: r
                })
              }, S = "TCF" === n ? s.acString : "", I = void 0, "US" === n && (I = {
                consentString: E ? p && "US" === p.country && "FL" === p.region ? s.usflString : s.usnatString : s.ccpaString,
                consentMeta: JSON.stringify({
                  timestamp: Date.now(),
                  vendors: r
                })
              }), _ = {
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify((0, o._)((0, i._)({
                  action: s.updatedBy,
                  analytics: l,
                  controllerId: s.controllerId,
                  appVersion: "sdk-1.0.0-alpha.0",
                  language: s.language,
                  settingsId: s.setting.id,
                  settingsVersion: s.setting.version,
                  ucString: c
                }, S && {
                  acString: S
                }, u && {
                  webhook: !0
                }, g && {
                  xdevice: !0
                }, h && (0, i._)({}, h), I && (0, i._)({}, I)), {
                  consents: Object.entries(t).map(function (e) {
                    var t,
                      s = (0, a._)(e, 2),
                      n = s[0],
                      i = s[1];
                    return {
                      consentStatus: (null == (t = i.consent) ? void 0 : t.given) === !0,
                      consentTemplateId: n,
                      consentTemplateVersion: i.version
                    };
                  })
                }))
              }, [2, window.fetch("".concat(this.domains.consent).concat(this.paths.consent), _).then(function (e) {
                return e.ok;
              })];
            });
          }).apply(this, arguments);
        }
      }, {
        key: "fetchUcStringForRestoration",
        value: function fetchUcStringForRestoration(e, t) {
          return (0, n._)(function () {
            var s;
            return (0, d._)(this, function (i) {
              return s = "".concat(this.domains.crossDevice).concat(this.paths.crossDevice, "?controllerId=").concat(e, "&settingsId=").concat(t), [2, window.fetch(s).then(function (s) {
                return (0, n._)(function () {
                  var n, i, r;
                  return (0, d._)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (s.ok) return [2, s.json()];
                        return [4, s.json().catch(function () {
                          return null;
                        })];
                      case 1:
                        return n = o.sent(), 404 === s.status ? l.UCConsole.warn("ApiService - fetchUcStringForRestoration", null != (i = null == n ? void 0 : n.message) ? i : "Could not restore consent for controllerId \"".concat(e, "\" with settingsId \"").concat(t, "\". The controller ID may not be connected to this settings ID.")) : l.UCConsole.error("ApiService - fetchUcStringForRestoration", null != (r = null == n ? void 0 : n.message) ? r : "The response returned an error: \"".concat(s.status, " - ").concat(s.statusText, "\".")), [2, null];
                    }
                  });
                })();
              })];
            });
          }).call(this);
        }
      }, {
        key: "sendTagLoggerData",
        value: function sendTagLoggerData(e) {
          var t = {
            operationName: "saveTagLoggerData",
            query: "mutation saveTagLoggerData($settingsId: String, $source: String, $targets: [String])\n          {\n            saveTagLoggerData(settingsId: $settingsId, source: $source, targets: $targets)\n          }",
            variables: {
              settingsId: e.settingsId,
              source: e.source,
              targets: e.entries
            }
          };
          this.domains.logger && fetch("".concat(this.domains.logger).concat(this.paths.logger), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
          });
        }
      }]);
    }();
  }), o("2J7XN", function (t, s) {
    e(t.exports, "SAVE_CONSENTS_DOMAINS", function () {
      return n;
    }), e(t.exports, "RETRIEVE_CONSENTS_DOMAINS", function () {
      return i;
    }), e(t.exports, "GRAPHQL_DOMAINS", function () {
      return r;
    }), e(t.exports, "API_DOMAINS", function () {
      return o;
    });
    var n = {
        PROD: {
          URI: "https://consent-api.service.consent.usercentrics.eu",
          EU_URI: "https://consent-api.service.consent.eu1.usercentrics.eu"
        },
        SANDBOX: {
          URI: "https://consent-api.service.consent.usercentrics-staging.eu",
          EU_URI: "https://consent-api.service.consent.eu1.usercentrics-staging.eu"
        }
      },
      i = {
        PROD: {
          URI: "https://consent-rt-ret.service.consent.usercentrics.eu",
          EU_URI: "https://consent-rt-ret.service.consent.eu1.usercentrics.eu"
        },
        SANDBOX: {
          URI: "https://consent-rt-ret.service.consent.usercentrics-staging.eu",
          EU_URI: "https://consent-rt-ret.service.consent.eu1.usercentrics-staging.eu"
        }
      },
      r = {
        PROD: {
          URI: "https://graphql.usercentrics.eu",
          EU_URI: "https://api.eu.usercentrics.eu"
        },
        SANDBOX: {
          URI: "https://api-v2-sandbox-consent-dot-usercentrics-playground.nw.r.appspot.com",
          EU_URI: "https://api-v2-sandbox-consent-dot-usercentrics-playground.nw.r.appspot.com"
        }
      },
      o = {
        PROD: {
          URI: "https://v1.api.service.cmp.usercentrics.eu",
          EU_URI: "https://v1.api.service.eu1.cmp.usercentrics.eu"
        },
        SANDBOX: {
          URI: "https://v1.api.service.cmp.usercentrics-sandbox.eu",
          EU_URI: "https://v1.api.service.eu1.cmp.usercentrics-sandbox.eu"
        }
      };
  }), o("h8zqI", function (t, s) {
    e(t.exports, "default", function () {
      return g;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("7qJ26"),
      d = r("dmwAz");
    r("g2kp0");
    var c = r("98SEK"),
      l = r("bzfG3"),
      u = r("e08dO");
    var g = /*#__PURE__*/function () {
      function g(e) {
        _classCallCheck(this, g);
        var t = e.apiService,
          s = e.crossDomainService,
          n = e.localStorageService;
        this.apiService = t, this.crossDomainService = s, this.localStorageService = n;
      }
      return _createClass(g, [{
        key: "saveConsentLocally",
        value: function saveConsentLocally(e, t) {
          return (0, n._)(function (e, t) {
            var s,
              n,
              r,
              l,
              u,
              g,
              E,
              p,
              h = arguments;
            return (0, d._)(this, function (d) {
              switch (d.label) {
                case 0:
                  return s = t.services, n = t.categories, r = h.length > 2 && void 0 !== h[2] && h[2], u = Object.entries(e).reduce(function (e, t) {
                    var s = (0, a._)(t, 2),
                      n = s[0],
                      r = s[1];
                    return "_" !== n.charAt(0) ? (0, o._)((0, i._)({}, e), _defineProperty({}, n, r)) : e;
                  }, {}), g = (0, c.compressToBase64)(JSON.stringify(u)), E = this.mapServicesData(s), r ? (p = this.mapCategoriesData(n), this.localStorageService.setConsentData({
                    services: E,
                    categories: p
                  })) : this.localStorageService.setConsentData({
                    services: E
                  }), this.localStorageService.setConsentString(g), [4, null == (l = this.crossDomainService) ? void 0 : l.setConsentString(g)];
                case 1:
                  return d.sent(), [2];
              }
            });
          }).apply(this, arguments);
        }
      }, {
        key: "saveConsentRemotely",
        value: function saveConsentRemotely(e) {
          return (0, n._)(function () {
            return (0, d._)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.apiService.saveConsentData(e)];
                case 1:
                  return t.sent(), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getConsentData",
        value: function getConsentData(e, t) {
          return (0, n._)(function () {
            var s, n, i, r, o;
            return (0, d._)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (a.trys.push([0, 3,, 4]), i = t) return [3, 2];
                  return [4, null == (s = this.crossDomainService) ? void 0 : s.getConsentString()];
                case 1:
                  i = a.sent(), a.label = 2;
                case 2:
                  if ((n = i || this.localStorageService.getConsentString()) && (r = (0, l.decompressFromBase64)(n)) && (o = JSON.parse(r)).setting.id === e) return "CCPA" === o.setting.type && (o.setting.type = "US", o.legislation = "CCPA"), [2, o];
                  return [3, 4];
                case 3:
                  return a.sent(), u.UCConsole.error("ConsentService - getConsentData", "no consent found"), [3, 4];
                case 4:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "clearConsentsLocally",
        value: function clearConsentsLocally() {
          return (0, n._)(function () {
            var e;
            return (0, d._)(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.localStorageService.clearUserSession(), this.clearAgeVerificationLocally(), [4, null == (e = this.crossDomainService) ? void 0 : e.clearStorage()];
                case 1:
                  return t.sent(), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "mapServicesData",
        value: function mapServicesData(e) {
          return Object.entries(e).reduce(function (e, t) {
            var s,
              n = (0, a._)(t, 2),
              i = n[0],
              r = n[1];
            return e[i] = {
              name: r.name,
              consent: (null == (s = r.consent) ? void 0 : s.given) === !0
            }, e;
          }, {});
        }
      }, {
        key: "mapCategoriesData",
        value: function mapCategoriesData(e) {
          return Object.entries(e).reduce(function (e, t) {
            var s = (0, a._)(t, 2),
              n = s[0],
              i = s[1];
            return e[n] = {
              name: i.name,
              consent: "ALL_ACCEPTED" === i.state || "SOME_ACCEPTED" === i.state
            }, e;
          }, {});
        }
      }, {
        key: "getAgeVerificationStatus",
        value: function getAgeVerificationStatus() {
          return this.localStorageService.getAgeVerificationStatus();
        }
      }, {
        key: "saveAgeVerificationLocally",
        value: function saveAgeVerificationLocally(e) {
          this.localStorageService.setAgeVerificationStatus(e);
        }
      }, {
        key: "clearAgeVerificationLocally",
        value: function clearAgeVerificationLocally() {
          this.localStorageService.clearAgeVerificationStatus();
        }
      }]);
    }();
  }), o("g2kp0", function (t, s) {
    e(t.exports, "compressToBase64", function () {
      return r("98SEK").compressToBase64;
    }), e(t.exports, "decompressFromBase64", function () {
      return r("bzfG3").decompressFromBase64;
    }), r("hBLsI"), r("98SEK"), r("bzfG3");
  }), o("hBLsI", function (t, s) {
    e(t.exports, "compressToBase64", function () {
      return r("98SEK").compressToBase64;
    }), e(t.exports, "decompressFromBase64", function () {
      return r("bzfG3").decompressFromBase64;
    }), r("98SEK"), r("bzfG3");
  }), o("98SEK", function (t, s) {
    e(t.exports, "compressToBase64", function () {
      return o;
    });
    var n = r("k8QE4"),
      i = r("em5zy");
    function o(e) {
      if (null == e) return "";
      var t = (0, n._compress)(e, 6, function (e) {
        return i.default.charAt(e);
      });
      switch (t.length % 4) {
        default:
        case 0:
          return t;
        case 1:
          return t + "===";
        case 2:
          return t + "==";
        case 3:
          return t + "=";
      }
    }
  }), o("k8QE4", function (t, s) {
    e(t.exports, "_compress", function () {
      return n;
    });
    function n(e, t, s) {
      if (null == e) return "";
      for (var n, i = {}, r = {}, o = "", a = "", d = "", c = 2, l = 3, u = 2, g = [], E = 0, p = 0, h = 0; h < e.length; h += 1) if (o = e.charAt(h), Object.prototype.hasOwnProperty.call(i, o) || (i[o] = l++, r[o] = !0), a = d + o, Object.prototype.hasOwnProperty.call(i, a)) d = a;else {
        if (Object.prototype.hasOwnProperty.call(r, d)) {
          if (256 > d.charCodeAt(0)) {
            for (var S = 0; S < u; S++) E <<= 1, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++;
            n = d.charCodeAt(0);
            for (var I = 0; I < 8; I++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
          } else {
            n = 1;
            for (var _ = 0; _ < u; _++) E = E << 1 | n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n = 0;
            n = d.charCodeAt(0);
            for (var C = 0; C < 16; C++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
          }
          0 == --c && (c = Math.pow(2, u), u++), delete r[d];
        } else {
          n = i[d];
          for (var T = 0; T < u; T++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
        }
        0 == --c && (c = Math.pow(2, u), u++), i[a] = l++, d = String(o);
      }
      if ("" !== d) {
        if (Object.prototype.hasOwnProperty.call(r, d)) {
          if (256 > d.charCodeAt(0)) {
            for (var N = 0; N < u; N++) E <<= 1, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++;
            n = d.charCodeAt(0);
            for (var O = 0; O < 8; O++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
          } else {
            n = 1;
            for (var v = 0; v < u; v++) E = E << 1 | n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n = 0;
            n = d.charCodeAt(0);
            for (var m = 0; m < 16; m++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
          }
          0 == --c && (c = Math.pow(2, u), u++), delete r[d];
        } else {
          n = i[d];
          for (var A = 0; A < u; A++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
        }
        0 == --c && (c = Math.pow(2, u), u++);
      }
      n = 2;
      for (var f = 0; f < u; f++) E = E << 1 | 1 & n, p == t - 1 ? (p = 0, g.push(s(E)), E = 0) : p++, n >>= 1;
      var U = !0;
      do E <<= 1, p == t - 1 ? (g.push(s(E)), U = !1) : p++; while (U);
      return g.join("");
    }
  }), o("em5zy", function (t, s) {
    e(t.exports, "default", function () {
      return n;
    });
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }), o("bzfG3", function (t, s) {
    e(t.exports, "decompressFromBase64", function () {
      return a;
    });
    var n = r("iAhBE"),
      i = r("9HUOI"),
      o = r("em5zy");
    function a(e) {
      return null == e ? "" : "" == e ? null : (0, n._decompress)(e.length, 32, function (t) {
        return (0, i.getBaseValue)(o.default, e.charAt(t));
      });
    }
  }), o("iAhBE", function (t, s) {
    e(t.exports, "_decompress", function () {
      return n;
    });
    function n(e, t, s) {
      for (var n, i = [], r = [], o = {
          val: s(0),
          position: t,
          index: 1
        }, a = 4, d = 4, c = 3, l = "", u = 0, g = 4, E = 1, p = 0; p < 3; p += 1) i[p] = String(p);
      for (; E != g;) {
        var h = o.val & o.position;
        o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (h > 0) * E, E <<= 1;
      }
      switch (u) {
        case 0:
          for (u = 0, g = 256, E = 1; E != g;) {
            var S = o.val & o.position;
            o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (S > 0) * E, E <<= 1;
          }
          n = String.fromCharCode(u);
          break;
        case 1:
          for (u = 0, g = 65536, E = 1; E != g;) {
            var I = o.val & o.position;
            o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (I > 0) * E, E <<= 1;
          }
          n = String.fromCharCode(u);
          break;
        case 2:
          return "";
      }
      if (void 0 === n) throw Error("No character found");
      i[3] = String(n);
      var _ = String(n);
      for (r.push(String(n));;) {
        if (o.index > e) return "";
        for (u = 0, g = Math.pow(2, c), E = 1; E != g;) {
          var C = o.val & o.position;
          o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (C > 0) * E, E <<= 1;
        }
        switch (n = u) {
          case 0:
            for (u = 0, g = 256, E = 1; E != g;) {
              var T = o.val & o.position;
              o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (T > 0) * E, E <<= 1;
            }
            i[d++] = String.fromCharCode(u), n = d - 1, a--;
            break;
          case 1:
            for (u = 0, g = 65536, E = 1; E != g;) {
              var N = o.val & o.position;
              o.position >>= 1, 0 == o.position && (o.position = t, o.val = s(o.index++)), u |= (N > 0) * E, E <<= 1;
            }
            i[d++] = String.fromCharCode(u), n = d - 1, a--;
            break;
          case 2:
            return r.join("");
        }
        if (0 == a && (a = Math.pow(2, c), c++), i[n]) l = String(i[n]);else {
          if (n !== d) return null;
          l = _ + _.charAt(0);
        }
        r.push(l), i[d++] = _ + l.charAt(0), a--, _ = l, 0 == a && (a = Math.pow(2, c), c++);
      }
    }
  }), o("9HUOI", function (t, s) {
    e(t.exports, "getBaseValue", function () {
      return i;
    });
    var n = {};
    function i(e, t) {
      if (!n[e]) {
        n[e] = {};
        for (var s = 0; s < e.length; s++) n[e][e.charAt(s)] = s;
      }
      return n[e][t];
    }
  }), o("3WziU", function (t, s) {
    e(t.exports, "default", function () {
      return a;
    });
    var n = r("h2FSh"),
      i = r("dmwAz"),
      o = "uc-cross-domain-consent-sharing-bridge";
    var a = /*#__PURE__*/function () {
      function a(e) {
        _classCallCheck(this, a);
        var t,
          s,
          n = (null == (s = window.ucCmpConfig) || null == (t = s.proxy) ? void 0 : t.cdn) || "https://web.cmp.usercentrics.eu";
        this.src = "".concat(n, "/cdcs/v/1.0.0/index.html"), this.settingsId = e;
      }
      return _createClass(a, [{
        key: "setConsentString",
        value: function setConsentString(e) {
          return (0, n._)(function () {
            return (0, i._)(this, function (t) {
              return [2, this.request("setConsentString", e).catch(function () {
                return !1;
              })];
            });
          }).call(this);
        }
      }, {
        key: "getConsentString",
        value: function getConsentString() {
          return (0, n._)(function () {
            return (0, i._)(this, function (e) {
              return [2, this.request("getConsentString").catch(function () {})];
            });
          }).call(this);
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          return (0, n._)(function () {
            return (0, i._)(this, function (e) {
              return [2, this.request("clearStorage").catch(function () {
                return !1;
              })];
            });
          }).call(this);
        }
      }, {
        key: "request",
        value: function request(e, t) {
          return (0, n._)(function () {
            var s;
            return (0, i._)(this, function (n) {
              var _this8 = this;
              if (!(s = document.getElementById(o)) || !s.id || !s.contentWindow) throw Error("iFrame cdcs listener not found.");
              return [2, new Promise(function (n, i) {
                var r = JSON.stringify({
                    settingsId: _this8.settingsId,
                    method: e,
                    payload: t
                  }),
                  o = new MessageChannel();
                if (o.port1.onmessage = function (e) {
                  var t = JSON.parse(e.data),
                    s = t.success,
                    r = t.data;
                  s ? n(r) : i(e);
                }, s && s.contentWindow) try {
                  s.contentWindow.postMessage(r, _this8.src, [o.port2]);
                } catch (e) {
                  i(e);
                }
              })];
            });
          }).call(this);
        }
      }, {
        key: "init",
        value: function init() {
          return (0, n._)(function () {
            return (0, i._)(this, function (e) {
              var _this9 = this;
              return [2, new Promise(function (e) {
                var t = document.createElement("iframe");
                t.style.display = "none", t.id = o, t.src = _this9.src, t.onload = function () {
                  var t = setTimeout(function () {
                    e(!1);
                  }, 1e3);
                  _this9.request("ping").then(function () {
                    clearTimeout(t), e(!0);
                  }).catch(function () {
                    clearTimeout(t), e(!1);
                  });
                }, t.onerror = function () {
                  e(!1);
                };
                try {
                  document.body ? document.body.appendChild(t) : document.addEventListener("DOMContentLoaded", function () {
                    document.body.appendChild(t);
                  });
                } catch (t) {
                  e(!1);
                }
              })];
            });
          }).call(this);
        }
      }]);
    }();
  }), o("fSIyh", function (t, s) {
    e(t.exports, "default", function () {
      return c;
    });
    var n = r("kTJf3"),
      i = r("7nwmn"),
      o = r("7qJ26"),
      a = r("b2ZVT");
    var d = /*#__PURE__*/function () {
      function d() {
        _classCallCheck(this, d);
        this.length = 0, this.data = {};
      }
      return _createClass(d, [{
        key: "updateLength",
        value: function updateLength() {
          this.length = Object.keys(this.data).length;
        }
      }, {
        key: "key",
        value: function key(e) {
          var t = Object.keys(this.data)[e];
          return void 0 === t ? null : t;
        }
      }, {
        key: "getItem",
        value: function getItem(e) {
          return void 0 !== this.data[e] ? this.data[e] : null;
        }
      }, {
        key: "setItem",
        value: function setItem(e, t) {
          this.data[e] = String(t), this.updateLength();
        }
      }, {
        key: "removeItem",
        value: function removeItem(e) {
          delete this.data[e], this.updateLength();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.data = {}, this.updateLength();
        }
      }]);
    }();
    var c = /*#__PURE__*/function () {
      function c() {
        _classCallCheck(this, c);
        this.storageKey = "ucString", this.tagLoggerKey = "ucTaglogger", this.dataKey = "ucData", this.cmpPrivacyNoticeDismissed = "cmpPrivacyNoticeDismissed", this.ageVerificationKey = "ucAgeVerificationCompleted", this.storage = window.localStorage || new d(), this.sessionStorage = window.sessionStorage || new d();
      }
      return _createClass(c, [{
        key: "getPrivacyNoticeStatus",
        value: function getPrivacyNoticeStatus() {
          return this.storage.getItem(this.cmpPrivacyNoticeDismissed) || void 0;
        }
      }, {
        key: "setPrivacyNoticeStatus",
        value: function setPrivacyNoticeStatus(e) {
          this.storage.setItem(this.cmpPrivacyNoticeDismissed, e);
        }
      }, {
        key: "setConsentString",
        value: function setConsentString(e) {
          var t = this.storageKey;
          this.storage.setItem(t, e);
        }
      }, {
        key: "getConsentString",
        value: function getConsentString() {
          return this.storage.getItem(this.storageKey) || void 0;
        }
      }, {
        key: "setUcData",
        value: function setUcData(e) {
          this.storage.setItem(this.dataKey, JSON.stringify(e));
        }
      }, {
        key: "getUcData",
        value: function getUcData() {
          var e = this.storage.getItem(this.dataKey);
          return e ? JSON.parse(e) : void 0;
        }
      }, {
        key: "setGcmData",
        value: function setGcmData(e) {
          var t = this.getUcData();
          this.setUcData((0, i._)((0, n._)({}, t), {
            gcm: e
          }));
        }
      }, {
        key: "setConsentData",
        value: function setConsentData(e) {
          var t = this.getUcData();
          this.setUcData((0, i._)((0, n._)({}, t), {
            consent: e
          }));
        }
      }, {
        key: "setUiData",
        value: function setUiData(e) {
          var t = this.getUcData();
          this.setUcData((0, i._)((0, n._)({}, t), {
            ui: (0, n._)({}, t.ui, e)
          }));
        }
      }, {
        key: "getGcmData",
        value: function getGcmData() {
          var e = this.getUcData();
          return e ? e.gcm : void 0;
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          this.storage.clear();
        }
      }, {
        key: "clearUserSession",
        value: function clearUserSession() {
          for (var e in a.V1_LOCAL_STORAGE_KEY) this.storage.removeItem(a.V1_LOCAL_STORAGE_KEY[e]);
          for (var t in a.V2_LOCAL_STORAGE_KEY) this.storage.removeItem(a.V2_LOCAL_STORAGE_KEY[t]);
          this.storage.removeItem(this.storageKey), this.storage.removeItem(this.dataKey), this.storage.removeItem("ucSdkCombinedCmpData"), this.storage.removeItem("ucAppState");
        }
      }, {
        key: "getV1Settings",
        value: function getV1Settings(e) {
          var _this0 = this;
          try {
            var t = this.storage.getItem(a.V1_LOCAL_STORAGE_KEY.SETTINGS);
            if (Object.keys(a.V1_LOCAL_STORAGE_KEY).forEach(function (e) {
              var t = a.V1_LOCAL_STORAGE_KEY[e];
              _this0.storage.removeItem(t);
            }), t) return JSON.parse(t)[e];
          } catch (e) {
            return;
          }
        }
      }, {
        key: "setV2LocalStorageRestoredData",
        value: function setV2LocalStorageRestoredData(e) {
          try {
            this.storage.setItem(a.V2_LOCAL_STORAGE_KEY.SETTINGS, JSON.stringify(e.settings)), e.tcf && this.storage.setItem(a.V2_LOCAL_STORAGE_KEY.TCF, JSON.stringify(e.tcf)), e.ccpa && this.storage.setItem(a.V2_LOCAL_STORAGE_KEY.CCPA, JSON.stringify(e.ccpa)), e.gcm && this.storage.setItem(a.V2_LOCAL_STORAGE_KEY.GCM_DATA, JSON.stringify(e.gcm)), this.storage.setItem(a.V2_LOCAL_STORAGE_KEY.USER_INTERACTION, (!!e.userInteraction).toString());
          } catch (e) {
            return;
          }
        }
      }, {
        key: "getV2Data",
        value: function getV2Data() {
          var _this1 = this;
          try {
            var e = this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.SETTINGS);
            if (e) {
              var t = JSON.parse(e),
                s = JSON.parse(this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.TCF) || "null"),
                i = JSON.parse(this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.CCPA) || "null"),
                r = JSON.parse(this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.GCM_DATA) || "null"),
                o = !!this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.USER_INTERACTION),
                d = this.storage.getItem(a.V2_LOCAL_STORAGE_KEY.AB_TEST_VARIANT);
              return Object.keys(a.V2_LOCAL_STORAGE_KEY).forEach(function (e) {
                var t = a.V2_LOCAL_STORAGE_KEY[e];
                _this1.storage.removeItem(t);
              }), (0, n._)({
                settings: t
              }, s && {
                tcf: s
              }, i && {
                ccpa: i
              }, r && {
                gcm: r
              }, d && {
                abVariant: d
              }, o && {
                userInteraction: o
              });
            }
          } catch (e) {
            return;
          }
        }
      }, {
        key: "setV2Data",
        value: function setV2Data(e) {
          var _this10 = this;
          Object.entries(e).forEach(function (e) {
            var t = (0, o._)(e, 2),
              s = t[0],
              n = t[1];
            _this10.storage.setItem(s, "object" == _typeof(n) ? JSON.stringify(n) : n.toString());
          });
        }
      }, {
        key: "saveTagloggerData",
        value: function saveTagloggerData(e) {
          this.sessionStorage.setItem(this.tagLoggerKey, JSON.stringify(e));
        }
      }, {
        key: "getTagloggerData",
        value: function getTagloggerData() {
          var e = this.sessionStorage.getItem(this.tagLoggerKey);
          return e ? JSON.parse(e) : void 0;
        }
      }, {
        key: "removeTagLoggerData",
        value: function removeTagLoggerData() {
          this.sessionStorage.removeItem(this.tagLoggerKey);
        }
      }, {
        key: "getAgeVerificationStatus",
        value: function getAgeVerificationStatus() {
          return "true" === this.storage.getItem(this.ageVerificationKey);
        }
      }, {
        key: "setAgeVerificationStatus",
        value: function setAgeVerificationStatus(e) {
          e ? this.storage.setItem(this.ageVerificationKey, "true") : this.clearAgeVerificationStatus();
        }
      }, {
        key: "clearAgeVerificationStatus",
        value: function clearAgeVerificationStatus() {
          this.storage.removeItem(this.ageVerificationKey);
        }
      }]);
    }();
  }), o("b2ZVT", function (t, s) {
    e(t.exports, "V1_LOCAL_STORAGE_KEY", function () {
      return c;
    }), e(t.exports, "V2_LOCAL_STORAGE_KEY", function () {
      return l;
    }), e(t.exports, "V1_CONSENT_ACTION", function () {
      return u;
    }), e(t.exports, "V1_CONSENT_TYPE", function () {
      return g;
    }), e(t.exports, "V2_CONSENT_ACTION", function () {
      return E;
    }), e(t.exports, "V2_CONSENT_TYPE", function () {
      return p;
    });
    var n,
      i,
      r,
      o,
      a,
      d,
      c = ((n = {}).SETTINGS = "ucSettings", n.CONSENTS = "ucConsents", n.USERCENTRICS = "usercentrics", n),
      l = ((i = {}).CCPA = "uc_usprivacy", i.CCPA_DATA = "uc_ccpa", i.CONSENTS_BUFFER = "uc_consents_buffer", i.CONSENTS_V2_BUFFER = "uc_consents_v2_buffer", i.GCM_DATA = "uc_gcm", i.SERVICES = "uc_services", i.SETTINGS = "uc_settings", i.TCF = "uc_tcf", i.USER_INTERACTION = "uc_user_interaction", i.AB_TEST_VARIANT = "uc_ab_variant", i.UI_VERSION = "uc_ui_version", i),
      u = ((r = {}).BY_SETTINGS_UPDATE = "bySettingsUpdate", r.ON_INITIAL_PAGE_LOAD = "onInitialPageLoad", r.ON_DENY_ALL_BTN_CLICK = "onDenyAllBtnClick", r.ON_ACCEPT_ALL_BTN_CLICK = "onAcceptAllBtnClick", r.ON_DENY_ALL_ANCHOR_CLICK = "onDenyAllAnchorClick", r.ON_TOGGLE_SELECT_ALL = "onToggleSelectAll", r.ON_TOGGLE_CATEGORY = "onToggleCategory", r.ON_TOGGLE_CONSENT = "onToggleConsent", r.ON_SPECIAL_FUNCTION_ACCEPT_ALL_CONSENT_TRIGGER = "onSpecialFunctionAcceptAllConsentTrigger", r.ON_COUNTDOWN_FINISHED = "onCountdownFinished", r.ON_WINDOW_FUNCTION_UPDATE_CONSENT = "onWindowFunctionUpdateConsent", r.ON_NON_EU_REGION = "onNonEURegion", r.ON_SAVE_BTN_CLICK = "onSaveBtnClick", r),
      g = ((o = {}).EXPLICIT = "explicit", o.IMPLICIT = "implicit", o.UPDATE = "update", o),
      E = ((a = {}).ACCEPT_ALL_SERVICES = "onAcceptAllServices", a.DENY_ALL_SERVICES = "onDenyAllServices", a.ESSENTIAL_CHANGE = "onEssentialChange", a.INITIAL_PAGE_LOAD = "onInitialPageLoad", a.NON_EU_REGION = "onNonEURegion", a.SESSION_RESTORED = "onSessionRestored", a.TCF_STRING_CHANGE = "onTcfStringChange", a.UPDATE_SERVICES = "onUpdateServices", a.MOBILE_SESSION_RESTORED = "onMobileSessionRestore", a),
      p = ((d = {}).EXPLICIT = "explicit", d.IMPLICIT = "implicit", d);
  }), o("kA7xy", function (t, s) {
    e(t.exports, "default", function () {
      return l;
    });
    var n = r("h2FSh"),
      i = r("dmwAz"),
      o = r("e08dO"),
      a = r("4tLOk"),
      d = r("96QDM"),
      c = "data-usercentrics";
    var l = /*#__PURE__*/function () {
      function l() {
        _classCallCheck(this, l);
      }
      return _createClass(l, [{
        key: "unblockScripts",
        value: function unblockScripts(e, t) {
          return (0, n._)(function () {
            var s, n;
            return (0, i._)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, (0, a.domContentLoaded)()];
                case 1:
                  return i.sent(), s = document.querySelectorAll("script[".concat(c, "][type=\"text/plain\"]")), n = [], s.forEach(function (s) {
                    var i = s.getAttribute(c);
                    if (i) {
                      var r = i.split("~|UC|~");
                      if (1 === r.length && e[i]) {
                        n.push(i);
                        var a = document.createElement("script");
                        Array.from(s.attributes).forEach(function (e) {
                          var t = e.name,
                            s = e.value;
                          "nonce" !== t.toLowerCase() && a.setAttribute(t, s);
                        }), s.src || a.appendChild(document.createTextNode(s.text)), a.removeAttribute(c), a.type = "application/javascript", s.nonce && (a.nonce = s.nonce), (0, o.applyNonce)(a), s.parentNode && s.parentNode.replaceChild(a, s);
                      }
                      var d = r.filter(function (e) {
                        return "" !== e;
                      });
                      if (r.length > 1 && d.every(function (e) {
                        return t[e];
                      })) {
                        d.forEach(function (e) {
                          n.push(t[e].name);
                        });
                        var l = document.createElement("script");
                        Array.from(s.attributes).forEach(function (e) {
                          var t = e.name,
                            s = e.value;
                          "nonce" !== t.toLowerCase() && l.setAttribute(t, s);
                        }), s.src || l.appendChild(document.createTextNode(s.text)), l.removeAttribute(c), l.type = "application/javascript", s.nonce && (l.nonce = s.nonce), (0, o.applyNonce)(l), s.parentNode && s.parentNode.replaceChild(l, s);
                      }
                    }
                  }), d.webSdkEvents.emit("SCRIPTS_UNBLOCKED", n), [2, n];
              }
            });
          })();
        }
      }]);
    }();
  }), o("4tLOk", function (t, s) {
    e(t.exports, "domContentLoaded", function () {
      return o;
    });
    var n = r("h2FSh"),
      i = r("dmwAz");
    function o() {
      return (0, n._)(function () {
        return (0, i._)(this, function (e) {
          return document.body ? [2] : [2, new Promise(function (e) {
            document.addEventListener("DOMContentLoaded", function () {
              e();
            });
          })];
        });
      })();
    }
  }), o("dIChF", function (t, s) {
    e(t.exports, "WINDOW_MOBILE_SDK_NAMESPACE", function () {
      return n;
    });
    var n = "ucMobileSdk";
  }), o("lAwM5", function (t, s) {
    e(t.exports, "fixUserSessionDataTimestampConsentAction", function () {
      return c;
    }), e(t.exports, "convertUserSessionDataToV2LocalStorageEntry", function () {
      return l;
    });
    var n = r("kTJf3"),
      i = r("7nwmn"),
      o = r("b2ZVT"),
      a = r("e08dO"),
      d = function d(e) {
        (null == e ? void 0 : e.consents) && (null == e ? void 0 : e.consents.length) && !e.consents.every(function (e) {
          return e.action;
        }) && (e.consents = e.consents.map(function (e) {
          return (0, i._)((0, n._)({}, e), {
            action: "onMobileSessionRestore"
          });
        }));
      },
      c = function c(e) {
        var t = e.userSessionData,
          s = e.userSessionDataString,
          n = void 0;
        try {
          s && (n = JSON.parse(s, function (e, t) {
            if ("timestamp" === e) {
              var s = t.toString();
              return -1 !== s.indexOf(".") ? 1e3 * Number(s) : Number(s);
            }
            return t;
          }), d(n)), t && ((n = t).timestamp && -1 !== n.timestamp.toString().indexOf(".") && (n.timestamp = 1e3 * Number(n.timestamp)), d(n));
        } catch (e) {
          a.UCConsole.warn("CmpController - restoreUserSessionData", "Could not restore user session data", JSON.stringify(n));
        }
        return n;
      },
      l = function l(e, t, s) {
        var r = e.consents.reduce(function (e, t) {
            var n, i, r, o;
            return (s ? null != (r = e[n = t.consentTemplateId || ""]) ? r : e[n] = [] : null != (o = e[i = t.templateId]) ? o : e[i] = []).push(t), e;
          }, {}),
          d = !0,
          c = !1,
          l = void 0;
        try {
          for (var u, g = Object.values(r)[Symbol.iterator](); !(d = (u = g.next()).done); d = !0) u.value.sort(function (e, t) {
            return Number(e.timestamp) - Number(t.timestamp);
          });
        } catch (e) {
          c = !0, l = e;
        } finally {
          try {
            d || null == g.return || g.return();
          } finally {
            if (c) throw l;
          }
        }
        return (0, i._)((0, n._)({
          settings: {
            controllerId: e.controllerId,
            id: t.id,
            language: e.language || "en",
            services: Object.keys(r).map(function (n) {
              return {
                id: n,
                status: s ? r[n][r[n].length - 1].consentStatus || !1 : r[n][r[n].length - 1].status,
                processorId: "".concat((0, a.sha256)(n)),
                history: r[n].map(function (n) {
                  return {
                    action: o.V2_CONSENT_ACTION.MOBILE_SESSION_RESTORED,
                    language: e.language || "en",
                    status: s ? n.consentStatus || !1 : n.status,
                    timestamp: s ? parseInt("".concat(e.timestamp)) : parseInt("".concat(n.timestamp)),
                    type: o.V2_CONSENT_TYPE.IMPLICIT,
                    versions: {
                      application: "",
                      service: "",
                      settings: n.settingsVersion || t.version || ""
                    }
                  };
                })
              };
            }),
            version: e.consents[0].settingsVersion || t.version || ""
          }
        }, e.tcf && {
          tcf: e.tcf
        }, e.ccpa && {
          ccpa: e.ccpa
        }, e.consentString && "" !== e.consentString && {
          tcf: {
            tcString: e.consentString,
            timestamp: parseInt("".concat(e.timestamp)),
            vendors: []
          }
        }), {
          userInteraction: !0
        });
      };
  }), o("5hUSA", function (t, s) {
    e(t.exports, "default", function () {
      return p;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("dmwAz"),
      d = r("bY6u9"),
      c = r("jz1X7"),
      l = r("8QPZA"),
      u = r("62uiv");
    r("g2kp0");
    var g = r("98SEK"),
      E = r("aCyBP");
    var p = /*#__PURE__*/function () {
      function p(e, t) {
        _classCallCheck(this, p);
        this.localStorageService = e, this.sandbox = void 0 !== t && t, window.ucCmpConfig || (window.ucCmpConfig = {}), window.UC_UI_SUPPRESS_CMP_DISPLAY && (window.ucCmpConfig.ui || (window.ucCmpConfig.ui = {}), window.ucCmpConfig.ui.suppress = !0);
      }
      return _createClass(p, [{
        key: "transformV1LocalStorageToV2",
        value: function transformV1LocalStorageToV2(e) {
          var t = this.localStorageService.getV1Settings(e);
          if (t) {
            var s = (0, E.getV2LocalStorageData)(t);
            s && this.localStorageService.setV2Data(s);
          }
        }
      }, {
        key: "transformV2LocalStorageToV3",
        value: function transformV2LocalStorageToV3() {
          return (0, n._)(function () {
            var e, t, s, n, E, p, h, S, I, _, C, T, N, O, v;
            return (0, a._)(this, function (a) {
              switch (a.label) {
                case 0:
                  e = this.localStorageService.getV2Data(), a.label = 1;
                case 1:
                  if (a.trys.push([1, 7,, 8]), !e) return [3, 6];
                  return [4, fetch("https://api.usercentrics".concat(this.sandbox ? "-sandbox" : "", ".eu/settings/").concat(e.settings.id, "/").concat(e.settings.version, "/en.json")).then(function (e) {
                    return e.json();
                  }).then(function (e) {
                    var t = e.consentTemplates,
                      s = e.categories,
                      n = {},
                      i = s.reduce(function (e, t) {
                        return "object" == _typeof(t) && t.isEssential && (e[t.categorySlug.toLowerCase()] = !0), e;
                      }, {});
                    return t.forEach(function (e) {
                      var t = e.categorySlug,
                        r = e.templateId;
                      "object" == _typeof(s) && "string" == typeof t && i[t.toLowerCase()] && (n[r] = !0);
                    }), n;
                  })];
                case 2:
                  if (t = a.sent(), s = !0, n = "en", E = 0, p = 0, S = [], I = [], _ = [], C = "ALL_DENIED", e.settings.services.forEach(function (e) {
                    t[e.id] || (!0 === e.status ? I.push(e.id) : _.push(e.id)), e.history.forEach(function (e) {
                      (!E || e.timestamp < E) && (E = e.timestamp), (!p || e.timestamp > p) && (p = e.timestamp, h = e.action, s = "implicit" === e.type), e.language && e.language !== n && (n = e.language);
                    });
                  }), 0 === _.length ? C = "ALL_ACCEPTED" : 0 === I.length ? C = "ALL_DENIED" : _.length > I.length ? (C = "SOME_ACCEPTED", S = I) : (C = "SOME_DENIED", S = _), T = {
                    language: n,
                    setting: (0, o._)((0, i._)({
                      version: e.settings.version,
                      type: "GDPR"
                    }, e.abVariant && {
                      abVariant: e.abVariant
                    }), {
                      id: e.settings.id
                    }),
                    controllerId: e.settings.controllerId,
                    type: s ? "IMPLICIT" : "EXPLICIT",
                    createdAt: E,
                    status: C,
                    required: !0 !== e.userInteraction,
                    updatedAt: p,
                    version: d.CONSENT_DATA_VERSION,
                    updatedBy: h || "onInitialPageLoad",
                    hash: "",
                    serviceIds: S
                  }, !e.tcf) return [3, 4];
                  return [4, Promise.resolve(r("cHs27"))];
                case 3:
                  return O = a.sent().TCString.decode(e.tcf.tcString), N = new (0, u.TcfConsentModel)((0, o._)((0, i._)({}, T), {
                    setting: (0, o._)((0, i._)({}, T.setting), {
                      type: "TCF"
                    }),
                    tcString: e.tcf.tcString,
                    vendorsList: {
                      version: Number(O.vendorListVersion),
                      policyVersion: Number(O.policyVersion)
                    }
                  })), [3, 5];
                case 4:
                  N = e.ccpa ? new (0, c.CcpaConsentModel)((0, o._)((0, i._)({}, T), {
                    setting: (0, o._)((0, i._)({}, T.setting), {
                      type: "US"
                    }),
                    legislation: "CCPA",
                    ccpaString: e.ccpa.ccpaString
                  })) : new (0, l.GdprConsentModel)(T), a.label = 5;
                case 5:
                  N && (v = (0, g.compressToBase64)(JSON.stringify(N)), this.localStorageService.setConsentString(v), this.migratedConsentString = v), a.label = 6;
                case 6:
                  return [3, 8];
                case 7:
                  return a.sent(), console.warn("Could not transform v2 localStorage entries"), [3, 8];
                case 8:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "transformLocalStorage",
        value: function transformLocalStorage(e) {
          return (0, n._)(function () {
            return (0, a._)(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.transformV1LocalStorageToV2(e)];
                case 1:
                  return t.sent(), [4, this.transformV2LocalStorageToV3()];
                case 2:
                  return t.sent(), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getMigratedConsentString",
        value: function getMigratedConsentString() {
          return this.migratedConsentString;
        }
      }]);
    }();
  }), o("jz1X7", function (t, s) {
    e(t.exports, "CcpaConsentModel", function () {
      return o;
    });
    var n = r("etqJL"),
      i = r("8QPZA");
    var o = /*#__PURE__*/function (_i$GdprConsentModel) {
      function o(e, t) {
        var _this11;
        _classCallCheck(this, o);
        _this11 = _callSuper(this, o, [e, {
          uiVersion: null == t ? void 0 : t.uiVersion
        }]), _this11.ccpaString = e.ccpaString, _this11.gpcSignal = e.gpcSignal, _this11.legislation = e.legislation, _this11._hasBeenNotified = (null == t ? void 0 : t.initialView) === "first" || (null == t ? void 0 : t.initialView) === "second" ? "Y" : _this11.ccpaString.charAt(1), _this11._hasOptedOut = _this11.ccpaString.charAt(2), _this11._iabAgreementExists = _this11.ccpaString.charAt(3);
        return _this11;
      }
      _inherits(o, _i$GdprConsentModel);
      return _createClass(o, [{
        key: "getCcpaString",
        value: function getCcpaString() {
          return this.ccpaString;
        }
      }, {
        key: "emitCcpaString",
        value: function emitCcpaString() {
          this.ccpaString = "".concat(n.CCPA_VERSION).concat(this._hasBeenNotified).concat(this._hasOptedOut).concat(this._iabAgreementExists);
        }
      }, {
        key: "setHasOptedOut",
        value: function setHasOptedOut(e) {
          this._hasOptedOut = e ? "Y" : "N", this.setUpdatedBy(e ? "onDenyAllServices" : "onAcceptAllServices");
        }
      }, {
        key: "getHasOptedOut",
        value: function getHasOptedOut() {
          return "Y" === this._hasOptedOut;
        }
      }, {
        key: "setHasBeenNotified",
        value: function setHasBeenNotified() {
          this._hasBeenNotified = "Y";
        }
      }]);
    }(i.GdprConsentModel);
  }), o("etqJL", function (t, s) {
    e(t.exports, "CCPA_VERSION", function () {
      return n;
    });
    var n = 1;
  }), o("8QPZA", function (t, s) {
    e(t.exports, "GdprConsentModel", function () {
      return i;
    });
    var n = r("df9nB");
    var i = /*#__PURE__*/function (_n$ConsentModel) {
      function i(e, t) {
        var _this12;
        _classCallCheck(this, i);
        _this12 = _callSuper(this, i, [e, t]), _this12.serviceIds = e.serviceIds, _this12.gpcSignal = e.gpcSignal, _this12.interaction = e.interaction;
        return _this12;
      }
      _inherits(i, _n$ConsentModel);
      return _createClass(i, [{
        key: "setServiceIds",
        value: function setServiceIds(e) {
          this.serviceIds = e;
        }
      }]);
    }(n.ConsentModel);
  }), o("df9nB", function (t, s) {
    e(t.exports, "ConsentModel", function () {
      return o;
    });
    var n = r("e08dO"),
      i = r("D1rLk");
    var o = /*#__PURE__*/function () {
      function o(e, t) {
        _classCallCheck(this, o);
        var s = e.language,
          r = e.setting,
          _o = e.updatedAt,
          a = e.updatedBy,
          d = e.createdAt,
          c = e.controllerId,
          l = e.version,
          u = e.uiVersion,
          g = e.required,
          E = e.status,
          p = e.type,
          h = e.hash,
          S = e.isBot,
          I = e._domains,
          _ = Date.now();
        this.version = l, this.uiVersion = u || (null == t ? void 0 : t.uiVersion), this._latestUiVersion = null == t ? void 0 : t.uiVersion, this.controllerId = c || (0, n.sha256)((0, i.default)()).toString(), this.language = s, this.setting = r, this.updatedAt = _o || _, this.updatedBy = a || "onInitialPageLoad", this.createdAt = d || _, this.required = g, this.status = E, this.type = p, this.hash = h, this.isBot = S, this._domains = I;
      }
      return _createClass(o, [{
        key: "setSetting",
        value: function setSetting(e) {
          this.setting = e;
        }
      }, {
        key: "getDomains",
        value: function getDomains() {
          return this._domains || [];
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(e) {
          this.language = e;
        }
      }, {
        key: "setUiVersion",
        value: function setUiVersion(e) {
          this.uiVersion = e || this._latestUiVersion;
        }
      }, {
        key: "setUpdatedAt",
        value: function setUpdatedAt(e) {
          this.updatedAt = e;
        }
      }, {
        key: "setUpdatedBy",
        value: function setUpdatedBy(e) {
          this.updatedBy = e;
        }
      }, {
        key: "setHash",
        value: function setHash(e) {
          this.hash = e;
        }
      }, {
        key: "setRequired",
        value: function setRequired(e) {
          this.required = e;
        }
      }, {
        key: "setStatus",
        value: function setStatus(e) {
          this.status = e;
        }
      }, {
        key: "setType",
        value: function setType(e) {
          this.type = e;
        }
      }]);
    }();
  }), o("D1rLk", function (t, s) {
    e(t.exports, "default", function () {
      return a;
    });
    var n = r("8zgRk"),
      i = r("2c391"),
      o = r("dHy2b"),
      a = function a(e, t, s) {
        if (n.default.randomUUID && !t && !e) return n.default.randomUUID();
        var r = (e = e || {}).random || (e.rng || (0, i.default))();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          s = s || 0;
          for (var a = 0; a < 16; ++a) t[s + a] = r[a];
          return t;
        }
        return (0, o.unsafeStringify)(r);
      };
  }), o("8zgRk", function (t, s) {
    e(t.exports, "default", function () {
      return n;
    });
    var n = {
      randomUUID: "u" > (typeof crypto === "undefined" ? "undefined" : _typeof(crypto)) && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
  }), o("2c391", function (t, s) {
    e(t.exports, "default", function () {
      return r;
    });
    var n,
      i = new Uint8Array(16);
    function r() {
      if (!n && !(n = "u" > (typeof crypto === "undefined" ? "undefined" : _typeof(crypto)) && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return n(i);
    }
  }), o("dHy2b", function (t, s) {
    e(t.exports, "unsafeStringify", function () {
      return o;
    }), r("dW1uR");
    for (var n = [], i = 0; i < 256; ++i) n.push((i + 256).toString(16).slice(1));
    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return (n[e[t + 0]] + n[e[t + 1]] + n[e[t + 2]] + n[e[t + 3]] + "-" + n[e[t + 4]] + n[e[t + 5]] + "-" + n[e[t + 6]] + n[e[t + 7]] + "-" + n[e[t + 8]] + n[e[t + 9]] + "-" + n[e[t + 10]] + n[e[t + 11]] + n[e[t + 12]] + n[e[t + 13]] + n[e[t + 14]] + n[e[t + 15]]).toLowerCase();
    }
  }), o("dW1uR", function (t, s) {
    e(t.exports, "default", function () {
      return i;
    });
    var n = r("isjlF"),
      i = function i(e) {
        return "string" == typeof e && n.default.test(e);
      };
  }), o("isjlF", function (t, s) {
    e(t.exports, "default", function () {
      return n;
    });
    var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
  }), o("62uiv", function (t, s) {
    e(t.exports, "TcfConsentModel", function () {
      return i;
    });
    var n = r("8QPZA");
    var i = /*#__PURE__*/function (_n$GdprConsentModel) {
      function i(e, t) {
        var _this13;
        _classCallCheck(this, i);
        _this13 = _callSuper(this, i, [e, t]), _this13.tcString = e.tcString, _this13.vendorsList = e.vendorsList, (null == t ? void 0 : t.acString) && (_this13.acString = t.acString), _this13.gpcSignal = e.gpcSignal, _this13.interaction = e.interaction;
        return _this13;
      }
      _inherits(i, _n$GdprConsentModel);
      return _createClass(i, [{
        key: "setTcString",
        value: function setTcString(e) {
          this.tcString = e;
        }
      }, {
        key: "setAcString",
        value: function setAcString(e) {
          this.acString = e;
        }
      }]);
    }(n.GdprConsentModel);
  }), o("aCyBP", function (t, s) {
    e(t.exports, "getV2LocalStorageData", function () {
      return o;
    });
    var n = r("kTJf3"),
      i = r("b2ZVT"),
      o = function o(e) {
        var t;
        if (e && Array.isArray(t = e.ucConsents.consents) && t.length > 0) return (0, n._)(_defineProperty({}, i.V2_LOCAL_STORAGE_KEY.SETTINGS, {
          controllerId: e.ucConsents.consents[0].controllerId,
          id: e.usercentrics.settings.settingsId,
          language: e.usercentrics.settings.language,
          services: e.ucConsents.consents.map(function (e) {
            return {
              history: e.history.map(function (e) {
                return {
                  action: a(e.action),
                  language: e.language,
                  status: e.consentStatus,
                  timestamp: e.updatedAt,
                  type: d(e.updatedBy),
                  versions: {
                    application: e.appVersion,
                    service: e.consentTemplateVersion,
                    settings: e.settingsVersion
                  }
                };
              }),
              id: e.templateId,
              processorId: e.processorId,
              status: e.consentStatus
            };
          }),
          version: e.usercentrics.settings.version
        }), e.usercentrics.firstUserInteraction.stateSaved && _defineProperty({}, i.V2_LOCAL_STORAGE_KEY.USER_INTERACTION, !0));
      },
      a = function a(e) {
        switch (e) {
          case i.V1_CONSENT_ACTION.ON_ACCEPT_ALL_BTN_CLICK:
          case i.V1_CONSENT_ACTION.ON_SPECIAL_FUNCTION_ACCEPT_ALL_CONSENT_TRIGGER:
            return i.V2_CONSENT_ACTION.ACCEPT_ALL_SERVICES;
          case i.V1_CONSENT_ACTION.ON_DENY_ALL_ANCHOR_CLICK:
          case i.V1_CONSENT_ACTION.ON_DENY_ALL_BTN_CLICK:
            return i.V2_CONSENT_ACTION.DENY_ALL_SERVICES;
          case i.V1_CONSENT_ACTION.ON_NON_EU_REGION:
            return i.V2_CONSENT_ACTION.NON_EU_REGION;
          case i.V1_CONSENT_ACTION.ON_INITIAL_PAGE_LOAD:
          case i.V1_CONSENT_ACTION.ON_COUNTDOWN_FINISHED:
            return i.V2_CONSENT_ACTION.INITIAL_PAGE_LOAD;
          case i.V1_CONSENT_ACTION.ON_TOGGLE_CATEGORY:
          case i.V1_CONSENT_ACTION.ON_TOGGLE_CONSENT:
          case i.V1_CONSENT_ACTION.ON_TOGGLE_SELECT_ALL:
            return i.V2_CONSENT_ACTION.ESSENTIAL_CHANGE;
          case i.V1_CONSENT_ACTION.ON_WINDOW_FUNCTION_UPDATE_CONSENT:
          case i.V1_CONSENT_ACTION.BY_SETTINGS_UPDATE:
          case i.V1_CONSENT_ACTION.ON_SAVE_BTN_CLICK:
            return i.V2_CONSENT_ACTION.UPDATE_SERVICES;
          default:
            return i.V2_CONSENT_ACTION.INITIAL_PAGE_LOAD;
        }
      },
      d = function d(e) {
        switch (e) {
          case i.V1_CONSENT_TYPE.UPDATE:
          case i.V1_CONSENT_TYPE.IMPLICIT:
            return i.V2_CONSENT_TYPE.IMPLICIT;
          case i.V1_CONSENT_TYPE.EXPLICIT:
            return i.V2_CONSENT_TYPE.EXPLICIT;
          default:
            return i.V2_CONSENT_TYPE.IMPLICIT;
        }
      };
  }), o("cHs27", function (e, s) {
    var n = r("2gIjD"),
      i = r("h8RQ7"),
      o = r("da6wO"),
      a = r("LFTvj"),
      d = r("cf8E3"),
      c = r("cDUZw"),
      l = r("lzUuO"),
      u = r("eOikM");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a), t(e.exports, d), t(e.exports, c), t(e.exports, l), t(e.exports, u);
  }), o("2gIjD", function (e, s) {
    var n = r("a8XsK"),
      i = r("gJimg"),
      o = r("1jX9l"),
      a = r("1VjWu"),
      d = r("8HYVk"),
      c = r("bMqdd"),
      l = r("jRo4a");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a), t(e.exports, d), t(e.exports, c), t(e.exports, l);
  }), o("a8XsK", function (t, s) {
    e(t.exports, "Base64Url", function () {
      return o;
    }), r("h8RQ7");
    var n = r("3yhNr"),
      i = r("e43na");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e) {
          if (!/^[0-1]+$/.test(e)) throw new (0, i.EncodingError)("Invalid bitField");
          var t = e.length % this.LCM;
          e += t ? "0".repeat(this.LCM - t) : "";
          for (var s = "", n = 0; n < e.length; n += this.BASIS) s += this.DICT[parseInt(e.substr(n, this.BASIS), 2)];
          return s;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[A-Za-z0-9\-_]+$/.test(e)) throw new (0, n.DecodingError)("Invalidly encoded Base64URL string");
          for (var t = "", s = 0; s < e.length; s++) {
            var i = this.REVERSE_DICT.get(e[s]).toString(2);
            t += "0".repeat(this.BASIS - i.length) + i;
          }
          return t;
        }
      }]);
    }();
    o.DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", o.REVERSE_DICT = new Map([["A", 0], ["B", 1], ["C", 2], ["D", 3], ["E", 4], ["F", 5], ["G", 6], ["H", 7], ["I", 8], ["J", 9], ["K", 10], ["L", 11], ["M", 12], ["N", 13], ["O", 14], ["P", 15], ["Q", 16], ["R", 17], ["S", 18], ["T", 19], ["U", 20], ["V", 21], ["W", 22], ["X", 23], ["Y", 24], ["Z", 25], ["a", 26], ["b", 27], ["c", 28], ["d", 29], ["e", 30], ["f", 31], ["g", 32], ["h", 33], ["i", 34], ["j", 35], ["k", 36], ["l", 37], ["m", 38], ["n", 39], ["o", 40], ["p", 41], ["q", 42], ["r", 43], ["s", 44], ["t", 45], ["u", 46], ["v", 47], ["w", 48], ["x", 49], ["y", 50], ["z", 51], ["0", 52], ["1", 53], ["2", 54], ["3", 55], ["4", 56], ["5", 57], ["6", 58], ["7", 59], ["8", 60], ["9", 61], ["-", 62], ["_", 63]]), o.BASIS = 6, o.LCM = 24;
  }), o("h8RQ7", function (e, s) {
    var n = r("3yhNr"),
      i = r("e43na"),
      o = r("dtFDf"),
      a = r("diQDB");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a);
  }), o("3yhNr", function (t, s) {
    e(t.exports, "DecodingError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error) {
      function n(e) {
        var _this14;
        _classCallCheck(this, n);
        _this14 = _callSuper(this, n, [e]), _this14.name = "DecodingError";
        return _this14;
      }
      _inherits(n, _Error);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("e43na", function (t, s) {
    e(t.exports, "EncodingError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error2) {
      function n(e) {
        var _this15;
        _classCallCheck(this, n);
        _this15 = _callSuper(this, n, [e]), _this15.name = "EncodingError";
        return _this15;
      }
      _inherits(n, _Error2);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("dtFDf", function (t, s) {
    e(t.exports, "GVLError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error3) {
      function n(e) {
        var _this16;
        _classCallCheck(this, n);
        _this16 = _callSuper(this, n, [e]), _this16.name = "GVLError";
        return _this16;
      }
      _inherits(n, _Error3);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("diQDB", function (t, s) {
    e(t.exports, "TCModelError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error4) {
      function n(e, t, s) {
        var _this17;
        _classCallCheck(this, n);
        _this17 = _callSuper(this, n, ["invalid value ".concat(t, " passed for ").concat(e, " ").concat(void 0 === s ? "" : s)]), _this17.name = "TCModelError";
        return _this17;
      }
      _inherits(n, _Error4);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("gJimg", function (t, s) {
    e(t.exports, "BitLength", function () {
      return v;
    }), r("da6wO");
    var n,
      i,
      o,
      a,
      d,
      c,
      l,
      u,
      g,
      E,
      p,
      h,
      S,
      I,
      _,
      C,
      T,
      N,
      O = r("joa88");
    var v = /*#__PURE__*/_createClass(function v() {
      _classCallCheck(this, v);
    });
    n = O.Fields.cmpId, i = O.Fields.cmpVersion, o = O.Fields.consentLanguage, a = O.Fields.consentScreen, d = O.Fields.created, c = O.Fields.isServiceSpecific, l = O.Fields.lastUpdated, u = O.Fields.policyVersion, g = O.Fields.publisherCountryCode, E = O.Fields.publisherLegitimateInterests, p = O.Fields.publisherConsents, h = O.Fields.purposeConsents, S = O.Fields.purposeLegitimateInterests, I = O.Fields.purposeOneTreatment, _ = O.Fields.specialFeatureOptins, C = O.Fields.useNonStandardTexts, T = O.Fields.vendorListVersion, N = O.Fields.version, v[n] = 12, v[i] = 12, v[o] = 12, v[a] = 6, v[d] = 36, v[c] = 1, v[l] = 36, v[u] = 6, v[g] = 12, v[E] = 24, v[p] = 24, v[h] = 24, v[S] = 24, v[I] = 1, v[_] = 12, v[C] = 1, v[T] = 12, v[N] = 6, v.anyBoolean = 1, v.encodingType = 1, v.maxId = 16, v.numCustomPurposes = 6, v.numEntries = 12, v.numRestrictions = 12, v.purposeId = 6, v.restrictionType = 2, v.segmentType = 3, v.singleOrRange = 1, v.vendorId = 16;
  }), o("da6wO", function (e, s) {
    var n = r("yexJo"),
      i = r("joa88"),
      o = r("ioGOp"),
      a = r("f6BN5"),
      d = r("6B8qC"),
      c = r("1i9Hj"),
      l = r("dgvd0"),
      u = r("gPx4a"),
      g = r("bLQZ1"),
      E = r("8rnD3"),
      p = r("adfKh"),
      h = r("3cb3k"),
      S = r("dWjen");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a), t(e.exports, d), t(e.exports, c), t(e.exports, l), t(e.exports, u), t(e.exports, g), t(e.exports, E), t(e.exports, p), t(e.exports, h), t(e.exports, S);
  }), o("yexJo", function (t, s) {
    e(t.exports, "ConsentLanguages", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, [{
        key: "has",
        value: function has(e) {
          return n.langSet.has(e);
        }
      }, {
        key: "parseLanguage",
        value: function parseLanguage(e) {
          var t = (e = e.toUpperCase()).split("-")[0];
          if (e.length >= 2 && 2 == t.length) {
            if (n.langSet.has(e)) return e;
            if (n.langSet.has(t)) return t;
            var s = t + "-" + t;
            if (n.langSet.has(s)) return s;
            var i = !0,
              r = !1,
              o = void 0;
            try {
              for (var a, d = n.langSet[Symbol.iterator](); !(i = (a = d.next()).done); i = !0) {
                var c = a.value;
                if (-1 !== c.indexOf(e) || -1 !== c.indexOf(t)) return c;
              }
            } catch (e) {
              r = !0, o = e;
            } finally {
              try {
                i || null == d.return || d.return();
              } finally {
                if (r) throw o;
              }
            }
          }
          throw Error("unsupported language ".concat(e));
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          n.langSet.forEach(e);
        }
      }, {
        key: "size",
        get: function get() {
          return n.langSet.size;
        }
      }]);
    }();
    n.langSet = new Set(["AR", "BG", "BS", "CA", "CS", "CY", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HE", "HI", "HR", "HU", "ID", "IS", "IT", "JA", "KA", "KO", "LT", "LV", "MK", "MS", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SQ", "SR-LATN", "SR-CYRL", "SV", "SW", "TH", "TL", "TR", "UK", "VI", "ZH", "ZH-HANT"]);
  }), o("joa88", function (t, s) {
    e(t.exports, "Fields", function () {
      return n;
    });
    var n = /*#__PURE__*/_createClass(function n() {
      _classCallCheck(this, n);
    });
    n.cmpId = "cmpId", n.cmpVersion = "cmpVersion", n.consentLanguage = "consentLanguage", n.consentScreen = "consentScreen", n.created = "created", n.supportOOB = "supportOOB", n.isServiceSpecific = "isServiceSpecific", n.lastUpdated = "lastUpdated", n.numCustomPurposes = "numCustomPurposes", n.policyVersion = "policyVersion", n.publisherCountryCode = "publisherCountryCode", n.publisherCustomConsents = "publisherCustomConsents", n.publisherCustomLegitimateInterests = "publisherCustomLegitimateInterests", n.publisherLegitimateInterests = "publisherLegitimateInterests", n.publisherConsents = "publisherConsents", n.publisherRestrictions = "publisherRestrictions", n.purposeConsents = "purposeConsents", n.purposeLegitimateInterests = "purposeLegitimateInterests", n.purposeOneTreatment = "purposeOneTreatment", n.specialFeatureOptins = "specialFeatureOptins", n.useNonStandardTexts = "useNonStandardTexts", n.vendorConsents = "vendorConsents", n.vendorLegitimateInterests = "vendorLegitimateInterests", n.vendorListVersion = "vendorListVersion", n.vendorsAllowed = "vendorsAllowed", n.vendorsDisclosed = "vendorsDisclosed", n.version = "version";
  }), o("ioGOp", function (e, t) {}), o("f6BN5", function (e, t) {}), o("6B8qC", function (t, s) {
    e(t.exports, "PurposeRestriction", function () {
      return a;
    });
    var n = r("LFTvj");
    r("h8RQ7");
    var i = r("diQDB"),
      o = r("bLQZ1");
    var a = /*#__PURE__*/function (_n$Cloneable) {
      function a(e, t) {
        var _this18;
        _classCallCheck(this, a);
        _this18 = _callSuper(this, a), void 0 !== e && (_this18.purposeId = e), void 0 !== t && (_this18.restrictionType = t);
        return _this18;
      }
      _inherits(a, _n$Cloneable);
      return _createClass(a, [{
        key: "hash",
        get: function get() {
          if (!this.isValid()) throw Error("cannot hash invalid PurposeRestriction");
          return "".concat(this.purposeId).concat(a.hashSeparator).concat(this.restrictionType);
        }
      }, {
        key: "purposeId",
        get: function get() {
          return this.purposeId_;
        },
        set: function set(e) {
          this.purposeId_ = e;
        }
      }, {
        key: "isValid",
        value: function isValid() {
          return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === o.RestrictionType.NOT_ALLOWED || this.restrictionType === o.RestrictionType.REQUIRE_CONSENT || this.restrictionType === o.RestrictionType.REQUIRE_LI);
        }
      }, {
        key: "isSameAs",
        value: function isSameAs(e) {
          return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType;
        }
      }], [{
        key: "unHash",
        value: function unHash(e) {
          var t = e.split(this.hashSeparator),
            s = new a();
          if (2 !== t.length) throw new (0, i.TCModelError)("hash", e);
          return s.purposeId = parseInt(t[0], 10), s.restrictionType = parseInt(t[1], 10), s;
        }
      }]);
    }(n.Cloneable);
    a.hashSeparator = "-";
  }), o("LFTvj", function (t, s) {
    e(t.exports, "Cloneable", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, [{
        key: "clone",
        value: function clone() {
          var _this19 = this;
          var e = new this.constructor();
          return Object.keys(this).forEach(function (t) {
            var s = _this19.deepClone(_this19[t]);
            void 0 !== s && (e[t] = s);
          }), e;
        }
      }, {
        key: "deepClone",
        value: function deepClone(e) {
          var t = _typeof(e);
          if ("number" === t || "string" === t || "boolean" === t) return e;
          if (null !== e && "object" === t) if ("function" == typeof e.clone) return e.clone();else if (e instanceof Date) return new Date(e.getTime());else if (void 0 !== e[Symbol.iterator]) {
            var s = [],
              _n = !0,
              i = !1,
              r = void 0;
            try {
              for (var o, a = e[Symbol.iterator](); !(_n = (o = a.next()).done); _n = !0) {
                var d = o.value;
                s.push(this.deepClone(d));
              }
            } catch (e) {
              i = !0, r = e;
            } finally {
              try {
                _n || null == a.return || a.return();
              } finally {
                if (i) throw r;
              }
            }
            return e instanceof Array ? s : new e.constructor(s);
          } else {
            var c = {};
            for (var l in e) e.hasOwnProperty(l) && (c[l] = this.deepClone(e[l]));
            return c;
          }
        }
      }]);
    }();
  }), o("bLQZ1", function (t, s) {
    e(t.exports, "RestrictionType", function () {
      return i;
    });
    var n,
      i = ((n = {})[n.NOT_ALLOWED = 0] = "NOT_ALLOWED", n[n.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT", n[n.REQUIRE_LI = 2] = "REQUIRE_LI", n);
  }), o("1i9Hj", function (t, s) {
    e(t.exports, "PurposeRestrictionVector", function () {
      return a;
    });
    var n = r("6B8qC"),
      i = r("bLQZ1"),
      o = r("LFTvj");
    var a = /*#__PURE__*/function (_o$Cloneable) {
      function a() {
        var _this20;
        _classCallCheck(this, a);
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }
        _this20 = _callSuper(this, a, [].concat(e)), _this20.bitLength = 0, _this20.map = new Map();
        return _this20;
      }
      _inherits(a, _o$Cloneable);
      return _createClass(a, [{
        key: "has",
        value: function has(e) {
          return this.map.has(e);
        }
      }, {
        key: "isOkToHave",
        value: function isOkToHave(e, t, s) {
          var n,
            r = !0;
          if (null == (n = this.gvl) ? void 0 : n.vendors) {
            var o = this.gvl.vendors[s];
            if (o) {
              if (e === i.RestrictionType.NOT_ALLOWED) r = o.legIntPurposes.includes(t) || o.purposes.includes(t);else if (o.flexiblePurposes.length) switch (e) {
                case i.RestrictionType.REQUIRE_CONSENT:
                  r = o.flexiblePurposes.includes(t) && o.legIntPurposes.includes(t);
                  break;
                case i.RestrictionType.REQUIRE_LI:
                  r = o.flexiblePurposes.includes(t) && o.purposes.includes(t);
              } else r = !1;
            } else r = !1;
          }
          return r;
        }
      }, {
        key: "add",
        value: function add(e, t) {
          if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
            var s = t.hash;
            this.has(s) || (this.map.set(s, new Set()), this.bitLength = 0), this.map.get(s).add(e);
          }
        }
      }, {
        key: "restrictPurposeToLegalBasis",
        value: function restrictPurposeToLegalBasis(e) {
          var t = Array.from(this.gvl.vendorIds),
            s = e.hash,
            n = t[t.length - 1],
            i = _toConsumableArray(Array(n).keys()).map(function (e) {
              return e + 1;
            });
          if (this.has(s)) for (var r = 1; r <= n; r++) this.map.get(s).add(r);else this.map.set(s, new Set(i)), this.bitLength = 0;
        }
      }, {
        key: "getVendors",
        value: function getVendors(e) {
          var t = [];
          if (e) {
            var s = e.hash;
            this.has(s) && (t = Array.from(this.map.get(s)));
          } else {
            var n = new Set();
            this.map.forEach(function (e) {
              e.forEach(function (e) {
                n.add(e);
              });
            }), t = Array.from(n);
          }
          return t.sort(function (e, t) {
            return e - t;
          });
        }
      }, {
        key: "getRestrictionType",
        value: function getRestrictionType(e, t) {
          var s;
          return this.getRestrictions(e).forEach(function (e) {
            e.purposeId === t && (void 0 === s || s > e.restrictionType) && (s = e.restrictionType);
          }), s;
        }
      }, {
        key: "vendorHasRestriction",
        value: function vendorHasRestriction(e, t) {
          for (var s = !1, n = this.getRestrictions(e), i = 0; i < n.length && !s; i++) s = t.isSameAs(n[i]);
          return s;
        }
      }, {
        key: "getMaxVendorId",
        value: function getMaxVendorId() {
          var e = 0;
          return this.map.forEach(function (t) {
            e = Math.max(Array.from(t)[t.size - 1], e);
          }), e;
        }
      }, {
        key: "getRestrictions",
        value: function getRestrictions(e) {
          var t = [];
          return this.map.forEach(function (s, i) {
            e ? s.has(e) && t.push(n.PurposeRestriction.unHash(i)) : t.push(n.PurposeRestriction.unHash(i));
          }), t;
        }
      }, {
        key: "getPurposes",
        value: function getPurposes() {
          var e = new Set();
          return this.map.forEach(function (t, s) {
            e.add(n.PurposeRestriction.unHash(s).purposeId);
          }), Array.from(e);
        }
      }, {
        key: "remove",
        value: function remove(e, t) {
          var s = t.hash,
            n = this.map.get(s);
          n && (n.delete(e), 0 == n.size && (this.map.delete(s), this.bitLength = 0));
        }
      }, {
        key: "gvl",
        get: function get() {
          return this.gvl_;
        },
        set: function set(e) {
          var _this21 = this;
          this.gvl_ || (this.gvl_ = e, this.map.forEach(function (e, t) {
            var s = n.PurposeRestriction.unHash(t);
            Array.from(e).forEach(function (t) {
              _this21.isOkToHave(s.restrictionType, s.purposeId, t) || e.delete(t);
            });
          }));
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return 0 === this.map.size;
        }
      }, {
        key: "numRestrictions",
        get: function get() {
          return this.map.size;
        }
      }]);
    }(o.Cloneable);
  }), o("dgvd0", function (t, s) {
    e(t.exports, "DeviceDisclosureStorageAccessType", function () {
      return i;
    });
    var n,
      i = ((n = {}).COOKIE = "cookie", n.WEB = "web", n.APP = "app", n);
  }), o("gPx4a", function (e, t) {}), o("8rnD3", function (t, s) {
    e(t.exports, "Segment", function () {
      return i;
    });
    var n,
      i = ((n = {}).CORE = "core", n.VENDORS_DISCLOSED = "vendorsDisclosed", n.VENDORS_ALLOWED = "vendorsAllowed", n.PUBLISHER_TC = "publisherTC", n);
  }), o("adfKh", function (t, s) {
    e(t.exports, "SegmentIDs", function () {
      return i;
    });
    var n = r("8rnD3");
    var i = /*#__PURE__*/_createClass(function i() {
      _classCallCheck(this, i);
    });
    i.ID_TO_KEY = [n.Segment.CORE, n.Segment.VENDORS_DISCLOSED, n.Segment.VENDORS_ALLOWED, n.Segment.PUBLISHER_TC], i.KEY_TO_ID = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, n.Segment.CORE, 0), n.Segment.VENDORS_DISCLOSED, 1), n.Segment.VENDORS_ALLOWED, 2), n.Segment.PUBLISHER_TC, 3);
  }), o("3cb3k", function (t, s) {
    e(t.exports, "Vector", function () {
      return a;
    });
    var n = r("dmwAz"),
      i = r("LFTvj");
    r("h8RQ7");
    var o = r("diQDB");
    var a = /*#__PURE__*/function (_i$Cloneable) {
      function a() {
        var _this22;
        _classCallCheck(this, a);
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }
        _this22 = _callSuper(this, a, [].concat(e)), _this22.bitLength = 0, _this22.maxId_ = 0, _this22.set_ = new Set();
        return _this22;
      }
      _inherits(a, _i$Cloneable);
      return _createClass(a, [{
        key: Symbol.iterator,
        value: function value() {
          var e;
          return (0, n._)(this, function (t) {
            switch (t.label) {
              case 0:
                e = 1, t.label = 1;
              case 1:
                if (!(e <= this.maxId)) return [3, 4];
                return [4, [e, this.has(e)]];
              case 2:
                t.sent(), t.label = 3;
              case 3:
                return e++, [3, 1];
              case 4:
                return [2];
            }
          });
        }
      }, {
        key: "values",
        value: function values() {
          return this.set_.values();
        }
      }, {
        key: "maxId",
        get: function get() {
          return this.maxId_;
        }
      }, {
        key: "has",
        value: function has(e) {
          return this.set_.has(e);
        }
      }, {
        key: "unset",
        value: function unset(e) {
          var _this23 = this;
          Array.isArray(e) ? e.forEach(function (e) {
            return _this23.unset(e);
          }) : "object" == _typeof(e) ? this.unset(Object.keys(e).map(function (e) {
            return Number(e);
          })) : (this.set_.delete(Number(e)), this.bitLength = 0, e === this.maxId && (this.maxId_ = 0, this.set_.forEach(function (e) {
            _this23.maxId_ = Math.max(_this23.maxId, e);
          })));
        }
      }, {
        key: "isIntMap",
        value: function isIntMap(e) {
          var _this24 = this;
          var t = "object" == _typeof(e);
          return t && Object.keys(e).every(function (t) {
            var s = Number.isInteger(parseInt(t, 10));
            return (s = s && _this24.isValidNumber(e[t].id)) && void 0 !== e[t].name;
          });
        }
      }, {
        key: "isValidNumber",
        value: function isValidNumber(e) {
          return parseInt(e, 10) > 0;
        }
      }, {
        key: "isSet",
        value: function isSet(e) {
          var t = !1;
          return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t;
        }
      }, {
        key: "set",
        value: function set(e) {
          var _this25 = this;
          if (Array.isArray(e)) e.forEach(function (e) {
            return _this25.set(e);
          });else if (this.isSet(e)) this.set(Array.from(e));else if (this.isIntMap(e)) this.set(Object.keys(e).map(function (e) {
            return Number(e);
          }));else if (this.isValidNumber(e)) this.set_.add(e), this.maxId_ = Math.max(this.maxId, e), this.bitLength = 0;else throw new (0, o.TCModelError)("set()", e, "must be positive integer array, positive integer, Set<number>, or IntMap");
        }
      }, {
        key: "empty",
        value: function empty() {
          this.set_ = new Set(), this.maxId_ = 0;
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          for (var t = 1; t <= this.maxId; t++) e(this.has(t), t);
        }
      }, {
        key: "size",
        get: function get() {
          return this.set_.size;
        }
      }, {
        key: "setAll",
        value: function setAll(e) {
          this.set(e);
        }
      }, {
        key: "unsetAll",
        value: function unsetAll(e) {
          this.unset(e);
        }
      }]);
    }(i.Cloneable);
  }), o("dWjen", function (e, s) {
    var n = r("dwWPy"),
      i = r("eLym7"),
      o = r("jd8jX"),
      a = r("JyTne"),
      d = r("7jQaU"),
      c = r("jVSyE"),
      l = r("lQsvt"),
      u = r("18OxP"),
      g = r("dqp3m"),
      E = r("cggZ0"),
      p = r("cLCcL");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a), t(e.exports, d), t(e.exports, c), t(e.exports, l), t(e.exports, u), t(e.exports, g), t(e.exports, E), t(e.exports, p);
  }), o("dwWPy", function (e, t) {}), o("eLym7", function (e, t) {}), o("jd8jX", function (e, t) {}), o("JyTne", function (e, t) {}), o("7jQaU", function (e, t) {}), o("jVSyE", function (e, t) {}), o("lQsvt", function (e, t) {}), o("18OxP", function (e, t) {}), o("dqp3m", function (e, t) {}), o("cggZ0", function (e, t) {}), o("cLCcL", function (e, t) {}), o("1jX9l", function (e, t) {}), o("1VjWu", function (t, s) {
    e(t.exports, "SegmentEncoder", function () {
      return h;
    });
    var n = r("a8XsK"),
      i = r("gJimg");
    r("bMqdd");
    var o = r("42HjQ"),
      a = r("kFiBL"),
      d = r("fpvC7");
    r("jRo4a");
    var c = r("gCMte");
    r("h8RQ7");
    var l = r("3yhNr"),
      u = r("e43na"),
      g = r("joa88");
    r("da6wO");
    var E = r("8rnD3"),
      p = r("adfKh");
    var h = /*#__PURE__*/function () {
      function h() {
        _classCallCheck(this, h);
      }
      return _createClass(h, null, [{
        key: "encode",
        value: function encode(e, t) {
          var _this26 = this;
          try {
            s = this.fieldSequence[String(e.version)][t];
          } catch (s) {
            throw new (0, u.EncodingError)("Unable to encode version: ".concat(e.version, ", segment: ").concat(t));
          }
          var s,
            r = "";
          t !== E.Segment.CORE && (r = a.IntEncoder.encode(p.SegmentIDs.KEY_TO_ID[t], i.BitLength.segmentType));
          var d = (0, o.FieldEncoderMap)();
          return s.forEach(function (s) {
            var n = e[s],
              o = d[s],
              a = i.BitLength[s];
            void 0 === a && _this26.isPublisherCustom(s) && (a = Number(e[g.Fields.numCustomPurposes]));
            try {
              r += o.encode(n, a);
            } catch (e) {
              throw new (0, u.EncodingError)("Error encoding ".concat(t, "->").concat(s, ": ").concat(e.message));
            }
          }), n.Base64Url.encode(r);
        }
      }, {
        key: "decode",
        value: function decode(e, t, s) {
          var _this27 = this;
          var r = n.Base64Url.decode(e),
            c = 0;
          s === E.Segment.CORE && (t.version = a.IntEncoder.decode(r.substr(c, i.BitLength[g.Fields.version]), i.BitLength[g.Fields.version])), s !== E.Segment.CORE && (c += i.BitLength.segmentType);
          var u = this.fieldSequence[String(t.version)][s],
            p = (0, o.FieldEncoderMap)();
          return u.forEach(function (e) {
            var s = p[e],
              n = i.BitLength[e];
            if (void 0 === n && _this27.isPublisherCustom(e) && (n = Number(t[g.Fields.numCustomPurposes])), 0 !== n) {
              var o = r.substr(c, n);
              if (s === d.VendorVectorEncoder ? t[e] = s.decode(o, t.version) : t[e] = s.decode(o, n), Number.isInteger(n)) c += n;else if (Number.isInteger(t[e].bitLength)) c += t[e].bitLength;else throw new (0, l.DecodingError)(e);
            }
          }), t;
        }
      }, {
        key: "isPublisherCustom",
        value: function isPublisherCustom(e) {
          return 0 === e.indexOf("publisherCustom");
        }
      }]);
    }();
    h.fieldSequence = new (0, c.FieldSequence)();
  }), o("bMqdd", function (e, s) {
    var n = r("4b5Zi"),
      i = r("cXuC6"),
      o = r("42HjQ"),
      a = r("d0daj"),
      d = r("kFiBL"),
      c = r("jxaRy"),
      l = r("gf0GZ"),
      u = r("iuXCK"),
      g = r("fpvC7");
    t(e.exports, n), t(e.exports, i), t(e.exports, o), t(e.exports, a), t(e.exports, d), t(e.exports, c), t(e.exports, l), t(e.exports, u), t(e.exports, g);
  }), o("4b5Zi", function (t, s) {
    e(t.exports, "BooleanEncoder", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, null, [{
        key: "encode",
        value: function encode(e) {
          return String(Number(e));
        }
      }, {
        key: "decode",
        value: function decode(e) {
          return "1" === e;
        }
      }]);
    }();
  }), o("cXuC6", function (t, s) {
    e(t.exports, "DateEncoder", function () {
      return o;
    });
    var n = r("kFiBL");
    r("h8RQ7");
    var i = r("3yhNr");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e, t) {
          return n.IntEncoder.encode(Math.round(e.getTime() / 100), t);
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          if (t !== e.length) throw new (0, i.DecodingError)("invalid bit length");
          var s = new Date();
          return s.setTime(100 * n.IntEncoder.decode(e, t)), s;
        }
      }]);
    }();
  }), o("kFiBL", function (t, s) {
    e(t.exports, "IntEncoder", function () {
      return o;
    }), r("h8RQ7");
    var n = r("3yhNr"),
      i = r("e43na");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e, t) {
          var s;
          if ("string" == typeof e && (e = parseInt(e, 10)), (s = e.toString(2)).length > t || e < 0) throw new (0, i.EncodingError)("".concat(e, " too large to encode into ").concat(t));
          return s.length < t && (s = "0".repeat(t - s.length) + s), s;
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          if (t !== e.length) throw new (0, n.DecodingError)("invalid bit length");
          return parseInt(e, 2);
        }
      }]);
    }();
  }), o("42HjQ", function (t, s) {
    e(t.exports, "FieldEncoderMap", function () {
      return g;
    }), r("da6wO");
    var n = r("joa88"),
      i = r("4b5Zi"),
      o = r("cXuC6"),
      a = r("d0daj"),
      d = r("kFiBL"),
      c = r("jxaRy"),
      l = r("gf0GZ"),
      u = r("fpvC7");
    function g() {
      var _ref4;
      return _ref4 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref4, n.Fields.version, d.IntEncoder), n.Fields.created, o.DateEncoder), n.Fields.lastUpdated, o.DateEncoder), n.Fields.cmpId, d.IntEncoder), n.Fields.cmpVersion, d.IntEncoder), n.Fields.consentScreen, d.IntEncoder), n.Fields.consentLanguage, c.LangEncoder), n.Fields.vendorListVersion, d.IntEncoder), n.Fields.policyVersion, d.IntEncoder), n.Fields.isServiceSpecific, i.BooleanEncoder), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref4, n.Fields.useNonStandardTexts, i.BooleanEncoder), n.Fields.specialFeatureOptins, a.FixedVectorEncoder), n.Fields.purposeConsents, a.FixedVectorEncoder), n.Fields.purposeLegitimateInterests, a.FixedVectorEncoder), n.Fields.purposeOneTreatment, i.BooleanEncoder), n.Fields.publisherCountryCode, c.LangEncoder), n.Fields.vendorConsents, u.VendorVectorEncoder), n.Fields.vendorLegitimateInterests, u.VendorVectorEncoder), n.Fields.publisherRestrictions, l.PurposeRestrictionVectorEncoder), "segmentType", d.IntEncoder), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref4, n.Fields.vendorsDisclosed, u.VendorVectorEncoder), n.Fields.vendorsAllowed, u.VendorVectorEncoder), n.Fields.publisherConsents, a.FixedVectorEncoder), n.Fields.publisherLegitimateInterests, a.FixedVectorEncoder), n.Fields.numCustomPurposes, d.IntEncoder), n.Fields.publisherCustomConsents, a.FixedVectorEncoder), n.Fields.publisherCustomLegitimateInterests, a.FixedVectorEncoder);
    }
  }), o("d0daj", function (t, s) {
    e(t.exports, "FixedVectorEncoder", function () {
      return a;
    });
    var n = r("4b5Zi");
    r("h8RQ7");
    var i = r("3yhNr");
    r("da6wO");
    var o = r("3cb3k");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e, t) {
          for (var s = "", i = 1; i <= t; i++) s += n.BooleanEncoder.encode(e.has(i));
          return s;
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          if (e.length !== t) throw new (0, i.DecodingError)("bitfield encoding length mismatch");
          for (var s = new (0, o.Vector)(), r = 1; r <= t; r++) n.BooleanEncoder.decode(e[r - 1]) && s.set(r);
          return s.bitLength = e.length, s;
        }
      }]);
    }();
  }), o("jxaRy", function (t, s) {
    e(t.exports, "LangEncoder", function () {
      return a;
    });
    var n = r("kFiBL");
    r("h8RQ7");
    var i = r("3yhNr"),
      o = r("e43na");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e, t) {
          var s = (e = e.toUpperCase()).charCodeAt(0) - 65,
            i = e.charCodeAt(1) - 65;
          if (s < 0 || s > 25 || i < 0 || i > 25) throw new (0, o.EncodingError)("invalid language code: ".concat(e));
          if (t % 2 == 1) throw new (0, o.EncodingError)("numBits must be even, ".concat(t, " is not valid"));
          return t /= 2, n.IntEncoder.encode(s, t) + n.IntEncoder.encode(i, t);
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          if (t !== e.length || e.length % 2) throw new (0, i.DecodingError)("invalid bit length for language");
          var s = e.length / 2,
            r = n.IntEncoder.decode(e.slice(0, s), s) + 65,
            o = n.IntEncoder.decode(e.slice(s), s) + 65;
          return String.fromCharCode(r) + String.fromCharCode(o);
        }
      }]);
    }();
  }), o("gf0GZ", function (t, s) {
    e(t.exports, "PurposeRestrictionVectorEncoder", function () {
      return l;
    });
    var n = r("gJimg"),
      i = r("4b5Zi");
    r("h8RQ7");
    var o = r("3yhNr"),
      a = r("kFiBL");
    r("da6wO");
    var d = r("6B8qC"),
      c = r("1i9Hj");
    var l = /*#__PURE__*/function () {
      function l() {
        _classCallCheck(this, l);
      }
      return _createClass(l, null, [{
        key: "encode",
        value: function encode(e) {
          var t = a.IntEncoder.encode(e.numRestrictions, n.BitLength.numRestrictions);
          if (!e.isEmpty()) {
            var s = function s(t, _s) {
              for (var n = t + 1; n <= _s; n++) if (e.gvl.vendorIds.has(n)) return n;
              return t;
            };
            e.getRestrictions().forEach(function (r) {
              t += a.IntEncoder.encode(r.purposeId, n.BitLength.purposeId), t += a.IntEncoder.encode(r.restrictionType, n.BitLength.restrictionType);
              for (var o = e.getVendors(r), d = o.length, c = 0, _l = 0, u = "", g = 0; g < d; g++) {
                var E = o[g];
                if (0 === _l && (c++, _l = E), g === d - 1 || o[g + 1] > s(E, o[d - 1])) {
                  var p = E !== _l;
                  u += i.BooleanEncoder.encode(p), u += a.IntEncoder.encode(_l, n.BitLength.vendorId), p && (u += a.IntEncoder.encode(E, n.BitLength.vendorId)), _l = 0;
                }
              }
              t += a.IntEncoder.encode(c, n.BitLength.numEntries), t += u;
            });
          }
          return t;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          var t = 0,
            s = new (0, c.PurposeRestrictionVector)(),
            r = a.IntEncoder.decode(e.substr(t, n.BitLength.numRestrictions), n.BitLength.numRestrictions);
          t += n.BitLength.numRestrictions;
          for (var _l2 = 0; _l2 < r; _l2++) {
            var u = a.IntEncoder.decode(e.substr(t, n.BitLength.purposeId), n.BitLength.purposeId);
            t += n.BitLength.purposeId;
            var g = a.IntEncoder.decode(e.substr(t, n.BitLength.restrictionType), n.BitLength.restrictionType);
            t += n.BitLength.restrictionType;
            var E = new (0, d.PurposeRestriction)(u, g),
              p = a.IntEncoder.decode(e.substr(t, n.BitLength.numEntries), n.BitLength.numEntries);
            t += n.BitLength.numEntries;
            for (var h = 0; h < p; h++) {
              var S = i.BooleanEncoder.decode(e.substr(t, n.BitLength.anyBoolean));
              t += n.BitLength.anyBoolean;
              var I = a.IntEncoder.decode(e.substr(t, n.BitLength.vendorId), n.BitLength.vendorId);
              if (t += n.BitLength.vendorId, S) {
                var _ = a.IntEncoder.decode(e.substr(t, n.BitLength.vendorId), n.BitLength.vendorId);
                if (t += n.BitLength.vendorId, _ < I) throw new (0, o.DecodingError)("Invalid RangeEntry: endVendorId ".concat(_, " is less than ").concat(I));
                for (var C = I; C <= _; C++) s.add(C, E);
              } else s.add(I, E);
            }
          }
          return s.bitLength = t, s;
        }
      }]);
    }();
  }), o("fpvC7", function (t, s) {
    e(t.exports, "VendorVectorEncoder", function () {
      return u;
    }), r("da6wO");
    var n = r("3cb3k");
    r("2gIjD");
    var i = r("gJimg"),
      o = r("kFiBL"),
      a = r("4b5Zi"),
      d = r("d0daj"),
      c = r("iuXCK");
    r("h8RQ7");
    var l = r("3yhNr");
    var u = /*#__PURE__*/function () {
      function u() {
        _classCallCheck(this, u);
      }
      return _createClass(u, null, [{
        key: "encode",
        value: function encode(e) {
          var t,
            s = [],
            n = [],
            r = o.IntEncoder.encode(e.maxId, i.BitLength.maxId),
            d = "",
            l = i.BitLength.maxId + i.BitLength.encodingType,
            _u = l + e.maxId,
            g = 2 * i.BitLength.vendorId + i.BitLength.singleOrRange + i.BitLength.numEntries,
            E = l + i.BitLength.numEntries;
          return e.forEach(function (r, o) {
            d += a.BooleanEncoder.encode(r), (t = e.maxId > g && E < _u) && r && (e.has(o + 1) ? 0 === n.length && (n.push(o), E += i.BitLength.singleOrRange, E += i.BitLength.vendorId) : (n.push(o), E += i.BitLength.vendorId, s.push(n), n = []));
          }), t ? (r += String(c.VectorEncodingType.RANGE), r += this.buildRangeEncoding(s)) : (r += String(c.VectorEncodingType.FIELD), r += d), r;
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          var s,
            r = 0,
            _u2 = o.IntEncoder.decode(e.substr(r, i.BitLength.maxId), i.BitLength.maxId);
          r += i.BitLength.maxId;
          var g = o.IntEncoder.decode(e.charAt(r), i.BitLength.encodingType);
          if (r += i.BitLength.encodingType, g === c.VectorEncodingType.RANGE) {
            if (s = new (0, n.Vector)(), 1 === t) {
              if ("1" === e.substr(r, 1)) throw new (0, l.DecodingError)("Unable to decode default consent=1");
              r++;
            }
            var E = o.IntEncoder.decode(e.substr(r, i.BitLength.numEntries), i.BitLength.numEntries);
            r += i.BitLength.numEntries;
            for (var p = 0; p < E; p++) {
              var h = a.BooleanEncoder.decode(e.charAt(r));
              r += i.BitLength.singleOrRange;
              var S = o.IntEncoder.decode(e.substr(r, i.BitLength.vendorId), i.BitLength.vendorId);
              if (r += i.BitLength.vendorId, h) {
                var I = o.IntEncoder.decode(e.substr(r, i.BitLength.vendorId), i.BitLength.vendorId);
                r += i.BitLength.vendorId;
                for (var _ = S; _ <= I; _++) s.set(_);
              } else s.set(S);
            }
          } else {
            var C = e.substr(r, _u2);
            r += _u2, s = d.FixedVectorEncoder.decode(C, _u2);
          }
          return s.bitLength = r, s;
        }
      }, {
        key: "buildRangeEncoding",
        value: function buildRangeEncoding(e) {
          var t = e.length,
            s = o.IntEncoder.encode(t, i.BitLength.numEntries);
          return e.forEach(function (e) {
            var t = 1 === e.length;
            s += a.BooleanEncoder.encode(!t), s += o.IntEncoder.encode(e[0], i.BitLength.vendorId), t || (s += o.IntEncoder.encode(e[1], i.BitLength.vendorId));
          }), s;
        }
      }]);
    }();
  }), o("iuXCK", function (t, s) {
    e(t.exports, "VectorEncodingType", function () {
      return i;
    });
    var n,
      i = ((n = {})[n.FIELD = 0] = "FIELD", n[n.RANGE = 1] = "RANGE", n);
  }), o("jRo4a", function (e, s) {
    var n = r("gCMte"),
      i = r("2w7UM"),
      o = r("jRwbi");
    t(e.exports, n), t(e.exports, i), t(e.exports, o);
  }), o("gCMte", function (t, s) {
    e(t.exports, "FieldSequence", function () {
      return o;
    }), r("da6wO");
    var n = r("joa88"),
      i = r("8rnD3");
    var o = /*#__PURE__*/_createClass(function o() {
      _classCallCheck(this, o);
      this["1"] = _defineProperty({}, i.Segment.CORE, [n.Fields.version, n.Fields.created, n.Fields.lastUpdated, n.Fields.cmpId, n.Fields.cmpVersion, n.Fields.consentScreen, n.Fields.consentLanguage, n.Fields.vendorListVersion, n.Fields.purposeConsents, n.Fields.vendorConsents]), this["2"] = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, i.Segment.CORE, [n.Fields.version, n.Fields.created, n.Fields.lastUpdated, n.Fields.cmpId, n.Fields.cmpVersion, n.Fields.consentScreen, n.Fields.consentLanguage, n.Fields.vendorListVersion, n.Fields.policyVersion, n.Fields.isServiceSpecific, n.Fields.useNonStandardTexts, n.Fields.specialFeatureOptins, n.Fields.purposeConsents, n.Fields.purposeLegitimateInterests, n.Fields.purposeOneTreatment, n.Fields.publisherCountryCode, n.Fields.vendorConsents, n.Fields.vendorLegitimateInterests, n.Fields.publisherRestrictions]), i.Segment.VENDORS_DISCLOSED, [n.Fields.vendorsDisclosed]), i.Segment.PUBLISHER_TC, [n.Fields.publisherConsents, n.Fields.publisherLegitimateInterests, n.Fields.numCustomPurposes, n.Fields.publisherCustomConsents, n.Fields.publisherCustomLegitimateInterests]), i.Segment.VENDORS_ALLOWED, [n.Fields.vendorsAllowed]);
    });
  }), o("2w7UM", function (t, s) {
    e(t.exports, "SegmentSequence", function () {
      return o;
    }), r("da6wO");
    var n = r("joa88"),
      i = r("8rnD3");
    var o = /*#__PURE__*/_createClass(function o(e, t) {
      _classCallCheck(this, o);
      if (this["1"] = [i.Segment.CORE], this["2"] = [i.Segment.CORE], 2 === e.version) if (e.isServiceSpecific) this["2"].push(i.Segment.VENDORS_DISCLOSED), this["2"].push(i.Segment.PUBLISHER_TC);else {
        var s = !!(t && t.isForVendors);
        s && !0 !== e[n.Fields.supportOOB] || this["2"].push(i.Segment.VENDORS_DISCLOSED), s && (e[n.Fields.supportOOB] && e[n.Fields.vendorsAllowed].size > 0 && this["2"].push(i.Segment.VENDORS_ALLOWED), this["2"].push(i.Segment.PUBLISHER_TC));
      }
    });
  }), o("jRwbi", function (e, t) {}), o("8HYVk", function (t, s) {
    e(t.exports, "SemanticPreEncoder", function () {
      return o;
    }), r("da6wO");
    var n = r("bLQZ1");
    r("h8RQ7");
    var i = r("e43na");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "process",
        value: function process(e, t) {
          var s = e.gvl;
          if (!s) throw new (0, i.EncodingError)("Unable to encode TCModel without a GVL");
          if (!s.isReady) throw new (0, i.EncodingError)("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
          (e = e.clone()).consentLanguage = s.language.slice(0, 2).toUpperCase(), (null == t ? void 0 : t.version) > 0 && (null == t ? void 0 : t.version) <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
          var n = e.version - 1;
          if (!this.processor[n]) throw new (0, i.EncodingError)("Invalid version: ".concat(e.version));
          return this.processor[n](e, s);
        }
      }]);
    }();
    o.processor = [function (e) {
      return e;
    }, function (e, t) {
      e.publisherRestrictions.gvl = t, e.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
      var s = new Map();
      return s.set("legIntPurposes", e.vendorLegitimateInterests), s.set("purposes", e.vendorConsents), s.forEach(function (s, i) {
        s.forEach(function (r, o) {
          if (r) {
            var a = t.vendors[o];
            if (!a || a.deletedDate) s.unset(o);else if (0 === a[i].length) if ("legIntPurposes" === i && 0 === a.purposes.length && 0 === a.legIntPurposes.length && a.specialPurposes.length > 0) s.set(o);else if ("legIntPurposes" === i && a.purposes.length > 0 && 0 === a.legIntPurposes.length && a.specialPurposes.length > 0) s.set(o);else if (e.isServiceSpecific) {
              if (0 === a.flexiblePurposes.length) s.unset(o);else {
                for (var d = e.publisherRestrictions.getRestrictions(o), c = !1, l = 0, u = d.length; l < u && !c; l++) c = d[l].restrictionType === n.RestrictionType.REQUIRE_CONSENT && "purposes" === i || d[l].restrictionType === n.RestrictionType.REQUIRE_LI && "legIntPurposes" === i;
                c || s.unset(o);
              }
            } else s.unset(o);
          }
        });
      }), e.vendorsDisclosed.set(t.vendors), e;
    }];
  }), o("cf8E3", function (t, s) {
    e(t.exports, "GVL", function () {
      return g;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("dmwAz"),
      d = r("LFTvj");
    r("h8RQ7");
    var c = r("dtFDf"),
      l = r("cDUZw");
    r("da6wO");
    var u = r("yexJo");
    var g = /*#__PURE__*/function (_d$Cloneable) {
      function g(e, t) {
        var _this28;
        _classCallCheck(this, g);
        _this28 = _callSuper(this, g), _this28.isReady_ = !1, _this28.isLatest = !1;
        var s = g.baseUrl,
          n = null == t ? void 0 : t.language;
        if (n) try {
          n = g.consentLanguages.parseLanguage(n);
        } catch (e) {
          throw new (0, c.GVLError)("Error during parsing the language: " + e.message);
        }
        if (_this28.lang_ = n || g.DEFAULT_LANGUAGE, _this28.cacheLang_ = n || g.DEFAULT_LANGUAGE, _this28.isVendorList(e)) _this28.populate(e), _this28.readyPromise = Promise.resolve();else {
          if (!s) throw new (0, c.GVLError)("must specify GVL.baseUrl before loading GVL json");
          e > 0 ? g.CACHE.has(e) ? (_this28.populate(g.CACHE.get(e)), _this28.readyPromise = Promise.resolve()) : (s += g.versionedFilename.replace("[VERSION]", String(e)), _this28.readyPromise = _this28.fetchJson(s)) : g.CACHE.has(g.LATEST_CACHE_KEY) ? (_this28.populate(g.CACHE.get(g.LATEST_CACHE_KEY)), _this28.readyPromise = Promise.resolve()) : (_this28.isLatest = !0, _this28.readyPromise = _this28.fetchJson(s + g.latestFilename));
        }
        return _this28;
      }
      _inherits(g, _d$Cloneable);
      return _createClass(g, [{
        key: "cacheLanguage",
        value: function cacheLanguage() {
          g.LANGUAGE_CACHE.has(this.cacheLang_) || g.LANGUAGE_CACHE.set(this.cacheLang_, {
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            dataCategories: this.dataCategories
          });
        }
      }, {
        key: "fetchJson",
        value: function fetchJson(e) {
          return (0, n._)(function () {
            var t, s, n;
            return (0, a._)(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2,, 3]), s = (t = this).populate, [4, l.Json.fetch(e)];
                case 1:
                  return s.apply(t, [i.sent()]), [3, 3];
                case 2:
                  throw n = i.sent(), new (0, c.GVLError)(n.message);
                case 3:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getJson",
        value: function getJson() {
          return (0, o._)((0, i._)({
            gvlSpecificationVersion: this.gvlSpecificationVersion,
            vendorListVersion: this.vendorListVersion,
            tcfPolicyVersion: this.tcfPolicyVersion,
            lastUpdated: this.lastUpdated,
            purposes: this.clonePurposes(),
            specialPurposes: this.cloneSpecialPurposes(),
            features: this.cloneFeatures(),
            specialFeatures: this.cloneSpecialFeatures(),
            stacks: this.cloneStacks()
          }, this.dataCategories ? {
            dataCategories: this.cloneDataCategories()
          } : {}), {
            vendors: this.cloneVendors()
          });
        }
      }, {
        key: "cloneSpecialFeatures",
        value: function cloneSpecialFeatures() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.specialFeatures)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.cloneFeature(this.specialFeatures[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "cloneFeatures",
        value: function cloneFeatures() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.features)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.cloneFeature(this.features[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "cloneStacks",
        value: function cloneStacks() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.stacks)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.cloneStack(this.stacks[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "cloneDataCategories",
        value: function cloneDataCategories() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.dataCategories)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.cloneDataCategory(this.dataCategories[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "cloneSpecialPurposes",
        value: function cloneSpecialPurposes() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.specialPurposes)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.clonePurpose(this.specialPurposes[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "clonePurposes",
        value: function clonePurposes() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.purposes)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.clonePurpose(this.purposes[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "cloneVendors",
        value: function cloneVendors() {
          var e = {},
            t = !0,
            s = !1,
            n = void 0;
          try {
            for (var i, r = Object.keys(this.fullVendorList)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
              var o = i.value;
              e[o] = g.cloneVendor(this.fullVendorList[o]);
            }
          } catch (e) {
            s = !0, n = e;
          } finally {
            try {
              t || null == r.return || r.return();
            } finally {
              if (s) throw n;
            }
          }
          return e;
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(e) {
          return (0, n._)(function () {
            var t, s, n, i, r;
            return (0, a._)(this, function (o) {
              switch (o.label) {
                case 0:
                  t = e;
                  try {
                    t = g.consentLanguages.parseLanguage(e);
                  } catch (e) {
                    throw new (0, c.GVLError)("Error during parsing the language: " + e.message);
                  }
                  if (s = e.toUpperCase(), t.toLowerCase() === g.DEFAULT_LANGUAGE.toLowerCase() && !g.LANGUAGE_CACHE.has(s)) return [2];
                  if (t === this.lang_) return [3, 5];
                  if (this.lang_ = t, !g.LANGUAGE_CACHE.has(s)) return [3, 1];
                  for (var a in n = g.LANGUAGE_CACHE.get(s)) n.hasOwnProperty(a) && (this[a] = n[a]);
                  return [3, 5];
                case 1:
                  i = g.baseUrl + g.languageFilename.replace("[LANG]", this.lang_.toLowerCase()), o.label = 2;
                case 2:
                  return o.trys.push([2, 4,, 5]), [4, this.fetchJson(i)];
                case 3:
                  return o.sent(), this.cacheLang_ = s, this.cacheLanguage(), [3, 5];
                case 4:
                  throw r = o.sent(), new (0, c.GVLError)("unable to load language: " + r.message);
                case 5:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "language",
        get: function get() {
          return this.lang_;
        }
      }, {
        key: "isVendorList",
        value: function isVendorList(e) {
          return void 0 !== e && void 0 !== e.vendors;
        }
      }, {
        key: "populate",
        value: function populate(e) {
          this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.stacks = e.stacks, this.dataCategories = e.dataCategories, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors_ = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.isReady_ = !0, this.isLatest && g.CACHE.set(g.LATEST_CACHE_KEY, this.getJson()), g.CACHE.has(this.vendorListVersion) || g.CACHE.set(this.vendorListVersion, this.getJson())), this.cacheLanguage();
        }
      }, {
        key: "mapVendors",
        value: function mapVendors(e) {
          var _this29 = this;
          this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach(function (e) {
            _this29.byPurposeVendorMap[e] = {
              legInt: new Set(),
              consent: new Set(),
              flexible: new Set()
            };
          }), Object.keys(this.specialPurposes).forEach(function (e) {
            _this29.bySpecialPurposeVendorMap[e] = new Set();
          }), Object.keys(this.features).forEach(function (e) {
            _this29.byFeatureVendorMap[e] = new Set();
          }), Object.keys(this.specialFeatures).forEach(function (e) {
            _this29.bySpecialFeatureVendorMap[e] = new Set();
          }), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map(function (e) {
            return +e;
          })), this.vendorIds = new Set(e), this.vendors_ = e.reduce(function (e, t) {
            var s = _this29.vendors_[String(t)];
            return s && void 0 === s.deletedDate && (s.purposes.forEach(function (e) {
              _this29.byPurposeVendorMap[String(e)].consent.add(t);
            }), s.specialPurposes.forEach(function (e) {
              _this29.bySpecialPurposeVendorMap[String(e)].add(t);
            }), s.legIntPurposes.forEach(function (e) {
              _this29.byPurposeVendorMap[String(e)].legInt.add(t);
            }), s.flexiblePurposes && s.flexiblePurposes.forEach(function (e) {
              _this29.byPurposeVendorMap[String(e)].flexible.add(t);
            }), s.features.forEach(function (e) {
              _this29.byFeatureVendorMap[String(e)].add(t);
            }), s.specialFeatures.forEach(function (e) {
              _this29.bySpecialFeatureVendorMap[String(e)].add(t);
            }), e[t] = s), e;
          }, {});
        }
      }, {
        key: "getFilteredVendors",
        value: function getFilteredVendors(e, t, s, n) {
          var _this30 = this;
          var i = e.charAt(0).toUpperCase() + e.slice(1),
            r = {};
          return ("purpose" === e && s ? this["by" + i + "VendorMap"][String(t)][s] : this["by" + (n ? "Special" : "") + i + "VendorMap"][String(t)]).forEach(function (e) {
            r[String(e)] = _this30.vendors[String(e)];
          }), r;
        }
      }, {
        key: "getVendorsWithConsentPurpose",
        value: function getVendorsWithConsentPurpose(e) {
          return this.getFilteredVendors("purpose", e, "consent");
        }
      }, {
        key: "getVendorsWithLegIntPurpose",
        value: function getVendorsWithLegIntPurpose(e) {
          return this.getFilteredVendors("purpose", e, "legInt");
        }
      }, {
        key: "getVendorsWithFlexiblePurpose",
        value: function getVendorsWithFlexiblePurpose(e) {
          return this.getFilteredVendors("purpose", e, "flexible");
        }
      }, {
        key: "getVendorsWithSpecialPurpose",
        value: function getVendorsWithSpecialPurpose(e) {
          return this.getFilteredVendors("purpose", e, void 0, !0);
        }
      }, {
        key: "getVendorsWithFeature",
        value: function getVendorsWithFeature(e) {
          return this.getFilteredVendors("feature", e);
        }
      }, {
        key: "getVendorsWithSpecialFeature",
        value: function getVendorsWithSpecialFeature(e) {
          return this.getFilteredVendors("feature", e, void 0, !0);
        }
      }, {
        key: "vendors",
        get: function get() {
          return this.vendors_;
        }
      }, {
        key: "narrowVendorsTo",
        value: function narrowVendorsTo(e) {
          this.mapVendors(e);
        }
      }, {
        key: "isReady",
        get: function get() {
          return this.isReady_;
        }
      }, {
        key: "clone",
        value: function clone() {
          var e = new g(this.getJson());
          return this.lang_ !== g.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e;
        }
      }], [{
        key: "baseUrl",
        get: function get() {
          return this.baseUrl_;
        },
        set: function set(e) {
          if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e)) throw new (0, c.GVLError)("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
          e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), this.baseUrl_ = e;
        }
      }, {
        key: "emptyLanguageCache",
        value: function emptyLanguageCache(e) {
          var t = !1;
          return null == e && g.LANGUAGE_CACHE.size > 0 ? (g.LANGUAGE_CACHE = new Map(), t = !0) : "string" == typeof e && this.consentLanguages.has(e.toUpperCase()) && (g.LANGUAGE_CACHE.delete(e.toUpperCase()), t = !0), t;
        }
      }, {
        key: "emptyCache",
        value: function emptyCache(e) {
          var t = !1;
          return Number.isInteger(e) && e >= 0 ? (g.CACHE.delete(e), t = !0) : void 0 === e && (g.CACHE = new Map(), t = !0), t;
        }
      }, {
        key: "clonePurpose",
        value: function clonePurpose(e) {
          return (0, i._)({
            id: e.id,
            name: e.name,
            description: e.description
          }, e.descriptionLegal ? {
            descriptionLegal: e.descriptionLegal
          } : {}, e.illustrations ? {
            illustrations: Array.from(e.illustrations)
          } : {});
        }
      }, {
        key: "cloneFeature",
        value: function cloneFeature(e) {
          return (0, i._)({
            id: e.id,
            name: e.name,
            description: e.description
          }, e.descriptionLegal ? {
            descriptionLegal: e.descriptionLegal
          } : {}, e.illustrations ? {
            illustrations: Array.from(e.illustrations)
          } : {});
        }
      }, {
        key: "cloneDataCategory",
        value: function cloneDataCategory(e) {
          return {
            id: e.id,
            name: e.name,
            description: e.description
          };
        }
      }, {
        key: "cloneStack",
        value: function cloneStack(e) {
          return {
            id: e.id,
            name: e.name,
            description: e.description,
            purposes: Array.from(e.purposes),
            specialFeatures: Array.from(e.specialFeatures)
          };
        }
      }, {
        key: "cloneDataRetention",
        value: function cloneDataRetention(e) {
          return (0, o._)((0, i._)({}, "number" == typeof e.stdRetention ? {
            stdRetention: e.stdRetention
          } : {}), {
            purposes: (0, i._)({}, e.purposes),
            specialPurposes: (0, i._)({}, e.specialPurposes)
          });
        }
      }, {
        key: "cloneVendorUrls",
        value: function cloneVendorUrls(e) {
          return e.map(function (e) {
            return (0, i._)({
              langId: e.langId,
              privacy: e.privacy
            }, e.legIntClaim ? {
              legIntClaim: e.legIntClaim
            } : {});
          });
        }
      }, {
        key: "cloneVendor",
        value: function cloneVendor(e) {
          return (0, i._)({
            id: e.id,
            name: e.name,
            purposes: Array.from(e.purposes),
            legIntPurposes: Array.from(e.legIntPurposes),
            flexiblePurposes: Array.from(e.flexiblePurposes),
            specialPurposes: Array.from(e.specialPurposes),
            features: Array.from(e.features),
            specialFeatures: Array.from(e.specialFeatures)
          }, e.overflow ? {
            overflow: {
              httpGetLimit: e.overflow.httpGetLimit
            }
          } : {}, "number" == typeof e.cookieMaxAgeSeconds || null === e.cookieMaxAgeSeconds ? {
            cookieMaxAgeSeconds: e.cookieMaxAgeSeconds
          } : {}, void 0 !== e.usesCookies ? {
            usesCookies: e.usesCookies
          } : {}, e.policyUrl ? {
            policyUrl: e.policyUrl
          } : {}, void 0 !== e.cookieRefresh ? {
            cookieRefresh: e.cookieRefresh
          } : {}, void 0 !== e.usesNonCookieAccess ? {
            usesNonCookieAccess: e.usesNonCookieAccess
          } : {}, e.dataRetention ? {
            dataRetention: this.cloneDataRetention(e.dataRetention)
          } : {}, e.urls ? {
            urls: this.cloneVendorUrls(e.urls)
          } : {}, e.dataDeclaration ? {
            dataDeclaration: Array.from(e.dataDeclaration)
          } : {}, e.deviceStorageDisclosureUrl ? {
            deviceStorageDisclosureUrl: e.deviceStorageDisclosureUrl
          } : {}, e.deletedDate ? {
            deletedDate: e.deletedDate
          } : {});
        }
      }, {
        key: "isInstanceOf",
        value: function isInstanceOf(e) {
          return "object" == _typeof(e) && "function" == typeof e.narrowVendorsTo;
        }
      }]);
    }(d.Cloneable);
    g.LANGUAGE_CACHE = new Map(), g.CACHE = new Map(), g.LATEST_CACHE_KEY = 0, g.DEFAULT_LANGUAGE = "EN", g.consentLanguages = new (0, u.ConsentLanguages)(), g.latestFilename = "vendor-list.json", g.versionedFilename = "archives/vendor-list-v[VERSION].json", g.languageFilename = "purposes-[LANG].json";
  }), o("cDUZw", function (t, s) {
    e(t.exports, "Json", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, null, [{
        key: "absCall",
        value: function absCall(e, t, s, _n2) {
          return new Promise(function (i, r) {
            var o = new XMLHttpRequest();
            o.withCredentials = s, o.addEventListener("load", function () {
              if (o.readyState == XMLHttpRequest.DONE) if (o.status >= 200 && o.status < 300) {
                var e = o.response;
                if ("string" == typeof e) try {
                  e = JSON.parse(e);
                } catch (e) {}
                i(e);
              } else r(Error("HTTP Status: ".concat(o.status, " response type: ").concat(o.responseType)));
            }), o.addEventListener("error", function () {
              r(Error("error"));
            }), o.addEventListener("abort", function () {
              r(Error("aborted"));
            }), null === t ? o.open("GET", e, !0) : o.open("POST", e, !0), o.responseType = "json", o.timeout = _n2, o.ontimeout = function () {
              r(Error("Timeout " + _n2 + "ms " + e));
            }, o.send(t);
          });
        }
      }, {
        key: "post",
        value: function post(e, t) {
          var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            _n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return this.absCall(e, JSON.stringify(t), s, _n3);
        }
      }, {
        key: "fetch",
        value: function fetch(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.absCall(e, null, t, s);
        }
      }]);
    }();
  }), o("lzUuO", function (t, s) {
    e(t.exports, "TCModel", function () {
      return c;
    }), r("da6wO");
    var n = r("1i9Hj"),
      i = r("3cb3k"),
      o = r("LFTvj"),
      a = r("cf8E3");
    r("h8RQ7");
    var d = r("diQDB");
    var c = /*#__PURE__*/function (_o$Cloneable2) {
      function c(e) {
        var _this31;
        _classCallCheck(this, c);
        _this31 = _callSuper(this, c), _this31.isServiceSpecific_ = !0, _this31.supportOOB_ = !1, _this31.useNonStandardTexts_ = !1, _this31.purposeOneTreatment_ = !1, _this31.publisherCountryCode_ = "AA", _this31.version_ = 2, _this31.consentScreen_ = 0, _this31.policyVersion_ = 5, _this31.consentLanguage_ = "EN", _this31.cmpId_ = 0, _this31.cmpVersion_ = 0, _this31.vendorListVersion_ = 0, _this31.numCustomPurposes_ = 0, _this31.addtlConsent_ = "", _this31.enableAdvertiserConsentMode_ = !1, _this31.specialFeatureOptins = new (0, i.Vector)(), _this31.purposeConsents = new (0, i.Vector)(), _this31.purposeLegitimateInterests = new (0, i.Vector)(), _this31.publisherConsents = new (0, i.Vector)(), _this31.publisherLegitimateInterests = new (0, i.Vector)(), _this31.publisherCustomConsents = new (0, i.Vector)(), _this31.publisherCustomLegitimateInterests = new (0, i.Vector)(), _this31.vendorConsents = new (0, i.Vector)(), _this31.vendorLegitimateInterests = new (0, i.Vector)(), _this31.vendorsDisclosed = new (0, i.Vector)(), _this31.vendorsAllowed = new (0, i.Vector)(), _this31.publisherRestrictions = new (0, n.PurposeRestrictionVector)(), e && (_this31.gvl = e), _this31.updated();
        return _this31;
      }
      _inherits(c, _o$Cloneable2);
      return _createClass(c, [{
        key: "gvl",
        get: function get() {
          return this.gvl_;
        },
        set: function set(e) {
          a.GVL.isInstanceOf(e) || (e = new (0, a.GVL)(e)), this.gvl_ = e, this.publisherRestrictions.gvl = e;
        }
      }, {
        key: "cmpId",
        get: function get() {
          return this.cmpId_;
        },
        set: function set(e) {
          if (Number.isInteger(e = Number(e)) && e > 1) this.cmpId_ = e;else throw new (0, d.TCModelError)("cmpId", e);
        }
      }, {
        key: "cmpVersion",
        get: function get() {
          return this.cmpVersion_;
        },
        set: function set(e) {
          if (Number.isInteger(e = Number(e)) && e > -1) this.cmpVersion_ = e;else throw new (0, d.TCModelError)("cmpVersion", e);
        }
      }, {
        key: "consentScreen",
        get: function get() {
          return this.consentScreen_;
        },
        set: function set(e) {
          if (Number.isInteger(e = Number(e)) && e > -1) this.consentScreen_ = e;else throw new (0, d.TCModelError)("consentScreen", e);
        }
      }, {
        key: "consentLanguage",
        get: function get() {
          return this.consentLanguage_;
        },
        set: function set(e) {
          this.consentLanguage_ = e;
        }
      }, {
        key: "publisherCountryCode",
        get: function get() {
          return this.publisherCountryCode_;
        },
        set: function set(e) {
          if (/^([A-z]){2}$/.test(e)) this.publisherCountryCode_ = e.toUpperCase();else throw new (0, d.TCModelError)("publisherCountryCode", e);
        }
      }, {
        key: "vendorListVersion",
        get: function get() {
          return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_;
        },
        set: function set(e) {
          if ((e = 0 | Number(e)) < 0) throw new (0, d.TCModelError)("vendorListVersion", e);
          this.vendorListVersion_ = e;
        }
      }, {
        key: "policyVersion",
        get: function get() {
          return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_;
        },
        set: function set(e) {
          if (this.policyVersion_ = parseInt(e, 10), this.policyVersion_ < 0) throw new (0, d.TCModelError)("policyVersion", e);
        }
      }, {
        key: "version",
        get: function get() {
          return this.version_;
        },
        set: function set(e) {
          this.version_ = parseInt(e, 10);
        }
      }, {
        key: "isServiceSpecific",
        get: function get() {
          return this.isServiceSpecific_;
        },
        set: function set(e) {
          this.isServiceSpecific_ = e;
        }
      }, {
        key: "useNonStandardTexts",
        get: function get() {
          return this.useNonStandardTexts_;
        },
        set: function set(e) {
          this.useNonStandardTexts_ = e;
        }
      }, {
        key: "supportOOB",
        get: function get() {
          return this.supportOOB_;
        },
        set: function set(e) {
          this.supportOOB_ = e;
        }
      }, {
        key: "addtlConsent",
        get: function get() {
          return this.addtlConsent_;
        },
        set: function set(e) {
          this.addtlConsent_ = e || "";
        }
      }, {
        key: "enableAdvertiserConsentMode",
        get: function get() {
          return this.enableAdvertiserConsentMode_;
        },
        set: function set(e) {
          this.enableAdvertiserConsentMode_ = !0 === e;
        }
      }, {
        key: "purposeOneTreatment",
        get: function get() {
          return this.purposeOneTreatment_;
        },
        set: function set(e) {
          this.purposeOneTreatment_ = e;
        }
      }, {
        key: "setAllVendorConsents",
        value: function setAllVendorConsents() {
          this.vendorConsents.set(this.gvl.vendors);
        }
      }, {
        key: "unsetAllVendorConsents",
        value: function unsetAllVendorConsents() {
          this.vendorConsents.empty();
        }
      }, {
        key: "setAllVendorsDisclosed",
        value: function setAllVendorsDisclosed() {
          this.vendorsDisclosed.set(this.gvl.vendors);
        }
      }, {
        key: "unsetAllVendorsDisclosed",
        value: function unsetAllVendorsDisclosed() {
          this.vendorsDisclosed.empty();
        }
      }, {
        key: "setAllVendorsAllowed",
        value: function setAllVendorsAllowed() {
          this.vendorsAllowed.set(this.gvl.vendors);
        }
      }, {
        key: "unsetAllVendorsAllowed",
        value: function unsetAllVendorsAllowed() {
          this.vendorsAllowed.empty();
        }
      }, {
        key: "setAllVendorLegitimateInterests",
        value: function setAllVendorLegitimateInterests() {
          this.vendorLegitimateInterests.set(this.gvl.vendors);
        }
      }, {
        key: "unsetAllVendorLegitimateInterests",
        value: function unsetAllVendorLegitimateInterests() {
          this.vendorLegitimateInterests.empty();
        }
      }, {
        key: "setAllPurposeConsents",
        value: function setAllPurposeConsents() {
          this.purposeConsents.set(this.gvl.purposes);
        }
      }, {
        key: "unsetAllPurposeConsents",
        value: function unsetAllPurposeConsents() {
          this.purposeConsents.empty();
        }
      }, {
        key: "setAllPurposeLegitimateInterests",
        value: function setAllPurposeLegitimateInterests() {
          this.purposeLegitimateInterests.set(this.gvl.purposes);
        }
      }, {
        key: "unsetAllPurposeLegitimateInterests",
        value: function unsetAllPurposeLegitimateInterests() {
          this.purposeLegitimateInterests.empty();
        }
      }, {
        key: "setAllPublisherConsents",
        value: function setAllPublisherConsents() {
          this.publisherConsents.set(this.gvl.purposes);
        }
      }, {
        key: "unsetAllPublisherConsents",
        value: function unsetAllPublisherConsents() {
          this.publisherConsents.empty();
        }
      }, {
        key: "setAllPublisherLegitimateInterests",
        value: function setAllPublisherLegitimateInterests() {
          this.publisherLegitimateInterests.set(this.gvl.purposes);
        }
      }, {
        key: "unsetAllPublisherLegitimateInterests",
        value: function unsetAllPublisherLegitimateInterests() {
          this.publisherLegitimateInterests.empty();
        }
      }, {
        key: "setAllSpecialFeatureOptins",
        value: function setAllSpecialFeatureOptins() {
          this.specialFeatureOptins.set(this.gvl.specialFeatures);
        }
      }, {
        key: "unsetAllSpecialFeatureOptins",
        value: function unsetAllSpecialFeatureOptins() {
          this.specialFeatureOptins.empty();
        }
      }, {
        key: "setAll",
        value: function setAll() {
          this.setAllVendorConsents(), this.setAllPurposeLegitimateInterests(), this.setAllSpecialFeatureOptins(), this.setAllPurposeConsents(), this.setAllPublisherConsents(), this.setAllPublisherLegitimateInterests(), this.setAllVendorLegitimateInterests();
        }
      }, {
        key: "unsetAll",
        value: function unsetAll() {
          this.unsetAllVendorConsents(), this.unsetAllPurposeLegitimateInterests(), this.unsetAllSpecialFeatureOptins(), this.unsetAllPurposeConsents(), this.unsetAllPublisherConsents(), this.unsetAllPublisherLegitimateInterests(), this.unsetAllVendorLegitimateInterests();
        }
      }, {
        key: "numCustomPurposes",
        get: function get() {
          var e = this.numCustomPurposes_;
          return "object" == _typeof(this.customPurposes) && (e = parseInt(Object.keys(this.customPurposes).sort(function (e, t) {
            return Number(e) - Number(t);
          }).pop(), 10)), e;
        },
        set: function set(e) {
          if (this.numCustomPurposes_ = parseInt(e, 10), this.numCustomPurposes_ < 0) throw new (0, d.TCModelError)("numCustomPurposes", e);
        }
      }, {
        key: "updated",
        value: function updated() {
          var e = new Date(),
            t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
          this.created = t, this.lastUpdated = t;
        }
      }]);
    }(o.Cloneable);
    c.consentLanguages = a.GVL.consentLanguages;
  }), o("eOikM", function (t, s) {
    e(t.exports, "TCString", function () {
      return g;
    }), r("2gIjD");
    var n = r("a8XsK"),
      i = r("gJimg"),
      o = r("1VjWu"),
      a = r("2w7UM"),
      d = r("8HYVk");
    r("da6wO");
    var c = r("adfKh"),
      l = r("kFiBL"),
      u = r("lzUuO");
    var g = /*#__PURE__*/function () {
      function g() {
        _classCallCheck(this, g);
      }
      return _createClass(g, null, [{
        key: "encode",
        value: function encode(e, t) {
          var s,
            n = "";
          return e = d.SemanticPreEncoder.process(e, t), (s = Array.isArray(null == t ? void 0 : t.segments) ? t.segments : new (0, a.SegmentSequence)(e, t)["" + e.version]).forEach(function (t, i) {
            var r = "";
            i < s.length - 1 && (r = "."), n += o.SegmentEncoder.encode(e, t) + r;
          }), n;
        }
      }, {
        key: "decode",
        value: function decode(e, t) {
          var s = e.split("."),
            r = s.length;
          t || (t = new (0, u.TCModel)());
          for (var a = 0; a < r; a++) {
            var d = s[a],
              _g = n.Base64Url.decode(d.charAt(0)).substr(0, i.BitLength.segmentType),
              E = c.SegmentIDs.ID_TO_KEY[l.IntEncoder.decode(_g, i.BitLength.segmentType).toString()];
            o.SegmentEncoder.decode(d, t, E);
          }
          return t;
        }
      }]);
    }();
  }), o("2hIpA", function (s, n) {
    e(s.exports, "CmpDataRequestModel", function () {
      return r("168i4").CmpDataRequestModel;
    }), e(s.exports, "DpsModel", function () {
      return r("i9l4q").DpsModel;
    }), e(s.exports, "GoogleConsentModeModel", function () {
      return r("5TDlN").GoogleConsentModeModel;
    }), e(s.exports, "LanguagesModel", function () {
      return r("9zx7v").LanguagesModel;
    }), e(s.exports, "SettingModel", function () {
      return r("d2W83").SettingModel;
    }), e(s.exports, "TcfModel", function () {
      return r("6Zkqq").TcfModel;
    }), e(s.exports, "TemplateModel", function () {
      return r("OkLRq").TemplateModel;
    }), e(s.exports, "ThemeModel", function () {
      return r("aSHyZ").ThemeModel;
    }), e(s.exports, "UiModel", function () {
      return r("5N1IW").UiModel;
    }), e(s.exports, "UetModel", function () {
      return r("dH0Qb").UetModel;
    }), e(s.exports, "IntegrationsModel", function () {
      return r("hN3Ja").IntegrationsModel;
    }), r("df9nB"), r("168i4"), r("i9l4q"), r("5TDlN");
    var i = r("5bEzQ");
    r("14GuN"), r("9zx7v"), r("d2W83"), r("6Zkqq"), r("OkLRq"), r("aSHyZ"), r("5N1IW"), r("dH0Qb"), r("hN3Ja"), t(s.exports, i);
  }), o("168i4", function (t, s) {
    e(t.exports, "CmpDataRequestModel", function () {
      return u;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("dmwAz"),
      a = r("bY6u9"),
      d = r("1ylHI"),
      c = r("e08dO"),
      l = r("2VgZK");
    var u = /*#__PURE__*/function () {
      function u(e, t) {
        _classCallCheck(this, u);
        var s,
          n,
          r,
          o,
          d,
          c,
          _u3 = e.location,
          g = e.settingsCoreData,
          E = t.isBot,
          p = t.isGppActive,
          h = t.consentData,
          S = t.language,
          I = t.draft,
          _ = t.legislationView,
          C = t.sandbox,
          T = t.theme,
          N = t.abVariant,
          O = this.getSettingsType(_u3, g, _);
        this.params = {
          version: a.API_VERSION,
          settingsId: g.id,
          activeSettingsVersion: g.version,
          previousSettingsVersion: (null == h ? void 0 : h.setting.version) || g.version,
          language: (0, l.getLanguage)(g.languages, S || (null == h ? void 0 : h.language)),
          settingsType: O
        };
        var v = this.getIsOutsideEu(_u3),
          m = null == (s = g.tcf) ? void 0 : s.vendorsListVersion,
          A = h && (null == (n = h.vendorsList) ? void 0 : n.version) || (null == (r = g.tcf) ? void 0 : r.vendorsListVersion),
          f = h && (null == (o = h.vendorsList) ? void 0 : o.policyVersion) || (null == (d = g.tcf) ? void 0 : d.policyVersion);
        if (this.query = (0, i._)({}, v && {
          isOutsideEu: v
        }, E && {
          isBot: E
        }, p && {
          isGppActive: p
        }, g.ruleSetNoShow && {
          ruleSetNoShow: g.ruleSetNoShow
        }, m && {
          activeTcfVendorsListVersion: m
        }, A && {
          previousTcfVendorsListVersion: A
        }, f && {
          previousTcfPolicyVersion: f
        }, C && {
          sandbox: C
        }, I && {
          draft: I
        }, T && "uc" !== T && {
          theme: T
        }, v && p && {
          location: "".concat(_u3.country, ",").concat(_u3.region)
        }), h) {
          var U = h.setting,
            b = U.abVariant,
            D = U.sandbox,
            V = U.draft;
          this.query = (0, i._)({}, this.query, b && {
            abVariant: b
          }, D && {
            sandbox: D
          }, V && {
            draft: V
          });
        }
        this.abTesting = g.abTesting, N && (null == (c = g.abTesting) ? void 0 : c.variants.includes(N)) && (this.query.abVariant = N);
      }
      return _createClass(u, [{
        key: "getSettingsType",
        value: function getSettingsType(e, t, s) {
          var n = t.ccpa,
            i = t.tcf,
            r = t.pipeda,
            o = t.cipa;
          if (s) return {
            cpra: "US",
            vcdpa: "US",
            cpa: "US",
            ctdpa: "US",
            ucpa: "US",
            ccpa: "US",
            gdpr: "GDPR",
            tcf: "TCF",
            tcf2: "TCF",
            uk_tcf2: "TCF",
            uk_gdpr: "GDPR",
            pipeda: "GDPR",
            cipa: "GDPR"
          }[s];
          if (i) return "TCF";
          if (r || o) return "GDPR";
          if (null == n ? void 0 : n.regions) for (var a in n.regions) {
            var d = n.regions[a];
            if (["ALL", "".concat(e.country).concat(e.region), "".concat(e.country)].includes(d)) return "US";
          }
          return "GDPR";
        }
      }, {
        key: "applyAbVariant",
        value: function applyAbVariant(e) {
          return (0, n._)(function () {
            var t, s;
            return (0, o._)(this, function (n) {
              var _this32 = this;
              if (!e) throw Error("A/B Testing is not defined");
              return (t = e.variants, s = e.provider, this.query.abVariant && t.includes(this.query.abVariant)) ? [2, this.query.abVariant] : "internal" === s ? (this.query.abVariant = t[Math.floor(Math.random() * t.length)], [2, this.query.abVariant]) : [2, new Promise(function (e, s) {
                var n = function n() {
                    var n = window.UC_AB_VARIANT;
                    n && (clearTimeout(i), clearInterval(r), t.includes(n) ? (_this32.query.abVariant = n, e(_this32.query.abVariant)) : s(Error("window.UC_AB_VARIANT = '".concat(n, "' is not a valid variant"))));
                  },
                  i = setTimeout(function () {
                    s(Error("window.UC_AB_VARIANT not found after 2000ms"));
                  }, 2e3),
                  r = setInterval(n, 25);
              })];
            });
          }).call(this);
        }
      }, {
        key: "getIsOutsideEu",
        value: function getIsOutsideEu(e) {
          return !d.EU_COUNTRIES.includes(e.country.toUpperCase());
        }
      }, {
        key: "getRequestData",
        value: function getRequestData() {
          return (0, n._)(function () {
            return (0, o._)(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!this.abTesting) return [3, 2];
                  return [4, this.applyAbVariant(this.abTesting).catch(function (e) {
                    c.UCConsole.warn("BrowserSdk - init", "", e.message);
                  })];
                case 1:
                  e.sent(), e.label = 2;
                case 2:
                  return [2, {
                    params: this.params,
                    query: this.query
                  }];
              }
            });
          }).call(this);
        }
      }]);
    }();
  }), o("1ylHI", function (t, s) {
    e(t.exports, "EU_COUNTRIES", function () {
      return n;
    });
    var n = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "IS", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"];
  }), o("2VgZK", function (t, s) {
    e(t.exports, "getLanguage", function () {
      return i;
    });
    var n = function n(e, t) {
        if ("string" == typeof t) {
          var s = t.toLowerCase().replace("-", "_");
          if (e.includes(s)) return s;
          var n = t.slice(0, 2);
          if (e.includes(n)) return n;
        }
      },
      i = function i(e, t) {
        if (t && e.includes(t)) return t;
        var s = n(e, document.documentElement.lang);
        if (s) return s;
        var i = navigator.languages || [navigator.language];
        if (i && i.length) for (var r in i) {
          var o = n(e, i[r]);
          if (o) return o;
        }
        return e[0];
      };
  }), o("i9l4q", function (t, s) {
    e(t.exports, "DpsModel", function () {
      return o;
    });
    var n = r("7qJ26"),
      i = r("bY6u9");
    var o = /*#__PURE__*/function () {
      function o(e, t) {
        _classCallCheck(this, o);
        var s = e.services,
          n = e.categories,
          i = e.granularConsentDisabled;
        this.localStorageService = t, this.init({
          services: s,
          categories: n,
          granularConsentDisabled: i
        });
      }
      return _createClass(o, [{
        key: "init",
        value: function init(e) {
          var t = e.services,
            s = e.categories,
            n = e.granularConsentDisabled;
          this.services = t, this.categories = s, this.granularConsentDisabled = n, this.applyZeroDpsCategoryConsentsFromLocalStorage(), this._services = JSON.parse(JSON.stringify(t)), this._categories = JSON.parse(JSON.stringify(s)), this._granularConsentDisabled = n;
        }
      }, {
        key: "acceptAll",
        value: function acceptAll() {
          var _this33 = this;
          Object.keys(this.services).forEach(function (e) {
            _this33.services[e].consent = {
              given: !0,
              type: "EXPLICIT"
            };
          }), Object.keys(this.categories).forEach(function (e) {
            _this33.categories[e].state = "ALL_ACCEPTED";
          }), this.updatedBy = "onAcceptAllServices", this.updateInitialState();
        }
      }, {
        key: "denyAll",
        value: function denyAll() {
          var _this34 = this;
          Object.keys(this.services).forEach(function (e) {
            _this34.services[e].consent = {
              given: !0 === _this34.services[e].essential,
              type: "EXPLICIT"
            };
          }), Object.keys(this.categories).forEach(function (e) {
            _this34.categories[e].state = _this34.categories[e].essential ? "ALL_ACCEPTED" : "ALL_DENIED";
          }), this.updatedBy = "onDenyAllServices", this.updateInitialState();
        }
      }, {
        key: "acceptSome",
        value: function acceptSome(e) {
          this.denyAll(), this.updateSome(e);
        }
      }, {
        key: "denySome",
        value: function denySome(e) {
          this.acceptAll(), this.updateSome(e);
        }
      }, {
        key: "updateSome",
        value: function updateSome(e) {
          var _this35 = this;
          var t = this.getZeroDpsCategoryStates();
          e.forEach(function (e) {
            var t = e.id,
              s = e.consent;
            _this35.services[t].consent = {
              given: !0 === s,
              type: "EXPLICIT"
            };
          }), this.categories = (0, i.getCategoriesWithServicesConsent)(this.categories, this.services), this.restoreZeroDpsCategoryStates(t), this.updatedBy = "onUpdateServices";
        }
      }, {
        key: "updateCategoriesConsents",
        value: function updateCategoriesConsents(e) {
          var _this36 = this;
          var t = this.getZeroDpsCategoryStates();
          e.forEach(function (e) {
            var t = e.id,
              s = e.consent,
              i = _this36.categories[t];
            i && i.dps && Object.entries(i.dps).forEach(function (e) {
              var t = (0, n._)(e, 1)[0];
              _this36.services[t].consent = {
                given: i.essential || !0 === s,
                type: "EXPLICIT"
              };
            });
          }), this.categories = (0, i.getCategoriesWithServicesConsent)(this.categories, this.services), this.restoreZeroDpsCategoryStates(t), this.applyZeroDpsCategoryConsents(e), this.updatedBy = "onUpdateServices";
        }
      }, {
        key: "getAcceptedServices",
        value: function getAcceptedServices() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id";
          return Object.entries(this.services).reduce(function (t, s) {
            var i,
              r = (0, n._)(s, 2),
              _o2 = r[0],
              a = r[1];
            return (null == (i = a.consent) ? void 0 : i.given) && (t["id" === e ? _o2 : a.name] = a), a.subservices && Object.entries(a.subservices).forEach(function (s) {
              var i = (0, n._)(s, 2)[1];
              t["id" === e ? _o2 : i.name] = i;
            }), t;
          }, {});
        }
      }, {
        key: "getServicesConsents",
        value: function getServicesConsents() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id";
          return Object.entries(this.services).reduce(function (t, s) {
            var i,
              r = (0, n._)(s, 2),
              _o3 = r[0],
              a = r[1];
            return t["id" === e ? _o3 : a.name] = (null == (i = a.consent) ? void 0 : i.given) === !0, a.subservices && Object.entries(a.subservices).forEach(function (s) {
              var i,
                r = (0, n._)(s, 2)[1];
              t["id" === e ? _o3 : r.name] = (null == (i = r.consent) ? void 0 : i.given) === !0;
            }), t;
          }, {});
        }
      }, {
        key: "getCategoriesConsents",
        value: function getCategoriesConsents() {
          return Object.entries(this.categories).reduce(function (e, t) {
            var s = (0, n._)(t, 2),
              i = s[0],
              r = s[1];
            return e[i] = r.state, e;
          }, {});
        }
      }, {
        key: "getCategoryConsent",
        value: function getCategoryConsent(e) {
          var t,
            s = null == (t = this.categories[e]) ? void 0 : t.state;
          if (s) return s;
        }
      }, {
        key: "getCategoryIdFromServiceId",
        value: function getCategoryIdFromServiceId(e) {
          return this.services[e].category;
        }
      }, {
        key: "getConsentStatus",
        value: function getConsentStatus() {
          var e = 0,
            t = 0,
            s = 0,
            i = 0;
          return (Object.entries(this.services).forEach(function (r) {
            var _o4,
              a,
              d = (0, n._)(r, 2)[1];
            e++, (null == (_o4 = d.consent) ? void 0 : _o4.given) === !1 ? t++ : d.essential ? i++ : (null == (a = d.consent) ? void 0 : a.given) === !0 && s++;
          }), 0 === t) ? "ALL_ACCEPTED" : t + i >= e ? "ALL_DENIED" : s < t ? "SOME_ACCEPTED" : "SOME_DENIED";
        }
      }, {
        key: "getConsentServiceIds",
        value: function getConsentServiceIds(e) {
          var t = e || this.getConsentStatus();
          return "ALL_ACCEPTED" === t || "ALL_DENIED" === t ? [] : Object.entries(this.services).reduce(function (e, s) {
            var i,
              r,
              _o5 = (0, n._)(s, 2),
              a = _o5[0],
              d = _o5[1];
            return "SOME_ACCEPTED" !== t || d.essential || (null == (i = d.consent) ? void 0 : i.given) !== !0 ? "SOME_DENIED" === t && (null == (r = d.consent) ? void 0 : r.given) === !1 && e.push(a) : e.push(a), e;
          }, []);
        }
      }, {
        key: "getService",
        value: function getService(e) {
          if (this.services[e]) return this.services[e];
          var t = (0, n._)(Object.entries(this.services).find(function (t) {
            var s = (0, n._)(t, 2)[1];
            return s.subservices && s.subservices[e];
          }) || [], 2)[1];
          if (t && t.subservices) return t.subservices[e];
        }
      }, {
        key: "resetDpsModel",
        value: function resetDpsModel() {
          this.init({
            services: JSON.parse(JSON.stringify(this._services)),
            categories: JSON.parse(JSON.stringify(this._categories)),
            granularConsentDisabled: this._granularConsentDisabled
          });
        }
      }, {
        key: "updateInitialState",
        value: function updateInitialState() {
          this._services = JSON.parse(JSON.stringify(this.services)), this._categories = JSON.parse(JSON.stringify(this.categories)), this._granularConsentDisabled = this.granularConsentDisabled;
        }
      }, {
        key: "getZeroDpsCategoryStates",
        value: function getZeroDpsCategoryStates() {
          var e = {};
          return Object.entries(this.categories).forEach(function (t) {
            var s = (0, n._)(t, 2),
              i = s[0],
              r = s[1];
            r.dps && 0 !== Object.keys(r.dps).length || (e[i] = r.state);
          }), e;
        }
      }, {
        key: "restoreZeroDpsCategoryStates",
        value: function restoreZeroDpsCategoryStates(e) {
          var _this37 = this;
          Object.entries(e).forEach(function (e) {
            var t = (0, n._)(e, 2),
              s = t[0],
              i = t[1];
            _this37.categories[s] && (_this37.categories[s].state = i);
          });
        }
      }, {
        key: "applyZeroDpsCategoryConsents",
        value: function applyZeroDpsCategoryConsents(e) {
          var _this38 = this;
          e.forEach(function (e) {
            var t = e.id,
              s = e.consent,
              n = _this38.categories[t];
            n && (!n.dps || 0 === Object.keys(n.dps).length) && (n.state = s ? "ALL_ACCEPTED" : "ALL_DENIED");
          });
        }
      }, {
        key: "applyZeroDpsCategoryConsentsFromLocalStorage",
        value: function applyZeroDpsCategoryConsentsFromLocalStorage() {
          var _this39 = this;
          if (this.localStorageService) {
            var e,
              t = this.localStorageService.getUcData(),
              s = null == t || null == (e = t.consent) ? void 0 : e.categories;
            s && Object.entries(s).forEach(function (e) {
              var t = (0, n._)(e, 2),
                s = t[0],
                i = t[1],
                r = _this39.categories[s];
              r && (!r.dps || 0 === Object.keys(r.dps).length) && "ALL_DENIED" === r.state && !0 === i.consent && (r.state = "ALL_ACCEPTED");
            });
          }
        }
      }]);
    }();
  }), o("5TDlN", function (t, s) {
    e(t.exports, "GoogleConsentModeModel", function () {
      return i;
    });
    var n = r("7qJ26");
    var i = /*#__PURE__*/function () {
      function i(e, t, s) {
        _classCallCheck(this, i);
        this.developerId = e.developerId, this.localStorageService = t, this.customEventService = s, this.push("set", e.developerId, !0);
      }
      return _createClass(i, [{
        key: "push",
        value: function push() {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
          t && t.length && (window.dataLayer || (window.dataLayer = []), window.dataLayer.push(arguments));
        }
      }, {
        key: "getGcmState",
        value: function getGcmState(e, t) {
          var s = {};
          return t && (s.adStorage = t.consent), Object.entries(e).forEach(function (e) {
            var _i,
              r,
              o,
              a,
              d = (0, n._)(e, 2)[1];
            (null == (_i = d.gcm) ? void 0 : _i.analyticsStorage) && (null == (r = d.consent) ? void 0 : r.given) && (s.analyticsStorage = !0), !t && (null == (o = d.gcm) ? void 0 : o.adStorage) && (s.adStorage = (null == (a = d.consent) ? void 0 : a.given) && (!0 === s.adStorage || void 0 === s.adStorage)), s.adsDataRedaction = !0 !== s.adStorage;
          }), s;
        }
      }, {
        key: "apply",
        value: function apply(e, t, s) {
          var n = this.getGcmState(t, s),
            _i2 = n.analyticsStorage,
            r = n.adStorage,
            o = n.adsDataRedaction,
            a = {
              adsDataRedaction: o,
              adStorage: r ? "granted" : "denied",
              adPersonalization: r ? "granted" : "denied",
              adUserData: r ? "granted" : "denied",
              analyticsStorage: _i2 ? "granted" : "denied"
            };
          ("EXPLICIT" === e || "denied" !== a.adStorage || "denied" !== a.analyticsStorage) && this.push("consent", "update", {
            ad_storage: a.adStorage,
            ad_personalization: a.adPersonalization,
            ad_user_data: a.adUserData,
            analytics_storage: a.analyticsStorage
          }), this.localStorageService.setGcmData(a), this.push("set", "ads_data_redaction", !0 === o), this.customEventService.dispatchUcGcmUpdateEvent(a);
        }
      }]);
    }();
  }), o("5bEzQ", function (t, s) {
    e(t.exports, "GppModel", function () {
      return c;
    });
    var n = r("bY8oy");
    r("6Xqt8");
    var i = r("U6O7W"),
      o = r("cbQHu"),
      a = r("eMMfk"),
      d = r("6B46q");
    var c = /*#__PURE__*/function () {
      function c(e, t) {
        var _this40 = this;
        _classCallCheck(this, c);
        var s = e.cmpId,
          r = e.cmpVersion,
          _c = e.mspa,
          l = t.currentLocation,
          u = t.consentData;
        this.consentType = "IMPLICIT", this.usString = "", this.setCmpSignalReady = function () {
          _this40.gppApi.setSignalStatus(d.SignalStatus.READY);
        }, this.setCmpSignalNotReady = function () {
          _this40.gppApi.setSignalStatus(d.SignalStatus.NOT_READY);
        }, this.setCmpStatusLoaded = function () {
          _this40.gppApi.setCmpStatus(a.CmpStatus.LOADED);
        }, this.setCmpDisplayDisabled = function () {
          _this40.gppApi.setCmpDisplayStatus(o.CmpDisplayStatus.DISABLED);
        }, this.setCmpDisplayHidden = function () {
          _this40.gppApi.setCmpDisplayStatus(o.CmpDisplayStatus.HIDDEN);
        }, this.setCmpDisplayVisible = function () {
          _this40.gppApi.setCmpDisplayStatus(o.CmpDisplayStatus.VISIBLE);
        }, this.setSectionString = function (e, t) {
          "" !== t && (_this40.gppApi.setSectionString(e, t), _this40.gppApi.fireSectionChange(e), _this40.gppApi.getGppString());
        }, this.gppApi = new (0, i.CmpApi)(s, r), this.gppApi.setSupportedAPIs(["7:usnat", "13:usfl"]), this.mspa = _c, u ? (this.usString = u.usnatString || u.usflString || "", this.gppApi.setGppString(this.usString), l && "FL" === l.region && u.usnatString ? (this.hasOptedOut = this.gppApi.getFieldValue("usnat", "SaleOptOut"), this.gppApi.deleteSection("usnat"), this.legalSection = "usfl", this.generateUsflString()) : l && "FL" !== l.region && u.usflString ? (this.hasOptedOut = this.gppApi.getFieldValue("usfl", "SaleOptOut"), this.gppApi.deleteSection("usfl"), this.legalSection = "usnat", this.generateUsnatString()) : (this.legalSection = Object.keys(n.APPLICABLE_SECTIONS).find(function (e) {
          return n.APPLICABLE_SECTIONS[e] === _this40.gppApi.getSectionIds()[0];
        }) || "usnat", this.hasOptedOut = this.gppApi.getFieldValue(this.legalSection, "SaleOptOut")), this.hasMspaChanged(this.legalSection) && this.generateUsString()) : (this.hasOptedOut = 2, this.legalSection = (null == l ? void 0 : l.region) === "FL" ? "usfl" : "usnat");
      }
      return _createClass(c, [{
        key: "resetGpp",
        value: function resetGpp() {
          this.gppApi = {};
        }
      }, {
        key: "getGppLegalFramework",
        value: function getGppLegalFramework(e, t) {
          var s = "usnat";
          return "TCF" === e && (s = "tcfeuv2"), (null == t ? void 0 : t.country) === "US" && (null == t ? void 0 : t.region) === "FL" && (s = "usfl"), this.legalSection = s, s;
        }
      }, {
        key: "setNoticeFields",
        value: function setNoticeFields(e) {
          var t = +("SERVICE_PROVIDER" !== this.mspa.mode);
          this.gppApi.setFieldValue(e, "SaleOptOutNotice", t), this.gppApi.setFieldValue(e, "TargetedAdvertisingOptOutNotice", t), "usfl" === e && this.gppApi.setFieldValue(e, "ProcessingNotice", t), "usnat" === e && (this.gppApi.setFieldValue(e, "SharingNotice", t), this.gppApi.setFieldValue(e, "SharingOptOutNotice", t), this.gppApi.setFieldValue(e, "SensitiveDataProcessingOptOutNotice", 0), this.gppApi.setFieldValue(e, "SensitiveDataLimitUseNotice", 0));
        }
      }, {
        key: "getOptOutValue",
        value: function getOptOutValue(e) {
          switch (this.mspa.mode) {
            case "SERVICE_PROVIDER":
              return 0;
            case "OPT_OUT_OPTION":
              return this.hasOptedOut;
            default:
              return e;
          }
        }
      }, {
        key: "setOptOutFields",
        value: function setOptOutFields(e) {
          var t = this.gppApi.getFieldValue(e, "SaleOptOutNotice"),
            s = this.gppApi.getFieldValue(e, "TargetedAdvertisingOptOutNotice"),
            n = 0 === t ? 0 : this.hasOptedOut,
            i = 0 === s ? 0 : this.hasOptedOut;
          if (this.gppApi.setFieldValue(e, "SaleOptOut", this.getOptOutValue(n)), this.gppApi.setFieldValue(e, "TargetedAdvertisingOptOut", this.getOptOutValue(i)), "usnat" === e) {
            var r = 0 === this.gppApi.getFieldValue(e, "SharingOptOutNotice") ? 0 : this.hasOptedOut;
            this.gppApi.setFieldValue(e, "SharingOptOut", this.getOptOutValue(r));
          }
        }
      }, {
        key: "setSpecialFields",
        value: function setSpecialFields(e) {
          var t = "usfl" === e ? [0, 0, 0, 0, 0, 0, 0, 0] : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.gppApi.setFieldValue(e, "SensitiveDataProcessing", t), this.gppApi.setFieldValue(e, "KnownChildSensitiveDataConsents", [0, 0, 0]), "usfl" === e && this.gppApi.setFieldValue(e, "AdditionalDataProcessingConsent", 0), "usnat" === e && this.gppApi.setFieldValue(e, "PersonalDataConsents", 0);
        }
      }, {
        key: "computeMspaValues",
        value: function computeMspaValues() {
          var e = this.mspa.coveredTransaction ? 1 : 2,
            t = "OPT_OUT_OPTION" === this.mspa.mode ? 1 : 2,
            s = "SERVICE_PROVIDER" === this.mspa.mode ? 1 : 2;
          return 2 === e ? (s = 0, t = 0) : (1 === t && (s = 2), 1 === s && (t = 2)), {
            mspaCoveredTransaction: e,
            mspaOptOutOptionMode: t,
            mspaServiceProviderMode: s
          };
        }
      }, {
        key: "setMspaFields",
        value: function setMspaFields(e) {
          var t = this.computeMspaValues(),
            s = t.mspaCoveredTransaction,
            n = t.mspaOptOutOptionMode,
            i = t.mspaServiceProviderMode;
          this.gppApi.setFieldValue(e, "MspaCoveredTransaction", s), this.gppApi.setFieldValue(e, "MspaOptOutOptionMode", n), this.gppApi.setFieldValue(e, "MspaServiceProviderMode", i);
        }
      }, {
        key: "hasMspaChanged",
        value: function hasMspaChanged(e) {
          var t = this.computeMspaValues(),
            s = t.mspaCoveredTransaction,
            n = t.mspaOptOutOptionMode,
            i = t.mspaServiceProviderMode;
          return this.getGppApiValue(e, "MspaCoveredTransaction") !== s || this.getGppApiValue(e, "MspaOptOutOptionMode") !== n || this.getGppApiValue(e, "MspaServiceProviderMode") !== i;
        }
      }, {
        key: "setHasOptedOut",
        value: function setHasOptedOut(e, t) {
          this.hasOptedOut = e ? 1 : 2, this.consentType = t;
        }
      }, {
        key: "setApplicableSections",
        value: function setApplicableSections(e, t) {
          var s = this.getGppLegalFramework(e, t);
          try {
            this.gppApi.setApplicableSections([n.APPLICABLE_SECTIONS[s]]);
          } catch (e) {
            throw Error("GppService - setApplicableSections - unrecognized legal framework \"".concat(s, "\""));
          }
        }
      }, {
        key: "getCmpSignalStatus",
        value: function getCmpSignalStatus() {
          return this.gppApi.getSignalStatus();
        }
      }, {
        key: "setUsString",
        value: function setUsString(e) {
          this.gppApi.setGppString(e);
        }
      }, {
        key: "generateUsString",
        value: function generateUsString() {
          return "usfl" === this.legalSection ? this.generateUsflString() : this.generateUsnatString();
        }
      }, {
        key: "getLegalSection",
        value: function getLegalSection() {
          return this.legalSection;
        }
      }, {
        key: "getHasOptedOut",
        value: function getHasOptedOut() {
          return 1 === this.hasOptedOut;
        }
      }, {
        key: "getGppApiValue",
        value: function getGppApiValue(e, t) {
          return this.gppApi.getFieldValue(e, t);
        }
      }, {
        key: "getGppSignalStatus",
        value: function getGppSignalStatus() {
          return this.gppApi.getSignalStatus();
        }
      }, {
        key: "getGppCmpDisplayStatus",
        value: function getGppCmpDisplayStatus() {
          return this.gppApi.getCmpDisplayStatus();
        }
      }, {
        key: "generateUsnatString",
        value: function generateUsnatString() {
          switch (this.gppApi.setFieldValue("usnat", "Version", n.USNAT_VERSION), this.setNoticeFields("usnat"), this.setOptOutFields("usnat"), this.setSpecialFields("usnat"), this.setMspaFields("usnat"), +(void 0 !== navigator.globalPrivacyControl)) {
            case 0:
              this.gppApi.setFieldValue("usnat", "GpcSegmentIncluded", !1), this.gppApi.setFieldValue("usnat", "GpcSegmentType", 1);
              break;
            case 1:
              this.gppApi.setFieldValue("usnat", "GpcSegmentIncluded", !0), this.gppApi.setFieldValue("usnat", "GpcSegmentType", 1), this.gppApi.setFieldValue("usnat", "Gpc", navigator.globalPrivacyControl);
          }
          this.usString = this.gppApi.getGppString();
        }
      }, {
        key: "generateUsflString",
        value: function generateUsflString() {
          this.gppApi.setFieldValue("usfl", "Version", n.USFL_VERSION), this.setNoticeFields("usfl"), this.setOptOutFields("usfl"), this.setSpecialFields("usfl"), this.setMspaFields("usfl"), this.usString = this.gppApi.getGppString();
        }
      }]);
    }();
  }), o("bY8oy", function (t, s) {
    e(t.exports, "USNAT_VERSION", function () {
      return n;
    }), e(t.exports, "USFL_VERSION", function () {
      return i;
    }), e(t.exports, "APPLICABLE_SECTIONS", function () {
      return r;
    });
    var n = 2,
      i = 1,
      r = {
        tcfeuv1: 1,
        tcfeuv2: 2,
        tcfcav1: 5,
        uspv1: 6,
        usnat: 7,
        usca: 8,
        usva: 9,
        usco: 10,
        usut: 11,
        usct: 12,
        usfl: 13,
        usmt: 14,
        usor: 15,
        ustx: 16,
        usde: 17,
        usia: 18,
        usne: 19,
        usnh: 20,
        usnj: 21,
        ustn: 22,
        usmn: 23,
        usmd: 24,
        usin: 25,
        usky: 26,
        usri: 27
      };
  }), o("6Xqt8", function (t, s) {
    e(t.exports, "CmpDisplayStatus", function () {
      return r("cbQHu").CmpDisplayStatus;
    }), e(t.exports, "CmpStatus", function () {
      return r("eMMfk").CmpStatus;
    }), e(t.exports, "SignalStatus", function () {
      return r("6B46q").SignalStatus;
    }), e(t.exports, "TcfEuV2", function () {
      return r("igY57").TcfEuV2;
    }), e(t.exports, "CmpApi", function () {
      return r("U6O7W").CmpApi;
    }), r("gYeMi"), r("hQv2v"), r("6LOat"), r("U6O7W"), r("1TqZZ");
  }), o("gYeMi", function (t, s) {
    e(t.exports, "CmpDisplayStatus", function () {
      return r("cbQHu").CmpDisplayStatus;
    }), e(t.exports, "CmpStatus", function () {
      return r("eMMfk").CmpStatus;
    }), e(t.exports, "SignalStatus", function () {
      return r("6B46q").SignalStatus;
    }), r("8SWdL"), r("f5I3V"), r("7dt2I"), r("4Ylmq"), r("gYEQg"), r("cPNIZ"), r("l47Jh");
  }), o("8SWdL", function (e, t) {
    r("KTbii"), r("7MdGO"), r("1GYYS"), r("5TMlH"), r("jKumQ"), r("jEASc"), r("f9nK7"), r("aejef"), r("6LnaB"), r("iIEDR");
  }), o("KTbii", function (t, s) {
    e(t.exports, "AddEventListenerCommand", function () {
      return a;
    });
    var n = r("7MdGO"),
      i = r("8u7XV"),
      o = r("1EaI4");
    var a = /*#__PURE__*/function (_n$Command) {
      function a() {
        _classCallCheck(this, a);
        return _callSuper(this, a, arguments);
      }
      _inherits(a, _n$Command);
      return _createClass(a, [{
        key: "respond",
        value: function respond() {
          var e = this.cmpApiContext.eventQueue.add({
              callback: this.callback,
              parameter: this.parameter
            }),
            t = new (0, i.EventData)("listenerRegistered", e, !0, new (0, o.PingData)(this.cmpApiContext));
          this.invokeCallback(t);
        }
      }]);
    }(n.Command);
  }), o("7MdGO", function (t, s) {
    e(t.exports, "Command", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e, t, s) {
        _classCallCheck(this, n);
        this.success = !0, this.cmpApiContext = e, Object.assign(this, {
          callback: t,
          parameter: s
        });
      }
      return _createClass(n, [{
        key: "execute",
        value: function execute() {
          try {
            return this.respond();
          } catch (e) {
            return this.invokeCallback(null), null;
          }
        }
      }, {
        key: "invokeCallback",
        value: function invokeCallback(e) {
          this.callback && this.callback(e, null !== e);
        }
      }]);
    }();
  }), o("8u7XV", function (t, s) {
    e(t.exports, "EventData", function () {
      return n;
    });
    var n = /*#__PURE__*/_createClass(function n(e, t, s, _n4) {
      _classCallCheck(this, n);
      this.eventName = e, this.listenerId = t, this.data = s, this.pingData = _n4;
    });
  }), o("1EaI4", function (t, s) {
    e(t.exports, "PingData", function () {
      return n;
    });
    var n = /*#__PURE__*/_createClass(function n(e) {
      _classCallCheck(this, n);
      this.gppVersion = e.gppVersion, this.cmpStatus = e.cmpStatus, this.cmpDisplayStatus = e.cmpDisplayStatus, this.signalStatus = e.signalStatus, this.supportedAPIs = e.supportedAPIs, this.cmpId = e.cmpId, this.sectionList = e.gppModel.getSectionIds(), this.applicableSections = e.applicableSections, this.gppString = e.gppModel.encode(), this.parsedSections = e.gppModel.toObject();
    });
  }), o("1GYYS", function (e, t) {}), o("5TMlH", function (t, s) {
    e(t.exports, "CommandMap", function () {
      return I;
    });
    var n,
      i,
      o,
      a,
      d,
      c,
      l = r("KTbii"),
      u = r("jKumQ"),
      g = r("jEASc"),
      E = r("f9nK7"),
      p = r("aejef"),
      h = r("6LnaB"),
      S = r("iIEDR");
    var I = /*#__PURE__*/_createClass(function I() {
      _classCallCheck(this, I);
    });
    n = E.GppCommand.ADD_EVENT_LISTENER, i = E.GppCommand.GET_FIELD, o = E.GppCommand.GET_SECTION, a = E.GppCommand.HAS_SECTION, d = E.GppCommand.PING, c = E.GppCommand.REMOVE_EVENT_LISTENER, I[n] = l.AddEventListenerCommand, I[i] = u.GetFieldCommand, I[o] = g.GetSectionCommand, I[a] = p.HasSectionCommand, I[d] = h.PingCommand, I[c] = S.RemoveEventListenerCommand;
  }), o("jKumQ", function (t, s) {
    e(t.exports, "GetFieldCommand", function () {
      return o;
    }), r("6Xqt8");
    var n = r("igY57"),
      i = r("7MdGO");
    var o = /*#__PURE__*/function (_i$Command) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _i$Command);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          if (!this.parameter || 0 === this.parameter.length) throw Error("<section>.<field> parameter required");
          var e = this.parameter.split(".");
          if (2 != e.length) throw Error("Field name must be in the format <section>.<fieldName>");
          var t = e[0],
            s = e[1],
            i = null;
          t !== n.TcfEuV2.NAME && (i = this.cmpApiContext.gppModel.getFieldValue(t, s)), this.invokeCallback(i);
        }
      }]);
    }(i.Command);
  }), o("jEASc", function (t, s) {
    e(t.exports, "GetSectionCommand", function () {
      return o;
    }), r("6Xqt8");
    var n = r("igY57"),
      i = r("7MdGO");
    var o = /*#__PURE__*/function (_i$Command2) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _i$Command2);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          if (!this.parameter || 0 === this.parameter.length) throw Error("<section> parameter required");
          var e = null;
          this.parameter !== n.TcfEuV2.NAME && this.cmpApiContext.gppModel.hasSection(this.parameter) && (e = this.cmpApiContext.gppModel.getSection(this.parameter)), this.invokeCallback(e);
        }
      }]);
    }(i.Command);
  }), o("f9nK7", function (t, s) {
    e(t.exports, "GppCommand", function () {
      return i;
    });
    var n,
      i = ((n = {}).ADD_EVENT_LISTENER = "addEventListener", n.GET_FIELD = "getField", n.GET_SECTION = "getSection", n.HAS_SECTION = "hasSection", n.PING = "ping", n.REMOVE_EVENT_LISTENER = "removeEventListener", n);
  }), o("aejef", function (t, s) {
    e(t.exports, "HasSectionCommand", function () {
      return i;
    });
    var n = r("7MdGO");
    var i = /*#__PURE__*/function (_n$Command2) {
      function i() {
        _classCallCheck(this, i);
        return _callSuper(this, i, arguments);
      }
      _inherits(i, _n$Command2);
      return _createClass(i, [{
        key: "respond",
        value: function respond() {
          if (!this.parameter || 0 === this.parameter.length) throw Error("<section>[.version] parameter required");
          var e = this.cmpApiContext.gppModel.hasSection(this.parameter);
          this.invokeCallback(e);
        }
      }]);
    }(n.Command);
  }), o("6LnaB", function (t, s) {
    e(t.exports, "PingCommand", function () {
      return o;
    });
    var n = r("7MdGO"),
      i = r("1EaI4");
    var o = /*#__PURE__*/function (_n$Command3) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _n$Command3);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          var e = new (0, i.PingData)(this.cmpApiContext);
          this.invokeCallback(e);
        }
      }]);
    }(n.Command);
  }), o("iIEDR", function (t, s) {
    e(t.exports, "RemoveEventListenerCommand", function () {
      return a;
    });
    var n = r("7MdGO"),
      i = r("8u7XV"),
      o = r("1EaI4");
    var a = /*#__PURE__*/function (_n$Command4) {
      function a() {
        _classCallCheck(this, a);
        return _callSuper(this, a, arguments);
      }
      _inherits(a, _n$Command4);
      return _createClass(a, [{
        key: "respond",
        value: function respond() {
          var e = this.parameter,
            t = this.cmpApiContext.eventQueue.remove(e),
            s = new (0, i.EventData)("listenerRemoved", e, t, new (0, o.PingData)(this.cmpApiContext));
          this.invokeCallback(s);
        }
      }]);
    }(n.Command);
  }), o("f5I3V", function (e, t) {
    r("8u7XV"), r("1EaI4");
  }), o("7dt2I", function (t, s) {
    e(t.exports, "CmpStatus", function () {
      return r("eMMfk").CmpStatus;
    }), e(t.exports, "CmpDisplayStatus", function () {
      return r("cbQHu").CmpDisplayStatus;
    }), e(t.exports, "SignalStatus", function () {
      return r("6B46q").SignalStatus;
    }), r("eMMfk"), r("cbQHu"), r("ky1VT"), r("6B46q");
  }), o("eMMfk", function (t, s) {
    e(t.exports, "CmpStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).STUB = "stub", n.LOADING = "loading", n.LOADED = "loaded", n.ERROR = "error", n);
  }), o("cbQHu", function (t, s) {
    e(t.exports, "CmpDisplayStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).VISIBLE = "visible", n.HIDDEN = "hidden", n.DISABLED = "disabled", n);
  }), o("ky1VT", function (e, t) {}), o("6B46q", function (t, s) {
    e(t.exports, "SignalStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).NOT_READY = "not ready", n.READY = "ready", n);
  }), o("4Ylmq", function (t, s) {
    e(t.exports, "CallResponder", function () {
      return o;
    });
    var n = r("5TMlH"),
      i = r("f9nK7");
    var o = /*#__PURE__*/function () {
      function o(e, t) {
        _classCallCheck(this, o);
        if (this.cmpApiContext = e, t) {
          var s = i.GppCommand.ADD_EVENT_LISTENER;
          if ((null == t ? void 0 : t[s]) || (s = i.GppCommand.REMOVE_EVENT_LISTENER, null == t ? void 0 : t[s])) throw Error("Built-In Custom Commmand for ".concat(s, " not allowed"));
          this.customCommands = t;
        }
        try {
          this.callQueue = window.__gpp() || [];
        } catch (e) {
          this.callQueue = [];
        } finally {
          window.__gpp = this.apiCall.bind(this), this.purgeQueuedCalls();
        }
      }
      return _createClass(o, [{
        key: "apiCall",
        value: function apiCall(e, t, s, i) {
          if ("string" != typeof e) t(null, !1);else if (t && "function" != typeof t) throw Error("invalid callback function");else this.isCustomCommand(e) ? this.customCommands[e](t, s) : this.isBuiltInCommand(e) ? new n.CommandMap[e](this.cmpApiContext, t, s).execute() : t && t(null, !1);
        }
      }, {
        key: "purgeQueuedCalls",
        value: function purgeQueuedCalls() {
          var e = this.callQueue;
          this.callQueue = [], e.forEach(function (e) {
            var _window;
            (_window = window).__gpp.apply(_window, _toConsumableArray(e));
          });
        }
      }, {
        key: "isCustomCommand",
        value: function isCustomCommand(e) {
          return this.customCommands && "function" == typeof this.customCommands[e];
        }
      }, {
        key: "isBuiltInCommand",
        value: function isBuiltInCommand(e) {
          return void 0 !== n.CommandMap[e];
        }
      }]);
    }();
  }), o("gYEQg", function (t, s) {
    e(t.exports, "CmpApiContext", function () {
      return c;
    });
    var n = r("cbQHu"),
      i = r("eMMfk"),
      o = r("l47Jh"),
      a = r("bcvSg"),
      d = r("6B46q");
    var c = /*#__PURE__*/function () {
      function c() {
        _classCallCheck(this, c);
        this.gppVersion = "1.1", this.supportedAPIs = [], this.eventQueue = new (0, o.EventListenerQueue)(this), this.cmpStatus = i.CmpStatus.LOADING, this.cmpDisplayStatus = n.CmpDisplayStatus.HIDDEN, this.signalStatus = d.SignalStatus.NOT_READY, this.applicableSections = [], this.gppModel = new (0, a.GppModel)();
      }
      return _createClass(c, [{
        key: "reset",
        value: function reset() {
          this.eventQueue.clear(), this.cmpStatus = i.CmpStatus.LOADING, this.cmpDisplayStatus = n.CmpDisplayStatus.HIDDEN, this.signalStatus = d.SignalStatus.NOT_READY, this.applicableSections = [], this.supportedAPIs = [], this.gppModel = new (0, a.GppModel)(), delete this.cmpId, delete this.cmpVersion, delete this.eventStatus;
        }
      }]);
    }();
  }), o("l47Jh", function (t, s) {
    e(t.exports, "EventListenerQueue", function () {
      return o;
    });
    var n = r("8u7XV"),
      i = r("1EaI4");
    var o = /*#__PURE__*/function () {
      function o(e) {
        _classCallCheck(this, o);
        this.eventQueue = new Map(), this.queueNumber = 1e3, this.cmpApiContext = e;
        try {
          for (var t = window.__gpp("events") || [], s = 0; s < t.length; s++) {
            var n = t[s];
            this.eventQueue.set(n.id, {
              callback: n.callback,
              parameter: n.parameter
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
      return _createClass(o, [{
        key: "add",
        value: function add(e) {
          return this.eventQueue.set(this.queueNumber, e), this.queueNumber++;
        }
      }, {
        key: "get",
        value: function get(e) {
          return this.eventQueue.get(e);
        }
      }, {
        key: "remove",
        value: function remove(e) {
          return this.eventQueue.delete(e);
        }
      }, {
        key: "exec",
        value: function exec(e, t) {
          var _this41 = this;
          this.eventQueue.forEach(function (s, r) {
            var _o6 = new (0, n.EventData)(e, r, t, new (0, i.PingData)(_this41.cmpApiContext));
            s.callback(_o6, !0);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.queueNumber = 1e3, this.eventQueue.clear();
        }
      }, {
        key: "size",
        get: function get() {
          return this.eventQueue.size;
        }
      }]);
    }();
  }), o("bcvSg", function (t, s) {
    e(t.exports, "GppModel", function () {
      return b;
    });
    var n = r("i5YrW"),
      i = r("cfpaP"),
      o = r("6vMY0"),
      a = r("befIz"),
      d = r("fRDWE"),
      c = r("dbMko"),
      l = r("igY57"),
      u = r("eiAIf"),
      g = r("apkKM"),
      E = r("jH5V0"),
      p = r("4Q1MM"),
      h = r("gN6FU"),
      S = r("cgeNI"),
      I = r("iE2As"),
      _ = r("abpmD"),
      C = r("aHRLr"),
      T = r("2SZay"),
      N = r("725FB"),
      O = r("3farY"),
      v = r("lOurV"),
      m = r("imKjv"),
      A = r("5rUbP"),
      f = r("bdTlG"),
      U = r("cbTmj");
    var b = /*#__PURE__*/function () {
      function b(e) {
        _classCallCheck(this, b);
        this.sections = new Map(), this.encodedString = null, this.decoded = !0, this.dirty = !1, e && this.decode(e);
      }
      return _createClass(b, [{
        key: "setFieldValue",
        value: function setFieldValue(e, t, s) {
          this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0);
          var n = null;
          if (this.sections.has(e) ? n = this.sections.get(e) : e === c.TcfCaV1.NAME ? (n = new (0, c.TcfCaV1)(), this.sections.set(c.TcfCaV1.NAME, n)) : e === l.TcfEuV2.NAME ? (n = new (0, l.TcfEuV2)(), this.sections.set(l.TcfEuV2.NAME, n)) : e === U.UspV1.NAME ? (n = new (0, U.UspV1)(), this.sections.set(U.UspV1.NAME, n)) : e === _.UsNat.NAME ? (n = new (0, _.UsNat)(), this.sections.set(_.UsNat.NAME, n)) : e === u.UsCa.NAME ? (n = new (0, u.UsCa)(), this.sections.set(u.UsCa.NAME, n)) : e === f.UsVa.NAME ? (n = new (0, f.UsVa)(), this.sections.set(f.UsVa.NAME, n)) : e === g.UsCo.NAME ? (n = new (0, g.UsCo)(), this.sections.set(g.UsCo.NAME, n)) : e === A.UsUt.NAME ? (n = new (0, A.UsUt)(), this.sections.set(A.UsUt.NAME, n)) : e === E.UsCt.NAME ? (n = new (0, E.UsCt)(), this.sections.set(E.UsCt.NAME, n)) : e === h.UsFl.NAME ? (n = new (0, h.UsFl)(), this.sections.set(h.UsFl.NAME, n)) : e === I.UsMt.NAME ? (n = new (0, I.UsMt)(), this.sections.set(I.UsMt.NAME, n)) : e === O.UsOr.NAME ? (n = new (0, O.UsOr)(), this.sections.set(O.UsOr.NAME, n)) : e === m.UsTx.NAME ? (n = new (0, m.UsTx)(), this.sections.set(m.UsTx.NAME, n)) : e === p.UsDe.NAME ? (n = new (0, p.UsDe)(), this.sections.set(p.UsDe.NAME, n)) : e === S.UsIa.NAME ? (n = new (0, S.UsIa)(), this.sections.set(S.UsIa.NAME, n)) : e === C.UsNe.NAME ? (n = new (0, C.UsNe)(), this.sections.set(C.UsNe.NAME, n)) : e === T.UsNh.NAME ? (n = new (0, T.UsNh)(), this.sections.set(T.UsNh.NAME, n)) : e === N.UsNj.NAME ? (n = new (0, N.UsNj)(), this.sections.set(N.UsNj.NAME, n)) : e === v.UsTn.NAME && (n = new (0, v.UsTn)(), this.sections.set(v.UsTn.NAME, n)), n) n.setFieldValue(t, s), this.dirty = !0, n.setIsDirty(!0);else throw new (0, a.InvalidFieldError)(e + "." + t + " not found");
        }
      }, {
        key: "setFieldValueBySectionId",
        value: function setFieldValueBySectionId(e, t, s) {
          this.setFieldValue(d.Sections.SECTION_ID_NAME_MAP.get(e), t, s);
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(e, t) {
          return (this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0), this.sections.has(e)) ? this.sections.get(e).getFieldValue(t) : null;
        }
      }, {
        key: "getFieldValueBySectionId",
        value: function getFieldValueBySectionId(e, t) {
          return this.getFieldValue(d.Sections.SECTION_ID_NAME_MAP.get(e), t);
        }
      }, {
        key: "hasField",
        value: function hasField(e, t) {
          return this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0), !!this.sections.has(e) && this.sections.get(e).hasField(t);
        }
      }, {
        key: "hasFieldBySectionId",
        value: function hasFieldBySectionId(e, t) {
          return this.hasField(d.Sections.SECTION_ID_NAME_MAP.get(e), t);
        }
      }, {
        key: "hasSection",
        value: function hasSection(e) {
          return this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0), this.sections.has(e);
        }
      }, {
        key: "hasSectionId",
        value: function hasSectionId(e) {
          return this.hasSection(d.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(e) {
          !this.decoded && null != this.encodedString && this.encodedString.length > 0 && this.decode(this.encodedString), this.sections.delete(e), this.dirty = !0;
        }
      }, {
        key: "deleteSectionById",
        value: function deleteSectionById(e) {
          this.deleteSection(d.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "clear",
        value: function clear() {
          this.sections.clear(), this.encodedString = "DBAA", this.decoded = !1, this.dirty = !1;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0);
          var e = new (0, i.HeaderV1)();
          return e.setFieldValue("SectionIds", this.getSectionIds()), e.toObj();
        }
      }, {
        key: "getSection",
        value: function getSection(e) {
          return (this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0), this.sections.has(e)) ? this.sections.get(e).toObj() : null;
        }
      }, {
        key: "getSectionIds",
        value: function getSectionIds() {
          this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0);
          for (var e = [], t = 0; t < d.Sections.SECTION_ORDER.length; t++) {
            var s = d.Sections.SECTION_ORDER[t];
            if (this.sections.has(s)) {
              var n = this.sections.get(s);
              e.push(n.getId());
            }
          }
          return e;
        }
      }, {
        key: "encodeModel",
        value: function encodeModel(e) {
          for (var t = [], s = [], n = 0; n < d.Sections.SECTION_ORDER.length; n++) {
            var r = d.Sections.SECTION_ORDER[n];
            if (e.has(r)) {
              var o = e.get(r);
              o.setIsDirty(!0), t.push(o.encode()), s.push(o.getId());
            }
          }
          var a = new (0, i.HeaderV1)();
          return a.setFieldValue("SectionIds", s), t.unshift(a.encode()), t.join("~");
        }
      }, {
        key: "decodeModel",
        value: function decodeModel(e) {
          if (!e || 0 == e.length || e.startsWith("DB")) {
            var t = e.split("~"),
              s = new Map();
            if (t[0].startsWith("D")) {
              var r = new (0, i.HeaderV1)(t[0]).getFieldValue("SectionIds");
              if (r.length !== t.length - 1) throw new (0, n.DecodingError)("Unable to decode '" + e + "'. The number of sections does not match the number of sections defined in the header.");
              for (var a = 0; a < r.length; a++) {
                if ("" === t[a + 1].trim()) throw new (0, n.DecodingError)("Unable to decode '" + e + "'. Section " + (a + 1) + " is blank.");
                if (r[a] === c.TcfCaV1.ID) {
                  var d = new (0, c.TcfCaV1)(t[a + 1]);
                  s.set(c.TcfCaV1.NAME, d);
                } else if (r[a] === l.TcfEuV2.ID) {
                  var _b = new (0, l.TcfEuV2)(t[a + 1]);
                  s.set(l.TcfEuV2.NAME, _b);
                } else if (r[a] === U.UspV1.ID) {
                  var D = new (0, U.UspV1)(t[a + 1]);
                  s.set(U.UspV1.NAME, D);
                } else if (r[a] === _.UsNat.ID) {
                  var V = new (0, _.UsNat)(t[a + 1]);
                  s.set(_.UsNat.NAME, V);
                } else if (r[a] === u.UsCa.ID) {
                  var P = new (0, u.UsCa)(t[a + 1]);
                  s.set(u.UsCa.NAME, P);
                } else if (r[a] === f.UsVa.ID) {
                  var F = new (0, f.UsVa)(t[a + 1]);
                  s.set(f.UsVa.NAME, F);
                } else if (r[a] === g.UsCo.ID) {
                  var L = new (0, g.UsCo)(t[a + 1]);
                  s.set(g.UsCo.NAME, L);
                } else if (r[a] === A.UsUt.ID) {
                  var w = new (0, A.UsUt)(t[a + 1]);
                  s.set(A.UsUt.NAME, w);
                } else if (r[a] === E.UsCt.ID) {
                  var M = new (0, E.UsCt)(t[a + 1]);
                  s.set(E.UsCt.NAME, M);
                } else if (r[a] === h.UsFl.ID) {
                  var R = new (0, h.UsFl)(t[a + 1]);
                  s.set(h.UsFl.NAME, R);
                } else if (r[a] === I.UsMt.ID) {
                  var y = new (0, I.UsMt)(t[a + 1]);
                  s.set(I.UsMt.NAME, y);
                } else if (r[a] === O.UsOr.ID) {
                  var x = new (0, O.UsOr)(t[a + 1]);
                  s.set(O.UsOr.NAME, x);
                } else if (r[a] === m.UsTx.ID) {
                  var G = new (0, m.UsTx)(t[a + 1]);
                  s.set(m.UsTx.NAME, G);
                } else if (r[a] === p.UsDe.ID) {
                  var B = new (0, p.UsDe)(t[a + 1]);
                  s.set(p.UsDe.NAME, B);
                } else if (r[a] === S.UsIa.ID) {
                  var k = new (0, S.UsIa)(t[a + 1]);
                  s.set(S.UsIa.NAME, k);
                } else if (r[a] === C.UsNe.ID) {
                  var Y = new (0, C.UsNe)(t[a + 1]);
                  s.set(C.UsNe.NAME, Y);
                } else if (r[a] === T.UsNh.ID) {
                  var j = new (0, T.UsNh)(t[a + 1]);
                  s.set(T.UsNh.NAME, j);
                } else if (r[a] === N.UsNj.ID) {
                  var H = new (0, N.UsNj)(t[a + 1]);
                  s.set(N.UsNj.NAME, H);
                } else if (r[a] === v.UsTn.ID) {
                  var z = new (0, v.UsTn)(t[a + 1]);
                  s.set(v.UsTn.NAME, z);
                }
              }
            }
            return s;
          }
          if (e.startsWith("C")) {
            var W = new Map(),
              K = new (0, l.TcfEuV2)(e);
            return W.set(l.TcfEuV2.NAME, K), new (0, i.HeaderV1)().setFieldValue(o.HeaderV1Field.SECTION_IDS, [2]), W.set(i.HeaderV1.NAME, K), W;
          }
          throw new (0, n.DecodingError)("Unable to decode '" + e + "'");
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          return (this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0), this.sections.has(e)) ? this.sections.get(e).encode() : null;
        }
      }, {
        key: "encodeSectionById",
        value: function encodeSectionById(e) {
          return this.encodeSection(d.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e, t) {
          this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0);
          var s = null;
          this.sections.has(e) ? s = this.sections.get(e) : e === c.TcfCaV1.NAME ? (s = new (0, c.TcfCaV1)(), this.sections.set(c.TcfCaV1.NAME, s)) : e === l.TcfEuV2.NAME ? (s = new (0, l.TcfEuV2)(), this.sections.set(l.TcfEuV2.NAME, s)) : e === U.UspV1.NAME ? (s = new (0, U.UspV1)(), this.sections.set(U.UspV1.NAME, s)) : e === _.UsNat.NAME ? (s = new (0, _.UsNat)(), this.sections.set(_.UsNat.NAME, s)) : e === u.UsCa.NAME ? (s = new (0, u.UsCa)(), this.sections.set(u.UsCa.NAME, s)) : e === f.UsVa.NAME ? (s = new (0, f.UsVa)(), this.sections.set(f.UsVa.NAME, s)) : e === g.UsCo.NAME ? (s = new (0, g.UsCo)(), this.sections.set(g.UsCo.NAME, s)) : e === A.UsUt.NAME ? (s = new (0, A.UsUt)(), this.sections.set(A.UsUt.NAME, s)) : e === E.UsCt.NAME ? (s = new (0, E.UsCt)(), this.sections.set(E.UsCt.NAME, s)) : e === h.UsFl.NAME ? (s = new (0, h.UsFl)(), this.sections.set(h.UsFl.NAME, s)) : e === I.UsMt.NAME ? (s = new (0, I.UsMt)(), this.sections.set(I.UsMt.NAME, s)) : e === O.UsOr.NAME ? (s = new (0, O.UsOr)(), this.sections.set(O.UsOr.NAME, s)) : e === m.UsTx.NAME ? (s = new (0, m.UsTx)(), this.sections.set(m.UsTx.NAME, s)) : e === p.UsDe.NAME ? (s = new (0, p.UsDe)(), this.sections.set(p.UsDe.NAME, s)) : e === S.UsIa.NAME ? (s = new (0, S.UsIa)(), this.sections.set(S.UsIa.NAME, s)) : e === C.UsNe.NAME ? (s = new (0, C.UsNe)(), this.sections.set(C.UsNe.NAME, s)) : e === T.UsNh.NAME ? (s = new (0, T.UsNh)(), this.sections.set(T.UsNh.NAME, s)) : e === N.UsNj.NAME ? (s = new (0, N.UsNj)(), this.sections.set(N.UsNj.NAME, s)) : e === v.UsTn.NAME && (s = new (0, v.UsTn)(), this.sections.set(v.UsTn.NAME, s)), s && (s.decode(t), this.dirty = !0);
        }
      }, {
        key: "decodeSectionById",
        value: function decodeSectionById(e, t) {
          this.decodeSection(d.Sections.SECTION_ID_NAME_MAP.get(e), t);
        }
      }, {
        key: "toObject",
        value: function toObject() {
          this.decoded || (this.sections = this.decodeModel(this.encodedString), this.dirty = !1, this.decoded = !0);
          for (var e = {}, t = 0; t < d.Sections.SECTION_ORDER.length; t++) {
            var s = d.Sections.SECTION_ORDER[t];
            this.sections.has(s) && (e[s] = this.sections.get(s).toObj());
          }
          return e;
        }
      }, {
        key: "encode",
        value: function encode() {
          return (null == this.encodedString || 0 === this.encodedString.length || this.dirty) && (this.encodedString = this.encodeModel(this.sections), this.dirty = !1, this.decoded = !0), this.encodedString;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          this.encodedString = e, this.dirty = !1, this.decoded = !1;
        }
      }]);
    }();
  }), o("i5YrW", function (t, s) {
    e(t.exports, "DecodingError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error5) {
      function n(e) {
        var _this42;
        _classCallCheck(this, n);
        _this42 = _callSuper(this, n, [e]), _this42.name = "DecodingError";
        return _this42;
      }
      _inherits(n, _Error5);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("cfpaP", function (t, s) {
    e(t.exports, "HeaderV1", function () {
      return o;
    });
    var n = r("1S0eL"),
      i = r("1bj6H");
    var o = /*#__PURE__*/function (_n$AbstractLazilyEnco) {
      function o(e) {
        var _this43;
        _classCallCheck(this, o);
        _this43 = _callSuper(this, o), e && e.length > 0 && _this43.decode(e);
        return _this43;
      }
      _inherits(o, _n$AbstractLazilyEnco);
      return _createClass(o, [{
        key: "getId",
        value: function getId() {
          return o.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return o.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return o.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.HeaderV1CoreSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < t.length; n++) s.length > n && t[n].decode(s[n]);
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          for (var t = [], s = 0; s < e.length; s++) {
            var n = e[s];
            t.push(n.encode());
          }
          return t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    o.ID = 3, o.VERSION = 1, o.NAME = "header";
  }), o("1S0eL", function (t, s) {
    e(t.exports, "AbstractLazilyEncodableSection", function () {
      return o;
    });
    var n = r("7qJ26"),
      i = r("befIz");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
        this.encodedString = null, this.dirty = !1, this.decoded = !0, this.segments = this.initializeSegments();
      }
      return _createClass(o, [{
        key: "hasField",
        value: function hasField(e) {
          this.decoded || (this.segments = this.decodeSection(this.encodedString), this.dirty = !1, this.decoded = !0);
          for (var t = 0; t < this.segments.length; t++) {
            var s = this.segments[t];
            if (s.getFieldNames().includes(e)) return s.hasField(e);
          }
          return !1;
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(e) {
          this.decoded || (this.segments = this.decodeSection(this.encodedString), this.dirty = !1, this.decoded = !0);
          for (var t = 0; t < this.segments.length; t++) {
            var s = this.segments[t];
            if (s.hasField(e)) return s.getFieldValue(e);
          }
          throw new (0, i.InvalidFieldError)("Invalid field: '" + e + "'");
        }
      }, {
        key: "setFieldValue",
        value: function setFieldValue(e, t) {
          this.decoded || (this.segments = this.decodeSection(this.encodedString), this.dirty = !1, this.decoded = !0);
          for (var s = 0; s < this.segments.length; s++) {
            var n = this.segments[s];
            if (n.hasField(e)) return void n.setFieldValue(e, t);
          }
          throw new (0, i.InvalidFieldError)("Invalid field: '" + e + "'");
        }
      }, {
        key: "toObj",
        value: function toObj() {
          for (var e = {}, t = 0; t < this.segments.length; t++) {
            var s = this.segments[t].toObj(),
              i = !0,
              r = !1,
              _o7 = void 0;
            try {
              for (var a, d = Object.entries(s)[Symbol.iterator](); !(i = (a = d.next()).done); i = !0) {
                var c = (0, n._)(a.value, 2),
                  l = c[0],
                  u = c[1];
                e[l] = u;
              }
            } catch (e) {
              r = !0, _o7 = e;
            } finally {
              try {
                i || null == d.return || d.return();
              } finally {
                if (r) throw _o7;
              }
            }
          }
          return e;
        }
      }, {
        key: "encode",
        value: function encode() {
          return (null == this.encodedString || 0 === this.encodedString.length || this.dirty) && (this.encodedString = this.encodeSection(this.segments), this.dirty = !1, this.decoded = !0), this.encodedString;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          this.encodedString = e, this.segments = this.decodeSection(this.encodedString), this.dirty = !1, this.decoded = !1;
        }
      }, {
        key: "setIsDirty",
        value: function setIsDirty(e) {
          this.dirty = e;
        }
      }]);
    }();
  }), o("befIz", function (t, s) {
    e(t.exports, "InvalidFieldError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error6) {
      function n(e) {
        var _this44;
        _classCallCheck(this, n);
        _this44 = _callSuper(this, n, [e]), _this44.name = "InvalidFieldError";
        return _this44;
      }
      _inherits(n, _Error6);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("1bj6H", function (t, s) {
    e(t.exports, "HeaderV1CoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("ibImC"),
      l = r("eUO9E"),
      u = r("6vMY0"),
      g = r("cfpaP");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco2) {
      function E(e) {
        var _this45;
        _classCallCheck(this, E);
        _this45 = _callSuper(this, E), _this45.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this45.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this45.decode(e);
        return _this45;
      }
      _inherits(E, _n$AbstractLazilyEnco2);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.HEADER_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.HeaderV1Field.ID.toString(), new (0, l.EncodableFixedInteger)(6, g.HeaderV1.ID)), e.put(u.HeaderV1Field.VERSION.toString(), new (0, l.EncodableFixedInteger)(6, g.HeaderV1.VERSION)), e.put(u.HeaderV1Field.SECTION_IDS.toString(), new (0, c.EncodableFibonacciIntegerRange)([])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode HeaderV1CoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("3kEY4", function (t, s) {
    e(t.exports, "AbstractLazilyEncodableSegment", function () {
      return i;
    });
    var n = r("befIz");
    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
        this.encodedString = null, this.dirty = !1, this.decoded = !0, this.fields = this.initializeFields();
      }
      return _createClass(i, [{
        key: "validate",
        value: function validate() {}
      }, {
        key: "hasField",
        value: function hasField(e) {
          return this.fields.containsKey(e);
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(e) {
          if (this.decoded || (this.decodeSegment(this.encodedString, this.fields), this.dirty = !1, this.decoded = !0), this.fields.containsKey(e)) return this.fields.get(e).getValue();
          throw new (0, n.InvalidFieldError)("Invalid field: '" + e + "'");
        }
      }, {
        key: "setFieldValue",
        value: function setFieldValue(e, t) {
          if (this.decoded || (this.decodeSegment(this.encodedString, this.fields), this.dirty = !1, this.decoded = !0), this.fields.containsKey(e)) this.fields.get(e).setValue(t), this.dirty = !0;else throw new (0, n.InvalidFieldError)(e + " not found");
        }
      }, {
        key: "toObj",
        value: function toObj() {
          for (var e = {}, t = this.getFieldNames(), s = 0; s < t.length; s++) {
            var n = t[s],
              _i3 = this.getFieldValue(n);
            e[n] = _i3;
          }
          return e;
        }
      }, {
        key: "encode",
        value: function encode() {
          return (null == this.encodedString || 0 === this.encodedString.length || this.dirty) && (this.validate(), this.encodedString = this.encodeSegment(this.fields), this.dirty = !1, this.decoded = !0), this.encodedString;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          this.encodedString = e, this.dirty = !1, this.decoded = !1;
        }
      }]);
    }();
  }), o("67Tmf", function (t, s) {
    e(t.exports, "BitStringEncoder", function () {
      return i;
    });
    var n = r("i5YrW");
    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
      }
      return _createClass(i, [{
        key: "encode",
        value: function encode(e, t) {
          for (var s = "", n = 0; n < t.length; n++) {
            var _i4 = t[n];
            if (e.containsKey(_i4)) s += e.get(_i4).encode();else throw Error("Field not found: '" + _i4 + "'");
          }
          return s;
        }
      }, {
        key: "decode",
        value: function decode(e, t, s) {
          for (var _i5 = 0, r = 0; r < t.length; r++) {
            var o = t[r];
            if (s.containsKey(o)) {
              var a = s.get(o);
              try {
                var d = a.substring(e, _i5);
                a.decode(d), _i5 += d.length;
              } catch (e) {
                if ("SubstringError" === e.name && !a.getHardFailIfMissing()) return;
                throw new (0, n.DecodingError)("Unable to decode field '" + o + "'");
              }
            } else throw Error("Field not found: '" + o + "'");
          }
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this.instance;
        }
      }]);
    }();
    i.instance = new i();
  }), o("1ebbL", function (t, s) {
    e(t.exports, "CompressedBase64UrlEncoder", function () {
      return i;
    });
    var n = r("2zp1f");
    var i = /*#__PURE__*/function (_n$AbstractBase64UrlE) {
      function i() {
        _classCallCheck(this, i);
        return _callSuper(this, i);
      }
      _inherits(i, _n$AbstractBase64UrlE);
      return _createClass(i, [{
        key: "pad",
        value: function pad(e) {
          for (; e.length % 8 > 0;) e += "0";
          for (; e.length % 6 > 0;) e += "0";
          return e;
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this.instance;
        }
      }]);
    }(n.AbstractBase64UrlEncoder);
    i.instance = new i();
  }), o("2zp1f", function (t, s) {
    e(t.exports, "AbstractBase64UrlEncoder", function () {
      return a;
    });
    var n = r("i5YrW"),
      i = r("4PWs7"),
      o = r("3cOQ9");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, [{
        key: "encode",
        value: function encode(e) {
          if (!/^[0-1]*$/.test(e)) throw new (0, i.EncodingError)("Unencodable Base64Url '" + e + "'");
          e = this.pad(e);
          for (var t = "", s = 0; s <= e.length - 6;) {
            var n = e.substring(s, s + 6);
            try {
              var r = o.FixedIntegerEncoder.decode(n),
                d = a.DICT.charAt(r);
              t += d, s += 6;
            } catch (t) {
              throw new (0, i.EncodingError)("Unencodable Base64Url '" + e + "'");
            }
          }
          return t;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[A-Za-z0-9\-_]*$/.test(e)) throw new (0, n.DecodingError)("Undecodable Base64URL string '" + e + "'");
          for (var t = "", s = 0; s < e.length; s++) {
            var i = e.charAt(s),
              r = a.REVERSE_DICT.get(i);
            t += o.FixedIntegerEncoder.encode(r, 6);
          }
          return t;
        }
      }]);
    }();
    a.DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", a.REVERSE_DICT = new Map([["A", 0], ["B", 1], ["C", 2], ["D", 3], ["E", 4], ["F", 5], ["G", 6], ["H", 7], ["I", 8], ["J", 9], ["K", 10], ["L", 11], ["M", 12], ["N", 13], ["O", 14], ["P", 15], ["Q", 16], ["R", 17], ["S", 18], ["T", 19], ["U", 20], ["V", 21], ["W", 22], ["X", 23], ["Y", 24], ["Z", 25], ["a", 26], ["b", 27], ["c", 28], ["d", 29], ["e", 30], ["f", 31], ["g", 32], ["h", 33], ["i", 34], ["j", 35], ["k", 36], ["l", 37], ["m", 38], ["n", 39], ["o", 40], ["p", 41], ["q", 42], ["r", 43], ["s", 44], ["t", 45], ["u", 46], ["v", 47], ["w", 48], ["x", 49], ["y", 50], ["z", 51], ["0", 52], ["1", 53], ["2", 54], ["3", 55], ["4", 56], ["5", 57], ["6", 58], ["7", 59], ["8", 60], ["9", 61], ["-", 62], ["_", 63]]);
  }), o("4PWs7", function (t, s) {
    e(t.exports, "EncodingError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error7) {
      function n(e) {
        var _this46;
        _classCallCheck(this, n);
        _this46 = _callSuper(this, n, [e]), _this46.name = "EncodingError";
        return _this46;
      }
      _inherits(n, _Error7);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("3cOQ9", function (t, s) {
    e(t.exports, "FixedIntegerEncoder", function () {
      return o;
    });
    var n = r("i5YrW"),
      i = r("4PWs7");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e, t) {
          var s = [];
          if (e >= 1) for (s.push(1); e >= 2 * s[0];) s.unshift(2 * s[0]);
          for (var n = "", r = 0; r < s.length; r++) {
            var _o8 = s[r];
            e >= _o8 ? (n += "1", e -= _o8) : n += "0";
          }
          if (n.length > t) throw new (0, i.EncodingError)("Numeric value '" + e + "' is too large for a bit string length of '" + t + "'");
          for (; n.length < t;) n = "0" + n;
          return n;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e)) throw new (0, n.DecodingError)("Undecodable FixedInteger '" + e + "'");
          for (var t = 0, s = [], i = 0; i < e.length; i++) 0 === i ? s[e.length - (i + 1)] = 1 : s[e.length - (i + 1)] = 2 * s[e.length - i];
          for (var r = 0; r < e.length; r++) "1" === e.charAt(r) && (t += s[r]);
          return t;
        }
      }]);
    }();
  }), o("jiJho", function (t, s) {
    e(t.exports, "EncodableBitStringFields", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
        this.fields = new Map();
      }
      return _createClass(n, [{
        key: "containsKey",
        value: function containsKey(e) {
          return this.fields.has(e);
        }
      }, {
        key: "put",
        value: function put(e, t) {
          this.fields.set(e, t);
        }
      }, {
        key: "get",
        value: function get(e) {
          return this.fields.get(e);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return new Map(this.fields);
        }
      }, {
        key: "reset",
        value: function reset(e) {
          var _this47 = this;
          this.fields.clear(), e.getAll().forEach(function (e, t) {
            _this47.fields.set(t, e);
          });
        }
      }]);
    }();
  }), o("ibImC", function (t, s) {
    e(t.exports, "EncodableFibonacciIntegerRange", function () {
      return u;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("9zHuN"),
      d = r("3cOQ9");
    r("bo5EF");
    var c = r("kqHgU"),
      l = r("2kyU8");
    var u = /*#__PURE__*/function (_n$AbstractEncodableB) {
      function u(e, t) {
        var _this48;
        _classCallCheck(this, u);
        _this48 = _callSuper(this, u, [void 0 === t || t]), _this48.setValue(e);
        return _this48;
      }
      _inherits(u, _n$AbstractEncodableB);
      return _createClass(u, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FibonacciIntegerRangeEncoder.encode(this.value);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FibonacciIntegerRangeEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            for (var s = d.FixedIntegerEncoder.decode(c.StringUtil.substring(e, t, t + 12)), n = t + 12, i = 0; i < s; i++) n = "1" === e.charAt(n) ? e.indexOf("11", e.indexOf("11", n + 1) + 2) + 2 : e.indexOf("11", n + 1) + 2;
            return c.StringUtil.substring(e, t, n);
          } catch (e) {
            throw new (0, l.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(u, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          _superPropGet(u, "setValue", this, 3)([Array.from(new Set(e)).sort(function (e, t) {
            return e - t;
          })]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("cO4ie", function (t, s) {
    e(t.exports, "AbstractEncodableBitStringDataType", function () {
      return i;
    });
    var n = r("ePnhW");
    var i = /*#__PURE__*/function () {
      function i(e) {
        _classCallCheck(this, i);
        this.hardFailIfMissing = void 0 === e || e;
      }
      return _createClass(i, [{
        key: "withValidator",
        value: function withValidator(e) {
          return this.validator = e, this;
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return void 0 !== this.value && null !== this.value;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.value;
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          if (!this.validator || this.validator.test(e)) this.value = e;else throw new (0, n.ValidationError)("Invalid value '" + e + "'");
        }
      }, {
        key: "getHardFailIfMissing",
        value: function getHardFailIfMissing() {
          return this.hardFailIfMissing;
        }
      }]);
    }();
  }), o("ePnhW", function (t, s) {
    e(t.exports, "ValidationError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error8) {
      function n(e) {
        var _this49;
        _classCallCheck(this, n);
        _this49 = _callSuper(this, n, [e]), _this49.name = "ValidationError";
        return _this49;
      }
      _inherits(n, _Error8);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("9zHuN", function (t, s) {
    e(t.exports, "FibonacciIntegerRangeEncoder", function () {
      return d;
    });
    var n = r("8IIPQ"),
      i = r("i5YrW"),
      o = r("7L5eR"),
      a = r("3cOQ9");
    var d = /*#__PURE__*/function () {
      function d() {
        _classCallCheck(this, d);
      }
      return _createClass(d, null, [{
        key: "encode",
        value: function encode(e) {
          e = e.sort(function (e, t) {
            return e - t;
          });
          for (var t = [], s = 0, n = 0; n < e.length;) {
            for (var i = n; i < e.length - 1 && e[i] + 1 === e[i + 1];) i++;
            t.push(e.slice(n, i + 1)), n = i + 1;
          }
          for (var r = a.FixedIntegerEncoder.encode(t.length, 12), _d = 0; _d < t.length; _d++) if (1 == t[_d].length) {
            var c = t[_d][0] - s;
            s = t[_d][0], r += "0" + o.FibonacciIntegerEncoder.encode(c);
          } else {
            var l = t[_d][0] - s;
            s = t[_d][0];
            var u = t[_d][t[_d].length - 1] - s;
            s = t[_d][t[_d].length - 1], r += "1" + o.FibonacciIntegerEncoder.encode(l) + o.FibonacciIntegerEncoder.encode(u);
          }
          return r;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e) || e.length < 12) throw new (0, i.DecodingError)("Undecodable FibonacciIntegerRange '" + e + "'");
          for (var t = [], s = a.FixedIntegerEncoder.decode(e.substring(0, 12)), r = 0, _d2 = 12, c = 0; c < s; c++) {
            var l = n.BooleanEncoder.decode(e.substring(_d2, _d2 + 1));
            if (_d2++, !0 === l) {
              var u = e.indexOf("11", _d2),
                g = o.FibonacciIntegerEncoder.decode(e.substring(_d2, u + 2)) + r;
              r = g, _d2 = u + 2, u = e.indexOf("11", _d2);
              var E = o.FibonacciIntegerEncoder.decode(e.substring(_d2, u + 2)) + r;
              r = E, _d2 = u + 2;
              for (var p = g; p <= E; p++) t.push(p);
            } else {
              var h = e.indexOf("11", _d2),
                S = o.FibonacciIntegerEncoder.decode(e.substring(_d2, h + 2)) + r;
              r = S, t.push(S), _d2 = h + 2;
            }
          }
          return t;
        }
      }]);
    }();
  }), o("8IIPQ", function (t, s) {
    e(t.exports, "BooleanEncoder", function () {
      return o;
    });
    var n = r("i5YrW"),
      i = r("4PWs7");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e) {
          if (!0 === e) return "1";
          if (!1 === e) return "0";
          throw new (0, i.EncodingError)("Unencodable Boolean '" + e + "'");
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if ("1" === e) return !0;
          if ("0" === e) return !1;
          throw new (0, n.DecodingError)("Undecodable Boolean '" + e + "'");
        }
      }]);
    }();
  }), o("7L5eR", function (t, s) {
    e(t.exports, "FibonacciIntegerEncoder", function () {
      return i;
    });
    var n = r("i5YrW");
    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
      }
      return _createClass(i, null, [{
        key: "encode",
        value: function encode(e) {
          var t = [];
          if (e >= 1 && (t.push(1), e >= 2)) {
            t.push(2);
            for (var s = 2; e >= t[s - 1] + t[s - 2];) t.push(t[s - 1] + t[s - 2]), s++;
          }
          for (var n = "1", _i6 = t.length - 1; _i6 >= 0; _i6--) {
            var r = t[_i6];
            e >= r ? (n = "1" + n, e -= r) : n = "0" + n;
          }
          return n;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e) || e.length < 2 || e.indexOf("11") !== e.length - 2) throw new (0, n.DecodingError)("Undecodable FibonacciInteger '" + e + "'");
          for (var t = 0, s = [], _i7 = 0; _i7 < e.length - 1; _i7++) 0 === _i7 ? s.push(1) : 1 === _i7 ? s.push(2) : s.push(s[_i7 - 1] + s[_i7 - 2]);
          for (var r = 0; r < e.length - 1; r++) "1" === e.charAt(r) && (t += s[r]);
          return t;
        }
      }]);
    }();
  }), o("bo5EF", function (t, s) {
    e(t.exports, "StringUtil", function () {
      return r("kqHgU").StringUtil;
    }), r("kqHgU");
  }), o("kqHgU", function (t, s) {
    e(t.exports, "StringUtil", function () {
      return i;
    });
    var n = r("2kyU8");
    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
      }
      return _createClass(i, null, [{
        key: "substring",
        value: function substring(e, t, s) {
          if (s > e.length || t < 0 || t > s) throw new (0, n.SubstringError)("Invalid substring indexes " + t + ":" + s + " for string of length " + e.length);
          return e.substring(t, s);
        }
      }]);
    }();
  }), o("2kyU8", function (t, s) {
    e(t.exports, "SubstringError", function () {
      return i;
    });
    var n = r("i5YrW");
    var i = /*#__PURE__*/function (_n$DecodingError) {
      function i(e) {
        var _this50;
        _classCallCheck(this, i);
        _this50 = _callSuper(this, i, [e]), _this50.name = "SubstringError";
        return _this50;
      }
      _inherits(i, _n$DecodingError);
      return _createClass(i);
    }(n.DecodingError);
  }), o("eUO9E", function (t, s) {
    e(t.exports, "EncodableFixedInteger", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("3cOQ9"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB2) {
      function l(e, t, s) {
        var _this51;
        _classCallCheck(this, l);
        _this51 = _callSuper(this, l, [void 0 === s || s]), _this51.bitStringLength = e, _this51.setValue(t);
        return _this51;
      }
      _inherits(l, _n$AbstractEncodableB2);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FixedIntegerEncoder.encode(this.value, this.bitStringLength);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FixedIntegerEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + this.bitStringLength);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("6vMY0", function (t, s) {
    e(t.exports, "HeaderV1Field", function () {
      return i;
    }), e(t.exports, "HEADER_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    });
    var n,
      i = ((n = {}).ID = "Id", n.VERSION = "Version", n.SECTION_IDS = "SectionIds", n),
      r = ["Id", "Version", "SectionIds"];
  }), o("fRDWE", function (t, s) {
    e(t.exports, "Sections", function () {
      return v;
    });
    var n = r("dbMko"),
      i = r("igY57"),
      o = r("eiAIf"),
      a = r("apkKM"),
      d = r("jH5V0"),
      c = r("4Q1MM"),
      l = r("gN6FU"),
      u = r("cgeNI"),
      g = r("iE2As"),
      E = r("abpmD"),
      p = r("aHRLr"),
      h = r("2SZay"),
      S = r("725FB"),
      I = r("3farY"),
      _ = r("lOurV"),
      C = r("imKjv"),
      T = r("5rUbP"),
      N = r("bdTlG"),
      O = r("cbTmj");
    var v = /*#__PURE__*/_createClass(function v() {
      _classCallCheck(this, v);
    });
    v.SECTION_ID_NAME_MAP = new Map([[i.TcfEuV2.ID, i.TcfEuV2.NAME], [n.TcfCaV1.ID, n.TcfCaV1.NAME], [O.UspV1.ID, O.UspV1.NAME], [E.UsNat.ID, E.UsNat.NAME], [o.UsCa.ID, o.UsCa.NAME], [N.UsVa.ID, N.UsVa.NAME], [a.UsCo.ID, a.UsCo.NAME], [T.UsUt.ID, T.UsUt.NAME], [d.UsCt.ID, d.UsCt.NAME], [l.UsFl.ID, l.UsFl.NAME], [g.UsMt.ID, g.UsMt.NAME], [I.UsOr.ID, I.UsOr.NAME], [C.UsTx.ID, C.UsTx.NAME], [c.UsDe.ID, c.UsDe.NAME], [u.UsIa.ID, u.UsIa.NAME], [p.UsNe.ID, p.UsNe.NAME], [h.UsNh.ID, h.UsNh.NAME], [S.UsNj.ID, S.UsNj.NAME], [_.UsTn.ID, _.UsTn.NAME]]), v.SECTION_ORDER = [i.TcfEuV2.NAME, n.TcfCaV1.NAME, O.UspV1.NAME, E.UsNat.NAME, o.UsCa.NAME, N.UsVa.NAME, a.UsCo.NAME, T.UsUt.NAME, d.UsCt.NAME, l.UsFl.NAME, g.UsMt.NAME, I.UsOr.NAME, C.UsTx.NAME, c.UsDe.NAME, u.UsIa.NAME, p.UsNe.NAME, h.UsNh.NAME, S.UsNj.NAME, _.UsTn.NAME];
  }), o("dbMko", function (t, s) {
    e(t.exports, "TcfCaV1", function () {
      return l;
    });
    var n = r("1S0eL"),
      i = r("i5YrW"),
      o = r("94DZl"),
      a = r("028CS"),
      d = r("4s5zi"),
      c = r("f4iKv");
    var l = /*#__PURE__*/function (_n$AbstractLazilyEnco3) {
      function l(e) {
        var _this52;
        _classCallCheck(this, l);
        _this52 = _callSuper(this, l), e && e.length > 0 && _this52.decode(e);
        return _this52;
      }
      _inherits(l, _n$AbstractLazilyEnco3);
      return _createClass(l, [{
        key: "getId",
        value: function getId() {
          return l.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return l.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return l.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, o.TcfCaV1CoreSegment)()), e.push(new (0, c.TcfCaV1PublisherPurposesSegment)()), e.push(new (0, a.TcfCaV1DisclosedVendorsSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < s.length; n++) {
            var r = s[n];
            if (0 !== r.length) {
              var o = r.charAt(0);
              if (o >= "A" && o <= "H") t[0].decode(s[n]);else if (o >= "I" && o <= "P") t[2].decode(s[n]);else if (o >= "Y" && o <= "Z" || o >= "a" && o <= "f") t[1].decode(s[n]);else throw new (0, i.DecodingError)("Unable to decode TcfCaV1 segment '" + r + "'");
            }
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return t.push(e[0].encode()), t.push(e[1].encode()), this.getFieldValue(d.TcfCaV1Field.DISCLOSED_VENDORS).length > 0 && t.push(e[2].encode()), t.join(".");
        }
      }, {
        key: "setFieldValue",
        value: function setFieldValue(e, t) {
          if (_superPropGet(l, "setFieldValue", this, 3)([e, t]), e !== d.TcfCaV1Field.CREATED && e !== d.TcfCaV1Field.LAST_UPDATED) {
            var s = new Date();
            _superPropGet(l, "setFieldValue", this, 3)([d.TcfCaV1Field.CREATED, s]), _superPropGet(l, "setFieldValue", this, 3)([d.TcfCaV1Field.LAST_UPDATED, s]);
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    l.ID = 5, l.VERSION = 1, l.NAME = "tcfcav1";
  }), o("94DZl", function (t, s) {
    e(t.exports, "TcfCaV1CoreSegment", function () {
      return _;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("kcOZU"),
      c = r("jiJho"),
      l = r("adN7C"),
      u = r("1Jz60"),
      g = r("kmrdu"),
      E = r("eUO9E"),
      p = r("3RbT2"),
      h = r("13Ybq"),
      S = r("4s5zi"),
      I = r("dbMko");
    var _ = /*#__PURE__*/function (_n$AbstractLazilyEnco4) {
      function _(e) {
        var _this53;
        _classCallCheck(this, _);
        _this53 = _callSuper(this, _), _this53.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this53.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this53.decode(e);
        return _this53;
      }
      _inherits(_, _n$AbstractLazilyEnco4);
      return _createClass(_, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return S.TCFCAV1_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new Date(),
            t = new (0, c.EncodableBitStringFields)();
          return t.put(S.TcfCaV1Field.VERSION.toString(), new (0, E.EncodableFixedInteger)(6, I.TcfCaV1.VERSION)), t.put(S.TcfCaV1Field.CREATED.toString(), new (0, u.EncodableDatetime)(e)), t.put(S.TcfCaV1Field.LAST_UPDATED.toString(), new (0, u.EncodableDatetime)(e)), t.put(S.TcfCaV1Field.CMP_ID.toString(), new (0, E.EncodableFixedInteger)(12, 0)), t.put(S.TcfCaV1Field.CMP_VERSION.toString(), new (0, E.EncodableFixedInteger)(12, 0)), t.put(S.TcfCaV1Field.CONSENT_SCREEN.toString(), new (0, E.EncodableFixedInteger)(6, 0)), t.put(S.TcfCaV1Field.CONSENT_LANGUAGE.toString(), new (0, p.EncodableFixedString)(2, "EN")), t.put(S.TcfCaV1Field.VENDOR_LIST_VERSION.toString(), new (0, E.EncodableFixedInteger)(12, 0)), t.put(S.TcfCaV1Field.TCF_POLICY_VERSION.toString(), new (0, E.EncodableFixedInteger)(6, 2)), t.put(S.TcfCaV1Field.USE_NON_STANDARD_STACKS.toString(), new (0, l.EncodableBoolean)(!1)), t.put(S.TcfCaV1Field.SPECIAL_FEATURE_EXPRESS_CONSENT.toString(), new (0, g.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(S.TcfCaV1Field.PURPOSES_EXPRESS_CONSENT.toString(), new (0, g.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(S.TcfCaV1Field.PURPOSES_IMPLIED_CONSENT.toString(), new (0, g.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(S.TcfCaV1Field.VENDOR_EXPRESS_CONSENT.toString(), new (0, h.EncodableOptimizedFixedRange)([])), t.put(S.TcfCaV1Field.VENDOR_IMPLIED_CONSENT.toString(), new (0, h.EncodableOptimizedFixedRange)([])), t.put(S.TcfCaV1Field.PUB_RESTRICTIONS.toString(), new (0, d.EncodableArrayOfFixedIntegerRanges)(6, 2, [], !1)), t;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode TcfCaV1CoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("kcOZU", function (t, s) {
    e(t.exports, "EncodableArrayOfFixedIntegerRanges", function () {
      return E;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("iJoLQ"),
      a = r("4PWs7"),
      d = r("3cOQ9"),
      c = r("acGXV"),
      l = r("b1lIj"),
      u = r("kqHgU"),
      g = r("2kyU8");
    var E = /*#__PURE__*/function (_n$AbstractEncodableB3) {
      function E(e, t, s, n) {
        var _this54;
        _classCallCheck(this, E);
        _this54 = _callSuper(this, E, [void 0 === n || n]), _this54.keyBitStringLength = e, _this54.typeBitStringLength = t, _this54.setValue(s);
        return _this54;
      }
      _inherits(E, _n$AbstractEncodableB3);
      return _createClass(E, [{
        key: "encode",
        value: function encode() {
          try {
            var e = this.value,
              t = "";
            t += d.FixedIntegerEncoder.encode(e.length, 12);
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              t += d.FixedIntegerEncoder.encode(n.getKey(), this.keyBitStringLength), t += d.FixedIntegerEncoder.encode(n.getType(), this.typeBitStringLength), t += c.FixedIntegerRangeEncoder.encode(n.getIds());
            }
            return t;
          } catch (e) {
            throw new (0, a.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            for (var t = [], s = d.FixedIntegerEncoder.decode(u.StringUtil.substring(e, 0, 12)), n = 12, r = 0; r < s; r++) {
              var a = d.FixedIntegerEncoder.decode(u.StringUtil.substring(e, n, n + this.keyBitStringLength));
              n += this.keyBitStringLength;
              var g = d.FixedIntegerEncoder.decode(u.StringUtil.substring(e, n, n + this.typeBitStringLength));
              n += this.typeBitStringLength;
              var _E = new (0, o.EncodableFixedIntegerRange)([]).substring(e, n),
                p = c.FixedIntegerRangeEncoder.decode(_E);
              n += _E.length, t.push(new (0, l.RangeEntry)(a, g, p));
            }
            this.value = t;
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            var s = "";
            s += u.StringUtil.substring(e, t, t + 12);
            for (var n = d.FixedIntegerEncoder.decode(s.toString()), i = t + s.length, r = 0; r < n; r++) {
              var a = u.StringUtil.substring(e, i, i + this.keyBitStringLength);
              i += a.length, s += a;
              var c = u.StringUtil.substring(e, i, i + this.typeBitStringLength);
              i += c.length, s += c;
              var l = new (0, o.EncodableFixedIntegerRange)([]).substring(e, i);
              i += l.length, s += l;
            }
            return s;
          } catch (e) {
            throw new (0, g.SubstringError)(e);
          }
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("iJoLQ", function (t, s) {
    e(t.exports, "EncodableFixedIntegerRange", function () {
      return u;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("3cOQ9"),
      d = r("acGXV"),
      c = r("kqHgU"),
      l = r("2kyU8");
    var u = /*#__PURE__*/function (_n$AbstractEncodableB4) {
      function u(e, t) {
        var _this55;
        _classCallCheck(this, u);
        _this55 = _callSuper(this, u, [void 0 === t || t]), _this55.setValue(e);
        return _this55;
      }
      _inherits(u, _n$AbstractEncodableB4);
      return _createClass(u, [{
        key: "encode",
        value: function encode() {
          try {
            return d.FixedIntegerRangeEncoder.encode(this.value);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = d.FixedIntegerRangeEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            for (var s = a.FixedIntegerEncoder.decode(c.StringUtil.substring(e, t, t + 12)), n = t + 12, i = 0; i < s; i++) "1" === e.charAt(n) ? n += 33 : n += 17;
            return c.StringUtil.substring(e, t, n);
          } catch (e) {
            throw new (0, l.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(u, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          _superPropGet(u, "setValue", this, 3)([Array.from(new Set(e)).sort(function (e, t) {
            return e - t;
          })]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("acGXV", function (t, s) {
    e(t.exports, "FixedIntegerRangeEncoder", function () {
      return a;
    });
    var n = r("8IIPQ"),
      i = r("i5YrW"),
      o = r("3cOQ9");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e) {
          e.sort(function (e, t) {
            return e - t;
          });
          for (var t = [], s = 0; s < e.length;) {
            for (var n = s; n < e.length - 1 && e[n] + 1 === e[n + 1];) n++;
            t.push(e.slice(s, n + 1)), s = n + 1;
          }
          for (var i = o.FixedIntegerEncoder.encode(t.length, 12), r = 0; r < t.length; r++) 1 === t[r].length ? i += "0" + o.FixedIntegerEncoder.encode(t[r][0], 16) : i += "1" + o.FixedIntegerEncoder.encode(t[r][0], 16) + o.FixedIntegerEncoder.encode(t[r][t[r].length - 1], 16);
          return i;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e) || e.length < 12) throw new (0, i.DecodingError)("Undecodable FixedIntegerRange '" + e + "'");
          for (var t = [], s = o.FixedIntegerEncoder.decode(e.substring(0, 12)), r = 12, _a = 0; _a < s; _a++) {
            var d = n.BooleanEncoder.decode(e.substring(r, r + 1));
            if (r++, !0 === d) {
              var c = o.FixedIntegerEncoder.decode(e.substring(r, r + 16));
              r += 16;
              var l = o.FixedIntegerEncoder.decode(e.substring(r, r + 16));
              r += 16;
              for (var u = c; u <= l; u++) t.push(u);
            } else {
              var g = o.FixedIntegerEncoder.decode(e.substring(r, r + 16));
              t.push(g), r += 16;
            }
          }
          return t;
        }
      }]);
    }();
  }), o("b1lIj", function (t, s) {
    e(t.exports, "RangeEntry", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e, t, s) {
        _classCallCheck(this, n);
        this.key = e, this.type = t, this.ids = s;
      }
      return _createClass(n, [{
        key: "getKey",
        value: function getKey() {
          return this.key;
        }
      }, {
        key: "setKey",
        value: function setKey(e) {
          this.key = e;
        }
      }, {
        key: "getType",
        value: function getType() {
          return this.type;
        }
      }, {
        key: "setType",
        value: function setType(e) {
          this.type = e;
        }
      }, {
        key: "getIds",
        value: function getIds() {
          return this.ids;
        }
      }, {
        key: "setIds",
        value: function setIds(e) {
          this.ids = e;
        }
      }]);
    }();
  }), o("adN7C", function (t, s) {
    e(t.exports, "EncodableBoolean", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("8IIPQ"),
      o = r("i5YrW"),
      a = r("4PWs7"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB5) {
      function l(e, t) {
        var _this56;
        _classCallCheck(this, l);
        _this56 = _callSuper(this, l, [void 0 === t || t]), _this56.setValue(e);
        return _this56;
      }
      _inherits(l, _n$AbstractEncodableB5);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return i.BooleanEncoder.encode(this.value);
          } catch (e) {
            throw new (0, a.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = i.BooleanEncoder.decode(e);
          } catch (e) {
            throw new (0, o.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + 1);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("1Jz60", function (t, s) {
    e(t.exports, "EncodableDatetime", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("gmF7R"),
      o = r("i5YrW"),
      a = r("4PWs7");
    r("bo5EF");
    var d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB6) {
      function l(e, t) {
        var _this57;
        _classCallCheck(this, l);
        _this57 = _callSuper(this, l, [void 0 === t || t]), _this57.setValue(e);
        return _this57;
      }
      _inherits(l, _n$AbstractEncodableB6);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return i.DatetimeEncoder.encode(this.value);
          } catch (e) {
            throw new (0, a.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = i.DatetimeEncoder.decode(e);
          } catch (e) {
            throw new (0, o.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + 36);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("gmF7R", function (t, s) {
    e(t.exports, "DatetimeEncoder", function () {
      return o;
    });
    var n = r("i5YrW"),
      i = r("3cOQ9");
    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }
      return _createClass(o, null, [{
        key: "encode",
        value: function encode(e) {
          return e ? i.FixedIntegerEncoder.encode(Math.round(e.getTime() / 100), 36) : i.FixedIntegerEncoder.encode(0, 36);
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e) || 36 !== e.length) throw new (0, n.DecodingError)("Undecodable Datetime '" + e + "'");
          return new Date(100 * i.FixedIntegerEncoder.decode(e));
        }
      }]);
    }();
  }), o("kmrdu", function (t, s) {
    e(t.exports, "EncodableFixedBitfield", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("5TxBu"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB7) {
      function l(e, t) {
        var _this58;
        _classCallCheck(this, l);
        _this58 = _callSuper(this, l, [void 0 === t || t]), _this58.numElements = e.length, _this58.setValue(e);
        return _this58;
      }
      _inherits(l, _n$AbstractEncodableB7);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FixedBitfieldEncoder.encode(this.value, this.numElements);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FixedBitfieldEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + this.numElements);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(l, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          for (var t = _toConsumableArray(e), s = t.length; s < this.numElements; s++) t.push(!1);
          t.length > this.numElements && (t = t.slice(0, this.numElements)), _superPropGet(l, "setValue", this, 3)([t]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("5TxBu", function (t, s) {
    e(t.exports, "FixedBitfieldEncoder", function () {
      return a;
    });
    var n = r("8IIPQ"),
      i = r("i5YrW"),
      o = r("4PWs7");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e, t) {
          if (e.length > t) throw new (0, o.EncodingError)("Too many values '" + e.length + "'");
          for (var s = "", i = 0; i < e.length; i++) s += n.BooleanEncoder.encode(e[i]);
          for (; s.length < t;) s += "0";
          return s;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e)) throw new (0, i.DecodingError)("Undecodable FixedBitfield '" + e + "'");
          for (var t = [], s = 0; s < e.length; s++) t.push(n.BooleanEncoder.decode(e.substring(s, s + 1)));
          return t;
        }
      }]);
    }();
  }), o("3RbT2", function (t, s) {
    e(t.exports, "EncodableFixedString", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("2jVbk"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB8) {
      function l(e, t, s) {
        var _this59;
        _classCallCheck(this, l);
        _this59 = _callSuper(this, l, [void 0 === s || s]), _this59.stringLength = e, _this59.setValue(t);
        return _this59;
      }
      _inherits(l, _n$AbstractEncodableB8);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FixedStringEncoder.encode(this.value, this.stringLength);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FixedStringEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + 6 * this.stringLength);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("2jVbk", function (t, s) {
    e(t.exports, "FixedStringEncoder", function () {
      return a;
    });
    var n = r("i5YrW"),
      i = r("4PWs7"),
      o = r("3cOQ9");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e, t) {
          for (; e.length < t;) e += " ";
          for (var s = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (32 === r) s += o.FixedIntegerEncoder.encode(63, 6);else if (r >= 65) s += o.FixedIntegerEncoder.encode(e.charCodeAt(n) - 65, 6);else throw new (0, i.EncodingError)("Unencodable FixedString '" + e + "'");
          }
          return s;
        }
      }, {
        key: "decode",
        value: function decode(e) {
          if (!/^[0-1]*$/.test(e) || e.length % 6 != 0) throw new (0, n.DecodingError)("Undecodable FixedString '" + e + "'");
          for (var t = "", s = 0; s < e.length; s += 6) {
            var i = o.FixedIntegerEncoder.decode(e.substring(s, s + 6));
            63 === i ? t += " " : t += String.fromCharCode(i + 65);
          }
          return t.trim();
        }
      }]);
    }();
  }), o("13Ybq", function (t, s) {
    e(t.exports, "EncodableOptimizedFixedRange", function () {
      return E;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("iJoLQ"),
      a = r("4PWs7"),
      d = r("5TxBu"),
      c = r("3cOQ9"),
      l = r("acGXV"),
      u = r("kqHgU"),
      g = r("2kyU8");
    var E = /*#__PURE__*/function (_n$AbstractEncodableB9) {
      function E(e, t) {
        var _this60;
        _classCallCheck(this, E);
        _this60 = _callSuper(this, E, [void 0 === t || t]), _this60.setValue(e);
        return _this60;
      }
      _inherits(E, _n$AbstractEncodableB9);
      return _createClass(E, [{
        key: "encode",
        value: function encode() {
          try {
            var e = this.value.length > 0 ? this.value[this.value.length - 1] : 0,
              t = l.FixedIntegerRangeEncoder.encode(this.value);
            if (t.length <= e) return c.FixedIntegerEncoder.encode(e, 16) + "1" + t;
            for (var s = [], n = 0, i = 0; i < e; i++) i === this.value[n] - 1 ? (s[i] = !0, n++) : s[i] = !1;
            return c.FixedIntegerEncoder.encode(e, 16) + "0" + d.FixedBitfieldEncoder.encode(s, e);
          } catch (e) {
            throw new (0, a.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            if ("1" === e.charAt(16)) this.value = l.FixedIntegerRangeEncoder.decode(e.substring(17));else {
              for (var t = [], s = d.FixedBitfieldEncoder.decode(e.substring(17)), n = 0; n < s.length; n++) !0 === s[n] && t.push(n + 1);
              this.value = t;
            }
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            var s = c.FixedIntegerEncoder.decode(u.StringUtil.substring(e, t, t + 16));
            if ("1" === e.charAt(t + 16)) return u.StringUtil.substring(e, t, t + 17) + new (0, o.EncodableFixedIntegerRange)([]).substring(e, t + 17);
            return u.StringUtil.substring(e, t, t + 17 + s);
          } catch (e) {
            throw new (0, g.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(E, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          _superPropGet(E, "setValue", this, 3)([Array.from(new Set(e)).sort(function (e, t) {
            return e - t;
          })]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("4s5zi", function (t, s) {
    e(t.exports, "TcfCaV1Field", function () {
      return i;
    }), e(t.exports, "TCFCAV1_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES", function () {
      return o;
    }), e(t.exports, "TCFCAV1_DISCLOSED_VENDORS_SEGMENT_FIELD_NAMES", function () {
      return a;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.CREATED = "Created", n.LAST_UPDATED = "LastUpdated", n.CMP_ID = "CmpId", n.CMP_VERSION = "CmpVersion", n.CONSENT_SCREEN = "ConsentScreen", n.CONSENT_LANGUAGE = "ConsentLanguage", n.VENDOR_LIST_VERSION = "VendorListVersion", n.TCF_POLICY_VERSION = "TcfPolicyVersion", n.USE_NON_STANDARD_STACKS = "UseNonStandardStacks", n.SPECIAL_FEATURE_EXPRESS_CONSENT = "SpecialFeatureExpressConsent", n.PUB_PURPOSES_SEGMENT_TYPE = "PubPurposesSegmentType", n.PURPOSES_EXPRESS_CONSENT = "PurposesExpressConsent", n.PURPOSES_IMPLIED_CONSENT = "PurposesImpliedConsent", n.VENDOR_EXPRESS_CONSENT = "VendorExpressConsent", n.VENDOR_IMPLIED_CONSENT = "VendorImpliedConsent", n.PUB_RESTRICTIONS = "PubRestrictions", n.PUB_PURPOSES_EXPRESS_CONSENT = "PubPurposesExpressConsent", n.PUB_PURPOSES_IMPLIED_CONSENT = "PubPurposesImpliedConsent", n.NUM_CUSTOM_PURPOSES = "NumCustomPurposes", n.CUSTOM_PURPOSES_EXPRESS_CONSENT = "CustomPurposesExpressConsent", n.CUSTOM_PURPOSES_IMPLIED_CONSENT = "CustomPurposesImpliedConsent", n.DISCLOSED_VENDORS_SEGMENT_TYPE = "DisclosedVendorsSegmentType", n.DISCLOSED_VENDORS = "DisclosedVendors", n),
      r = ["Version", "Created", "LastUpdated", "CmpId", "CmpVersion", "ConsentScreen", "ConsentLanguage", "VendorListVersion", "TcfPolicyVersion", "UseNonStandardStacks", "SpecialFeatureExpressConsent", "PurposesExpressConsent", "PurposesImpliedConsent", "VendorExpressConsent", "VendorImpliedConsent", "PubRestrictions"],
      o = ["PubPurposesSegmentType", "PubPurposesExpressConsent", "PubPurposesImpliedConsent", "NumCustomPurposes", "CustomPurposesExpressConsent", "CustomPurposesImpliedConsent"],
      a = ["DisclosedVendorsSegmentType", "DisclosedVendors"];
  }), o("028CS", function (t, s) {
    e(t.exports, "TcfCaV1DisclosedVendorsSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("i5YrW"),
      a = r("jiJho"),
      d = r("eUO9E"),
      c = r("13Ybq"),
      l = r("4s5zi"),
      u = r("erlU2");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco5) {
      function g(e) {
        var _this61;
        _classCallCheck(this, g);
        _this61 = _callSuper(this, g), _this61.base64UrlEncoder = u.TraditionalBase64UrlEncoder.getInstance(), _this61.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this61.decode(e);
        return _this61;
      }
      _inherits(g, _n$AbstractLazilyEnco5);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return l.TCFCAV1_DISCLOSED_VENDORS_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, a.EncodableBitStringFields)();
          return e.put(l.TcfCaV1Field.DISCLOSED_VENDORS_SEGMENT_TYPE.toString(), new (0, d.EncodableFixedInteger)(3, 1)), e.put(l.TcfCaV1Field.DISCLOSED_VENDORS.toString(), new (0, c.EncodableOptimizedFixedRange)([])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, o.DecodingError)("Unable to decode HeaderV1CoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("erlU2", function (t, s) {
    e(t.exports, "TraditionalBase64UrlEncoder", function () {
      return i;
    });
    var n = r("2zp1f");
    var i = /*#__PURE__*/function (_n$AbstractBase64UrlE2) {
      function i() {
        _classCallCheck(this, i);
        return _callSuper(this, i);
      }
      _inherits(i, _n$AbstractBase64UrlE2);
      return _createClass(i, [{
        key: "pad",
        value: function pad(e) {
          for (; e.length % 24 > 0;) e += "0";
          return e;
        }
      }], [{
        key: "getInstance",
        value: function getInstance() {
          return this.instance;
        }
      }]);
    }(n.AbstractBase64UrlEncoder);
    i.instance = new i();
  }), o("f4iKv", function (t, s) {
    e(t.exports, "TcfCaV1PublisherPurposesSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("kmrdu"),
      l = r("eUO9E"),
      u = r("7hkVp"),
      g = r("4s5zi");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco6) {
      function E(e) {
        var _this62;
        _classCallCheck(this, E);
        _this62 = _callSuper(this, E), _this62.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this62.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this62.decode(e);
        return _this62;
      }
      _inherits(E, _n$AbstractLazilyEnco6);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return g.TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          e.put(g.TcfCaV1Field.PUB_PURPOSES_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(3, 3)), e.put(g.TcfCaV1Field.PUB_PURPOSES_EXPRESS_CONSENT.toString(), new (0, c.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), e.put(g.TcfCaV1Field.PUB_PURPOSES_IMPLIED_CONSENT.toString(), new (0, c.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]));
          var t = new (0, l.EncodableFixedInteger)(6, 0);
          return e.put(g.TcfCaV1Field.NUM_CUSTOM_PURPOSES.toString(), t), e.put(g.TcfCaV1Field.CUSTOM_PURPOSES_EXPRESS_CONSENT.toString(), new (0, u.EncodableFlexibleBitfield)(function () {
            return t.getValue();
          }, [])), e.put(g.TcfCaV1Field.CUSTOM_PURPOSES_IMPLIED_CONSENT.toString(), new (0, u.EncodableFlexibleBitfield)(function () {
            return t.getValue();
          }, [])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode TcfCaV1PublisherPurposesSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("7hkVp", function (t, s) {
    e(t.exports, "EncodableFlexibleBitfield", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("5TxBu"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB0) {
      function l(e, t, s) {
        var _this63;
        _classCallCheck(this, l);
        _this63 = _callSuper(this, l, [void 0 === s || s]), _this63.getLength = e, _this63.setValue(t);
        return _this63;
      }
      _inherits(l, _n$AbstractEncodableB0);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FixedBitfieldEncoder.encode(this.value, this.getLength());
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FixedBitfieldEncoder.decode(e);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + this.getLength());
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(l, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          for (var t = this.getLength(), s = _toConsumableArray(e), n = s.length; n < t; n++) s.push(!1);
          s.length > t && (s = s.slice(0, t)), _superPropGet(l, "setValue", this, 3)([_toConsumableArray(s)]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("igY57", function (t, s) {
    e(t.exports, "TcfEuV2", function () {
      return g;
    });
    var n = r("1S0eL"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("l4bjL"),
      d = r("1Vc0q"),
      c = r("dBc1b"),
      l = r("beAra"),
      u = r("6mRv8");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco7) {
      function g(e) {
        var _this64;
        _classCallCheck(this, g);
        _this64 = _callSuper(this, g), e && e.length > 0 && _this64.decode(e);
        return _this64;
      }
      _inherits(g, _n$AbstractLazilyEnco7);
      return _createClass(g, [{
        key: "getId",
        value: function getId() {
          return g.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return g.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return g.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, a.TcfEuV2CoreSegment)()), e.push(new (0, c.TcfEuV2PublisherPurposesSegment)()), e.push(new (0, l.TcfEuV2VendorsAllowedSegment)()), e.push(new (0, u.TcfEuV2VendorsDisclosedSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < s.length; n++) {
            var r = s[n];
            if (0 !== r.length) {
              var o = r.charAt(0);
              if (o >= "A" && o <= "H") t[0].decode(s[n]);else if (o >= "I" && o <= "P") t[3].decode(s[n]);else if (o >= "Q" && o <= "X") t[2].decode(s[n]);else if (o >= "Y" && o <= "Z" || o >= "a" && o <= "f") t[1].decode(s[n]);else throw new (0, i.DecodingError)("Unable to decode TcfEuV2 segment '" + r + "'");
            }
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          if (e.length >= 1) {
            t.push(e[0].encode());
            var s = this.getFieldValue(d.TcfEuV2Field.IS_SERVICE_SPECIFIC);
            if (s) e.length >= 2 && t.push(e[3].encode()), e.length >= 3 && t.push(e[1].encode());else throw new (0, o.EncodingError)("Unable to encode TcfEuV2 segment with isServiceSpecific = '" + s + "'");
          }
          return t.join(".");
        }
      }, {
        key: "setFieldValue",
        value: function setFieldValue(e, t) {
          e === d.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS && (t[0] = !1, t[2] = t[3] = t[4] = t[5] = !1), e === d.TcfEuV2Field.CREATED || e === d.TcfEuV2Field.LAST_UPDATED ? e === d.TcfEuV2Field.CREATED ? _superPropGet(g, "setFieldValue", this, 3)([d.TcfEuV2Field.LAST_UPDATED, t]) : _superPropGet(g, "setFieldValue", this, 3)([d.TcfEuV2Field.CREATED, t]) : this.updateDateStamp(), _superPropGet(g, "setFieldValue", this, 3)([e, t]);
        }
      }, {
        key: "updateDateStamp",
        value: function updateDateStamp() {
          var e = new Date(),
            t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
          _superPropGet(g, "setFieldValue", this, 3)([d.TcfEuV2Field.CREATED, t]), _superPropGet(g, "setFieldValue", this, 3)([d.TcfEuV2Field.LAST_UPDATED, t]);
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    g.ID = 2, g.VERSION = 2, g.NAME = "tcfeuv2";
  }), o("l4bjL", function (t, s) {
    e(t.exports, "TcfEuV2CoreSegment", function () {
      return _;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("i5YrW"),
      a = r("kcOZU"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("1Jz60"),
      u = r("kmrdu"),
      g = r("eUO9E"),
      E = r("3RbT2"),
      p = r("13Ybq"),
      h = r("1Vc0q"),
      S = r("igY57"),
      I = r("erlU2");
    var _ = /*#__PURE__*/function (_n$AbstractLazilyEnco8) {
      function _(e) {
        var _this65;
        _classCallCheck(this, _);
        _this65 = _callSuper(this, _), _this65.base64UrlEncoder = I.TraditionalBase64UrlEncoder.getInstance(), _this65.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this65.decode(e);
        return _this65;
      }
      _inherits(_, _n$AbstractLazilyEnco8);
      return _createClass(_, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return h.TCFEUV2_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new Date(),
            t = new (0, d.EncodableBitStringFields)();
          return t.put(h.TcfEuV2Field.VERSION.toString(), new (0, g.EncodableFixedInteger)(6, S.TcfEuV2.VERSION)), t.put(h.TcfEuV2Field.CREATED.toString(), new (0, l.EncodableDatetime)(e)), t.put(h.TcfEuV2Field.LAST_UPDATED.toString(), new (0, l.EncodableDatetime)(e)), t.put(h.TcfEuV2Field.CMP_ID.toString(), new (0, g.EncodableFixedInteger)(12, 0)), t.put(h.TcfEuV2Field.CMP_VERSION.toString(), new (0, g.EncodableFixedInteger)(12, 0)), t.put(h.TcfEuV2Field.CONSENT_SCREEN.toString(), new (0, g.EncodableFixedInteger)(6, 0)), t.put(h.TcfEuV2Field.CONSENT_LANGUAGE.toString(), new (0, E.EncodableFixedString)(2, "EN")), t.put(h.TcfEuV2Field.VENDOR_LIST_VERSION.toString(), new (0, g.EncodableFixedInteger)(12, 0)), t.put(h.TcfEuV2Field.POLICY_VERSION.toString(), new (0, g.EncodableFixedInteger)(6, 5)), t.put(h.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(), new (0, c.EncodableBoolean)(!0)), t.put(h.TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(), new (0, c.EncodableBoolean)(!1)), t.put(h.TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(), new (0, u.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(h.TcfEuV2Field.PURPOSE_CONSENTS.toString(), new (0, u.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(h.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(), new (0, u.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), t.put(h.TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(), new (0, c.EncodableBoolean)(!1)), t.put(h.TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(), new (0, E.EncodableFixedString)(2, "AA")), t.put(h.TcfEuV2Field.VENDOR_CONSENTS.toString(), new (0, p.EncodableOptimizedFixedRange)([])), t.put(h.TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(), new (0, p.EncodableOptimizedFixedRange)([])), t.put(h.TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString(), new (0, a.EncodableArrayOfFixedIntegerRanges)(6, 2, [], !1)), t;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, o.DecodingError)("Unable to decode TcfEuV2CoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("1Vc0q", function (t, s) {
    e(t.exports, "TcfEuV2Field", function () {
      return i;
    }), e(t.exports, "TCFEUV2_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "TCFEUV2_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES", function () {
      return o;
    }), e(t.exports, "TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES", function () {
      return a;
    }), e(t.exports, "TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES", function () {
      return d;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.CREATED = "Created", n.LAST_UPDATED = "LastUpdated", n.CMP_ID = "CmpId", n.CMP_VERSION = "CmpVersion", n.CONSENT_SCREEN = "ConsentScreen", n.CONSENT_LANGUAGE = "ConsentLanguage", n.VENDOR_LIST_VERSION = "VendorListVersion", n.POLICY_VERSION = "PolicyVersion", n.IS_SERVICE_SPECIFIC = "IsServiceSpecific", n.USE_NON_STANDARD_STACKS = "UseNonStandardStacks", n.SPECIAL_FEATURE_OPTINS = "SpecialFeatureOptins", n.PURPOSE_CONSENTS = "PurposeConsents", n.PURPOSE_LEGITIMATE_INTERESTS = "PurposeLegitimateInterests", n.PURPOSE_ONE_TREATMENT = "PurposeOneTreatment", n.PUBLISHER_COUNTRY_CODE = "PublisherCountryCode", n.VENDOR_CONSENTS = "VendorConsents", n.VENDOR_LEGITIMATE_INTERESTS = "VendorLegitimateInterests", n.PUBLISHER_RESTRICTIONS = "PublisherRestrictions", n.PUBLISHER_PURPOSES_SEGMENT_TYPE = "PublisherPurposesSegmentType", n.PUBLISHER_CONSENTS = "PublisherConsents", n.PUBLISHER_LEGITIMATE_INTERESTS = "PublisherLegitimateInterests", n.NUM_CUSTOM_PURPOSES = "NumCustomPurposes", n.PUBLISHER_CUSTOM_CONSENTS = "PublisherCustomConsents", n.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS = "PublisherCustomLegitimateInterests", n.VENDORS_ALLOWED_SEGMENT_TYPE = "VendorsAllowedSegmentType", n.VENDORS_ALLOWED = "VendorsAllowed", n.VENDORS_DISCLOSED_SEGMENT_TYPE = "VendorsDisclosedSegmentType", n.VENDORS_DISCLOSED = "VendorsDisclosed", n),
      r = ["Version", "Created", "LastUpdated", "CmpId", "CmpVersion", "ConsentScreen", "ConsentLanguage", "VendorListVersion", "PolicyVersion", "IsServiceSpecific", "UseNonStandardStacks", "SpecialFeatureOptins", "PurposeConsents", "PurposeLegitimateInterests", "PurposeOneTreatment", "PublisherCountryCode", "VendorConsents", "VendorLegitimateInterests", "PublisherRestrictions"],
      o = ["PublisherPurposesSegmentType", "PublisherConsents", "PublisherLegitimateInterests", "NumCustomPurposes", "PublisherCustomConsents", "PublisherCustomLegitimateInterests"],
      a = ["VendorsAllowedSegmentType", "VendorsAllowed"],
      d = ["VendorsDisclosedSegmentType", "VendorsDisclosed"];
  }), o("dBc1b", function (t, s) {
    e(t.exports, "TcfEuV2PublisherPurposesSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("i5YrW"),
      a = r("jiJho"),
      d = r("kmrdu"),
      c = r("eUO9E"),
      l = r("7hkVp"),
      u = r("1Vc0q"),
      g = r("erlU2");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco9) {
      function E(e) {
        var _this66;
        _classCallCheck(this, E);
        _this66 = _callSuper(this, E), _this66.base64UrlEncoder = g.TraditionalBase64UrlEncoder.getInstance(), _this66.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this66.decode(e);
        return _this66;
      }
      _inherits(E, _n$AbstractLazilyEnco9);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.TCFEUV2_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, a.EncodableBitStringFields)();
          e.put(u.TcfEuV2Field.PUBLISHER_PURPOSES_SEGMENT_TYPE.toString(), new (0, c.EncodableFixedInteger)(3, 3)), e.put(u.TcfEuV2Field.PUBLISHER_CONSENTS.toString(), new (0, d.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1])), e.put(u.TcfEuV2Field.PUBLISHER_LEGITIMATE_INTERESTS.toString(), new (0, d.EncodableFixedBitfield)([!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]));
          var t = new (0, c.EncodableFixedInteger)(6, 0);
          return e.put(u.TcfEuV2Field.NUM_CUSTOM_PURPOSES.toString(), t), e.put(u.TcfEuV2Field.PUBLISHER_CUSTOM_CONSENTS.toString(), new (0, l.EncodableFlexibleBitfield)(function () {
            return t.getValue();
          }, [])), e.put(u.TcfEuV2Field.PUBLISHER_CUSTOM_LEGITIMATE_INTERESTS.toString(), new (0, l.EncodableFlexibleBitfield)(function () {
            return t.getValue();
          }, [])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, o.DecodingError)("Unable to decode TcfEuV2PublisherPurposesSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("beAra", function (t, s) {
    e(t.exports, "TcfEuV2VendorsAllowedSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("i5YrW"),
      a = r("jiJho"),
      d = r("eUO9E"),
      c = r("13Ybq"),
      l = r("1Vc0q"),
      u = r("erlU2");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco0) {
      function g(e) {
        var _this67;
        _classCallCheck(this, g);
        _this67 = _callSuper(this, g), _this67.base64UrlEncoder = u.TraditionalBase64UrlEncoder.getInstance(), _this67.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this67.decode(e);
        return _this67;
      }
      _inherits(g, _n$AbstractLazilyEnco0);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return l.TCFEUV2_VENDORS_ALLOWED_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, a.EncodableBitStringFields)();
          return e.put(l.TcfEuV2Field.VENDORS_ALLOWED_SEGMENT_TYPE.toString(), new (0, d.EncodableFixedInteger)(3, 2)), e.put(l.TcfEuV2Field.VENDORS_ALLOWED.toString(), new (0, c.EncodableOptimizedFixedRange)([])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, o.DecodingError)("Unable to decode TcfEuV2VendorsAllowedSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("6mRv8", function (t, s) {
    e(t.exports, "TcfEuV2VendorsDisclosedSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("i5YrW"),
      a = r("jiJho"),
      d = r("eUO9E"),
      c = r("13Ybq"),
      l = r("1Vc0q"),
      u = r("erlU2");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco1) {
      function g(e) {
        var _this68;
        _classCallCheck(this, g);
        _this68 = _callSuper(this, g), _this68.base64UrlEncoder = u.TraditionalBase64UrlEncoder.getInstance(), _this68.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this68.decode(e);
        return _this68;
      }
      _inherits(g, _n$AbstractLazilyEnco1);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return l.TCFEUV2_VENDORS_DISCLOSED_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, a.EncodableBitStringFields)();
          return e.put(l.TcfEuV2Field.VENDORS_DISCLOSED_SEGMENT_TYPE.toString(), new (0, d.EncodableFixedInteger)(3, 1)), e.put(l.TcfEuV2Field.VENDORS_DISCLOSED.toString(), new (0, c.EncodableOptimizedFixedRange)([])), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, o.DecodingError)("Unable to decode TcfEuV2VendorsDisclosedSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("eiAIf", function (t, s) {
    e(t.exports, "UsCa", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("TIxNk"),
      o = r("8gF6H"),
      a = r("2g128");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco10) {
      function d(e) {
        var _this69;
        _classCallCheck(this, d);
        _this69 = _callSuper(this, d), e && e.length > 0 && _this69.decode(e);
        return _this69;
      }
      _inherits(d, _n$AbstractLazilyEnco10);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsCaCoreSegment)()), e.push(new (0, a.UsCaGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsCaField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsCaField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsCaField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 8, d.VERSION = 1, d.NAME = "usca";
  }), o("TIxNk", function (t, s) {
    e(t.exports, "UsCaCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("8gF6H"),
      g = r("eiAIf");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco11) {
      function E(e) {
        var _this70;
        _classCallCheck(this, E);
        _this70 = _callSuper(this, E), _this70.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this70.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this70.decode(e);
        return _this70;
      }
      _inherits(E, _n$AbstractLazilyEnco11);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCA_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class() {
                _classCallCheck(this, _class);
              }
              return _createClass(_class, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class2() {
                _classCallCheck(this, _class2);
              }
              return _createClass(_class2, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsCaField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsCa.VERSION)), s.put(u.UsCaField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.SHARING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.SHARING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsCaField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0]).withValidator(t)), s.put(u.UsCaField.PERSONAL_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class3() {
              _classCallCheck(this, _class3);
            }
            return _createClass(_class3, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsCaField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCaField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCaCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("dEzTT", function (t, s) {
    e(t.exports, "EncodableFixedIntegerList", function () {
      return l;
    });
    var n = r("cO4ie"),
      i = r("i5YrW"),
      o = r("4PWs7"),
      a = r("46Ejl"),
      d = r("kqHgU"),
      c = r("2kyU8");
    var l = /*#__PURE__*/function (_n$AbstractEncodableB1) {
      function l(e, t, s) {
        var _this71;
        _classCallCheck(this, l);
        _this71 = _callSuper(this, l, [void 0 === s || s]), _this71.elementBitStringLength = e, _this71.numElements = t.length, _this71.setValue(t);
        return _this71;
      }
      _inherits(l, _n$AbstractEncodableB1);
      return _createClass(l, [{
        key: "encode",
        value: function encode() {
          try {
            return a.FixedIntegerListEncoder.encode(this.value, this.elementBitStringLength, this.numElements);
          } catch (e) {
            throw new (0, o.EncodingError)(e);
          }
        }
      }, {
        key: "decode",
        value: function decode(e) {
          try {
            this.value = a.FixedIntegerListEncoder.decode(e, this.elementBitStringLength, this.numElements);
          } catch (e) {
            throw new (0, i.DecodingError)(e);
          }
        }
      }, {
        key: "substring",
        value: function substring(e, t) {
          try {
            return d.StringUtil.substring(e, t, t + this.elementBitStringLength * this.numElements);
          } catch (e) {
            throw new (0, c.SubstringError)(e);
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return _toConsumableArray(_superPropGet(l, "getValue", this, 3)([]));
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          for (var t = _toConsumableArray(e), s = t.length; s < this.numElements; s++) t.push(0);
          t.length > this.numElements && (t = t.slice(0, this.numElements)), _superPropGet(l, "setValue", this, 3)([t]);
        }
      }]);
    }(n.AbstractEncodableBitStringDataType);
  }), o("46Ejl", function (t, s) {
    e(t.exports, "FixedIntegerListEncoder", function () {
      return a;
    });
    var n = r("i5YrW"),
      i = r("4PWs7"),
      o = r("3cOQ9");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "encode",
        value: function encode(e, t, s) {
          if (e.length > s) throw new (0, i.EncodingError)("Too many values '" + e.length + "'");
          for (var n = "", r = 0; r < e.length; r++) n += o.FixedIntegerEncoder.encode(e[r], t);
          for (; n.length < t * s;) n += "0";
          return n;
        }
      }, {
        key: "decode",
        value: function decode(e, t, s) {
          if (!/^[0-1]*$/.test(e)) throw new (0, n.DecodingError)("Undecodable FixedInteger '" + e + "'");
          if (e.length > t * s || e.length % t != 0) throw new (0, n.DecodingError)("Undecodable FixedIntegerList '" + e + "'");
          for (; e.length < t * s;) e += "0";
          e.length > t * s && (e = e.substring(0, t * s));
          for (var i = [], r = 0; r < e.length; r += t) i.push(o.FixedIntegerEncoder.decode(e.substring(r, r + t)));
          for (; i.length < s;) i.push(0);
          return i;
        }
      }]);
    }();
  }), o("8gF6H", function (t, s) {
    e(t.exports, "UsCaField", function () {
      return i;
    }), e(t.exports, "USCA_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USCA_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.SHARING_OPT_OUT_NOTICE = "SharingOptOutNotice", n.SENSITIVE_DATA_LIMIT_USE_NOTICE = "SensitiveDataLimitUseNotice", n.SALE_OPT_OUT = "SaleOptOut", n.SHARING_OPT_OUT = "SharingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.PERSONAL_DATA_CONSENTS = "PersonalDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "SaleOptOutNotice", "SharingOptOutNotice", "SensitiveDataLimitUseNotice", "SaleOptOut", "SharingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "PersonalDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("2g128", function (t, s) {
    e(t.exports, "UsCaGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("8gF6H");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco12) {
      function g(e) {
        var _this72;
        _classCallCheck(this, g);
        _this72 = _callSuper(this, g), _this72.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this72.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this72.decode(e);
        return _this72;
      }
      _inherits(g, _n$AbstractLazilyEnco12);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCA_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsCaField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsCaField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsCaField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCaGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("apkKM", function (t, s) {
    e(t.exports, "UsCo", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("cAnAK"),
      o = r("etdSP"),
      a = r("hfAHB");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco13) {
      function d(e) {
        var _this73;
        _classCallCheck(this, d);
        _this73 = _callSuper(this, d), e && e.length > 0 && _this73.decode(e);
        return _this73;
      }
      _inherits(d, _n$AbstractLazilyEnco13);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsCoCoreSegment)()), e.push(new (0, a.UsCoGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsCoField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsCoField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsCoField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 10, d.VERSION = 1, d.NAME = "usco";
  }), o("cAnAK", function (t, s) {
    e(t.exports, "UsCoCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("etdSP"),
      g = r("apkKM");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco14) {
      function E(e) {
        var _this74;
        _classCallCheck(this, E);
        _this74 = _callSuper(this, E), _this74.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this74.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this74.decode(e);
        return _this74;
      }
      _inherits(E, _n$AbstractLazilyEnco14);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCO_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class4() {
                _classCallCheck(this, _class4);
              }
              return _createClass(_class4, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class5() {
                _classCallCheck(this, _class5);
              }
              return _createClass(_class5, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsCoField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsCo.VERSION)), s.put(u.UsCoField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsCoField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class6() {
              _classCallCheck(this, _class6);
            }
            return _createClass(_class6, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsCoField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCoField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCoCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("etdSP", function (t, s) {
    e(t.exports, "UsCoField", function () {
      return i;
    }), e(t.exports, "USCO_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USCO_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("hfAHB", function (t, s) {
    e(t.exports, "UsCoGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("etdSP");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco15) {
      function g(e) {
        var _this75;
        _classCallCheck(this, g);
        _this75 = _callSuper(this, g), _this75.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this75.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this75.decode(e);
        return _this75;
      }
      _inherits(g, _n$AbstractLazilyEnco15);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCO_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsCoField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsCoField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsCoField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCoGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("jH5V0", function (t, s) {
    e(t.exports, "UsCt", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("cbzi4"),
      o = r("bgY2y"),
      a = r("84m5W");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco16) {
      function d(e) {
        var _this76;
        _classCallCheck(this, d);
        _this76 = _callSuper(this, d), e && e.length > 0 && _this76.decode(e);
        return _this76;
      }
      _inherits(d, _n$AbstractLazilyEnco16);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsCtCoreSegment)()), e.push(new (0, a.UsCtGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsCtField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsCtField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsCtField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 12, d.VERSION = 1, d.NAME = "usct";
  }), o("cbzi4", function (t, s) {
    e(t.exports, "UsCtCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("bgY2y"),
      g = r("jH5V0");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco17) {
      function E(e) {
        var _this77;
        _classCallCheck(this, E);
        _this77 = _callSuper(this, E), _this77.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this77.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this77.decode(e);
        return _this77;
      }
      _inherits(E, _n$AbstractLazilyEnco17);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCT_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class7() {
                _classCallCheck(this, _class7);
              }
              return _createClass(_class7, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class8() {
                _classCallCheck(this, _class8);
              }
              return _createClass(_class8, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsCtField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsCt.VERSION)), s.put(u.UsCtField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsCtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsCtField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class9() {
              _classCallCheck(this, _class9);
            }
            return _createClass(_class9, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsCtField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsCtField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCtCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("bgY2y", function (t, s) {
    e(t.exports, "UsCtField", function () {
      return i;
    }), e(t.exports, "USCT_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USCT_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("84m5W", function (t, s) {
    e(t.exports, "UsCtGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("bgY2y");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco18) {
      function g(e) {
        var _this78;
        _classCallCheck(this, g);
        _this78 = _callSuper(this, g), _this78.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this78.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this78.decode(e);
        return _this78;
      }
      _inherits(g, _n$AbstractLazilyEnco18);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USCT_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsCtField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsCtField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsCtField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsCtGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("4Q1MM", function (t, s) {
    e(t.exports, "UsDe", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("cuEG3"),
      o = r("ci4jX"),
      a = r("aB9Pf");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco19) {
      function d(e) {
        var _this79;
        _classCallCheck(this, d);
        _this79 = _callSuper(this, d), e && e.length > 0 && _this79.decode(e);
        return _this79;
      }
      _inherits(d, _n$AbstractLazilyEnco19);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsDeCoreSegment)()), e.push(new (0, a.UsDeGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsDeField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsDeField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsDeField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 17, d.VERSION = 1, d.NAME = "usde";
  }), o("cuEG3", function (t, s) {
    e(t.exports, "UsDeCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("ci4jX"),
      g = r("4Q1MM");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco20) {
      function E(e) {
        var _this80;
        _classCallCheck(this, E);
        _this80 = _callSuper(this, E), _this80.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this80.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this80.decode(e);
        return _this80;
      }
      _inherits(E, _n$AbstractLazilyEnco20);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USDE_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class0() {
                _classCallCheck(this, _class0);
              }
              return _createClass(_class0, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class1() {
                _classCallCheck(this, _class1);
              }
              return _createClass(_class1, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsDeField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsDe.VERSION)), s.put(u.UsDeField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsDeField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsDeField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class10() {
              _classCallCheck(this, _class10);
            }
            return _createClass(_class10, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsDeField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsDeField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsDeCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("ci4jX", function (t, s) {
    e(t.exports, "UsDeField", function () {
      return i;
    }), e(t.exports, "USDE_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USDE_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("aB9Pf", function (t, s) {
    e(t.exports, "UsDeGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("ci4jX");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco21) {
      function g(e) {
        var _this81;
        _classCallCheck(this, g);
        _this81 = _callSuper(this, g), _this81.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this81.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this81.decode(e);
        return _this81;
      }
      _inherits(g, _n$AbstractLazilyEnco21);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USDE_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsDeField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsDeField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsDeField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsDeGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("gN6FU", function (t, s) {
    e(t.exports, "UsFl", function () {
      return o;
    });
    var n = r("1S0eL"),
      i = r("lsa69");
    var o = /*#__PURE__*/function (_n$AbstractLazilyEnco22) {
      function o(e) {
        var _this82;
        _classCallCheck(this, o);
        _this82 = _callSuper(this, o), e && e.length > 0 && _this82.decode(e);
        return _this82;
      }
      _inherits(o, _n$AbstractLazilyEnco22);
      return _createClass(o, [{
        key: "getId",
        value: function getId() {
          return o.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return o.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return o.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsFlCoreSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < t.length; n++) s.length > n && t[n].decode(s[n]);
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          for (var t = [], s = 0; s < e.length; s++) {
            var n = e[s];
            t.push(n.encode());
          }
          return t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    o.ID = 13, o.VERSION = 1, o.NAME = "usfl";
  }), o("lsa69", function (t, s) {
    e(t.exports, "UsFlCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("150H2"),
      g = r("gN6FU");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco23) {
      function E(e) {
        var _this83;
        _classCallCheck(this, E);
        _this83 = _callSuper(this, E), _this83.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this83.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this83.decode(e);
        return _this83;
      }
      _inherits(E, _n$AbstractLazilyEnco23);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USFL_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class11() {
                _classCallCheck(this, _class11);
              }
              return _createClass(_class11, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class12() {
                _classCallCheck(this, _class12);
              }
              return _createClass(_class12, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsFlField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsFl.VERSION)), s.put(u.UsFlField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsFlField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsFlField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class13() {
              _classCallCheck(this, _class13);
            }
            return _createClass(_class13, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsFlField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsFlField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsFlCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("150H2", function (t, s) {
    e(t.exports, "UsFlField", function () {
      return i;
    }), e(t.exports, "USFL_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"];
  }), o("cgeNI", function (t, s) {
    e(t.exports, "UsIa", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("7sjz5"),
      o = r("hB8Xl"),
      a = r("fuVHM");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco24) {
      function d(e) {
        var _this84;
        _classCallCheck(this, d);
        _this84 = _callSuper(this, d), e && e.length > 0 && _this84.decode(e);
        return _this84;
      }
      _inherits(d, _n$AbstractLazilyEnco24);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsIaCoreSegment)()), e.push(new (0, a.UsIaGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsIaField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsIaField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsIaField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 18, d.VERSION = 1, d.NAME = "usia";
  }), o("7sjz5", function (t, s) {
    e(t.exports, "UsIaCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("hB8Xl"),
      g = r("cgeNI");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco25) {
      function E(e) {
        var _this85;
        _classCallCheck(this, E);
        _this85 = _callSuper(this, E), _this85.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this85.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this85.decode(e);
        return _this85;
      }
      _inherits(E, _n$AbstractLazilyEnco25);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USIA_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class14() {
                _classCallCheck(this, _class14);
              }
              return _createClass(_class14, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class15() {
                _classCallCheck(this, _class15);
              }
              return _createClass(_class15, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsIaField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsIa.VERSION)), s.put(u.UsIaField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.SENSITIVE_DATA_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsIaField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class16() {
              _classCallCheck(this, _class16);
            }
            return _createClass(_class16, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsIaField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsIaField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsIaCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("hB8Xl", function (t, s) {
    e(t.exports, "UsIaField", function () {
      return i;
    }), e(t.exports, "USIA_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USIA_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SENSITIVE_DATA_OPT_OUT_NOTICE = "SensitiveDataOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SensitiveDataOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("fuVHM", function (t, s) {
    e(t.exports, "UsIaGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("hB8Xl");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco26) {
      function g(e) {
        var _this86;
        _classCallCheck(this, g);
        _this86 = _callSuper(this, g), _this86.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this86.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this86.decode(e);
        return _this86;
      }
      _inherits(g, _n$AbstractLazilyEnco26);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USIA_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsIaField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsIaField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsIaField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsIaGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("iE2As", function (t, s) {
    e(t.exports, "UsMt", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("gQgb1"),
      o = r("ivG9a"),
      a = r("8yLJ0");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco27) {
      function d(e) {
        var _this87;
        _classCallCheck(this, d);
        _this87 = _callSuper(this, d), e && e.length > 0 && _this87.decode(e);
        return _this87;
      }
      _inherits(d, _n$AbstractLazilyEnco27);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsMtCoreSegment)()), e.push(new (0, a.UsMtGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsMtField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsMtField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsMtField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 14, d.VERSION = 1, d.NAME = "usmt";
  }), o("gQgb1", function (t, s) {
    e(t.exports, "UsMtCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("ivG9a"),
      g = r("iE2As");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco28) {
      function E(e) {
        var _this88;
        _classCallCheck(this, E);
        _this88 = _callSuper(this, E), _this88.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this88.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this88.decode(e);
        return _this88;
      }
      _inherits(E, _n$AbstractLazilyEnco28);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USMT_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class17() {
                _classCallCheck(this, _class17);
              }
              return _createClass(_class17, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class18() {
                _classCallCheck(this, _class18);
              }
              return _createClass(_class18, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsMtField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsMt.VERSION)), s.put(u.UsMtField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsMtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsMtField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class19() {
              _classCallCheck(this, _class19);
            }
            return _createClass(_class19, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsMtField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsMtField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsMtCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("ivG9a", function (t, s) {
    e(t.exports, "UsMtField", function () {
      return i;
    }), e(t.exports, "USMT_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USMT_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("8yLJ0", function (t, s) {
    e(t.exports, "UsMtGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("ivG9a");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco29) {
      function g(e) {
        var _this89;
        _classCallCheck(this, g);
        _this89 = _callSuper(this, g), _this89.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this89.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this89.decode(e);
        return _this89;
      }
      _inherits(g, _n$AbstractLazilyEnco29);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USMT_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsMtField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsMtField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsMtField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsMtGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("abpmD", function (t, s) {
    e(t.exports, "UsNat", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("e73oo"),
      o = r("gyyOf"),
      a = r("8Ssxy");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco30) {
      function d(e) {
        var _this90;
        _classCallCheck(this, d);
        _this90 = _callSuper(this, d), e && e.length > 0 && _this90.decode(e);
        return _this90;
      }
      _inherits(d, _n$AbstractLazilyEnco30);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsNatCoreSegment)()), e.push(new (0, a.UsNatGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsNatField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsNatField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsNatField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 7, d.VERSION = 1, d.NAME = "usnat";
  }), o("e73oo", function (t, s) {
    e(t.exports, "UsNatCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("gyyOf"),
      g = r("abpmD");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco31) {
      function E(e) {
        var _this91;
        _classCallCheck(this, E);
        _this91 = _callSuper(this, E), _this91.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this91.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this91.decode(e);
        return _this91;
      }
      _inherits(E, _n$AbstractLazilyEnco31);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNAT_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class20() {
                _classCallCheck(this, _class20);
              }
              return _createClass(_class20, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class21() {
                _classCallCheck(this, _class21);
              }
              return _createClass(_class21, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsNatField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsNat.VERSION)), s.put(u.UsNatField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SHARING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SENSITIVE_DATA_LIMIT_USE_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SHARING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsNatField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsNatField.PERSONAL_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class22() {
              _classCallCheck(this, _class22);
            }
            return _createClass(_class22, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsNatField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNatField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            66 == s.length && (s = s.substring(0, 48) + "00000000" + s.substring(48, 52) + "00" + s.substring(52, 62)), this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNatCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("gyyOf", function (t, s) {
    e(t.exports, "UsNatField", function () {
      return i;
    }), e(t.exports, "USNAT_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USNAT_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.SHARING_OPT_OUT_NOTICE = "SharingOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE = "SensitiveDataProcessingOptOutNotice", n.SENSITIVE_DATA_LIMIT_USE_NOTICE = "SensitiveDataLimitUseNotice", n.SALE_OPT_OUT = "SaleOptOut", n.SHARING_OPT_OUT = "SharingOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.PERSONAL_DATA_CONSENTS = "PersonalDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "SharingOptOutNotice", "TargetedAdvertisingOptOutNotice", "SensitiveDataProcessingOptOutNotice", "SensitiveDataLimitUseNotice", "SaleOptOut", "SharingOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "PersonalDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("8Ssxy", function (t, s) {
    e(t.exports, "UsNatGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("gyyOf");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco32) {
      function g(e) {
        var _this92;
        _classCallCheck(this, g);
        _this92 = _callSuper(this, g), _this92.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this92.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this92.decode(e);
        return _this92;
      }
      _inherits(g, _n$AbstractLazilyEnco32);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNAT_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsNatField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsNatField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsNatField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNatGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("aHRLr", function (t, s) {
    e(t.exports, "UsNe", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("fijoe"),
      o = r("cMVHT"),
      a = r("etMam");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco33) {
      function d(e) {
        var _this93;
        _classCallCheck(this, d);
        _this93 = _callSuper(this, d), e && e.length > 0 && _this93.decode(e);
        return _this93;
      }
      _inherits(d, _n$AbstractLazilyEnco33);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsNeCoreSegment)()), e.push(new (0, a.UsNeGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsNeField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsNeField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsNeField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 19, d.VERSION = 1, d.NAME = "usne";
  }), o("fijoe", function (t, s) {
    e(t.exports, "UsNeCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("cMVHT"),
      g = r("aHRLr");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco34) {
      function E(e) {
        var _this94;
        _classCallCheck(this, E);
        _this94 = _callSuper(this, E), _this94.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this94.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this94.decode(e);
        return _this94;
      }
      _inherits(E, _n$AbstractLazilyEnco34);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNE_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class23() {
                _classCallCheck(this, _class23);
              }
              return _createClass(_class23, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class24() {
                _classCallCheck(this, _class24);
              }
              return _createClass(_class24, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsNeField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsNe.VERSION)), s.put(u.UsNeField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsNeField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class25() {
              _classCallCheck(this, _class25);
            }
            return _createClass(_class25, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsNeField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNeField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNeCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("cMVHT", function (t, s) {
    e(t.exports, "UsNeField", function () {
      return i;
    }), e(t.exports, "USNE_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USNE_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("etMam", function (t, s) {
    e(t.exports, "UsNeGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("cMVHT");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco35) {
      function g(e) {
        var _this95;
        _classCallCheck(this, g);
        _this95 = _callSuper(this, g), _this95.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this95.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this95.decode(e);
        return _this95;
      }
      _inherits(g, _n$AbstractLazilyEnco35);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNE_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsNeField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsNeField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsNeField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNeGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("2SZay", function (t, s) {
    e(t.exports, "UsNh", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("dhYXZ"),
      o = r("af5WX"),
      a = r("cFckf");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco36) {
      function d(e) {
        var _this96;
        _classCallCheck(this, d);
        _this96 = _callSuper(this, d), e && e.length > 0 && _this96.decode(e);
        return _this96;
      }
      _inherits(d, _n$AbstractLazilyEnco36);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsNhCoreSegment)()), e.push(new (0, a.UsNhGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsNhField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsNhField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsNhField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 20, d.VERSION = 1, d.NAME = "usnh";
  }), o("dhYXZ", function (t, s) {
    e(t.exports, "UsNhCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("af5WX"),
      g = r("2SZay");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco37) {
      function E(e) {
        var _this97;
        _classCallCheck(this, E);
        _this97 = _callSuper(this, E), _this97.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this97.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this97.decode(e);
        return _this97;
      }
      _inherits(E, _n$AbstractLazilyEnco37);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNH_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class26() {
                _classCallCheck(this, _class26);
              }
              return _createClass(_class26, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class27() {
                _classCallCheck(this, _class27);
              }
              return _createClass(_class27, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsNhField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsNh.VERSION)), s.put(u.UsNhField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsNhField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsNhField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class28() {
              _classCallCheck(this, _class28);
            }
            return _createClass(_class28, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsNhField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNhField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNhCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("af5WX", function (t, s) {
    e(t.exports, "UsNhField", function () {
      return i;
    }), e(t.exports, "USNH_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USNH_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("cFckf", function (t, s) {
    e(t.exports, "UsNhGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("af5WX");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco38) {
      function g(e) {
        var _this98;
        _classCallCheck(this, g);
        _this98 = _callSuper(this, g), _this98.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this98.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this98.decode(e);
        return _this98;
      }
      _inherits(g, _n$AbstractLazilyEnco38);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNH_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsNhField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsNhField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsNhField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNhGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("725FB", function (t, s) {
    e(t.exports, "UsNj", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("l0kNI"),
      o = r("7XekZ"),
      a = r("ddnlx");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco39) {
      function d(e) {
        var _this99;
        _classCallCheck(this, d);
        _this99 = _callSuper(this, d), e && e.length > 0 && _this99.decode(e);
        return _this99;
      }
      _inherits(d, _n$AbstractLazilyEnco39);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsNjCoreSegment)()), e.push(new (0, a.UsNjGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsNjField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsNjField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsNjField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 21, d.VERSION = 1, d.NAME = "usnj";
  }), o("l0kNI", function (t, s) {
    e(t.exports, "UsNjCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("7XekZ"),
      g = r("725FB");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco40) {
      function E(e) {
        var _this100;
        _classCallCheck(this, E);
        _this100 = _callSuper(this, E), _this100.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this100.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this100.decode(e);
        return _this100;
      }
      _inherits(E, _n$AbstractLazilyEnco40);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNJ_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class29() {
                _classCallCheck(this, _class29);
              }
              return _createClass(_class29, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class30() {
                _classCallCheck(this, _class30);
              }
              return _createClass(_class30, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsNjField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsNj.VERSION)), s.put(u.UsNjField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsNjField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsNjField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class31() {
              _classCallCheck(this, _class31);
            }
            return _createClass(_class31, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsNjField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsNjField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNjCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("7XekZ", function (t, s) {
    e(t.exports, "UsNjField", function () {
      return i;
    }), e(t.exports, "USNJ_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USNJ_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("ddnlx", function (t, s) {
    e(t.exports, "UsNjGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("7XekZ");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco41) {
      function g(e) {
        var _this101;
        _classCallCheck(this, g);
        _this101 = _callSuper(this, g), _this101.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this101.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this101.decode(e);
        return _this101;
      }
      _inherits(g, _n$AbstractLazilyEnco41);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USNJ_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsNjField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsNjField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsNjField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsNjGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("3farY", function (t, s) {
    e(t.exports, "UsOr", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("hBTQx"),
      o = r("5d4en"),
      a = r("1atJA");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco42) {
      function d(e) {
        var _this102;
        _classCallCheck(this, d);
        _this102 = _callSuper(this, d), e && e.length > 0 && _this102.decode(e);
        return _this102;
      }
      _inherits(d, _n$AbstractLazilyEnco42);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsOrCoreSegment)()), e.push(new (0, a.UsOrGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsOrField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsOrField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsOrField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 15, d.VERSION = 1, d.NAME = "usor";
  }), o("hBTQx", function (t, s) {
    e(t.exports, "UsOrCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("5d4en"),
      g = r("3farY");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco43) {
      function E(e) {
        var _this103;
        _classCallCheck(this, E);
        _this103 = _callSuper(this, E), _this103.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this103.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this103.decode(e);
        return _this103;
      }
      _inherits(E, _n$AbstractLazilyEnco43);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USOR_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class32() {
                _classCallCheck(this, _class32);
              }
              return _createClass(_class32, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class33() {
                _classCallCheck(this, _class33);
              }
              return _createClass(_class33, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsOrField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsOr.VERSION)), s.put(u.UsOrField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsOrField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0]).withValidator(t)), s.put(u.UsOrField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class34() {
              _classCallCheck(this, _class34);
            }
            return _createClass(_class34, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsOrField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsOrField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsOrCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("5d4en", function (t, s) {
    e(t.exports, "UsOrField", function () {
      return i;
    }), e(t.exports, "USOR_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USOR_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("1atJA", function (t, s) {
    e(t.exports, "UsOrGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("5d4en");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco44) {
      function g(e) {
        var _this104;
        _classCallCheck(this, g);
        _this104 = _callSuper(this, g), _this104.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this104.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this104.decode(e);
        return _this104;
      }
      _inherits(g, _n$AbstractLazilyEnco44);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USOR_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsOrField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsOrField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsOrField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsOrGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("lOurV", function (t, s) {
    e(t.exports, "UsTn", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("ipRRw"),
      o = r("2oFcx"),
      a = r("lzHgq");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco45) {
      function d(e) {
        var _this105;
        _classCallCheck(this, d);
        _this105 = _callSuper(this, d), e && e.length > 0 && _this105.decode(e);
        return _this105;
      }
      _inherits(d, _n$AbstractLazilyEnco45);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsTnCoreSegment)()), e.push(new (0, a.UsTnGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsTnField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsTnField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsTnField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 22, d.VERSION = 1, d.NAME = "ustn";
  }), o("ipRRw", function (t, s) {
    e(t.exports, "UsTnCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("2oFcx"),
      g = r("lOurV");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco46) {
      function E(e) {
        var _this106;
        _classCallCheck(this, E);
        _this106 = _callSuper(this, E), _this106.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this106.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this106.decode(e);
        return _this106;
      }
      _inherits(E, _n$AbstractLazilyEnco46);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USTN_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class35() {
                _classCallCheck(this, _class35);
              }
              return _createClass(_class35, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class36() {
                _classCallCheck(this, _class36);
              }
              return _createClass(_class36, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsTnField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsTn.VERSION)), s.put(u.UsTnField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsTnField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class37() {
              _classCallCheck(this, _class37);
            }
            return _createClass(_class37, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsTnField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTnField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsTnCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("2oFcx", function (t, s) {
    e(t.exports, "UsTnField", function () {
      return i;
    }), e(t.exports, "USTN_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USTN_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("lzHgq", function (t, s) {
    e(t.exports, "UsTnGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("2oFcx");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco47) {
      function g(e) {
        var _this107;
        _classCallCheck(this, g);
        _this107 = _callSuper(this, g), _this107.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this107.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this107.decode(e);
        return _this107;
      }
      _inherits(g, _n$AbstractLazilyEnco47);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USTN_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsTnField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsTnField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsTnField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsTnGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("imKjv", function (t, s) {
    e(t.exports, "UsTx", function () {
      return d;
    });
    var n = r("1S0eL"),
      i = r("9i7ts"),
      o = r("kxuwt"),
      a = r("isZIH");
    var d = /*#__PURE__*/function (_n$AbstractLazilyEnco48) {
      function d(e) {
        var _this108;
        _classCallCheck(this, d);
        _this108 = _callSuper(this, d), e && e.length > 0 && _this108.decode(e);
        return _this108;
      }
      _inherits(d, _n$AbstractLazilyEnco48);
      return _createClass(d, [{
        key: "getId",
        value: function getId() {
          return d.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return d.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return d.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsTxCoreSegment)()), e.push(new (0, a.UsTxGpcSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) {
            var s = e.split(".");
            s.length > 0 && t[0].decode(s[0]), s.length > 1 ? (t[1].setFieldValue(o.UsTxField.GPC_SEGMENT_INCLUDED, !0), t[1].decode(s[1])) : t[1].setFieldValue(o.UsTxField.GPC_SEGMENT_INCLUDED, !1);
          }
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          var t = [];
          return e.length >= 1 && (t.push(e[0].encode()), e.length >= 2 && !0 === e[1].getFieldValue(o.UsTxField.GPC_SEGMENT_INCLUDED) && t.push(e[1].encode())), t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    d.ID = 16, d.VERSION = 1, d.NAME = "ustx";
  }), o("9i7ts", function (t, s) {
    e(t.exports, "UsTxCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("kxuwt"),
      g = r("imKjv");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco49) {
      function E(e) {
        var _this109;
        _classCallCheck(this, E);
        _this109 = _callSuper(this, E), _this109.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this109.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this109.decode(e);
        return _this109;
      }
      _inherits(E, _n$AbstractLazilyEnco49);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USTX_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class38() {
                _classCallCheck(this, _class38);
              }
              return _createClass(_class38, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class39() {
                _classCallCheck(this, _class39);
              }
              return _createClass(_class39, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsTxField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsTx.VERSION)), s.put(u.UsTxField.PROCESSING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsTxField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.ADDITIONAL_DATA_PROCESSING_CONSENT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class40() {
              _classCallCheck(this, _class40);
            }
            return _createClass(_class40, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsTxField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsTxField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsTxCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("kxuwt", function (t, s) {
    e(t.exports, "UsTxField", function () {
      return i;
    }), e(t.exports, "USTX_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    }), e(t.exports, "USTX_GPC_SEGMENT_FIELD_NAMES", function () {
      return o;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.PROCESSING_NOTICE = "ProcessingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.ADDITIONAL_DATA_PROCESSING_CONSENT = "AdditionalDataProcessingConsent", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n.GPC_SEGMENT_TYPE = "GpcSegmentType", n.GPC_SEGMENT_INCLUDED = "GpcSegmentIncluded", n.GPC = "Gpc", n),
      r = ["Version", "ProcessingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "AdditionalDataProcessingConsent", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"],
      o = ["GpcSegmentType", "Gpc"];
  }), o("isZIH", function (t, s) {
    e(t.exports, "UsTxGpcSegment", function () {
      return g;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("adN7C"),
      l = r("eUO9E"),
      u = r("kxuwt");
    var g = /*#__PURE__*/function (_n$AbstractLazilyEnco50) {
      function g(e) {
        var _this110;
        _classCallCheck(this, g);
        _this110 = _callSuper(this, g), _this110.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this110.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this110.decode(e);
        return _this110;
      }
      _inherits(g, _n$AbstractLazilyEnco50);
      return _createClass(g, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USTX_GPC_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (0, d.EncodableBitStringFields)();
          return e.put(u.UsTxField.GPC_SEGMENT_TYPE.toString(), new (0, l.EncodableFixedInteger)(2, 1)), e.put(u.UsTxField.GPC_SEGMENT_INCLUDED.toString(), new (0, c.EncodableBoolean)(!0)), e.put(u.UsTxField.GPC.toString(), new (0, c.EncodableBoolean)(!1)), e;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsTxGpcSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("5rUbP", function (t, s) {
    e(t.exports, "UsUt", function () {
      return o;
    });
    var n = r("1S0eL"),
      i = r("S8KVa");
    var o = /*#__PURE__*/function (_n$AbstractLazilyEnco51) {
      function o(e) {
        var _this111;
        _classCallCheck(this, o);
        _this111 = _callSuper(this, o), e && e.length > 0 && _this111.decode(e);
        return _this111;
      }
      _inherits(o, _n$AbstractLazilyEnco51);
      return _createClass(o, [{
        key: "getId",
        value: function getId() {
          return o.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return o.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return o.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsUtCoreSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < t.length; n++) s.length > n && t[n].decode(s[n]);
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          for (var t = [], s = 0; s < e.length; s++) {
            var n = e[s];
            t.push(n.encode());
          }
          return t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    o.ID = 11, o.VERSION = 1, o.NAME = "usut";
  }), o("S8KVa", function (t, s) {
    e(t.exports, "UsUtCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("fPHZ8"),
      g = r("5rUbP");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco52) {
      function E(e) {
        var _this112;
        _classCallCheck(this, E);
        _this112 = _callSuper(this, E), _this112.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this112.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this112.decode(e);
        return _this112;
      }
      _inherits(E, _n$AbstractLazilyEnco52);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USUT_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class41() {
                _classCallCheck(this, _class41);
              }
              return _createClass(_class41, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class42() {
                _classCallCheck(this, _class42);
              }
              return _createClass(_class42, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsUtField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsUt.VERSION)), s.put(u.UsUtField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsUtField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class43() {
              _classCallCheck(this, _class43);
            }
            return _createClass(_class43, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsUtField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsUtField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsUtCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("fPHZ8", function (t, s) {
    e(t.exports, "UsUtField", function () {
      return i;
    }), e(t.exports, "USUT_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SENSITIVE_DATA_PROCESSING_OPT_OUT_NOTICE = "SensitiveDataProcessingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SensitiveDataProcessingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"];
  }), o("bdTlG", function (t, s) {
    e(t.exports, "UsVa", function () {
      return o;
    });
    var n = r("1S0eL"),
      i = r("28v2b");
    var o = /*#__PURE__*/function (_n$AbstractLazilyEnco53) {
      function o(e) {
        var _this113;
        _classCallCheck(this, o);
        _this113 = _callSuper(this, o), e && e.length > 0 && _this113.decode(e);
        return _this113;
      }
      _inherits(o, _n$AbstractLazilyEnco53);
      return _createClass(o, [{
        key: "getId",
        value: function getId() {
          return o.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return o.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return o.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UsVaCoreSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < t.length; n++) s.length > n && t[n].decode(s[n]);
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          for (var t = [], s = 0; s < e.length; s++) {
            var n = e[s];
            t.push(n.encode());
          }
          return t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    o.ID = 9, o.VERSION = 1, o.NAME = "usva";
  }), o("28v2b", function (t, s) {
    e(t.exports, "UsVaCoreSegment", function () {
      return E;
    });
    var n = r("3kEY4"),
      i = r("67Tmf"),
      o = r("1ebbL"),
      a = r("i5YrW"),
      d = r("jiJho"),
      c = r("eUO9E"),
      l = r("dEzTT"),
      u = r("7okhl"),
      g = r("bdTlG");
    var E = /*#__PURE__*/function (_n$AbstractLazilyEnco54) {
      function E(e) {
        var _this114;
        _classCallCheck(this, E);
        _this114 = _callSuper(this, E), _this114.base64UrlEncoder = o.CompressedBase64UrlEncoder.getInstance(), _this114.bitStringEncoder = i.BitStringEncoder.getInstance(), e && _this114.decode(e);
        return _this114;
      }
      _inherits(E, _n$AbstractLazilyEnco54);
      return _createClass(E, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return u.USVA_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class44() {
                _classCallCheck(this, _class44);
              }
              return _createClass(_class44, [{
                key: "test",
                value: function test(e) {
                  return e >= 0 && e <= 2;
                }
              }]);
            }())(),
            t = new (/*#__PURE__*/function () {
              function _class45() {
                _classCallCheck(this, _class45);
              }
              return _createClass(_class45, [{
                key: "test",
                value: function test(e) {
                  for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    if (s < 0 || s > 2) return !1;
                  }
                  return !0;
                }
              }]);
            }())(),
            s = new (0, d.EncodableBitStringFields)();
          return s.put(u.UsVaField.VERSION.toString(), new (0, c.EncodableFixedInteger)(6, g.UsVa.VERSION)), s.put(u.UsVaField.SHARING_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.SALE_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.TARGETED_ADVERTISING_OPT_OUT_NOTICE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.SALE_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.TARGETED_ADVERTISING_OPT_OUT.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.SENSITIVE_DATA_PROCESSING.toString(), new (0, l.EncodableFixedIntegerList)(2, [0, 0, 0, 0, 0, 0, 0, 0]).withValidator(t)), s.put(u.UsVaField.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.MSPA_COVERED_TRANSACTION.toString(), new (0, c.EncodableFixedInteger)(2, 1).withValidator(new (/*#__PURE__*/function () {
            function _class46() {
              _classCallCheck(this, _class46);
            }
            return _createClass(_class46, [{
              key: "test",
              value: function test(e) {
                return e >= 1 && e <= 2;
              }
            }]);
          }())())), s.put(u.UsVaField.MSPA_OPT_OUT_OPTION_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s.put(u.UsVaField.MSPA_SERVICE_PROVIDER_MODE.toString(), new (0, c.EncodableFixedInteger)(2, 0).withValidator(e)), s;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = this.bitStringEncoder.encode(e, this.getFieldNames());
          return this.base64UrlEncoder.encode(t);
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          (null == e || 0 === e.length) && this.fields.reset(t);
          try {
            var s = this.base64UrlEncoder.decode(e);
            this.bitStringEncoder.decode(s, this.getFieldNames(), t);
          } catch (t) {
            throw new (0, a.DecodingError)("Unable to decode UsVaCoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("7okhl", function (t, s) {
    e(t.exports, "UsVaField", function () {
      return i;
    }), e(t.exports, "USVA_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.SHARING_NOTICE = "SharingNotice", n.SALE_OPT_OUT_NOTICE = "SaleOptOutNotice", n.TARGETED_ADVERTISING_OPT_OUT_NOTICE = "TargetedAdvertisingOptOutNotice", n.SALE_OPT_OUT = "SaleOptOut", n.TARGETED_ADVERTISING_OPT_OUT = "TargetedAdvertisingOptOut", n.SENSITIVE_DATA_PROCESSING = "SensitiveDataProcessing", n.KNOWN_CHILD_SENSITIVE_DATA_CONSENTS = "KnownChildSensitiveDataConsents", n.MSPA_COVERED_TRANSACTION = "MspaCoveredTransaction", n.MSPA_OPT_OUT_OPTION_MODE = "MspaOptOutOptionMode", n.MSPA_SERVICE_PROVIDER_MODE = "MspaServiceProviderMode", n),
      r = ["Version", "SharingNotice", "SaleOptOutNotice", "TargetedAdvertisingOptOutNotice", "SaleOptOut", "TargetedAdvertisingOptOut", "SensitiveDataProcessing", "KnownChildSensitiveDataConsents", "MspaCoveredTransaction", "MspaOptOutOptionMode", "MspaServiceProviderMode"];
  }), o("cbTmj", function (t, s) {
    e(t.exports, "UspV1", function () {
      return o;
    });
    var n = r("1S0eL"),
      i = r("lMjZu");
    var o = /*#__PURE__*/function (_n$AbstractLazilyEnco55) {
      function o(e) {
        var _this115;
        _classCallCheck(this, o);
        _this115 = _callSuper(this, o), e && e.length > 0 && _this115.decode(e);
        return _this115;
      }
      _inherits(o, _n$AbstractLazilyEnco55);
      return _createClass(o, [{
        key: "getId",
        value: function getId() {
          return o.ID;
        }
      }, {
        key: "getName",
        value: function getName() {
          return o.NAME;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return o.VERSION;
        }
      }, {
        key: "initializeSegments",
        value: function initializeSegments() {
          var e = [];
          return e.push(new (0, i.UspV1CoreSegment)()), e;
        }
      }, {
        key: "decodeSection",
        value: function decodeSection(e) {
          var t = this.initializeSegments();
          if (null != e && 0 !== e.length) for (var s = e.split("."), n = 0; n < t.length; n++) s.length > n && t[n].decode(s[n]);
          return t;
        }
      }, {
        key: "encodeSection",
        value: function encodeSection(e) {
          for (var t = [], s = 0; s < e.length; s++) {
            var n = e[s];
            t.push(n.encode());
          }
          return t.join(".");
        }
      }]);
    }(n.AbstractLazilyEncodableSection);
    o.ID = 6, o.VERSION = 1, o.NAME = "uspv1";
  }), o("lMjZu", function (t, s) {
    e(t.exports, "UspV1CoreSegment", function () {
      return u;
    });
    var n = r("3kEY4"),
      i = r("i5YrW"),
      o = r("029DL"),
      a = r("3Xk89"),
      d = r("iFbOW"),
      c = r("aS9dN"),
      l = r("cbTmj");
    var u = /*#__PURE__*/function (_n$AbstractLazilyEnco56) {
      function u(e) {
        var _this116;
        _classCallCheck(this, u);
        _this116 = _callSuper(this, u), e && _this116.decode(e);
        return _this116;
      }
      _inherits(u, _n$AbstractLazilyEnco56);
      return _createClass(u, [{
        key: "getFieldNames",
        value: function getFieldNames() {
          return a.USPV1_CORE_SEGMENT_FIELD_NAMES;
        }
      }, {
        key: "initializeFields",
        value: function initializeFields() {
          var e = new (/*#__PURE__*/function () {
              function _class47() {
                _classCallCheck(this, _class47);
              }
              return _createClass(_class47, [{
                key: "test",
                value: function test(e) {
                  return "-" === e || "Y" === e || "N" === e;
                }
              }]);
            }())(),
            t = new (0, o.GenericFields)();
          return t.put(a.UspV1Field.VERSION, new (0, c.UnencodableInteger)(l.UspV1.VERSION)), t.put(a.UspV1Field.NOTICE, new (0, d.UnencodableCharacter)("-", e)), t.put(a.UspV1Field.OPT_OUT_SALE, new (0, d.UnencodableCharacter)("-", e)), t.put(a.UspV1Field.LSPA_COVERED, new (0, d.UnencodableCharacter)("-", e)), t;
        }
      }, {
        key: "encodeSegment",
        value: function encodeSegment(e) {
          var t = "";
          return t += e.get(a.UspV1Field.VERSION).getValue(), t += e.get(a.UspV1Field.NOTICE).getValue(), t += e.get(a.UspV1Field.OPT_OUT_SALE).getValue(), t += e.get(a.UspV1Field.LSPA_COVERED).getValue();
        }
      }, {
        key: "decodeSegment",
        value: function decodeSegment(e, t) {
          if (null == e || 4 != e.length) throw new (0, i.DecodingError)("Unable to decode UspV1CoreSegment '" + e + "'");
          try {
            t.get(a.UspV1Field.VERSION).setValue(parseInt(e.substring(0, 1))), t.get(a.UspV1Field.NOTICE).setValue(e.charAt(1)), t.get(a.UspV1Field.OPT_OUT_SALE).setValue(e.charAt(2)), t.get(a.UspV1Field.LSPA_COVERED).setValue(e.charAt(3));
          } catch (t) {
            throw new (0, i.DecodingError)("Unable to decode UspV1CoreSegment '" + e + "'");
          }
        }
      }]);
    }(n.AbstractLazilyEncodableSegment);
  }), o("029DL", function (t, s) {
    e(t.exports, "GenericFields", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
        this.fields = new Map();
      }
      return _createClass(n, [{
        key: "containsKey",
        value: function containsKey(e) {
          return this.fields.has(e);
        }
      }, {
        key: "put",
        value: function put(e, t) {
          this.fields.set(e, t);
        }
      }, {
        key: "get",
        value: function get(e) {
          return this.fields.get(e);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return new Map(this.fields);
        }
      }, {
        key: "reset",
        value: function reset(e) {
          var _this117 = this;
          this.fields.clear(), e.getAll().forEach(function (e, t) {
            _this117.fields.set(t, e);
          });
        }
      }]);
    }();
  }), o("3Xk89", function (t, s) {
    e(t.exports, "UspV1Field", function () {
      return i;
    }), e(t.exports, "USPV1_CORE_SEGMENT_FIELD_NAMES", function () {
      return r;
    });
    var n,
      i = ((n = {}).VERSION = "Version", n.NOTICE = "Notice", n.OPT_OUT_SALE = "OptOutSale", n.LSPA_COVERED = "LspaCovered", n),
      r = ["Version", "Notice", "OptOutSale", "LspaCovered"];
  }), o("iFbOW", function (t, s) {
    e(t.exports, "UnencodableCharacter", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e, t) {
        _classCallCheck(this, n);
        this.value = null, t ? this.validator = t : this.validator = new (/*#__PURE__*/function () {
          function _class48() {
            _classCallCheck(this, _class48);
          }
          return _createClass(_class48, [{
            key: "test",
            value: function test(e) {
              return !0;
            }
          }]);
        }())(), this.setValue(e);
      }
      return _createClass(n, [{
        key: "hasValue",
        value: function hasValue() {
          return null != this.value;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.value;
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          e ? this.value = e.charAt(0) : e = null;
        }
      }]);
    }();
  }), o("aS9dN", function (t, s) {
    e(t.exports, "UnencodableInteger", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e, t) {
        _classCallCheck(this, n);
        this.value = null, t ? this.validator = t : this.validator = new (/*#__PURE__*/function () {
          function _class49() {
            _classCallCheck(this, _class49);
          }
          return _createClass(_class49, [{
            key: "test",
            value: function test(e) {
              return !0;
            }
          }]);
        }())(), this.setValue(e);
      }
      return _createClass(n, [{
        key: "hasValue",
        value: function hasValue() {
          return null != this.value;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.value;
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          this.value = e;
        }
      }]);
    }();
  }), o("cPNIZ", function (e, t) {}), o("hQv2v", function (t, s) {
    e(t.exports, "TcfEuV2", function () {
      return r("igY57").TcfEuV2;
    }), r("1CrTA"), r("2o3FU"), r("4T6B8"), r("4ZthH"), r("dZrAM"), r("elM0N"), r("cvFrW"), r("bo5EF"), r("bcvSg");
  }), o("1CrTA", function (e, t) {
    r("2zp1f"), r("1ebbL"), r("erlU2");
  }), o("2o3FU", function (e, t) {
    r("67Tmf");
  }), o("4T6B8", function (e, t) {
    r("2BOf7"), r("bUQmq"), r("cO4ie"), r("7nY2D"), r("kcOZU"), r("adN7C"), r("iB6oL"), r("1Jz60"), r("cOd2Y"), r("ibImC"), r("kmrdu"), r("eUO9E"), r("dEzTT"), r("iJoLQ"), r("3RbT2"), r("7hkVp"), r("asKT6"), r("13Ybq"), r("iFbOW"), r("aS9dN"), r("b1lIj"), r("2kyU8");
  }), o("2BOf7", function (e, t) {
    r("8IIPQ"), r("gmF7R"), r("7L5eR"), r("9zHuN"), r("5TxBu"), r("3cOQ9"), r("46Ejl"), r("acGXV"), r("2jVbk"), r("frF3p"), r("akAyh");
  }), o("frF3p", function (e, t) {
    r("i5YrW"), r("9zHuN"), r("5TxBu"), r("3cOQ9");
  }), o("akAyh", function (e, t) {
    r("i5YrW"), r("5TxBu"), r("3cOQ9"), r("acGXV");
  }), o("bUQmq", function (e, t) {
    r("a1iBE");
  }), o("a1iBE", function (e, t) {}), o("7nY2D", function (e, t) {}), o("iB6oL", function (e, t) {}), o("cOd2Y", function (e, t) {
    var s = r("cO4ie");
    r("i5YrW"), r("4PWs7"), r("7L5eR"), r("bo5EF"), r("kqHgU"), r("2kyU8"), s.AbstractEncodableBitStringDataType;
  }), o("asKT6", function (e, t) {
    var s = r("cO4ie");
    r("i5YrW"), r("ibImC"), r("4PWs7"), r("9zHuN"), r("5TxBu"), r("3cOQ9"), r("kqHgU"), r("2kyU8"), s.AbstractEncodableBitStringDataType;
  }), o("4ZthH", function (e, t) {
    r("i5YrW"), r("4PWs7"), r("befIz"), r("ePnhW");
  }), o("dZrAM", function (e, t) {
    r("jiJho"), r("j1yJy"), r("029DL"), r("6vMY0"), r("4s5zi"), r("1Vc0q"), r("8gF6H"), r("etdSP"), r("bgY2y"), r("ci4jX"), r("150H2"), r("hB8Xl"), r("ivG9a"), r("gyyOf"), r("cMVHT"), r("af5WX"), r("7XekZ"), r("5d4en"), r("2oFcx"), r("kxuwt"), r("fPHZ8"), r("3Xk89"), r("7okhl");
  }), o("j1yJy", function (e, t) {}), o("elM0N", function (t, s) {
    e(t.exports, "TcfEuV2", function () {
      return r("igY57").TcfEuV2;
    }), r("1S0eL"), r("ggE4n"), r("cfpaP"), r("fRDWE"), r("dbMko"), r("igY57"), r("eiAIf"), r("apkKM"), r("jH5V0"), r("4Q1MM"), r("gN6FU"), r("cgeNI"), r("iE2As"), r("abpmD"), r("aHRLr"), r("2SZay"), r("725FB"), r("3farY"), r("lOurV"), r("imKjv"), r("5rUbP"), r("cbTmj"), r("bdTlG");
  }), o("ggE4n", function (e, t) {}), o("cvFrW", function (e, t) {
    r("3kEY4"), r("6Ulgs"), r("1bj6H"), r("94DZl"), r("f4iKv"), r("028CS"), r("l4bjL"), r("dBc1b"), r("beAra"), r("TIxNk"), r("2g128"), r("cAnAK"), r("hfAHB"), r("cbzi4"), r("84m5W"), r("cuEG3"), r("aB9Pf"), r("lsa69"), r("7sjz5"), r("fuVHM"), r("e73oo"), r("fijoe"), r("etMam"), r("dhYXZ"), r("cFckf"), r("l0kNI"), r("ddnlx"), r("gQgb1"), r("8yLJ0"), r("8Ssxy"), r("lMjZu"), r("hBTQx"), r("1atJA"), r("ipRRw"), r("lzHgq"), r("9i7ts"), r("isZIH"), r("S8KVa"), r("28v2b");
  }), o("6Ulgs", function (e, t) {}), o("6LOat", function (e, t) {
    r("6pVxf"), r("eWRCu"), r("iHQmW");
  }), o("6pVxf", function (e, t) {
    r("7yoM8");
  }), o("7yoM8", function (t, s) {
    e(t.exports, "JsonHttpClient", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, null, [{
        key: "absCall",
        value: function absCall(e, t, s, _n5) {
          return new Promise(function (i, r) {
            var o = new XMLHttpRequest();
            o.withCredentials = s, o.addEventListener("load", function () {
              if (o.readyState == XMLHttpRequest.DONE) if (o.status >= 200 && o.status < 300) {
                var e = o.response;
                if ("string" == typeof e) try {
                  e = JSON.parse(e);
                } catch (e) {}
                i(e);
              } else r(Error("HTTP Status: ".concat(o.status, " response type: ").concat(o.responseType)));
            }), o.addEventListener("error", function () {
              r(Error("error"));
            }), o.addEventListener("abort", function () {
              r(Error("aborted"));
            }), null === t ? o.open("GET", e, !0) : o.open("POST", e, !0), o.responseType = "json", o.timeout = _n5, o.ontimeout = function () {
              r(Error("Timeout " + _n5 + "ms " + e));
            }, o.send(t);
          });
        }
      }, {
        key: "post",
        value: function post(e, t) {
          var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            _n6 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return this.absCall(e, JSON.stringify(t), s, _n6);
        }
      }, {
        key: "fetch",
        value: function fetch(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return this.absCall(e, null, t, s);
        }
      }]);
    }();
  }), o("eWRCu", function (e, t) {
    r("lHfK2");
  }), o("lHfK2", function (t, s) {
    e(t.exports, "GVLError", function () {
      return n;
    });
    var n = /*#__PURE__*/function (_Error9) {
      function n(e) {
        var _this118;
        _classCallCheck(this, n);
        _this118 = _callSuper(this, n, [e]), _this118.name = "GVLError";
        return _this118;
      }
      _inherits(n, _Error9);
      return _createClass(n);
    }(/*#__PURE__*/_wrapNativeSuper(Error));
  }), o("iHQmW", function (e, t) {
    r("iIO0c"), r("kWoeC"), r("gsPDj"), r("a8Mob"), r("cbc2T"), r("kGbL0"), r("3vDKL"), r("jkfyR"), r("jGSJJ"), r("dY9VD"), r("aytWT"), r("5NpQR");
  }), o("iIO0c", function (e, t) {}), o("kWoeC", function (t, s) {
    e(t.exports, "ConsentLanguages", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, [{
        key: "has",
        value: function has(e) {
          return n.langSet.has(e);
        }
      }, {
        key: "forEach",
        value: function forEach(e) {
          n.langSet.forEach(e);
        }
      }, {
        key: "size",
        get: function get() {
          return n.langSet.size;
        }
      }]);
    }();
    n.langSet = new Set(["AR", "BG", "BS", "CA", "CS", "CY", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HE", "HI", "HR", "HU", "ID", "IS", "IT", "JA", "KA", "KO", "LT", "LV", "MK", "MS", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SQ", "SR-LATN", "SR-CYRL", "SV", "SW", "TH", "TL", "TR", "UK", "VI", "ZH", "ZH-HANT"]);
  }), o("gsPDj", function (e, t) {}), o("a8Mob", function (e, t) {}), o("cbc2T", function (e, t) {}), o("kGbL0", function (e, t) {}), o("3vDKL", function (e, t) {}), o("jkfyR", function (e, t) {}), o("jGSJJ", function (e, t) {}), o("dY9VD", function (e, t) {}), o("aytWT", function (e, t) {}), o("5NpQR", function (e, t) {}), o("U6O7W", function (t, s) {
    e(t.exports, "CmpApi", function () {
      return l;
    });
    var n = r("h2FSh"),
      i = r("dmwAz"),
      o = r("1TqZZ"),
      a = r("4Ylmq"),
      d = r("gYEQg"),
      c = r("fRDWE");
    var l = /*#__PURE__*/function () {
      function l(e, t, s) {
        _classCallCheck(this, l);
        this.cmpApiContext = new (0, d.CmpApiContext)(), this.cmpApiContext.cmpId = e, this.cmpApiContext.cmpVersion = t, this.callResponder = new (0, a.CallResponder)(this.cmpApiContext, s);
      }
      return _createClass(l, [{
        key: "fireEvent",
        value: function fireEvent(e, t) {
          this.cmpApiContext.eventQueue.exec(e, t);
        }
      }, {
        key: "fireErrorEvent",
        value: function fireErrorEvent(e) {
          this.cmpApiContext.eventQueue.exec("error", e);
        }
      }, {
        key: "fireSectionChange",
        value: function fireSectionChange(e) {
          this.cmpApiContext.eventQueue.exec("sectionChange", e);
        }
      }, {
        key: "getEventStatus",
        value: function getEventStatus() {
          return this.cmpApiContext.eventStatus;
        }
      }, {
        key: "setEventStatus",
        value: function setEventStatus(e) {
          this.cmpApiContext.eventStatus = e;
        }
      }, {
        key: "getCmpStatus",
        value: function getCmpStatus() {
          return this.cmpApiContext.cmpStatus;
        }
      }, {
        key: "setCmpStatus",
        value: function setCmpStatus(e) {
          this.cmpApiContext.cmpStatus = e, this.cmpApiContext.eventQueue.exec("cmpStatus", e);
        }
      }, {
        key: "getCmpDisplayStatus",
        value: function getCmpDisplayStatus() {
          return this.cmpApiContext.cmpDisplayStatus;
        }
      }, {
        key: "setCmpDisplayStatus",
        value: function setCmpDisplayStatus(e) {
          this.cmpApiContext.cmpDisplayStatus = e, this.cmpApiContext.eventQueue.exec("cmpDisplayStatus", e);
        }
      }, {
        key: "getSignalStatus",
        value: function getSignalStatus() {
          return this.cmpApiContext.signalStatus;
        }
      }, {
        key: "setSignalStatus",
        value: function setSignalStatus(e) {
          this.cmpApiContext.signalStatus = e, this.cmpApiContext.eventQueue.exec("signalStatus", e);
        }
      }, {
        key: "getApplicableSections",
        value: function getApplicableSections() {
          return this.cmpApiContext.applicableSections;
        }
      }, {
        key: "setApplicableSections",
        value: function setApplicableSections(e) {
          this.cmpApiContext.applicableSections = e;
        }
      }, {
        key: "getSupportedAPIs",
        value: function getSupportedAPIs() {
          return this.cmpApiContext.supportedAPIs;
        }
      }, {
        key: "setSupportedAPIs",
        value: function setSupportedAPIs(e) {
          this.cmpApiContext.supportedAPIs = e;
        }
      }, {
        key: "setGppString",
        value: function setGppString(e) {
          this.cmpApiContext.gppModel.decode(e);
        }
      }, {
        key: "getGppString",
        value: function getGppString() {
          return this.cmpApiContext.gppModel.encode();
        }
      }, {
        key: "setSectionString",
        value: function setSectionString(e, t) {
          this.cmpApiContext.gppModel.decodeSection(e, t);
        }
      }, {
        key: "setSectionStringById",
        value: function setSectionStringById(e, t) {
          this.setSectionString(c.Sections.SECTION_ID_NAME_MAP.get(e), t);
        }
      }, {
        key: "getSectionString",
        value: function getSectionString(e) {
          return this.cmpApiContext.gppModel.encodeSection(e);
        }
      }, {
        key: "getSectionStringById",
        value: function getSectionStringById(e) {
          return this.getSectionString(c.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "setFieldValue",
        value: function setFieldValue(e, t, s) {
          this.cmpApiContext.gppModel.setFieldValue(e, t, s);
        }
      }, {
        key: "setFieldValueBySectionId",
        value: function setFieldValueBySectionId(e, t, s) {
          this.setFieldValue(c.Sections.SECTION_ID_NAME_MAP.get(e), t, s);
        }
      }, {
        key: "getFieldValue",
        value: function getFieldValue(e, t) {
          return this.cmpApiContext.gppModel.getFieldValue(e, t);
        }
      }, {
        key: "getFieldValueBySectionId",
        value: function getFieldValueBySectionId(e, t) {
          return this.getFieldValue(c.Sections.SECTION_ID_NAME_MAP.get(e), t);
        }
      }, {
        key: "getSectionIds",
        value: function getSectionIds() {
          return this.cmpApiContext.gppModel.getSectionIds();
        }
      }, {
        key: "getSection",
        value: function getSection(e) {
          return this.cmpApiContext.gppModel.getSection(e);
        }
      }, {
        key: "getSectionById",
        value: function getSectionById(e) {
          return this.getSection(c.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "hasSection",
        value: function hasSection(e) {
          return this.cmpApiContext.gppModel.hasSection(e);
        }
      }, {
        key: "hasSectionId",
        value: function hasSectionId(e) {
          return this.hasSection(c.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "deleteSection",
        value: function deleteSection(e) {
          this.cmpApiContext.gppModel.deleteSection(e);
        }
      }, {
        key: "deleteSectionById",
        value: function deleteSectionById(e) {
          this.deleteSection(c.Sections.SECTION_ID_NAME_MAP.get(e));
        }
      }, {
        key: "clear",
        value: function clear() {
          this.cmpApiContext.gppModel.clear();
        }
      }, {
        key: "getObject",
        value: function getObject() {
          return this.cmpApiContext.gppModel.toObject();
        }
      }, {
        key: "getGvlFromVendorList",
        value: function getGvlFromVendorList(e) {
          return o.GVL.fromVendorList(e);
        }
      }, {
        key: "getGvlFromUrl",
        value: function getGvlFromUrl(e) {
          return (0, n._)(function () {
            return (0, i._)(this, function (t) {
              return [2, o.GVL.fromUrl(e)];
            });
          })();
        }
      }]);
    }();
  }), o("1TqZZ", function (t, s) {
    e(t.exports, "GVL", function () {
      return c;
    });
    var n = r("h2FSh"),
      i = r("dmwAz"),
      o = r("kWoeC"),
      a = r("lHfK2"),
      d = r("7yoM8");
    var c = /*#__PURE__*/function () {
      function c() {
        _classCallCheck(this, c);
        this.consentLanguages = new (0, o.ConsentLanguages)(), this.language = c.DEFAULT_LANGUAGE, this.ready = !1, this.languageFilename = "purposes-[LANG].json";
      }
      return _createClass(c, [{
        key: "changeLanguage",
        value: function changeLanguage(e) {
          return (0, n._)(function () {
            var t, s, n, r, o;
            return (0, i._)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (t = e.toUpperCase(), !this.consentLanguages.has(t)) return [3, 5];
                  if (t === this.language) return [3, 4];
                  this.language = t, s = this.baseUrl + this.languageFilename.replace("[LANG]", e), i.label = 1;
                case 1:
                  return i.trys.push([1, 3,, 4]), r = (n = this).populate, [4, d.JsonHttpClient.fetch(s)];
                case 2:
                  return r.apply(n, [i.sent()]), [3, 4];
                case 3:
                  throw o = i.sent(), new (0, a.GVLError)("unable to load language: " + o.message);
                case 4:
                  return [3, 6];
                case 5:
                  throw new (0, a.GVLError)("unsupported language ".concat(e));
                case 6:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getJson",
        value: function getJson() {
          return JSON.parse(JSON.stringify({
            gvlSpecificationVersion: this.gvlSpecificationVersion,
            vendorListVersion: this.vendorListVersion,
            tcfPolicyVersion: this.tcfPolicyVersion,
            lastUpdated: this.lastUpdated,
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            dataCategories: this.dataCategories,
            vendors: this.fullVendorList
          }));
        }
      }, {
        key: "isVendorList",
        value: function isVendorList(e) {
          return void 0 !== e && void 0 !== e.vendors;
        }
      }, {
        key: "populate",
        value: function populate(e) {
          this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.stacks = e.stacks, this.dataCategories = e.dataCategories, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.ready = !0);
        }
      }, {
        key: "mapVendors",
        value: function mapVendors(e) {
          var _this119 = this;
          this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach(function (e) {
            _this119.byPurposeVendorMap[e] = {
              legInt: new Set(),
              impCons: new Set(),
              consent: new Set(),
              flexible: new Set()
            };
          }), Object.keys(this.specialPurposes).forEach(function (e) {
            _this119.bySpecialPurposeVendorMap[e] = new Set();
          }), Object.keys(this.features).forEach(function (e) {
            _this119.byFeatureVendorMap[e] = new Set();
          }), Object.keys(this.specialFeatures).forEach(function (e) {
            _this119.bySpecialFeatureVendorMap[e] = new Set();
          }), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map(function (e) {
            return +e;
          })), this.vendorIds = new Set(e), this.vendors = e.reduce(function (e, t) {
            var s = _this119.vendors[String(t)];
            return s && void 0 === s.deletedDate && (s.purposes.forEach(function (e) {
              _this119.byPurposeVendorMap[String(e)].consent.add(t);
            }), s.specialPurposes.forEach(function (e) {
              _this119.bySpecialPurposeVendorMap[String(e)].add(t);
            }), s.legIntPurposes && s.legIntPurposes.forEach(function (e) {
              _this119.byPurposeVendorMap[String(e)].legInt.add(t);
            }), s.impConsPurposes && s.impConsPurposes.forEach(function (e) {
              _this119.byPurposeVendorMap[String(e)].impCons.add(t);
            }), s.flexiblePurposes && s.flexiblePurposes.forEach(function (e) {
              _this119.byPurposeVendorMap[String(e)].flexible.add(t);
            }), s.features.forEach(function (e) {
              _this119.byFeatureVendorMap[String(e)].add(t);
            }), s.specialFeatures.forEach(function (e) {
              _this119.bySpecialFeatureVendorMap[String(e)].add(t);
            }), e[t] = s), e;
          }, {});
        }
      }, {
        key: "getFilteredVendors",
        value: function getFilteredVendors(e, t, s, n) {
          var _this120 = this;
          var i = e.charAt(0).toUpperCase() + e.slice(1),
            r = {};
          return ("purpose" === e && s ? this["by" + i + "VendorMap"][String(t)][s] : this["by" + (n ? "Special" : "") + i + "VendorMap"][String(t)]).forEach(function (e) {
            r[String(e)] = _this120.vendors[String(e)];
          }), r;
        }
      }, {
        key: "getVendorsWithConsentPurpose",
        value: function getVendorsWithConsentPurpose(e) {
          return this.getFilteredVendors("purpose", e, "consent");
        }
      }, {
        key: "getVendorsWithLegIntPurpose",
        value: function getVendorsWithLegIntPurpose(e) {
          return this.getFilteredVendors("purpose", e, "legInt");
        }
      }, {
        key: "getVendorsWithFlexiblePurpose",
        value: function getVendorsWithFlexiblePurpose(e) {
          return this.getFilteredVendors("purpose", e, "flexible");
        }
      }, {
        key: "getVendorsWithSpecialPurpose",
        value: function getVendorsWithSpecialPurpose(e) {
          return this.getFilteredVendors("purpose", e, void 0, !0);
        }
      }, {
        key: "getVendorsWithFeature",
        value: function getVendorsWithFeature(e) {
          return this.getFilteredVendors("feature", e);
        }
      }, {
        key: "getVendorsWithSpecialFeature",
        value: function getVendorsWithSpecialFeature(e) {
          return this.getFilteredVendors("feature", e, void 0, !0);
        }
      }, {
        key: "narrowVendorsTo",
        value: function narrowVendorsTo(e) {
          this.mapVendors(e);
        }
      }, {
        key: "isReady",
        get: function get() {
          return this.ready;
        }
      }], [{
        key: "fromVendorList",
        value: function fromVendorList(e) {
          var t = new c();
          return t.populate(e), t;
        }
      }, {
        key: "fromUrl",
        value: function fromUrl(e) {
          return (0, n._)(function () {
            var t, s, n, r, o, l, u, g;
            return (0, i._)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!(t = e.baseUrl) || 0 === t.length) throw new (0, a.GVLError)("Invalid baseUrl: '" + t + "'");
                  if (/^https?:\/\/vendorlist\.consensu\.org\//.test(t)) throw new (0, a.GVLError)("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                  if (t.length > 0 && "/" !== t[t.length - 1] && (t += "/"), (s = new c()).baseUrl = t, e.languageFilename ? s.languageFilename = e.languageFilename : s.languageFilename = "purposes-[LANG].json", !(e.version > 0)) return [3, 2];
                  return (n = e.versionedFilename) || (n = "archives/vendor-list-v[VERSION].json"), r = t + n.replace("[VERSION]", String(e.version)), o = s.populate, [4, d.JsonHttpClient.fetch(r)];
                case 1:
                  return o.apply(s, [i.sent()]), [3, 4];
                case 2:
                  return (l = e.latestFilename) || (l = "vendor-list.json"), u = t + l, g = s.populate, [4, d.JsonHttpClient.fetch(u)];
                case 3:
                  g.apply(s, [i.sent()]), i.label = 4;
                case 4:
                  return [2, s];
              }
            });
          })();
        }
      }, {
        key: "isInstanceOf",
        value: function isInstanceOf(e) {
          return "object" == _typeof(e) && "function" == typeof e.narrowVendorsTo;
        }
      }]);
    }();
    c.DEFAULT_LANGUAGE = "EN";
  }), o("14GuN", function (t, s) {
    e(t.exports, "I18nModel", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        _classCallCheck(this, n);
        var t = e.base,
          s = e.firstLayer,
          _n7 = e.secondLayer,
          i = e.services,
          r = e.categories;
        this.base = t, this.categories = r, this.services = i, this.firstLayer = s, this.secondLayer = _n7;
      }
      return _createClass(n, [{
        key: "getService",
        value: function getService(e) {
          return this.services[e];
        }
      }, {
        key: "getServiceHasDetails",
        value: function getServiceHasDetails(e) {
          var t = this.getService(e);
          return t && void 0 !== t.details;
        }
      }]);
    }();
  }), o("9zx7v", function (t, s) {
    e(t.exports, "LanguagesModel", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        _classCallCheck(this, n);
        var t = e.languages;
        this.languages = t;
      }
      return _createClass(n, [{
        key: "getHasLanguage",
        value: function getHasLanguage(e) {
          return !!this.languages && "object" == _typeof(this.languages[e]);
        }
      }, {
        key: "getLanguageScreenDirection",
        value: function getLanguageScreenDirection(e) {
          return this.languages && this.languages[e] && this.languages[e].rtl ? "rtl" : "ltr";
        }
      }]);
    }();
  }), o("d2W83", function (t, s) {
    e(t.exports, "SettingModel", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        _classCallCheck(this, n);
        var t = e.type,
          s = e.id,
          _n8 = e.version,
          i = e.abVariant;
        this.type = t, this.id = s, this.version = _n8, i && (this.abVariant = i);
      }
      return _createClass(n, [{
        key: "getType",
        value: function getType() {
          return this.type;
        }
      }, {
        key: "getId",
        value: function getId() {
          return this.id;
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return this.version;
        }
      }]);
    }();
  }), o("6Zkqq", function (t, s) {
    e(t.exports, "TcfModel", function () {
      return v;
    });
    var n = r("h2FSh"),
      i = r("kTJf3"),
      o = r("7nwmn"),
      a = r("7qJ26"),
      d = r("dmwAz");
    r("iwgCK");
    var c = r("h89KI"),
      l = r("g8Asm"),
      u = r("kf3qA"),
      g = r("k8k54"),
      E = r("gYU5O");
    r("cHs27");
    var p = r("cf8E3"),
      h = r("6B8qC"),
      S = r("bLQZ1"),
      I = r("8rnD3"),
      _ = r("lzUuO"),
      C = r("eOikM"),
      T = r("bY6u9"),
      N = r("96QDM");
    function O(e, t, s) {
      return e.forEach(function (e) {
        var n = new (0, h.PurposeRestriction)(e, t);
        s.publisherRestrictions.restrictPurposeToLegalBasis(n);
      }), s;
    }
    var v = /*#__PURE__*/function () {
      function v(e, t, s) {
        _classCallCheck(this, v);
        this._gdprApplies = !0, this.resolveLanguage = function (e) {
          var t = e.replace("_", "-");
          if (p.GVL.consentLanguages.has(t.toLocaleLowerCase()) || p.GVL.consentLanguages.has(t.toUpperCase())) return t;
          var s = t.slice(0, 2);
          if (p.GVL.consentLanguages.has(s.toLocaleLowerCase()) || p.GVL.consentLanguages.has(s.toUpperCase())) return s;
          switch (e) {
            case "pt":
              return "pt-pt";
            case "sr":
              return "sr-cyrl";
            default:
              return "en";
          }
        }, this.init(e, t, s);
      }
      return _createClass(v, [{
        key: "init",
        value: function init(e, t, s) {
          this._iabData = e, !this._cmpOptions && s && (this._cmpOptions = JSON.parse(JSON.stringify(s)));
          var n = e.config.cmpId || 5,
            i = e.config.cmpVersion || 3,
            r = (null == s ? void 0 : s.gdprApplies) !== !1;
          this._gdprApplies = r, l.CmpApiModel.gdprApplies = r, l.CmpApiModel.cmpStatus = u.CmpStatus.LOADED, l.CmpApiModel.eventStatus = t ? E.EventStatus.USER_ACTION_COMPLETE : E.EventStatus.TC_LOADED, l.CmpApiModel.displayStatus = g.DisplayStatus.HIDDEN, l.CmpApiModel.tcString = t || "", this.cmpApi = new (0, c.CmpApi)(n, i, !0), r ? t && (this.tcString = t, this.cmpApi.update(t, !1, null == s || null == (f = s.acm) ? void 0 : f.acString)) : this.cmpApi.update(null, !1), (null == s ? void 0 : s.acm) && (this.acm = s.acm, this.acm.acString = null == s || null == (U = s.acm) ? void 0 : U.acString), this.vendorsList = e.vendors.list, this.vendorsLegalConfig = e.vendors.legalConfig, this.restrictions = e.config.restrictions, this.legitimateInterestDisabled = !1, this.maintainLegitimateInterestOnDenyAll = null != (b = e.config.maintainLegitimateInterestOnDenyAll) && b;
          var o = e.config.gvl;
          p.GVL.baseUrl = o.baseUrl, p.GVL.languageFilename = o.languageFileName, p.GVL.latestFilename = o.latestFileName;
          var a = new (0, p.GVL)(e.vendors.list);
          if (this.tcModel = new (0, _.TCModel)(a), this.tcModel.isServiceSpecific = !0, this.tcModel.publisherCountryCode = e.config.publisherCountryCode || "DE", this.tcModel.purposeOneTreatment = !0 === e.config.purposeOneTreatment, this.tcModel.cmpId = n, this.tcModel.cmpVersion = i, this.tcModel.gvl.narrowVendorsTo(Object.keys(e.vendors.list.vendors).map(function (e) {
            return parseInt(e);
          })), this.excludeAcceptAllVendors = null != (D = null == s ? void 0 : s.excludeAcceptAllVendors) ? D : [], e.config.restrictions && (this.tcModel = (T = e.config.restrictions, N = this.tcModel, _v = T.purposes, m = T.legIntPurposes, A = T.notAllowedPurposes, N = O(_v, S.RestrictionType.REQUIRE_CONSENT, N), N = O(m, S.RestrictionType.REQUIRE_LI, N), (null == A ? void 0 : A.length) && (N = O(A, S.RestrictionType.NOT_ALLOWED, N)), N)), t) {
            this.tcModel = C.TCString.decode(t, this.tcModel), (null == s ? void 0 : s.acm) && (this.tcModel.addtlConsent = (null == s || null == (V = s.acm) ? void 0 : V.acString) || ""), e.config.policyVersion >= 4 && this.tcModel.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
            for (var d = this.tcModel.purposeConsents.values(), h = this.tcModel.purposeConsents.size, I = 0; I <= h - 1; I += 1) {
              var T,
                N,
                _v,
                m,
                A,
                f,
                U,
                b,
                D,
                V,
                P,
                F = d.next().value;
              this.tcModel.gvl.purposes[F] || null == (P = this.tcModel) || P.purposeConsents.unset(F);
            }
            for (var L = this.tcModel.purposeLegitimateInterests.values(), w = this.tcModel.purposeLegitimateInterests.size, M = 0; M <= w - 1; M += 1) {
              var R,
                y = L.next().value;
              this.tcModel.gvl.purposes[y] || null == (R = this.tcModel) || R.purposeLegitimateInterests.unset(y);
            }
          }
          if (r && (l.CmpApiModel.tcModel = this.tcModel, null == s ? void 0 : s.gcmEnabled)) {
            var x,
              G,
              B = void 0 !== (null == (G = window) || null == (x = G.ucCmpGTMConfig) ? void 0 : x.advertiserConsentMode) ? window.ucCmpGTMConfig.advertiserConsentMode : (null == s ? void 0 : s.advertiserConsentModeEnabled) || !1;
            this.tcModel.enableAdvertiserConsentMode = B, l.CmpApiModel.tcModel.enableAdvertiserConsentMode = B, l.CmpApiModel.enableAdvertiserConsentMode = B;
          }
          this.vendors = {}, this.purposes = {}, this.specialPurposes = {}, this.features = {}, this.specialFeatures = {}, this.stacks = {}, this.dataCategories = {}, this.mapIabData(e);
        }
      }, {
        key: "getPolicyVersion",
        value: function getPolicyVersion() {
          return parseInt(this.tcModel.policyVersion.toString());
        }
      }, {
        key: "mapIabData",
        value: function mapIabData(e) {
          var _this121 = this;
          this.vendors = {}, this.purposes = {}, this.specialPurposes = {}, this.features = {}, this.specialFeatures = {}, this.stacks = {}, this.dataCategories = {}, this.disclosedPurposes = new Set(), this.appliedVendorsRestrictedPurposes = new Set(), this.appliedVendorsRestrictedLegIntPurposes = new Set();
          var t = e.config.stacks,
            s = this.vendorsList,
            n = s.purposes,
            r = s.stacks,
            d = s.specialPurposes,
            c = s.features,
            l = s.specialFeatures,
            u = s.dataCategories,
            g = this.vendorsLegalConfig,
            E = g.features,
            p = g.specialPurposes,
            h = g.specialFeatures;
          this.vendors = Object.entries(this.tcModel.gvl.vendors).reduce(function (t, s) {
            var n = (0, a._)(s, 2)[1],
              r = e.config.restrictions ? (0, T.applyVendorRestrictions)(n, e.config.restrictions) : null;
            return [].concat(_toConsumableArray((null == r ? void 0 : r.purposes) || []), _toConsumableArray((null == r ? void 0 : r.legIntPurposes) || [])).forEach(function (e) {
              var t, s;
              _this121.disclosedPurposes.add(e), (null == r || null == (t = r.purposes) ? void 0 : t.includes(e)) && _this121.appliedVendorsRestrictedPurposes.add(e), (null == r || null == (s = r.legIntPurposes) ? void 0 : s.includes(e)) && _this121.appliedVendorsRestrictedLegIntPurposes.add(e);
            }), t[n.id] = (0, o._)((0, i._)({}, n, e.vendors.info[n.id] && e.vendors.info[n.id], r && r), {
              consent: _this121.tcModel.vendorConsents.has(n.id),
              legitimateInterestConsent: _this121.tcModel.vendorLegitimateInterests.has(n.id)
            }), t;
          }, {}), this.dataCategories = u, this.stacks = Object.entries(r).filter(function (e) {
            var s = (0, a._)(e, 1)[0];
            return null == t ? void 0 : t.includes(parseInt(s));
          }).reduce(function (e, t) {
            var s = (0, a._)(t, 1)[0];
            return e[parseInt(s)] = (0, o._)((0, i._)({}, r[s], _this121.tcModel.gvl.stacks[s]), {
              state: _this121.getStackState(parseInt(s))
            }), e;
          }, {}), this.disclosedPurposes.forEach(function (e) {
            var t = n[e],
              s = Object.keys(_this121.vendors).filter(function (t) {
                return _this121.vendors[parseInt(t)].purposes.find(function (t) {
                  return t === e;
                });
              }),
              r = Object.keys(_this121.vendors).filter(function (t) {
                return _this121.vendors[parseInt(t)].legIntPurposes.find(function (t) {
                  return t === e;
                });
              });
            _this121.tcModel.purposeOneTreatment && 1 === e || (_this121.purposes[e] = (0, o._)((0, i._)({}, t, _this121.tcModel.gvl.purposes[e]), {
              numberOfVendors: s.length + r.length,
              isPartOfStack: _this121.getPurposeIsPartOfStack(e),
              consent: {
                visible: _this121.showConsentToggle(e, S.RestrictionType.REQUIRE_CONSENT),
                given: _this121.getPurposeConsent(e)
              },
              legitimateInterestConsent: {
                visible: _this121.showConsentToggle(e, S.RestrictionType.REQUIRE_LI),
                given: _this121.getPurposeLegitimateInterestConsent(e)
              }
            }));
          }), p.forEach(function (e) {
            _this121.specialPurposes[e] = (0, o._)((0, i._)({}, d[e], _this121.tcModel.gvl.specialPurposes[e]), {
              consent: _this121.getPurposeConsent(e)
            });
          }), E.forEach(function (e) {
            _this121.features[e] = (0, i._)({}, c[e], _this121.tcModel.gvl.features[e]);
          });
          var I = !0,
            _ = !1,
            C = void 0;
          try {
            for (var N, O, _v2 = Array.from(this.tcModel.specialFeatureOptins.values())[Symbol.iterator](); !(I = (O = _v2.next()).done); I = !0) {
              var m = O.value;
              h.includes(m) || this.tcModel.specialFeatureOptins.unset(m);
            }
          } catch (e) {
            _ = !0, C = e;
          } finally {
            try {
              I || null == _v2.return || _v2.return();
            } finally {
              if (_) throw C;
            }
          }
          if (h.forEach(function (e) {
            _this121.specialFeatures[e] = (0, o._)((0, i._)({}, l[e], _this121.tcModel.gvl.specialFeatures[e]), {
              isPartOfStack: _this121.getSpecialFeatureIsPartOfStack(e),
              consent: _this121.getSpecialFeatureConsent(e)
            });
          }), this.tcString || (Object.entries(this.vendors).forEach(function (e) {
            var t = (0, a._)(e, 2),
              s = t[0];
            t[1].showLegitimateInterestConsentToggle && _this121.tcModel.vendorLegitimateInterests.set(+s);
          }), Object.entries(this.purposes).forEach(function (e) {
            var t = (0, a._)(e, 2),
              s = t[0];
            t[1].legitimateInterestConsent.visible && (_this121.tcModel.purposeLegitimateInterests.set(+s), _this121.tcModel.publisherLegitimateInterests.set(+s));
          }), this.refreshConsentDependencies()), null == (N = this.acm) ? void 0 : N.acString) {
            var A,
              f,
              U = [];
            try {
              U = null == (f = this.acm) ? void 0 : f.acString.split("~")[1].split(".").map(function (e) {
                return parseInt(e, 10);
              });
            } catch (e) {}
            null == (A = this.acm.vendors) || A.map(function (e) {
              return e.consent = {
                status: U.some(function (t) {
                  return t === e.id;
                })
              };
            });
          }
        }
      }, {
        key: "getTcStringLastUpdate",
        value: function getTcStringLastUpdate() {
          return this.tcModel.lastUpdated;
        }
      }, {
        key: "generateTcString",
        value: function generateTcString(e) {
          return this.tcString = C.TCString.encode(this.tcModel, e), this.tcString;
        }
      }, {
        key: "getDisclosedVendorsSegmentString",
        value: function getDisclosedVendorsSegmentString() {
          return this.generateTcString({
            segments: [I.Segment.VENDORS_DISCLOSED]
          });
        }
      }, {
        key: "getPurposeIsPartOfStack",
        value: function getPurposeIsPartOfStack(e) {
          return !!this.vendorsList.stacks && Object.entries(this.stacks).some(function (t) {
            return (0, a._)(t, 2)[1].purposes.includes(e);
          });
        }
      }, {
        key: "getSpecialFeatureIsPartOfStack",
        value: function getSpecialFeatureIsPartOfStack(e) {
          return !!this.vendorsList.stacks && Object.entries(this.stacks).some(function (t) {
            return (0, a._)(t, 2)[1].specialFeatures.includes(e);
          });
        }
      }, {
        key: "getStackState",
        value: function getStackState(e) {
          var _this122 = this;
          if (!this.vendorsList.stacks || !this.vendorsList.stacks[e]) return "ALL_DENIED";
          var t = !0,
            s = !1,
            n = this.vendorsList.stacks[e];
          return n.purposes.forEach(function (e) {
            _this122.getPurposeConsent(e) ? s = !0 : t = !1;
          }), n.specialFeatures.forEach(function (e) {
            _this122.getSpecialFeatureConsent(e) ? s = !0 : t = !1;
          }), t ? "ALL_ACCEPTED" : s ? "SOME_ACCEPTED" : "ALL_DENIED";
        }
      }, {
        key: "setStackConsent",
        value: function setStackConsent(e, t) {
          var _this123 = this;
          this.vendorsList.stacks && this.vendorsList.stacks[e] && (this.vendorsList.stacks[e].purposes.forEach(function (e) {
            _this123.setPurposeConsent(e, t);
          }), this.vendorsList.stacks[e].specialFeatures.forEach(function (e) {
            _this123.setSpecialFeatureConsent(e, t);
          }), this.updatedBy = "onUpdateServices");
        }
      }, {
        key: "getVendorConsent",
        value: function getVendorConsent(e) {
          return this.tcModel.vendorConsents.has(e);
        }
      }, {
        key: "getVendorLegitimateInterestConsent",
        value: function getVendorLegitimateInterestConsent(e) {
          return this.tcModel.vendorLegitimateInterests.has(e);
        }
      }, {
        key: "getPurposeConsent",
        value: function getPurposeConsent(e) {
          return this.tcModel.purposeConsents.has(e);
        }
      }, {
        key: "getPurposeLegitimateInterestConsent",
        value: function getPurposeLegitimateInterestConsent(e) {
          return this.tcModel.purposeLegitimateInterests.has(e);
        }
      }, {
        key: "getPublisherConsent",
        value: function getPublisherConsent(e) {
          return this.tcModel.publisherConsents.has(e);
        }
      }, {
        key: "getPublisherLegitimateInterestConsent",
        value: function getPublisherLegitimateInterestConsent(e) {
          return this.tcModel.publisherLegitimateInterests.has(e);
        }
      }, {
        key: "getSpecialFeatureConsent",
        value: function getSpecialFeatureConsent(e) {
          return this.tcModel.specialFeatureOptins.has(e);
        }
      }, {
        key: "setPurposeConsent",
        value: function setPurposeConsent(e, t) {
          this.setPurposesConsent([{
            id: e,
            consent: t
          }]);
        }
      }, {
        key: "setPurposeLegitimateInterestConsent",
        value: function setPurposeLegitimateInterestConsent(e, t) {
          this.setPurposesConsent([{
            id: e,
            legitimateInterestConsent: t
          }]);
        }
      }, {
        key: "setPurposesConsent",
        value: function setPurposesConsent(e) {
          var _this124 = this;
          e.forEach(function (e) {
            Object.prototype.hasOwnProperty.call(e, "consent") && (e.consent ? (_this124.tcModel.purposeConsents.set(e.id), _this124.tcModel.publisherConsents.set(e.id)) : (_this124.tcModel.purposeConsents.unset(e.id), _this124.tcModel.publisherConsents.unset(e.id))), !_this124.legitimateInterestDisabled && _this124.purposes[e.id].legitimateInterestConsent.visible && Object.prototype.hasOwnProperty.call(e, "legitimateInterestConsent") && (e.legitimateInterestConsent ? (_this124.tcModel.purposeLegitimateInterests.set(e.id), _this124.tcModel.publisherLegitimateInterests.set(e.id)) : (_this124.tcModel.purposeLegitimateInterests.unset(e.id), _this124.tcModel.publisherLegitimateInterests.unset(e.id)));
          }), this.updatedBy = "onUpdateServices", this.refreshConsentDependencies();
        }
      }, {
        key: "setSpecialFeaturesConsent",
        value: function setSpecialFeaturesConsent(e) {
          var _this125 = this;
          e.forEach(function (e) {
            var t = e.id;
            e.consent ? _this125.tcModel.specialFeatureOptins.set(t) : _this125.tcModel.specialFeatureOptins.unset(t);
          }), this.updatedBy = "onUpdateServices", this.refreshConsentDependencies();
        }
      }, {
        key: "setSpecialFeatureConsent",
        value: function setSpecialFeatureConsent(e, t) {
          this.setSpecialFeaturesConsent([{
            id: e,
            consent: t
          }]);
        }
      }, {
        key: "setVendorConsent",
        value: function setVendorConsent(e, t) {
          this.setVendorsConsent([{
            id: e,
            consent: t
          }]);
        }
      }, {
        key: "setVendorLegitimateInterestConsent",
        value: function setVendorLegitimateInterestConsent(e, t) {
          this.setVendorsConsent([{
            id: e,
            legitimateInterestConsent: t
          }]);
        }
      }, {
        key: "setVendorsConsent",
        value: function setVendorsConsent(e) {
          var _this126 = this;
          var t = !1;
          e.forEach(function (e) {
            Object.prototype.hasOwnProperty.call(e, "consent") && (e.consent ? _this126.tcModel.vendorConsents.set(e.id) : _this126.tcModel.vendorConsents.unset(e.id)), !_this126.legitimateInterestDisabled && _this126.vendors[e.id].legIntPurposes.length && Object.prototype.hasOwnProperty.call(e, "legitimateInterestConsent") && (e.legitimateInterestConsent ? _this126.tcModel.vendorLegitimateInterests.set(e.id) : _this126.tcModel.vendorLegitimateInterests.unset(e.id), t = !0);
          }), t && this.syncPurposeLegitimateInterestFromVendors(), this.updatedBy = "onUpdateServices", this.refreshConsentDependencies();
        }
      }, {
        key: "setAcmVendorConsent",
        value: function setAcmVendorConsent(e, t) {
          var s,
            n,
            i = null == (n = this.acm) || null == (s = n.vendors) ? void 0 : s.find(function (t) {
              return t.id === e;
            });
          i && (i.consent.status = t);
        }
      }, {
        key: "updateAcmVendorsPurposes",
        value: function updateAcmVendorsPurposes(e) {
          var t, s;
          (null == (t = this.acm) ? void 0 : t.vendors) && (null == (s = this.acm) || s.vendors.forEach(function (t) {
            t.purposes = e;
          }));
        }
      }, {
        key: "updateAcmVendorsConsent",
        value: function updateAcmVendorsConsent(e) {
          var t;
          (null == (t = this.acm) ? void 0 : t.vendors) && (this.acm.vendors = this.acm.vendors.map(function (t) {
            return (0, o._)((0, i._)({}, t), {
              consent: {
                status: e
              }
            });
          }));
        }
      }, {
        key: "acceptAll",
        value: function acceptAll() {
          var _this127 = this;
          var e = Object.values(this.vendors).filter(function (e) {
            var t;
            return !(null == (t = _this127.excludeAcceptAllVendors) ? void 0 : t.includes(e.id));
          }).map(function (e) {
            return {
              id: +e.id,
              consent: !0,
              legitimateInterestConsent: !0
            };
          });
          this.setVendorsConsent(e), this.setPurposesConsent(Object.entries(this.purposes).map(function (e) {
            return {
              id: +(0, a._)(e, 1)[0],
              consent: !0,
              legitimateInterestConsent: !0
            };
          })), Object.keys(this.specialFeatures).forEach(function (e) {
            _this127.tcModel.specialFeatureOptins.set(+e);
          }), this.updateAcmVendorsConsent(!0), this.updatedBy = "onAcceptAllServices", this.refreshConsentDependencies();
        }
      }, {
        key: "getAllowedMaintainLIPurposes",
        value: function getAllowedMaintainLIPurposes() {
          var _this128 = this;
          return v.MAINTAIN_LI_PURPOSES.filter(function (e) {
            var t, s;
            return !(!_this128.purposes[e] || (null == (t = _this128.restrictions) ? void 0 : t.notAllowedPurposes.includes(e)) || (null == (s = _this128.restrictions) ? void 0 : s.purposes.includes(e)));
          });
        }
      }, {
        key: "denyAll",
        value: function denyAll() {
          var e = this.tcModel,
            t = [],
            s = [];
          if (this.maintainLegitimateInterestOnDenyAll && !this.legitimateInterestDisabled) {
            var n = this.getAllowedMaintainLIPurposes();
            t = n.filter(function (t) {
              return !e.purposeLegitimateInterests.has(t);
            }), Object.values(this.vendors).forEach(function (t) {
              t.legIntPurposes.some(function (e) {
                return n.includes(e);
              }) && !e.vendorLegitimateInterests.has(t.id) && s.push(t.id);
            });
          }
          if (e.unsetAll(), this.maintainLegitimateInterestOnDenyAll && !this.legitimateInterestDisabled) {
            var i = this.getAllowedMaintainLIPurposes();
            i.forEach(function (t) {
              e.purposeLegitimateInterests.set(t), e.publisherLegitimateInterests.set(t);
            }), Object.values(this.vendors).forEach(function (t) {
              t.legIntPurposes.some(function (e) {
                return i.includes(e);
              }) && e.vendorLegitimateInterests.set(t.id);
            }), s.forEach(function (t) {
              e.vendorLegitimateInterests.unset(t);
            }), t.forEach(function (t) {
              e.purposeLegitimateInterests.unset(t), e.publisherLegitimateInterests.unset(t);
            });
          }
          this.updateAcmVendorsConsent(!1), this.updatedBy = "onDenyAllServices", this.refreshConsentDependencies();
        }
      }, {
        key: "applySpecialCasesForVendors",
        value: function applySpecialCasesForVendors() {
          var _this129 = this;
          Object.keys(this.vendors).forEach(function (e) {
            var t = _this129.tcModel.gvl.vendors[e];
            (t && 0 === t.purposes.length && 0 === t.legIntPurposes.length && t.specialPurposes.length > 0 || t && t.purposes.length > 0 && 0 === t.legIntPurposes.length && t.specialPurposes.length > 0) && _this129.tcModel.vendorLegitimateInterests.set(parseInt(e));
          });
        }
      }, {
        key: "updateConsentScreen",
        value: function updateConsentScreen(e) {
          this.tcModel.consentScreen = e;
        }
      }, {
        key: "updateConsentLanguage",
        value: function updateConsentLanguage(e) {
          this.tcModel.consentLanguage = e;
        }
      }, {
        key: "refreshTimestamp",
        value: function refreshTimestamp() {
          this.tcModel.updated();
        }
      }, {
        key: "updateTcfApi",
        value: function updateTcfApi(e) {
          this._gdprApplies ? e && this.cmpApi.update(e, !1, this.getACString()) : this.cmpApi.update(null, !1);
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(e, t) {
          return (0, n._)(function () {
            var s, n;
            return (0, d._)(this, function (i) {
              switch (i.label) {
                case 0:
                  return s = this.tcModel, n = this.resolveLanguage(e), [4, s.gvl.changeLanguage(n).catch(function (t) {
                    N.webSdkEvents.emit("WARN", {
                      message: "Could not change gvl language to ".concat(e),
                      e: t
                    });
                  })];
                case 1:
                  return i.sent(), this.vendorsList = this.tcModel.gvl, this.updateConsentLanguage(n), this.acm && (this.acm.acString = this.getACString()), this.mapIabData(t), [2, s];
              }
            });
          }).call(this);
        }
      }, {
        key: "areAllConsentsAccepted",
        value: function areAllConsentsAccepted() {
          return this.areAllPurposesWithStatus(!0) && this.areAllVendorsWithStatus(!0);
        }
      }, {
        key: "areAllConsentsDenied",
        value: function areAllConsentsDenied() {
          return this.areAllPurposesWithStatus(!1) && this.areAllVendorsWithStatus(!1);
        }
      }, {
        key: "getACString",
        value: function getACString() {
          var e;
          if (null == (e = this.acm) ? void 0 : e.vendors) {
            var t = this.acm.vendors.reduce(function (e, t) {
                var s,
                  n = e.consentedAcmVendorIds,
                  i = e.disclosedAcmVendorIds;
                return (null == (s = t.consent) ? void 0 : s.status) ? n.push(t.id) : i.push(t.id), {
                  consentedAcmVendorIds: n,
                  disclosedAcmVendorIds: i
                };
              }, {
                consentedAcmVendorIds: [],
                disclosedAcmVendorIds: []
              }),
              s = t.consentedAcmVendorIds,
              n = t.disclosedAcmVendorIds;
            return "2~".concat(s.sort(function (e, t) {
              return e - t;
            }).join("."), "~dv.").concat(n.sort(function (e, t) {
              return e - t;
            }).join("."));
          }
          return "";
        }
      }, {
        key: "setAddtlConsent",
        value: function setAddtlConsent(e) {
          this.tcModel && (this.tcModel.addtlConsent = e);
        }
      }, {
        key: "clearTcString",
        value: function clearTcString() {
          this.tcString = "", this._gdprApplies && this.cmpApi.update("", !1, "");
        }
      }, {
        key: "setUIOpen",
        value: function setUIOpen() {
          this._gdprApplies ? this.cmpApi.update(this.getCurrentTCString(), !0, this.getCurrentACstring()) : this.cmpApi.update(null, !1);
        }
      }, {
        key: "setUIClosed",
        value: function setUIClosed() {
          this._gdprApplies ? this.cmpApi.update(this.getCurrentTCString(), !1, this.getCurrentACstring()) : this.cmpApi.update(null, !1);
        }
      }, {
        key: "getCurrentTCString",
        value: function getCurrentTCString() {
          return this.tcString ? this.tcString : "";
        }
      }, {
        key: "getCurrentACstring",
        value: function getCurrentACstring() {
          return this.tcString ? this.getACString() : "";
        }
      }, {
        key: "syncPurposeLegitimateInterestFromVendors",
        value: function syncPurposeLegitimateInterestFromVendors() {
          var _this130 = this;
          var e = new Set();
          Object.values(this.vendors).forEach(function (t) {
            t.legIntPurposes.forEach(function (t) {
              return e.add(t);
            });
          }), e.forEach(function (e) {
            _this130.purposes[e] && (Object.values(_this130.vendors).some(function (t) {
              return t.legIntPurposes.includes(e) && _this130.tcModel.vendorLegitimateInterests.has(t.id);
            }) ? (_this130.tcModel.purposeLegitimateInterests.set(e), _this130.tcModel.publisherLegitimateInterests.set(e)) : (_this130.tcModel.purposeLegitimateInterests.unset(e), _this130.tcModel.publisherLegitimateInterests.unset(e)));
          });
        }
      }, {
        key: "refreshConsentDependencies",
        value: function refreshConsentDependencies() {
          var _this131 = this;
          Object.keys(this.stacks).forEach(function (e) {
            _this131.stacks[parseInt(e)].state = _this131.getStackState(parseInt(e));
          }), Object.keys(this.purposes).forEach(function (e) {
            _this131.purposes[parseInt(e)].consent.given = _this131.getPurposeConsent(parseInt(e)), _this131.purposes[parseInt(e)].legitimateInterestConsent.given = _this131.getPurposeLegitimateInterestConsent(parseInt(e));
          }), Object.keys(this.specialFeatures).forEach(function (e) {
            _this131.specialFeatures[parseInt(e)].consent = _this131.getSpecialFeatureConsent(parseInt(e));
          }), Object.keys(this.specialPurposes).forEach(function (e) {
            _this131.specialPurposes[parseInt(e)].consent = _this131.getPurposeConsent(parseInt(e));
          }), Object.keys(this.vendors).forEach(function (e) {
            _this131.vendors[parseInt(e)].consent = _this131.getVendorConsent(parseInt(e)), _this131.vendors[parseInt(e)].legitimateInterestConsent = _this131.getVendorLegitimateInterestConsent(parseInt(e));
          }), this._cmpOptions && this.acm && (this._cmpOptions.acm = JSON.parse(JSON.stringify(this.acm)));
        }
      }, {
        key: "showConsentToggle",
        value: function showConsentToggle(e, t) {
          var s = this.appliedVendorsRestrictedPurposes.has(e),
            n = this.appliedVendorsRestrictedLegIntPurposes.has(e);
          return !!s && !!n || (s ? t === S.RestrictionType.REQUIRE_CONSENT : !!n && t === S.RestrictionType.REQUIRE_LI);
        }
      }, {
        key: "areAllPurposesWithStatus",
        value: function areAllPurposesWithStatus(e) {
          return Object.entries(this.purposes).every(function (t) {
            var s = (0, a._)(t, 2)[1],
              n = !0,
              i = !0;
            return s.consent.visible && null !== s.consent.given && (n = s.consent.given), s.legitimateInterestConsent.visible && null !== s.legitimateInterestConsent.given && (i = s.legitimateInterestConsent.given), n === e && i === e;
          });
        }
      }, {
        key: "areAllVendorsWithStatus",
        value: function areAllVendorsWithStatus(e) {
          var t = e,
            s = Object.entries(this.vendors).every(function (t) {
              var s = (0, a._)(t, 2)[1],
                n = !0,
                i = !0;
              return s.showConsentToggle && null !== s.consent && (n = s.consent), s.showLegitimateInterestConsentToggle && null !== s.legitimateInterestConsent && (i = s.legitimateInterestConsent), n === e && i === e;
            });
          return this.acm && this.acm.vendors && (t = this.acm.vendors.every(function (t) {
            return t.consent.status === e;
          })), s && t;
        }
      }, {
        key: "resetTcModel",
        value: function resetTcModel() {
          if (this._iabData) {
            var e = this._cmpOptions ? JSON.parse(JSON.stringify(this._cmpOptions)) : void 0;
            this.init(this._iabData, this.tcString || "", e);
          }
        }
      }]);
    }();
    v.MAINTAIN_LI_PURPOSES = [2, 7, 8, 9, 10, 11];
  }), o("iwgCK", function (t, s) {
    e(t.exports, "CmpStatus", function () {
      return r("kf3qA").CmpStatus;
    }), e(t.exports, "DisplayStatus", function () {
      return r("k8k54").DisplayStatus;
    }), e(t.exports, "EventStatus", function () {
      return r("gYU5O").EventStatus;
    }), e(t.exports, "CmpApi", function () {
      return r("h89KI").CmpApi;
    }), e(t.exports, "CmpApiModel", function () {
      return r("g8Asm").CmpApiModel;
    }), r("58sR5"), r("2FqS9"), r("ly1JR"), r("h89KI"), r("g8Asm"), r("1z40N"), r("kbzQk");
  }), o("58sR5", function (t, s) {
    e(t.exports, "TCFCommand", function () {
      return r("9wfDM").TCFCommand;
    }), r("9wfDM"), r("eFlQb");
  }), o("9wfDM", function (t, s) {
    e(t.exports, "TCFCommand", function () {
      return i;
    });
    var n,
      i = ((n = {}).PING = "ping", n.GET_TC_DATA = "getTCData", n.GET_IN_APP_TC_DATA = "getInAppTCData", n.GET_VENDOR_LIST = "getVendorList", n.ADD_EVENT_LISTENER = "addEventListener", n.REMOVE_EVENT_LISTENER = "removeEventListener", n);
  }), o("eFlQb", function (e, t) {}), o("2FqS9", function (t, s) {
    e(t.exports, "InAppTCData", function () {
      return r("E32VS").InAppTCData;
    }), e(t.exports, "Ping", function () {
      return r("5qAgv").Ping;
    }), e(t.exports, "TCData", function () {
      return r("1puf1").TCData;
    }), r("E32VS"), r("5qAgv"), r("gsVrZ"), r("1puf1");
  }), o("E32VS", function (t, s) {
    e(t.exports, "InAppTCData", function () {
      return i;
    });
    var n = r("1puf1");
    var i = /*#__PURE__*/function (_n$TCData) {
      function i(e) {
        _classCallCheck(this, i);
        return _callSuper(this, i, [e]);
      }
      _inherits(i, _n$TCData);
      return _createClass(i, [{
        key: "createVectorField",
        value: function createVectorField(e) {
          return _toConsumableArray(e).reduce(function (e, t) {
            return e += t[1] ? "1" : "0";
          }, "");
        }
      }, {
        key: "createRestrictions",
        value: function createRestrictions(e) {
          var t = {};
          if (e.numRestrictions > 0) {
            var s = function s(_s2) {
                e.getRestrictions(_s2 + 1).forEach(function (e) {
                  var n = e.restrictionType.toString(),
                    i = e.purposeId.toString(),
                    r = t[i].substr(0, _s2),
                    o = t[i].substr(_s2 + 1);
                  t[i] = r + n + o;
                });
              },
              n = e.getMaxVendorId();
            e.getRestrictions().forEach(function (e) {
              t[e.purposeId.toString()] = "_".repeat(n);
            });
            for (var _i8 = 0; _i8 < n; _i8++) s(_i8);
          }
          return t;
        }
      }]);
    }(n.TCData);
  }), o("1puf1", function (t, s) {
    e(t.exports, "TCData", function () {
      return o;
    });
    var n = r("g8Asm"),
      i = r("gsVrZ");
    var o = /*#__PURE__*/function (_i$Response) {
      function o(e, t) {
        var _this132;
        _classCallCheck(this, o);
        if (_this132 = _callSuper(this, o), _this132.eventStatus = n.CmpApiModel.eventStatus, _this132.cmpStatus = n.CmpApiModel.cmpStatus, _this132.listenerId = t, n.CmpApiModel.gdprApplies) {
          var s = n.CmpApiModel.tcModel;
          _this132.tcString = n.CmpApiModel.tcString, _this132.addtlConsent = s.addtlConsent, _this132.enableAdvertiserConsentMode = s.enableAdvertiserConsentMode, _this132.isServiceSpecific = s.isServiceSpecific, _this132.useNonStandardTexts = s.useNonStandardTexts, _this132.purposeOneTreatment = s.purposeOneTreatment, _this132.publisherCC = s.publisherCountryCode, _this132.purpose = {
            consents: _this132.createVectorField(s.purposeConsents),
            legitimateInterests: _this132.createVectorField(s.purposeLegitimateInterests)
          }, _this132.vendor = {
            consents: _this132.createVectorField(s.vendorConsents, e),
            legitimateInterests: _this132.createVectorField(s.vendorLegitimateInterests, e),
            disclosedVendors: _this132.createVectorField(s.vendorsDisclosed, e)
          }, _this132.specialFeatureOptins = _this132.createVectorField(s.specialFeatureOptins), _this132.publisher = {
            consents: _this132.createVectorField(s.publisherConsents),
            legitimateInterests: _this132.createVectorField(s.publisherLegitimateInterests),
            customPurpose: {
              consents: _this132.createVectorField(s.publisherCustomConsents),
              legitimateInterests: _this132.createVectorField(s.publisherCustomLegitimateInterests)
            },
            restrictions: _this132.createRestrictions(s.publisherRestrictions)
          };
        }
        return _this132;
      }
      _inherits(o, _i$Response);
      return _createClass(o, [{
        key: "createRestrictions",
        value: function createRestrictions(e) {
          var t = {};
          if (e.numRestrictions > 0) for (var s = e.getMaxVendorId(), n = 1; n <= s; n++) !function (s) {
            var n = s.toString();
            e.getRestrictions(s).forEach(function (e) {
              var s = e.purposeId.toString();
              t[s] || (t[s] = {}), t[s][n] = e.restrictionType;
            });
          }(n);
          return t;
        }
      }, {
        key: "createVectorField",
        value: function createVectorField(e, t) {
          return t ? t.reduce(function (t, s) {
            return t[String(s)] = e.has(Number(s)), t;
          }, {}) : _toConsumableArray(e).reduce(function (e, t) {
            return e[t[0].toString(10)] = t[1], e;
          }, {});
        }
      }]);
    }(i.Response);
  }), o("g8Asm", function (t, s) {
    e(t.exports, "CmpApiModel", function () {
      return a;
    }), r("ly1JR");
    var n = r("kf3qA"),
      i = r("k8k54"),
      o = r("3GWO5");
    var a = /*#__PURE__*/function () {
      function a() {
        _classCallCheck(this, a);
      }
      return _createClass(a, null, [{
        key: "reset",
        value: function reset() {
          delete this.cmpId, delete this.cmpVersion, delete this.eventStatus, delete this.gdprApplies, delete this.tcModel, delete this.tcString, delete this.tcfPolicyVersion, this.enableAdvertiserConsentMode = !1, this.addtlConsent = "", this.cmpStatus = n.CmpStatus.LOADING, this.disabled = !1, this.displayStatus = i.DisplayStatus.HIDDEN, this.eventQueue.clear();
        }
      }]);
    }();
    a.apiVersion = "2", a.eventQueue = new (0, o.EventListenerQueue)(), a.cmpStatus = n.CmpStatus.LOADING, a.disabled = !1, a.displayStatus = i.DisplayStatus.HIDDEN, a.enableAdvertiserConsentMode = !1, a.addtlConsent = "";
  }), o("ly1JR", function (t, s) {
    e(t.exports, "CmpStatus", function () {
      return r("kf3qA").CmpStatus;
    }), e(t.exports, "DisplayStatus", function () {
      return r("k8k54").DisplayStatus;
    }), e(t.exports, "EventStatus", function () {
      return r("gYU5O").EventStatus;
    }), r("kf3qA"), r("k8k54"), r("gYU5O");
  }), o("kf3qA", function (t, s) {
    e(t.exports, "CmpStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).STUB = "stub", n.LOADING = "loading", n.LOADED = "loaded", n.ERROR = "error", n);
  }), o("k8k54", function (t, s) {
    e(t.exports, "DisplayStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).VISIBLE = "visible", n.HIDDEN = "hidden", n.DISABLED = "disabled", n);
  }), o("gYU5O", function (t, s) {
    e(t.exports, "EventStatus", function () {
      return i;
    });
    var n,
      i = ((n = {}).TC_LOADED = "tcloaded", n.CMP_UI_SHOWN = "cmpuishown", n.USER_ACTION_COMPLETE = "useractioncomplete", n);
  }), o("3GWO5", function (t, s) {
    e(t.exports, "EventListenerQueue", function () {
      return i;
    });
    var n = r("eCyxd");
    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);
        this.eventQueue = new Map(), this.queueNumber = 0;
      }
      return _createClass(i, [{
        key: "add",
        value: function add(e) {
          return this.eventQueue.set(this.queueNumber, e), this.queueNumber++;
        }
      }, {
        key: "remove",
        value: function remove(e) {
          return this.eventQueue.delete(e);
        }
      }, {
        key: "exec",
        value: function exec() {
          this.eventQueue.forEach(function (e, t) {
            new (0, n.GetTCDataCommand)(e.callback, e.param, t, e.next);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.queueNumber = 0, this.eventQueue.clear();
        }
      }, {
        key: "size",
        get: function get() {
          return this.eventQueue.size;
        }
      }]);
    }();
  }), o("eCyxd", function (t, s) {
    e(t.exports, "GetTCDataCommand", function () {
      return o;
    });
    var n = r("2kk4Q");
    r("2FqS9");
    var i = r("1puf1");
    var o = /*#__PURE__*/function (_n$Command5) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _n$Command5);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          this.throwIfParamInvalid(), this.invokeCallback(new (0, i.TCData)(this.param, this.listenerId));
        }
      }, {
        key: "throwIfParamInvalid",
        value: function throwIfParamInvalid() {
          if (void 0 !== this.param && (!Array.isArray(this.param) || !this.param.every(Number.isInteger))) throw Error("Invalid Parameter");
        }
      }]);
    }(n.Command);
  }), o("2kk4Q", function (t, s) {
    e(t.exports, "Command", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e, t, s, _n9) {
        _classCallCheck(this, n);
        this.success = !0, Object.assign(this, {
          callback: e,
          listenerId: s,
          param: t,
          next: _n9
        });
        try {
          this.respond();
        } catch (e) {
          this.invokeCallback(null);
        }
      }
      return _createClass(n, [{
        key: "invokeCallback",
        value: function invokeCallback(e) {
          var t = null !== e;
          "function" == typeof this.next ? this.callback(this.next, e, t) : this.callback(e, t);
        }
      }]);
    }();
  }), o("gsVrZ", function (t, s) {
    e(t.exports, "Response", function () {
      return i;
    });
    var n = r("g8Asm");
    var i = /*#__PURE__*/_createClass(function i() {
      _classCallCheck(this, i);
      this.cmpId = n.CmpApiModel.cmpId, this.cmpVersion = n.CmpApiModel.cmpVersion, this.gdprApplies = n.CmpApiModel.gdprApplies, this.tcfPolicyVersion = n.CmpApiModel.tcfPolicyVersion;
    });
  }), o("5qAgv", function (t, s) {
    e(t.exports, "Ping", function () {
      return o;
    });
    var n = r("g8Asm"),
      i = r("gsVrZ");
    var o = /*#__PURE__*/function (_i$Response2) {
      function o() {
        var _this133;
        _classCallCheck(this, o);
        _this133 = _callSuper(this, o), _this133.cmpLoaded = !0, _this133.cmpStatus = n.CmpApiModel.cmpStatus, _this133.displayStatus = n.CmpApiModel.displayStatus, _this133.apiVersion = String(n.CmpApiModel.apiVersion), n.CmpApiModel.tcModel && n.CmpApiModel.tcModel.vendorListVersion && (_this133.gvlVersion = +n.CmpApiModel.tcModel.vendorListVersion);
        return _this133;
      }
      _inherits(o, _i$Response2);
      return _createClass(o);
    }(i.Response);
  }), o("h89KI", function (t, s) {
    e(t.exports, "CmpApi", function () {
      return u;
    }), r("ly1JR");
    var n = r("kf3qA"),
      i = r("k8k54"),
      o = r("gYU5O");
    r("cHs27");
    var a = r("lzUuO"),
      d = r("eOikM"),
      c = r("kbzQk"),
      l = r("g8Asm");
    var u = /*#__PURE__*/function () {
      function u(e, t, s, n) {
        _classCallCheck(this, u);
        this.numUpdates = 0, this.throwIfInvalidInt(e, "cmpId", 2), this.throwIfInvalidInt(t, "cmpVersion", 0), l.CmpApiModel.cmpId = e, l.CmpApiModel.cmpVersion = t, l.CmpApiModel.tcfPolicyVersion = 5, this.isServiceSpecific = !!(void 0 === s || s), this.callResponder = new (0, c.CallResponder)(n);
      }
      return _createClass(u, [{
        key: "throwIfInvalidInt",
        value: function throwIfInvalidInt(e, t, s) {
          if (!("number" == typeof e && Number.isInteger(e) && e >= s)) throw Error("Invalid ".concat(t, ": ").concat(e));
        }
      }, {
        key: "update",
        value: function update(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 ? arguments[2] : void 0;
          if (l.CmpApiModel.disabled) throw Error("CmpApi Disabled");
          l.CmpApiModel.cmpStatus = n.CmpStatus.LOADED, t ? (l.CmpApiModel.displayStatus = i.DisplayStatus.VISIBLE, l.CmpApiModel.eventStatus = o.EventStatus.CMP_UI_SHOWN) : void 0 === l.CmpApiModel.tcModel ? (l.CmpApiModel.displayStatus = i.DisplayStatus.DISABLED, l.CmpApiModel.eventStatus = o.EventStatus.TC_LOADED) : (l.CmpApiModel.displayStatus = i.DisplayStatus.HIDDEN, l.CmpApiModel.eventStatus = o.EventStatus.USER_ACTION_COMPLETE), l.CmpApiModel.gdprApplies = null !== e, l.CmpApiModel.gdprApplies ? ("" === e ? (l.CmpApiModel.tcModel = new (0, a.TCModel)(), l.CmpApiModel.tcModel.cmpId = l.CmpApiModel.cmpId, l.CmpApiModel.tcModel.cmpVersion = l.CmpApiModel.cmpVersion) : l.CmpApiModel.tcModel = d.TCString.decode(e), l.CmpApiModel.tcModel.addtlConsent = s || "", l.CmpApiModel.tcModel.enableAdvertiserConsentMode = l.CmpApiModel.enableAdvertiserConsentMode, l.CmpApiModel.tcModel.isServiceSpecific = this.isServiceSpecific, l.CmpApiModel.tcfPolicyVersion = Number(l.CmpApiModel.tcModel.policyVersion), l.CmpApiModel.tcString = e) : l.CmpApiModel.tcModel = null, 0 === this.numUpdates ? this.callResponder.purgeQueuedCalls() : l.CmpApiModel.eventQueue.exec(), this.numUpdates++;
        }
      }, {
        key: "disable",
        value: function disable() {
          l.CmpApiModel.disabled = !0, l.CmpApiModel.cmpStatus = n.CmpStatus.ERROR;
        }
      }]);
    }();
  }), o("kbzQk", function (t, s) {
    e(t.exports, "CallResponder", function () {
      return l;
    }), r("58sR5");
    var n = r("9wfDM"),
      i = r("lQQ56"),
      o = r("g8Asm"),
      a = r("cPOJP"),
      d = r("6PPwa"),
      c = "__tcfapi";
    var l = /*#__PURE__*/function () {
      function l(e) {
        _classCallCheck(this, l);
        if (e) {
          var t = n.TCFCommand.ADD_EVENT_LISTENER;
          if (null == e ? void 0 : e[t]) throw Error("Built-In Custom Commmand for ".concat(t, " not allowed: Use ").concat(n.TCFCommand.GET_TC_DATA, " instead"));
          if (t = n.TCFCommand.REMOVE_EVENT_LISTENER, null == e ? void 0 : e[t]) throw Error("Built-In Custom Commmand for ".concat(t, " not allowed"));
          (null == e ? void 0 : e[n.TCFCommand.GET_TC_DATA]) && (e[n.TCFCommand.ADD_EVENT_LISTENER] = e[n.TCFCommand.GET_TC_DATA], e[n.TCFCommand.REMOVE_EVENT_LISTENER] = e[n.TCFCommand.GET_TC_DATA]), this.customCommands = e;
        }
        try {
          this.callQueue = window[c]() || [];
        } catch (e) {
          this.callQueue = [];
        } finally {
          window[c] = this.apiCall.bind(this), this.purgeQueuedCalls();
        }
      }
      return _createClass(l, [{
        key: "apiCall",
        value: function apiCall(e, t, s) {
          var _this$customCommands;
          for (var r = arguments.length, c = Array(r > 3 ? r - 3 : 0), _l3 = 3; _l3 < r; _l3++) c[_l3 - 3] = arguments[_l3];
          if ("string" != typeof e && "function" == typeof s) s(null, !1);else if (d.SupportedVersions.has(t)) {
            if ("function" != typeof s) throw Error("invalid callback function");else o.CmpApiModel.disabled ? s(new (0, a.Disabled)(), !1) : this.isCustomCommand(e) || this.isBuiltInCommand(e) ? this.isCustomCommand(e) && !this.isBuiltInCommand(e) ? (_this$customCommands = this.customCommands)[e].apply(_this$customCommands, [s].concat(c)) : e === n.TCFCommand.PING ? this.isCustomCommand(e) ? new i.CommandMap[e](this.customCommands[e], c[0], null, s) : new i.CommandMap[e](s, c[0]) : void 0 === o.CmpApiModel.tcModel ? this.callQueue.push([e, t, s].concat(c)) : this.isCustomCommand(e) && this.isBuiltInCommand(e) ? new i.CommandMap[e](this.customCommands[e], c[0], null, s) : new i.CommandMap[e](s, c[0]) : s(null, !1);
          } else s(null, !1);
        }
      }, {
        key: "purgeQueuedCalls",
        value: function purgeQueuedCalls() {
          var e = this.callQueue;
          this.callQueue = [], e.forEach(function (e) {
            var _window2;
            (_window2 = window)[c].apply(_window2, _toConsumableArray(e));
          });
        }
      }, {
        key: "isCustomCommand",
        value: function isCustomCommand(e) {
          return this.customCommands && "function" == typeof this.customCommands[e];
        }
      }, {
        key: "isBuiltInCommand",
        value: function isBuiltInCommand(e) {
          return void 0 !== i.CommandMap[e];
        }
      }]);
    }();
  }), o("lQQ56", function (t, s) {
    e(t.exports, "CommandMap", function () {
      return I;
    });
    var n,
      i,
      o,
      a,
      d,
      c,
      l = r("jQITc"),
      u = r("eCyxd"),
      g = r("68sO9"),
      E = r("M7t9G"),
      p = r("2kbCU"),
      h = r("9l7i4"),
      S = r("9wfDM");
    var I = /*#__PURE__*/_createClass(function I() {
      _classCallCheck(this, I);
    });
    n = S.TCFCommand.PING, i = S.TCFCommand.GET_TC_DATA, o = S.TCFCommand.GET_IN_APP_TC_DATA, a = S.TCFCommand.GET_VENDOR_LIST, d = S.TCFCommand.ADD_EVENT_LISTENER, c = S.TCFCommand.REMOVE_EVENT_LISTENER, I[n] = l.PingCommand, I[i] = u.GetTCDataCommand, I[o] = g.GetInAppTCDataCommand, I[a] = E.GetVendorListCommand, I[d] = p.AddEventListenerCommand, I[c] = h.RemoveEventListenerCommand;
  }), o("jQITc", function (t, s) {
    e(t.exports, "PingCommand", function () {
      return o;
    }), r("2FqS9");
    var n = r("5qAgv"),
      i = r("2kk4Q");
    var o = /*#__PURE__*/function (_i$Command3) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _i$Command3);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          this.invokeCallback(new (0, n.Ping)());
        }
      }]);
    }(i.Command);
  }), o("68sO9", function (t, s) {
    e(t.exports, "GetInAppTCDataCommand", function () {
      return o;
    });
    var n = r("eCyxd");
    r("2FqS9");
    var i = r("E32VS");
    var o = /*#__PURE__*/function (_n$GetTCDataCommand) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _n$GetTCDataCommand);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          this.throwIfParamInvalid(), this.invokeCallback(new (0, i.InAppTCData)(this.param));
        }
      }]);
    }(n.GetTCDataCommand);
  }), o("M7t9G", function (t, s) {
    e(t.exports, "GetVendorListCommand", function () {
      return a;
    });
    var n = r("g8Asm"),
      i = r("2kk4Q");
    r("cHs27");
    var o = r("cf8E3");
    var a = /*#__PURE__*/function (_i$Command4) {
      function a() {
        _classCallCheck(this, a);
        return _callSuper(this, a, arguments);
      }
      _inherits(a, _i$Command4);
      return _createClass(a, [{
        key: "respond",
        value: function respond() {
          var _this134 = this;
          var e,
            t = n.CmpApiModel.tcModel,
            s = t.vendorListVersion;
          void 0 === this.param && (this.param = s), (e = this.param === s && t.gvl ? t.gvl : new (0, o.GVL)(this.param)).readyPromise.then(function () {
            _this134.invokeCallback(e.getJson());
          });
        }
      }]);
    }(i.Command);
  }), o("2kbCU", function (t, s) {
    e(t.exports, "AddEventListenerCommand", function () {
      return o;
    });
    var n = r("g8Asm"),
      i = r("eCyxd");
    var o = /*#__PURE__*/function (_i$GetTCDataCommand) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _i$GetTCDataCommand);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          this.listenerId = n.CmpApiModel.eventQueue.add({
            callback: this.callback,
            param: this.param,
            next: this.next
          }), _superPropGet(o, "respond", this, 3)([]);
        }
      }]);
    }(i.GetTCDataCommand);
  }), o("9l7i4", function (t, s) {
    e(t.exports, "RemoveEventListenerCommand", function () {
      return o;
    });
    var n = r("g8Asm"),
      i = r("2kk4Q");
    var o = /*#__PURE__*/function (_i$Command5) {
      function o() {
        _classCallCheck(this, o);
        return _callSuper(this, o, arguments);
      }
      _inherits(o, _i$Command5);
      return _createClass(o, [{
        key: "respond",
        value: function respond() {
          this.invokeCallback(n.CmpApiModel.eventQueue.remove(this.param));
        }
      }]);
    }(i.Command);
  }), o("cPOJP", function (t, s) {
    e(t.exports, "Disabled", function () {
      return o;
    });
    var n = r("gsVrZ");
    r("ly1JR");
    var i = r("kf3qA");
    var o = /*#__PURE__*/function (_n$Response) {
      function o() {
        var _this135;
        _classCallCheck(this, o);
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          e[_key3] = arguments[_key3];
        }
        _this135 = _callSuper(this, o, [].concat(e)), _this135.cmpStatus = i.CmpStatus.ERROR;
        return _this135;
      }
      _inherits(o, _n$Response);
      return _createClass(o);
    }(n.Response);
  }), o("6PPwa", function (t, s) {
    e(t.exports, "SupportedVersions", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);
      }
      return _createClass(n, null, [{
        key: "has",
        value: function has(e) {
          return "string" == typeof e && (e = Number(e)), this.set_.has(e);
        }
      }]);
    }();
    n.set_ = new Set([0, 2, void 0, null]);
  }), o("1z40N", function (e, t) {}), o("OkLRq", function (t, s) {
    e(t.exports, "TemplateModel", function () {
      return n;
    });
    var n = /*#__PURE__*/_createClass(function n(e) {
      _classCallCheck(this, n);
      var t = e.id,
        s = e.style,
        _n0 = e.html;
      this.id = t, this.style = s, this.html = _n0;
    });
  }), o("5N1IW", function (t, s) {
    e(t.exports, "UiModel", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        _classCallCheck(this, n);
        var t = e.initialView,
          s = e.closedView,
          _n1 = e.theme,
          i = e.language,
          r = e.gpcSignalHonoured,
          o = e.showCmpForGpc,
          a = e.showGpcLabel,
          d = e.dpsDisplayFormat,
          c = e.poweredByLogo,
          l = e.lifecycleStatus,
          u = e.informationOnlyLayer;
        this.isCmpPreviewPage = !1, this.closedView = s, this.theme = _n1 || "uc", this.language = i, this.gpcSignalHonoured = r, this.showCmpForGpc = o, this.showGpcLabel = a, this.initialView = t, this.dpsDisplayFormat = d, this.poweredByLogo = null != c ? c : "UC", this.lifecycleStatus = null != l ? l : "active", u && (this.informationOnlyLayer = u), "/browser-ui/preview/index.html" === document.location.pathname && "app.usercentrics.eu" === document.location.hostname && (this.isCmpPreviewPage = !0);
      }
      return _createClass(n, [{
        key: "getLanguage",
        value: function getLanguage() {
          return this.language;
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(e) {
          this.language = e;
        }
      }, {
        key: "getInitialView",
        value: function getInitialView() {
          return this.initialView;
        }
      }, {
        key: "getClosedView",
        value: function getClosedView() {
          return this.closedView;
        }
      }]);
    }();
  }), o("dH0Qb", function (t, s) {
    e(t.exports, "UetModel", function () {
      return i;
    });
    var n = r("7qJ26");
    var i = /*#__PURE__*/function () {
      function i(e) {
        _classCallCheck(this, i);
        this.customEventService = e;
      }
      return _createClass(i, [{
        key: "getUetState",
        value: function getUetState(e) {
          return Object.entries(e).reduce(function (e, t) {
            var s,
              _i9,
              r,
              o = (0, n._)(t, 2)[1];
            return (null == (s = o.uet) ? void 0 : s.adStorage) !== void 0 && (e.adStorage = (null == (_i9 = o.consent) ? void 0 : _i9.type) === "EXPLICIT" && (null == (r = o.consent) ? void 0 : r.given) && (!0 === e.adStorage || void 0 === e.adStorage)), e;
          }, {});
        }
      }, {
        key: "push",
        value: function push(e) {
          var t = e.adStorage;
          window.uetq = window.uetq || [], window.uetq.push("consent", "update", {
            ad_storage: t
          }), this.customEventService.dispatchUcUetUpdateEvent(e);
        }
      }, {
        key: "apply",
        value: function apply(e, t) {
          if ((null == (n = window.ucCmpConfig) || null == (s = n.uetConfig) || !s.disabled) && "EXPLICIT" === t) {
            var s,
              n,
              _i0 = this.getUetState(e).adStorage;
            void 0 !== _i0 && this.push({
              adStorage: _i0 ? "granted" : "denied"
            });
          }
        }
      }]);
    }();
  }), o("hN3Ja", function (t, s) {
    e(t.exports, "IntegrationsModel", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        _classCallCheck(this, n);
        var t = e.scripts;
        this.scripts = t;
      }
      return _createClass(n, [{
        key: "getScripts",
        value: function getScripts() {
          return this.scripts;
        }
      }]);
    }();
  }), o("ayOF0", function (t, s) {
    e(t.exports, "default", function () {
      return n;
    });
    var n = /*#__PURE__*/function () {
      function n(e) {
        var _this136 = this;
        _classCallCheck(this, n);
        var t = e.settingsId,
          s = e.apiService,
          _n11 = e.localStorageService;
        this.settingsId = t, this.apiService = s, this.localStorageService = _n11, window.addEventListener("beforeunload", function () {
          document.addEventListener("visibilitychange", function () {
            "hidden" === document.visibilityState && _this136.save();
          });
        }), window.addEventListener("UC_UI_INITIALIZED", function () {
          var e = _this136.localStorageService.getTagloggerData();
          e && .5 >= Math.random() && (_this136.send(e), _this136.localStorageService.removeTagLoggerData());
        });
      }
      return _createClass(n, [{
        key: "getEntries",
        value: function getEntries(e) {
          var _this137 = this;
          return e.reduce(function (e, t) {
            var s = t.entryType,
              _n10 = t.name;
            if (!["mark", "measure", "paint"].includes(s) && !_n10.startsWith("data:") && !["visible"].includes(_n10) && !/^https:\/\/([a-z0-9.]+).usercentrics\.eu/.test(_n10)) {
              var i = _this137.getEntry(_n10);
              if (-1 === e.indexOf(i)) return [].concat(_toConsumableArray(e), [i]);
            }
            return e;
          }, []);
        }
      }, {
        key: "getEntry",
        value: function getEntry(e) {
          var t,
            s = e.split("/");
          return e.indexOf("://") > -1 ? (t = "".concat(s[2]), s[3] && (t += "/".concat(s[3]))) : (t = "".concat(s[0]), s[1] && (t += "/".concat(s[1]))), t = "".concat(t.split("?")[0]);
        }
      }, {
        key: "send",
        value: function send(e) {
          this.apiService.sendTagLoggerData(e);
        }
      }, {
        key: "save",
        value: function save() {
          if (Object.prototype.hasOwnProperty.call(window, "performance") && "function" == typeof performance.getEntries) {
            var e = this.getEntries(window.performance.getEntries()),
              t = window.location.href;
            this.localStorageService.saveTagloggerData({
              settingsId: this.settingsId,
              source: t,
              entries: e
            });
          }
        }
      }]);
    }();
  }), o("3G7LV", function (t, s) {
    e(t.exports, "getCmpController", function () {
      return o;
    });
    var n = r("h2FSh"),
      i = r("dmwAz"),
      o = function o(e, t, s) {
        return (0, n._)(function () {
          var n;
          return (0, i._)(this, function (i) {
            switch (i.label) {
              case 0:
                switch (e.setting.type) {
                  case "GDPR":
                    return [3, 1];
                  case "US":
                    return [3, 3];
                  case "TCF":
                    return [3, 5];
                }
                return [3, 9];
              case 1:
                return [4, r("k7XIW")];
              case 2:
                return [2, new (i.sent().GdprCmpController)(e, t, {
                  consentData: null == s ? void 0 : s.consentData,
                  settingsCoreData: null == s ? void 0 : s.settingsCoreData,
                  uiVersion: null == s ? void 0 : s.uiVersion,
                  draft: null == s ? void 0 : s.draft,
                  watermark: null == s ? void 0 : s.watermark,
                  location: (null == s ? void 0 : s.location) ? s.location : null
                })];
              case 3:
                return [4, r("7BeWg")];
              case 4:
                return [2, new (i.sent().UsCmpController)(e, t, {
                  consentData: null == s ? void 0 : s.consentData,
                  settingsCoreData: null == s ? void 0 : s.settingsCoreData,
                  uiVersion: null == s ? void 0 : s.uiVersion,
                  draft: null == s ? void 0 : s.draft,
                  watermark: null == s ? void 0 : s.watermark,
                  gpp: null == s ? void 0 : s.gpp,
                  location: (null == s ? void 0 : s.location) ? s.location : null
                })];
              case 5:
                return [4, r("bsOaL")];
              case 6:
                if (n = new (i.sent().TcfCmpController)(e, t, {
                  consentData: null == s ? void 0 : s.consentData,
                  settingsCoreData: null == s ? void 0 : s.settingsCoreData,
                  uiVersion: null == s ? void 0 : s.uiVersion,
                  draft: null == s ? void 0 : s.draft,
                  watermark: null == s ? void 0 : s.watermark,
                  location: (null == s ? void 0 : s.location) ? s.location : null,
                  excludeAcceptAllVendors: (null == s ? void 0 : s.excludeAcceptAllVendors) || [],
                  customPurModel: null == s ? void 0 : s.customPurModel
                }), !(e.ui.language && "en" !== e.ui.language)) return [3, 8];
                return [4, n.tcf.changeLanguage(e.ui.language, e.iab)];
              case 7:
                i.sent(), i.label = 8;
              case 8:
                return [2, n];
              case 9:
                throw Error("Undefined CMP setting type");
              case 10:
                return [2];
            }
          });
        })();
      };
  }), o("k7XIW", function (e, t) {
    e.exports = r("iXnEM")(s("5aKgu")).then(function () {
      return r("kRyoT");
    });
  }), o("7BeWg", function (e, t) {
    e.exports = r("iXnEM")(s("5TAwo")).then(function () {
      return r("6WH5I");
    });
  }), o("bsOaL", function (e, t) {
    e.exports = r("iXnEM")(s("aRnz9")).then(function () {
      return r("95tpa");
    });
  }), o("gIDkr", function (t, s) {
    e(t.exports, "initCdcs", function () {
      return n;
    });
    var n = function n(e) {
      var t = new Date();
      t.setFullYear(t.getFullYear() + 1);
      var s = function (e) {
        var t = document.cookie.match(RegExp("(^| )".concat(e, "=([^;]+)")));
        if (t) return t[2];
      }("ucString");
      s && localStorage.setItem("ucString", s), window.addEventListener("UC_CONSENT_CHANGED", function () {
        var s = localStorage.getItem("ucString");
        s && (document.cookie = "ucString=".concat(s, ";expires=").concat(t.toUTCString(), ";domain=").concat(e));
      });
    };
  }), o("5CKHf", function (t, s) {
    e(t.exports, "isUsConsentModel", function () {
      return n;
    }), e(t.exports, "isTcfConsentModel", function () {
      return i;
    });
    var n = function n(e) {
        return "US" === e.setting.type;
      },
      i = function i(e) {
        return "TCF" === e.setting.type;
      };
  }), o("280OB", function (t, s) {
    e(t.exports, "isUserBot", function () {
      return n;
    });
    var n = function n(e) {
      return RegExp("AdsBot-Google|AdsBot-Google-Mobile|bingbot/|BingPreview/|Chrome-Lighthouse|DuckDuckBot/|Feedfetcher-Google|Googlebot/|Google Favicon|Googlebot-Image/|Google-InspectionTool|Googlebot-Mobile/|Googlebot-News|Googlebot-Video/|Google Page Speed Insights|Google PageSpeed Insights|Google PP|Google-Read-Aloud|Google Search Console|Google-SearchByImage|Google-Speakr|Google-Structured-Data-Testing-Tool|Google Web Preview|HeadlessChrome|Lighthouse|Optimizer|Pagespeed|Playwright/|SISTRIX|Slurp/|Storebot-Google|YahooSeeker|YahooCacheSystem|Yahoo! Site Explorer Feed Validator|Yahoo! Slurp", "i").test(e);
    };
  }), o("bo49W", function (t, s) {
    e(t.exports, "setNonce", function () {
      return i;
    });
    var n = r("e08dO"),
      i = function i(e) {
        if (void 0 !== e && "" !== e) {
          if (!(0, n.isValidNonce)(e)) return void console.warn("Invalid CSP nonce passed to WebSdk options: \"".concat(e, "\". This nonce will be ignored."));
          (0, n.setNonceInStore)(e);
        }
      };
  }), o("bVBWk", function (t, s) {
    e(t.exports, "setTrackingPixel", function () {
      return i;
    });
    var n = {
        PROD: {
          URI: "https://app.usercentrics.eu",
          EU_URI: "https://app.eu.usercentrics.eu"
        },
        SANDBOX: {
          URI: "https://app.usercentrics-sandbox.eu",
          EU_URI: "https://app.usercentrics-sandbox.eu"
        }
      },
      i = function i(e, t, s) {
        var i,
          r,
          o = (null == (r = window.ucCmpConfig) || null == (i = r.proxy) ? void 0 : i.analytics) ? window.ucCmpConfig.proxy.analytics : n[t ? "SANDBOX" : "PROD"][s ? "EU_URI" : "URI"];
        new Image().src = "".concat(o, "/session/1px.png?settingsId=").concat(e);
      };
  });
})();