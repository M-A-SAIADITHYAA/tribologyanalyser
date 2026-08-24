"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function () {
  function t(t, e, n, i) {
    Object.defineProperty(t, e, {
      get: n,
      set: i,
      enumerable: !0,
      configurable: !0
    });
  }
  var e = ("u" > (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis : "u" > (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : "u" > (typeof global === "undefined" ? "undefined" : _typeof(global)) ? global : {}).parcelRequirecb08,
    n = e.register;
  n("kRyoT", function (n, i) {
    t(n.exports, "GdprCmpController", function () {
      return l;
    });
    var s = e("kzI06"),
      r = e("8QPZA"),
      o = e("8bfDC"),
      a = e("9Ijo5");
    var l = /*#__PURE__*/function (_s$CmpController) {
      function l(t, e, n) {
        var _this;
        _classCallCheck(this, l);
        _this = _callSuper(this, l, [t, e, n]), _this.consent = new (0, r.GdprConsentModel)(t.consent, {
          uiVersion: null == n ? void 0 : n.uiVersion
        }), _this.i18n = new (0, o.GdprI18nModel)(t.i18n);
        var i,
          s = null == (i = _this.coreData) ? void 0 : i.cipa,
          _l = (0, a.isCipaRegionApplicable)(s, _this.getLocation());
        _this.ui.initialView = (0, a.getCipaInitialView)(s, _l, _this.ui.initialView, _this.ui.closedView), _l && (_this.dsrInfo = t.dsrInfo);
        return _this;
      }
      _inherits(l, _s$CmpController);
      return _createClass(l);
    }(s.CmpController);
  }), n("kzI06", function (n, i) {
    t(n.exports, "CmpController", function () {
      return w;
    });
    var s = e("h2FSh"),
      r = e("kTJf3"),
      o = e("7nwmn"),
      a = e("7qJ26"),
      l = e("dmwAz"),
      c = e("bxjJO"),
      u = e("2hIpA"),
      d = e("8bfDC"),
      h = e("gUC9p"),
      p = e("e08dO"),
      g = e("6YDm0"),
      v = e("5CKHf"),
      f = e("jRIZe"),
      m = e("fhM78"),
      C = e("cnbVL"),
      S = e("N85OF"),
      y = e("96QDM"),
      b = e("6Xqt8");
    var w = /*#__PURE__*/function () {
      function w(t, e, n) {
        _classCallCheck(this, w);
        var i,
          s,
          r,
          o = e.apiService,
          a = e.consentService,
          l = e.localStorageService,
          d = e.analyticsService;
        this.englishI18nFallbackData = null, this.draft = !1, this.customPurModel = !1, this.watermark = !1, this.shouldNotifySectionChange = void 0;
        var h = (0, S.getCombinedCmpData)(t, n);
        y.webSdkEvents.emit("CMP_DATA_COMBINED", h);
        var p = h.dps,
          g = h.gcm,
          v = h.uet,
          C = h.clarity,
          b = h.core,
          _w = h.integrations,
          D = h.setting,
          I = h.ui,
          E = h.languages,
          A = h.theme,
          _ = h.template,
          T = h.acs,
          L = h.ageVerification;
        this.coreData = null == n ? void 0 : n.settingsCoreData, this.apiService = o, this.analyticsService = d, this.consentService = a, this.customEventService = new (0, c.CustomEventService)(b.customEvents || []), this.localStorageService = l, this.scriptService = new (0, c.ScriptService)(), b.dataLayers && (this.dataLayerService = new (0, c.DataLayerService)(b.dataLayers)), this.consentWebhookEnabled = null == n || null == (i = n.settingsCoreData) ? void 0 : i.consentWebhookEnabled, this.crossDeviceEnabled = null == n || null == (s = n.settingsCoreData) ? void 0 : s.crossDeviceConsentSharingEnabled, this.advertiserConsentModeEnabled = t.core.advertiserConsentModeEnabled, this.ui = new (0, u.UiModel)(I), this.languages = new (0, u.LanguagesModel)(E), this.setting = new (0, u.SettingModel)(D), this.ageVerification = L, this.dps = new (0, u.DpsModel)(p, l), this.theme = new (0, u.ThemeModel)(A || {}), this.location = null, (null == n ? void 0 : n.location) && (this.location = null == n ? void 0 : n.location), this.abortController = new ((0, S.resolveAbortController)())(), (null == n ? void 0 : n.draft) && (this.draft = null == n ? void 0 : n.draft), (null == n ? void 0 : n.customPurModel) && (this.customPurModel = null == n ? void 0 : n.customPurModel), (null == n ? void 0 : n.watermark) && (this.watermark = null == n ? void 0 : n.watermark), _ && (this.template = new (0, u.TemplateModel)(_)), _w && (this.integrations = new (0, u.IntegrationsModel)(_w)), g && (this.gcm = new (0, u.GoogleConsentModeModel)(g, l, this.customEventService)), v && (this.uet = new (0, u.UetModel)(this.customEventService)), C && (this.clarity = new (0, m.ClarityModel)(this.customEventService)), (null == n ? void 0 : n.gpp) && (this.gpp = n.gpp), T && "TCF" !== this.setting.getType() && (this.acs = new (0, f.AcsModel)(this.customEventService, null == n ? void 0 : n.location)), this.consentStatus = null == n || null == (r = n.consentData) ? void 0 : r.status, this.isWixTheme = "wix" === this.ui.theme;
      }
      return _createClass(w, [{
        key: "getLocation",
        value: function getLocation() {
          return this.location;
        }
      }, {
        key: "isGppActive",
        value: function isGppActive() {
          return !!this.gpp;
        }
      }, {
        key: "initAbortController",
        value: function initAbortController() {
          this.abortController = new ((0, S.resolveAbortController)())();
        }
      }, {
        key: "getConsentDetails",
        value: function getConsentDetails() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              return this.consent ? [2, {
                consent: (0, o._)((0, r._)({}, this.consent), {
                  fromUserAction: !t
                }),
                services: (0, r._)({}, this.dps.services),
                categories: (0, r._)({}, this.dps.categories)
              }] : [2];
            });
          }).call(this);
        }
      }, {
        key: "getCategoryConsentDetails",
        value: function getCategoryConsentDetails() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = {};
          return Object.entries(this.dps.categories).forEach(function (t) {
            var n = (0, a._)(t, 2),
              i = n[0],
              s = n[1];
            e[i] = {
              name: s.name,
              consent: "ALL_ACCEPTED" === s.state || "SOME_ACCEPTED" === s.state
            };
          }), {
            consent: {
              categories: e,
              fromUserAction: !t
            }
          };
        }
      }, {
        key: "fetchI18nDataForLanguage",
        value: function fetchI18nDataForLanguage(t) {
          return (0, s._)(function () {
            var e, n, i, s, o, a, c, u, d, h;
            return (0, l._)(this, function (l) {
              switch (l.label) {
                case 0:
                  return [4, this.apiService.fetchI18nData((0, r._)({
                    language: t,
                    settingsId: this.setting.id,
                    settingsType: this.setting.type,
                    settingsVersion: this.setting.version,
                    activeTcfVendorsListVersion: null == (n = this.coreData) || null == (e = n.tcf) ? void 0 : e.vendorsListVersion,
                    previousTcfVendorsListVersion: this.consent && (null == (s = this.consent) || null == (i = s.vendorsList) ? void 0 : i.version) || (null == (a = this.coreData) || null == (o = a.tcf) ? void 0 : o.vendorsListVersion),
                    previousTcfPolicyVersion: this.consent && (null == (u = this.consent) || null == (c = u.vendorsList) ? void 0 : c.policyVersion) || (null == (h = this.coreData) || null == (d = h.tcf) ? void 0 : d.policyVersion),
                    theme: this.ui.theme
                  }, this.draft && {
                    draft: this.draft
                  }))];
                case 1:
                  return [2, l.sent()];
              }
            });
          }).call(this);
        }
      }, {
        key: "initI18nData",
        value: function initI18nData() {
          return (0, s._)(function () {
            var t, e, n, i, s;
            return (0, l._)(this, function (r) {
              switch (r.label) {
                case 0:
                  if (!(!this.englishI18nFallbackData && "en" !== this.ui.language)) return [3, 2];
                  return t = this, [4, this.fetchI18nDataForLanguage("en")];
                case 1:
                  t.englishI18nFallbackData = r.sent(), r.label = 2;
                case 2:
                  return [4, this.fetchI18nDataForLanguage(this.ui.language)];
                case 3:
                  if (!(e = r.sent())) return [2];
                  return n = e, this.englishI18nFallbackData && (n = this.mergeWithFallback(e, this.englishI18nFallbackData)), (0, d.isGdprI18nData)(n) ? this.i18n = new (0, d.GdprI18nModel)(n) : (0, h.isTcfI18nData)(n) ? (this.i18n = new (0, h.TcfI18nModel)(n), (null == (s = this.tcf) || null == (i = s.acm) ? void 0 : i.vendors) && this.tcf.updateAcmVendorsPurposes(this.i18n.tcf.acm.vendorsPurposes)) : (0, g.isCcpaI18nData)(n) && (this.i18n = new (0, g.UsI18nModel)(n)), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "mergeWithFallback",
        value: function mergeWithFallback(t, e) {
          var _this2 = this;
          if ("object" != _typeof(t) || null === t) return t;
          if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length > 0 && e.length > 0 && t.every(function (t) {
              return null !== t && "object" == _typeof(t) && "string" == typeof t.id;
            }) && e.every(function (t) {
              return null !== t && "object" == _typeof(t) && "string" == typeof t.id;
            })) {
              var n = new Map(e.map(function (t) {
                return [t.id, t];
              }));
              return t.map(function (t) {
                var e = n.get(t.id);
                return e ? _this2.mergeWithFallback(t, e) : t;
              });
            }
            return t.map(function (t, n) {
              var i = e[n];
              return void 0 === i ? t : "object" == _typeof(t) && null !== t && "object" == _typeof(i) && null !== i ? _this2.mergeWithFallback(t, i) : null != t ? t : i;
            });
          }
          var i = (0, r._)({}, e);
          for (var s in t) void 0 !== t[s] && null !== t[s] && "" !== t[s] && (i[s] = "object" == _typeof(t[s]) && null !== t[s] && "object" == _typeof(e[s]) && null !== e[s] ? this.mergeWithFallback(t[s], e[s]) : t[s]);
          return i;
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return [2, this.consentService.clearConsentsLocally()];
            });
          }).call(this);
        }
      }, {
        key: "unblockScriptsWithConsent",
        value: function unblockScriptsWithConsent() {
          return (0, s._)(function () {
            var t, e;
            return (0, l._)(this, function (n) {
              return t = this.dps.getAcceptedServices("name"), e = this.dps.getAcceptedServices("id"), [2, this.scriptService.unblockScripts(t, e)];
            });
          }).call(this);
        }
      }, {
        key: "getControllerId",
        value: function getControllerId() {
          var t;
          return null == (t = this.consent) ? void 0 : t.controllerId;
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return this.ui.getLanguage();
        }
      }, {
        key: "getIsConsentRequired",
        value: function getIsConsentRequired() {
          var t;
          return null == (t = this.consent) ? void 0 : t.required;
        }
      }, {
        key: "getAgeVerificationConfig",
        value: function getAgeVerificationConfig() {
          return this.ageVerification;
        }
      }, {
        key: "getAgeVerificationStatus",
        value: function getAgeVerificationStatus() {
          return this.consentService.getAgeVerificationStatus();
        }
      }, {
        key: "saveAgeVerification",
        value: function saveAgeVerification(t) {
          this.consentService.saveAgeVerificationLocally(t);
        }
      }, {
        key: "clearAgeVerificationStatus",
        value: function clearAgeVerificationStatus() {
          this.consentService.clearAgeVerificationLocally();
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(t) {
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              switch (e.label) {
                case 0:
                  if (!this.languages.getHasLanguage(t)) return [2];
                  return this.ui.setLanguage(t), this.localStorageService.setUiData({
                    language: t
                  }), [4, this.initI18nData()];
                case 1:
                  return e.sent(), window.dispatchEvent(new CustomEvent("UC_LANGUAGE_CHANGED", {
                    detail: {
                      language: t
                    }
                  })), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "setAnalyticsPixel",
        value: function setAnalyticsPixel(t, e, n) {
          var i, s;
          null == (i = this.analyticsService) || i.setAnalyticsPixel(t, e, (0, o._)((0, r._)({}, n), {
            isUs: null != (s = null == n ? void 0 : n.isUs) ? s : "US" === this.setting.type
          }));
        }
      }, {
        key: "dispatchViewChanged",
        value: function dispatchViewChanged(t, e) {
          C.V2BridgeCustomEvents.dispatchUcUiViewChangedEvent({
            previousView: t,
            view: e
          });
        }
      }, {
        key: "signalIABViewChanged",
        value: function signalIABViewChanged(t, e) {
          ("none" === t || "button" === t || "privacyNotice" === t) && ("first" === e || "second" === e) ? (this.tcf && this.tcf.setUIOpen(), this.gpp && (this.gpp.getCmpSignalStatus() !== b.SignalStatus.NOT_READY && this.gpp.setCmpSignalNotReady(), this.gpp.setCmpDisplayVisible())) : ("first" === t || "second" === t) && ("none" === e || "button" === e) && (this.tcf && this.tcf.setUIClosed(), this.gpp && (this.gpp.setCmpDisplayHidden(), this.shouldNotifySectionChange && (this.gpp.setSectionString(this.shouldNotifySectionChange.sectionName, this.shouldNotifySectionChange.sectionString), this.shouldNotifySectionChange = void 0), this.gpp.setCmpSignalReady()));
        }
      }, {
        key: "acceptAllConsents",
        value: function acceptAllConsents() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return this.tcf && this.tcf.acceptAll(), this.dps.acceptAll(), [2];
            });
          }).call(this);
        }
      }, {
        key: "denyAllConsents",
        value: function denyAllConsents() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return this.tcf && this.tcf.denyAll(), this.dps.denyAll(), [2];
            });
          }).call(this);
        }
      }, {
        key: "updateServicesConsents",
        value: function updateServicesConsents(t) {
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              return this.dps.updateSome(t), [2];
            });
          }).call(this);
        }
      }, {
        key: "updateServiceConsent",
        value: function updateServiceConsent(t) {
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              return this.dps.updateSome([t]), [2];
            });
          }).call(this);
        }
      }, {
        key: "updateCategoriesConsents",
        value: function updateCategoriesConsents(t) {
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              return this.dps.updateCategoriesConsents(t), [2];
            });
          }).call(this);
        }
      }, {
        key: "updateCategoryConsent",
        value: function updateCategoryConsent(t) {
          return (0, s._)(function () {
            return (0, l._)(this, function (e) {
              return this.dps.updateCategoriesConsents([t]), [2];
            });
          }).call(this);
        }
      }, {
        key: "updateConsentData",
        value: function updateConsentData() {
          var t, e, n, i, s, r, o, a, l;
          null == (t = this.consent) || t.setUiVersion(), null == (e = this.consent) || e.setRequired(!1), null == (n = this.consent) || n.setSetting(this.setting), null == (i = this.consent) || i.setLanguage(this.ui.getLanguage()), null == (s = this.consent) || s.setUpdatedAt(Date.now()), null == (a = this.consent) || a.setHash((0, p.sha256)(null != (l = null == (o = this.consent) || null == (r = o.updatedAt) ? void 0 : r.toString()) ? l : ""));
        }
      }, {
        key: "saveConsents",
        value: function saveConsents() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "EXPLICIT",
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return (0, s._)(function () {
            var i, s, r, o, a, c, u, d, h, p;
            return (0, l._)(this, function (l) {
              switch (l.label) {
                case 0:
                  if (!this.consent) return [3, 2];
                  if (i = this.consent.hash, s = this.consent.interaction, "US" === this.setting.type) {
                    if (r = n || "ALL_DENIED" === this.dps.getConsentStatus(), o = this.gpp ? this.gpp.getHasOptedOut() : this.consent.getHasOptedOut(), a = !!this.gpp && !!navigator.globalPrivacyControl && "EXPLICIT" !== t, o === r && this.consent.type === t && "gpc" !== this.consent.interaction || a) return [2];
                    "gpc" === this.consent.interaction && "EXPLICIT" === t && (this.consent.interaction = "user"), this.updateConsentData(), this.gpp ? (this.gpp.setHasOptedOut(r, t), this.gpp.generateUsString(), this.consent.setUsString(this.gpp.usString)) : (this.consent.setHasOptedOut(r), this.consent.emitCcpaString()), this.consent.setUpdatedBy(r ? "onDenyAllServices" : "onAcceptAllServices");
                  } else "gpc" === this.consent.interaction && "EXPLICIT" === t && (this.consent.interaction = "user"), this.updateConsentData(), e ? this.consent.setUpdatedBy("onUpdateServices") : this.consent.setUpdatedBy(this.dps.updatedBy || (null == (c = this.tcf) ? void 0 : c.updatedBy) || "onUpdateServices");
                  return this.dps.updatedBy = void 0, this.tcf && (this.tcf.updatedBy = void 0), u = n ? "ALL_DENIED" : this.dps.getConsentStatus(), this.consent.setStatus(u), this.consent.setServiceIds(this.dps.getConsentServiceIds(u)), this.consent.setType(t), this.tcf && (this.tcf.applySpecialCasesForVendors(), this.tcf.refreshTimestamp(), d = this.consent, this.isTcfSignalSuppressed() ? (d.setTcString(""), this.tcf.clearTcString(), this.tcf.acm && (d.setAcString(""), this.tcf.setAddtlConsent(""))) : (h = this.tcf.generateTcString(), d.setTcString(h), this.tcf.acm && (p = this.tcf.getACString(), d.setAcString(p), this.tcf.setAddtlConsent(p)))), [4, this.applyConsents(i, s, e, !1)];
                case 1:
                  l.sent(), this.consentStatus = u, this.tcf && this.customPurModel && !e && this.tcf.setUIClosed(), this.dps.updateInitialState(), l.label = 2;
                case 2:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "saveConsentRemotely",
        value: function saveConsentRemotely() {
          return (0, s._)(function () {
            var t, e;
            return (0, l._)(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!(this.consent && !this.consent.isBot)) return [3, 2];
                  return t = this.tcf && Object.entries(this.tcf.vendors).map(function (t) {
                    var e = (0, a._)(t, 2),
                      n = e[0],
                      i = e[1];
                    return [+n, i.legIntPurposes, i.purposes, i.specialPurposes];
                  }), e = (0, r._)({
                    consent: this.consent,
                    services: this.dps.services,
                    settingsType: this.setting.type,
                    ucString: this.localStorageService.getConsentString(),
                    consentWebhookEnabled: this.consentWebhookEnabled,
                    crossDeviceEnabled: this.crossDeviceEnabled,
                    isGppActive: !!this.gpp,
                    location: this.location,
                    analyticsEnabled: void 0 !== this.analyticsService
                  }, t && {
                    vendors: t
                  }), [4, this.consentService.saveConsentRemotely(e)];
                case 1:
                  n.sent(), n.label = 2;
                case 2:
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "areAllConsentsAccepted",
        value: function areAllConsentsAccepted() {
          return "US" === this.setting.type && this.consentStatus ? "ALL_ACCEPTED" === this.consentStatus : "ALL_ACCEPTED" === this.dps.getConsentStatus();
        }
      }, {
        key: "areAllConsentsDenied",
        value: function areAllConsentsDenied() {
          return "US" === this.setting.type && this.consentStatus ? "ALL_DENIED" === this.consentStatus : "ALL_DENIED" === this.dps.getConsentStatus();
        }
      }, {
        key: "getServiceInfo",
        value: function getServiceInfo(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, s._)(function () {
            var n;
            return (0, l._)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!(n = this.dps.getService(t))) return [2];
                  if (!(!this.i18n || e && !this.i18n.getServiceHasDetails(t))) return [3, 2];
                  return [4, this.initI18nData()];
                case 1:
                  i.sent(), i.label = 2;
                case 2:
                  if (this.i18n) return [2, {
                    service: n,
                    i18n: this.i18n.getService(t)
                  }];
                  return [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getStoredInfoByUrl",
        value: function getStoredInfoByUrl(t) {
          return (0, s._)(function () {
            var e, n, i, s, a, c, u, d, h, g, v, f, m, C, S, y, b, w, D, I, E, A, _, T, L;
            return (0, l._)(this, function (l) {
              var _this3 = this;
              switch (l.label) {
                case 0:
                  return e = {}, [4, this.apiService.fetchStoredInfoData(t)];
                case 1:
                  if (n = l.sent(), i = "TCF" === this.setting.getType(), void 0 !== this.i18n) return [3, 3];
                  return [4, this.initI18nData()];
                case 2:
                  return l.sent(), [3, 4];
                case 3:
                  a = (s = this.i18n.base.cookieInformation).anyDomain, c = s.cookieRefresh, u = s.domain, d = s.multipleDomains, g = void 0 === (h = s.duration) ? "duration" : h, v = s.no, m = void 0 === (f = s.type) ? "type" : f, C = s.yes, y = (S = this.i18n.base).purposes, b = S.day, w = S.days, D = S.minute, I = S.minutes, E = S.session, n && (A = n.disclosures, _ = n.domains, T = [], L = [], A.map(function (t) {
                    var e = t.cookieRefresh,
                      n = t.description,
                      s = t.domain,
                      l = t.identifier,
                      h = t.maxAgeSeconds,
                      f = t.name,
                      S = t.type,
                      A = t.purposes,
                      _ = t.specialPurposes,
                      L = t.optOut,
                      U = "",
                      V = "";
                    if (i) {
                      if (A && (null == A ? void 0 : A.length) > 0) {
                        var k = [];
                        A.forEach(function (t) {
                          var e;
                          (null == (e = _this3.tcf) ? void 0 : e.purposes[t]) && k.push(_this3.tcf.purposes[t].name);
                        }), U = "".concat(k.join("; "));
                      }
                      if (_ && _.length > 0) {
                        var P = [];
                        _.forEach(function (t) {
                          var e;
                          (null == (e = _this3.tcf) ? void 0 : e.specialPurposes[t]) && P.push(_this3.tcf.specialPurposes[t].name);
                        }), V = "".concat(P.join("; "));
                      }
                    }
                    var M = [];
                    M.push({
                      label: m,
                      value: "".concat(S),
                      id: "type"
                    }), "cookie" === S.toString() && M.push({
                      label: g,
                      value: (0, p.convertCookieMaxAge)(h, {
                        day: b,
                        days: w,
                        minute: D,
                        minutes: I,
                        session: E
                      }),
                      id: "duration"
                    }), null !== e && M.push({
                      label: c,
                      value: e ? C : v,
                      id: "cookieRefresh"
                    }), s && M.push({
                      label: u,
                      value: (0, p.convertDomain)(s, a, d),
                      id: "domain"
                    }), i && "" !== U && M.push({
                      label: y || "Purposes",
                      value: U,
                      id: "purposes"
                    }), i && "" !== V && M.push({
                      label: "Special Purposes",
                      value: V,
                      id: "specialPurposes"
                    }), n && M.push({
                      label: "Description",
                      value: n,
                      id: "description"
                    }), null != L && M.push({
                      label: "Opt-Out",
                      value: L ? C : v,
                      id: "optOut"
                    }), T.push((0, o._)((0, r._)({
                      id: null != f ? f : l,
                      name: null != f ? f : l
                    }, n && {
                      description: n
                    }), {
                      body: M
                    }));
                  }), i && (null == _ || _.map(function (t) {
                    var e = t.domain,
                      n = t.use;
                    L.push({
                      id: e,
                      name: e,
                      body: _toConsumableArray(n ? [{
                        label: y || "Purposes",
                        value: n,
                        id: "domains"
                      }] : [])
                    });
                  })), T.length > 0 && (e.disclosures = T), L.length > 0 && (e.domains = L)), l.label = 4;
                case 4:
                  return [2, e];
              }
            });
          }).call(this);
        }
      }, {
        key: "applyConsents",
        value: function applyConsents(t, e, n, i) {
          return (0, s._)(function () {
            var s, r, o, a, c, u, d, h, g, f, m, S, b, w;
            return (0, l._)(this, function (l) {
              var _this4 = this;
              switch (l.label) {
                case 0:
                  if (!this.consent) throw Error("No consents");
                  if (r = this.consent.hash !== t, this.consent.interaction || (this.consent.interaction = r ? "user" : null != e ? e : "user"), o = "true" === window.ucSkipGtagUpdates, this.gcm && !o && this.gcm.apply(this.consent.type, this.dps.services, this.advertiserConsentModeEnabled ? null == (s = this.tcf) ? void 0 : s.vendors[755] : void 0), this.uet && this.uet.apply(this.dps.services, this.consent.type), this.acs && this.acs.apply(this.dps.services, this.consent.type), this.clarity && this.clarity.apply(this.dps.services, this.consent.type), !r) return [3, 2];
                  return [4, this.consentService.saveConsentLocally(this.consent, this.dps, this.isWixTheme)];
                case 1:
                  l.sent(), this.gpp && (a = "", (0, v.isUsConsentModel)(this.consent) && (a = this.consent.usflString || this.consent.usnatString || "", this.gpp.setUsString(a), (c = a.split("~")[1]) && (this.shouldNotifySectionChange = {
                    sectionName: this.gpp.getLegalSection(),
                    sectionString: c
                  })), (0, v.isTcfConsentModel)(this.consent) && (a = this.consent.tcString, this.shouldNotifySectionChange = {
                    sectionName: "tcfeuv2",
                    sectionString: a
                  })), l.label = 2;
                case 2:
                  if (setTimeout(function () {
                    _this4.unblockScriptsWithConsent();
                  }, 0), !(this.customEventService || this.dataLayerService)) return [3, 5];
                  return [4, this.getConsentDetails(i)];
                case 3:
                  if ((u = l.sent()) && (this.customEventService.dispatchConsentDetails(u), null == (d = this.dataLayerService) || d.push(C.V2BridgeCustomEvents.getConsentDetailsV2(u))), !this.isWixTheme) return [3, 5];
                  return [4, this.getCategoryConsentDetails(i)];
                case 4:
                  (h = l.sent()) && this.customEventService.dispatchCategoryConsentDetails(h), l.label = 5;
                case 5:
                  if (!r) return [3, 7];
                  return this.saveConsentRemotely().catch(function () {
                    p.UCConsole.error("CmpController - saveConsentRemotely", "Could not save consents");
                  }), f = (g = this.customEventService).dispatch, m = ["UC_CONSENT_CHANGED"], [4, this.getConsentDetails()];
                case 6:
                  return f.apply(g, m.concat([l.sent()])), [3, 8];
                case 7:
                  (null == (S = this.localStorageService.getUcData()) ? void 0 : S.consent) || (b = this.consentService.mapServicesData(this.dps.services), this.isWixTheme ? (w = this.consentService.mapCategoriesData(this.dps.categories), this.localStorageService.setConsentData({
                    services: b,
                    categories: w
                  })) : this.localStorageService.setConsentData({
                    services: b
                  })), l.label = 8;
                case 8:
                  return y.webSdkEvents.emit("CONSENTS_APPLIED", {
                    fromEmbeddings: n
                  }), [2];
              }
            });
          }).call(this);
        }
      }, {
        key: "getPrivacyButtonTheme",
        value: function getPrivacyButtonTheme(t) {
          var e = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
          return this.theme.getPrivacyButtonTheme({
            custom: t,
            direction: e
          });
        }
      }, {
        key: "isPrivacyNoticeDismissed",
        value: function isPrivacyNoticeDismissed() {
          return "accepted" === this.localStorageService.getPrivacyNoticeStatus();
        }
      }, {
        key: "setPrivacyNoticeStatus",
        value: function setPrivacyNoticeStatus() {
          this.localStorageService.setPrivacyNoticeStatus("accepted");
        }
      }, {
        key: "getPrivacyNoticeTheme",
        value: function getPrivacyNoticeTheme(t) {
          var e = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
          return this.theme.getPrivacyNoticeTheme({
            custom: t,
            direction: e
          });
        }
      }, {
        key: "getEmbeddingTheme",
        value: function getEmbeddingTheme(t) {
          var e = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
          return this.theme.getEmbeddingsTheme({
            custom: t,
            direction: e
          });
        }
      }, {
        key: "getCmpTheme",
        value: function getCmpTheme(t, e) {
          var n = this.languages.getLanguageScreenDirection(this.ui.getLanguage());
          return this.theme.getCmpTheme(t, {
            custom: e,
            direction: n
          });
        }
      }, {
        key: "getThemeDefaults",
        value: function getThemeDefaults() {
          this.theme.getThemeDefaults();
        }
      }, {
        key: "updateTheme",
        value: function updateTheme(t) {
          t && (this.theme = new (0, u.ThemeModel)(t));
        }
      }, {
        key: "getCmpConfig",
        value: function getCmpConfig() {
          return (0, s._)(function () {
            var t, e;
            return (0, l._)(this, function (n) {
              return [2, {
                i18n: (0, r._)({}, (null == (t = this.i18n) ? void 0 : t.base.poweredBy.isEnabled) && {
                  poweredBy: null == (e = this.i18n) ? void 0 : e.base.poweredBy
                })
              }];
            });
          }).call(this);
        }
      }, {
        key: "getServices",
        value: function getServices() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return [2, Object.entries(this.dps.services)];
            });
          }).call(this);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return [2, Object.entries(this.dps.categories)];
            });
          }).call(this);
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          return (0, s._)(function () {
            return (0, l._)(this, function (t) {
              return [2, Object.entries(this.languages.languages)];
            });
          }).call(this);
        }
      }, {
        key: "reset",
        value: function reset() {
          var t, e;
          null == (t = this.tcf) || t.resetTcModel(), null == (e = this.dps) || e.resetDpsModel();
        }
      }, {
        key: "getServicesBaseInfo",
        value: function getServicesBaseInfo() {
          return (0, s._)(function () {
            var t, e, _n;
            return (0, l._)(this, function (i) {
              var _this5 = this;
              switch (i.label) {
                case 0:
                  return [4, this.initI18nData()];
                case 1:
                  if (i.sent(), t = Object.keys(this.dps.services), e = this.dps.services, !this.i18n) return p.UCConsole.error("CmpController - getServicesBaseInfo", "Could not initialize i18n data."), [2, []];
                  return _n = function n(t, e) {
                    return (0, s._)(function () {
                      var i, r, o, a, c, u, d, h, p;
                      return (0, l._)(this, function (g) {
                        switch (g.label) {
                          case 0:
                            if (!(r = e[t])) return [2, null];
                            return o = this.i18n.services[t], a = Object.values((null == r ? void 0 : r.subservices) || {}), c = Object.keys((null == r ? void 0 : r.subservices) || {}), p = {
                              categorySlug: r.category,
                              consent: {
                                status: null != (u = null == (i = r.consent) ? void 0 : i.given) && u,
                                history: []
                              },
                              description: (null == o ? void 0 : o.description) || "",
                              fetchSubServices: function fetchSubServices() {
                                return (0, s._)(function () {
                                  return (0, l._)(this, function (t) {
                                    switch (t.label) {
                                      case 0:
                                        return [4, Promise.all(c.map(function (t) {
                                          return _n(t, r.subservices || {});
                                        }))];
                                      case 1:
                                        return [2, t.sent().filter(function (t) {
                                          return null !== t;
                                        })];
                                    }
                                  });
                                })();
                              },
                              id: null == o ? void 0 : o.id,
                              isEssential: r.essential,
                              isHidden: null != (d = r.hidden) && d,
                              legalBasis: (null == o ? void 0 : o.legalBasis) || [],
                              name: (null == o ? void 0 : o.name) || r.processorId,
                              processorId: r.processorId
                            }, [4, Promise.all(c.map(function (t) {
                              return _n(t, r.subservices || {});
                            }))];
                          case 1:
                            return [2, (p.subServices = g.sent().filter(function (t) {
                              return null !== t;
                            }), p.subServicesLength = a.length, p.usesThirdCountry = null != (h = r.thirdCountryDataTransfer) && h, p.version = r.version, p)];
                        }
                      });
                    }).call(_this5);
                  }, [4, Promise.all(t.map(function (t) {
                    return _n(t, e);
                  }))];
                case 2:
                  return [2, i.sent().filter(function (t) {
                    return null !== t;
                  })];
              }
            });
          }).call(this);
        }
      }, {
        key: "shouldRenderWatermark",
        value: function shouldRenderWatermark() {
          return this.watermark;
        }
      }]);
    }();
  }), n("8bfDC", function (n, i) {
    t(n.exports, "GdprI18nModel", function () {
      return r;
    }), t(n.exports, "isGdprI18nData", function () {
      return o;
    });
    var s = e("14GuN");
    var r = /*#__PURE__*/function (_s$I18nModel) {
      function r(t) {
        var _this6;
        _classCallCheck(this, r);
        _this6 = _callSuper(this, r, [t]), _this6.gdpr = t.gdpr;
        return _this6;
      }
      _inherits(r, _s$I18nModel);
      return _createClass(r);
    }(s.I18nModel);
    var o = function o(t) {
      return "gdpr" in t;
    };
  }), n("gUC9p", function (n, i) {
    t(n.exports, "TcfI18nModel", function () {
      return r;
    }), t(n.exports, "isTcfI18nData", function () {
      return o;
    });
    var s = e("14GuN");
    var r = /*#__PURE__*/function (_s$I18nModel2) {
      function r(t) {
        var _this7;
        _classCallCheck(this, r);
        _this7 = _callSuper(this, r, [t]), _this7.tcf = t.tcf;
        return _this7;
      }
      _inherits(r, _s$I18nModel2);
      return _createClass(r);
    }(s.I18nModel);
    var o = function o(t) {
      return "tcf" in t;
    };
  }), n("6YDm0", function (n, i) {
    t(n.exports, "UsI18nModel", function () {
      return r;
    }), t(n.exports, "isCcpaI18nData", function () {
      return o;
    });
    var s = e("14GuN");
    var r = /*#__PURE__*/function (_s$I18nModel3) {
      function r(t) {
        var _this8;
        _classCallCheck(this, r);
        _this8 = _callSuper(this, r, [t]), _this8.ccpa = t.ccpa;
        return _this8;
      }
      _inherits(r, _s$I18nModel3);
      return _createClass(r);
    }(s.I18nModel);
    var o = function o(t) {
      return "ccpa" in t;
    };
  }), n("jRIZe", function (n, i) {
    t(n.exports, "AcsModel", function () {
      return a;
    });
    var s = e("7qJ26"),
      r = e("e08dO"),
      o = e("evP80");
    var a = /*#__PURE__*/function () {
      function a(t, e) {
        _classCallCheck(this, a);
        this.customEventService = t, this.userLocation = e, o.default.amznConsent();
      }
      return _createClass(a, [{
        key: "getAcsState",
        value: function getAcsState(t) {
          return Object.entries(t).reduce(function (t, e) {
            var n,
              i,
              r,
              o,
              _a,
              l,
              c = (0, s._)(e, 2)[1];
            return (null == (n = c.acs) ? void 0 : n.adStorage) !== void 0 && (t.adStorage = (null == (i = c.consent) ? void 0 : i.type) === "EXPLICIT" && (null == (r = c.consent) ? void 0 : r.given) && (!0 === t.adStorage || void 0 === t.adStorage)), (null == (o = c.acs) ? void 0 : o.userData) !== void 0 && (t.userData = (null == (_a = c.consent) ? void 0 : _a.type) === "EXPLICIT" && (null == (l = c.consent) ? void 0 : l.given) && (!0 === t.userData || void 0 === t.userData)), t;
          }, {});
        }
      }, {
        key: "push",
        value: function push(t) {
          var e = t.adStorage,
            n = t.userData;
          this.userLocation ? (window.amznConsent().setCountryCode(this.userLocation.country).setEnableAdStorage(e).setEnableUserData(n).build(), this.customEventService.dispatchUcAcsUpdateEvent(t)) : r.UCConsole.warn("AcsModel - Unable to fetch location", "userLocation: ".concat(this.userLocation, ", acsData: ").concat(t));
        }
      }, {
        key: "apply",
        value: function apply(t, e) {
          if ((null == (o = window.ucCmpConfig) || null == (r = o.acsConfig) || !r.disabled) && "EXPLICIT" === e) {
            var n = this.getAcsState(t),
              i = n.adStorage,
              s = n.userData;
            if (void 0 !== i && void 0 !== s) {
              var r,
                o,
                _a2,
                l = {
                  adStorage: i,
                  userData: s,
                  countryCode: (null == (_a2 = this.userLocation) ? void 0 : _a2.country) || ""
                };
              this.push(l);
            }
          }
        }
      }]);
    }();
  }), n("evP80", function (n, i) {
    t(n.exports, "default", function () {
      return r;
    });
    var s = e("kTJf3"),
      r = {
        amznConsent: function amznConsent() {
          "use strict";

          var t,
            e,
            n = function n(t) {
              return !(!t || !/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(t)) && t.split(".").every(function (t) {
                var e = parseInt(t, 10);
                return e >= 0 && e <= 255;
              });
            },
            i = function i(t) {
              return !isNaN(Date.parse(t));
            },
            r = "Strict",
            o = "GRANTED",
            a = "DENIED",
            l = {
              geo: {
                ipAddress: "",
                countryCode: ""
              },
              amazonConsentFormat: {
                amznAdStorage: "DENIED",
                amznUserData: "DENIED"
              },
              gpp: "",
              tcf: "",
              timestamp: "",
              version: "1"
            };
          var c = /*#__PURE__*/function () {
            function c() {
              _classCallCheck(this, c);
              this.defaultVersion = "1";
            }
            return _createClass(c, [{
              key: "getConsentData",
              value: function getConsentData(t) {
                var e, n;
                try {
                  if ("string" == typeof t) e = JSON.parse(t);else {
                    if ("object" != _typeof(t) || null === t) throw Error("Input must be either a JSON string or an object");
                    e = t;
                  }
                  return n = this.isValidFormattedOutput(e) ? e : this.formatOutput(e), this.validateFormattedOutput(n), n;
                } catch (t) {
                  return console.error("Error in getConsentData:", t.message), null;
                }
              }
            }, {
              key: "validateInput",
              value: function validateInput(t) {
                var e;
                if (void 0 !== t.version && ("number" != typeof t.version || 1 !== t.version)) throw Error("Invalid version. Must be 1 if provided");
                if (void 0 !== t.ipAddress && ("string" != typeof t.ipAddress || !n(t.ipAddress))) throw Error("Invalid IP address");
                if (void 0 !== t.countryCode && ("string" != typeof t.countryCode || 2 !== (null == (e = t.countryCode) ? void 0 : e.length))) throw Error("Invalid country code. Must be a 2-letter code");
                if (void 0 !== t.enableAdStorage && "boolean" != typeof t.enableAdStorage) throw Error("enableAdStorage must be a boolean");
                if (void 0 !== t.enableUserData && "boolean" != typeof t.enableUserData) throw Error("enableUserData must be a boolean");
                if (void 0 !== t.gpp && "string" != typeof t.gpp) throw Error("gpp must be a string");
                if (void 0 !== t.tcf && "string" != typeof t.tcf) throw Error("tcf must be a string");
                if (t.timestamp && !i(t.timestamp)) throw Error("Invalid timestamp");
              }
            }, {
              key: "formatOutput",
              value: function formatOutput(t) {
                return this.validateInput(t), {
                  geo: {
                    ipAddress: t.ipAddress,
                    countryCode: t.countryCode
                  },
                  amazonConsentFormat: {
                    amznAdStorage: t.enableAdStorage ? o : a,
                    amznUserData: t.enableUserData ? o : a
                  },
                  gpp: t.gpp,
                  tcf: t.tcf,
                  timestamp: t.timestamp || new Date().toISOString(),
                  version: t.version ? t.version.toString() : this.defaultVersion
                };
              }
            }, {
              key: "isValidFormattedOutput",
              value: function isValidFormattedOutput(t) {
                return "object" == _typeof(t) && null !== t && "geo" in t && "amazonConsentFormat" in t && "gpp" in t && "tcf" in t && "timestamp" in t && "version" in t;
              }
            }, {
              key: "validateFormattedOutput",
              value: function validateFormattedOutput(t) {
                var e, s, r, l, _c;
                if (!t.geo && !t.amazonConsentFormat) throw Error("Either geo or amazonConsentFormat must be provided");
                if (void 0 !== (null == (e = t.geo) ? void 0 : e.ipAddress) && !n(null == (s = t.geo) ? void 0 : s.ipAddress)) throw Error("Invalid IP address in formatted output");
                if ((null == (r = t.geo) ? void 0 : r.countryCode) && 2 !== t.geo.countryCode.length) throw Error("Invalid country code in formatted output");
                if ((null == (l = t.amazonConsentFormat) ? void 0 : l.amznAdStorage) && ![o, a].includes(t.amazonConsentFormat.amznAdStorage)) throw Error("Invalid amznAdStorage value in formatted output");
                if ((null == (_c = t.amazonConsentFormat) ? void 0 : _c.amznUserData) && ![o, a].includes(t.amazonConsentFormat.amznUserData)) throw Error("Invalid amznUserData value in formatted output");
                if (void 0 !== t.gpp && "string" != typeof t.gpp) throw Error("Invalid gpp in formatted output");
                if (void 0 !== t.tcf && "string" != typeof t.tcf) throw Error("Invalid tcf in formatted output");
                if (!i(t.timestamp)) throw Error("Invalid timestamp in formatted output");
                if ("1" !== t.version) throw Error("Invalid version in formatted output");
              }
            }]);
          }();
          var u = /*#__PURE__*/function () {
            function u() {
              _classCallCheck(this, u);
              this.cookieName = "amzn_consent", this.cookieTtl = 24192e5, this.COOKIE_CHANGE_EVENT = "amznConsentChange", this.defaultConsent = (0, s._)({}, l);
            }
            return _createClass(u, [{
              key: "dispatchCookieChange",
              value: function dispatchCookieChange(t) {
                var e = new CustomEvent("amznConsentChange", {
                  detail: {
                    consent: t
                  }
                });
                window.dispatchEvent(e);
              }
            }, {
              key: "setConsentCookie",
              value: function setConsentCookie(t) {
                var e = JSON.stringify(t),
                  n = new Date();
                n.setTime(n.getTime() + this.cookieTtl), document.cookie = "".concat(this.cookieName, "=").concat(encodeURIComponent(e), "; expires=").concat(n.toUTCString(), "; path=/; SameSite=").concat(r, "; Secure"), this.dispatchCookieChange(t);
              }
            }, {
              key: "isValidConsentCookie",
              value: function isValidConsentCookie(t) {
                return t && "object" == _typeof(t) && "amazonConsentFormat" in t && "version" in t && "timestamp" in t;
              }
            }, {
              key: "getConsentCookie",
              value: function getConsentCookie() {
                var _this9 = this;
                var t = document.cookie.split("; ").find(function (t) {
                  return t.startsWith("".concat(_this9.cookieName, "="));
                });
                if (!t) return null;
                try {
                  var e = decodeURIComponent(t.split("=")[1]),
                    n = JSON.parse(e);
                  return this.isValidConsentCookie(n) ? n : null;
                } catch (t) {
                  return console.error("Error parsing consent cookie:", t), null;
                }
              }
            }, {
              key: "setDefaultConsent",
              value: function setDefaultConsent() {
                this.setConsentCookie(this.defaultConsent);
              }
            }, {
              key: "clearConsentCookie",
              value: function clearConsentCookie() {
                document.cookie = "".concat(this.cookieName, "=;\n    expires=Thu, 01 Jan 1970 00:00:00 UTC;\n    path=/;\n    SameSite=").concat(r, ";\n    Secure"), this.dispatchCookieChange(null);
              }
            }]);
          }();
          var d = /*#__PURE__*/function () {
            function d() {
              _classCallCheck(this, d);
              this.data = {};
            }
            return _createClass(d, [{
              key: "setIpAddress",
              value: function setIpAddress(t) {
                if ("string" != typeof t) throw TypeError("IP address must be a string");
                if (!n(t)) throw Error("Invalid IP address");
                return this.data.ipAddress = t, this;
              }
            }, {
              key: "setCountryCode",
              value: function setCountryCode(t) {
                if ("string" != typeof t || 2 !== t.length) throw TypeError("Country code must be a 2-letter string");
                return this.data.countryCode = t, this;
              }
            }, {
              key: "setEnableAdStorage",
              value: function setEnableAdStorage(t) {
                if ("boolean" != typeof t) throw TypeError("enableAdStorage must be a boolean");
                return this.data.enableAdStorage = t, this;
              }
            }, {
              key: "setEnableUserData",
              value: function setEnableUserData(t) {
                if ("boolean" != typeof t) throw TypeError("enableUserData must be a boolean");
                return this.data.enableUserData = t, this;
              }
            }, {
              key: "setGpp",
              value: function setGpp(t) {
                if ("string" != typeof t) throw TypeError("GPP must be a string");
                return this.data.gpp = t, this;
              }
            }, {
              key: "setTcf",
              value: function setTcf(t) {
                if ("string" != typeof t) throw TypeError("TCF must be a string");
                return this.data.tcf = t, this;
              }
            }, {
              key: "setVersion",
              value: function setVersion(t) {
                if ("number" != typeof t || 1 !== t) throw TypeError("Version must be the number 1");
                return this.data.version = t, this;
              }
            }, {
              key: "setTimestamp",
              value: function setTimestamp(t) {
                if ("string" != typeof t || isNaN(Date.parse(t))) throw TypeError("Timestamp must be a valid date string");
                return this.data.timestamp = t, this;
              }
            }, {
              key: "build",
              value: function build() {
                var t = new c(),
                  e = new u(),
                  n = t.getConsentData(this.data);
                return n && e.setConsentCookie(n), n;
              }
            }]);
          }();
          "u" > (typeof window === "undefined" ? "undefined" : _typeof(window)) && (t = new c(), (e = new u()).getConsentCookie() || e.setDefaultConsent(), window.amznConsent = function () {
            for (var n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
            if (0 === i.length) return new d();
            try {
              var r = t.getConsentData(i[0]);
              return r && e.setConsentCookie(r), r;
            } catch (t) {
              return console.error("Error in amznConsent:", t.message), null;
            }
          });
        }
      };
  }), n("fhM78", function (e, n) {
    function i(t, e) {
      var n, i;
      null == (n = (i = window).clarity) || n.call(i, "consentv2", {
        source: 151,
        ad_Storage: t,
        analytics_Storage: e
      });
    }
    t(e.exports, "ClarityModel", function () {
      return s;
    });
    var s = /*#__PURE__*/function () {
      function s(t) {
        _classCallCheck(this, s);
        this.customEventService = t, window.clarity = window.clarity || function () {
          for (var t, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          var s = window.clarity;
          s.q = null != (t = s.q) ? t : [], s.q.push(n);
        };
      }
      return _createClass(s, [{
        key: "initDefaultsDenied",
        value: function initDefaultsDenied() {
          var t, e;
          null != (e = window.ucCmpConfig) && null != (t = e.clarityConfig) && t.disabled || i("denied", "denied");
        }
      }, {
        key: "getClarityState",
        value: function getClarityState(t) {
          var e,
            n,
            i = null == t ? void 0 : t.jzMEq56vW;
          return {
            granted: (null == i || null == (e = i.consent) ? void 0 : e.type) === "EXPLICIT" && (null == i || null == (n = i.consent) ? void 0 : n.given) === !0
          };
        }
      }, {
        key: "push",
        value: function push(t) {
          i(t.adStorage, t.analyticsStorage), this.customEventService.dispatchUcClarityUpdateEvent(t);
        }
      }, {
        key: "apply",
        value: function apply(t, e) {
          if (null == (i = window.ucCmpConfig) || null == (n = i.clarityConfig) || !n.disabled) {
            var n,
              i,
              _s = this.getClarityState(t).granted,
              r = "EXPLICIT" === e && !0 === _s;
            this.push({
              adStorage: r ? "granted" : "denied",
              analyticsStorage: r ? "granted" : "denied"
            });
          }
        }
      }]);
    }();
  }), n("N85OF", function (n, i) {
    t(n.exports, "getCombinedCmpData", function () {
      return d;
    }), t(n.exports, "resolveAbortController", function () {
      return p;
    });
    var s = e("7qJ26"),
      r = e("bY6u9"),
      o = e("2hIpA"),
      a = e("1ylHI"),
      l = e("dXOhQ"),
      c = e("e08dO"),
      u = function u(t) {
        return (0, c.sha256)(t.toString());
      },
      d = function d(t, e) {
        var n,
          i,
          c,
          d,
          p,
          g,
          v,
          f = t.consent,
          m = e || {},
          C = m.consentData,
          S = m.gpp,
          y = Date.now();
        f.uiVersion || (f.uiVersion = (null == (c = window.__ucMock) ? void 0 : c.uiVersion) || (null == C ? void 0 : C.uiVersion) || (null == e ? void 0 : e.uiVersion)), !f.controllerId && (null == C ? void 0 : C.controllerId) && (f.controllerId = C.controllerId), !f.controllerId && (null == (d = window.__ucMock) ? void 0 : d.controllerId) && (f.controllerId = window.__ucMock.controllerId), f.createdAt || (f.createdAt = (null == C ? void 0 : C.createdAt) || y), f.updatedAt || (t.consent.updatedAt = (null == C ? void 0 : C.updatedAt) || y), !f.tcString && (null == C ? void 0 : C.tcString) && (t.consent.tcString = C.tcString), "onInitialPageLoad" === t.consent.updatedBy && (null == C ? void 0 : C.updatedBy) && (t.consent.updatedBy = C.updatedBy);
        var b = !a.EU_COUNTRIES.includes((null == e || null == (p = e.location) ? void 0 : p.country.toUpperCase()) || "") && !0 === navigator.globalPrivacyControl && (t.ui.gpcSignalHonoured || "US" === t.setting.type);
        if ((b && "onDenyAllServices" === t.consent.updatedBy && (null == C ? void 0 : C.gpcSignal) ? t.consent.gpcSignal = !0 : t.consent.gpcSignal = !1, n = t.consent.updatedAt, (i = t.ui.renewConsentsTimestamp) && n && Date.now() / 1e3 > i && n / 1e3 < i ? 0 : 1) ? function (t, e) {
          if (e && t && (new Date().getTime() - t) / 864e5 > e) return !0;
          return !1;
        }(t.consent.updatedAt, t.ui.reshowAfterDays) ? t.ui.initialView = "first" : t.ui.initialView ? ((null == C ? void 0 : C.type) === "EXPLICIT" || (null == C ? void 0 : C.updatedBy) === "onMobileSessionRestore") && (t.ui.initialView = t.ui.closedView) : t.ui.initialView = (null == C ? void 0 : C.type) === "EXPLICIT" || (null == C ? void 0 : C.updatedBy) === "onMobileSessionRestore" ? t.ui.closedView : "first" : t.ui.initialView = "first", b && (null == C ? void 0 : C.gpcSignal) === !0 && ("user" !== C.interaction ? t.ui.initialView = t.ui.showCmpForGpc ? "first" : t.ui.closedView : t.ui.initialView = t.ui.closedView), b && (!C || "IMPLICIT" === C.type)) {
          var w = new (0, o.DpsModel)(t.dps);
          if (w.denyAll(), t.dps = w, t.consent.interaction = "gpc", t.consent.gpcSignal = !0, t.ui.showGpcLabel = !0, t.consent.type = "EXPLICIT", t.consent.updatedBy = "onDenyAllServices", C && (t.consent.updatedAt = y, t.consent.hash = u(y)), t.ui.initialView = t.ui.showCmpForGpc ? "first" : t.ui.closedView, S) S.setHasOptedOut(!0, t.consent.type), S.generateUsString(), "usfl" === S.getLegalSection() ? t.consent.usflString = S.usString : t.consent.usnatString = S.usString;else if ("US" === t.setting.type) {
            var D = t.consent.ccpaString;
            t.consent.ccpaString = D.charAt(0) + D.charAt(1) + "Y" + D.charAt(3);
          }
          t.consent.status = w.getConsentStatus();
        } else if (null == C ? void 0 : C.status) {
          t.consent.gpcSignal = !1, t.consent.type = C.type, t.consent.serviceIds = C.serviceIds, t.dps.services = Object.entries(t.dps.services).reduce(function (t, e) {
            var n,
              i,
              r = (0, s._)(e, 2),
              o = r[0],
              a = r[1];
            return "added" !== a.status && (null == a ? void 0 : a.consent) && (a.consent.given = a.essential || "ALL_ACCEPTED" === C.status || "SOME_ACCEPTED" === C.status && (null == (n = C.serviceIds) ? void 0 : n.includes(o)) || "SOME_DENIED" === C.status && !(null == (i = C.serviceIds) ? void 0 : i.includes(o)), a.consent.type = C.type), t[o] = a, t;
          }, {}), t.dps.categories = (0, r.getCategoriesWithServicesConsent)(t.dps.categories, t.dps.services);
          var I = new (0, o.DpsModel)(t.dps);
          t.consent.status = h(t, I, C);
        } else {
          var E = new (0, o.DpsModel)(t.dps),
            A = h(t, E, C);
          t.consent.serviceIds = E.getConsentServiceIds(A), t.consent.status = A;
        }
        if (!t.consent.hash && (t.consent.hash = u(t.consent.updatedAt), C && C.hash && C.hash !== t.consent.hash && (t.consent.updatedBy = "onEssentialChange")), b && (null == C ? void 0 : C.gpcSignal) && (null == C ? void 0 : C.updatedBy) === "onDenyAllServices" && (t.ui.showCmpForGpc && (t.consent.gpcSignal = !0), t.ui.showGpcLabel = !0, (null == C ? void 0 : C.interaction) === "gpc" && t.ui.showCmpForGpc && "US" === t.setting.type && (t.ui.initialView = "first")), t.consent.required = t.ui.initialView !== t.ui.closedView, null == (v = t.i18n) || null == (g = v.base) ? void 0 : g.links) {
          var _ = t.i18n.base.links;
          ["cookiePolicy", "imprint", "privacyPolicy"].forEach(function (t) {
            var e = _[t];
            (null == e ? void 0 : e.url) && (e.url = (0, l.sanitizeUrl)(e.url));
          });
        }
        return t;
      };
    function h(t, e, n) {
      return "US" === t.setting.type && (null == n ? void 0 : n.status) ? n.status : e.getConsentStatus();
    }
    function p() {
      return window.__ucAbortController || AbortController;
    }
  }), n("dXOhQ", function (e, n) {
    t(e.exports, "sanitizeUrl", function () {
      return i;
    });
    function i(t, e) {
      if (!t || "string" != typeof t || "" === t.trim()) return null != t && "string" != typeof t ? console.warn("Invalid URL detected: not a string", t) : null === t ? console.warn("Invalid URL detected: null") : void 0 === t ? console.warn("Invalid URL detected: undefined") : "string" == typeof t && "" === t.trim() && console.warn("Invalid URL detected: empty string"), "";
      var n = t.trim();
      if (n.startsWith("#")) return n;
      if (n.startsWith("/")) {
        var i = e || window.location.origin;
        return "".concat(i).concat(n);
      }
      var s = /^https?:\/\//i.test(n) ? n : "https://".concat(n);
      try {
        return new URL(s), s;
      } catch (e) {
        return console.warn("Invalid URL detected:", t), t;
      }
    }
  }), n("9Ijo5", function (e, n) {
    t(e.exports, "isCipaRegionApplicable", function () {
      return i;
    }), t(e.exports, "getCipaInitialView", function () {
      return s;
    });
    var i = function i(t, e) {
        return !!t && t.regions.some(function (t) {
          return ["ALL", "".concat(null == e ? void 0 : e.country).concat(null == e ? void 0 : e.region), "".concat(null == e ? void 0 : e.country)].includes(t);
        });
      },
      s = function s(t, e, n, i) {
        return t && !e ? i : n;
      };
  });
})();