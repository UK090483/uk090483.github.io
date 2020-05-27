!function (e, t) { if ("function" == typeof define && define.amd) define(["exports"], t); else if ("undefined" != typeof exports) t(exports); else { var o = {}; t(o), e.bodyScrollLock = o } }(this, function (exports) { "use strict"; function i(e) { if (Array.isArray(e)) { for (var t = 0, o = Array(e.length); t < e.length; t++)o[t] = e[t]; return o } return Array.from(e) } Object.defineProperty(exports, "__esModule", { value: !0 }); var l = !1; if ("undefined" != typeof window) { var e = { get passive() { l = !0 } }; window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e) } function d(t) { return u.some(function (e) { return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t)) }) } function c(e) { var t = e || window.event; return !!d(t.target) || (1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)) } function o() { setTimeout(function () { void 0 !== m && (document.body.style.paddingRight = m, m = void 0), void 0 !== f && (document.body.style.overflow = f, f = void 0) }) } var a = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && 1 < window.navigator.maxTouchPoints), u = [], s = !1, v = -1, f = void 0, m = void 0; exports.disableBodyScroll = function (r, e) { if (a) { if (!r) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."); if (r && !u.some(function (e) { return e.targetElement === r })) { var t = { targetElement: r, options: e || {} }; u = [].concat(i(u), [t]), r.ontouchstart = function (e) { 1 === e.targetTouches.length && (v = e.targetTouches[0].clientY) }, r.ontouchmove = function (e) { var t, o, n, i; 1 === e.targetTouches.length && (o = r, i = (t = e).targetTouches[0].clientY - v, d(t.target) || (o && 0 === o.scrollTop && 0 < i || (n = o) && n.scrollHeight - n.scrollTop <= n.clientHeight && i < 0 ? c(t) : t.stopPropagation())) }, s || (document.addEventListener("touchmove", c, l ? { passive: !1 } : void 0), s = !0) } } else { n = e, setTimeout(function () { if (void 0 === m) { var e = !!n && !0 === n.reserveScrollBarGap, t = window.innerWidth - document.documentElement.clientWidth; e && 0 < t && (m = document.body.style.paddingRight, document.body.style.paddingRight = t + "px") } void 0 === f && (f = document.body.style.overflow, document.body.style.overflow = "hidden") }); var o = { targetElement: r, options: e || {} }; u = [].concat(i(u), [o]) } var n }, exports.clearAllBodyScrollLocks = function () { a ? (u.forEach(function (e) { e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null }), s && (document.removeEventListener("touchmove", c, l ? { passive: !1 } : void 0), s = !1), u = [], v = -1) : (o(), u = []) }, exports.enableBodyScroll = function (t) { if (a) { if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."); t.ontouchstart = null, t.ontouchmove = null, u = u.filter(function (e) { return e.targetElement !== t }), s && 0 === u.length && (document.removeEventListener("touchmove", c, l ? { passive: !1 } : void 0), s = !1) } else (u = u.filter(function (e) { return e.targetElement !== t })).length || o() } });